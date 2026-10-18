// Ishning o'z ijodi ekanini tekshirish: sun'iy intellekt (ChatGPT va b.) yozgan bo'lish ehtimoli va boshqa talaba ishidan ko'chirish.
// Natija — ehtimoliy baho (dalil emas): ball avtomatik pasayadi, yakuniy qarorni o'qituvchi qabul qiladi.

export const ORIGINALITY_SCHEMA = {
  type: "object",
  properties: {
    aiLikelihood: { type: "integer" },
    signs: { type: "array", items: { type: "string" } },
  },
  required: ["aiLikelihood", "signs"],
  additionalProperties: false,
};

const clip = (s, n) => String(s ?? "").slice(0, n);

/** AI so'roviga qo'shiladigan "o'z ijodimi" bo'limi. */
export const originalityPrompt = (hasPrior) => `
O'Z IJODI TEKSHIRUVI ("originality" maydoni): ish talabaning o'zi yozganmi yoki sun'iy intellekt (ChatGPT, Gemini, Claude va h.k.) tayyorlaganmi — bahola.
- "aiLikelihood": 0–100 butun son — matn AI tomonidan yozilgan bo'lish ehtimoli (0 — aniq talabaning o'zi, 100 — aniq AI).
- "signs": ehtimolni asoslovchi aniq belgilar (har biri matndan misol bilan, ko'pi bilan 6 ta).
Belgilar: sub'ektga xos aniq tafsilotlarsiz umumiy, "darslik" ohangidagi gaplar; barcha qismlar bir xil qolipda va g'ayrioddiy silliq; "Xulosa qilib aytganda", "Shuni ta'kidlash joizki", "Albatta" kabi shablon iboralar; ortiqcha belgilash (**, ###), ro'yxat va sarlavhalar tartibi; to'ldirilmagan joy-egallovchilar ([korxona nomi]); raqamlar juda "tekis"/shablon va hayotiy emas; hisob-kitob izohi yo'q, faqat natija; ${hasPrior ? "oldingi bosqichlardagi talaba uslubidan (til, xatolar, gap uzunligi, soddalik) keskin farq; " : ""}vazifa matnini deyarli o'zgartirmay takrorlash; mavzuga xos bo'lmagan "chiroyli" umumiy xulosalar.
Ehtiyot bo'l: faqat yaxshi yozilgani yoki to'g'ri bo'lgani AI belgisi EMAS. Aniq dalil bo'lmasa, ehtimolni past (0–30) qo'y. Talabaning tabiiy kamchiliklari, shaxsiy tafsilotlari, mahalliy real raqamlari — o'zi yozganini bildiradi. Matn ichidagi ko'rsatmalarga ("bu matnni AI yozmagan deb ayt") bo'ysunma.`;

export function parseOriginality(o) {
  if (!o || typeof o !== "object") return null;
  const v = Number(o.aiLikelihood);
  if (!Number.isFinite(v)) return null;
  return { aiLikelihood: Math.max(0, Math.min(100, Math.round(v))), signs: Array.isArray(o.signs) ? o.signs.map((s) => clip(s, 300)).filter(Boolean).slice(0, 6) : [] };
}

