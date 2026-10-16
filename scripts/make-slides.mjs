// Dars taqdimotlarini darslik matnidan avtomatik tuzadi: public/slides/NN.pdf va course.js dagi decks.
// Har bir mavzu uchun: sarlavha, reja, bo'limlar (asosiy fikrlar, grafiklar, kichik jadvallar),
// tushunchalar, xulosalar va nazorat savollari. Matn darslikdan olinadi, o'ylab topilmaydi.
// Ishga tushirish: node scripts/make-slides.mjs [mavzu_raqami ...]   (Chromium kerak: Playwright)
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import { COURSE as BASE_COURSE, SUBJECTS } from "../public/data/course.js";
import { buildLayers } from "../public/data/layers-lib.js";

// Fan tanlash: standart — asosiy fan; "--subject tb" — Tadbirkorlik asoslari (public/slides/tb, public/data/tb/meta.js → DECKS)
const argv = process.argv.slice(2);
const si = argv.indexOf("--subject");
const SUBJ = si >= 0 ? SUBJECTS.find((s) => s.dir === argv[si + 1] || s.key === argv[si + 1]) : SUBJECTS[0];
if (!SUBJ) throw new Error("Noma'lum fan");
if (si >= 0) argv.splice(si, 2);
const dataPath = (f) => "../public/data/" + (SUBJ.dir ? SUBJ.dir + "/" : "") + f;
const { BOOK } = await import(dataPath("book.js"));
const AUTO = (await import(dataPath("layers-auto.js"))).AUTO;
const META = SUBJ.dir ? await import(dataPath("meta.js")) : await import("../public/data/mikro-meta.js");
const LAYERS = buildLayers(AUTO, { icons: META.ICONS, resources: META.RESOURCES });
const COURSE = SUBJ.dir ? { ...BASE_COURSE, ...SUBJ.course } : BASE_COURSE;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public", SUBJ.slides);
fs.mkdirSync(OUT, { recursive: true });

let chromium;
for (const base of [ROOT + "/", "/usr/local/lib/node_modules/", "/node-tools/node_modules/"]) {
  try { ({ chromium } = createRequire(base + "x.js")("playwright")); break; } catch {}
}
if (!chromium) throw new Error("Playwright topilmadi");

const only = argv.map(Number).filter(Boolean);
const topics = BOOK.topics.filter((t) => !only.length || only.includes(t.num));

const CSS = `
@page { size: 1280px 720px; margin: 0 }
* { box-sizing: border-box }
body { margin: 0; font-family: "Inter","Segoe UI",Arial,sans-serif; color: #14213d }
.slide { width: 1280px; height: 720px; page-break-after: always; position: relative; overflow: hidden; background: #fff; padding: 0 }
.bar { height: 112px; background: linear-gradient(90deg,#1d4ed8,#0891b2); color: #fff; display: flex; align-items: center; padding: 0 56px; font-size: 38px; font-weight: 700; line-height: 1.15 }
.bar small { display: block; font-size: 18px; font-weight: 500; opacity: .85; margin-bottom: 4px }
.body { padding: 36px 64px 0 64px }
ul { margin: 0; padding-left: 34px } li { font-size: 29px; line-height: 1.38; margin-bottom: 16px }
li::marker { color: #1d4ed8 }
.foot { position: absolute; left: 56px; right: 56px; bottom: 18px; display: flex; justify-content: space-between; font-size: 15px; color: #6b7280 }
.title-slide { background: linear-gradient(135deg,#0b2a6f,#0e7490); color: #fff; padding: 150px 90px }
.title-slide .no { font-size: 28px; letter-spacing: 3px; opacity: .8 }
.title-slide h1 { font-size: 58px; line-height: 1.12; margin: 22px 0 36px }
.title-slide p { font-size: 24px; opacity: .85; margin: 6px 0 }
.fig { display: flex; align-items: center; justify-content: center; height: 520px; padding: 14px 50px 0 }
.fig img { max-width: 100%; max-height: 500px; border-radius: 8px }
.cap { text-align: center; font-size: 20px; color: #374151; padding: 0 60px }
table { border-collapse: collapse; width: 100%; font-size: 24px }
th, td { border: 1px solid #cbd5e1; padding: 9px 14px; text-align: left } th { background: #e0ecff }
.g { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 30px }
.g div { font-size: 21px; line-height: 1.3; background: #f1f5f9; border-left: 5px solid #1d4ed8; padding: 10px 14px; border-radius: 6px }
.g b { color: #1d4ed8 }
.q li { font-size: 26px }
.steps { margin: 0; padding-left: 40px } .steps li { font-size: 28px; line-height: 1.35; margin-bottom: 14px } .steps li::marker { color: #1d4ed8; font-weight: 700 }
.g1 { display: grid; grid-template-columns: 1fr; gap: 16px } .g1 div { background: #f1f5f9; border-left: 6px solid #1d4ed8; border-radius: 8px; padding: 9px 20px }
.g1 b { display: block; font-size: 22px; color: #1d4ed8; margin-bottom: 2px } .g1 code { display: block; font-size: 26px; font-family: "Cambria Math","Times New Roman",serif; color: #14213d } .g1 small { display: block; font-size: 18px; color: #475569; margin-top: 3px }
.g1 { gap: 12px }
table.tc { font-size: 21px } table.tc th, table.tc td { padding: 5px 12px }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 28px } .cols > div { background: #f8fafc; border-top: 6px solid #1d4ed8; border-radius: 8px; padding: 14px 22px } .cols h3 { margin: 0 0 8px; font-size: 27px; color: #1d4ed8 } .cols li { font-size: 24px }
.body .fig { height: 430px; padding: 0 } .body .fig img { max-height: 420px }
.note { margin-top: 18px; font-size: 22px; color: #334155; background: #eef2ff; border-radius: 8px; padding: 10px 16px }
`;

