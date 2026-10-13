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

/** Parolni tiklash kodi xati. */
export async function sendResetCode(to, code, minutes) {
  const brand = COURSE.brand;
  const subject = `${brand}: parolni tiklash kodi ${code}`;
  const text = `Assalomu alaykum!\n\n${brand} platformasida parolni tiklash uchun tasdiqlash kodi:\n\n${code}\n\nKod ${minutes} daqiqa amal qiladi. Uni hech kimga bermang.\nAgar parolni tiklashni siz so'ramagan bo'lsangiz, bu xatga e'tibor bermang — parolingiz o'zgarmaydi.`;
  const html = `<div style="font-family:Arial,sans-serif;max-width:480px;margin:auto;color:#14213d"><h2 style="margin:0 0 12px">${esc(brand)}</h2><p>Parolni tiklash uchun tasdiqlash kodi:</p><p style="font-size:34px;letter-spacing:8px;font-weight:700;background:#eef4ff;padding:14px 18px;border-radius:10px;text-align:center">${esc(code)}</p><p>Kod <b>${minutes} daqiqa</b> amal qiladi. Uni hech kimga bermang.</p><p style="color:#6b7280;font-size:13px">Agar parolni tiklashni siz so'ramagan bo'lsangiz, bu xatga e'tibor bermang — parolingiz o'zgarmaydi.</p></div>`;
  const from = process.env.MAIL_FROM;
  const name = process.env.MAIL_FROM_NAME || brand;
  const provider = mailProvider();
  if (provider === "log") {
    console.log(`[MAIL_DEBUG] ${to} uchun tiklash kodi: ${code}`);
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
