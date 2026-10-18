// Talaba pasporti: XP ballari, darajalar, mavzu muhrlari, nishonlar va kunlik seriya.
// Bu modul DOM'ga bog'liq emas — brauzerda ham, serverda (reyting, sertifikat) ham bir xil hisoblaydi.
// Daraja nomlari fanga moslab public/data/course.js faylida (COURSE.levels) o'zgartiriladi.
// Brauzerda — joriy foydalanuvchi fani (topics.js: TOPICS, COURSE), serverda — asosiy fan; boshqa fan uchun makeContext(topics, course) beriladi.
import { TOPICS, COURSE } from "../data/topics.js";

const LEVEL_XP = [0, 120, 320, 650, 1050, 1600, 2300, 3200];
const lab = COURSE.features.lab;

/** Fan konteksti: mavzular, darajalar, nishonlar va sertifikat talablari (fanga bog'liq hamma narsa shu yerda). */
export function makeContext(topics, course) {
  const levels = course.levels.slice(0, LEVEL_XP.length).map(([name, icon], i) => ({ min: LEVEL_XP[i], name, icon }));
  const practiceTotal = topics.reduce((s, t) => s + (t.practice?.tasks.length || 0), 0);
  return {
    topics,
    levels,
    // Sertifikat uchun talablar: mavzularning ~75% i, masalalarning yarmi (ko'pi bilan 30 ta).
    certTopics: Math.max(1, Math.ceil(topics.length * 0.75)),
    certSolved: Math.min(30, Math.floor(practiceTotal / 2)),
    badges: badgesFor(topics.length, Boolean(course.features?.lab)),
  };
}

export const XP_RULES = [
  ["Mavzu nazariyasini o'qish", 20],
  ["Mavzu testidan o'tish (≥60%)", 30],
  ["Testda 100% natija", 20],
  ["Tushunchalar kartalarini ko'rib chiqish", 10],
  ["Animatsion darsni oxirigacha ko'rish", 10],
  ["Interaktiv metodni bajarish", 15],
  ["Amaliy mashg'ulotdagi to'g'ri hisob-kitob", 10],
  ["Mustaqil ish bahosi", "baho × 10"],
  ...(lab ? [["Tahlil laboratoriyasi hisoboti bahosi", "ball / 2"]] : []),
  ["Kunlik takrorlashdagi har bir karta", 1],
  ["Ketma-ket faol kun (seriya)", 5],
];

const dayKey = (d) => d.toISOString().slice(0, 10);

/** Ketma-ket faol kunlar soni (bugun yoki kechadan boshlab). */
export function streakOf(activity = {}, today = new Date()) {
  const days = new Set(Object.keys(activity).filter((k) => activity[k] > 0));
  const d = new Date(today);
  if (!days.has(dayKey(d))) d.setUTCDate(d.getUTCDate() - 1);
  let n = 0;
  while (days.has(dayKey(d))) {
    n++;
    d.setUTCDate(d.getUTCDate() - 1);
  }
  return n;
}

