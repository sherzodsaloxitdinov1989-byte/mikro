// Amaliy mashg'ulotlar: darslikdagi «Masala va mashqlar» (scripts/import-mikro.py → practice-auto.js).
// Har bir masala ochiq topshiriq sifatida beriladi: AI uni darslikdagi namunaviy yechim (refs) bilan solishtirib 10 ballik mezonda baholaydi.
// Javobi aniq (sonli) masalalar qo'shish uchun: tasks: [T(id, sarlavha, shart, [F(maydon, qiymat, birlik)], yechim, formula)].
import { AUTO_PRACTICE } from "./practice-auto.js";

export const PRACTICE = AUTO_PRACTICE;

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
