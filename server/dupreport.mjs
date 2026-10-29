// 20 ballik topshiriq: ikki talaba ishi o'rtasidagi takrorlanishning batafsil tahlili (o'qituvchi uchun).
// Umumiy parchalar (6 va undan ortiq so'zli aynan mos joylar), umumiy raqamlar, sub'ekt nomi, fayl muallifi/vaqti, mazmuniy o'xshashlik.
import { objectNames } from "./originality.mjs";
import { cosine } from "./contentcheck.mjs";

const norm = (w) => w.toLowerCase().replace(/[ʻʼ‘’'`´]/g, "");
const tokenize = (text) => String(text || "").replace(/\[(?:RASM|DIAGRAMMA)[^\]]*\]/g, " ").split(/\s+/).filter(Boolean).map((raw) => ({ raw, n: norm(raw).replace(/[^\p{L}\p{N}]/gu, "") })).filter((t) => t.n);
const K = 6;

function shingleSet(tokens) {
  const s = new Set();
  for (let i = 0; i + K <= tokens.length; i++) s.add(tokens.slice(i, i + K).map((t) => t.n).join(" "));
  return s;
}

/** A matnining B bilan umumiy parchalari: ketma-ket mos so'zlar (>= K) birlashtiriladi. */
function sharedPassages(ta, setB) {
  const covered = new Array(ta.length).fill(false);
  for (let i = 0; i + K <= ta.length; i++) if (setB.has(ta.slice(i, i + K).map((t) => t.n).join(" "))) for (let j = i; j < i + K; j++) covered[j] = true;
  const runs = [];
  for (let i = 0; i < ta.length; i++) {
    if (!covered[i]) continue;
    let j = i;
    while (j < ta.length && covered[j]) j++;
    runs.push({ start: i, words: j - i, text: ta.slice(i, j).map((t) => t.raw).join(" ") });
    i = j;
  }
  return runs.sort((x, y) => y.words - x.words);
}

const numbersOf = (text) => (String(text || "").match(/\d[\d\s.,]*\d|\d/g) || []).map((x) => x.replace(/\s/g, "")).filter((x) => x.length >= 3 && !/^(19|20)\d\d$/.test(x));

function termFreq(tokens) {
  const m = new Map();
  for (const t of tokens) if (t.n.length >= 4) m.set(t.n.slice(0, 6), (m.get(t.n.slice(0, 6)) || 0) + 1);
  return m;
}

export function comparePair(A, B) {
  const ta = A.tokens, tb = B.tokens;
  const common = [...A.sh].filter((s) => B.sh.has(s)).length;
  const pct = Math.round((common / Math.max(1, Math.min(A.sh.size, B.sh.size))) * 100);
  const cos = cosine(A.tf, B.tf);
  const runs = sharedPassages(ta, B.sh);
  const coveredWords = runs.reduce((n, r) => n + r.words, 0);
  const numsB = new Map();
  for (const n of B.nums) numsB.set(n, (numsB.get(n) || 0) + 1);
  const shared = [];
  const used = new Map();
  for (const n of A.nums) if ((numsB.get(n) || 0) > (used.get(n) || 0)) { used.set(n, (used.get(n) || 0) + 1); shared.push(n); }
  const numPct = Math.round((shared.length / Math.max(1, Math.min(A.nums.length, B.nums.length))) * 100);
  const objs = A.objs.filter((o) => B.objs.includes(o));
  const ma = A.meta || {}, mb = B.meta || {};
  const meta = [];
  if (ma.creator && ma.creator === mb.creator && !/python-docx|docx4j|docx\.js|pandoc/i.test(ma.creator)) meta.push(`ikkala faylning muallifi bir xil («${ma.creator}»)`);
  if (ma.lastModifiedBy && ma.lastModifiedBy === mb.lastModifiedBy && !/python-docx|docx4j|docx\.js|pandoc/i.test(ma.lastModifiedBy)) meta.push(`oxirgi tahrir qilgan shaxs bir xil («${ma.lastModifiedBy}»)`);
  if (ma.created && ma.created === mb.created) meta.push("fayllar bir xil vaqtda yaratilgan");
  return { pct, cos: Math.round(cos * 100), coveredWords, totalWords: ta.length, coveredPct: Math.round((coveredWords / Math.max(1, ta.length)) * 100), passages: runs.slice(0, 6).map((r) => ({ words: r.words, text: r.text.length > 420 ? `${r.text.slice(0, 420)}…` : r.text })), passageCount: runs.length, sharedNumbers: shared.slice(0, 14), sharedNumberCount: shared.length, numPct, objects: objs, meta };
}

export function prepare(rec, samples) {
  const tokens = tokenize(rec.text);
  return { rec, tokens, sh: shingleSet(tokens), tf: termFreq(tokens), nums: numbersOf(rec.text), objs: rec.no === 1 ? objectNames(rec.text, samples) : [], meta: rec.media?.meta || null };
}

/** Bayonnoma matni (o'zbekcha): nima takrorlangani va qanchalik jiddiyligi. */
export function explain(c, stageNo) {
  const out = [];
  if (c.pct >= 40) out.push(`Matnning ${c.pct}% i so'zma-so'z mos keladi (6 va undan ortiq ketma-ket bir xil so'z): ${c.passageCount} ta umumiy parcha, jami ${c.coveredWords} so'z (birinchi ishning ${c.coveredPct}% i).`);
  else if (c.passageCount) out.push(`${c.passageCount} ta umumiy parcha topildi (jami ${c.coveredWords} so'z, birinchi ishning ${c.coveredPct}% i), lekin umumiy o'xshashlik ${c.pct}%.`);
  if (c.cos >= 85) out.push(`Mazmuniy o'xshashlik ${c.cos}%: ishlatilgan so'zlar va ularning chastotasi deyarli bir xil — so'zlari o'zgartirilgan nusxa bo'lishi mumkin.`);
  if (c.sharedNumberCount >= 5) out.push(`${c.sharedNumberCount} ta bir xil raqam mos tushgan (${c.numPct}%): narx, hajm yoki xarajat qiymatlari ham bir xil — mustaqil hisob-kitobda bunday tasodif juda kam uchraydi.`);
  if (c.objects.length) out.push(`Bir xil sub'ekt tanlangan: «${c.objects[0]}».`);
  if (c.meta.length) out.push(`Fayl ma'lumotlari: ${c.meta.join("; ")}.`);
  const level = c.pct >= 70 || (c.pct >= 50 && (c.sharedNumberCount >= 5 || c.meta.length)) ? "high" : c.pct >= 40 || c.cos >= 85 || c.objects.length || (c.sharedNumberCount >= 8) ? "medium" : "low";
  const verdict = { high: "Ko'chirilgan bo'lishi ehtimoli yuqori — ikkala talabadan tushuntirish so'rash tavsiya etiladi.", medium: "Shubhali — ishlarni solishtirib ko'ring.", low: "Kichik o'xshashlik (umumiy ibora bo'lishi mumkin)." }[level];
  return { level, summary: out.length ? out : ["Sezilarli takrorlanish topilmadi."], verdict };
}
