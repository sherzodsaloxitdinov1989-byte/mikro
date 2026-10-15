// Topshiriq hisob-kitoblari (frontend va server uchun umumiy): har bir ta'lim shakli (kunduzgi / masofaviy) o'z topshirig'iga ega.
// Matn himoyalangan: kirmagan foydalanuvchida bo'sh ro'yxat.
const EMPTY = { id: "", form: "", title: "", intro: [], total: 0, semester: 0, groups: [], stages: [] };
const KUNDUZGI = await (async () => {
  try {
    return (await import("../data/assignment.js")).ASSIGNMENT;
  } catch {
    return EMPTY;
  }
})();
const MASOFAVIY = await (async () => {
  try {
    return (await import("../data/assignment-masofaviy.js")).ASSIGNMENT;
  } catch {
    return EMPTY;
  }
})();

export const ASSIGNMENTS = { kunduzgi: KUNDUZGI, masofaviy: MASOFAVIY };
export const DEFAULT_FORM = "kunduzgi";
/** Ta'lim shakli bo'yicha topshiriq (aniqlanmagan bo'lsa — kunduzgi). */
export const assignmentFor = (form) => ASSIGNMENTS[form] || ASSIGNMENTS[DEFAULT_FORM];
export const stageOf = (no, form) => assignmentFor(form).stages.find((s) => s.no === Number(no)) || null;
export const groupOf = (no, form) => assignmentFor(form).groups.find((g) => g.stages.includes(Number(no))) || null;
/** Bosqich uchun maksimal ball: guruh balli guruhdagi bosqichlar soniga teng bo'linadi (7/4, 6/3, 7/4). */
export const stageMax = (no, form) => {
  const g = groupOf(no, form);
  return g ? Math.round((g.max / g.stages.length) * 100) / 100 : 0;
};
/** Muddat: ko'rsatilgan kunning oxiri (Toshkent vaqti, UTC+5). */
export const deadlineOf = (no, form) => {
  const g = groupOf(no, form);
  return g ? new Date(`${g.due}T23:59:59+05:00`) : null;
};
export const fmtScore = (n) => (n == null ? "—" : String(Math.round(n * 100) / 100).replace(".", ","));
/** Talabaning umumiy balli: faqat o'qituvchi qo'ygan ballar, har bir guruh uchun guruh maksimalidan oshmaydi. */
export function totalScore(items, form) {
  const A = assignmentFor(form);
  const by = new Map(items.map((i) => [i.no, i]));
  let sum = 0;
  for (const g of A.groups) {
    const s = g.stages.reduce((n, no) => n + (by.get(no)?.teacher?.score || 0), 0);
    sum += Math.min(g.max, s);
  }
  return Math.round(sum * 100) / 100;
}
