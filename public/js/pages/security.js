// O'qituvchi paneli: test va topshiriqlar paytida qayd etilgan himoya hodisalari (ekran surati urinishi, oynadan chiqish).
import { h, mount, loading, fmtDate, emptyState } from "../ui.js";
import { api } from "../api.js";
import { formByKey } from "../../data/course.js";

export async function teacherView(el) {
  mount(el, loading());
  const d = await api.get("admin/security");
  if (!d.students.length) return mount(el, emptyState("🛡️", "Hodisalar yo'q", "Test va topshiriq sahifalarida ekran surati urinishi yoki oynadan chiqish qayd etilmagan."));
  mount(el,
    h("div", { class: "alert alert-info small" }, "Test va topshiriq sahifalarida talaba ekran surati olishga urinsa yoki oynadan chiqsa, sahifa yashiriladi va hodisa shu yerda qayd etiladi. «Oynadan chiqish» ba'zan tasodifiy bo'lishi mumkin (xabarnoma, boshqa oyna) — takroriy holatlarga e'tibor bering."),
    h("div", { class: "card table-wrap" }, h("h3", {}, "Talabalar bo'yicha"),
      h("table", { class: "table" }, h("thead", {}, h("tr", {}, h("th", {}, "Talaba"), h("th", {}, "Guruh"), h("th", { class: "center" }, "Ekran surati urinishi"), h("th", { class: "center" }, "Oynadan chiqish"), h("th", {}, "Oxirgi"))),
        h("tbody", {}, d.students.map((s) => h("tr", {}, h("td", {}, s.name), h("td", {}, s.group || "—", h("div", { class: "muted small" }, formByKey(s.form)?.name || "")), h("td", { class: "center" }, s.screenshot ? h("b", { style: { color: "var(--danger, #c0392b)" } }, s.screenshot) : 0), h("td", { class: "center" }, s.leave), h("td", {}, fmtDate(s.last))))))),
    h("details", { class: "card" }, h("summary", {}, h("b", {}, `So'nggi hodisalar (${d.recent.length})`)),
      h("table", { class: "table" }, h("thead", {}, h("tr", {}, h("th", {}, "Vaqt"), h("th", {}, "Talaba"), h("th", {}, "Hodisa"), h("th", {}, "Sahifa"))),
        h("tbody", {}, d.recent.map((e) => h("tr", {}, h("td", {}, fmtDate(e.at)), h("td", {}, `${e.name} (${e.group || "—"})`), h("td", {}, d.types[e.type] || e.type), h("td", { class: "muted small" }, e.page)))))));
}
