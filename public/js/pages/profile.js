import { h, mount, toast } from "../ui.js";
import { showOwnKeyGuide } from "../ai-key-guide.js";
import { api, session } from "../api.js";
import { COURSE, formOfGroup, formByKey } from "../../data/course.js";
import { SUBJECT_KEY, currentSubjectKey } from "../../data/topics.js";


export async function render(el) {
  const user = await api.get("me");
  session.updateUser(user);
  const form = h(
    "form",
    { class: "card", onsubmit: async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      try {
        const res = await api.put("me", data);
        if (res.token) session.set(res.token, res.user);
        else session.updateUser(res.user);
        // Guruh o'zgarib, fan ham o'zgargan bo'lsa — ma'lumotlar yangi fan bo'yicha qayta yuklanadi
        if (user.role === "student" && currentSubjectKey() !== SUBJECT_KEY) return location.reload();
        toast("Ma'lumotlar saqlandi", "ok");
      } catch (ex) {
        toast(ex.message, "error");
      }
    } },
    h("h2", {}, "Shaxsiy ma'lumotlar"),
    h("label", { class: "field" }, h("span", {}, "Ism-familiya"), h("input", { name: "name", value: user.name, required: true })),
    h("label", { class: "field" }, h("span", {}, "Ta'lim muassasasi"), h("input", { name: "college", value: user.college || "" })),
    user.role === "student" && groupField(user),
    h("button", { class: "btn", type: "submit" }, "Saqlash")
  );
  const pw = (name, label, auto, extra = {}) => h("label", { class: "field" }, h("span", {}, label), h("input", { name, type: "password", required: true, autocomplete: auto, ...extra }));
  const pwForm = h("form", { class: "card stack", onsubmit: async (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(pwForm));
    if (d.newPassword !== d.confirm) return toast("Yangi parol va uning takrori mos kelmadi", "error");
    if (d.newPassword === d.password) return toast("Yangi parol joriy paroldan farq qilishi kerak", "error");
    try {
      const res = await api.put("me", { password: d.password, newPassword: d.newPassword });
      if (res.token) session.set(res.token, res.user);
      pwForm.reset();
      toast("Parol o'zgartirildi. Boshqa qurilmalarda qayta kirish talab qilinadi.", "ok");
    } catch (ex) {
      toast(ex.message, "error");
    }
  } },
    h("h3", {}, "🔑 Kirish parolini o'zgartirish"),
    pw("password", "Joriy parol", "current-password"),
    pw("newPassword", "Yangi parol (kamida 8 belgi)", "new-password", { minlength: 8 }),
    pw("confirm", "Yangi parolni takrorlang", "new-password", { minlength: 8 }),
    h("p", { class: "muted small" }, "Parolni unutgan bo'lsangiz, kirish oynasidagi «Parolni unutdim» orqali tiklang."),
    h("button", { class: "btn", type: "submit" }, "Parolni o'zgartirish"));
  mount(
    el,
    h("div", { class: "page-head" }, h("h1", {}, "Profil ", h("span", { class: `role-chip ${user.role === "teacher" ? "teacher" : "student"}`, style: { fontSize: "0.8rem" } }, user.role === "teacher" ? "👩‍🏫 O'qituvchi" : "🎓 Talaba")), h("button", { class: "btn ghost", onclick: () => { session.clear(); location.hash = "#/"; setTimeout(() => location.reload(), 150); } }, "Chiqish")),
    h(
      "div",
      { class: "grid cols-2-1" },
      h("div", { class: "stack" }, form, pwForm, user.role === "student" && aiKeyCard(user)),
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

/** Shaxsiy Gemini kaliti (ixtiyoriy): kiritilsa, talabaning AI tekshiruvlari uning o'z kaliti va limiti orqali bajariladi. */
function aiKeyCard(user) {
  const box = h("div", { class: "card stack" });
  const draw = (u) => {
    const inp = h("input", { type: "password", placeholder: "AIza…", autocomplete: "off", spellcheck: "false" });
    box.replaceChildren(
      h("h3", {}, "🤖 Shaxsiy Gemini kaliti (ixtiyoriy)"),
      h("p", { class: "muted small" }, "Kalit kiritsangiz, sizning AI tekshiruvlaringiz (nazorat savollari, masalalar, topshiriq va vazifalar, AI Ustoz) o'z bepul Gemini limitingiz orqali bajariladi va tez ishlaydi. Kiritmasangiz, sayt kaliti ishlatiladi. Baholash qoidalari o'zgarmaydi."),
      u.hasAiKey
        ? h("div", { class: "alert alert-success small" }, `✅ Kalit ulangan (…${u.aiKeyTail || "****"})${u.aiKeyAt ? ` · ${new Date(u.aiKeyAt).toLocaleDateString("uz-UZ")}` : ""}. Kalitning o'zi saytda shifrlangan holda saqlanadi va hech kimga ko'rsatilmaydi.`)
        : h("div", {}, h("ol", { class: "small" }, h("li", {}, "aistudio.google.com/apikey sahifasini oching va Google hisobingiz bilan kiring."), h("li", {}, "«Create API key» ni bosing va kalitni nusxalang (u «AIza» bilan boshlanadi)."), h("li", {}, "Kalitni pastdagi maydonga joylab, «Saqlash» ni bosing.")), h("button", { class: "btn small ghost", type: "button", onclick: () => showOwnKeyGuide("") }, "📖 Batafsil yo'riqnoma")),
      h("div", { class: "row wrap", style: { gap: "8px" } }, inp,
        h("button", { class: "btn", onclick: async (e) => {
          if (!inp.value.trim()) return toast("Kalitni kiriting", "warn");
          e.target.disabled = true;
          try { const r = await api.put("me/ai-key", { key: inp.value.trim() }); session.updateUser(r.user); toast(r.warning || "Kalit tekshirildi va saqlandi", r.warning ? "warn" : "ok"); draw(r.user); } catch (ex) { toast(ex.message, "error"); e.target.disabled = false; }
        } }, u.hasAiKey ? "Almashtirish" : "Saqlash"),
        u.hasAiKey && h("button", { class: "btn ghost danger", onclick: async () => {
          try { const r = await api.del("me/ai-key"); session.updateUser(r.user); toast("Kalit o'chirildi: endi sayt kaliti ishlatiladi", "ok"); draw(r.user); } catch (ex) { toast(ex.message, "error"); }
        } }, "O'chirish")),
      h("p", { class: "muted small" }, "Kalitni boshqalarga bermang. Kalit oshkor bo'lsa, uni Google AI Studio'da o'chirib, yangisini kiriting."));
  };
  draw(user);
  return box;
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