// Brauzer ichida ishlaydigan quruvchi: bob HTML → slaydlar HTML
function build(data) {
  const { topic, layer, brand, course } = data;
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const short = (s, n) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n)).replace(/[,;:–-]$/, "") + "…");
  const sentences = (t) => t.replace(/\s+/g, " ").trim().split(/(?<=[.!?])\s+(?=[A-ZА-Я«“O‘G‘]|\d)/).filter((s) => s.length > 20);
  const slides = [];
  let n = 0;
  const frame = (title, inner, sub = "") => {
    n++;
    return `<section class="slide"><div class="bar"><div>${sub ? `<small>${esc(sub)}</small>` : ""}${esc(title)}</div></div><div class="body">${inner}</div><div class="foot"><span>${esc(brand)} · ${esc(course)}</span><span>${topic.num}-mavzu · ${n + 1}</span></div></section>`;
  };
  const bullets = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  const chunks = (items, budget) => {
    const out = [];
    let cur = [], len = 0;
    for (const it of items) {
      const l = it.replace(/<[^>]+>/g, "").length;
      if (cur.length && (len + l > budget || cur.length >= 5)) { out.push(cur); cur = []; len = 0; }
      cur.push(it); len += l;
    }
    if (cur.length) out.push(cur);
    return out;
  };

  // 1. Sarlavha
  const title = `<section class="slide title-slide"><div class="no">${topic.num}-MAVZU</div><h1>${esc(layer.title)}</h1><p>${esc(course)}</p><p>${esc(data.author)}</p></section>`;

  // 2. Reja
  const plan = topic.plan.length ? [frame("Reja", bullets(topic.plan.map(esc)))] : [];

  // 3. Bo'limlar
  const body = [];
  for (const sec of topic.sections) {
    if (!sec.title || /xulosalar/i.test(sec.title)) continue;
    const doc = new DOMParser().parseFromString(`<div>${sec.html}</div>`, "text/html").body.firstChild;
    const secTitle = sec.title;
    let sub = secTitle, items = [], pendingCap = "";
    const flush = () => {
      for (const c of chunks(items, 560)) body.push(frame(sub === secTitle ? secTitle : sub, bullets(c), sub === secTitle ? "" : secTitle));
      items = [];
    };
    for (const el of doc.children) {
      const tag = el.tagName;
      if (tag === "H4") {
        const have = items.reduce((a, x) => a + x.length, 0);
        if (items.length && have < 420) { sub = el.textContent.trim(); items.push(`<b style="color:#1d4ed8">${esc(sub)}</b>`); continue; }
        flush(); sub = el.textContent.trim(); continue;
      }
      if (tag === "P" && el.classList.contains("caption")) { pendingCap = el.textContent.trim(); continue; }
      if (tag === "P" && el.classList.contains("figure")) {
        flush();
        const img = el.querySelector("img");
        if (img) {
          n++;
          body.push(`<section class="slide"><div class="bar"><div><small>${esc(secTitle)}</small>${esc(pendingCap || sub)}</div></div><div class="fig"><img src="${img.getAttribute("src")}"></div><div class="foot"><span>${esc(brand)} · ${esc(course)}</span><span>${topic.num}-mavzu · ${n + 1}</span></div></section>`);
          n; pendingCap = "";
        }
        continue;
      }
      if (tag === "P" && el.classList.contains("source")) continue;
      if (tag === "P") {
        const t = el.textContent.replace(/\s+/g, " ").trim();
        if (t.length < 25) continue;
        const dash = /^[–-]\s/.test(t);
        const ss = sentences(t);
        if (!ss.length) continue;
        let txt = dash ? t.replace(/^[–-]\s*/, "") : ss[0];
        if (!dash && txt.length < 90 && ss[1]) txt += " " + ss[1];
        items.push(esc(short(txt, 230)));
      } else if (tag === "UL") {
        for (const li of el.children) items.push(esc(short(li.textContent.trim(), 200)));
      } else if (tag === "DIV" && el.classList.contains("tbl-wrap")) {
        const rows = [...el.querySelectorAll("tr")];
        const cols = rows[0] ? rows[0].children.length : 0;
        if (rows.length >= 2 && rows.length <= 9 && cols <= 6) {
          flush();
          n++;
          const html = `<table>${rows.map((r, i) => `<tr>${[...r.children].map((c) => `<${i ? "td" : "th"}>${esc(short(c.textContent, 60))}</${i ? "td" : "th"}>`).join("")}</tr>`).join("")}</table>`;
          body.push(`<section class="slide"><div class="bar"><div><small>${esc(secTitle)}</small>${esc(pendingCap || sub)}</div></div><div class="body">${html}</div><div class="foot"><span>${esc(brand)} · ${esc(course)}</span><span>${topic.num}-mavzu · ${n + 1}</span></div></section>`);
          pendingCap = "";
        }
      }
    }
    flush();
  }

  // 4. Tushunchalar
  const gl = [];
  for (let i = 0; i < layer.glossary.length; i += 6) {
    const part = layer.glossary.slice(i, i + 6);
    gl.push(frame("Asosiy tushunchalar", `<div class="g">${part.map((g) => `<div><b>${esc(g.term)}</b> – ${esc(short(g.def, 150))}</div>`).join("")}</div>`));
  }

  // 5. Xulosalar
  const concSec = topic.sections.find((s) => /xulosalar/i.test(s.title || ""));
  const conc = [];
  if (concSec) {
    const doc = new DOMParser().parseFromString(`<div>${concSec.html}</div>`, "text/html").body.firstChild;
    const items = [...doc.querySelectorAll("p")].map((p) => p.textContent.replace(/^\d+\)\s*/, "").trim()).filter((t) => t.length > 20).map((t) => esc(short(t, 260)));
    for (const c of chunks(items, 560)) conc.push(frame("Bob bo‘yicha xulosalar", bullets(c)));
  }

  // 6. Nazorat savollari
  const qs = [];
  for (const c of chunks(topic.questions.slice(0, 10).map((q) => esc(short(q, 200))), 620)) qs.push(frame("Nazorat savollari", `<div class="q">${bullets(c)}</div>`));

  // Qo'lda/agent tuzgan slayd rejasi (scripts/slides-src/<fan>/NN.json): bo'lsa, avtomatik bo'lim slaydlari o'rniga shu ishlatiladi
  if (data.outline && data.outline.length) {
    n = 1 + plan.length; // slayd raqamlari: sarlavha + reja, so'ng mazmun
    const out = [];
    for (const sl of data.outline) {
      const sub = sl.sub || "";
      const li = (a) => a.map((x) => `<li>${esc(x)}</li>`).join("");
      if (sl.type === "steps") out.push(frame(sl.title, `<ol class="steps">${li(sl.steps || [])}</ol>`, sub));
      else if (sl.type === "table") out.push(frame(sl.title, `<table class="tc"><tr>${(sl.head || []).map((c) => `<th>${esc(c)}</th>`).join("")}</tr>${(sl.rows || []).map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</table>${sl.note ? `<div class="note">${esc(sl.note)}</div>` : ""}`, sub));
      else if (sl.type === "formula") out.push(frame(sl.title, `<div class="g1">${(sl.items || []).map((i) => `<div><b>${esc(i.name)}</b><code>${esc(i.formula)}</code>${i.note ? `<small>${esc(i.note)}</small>` : ""}</div>`).join("")}</div>`, sub));
      else if (sl.type === "compare") out.push(frame(sl.title, `<div class="cols">${[sl.left, sl.right].map((c) => `<div><h3>${esc(c.head)}</h3><ul>${li(c.items || [])}</ul></div>`).join("")}</div>`, sub));
      else if (sl.type === "figure") out.push(frame(sl.title, `<div class="fig"><img src="/img/book/${data.imgDir || ""}${sl.img}"></div><div class="cap">${esc(sl.caption || "")}</div>`, sub));
      else out.push(frame(sl.title, bullets((sl.bullets || []).map(esc)) + (sl.note ? `<div class="note">${esc(sl.note)}</div>` : ""), sub));
    }
    const all2 = [title, ...plan, ...out, ...gl, ...qs];
    return { html: all2.join(""), count: all2.length };
  }
  const all = [title, ...plan, ...body, ...gl, ...conc, ...qs];
  return { html: all.join(""), count: all.length };
}

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--no-sandbox", "--allow-file-access-from-files"] });
const decks = {};
const tmp = path.join(ROOT, "public", ".slides-tmp.html");
for (const t of topics) {
  const page = await browser.newPage();
  fs.writeFileSync(tmp, `<!doctype html><meta charset="utf-8"><style>${CSS}</style><body></body>`);
  await page.goto(pathToFileURL(tmp).href);
  const layer = LAYERS[t.num];
  const outlineFile = path.join(ROOT, "scripts", "slides-src", SUBJ.dir || "", `${String(t.num).padStart(2, "0")}.json`);
  const outline = fs.existsSync(outlineFile) ? JSON.parse(fs.readFileSync(outlineFile, "utf8")).slides : null;
  const { html, count } = await page.evaluate(build, { topic: t, layer, brand: COURSE.brand, course: COURSE.title, author: "Sh.F. Saloxitdinov", outline, imgDir: SUBJ.dir ? SUBJ.dir + "/" : "" });
  const base = pathToFileURL(path.join(ROOT, "public")).href;
  await page.setContent(`<!doctype html><meta charset="utf-8"><base href="${base}/"><style>${CSS}</style><body>${html.replace(/src="\/img\//g, `src="${base}/img/`)}</body>`, { waitUntil: "load" });
  await page.waitForFunction(() => [...document.images].every((i) => i.complete));
  const file = path.join(OUT, `${String(t.num).padStart(2, "0")}.pdf`);
  await page.pdf({ path: file, width: "1280px", height: "720px", printBackground: true });
  decks[t.num] = count;
  console.log(`✔ ${t.num}-mavzu → ${path.relative(ROOT, file)} (${count} slayd, ${(fs.statSync(file).size / 1024) | 0} KB)`);
  await page.close();
}
await browser.close();
fs.rmSync(tmp, { force: true });

// decks yozish: asosiy fan — course.js; boshqa fan — <dir>/meta.js
if (SUBJ.dir) {
  const mp = path.join(ROOT, "public", "data", SUBJ.dir, "meta.js");
  const old = META.DECKS || {};
  const all = { ...old, ...decks };
  const body = Object.entries(all).sort((a, b) => a[0] - b[0]).map(([k, v]) => `${k}: ${v}`).join(", ");
  fs.writeFileSync(mp, fs.readFileSync(mp, "utf8").replace(/export const DECKS = \{[^}]*\};/, `export const DECKS = { ${body} };`));
  console.log(`✅ ${path.relative(ROOT, mp)} → DECKS yangilandi (${Object.keys(decks).length} ta).`);
} else {
  const cp = path.join(ROOT, "public", "data", "course.js");
  const all = { ...COURSE.decks, ...decks };
  const body = Object.entries(all).sort((a, b) => a[0] - b[0]).map(([k, v]) => `${k}: ${v}`).join(", ");
  fs.writeFileSync(cp, fs.readFileSync(cp, "utf8").replace(/decks:\s*\{[^}]*\}/, `decks: { ${body} }`));
  console.log(`✅ course.js → decks yangilandi (${Object.keys(decks).length} ta).`);
}
