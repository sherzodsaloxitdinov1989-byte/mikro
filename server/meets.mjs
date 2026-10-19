// Jonli darslar (Google Meet): o'qituvchi dars vaqti va havolasini kiritadi, talaba faqat o'z guruhining darsini ko'radi.
import { subjectOfGroup, SUBJECTS } from "../public/data/course.js";

const trim = (v, n) => (typeof v === "string" ? v.trim().slice(0, n) : "");
export const LINK_OPENS_MIN = 30; // havola dars boshlanishidan shuncha daqiqa oldin talabaga ochiladi
export const LINK_GRACE_MIN = 60; // dars tugagach shuncha vaqt yana ko'rinadi

/** Faqat Google Meet havolalari qabul qilinadi (boshqa saytga yo'naltirishning oldini olish). */
export function meetLink(url) {
  const u = trim(url, 200);
  if (/^https:\/\/meet\.google\.com\/[a-z]{3}-[a-z]{4}-[a-z]{3}(\?[\w=&%.-]*)?$/i.test(u)) return u;
  if (/^https:\/\/meet\.google\.com\/lookup\/[\w-]{4,40}(\?[\w=&%.-]*)?$/i.test(u)) return u;
  if (/^https:\/\/g\.co\/meet\/[\w-]{3,40}$/i.test(u)) return u;
  return "";
}

export function normalizeMeet(b, { formKeys, groups }) {
  const title = trim(b.title, 150);
  if (title.length < 3) return { error: "Dars nomini kiriting (kamida 3 belgi)" };
  const link = meetLink(b.link);
  if (!link) return { error: "Google Meet havolasini kiriting (masalan: https://meet.google.com/abc-defg-hij)" };
  const date = trim(b.date, 10);
  const time = trim(b.time, 5);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) return { error: "Dars sanasi va vaqtini kiriting" };
  const startsAt = new Date(`${date}T${time}:00+05:00`); // O'zbekiston vaqti
  if (Number.isNaN(startsAt.getTime())) return { error: "Sana yoki vaqt noto'g'ri" };
  const durationMin = Math.round(Number(b.durationMin) || 80);
  if (durationMin < 10 || durationMin > 360) return { error: "Davomiyligi 10 dan 360 daqiqagacha bo'lsin" };
  const subject = SUBJECTS.some((x) => x.key === b.subject) ? b.subject : SUBJECTS[0].key;
  return {
    meet: {
      subject,
      title,
      link,
      startsAt: startsAt.toISOString(),
      durationMin,
      forms: (Array.isArray(b.forms) ? b.forms : []).filter((f) => formKeys.includes(f)),
      groups: (Array.isArray(b.groups) ? b.groups : []).filter((g) => groups.includes(g)),
      note: trim(b.note, 600),
    },
  };
}

export const endsAt = (m) => new Date(new Date(m.startsAt).getTime() + m.durationMin * 60_000);

/** Dars shu talabaga tegishlimi (fan, ta'lim shakli va guruh bo'yicha). */
export function forStudent(m, { form, group }) {
  if (subjectOfGroup(group).key !== (m.subject || SUBJECTS[0].key)) return false;
  if (m.forms?.length && !m.forms.includes(form)) return false;
  if (m.groups?.length && !m.groups.includes(group)) return false;
  return true;
}

/** Talabaga ko'rinadigan ko'rinish: havola faqat dars oldidan va dars paytida beriladi. */
export function studentView(m, now = new Date()) {
  const start = new Date(m.startsAt);
  const opens = new Date(start.getTime() - LINK_OPENS_MIN * 60_000);
  const closes = new Date(endsAt(m).getTime() + LINK_GRACE_MIN * 60_000);
  const open = now >= opens && now <= closes;
  const { link, createdBy, ...rest } = m;
  return { ...rest, endsAt: endsAt(m).toISOString(), ...(open ? { link } : {}), linkOpensAt: opens.toISOString(), linkOpen: open };
}
