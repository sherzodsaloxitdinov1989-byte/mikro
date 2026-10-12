// Fan mavzulari: barcha qatlamlarni bitta TOPICS ro'yxatiga yig'adi (bu faylni odatda o'zgartirish shart emas).
// Nazariy matn, reja, savollar va tayanch iboralar — book.js (darslikdan avtomatik import),
// pedagogik qatlam — layers.js (glossariy, metodlar, testlar, mustaqil ishlar),
// amaliy mashg'ulotlar — practice.js, dolzarb ma'lumotlar — updates.js, fan sozlamalari — course.js.
import { BOOK } from "./book.js";
import { LAYERS } from "./layers.js";
import { PRACTICE } from "./practice.js";
import { updatesFor } from "./updates.js";
import { COURSE } from "./course.js";

export { COURSE };
export const BOOK_INTRO = BOOK.intro;
export const LITERATURE = BOOK.literature;

const LAYER = LAYERS;
const OPTION_LETTERS = ["A", "B", "C", "D", "E", "F"];
const pad = (n) => String(n).padStart(2, "0");
// Dars taqdimotlari (public/slides/NN.pdf) — course.js dagi decks ro'yxati bo'yicha
const DECK_PAGES = COURSE.decks || {};

export const TOPICS = BOOK.topics.map((b) => {
  const layer = LAYER[b.num] || {};
  const practice = PRACTICE[b.num] || null;
  return {
    id: `t${b.num}`,
    num: b.num,
    chapter: b.chapter,
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
    quiz: (layer.tests || []).map((t) => ({ q: t.q, options: t.options, correct: t.c, letters: OPTION_LETTERS })),
    methods: layer.methods || [],
    selfStudy: layer.selfStudy || [],
    resources: layer.resources || [],
    practice,
    updates: updatesFor(b.num),
    // Dars taqdimoti (manbalar/ dagi .pptx → PDF), o'qituvchi panelida almashtirilishi mumkin
    deck: DECK_PAGES[b.num] ? `/slides/${pad(b.num)}.pdf` : null,
    deckPages: DECK_PAGES[b.num] || null,
  };
});

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
