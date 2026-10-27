// Semestr reytingi: har bir guruh talabalari o'qish muddati davomida ball yig'adi (frontend va server uchun umumiy, DOM'ga bog'liq emas).
// Ballar o'qituvchi nazoratidagi va faol o'qishga asoslangan: nazariya, test, amaliyot, mustaqil ish, topshiriq, faollik va rag'bat.
import { TOPICS } from "../data/topics.js";
import { semesterByNo } from "../data/course.js";
import { assignmentFor, totalScore } from "./assignment-util.js";

export const RATING_RULES = [
  { key: "read", icon: "📖", name: "Mavzu nazariyasini o'qish", rule: "mavzu uchun 2 ball" },
  { key: "quiz", icon: "✅", name: "Mavzu testi", rule: "natija ≥ 60% bo'lsa: 5 + natija/10 (100% → 15 ball)" },
  { key: "practice", icon: "🧮", name: "Amaliy mashg'ulot", rule: "AI yoki o'qituvchi bahosi (0–10) × 1,5 (mavzuga 15 ball)" },
  { key: "selfStudy", icon: "🧩", name: "Mustaqil ish", rule: "«5» — 10, «4» — 7, «3» — 4 ball" },
  { key: "assignment", icon: "📝", name: "Semestr topshirig'i (20 ball)", rule: "o'qituvchi qo'ygan ball × 5 (20 ball → 100)" },
  { key: "activity", icon: "🔥", name: "Faollik", rule: "faol kun 0,5 ball (ko'pi 30) + eng uzun seriya kuniga 1 ball (ko'pi 20)" },
  { key: "bonus", icon: "🎁", name: "Rag'bat balli", rule: "o'qituvchi tomonidan alohida yutuqlar uchun beriladi" },
];

/** Rag'bat darajalari (reyting ballariga qarab). */
export const TIERS = [
  { min: 0, name: "Boshlovchi", icon: "🌱" },
  { min: 100, name: "Bronza daraja", icon: "🥉" },
  { min: 220, name: "Kumush daraja", icon: "🥈" },
  { min: 350, name: "Oltin daraja", icon: "🥇" },
  { min: 500, name: "Platina daraja", icon: "💎" },
];

/** Guruhdagi o'rin uchun medallar va semestr yakunidagi rag'bat. */
export const MEDALS = ["🥇", "🥈", "🥉"];
export const REWARDS = [
  { icon: "🥇🥈🥉", title: "Guruh yetakchilari", text: "Semestr oxirida guruhda 1–3-o'rinni egallagan talabalar faxriy yorliq bilan taqdirlanadi; qo'shimcha rag'bat turini o'qituvchi belgilaydi." },
  { icon: "🔥", title: "Haftaning faol talabasi", text: "Har bir guruhda oxirgi 7 kunda eng faol talaba reytingda alohida ajratib ko'rsatiladi." },
  { icon: "💎", title: "Rag'bat darajalari", text: "Bronza (100), Kumush (220), Oltin (350) va Platina (500) darajalariga ballar yig'ib erishiladi." },
  { icon: "🎁", title: "Rag'bat balli", text: "O'qituvchi darsdagi faollik, ijodiy ish yoki yordam uchun qo'shimcha ball berishi mumkin." },
];

export const tierOf = (points) => {
  let i = 0;
  while (i + 1 < TIERS.length && points >= TIERS[i + 1].min) i++;
  const cur = TIERS[i];
  const next = TIERS[i + 1] || null;
  return { index: i, ...cur, next, toNext: next ? Math.round((next.min - points) * 10) / 10 : 0, pct: next ? Math.round(((points - cur.min) / (next.min - cur.min)) * 100) : 100 };
};

const r1 = (n) => Math.round(n * 10) / 10;
/** Semestr oynasi: faollik shu sanalar orasida hisoblanadi. */
export const windowOf = (sem) => ({ from: sem?.startsAt || "0000-00-00", to: sem?.endsAt || "9999-99-99" });

