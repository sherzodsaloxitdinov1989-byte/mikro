// Topshiriq hisob-kitoblari (frontend va server uchun umumiy): guruh, bosqich balli, muddat.
import { ASSIGNMENT as A } from "../data/assignment.js";

export const ASSIGNMENT = A;
export const stageOf = (no) => A.stages.find((s) => s.no === Number(no)) || null;
export const groupOf = (no) => A.groups.find((g) => g.stages.includes(Number(no))) || null;
/** Bosqich uchun maksimal ball: guruh balli guruhdagi bosqichlar soniga teng bo'linadi (7/4, 6/3, 7/4). */
export const stageMax = (no) => {
  const g = groupOf(no);
  return g ? Math.round((g.max / g.stages.length) * 100) / 100 : 0;
};
/** Muddat: ko'rsatilgan kunning oxiri (Toshkent vaqti, UTC+5). */
export const deadlineOf = (no) => {
  const g = groupOf(no);
  return g ? new Date(`${g.due}T23:59:59+05:00`) : null;
};
export const fmtScore = (n) => (n == null ? "—" : String(Math.round(n * 100) / 100).replace(".", ","));
/** Talabaning umumiy balli: faqat o'qituvchi qo'ygan ballar, har bir guruh uchun guruh maksimalidan oshmaydi. */
export function totalScore(items) {
  const by = new Map(items.map((i) => [i.no, i]));
  let sum = 0;
  for (const g of A.groups) {
    const s = g.stages.reduce((n, no) => n + (by.get(no)?.teacher?.score || 0), 0);
    sum += Math.min(g.max, s);
  }
  return Math.round(sum * 100) / 100;
}
