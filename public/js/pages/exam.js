// Nazorat testi (talaba): belgilangan vaqtda ochiladi, boshlagan paytdan boshlab belgilangan daqiqa beriladi (vaqtni server hisoblaydi).
import { h, mount, toast, loading, confirmDialog, emptyState, integrityAlert } from "../ui.js";
import { api } from "../api.js";

const MONTHS = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
const uz = (iso) => new Date(new Date(iso).getTime() + 5 * 3600_000);
const pad = (n) => String(n).padStart(2, "0");
const fmtAt = (iso) => { const d = uz(iso); return `${d.getUTCDate()}-${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}, soat ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`; };
const clock = (ms) => { const s = Math.max(0, Math.ceil(ms / 1000)); return `${pad(Math.floor(s / 60))}:${pad(s % 60)}`; };
const countdown = (ms) => { const m = Math.max(0, Math.ceil(ms / 60000)); return m >= 1440 ? `${Math.floor(m / 1440)} kun ${Math.floor((m % 1440) / 60)} soat` : m >= 60 ? `${Math.floor(m / 60)} soat ${m % 60} daqiqa` : `${m} daqiqa`; };
const LET = "ABCD";

let timers = [];
export const cleanup = () => { timers.forEach(clearInterval); timers = []; window.onbeforeunload = null; };

// ---------------- Ro'yxat ----------------

export const render = async (el) => (await renderList(el), cleanup);
export const renderExam = async (el, id) => (await renderTake(el, id), cleanup);

async function renderList(el) {
  cleanup();
  mount(el, loading());
  const res = await api.get("exams");
  const offset = new Date(res.now).getTime() - Date.now();
  if (!res.exams.length) return mount(el, emptyState("📝", "Nazorat testi yo'q", "Sizning guruhingiz uchun nazorat testi belgilanmagan."));
  const cards = res.exams.map((e) => {
    const status = h("div");
    const btn = h("button", { class: "btn lg" }, "▶ Testni boshlash");
    const paint = () => {
      const now = Date.now() + offset;
      const toStart = new Date(e.startsAt).getTime() - now;
      if (e.attempt?.finished) { status.replaceChildren(h("div", { class: "alert alert-info" }, `Test yakunlangan: ${e.attempt.result.correct} / ${e.attempt.result.total} to'g'ri — ${e.attempt.result.percent}%`)); btn.textContent = "Natijani ko'rish"; btn.disabled = false; return; }
      if (!e.attempt && e.allowed === false) { btn.disabled = true; status.replaceChildren(h("div", { class: "alert alert-warn" }, "🔒 Sizga bu testni ishlashga hozircha ruxsat berilmagan. O'qituvchiga murojaat qiling.")); return; }
      if (e.attempt) { btn.textContent = "▶ Testni davom ettirish"; btn.disabled = false; status.replaceChildren(h("div", { class: "alert alert-warn" }, "Siz testni boshlagansiz. Vaqt to'xtamaydi — davom eting.")); return; }
      if (e.state === "closed") { btn.disabled = true; status.replaceChildren(h("div", { class: "alert alert-warn" }, "Test vaqti tugagan.")); return; }
      if (toStart > 0) { btn.disabled = true; status.replaceChildren(h("div", { class: "alert alert-info" }, `⏳ Test boshlanishiga ${countdown(toStart)} qoldi`)); return; }
      btn.disabled = false; status.replaceChildren(h("div", { class: "alert alert-ok" }, "✅ Test ochiq. Tayyor bo'lsangiz, boshlang."));
    };
    paint();
    timers.push(setInterval(paint, 15_000));
    btn.onclick = async () => {
      if (!e.attempt && !(await confirmDialog(`Testni boshlaysizmi? Boshlagan paytingizdan ${e.durationMin} daqiqa hisoblanadi, vaqt to'xtamaydi va test faqat BIR marta topshiriladi.`))) return;
      btn.disabled = true;
      try { if (!e.attempt) await api.post(`exams/${e.id}/start`, {}); location.hash = `#/exam/${e.id}`; } catch (ex) { toast(ex.message, "error"); btn.disabled = false; }
    };
    return h("div", { class: "card stack" },
      h("h2", {}, e.title),
      h("div", { class: "row wrap" }, h("span", { class: "chip chip-soft" }, `🕗 Boshlanish: ${fmtAt(e.startsAt)}`), h("span", { class: "chip chip-soft" }, `⏱ ${e.durationMin} daqiqa`), h("span", { class: "chip chip-soft" }, `❓ ${e.count} ta savol`)),
      h("ul", { class: "small muted" },
        h("li", {}, `Test ${fmtAt(e.startsAt)} dan ochiladi. Har bir talaba testni boshlagach, ${e.durationMin} daqiqa vaqt oladi.`),
        h("li", {}, "Savollar bazadan har bir talabaga alohida tanlanadi: variantingiz boshqalarnikidan farq qiladi."),
        h("li", {}, "Javoblar belgilanishi bilan saqlanadi. Vaqt tugasa, test o'zi yakunlanadi."),
        h("li", {}, "Test paytida boshqa oynaga o'tish, ekran surati olish, nusxalash — qayd etiladi va ballni kamaytiradi.")),
      status, h("div", { class: "row" }, btn));
  });
  mount(el, h("div", { class: "page-head" }, h("div", {}, h("h1", {}, "📝 Nazorat testi"), h("p", { class: "muted" }, "Oraliq nazorat testlari"))), ...cards);
}

// ---------------- Test topshirish ----------------

