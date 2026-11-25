// Talabaga o'z bepul Gemini kalitini olish bo'yicha batafsil yo'riqnoma (sayt AI limiti tugaganda yoki AI javob bermaganda ko'rsatiladi).
import { h, modal } from "./ui.js";
import { session } from "./api.js";

const STEPS = [
  ["1", "Google AI Studio sahifasini oching", "Brauzerda aistudio.google.com/apikey manzilini oching (telefon yoki kompyuterda)."],
  ["2", "Google hisobingiz bilan kiring", "Gmail pochtangiz (Google hisobi) bilan kiring. Birinchi marta kirsangiz, foydalanish shartlariga rozilik belgisini qo'ying va «Continue» ni bosing."],
  ["3", "Kalit yarating", "«Create API key» (yoki «Get API key» → «Create API key») tugmasini bosing. Loyiha so'ralsa, mavjud loyihani tanlang yoki «Create API key in new project» ni bosing."],
  ["4", "Kalitni nusxalang", "Ekranda «AIza…» bilan boshlanadigan uzun kalit chiqadi. Yonidagi nusxalash (📋 Copy) tugmasini bosing."],
  ["5", "Saytga kiriting", "Shu saytda yuqoridagi menyudan Profil sahifasini oching → «🤖 Shaxsiy Gemini kaliti» kartasidagi maydonga kalitni joylang → «Saqlash». Sayt kalitni darhol tekshiradi va «✅ Kalit ulangan» deb yozadi."],
  ["6", "Ishingizni qayta tekshiring", "Topshiriq, vazifa yoki masala sahifasiga qayting va «🤖 AI bilan tekshirish» tugmasini qayta bosing. Endi tekshiruv sizning kalitingiz orqali bajariladi."],
];

/** reason: nima uchun ko'rsatilmoqda (sayt limiti tugagan / AI javob bermagan). */
export function showOwnKeyGuide(reason = "") {
  let close;
  const body = h("div", { class: "stack" },
    h("div", { class: "alert alert-warn" }, h("b", {}, "Saytning umumiy AI limiti tugagan yoki AI hozir javob bermayapti. "), reason ? h("span", {}, reason) : null),
    h("p", {}, "Ishingizni hoziroq AI tekshiruvidan o'tkazish uchun o'zingizning ", h("b", {}, "bepul Gemini kalitingizni"), " ulang. Unda tekshiruvlar sizning shaxsiy limitingiz hisobidan bajariladi va boshqa talabalarga bog'liq bo'lmaydi; kunlik AI limitingiz ham 4 barobar ko'payadi."),
    h("h3", {}, "📌 Kalitni qanday olish mumkin (3–5 daqiqa)"),
    h("ol", { class: "stack", style: { paddingLeft: "0", listStyle: "none" } }, STEPS.map(([n, t, d]) => h("li", { class: "card", style: { padding: "10px 12px" } }, h("b", {}, `${n}. ${t}`), h("div", { class: "small" }, d)))),
    h("div", { class: "alert small" }, h("b", {}, "Bilish muhim: "), "kalit bepul — bank kartasi talab qilinmaydi. Bepul tarifda kunlik so'rovlar soni cheklangan, lekin bitta talabaga yetarli. Baholash qoidalari o'zgarmaydi: kalit faqat AI tekshiruvi uchun ishlatiladi."),
    h("div", { class: "alert alert-warn small" }, h("b", {}, "Xavfsizlik: "), "kalitni hech kimga bermang va chatlarga yozmang. Saytda u shifrlangan holda saqlanadi va hech kimga (o'qituvchiga ham) ko'rsatilmaydi. Kalit oshkor bo'lsa, AI Studio'da o'chirib, yangisini oling. Sahifa ochilmasa yoki mintaqa qo'llab-quvvatlanmasa, o'qituvchingizga murojaat qiling."),
    h("div", { class: "row end", style: { gap: "8px" } },
      h("button", { class: "btn ghost", onclick: () => close() }, "Keyinroq"),
      h("button", { class: "btn", onclick: () => { close(); location.hash = "#/profile"; } }, "➡ Profilga o'tib kalitni kiritish")));
  close = modal("🤖 O'z AI kalitingizni oling", body, { wide: true });
}

/** Avtomatik ko'rsatish: faqat kaliti yo'q talabaga, 15 daqiqada ko'pi bilan bir marta. */
export function maybeShowOwnKeyGuide(reason = "") {
  const u = session.user;
  if (!u || u.role !== "student" || u.hasAiKey) return;
  try {
    const last = Number(sessionStorage.getItem("tt.aikey.guide") || 0);
    if (Date.now() - last < 15 * 60_000) return;
    sessionStorage.setItem("tt.aikey.guide", String(Date.now()));
  } catch {}
  showOwnKeyGuide(reason);
}
