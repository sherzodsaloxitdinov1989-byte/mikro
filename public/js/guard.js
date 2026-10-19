// Darslik mualliflik huquqini himoya qilish (cheklov, to'liq to'sib bo'lmaydi): nusxalash, o'ng tugma, belgilash,
// sudrash, saqlash/bosib chiqarish tugmalari o'chiriladi; talaba ekranida ism-familiyasi bilan xira belgi (watermark) ko'rinadi.
// O'qituvchi (muallif) uchun cheklovlar ishlamaydi.
import { session } from "./api.js";
import { report } from "./secure.js";

const editable = (el) => Boolean(el?.closest?.("input, textarea, select, [contenteditable=true], .allow-copy"));
const active = () => document.documentElement.dataset.role !== "teacher";
const NOTICE = "Darslik muallifning ishlanmasi bo'lib, mualliflik huquqi bilan himoyalangan. Nusxalash va tarqatish taqiqlanadi.";

function watermark() {
  const old = document.getElementById("wm-layer");
  const user = session.user;
  if (!user || user.role === "teacher") return old?.remove();
  const text = `${user.name} · ${user.email || ""}`.slice(0, 60);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='360' height='220'><text x='20' y='120' transform='rotate(-24 180 110)' font-family='Arial' font-size='17' fill='%23000' fill-opacity='0.07'>${encodeURIComponent(text).replace(/'/g, "%27")}</text></svg>`;
  const layer = old || Object.assign(document.createElement("div"), { id: "wm-layer" });
  layer.style.cssText = `position:fixed;inset:0;z-index:9999;pointer-events:none;background:url("data:image/svg+xml;utf8,${svg.replace(/#/g, "%23")}") repeat`;
  if (!old) document.body.append(layer);
}

export function initContentGuard() {
  const block = (e) => {
    if (!active() || editable(e.target)) return;
    e.preventDefault();
    if (e.type === "contextmenu") report("contextmenu", "O'ng tugma bosildi (kontekst menyu ochishga urinish)");
  };
  document.addEventListener("contextmenu", block, true);
  document.addEventListener("dragstart", block, true);
  document.addEventListener("selectstart", (e) => {
    if (!active() || editable(e.target?.parentElement || e.target)) return;
    e.preventDefault();
  }, true);
  for (const type of ["copy", "cut"]) {
    document.addEventListener(type, (e) => {
      if (!active() || editable(e.target)) return;
      e.preventDefault();
      e.clipboardData?.setData("text/plain", NOTICE);
      report("copy", type === "copy" ? "Matnni nusxalashga urindi (Ctrl+C)" : "Matnni kesib olishga urindi (Ctrl+X)");
    }, true);
  }
  document.addEventListener("keydown", (e) => {
    if (!active() || editable(e.target)) return;
    const k = String(e.key || "").toLowerCase();
    const mod = e.ctrlKey || e.metaKey;
    if (mod && ["s", "p", "u"].includes(k)) {
      e.preventDefault();
      if (k === "s") report("save", "Sahifani saqlashga urindi (Ctrl+S)");
      else if (k === "p") report("print", "Bosib chiqarishga urindi (Ctrl+P)");
      else report("source", "Sahifa manbasini ochishga urindi (Ctrl+U)");
    } else if (k === "f12" || (mod && e.shiftKey && ["i", "j", "c"].includes(k))) {
      report("source", `Dasturchi vositalarini ochishga urindi (${k === "f12" ? "F12" : `Ctrl+Shift+${k.toUpperCase()}`})`);
    }
  }, true);
  window.addEventListener("tt:auth", watermark);
  watermark();
}