export function longestStreak(activity = {}) {
  const days = Object.keys(activity).filter((k) => activity[k] > 0).sort();
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

function topicPart(t, topic) {
  if (!t) return { xp: 0, pct: 0 };
  const methodsDone = topic.methods.filter((m) => t.methods?.[m.id]?.done).length;
  const quizPass = t.quiz !== null && t.quiz !== undefined && t.quiz >= 60;
  const tasks = topic.practice?.tasks || [];
  const solved = tasks.filter((k) => t.practice?.[k.id]?.ok).length;
  const xp = (t.read ? 20 : 0) + (quizPass ? 30 : 0) + (t.quiz === 100 ? 20 : 0) + (t.flashcards ? 10 : 0) + (t.watched ? 10 : 0) + methodsDone * 15 + solved * 10;
  const parts = [t.read, quizPass, t.flashcards, ...topic.methods.map((m) => Boolean(t.methods?.[m.id]?.done)), ...tasks.map((k) => Boolean(t.practice?.[k.id]?.ok))];
  return { xp, pct: Math.round((parts.filter(Boolean).length / parts.length) * 100), quiz: t.quiz ?? null, methodsDone, solved };
}

export function levelOf(xp, levels = LEVELS) {
  let i = 0;
  while (i + 1 < levels.length && xp >= levels[i + 1].min) i++;
  const cur = levels[i];
  const next = levels[i + 1] || null;
  return { index: i, ...cur, next, toNext: next ? next.min - xp : 0, pct: next ? Math.round(((xp - cur.min) / (next.min - cur.min)) * 100) : 100 };
}

/**
 * Barcha ko'rsatkichlar. evidence: { progress, selfStudy, labs }.
 * Faqat progress berilsa (mehmon yoki tezkor hisob), qolgan qismlar 0 deb olinadi.
 */
export function computeGame(evidence = {}, today = new Date(), ctx = DEFAULT) {
  const progress = evidence.progress || {};
  const topics = ctx.topics.map((topic) => ({ id: topic.id, num: topic.num, title: topic.title, icon: topic.icon, ...topicPart(progress.topics?.[topic.id], topic) }));
  const bySource = { topics: topics.reduce((s, t) => s + t.xp, 0) };

  const graded = (evidence.selfStudy || []).filter((x) => Number.isFinite(x.grade));
  bySource.selfStudy = graded.reduce((s, x) => s + x.grade * 10, 0);

  bySource.labs = (evidence.labs || []).reduce((s, r) => s + Math.round((r.total || 0) / 2), 0);
  const reviews = Math.min(progress.srsStats?.reviews || 0, 600);
  bySource.review = reviews;
  const streak = streakOf(progress.activity, today);
  const longest = longestStreak(progress.activity);
  bySource.streak = Math.min(longest, 60) * 5;

  const xp = Object.values(bySource).reduce((s, v) => s + v, 0);
  const stats = {
    topicsStarted: topics.filter((t) => t.pct > 0).length,
    topicsDone: topics.filter((t) => t.pct === 100).length,
    perfectQuizzes: topics.filter((t) => t.quiz === 100).length,
    methodsDone: topics.reduce((s, t) => s + (t.methodsDone || 0), 0),
    labsGraded: (evidence.labs || []).length,
    bestLab: Math.max(0, ...(evidence.labs || []).map((r) => r.total || 0)),
    solved: topics.reduce((s, t) => s + (t.solved || 0), 0),
    selfStudyGraded: graded.length,
    excellentSelfStudy: graded.filter((x) => x.grade === 5).length,
    reviews,
    mastered: Object.values(progress.srs || {}).filter((c) => c.box >= 4).length,
    streak,
    longest,
    activeDays: Object.keys(progress.activity || {}).length,
  };
  const badges = ctx.badges.map((b) => ({ ...b, earned: b.test(stats), progress: b.progress ? Math.min(1, b.progress(stats)) : null }));
  return { xp, level: levelOf(xp, ctx.levels), bySource, topics, stats, badges };
}

/** Nishonlar ro'yxati (mavzular soni va laboratoriyaga qarab). */
export function badgesFor(topicCount, lab) {
  return [
  { id: "first-step", icon: "👣", title: "Birinchi qadam", text: "Birinchi mavzuni boshlang", test: (s) => s.topicsStarted >= 1 },
  { id: "five-topics", icon: "🗂️", title: "Izchil o'quvchi", text: "5 ta mavzuni to'liq o'zlashtiring", test: (s) => s.topicsDone >= 5, progress: (s) => s.topicsDone / 5 },
  { id: "all-topics", icon: "🏆", title: "To'liq kurs", text: `${topicCount} ta mavzuning barchasini o'zlashtiring`, test: (s) => s.topicsDone >= topicCount, progress: (s) => s.topicsDone / topicCount },
  { id: "perfect", icon: "💯", title: "Bilimdon", text: "Testda 100% natija oling", test: (s) => s.perfectQuizzes >= 1 },
  { id: "perfect5", icon: "🧠", title: "Mutaxassis", text: "5 ta testda 100% natija", test: (s) => s.perfectQuizzes >= 5, progress: (s) => s.perfectQuizzes / 5 },
  { id: "methods", icon: "🧩", title: "Faol ishtirokchi", text: "15 ta interaktiv metodni bajaring", test: (s) => s.methodsDone >= 15, progress: (s) => s.methodsDone / 15 },
  { id: "calc10", icon: "🧮", title: "Hisob-kitobchi", text: "Amaliy mashg'ulotlarda 10 ta masalani to'g'ri yeching", test: (s) => s.solved >= 10, progress: (s) => s.solved / 10 },
  { id: "calc50", icon: "📐", title: "Aniq raqamlar", text: "50 ta masalani to'g'ri yeching", test: (s) => s.solved >= 50, progress: (s) => s.solved / 50 },
  ...(lab
    ? [
        { id: "lab", icon: "🔬", title: "Tahlilchi", text: "Tahlil laboratoriyasi hisoboti baholansin", test: (s) => s.labsGraded >= 1 },
        { id: "lab86", icon: "🏅", title: "Kompleks tahlil ustasi", text: "Laboratoriya hisoboti 86+ ball", test: (s) => s.bestLab >= 86, progress: (s) => s.bestLab / 86 },
      ]
    : []),
  { id: "selfstudy", icon: "📓", title: "Mustaqil izlanuvchi", text: "Mustaqil ishdan “5” baho oling", test: (s) => s.excellentSelfStudy >= 1 },
  { id: "review", icon: "🔁", title: "Xotira chempioni", text: "100 ta kartani takrorlang", test: (s) => s.reviews >= 100, progress: (s) => s.reviews / 100 },
  { id: "mastered", icon: "💎", title: "Atamalar boyligi", text: "30 ta tushunchani to'liq yodlang", test: (s) => s.mastered >= 30, progress: (s) => s.mastered / 30 },
  { id: "streak3", icon: "🔥", title: "Uch kunlik seriya", text: "3 kun ketma-ket o'qing", test: (s) => s.longest >= 3, progress: (s) => s.longest / 3 },
  { id: "streak7", icon: "⚡", title: "Haftalik marafon", text: "7 kun ketma-ket o'qing", test: (s) => s.longest >= 7, progress: (s) => s.longest / 7 },
];
}


/** Sertifikat olish shartlari. */
export function certificateStatus(game, ctx = DEFAULT) {
  const req = [
    [`${ctx.topics.length} ta mavzudan kamida ${ctx.certTopics} tasi to'liq o'zlashtirilgan`, game.stats.topicsDone >= ctx.certTopics, `${game.stats.topicsDone}/${ctx.certTopics}`],
    ...(ctx.certSolved ? [[`Amaliy mashg'ulotlarda kamida ${ctx.certSolved} ta masala to'g'ri yechilgan`, game.stats.solved >= ctx.certSolved, `${game.stats.solved}/${ctx.certSolved}`]] : []),
    [`“${ctx.levels[3].name}” darajasiga erishilgan`, game.level.index >= 3, game.level.name],
  ];
  return { eligible: req.every((r) => r[1]), req };
}

// Standart kontekst (brauzerda — joriy fan; serverda — asosiy fan) va oldingi nomlar bilan mosligi uchun
const DEFAULT = makeContext(TOPICS, COURSE);
export const LEVELS = DEFAULT.levels;
export const CERT_TOPICS = DEFAULT.certTopics;
export const CERT_SOLVED = DEFAULT.certSolved;
export const BADGES = DEFAULT.badges;
