// Tadbirkorlik asoslari (141-23, 142-23) mavzu topshirig'i: mavzuni o'qish → 5 ta nazorat savoli (har biriga 3 daqiqa, AI bahosi) → 20 ta test (10 daqiqa).
// Hammasi bir martalik; vaqt serverda hisoblanadi, brauzer faqat sanab ko'rsatadi.
import { h, toast } from "./ui.js";
import { api, session } from "./api.js";
import { pickQuestions, pickQuiz } from "../data/practice-pick.js";
import { docxPanel } from "./practice-docx.js";
import { hasProblemPart } from "../data/course.js";
import { loadProgress, topicState, updateTopic } from "./progress.js";
import { PLAN_Q_MIN, PLAN_QUIZ_MIN } from "../data/course.js";

const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
const changed = () => window.dispatchEvent(new Event("vgt:progress"));

/** Nazariya oxirida: «Mavzuni o'qib chiqdim» — nazorat savollari va testning sharti. */
export function planReadButton(topic) {
  const box = h("div", { class: "card plan-card" });
  const draw = (done) => box.replaceChildren(done
    ? h("p", { class: "ok" }, "✅ Mavzuni o'qib chiqqaningiz qayd etildi. Endi «Nazorat savollari» bo'limiga o'ting.")
    : h("div", { class: "row between wrap" }, h("div", {}, h("b", {}, "Mavzuni to'liq o'qib chiqdingizmi?"), h("p", { class: "muted small" }, "Nazorat savollari va test shundan keyin ochiladi. Tugmani bosishdan oldin nazariyani oxirigacha o'qing.")),
        h("button", { class: "btn", onclick: async (e) => {
          e.target.disabled = true;
          try { await api.post(`plan/read/${topic.id}`, {}); draw(true); window.dispatchEvent(new CustomEvent("plan:read", { detail: topic.id })); } catch (ex) { toast(ex.message, "error"); e.target.disabled = false; }
        } }, "✅ Mavzuni o'qib chiqdim")));
  box.append(h("div", { class: "sv-spinner" }));
  api.get(`qreview/${topic.id}`).then((d) => draw(d.read)).catch(() => draw(false));
  return box;
}

function gatePanel(topic, render) {
  const root = h("div", { class: "stack", "data-secure": "1" });
  let timers = [];
  const clear = () => { timers.forEach(clearInterval); timers = []; };
  const load = async () => {
    clear();
    let d;
    try { d = await api.get(`qreview/${topic.id}`); } catch (e) { return root.replaceChildren(h("div", { class: "alert alert-error" }, e.message)); }
    root.replaceChildren(...[].concat(render(d, { reload: load, track: (t) => timers.push(t) })));
  };
  window.addEventListener("plan:read", (e) => e.detail === topic.id && load());
  load();
  return root;
}

