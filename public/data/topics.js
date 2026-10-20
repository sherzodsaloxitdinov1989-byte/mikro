// Fan mavzulari: barcha qatlamlarni bitta TOPICS ro'yxatiga yig'adi (bu faylni odatda o'zgartirish shart emas).
// Nazariy matn, reja, savollar va tayanch iboralar — book.js (darslikdan avtomatik import),
// pedagogik qatlam — layers-auto.js (glossariy, metodlar, testlar, mustaqil ishlar), amaliy mashg'ulotlar — practice-auto.js,
// dolzarb ma'lumotlar — updates.js, fan sozlamalari — course.js.
//
// Platformada bir nechta fan bo'lishi mumkin (course.js → SUBJECTS). Brauzerda faqat FOYDALANUVCHI FANINING ma'lumotlari yuklanadi:
// talaba — o'z guruhi fani, o'qituvchi — tanlangan fan (localStorage "tt.subject", standart — asosiy fan).
// Serverda (Worker/Node) barcha fanlar yuklanadi: TOPICS_ALL[fanKaliti].
import { buildLayers } from "./layers-lib.js";
import { COURSE as BASE_COURSE, SUBJECTS, subjectOfGroup, subjectByKey, semesterOf } from "./course.js";
import { updatesFor } from "./updates.js";

// Fan ma'lumotlari yuklagichlari (aniq yo'llar: yig'uvchi — esbuild — ularni topa olishi uchun).
const LOADERS = {
  mikro: {
    book: () => import("./book.js").then((m) => m.BOOK),
    layers: () => import("./layers-auto.js").then((m) => m.AUTO),
    practice: () => import("./practice-auto.js").then((m) => m.AUTO_PRACTICE),
    meta: () => import("./mikro-meta.js"),
  },
  tadbirkorlik: {
    book: () => import("./tb/book.js").then((m) => m.BOOK),
    layers: () => import("./tb/layers-auto.js").then((m) => m.AUTO),
    practice: () => import("./tb/practice-auto.js").then((m) => m.AUTO_PRACTICE),
    meta: () => import("./tb/meta.js"),
  },
  mikro2: {
    book: () => import("./mikro2/book.js").then((m) => m.BOOK),
    layers: () => import("./mikro2/layers-auto.js").then((m) => m.AUTO),
    practice: () => import("./mikro2/practice-auto.js").then((m) => m.AUTO_PRACTICE),
    meta: () => import("./mikro2/meta.js"),
  },
  makro: {
    book: () => import("./makro/book.js").then((m) => m.BOOK),
    layers: () => import("./makro/layers-auto.js").then((m) => m.AUTO),
    practice: () => import("./makro/practice-auto.js").then((m) => m.AUTO_PRACTICE),
    meta: () => import("./makro/meta.js"),
  },
};

const isBrowser = typeof window !== "undefined" && typeof localStorage !== "undefined";

/** Brauzerda: joriy foydalanuvchining fani (talaba — guruhi bo'yicha, o'qituvchi — tanlangan fan). */
export function currentSubjectKey() {
  if (!isBrowser) return SUBJECTS[0].key;
  try {
    const u = JSON.parse(localStorage.getItem("tt.user") || "null");
    if (u?.role === "student") return subjectOfGroup(u.group).key;
    const pick = localStorage.getItem("tt.subject");
    if (u?.role === "teacher" && pick && subjectByKey(pick)) return pick;
  } catch {}
  return SUBJECTS[0].key;
}

async function loadSubject(key) {
  const L = LOADERS[key];
  // Darsligi hali yo'q fan (hasContent: false): bo'sh kontent
  if (!L) return { book: { intro: "", topics: [], literature: [] }, layers: {}, practice: {}, meta: {} };
  const safe = async (fn, empty) => {
    try {
      return await fn();
    } catch {
      return empty;
    }
  };
  const [book, layers, practice, meta] = await Promise.all([
    safe(L.book, { intro: "", topics: [], literature: [] }),
    safe(L.layers, {}),
    safe(L.practice, {}),
    safe(L.meta, {}),
  ]);
  return { book, layers, practice, meta };
}

const OPTION_LETTERS = ["A", "B", "C", "D", "E", "F"];
const pad = (n) => String(n).padStart(2, "0");

