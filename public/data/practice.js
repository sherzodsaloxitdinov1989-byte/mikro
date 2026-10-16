// Amaliy mashg'ulotlar: darslikdagi «Masala va mashqlar» (scripts/import-mikro.py → practice-auto.js).
// Har bir masala ochiq topshiriq sifatida beriladi: AI uni darslikdagi namunaviy yechim (refs) bilan solishtirib 10 ballik mezonda baholaydi.
// Javobi aniq (sonli) masalalar qo'shish uchun: tasks: [T(id, sarlavha, shart, [F(maydon, qiymat, birlik)], yechim, formula)].
// Himoyalangan ma'lumot (masalalar va yechimlari): kirmagan foydalanuvchida bo'sh bo'ladi.
const AUTO_PRACTICE = await (async () => {
  try {
    return (await import("./practice-auto.js")).AUTO_PRACTICE;
  } catch {
    return {};
  }
})();

export const PRACTICE = AUTO_PRACTICE;

export { parseNum, checkField } from "./practice-lib.js";
