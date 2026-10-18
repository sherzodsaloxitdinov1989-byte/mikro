// Word (.docx) faylidan matn, jadval, diagramma ma'lumotlari va rasmlarni ajratib olish (Worker va Node uchun).
// .docx — ZIP: word/document.xml (matn), word/media/* (rasmlar), word/charts/* (Word diagrammalari).

const dec = new TextDecoder();
const AI_IMAGE = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp", gif: "image/gif" };
export const MAX_IMAGES = 10;
const MAX_IMAGE_BYTES = 4 * 1024 * 1024;
const MAX_TOTAL_BYTES = 10 * 1024 * 1024;

async function inflate(raw) {
  const stream = new Blob([raw]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

/** ZIP markaziy katalogi: { nom: { method, csize, local } } */
function zipIndex(bytes) {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let eocd = -1;
  for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 70000); i--) {
    if (dv.getUint32(i, true) === 0x06054b50) {
      eocd = i;
      break;
    }
  }
  if (eocd < 0) throw new Error("ZIP topilmadi");
  const count = dv.getUint16(eocd + 10, true);
  let p = dv.getUint32(eocd + 16, true);
  const index = {};
  for (let n = 0; n < count; n++) {
    if (dv.getUint32(p, true) !== 0x02014b50) break;
    const nameLen = dv.getUint16(p + 28, true);
    const extraLen = dv.getUint16(p + 30, true);
    const commentLen = dv.getUint16(p + 32, true);
    const name = dec.decode(bytes.subarray(p + 46, p + 46 + nameLen));
    index[name] = { method: dv.getUint16(p + 10, true), csize: dv.getUint32(p + 20, true), size: dv.getUint32(p + 24, true), local: dv.getUint32(p + 42, true) };
    p += 46 + nameLen + extraLen + commentLen;
  }
  return { dv, index };
}

async function entryBytes(bytes, zip, name) {
  const e = zip.index[name];
  if (!e) return null;
  const lnLen = zip.dv.getUint16(e.local + 26, true);
  const leLen = zip.dv.getUint16(e.local + 28, true);
  const start = e.local + 30 + lnLen + leLen;
  const raw = bytes.subarray(start, start + e.csize);
  return e.method === 0 ? raw : inflate(raw);
}

const unesc = (s) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");
const attr = (xml, re) => re.exec(xml)?.[1];

function relMap(xml) {
  const map = {};
  for (const m of String(xml || "").matchAll(/<Relationship\b[^>]*>/g)) {
    const id = attr(m[0], /\bId="([^"]+)"/);
    const target = attr(m[0], /\bTarget="([^"]+)"/);
    if (id && target) map[id] = target.replace(/^\.?\//, "").replace(/^\/?word\//, "");
  }
  return map;
}

/** Word diagrammasi (chart XML) ma'lumotlarini matnga aylantiradi: sarlavha, turi, kategoriyalar va qatorlar. */
function chartText(xml) {
  const vals = (block) => [...block.matchAll(/<c:v>([^<]*)<\/c:v>/g)].map((m) => unesc(m[1]));
  const title = [...(/<c:title>([\s\S]*?)<\/c:title>/.exec(xml)?.[1] || "").matchAll(/<a:t>([^<]*)<\/a:t>/g)].map((m) => unesc(m[1])).join("");
  const type = attr(xml, /<c:(bar|line|pie|scatter|area|doughnut|radar|bubble)Chart\b/) || "";
  const series = [...xml.matchAll(/<c:ser>([\s\S]*?)<\/c:ser>/g)].map((m) => {
    const s = m[1];
    const name = vals(/<c:tx>([\s\S]*?)<\/c:tx>/.exec(s)?.[1] || "").join(" ");
    const cat = vals(/<c:(?:cat|xVal)>([\s\S]*?)<\/c:(?:cat|xVal)>/.exec(s)?.[1] || "");
    const val = vals(/<c:(?:val|yVal)>([\s\S]*?)<\/c:(?:val|yVal)>/.exec(s)?.[1] || "");
    return `${name || "qator"}: ${val.map((v, i) => (cat[i] !== undefined ? `${cat[i]}=${v}` : v)).join(", ")}`;
  });
  return `[DIAGRAMMA${type ? ` (${type})` : ""}${title ? ` «${title}»` : ""}: ${series.join(" | ") || "ma'lumot yo'q"}]`;
}

