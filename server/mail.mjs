// Elektron pochta yuborish (parolni tiklash kodi uchun). Xizmat muhit o'zgaruvchilari orqali tanlanadi:
//   BREVO_API_KEY  — Brevo (brevo.com, bepul: kuniga 300 ta xat; o'z domeningiz shart emas, yuboruvchi email'ni tasdiqlash kifoya)
//   RESEND_API_KEY — Resend (resend.com, bepul: kuniga 100 ta xat; o'z domeningizni tasdiqlash kerak)
//   MAIL_FROM      — yuboruvchi email (xizmatda tasdiqlangan bo'lishi shart)
//   MAIL_FROM_NAME — yuboruvchi nomi (ixtiyoriy)
//   MAIL_DEBUG=1   — faqat lokal sinov uchun: xat yuborilmaydi, kod server logiga yoziladi
import { COURSE } from "../public/data/course.js";

export const mailProvider = () => {
  const from = process.env.MAIL_FROM;
  if (process.env.BREVO_API_KEY && from) return "brevo";
  if (process.env.RESEND_API_KEY && from) return "resend";
  if (process.env.MAIL_DEBUG === "1") return "log";
  return null;
};
export const mailEnabled = () => mailProvider() !== null;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

/** Oddiy xabar (xavfsizlik ogohlantirishi): sarlavha va matn. */
export async function sendAlertMail(to, subject, text) {
  const brand = COURSE.brand;
  const html = `<div style="font-family:Arial,sans-serif;max-width:520px;margin:auto;color:#14213d"><h2 style="margin:0 0 12px;color:#b91c1c">⚠️ ${esc(brand)}: xavfsizlik ogohlantirishi</h2>${text.split("\n").map((l) => `<p style="margin:6px 0">${esc(l)}</p>`).join("")}</div>`;
  const from = process.env.MAIL_FROM;
  const name = process.env.MAIL_FROM_NAME || brand;
  const provider = mailProvider();
  if (provider === "log") return console.log(`[MAIL_DEBUG] ogohlantirish → ${to}: ${subject}`);
  let res;
  if (provider === "brevo") {
    res = await fetch("https://api.brevo.com/v3/smtp/email", { method: "POST", headers: { "api-key": process.env.BREVO_API_KEY, "content-type": "application/json", accept: "application/json" }, body: JSON.stringify({ sender: { name, email: from }, to: [{ email: to }], subject, textContent: text, htmlContent: html }) });
  } else if (provider === "resend") {
    res = await fetch("https://api.resend.com/emails", { method: "POST", headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, "content-type": "application/json" }, body: JSON.stringify({ from: `${name} <${from}>`, to: [to], subject, text, html }) });
  } else throw new Error("Pochta xizmati sozlanmagan");
  if (!res.ok) throw new Error(`Pochta xizmati xatosi (${provider} ${res.status})`);
}

/** Tasdiqlash kodi xati. purpose: "reset" (parolni tiklash) yoki "teacher" (o'qituvchi sifatida ro'yxatdan o'tish). */
export async function sendResetCode(to, code, minutes, purpose = "reset") {
  const brand = COURSE.brand;
  const what = purpose === "teacher" ? "o'qituvchi sifatida ro'yxatdan o'tish" : "parolni tiklash";
  const subject = `${brand}: ${what} kodi ${code}`;
  const text = `Assalomu alaykum!\n\n${brand} platformasida ${what} uchun tasdiqlash kodi:\n\n${code}\n\nKod ${minutes} daqiqa amal qiladi. Uni hech kimga bermang.\nAgar bu so'rovni siz yubormagan bo'lsangiz, bu xatga e'tibor bermang.`;
  const html = `<div style="font-family:Arial,sans-serif;max-width:480px;margin:auto;color:#14213d"><h2 style="margin:0 0 12px">${esc(brand)}</h2><p>${esc(what[0].toUpperCase() + what.slice(1))} uchun tasdiqlash kodi:</p><p style="font-size:34px;letter-spacing:8px;font-weight:700;background:#eef4ff;padding:14px 18px;border-radius:10px;text-align:center">${esc(code)}</p><p>Kod <b>${minutes} daqiqa</b> amal qiladi. Uni hech kimga bermang.</p><p style="color:#6b7280;font-size:13px">Agar bu so'rovni siz yubormagan bo'lsangiz, bu xatga e'tibor bermang.</p></div>`;
  const from = process.env.MAIL_FROM;
  const name = process.env.MAIL_FROM_NAME || brand;
  const provider = mailProvider();
  if (provider === "log") {
    console.log(`[MAIL_DEBUG] ${to} uchun ${purpose === "teacher" ? "o'qituvchi" : "tiklash"} kodi: ${code}`);
    return;
  }
  let res;
  if (provider === "brevo") {
    res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": process.env.BREVO_API_KEY, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({ sender: { name, email: from }, to: [{ email: to }], subject, textContent: text, htmlContent: html }),
    });
  } else if (provider === "resend") {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({ from: `${name} <${from}>`, to: [to], subject, text, html }),
    });
  } else {
    throw new Error("Pochta xizmati sozlanmagan");
  }
  if (!res.ok) throw new Error(`Pochta xizmati xatosi (${provider} ${res.status}): ${(await res.text()).slice(0, 300)}`);
}

