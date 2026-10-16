// Fan kontentini tekshirish: testlar, metodlar, amaliy masalalar, dolzarb ma'lumotlar va taqdimotlar.
// Ishga tushirish: npm run check   (xato bo'lsa — ro'yxat chiqadi va kod 1 bilan tugaydi)
import fs from "node:fs";
import { BOOK } from "../public/data/book.js";
import { LAYERS } from "../public/data/layers.js";
import { PRACTICE, parseNum } from "../public/data/practice.js";
import { UPDATES } from "../public/data/updates.js";
import { COURSE, SUBJECTS } from "../public/data/course.js";
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

// ---------- Qo'shimcha fanlar (public/data/<dir>/): darslik, qatlam, amaliyot, kalitlar, taqdimotlar, rasmlar ----------
const extra = [];
for (const subj of SUBJECTS.filter((x) => x.dir)) {
  const lab = subj.key;
  const dp = (f) => `../public/data/${subj.dir}/${f}`;
  let B, A, PR, K, M;
  try {
    B = (await import(dp("book.js"))).BOOK;
    A = (await import(dp("layers-auto.js"))).AUTO;
    PR = (await import(dp("practice-auto.js"))).AUTO_PRACTICE;
    M = await import(dp("meta.js"));
    K = (await import(`../server/quiz-keys-${subj.dir}.mjs`)).KEYS;
  } catch (e) {
    err(`${lab}: ma'lumot fayllari yuklanmadi (${e.message})`);
    continue;
  }
  const nn = new Set(B.topics.map((t) => t.num));
  if (!B.topics.length) err(`${lab}: book.js da mavzular yo'q`);
  const sids = new Set();
  for (const t of B.topics) {
    const w = `${lab} ${t.num}-mavzu`;
    if (!t.title || !t.sections?.length) err(`${w}: sarlavha yoki bo'limlar yo'q`);
    for (const s of t.sections || []) for (const m of s.html.matchAll(/src="(\/img\/book\/[^"]+)"/g)) if (!fs.existsSync(new URL(`../public${m[1]}`, import.meta.url))) err(`${w}: rasm yo'q ${m[1]}`);
    const L = A[t.num];
    if (!L) { err(`${w}: pedagogik qatlam yo'q`); continue; }
    if (!(L.glossary || []).length) warn(`${w}: glossariy yo'q`);
    (L.tests || []).forEach((q, i) => {
      const c = K[t.num]?.[i]?.c;
      if (!q.q || !Array.isArray(q.options) || q.options.length !== 4) err(`${w}: ${i + 1}-test noto'g'ri`);
      else if (!(Number.isInteger(c) && c >= 0 && c < 4)) err(`${w}: ${i + 1}-test kaliti yo'q yoki noto'g'ri`);
      else if (new Set(q.options).size !== 4) err(`${w}: ${i + 1}-testda bir xil variantlar bor`);
    });
    if ((L.tests || []).length < 10) warn(`${w}: testlar soni ${L.tests?.length || 0} ta`);
    if ((K[t.num] || []).length !== (L.tests || []).length) err(`${w}: kalitlar soni (${(K[t.num] || []).length}) testlar soniga (${(L.tests || []).length}) teng emas`);
    for (const m of L.methods || []) {
      if (!REQ[m.type]) err(`${w}: noma'lum metod turi "${m.type}"`);
      else for (const k of REQ[m.type]) if (m[k] == null || (Array.isArray(m[k]) && !m[k].length)) err(`${w}: ${m.id || m.type} metodida "${k}" yo'q`);
      if (!m.id || sids.has(m.id)) err(`${w}: metod id yo'q yoki takrorlangan (${m.id})`);
      sids.add(m.id);
    }
    for (const x of L.selfStudy || []) {
      if (!x.id || sids.has(x.id)) err(`${w}: mustaqil ish id yo'q yoki takrorlangan (${x.id})`);
      sids.add(x.id);
    }
    const P = PR[t.num];
    if (!P) { err(`${w}: amaliy mashg'ulot yo'q`); continue; }
    if ((P.open || []).length !== (P.refs || []).length) err(`${w}: open va refs uzunligi teng emas`);
    for (const x of P.tasks || []) {
      if (!x.id || sids.has(x.id)) err(`${w}: masala id yo'q yoki takrorlangan (${x.id})`);
      sids.add(x.id);
      if (!x.fields?.length) err(`${w}: ${x.id} — javob maydonlari yo'q`);
      for (const f of x.fields || []) if (!Number.isFinite(parseNum(f.value))) err(`${w}: ${x.id} — javob son emas (${f.value})`);
    }
  }
  for (const [num, pages] of Object.entries(M.DECKS || {})) {
    const f = `public/${subj.slides}/${String(num).padStart(2, "0")}.pdf`;
    if (!fs.existsSync(new URL(`../${f}`, import.meta.url))) err(`${lab} DECKS: ${f} fayli yo'q`);
    if (!nn.has(Number(num)) || !Number.isInteger(pages) || pages < 1) err(`${lab} DECKS: ${num}-mavzu noto'g'ri`);
  }
  for (const num of nn) if (!(M.DECKS || {})[num]) warn(`${lab} ${num}-mavzu: taqdimot yo'q`);
  extra.push(`${lab}: ${B.topics.length} mavzu · ${Object.values(A).reduce((n, L) => n + (L.tests || []).length, 0)} test · ${Object.values(A).reduce((n, L) => n + (L.methods || []).length, 0)} metod · ${Object.values(PR).reduce((n, P) => n + (P.tasks || []).length, 0)} masala · ${Object.keys(M.DECKS || {}).length} taqdimot`);
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
for (const x of extra) console.log("  ↳", x);
for (const w of warns) console.log("⚠️ ", w);
for (const e of errors) console.log("❌", e);
console.log(errors.length ? `\n${errors.length} ta xato topildi.` : "\n✅ Xato yo'q.");
process.exit(errors.length ? 1 : 0);
