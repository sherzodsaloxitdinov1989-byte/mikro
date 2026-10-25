// Nazorat testlari (oraliq/yakuniy): savollar bazasi serverda saqlanadi, har bir talabaga bazadan tasodifiy variant tuziladi.
// Test belgilangan vaqtda ochiladi; talaba boshlagan paytdan boshlab `durationMin` daqiqa beriladi (server hisoblaydi).
import { BANK as MAKRO1 } from "./exam-bank-makro1.mjs";

export const EXAMS = [
  {
    id: "makro-1-oraliq",
    subject: "makro",
    title: "Makroiqtisodiyot — 1-oraliq nazorat",
    groups: ["231-24", "232-24", "233-24"],
    startsAt: "2026-10-27T08:40:00+05:00", // test shu vaqtdan ochiladi (Toshkent vaqti)
    closesAt: "2026-10-27T23:59:00+05:00", // shundan keyin boshlab bo'lmaydi
    durationMin: 45,
    count: 30,
    topics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    bank: MAKRO1,
  },
];

export const examById = (id) => EXAMS.find((e) => e.id === id) || null;
export const examsOfGroup = (group) => EXAMS.filter((e) => e.groups.includes(group));

const rnd = (n) => {
  const a = new Uint32Array(1);
  crypto.getRandomValues(a);
  return a[0] % n;
};
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = rnd(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Talaba uchun variant: har mavzudan teng ulushda (30 savol / 14 mavzu → 2 tadan + 2 qo'shimcha), savollar va variantlar tartibi aralashtiriladi. */
export function buildVariant(exam) {
  const byTopic = new Map();
  exam.bank.forEach((b, i) => (byTopic.get(b.t) || byTopic.set(b.t, []).get(b.t)).push(i));
  const topics = exam.topics.filter((t) => byTopic.has(t));
  const base = Math.floor(exam.count / topics.length);
  const extra = exam.count - base * topics.length;
  const extraTopics = new Set(shuffle(topics).slice(0, extra));
  const picked = [];
  for (const t of topics) picked.push(...shuffle(byTopic.get(t)).slice(0, base + (extraTopics.has(t) ? 1 : 0)));
  return shuffle(picked).map((b) => ({ b, perm: shuffle([0, 1, 2, 3]) })); // perm[k] — ko'rsatilgan k-variant bankdagi qaysi variant
}

/** Savollar talabaga ko'rsatiladigan ko'rinishda (kalitsiz). */
export const viewOf = (exam, items) => items.map((it, n) => ({ n, q: exam.bank[it.b].q, options: it.perm.map((k) => exam.bank[it.b].o[k]) }));

export function grade(exam, items, answers) {
  let correct = 0;
  items.forEach((it, n) => {
    const a = answers?.[n];
    if (Number.isInteger(a) && it.perm[a] === exam.bank[it.b].c) correct++;
  });
  return { correct, total: items.length, answered: Object.keys(answers || {}).length, percent: Math.round((correct / items.length) * 100) };
}
