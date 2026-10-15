import { h, mount, toast } from "../ui.js";
import { api, session } from "../api.js";
import { COURSE, formOfGroup, formByKey } from "../../data/course.js";


export async function render(el) {
  const user = await api.get("me");
  session.updateUser(user);
  const form = h(
    "form",
    { class: "card", onsubmit: async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      if (!data.newPassword) delete data.newPassword;
      if (user.role === "student") data.hideFromRating = !form.querySelector("[name=showInRating]").checked;
      delete data.showInRating;
      try {
        const res = await api.put("me", data);
        session.updateUser(res.user);
        toast("Ma'lumotlar saqlandi", "ok");
        form.querySelectorAll("input[type=password]").forEach((i) => (i.value = ""));
      } catch (ex) {
        toast(ex.message, "error");
      }
    } },
    h("h2", {}, "Shaxsiy ma'lumotlar"),
    h("label", { class: "field" }, h("span", {}, "Ism-familiya"), h("input", { name: "name", value: user.name, required: true })),
    h("label", { class: "field" }, h("span", {}, "Ta'lim muassasasi"), h("input", { name: "college", value: user.college || "" })),
    user.role === "student" && groupField(user),
    user.role === "student" && h("label", { class: "check-row" }, h("input", { type: "checkbox", name: "showInRating", checked: !user.hideFromRating }), " Reytingda ismim ko'rinsin (ism va familiyaning bosh harfi)"),
    h("h3", {}, "Parolni o'zgartirish"),
    h("div", { class: "grid cols-2" },
      h("label", { class: "field" }, h("span", {}, "Joriy parol"), h("input", { name: "password", type: "password", autocomplete: "current-password" })),
      h("label", { class: "field" }, h("span", {}, "Yangi parol"), h("input", { name: "newPassword", type: "password", minlength: 6, autocomplete: "new-password" }))),
    h("button", { class: "btn", type: "submit" }, "Saqlash")
  );
  mount(
    el,
    h("div", { class: "page-head" }, h("h1", {}, "Profil ", h("span", { class: `role-chip ${user.role === "teacher" ? "teacher" : "student"}`, style: { fontSize: "0.8rem" } }, user.role === "teacher" ? "👩‍🏫 O'qituvchi" : "🎓 Talaba")), h("button", { class: "btn ghost", onclick: () => { session.clear(); location.hash = "#/"; setTimeout(() => location.reload(), 150); } }, "Chiqish")),
    h(
      "div",
      { class: "grid cols-2-1" },
      form,
      h(
        "div",
        { class: "card" },
        h("div", { class: "avatar xl" }, user.name.slice(0, 1).toUpperCase()),
        h("h3", {}, user.name),
        h("p", { class: "muted" }, user.email),
        h("dl", { class: "dl" },
          h("dt", {}, "Rol"), h("dd", {}, user.role === "teacher" ? "O'qituvchi" : "Talaba"),
          h("dt", {}, "Ro'yxatdan o'tgan"), h("dd", {}, new Date(user.createdAt).toLocaleDateString("uz-UZ")))
      )
    )
  );
}

/** Talaba profilida ta'lim shakli ko'rsatiladi; guruhni faqat o'z ta'lim shakli ichida o'zgartira oladi (shaklni o'qituvchi o'zgartiradi). */
function groupField(user) {
  const form = formByKey(user.studyForm) || formOfGroup(user.group);
  const groups = form ? form.groups : COURSE.groups || [];
  if (!groups.length) return h("label", { class: "field" }, h("span", {}, "Guruh"), h("input", { name: "group", value: user.group || "" }));
  return h("div", { class: "stack" },
    form && h("p", { class: "small" }, h("b", {}, "Ta'lim shakli: "), `${form.icon || ""} ${form.title}`),
    h("label", { class: "field" }, h("span", {}, "Guruh"), h("select", { name: "group" }, [...new Set(["", ...groups, user.group || ""])].map((g) => h("option", { value: g, selected: g === (user.group || "") }, g || "— tanlang —")))),
    form && h("p", { class: "muted small" }, "Ta'lim shaklini o'zgartirish uchun o'qituvchiga murojaat qiling."));
}
