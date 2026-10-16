// Fan bo'limi: fan haqida ma'lumot, semestr muddati, o'qituvchi bergan topshiriqlar va guruh reytingi.
// Darsligi hali yuklanmagan fanlar uchun asosiy sahifa (talaba) — #/fan; o'qituvchi uchun #/fan fanlar ro'yxati.
import { h, mount, loading, emptyState } from "../ui.js";
import { api, session } from "../api.js";
import { SUBJECTS, subjectByKey, subjectOfGroup, formByKey } from "../../data/course.js";

const MONTHS = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
const fmtIso = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}-${MONTHS[m - 1]} ${y}`;
};
const fmtScore = (n) => String(Math.round(n * 100) / 100).replace(".", ",");

function semesterCard(sem) {
  if (!sem) return null;
  const today = new Date().toISOString().slice(0, 10);
  const start = new Date(`${sem.startsAt}T00:00:00+05:00`);
  const end = new Date(`${sem.endsAt}T23:59:59+05:00`);
  const pct = Math.max(0, Math.min(100, ((Date.now() - start) / (end - start)) * 100));
  const left = Math.ceil((end - Date.now()) / 86400000);
  const state = today < sem.startsAt ? "Semestr hali boshlanmagan" : left < 0 ? "Semestr yakunlangan" : `${left} kun qoldi`;
  return h("div", { class: "card stack" },
    h("div", { class: "row between wrap" }, h("h3", {}, `📅 ${sem.no}-semestr`), h("span", { class: "chip chip-soft" }, state)),
    h("p", { class: "muted small" }, `${sem.term} · ${fmtIso(sem.startsAt)} — ${fmtIso(sem.endsAt)}`),
    h("div", { class: "progress", title: `${Math.round(pct)}%` }, h("div", { class: "progress-fill", style: { width: `${pct}%` } })));
}

function ratingCard(group, data) {
  const rows = data.rows;
  return h("div", { class: "card stack" },
    h("div", { class: "row between wrap" }, h("h3", {}, `🏆 ${group} guruhi reytingi`), h("span", { class: "muted small" }, data.tasks ? `${data.tasks} ta topshiriq · jami ${fmtScore(data.maxTotal)} ball` : "Topshiriqlar hali berilmagan")),
    h("p", { class: "muted small" }, "Reyting o'qituvchi baholagan topshiriq ballaridan hisoblanadi."),
    rows.length
      ? h("div", { class: "table-wrap" }, h("table", { class: "table" },
          h("thead", {}, h("tr", {}, ["O'rin", "Talaba", "Baholangan", "Ball"].map((c) => h("th", {}, c)))),
          h("tbody", {}, rows.map((r) => h("tr", { class: r.me ? "me-row" : "", style: r.me ? { fontWeight: "700" } : {} }, h("td", {}, r.rank), h("td", {}, r.name, r.me ? " (siz)" : ""), h("td", { class: "center" }, r.done), h("td", { class: "center" }, h("b", {}, fmtScore(r.total))))))))
      : emptyState("👥", "Guruhda talabalar hali yo'q"));
}

function head(s) {
  const form = s.form && formByKey(s.form);
  return h("div", { class: "page-head" },
    h("div", {}, h("h1", {}, `${s.icon} ${s.title}`),
      h("div", { class: "row wrap" },
        h("span", { class: "chip chip-soft" }, s.direction),
        form && h("span", { class: "chip chip-soft" }, `${form.icon || ""} ${form.name} ta'lim`),
        s.semester && h("span", { class: "chip chip-soft" }, `${s.semester.no}-semestr`),
        s.groups.length > 0 && h("span", { class: "chip chip-soft" }, `Guruhlar: ${s.groups.join(", ")}`))));
}

