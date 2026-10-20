// Xavfsizlik ogohlantirishlari (o'qituvchi uchun): buzib kirishga urinishlar haqida har sahifa tepasida qizil chiziq va toast.
import { h, toast } from "./ui.js";
import { api, session } from "./api.js";

const SEEN = "tt.alert-seen";
const EVERY_MS = 45_000;
let bar = null;
let started = false;
const safe = (fn) => { try { return fn(); } catch { return null; } };

function paint(r) {
  const top = document.querySelector("header.topbar");
  if (!r?.unread) {
    bar?.remove();
    bar = null;
    document.title = document.title.replace(/^\(!\)\s*/, "");
    return;
  }
  if (!/^\(!\)/.test(document.title)) document.title = `(!) ${document.title}`;
  const crit = r.critical > 0;
  const msg = h("a", { href: "#/teacher/alerts", class: "security-bar-link" },
    h("b", {}, `${crit ? "🚨" : "⚠️"} ${r.unread} ta o'qilmagan xavfsizlik ogohlantirishi${crit ? ` (${r.critical} tasi jiddiy)` : ""}`),
    r.latest ? ` — ${r.latest.title}` : "", h("span", { class: "security-bar-go" }, "Ko'rish →"));
  if (!bar) {
    bar = h("div", { class: "security-bar", role: "alert" });
    top?.after(bar);
  }
  bar.className = `security-bar ${crit ? "critical" : ""}`;
  bar.replaceChildren(msg);
  if (r.latest && safe(() => localStorage.getItem(SEEN)) !== r.latest.id) {
    safe(() => localStorage.setItem(SEEN, r.latest.id));
    toast(`${crit ? "🚨" : "⚠️"} ${r.latest.title}`, "error");
  }
}

async function tick() {
  if (session.user?.role !== "teacher") return paint(null);
  try {
    paint(await api.get("admin/alerts?brief=1"));
  } catch {}
}

export function refreshSecurityAlerts() {
  return tick();
}

export function initSecurityAlerts() {
  if (started) return;
  started = true;
  tick();
  setInterval(tick, EVERY_MS);
  window.addEventListener("tt:auth", tick);
  document.addEventListener("visibilitychange", () => document.visibilityState === "visible" && tick());
}
