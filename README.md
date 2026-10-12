# Fan platformasi shabloni

Istalgan OTM fani uchun interaktiv ta'lim platformasi. Darsligingizni yuklaysiz, Claude uni mavzularga ajratadi va platformani to'ldiradi. Natijada har bir mavzu bo'yicha:
- darslik matni, test va interaktiv metodlar;
- amaliy mashg'ulot va uning **sun'iy intellekt asosida tekshiruvi**;
- AI Ustoz, audiokitob, animatsion dars;
- Live viktorina, reyting va sertifikat;
- o'qituvchi paneli.

Platforma Cloudflare'da **bepul** ishlaydi.

> Shablon "Turistik korxonalar faoliyati tahlili" fani platformasidan tayyorlangan. **Trenajyor** va **so'rovnomalar** olib tashlangan, qolgan barcha imkoniyatlar saqlangan.

## Imkoniyatlar

| Bo'lim | Tavsif |
|---|---|
| 📚 **Mavzular** | Darslik matni bo'limlarga ajratilgan, jadval va formulalar saqlangan. Har bir mavzuda: dars taqdimoti, animatsion dars, audiokitob (o'zbekcha AI ovoz), tushunchalar kartalari, interaktiv metodlar (klaster, Venn, keys, FSMU, INSERT va boshqalar), nazorat savollari, test, amaliy mashg'ulot, mustaqil ish. Shu yerda **🤖 AI Ustoz** ham bor: darslik asosida savollarga javob beradi. |
| 🧮 **Amaliy mashg'ulotlar + AI tekshiruv** | Javobi aniq masalalar darhol tekshiriladi. Keys va xulosalarni AI 10 ballik mezon bo'yicha baholaydi. O'qituvchi AI bahosini ko'rib, o'z bahosini qo'yadi. |
| 🔄 **Dolzarb ma'lumotlar** | Darslikdagi eskirgan statistika va qonunlar tekshiriladi, yangi qiymatlari manbasi bilan ko'rsatiladi. Matnda eskirgan jumla sariq rangda belgilanadi. |
| 🧩 **Mustaqil ta'lim** | O'quv reja, mustaqil ishlar, o'qituvchi bahosi, refleksiv kundalik. |
| 🎬 **Mediateka** | Animatsion darslar, taqdimotlar va video darslar. |
| 🎮 **Live** | Sinfda Kahoot uslubidagi viktorina va so'z buluti. Talabalar PIN yoki QR-kod orqali qo'shiladi. |
| 🛂 **Talaba pasporti** | XP, 8 daraja, nishonlar, reyting, sertifikat. |
| 📊 **O'qituvchi paneli** | AI tekshiruvlari, mustaqil ishlar, talabalar, test tahlili (qiyinlik, ajrata olish, KR-20), taqdimot va videolarni yuklash, AI ovoz, Live. |
| 📱 **QR-kod** | `#/qr` — katta ekranda ko'rsatish uchun platformaga kirish QR-kodi. |
| 🔬 **Tahlil laboratoriyasi** (ixtiyoriy) | Balans va moliyaviy natijalar asosida kompleks moliyaviy tahlil. Faqat iqtisodiy fanlar uchun yoqiladi. |

---

## Boshlash: 4 qadam

