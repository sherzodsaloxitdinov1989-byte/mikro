// Semestr ball tizimi: ma'ruza va amaliy mashg'ulot (fan va ta'lim shakliga qarab), oraliq nazorat alohida.
// Ma'ruza ishi (har mavzuda teng ulushda): 1) «Tushuncha va uning ta'rifi» (ochilgan kartalar), 2) «Nazorat savollariga javob» (yozilgan javoblar),
// 3) «O'zingizni sinang» (mavzu testi natijasi). Amaliy ish: har mavzuning «Amaliy mashg'ulot» bo'limi — masalalarni to'g'ri yechish yoki AI/o'qituvchi bahosi (qaysi biri yuqori bo'lsa).
import { scoringOf } from "../public/data/course.js";

const r2 = (n) => Math.round(n * 100) / 100;
const mean = (a) => (a.length ? a.reduce((n, v) => n + v, 0) / a.length : 0);

/**
 * in: { subject, form, topics:[{id, hasQuiz, hasPractice}], progress, reviews:[{topicId,total,teacher}], tasks:[{kind,max,score|null}], midterm: grade (0..5) | null }
 * Qaytaradi: { scoring, lecture:{max,workMax,work,midterm,points,tests,tasks}, practice:{max,points,...}, midtermGrade, total, totalMax, extra }
 */
export const ANSWER_MIN_CHARS = 20; // nazorat savoliga yozilgan javob hisobga olinishi uchun eng kam belgi

export function computeScore(inp) {
  const sc = scoringOf(inp.subject, inp.form, inp.group, inp.semNo);
  const prog = inp.progress?.topics || {};
  const notes = inp.progress?.notes || {};
  const best = new Map();
  for (const r of inp.reviews || []) {
    const v = r.teacher?.grade ?? r.total;
    if (Number.isFinite(v)) best.set(r.topicId, Math.max(best.get(r.topicId) ?? 0, v));
  }
  const g = [], q = [], t = [], lec = [], prc = [], byTopic = [];
  for (const tp of inp.topics) {
    const st = prog[tp.id] || {};
    const parts = [];
    const row = { id: tp.id, glossary: null, questions: null, quiz: null, practice: null, lecShare: null, pracShare: null };
    if (tp.glossary) {
      const seen = st.flashcards ? 1 : Math.min(1, (Array.isArray(st.glossarySeen) ? new Set(st.glossarySeen).size : 0) / tp.glossary);
      g.push(seen); parts.push(seen);
      row.glossary = { seen: st.flashcards ? tp.glossary : Math.round(seen * tp.glossary), total: tp.glossary };
    }
    if (tp.questions) {
      let n = 0;
      for (let i = 0; i < tp.questions; i++) if (String(notes[`${tp.id}:q${i}`] || "").trim().length >= ANSWER_MIN_CHARS) n++;
      q.push(n / tp.questions); parts.push(n / tp.questions);
      row.questions = { answered: n, total: tp.questions };
    }
    if (tp.hasQuiz) {
      const v = Math.min(100, st.quiz ?? 0) / 100;
      t.push(v); parts.push(v);
      row.quiz = { pct: Math.round(v * 100), attempts: st.quizAttempts || 0 };
    }
    if (parts.length) { lec.push(mean(parts)); row.lecShare = mean(parts); }
    byTopic.push(row);
    if (tp.hasPractice) {
      const ok = tp.practiceTaskIds?.length ? tp.practiceTaskIds.filter((id) => st.practice?.[id]?.ok).length / tp.practiceTaskIds.length : 0;
      const sh = Math.max(Math.min(10, best.get(tp.id) ?? 0) / 10, ok);
      prc.push(sh);
      row.pracShare = sh;
      row.practice = { review: best.get(tp.id) ?? null, solved: tp.practiceTaskIds?.filter((id) => st.practice?.[id]?.ok).length || 0, tasks: tp.practiceTaskIds?.length || 0 };
    }
  }
  const lecTopics = lec.length, pracTopics = prc.length;
  const lecShare = mean(lec);
  const pracShare = mean(prc);
  const pct = (a) => Math.round(mean(a) * 100);
  if (sc.mode === "assignment") {
    // Ma'ruza = 20 ballik topshiriq + 2 nazorat testi (5 ballik); amaliy = nazariy qism (10) + darslik amaliy topshiriqlari (10)
    const [m1, m2] = [inp.midterms?.[0] ?? null, inp.midterms?.[1] ?? null];
    const asg = r2(Math.min(sc.assignmentMax, inp.assignScore || 0));
    const mids = r2((m1 ?? 0) + (m2 ?? 0));
    const theory = r2(sc.theoryMax * lecShare);
    const practiceOnly = r2(sc.practiceMax * pracShare);
    const lecPts = r2(asg + mids);
    const pracPts = r2(theory + practiceOnly); // 5 + 5 qat'iy bo'linadi: 10 balldan oshmaydi
    return {
      scoring: sc,
      lecture: { max: sc.lecture, points: lecPts, assignment: asg, assignmentMax: sc.assignmentMax, midterms: mids, midtermsMax: sc.midtermInLecture, midterm1: m1, midterm2: m2, midtermMax: sc.midtermInLecture, work: asg, workMax: sc.assignmentMax, midterm: mids, glossaryPct: pct(g), questionsPct: pct(q), testsPct: pct(t) },
      practice: { max: sc.practice, points: pracPts, rawSum: r2(theory + practiceOnly), theory, theoryMax: sc.theoryMax, practiceOnly, practiceMax: sc.practiceMax, practicePct: Math.round(pracShare * 100) },
      byTopic: byTopic.map((r) => ({ ...r, lecPoints: r.lecShare === null ? null : r2((sc.theoryMax * r.lecShare) / lecTopics), pracPoints: r.pracShare === null ? null : r2((sc.practiceMax * r.pracShare) / pracTopics) })),
      midtermGrade: m1, midtermGrade2: m2,
      extra: 0,
      total: r2(lecPts + pracPts),
      totalMax: sc.lecture + sc.practice,
    };
  }
  const workMaxLec = sc.lecture - sc.midtermInLecture;
  const grade = inp.midterm === null || inp.midterm === undefined ? null : Number(inp.midterm);
  const midInLec = sc.midtermInLecture ? r2((sc.midtermInLecture * (grade ?? 0)) / 5) : 0;
  const lecWork = r2(workMaxLec * lecShare);
  const practice = r2(sc.practice * pracShare);
  const lecTotal = r2(lecWork + midInLec);
  return {
    scoring: sc,
    lecture: { max: sc.lecture, workMax: workMaxLec, work: lecWork, midterm: midInLec, midtermMax: sc.midtermInLecture, points: lecTotal, glossaryPct: pct(g), questionsPct: pct(q), testsPct: pct(t) },
    practice: { max: sc.practice, points: practice, practicePct: Math.round(pracShare * 100) },
    byTopic: byTopic.map((r) => ({ ...r, lecPoints: r.lecShare === null ? null : r2((workMaxLec * r.lecShare) / lecTopics), pracPoints: r.pracShare === null ? null : r2((sc.practice * r.pracShare) / pracTopics) })),
    midtermGrade: grade, // 5 ballik oraliq nazorat bahosi
    extra: sc.midtermInLecture ? 0 : grade ?? 0, // masofaviy bo'lmaganlarda oraliq nazorat — alohida qo'shimcha ball (5 ballik)
    total: r2(lecTotal + practice),
    totalMax: sc.lecture + sc.practice,
  };
}
