// Cloudflare Worker: /api/* — server (D1 + R2); himoyalangan fayllar (darslik, rasm, taqdimot) — faqat kirgan foydalanuvchiga;
// qolgan hamma narsa — public/ dagi statik fayllar.
import { handleApi, serveGated } from "./cloudflare.js";

// Darslik mazmuni (matn, test kalitlari, masala yechimlari), rasmlar va taqdimotlar ochiq berilmaydi.
const GATED = /^\/(slides\/|img\/book\/|data\/(book|layers-auto|practice-auto|assignment)\.js$)/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) return handleApi(request, env);
    if (GATED.test(url.pathname)) return serveGated(request, env);
    return env.ASSETS.fetch(request);
  },
};
