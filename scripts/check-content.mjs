// Fan kontentini tekshirish: testlar, metodlar, amaliy masalalar, dolzarb ma'lumotlar va taqdimotlar.
// Ishga tushirish: npm run check   (xato bo'lsa — ro'yxat chiqadi va kod 1 bilan tugaydi)
import fs from "node:fs";
import { BOOK } from "../public/data/book.js";
import { LAYERS } from "../public/data/layers.js";
import { PRACTICE, parseNum } from "../public/data/practice.js";
import { UPDATES } from "../public/data/updates.js";
import { COURSE } from "../public/data/course.js";
let KEYS = {};
try {
  KEYS = (await import("../server/quiz-keys.mjs")).KEYS;
} catch {}

const errors = [];
const warns = [];
const err = (m) => errors.push(m);
const warn = (m) => warns.push(m);
const nums = new Set(BOOK.topics.map((t) => t.num));
const strip = (html) => String(html || "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ");

if (!BOOK.topics.length) err("book.js: mavzular yo'q");
for (const t of BOOK.topics) {
  const where = `book.js ${t.num}-mavzu`;
  if (!t.title) err(`${where}: sarlavha yo'q`);
  if (!t.sections?.length) err(`${where}: bo'limlar yo'q`);
  for (const s of t.sections || []) if (!strip(s.html).trim()) warn(`${where}: “${s.title}” bo'limi bo'sh`);
  if (!t.questions?.length) warn(`${where}: nazorat savollari yo'q`);
  if (!LAYERS[t.num]) warn(`layers.js: ${t.num}-mavzu uchun pedagogik qatlam yo'q (test, glossariy, metodlar)`);
}

const REQ = { brainstorm: ["examples"], cluster: ["center", "sample"], venn: ["a", "b", "items"], case: ["text", "questions"], fsmu: ["statement"], insert: ["sentences"], matching: ["pairs"], tchart: ["left", "right"], ordering: ["items"] };
const ids = new Set();
for (const [num, L] of Object.entries(LAYERS)) {
  const where = `layers.js ${num}-mavzu`;
  if (!nums.has(Number(num))) err(`${where}: book.js da bunday mavzu yo'q`);
  (L.tests || []).forEach((q, i) => {
    if (!q.q || !Array.isArray(q.options) || q.options.length < 2) err(`${where}: ${i + 1}-test noto'g'ri`);
    else if (!(Number.isInteger(KEYS[num]?.[i]?.c) && KEYS[num][i].c >= 0 && KEYS[num][i].c < q.options.length)) err(`${where}: ${i + 1}-test — to'g'ri javob kaliti (server/quiz-keys.mjs) yo'q yoki variantlar oralig'ida emas`);
    else if (new Set(q.options).size !== q.options.length) err(`${where}: ${i + 1}-testda bir xil variantlar bor`);
  });
  if ((L.tests || []).length < 5) warn(`${where}: testlar soni ${L.tests?.length || 0} ta (tavsiya: 6–10)`);
  for (const m of L.methods || []) {
    if (!REQ[m.type]) err(`${where}: noma'lum metod turi "${m.type}"`);
    else for (const k of REQ[m.type]) if (m[k] == null || (Array.isArray(m[k]) && !m[k].length)) err(`${where}: ${m.id || m.type} metodida "${k}" yo'q`);
    if (!m.id) err(`${where}: metodda id yo'q`);
    else if (ids.has(m.id)) err(`${where}: metod id takrorlangan: ${m.id}`);
    ids.add(m.id);
    if (m.type === "venn") for (const [, side] of m.items || []) if (!["a", "b", "both"].includes(side)) err(`${where}: ${m.id} — Venn elementi "a", "b" yoki "both" bo'lishi kerak`);
  }
  for (const s of L.selfStudy || []) {
    if (!s.id || ids.has(s.id)) err(`${where}: mustaqil ish id yo'q yoki takrorlangan (${s.id})`);
    ids.add(s.id);
  }
}

