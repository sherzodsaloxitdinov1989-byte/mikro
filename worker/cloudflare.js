// Cloudflare uchun umumiy ulagich: Worker (worker/index.js) va Pages Functions (functions/api/[[path]].js)
// ikkalasi shu funksiyani chaqiradi. Bog'lanishlar: D1 — DB, R2 — FILES (ixtiyoriy).
import { handle, hasSession } from "../server/app.mjs";
import { useStore } from "../server/store.mjs";
import { d1Store } from "../server/store-d1.mjs";

let store = null;

function prepare(env) {
  // Matnli o'zgaruvchilar va maxfiy kalitlar server kodiga process.env orqali beriladi
  for (const [k, v] of Object.entries(env)) if (typeof v === "string") process.env[k] = v;
  process.env.CF_PAGES ||= "1";
  // MP3 ga siqish protsessor vaqtini ko'p oladi — bepul tarifda AI ovozi WAV formatida saqlanadi
  process.env.TTS_FORMAT ||= "wav";
  if (!env.DB) return false;
  store ||= d1Store(env.DB, env.FILES);
  useStore(store);
  return true;
}

export async function handleApi(request, env) {
  if (!prepare(env)) {
    return new Response(JSON.stringify({ error: "Ma'lumotlar bazasi ulanmagan: DB nomli D1 bog'lanishini qo'shing va qayta deploy qiling." }), { status: 503, headers: { "content-type": "application/json; charset=utf-8" } });
  }
  return handle(request);
}

/** Himoyalangan statik fayllar (darslik matni, rasmlar, taqdimotlar): faqat tizimga kirgan foydalanuvchiga beriladi. */
export async function serveGated(request, env) {
  if (!prepare(env)) return new Response("Ma'lumotlar bazasi ulanmagan", { status: 503 });
  if (!(await hasSession(request))) return new Response("Darslik materiallarini ko'rish uchun tizimga kiring", { status: 401, headers: { "cache-control": "no-store", "content-type": "text/plain; charset=utf-8" } });
  const res = await env.ASSETS.fetch(request);
  const headers = new Headers(res.headers);
  // Ma'lumot fayllari (matn, test kalitlari) har safar qayta tekshiriladi (chiqqandan keyin ochilmasligi uchun); rasm va taqdimotlar qisqa muddat keshlanadi.
  headers.set("cache-control", new URL(request.url).pathname.startsWith("/data/") ? "private, no-cache" : "private, max-age=600");
  headers.set("x-content-type-options", "nosniff");
  headers.set("content-disposition", "inline");
  return new Response(res.body, { status: res.status, headers });
}
