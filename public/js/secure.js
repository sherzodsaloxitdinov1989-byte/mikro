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
let currentZone = "";
let shield = null;
let suppressUntil = 0; // fayl tanlash oynasi va tizim dialoglari ochilganda oyna fokusi yo'qolishi — qoidabuzarlik emas
const lastSent = {};

let gating = false; // «Boshlash» oynasi ochiq: sahifa yopiq, hodisalar hisoblanmaydi
let gateEl = null;
const active = () => session.user && session.user.role !== "teacher" && !gating && (routeSecure || zoneVisible);
const pageName = () => (location.hash || "#/").split("?")[0].slice(0, 80);

/** Talaba shu paytda nima qilayotgani (o'qituvchiga qayd etiladi): sahifa va ko'rinib turgan bo'lim bo'yicha. */
function describeAction() {
  const hash = (location.hash || "#/").split("?")[0];
  const title = (document.querySelector("#main h1")?.textContent || "").trim().slice(0, 90);
  let m;
  if ((m = hash.match(/^#\/assignment\/(\d+)/))) return `Topshiriq (20 ball): ${m[1]}-bosqich sahifasi${title ? ` — ${title}` : ""}`;
  if (hash === "#/assignment") return "Topshiriq (20 ball) sahifasi";
  if (/^#\/tasks\/[\w-]+/.test(hash)) return `Vazifa: ${title || "topshiriq sahifasi"}`;
  if (hash === "#/tasks") return "Vazifalar ro'yxati";
  if (/^#\/practice\//.test(hash)) return `Amaliy mashg'ulot: ${title || ""}`.trim();
  if (/^#\/live\/play/.test(hash)) return "Jonli viktorina";
  if (/^#\/topics\/[\w-]+/.test(hash)) {
    const zone = { quiz: "Mavzu testi", practice: "Amaliy bo'lim", self: "Mustaqil ish" }[currentZone] || "Darslik o'qish";
    return `${zone}${title ? `: ${title}` : ""}`;
  }
  if (/^#\/selfstudy|^#\/self-study/.test(hash)) return "Mustaqil ta'lim";
  return title ? `Sahifa: ${title}` : `Sahifa: ${hash}`;
}

export function report(type, detail = "") {
  if (!session.user || session.user.role === "teacher") return;
  const now = Date.now();
  if (now - (lastSent[type] || 0) < 4000) return;
  lastSent[type] = now;
  fetch("/api/security/event", { method: "POST", headers: { "content-type": "application/json", authorization: `Bearer ${session.token}` }, body: JSON.stringify({ type, detail, action: describeAction(), page: pageName() }), keepalive: true }).catch(() => {});
}

function showShield(reason) {
  if (!shield) {
    shield = document.createElement("div");
    shield.className = "secure-shield";
    shield.innerHTML = `<div class="secure-shield-box"><div style="font-size:3rem">🔒</div><h2>Himoyalangan sahifa</h2><p class="secure-why"></p><p class="muted small">Test va topshiriqlarning ekran suratini olish yoki tarqatish taqiqlanadi. Bunday urinishlar o'qituvchiga qayd etiladi va AI qo'ygan bahoni kamaytiradi.</p><button type="button" class="btn lg">Davom etish</button></div>`;
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

function trigger(type, reason, detail = "") {
  if (!active()) return;
  if (type === "leave" && Date.now() < suppressUntil) return;
  showShield(reason);
  report(type, detail);
}

/** Bo'limlar (test, amaliyot) ko'rinib turganda himoya yoqiladi: mavzu sahifasida. */
function watchZones() {
  const main = document.getElementById("main");
  if (!main || !("IntersectionObserver" in window)) return;
  const seen = new Set();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target));
    zoneVisible = seen.size > 0;
    currentZone = [...seen].map((n) => n.dataset?.chapter).find(Boolean) || "";
    if (!zoneVisible && !routeSecure) hideShield();
    checkGate();
  }, { threshold: [0, 0.01] });
  const attach = () => main.querySelectorAll("[data-chapter='quiz'], [data-chapter='practice'], [data-chapter='self'], [data-secure]").forEach((n) => { if (!n.__secureWatched) { n.__secureWatched = true; io.observe(n); } });
  new MutationObserver(attach).observe(main, { childList: true, subtree: true });
  attach();
}

/** Talabaga ish boshlanishidan oldin ko'rsatiladigan qoidalar va oqibatlar (integrity.mjs dagi jarimalar bilan mos). */
export const SECURITY_RULES = [
  ["📸", "Ekran surati (PrintScreen, Win+Shift+S), bosib chiqarish yoki sahifa manbasini ochish", "har biri jiddiy hodisa: bahoning 15% gacha kamayishi (3 martagacha hisoblanadi)"],
  ["📋", "Matnni nusxalash yoki sahifani saqlash (Ctrl+C, Ctrl+S)", "har biri bahoni 10% ga kamaytiradi (3 martagacha)"],
  ["🪟", "Boshqa oyna, ilova yoki yorliqqa o'tish", "dastlabki 5 marta kechiriladi, keyingisi bahoni 5% ga kamaytiradi (4 martagacha)"],
  ["🖱️", "O'ng tugma (kontekst menyu)", "har biri bahoni 5% ga kamaytiradi (3 martagacha)"],
];
export const SECURITY_NOTE = "Bitta ish uchun baho jami ko'pi bilan 50% ga kamayadi. Hodisa yuz berganda ekran xiralashadi va o'qituvchiga qayd etiladi; ekranda ismingiz bilan watermark turadi.";

function gateInfo(key) {
  if (/#\/assignment\//.test(key)) return ["📝", "20 ballik topshiriq"];
  if (/#\/tasks\//.test(key)) return ["🗂️", "Vazifa"];
  if (/#\/practice\//.test(key)) return ["🧮", "Amaliy mashg'ulot"];
  if (/:quiz$/.test(key)) return ["✅", "Mavzu testi"];
  if (/:practice$/.test(key)) return ["🧮", "Amaliy mashg'ulot (mashqlar)"];
  if (/:self$/.test(key)) return ["🧩", "Mustaqil ish"];
  return ["🔒", "Topshiriq"];
}

const ackKey = () => `tt.sec.ack.${session.user?.id || ""}`;
const acked = (key) => { try { return JSON.parse(sessionStorage.getItem(ackKey()) || "[]").includes(key); } catch { return false; } };
const ack = (key) => { try { const a = JSON.parse(sessionStorage.getItem(ackKey()) || "[]"); if (!a.includes(key)) { a.push(key); sessionStorage.setItem(ackKey(), JSON.stringify(a.slice(-80))); } } catch {} };

/** Qaysi ish sahifasida/bo'limida ekanligimiz: «Boshlash» tasdig'i shu kalit bo'yicha so'raladi (test paytidagi sahifa va ro'yxatlar — kirmaydi). */
function gateKey() {
  const hash = (location.hash || "#/").split("?")[0];
  let m;
  if ((m = hash.match(/^#\/(assignment\/\d+|tasks\/[\w-]+|practice\/[\w-]+)/))) return `#/${m[1]}`;
  if (/^#\/topics\/[\w-]+/.test(hash) && zoneVisible && ["quiz", "practice", "self"].includes(currentZone)) return `${hash}:${currentZone}`;
  return null;
}

function checkGate() {
  if (!session.user || session.user.role === "teacher") return endGate();
  const key = gateKey();
  if (!key || acked(key)) return endGate();
  if (gating && gateEl?.dataset.key === key) return;
  showGate(key);
}

function endGate() {
  if (!gating) return;
  gating = false;
  gateEl?.classList.remove("on");
  document.body.classList.remove("secure-blur");
}

function showGate(key) {
  const [icon, name] = gateInfo(key);
  if (!gateEl) {
    gateEl = document.createElement("div");
    gateEl.className = "secure-shield";
    gateEl.style.zIndex = "10001";
    document.body.append(gateEl);
  }
  gateEl.dataset.key = key;
  gateEl.innerHTML = `<div class="secure-shield-box" style="max-width:560px;text-align:left"><div style="font-size:2.4rem;text-align:center">${icon}</div><h2 style="text-align:center;margin:6px 0 4px">${name}ni boshlashdan oldin</h2><p class="muted small" style="text-align:center">Quyidagi qoidalarga zid harakat qilsangiz, ishingiz bahosi kamayadi.</p><ul style="padding-left:0;list-style:none;display:grid;gap:8px;margin:14px 0">${SECURITY_RULES.map(([i, what, res]) => `<li style="display:flex;gap:10px"><span>${i}</span><span><b>${what}</b><br><span class="muted small">→ ${res}</span></span></li>`).join("")}</ul><p class="small">${SECURITY_NOTE}</p><div style="text-align:center;margin-top:14px"><button class="btn lg" type="button">▶ Qoidalarni tushundim, boshlayman</button></div></div>`;
  gateEl.querySelector("button").addEventListener("click", () => {
    ack(key);
    report("start", `${name}: ish boshlandi`);
    endGate();
  });
  gating = true;
  gateEl.classList.add("on");
  document.body.classList.add("secure-blur");
}

export function setRouteSecure(on) {
  routeSecure = on;
  document.body.classList.toggle("secure-route", on);
  if (!on && !zoneVisible) hideShield();
  if (on && session.user && session.user.role !== "teacher" && !document.hasFocus() && !gating) showShield("Sahifaga qaytganingizda davom eting.");
  setTimeout(checkGate, 60);
}

export function initSecureMode() {
  // Fayl yuklash (topshiriq hisoboti) oynasi ochilganda brauzer fokusni yo'qotadi: bu holat hisobga olinmaydi
  document.addEventListener("click", (e) => {
    if (e.target?.closest?.("input[type=file], label")?.querySelector?.("input[type=file]") || e.target?.matches?.("input[type=file]")) suppressUntil = Date.now() + 120_000;
  }, true);
  window.addEventListener("focus", () => { suppressUntil = Math.min(suppressUntil, Date.now() + 1500); });
  window.addEventListener("blur", () => trigger("leave", "Oyna fokusini yo'qotdi (boshqa ilova yoki suratga olish dasturi ochilgan bo'lishi mumkin).", "Oyna fokusini yo'qotdi: boshqa ilovaga o'tdi yoki suratga olish dasturi ochildi"));
  document.addEventListener("visibilitychange", () => document.hidden && trigger("leave", "Sahifadan chiqdingiz.", "Brauzer yorlig'ini almashtirdi yoki oynani yashirdi"));
  const shot = (e) => {
    const k = String(e.key || "");
    const printScreen = k === "PrintScreen" || e.code === "PrintScreen";
    const combo = (e.metaKey && e.shiftKey && ["3", "4", "5", "s", "S"].includes(k)) || (e.ctrlKey && e.shiftKey && ["s", "S"].includes(k));
    if (!printScreen && !combo) return;
    if (!active()) return;
    try { navigator.clipboard?.writeText(" "); } catch {}
    const keys = printScreen ? "PrintScreen tugmasi" : `${e.metaKey ? "Win/Cmd" : "Ctrl"}+Shift+${k.toUpperCase()}`;
    trigger("screenshot", "Ekran surati olishga urinish aniqlandi.", `Bosilgan tugmalar: ${keys}`);
  };
  window.addEventListener("keydown", shot, true);
  window.addEventListener("keyup", shot, true);
  window.addEventListener("beforeprint", () => trigger("print", "Bosib chiqarish taqiqlangan.", "Bosib chiqarish / PDF'ga saqlash oynasi ochildi"));
  window.addEventListener("hashchange", () => setTimeout(checkGate, 80));
  watchZones();
}