async function renderTake(el, id) {
  cleanup();
  mount(el, loading());
  let d;
  try { d = await api.get(`exams/${id}/attempt`); } catch (e) { location.hash = "#/exam"; return; }
  if (d.result) return showResult(el, d, id);
  let deadline = new Date(d.deadline).getTime();
  let offset = new Date(d.now).getTime() - Date.now();
  const syncDeadline = (r) => { if (r?.deadline) { deadline = new Date(r.deadline).getTime(); offset = new Date(r.now).getTime() - Date.now(); } };
  const answers = { ...(d.answers || {}) };
  const qs = d.questions;
  let cur = 0;
  let finished = false;
  const queue = [];
  let sending = false;
  const pump = async () => {
    if (sending) return;
    sending = true;
    while (queue.length && !finished) {
      const job = queue[0];
      try { syncDeadline(await api.post(`exams/${id}/answer`, job)); queue.shift(); } catch (e) { if (/vaqti tugadi/.test(e.message)) { queue.length = 0; break; } await new Promise((r) => setTimeout(r, 2000)); }
    }
    sending = false;
  };
  const timer = h("b", { class: "exam-timer" }, "--:--");
  const nav = h("div", { class: "exam-nav" });
  const box = h("div", { class: "card stack" });
  const paintNav = () => nav.replaceChildren(...qs.map((_, i) => h("button", { class: `exam-dot ${i === cur ? "cur" : ""} ${answers[i] !== undefined ? "done" : ""}`, onclick: () => { cur = i; draw(); } }, i + 1)));
  const draw = () => {
    const q = qs[cur];
    box.replaceChildren(
      h("div", { class: "muted small" }, `Savol ${cur + 1} / ${qs.length}`),
      h("p", { class: "exam-q" }, q.q),
      h("div", { class: "stack" }, q.options.map((o, k) => h("label", { class: "option", style: answers[cur] === k ? { borderColor: "var(--primary)", background: "var(--primary-soft)" } : {} },
        h("input", { type: "radio", name: "opt", checked: answers[cur] === k, onchange: () => { answers[cur] = k; queue.push({ n: cur, a: k }); pump(); paintNav(); draw(); } }), h("span", {}, `${LET[k]}) ${o}`)))),
      h("div", { class: "row between" }, h("button", { class: "btn ghost", disabled: cur === 0, onclick: () => { cur--; draw(); } }, "← Oldingi"),
        cur < qs.length - 1 ? h("button", { class: "btn", onclick: () => { cur++; draw(); } }, "Keyingi →") : h("button", { class: "btn", onclick: () => finish(false) }, "Yakunlash")));
    paintNav();
  };
  const finish = async (auto) => {
    if (finished) return;
    const left = qs.length - Object.keys(answers).length;
    if (!auto && !(await confirmDialog(left ? `${left} ta savolga javob bermadingiz. Baribir yakunlaysizmi?` : "Testni yakunlaysizmi?"))) return;
    finished = true;
    cleanup();
    mount(el, loading("Natija hisoblanmoqda..."));
    try { const r = await api.post(`exams/${id}/submit`, { answers, timeout: Boolean(auto) }); showResult(el, r, id); } catch (e) { toast(e.message, "error"); location.hash = "#/exam"; }
  };
  const tick = () => {
    const ms = deadline - (Date.now() + offset);
    timer.textContent = clock(ms);
    timer.classList.toggle("warn", ms < 5 * 60_000);
    if (ms <= 0) finish(true);
  };
  window.onbeforeunload = () => (finished ? undefined : "Test davom etmoqda.");
  timers.push(setInterval(tick, 500));
  // O'qituvchi vaqt qo'shgan bo'lsa, taymer yangilanadi
  timers.push(setInterval(async () => { if (finished) return; try { const r = await api.get(`exams/${id}/attempt`); if (r.deadline && !r.result) { const was = deadline; syncDeadline(r); if (deadline > was) toast(`⏱ O'qituvchi vaqtingizga ${Math.round((deadline - was) / 60000)} daqiqa qo'shdi`, "ok"); } } catch {} }, 15_000));
  mount(el,
    h("div", { class: "exam-bar card" }, h("div", {}, h("b", {}, "📝 Nazorat testi"), h("div", { class: "muted small" }, `${Object.keys(answers).length} / ${qs.length} javob belgilandi`)), h("div", { class: "exam-time" }, "⏱ ", timer)),
    nav, box,
    h("div", { class: "row end" }, h("button", { class: "btn lg", onclick: () => finish(false) }, "✔ Testni yakunlash")));
  tick();
  draw();
}

function showResult(el, d, id) {
  cleanup();
  const r = d.result;
  const cls = r.percent >= 86 ? "score-high" : r.percent >= 60 ? "score-mid" : "score-low";
  mount(el,
    h("div", { class: "page-head" }, h("h1", {}, "📝 Nazorat testi natijasi")),
    h("div", { class: "card quiz-result" },
      h("div", { class: `score-ring ${cls}`, style: { "--pct": r.percent } }, h("b", {}, `${r.percent}%`), h("span", {}, `${r.correct}/${r.total}`)),
      h("div", { class: "stack" }, h("h3", {}, `${r.correct} ta to'g'ri javob, ${r.total - r.correct} ta noto'g'ri yoki javobsiz`), integrityAlert(r.integrity), h("p", { class: "muted small" }, "Natija o'qituvchiga yuborildi. To'g'ri javoblar ko'rsatilmaydi.")),
    ),
    h("a", { class: "btn ghost", href: "#/exam" }, "← Nazorat testlariga"));
}