/** 5 ta nazorat savoli: har biri alohida «Boshlash» bilan ochiladi, 3 daqiqa ichida yoziladi, AI baholaydi. */
export function planQuestionsPanel(topic) {
  const mine = pickQuestions(session.user.id, topic);
  return gatePanel(topic, (d, { reload, track }) => {
    if (!d.read) return h("div", { class: "alert alert-warn" }, "Avval mavzuni to'liq o'qib chiqing: «Nazariya» bo'limi oxiridagi «✅ Mavzuni o'qib chiqdim» tugmasini bosing — shundan keyin savollar ochiladi.");
    const running = mine.find((i) => !d.grades[i] && d.starts?.[i] && d.starts[i].secondsLeft > 0);
    const done = mine.filter((i) => d.grades[i]).length;
    const cards = mine.map((i, k) => {
      const g = d.grades[i];
      const st = d.starts?.[i];
      const head = h("div", { class: "row" }, h("span", { class: "q-num" }, k + 1), g || (st && st.secondsLeft > 0) ? h("b", {}, topic.questions[i]) : h("b", { class: "muted" }, `${k + 1}-savol (boshlanmagan)`));
      if (g) {
        return h("div", { class: "card question" }, head, g.answer && h("p", { class: "small", style: { whiteSpace: "pre-wrap" } }, g.answer),
          h("div", { class: `alert ${g.score >= 7 ? "alert-success" : g.score >= 5 ? "alert-warn" : "alert-error"}` }, h("b", {}, `🤖 AI bahosi: ${g.score}/10`), g.late && h("span", { class: "muted" }, " · vaqt tugagan"), h("p", {}, g.feedback), g.missing?.length > 0 && h("ul", { class: "small" }, g.missing.map((m) => h("li", {}, m)))));
      }
      if (st && st.secondsLeft > 0) {
        const ta = h("textarea", { rows: 5, placeholder: "Javobingizni yozing (2–4 gap)…", autofocus: true });
        const clock = h("b", { class: "plan-clock" }, mmss(st.secondsLeft));
        const btn = h("button", { class: "btn", onclick: () => send(false) }, "Yuborish va AI bahosini olish");
        let left = st.secondsLeft;
        let sent = false;
        async function send(auto) {
          if (sent) return;
          sent = true;
          btn.disabled = true;
          ta.disabled = true;
          try { await api.post(`qreview/${topic.id}/${i}`, { answer: ta.value }); if (auto) toast("Vaqt tugadi: javobingiz avtomatik yuborildi", "warn"); } catch (e) { toast(e.message, "error"); }
          reload();
        }
        track(setInterval(() => { left -= 1; clock.textContent = mmss(Math.max(0, left)); if (left <= 0) send(true); }, 1000));
        return h("div", { class: "card question" }, head, h("div", { class: "row between" }, h("span", { class: "muted small" }, `Javob yozish vaqti: ${PLAN_Q_MIN} daqiqa`), h("span", {}, "⏱ ", clock)), ta, h("div", { class: "row" }, btn));
      }
      const start = h("button", { class: "btn", disabled: Boolean(running), title: running ? "Avval ochiq savolga javob bering" : "", onclick: async (e) => {
        if (!confirm(`Savol ochilgach ${PLAN_Q_MIN} daqiqalik vaqt boshlanadi va to'xtatib bo'lmaydi. Boshlaysizmi?`)) return;
        e.target.disabled = true;
        try { await api.post(`plan/qstart/${topic.id}/${i}`, {}); reload(); } catch (ex) { toast(ex.message, "error"); e.target.disabled = false; }
      } }, `▶ Savolni boshlash (${PLAN_Q_MIN} daqiqa)`);
      return h("div", { class: "card question" }, head, start);
    });
    return [h("div", { class: "alert alert-info" }, `Sizga bu mavzudan 5 ta nazorat savoli berilgan (har bir talabaga boshqacha). Har bir savol alohida ochiladi, javob yozishga ${PLAN_Q_MIN} daqiqa beriladi, so'ng sun'iy intellekt 10 ballik tizimda baholaydi. Savolga faqat bir marta javob beriladi. Bajarilgan: ${done}/5.`), ...cards];
  });
}

