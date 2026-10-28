// O'qituvchi paneli: himoya hodisalari — qaysi talaba, qaysi amalni bajarayotganida, qanday qoidani buzgani.
import { h, mount, loading, fmtDate, emptyState, downloadFile } from "../ui.js";
import { api } from "../api.js";
import { toCSV } from "../stats.js";
import { formByKey, subjectOfGroup } from "../../data/course.js";
import { SUBJECT_KEY } from "../../data/topics.js";

const ICON = { screenshot: "📸", print: "🖨️", source: "🧑‍💻", save: "💾", copy: "📋", leave: "🪟", contextmenu: "🖱️" };
const SEVERITY = { 3: ["Jiddiy", "badge-warn"], 2: ["O'rtacha", "badge-warn"], 1: ["Yengil", ""] };

export async function teacherView(el) {
  mount(el, loading());
  const d = await api.get("admin/security");
  // Faqat tanlangan fan guruhlari talabalari
  const mine = (g) => subjectOfGroup(g).key === SUBJECT_KEY;
  d.students = d.students.filter((s) => mine(s.group));
  d.recent = d.recent.filter((e) => mine(e.group));
  if (!d.recent.length) return mount(el, emptyState("🛡️", "Hodisalar yo'q", "Platformada ekran surati, nusxalash, bosib chiqarish yoki oynadan chiqish urinishlari qayd etilmagan."));
  const types = d.types;
  let fType = "";
  let q = "";
  const list = h("div", { class: "card table-wrap" });
  const summary = h("div", { class: "card table-wrap" });

  const chips = (counts) => Object.entries(counts).sort((a, b) => (types[b[0]]?.weight || 0) - (types[a[0]]?.weight || 0)).map(([t, n]) => h("span", { class: "chip chip-soft", title: types[t]?.label || t }, `${ICON[t] || "•"} ${n}`));

  const note = h("div", { class: "alert alert-info small" }, "ℹ️ Bitta topshiriq, test yoki amaliy mashg'ulot davomida oynadan chiqishning dastlabki 5 tasi jarimasiz kechiriladi (masalan, telefon ekrani taym-autga tushib o'chib-yonishi). Hodisa shu yerda baribir qayd etiladi; 6-sidan boshlab ball kamaytiriladi. Ekran surati, nusxalash va boshqa buzilishlar uchun kechirim yo'q.");
  const drawSummary = () => {
    const rows = d.students.filter((s) => !q || `${s.name} ${s.idNumber} ${s.group}`.toLowerCase().includes(q));
    summary.replaceChildren(
      h("h3", {}, "Talabalar bo'yicha (og'irlik bo'yicha tartiblangan)"),
      h("table", { class: "table" },
        h("thead", {}, h("tr", {}, ["№", "Talaba", "Guruh", "Qoidabuzarliklar", "Jami", "Oxirgi"].map((x) => h("th", {}, x)))),
        h("tbody", {}, rows.map((s, i) => h("tr", {},
          h("td", { class: "center muted" }, `${i + 1}.`),
          h("td", {}, s.name, s.idNumber && h("div", { class: "muted small" }, `ID: ${s.idNumber}`)),
          h("td", {}, s.group || "—", h("div", { class: "muted small" }, formByKey(s.form)?.name || "")),
          h("td", {}, h("div", { class: "row wrap", style: { gap: "4px" } }, chips(s.counts))),
          h("td", { class: "center" }, h("b", {}, s.total)),
          h("td", { class: "small" }, fmtDate(s.last)))))));
  };

  const drawList = () => {
    const rows = d.recent.filter((e) => (!fType || e.type === fType) && (!q || `${e.name} ${e.idNumber || ""} ${e.group} ${e.action || ""}`.toLowerCase().includes(q)));
    list.replaceChildren(
      h("h3", {}, `Hodisalar jurnali (${rows.length})`),
      rows.length
        ? h("table", { class: "table" },
            h("thead", {}, h("tr", {}, ["Vaqt", "Talaba", "Qaysi amalni bajarayotgan edi", "Nima qildi", "Buzilgan qoida", ""].map((x) => h("th", {}, x)))),
            h("tbody", {}, rows.map((e) => {
              const t = types[e.type] || { label: e.type, rule: "", weight: 1 };
              const [sev, cls] = SEVERITY[t.weight] || SEVERITY[1];
              return h("tr", {},
                h("td", { class: "small" }, fmtDate(e.at)),
                h("td", {}, e.name, h("div", { class: "muted small" }, `${e.group || "—"}${e.idNumber ? ` · ID: ${e.idNumber}` : ""}`)),
                h("td", { class: "small" }, e.action || h("span", { class: "muted" }, e.page || "—")),
                h("td", { class: "small" }, h("b", {}, `${ICON[e.type] || ""} ${t.label}`), e.detail && h("div", { class: "muted" }, e.detail)),
                h("td", { class: "small" }, t.rule),
                h("td", {}, h("span", { class: `badge ${cls}` }, sev)));
            })))
        : h("p", { class: "muted" }, "Tanlangan filtr bo'yicha hodisa yo'q."));
  };

  const draw = () => (drawSummary(), drawList());
  const typeSel = h("select", { onchange: (e) => ((fType = e.target.value), draw()) }, h("option", { value: "" }, "Barcha qoidabuzarliklar"), Object.entries(types).map(([k, v]) => h("option", { value: k }, `${ICON[k] || ""} ${v.label}`)));
  const search = h("input", { type: "search", placeholder: "Qidirish: talaba, guruh, ID yoki amal", oninput: (e) => ((q = e.target.value.toLowerCase()), draw()) });
  const csv = () =>
    downloadFile("himoya-hodisalari.csv", toCSV([
      ["Vaqt", "Talaba", "ID raqami", "Guruh", "Amal (nima qilayotgan edi)", "Hodisa", "Tafsilot", "Buzilgan qoida", "Og'irligi"],
      ...d.recent.map((e) => [fmtDate(e.at), e.name, e.idNumber || "", e.group || "", e.action || e.page || "", types[e.type]?.label || e.type, e.detail || "", types[e.type]?.rule || "", types[e.type]?.weight || ""]),
    ]));

  mount(el,
    note,
    h("div", { class: "alert alert-info small" }, "Talaba test, topshiriq yoki darslik sahifasida taqiqlangan amal bajarsa (ekran surati, nusxalash, bosib chiqarish, dasturchi vositalari, oynadan chiqish), hodisa shu yerda qayd etiladi: kim, nima qilayotganida, qaysi qoidani buzgani. «Oynadan chiqish» ba'zan tasodifiy bo'lishi mumkin (xabarnoma, bosh qismga o'tish), shuning uchun faqat takroriy yoki jiddiy hodisalarga e'tibor bering."),
    h("div", { class: "row between wrap" }, h("div", { class: "row wrap" }, typeSel, search), h("button", { class: "btn ghost", onclick: csv }, "⬇ CSV (Excel)")),
    summary,
    list);
  draw();
}
