# CLAUDE.md — fan platformasi shabloni

Bu repozitoriy — istalgan OTM fani uchun interaktiv ta'lim platformasi shabloni. Platforma bir darslik asosida quriladi: darslik `manbalar/` papkasiga yuklanadi, shu yo'riqnoma bo'yicha mavzular, testlar, interaktiv metodlar, amaliy mashg'ulotlar va dolzarb ma'lumotlar tayyorlanadi.

Foydalanuvchi bilan **o'zbek tilida (lotin yozuvida)**, sodda va qisqa gaplash. U dasturchi emas, o'qituvchi. Texnik ishlarni o'zing bajar: buyruqlarni ishga tushir, commit va push qil, PR och va birlashtir. Foydalanuvchidan faqat o'zi qila oladigan ishlarni so'ra: Cloudflare paneli, kalitlar, fayl yuklash.

## Platforma tarkibi (o'zgartirish shart emas)

- `public/` — frontend: oddiy HTML/CSS/JS, ES modullar, yig'ish bosqichi yo'q. Marshrutlar `public/js/app.js` da.
- `server/app.mjs` — API (`/api/*`). Ma'lumotlar ombori: `server/store.mjs`.
  - Cloudflare'da D1 va R2 ishlatiladi (`server/store-d1.mjs`).
  - Netlify'da Netlify Blobs ishlatiladi (`server/store-netlify.mjs`).
- Kirish nuqtalari:
  - Cloudflare Worker: `worker/index.js`, sozlamalari `wrangler.jsonc` da (asosiy);
  - Netlify: `netlify/functions/api.mjs` (zaxira).
- AI: Gemini (`GEMINI_API_KEY`) yoki Claude (`ANTHROPIC_API_KEY`). Kalit bo'lmasa, demo/qoidaga asoslangan rejim ishlaydi.

Imkoniyatlar:
- mavzular (darslik matni, taqdimot, animatsion dars, audiokitob, AI Ustoz);
- tushunchalar kartalari va kunlik takrorlash;
- interaktiv metodlar va testlar;
- amaliy mashg'ulotlar va **AI tekshiruv** (10 ballik feedback);
- dolzarb ma'lumotlar;
- mustaqil ta'lim;
- mediateka;
- Live viktorina va so'z buluti;
- talaba pasporti (XP, daraja, nishon, reyting, sertifikat);
- o'qituvchi paneli;
- katta ekran uchun QR-kod (`#/qr`).

Ixtiyoriy bo'lim: **tahlil laboratoriyasi** (`features.lab`). U faqat moliyaviy tahlil fanlariga mos.

**Trenajyor va so'rovnomalar yo'q.** Foydalanuvchi alohida so'ramasa, ularni qo'shma.

## Fanga oid fayllar (faqat shularni to'ldirasan)

| Fayl | Mazmuni | Qanday to'ldiriladi |
|---|---|---|
| `public/data/course.js` | Fan nomi, platforma nomi, slug, ta'lim natijalari, baholash, darajalar, bo'limlar | Fan dasturidan, qo'lda. Keyin `npm run configure` |
| `public/data/book.js` | Darslik matni | `python3 scripts/import-book.py manbalar/<darslik>` (avtomatik) |
| `public/data/layers.js` | Har mavzu: belgi, qisqa nom, glossariy, metodlar, testlar, mustaqil ishlar, resurslar | Darslik asosida o'zing yozasan |
| `public/data/practice.js` | Amaliy mashg'ulotlar (masalalar + ochiq topshiriqlar) | Amaliy to'plamdan yoki darslik asosida |
| `public/data/updates.js` | Darslikdagi eskirgan ma'lumotlarning yangi qiymatlari | Faktcheking (internet qidiruvi) |
| `public/slides/NN.pdf` | Dars taqdimotlari | `python3 scripts/convert-slides.py manbalar/` |

Har bir fayl boshida format izohlangan. Namunadagi 2 ta mavzu formatga misol. Haqiqiy fan kiritilganda ular to'liq almashtiriladi.

## Ish tartibi: yangi fan uchun platformani tayyorlash

Foydalanuvchi "manbalar/ ga fayllarni yukladim, platformani tayyorla" desa, quyidagi bosqichlarni **ketma-ket, to'liq** bajar.

Har bosqich oxirida 1–2 gaplik qisqa hisobot ber. Agar biror narsa noaniq bo'lsa (masalan, darslik va fan dasturidagi mavzular farq qilsa), qisqa savol ber yoki oqilona qaror qabul qilib, uni aytib o't.

### 0. Manbalarni ko'rib chiqish
- `ls manbalar/` bilan fayllarni ko'r: darslik, fan dasturi, taqdimotlar, amaliy to'plam, testlar.
- Repozitoriy ildizida `.gitignore` bo'lishi kerak (foydalanuvchi fayllarni GitHub'ga qo'lda yuklaganda yashirin fayllar tushib qolishi mumkin). Bo'lmasa, yarat: `node_modules/`, `.wrangler/`, `.data/`, `.netlify/`, `.env`, `*.log`.
- Eski `.doc` yoki `.ppt` bo'lsa, o'gir: `soffice --headless --convert-to docx|pdf`.
- Kerak bo'lsa, LibreOffice'ni o'rnat: `apt-get install -y libreoffice-impress libreoffice-writer`.

