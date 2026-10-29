// Yuborilgan ish mazmunini avtomatik tekshirish (AI chaqirmasdan, darhol): bosqich talablariga mosligi, talab qilingan natija qismlari,
// matn takroriyligi va boshqa talabalar ishiga mazmuniy (so'zlari o'zgartirilgan) o'xshashlik.
// Natija — ehtimoliy ogohlantirishlar; chuqur tahlil (hisob-kitoblar, asoslanganlik) uchun AI tekshiruvi bor.

const STOP = /^(?:yozing|keltiring|ko'rsating|hisoblang|aniqlang|tushuntiring|izohlang|tahlil|bo'yicha|haqida|qilib|bo'lgan|bo'lsa|hamda|yoki|uchun|qiling|ishlating|tuzing|toping|sanab|o'ting|asosida|orqali|misolida|masalan|shuningdek|kerak|mumkin|qanday)/;
const words = (t) => String(t || "").toLowerCase().replace(/\[(?:rasm|diagramma)[^\]]*\]/g, " ").replace(/[ʻʼ‘’'`´]/g, "").replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean);
const stem = (w) => w.slice(0, 6);
/** Topshiriq matnidan mavzuga xos tayanch so'zlar (o'zak): buyruq fe'llari va umumiy so'zlar tashlanadi. */
export function keyStems(s) {
  const out = new Set();
  for (const w of words(s)) if (w.length >= 6 && !STOP.test(w) && !/(?:ing|ng|ib)$/.test(w)) out.add(stem(w));
  return out;
}
const coverage = (stems, textStems) => (stems.size ? [...stems].filter((x) => textStems.has(x)).length / stems.size : 1);

const tf = (text) => {
  const m = new Map();
  for (const w of words(text)) if (w.length >= 4) m.set(stem(w), (m.get(stem(w)) || 0) + 1);
  return m;
};
export function cosine(a, b) {
  let dot = 0, na = 0, nb = 0;
  for (const [, v] of a) na += v * v;
  for (const [, v] of b) nb += v * v;
  for (const [k, v] of a) if (b.has(k)) dot += v * b.get(k);
  return na && nb ? dot / Math.sqrt(na * nb) : 0;
}

/**
 * in: { stage, text, others: [{ name, group, text }] }
 * out: { checkedAt, words, coverage (0–100), parts: [{ name, ok }], issues: [{ level: "high"|"medium", kind, text }], similar }
 */
export function checkContent({ stage, text, others = [] }) {
  const w = words(text);
  const issues = [];
  const add = (level, kind, t) => issues.push({ level, kind, text: t });
  const textStems = new Set(w.filter((x) => x.length >= 6).map(stem));
  if (w.length < 60) add("high", "short", `Ish hajmi juda kichik (${w.length} so'z): topshiriq talablari yoritilmagan ko'rinadi.`);
  else if (w.length < 150) add("medium", "short", `Ish hajmi kichik (${w.length} so'z): talablar to'liq yoritilmagan bo'lishi mumkin.`);
  const stageStems = keyStems(`${stage.title} ${(stage.tasks || []).join(" ")} ${stage.result || ""}`);
  const cov = coverage(stageStems, textStems);
  if (w.length >= 40) {
    if (cov < 0.15) add("high", "relevance", `Mazmun bosqich talablariga deyarli mos kelmaydi: topshiriq tayanch tushunchalarining atigi ${Math.round(cov * 100)}% i tilga olingan.`);
    else if (cov < 0.3) add("medium", "relevance", `Mazmun bosqich talablariga qisman mos: tayanch tushunchalarning ${Math.round(cov * 100)}% i tilga olingan.`);
  }
  // Talab qilingan natija qismlari («A + B + C» ko'rinishida yozilgan)
  const parts = String(stage.result || "").split(/\s+\+\s+/).map((x) => x.trim()).filter(Boolean).map((name) => {
    const st = keyStems(name);
    return { name, ok: !st.size || coverage(st, textStems) >= 0.4 };
  });
  const miss = parts.filter((p) => !p.ok);
  if (parts.length > 1 && miss.length) add(miss.length >= Math.ceil(parts.length / 2) ? "high" : "medium", "parts", `Talab qilingan natija qismlari topilmadi yoki yoritilmagan: ${miss.map((p) => `«${p.name.slice(0, 70)}»`).join("; ")}.`);
  // Matn takroriyligi
  if (w.length >= 150) {
    const ttr = new Set(w).size / w.length;
    if (ttr < 0.28) add("medium", "repeat", "Matn juda takroriy (bir xil so'zlar va iboralar ko'p): mazmun yuzaki bo'lishi mumkin.");
    const sents = String(text).split(/[.!?]+\s/).map((s) => s.trim().toLowerCase()).filter((s) => s.length > 30);
    if (sents.length >= 8 && new Set(sents).size / sents.length < 0.7) add("medium", "repeat", "Bir xil gaplar bir necha marta takrorlangan.");
  }
  // Mazmuniy o'xshashlik: so'zlari o'zgartirilgan nusxa (6 so'zli aniq moslik topolmaydigan hollar)
  let similar = null;
  if (w.length >= 80) {
    const mine = tf(text);
    for (const o of others) {
      const c = cosine(mine, tf(o.text));
      if (c >= 0.88 && (!similar || c > similar.cos)) similar = { cos: c, pct: Math.round(c * 100), with: { name: o.name, group: o.group, userId: o.userId } };
    }
    if (similar) add("high", "similar", `Mazmuni ${similar.with.name} (${similar.with.group || "—"}) ishiga juda o'xshash (${similar.pct}%): so'zlari o'zgartirilgan nusxa bo'lishi mumkin.`);
  }
  return { checkedAt: new Date().toISOString(), words: w.length, coverage: Math.round(cov * 100), parts, issues, similar: similar ? { pct: similar.pct, with: similar.with } : null };
}

export const CONTENT_PENALTY_MAX = 60; // jiddiy holatlar uchun ballni eng ko'pi bilan shuncha foizga kamaytirish

/**
 * Jiddiy mazmun kamchiliklari uchun ball jarimasi (foiz, ko'pi bilan 60). Holatiga qarab:
 *  hajm juda kichik 40 · mavzuga umuman mos emas 50 · talab qilingan qismlarning yarmi yo'q 20–40 (yo'q qism ulushiga qarab) · qisman mos 15 ·
 *  matn takroriy 10 · mazmuniy nusxa (so'zlari o'zgartirilgan) 40 · bir xil ob'ekt (boshqa talabaning tadbirkorlik sub'ekti) 30.
 * Eng katta jarimaga qolganlarining yarmi qo'shiladi. Aynan nusxa (so'zma-so'z) uchun "o'z ijodi" koeffitsiyenti alohida ishlaydi.
 * rec: { content, dup }
 */
export function contentPenalty(rec) {
  const items = [];
  const c = rec?.content;
  for (const i of c?.issues || []) {
    if (i.kind === "short" && i.level === "high") items.push([40, i.text]);
    else if (i.kind === "short") items.push([10, i.text]);
    else if (i.kind === "relevance" && i.level === "high") items.push([50, i.text]);
    else if (i.kind === "relevance") items.push([15, i.text]);
    else if (i.kind === "parts") {
      const miss = (c.parts || []).filter((p) => !p.ok).length;
      const share = c.parts?.length ? miss / c.parts.length : 0;
      items.push([i.level === "high" ? Math.max(20, Math.round(share * 40)) : 10, i.text]);
    } else if (i.kind === "repeat") items.push([10, i.text]);
    else if (i.kind === "similar") items.push([40, i.text]);
  }
  if (rec?.dup?.object) items.push([30, `Boshqa talaba tanlagan tadbirkorlik sub'ekti («${rec.dup.object.name}») ishlatilgan.`]);
  if (!items.length) return null;
  items.sort((a, b) => b[0] - a[0]);
  const extra = items.slice(1).reduce((n, x) => n + x[0], 0);
  const percent = Math.min(CONTENT_PENALTY_MAX, items[0][0] + Math.round(extra / 2));
  return { percent, reasons: items.map(([p, t]) => ({ percent: p, text: t })) };
}
