// Amaliy mashg'ulotlar (NAMUNA): javobi aniq (sonli) masalalar darhol avtomatik tekshiriladi,
// ochiq topshiriqlar (open) va umumiy xulosani esa AI 10 ballik mezon bo'yicha baholaydi.
// Kalit — mavzu raqami. Amaliy mashg'ulotsiz mavzuni ko'rsatmang.
//
// { goal, concepts[], source, tasks: [T(...)], open: [ochiq topshiriq matnlari] }
// Topshiriq: T(id, sarlavha, shart, [F(maydon, to'g'ri_qiymat, birlik?, tol?)], namunaviy_yechim, formula?, izoh?)
//   tol — ruxsat etilgan farq (mutlaq). Ko'rsatilmasa: |qiymat| × 0,5% (kamida 0,01).
//   Sonli javobi bo'lmagan fanlarda tasks: [] qoldirib, faqat open topshiriqlardan foydalaning.
// MUHIM: har bir javobni qayta hisoblab tekshiring — kalit xato bo'lsa, talabaning to'g'ri javobi "xato" chiqadi.

const T = (id, title, text, fields, solution, formula, note) => ({ id, title, text, fields, solution, formula, note });
const F = (label, value, unit = "", tol) => ({ label, value, unit, tol });

export const PRACTICE = {
  1: {
    goal: "Platformadagi o'zlashtirish ko'rsatkichlarini hisoblashni o'rganish.",
    concepts: ["progress", "foiz", "o'rtacha ball"],
    source: "namunaviy mashg'ulot",
    tasks: [
      T("p1-1", "Mavzu progressi", "Mavzuda 8 ta qism bor, talaba 6 tasini bajardi. Progress necha foiz?", [F("Progress", 75, "%")], "6 / 8 × 100 = 75%.", "Progress = Bajarilgan / Jami × 100"),
      T("p1-2", "O'rtacha test natijasi", "Talabaning 3 ta testdagi natijalari: 60%, 80% va 100%. O'rtacha natija va eng yuqori natijadan farqini toping.", [F("O'rtacha", 80, "%"), F("Farq", 20, "%")], "(60 + 80 + 100) / 3 = 80%; 100 − 80 = 20%.", "O'rtacha = Yig'indi / Soni"),
    ],
    open: ["Platformaning qaysi bo'limi sizga eng foydali tuyuldi? Nima uchun? Kamida 2 ta dalil keltiring."],
  },
  2: {
    goal: "Darslikni platformaga kiritish bosqichlarini tushunish (faqat ochiq topshiriqlar namunasi).",
    concepts: ["import", "transliteratsiya", "deploy"],
    source: "namunaviy mashg'ulot",
    tasks: [],
    open: [
      "Darslikni platformaga kiritish bosqichlarini ketma-ket yozing va har bir bosqich natijasini ko'rsating.",
      "Keys: darslikdagi statistik ma'lumotlar 10 yil oldingi. Ularni qanday yangilaysiz? Manbalarni ko'rsating.",
    ],
  },
};

export function parseNum(s) {
  if (typeof s === "number") return s;
  const t = String(s ?? "").replace(/\s| /g, "").replace(/[−–]/g, "-").replace(",", ".").replace(/%$/, "");
  if (!/^-?\d*\.?\d+$/.test(t)) return NaN;
  return Number(t);
}

export function checkField(field, input) {
  const v = parseNum(input);
  if (!Number.isFinite(v)) return false;
  const tol = field.tol ?? Math.max(Math.abs(field.value) * 0.005, 0.01);
  return Math.abs(v - field.value) <= tol + 1e-9;
}