/** Oxirgi 7 kundagi faollik (haftalik yetakchi uchun). */
export function weeklyActivity(activity = {}, today = new Date()) {
  let n = 0;
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setUTCDate(d.getUTCDate() - i);
    n += activity[d.toISOString().slice(0, 10)] || 0;
  }
  return n;
}

function longestRun(days) {
  let best = 0;
  let run = 0;
  let prev = null;
  for (const k of days) {
    const t = Date.parse(k);
    run = prev !== null && t - prev === 86400000 ? run + 1 : 1;
    best = Math.max(best, run);
    prev = t;
  }
  return best;
}

/** Semestrda to'plash mumkin bo'lgan eng ko'p ball (manbalar bo'yicha): shu semestr mavzulari soniga qarab hisoblanadi. Rag'bat balli cheklanmagan. */
export function ratingMax(semNo, form) {
  const sem = semesterByNo(semNo);
  const topics = TOPICS.filter((t) => sem && t.num >= sem.topics[0] && t.num <= sem.topics[1]);
  const b = {
    read: topics.length * 2,
    quiz: topics.filter((t) => t.quiz?.length).length * 15,
    practice: topics.filter((t) => t.practice?.tasks?.length || t.practice?.open?.length).length * 15,
    selfStudy: topics.reduce((n, t) => n + t.selfStudy.length * 10, 0),
    assignment: sem && assignmentFor(form).semester === sem.no ? 100 : 0,
    activity: 50,
    bonus: 0,
  };
  return { breakdown: b, total: Object.values(b).reduce((n, v) => n + v, 0) };
}

/**
 * ev: { progress, reviews: [{topicId, total, teacher}], selfStudy: [{taskId, grade, resubmitted}],
 *       assign: [{no, teacher}], form, bonuses: [{points, sem}] }
 */
export function computeRating(ev, semNo) {
  const sem = semesterByNo(semNo);
  const topics = TOPICS.filter((t) => sem && t.num >= sem.topics[0] && t.num <= sem.topics[1]);
  const prog = ev.progress?.topics || {};
  const b = { read: 0, quiz: 0, practice: 0, selfStudy: 0, assignment: 0, activity: 0, bonus: 0 };
  const best = new Map();
  for (const r of ev.reviews || []) {
    const v = r.teacher?.grade ?? r.total;
    if (Number.isFinite(v)) best.set(r.topicId, Math.max(best.get(r.topicId) ?? 0, v));
  }
  for (const t of topics) {
    const st = prog[t.id] || {};
    if (st.read) b.read += 2;
    if (st.quiz !== null && st.quiz !== undefined && st.quiz >= 60) b.quiz += 5 + st.quiz / 10;
    if (best.has(t.id)) b.practice += Math.min(10, best.get(t.id)) * 1.5;
  }
  const ssPoints = { 5: 10, 4: 7, 3: 4 };
  for (const s of ev.selfStudy || []) {
    const num = Number(String(s.taskId).match(/^t(\d+)-/)?.[1]);
    if (!sem || num < sem.topics[0] || num > sem.topics[1] || s.resubmitted) continue;
    b.selfStudy += ssPoints[s.grade] || 0;
  }
  const A = assignmentFor(ev.form);
  if (sem && A.semester === sem.no) b.assignment = totalScore(ev.assign || [], ev.form) * 5;
  const { from, to } = windowOf(sem);
  const days = Object.keys(ev.progress?.activity || {}).filter((k) => ev.progress.activity[k] > 0 && k >= from && k <= to).sort();
  b.activity = Math.min(30, days.length * 0.5) + Math.min(20, longestRun(days));
  b.bonus = (ev.bonuses || []).filter((x) => x.sem === semNo).reduce((n, x) => n + x.points, 0);
  for (const k of Object.keys(b)) b[k] = r1(b[k]);
  const points = r1(Object.values(b).reduce((n, v) => n + v, 0));
  return { points, breakdown: b, tier: tierOf(points) };
}
