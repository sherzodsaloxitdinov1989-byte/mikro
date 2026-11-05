// Juda oddiy PDF yaratuvchi (Worker va Node uchun, kutubxonasiz): sarlavha va matn xatboshilari, A4, Helvetica (WinAnsi).
// O'zbek lotin harflari va tutuq belgilari (o‘, g‘, ’) qo'llab-quvvatlanadi; boshqa belgilar ASCII ga yaqinlashtiriladi.
const W = [278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584];
const MAP = { "‘": 0x91, "’": 0x92, "ʻ": 0x91, "ʼ": 0x92, "`": 0x27, "“": 0x93, "”": 0x94, "–": 0x96, "—": 0x97, "•": 0x95, "…": 0x85, "×": 0xd7, "÷": 0xf7, "°": 0xb0, "²": 0xb2, "³": 0xb3, "½": 0xbd, "·": 0xb7, "±": 0xb1, "€": 0x80 };
const ASCII = { "≥": ">=", "≤": "<=", "→": "->", "←": "<-", "≈": "~", "≠": "!=", "√": "sqrt", "∑": "sum", "Σ": "sum", "Δ": "delta", "π": "pi", "α": "a", "β": "b", "∂": "d", "−": "-", "⁻": "-", " ": " ", " ": " ", "\t": "    " };
const norm = (s) => Array.from(String(s ?? "")).map((c) => (c in MAP || (c.codePointAt(0) < 0x80) ? c : c in ASCII ? ASCII[c] : c.codePointAt(0) >= 0xa0 && c.codePointAt(0) <= 0xff ? c : "?")).join("");
const code = (c) => (c in MAP ? MAP[c] : c.codePointAt(0));
const width = (s, size) => Array.from(s).reduce((n, c) => { const k = code(c); return n + (k >= 32 && k <= 126 ? W[k - 32] : k === 0x91 || k === 0x92 ? 222 : 556); }, 0) * size / 1000;
const esc = (s) => Array.from(s).map((c) => { const k = code(c); if (c === "(" || c === ")" || c === "\\") return `\\${c}`; return k < 32 ? "" : k < 127 ? c : `\\${k.toString(8).padStart(3, "0")}`; }).join("");

function wrap(text, size, max) {
  const out = [];
  for (const para of norm(text).split(/\r?\n/)) {
    let line = "";
    for (const word of para.split(/\s+/).filter(Boolean)) {
      const t = line ? `${line} ${word}` : word;
      if (width(t, size) <= max || !line) line = t; else { out.push(line); line = word; }
    }
    out.push(line);
  }
  return out;
}

/** blocks: [{ text, size?, bold?, gap? }] → Uint8Array (PDF) */
export function makePdf(blocks, { margin = 56 } = {}) {
  const PW = 595, PH = 842, max = PW - margin * 2;
  const pages = [[]];
  let y = PH - margin;
  for (const b of blocks) {
    const size = b.size || 11, lead = Math.round(size * 1.4), font = b.bold ? "F2" : "F1";
    y -= b.gap || 0;
    for (const line of wrap(b.text, size, max)) {
      if (y - lead < margin) { pages.push([]); y = PH - margin; }
      y -= lead;
      if (line) pages[pages.length - 1].push(`BT /${font} ${size} Tf ${margin} ${y} Td (${esc(line)}) Tj ET`);
    }
  }
  const objs = [];
  const add = (s) => (objs.push(s), objs.length);
  add("<< /Type /Catalog /Pages 2 0 R >>");
  add(""); // Pages — keyin to'ldiriladi
  const f1 = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");
  const f2 = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");
  const kids = [];
  for (const p of pages) {
    const stream = p.join("\n");
    const c = add(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
    kids.push(add(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PW} ${PH}] /Resources << /Font << /F1 ${f1} 0 R /F2 ${f2} 0 R >> >> /Contents ${c} 0 R >>`));
  }
  objs[1] = `<< /Type /Pages /Count ${kids.length} /Kids [${kids.map((k) => `${k} 0 R`).join(" ")}] >>`;
  let pdf = "%PDF-1.4\n";
  const off = [];
  objs.forEach((o, i) => { off.push(pdf.length); pdf += `${i + 1} 0 obj\n${o}\nendobj\n`; });
  const xref = pdf.length;
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n${off.map((o) => `${String(o).padStart(10, "0")} 00000 n \n`).join("")}trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new Uint8Array(Array.from(pdf, (c) => c.charCodeAt(0) & 0xff));
}