/**
 * Word faylini o'qiydi. { text, images: [{n, name, mime, data}], imageCount, chartCount, skipped }.
 * Matnda rasmlar o'z o'rnida [RASM n] belgisi, diagrammalar [DIAGRAMMA ...] ko'rinishida beriladi.
 * withImages=false bo'lsa rasm baytlari ajratilmaydi (faqat sanaladi).
 */
export async function readDocx(input, { withImages = false } = {}) {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  const zip = zipIndex(bytes);
  const docRaw = await entryBytes(bytes, zip, "word/document.xml");
  if (!docRaw) throw new Error("document.xml topilmadi");
  let xml = dec.decode(docRaw);
  const rels = relMap(dec.decode((await entryBytes(bytes, zip, "word/_rels/document.xml.rels")) || new Uint8Array()));

  const images = [];
  const seen = new Map();
  let charts = 0;
  let skipped = 0;
  let total = 0;
  const jobs = [];
  const imageMarker = (rid) => {
    const target = rels[rid];
    if (!target) return "";
    if (seen.has(target)) return `[RASM ${seen.get(target)}]`;
    const n = seen.size + 1;
    seen.set(target, n);
    const ext = (target.split(".").pop() || "").toLowerCase();
    const entry = zip.index[`word/${target}`];
    const mime = AI_IMAGE[ext];
    if (!mime || !entry || n > MAX_IMAGES || entry.size > MAX_IMAGE_BYTES || total + entry.size > MAX_TOTAL_BYTES) {
      skipped++;
      return `[RASM ${n} — AI o'qiy olmaydi (${!mime ? ext + " formati" : "hajmi katta"}), matnda izoh bo'lishi kerak]`;
    }
    total += entry.size;
    if (withImages) jobs.push(entryBytes(bytes, zip, `word/${target}`).then((data) => data && images.push({ n, name: target.split("/").pop(), mime, data })));
    return `[RASM ${n}]`;
  };
  const chartJobs = [];
  const chartMarker = (rid) => {
    const target = rels[rid];
    if (!target || !zip.index[`word/${target}`]) return "";
    const k = charts++;
    chartJobs.push(entryBytes(bytes, zip, `word/${target}`).then((b) => [k, b ? chartText(dec.decode(b)) : "[DIAGRAMMA]"]));
    return `\u0001CHART${k}\u0001`;
  };

  xml = xml.replace(/<w:(drawing|pict)\b[\s\S]*?<\/w:\1>/g, (blk) => {
    const out = [];
    const cid = attr(blk, /<c:chart\b[^>]*\br:id="([^"]+)"/);
    if (cid) out.push(chartMarker(cid));
    for (const m of blk.matchAll(/<a:blip\b[^>]*\br:embed="([^"]+)"|<v:imagedata\b[^>]*\br:id="([^"]+)"/g)) out.push(imageMarker(m[1] || m[2]));
    return ` ${[...new Set(out.filter(Boolean))].join(" ")} `;
  });
  await Promise.all(jobs);
  const chartTexts = Object.fromEntries(await Promise.all(chartJobs));

  let text = xml
    .replace(/<w:tab\/>/g, " ")
    .replace(/<\/w:p>/g, "\n")
    .replace(/<\/w:tc>/g, " | ")
    .replace(/<\/w:tr>/g, "\n")
    .replace(/<w:br[^>]*\/>/g, "\n")
    .replace(/<m:t>/g, " ")
    .replace(/<[^>]+>/g, "");
  text = unesc(text)
    .replace(/\u0001CHART(\d+)\u0001/g, (_, k) => chartTexts[k] || "[DIAGRAMMA]")
    .replace(/\s*\n\s*\| /g, " | ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  images.sort((a, b) => a.n - b.n);
  return { text, images, imageCount: seen.size, chartCount: charts, skipped };
}
