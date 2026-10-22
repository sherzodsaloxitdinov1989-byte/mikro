// Savol oynasi (talaba uchun, har sahifada): AI yordamchiga yoki o'qituvchiga savol yuborish, o'qituvchi javoblarini ko'rish.
import { h, toast, fmtDate } from "./ui.js";
import { api, session } from "./api.js";

const EVERY_MS = 60_000;
const safe = (fn) => { try { return fn(); } catch { return null; } };
let root = null;
let started = false;
let unread = 0;
let aiHistory = [];

const pageInfo = () => ({ page: location.hash || "#/", pageTitle: document.title.replace(/^\(!\)\s*/, "").slice(0, 150), topicId: (location.hash.match(/^#\/topics\/([\w-]+)$/) || [])[1] || "" });

function build() {
  const badge = h("span", { class: "ask-badge hidden" });
  const fab = h("button", { class: "ask-fab", title: "Savol bering: AI yoki o'qituvchiga", "aria-label": "Savol bering", onclick: () => toggle() }, h("span", {}, "💬"), h("b", {}, "Savol"), badge);
  const body = h("div", { class: "ask-body" });
  const tabs = {};
  const panel = h("aside", { class: "ask-panel", "aria-label": "Savol oynasi" },
    h("div", { class: "ask-head" }, h("b", {}, "💬 Savolingiz bormi?"), h("button", { class: "icon-btn", "aria-label": "Yopish", onclick: () => toggle(false) }, "✕")),
    h("div", { class: "ask-tabs" }, [["ai", "🤖 AI yordamchi"], ["teacher", "👨‍🏫 O'qituvchiga"], ["mine", "📨 Javoblar"]].map(([k, t]) => (tabs[k] = h("button", { class: "ask-tab", onclick: () => show(k) }, t)))),
    body);
  root = h("div", { class: "ask-wrap" }, fab, panel);
  root.badge = badge;
  root.body = body;
  root.tabs = tabs;
  document.body.append(root);
}

function toggle(force) {
  const open = force ?? !root.classList.contains("open");
  root.classList.toggle("open", open);
  if (open) show(root.tab || (unread ? "mine" : "ai"));
}

function show(tab) {
  root.tab = tab;
  for (const [k, b] of Object.entries(root.tabs)) b.classList.toggle("on", k === tab);
  root.body.replaceChildren();
  ({ ai: aiTab, teacher: teacherTab, mine: mineTab })[tab](root.body);
}

// ---- AI yordamchi ----
function aiTab(el) {
  const log = h("div", { class: "ask-log", "aria-live": "polite" });
  const input = h("textarea", { rows: 2, maxlength: 1500, placeholder: "Savolingizni yozing…" });
  let busy = false;
  const bubble = (role, text) => { const b = h("div", { class: `tutor-msg ${role}` }, h("div", { class: "tutor-text" }, text)); log.append(b); log.scrollTop = log.scrollHeight; return b; };
  bubble("assistant", "Salom! Men AI yordamchiman 🤖 Hozir ochiq turgan sahifa bo'yicha yoki fan haqida savol bering. Javob yetarli bo'lmasa, «O'qituvchiga» bo'limida o'qituvchiga yozing.");
  for (const m of aiHistory) bubble(m.role, m.content);
  const send = async () => {
    const text = input.value.trim();
    if (!text || busy) return;
    busy = true;
    input.value = "";
    aiHistory.push({ role: "user", content: text });
    bubble("user", text);
    const b = bubble("assistant", "");
    b.classList.add("typing");
    let reply = "";
    try {
      const res = await api.stream("ask/ai", { messages: aiHistory.slice(-10), ...pageInfo() });
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      b.classList.remove("typing");
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += dec.decode(value, { stream: true });
        b.firstChild.textContent = reply.replace(/\[\[XATO\]\].*/s, "");
        log.scrollTop = log.scrollHeight;
      }
    } catch (e) {
      reply = `[[XATO]] ${e.message}`;
    }
    if (reply.includes("[[XATO]]") || !reply.trim()) {
      aiHistory.pop();
      b.remove();
      toast(reply.split("[[XATO]]")[1]?.trim() || "Javob olinmadi", "error");
      input.value = text;
    } else {
      aiHistory.push({ role: "assistant", content: reply.trim() });
      b.firstChild.after(h("button", { class: "chip ask-escalate", onclick: () => { show("teacher"); const t = root.body.querySelector("textarea"); if (t) t.value = text; } }, "Javob yetarli emas — o'qituvchiga yuborish →"));
    }
    busy = false;
  };
  input.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } });
  el.append(log, h("div", { class: "tutor-input" }, input, h("button", { class: "btn", onclick: send }, "➤")));
}

