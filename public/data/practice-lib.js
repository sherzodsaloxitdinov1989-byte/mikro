// Amaliy mashg'ulot yordamchilari (fanga bog'liq emas): sonli javobni o'qish va tekshirish.
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