### 1. Fan sozlamalari: `public/data/course.js`
Fan dasturidan quyidagilarni to'ldir:
- `title`, `audience`, `program`, `description`, `outcomes`, `grading`;
- `source` — darslikning to'liq bibliografik ma'lumoti;
- `domain` — fan sohasi (AI tekshiruvchi uchun).

Quyidagilarni o'zing taklif qil:
- `brand` — qisqa nom, masalan "MarketAkademiya";
- `slug` — kichik lotin harflar va "-"; u sayt manziliga aylanadi;
- `certPrefix` — 2–3 harf;
- `heroTitle` — fan nomi 2 qismga bo'linadi;
- `logo` — emoji;
- `levels` — 8 ta daraja, fanga mos kasbiy unvonlar;
- `passportName`, masalan "Marketolog pasporti".

`features.lab = true` faqat moliyaviy tahlil, buxgalteriya yoki korxona iqtisodiyoti fanlari uchun.

So'ng `npm run configure` ni ishga tushir. U nomlarni `index.html`, manifest, `wrangler.jsonc` va `package.json` ga yozadi.

### 2. Darslikni import qilish
```bash
pip install python-docx    # DOCX uchun (bir marta)
python3 scripts/import-book.py manbalar/<darslik>.pdf --dry-run   # avval hisobotni ko'r
python3 scripts/import-book.py manbalar/<darslik>.pdf
```
- Hisobotni tekshir: mavzular soni darslik mundarijasiga mos bo'lishi kerak; bo'limlar, savollar va tayanch iboralar ajralgan bo'lishi kerak; "juda qisqa" yoki "juda uzun" ogohlantirishlari bo'lmasligi kerak.
- Mavzular noto'g'ri ajralsa, mavzu nomlarini darslikdagi tartibda `manbalar/mavzular.txt` ga yoz (har qatorga bitta nom) va `--topics manbalar/mavzular.txt` bilan qayta ishga tushir.
- Natijani ko'z bilan tekshir: 2–3 mavzuning `sections[].html` qismidan parchalar o'qi. Jadval va formulalar `<pre>` ichida bo'lishi kerak.
- Kerak bo'lsa, `scripts/import-book.py` dagi qoidalarni shu darslikka moslashtir.
- Darslik mavzulari fan dasturidagi mavzulardan farq qilsa, darslik tuzilmasiga amal qil va buni foydalanuvchiga ayt.

### 3. Taqdimotlar
- `python3 scripts/convert-slides.py manbalar/` taqdimotlarni `public/slides/NN.pdf` ga o'giradi va `course.js → decks` ni to'ldiradi.
- Fayl nomida mavzu raqami bo'lmasa, avval faylni qayta nomla.
- Taqdimot bo'lmasa, bu bosqichni o'tkazib yubor: o'qituvchi panelidan keyin yuklash mumkin.