// ---- O'qituvchiga savol ----
function teacherTab(el) {
  const info = pageInfo();
  const input = h("textarea", { rows: 5, maxlength: 1500, placeholder: "Savolingizni batafsil yozing. O'qituvchi javobini «Javoblar» bo'limida ko'rasiz." });
  const btn = h("button", { class: "btn", onclick: async () => {
    const text = input.value.trim();
    if (text.length < 5) return toast("Savolni to'liqroq yozing", "warn");
    btn.disabled = true;
    try {
      await api.post("questions", { text, page: info.page, pageTitle: info.pageTitle });
      toast("Savolingiz o'qituvchiga yuborildi ✓", "success");
      input.value = "";
      show("mine");
    } catch (e) {
      toast(e.message, "error");
    }
    btn.disabled = false;
  } }, "O'qituvchiga yuborish");
  el.append(h("div", { class: "ask-form" },
    h("p", { class: "muted small" }, `Savol hozirgi sahifa bilan birga yuboriladi: «${info.pageTitle || info.page}». Bir kunda 10 tagacha savol yuborish mumkin.`),
    input, btn));
}

// ---- Mening savollarim va javoblar ----
async function mineTab(el) {
  el.append(h("p", { class: "muted ask-pad" }, "Yuklanmoqda…"));
  let d;
  try {
    d = await api.get("questions");
  } catch (e) {
    el.replaceChildren(h("p", { class: "ask-pad" }, e.message));
    return;
  }
  const card = (q) => {
    const input = h("input", { type: "text", maxlength: 1500, placeholder: "Qo'shimcha yozish…" });
    const thread = [{ from: "student", text: q.text, at: q.at }, ...q.replies];
    const box = h("div", { class: `ask-q ${q.unread ? "unread" : ""}` },
      h("div", { class: "ask-q-meta" }, h("span", { class: "muted small" }, `${fmtDate(q.at)}${q.pageTitle ? ` · ${q.pageTitle}` : ""}`), q.status === "answered" ? h("span", { class: "badge badge-ok" }, "Javob berildi") : h("span", { class: "badge" }, "Kutilmoqda")),
      thread.map((m) => h("div", { class: `ask-msg ${m.from}` }, m.from === "teacher" && h("b", { class: "small" }, `👨‍🏫 ${m.name || "O'qituvchi"}`), h("div", {}, m.text))),
      h("div", { class: "ask-reply" }, input, h("button", { class: "btn small ghost", onclick: async () => {
        if (!input.value.trim()) return;
        try { await api.post(`questions/${q.id}/reply`, { text: input.value }); show("mine"); } catch (e) { toast(e.message, "error"); }
      } }, "Yuborish")));
    if (q.unread) api.post(`questions/${q.id}/seen`, {}).then(refresh).catch(() => {});
    return box;
  };
  el.replaceChildren(h("div", { class: "ask-list" }, d.questions.length ? d.questions.map(card) : h("p", { class: "muted ask-pad" }, "Siz hali o'qituvchiga savol yubormagansiz.")));
}

function paint() {
  if (!root) return;
  root.badge.textContent = unread;
  root.badge.classList.toggle("hidden", !unread);
}

export async function refresh() {
  if (session.user?.role !== "student") return;
  try {
    const prev = unread;
    unread = (await api.get("questions?brief=1")).unread || 0;
    paint();
    if (unread > prev && prev !== null && started) toast("👨‍🏫 O'qituvchi savolingizga javob berdi", "success");
  } catch {}
}

function sync() {
  const isStudent = session.user?.role === "student";
  if (isStudent && !root) { build(); refresh(); }
  if (!isStudent && root) { root.remove(); root = null; unread = 0; aiHistory = []; }
}

export function initAsk() {
  if (started) return;
  started = true;
  sync();
  setInterval(refresh, EVERY_MS);
  window.addEventListener("tt:auth", sync);
  document.addEventListener("visibilitychange", () => document.visibilityState === "visible" && refresh());
}
