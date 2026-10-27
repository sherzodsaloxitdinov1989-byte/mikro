// Ochiq turgan oynani yangilash: qo'lda «↻» tugmasi va yangi versiya chiqqanda avtomatik xabar.
// Yangilash — eski kesh va service worker tozalanib, sahifa qayta yuklanadi (kiritilgan javoblar serverda saqlangan bo'ladi).
import { h } from "./ui.js";

const EVERY_MS = 2 * 60_000;
let loaded = null;
let bar = null;

const versionOf = async () => {
  try {
    const t = await (await fetch(`/sw.js?v=${Date.now()}`, { cache: "no-store" })).text();
    return t.match(/VERSION\s*=\s*"([^"]+)"/)?.[1] || null;
  } catch {
    return null;
  }
};

/** Keshni tozalab, sahifani yangi versiya bilan qayta yuklaydi. */
export async function hardRefresh() {
  try {
    const regs = (await navigator.serviceWorker?.getRegistrations?.()) || [];
    await Promise.all(regs.map((r) => r.update().catch(() => {}).then(() => r.unregister())));
    if (window.caches) await Promise.all((await caches.keys()).map((k) => caches.delete(k)));
  } catch {}
  location.reload();
}

function showBar() {
  if (bar) return;
  const inExam = /^#\/exam\/[\w-]+/.test(location.hash);
  bar = h("div", { class: "update-bar", role: "status" },
    h("span", {}, inExam ? "🔄 Saytning yangi versiyasi chiqdi. Test javoblaringiz saqlangan — qulay paytda yangilang." : "🔄 Saytning yangi versiyasi chiqdi."),
    h("button", { class: "btn small", onclick: hardRefresh }, "Yangilash"),
    h("button", { class: "icon-btn", "aria-label": "Yopish", onclick: () => { bar.remove(); bar = null; } }, "✕"));
  document.body.append(bar);
}

async function check() {
  const v = await versionOf();
  if (!v) return;
  if (!loaded) loaded = v;
  else if (v !== loaded) showBar();
}

export function initUpdates() {
  check();
  setInterval(check, EVERY_MS);
  document.addEventListener("visibilitychange", () => document.visibilityState === "visible" && check());
}
