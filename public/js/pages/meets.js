// Jonli darslar (Google Meet): talaba o'z guruhining darslarini ko'radi va qo'shiladi; o'qituvchi dars jadvalini yuritadi.
import { h, mount, toast, loading, modal, confirmDialog, emptyState } from "../ui.js";
import { api } from "../api.js";
import { COURSE, subjectByKey, subjectOfGroup, SUBJECTS, groupsOfSubject, formsOfSubject } from "../../data/course.js";
import { SUBJECT_KEY } from "../../data/topics.js";

const WEEK = ["yakshanba", "dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba"];
const MONTHS = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
// Barcha vaqtlar O'zbekiston vaqti (UTC+5) bo'yicha ko'rsatiladi
const uz = (iso) => new Date(new Date(iso).getTime() + 5 * 3600_000);
const pad = (n) => String(n).padStart(2, "0");
const fmtDay = (iso) => {
  const d = uz(iso);
  return `${d.getUTCDate()}-${MONTHS[d.getUTCMonth()]}, ${WEEK[d.getUTCDay()]}`;
};
const fmtTime = (iso) => {
  const d = uz(iso);
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
};
const left = (ms) => {
  const m = Math.max(0, Math.round(ms / 60000));
  if (m >= 1440) return `${Math.floor(m / 1440)} kun ${Math.floor((m % 1440) / 60)} soat`;
  if (m >= 60) return `${Math.floor(m / 60)} soat ${m % 60} daqiqa`;
  return `${m} daqiqa`;
};

// ---------------- Talaba ----------------

export async function render(el) {
  mount(el, loading());
  const res = await api.get("meets");
  const now = new Date(res.now);
  const upcoming = res.meets.filter((m) => new Date(m.endsAt) >= now);
  const past = res.meets.filter((m) => new Date(m.endsAt) < now).reverse();

  const card = (m, isPast) => {
    const start = new Date(m.startsAt);
    const live = now >= start && now <= new Date(m.endsAt);
    return h("div", { class: `card ${live ? "accent" : ""}` },
      h("div", { class: "row between wrap" },
        h("div", {},
          h("div", { class: "eyebrow" }, `${fmtDay(m.startsAt)} · ${fmtTime(m.startsAt)}–${fmtTime(m.endsAt)}`),
          h("h3", {}, m.title),
          m.note && h("p", { class: "small muted" }, m.note)),
        h("div", { class: "stack", style: { alignItems: "flex-end" } },
          isPast ? h("span", { class: "badge" }, "O'tgan")
            : live ? h("span", { class: "badge badge-ok" }, "Hozir davom etmoqda")
            : h("span", { class: "badge" }, `Boshlanishiga: ${left(start - now)}`),
          m.linkOpen && m.link && !isPast
            ? h("a", { class: "btn", href: m.link, target: "_blank", rel: "noopener noreferrer" }, live ? "📹 Darsga qo'shilish" : "📹 Meet'ni ochish")
            : !isPast && h("span", { class: "small muted" }, `Havola ${fmtTime(m.linkOpensAt)} da ochiladi${uz(m.linkOpensAt).getUTCDate() !== uz(m.startsAt).getUTCDate() ? ` (${fmtDay(m.linkOpensAt)})` : ""}`))));
  };

  mount(el,
    h("div", { class: "page-head" }, h("div", {}, h("h1", {}, "Jonli darslar"), h("p", { class: "muted" }, "Google Meet orqali o'tadigan onlayn darslar. Havola dars boshlanishidan 30 daqiqa oldin ochiladi. Vaqtlar — O'zbekiston vaqti bilan."))),
    h("div", { class: "alert alert-info small" }, "Darsga kirishda kamera va mikrofonni yoqish uchun brauzer ruxsatini bering. Havolani boshqalarga bermang: u faqat sizning guruhingiz uchun."),
    upcoming.length ? h("div", { class: "stack" }, upcoming.map((m) => card(m, false))) : emptyState("📹", "Yaqin kunlarda jonli dars rejalashtirilmagan", "O'qituvchi dars qo'shsa, shu yerda ko'rinadi."),
    past.length > 0 && h("details", { class: "card" }, h("summary", {}, h("b", {}, `Oxirgi 7 kundagi darslar (${past.length})`)), h("div", { class: "stack" }, past.map((m) => card(m, true)))));
}

// ---------------- O'qituvchi ----------------

const subjectGroups = () => groupsOfSubject(SUBJECT_KEY);

