// Halollik (himoya hodisalari) bo'yicha ball kamaytirish: talaba ish bajarayotganda qoidani buzgan bo'lsa (ekran surati, nusxalash,
// oynadan chiqish va h.k.), AI bergan baho kamaytiriladi va sababi izoh sifatida keltiriladi.
// Hodisalar `secevent/<talaba>/…` yozuvlarida (public/js/secure.js yuboradi); o'qituvchi ularni «Himoya hodisalari» bo'limida ham ko'radi.

// Har bir hodisa turi: nomi, buzilgan qoida va og'irligi (1 — yengil, 3 — jiddiy). `cap` — bitta ish uchun hisobga olinadigan ko'pi bilan hodisalar soni.
export const SEC_TYPES = {
  screenshot: { label: "Ekran surati olishga urinish", rule: "Test va topshiriqlarning ekran suratini olish taqiqlanadi", weight: 3, cap: 3 },
  print: { label: "Bosib chiqarish / PDF'ga saqlash urinishi", rule: "Platforma materiallarini bosib chiqarish va PDF qilish taqiqlanadi", weight: 3, cap: 2 },
  source: { label: "Sahifa manbasi / dasturchi vositalarini ochish", rule: "Sahifa kodini ochish va dasturchi vositalaridan foydalanish taqiqlanadi", weight: 3, cap: 2 },
  save: { label: "Sahifani saqlashga urinish (Ctrl+S)", rule: "Platforma materiallarini saqlab olish taqiqlanadi", weight: 2, cap: 3 },
  copy: { label: "Matnni nusxalash / kesib olish urinishi", rule: "Darslik va topshiriq matnini nusxalash mualliflik huquqi bilan taqiqlanadi", weight: 2, cap: 3 },
  leave: { label: "Oynadan chiqish (boshqa ilova / yorliq)", rule: "Test va topshiriq paytida boshqa oyna yoki ilovaga o'tish mumkin emas", weight: 1, cap: 4, free: 5 },
  contextmenu: { label: "O'ng tugma (kontekst menyu)", rule: "Sahifada o'ng tugma bilan nusxalash va saqlash taqiqlanadi", weight: 1, cap: 3 },
};

export const POINT_PERCENT = 5; // har bir "og'irlik balli" uchun foiz
export const MAX_PENALTY = 50; // bitta ish uchun eng ko'p kamaytirish (%)

/** Hodisalar ro'yxatidan jarima: { percent, total, items:[{type,label,rule,count,counted}], text } yoki null. */
export function integrityOf(events) {
  const by = {};
  for (const e of events) if (SEC_TYPES[e.type]) (by[e.type] ||= []).push(e);
  const items = Object.entries(by).map(([type, list]) => {
    const t = SEC_TYPES[type];
    // free — bitta ish uchun jarimasiz kechiriladigan hodisalar soni (masalan, ekran taym-autga tushib o'chib-yonishi yoki tasodifan oynadan chiqish)
    const free = Math.min(list.length, t.free || 0);
    return { type, label: t.label, rule: t.rule, count: list.length, free, counted: Math.min(list.length - free, t.cap), weight: t.weight, last: list.map((x) => x.at).sort().pop() };
  });
  const points = items.reduce((n, i) => n + i.counted * i.weight, 0);
  const percent = Math.min(MAX_PENALTY, points * POINT_PERCENT);
  if (!points) return null; // faqat kechiriladigan hodisalar bo'lsa — jarima yo'q
  const parts = items.map((i) => `${i.label} — ${i.count} marta${i.free ? ` (dastlabki ${i.free} tasi kechirildi)` : ""}`).join("; ");
  const text = `Ish bajarilayotganda platforma qoidalari buzilgani qayd etilgan: ${parts}. Shu sababli baho ${percent}% ga kamaytirildi (har bir jiddiylik balli uchun ${POINT_PERCENT}%, eng ko'pi ${MAX_PENALTY}%).`;
  return { percent, total: items.reduce((n, i) => n + i.count, 0), items, text };
}

/** Baho (0..max yoki foiz) ga jarimani qo'llash. */
export const reduceBy = (value, penaltyPercent) => (penaltyPercent ? value * (1 - penaltyPercent / 100) : value);
