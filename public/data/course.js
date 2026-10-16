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
  slug: "mikro",
  dbName: "mikroiqtisodiyot-db", // eski baza nomi (hisoblar shu yerda saqlangan) — o'zgartirmang
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

  // Bakalavriat ta'lim shakllari va ularga biriktirilgan guruhlar. Talaba ro'yxatdan o'tganda avval ta'lim shaklini,
  // so'ng shu shakldagi guruhini tanlaydi. Bo'sh ro'yxat bo'lsa, guruh nomi erkin yoziladi.
  studyForms: [
    { key: "kunduzgi", name: "Kunduzgi", title: "Bakalavriat — kunduzgi ta'lim", icon: "🏫", groups: ["331-25", "332-25", "333-25", "334-25", "141-23", "142-23"] },
    { key: "masofaviy", name: "Masofaviy", title: "Bakalavriat — masofaviy ta'lim", icon: "💻", groups: ["841-25", "842-25", "843-25", "844-25"] },
  ],

  // Semestrlar (2-bosqich, 2026–2027 o'quv yili): darslik mavzulari semestrlarga bo'lingan.
  // startsAt / endsAt — o'qish muddati (reyting shu muddatda yig'iladi; muddat tugagach natija qotiriladi). null — cheklov yo'q.
  semesters: [
    { no: 3, course: 2, name: "3-semestr", term: "Kuzgi semestr, 2026–2027 o'quv yili", topics: [1, 11], startsAt: "2026-09-01", endsAt: "2026-12-26" },
    { no: 4, course: 2, name: "4-semestr", term: "Bahorgi semestr, 2026–2027 o'quv yili", topics: [12, 21], startsAt: null, endsAt: null },
  ],

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

// Barcha guruhlar (ta'lim shakllaridan yig'iladi) va guruh bo'yicha ta'lim shaklini topish
COURSE.groups = COURSE.studyForms.flatMap((f) => f.groups);
export const formOfGroup = (group) => COURSE.studyForms.find((f) => f.groups.includes(group)) || null;
export const formByKey = (key) => COURSE.studyForms.find((f) => f.key === key) || null;

// ---------- Fanlar (bo'limlar) ----------
// Platformada bir nechta fan bo'lishi mumkin. Har bir fan o'z guruhlariga biriktiriladi: talaba faqat o'z guruhi fanini ko'radi.
// Asosiy fan (darslik, testlar, topshiriq, reyting — yuqoridagi COURSE) — "mikro". Guruhi hech bir fanga biriktirilmagan talaba shu fanga tushadi.
// hasContent: false — fanning darsligi/testlari hali yuklanmagan: talabaga fan sahifasi, o'qituvchi yaratgan topshiriqlar (Vazifalar) va guruh reytingi ko'rinadi.
export const SUBJECTS = [
  {
    key: "mikro",
    title: "Mikroiqtisodiyot",
    icon: "📈",
    direction: "Iqtisodiyot",
    hasContent: true,
    groups: [],
  },
  {
    key: "tadbirkorlik",
    title: "Tadbirkorlik asoslari",
    icon: "🏨",
    direction: "Turizm va mehmondo'stlik",
    form: "kunduzgi",
    groups: ["141-23", "142-23"],
    hasContent: false,
    semester: { no: 7, course: 4, term: "Kuzgi semestr, 2026–2027 o'quv yili", startsAt: "2026-09-01", endsAt: "2026-12-26" },
    description: "Tadbirkorlik faoliyatining asoslari: g'oya, biznes-reja, ro'yxatdan o'tish, moliyalash, marketing va boshqaruv — turizm va mehmondo'stlik sohasi misolida.",
  },
];
/** Guruhga biriktirilgan fan; biriktirilmagan guruh — asosiy fan. */
export const subjectOfGroup = (group) => SUBJECTS.find((s) => s.groups.includes(group)) || SUBJECTS[0];
export const subjectByKey = (key) => SUBJECTS.find((s) => s.key === key) || null;
/** Talaba (yoki o'qituvchi) uchun asosiy fan kontenti (darslik, test, topshiriq, reyting) ochiqmi. O'qituvchi — doim. */
export const userHasContent = (user) => !user || user.role !== "student" || subjectOfGroup(user.group).hasContent;

// Semestrlar: mavzu raqami bo'yicha semestr, sana bo'yicha joriy semestr
export const semesterOf = (num) => COURSE.semesters.find((s) => num >= s.topics[0] && num <= s.topics[1]) || null;
export const semesterByNo = (no) => COURSE.semesters.find((s) => s.no === Number(no)) || null;
/** Joriy semestr: sana muddat oralig'iga tushgani; bo'lmasa — oxirgi tugagan semestrdan keyingisi (yoki oxirgisi); aks holda birinchisi. */
export function currentSemester(today = new Date()) {
  const iso = today.toISOString().slice(0, 10);
  const list = COURSE.semesters;
  const inside = list.find((s) => (!s.startsAt || iso >= s.startsAt) && (!s.endsAt || iso <= s.endsAt));
  if (inside) return inside;
  const finished = list.filter((s) => s.endsAt && iso > s.endsAt);
  if (finished.length) return list[Math.min(list.indexOf(finished[finished.length - 1]) + 1, list.length - 1)];
  return list[0];
}
