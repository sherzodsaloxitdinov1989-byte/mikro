// Amaliy mashg'ulot (Mikroiqtisodiyot, masofaviy va kunduzgi 331–334-25): talabaga mavzudan 2 ta masala biriktiriladi,
// u yechimini Word (.docx) faylda yuklaydi va AI bahosini oladi (10 ball). Nazorat savoliga yozma javob ham AI bilan baholanadi.
import { h, toast } from "./ui.js";
import { api } from "./api.js";
import { reviewView } from "./practice-ui.js";
import { confetti } from "./motion.js";

export function docxPanel(topic) {
  const box = h("div", { class: "stack" }, h("div", { class: "card" }, h("div", { class: "sv-spinner" })));
  const result = h("div", { class: "ai-review-box" });
  const file = h("input", { type: "file", accept: ".docx", class: "hidden" });
  const chosen = h("span", { class: "muted small" }, "Fayl tanlanmagan");
  const btn = h("button", { class: "btn lg ai-btn", disabled: true }, "📤 Yuborish va AI bahosini olish");
  file.addEventListener("change", () => {
    const f = file.files[0];
    chosen.textContent = f ? `${f.name} (${Math.round(f.size / 1024)} KB)` : "Fayl tanlanmagan";
    btn.disabled = !f;
  });
  btn.addEventListener("click", async () => {
    const f = file.files[0];
    if (!f) return;
    if (!/\.docx$/i.test(f.name)) return toast("Faqat Word (.docx) fayl yuklang", "warn");
    if (!confirm("Yechim faqat BIR marta topshiriladi. Yuborilsinmi?")) return;
    if (f.size > 6 * 1024 * 1024) return toast("Fayl 6 MB dan oshmasin", "warn");
    btn.disabled = true;
    btn.textContent = "🤖 AI tekshirmoqda… (10–40 soniya)";
    result.replaceChildren(h("div", { class: "card ai-thinking" }, h("div", { class: "sv-spinner" }), h("p", {}, "Sun'iy intellekt yechimingizni namunaviy yechim va 10 ballik mezon bo'yicha tekshirmoqda…")));
    try {
      const res = await api.putBinary(`practice/${topic.id}/docx?name=${encodeURIComponent(f.name)}`, f);
      result.replaceChildren(reviewView(res));
      result.scrollIntoView({ behavior: "smooth", block: "start" });
      if (res.total >= 8) { const r = result.getBoundingClientRect(); setTimeout(() => confetti(r.left + r.width / 2, r.top + 60), 300); }
      toast(`Baho: ${res.total}/10`, "ok");
      btn.closest(".ai-card")?.remove();
    } catch (e) {
      result.replaceChildren(h("div", { class: "alert alert-error" }, e.message));
    } finally {
      btn.textContent = "📤 Yuborish va AI bahosini olish";
      btn.disabled = !file.files[0];
    }
  });
  api.get(`practice/${topic.id}/assigned`).then((d) => {
    if (d.last) result.replaceChildren(reviewView(d.last));
    box.replaceChildren(
      h("div", { class: `alert ${d.last ? "alert-success" : "alert-warn"}` }, d.last ? "Yechimingiz qabul qilingan va baholangan. Amaliy topshiriq faqat bir marta topshiriladi." : "Sizga bu mavzudan 2 ta masala biriktirilgan (har bir talabaga boshqacha). Masalalarni yeching, yechimni (formulalar, hisob-kitob, grafik va xulosa bilan) bitta Word (.docx) faylga joylab yuklang. DIQQAT: yechim faqat BIR marta topshiriladi — qayta yuklab bo'lmaydi, shuning uchun yuborishdan oldin yaxshilab tekshiring. AI 10 ballik tizimda baholaydi."),
      d.tasks.map((t) => h("article", { class: "card practice-task" }, h("div", { class: "row" }, h("span", { class: "q-num" }, t.n), h("h4", {}, `${t.n}-masala`)), h("p", {}, t.text))),
      !d.last && h("div", { class: "card ai-card" },
        h("h3", {}, "📄 Yechimni Word faylda yuklash"),
        h("div", { class: "row wrap", style: { gap: "10px", alignItems: "center" } }, h("button", { class: "btn ghost", onclick: () => file.click() }, "📎 Fayl tanlash"), chosen, file),
        btn),
      result);
  }).catch((e) => box.replaceChildren(h("div", { class: "alert alert-error" }, e.message)));
  return h("div", { class: "stack practice" }, box);
}

/** Nazorat savoli kartasi (AI bahosi bilan): javob yoziladi, «Yuborish» bosiladi, AI 0–10 baho va izoh beradi. */
export function aiQuestionCard(topic, q, i, saved, noteText, onNote) {
  const ta = h("textarea", { rows: 4, placeholder: "Javobingizni qisqacha (2–4 gap) yozing va «Yuborish» tugmasini bosing…" }, noteText || "");
  ta.addEventListener("input", () => onNote(ta.value));
  const out = h("div");
  const draw = (g) => {
    if (!g) return out.replaceChildren();
    out.replaceChildren(h("div", { class: `alert ${g.score >= 7 ? "alert-success" : g.score >= 5 ? "alert-warn" : "alert-error"}` },
      h("b", {}, `🤖 AI bahosi: ${g.score}/10`), g.ai === false ? h("span", { class: "muted small" }, " · taxminiy") : "",
      h("p", {}, g.feedback), g.missing?.length > 0 && h("ul", { class: "small" }, g.missing.map((m) => h("li", {}, m)))));
  };
  draw(saved);
  const btn = h("button", { class: "btn small" }, "Yuborish va AI bahosini olish (bir marta)");
  if (saved) { ta.disabled = true; ta.value = saved.answer || ta.value; btn.remove(); }
  btn.addEventListener("click", async () => {
    if (ta.value.trim().length < 20) return toast("Javobni kamida bir-ikki gap bilan yozing", "warn");
    if (!confirm("Har bir savolga faqat BIR marta javob beriladi. Yuborilsinmi?")) return;
    btn.disabled = true;
    btn.textContent = "🤖 Tekshirilmoqda…";
    try {
      const g = await api.post(`qreview/${topic.id}/${i}`, { answer: ta.value });
      draw(g);
      ta.disabled = true;
      btn.remove();
      toast(`AI bahosi: ${g.score}/10`, g.score >= 5 ? "ok" : "warn");
    } catch (e) {
      toast(e.message, "error");
      btn.disabled = false;
      btn.textContent = "Yuborish va AI bahosini olish (bir marta)";
    }
  });
  return h("div", { class: "card question" }, h("div", { class: "row" }, h("span", { class: "q-num" }, i + 1), h("b", {}, q)), ta, h("div", { class: "row" }, btn), out);
}
