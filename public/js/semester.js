// Semestrlar bo'yicha guruhlash: mavzular va amaliy mashg'ulotlar ro'yxatida semestr sarlavhalari.
import { h } from "./ui.js";
import { COURSE, semesterByNo, currentSemester } from "../data/course.js";

const MONTHS = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
export const fmtIsoDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}-${MONTHS[m - 1]} ${y}`;
};

/** Semestr sarlavhasi: nomi, bosqich, muddat va (joriy bo'lsa) belgi. */
export function semesterHeader(sem, extra) {
  const cur = currentSemester().no === sem.no;
  const left = sem.endsAt ? Math.ceil((new Date(`${sem.endsAt}T23:59:59+05:00`) - new Date()) / 86400000) : null;
  return h("div", { class: "semester-head" },
    h("div", {},
      h("h2", { class: "section-title" }, `${sem.name} · ${sem.course}-bosqich`, cur && h("span", { class: "chip chip-soft", style: { marginLeft: "8px" } }, "joriy semestr")),
      h("p", { class: "muted small" }, `${sem.term} · ${sem.topics[0]}–${sem.topics[1]}-mavzular${sem.endsAt ? ` · o'qish muddati ${fmtIsoDate(sem.endsAt)} gacha${left !== null && left >= 0 ? ` (${left} kun qoldi)` : left < 0 ? " (tugagan)" : ""}` : ""}`)),
    extra);
}

/** list (mavzular) ni semestrlar bo'yicha guruhlab, har biri uchun [sarlavha, kontent] qaytaradi. */
export function groupedBySemester(list, renderItems, extraFor) {
  const out = [];
  for (const sem of COURSE.semesters) {
    const items = list.filter((t) => t.semester === sem.no);
    if (!items.length) continue;
    out.push(h("section", { class: "stack semester-block" }, semesterHeader(sem, extraFor?.(sem)), renderItems(items)));
  }
  const rest = list.filter((t) => !semesterByNo(t.semester));
  if (rest.length) out.push(renderItems(rest));
  return out;
}