### 4. Pedagogik qatlam: `public/data/layers.js`
**Har bir mavzu uchun** (`book.js` dagi `num` bo'yicha) quyidagilarni tayyorla:
- `icon` — emoji; `title` — qisqa, tushunarli mavzu nomi (darslikdagi uzun nom ham saqlanadi).
- `glossary` — 6–10 ta asosiy tushuncha. Ta'riflar darslikka mos va 1–2 gapdan iborat bo'lsin.
- `methods` — 2–4 ta interaktiv metod, turlari har xil bo'lsin; formati fayl boshida izohlangan.
  - Keys-stadilar fanning real hayotiy vaziyatlariga asoslansin va `model` (namunaviy yechim) bo'lsin.
  - `id` lar butun fayl bo'yicha noyob bo'lsin: `t{num}-...`.
- `tests` — 8–10 ta test, har birida 4 ta variant.
  - Testlar faqat darslik mazmuni va tasdiqlangan dolzarb faktlar asosida tuzilsin.
  - To'g'ri javob indekslari (`c`) aralash bo'lsin.
  - Bitta aniq to'g'ri javob bo'lsin.
  - "Hammasi to'g'ri" kabi variantlardan qoch.
- `selfStudy` — 1–2 ta mustaqil ish (`id`: `t{num}-s1`).
- `resources` — 1–3 ta havola. Faqat mavjudligini tekshirgan rasmiy saytlarni yoz (lex.uz, stat.uz, vazirlik saytlari, xalqaro tashkilotlar). Havola **o'ylab topilmasin**.

Mavzular ko'p bo'lsa, ishni bo'laklarga ajrat: `layers-1.js`, `layers-2.js` ... `layers.js` ichida `import` qilib, `LAYERS = { ...A, ...B }` ko'rinishida birlashtir.

### 5. Amaliy mashg'ulotlar: `public/data/practice.js`
- Amaliy to'plam berilgan bo'lsa, undagi masalalarni ko'chir.
- Berilmagan bo'lsa, har mavzuga mos masala tuz. Hisob-kitobli fanlarda 2–4 ta masala va 1–2 ta ochiq topshiriq bo'lsin. Hisob-kitobsiz fanlarda `tasks: []` qoldirib, faqat 2–3 ta ochiq topshiriq (keys, tahliliy savol) ber.
- **Har bir sonli javobni qayta hisobla.** Buni `node -e` yoki `python3 -c` bilan qil. Manbadagi kalit xato bo'lsa, to'g'risini yoz va `note` maydonida izohla.
- `solution` maydoniga qisqa yechim yo'lini, `formula` maydoniga formulani yoz.

### 6. Faktcheking: `public/data/updates.js`
Darslik matnidan eskirishi mumkin bo'lgan ma'lumotlarni top:
- statistika;
- qonun va qarorlar (nomi, raqami, kuchini yo'qotganmi);
- soliq va boshqa stavkalar, eng kam ish haqi, BHM;
- tashkilotlar nomi;
- standartlar, hisobot shakllari;
- texnologiyalar.

Har biri uchun:
- internetda (WebSearch / WebFetch) **rasmiy manbalardan** eng so'nggi ma'lumotni top: stat.uz, lex.uz, gov.uz, cbu.uz, vazirliklar, xalqaro tashkilotlar;
- yozuv qo'sh: `old` — darslikda yozilgani; `now` — hozirgi holat, yili bilan; `sources` — manba nomi va havolasi;
- `match` ga darslik matnidagi jumla parchasini `book.js` dagidek **aynan** ko'chir;
- `CHECKED` ga bugungi sanani yoz.

Raqamni **hech qachon o'ylab topma**. Tasdiqlay olmagan ma'lumotni kiritma yoki "tekshirilsin" deb belgilab, foydalanuvchiga ayt.

Muhim yangilangan faktlar test va masalalarda ham to'g'ri aks etsin. Masalan, eskirgan stavka bilan masala tuzma.

### 7. Tekshirish
```bash
npm run check                        # kontent validatori — 0 ta xato bo'lishi shart
npm install                          # bir marta
npx wrangler dev --port 8788 --var TEACHER_CODE:ustoz-local --var JWT_SECRET:local-secret-1234567890
```
- Brauzerda (Playwright, Chromium) asosiy sahifalarni ochib ko'r: bosh sahifa, mavzular, 1-mavzu, amaliyot, dolzarb, o'qituvchi paneli. Konsolda JS xatolari bo'lmasin.
- Bitta talaba va bitta o'qituvchi (`ustoz-local` kodi bilan) ro'yxatdan o'tkazib ko'r.
- Bitta amaliy mashg'ulotni yuborib, AI tekshiruvi ishlashini sina. Kalit bo'lmasa, demo rejimda ishlaydi.

### 8. Saqlash va joylash
- O'zgarishlarni commit qil va push qil. Foydalanuvchi so'rasa, PR ochib `main` ga birlashtir.
- Cloudflare'ga ulash bo'yicha foydalanuvchiga `CLOUDFLARE.md` dagi qadamlarni oddiy tilda ayt.
  - **Build command:** bo'sh qoldiriladi.
  - **Deploy command:** `npx wrangler deploy`.
  - **Secrets:** `JWT_SECRET`, `TEACHER_CODE`, `GEMINI_API_KEY`.
- Oxirida foydalanuvchiga quyidagilarni qisqacha ayt:
  - nechta mavzu, test, metod, masala va dolzarb ma'lumot tayyorlandi;
  - qaysi joylarni o'qituvchi ko'rib chiqishi kerak (AI yozgan testlar, tasdiqlanmagan faktlar).

## Qoidalar

- Platformadagi barcha matnlar o'zbek tilida (lotin yozuvida) bo'lsin. Kirill darslik avtomatik o'giriladi (`scripts/translit.py`).
- Darslik mazmunini o'zgartirma. Eskirgan joylar faqat `updates.js` orqali belgilanadi.
- Kod (`public/js`, `server/`) odatda o'zgarmaydi. Fanga xos narsa faqat `public/data/` va `public/slides/` da bo'ladi.
- API kalit, parol yoki tokenni chatga yozishni **hech qachon so'rama**. Ular faqat Cloudflare/Netlify panelida kiritiladi.
- Katta fayllar: bitta taqdimot ~5 MB dan oshsa, siqib qo'y. Cloudflare'da bitta statik fayl 25 MB dan oshmasligi kerak.
- Har bir muhim yangilanishdan keyin `public/sw.js` dagi `VERSION` raqamini oshir. Aks holda brauzerlar eski versiyani ko'rsatadi.

## Bepul tariflar (kredit tejash)

- **Cloudflare** (asosiy): sahifa va fayllar uchun so'rovlar cheklanmagan; API — kuniga 100 000 so'rov; D1 — 5 GB; deploy bepul.
- **Netlify** (zaxira): har bir deploy 15 kredit, oyiga 300 kredit. Netlify ishlatilsa, "Stop builds" ni yoqish tavsiya etiladi.
