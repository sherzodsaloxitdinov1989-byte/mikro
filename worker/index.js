// Cloudflare Worker: /api/* — server (D1 + R2); himoyalangan fayllar (darslik, rasm, taqdimot) — faqat kirgan foydalanuvchiga;
// qolgan hamma narsa — public/ dagi statik fayllar. Barcha javoblarga xavfsizlik sarlavhalari qo'shiladi.
import { handleApi, serveGated } from "./cloudflare.js";

// Darslik mazmuni (matn, test kalitlari, masala yechimlari), rasmlar va taqdimotlar ochiq berilmaydi.
const GATED = /^\/(slides\/|img\/book\/|data\/(((tb|mikro2|makro)\/)?(book|layers-auto|practice-auto)|assignment(-masofaviy)?)\.js$)/;

// Statik fayllar uchun xuddi shu sarlavhalar public/_headers da ham bor (ular Worker'dan o'tmasligi mumkin) — ikkalasini birga yangilang.
const CSP = "default-src 'self'; script-src 'self' 'sha256-XW8LyM+OENkyfugRyQx7IM8YhqagA7yXrGHYu5asRjs='; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https://i.ytimg.com https://img.youtube.com https://i.vimeocdn.com; media-src 'self' blob: data:; connect-src 'self' blob: data:; frame-src 'self' blob: https://www.youtube-nocookie.com https://www.youtube.com https://player.vimeo.com https://docs.google.com https://www.canva.com; worker-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'";
const SECURITY = {
  "content-security-policy": CSP,
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "referrer-policy": "strict-origin-when-cross-origin",
  "strict-transport-security": "max-age=31536000",
  "permissions-policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "cross-origin-opener-policy": "same-origin",
};

function secure(res, apiRoute) {
  const headers = new Headers(res.headers);
  for (const [k, v] of Object.entries(SECURITY)) if (!headers.has(k)) headers.set(k, v);
  // Shaxsiy ma'lumotli API javoblari brauzer/oraliq keshida qolmasin
  if (apiRoute && !headers.has("cache-control")) headers.set("cache-control", "no-store");
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) return secure(await handleApi(request, env), true);
    if (GATED.test(url.pathname)) return secure(await serveGated(request, env));
    return secure(await env.ASSETS.fetch(request));
  },
};
