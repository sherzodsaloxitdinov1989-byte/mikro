// Test va topshiriqlar uchun himoyalangan rejim.
// Veb-sahifa ekran suratini TO'LIQ to'sa olmaydi (operatsion tizim darajasida olinadi). Shuning uchun quyidagi choralar ishlaydi:
//  • PrintScreen / Win+Shift+S / Cmd+Shift+3-4-5 bosilsa yoki oyna fokusini yo'qotsa (suratga olish dasturlari, boshqa ilovaga o'tish) —
//    kontent darhol xiralashtiriladi va yashiriladi;
//  • bunday hodisalar o'qituvchiga qayd etiladi (panel → Himoya hodisalari);
//  • ekranda talaba ismi bilan watermark turadi (guard.js) — tarqatilgan surat egasini aniqlash mumkin.
// Faqat talabalar uchun; o'qituvchida o'chiq.
import { session, api } from "./api.js";
import { toast } from "./ui.js";

let routeSecure = false;
let zoneVisible = false;
let currentZone = "";
let shield = null;
let suppressUntil = 0; // fayl tanlash oynasi va tizim dialoglari ochilganda oyna fokusi yo'qolishi — qoidabuzarlik emas
const lastSent = {};

let gating = false; // «Boshlash» oynasi ochiq: sahifa yopiq, hodisalar hisoblanmaydi
let gateEl = null;
// Himoya qoidalari faqat «Boshlash» tugmasi bosilgandan keyin ishlaydi (test/topshiriq/vazifa/mashq sahifalarida); undan oldin hodisalar hisoblanmaydi
const started = () => { const k = gateKey(); return !k || acked(k); };
const active = () => session.user && session.user.role !== "teacher" && !gating && (routeSecure || zoneVisible) && started();
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
  if (type !== "start" && !started()) return; // «Boshlash» bosilmaguncha hodisalar qayd etilmaydi
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
  ["🤖", "Ish paytida AI yordamchidan savolning javobini so'rashga urinish (so'rov yuborilmaydi)", "har bir urinish bahoni 20% ga kamaytiradi (2 martagacha)"],
  ["📱", "Telefonda ekranni uzoq bosib turish, barmoq bilan chizish yoki aylana chizish (Circle to Search, Gemini va boshqa AI), 3 va undan ortiq barmoq bilan bosish, ustiga AI yordamchi qatlamini ochish", "uzoq bosish — dastlabki marta kechiriladi, keyingisi 10%; chizish va AI qatlami — 15% gacha"],
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

