// Test va topshiriqlar uchun himoyalangan rejim.
// Veb-sahifa ekran suratini TO'LIQ to'sa olmaydi (operatsion tizim darajasida olinadi). Shuning uchun quyidagi choralar ishlaydi:
//  • PrintScreen / Win+Shift+S / Cmd+Shift+3-4-5 bosilsa yoki oyna fokusini yo'qotsa (suratga olish dasturlari, boshqa ilovaga o'tish) —
//    kontent darhol xiralashtiriladi va yashiriladi;
//  • bunday hodisalar o'qituvchiga qayd etiladi (panel → Himoya hodisalari);
//  • ekranda talaba ismi bilan watermark turadi (guard.js) — tarqatilgan surat egasini aniqlash mumkin.
// Faqat talabalar uchun; o'qituvchida o'chiq.
import { session, api } from "./api.js";

let routeSecure = false;
let zoneVisible = false;
let shield = null;
let suppressUntil = 0; // fayl tanlash oynasi va tizim dialoglari ochilganda oyna fokusi yo'qolishi — qoidabuzarlik emas
const lastSent = {};

const active = () => session.user && session.user.role !== "teacher" && (routeSecure || zoneVisible);
const pageName = () => (location.hash || "#/").split("?")[0].slice(0, 80);

function report(type) {
  const now = Date.now();
  if (now - (lastSent[type] || 0) < 4000) return;
  lastSent[type] = now;
  fetch("/api/security/event", { method: "POST", headers: { "content-type": "application/json", authorization: `Bearer ${session.token}` }, body: JSON.stringify({ type, page: pageName() }), keepalive: true }).catch(() => {});
}

function showShield(reason) {
  if (!shield) {
    shield = document.createElement("div");
    shield.className = "secure-shield";
    shield.innerHTML = `<div class="secure-shield-box"><div style="font-size:3rem">🔒</div><h2>Himoyalangan sahifa</h2><p class="secure-why"></p><p class="muted small">Test va topshiriqlarning ekran suratini olish yoki tarqatish taqiqlanadi. Bunday urinishlar o'qituvchiga qayd etiladi.</p><button type="button" class="btn lg">Davom etish</button></div>`;
    shield.querySelector("button").addEventListener("click", () => {
      if (!document.hasFocus() || document.hidden) return;
      hideShield();
    });
    document.body.append(shield);
  }
  shield.querySelector(".secure-why").textContent = reason;
  shield.classList.add("on");
  document.body.classList.add("secure-blur");
}

function hideShield() {
  shield?.classList.remove("on");
  document.body.classList.remove("secure-blur");
}

function trigger(type, reason) {
  if (!active()) return;
  if (type === "leave" && Date.now() < suppressUntil) return;
  showShield(reason);
  report(type);
}

/** Bo'limlar (test, amaliyot) ko'rinib turganda himoya yoqiladi: mavzu sahifasida. */
function watchZones() {
  const main = document.getElementById("main");
  if (!main || !("IntersectionObserver" in window)) return;
  const seen = new Set();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target));
    zoneVisible = seen.size > 0;
    if (!zoneVisible && !routeSecure) hideShield();
  }, { threshold: [0, 0.01] });
  const attach = () => main.querySelectorAll("[data-chapter='quiz'], [data-chapter='practice'], [data-chapter='self'], [data-secure]").forEach((n) => { if (!n.__secureWatched) { n.__secureWatched = true; io.observe(n); } });
  new MutationObserver(attach).observe(main, { childList: true, subtree: true });
  attach();
}

export function setRouteSecure(on) {
  routeSecure = on;
  document.body.classList.toggle("secure-route", on);
  if (!on && !zoneVisible) hideShield();
  if (on && session.user && session.user.role !== "teacher" && !document.hasFocus()) showShield("Sahifaga qaytganingizda davom eting.");
}

export function initSecureMode() {
  // Fayl yuklash (topshiriq hisoboti) oynasi ochilganda brauzer fokusni yo'qotadi: bu holat hisobga olinmaydi
  document.addEventListener("click", (e) => {
    if (e.target?.closest?.("input[type=file], label")?.querySelector?.("input[type=file]") || e.target?.matches?.("input[type=file]")) suppressUntil = Date.now() + 120_000;
  }, true);
  window.addEventListener("focus", () => { suppressUntil = Math.min(suppressUntil, Date.now() + 1500); });
  window.addEventListener("blur", () => trigger("leave", "Oyna fokusini yo'qotdi (boshqa ilova yoki suratga olish dasturi ochilgan bo'lishi mumkin)."));
  document.addEventListener("visibilitychange", () => document.hidden && trigger("leave", "Sahifadan chiqdingiz."));
  const shot = (e) => {
    const k = String(e.key || "");
    const printScreen = k === "PrintScreen" || e.code === "PrintScreen";
    const combo = (e.metaKey && e.shiftKey && ["3", "4", "5", "s", "S"].includes(k)) || (e.ctrlKey && e.shiftKey && ["s", "S"].includes(k));
    if (!printScreen && !combo) return;
    if (!active()) return;
    try { navigator.clipboard?.writeText(" "); } catch {}
    trigger("screenshot", "Ekran surati olishga urinish aniqlandi.");
  };
  window.addEventListener("keydown", shot, true);
  window.addEventListener("keyup", shot, true);
  window.addEventListener("beforeprint", () => trigger("screenshot", "Bosib chiqarish taqiqlangan."));
  watchZones();
}
