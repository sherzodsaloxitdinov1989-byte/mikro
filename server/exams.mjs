// Nazorat testlari (oraliq/yakuniy): savollar bazasi serverda saqlanadi, har bir talabaga bazadan tasodifiy variant tuziladi.
// Test belgilangan vaqtda ochiladi; talaba boshlagan paytdan boshlab `durationMin` daqiqa beriladi (server hisoblaydi).
import { BANK as MAKRO1 } from "./exam-bank-makro1.mjs";
import { BANK as MIKRO1 } from "./exam-bank-mikro1.mjs";

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
  {
    id: "mikro-1-oraliq",
    subject: "mikro",
    semester: 3, // ball jadvalida shu semestrning 1-nazorati (5 ball) sifatida hisoblanadi
    title: "Mikroiqtisodiyot — 1-oraliq nazorat (1–6-mavzular)",
    groups: ["331-25", "332-25", "333-25", "334-25"],
    startsAt: "2026-11-04T11:40:00+05:00", // eng erta boshlanish
    starts: { "333-25": "2026-11-04T11:40:00+05:00", "334-25": "2026-11-04T11:40:00+05:00", "331-25": "2026-11-04T13:40:00+05:00", "332-25": "2026-11-04T13:40:00+05:00" }, // guruhlar bo'yicha boshlanish vaqti (Toshkent vaqti)
    closesAt: "2026-11-04T23:59:00+05:00",
    durationMin: 60,
    count: 25,
    topics: [1, 2, 3, 4, 5, 6],
    bank: MIKRO1,
  },
];

/** Test shu guruh uchun qachon ochiladi (guruhga alohida vaqt belgilangan bo'lsa — o'sha). */
export const startOf = (exam, group) => exam.starts?.[group] || exam.startsAt;

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

/** Talaba uchun variant: har mavzudan teng ulushda (masalan, 25 savol / 6 mavzu → 4 tadan + 1 qo'shimcha), savollar va variantlar tartibi aralashtiriladi. */
export function buildVariant(exam) {
  const byTopic = new Map();
  exam.bank.forEach((b, i) => (byTopic.get(b.t) || byTopic.set(b.t, []).get(b.t)).push(i));
  const topics = exam.topics.filter((t) => byTopic.has(t));
  const base = Math.floor(exam.count / topics.length);
  const extra = exam.count - base * topics.length;
  const extraTopics = new Set(shuffle(topics).slice(0, extra));
  const quota = new Map(topics.map((t) => [t, base + (extraTopics.has(t) ? 1 : 0)]));
  const picked = [];
  if (exam.bank.some((b) => b.k === "pr")) {
    // Bazaning ~30% i masala: variantda ham masalalar ulushi taxminan 30% (25 savolda 7–8 ta), mavzular bo'yicha tarqatiladi
    const P = Math.round(exam.count * 0.3) - rnd(2); // 8 yoki 7
    const probs = new Map(topics.map((t) => [t, Math.floor(P / topics.length)]));
    for (const t of shuffle(topics).slice(0, P - Math.floor(P / topics.length) * topics.length)) probs.set(t, probs.get(t) + 1);
    for (const t of topics) {
      const pool = byTopic.get(t);
      const pr = shuffle(pool.filter((i) => exam.bank[i].k === "pr")).slice(0, probs.get(t));
      const th = shuffle(pool.filter((i) => exam.bank[i].k !== "pr")).slice(0, quota.get(t) - pr.length);
      picked.push(...pr, ...th);
    }
  } else for (const t of topics) picked.push(...shuffle(byTopic.get(t)).slice(0, quota.get(t)));
  return shuffle(picked).map((b) => ({ b, perm: shuffle([0, 1, 2, 3]) })); // perm[k] — ko'rsatilgan k-variant bankdagi qaysi variant
}

/** Savollar talabaga ko'rsatiladigan ko'rinishda (kalitsiz). */
export const viewOf = (exam, items) => items.map((it, n) => ({ n, q: exam.bank[it.b].q, options: it.perm.map((k) => exam.bank[it.b].o[k]) }));

/** 5 ballik baho (foizdan): 90–100 → 5, 71–89 → 4, 60–70 → 3, 60 dan past → 2. */
export const fiveScale = (percent) => (percent >= 90 ? 5 : percent >= 71 ? 4 : percent >= 60 ? 3 : 2);

export function grade(exam, items, answers) {
  let correct = 0;
  items.forEach((it, n) => {
    const a = answers?.[n];
    if (Number.isInteger(a) && it.perm[a] === exam.bank[it.b].c) correct++;
  });
  return { correct, total: items.length, answered: Object.keys(answers || {}).length, percent: Math.round((correct / items.length) * 100) };
}