/** Talaba hozir test/topshiriq/mashq bajaryaptimi (boshlash tasdiqlangan)? */
export function inWork() {
  if (!session.user || session.user.role === "teacher" || gating) return false;
  if (/^#\/exam\/[\w-]+/.test((location.hash || "").split("?")[0])) return true;
  const key = gateKey();
  return Boolean(key && acked(key));
}

/** AI yordamchidan foydalanish: ish bajarilayotganda yopiq. Urinish qayd etilib, baho 20% kamayadi. true — so'rov to'xtatilsin. */
export function aiBlocked() {
  if (!inWork()) return false;
  report("aihelp", "AI yordamchidan savol javobini so'rashga urindi");
  toast("Topshiriq, test yoki mashq bajarilayotganda AI yordamchidan foydalanish taqiqlangan. Urinish qayd etildi: baho 20% ga kamaytiriladi.", "error");
  return true;
}

function checkGate() {
  if (!session.user || session.user.role === "teacher") return hideStart();
  const key = gateKey();
  if (!key || acked(key)) return hideStart();
  showStart(key);
}

let startEl = null;
function hideStart() {
  startEl?.remove();
  startEl = null;
}
/** Ogohlantirish oynasi emas — sahifa ochiq turadi, pastda «Boshlash» tugmasi: bosilgandan keyingina himoya qoidalari kuchga kiradi. */
function showStart(key) {
  if (startEl?.dataset.key === key) return;
  hideStart();
  const [icon, name] = gateInfo(key);
  startEl = document.createElement("div");
  startEl.dataset.key = key;
  startEl.style.cssText = "position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:10000;background:var(--card,#fff);border:1px solid var(--line,#d0d7de);border-radius:14px;padding:10px 14px;box-shadow:0 8px 28px rgba(0,0,0,.22);display:flex;gap:12px;align-items:center;max-width:calc(100vw - 24px)";
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.type = "button";
  btn.textContent = `▶ ${name}ni boshlash`;
  btn.addEventListener("click", () => {
    ack(key);
    report("start", `${name}: ish boshlandi`);
    hideStart();
  });
  const label = document.createElement("span");
  label.textContent = `${icon} Tayyor bo'lganingizda bosing`;
  label.className = "small";
  startEl.append(label, btn);
  document.body.append(startEl);
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
  const btn = gateEl.querySelector("button");
  const label = btn.textContent;
  let left = 5;
  let timer = null;
  const begin = () => {
    clearInterval(timer);
    if (gateEl?.dataset.key !== key || !gating) return;
    ack(key);
    report("start", `${name}: ish boshlandi`);
    endGate();
  };
  btn.addEventListener("click", begin);
  // Ogohlantirish 5 soniyadan so'ng o'zi yopiladi (sanash tugmada ko'rinib turadi)
  btn.textContent = `${label} (${left})`;
  timer = setInterval(() => {
    left -= 1;
    if (left <= 0) return begin();
    btn.textContent = `${label} (${left})`;
  }, 1000);
  gating = true;
  gateEl.classList.add("on");
  document.body.classList.add("secure-blur");
}

export function setRouteSecure(on) {
  routeSecure = on;
  document.body.classList.toggle("secure-route", on);
  if (!on && !zoneVisible) hideShield();
  if (on && session.user && session.user.role !== "teacher" && !document.hasFocus() && !gating && started()) showShield("Sahifaga qaytganingizda davom eting.");
  setTimeout(checkGate, 60);
}

export function initSecureMode() {
  // ---- Telefon: AI yordamchi (Gemini, Circle to Search) sahifani almashtirmasdan ochilishi mumkin: uzoq bosish, chizish, ko'p barmoq va fokus yo'qolishi kuzatiladi ----
  const interactive = (el) => Boolean(el?.closest?.("input, textarea, select, button, a, label, [contenteditable=true], .allow-copy, video, audio"));
  let lp = null;
  let stroke = null;
  const stopLp = () => { clearTimeout(lp?.t); lp = null; };
  document.addEventListener("touchstart", (e) => {
    if (!active()) return;
    if (e.touches.length >= 3) return trigger("multitouch", "Ko'p barmoqli bosish aniqlandi.", `${e.touches.length} ta barmoq bir vaqtda bosildi`);
    if (e.touches.length !== 1 || interactive(e.target)) { stopLp(); stroke = null; return; }
    const t = e.touches[0];
    stroke = { x0: t.clientX, y0: t.clientY, minX: t.clientX, maxX: t.clientX, minY: t.clientY, maxY: t.clientY, path: 0, lx: t.clientX, ly: t.clientY, t0: Date.now(), rx: 0, ry: 0, dx: 0, dy: 0 };
    stopLp();
    lp = { x: t.clientX, y: t.clientY, t: setTimeout(() => { if (lp && active()) { lp = null; trigger("longpress", "Ekranni uzoq bosib turish aniqlandi.", "Barmoq ekranda 0,8 soniyadan ortiq harakatsiz turdi"); } }, 800) };
  }, { passive: true, capture: true });
  document.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    if (lp && Math.hypot(t.clientX - lp.x, t.clientY - lp.y) > 14) stopLp();
    if (!stroke || !active()) return;
    const sx = t.clientX - stroke.lx, sy = t.clientY - stroke.ly;
    stroke.path += Math.hypot(sx, sy);
    // yo'nalish o'zgarishlari (aylana yoki g'ijimlash: x va y bo'yicha qayta-qayta teskari yo'nalish)
    if (Math.abs(sx) > 2) { const d = Math.sign(sx); if (stroke.dx && d !== stroke.dx) stroke.rx++; stroke.dx = d; }
    if (Math.abs(sy) > 2) { const d = Math.sign(sy); if (stroke.dy && d !== stroke.dy) stroke.ry++; stroke.dy = d; }
    stroke.lx = t.clientX; stroke.ly = t.clientY;
    stroke.minX = Math.min(stroke.minX, t.clientX); stroke.maxX = Math.max(stroke.maxX, t.clientX);
    stroke.minY = Math.min(stroke.minY, t.clientY); stroke.maxY = Math.max(stroke.maxY, t.clientY);
    const w = stroke.maxX - stroke.minX, h = stroke.maxY - stroke.minY;
    const closed = Math.hypot(t.clientX - stroke.x0, t.clientY - stroke.y0) < Math.max(w, h) * 0.35;
    // oddiy aylantirish (scroll) deyarli bir yo'nalishda bo'ladi; chizish — ikkala o'qda ham keng va yo'nalishi o'zgaruvchan
    if (w > 90 && h > 90 && stroke.path > 380 && (stroke.rx >= 2 && stroke.ry >= 2 || (closed && stroke.path > 3 * Math.max(w, h) * 0.9))) {
      stroke = null;
      stopLp();
      trigger("draw", "Ekranda chizish yoki aylana chizish aniqlandi.", "Barmoq bilan ekranga chizildi (Circle to Search kabi AI vositasi bo'lishi mumkin)");
    }
  }, { passive: true, capture: true });
  for (const ev of ["touchend", "touchcancel"]) document.addEventListener(ev, () => { stopLp(); stroke = null; }, { passive: true, capture: true });
  // Boshqa ilova (AI yordamchi) qatlami sahifa ustida ochilganda oyna fokusi yo'qoladi, lekin ba'zi telefonlarda blur hodisasi kelmaydi: fokus muntazam tekshiriladi
  let lastLeave = 0;
  window.addEventListener("blur", () => { lastLeave = Date.now(); });
  let lostSince = 0;
  setInterval(() => {
    if (!active() || document.hidden || Date.now() < suppressUntil || document.activeElement?.tagName === "IFRAME") { lostSince = 0; return; }
    if (document.hasFocus()) { lostSince = 0; return; }
    lostSince ||= Date.now();
    if (Date.now() - lostSince > 1500 && Date.now() - lastLeave > 4000) { lostSince = 0; trigger("overlay", "Sahifa fokusini yo'qotdi: ustiga boshqa ilova yoki AI yordamchi qatlami ochilgan bo'lishi mumkin.", "Sahifa ko'rinib turibdi, lekin fokus yo'q (AI yordamchi/qatlam)"); }
  }, 700);
  // Fayl tanlash oynasi dastur orqali ochilganda (input.click() / showPicker()) ham oyna fokusi yo'qolishi jarima keltirmaydi
  try {
    const nativeClick = HTMLInputElement.prototype.click;
    HTMLInputElement.prototype.click = function (...a) { if (this.type === "file") suppressUntil = Date.now() + 120_000; return nativeClick.apply(this, a); };
  } catch {}
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