/** 20 ta test: barcha nazorat savollaridan keyin, 10 daqiqa ichida, bir marta. */
export function planQuizPanel(topic) {
  const mine = pickQuestions(session.user.id, topic);
  return gatePanel(topic, (d, { reload, track }) => {
    const st = topicState(topic.id);
    if (!d.read) return h("div", { class: "alert alert-warn" }, "Avval mavzuni to'liq o'qib chiqing.");
    if (mine.some((i) => !d.grades[i])) return h("div", { class: "alert alert-warn" }, "Testni boshlash uchun avval «Nazorat savollari» bo'limidagi 5 ta savolga javob bering.");
    if (st.quizAttempts > 0 && !d.quizResult) {
      return h("div", { class: "alert alert-info" }, `Bu test topshirilgan. Natijangiz: ${st.quiz ?? 0}%. Test faqat bir marta topshiriladi.`);
    }
    const qs = pickQuiz(session.user.id, topic).map((i) => topic.quiz[i]); // 20 ta test (aralashtirilgan)
    const startedAt = d.quizStart;
    if (!startedAt) {
      return h("div", { class: "card plan-card stack" }, h("h3", {}, "✅ Mavzu testi"), h("p", {}, `${qs.length} ta savol, ${PLAN_QUIZ_MIN} daqiqa. Test faqat bir marta topshiriladi; vaqt tugasa, belgilangan javoblar avtomatik yuboriladi.`),
        h("button", { class: "btn lg", onclick: async (e) => {
          if (!confirm(`Test ochilgach ${PLAN_QUIZ_MIN} daqiqalik vaqt boshlanadi va to'xtatib bo'lmaydi. Boshlaysizmi?`)) return;
          e.target.disabled = true;
          try { await api.post(`plan/quizstart/${topic.id}`, {}); reload(); } catch (ex) { toast(ex.message, "error"); e.target.disabled = false; }
        } }, `▶ Testni boshlash (${PLAN_QUIZ_MIN} daqiqa)`));
    }
    const chosen = qs.map(() => null);
    const clock = h("b", { class: "plan-clock" }, mmss(startedAt.secondsLeft));
    let left = startedAt.secondsLeft;
    let sent = false;
    const form = h("div", { class: "stack" }, qs.map((q, n) => h("div", { class: "card question" },
      h("div", { class: "row" }, h("span", { class: "q-num" }, n + 1), h("b", {}, q.q)),
      h("div", { class: "stack" }, q.options.map((o, k) => h("label", { class: "check" }, h("input", { type: "radio", name: `q${n}`, onchange: () => (chosen[n] = k) }), " ", o))))));
    const submit = h("button", { class: "btn lg", onclick: () => send(false) }, "Javoblarni yuborish");
    async function send(auto) {
      if (sent) return;
      sent = true;
      submit.disabled = true;
      form.querySelectorAll("input").forEach((x) => (x.disabled = true));
      try {
        const res = await api.post(`quiz/${topic.id}`, { answers: chosen });
        updateTopic(topic.id, (s) => Object.assign(s, res.state));
        changed();
        if (auto) toast("Vaqt tugadi: javoblaringiz avtomatik yuborildi", "warn");
        root2.replaceChildren(h("div", { class: "card quiz-result stack" }, h("h3", {}, `Natija: ${res.score}% (${res.correct}/${res.total})`), res.integrity && h("p", { class: "muted small" }, res.integrity.text),
          ...res.results.map((r, n) => h("div", { class: `small ${r.ok ? "ok" : "bad"}` }, `${n + 1}. ${r.ok ? "✓ To'g'ri" : `✗ Noto'g'ri${r.correct !== undefined ? ` — to'g'ri javob: ${qs[n].options[r.correct]}` : ""}`}${r.explain ? ` — ${r.explain}` : ""}`))));
      } catch (e) { toast(e.message, "error"); }
    }
    const root2 = h("div", { class: "stack" }, h("div", { class: "row between sticky-bar" }, h("span", { class: "muted small" }, `${qs.length} ta savol · bir marta`), h("span", {}, "⏱ ", clock)), form, submit);
    track(setInterval(() => { left -= 1; clock.textContent = mmss(Math.max(0, left)); if (left <= 0) send(true); }, 1000));
    if (left <= 0) send(true);
    return root2;
  });
}

/** Makroiqtisodiyot: 2 ta masala — testdan keyin ochiladi; PDF yuklab olinadi, yechim Word faylda yuklanadi, AI baholaydi. */
export function planProblemsPanel(topic) {
  const root = h("div", { class: "stack", "data-secure": "1" });
  const draw = async () => {
    await loadProgress();
    if (!(topicState(topic.id).quizAttempts > 0)) return root.replaceChildren(h("div", { class: "alert alert-warn" }, "Masalalar mavzu testidan keyin ochiladi: avval «Test» bo'limida 20 ta testni topshiring."));
    root.replaceChildren(docxPanel(topic));
  };
  draw();
  window.addEventListener("vgt:progress", draw);
  return root;
}