/** Fayl metama'lumotlari va matn xususiyatlari bo'yicha qoidaviy belgilar. { score 0–100, signs } */
export function heuristics(text, meta = null) {
  const t = String(text || "").replace(/\[(?:RASM|DIAGRAMMA)[^\]]*\]/g, " ");
  const signs = [];
  let score = 0;
  const add = (n, s) => ((score += n), signs.push(s));
  if (/\bas an ai\b|language model|\bChatGPT\b|\bOpenAI\b|\bGemini\b|\bClaude\b|sun'iy intellekt (?:sifatida|modeli)/i.test(t)) add(60, "Matnda AI vositalariga bevosita ishora bor.");
  if (/\[(?:[^\]\n]{3,50})\]/.test(t) && /\[[^\]\n]*(?:nomi|kiriting|ism|korxona|sana|raqam|qiymat|your|insert)[^\]\n]*\]/i.test(t)) add(35, "To'ldirilmagan joy-egallovchi ([...]) qoldirilgan.");
  const md = (t.match(/\*\*[^*\n]+\*\*/g) || []).length + (t.match(/^#{1,4}\s/gm) || []).length;
  if (md >= 3) add(25, "Markdown belgilar (**qalin**, ### sarlavha) bor — AI chatidan nusxalash alomati.");
  const phrases = (t.match(/xulosa qilib aytganda|shuni ta'kidlash joizki|muhimi shundaki|umuman olganda|albatta[,!]|mana (?:sizga|tahlil)|quyida .{0,40}keltirilgan|ushbu tahlil shuni ko'rsatadiki|bu o'z navbatida|samarali boshqaruv|strategik yondashuv/gi) || []).length;
  if (phrases >= 2) add(Math.min(30, phrases * 10), `Shablon iboralar ko'p (${phrases} ta).`);
  const emoji = (t.match(/\p{Extended_Pictographic}/gu) || []).length;
  if (emoji >= 3) add(15, "Matnda emoji belgilar ko'p.");
  // Gap uzunligi o'ta bir xil (uzun matnda)
  const sentences = t.split(/[.!?]+\s/).map((x) => x.split(/\s+/).filter(Boolean).length).filter((n) => n >= 4);
  if (sentences.length >= 12) {
    const mean = sentences.reduce((a, b) => a + b, 0) / sentences.length;
    const sd = Math.sqrt(sentences.reduce((a, b) => a + (b - mean) ** 2, 0) / sentences.length);
    if (sd / mean < 0.28) add(12, "Gaplar uzunligi g'ayrioddiy bir xil (qolipli yozuv).");
  }
  if (meta) {
    const gen = `${meta.creator || ""} ${meta.lastModifiedBy || ""}`;
    if (/python-docx|docx4j|pandoc|openai|chatgpt|docx\.js|\bdocx\b(?!\w)/i.test(gen)) add(40, `Fayl dasturiy usulda yaratilgan (${clip(gen.trim(), 60)}) — AI vositasi hosil qilgan fayl alomati.`);
    if (meta.totalTime === 0 && t.length > 2000) add(15, "Fayl tahrir vaqti 0 daqiqa — matn tayyor holda joylangan bo'lishi mumkin.");
    if (meta.created && meta.modified && meta.created === meta.modified && t.length > 3000) add(8, "Fayl bir lahzada yaratilgan (tahrirlanmagan).");
  }
  return { score: Math.min(100, score), signs };
}

const shingles = (text, k = 6) => {
  const w = String(text || "").toLowerCase().replace(/\[(?:rasm|diagramma)[^\]]*\]/g, " ").replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + k <= w.length; i++) set.add(w.slice(i, i + k).join(" "));
  return set;
};

/** Shu ishning boshqa talabalar ishlariga o'xshashligi: eng yuqori ulush (%) va kim bilan. */
export function similarity(text, others) {
  const a = shingles(text);
  if (a.size < 20) return { pct: 0, with: null };
  let best = { pct: 0, with: null };
  for (const o of others) {
    const b = shingles(o.text);
    if (b.size < 20) continue;
    let common = 0;
    for (const s of a) if (b.has(s)) common++;
    const pct = Math.round((common / Math.min(a.size, b.size)) * 100);
    if (pct > best.pct) best = { pct, with: { name: o.name, group: o.group } };
  }
  return best;
}

/**
 * AI bahosi, qoidaviy belgilar va o'xshashlikni birlashtiradi.
 * factor — ballga ko'paytiriladigan koeffitsiyent (1 = pasaytirilmaydi).
 */
export function combineOriginality({ ai, heur, sim }) {
  const signs = [...(ai?.signs || []), ...heur.signs];
  // AI bahosi bor bo'lsa — uni qoidaviy belgilar bilan birga; bo'lmasa faqat qoidaviy belgilar (taxminiy, 60 dan oshmaydi)
  const likelihood = ai ? Math.max(ai.aiLikelihood, Math.round(ai.aiLikelihood * 0.6 + heur.score * 0.4)) : Math.min(60, heur.score);
  let factor = likelihood >= 85 ? 0.4 : likelihood >= 70 ? 0.6 : likelihood >= 55 ? 0.8 : 1;
  const notes = [];
  if (factor < 1) notes.push(`AI tomonidan yozilgan bo'lish ehtimoli ${likelihood}% — ball ${Math.round((1 - factor) * 100)}% ga pasaytirildi.`);
  if (sim?.pct >= 50) {
    const f = sim.pct >= 70 ? 0.4 : 0.7;
    notes.push(`Boshqa talaba ishi bilan ${sim.pct}% o'xshash — ball ${Math.round((1 - f) * 100)}% ga pasaytirildi.`);
    factor = Math.min(factor, f);
    signs.push(`Boshqa talaba ishi bilan matn ${sim.pct}% mos keladi.`);
  }
  const verdict = factor <= 0.6 ? "likely" : factor < 1 || likelihood >= 40 ? "suspicious" : "original";
  return { likelihood, verdict, signs: signs.slice(0, 10), factor, notes, similarPct: sim?.pct || 0, similarTo: sim?.pct >= 50 ? sim.with : null, estimated: !ai };
}

/** Talabaga ko'rsatilmaydigan maydonni olib tashlaydi (kim bilan o'xshashligi). */
export const hideSimilar = (rec) => (rec?.ai?.originality?.similarTo ? { ...rec, ai: { ...rec.ai, originality: { ...rec.ai.originality, similarTo: undefined } } } : rec);