export async function teacherView(el) {
  mount(el, loading());
  const data = await api.get("admin/meets");
  const meets = data.meets.filter((m) => (m.subject || SUBJECTS[0].key) === SUBJECT_KEY);
  const now = new Date(data.now);
  const reload = () => teacherView(el);
  const audience = (m) => [m.forms?.length ? m.forms.map((f) => (COURSE.studyForms || []).find((x) => x.key === f)?.name || f).join(", ") : "Barcha ta'lim shakllari", m.groups?.length ? m.groups.join(", ") : "barcha guruhlar"].join(" · ");

  mount(el,
    h("div", { class: "row between wrap" },
      h("p", { class: "muted small" }, "Dars vaqti va Google Meet havolasini kiriting. Talaba faqat o'z guruhining darsini ko'radi; havola dars boshlanishidan 30 daqiqa oldin ochiladi. Meet'da uchrashuvni siz ochasiz (meet.google.com → Yangi uchrashuv → havolani nusxalang)."),
      h("button", { class: "btn", onclick: () => openForm(null, reload) }, "＋ Yangi jonli dars")),
    meets.length
      ? h("div", { class: "card table-wrap" }, h("table", { class: "table" },
          h("thead", {}, h("tr", {}, ["№", "Dars", "Vaqt", "Kimga", ""].map((x) => h("th", {}, x)))),
          h("tbody", {}, meets.map((m, i) => {
            const end = new Date(new Date(m.startsAt).getTime() + m.durationMin * 60000);
            return h("tr", {},
              h("td", { class: "center muted" }, `${i + 1}.`),
              h("td", {}, h("b", {}, m.title), h("div", { class: "small" }, h("a", { href: m.link, target: "_blank", rel: "noopener noreferrer" }, "Meet havolasi"))),
              h("td", { class: "small" }, `${fmtDay(m.startsAt)}, ${fmtTime(m.startsAt)}–${fmtTime(end.toISOString())}`, h("div", {}, end < now ? h("span", { class: "badge" }, "O'tgan") : new Date(m.startsAt) <= now ? h("span", { class: "badge badge-ok" }, "Davom etmoqda") : h("span", { class: "badge badge-warn" }, "Rejada"))),
              h("td", { class: "small" }, audience(m)),
              h("td", {}, h("div", { class: "row wrap" },
                h("button", { class: "btn ghost small", onclick: () => openForm(m, reload) }, "Tahrirlash"),
                h("button", { class: "btn ghost small", onclick: async () => {
                  if (!(await confirmDialog(`“${m.title}” darsi o'chirilsinmi?`))) return;
                  try {
                    await api.del(`admin/meets/${m.id}`);
                    toast("O'chirildi", "ok");
                    reload();
                  } catch (ex) {
                    toast(ex.message, "error");
                  }
                } }, "🗑"))));
          }))))
      : emptyState("📹", "Hali jonli dars qo'shilmagan", "“Yangi jonli dars” tugmasi orqali birinchi darsni rejalashtiring."));
}

function openForm(m, reload) {
  const forms = formsOfSubject(SUBJECT_KEY);
  const groups = subjectGroups();
  const startLocal = m ? uz(m.startsAt) : null;
  const title = h("input", { type: "text", maxlength: 150, value: m?.title || "", placeholder: "Masalan: 3-mavzu bo'yicha onlayn dars" });
  const link = h("input", { type: "url", value: m?.link || "", placeholder: "https://meet.google.com/abc-defg-hij" });
  const date = h("input", { type: "date", value: startLocal ? `${startLocal.getUTCFullYear()}-${pad(startLocal.getUTCMonth() + 1)}-${pad(startLocal.getUTCDate())}` : "" });
  const time = h("input", { type: "time", value: startLocal ? `${pad(startLocal.getUTCHours())}:${pad(startLocal.getUTCMinutes())}` : "09:00" });
  const dur = h("input", { type: "number", min: 10, max: 360, step: 5, value: m?.durationMin || 80, style: { maxWidth: "110px" } });
  const note = h("textarea", { rows: 2, maxlength: 600, placeholder: "Talabalar uchun izoh (ixtiyoriy): nimaga tayyorlanish kerak" }, m?.note || "");
  const chk = (box, text) => h("label", { style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" } }, box, h("span", {}, text));
  const formBoxes = forms.map((f) => ({ f, box: h("input", { type: "checkbox", checked: m?.forms?.includes(f.key) || false }) }));
  const groupBoxes = groups.map((g) => ({ g, box: h("input", { type: "checkbox", checked: m?.groups?.includes(g) || false }) }));
  const close = modal(m ? "Jonli darsni tahrirlash" : "Yangi jonli dars (Google Meet)", h("div", { class: "stack" },
    h("label", { class: "field" }, h("span", {}, "Dars nomi"), title),
    h("label", { class: "field" }, h("span", {}, "Google Meet havolasi"), link),
    h("div", { class: "row wrap" },
      h("label", { class: "field" }, h("span", {}, "Sana"), date),
      h("label", { class: "field" }, h("span", {}, "Boshlanish vaqti (O'zbekiston)"), time),
      h("label", { class: "field" }, h("span", {}, "Davomiyligi (daqiqa)"), dur)),
    h("div", { class: "card stack" },
      h("b", {}, "Kimga ko'rinadi"),
      h("p", { class: "small muted" }, "Hech biri tanlanmasa — shu fanning hamma talabasiga."),
      h("div", { class: "row wrap" }, formBoxes.map(({ f, box }) => chk(box, `${f.icon || ""} ${f.name}`))),
      groups.length > 0 && h("div", { class: "row wrap" }, groupBoxes.map(({ g, box }) => chk(box, g)))),
    h("label", { class: "field" }, h("span", {}, "Izoh"), note),
    h("div", { class: "row end" },
      h("button", { class: "btn ghost", onclick: () => close() }, "Bekor qilish"),
      h("button", { class: "btn", onclick: async (e) => {
        e.target.disabled = true;
        const payload = { subject: m?.subject || SUBJECT_KEY, title: title.value, link: link.value.trim(), date: date.value, time: time.value, durationMin: Number(dur.value), note: note.value,
          forms: formBoxes.filter((x) => x.box.checked).map((x) => x.f.key), groups: groupBoxes.filter((x) => x.box.checked).map((x) => x.g) };
        try {
          if (m) await api.put(`admin/meets/${m.id}`, payload);
          else await api.post("admin/meets", payload);
          toast(m ? "Saqlandi" : "Jonli dars qo'shildi", "ok");
          close();
          reload();
        } catch (ex) {
          toast(ex.message, "error");
          e.target.disabled = false;
        }
      } }, m ? "Saqlash" : "Qo'shish"))), { wide: true });
}
