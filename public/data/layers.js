// Pedagogik qatlam (NAMUNA): har bir mavzu uchun qisqa nom, glossariy, interaktiv metodlar,
// test savollari, mustaqil ish topshiriqlari va foydali resurslar. Kalit — mavzu raqami (book.js dagi num).
// Mavzular ko'p bo'lsa, faylni bo'lish mumkin (layers-2.js ...) va pastda birlashtiriladi.
//
// TEST: Q(savol, [variantlar], to'g'ri_javob_indeksi) — indeks 0 dan boshlanadi; variantlar platformada aralashtiriladi.
// GLOSSARIY: G(atama, ta'rif).
// METODLAR (type bo'yicha maydonlar):
//   brainstorm — { minIdeas, examples[] }
//   cluster    — { center, sample[] }
//   venn       — { a, b, items: [[matn, "a" | "b" | "both"]] }
//   case       — { text, questions[], model }        (model — namunaviy yechim)
//   fsmu       — { statement }
//   insert     — { sentences[] }
//   matching   — { pairs: [[chap, o'ng]] }
//   tchart     — { left, right }
//   ordering   — { items[] }                          (to'g'ri tartibda yoziladi, platforma aralashtiradi)
//   Har birida: { type, id (mavzu ichida noyob, masalan "t1-case"), title, instruction }.

const Q = (q, options, c) => ({ q, options, c });
const G = (term, def) => ({ term, def });

export const LAYERS = {
  1: {
    icon: "🧭",
    title: "Platforma qanday ishlaydi",
    glossary: [
      G("Mavzu", "Darslikning bitta bobi yoki paragrafi: reja, bo'limlar, savollar va tayanch iboralar bilan."),
      G("Glossariy", "Mavzudagi asosiy tushunchalar va ularning qisqa ta'riflari; tushunchalar kartalari va kunlik takrorlash shundan tuziladi."),
      G("Interaktiv metod", "Talabani faol fikrlashga undaydigan mashq: klaster, Venn diagrammasi, keys-stadi va boshqalar."),
      G("AI tekshiruv", "Talabaning amaliy ishini sun'iy intellekt 10 ballik mezon bo'yicha baholab, feedback berishi."),
      G("XP", "Talaba faolligi uchun beriladigan ball; daraja, nishon va sertifikat shunga bog'liq."),
    ],
    methods: [
      { type: "cluster", id: "t1-cluster", title: "Klaster: platforma imkoniyatlari", instruction: "Platformaning imkoniyatlari klasterini tuzing.", center: "Platforma", sample: ["Mavzular", "Testlar", "Amaliy mashg'ulot", "AI Ustoz", "Live viktorina", "Mediateka", "Mustaqil ta'lim", "Sertifikat"] },
      { type: "ordering", id: "t1-order", title: "Mavzuni o'zlashtirish ketma-ketligi", instruction: "Bosqichlarni to'g'ri tartibga keltiring.", items: ["Nazariyani o'qish", "Tushunchalar kartalarini ko'rish", "Interaktiv metodni bajarish", "Testdan o'tish", "Amaliy mashg'ulotni bajarish", "AI tekshiruvidan feedback olish"] },
      { type: "matching", id: "t1-match", title: "Bo'lim va vazifasi", instruction: "Bo'limni uning vazifasi bilan moslang.", pairs: [["Mavzular", "Darslik matnini o'qish"], ["Amaliyot", "Masala yechish va AI feedback"], ["Live", "Sinfda jonli viktorina"], ["Takrorlash", "Tushunchalarni yodlash"]] },
    ],
    tests: [
      Q("Har bir mavzu matni qayerdan olinadi?", ["Internetdan", "Darslikdan avtomatik import qilinadi", "O'qituvchi har kuni qo'lda yozadi", "Talabalar yozadi"], 1),
      Q("AI tekshiruv necha ballik mezon bo'yicha baholaydi?", ["5", "10", "20", "100"], 1),
      Q("Kunlik takrorlash nimaga asoslanadi?", ["Glossariy tushunchalariga", "Video darslarga", "Sertifikatga", "Reytingga"], 0),
      Q("Testdan o'tish balli necha foiz?", ["40%", "50%", "60%", "90%"], 2),
    ],
    selfStudy: [
      { id: "t1-s1", title: "Platforma bilan tanishuv", type: "Amaliy ish", description: "Platformaning 5 ta bo'limini sinab ko'ring va har biri haqida 2–3 gaplik fikr yozing." },
    ],
    resources: [{ title: "Cloudflare Workers hujjatlari", url: "https://developers.cloudflare.com/workers/" }],
  },
  2: {
    icon: "📥",
    title: "Darslikni platformaga kiritish",
    glossary: [
      G("Import", "Darslik faylini (PDF/DOCX) platforma tushunadigan ko'rinishga (book.js) avtomatik o'tkazish."),
      G("Transliteratsiya", "Kirill yozuvidagi matnni lotin yozuviga qoidalar asosida o'girish."),
      G("Deploy", "Platformaning yangi versiyasini internetdagi saytga joylash."),
    ],
    methods: [
      { type: "venn", id: "t2-venn", title: "Cloudflare va Netlify", instruction: "Xususiyat qaysi xizmatga tegishli?", a: "Cloudflare", b: "Netlify", items: [["Bepul tarifda kuniga 100 000 server so'rovi", "a"], ["Har bir deploy kredit sarflaydi", "b"], ["GitHub'dan avtomatik deploy", "both"]] },
      { type: "case", id: "t2-case", title: "Keys: eski statistika", instruction: "Vaziyatni o'qing va javob bering.", text: "Darslik 2015-yilda chop etilgan va undagi statistik ma'lumotlar eskirgan.", questions: ["Eskirgan ma'lumotni qanday aniqlaysiz?", "Yangi ma'lumotni qayerdan olasiz?"], model: "Raqamlar va me'yoriy hujjatlarni rasmiy manbalar (stat.uz, lex.uz) bilan solishtirish; yangi qiymatlarni updates.js ga manbasi bilan kiritish." },
      { type: "tchart", id: "t2-tchart", title: "T-jadval: avtomatik import", instruction: "Avtomatik importning afzallik va kamchiliklarini yozing.", left: "Afzalliklari", right: "Kamchiliklari" },
    ],
    tests: [
      Q("Darslik qaysi papkaga joylanadi?", ["public/", "manbalar/", "server/", "scripts/"], 1),
      Q("Import natijasi qaysi faylga yoziladi?", ["layers.js", "practice.js", "book.js", "course.js"], 2),
      Q("Fan nomi va sozlamalari qaysi faylda?", ["course.js", "book.js", "sw.js", "app.mjs"], 0),
    ],
    selfStudy: [],
    resources: [],
  },
};
