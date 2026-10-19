// Excel (.xlsx) faylidan birinchi varaq jadvalini brauzerda o'qish (kutubxonasiz): ZIP → sharedStrings + sheet1.xml.

async function entries(buf) {
  const dv = new DataView(buf);
  let eocd = -1;
  for (let i = buf.byteLength - 22; i >= Math.max(0, buf.byteLength - 70000); i--) {
    if (dv.getUint32(i, true) === 0x06054b50) {
      eocd = i;
      break;
    }
  }
  if (eocd < 0) throw new Error("Excel fayl emas");
  const count = dv.getUint16(eocd + 10, true);
  let p = dv.getUint32(eocd + 16, true);
  const map = {};
  for (let n = 0; n < count; n++) {
    if (dv.getUint32(p, true) !== 0x02014b50) break;
    const nameLen = dv.getUint16(p + 28, true);
    const extraLen = dv.getUint16(p + 30, true);
    const commentLen = dv.getUint16(p + 32, true);
    map[new TextDecoder().decode(new Uint8Array(buf, p + 46, nameLen))] = { method: dv.getUint16(p + 10, true), csize: dv.getUint32(p + 20, true), local: dv.getUint32(p + 42, true) };
    p += 46 + nameLen + extraLen + commentLen;
  }
  const read = async (name) => {
    const e = map[name];
    if (!e) return null;
    const lnLen = dv.getUint16(e.local + 26, true);
    const leLen = dv.getUint16(e.local + 28, true);
    const raw = new Uint8Array(buf, e.local + 30 + lnLen + leLen, e.csize);
    const bytes = e.method === 0 ? raw : new Uint8Array(await new Response(new Blob([raw]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).arrayBuffer());
    return new TextDecoder().decode(bytes);
  };
  return { read, names: Object.keys(map) };
}

const unesc = (s) => s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d))).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");
const colIndex = (ref) => [...ref.replace(/\d+/g, "")].reduce((n, ch) => n * 26 + ch.charCodeAt(0) - 64, 0) - 1;

/** Qatorlar massivi (har bir qator — katakchalar massivi, matn ko'rinishida). */
export async function readXlsx(file) {
  const z = await entries(await file.arrayBuffer());
  const shared = [];
  const ss = await z.read("xl/sharedStrings.xml");
  if (ss) for (const m of ss.matchAll(/<si>([\s\S]*?)<\/si>/g)) shared.push(unesc([...m[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((x) => x[1]).join("")));
  const sheetName = z.names.filter((n) => /^xl\/worksheets\/sheet\d+\.xml$/.test(n)).sort()[0];
  const xml = sheetName && (await z.read(sheetName));
  if (!xml) throw new Error("Varaq topilmadi");
  const rows = [];
  for (const rm of xml.matchAll(/<row\b[^>]*>([\s\S]*?)<\/row>/g)) {
    const row = [];
    for (const cm of rm[1].matchAll(/<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
      const attrs = cm[1];
      const ref = /\br="([A-Z]+\d+)"/.exec(attrs)?.[1];
      const type = /\bt="(\w+)"/.exec(attrs)?.[1];
      const inner = cm[2] || "";
      let val = "";
      if (type === "s") val = shared[Number(/<v>([^<]*)<\/v>/.exec(inner)?.[1])] ?? "";
      else if (type === "inlineStr") val = unesc([...inner.matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((x) => x[1]).join(""));
      else val = unesc(/<v>([^<]*)<\/v>/.exec(inner)?.[1] ?? "");
      row[ref ? colIndex(ref) : row.length] = val;
    }
    rows.push(Array.from(row, (x) => x ?? ""));
  }
  return rows;
}

/** CSV/TXT (vergul, nuqtali vergul yoki tab) → qatorlar. */
export async function readDelimited(file) {
  const text = await file.text();
  const delim = [";", "\t", ","].sort((a, b) => text.split(b).length - text.split(a).length)[0];
  return text.split(/\r?\n/).filter((l) => l.trim()).map((l) => l.split(delim).map((c) => c.trim().replace(/^"|"$/g, "")));
}
