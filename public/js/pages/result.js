// Talabaning semestr natijasi: ma'ruza va amaliy mashg'ulot ballari, oraliq nazorat; semestr tugagach PDF yuklab olish.
import { h, mount, toast, loading, emptyState, progressBar } from "../ui.js";
import { api } from "../api.js";
import { fmtIsoDate } from "../semester.js";
import { COURSE, formByKey } from "../../data/course.js";

const fmt = (n) => String(Math.round((n ?? 0) * 100) / 100).replace(".", ",");
const semFromHash = () => Number(new URLSearchParams(location.hash.split("?")[1] || "").get("sem")) || 0;

const loadScript = (src) => new Promise((res, rej) => {
  if (document.querySelector(`script[data-src="${src}"]`)) return res();
  const s = h("script", { src, "data-src": src, onload: res, onerror: () => rej(new Error("Kutubxona yuklanmadi")) });
  document.head.append(s);
});

const dash = (v) => (v === null || v === undefined ? "—" : fmt(v));
function topicTable(list) {
  const head = ["Mavzu", "Tushunchalar", "Nazorat savollari", "Test", "Ma'ruza ball", "Amaliy ball"].map((c, i) => h("th", { class: i ? "center" : "" }, c));
  const rows = list.map((b) => h("tr", {},
    h("td", {}, `${b.num}. ${b.title}`),
    h("td", { class: "center" }, b.glossary ? `${b.glossary.seen}/${b.glossary.total}` : "—"),
    h("td", { class: "center" }, b.questions ? `${b.questions.answered}/${b.questions.total}` : "—"),
    h("td", { class: "center" }, b.quiz ? `${b.quiz.pct}%` : "—"),
    h("td", { class: "center" }, dash(b.lecPoints)),
    h("td", { class: "center" }, dash(b.pracPoints))));
  return h("div", {}, h("h3", {}, "Mavzular bo'yicha"), h("table", { class: "table small" }, h("thead", {}, h("tr", {}, head)), h("tbody", {}, rows)));
}

