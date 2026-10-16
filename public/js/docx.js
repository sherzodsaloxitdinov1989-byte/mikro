// Minimal Word (.docx) yaratuvchi: siqishsiz ZIP + oddiy WordprocessingML. Kutubxona kerak emas.
// Blok turlari: { t:"h1"|"h2"|"p", text, bold?, runs?: [{text,bold?,color?}], pageBreak? }
const enc = new TextEncoder();
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

let CRC_TABLE;
function crc32(buf) {
  if (!CRC_TABLE) {
    CRC_TABLE = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      CRC_TABLE[n] = c >>> 0;
    }
  }
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function zip(files) {
  const parts = [];
  const central = [];
  let offset = 0;
  const u16 = (v) => new Uint8Array([v & 255, (v >> 8) & 255]);
  const u32 = (v) => new Uint8Array([v & 255, (v >> 8) & 255, (v >> 16) & 255, (v >>> 24) & 255]);
  const cat = (...a) => a;
  for (const [name, text] of files) {
    const nameB = enc.encode(name);
    const data = enc.encode(text);
    const crc = crc32(data);
    const local = cat(u32(0x04034b50), u16(20), u16(0x0800), u16(0), u16(0), u16(0x21), u32(crc), u32(data.length), u32(data.length), u16(nameB.length), u16(0), nameB, data);
    central.push(cat(u32(0x02014b50), u16(20), u16(20), u16(0x0800), u16(0), u16(0), u16(0x21), u32(crc), u32(data.length), u32(data.length), u16(nameB.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(offset), nameB));
    const size = local.reduce((s, x) => s + x.length, 0);
    parts.push(...local);
    offset += size;
  }
  const cstart = offset;
  let csize = 0;
  for (const c of central) {
    parts.push(...c);
    csize += c.reduce((s, x) => s + x.length, 0);
  }
  parts.push(...cat(u32(0x06054b50), u16(0), u16(0), u16(files.length), u16(files.length), u32(csize), u32(cstart), u16(0)));
  return new Blob(parts, { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
}

const run = (r) => `<w:r><w:rPr>${r.bold ? "<w:b/>" : ""}${r.color ? `<w:color w:val="${r.color}"/>` : ""}</w:rPr><w:t xml:space="preserve">${esc(r.text)}</w:t></w:r>`;
function para(b) {
  const style = b.t === "h1" ? "Heading1" : b.t === "h2" ? "Heading2" : null;
  const ppr = `<w:pPr>${style ? `<w:pStyle w:val="${style}"/>` : ""}${b.pageBreak ? "<w:pageBreakBefore/>" : ""}${b.indent ? `<w:ind w:left="${b.indent}"/>` : ""}<w:spacing w:after="${b.after ?? 80}"/></w:pPr>`;
  const runs = b.runs || [{ text: b.text, bold: b.bold }];
  return `<w:p>${ppr}${runs.map(run).join("")}</w:p>`;
}

function table(rows) {
  const cell = (t, w) => `<w:tc><w:tcPr><w:tcW w:w="${w}" w:type="dxa"/></w:tcPr><w:p><w:pPr><w:spacing w:after="0"/></w:pPr>${run({ text: t })}</w:p></w:tc>`;
  const b = ["top", "left", "bottom", "right", "insideH", "insideV"].map((s) => `<w:${s} w:val="single" w:sz="4" w:color="999999"/>`).join("");
  return `<w:tbl><w:tblPr><w:tblBorders>${b}</w:tblBorders></w:tblPr>${rows.map((r) => `<w:tr>${r.map((c) => cell(c, 900)).join("")}</w:tr>`).join("")}</w:tbl><w:p/>`;
}

/** blocks: para bloklari yoki { t:"table", rows } */
export function buildDocx(blocks, title = "Hujjat") {
  const body = blocks.map((b) => (b.t === "table" ? table(b.rows) : para(b))).join("");
  const W = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"';
  const files = [
    ["[Content_Types].xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>'],
    ["_rels/.rels", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>'],
    ["word/_rels/document.xml.rels", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'],
    ["word/styles.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles ${W}><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/><w:sz w:val="24"/></w:rPr></w:rPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="240" w:after="160"/></w:pPr><w:rPr><w:b/><w:sz w:val="32"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="200" w:after="120"/></w:pPr><w:rPr><w:b/><w:sz w:val="26"/></w:rPr></w:style></w:styles>`],
    ["word/document.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document ${W}><w:body>${body}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="850" w:bottom="1134" w:left="1417" w:header="709" w:footer="709" w:gutter="0"/></w:sectPr></w:body></w:document>`],
  ];
  return zip(files);
}
