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
    { key: "kunduzgi", name: "Kunduzgi", title: "Bakalavriat — kunduzgi ta'lim", icon: "🏫", groups: ["331-25", "332-25", "333-25", "334-25", "141-23", "142-23", "231-24", "232-24", "233-24"] },
    { key: "masofaviy", name: "Masofaviy", title: "Bakalavriat — masofaviy ta'lim", icon: "💻", groups: ["841-25", "842-25", "843-25", "844-25", "845-25", "846-25", "847-25", "848-25"] },
    { key: "magistratura", name: "Magistratura", title: "Magistratura", icon: "🎓", groups: ["M31-26"] },
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
// dir — fan ma'lumotlari papkasi (public/data/<dir>/book.js, layers-auto.js, practice-auto.js); bo'sh — public/data/ ning o'zi.
// idPrefix — mavzu identifikatori (t1, tb1, ...); slides/img — taqdimot va rasm papkalari (himoyalangan).
// hasContent: false — fanning darsligi hali yuklanmagan: talabaga fan sahifasi, o'qituvchi topshiriqlari (Vazifalar) va guruh reytingi ko'rinadi.
// course — shu fan uchun COURSE ning o'zgargan qiymatlari (nom, manba, soha va h.k.).
export const SUBJECTS = [
  {
    key: "mikro",
    title: "Mikroiqtisodiyot",
    icon: "📈",
    direction: "Iqtisodiyot",
    hasContent: true,
    dir: "",
    idPrefix: "t",
    slides: "slides",
    groups: [],
  },
  {
    key: "tadbirkorlik",
    title: "Tadbirkorlik asoslari",
    icon: "🏨",
    direction: "Turizm va mehmondo'stlik",
    form: "kunduzgi",
    groups: ["141-23", "142-23"],
    // Bu guruhlarga faqat o'qituvchi yuklagan ro'yxat (F.I.Sh. + shifr) bo'yicha kirish mumkin
    rosterGroups: ["141-23", "142-23"],
    hasContent: true,
    dir: "tb",
    idPrefix: "tb",
    slides: "slides/tb",
    semester: { no: 7, course: 4, term: "Kuzgi semestr, 2026–2027 o'quv yili", startsAt: "2026-09-01", endsAt: "2026-12-26" },
    description: "Tadbirkorlik faoliyatining asoslari: g'oya, biznes-reja, ro'yxatdan o'tish, moliyalash, marketing va boshqaruv — turizm va mehmondo'stlik sohasi misolida.",
    course: {
      title: "Tadbirkorlik asoslari",
      heroTitle: ["Tadbirkorlik asoslari", "interaktiv platformasi"],
      logo: "🏨",
      domain: "tadbirkorlik asoslari (biznes boshlash, biznes-reja, marketing, moliya, soliq va huquqiy rasmiylashtirish)",
      audience: "Barcha bakalavriat ta'lim yo'nalishlari (Turizm va mehmondo'stlik)",
      program: "Turizm va mehmondo'stlik",
      description: "“Tadbirkorlik asoslari” fani bo'yicha interaktiv ta'lim platformasi: darslik, audio va animatsion darslar, taqdimotlar, testlar va amaliy topshiriqlar.",
      source: "Saloxitdinov Sh.F. Tadbirkorlik asoslari: darslik. – Toshkent: O‘zMU Jizzax filiali, 2026.",
      passportName: "Tadbirkor pasporti",
      certPrefix: "TA",
      program: "O‘zMU Jizzax filiali, «Iqtisodiyot va turizm» kafedrasi. Fan 5 ECTS kredit (150 soat): auditoriya 60 soat (30 soat bob, 30 soat amaliy mashg‘ulot), mustaqil ta’lim 90 soat; 15 ta bob (7-semestr, 2026–2027 o‘quv yili). Fanning o‘ziga xosligi — vertikal loyiha: har bir talaba bitta biznes g‘oyani tanlab, semestr davomida uni biznes-rejaga aylantiradi.",
      outcomes: [
        "Tadbirkorlik tafakkurini namoyon etib, kundalik muammolardan biznes imkoniyat va g‘oya yaratadi, uni MVP va “Acid Test” orqali kam xarajat bilan bozorda sinaydi.",
        "Biznesni qonuniy rasmiylashtirish, soliq rejimini tanlash va hujjatlarni yuritish tartibini tushuntiradi; kredit va davlat qo‘llab-quvvatlash dasturlaridan foydalanish yo‘l xaritasini tuzadi.",
        "Biznes-modelni (Business Model Canvas), mijoz portretini va bozor hajmini (TAM/SAM/SOM) tahlil qiladi; marketing, savdo va narx qarorlarini asoslaydi.",
        "Pul oqimi, foyda va zarar, zararsizlik nuqtasi va unit-iqtisod hisob-kitoblarini bajaradi.",
        "Jamoa va xavflarni boshqaradi, yagona biznes-reja tuzadi va uni ekspertlar oldida taqdim etadi.",
      ],
      grading: [
        ["Joriy nazorat (amaliy mashg‘ulotlardagi faollik, haftalik topshiriqlar)", 20, 12],
        ["Mustaqil ishlar (bosqichma-bosqich topshiriqlar, yozma hisobotlar)", 20, 12],
        ["Biznes-reja loyihasi (yakuniy hujjat)", 30, 18],
        ["Biznes g‘oyani taqdim etish (ekspertlar hay’ati oldida)", 30, 18],
      ],
      levels: [
        ["Boshlovchi", "🎒"],
        ["G‘oya izlovchi", "💡"],
        ["Bozor o‘rganuvchi", "🔍"],
        ["Mikrobiznes egasi", "🏪"],
        ["Biznes-rejachi", "📝"],
        ["Startap asoschisi", "🚀"],
        ["Tadbirkor", "💼"],
        ["Biznes lider", "👑"],
      ],
    },
  },
  {
    // Magistratura bo'limi: «Mikroiqtisodiyot-2» (M. Soy, Sh. Saloxitdinov darsligi): 11 bob, M31-26 guruhi.
    key: "mikro2",
    title: "Mikroiqtisodiyot-2",
    icon: "📈",
    direction: "Magistratura",
    form: "magistratura",
    groups: ["M31-26"],
    hasContent: true,
    dir: "mikro2",
    idPrefix: "mm",
    slides: "slides/mikro2",
    // Sillabus olinmaguncha namunaviy muddat (kuzgi semestr); o'qituvchi tasdiqlagach aniqlanadi.
    semester: { no: 1, course: 1, term: "Kuzgi semestr, 2026–2027 o'quv yili", startsAt: "2026-09-01", endsAt: "2026-12-26" },
    description: "Mikroiqtisodiyot fanining magistratura darajasidagi davomi: iste'molchi nazariyasi, noaniqlik va aktivlar bozori, firma va tarmoq, monopoliya va oligopoliya, o'yinlar nazariyasi, tashqi samaralar va assimetrik axborot.",
    course: {
      title: "Mikroiqtisodiyot-2",
      author: "M. Soy, Sh. Saloxitdinov",
      heroTitle: ["Mikroiqtisodiyot-2", "interaktiv platformasi"],
      logo: "📈",
      domain: "mikroiqtisodiyot (magistratura, ilg'or daraja: iste'molchi nazariyasi, noaniqlik, firma va tarmoq, nomukammal raqobat, o'yinlar nazariyasi, tashqi samaralar, assimetrik axborot)",
      audience: "70410102 – Iqtisodiyot (tarmoqlar va sohalar bo‘yicha) ta’lim yo‘nalishi magistratura talabalari uchun",
      description: "“Mikroiqtisodiyot-2” fani bo'yicha interaktiv ta'lim platformasi: darslik, audio va animatsion darslar, taqdimotlar, testlar va amaliy topshiriqlar.",
      source: "Soy M., Saloxitdinov Sh. Mikroiqtisodiyot-2: darslik. – Jizzax: O‘zMU Jizzax filiali, 2026.",
      program: "Mirzo Ulug‘bek nomidagi O‘zbekiston Milliy universitetining Jizzax filiali, «Iqtisodiyot va turizm» kafedrasi. Darslik “Mikroiqtisodiyot-2” fanining 2025/2026 o‘quv yili uchun tasdiqlangan sillabusi asosida tayyorlangan: 11 ta ma’ruza mavzusi (bob), 11 ta amaliy mashg‘ulot (24 soat) va 19 ta mustaqil ta’lim mavzusi.",
      passportName: "Magistrant pasporti",
      certPrefix: "MG",
      outcomes: [
        "Iste’molchi tanlovi nazariyasini (byudjet cheklovi, afzal ko‘rish, naflilik, Slutskiy tenglamasi) qat’iy tahliliy apparat bilan qo‘llaydi.",
        "Vaqtlararo tanlov, aktivlar bozori va noaniqlik sharoitida qaror qabul qilish modellarini tahlil qiladi.",
        "Iste’molchi va ishlab chiqaruvchi ortiqchaligi orqali farovonlik o‘zgarishini hisoblaydi; bozor talabi, muvozanat, firma va tarmoq taklifini yagona tizimda izohlaydi.",
        "Monopoliya, oligopoliya va o‘yinlar nazariyasi modellari bilan strategik o‘zaro ta’sirni tahlil qiladi.",
        "Tashqi samaralar, jamoat ne’matlari va assimetrik axborot sharoitida bozor muvaffaqiyatsizliklarini va ularni bartaraf etish siyosatini baholaydi.",
      ],
      grading: [
        ["Joriy nazorat (amaliy mashg‘ulotdagi faollik)", 20, 12],
        ["Oraliq nazorat (yozma-og‘zaki yoki test)", 10, 6],
        ["Mustaqil ish", 20, 12],
        ["Yakuniy nazorat (yozma ish yoki test)", 50, 30],
      ],
      levels: [
        ["Magistrant", "🎒"],
        ["Iste’molchi tahlilchisi", "🛒"],
        ["Talab modelchisi", "📉"],
        ["Bozor muvozanatchisi", "⚖️"],
        ["Firma strategi", "🏭"],
        ["O‘yinlar nazariyachisi", "♟️"],
        ["Bozor mexanizmi loyihachisi", "🏛️"],
        ["Mikroiqtisodiyot ustasi", "👑"],
      ],
    },
  },
  {
    // «Makroiqtisodiyot» (Sh.F. Saloxitdinov darsligi): 20 bob; 231-24, 232-24, 233-24 guruhlari (faqat ro'yxat va ID raqam bo'yicha kirish).
    key: "makro",
    title: "Makroiqtisodiyot",
    icon: "🌍",
    direction: "Turizm va mehmondo'stlik",
    form: "kunduzgi",
    groups: ["231-24", "232-24", "233-24"],
    rosterGroups: ["231-24", "232-24", "233-24"],
    hasContent: true,
    dir: "makro",
    idPrefix: "mk",
    slides: "slides/makro",
    // Sillabus olinmaguncha namunaviy muddat (kuzgi semestr); o'qituvchi tasdiqlagach aniqlanadi.
    semester: { no: 5, course: 3, term: "Kuzgi semestr, 2026–2027 o'quv yili", startsAt: "2026-09-01", endsAt: "2026-12-26" },
    description: "Makroiqtisodiyot: milliy hisoblar, iqtisodiy tsikl, ishsizlik va inflyatsiya, yalpi talab va yalpi taklif, Keyns modeli, pul va byudjet-soliq siyosati, IS-LM, iqtisodiy o'sish va ochiq iqtisodiyot.",
    course: {
      title: "Makroiqtisodiyot",
      author: "Sh.F. Saloxitdinov",
      heroTitle: ["Makroiqtisodiyot", "interaktiv platformasi"],
      logo: "🌍",
      domain: "makroiqtisodiyot (milliy hisoblar, ishsizlik, inflyatsiya, yalpi talab va taklif, Keyns modeli, pul va byudjet-soliq siyosati, IS-LM, iqtisodiy o'sish, xalqaro savdo, valyuta kursi, to'lov balansi)",
      audience: "Turizm va mehmondo'stlik yo'nalishi bakalavriat talabalari uchun",
      description: "«Makroiqtisodiyot» fani bo'yicha interaktiv ta'lim platformasi: darslik, audio va animatsion darslar, taqdimotlar, testlar va amaliy topshiriqlar.",
      source: "Saloxitdinov Sh.F. Makroiqtisodiyot: darslik. – Jizzax: O‘zMU Jizzax filiali, 2026.",
      program: "Mirzo Ulug‘bek nomidagi O‘zbekiston Milliy universitetining Jizzax filiali, «Iqtisodiyot va turizm» kafedrasi. «Makroiqtisodiyot» fanining 20 ta mavzusi.",
      passportName: "Makroiqtisodchi pasporti",
      certPrefix: "MK",
      outcomes: [
        "Makroiqtisodiyotning predmeti, usullari va asosiy ko‘rsatkichlarini (YaIM, inflyatsiya, ishsizlik) tushuntiradi va hisoblaydi.",
        "Iqtisodiy tsikl, ishsizlik va inflyatsiyaning sabablari va oqibatlarini tahlil qiladi.",
        "Yalpi talab – yalpi taklif, Keyns va IS-LM modellari yordamida makroiqtisodiy muvozanatni aniqlaydi.",
        "Fiskal va monetar siyosat vositalarining iqtisodiyotga ta’sirini baholaydi.",
        "Iqtisodiy o‘sish modellarini va ochiq iqtisodiyot (savdo, valyuta kursi, to‘lov balansi) masalalarini tahlil qiladi.",
      ],
      grading: [
        ["Joriy nazorat (amaliy mashg‘ulotdagi faollik)", 20, 12],
        ["Oraliq nazorat (yozma-og‘zaki yoki test)", 10, 6],
        ["Mustaqil ish", 20, 12],
        ["Yakuniy nazorat (yozma ish yoki test)", 50, 30],
      ],
      levels: [
        ["Boshlovchi", "🎒"],
        ["Iqtisodiy kuzatuvchi", "🔎"],
        ["Ko‘rsatkichlar bilimdoni", "📊"],
        ["Tsikl tahlilchisi", "📈"],
        ["Siyosat modelchisi", "🏦"],
        ["IS-LM mutaxassisi", "⚖️"],
        ["Makroiqtisodiy ekspert", "🌍"],
        ["Makroiqtisodiyot ustasi", "👑"],
      ],
    },
  },
];
/** Guruhga biriktirilgan fan; biriktirilmagan guruh — asosiy fan. */
export const subjectOfGroup = (group) => SUBJECTS.find((s) => s.groups.includes(group)) || SUBJECTS[0];
export const subjectByKey = (key) => SUBJECTS.find((s) => s.key === key) || null;
/** Talaba (yoki o'qituvchi) uchun asosiy fan kontenti (darslik, test, topshiriq, reyting) ochiqmi. O'qituvchi — doim. */
/** Talaba asosiy fan (Mikroiqtisodiyot) guruhidami: reyting, 3-semestr topshirig'i va tahlillar faqat shu talabalar uchun. */
export const isMainUser = (user) => Boolean(user) && user.role === "student" && subjectOfGroup(user.group).key === SUBJECTS[0].key;
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

/** Guruhga faqat o'qituvchi yuklagan ro'yxat va shifr bilan kiriladimi. */
export const isRosterGroup = (group) => SUBJECTS.some((s) => (s.rosterGroups || []).includes(group));