/** Umumiy yetkazish (Brevo/Resend). Xato bo'lsa — Error tashlaydi. */
async function deliver(to, subject, text, html) {
  const from = process.env.MAIL_FROM;
  const name = process.env.MAIL_FROM_NAME || COURSE.brand;
  const provider = mailProvider();
  if (provider === "log") return console.log(`[MAIL_DEBUG] ${to}: ${subject}\n${text}`);
  let res;
  if (provider === "brevo") {
    res = await fetch("https://api.brevo.com/v3/smtp/email", { method: "POST", headers: { "api-key": process.env.BREVO_API_KEY, "content-type": "application/json", accept: "application/json" }, body: JSON.stringify({ sender: { name, email: from }, to: [{ email: to }], subject, textContent: text, htmlContent: html }) });
  } else if (provider === "resend") {
    res = await fetch("https://api.resend.com/emails", { method: "POST", headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, "content-type": "application/json" }, body: JSON.stringify({ from: `${name} <${from}>`, to: [to], subject, text, html }) });
  } else throw new Error("Pochta xizmati sozlanmagan");
  if (!res.ok) throw new Error(`Pochta xizmati xatosi (${provider} ${res.status}): ${(await res.text()).slice(0, 200)}`);
}

/** Yangi o'qituvchiga taklif xati: sayt havolasi, biriktirilgan fanlar va huquqlar, ro'yxatdan o'tish yo'riqnomasi. */
export async function sendInviteMail(to, { by, siteUrl, subjects, perms, existing }) {
  const brand = COURSE.brand;
  const subj = subjects?.length ? subjects.join(", ") : "barcha fanlar";
  const pr = perms?.length ? perms.join("; ") : "barcha bo'limlar";
  const how = existing ? "Profilingiz o'qituvchi profiliga o'tkazildi. Saytga qayta kiring (chiqib, yana kiring)." : `Ro'yxatdan o'tish: saytni oching, «Ro'yxatdan o'tish» → «O'qituvchi» ni tanlang va shu email (${to}) bilan ro'yxatdan o'ting. Email'ga yuboriladigan tasdiqlash kodini kiriting.`;
  const subject = `${brand}: sizga o'qituvchi huquqi berildi`;
  const text = `Assalomu alaykum!\n\n${by} sizni ${brand} platformasiga o'qituvchi sifatida taklif qildi.\n\nFanlar: ${subj}\nRuxsat etilgan bo'limlar: ${pr}\n\n${how}\n\nSayt: ${siteUrl}\n\nAgar bu xat sizga xato kelgan bo'lsa, e'tibor bermang.`;
  const html = `<div style="font-family:Arial,sans-serif;max-width:520px;margin:auto;color:#14213d"><h2 style="margin:0 0 12px">${esc(brand)}</h2><p>${esc(by)} sizni o'qituvchi sifatida taklif qildi.</p><p><b>Fanlar:</b> ${esc(subj)}<br><b>Ruxsat etilgan bo'limlar:</b> ${esc(pr)}</p><p>${esc(how)}</p><p><a href="${esc(siteUrl)}" style="display:inline-block;background:#2563eb;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none">Saytni ochish</a></p><p style="color:#6b7280;font-size:13px">Agar bu xat sizga xato kelgan bo'lsa, e'tibor bermang.</p></div>`;
  await deliver(to, subject, text, html);
}

/** Sinov xati: pochta ulanganini tekshirish. */
export async function sendTestMail(to) {
  await deliver(to, `${COURSE.brand}: sinov xati`, "Pochta xizmati to'g'ri ulangan. Bu sinov xati.", `<p>Pochta xizmati to'g'ri ulangan ✅</p>`);
}