for (const [num, P] of Object.entries(PRACTICE)) {
  const where = `practice.js ${num}-mavzu`;
  if (!nums.has(Number(num))) err(`${where}: book.js da bunday mavzu yo'q`);
  if (!P.goal) warn(`${where}: maqsad (goal) yo'q`);
  if (!Array.isArray(P.concepts)) err(`${where}: concepts massiv bo'lishi kerak`);
  if (!Array.isArray(P.tasks)) err(`${where}: tasks massiv bo'lishi kerak (bo'sh bo'lsa ham [])`);
  for (const t of P.tasks || []) {
    if (!t.id || ids.has(t.id)) err(`${where}: masala id yo'q yoki takrorlangan (${t.id})`);
    ids.add(t.id);
    if (!t.fields?.length) err(`${where}: ${t.id} — javob maydonlari yo'q`);
    for (const f of t.fields || []) if (!Number.isFinite(parseNum(f.value))) err(`${where}: ${t.id} — “${f.label}” javobi son emas (${f.value})`);
    if (!t.solution) warn(`${where}: ${t.id} — namunaviy yechim yo'q`);
  }
  if (!(P.tasks || []).length && !(P.open || []).length) err(`${where}: na masala, na ochiq topshiriq bor`);
}

for (const u of UPDATES) {
  const where = `updates.js "${u.id}"`;
  for (const k of ["id", "topics", "area", "old", "now"]) if (!u[k]) err(`${where}: "${k}" yo'q`);
  if (!u.sources?.length) warn(`${where}: manba ko'rsatilmagan`);
  for (const n of u.topics || []) if (n !== 0 && !nums.has(n)) err(`${where}: ${n}-mavzu yo'q`);
  if (u.match) {
    // Platformadagidek: faqat <p> xatboshilari ichida, apostroflar bir xillashtirilgan holda qidiriladi
    const ap = (x) => x.replace(/[‘’ʻ']/g, "'");
    const unesc = (x) => x.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, "&");
    const html = [BOOK.intro || "", ...BOOK.topics.filter((t) => u.topics.includes(t.num)).flatMap((t) => t.sections.map((s) => s.html))].join("");
    const paras = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => ap(unesc(m[1].replace(/<[^>]+>/g, ""))));
    if (!paras.some((x) => x.includes(ap(u.match)))) warn(`${where}: match parchasi tegishli mavzu xatboshilarida topilmadi — matnda sariq belgi chiqmaydi`);
  }
}

for (const [num, pages] of Object.entries(COURSE.decks || {})) {
  const f = `public/slides/${String(num).padStart(2, "0")}.pdf`;
  if (!fs.existsSync(new URL(`../${f}`, import.meta.url))) err(`course.js decks: ${f} fayli yo'q`);
  if (!Number.isInteger(pages) || pages < 1) err(`course.js decks: ${num}-mavzu sahifalar soni noto'g'ri`);
}

const totals = {
  mavzu: BOOK.topics.length,
  test: Object.values(LAYERS).reduce((s, L) => s + (L.tests || []).length, 0),
  metod: Object.values(LAYERS).reduce((s, L) => s + (L.methods || []).length, 0),
  tushuncha: Object.values(LAYERS).reduce((s, L) => s + (L.glossary || []).length, 0),
  masala: Object.values(PRACTICE).reduce((s, P) => s + (P.tasks || []).length, 0),
  "dolzarb ma'lumot": UPDATES.length,
};
console.log(Object.entries(totals).map(([k, v]) => `${v} ${k}`).join(" · "));
for (const w of warns) console.log("⚠️ ", w);
for (const e of errors) console.log("❌", e);
console.log(errors.length ? `\n${errors.length} ta xato topildi.` : "\n✅ Xato yo'q.");
process.exit(errors.length ? 1 : 0);