/** Fan uchun amaldagi COURSE: asosiy sozlamalar + shu fanning o'zgargan qiymatlari. */
export const courseOf = (key) => {
  const s = subjectByKey(key) || SUBJECTS[0];
  return key === SUBJECTS[0].key ? BASE_COURSE : { ...BASE_COURSE, ...(s.course || {}), decks: {} };
};

function build(key, data) {
  const subj = subjectByKey(key);
  const course = courseOf(key);
  const layersAll = buildLayers(data.layers, { icons: data.meta.ICONS, resources: data.meta.RESOURCES });
  const decks = key === SUBJECTS[0].key ? BASE_COURSE.decks || {} : data.meta.DECKS || {};
  const sem = (num) => (key === SUBJECTS[0].key ? semesterOf(num)?.no || null : subj.semester?.no || null);
  const topics = data.book.topics.map((b) => {
    const layer = layersAll[b.num] || {};
    const practice = data.practice[b.num] || null;
    return {
      id: `${subj.idPrefix}${b.num}`,
      subject: key,
      num: b.num,
      chapter: b.chapter,
      semester: sem(b.num),
      icon: layer.icon || "📘",
      title: layer.title || b.title,
      bookTitle: b.title,
      goal: practice?.goal || "",
      image: null,
      plan: b.plan,
      sections: b.sections,
      questions: b.questions,
      keywords: b.keywords,
      glossary: layer.glossary || [],
      quiz: (layer.tests || []).map((t) => ({ q: t.q, options: t.options, correct: t.c, explain: t.e || "", letters: OPTION_LETTERS })),
      methods: layer.methods || [],
      selfStudy: layer.selfStudy || [],
      resources: layer.resources || [],
      practice,
      updates: key === SUBJECTS[0].key ? updatesFor(b.num) : [],
      // Dars taqdimoti (PDF), o'qituvchi panelida almashtirilishi mumkin
      deck: decks[b.num] ? `/${subj.slides}/${pad(b.num)}.pdf` : null,
      deckPages: decks[b.num] || null,
    };
  });
  return { topics, book: data.book, course };
}

// Brauzerda — faqat joriy fan; serverda — barcha fanlar.
export const SUBJECT_KEY = currentSubjectKey();
const keys = isBrowser ? [SUBJECT_KEY] : SUBJECTS.filter((s) => s.hasContent).map((s) => s.key);
const built = Object.fromEntries(await Promise.all(keys.map(async (k) => [k, build(k, await loadSubject(k))])));
const current = built[SUBJECT_KEY] || built[SUBJECTS[0].key];

/** Barcha yuklangan fanlarning mavzulari (server uchun hammasi, brauzerda — faqat joriy fan). */
export const TOPICS_ALL = Object.fromEntries(Object.entries(built).map(([k, v]) => [k, v.topics]));
export const findTopic = (id) => Object.values(TOPICS_ALL).flat().find((t) => t.id === id) || null;

export const COURSE = current.course;
export const BOOK_INTRO = current.book.intro;
export const LITERATURE = current.book.literature;
export const TOPICS = current.topics;

export const METHOD_INFO = {
  brainstorm: { name: "Aqliy hujum", icon: "💡", about: "G'oyalarni tanqidsiz, erkin va ko'p miqdorda yig'ish metodi." },
  cluster: { name: "Klaster", icon: "🕸️", about: "Tushunchalar o'rtasidagi bog'liqlikni grafik shaklda ifodalash metodi." },
  venn: { name: "Venn diagrammasi", icon: "⭕", about: "Ikki tushunchaning umumiy va farqli jihatlarini aniqlash metodi." },
  case: { name: "Keys-stadi", icon: "📁", about: "Real kasbiy vaziyatni tahlil qilib, yechim topish metodi." },
  fsmu: { name: "FSMU", icon: "🗣️", about: "Fikr → Sabab → Misol → Umumlashtirish: o'z fikrini asoslashga o'rgatuvchi texnika." },
  insert: { name: "INSERT", icon: "✍️", about: "Matnni belgilar yordamida faol, tanqidiy o'qish texnikasi." },
  matching: { name: "Moslashtirish", icon: "🔗", about: "Tushuncha va ta'riflarni o'zaro moslash mashqi." },
  tchart: { name: "T-jadval", icon: "⚖️", about: "Ikki qarama-qarshi jihatni (afzallik/kamchilik) taqqoslash grafik organayzeri." },
  ordering: { name: "Ketma-ketlik", icon: "🔢", about: "Jarayon bosqichlari yoki voqealarni to'g'ri tartibga keltirish mashqi." },
};
