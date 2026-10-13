// Talaba yuklagan hisobot faylidan (PDF, Word .docx) brauzerning o'zida matn ajratib olish.
// Matn AI tekshiruvi va o'qituvchi uchun saqlanadi; fayl esa asl holida alohida yuklanadi.

const PDFJS = "/vendor/pdfjs/pdf.min.mjs";
let pdfjsPromise;
const loadPdfjs = () =>
  (pdfjsPromise ||= import(PDFJS).then((lib) => {
    lib.GlobalWorkerOptions.workerSrc = "/vendor/pdfjs/pdf.worker.min.mjs";
    return lib;
  }));

async function pdfText(buf) {
  const lib = await loadPdfjs();
  const doc = await lib.getDocument({ data: new Uint8Array(buf) }).promise;
  const out = [];
  for (let i = 1; i <= Math.min(doc.numPages, 40); i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    let line = "";
    for (const it of content.items) {
      line += it.str;
      line += it.hasEOL ? "\n" : " ";
    }
    out.push(line.replace(/[ \t]+\n/g, "\n"));
  }
  return out.join("\n");
}

/** Minimal ZIP o'quvchi: markaziy katalogdan faylni topib, deflate-raw bilan ochadi. */
async function unzipEntry(buf, wanted) {
  const dv = new DataView(buf);
  let eocd = -1;
  for (let i = buf.byteLength - 22; i >= Math.max(0, buf.byteLength - 70000); i--) {
    if (dv.getUint32(i, true) === 0x06054b50) {
      eocd = i;
      break;
    }
  }
  if (eocd < 0) throw new Error("ZIP topilmadi");
  const count = dv.getUint16(eocd + 10, true);
  let p = dv.getUint32(eocd + 16, true);
  for (let n = 0; n < count; n++) {
    if (dv.getUint32(p, true) !== 0x02014b50) break;
    const method = dv.getUint16(p + 10, true);
    const csize = dv.getUint32(p + 20, true);
    const nameLen = dv.getUint16(p + 28, true);
    const extraLen = dv.getUint16(p + 30, true);
    const commentLen = dv.getUint16(p + 32, true);
    const local = dv.getUint32(p + 42, true);
    const name = new TextDecoder().decode(new Uint8Array(buf, p + 46, nameLen));
    if (name === wanted) {
      const lnLen = dv.getUint16(local + 26, true);
      const leLen = dv.getUint16(local + 28, true);
      const start = local + 30 + lnLen + leLen;
      const raw = new Uint8Array(buf, start, csize);
      if (method === 0) return raw;
      const ds = new DecompressionStream("deflate-raw");
      const stream = new Blob([raw]).stream().pipeThrough(ds);
      return new Uint8Array(await new Response(stream).arrayBuffer());
    }
    p += 46 + nameLen + extraLen + commentLen;
  }
  throw new Error("document.xml topilmadi");
}

async function docxText(buf) {
  const xml = new TextDecoder().decode(await unzipEntry(buf, "word/document.xml"));
  return xml
    .replace(/<w:tab\/>/g, " ")
    .replace(/<\/w:p>/g, "\n")
    .replace(/<\/w:tc>/g, " | ")
    .replace(/<\/w:tr>/g, "\n")
    .replace(/<w:br[^>]*\/>/g, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n");
}

/** Faylning matnini qaytaradi; ajratib bo'lmasa (rasm, eski .doc, Excel) — bo'sh satr. */
export async function extractText(file) {
  const name = file.name.toLowerCase();
  try {
    if (name.endsWith(".pdf")) return (await pdfText(await file.arrayBuffer())).trim();
    if (name.endsWith(".docx")) return (await docxText(await file.arrayBuffer())).trim();
  } catch (e) {
    console.warn("Matn ajratilmadi:", e);
  }
  return "";
}