### 1-qadam. GitHub'da repozitoriy yarating
1. [github.com](https://github.com) ga kiring: **+** → **New repository**. Nom bering, masalan `marketing-platforma`, va **Create repository** ni bosing.
2. Shu shablondagi barcha fayllarni repozitoriyga yuklang:
   - **uploading an existing file** havolasini bosing;
   - ZIP ichidagi fayl va papkalarni sudrab tashlang;
   - **Commit changes** ni bosing.

### 2-qadam. Manbalarni yuklang
Repozitoriyda `manbalar` papkasini oching → **Add file → Upload files**. Quyidagilarni yuklang:
- **darslik** yoki o'quv qo'llanma (PDF yoki DOCX, kirill yozuvida ham bo'ladi);
- **fan dasturi** (sillabus);
- **dars taqdimotlari** (PPTX), fayl nomida mavzu raqami bo'lsin: `1-mavzu.pptx`, `2-mavzu.pptx`...;
- bo'lsa, **amaliy mashg'ulotlar to'plami**.

### 3-qadam. Claude'ga bitta buyruq bering
[claude.ai/code](https://claude.ai/code) ni oching, repozitoriyingizni tanlang va quyidagi matnni yuboring:

```
manbalar/ papkasiga darslik, fan dasturi va taqdimotlarni yukladim.
CLAUDE.md dagi yo'riqnoma bo'yicha platformani shu fanga to'liq moslashtir:
fan sozlamalari, darslik importi, taqdimotlar, har bir mavzu uchun glossariy,
interaktiv metodlar, testlar va amaliy mashg'ulotlar.
Darslikdagi eskirgan ma'lumotlarni internetdan rasmiy manbalar asosida faktcheking
qilib, eng so'nggi ma'lumotlarni yukla. Hammasini tekshirib, PR ochib main ga birlashtir.
```

Claude barcha ishni o'zi bajaradi: darslikni mavzularga ajratadi, testlarni yozadi, faktlarni tekshiradi. Natijani qisqacha aytib beradi. Mavzu ko'p bo'lsa, bu bir necha soat davom etishi mumkin. Agar Claude "davom etaymi?" deb so'rasa, **ha, davom et** deb yozing.

### 4-qadam. Saytni Cloudflare'ga joylang (bepul)
1. [dash.cloudflare.com](https://dash.cloudflare.com) ga kiring (bepul ro'yxatdan o'ting).
2. **Workers & Pages** → **Create** → **Import a repository** → GitHub'ni ulang va repozitoriyingizni tanlang.
3. **Build command** ni bo'sh qoldiring, **Deploy command**: `npx wrangler deploy`. **Deploy** ni bosing.
4. Deploy tugagach: Worker → **Settings → Variables and Secrets → Add**. Uchta kalit qo'shing, har birining turi **Secret** bo'lsin:
   - `JWT_SECRET` — istalgan uzun tasodifiy matn (40+ belgi);
   - `TEACHER_CODE` — o'qituvchi ro'yxatdan o'tishi uchun maxfiy kod (o'zingiz o'ylab toping);
   - `GEMINI_API_KEY` — [aistudio.google.com](https://aistudio.google.com) → **Get API key** (bepul). AI tekshiruv, AI Ustoz va AI ovozni yoqadi.
5. **Deployments** → oxirgi deploy → **Retry**.
6. Sayt manzili: `https://<slug>.<akkaunt>.workers.dev`. Tekshirish uchun `.../api/health` ni oching: u yerda `"platform":"Cloudflare"` va `"ai":"gemini (...)"` chiqishi kerak.
7. Saytda **Ro'yxatdan o'tish → O'qituvchi** ni tanlang va `TEACHER_CODE` bilan profil yarating.

Shundan keyin GitHub'dagi har bir o'zgarish saytga avtomatik chiqadi. Batafsil: [CLOUDFLARE.md](CLOUDFLARE.md).

> **Muhim:** API kalit va parollarni hech kimga, jumladan Claude'ga ham chatda yozmang. Ular faqat Cloudflare panelida kiritiladi.

---

## Keyinchalik o'zgartirish

Claude'ga oddiy tilda yozing:
- "3-mavzuga yana 5 ta test qo'sh";
- "7-mavzu amaliy mashg'ulotidagi 2-masala javobini tekshir";
- "dolzarb ma'lumotlarni qayta tekshir";
- "fan nomini o'zgartir";
- "tahlil laboratoriyasini yoq".

Taqdimot va videolarni o'qituvchi panelidan ham yuklash mumkin.

## Texnik ma'lumot (dasturchilar uchun)

| Fayl / papka | Vazifasi |
|---|---|
| `public/data/course.js` | Fan sozlamalari. O'zgartirgandan keyin `npm run configure` |
| `public/data/book.js` | Darslik matni: `python3 scripts/import-book.py manbalar/<darslik>.pdf\|.docx [--topics mavzular.txt]` |
| `public/data/layers.js` | Glossariy, metodlar, testlar, mustaqil ishlar |
| `public/data/practice.js` | Amaliy mashg'ulotlar |
| `public/data/updates.js` | Dolzarb ma'lumotlar |
| `public/slides/` | Taqdimotlar: `python3 scripts/convert-slides.py manbalar/` |

Kontentni tekshirish: `npm run check`.

Server kodi umumiy (`server/`) va ikki joyda ishlaydi:
- **Cloudflare Worker** (asosiy): `wrangler.jsonc`, `worker/`, ma'lumotlar D1 bazasida;
- **Netlify** (zaxira): `netlify.toml`, `netlify/functions/`, ma'lumotlar Netlify Blobs'da.

Lokal ishga tushirish:

```bash
npm install
npx wrangler dev --port 8788 --var TEACHER_CODE:ustoz-local --var JWT_SECRET:local-secret-1234567890
# yoki Netlify muhitida: npm run dev  → http://localhost:8888
```

Claude uchun to'liq yo'riqnoma: [CLAUDE.md](CLAUDE.md).