/** Natija varag'i (A4 kengligida): ekranda ham, PDF uchun ham shu ko'rinish ishlatiladi. */
function sheet(d) {
  const s = d.score;
  const sc = s.scoring;
  const row = (name, note, pts, max) => h("tr", {}, h("td", {}, h("b", {}, name), note && h("div", { class: "muted small" }, note)), h("td", { class: "center" }, h("b", {}, fmt(pts))), h("td", { class: "center" }, fmt(max)));
  const lec = s.lecture;
  const prc = s.practice;
  const lecNote = [`Mavzu testlari: ${lec.testsPct}%`, lec.tasksCount ? `ma'ruza topshiriqlari: ${lec.tasksPct}% (${lec.tasksCount} ta)` : "ma'ruza topshirig'i berilmagan"].join(" · ");
  const prcNote = [`Amaliy mashg'ulotlar: ${prc.practicePct}%`, prc.tasksCount ? `amaliy topshiriqlar: ${prc.tasksPct}% (${prc.tasksCount} ta)` : "amaliy topshiriq berilmagan"].join(" · ");
  return h("div", { class: "result-sheet" },
    h("div", { class: "result-head" }, h("div", { class: "result-logo" }, COURSE.logo || "🎓"), h("div", {}, h("h2", {}, `${COURSE.brand} — semestr natijasi`), h("div", { class: "muted" }, "Mirzo Ulug‘bek nomidagi O‘zbekiston Milliy universiteti Jizzax filiali"))),
    h("table", { class: "table result-info" }, h("tbody", {},
      [["Talaba", d.student.name], ["Guruh", d.student.group || "—"], d.student.idNumber && ["ID raqami", d.student.idNumber], ["Ta'lim shakli", formByKey(d.student.form)?.name || d.student.form], ["Fan", d.subject.title], ["Semestr", `${d.sem.name} · ${d.sem.term}${d.sem.endsAt ? ` (tugash: ${fmtIsoDate(d.sem.endsAt)})` : ""}`], ["Hisobot sanasi", new Date(d.now).toLocaleDateString("uz-UZ")]].filter(Boolean).map(([k, v]) => h("tr", {}, h("th", {}, k), h("td", { colspan: 2 }, v))))),
    h("h3", {}, "Ballar"),
    h("table", { class: "table" }, h("thead", {}, h("tr", {}, h("th", {}, "Yo'nalish"), h("th", { class: "center" }, "To'plagan ball"), h("th", { class: "center" }, "Eng ko'pi"))),
      h("tbody", {},
        row("Ma'ruza mashg'uloti", `${lecNote}${lec.midtermMax ? ` · jumladan oraliq nazorat: ${fmt(lec.midterm)} / ${fmt(lec.midtermMax)} (baho: ${s.midtermGrade ?? "—"} / 5)` : ""}`, lec.points, lec.max),
        row("Amaliy mashg'ulot", prcNote, prc.points, prc.max)),
      h("tfoot", {}, h("tr", {}, h("td", {}, h("b", {}, "JAMI")), h("td", { class: "center" }, h("b", {}, fmt(s.total))), h("td", { class: "center" }, h("b", {}, fmt(s.totalMax)))))),
    s.byTopic?.length > 0 && topicTable(s.byTopic),
    !lec.midtermMax && h("p", {}, h("b", {}, "Oraliq nazorat (5 ballik tizimda, qo'shimcha ball): "), s.midtermGrade === null ? "hali baholanmagan" : `${s.midtermGrade} / 5`),
    h("p", { class: "small muted" }, `Ball tizimi: ma'ruza — ${sc.lecture} ball, amaliy mashg'ulot — ${sc.practice} ball${sc.midtermInLecture ? ` (ma'ruzaning ${sc.midtermInLecture} balli oraliq nazorat)` : "; oraliq nazorat alohida qo'shimcha ball"}. Ma'ruza ishi — mavzu testlari va ma'ruza topshiriqlari, amaliy — amaliy mashg'ulotlar va amaliy topshiriqlar.`),
    d.sem.ended ? h("p", { class: "small" }, "✅ Semestr yakunlangan: bu yakuniy natija.") : h("p", { class: "small muted" }, "Semestr hali tugamagan: natija oraliq."));
}

async function makePdf(node, name) {
  await loadScript("/vendor/html2canvas.min.js");
  await loadScript("/vendor/jspdf.umd.min.js");
  const canvas = await window.html2canvas(node, { scale: 2, backgroundColor: "#ffffff", useCORS: true });
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  const pw = pdf.internal.pageSize.getWidth();
  const ph = pdf.internal.pageSize.getHeight();
  const margin = 28;
  const w = pw - margin * 2;
  const full = (canvas.height * w) / canvas.width;
  const pageH = ph - margin * 2;
  let y = 0;
  while (y < full) {
    const sliceH = Math.min(pageH, full - y);
    const c = document.createElement("canvas");
    c.width = canvas.width;
    c.height = Math.round((sliceH * canvas.width) / w);
    c.getContext("2d").drawImage(canvas, 0, Math.round((y * canvas.width) / w), canvas.width, c.height, 0, 0, canvas.width, c.height);
    if (y > 0) pdf.addPage();
    pdf.addImage(c.toDataURL("image/jpeg", 0.92), "JPEG", margin, margin, w, sliceH);
    y += pageH;
  }
  pdf.save(name);
}

export async function render(el) {
  mount(el, loading());
  const sem = semFromHash();
  const d = await api.get(`results${sem ? `?sem=${sem}` : ""}`);
  if (!d.score) return mount(el, emptyState("📊", "Natija hali yo'q", "Mavzularni o'qing, testlar va topshiriqlarni bajaring — natijangiz shu yerda chiqadi."));
  const ended = d.sem.ended;
  const node = sheet(d);
  const btn = h("button", { class: "btn lg", disabled: !ended, onclick: async () => {
    btn.disabled = true;
    btn.textContent = "PDF tayyorlanmoqda…";
    try {
      await makePdf(node, `natija-${d.student.name.replace(/\s+/g, "-")}-${d.sem.name}.pdf`);
    } catch (e) {
      toast(e.message || "PDF yaratilmadi", "error");
    }
    btn.disabled = false;
    btn.textContent = "⬇ Natijani PDF qilib yuklab olish";
  } }, "⬇ Natijani PDF qilib yuklab olish");
  const s = d.score;
  mount(el,
    h("div", { class: "page-head" }, h("div", {}, h("h1", {}, "📊 Mening natijam"), h("p", { class: "muted" }, `${d.subject.title} · ${d.sem.name}`))),
    d.semesters.length > 1 && h("div", { class: "segmented role-switch" }, d.semesters.map((x) => h("a", { class: `seg ${x.no === d.sem.no ? "active" : ""}`, href: `#/result?sem=${x.no}`, style: { textDecoration: "none" } }, x.name))),
    h("div", { class: "grid cols-3" },
      h("div", { class: "card stat-card" }, h("b", {}, `${fmt(s.lecture.points)} / ${fmt(s.lecture.max)}`), h("span", { class: "muted small" }, "Ma'ruza")),
      h("div", { class: "card stat-card" }, h("b", {}, `${fmt(s.practice.points)} / ${fmt(s.practice.max)}`), h("span", { class: "muted small" }, "Amaliy mashg'ulot")),
      h("div", { class: "card stat-card" }, h("b", {}, `${fmt(s.total)} / ${fmt(s.totalMax)}`), h("span", { class: "muted small" }, "Jami"))),
    h("div", { class: "card stack" }, progressBar(Math.round((s.total / s.totalMax) * 100), 100, `${Math.round((s.total / s.totalMax) * 100)}%`)),
    h("div", { class: "card" }, node),
    ended
      ? h("div", { class: "row" }, btn)
      : h("div", { class: "alert alert-info" }, `📄 PDF natija semestr tugagach yuklab olinadi${d.sem.endsAt ? ` (${fmtIsoDate(d.sem.endsAt)} dan keyin)` : ""}. Hozirgi ko'rsatkichlar oraliq natija: ular o'qish davomida o'zgaradi.`, h("div", { class: "row" }, btn)));
}
