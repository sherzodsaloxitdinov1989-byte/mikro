// ============================================================================
//  FAN SOZLAMALARI — platformani yangi fanga moslashda ASOSAN SHU FAYL o'zgartiriladi.
//  (Mavzular matni: book.js, testlar va glossariy: layers.js, amaliy masalalar: practice.js,
//   dolzarb ma'lumotlar: updates.js.)
// ============================================================================

export const COURSE = {
  // Platforma nomi (sarlavha, menyu, sertifikat). Qisqa va esda qoladigan bo'lsin.
  brand: "MikroAkademiya",
  // Texnik nom (faqat kichik lotin harflar, raqam va "-"): Cloudflare'dagi Worker nomi va sayt manzili
  // (https://<slug>.<akkaunt>.workers.dev), baza nomi. O'zgartirgandan keyin: npm run configure
  slug: "mikroiqtisodiyot",
  // Sertifikat raqami prefiksi (2–3 lotin harf): #/cert/FA-XXXXXXXX
  certPrefix: "MI",

  // Logotip belgisi (emoji)
  logo: "📈",

  // Fan to'liq nomi
  title: "Mikroiqtisodiyot",
  // Bosh sahifadagi katta sarlavha: 2 qatorga bo'linadi (1-qism rangli)
  heroTitle: ["Mikroiqtisodiyot", "interaktiv platformasi"],
  audience: "60410100 – Iqtisodiyot ta’lim yo‘nalishi bakalavriat talabalari uchun",
  source: "Saloxitdinov Sh.F. Mikroiqtisodiyot: darslik. – Jizzax: O‘zMU Jizzax filiali, 2026.",
  program: "Mirzo Ulug‘bek nomidagi O‘zbekiston Milliy universitetining Jizzax filiali, «Iqtisodiyot va turizm» kafedrasi. 3–4-semestrlarda o‘qitiladigan 21 ta mavzu (2026–2027 o‘quv yili sillabusi).",
  description:
    "Fan iste’molchilar, uy xo‘jaliklari, firmalar va tarmoqlarning xatti-harakatini hamda ular o‘rtasidagi bozor munosabatlarini o‘rganadi: talab va taklif, elastiklik, iste’molchi tanlovi, ishlab chiqarish va xarajatlar, bozor tuzilmalari, omillar bozori, tashqi samaralar va davlatning roli. Talaba nazariyani O‘zbekiston misollari bilan bog‘lab, hisob-kitob va grafik tahlil ko‘nikmalarini egallaydi.",
  // Fan dasturidagi ta'lim natijalari
  outcomes: [
    "Mikroiqtisodiyotning predmeti, usullari va N.G. Mankiw'ning iqtisodiyot tamoyillarini tushuntira oladi.",
    "Talab, taklif va elastiklikni tahlil qilib, bozor muvozanati va davlat tartibga solishining oqibatlarini baholaydi.",
    "Iste'molchi tanlovi va firma xatti-harakatini (ishlab chiqarish, xarajatlar, foyda) model va hisob-kitob yordamida tahlil qiladi.",
    "Mukammal raqobat, monopoliya va oligopoliya sharoitida narx va ishlab chiqarish hajmini aniqlaydi.",
    "Mehnat, kapital va yer bozorlari, tashqi samaralar va jamoat tovarlari bo'yicha davlat siyosatini baholaydi.",
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
    ["Iqtisodiyot havaskori", "🔎"],
    ["Bozor kuzatuvchisi", "📗"],
    ["Talab va taklif bilimdoni", "⚖️"],
    ["Mikroiqtisodchi", "🎓"],
    ["Bozor tahlilchisi", "📊"],
    ["Iqtisodiy ekspert", "🏛️"],
    ["Mikroiqtisodiyot ustasi", "👑"],
  ],
  // Talaba shaxsiy sahifasining nomi
  passportName: "Iqtisodchi pasporti",
  // AI tekshiruvchi uchun: fan sohasi (masalan, "marketing", "pedagogika", "buxgalteriya hisobi")
  domain: "mikroiqtisodiyot",

  // Fan bo'yicha shakllantirilgan guruhlar (talaba ro'yxatdan o'tganda shulardan birini tanlaydi).
  // Bo'sh qoldirilsa, guruh nomi erkin yoziladi.
  studyForm: "Kunduzgi",
  groups: ["331-25", "332-25", "333-25", "334-25"],

  // Bo'limlarni yoqish/o'chirish
  features: {
    // Tahlil laboratoriyasi — ikki yillik balans va moliyaviy natijalar asosida kompleks moliyaviy tahlil.
    // Faqat iqtisodiy-moliyaviy fanlar uchun (moliyaviy tahlil, buxgalteriya, korxona iqtisodiyoti va h.k.).
    lab: false,
  },

  // Dars taqdimotlari: public/slides/NN.pdf (01.pdf, 02.pdf, ...). Kalit — mavzu raqami, qiymat — sahifalar soni.
  // Taqdimot bo'lmagan mavzuni ko'rsatmang. O'qituvchi panelidan ham yuklash mumkin.
  decks: { 1: 54, 2: 52, 3: 41, 4: 40, 5: 39, 6: 44, 7: 44, 8: 40, 9: 33, 10: 36, 11: 55, 12: 69, 13: 54, 14: 62, 15: 57, 16: 44, 17: 51, 18: 45, 19: 54, 20: 45, 21: 51 },
};
