// Semestr ball tizimi: ma'ruza va amaliy mashg'ulot (fan va ta'lim shakliga qarab), oraliq nazorat alohida.
// Ma'ruza ishi = mavzu testlari + «ma'ruza» turidagi o'qituvchi topshiriqlari; amaliy ish = amaliy mashg'ulot (AI/o'qituvchi bahosi) + «amaliy» turidagi topshiriqlar.
// Ikkala qism ham bo'lsa, ish ballining yarmi-yarmi; faqat bittasi bo'lsa — hammasi shunga tegishli.
import { scoringOf } from "../public/data/course.js";

const r2 = (n) => Math.round(n * 100) / 100;
const mean = (a) => (a.length ? a.reduce((n, v) => n + v, 0) / a.length : 0);

/** Ikki ulushdan (test/mashq va topshiriqlar) umumiy ulush (0..1). tasks === null — topshiriq berilmagan. */
const blend = (main, tasks) => (tasks === null ? main : (main + tasks) / 2);
const taskShare = (list) => {
  if (!list.length) return null;
  const max = list.reduce((n, t) => n + t.max, 0);
  return max ? Math.min(1, list.reduce((n, t) => n + (t.score ?? 0), 0) / max) : 0;
};

/**
 * in: { subject, form, topics:[{id, hasQuiz, hasPractice}], progress, reviews:[{topicId,total,teacher}], tasks:[{kind,max,score|null}], midterm: grade (0..5) | null }
 * Qaytaradi: { scoring, lecture:{max,workMax,work,midterm,points,tests,tasks}, practice:{max,points,...}, midtermGrade, total, totalMax, extra }
 */
export function computeScore(inp) {
  const sc = scoringOf(inp.subject, inp.form);
  const prog = inp.progress?.topics || {};
  const quizTopics = inp.topics.filter((t) => t.hasQuiz);
  const testsShare = quizTopics.length ? mean(quizTopics.map((t) => Math.min(100, prog[t.id]?.quiz ?? 0) / 100)) : 0;
  const best = new Map();
  for (const r of inp.reviews || []) {
    const v = r.teacher?.grade ?? r.total;
    if (Number.isFinite(v)) best.set(r.topicId, Math.max(best.get(r.topicId) ?? 0, v));
  }
  const pracTopics = inp.topics.filter((t) => t.hasPractice);
  const practiceShare = pracTopics.length ? mean(pracTopics.map((t) => Math.min(10, best.get(t.id) ?? 0) / 10)) : 0;
  const lecTasks = inp.tasks.filter((t) => t.kind === "lecture");
  const pracTasks = inp.tasks.filter((t) => t.kind !== "lecture");
  const lecShare = blend(testsShare, taskShare(lecTasks));
  const pracShare = blend(practiceShare, taskShare(pracTasks));
  const workMaxLec = sc.lecture - sc.midtermInLecture;
  const grade = inp.midterm === null || inp.midterm === undefined ? null : Number(inp.midterm);
  const midInLec = sc.midtermInLecture ? r2((sc.midtermInLecture * (grade ?? 0)) / 5) : 0;
  const lecWork = r2(workMaxLec * lecShare);
  const prac = r2(sc.practice * pracShare);
  const lecTotal = r2(lecWork + midInLec);
  return {
    scoring: sc,
    lecture: { max: sc.lecture, workMax: workMaxLec, work: lecWork, midterm: midInLec, midtermMax: sc.midtermInLecture, points: lecTotal, testsPct: Math.round(testsShare * 100), tasksPct: taskShare(lecTasks) === null ? null : Math.round(taskShare(lecTasks) * 100), tasksCount: lecTasks.length },
    practice: { max: sc.practice, points: prac, practicePct: Math.round(practiceShare * 100), tasksPct: taskShare(pracTasks) === null ? null : Math.round(taskShare(pracTasks) * 100), tasksCount: pracTasks.length },
    midtermGrade: grade, // 5 ballik oraliq nazorat bahosi
    extra: sc.midtermInLecture ? 0 : grade ?? 0, // masofaviy bo'lmaganlarda oraliq nazorat — alohida qo'shimcha ball (5 ballik)
    total: r2(lecTotal + prac),
    totalMax: sc.lecture + sc.practice,
  };
}
