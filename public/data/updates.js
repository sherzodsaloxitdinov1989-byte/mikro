// Dolzarb ma'lumotlar: darslikdagi eskirgan faktlarning (statistika, qonunlar, stavkalar, me'yorlar)
// tekshirilgan yangi qiymatlari. Ro'yxat bo'sh bo'lsa, "Dolzarb" bo'limi menyuda ko'rinmaydi.
// Har bir yozuv:
//   id      — noyob nom;
//   topics  — qaysi mavzu(lar)da ko'rsatiladi (0 = darslikning kirish qismi);
//   area    — soha (filtr uchun, masalan "Statistika", "Qonunchilik", "Soliqlar");
//   match   — darslik matnidagi eskirgan jumla parchasi (aynan matndagidek; mavzu matnida sariq rangda belgilanadi);
//   old     — darslikdagi da'vo; now — tekshirilgan dolzarb ma'lumot; sources — [{ title, url }] rasmiy manbalar.
// Yangilash: CHECKED sanasini o'zgartiring va yozuvlarni tahrirlang (kod o'zgarmaydi).

export const CHECKED = "2026-01-01";

export const UPDATES = [
  // {
  //   id: "misol",
  //   topics: [1],
  //   area: "Statistika",
  //   match: "darslikdagi eskirgan jumla parchasi",
  //   old: "Darslikda: ...",
  //   now: "Hozirgi holat (yil): ...",
  //   sources: [{ title: "Milliy statistika qo'mitasi", url: "https://stat.uz" }],
  // },
];

export const updatesFor = (num) => UPDATES.filter((u) => u.topics.includes(num));
