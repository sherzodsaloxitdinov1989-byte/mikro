// ============================================================================
//  FAN SOZLAMALARI — platformani yangi fanga moslashda ASOSAN SHU FAYL o'zgartiriladi.
//  (Mavzular matni: book.js, testlar va glossariy: layers.js, amaliy masalalar: practice.js,
//   dolzarb ma'lumotlar: updates.js.)
// ============================================================================

export const COURSE = {
  // Platforma nomi (sarlavha, menyu, sertifikat). Qisqa va esda qoladigan bo'lsin.
  brand: "Fan akademiya",
  // Texnik nom (faqat kichik lotin harflar, raqam va "-"): Cloudflare'dagi Worker nomi va sayt manzili
  // (https://<slug>.<akkaunt>.workers.dev), baza nomi. O'zgartirgandan keyin: npm run configure
  slug: "fan-platforma",
  // Sertifikat raqami prefiksi (2–3 lotin harf): #/cert/FA-XXXXXXXX
  certPrefix: "FA",

  // Logotip belgisi (emoji)
  logo: "🎓",

  // Fan to'liq nomi
  title: "Fan nomi",
  // Bosh sahifadagi katta sarlavha: 2 qatorga bo'linadi (1-qism rangli)
  heroTitle: ["Fan nomining", "davomi"],
  audience: "Ta'lim yo'nalishi (shifr – nomi) bakalavriat talabalari uchun",
  source: "Muallif. “Darslik nomi”. Darslik / o'quv qo'llanma. Shahar: Nashriyot, Yil.",
  program: "Universitet nomi, kafedra. Fan kodi ..., ... semestr, ... kredit: ma'ruza ... soat, amaliy ... soat, mustaqil ta'lim ... soat.",
  description:
    "Fanning qisqacha mazmuni (2–3 gap): fan nimani o'rgatadi, talaba qanday bilim va ko'nikmalarni egallaydi.",
  // Fan dasturidagi ta'lim natijalari
  outcomes: [
    "Ta'lim natijasi 1 (fan dasturidan).",
    "Ta'lim natijasi 2.",
    "Ta'lim natijasi 3.",
  ],
  // Baholash: [nazorat turi, maksimal ball, o'tish balli]
  grading: [
    ["Joriy nazorat (amaliy mashg'ulotdagi faollik)", 20, 12],
    ["Oraliq nazorat (yozma-og'zaki yoki test)", 10, 6],
    ["Mustaqil ish", 20, 12],
    ["Yakuniy nazorat (yozma ish yoki test)", 50, 30],
  ],
  // Talaba darajalari (8 ta, eng pastdan yuqoriga) — fanga mos kasbiy unvonlar tanlang.
  levels: [
    ["Boshlovchi", "🎒"],
    ["Izlanuvchi", "🔎"],
    ["Bilimdon", "📗"],
    ["Mutaxassis", "🎓"],
    ["Tajribali mutaxassis", "💼"],
    ["Ekspert", "🏅"],
    ["Yetakchi ekspert", "🏛️"],
    ["Fan ustasi", "👑"],
  ],
  // Talaba shaxsiy sahifasining nomi
  passportName: "Talaba pasporti",
  // AI tekshiruvchi uchun: fan sohasi (masalan, "marketing", "pedagogika", "buxgalteriya hisobi")
  domain: "fan sohasi",

  // Bo'limlarni yoqish/o'chirish
  features: {
    // Tahlil laboratoriyasi — ikki yillik balans va moliyaviy natijalar asosida kompleks moliyaviy tahlil.
    // Faqat iqtisodiy-moliyaviy fanlar uchun (moliyaviy tahlil, buxgalteriya, korxona iqtisodiyoti va h.k.).
    lab: false,
  },

  // Dars taqdimotlari: public/slides/NN.pdf (01.pdf, 02.pdf, ...). Kalit — mavzu raqami, qiymat — sahifalar soni.
  // Taqdimot bo'lmagan mavzuni ko'rsatmang. O'qituvchi panelidan ham yuklash mumkin.
  decks: {},
};
