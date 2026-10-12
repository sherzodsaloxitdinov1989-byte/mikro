// Darslik matni (NAMUNA). Haqiqiy darslik uchun bu fayl avtomatik yaratiladi:
//   python3 scripts/import-book.py manbalar/<darslik>.pdf   (yoki .docx)
// Tuzilma:
//   intro      — "Kirish" qismi (HTML, bo'lmasa "")
//   topics[]   — { num, chapter, title, plan[], sections[{ title, html }], questions[], keywords[] }
//   literature — adabiyotlar ro'yxati (satrlar)
export const BOOK = {
  intro: "<p>Bu — platforma shablonining namunaviy kirish qismi. Haqiqiy darslik import qilinganda bu yerda darslikning “Kirish” bo'limi chiqadi.</p>",
  topics: [
    {
      num: 1,
      chapter: "I",
      title: "PLATFORMA QANDAY ISHLAYDI (NAMUNAVIY MAVZU)",
      plan: ["1.1. Mavzu tuzilmasi", "1.2. Interaktiv qatlam", "1.3. Amaliy mashg'ulot va AI tekshiruv"],
      sections: [
        { title: "1.1. Mavzu tuzilmasi", html: "<p>Har bir mavzu darslikdan avtomatik olinadigan nazariy matndan iborat: reja, bo'limlar, nazorat savollari va tayanch iboralar. Matn bo'limlarga bo'linadi, jadval va formulalar asl ko'rinishida saqlanadi.</p><p>Talaba mavzuni o'qib chiqqach, “O'qib chiqdim” tugmasini bosadi va progressiga ball qo'shiladi.</p>" },
        { title: "1.2. Interaktiv qatlam", html: "<p>Darslik matni ustiga pedagogik qatlam qo'shiladi: tushunchalar kartalari (glossariy), interaktiv metodlar (klaster, Venn diagrammasi, keys-stadi, FSMU, INSERT, moslashtirish, ketma-ketlik, T-jadval, aqliy hujum), test savollari va mustaqil ish topshiriqlari.</p><pre class=\"book-pre\">Natija = Bajarilgan qismlar / Jami qismlar × 100%</pre>" },
        { title: "1.3. Amaliy mashg'ulot va AI tekshiruv", html: "<p>Amaliy mashg'ulotda javobi aniq masalalar darhol tekshiriladi, keys va ochiq savollarga yozilgan javoblarni esa sun'iy intellekt 10 ballik mezon bo'yicha baholab, batafsil izoh beradi. O'qituvchi AI bahosini ko'rib, o'z bahosi va izohini qo'shadi.</p>" },
      ],
      questions: ["Mavzu qanday qismlardan iborat?", "Interaktiv qatlamga nimalar kiradi?", "AI tekshiruv qanday mezonlar bo'yicha baholaydi?"],
      keywords: ["mavzu", "glossariy", "interaktiv metod", "test", "amaliy mashg'ulot", "AI tekshiruv"],
    },
    {
      num: 2,
      chapter: "I",
      title: "DARSLIKNI PLATFORMAGA KIRITISH (NAMUNAVIY MAVZU)",
      plan: ["2.1. Manbalarni tayyorlash", "2.2. Avtomatik import", "2.3. Tekshirish va joylashtirish"],
      sections: [
        { title: "2.1. Manbalarni tayyorlash", html: "<p>Darslik (PDF yoki DOCX), fan dasturi, dars taqdimotlari (PPTX) va amaliy mashg'ulotlar to'plami <b>manbalar/</b> papkasiga joylanadi.</p>" },
        { title: "2.2. Avtomatik import", html: "<p>Import skripti darslikni mavzularga ajratadi va <b>public/data/book.js</b> faylini yaratadi. Kirill yozuvidagi matn avtomatik lotin yozuviga o'giriladi.</p>" },
        { title: "2.3. Tekshirish va joylashtirish", html: "<p>Platforma lokal kompyuterda tekshiriladi, so'ng GitHub orqali Cloudflare'ga joylanadi. Har bir yangilanish avtomatik ravishda saytga chiqadi.</p>" },
      ],
      questions: ["Darslik qaysi formatlarda qabul qilinadi?", "Import natijasi qaysi faylga yoziladi?"],
      keywords: ["manbalar", "import", "book.js", "Cloudflare"],
    },
  ],
  literature: ["Muallif. Darslik nomi. – Shahar: Nashriyot, Yil. – 000 b."],
};
