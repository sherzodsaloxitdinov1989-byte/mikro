// O'qituvchi paneli: test jamlanmasini Word (.docx) fayliga yuklab olish.
import { h, mount, downloadFile } from "../ui.js";
import { TOPICS, COURSE } from "../../data/topics.js";
import { buildDocx } from "../docx.js";

const L = "ABCDEF";

function build(topics, withAnswers) {
  const blocks = [
    { t: "h1", text: `${COURSE.title} — test jamlanmasi${withAnswers ? " (javoblar bilan)" : ""}` },
    { t: "p", text: `${topics.length} ta mavzu · ${topics.reduce((s, t) => s + t.quiz.length, 0)} ta test savoli` },
  ];
  topics.forEach((t, ti) => {
    blocks.push({ t: "h2", text: `${t.num}-mavzu. ${t.title}`, pageBreak: ti > 0 });
    t.quiz.forEach((q, i) => {
      blocks.push({ t: "p", bold: true, text: `${i + 1}. ${q.q}`, after: 40 });
      q.options.forEach((o, j) => {
        const ok = withAnswers && j === q.correct;
        blocks.push({ t: "p", indent: 360, after: 20, runs: [{ text: `${L[j]}) ${o}${ok ? "  ✓" : ""}`, bold: ok, color: ok ? "1B7F3B" : undefined }] });
      });
      blocks.push({ t: "p", text: "", after: 60 });
    });
    const rows = [];
    for (let i = 0; i < t.quiz.length; i += 10) {
      rows.push(t.quiz.slice(i, i + 10).map((_, k) => String(i + k + 1)));
      rows.push(t.quiz.slice(i, i + 10).map((q) => L[q.correct]));
    }
    if (withAnswers) {
      blocks.push({ t: "p", bold: true, text: `${t.num}-mavzu javoblar kaliti:` });
      blocks.push({ t: "table", rows });
    }
  });
  if (!withAnswers) {
    blocks.push({ t: "h2", text: "Javoblar kaliti", pageBreak: true });
    for (const t of topics) {
      blocks.push({ t: "p", bold: true, text: `${t.num}-mavzu:` });
      blocks.push({ t: "p", text: t.quiz.map((q, i) => `${i + 1}-${L[q.correct]}`).join(",  ") });
    }
  }
  return buildDocx(blocks, COURSE.title);
}

export async function view(el) {
  const total = TOPICS.reduce((s, t) => s + t.quiz.length, 0);
  if (!total) return mount(el, h("div", { class: "alert alert-warn" }, "Test savollari yuklanmadi. Sahifani yangilang."));
  const sel = h("select", { class: "input" }, h("option", { value: "all" }, `Barcha mavzular (${total} ta test)`), TOPICS.map((t) => h("option", { value: t.num }, `${t.num}-mavzu · ${t.quiz.length} ta test · ${t.title.slice(0, 60)}`)));
  const pick = () => (sel.value === "all" ? TOPICS : TOPICS.filter((t) => String(t.num) === sel.value));
  const name = (suffix) => `test-jamlanma${sel.value === "all" ? "" : `-${sel.value}-mavzu`}${suffix}.docx`;
  const dl = (withAnswers) => downloadFile(name(withAnswers ? "-javoblar-bilan" : "-javobsiz"), build(pick(), withAnswers), "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  mount(
    el,
    h("div", { class: "card stack" },
      h("h3", {}, "Test jamlanmasini Word faylga yuklab olish"),
      h("p", { class: "muted" }, "Fayl faqat o'qituvchi uchun. Javoblar bilan variantda to'g'ri javob ✓ belgisi va javoblar kaliti jadvali bo'ladi. Javobsiz variantda kalit eng oxirida alohida beriladi."),
      h("label", {}, "Mavzu", sel),
      h("div", { class: "row" },
        h("button", { class: "btn lg", onclick: () => dl(true) }, "⬇ Word (.docx) — javoblar bilan"),
        h("button", { class: "btn ghost lg", onclick: () => dl(false) }, "⬇ Word (.docx) — javobsiz + kalit"))
    ),
    h("p", { class: "small muted" }, "Eslatma: bu fayl darslik asosida tuzilgan va muallif mulki. Talabalarga tarqatmang.")
  );
}
