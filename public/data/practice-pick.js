// Amaliy mashg'ulot: har bir talabaga mavzudan faqat 2 ta masala (hisob-kitob yoki keys) tasodifiy tanlab beriladi.
// Tanlash talaba identifikatori va mavzu bo'yicha doimiy (qayta kirganda o'zgarmaydi); brauzer va server bir xil natija beradi.
export const PICK_COUNT = 2;
const fnv = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h; };
/** [{ kind: "task", id } | { kind: "open", idx }] — eng ko'pi bilan 2 ta. */
export function pickPractice(userId, topic) {
  const pr = topic?.practice;
  if (!pr) return [];
  const items = [...(pr.tasks || []).map((t) => ({ kind: "task", id: t.id, key: t.id })), ...(pr.open || []).map((_, i) => ({ kind: "open", idx: i, key: `open-${i}` }))];
  if (items.length <= PICK_COUNT) return items.map(({ key, ...r }) => r);
  return items
    .map((it) => ({ it, h: fnv(`${userId}:${topic.id}:${it.key}`) }))
    .sort((a, b) => a.h - b.h || a.it.key.localeCompare(b.it.key))
    .slice(0, PICK_COUNT)
    .map(({ it: { key, ...r } }) => r);
}