export async function render(el, key) {
  const user = session.user;
  // O'qituvchi: fanlar ro'yxati yoki tanlangan fan (guruhlar bo'yicha reyting bilan)
  if (user.role === "teacher" && !key) {
    return mount(el,
      h("div", { class: "page-head" }, h("div", {}, h("h1", {}, "Fanlar"), h("p", { class: "muted" }, "Platformadagi fanlar va ularga biriktirilgan guruhlar."))),
      h("div", { class: "grid cols-2" }, SUBJECTS.map((s) =>
        h("a", { class: "card", href: s.hasContent ? "#/topics" : `#/fan/${s.key}`, style: { display: "block", color: "inherit", textDecoration: "none" } },
          h("h3", {}, `${s.icon} ${s.title}`),
          h("p", { class: "muted small" }, s.direction + (s.semester ? ` · ${s.semester.no}-semestr` : "")),
          h("p", { class: "small" }, s.groups.length ? `Guruhlar: ${s.groups.join(", ")}` : "Qolgan barcha guruhlar (kunduzgi va masofaviy)"),
          h("p", { class: "small muted" }, s.hasContent ? "Darslik, testlar, topshiriq va reyting yuklangan" : "Topshiriqlar va guruh reytingi; darslik hali yuklanmagan")))),
      h("div", { class: "alert alert-info" }, "Fan uchun topshiriq berish: ", h("a", { href: "#/teacher/tasks" }, "O'qituvchi paneli → Topshiriq yaratish"), " (guruhlarni tanlab)."));
  }
  const s = user.role === "teacher" ? subjectByKey(key) : subjectOfGroup(user.group);
  if (!s) return mount(el, emptyState("🧭", "Fan topilmadi", "", h("a", { class: "btn", href: "#/fan" }, "Fanlar")));
  if (s.hasContent) return (location.hash = "#/topics");
  mount(el, loading());
  const group = user.role === "teacher" ? s.groups[0] : user.group;
  const [tasks, rating] = await Promise.all([
    user.role === "student" ? api.get("tasks") : Promise.resolve({ tasks: [], now: new Date().toISOString() }),
    api.get(`subject/rating?group=${encodeURIComponent(group || "")}`).catch(() => null),
  ]);
  const now = new Date(tasks.now);
  const open = tasks.tasks.filter((t) => !t.sub || (t.sub.teacher?.score == null || t.sub.resubmitted));
  const ratingBox = h("div");
  const drawRating = (g, data) => ratingBox.replaceChildren(data ? ratingCard(g, data) : h("p", { class: "muted" }, "Reytingni yuklab bo'lmadi."));
  drawRating(group, rating);
  mount(el,
    head(s),
    h("div", { class: "card" }, h("p", {}, s.description), h("div", { class: "alert alert-info small" }, h("b", {}, "Darslik, taqdimotlar va testlar: "), "o'qituvchi yuklagach shu yerda paydo bo'ladi. Hozircha o'qituvchi bergan topshiriqlarni “Vazifalar” bo'limida bajarasiz.")),
    semesterCard(s.semester),
    user.role === "student" && h("div", { class: "card stack" },
      h("div", { class: "row between wrap" }, h("h3", {}, "🗂️ Vazifalar"), h("a", { class: "btn small", href: "#/tasks" }, "Barchasini ko'rish")),
      open.length
        ? h("div", { class: "stack" }, open.slice(0, 5).map((t) => {
            const left = t.due ? Math.ceil((new Date(`${t.due}T23:59:59+05:00`) - now) / 86400000) : null;
            return h("a", { href: `#/tasks/${t.id}`, class: "row between wrap", style: { color: "inherit", textDecoration: "none" } },
              h("span", {}, h("b", {}, t.title), t.sub ? h("span", { class: "badge badge-warn" }, " tekshirilmoqda") : null),
              h("span", { class: "muted small" }, t.due ? `${fmtIso(t.due)} · ${left < 0 ? "muddat tugagan" : left === 0 ? "bugun oxirgi kun" : `${left} kun qoldi`}` : "muddatsiz"));
          }))
        : h("p", { class: "muted" }, tasks.tasks.length ? "Barcha topshiriqlar baholangan. Yangi topshiriqlar paydo bo'lganda shu yerda ko'rinadi." : "Hozircha topshiriq berilmagan.")),
    user.role === "teacher" && s.groups.length > 1 && h("div", { class: "row" }, h("span", { class: "muted small" }, "Guruh: "), h("select", { onchange: async (e) => drawRating(e.target.value, await api.get(`subject/rating?group=${encodeURIComponent(e.target.value)}`).catch(() => null)) }, s.groups.map((g) => h("option", { value: g }, g)))),
    ratingBox);
}
