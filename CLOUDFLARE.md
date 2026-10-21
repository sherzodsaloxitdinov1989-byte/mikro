# Platformani Cloudflare'ga joylash

Platforma **Cloudflare Worker** sifatida ishlaydi (`wrangler.jsonc`, `worker/index.js`):

- **Sahifalar, taqdimotlar va rasmlar** — `public/` dagi statik fayllar. Ular uchun so'rovlar bepul va cheklanmagan.
- **Server qismi (`/api/*`)** — bepul tarifda kuniga 100 000 ta so'rov.
- **Ma'lumotlar** — **D1** bazasi (`<slug>-db`, nomi `course.js` dagi `slug` dan olinadi). U birinchi deploy'da avtomatik yaratiladi, jadval esa birinchi so'rovda yaratiladi.
- **Fayllar** (AI ovozlari, o'qituvchi yuklagan fayllar) — R2 ulangan bo'lsa R2'da, aks holda shu D1 bazasida saqlanadi.

GitHub'ning `main` tarmog'iga har bir push Cloudflare'da avtomatik deploy qiladi. Kredit yechilmaydi.

## 1. Loyihani ulash (bir marta)

Cloudflare → **Workers & Pages** → **Create** → **Import a repository** → repozitoriyingizni tanlang.

- **Build command:** bo'sh qoldiring
- **Deploy command:** `npx wrangler deploy`

Qolgan sozlamalar (`nodejs_compat`, D1 baza, statik fayllar) `wrangler.jsonc` dan avtomatik olinadi.

## 2. Maxfiy kalitlar

Worker → **Settings** → **Variables and Secrets** → **Add**. Har birining turi: **Secret**.

| Nomi | Majburiy | Qiymati |
|---|---|---|
| `JWT_SECRET` | ✅ | Uzun tasodifiy satr (40+ belgi) |
| `TEACHER_EMAILS` | ✅ (yoki `TEACHER_CODE`) | O'qituvchi(lar) emaili, vergul bilan: `ism@gmail.com`. Faqat shu emailga ega odam o'qituvchi bo'la oladi va email tasdiqlash kodi bilan kiradi. Qolgan o'qituvchilarni keyin panelda o'zingiz qo'shasiz. **Pochta xizmati kerak** (pastga qarang) |
| `TEACHER_CODE` | ixtiyoriy | Eski usul: o'qituvchi ro'yxatdan o'tishi uchun umumiy maxfiy kod. Pochta ulanmagan bo'lsa, tez boshlash uchun shuni qo'ying |
| `GEMINI_API_KEY` | tavsiya | [aistudio.google.com](https://aistudio.google.com) → Get API key (bepul). AI tekshiruv, AI Ustoz va AI ovozni yoqadi |
| `ANTHROPIC_API_KEY` | yo'q | Claude kaliti (pullik) |

**O'qituvchi bo'lish (soddalashtirilgan):**
1. Birinchi o'qituvchi: `TEACHER_EMAILS` ga o'z emailingizni yozing (pochta ulangan bo'lsin). Saytda **Ro'yxatdan o'tish → O'qituvchi** → emailingizni yozib **Tasdiqlash kodini yuborish** → emailga kelgan kodni kiriting.
2. Boshqa o'qituvchilar: O'qituvchi paneli → **O'qituvchilar** → emailini qo'shing (yoki **Talabalar** bo'limida 👩‍🏫 tugmasi bilan mavjud talabani o'qituvchi qiling). Umumiy kodni hech kimga aytish shart emas.
3. Pochta hali ulanmagan bo'lsa: `TEACHER_CODE` qo'ying va ro'yxatdan o'tishda shu kodni kiriting.

Kalitlarni qo'shgandan keyin **Deployments** → oxirgi deploy → **Retry**. Kalitlar keyingi deploy'larda ham saqlanib qoladi (`keep_vars`).

Tekshirish uchun `https://<worker-nomi>.<akkaunt>.workers.dev/api/health` manzilini oching. U yerda `"platform":"Cloudflare"` ko'rinishi kerak.

So'ng saytda **Ro'yxatdan o'tish → O'qituvchi** ni tanlab, profil yarating (yuqoridagi «O'qituvchi bo'lish» ga qarang).

## Darslik mualliflik himoyasi

Darslik muallifning ishlanmasi, shuning uchun platforma uni yuklab olishga imkon bermaydi:
- Saytda yuklab olish tugmalari yo'q. Taqdimotlar faqat PDF va faqat ko'rish uchun; o'qituvchi faqat PDF yuklay oladi.
- Darslik matni, test kalitlari, masala yechimlari, rasmlar va taqdimotlar **faqat tizimga kirgan** foydalanuvchiga beriladi (Worker sessiya cookie'sini tekshiradi). Kirmagan odam bu fayllarni to'g'ridan-to'g'ri havola orqali ham ocha olmaydi.
- Talaba ekranida nusxalash, belgilash, o'ng tugma, sudrab olish, saqlash/bosib chiqarish o'chirilgan va ismi bilan xira belgi (watermark) ko'rinadi. O'qituvchi uchun cheklov yo'q.
- Cheklov: ekran suratini yoki brauzer vositalarini to'liq to'sib bo'lmaydi; bu choralar tasodifiy nusxalashni qiyinlashtiradi, kim tarqatganini watermark orqali aniqlash mumkin.

**Test va topshiriqlarni ekran suratidan himoyalash.** Veb-sahifa ekran suratini to'liq to'sa olmaydi (surat operatsion tizim darajasida olinadi, telefonda esa aniqlab ham bo'lmaydi). Platforma quyidagicha himoyalaydi: test, amaliyot va topshiriq sahifalarida PrintScreen, Win+Shift+S, Cmd+Shift+3/4/5 bosilsa yoki oyna fokusini yo'qotsa (suratga olish dasturi, boshqa ilova), sahifa darhol xiralashib yashiriladi; hodisa o'qituvchi panelidagi «Himoya hodisalari» bo'limida qayd etiladi; ekranda talaba ismi bilan watermark turadi.

**Muhim — GitHub repozitoriyni yopiq (Private) qiling.** Darslik fayllari repozitoriyda turadi; repozitoriy ochiq bo'lsa, ularni hamma GitHub'dan yuklab oladi. GitHub → repozitoriy → **Settings → General → Danger Zone → Change visibility → Make private**. Cloudflare yopiq repozitoriydan ham deploy qiladi (GitHub ulanishi o'zgarmaydi). Muallifning manba hujjatlari (`manbalar/*.docx, *.pdf, *.pptx`) endi repozitoriyga yuklanmaydi (`.gitignore`). Himoya faqat Cloudflare Worker variantida ishlaydi (Netlify va Pages zaxira variantlarida emas).

## 3. R2 fayl ombori (ixtiyoriy)

R2 shart emas: AI ovozlari va o'qituvchi yuklagan fayllar R2 bo'lmasa D1 bazasida saqlanadi (5 GB gacha bepul). R2 faqat ko'p hajmli videolar yuklanadigan bo'lsa kerak bo'ladi.

`public/slides/` dagi dars taqdimotlari platformaga o'rnatilgan, ular R2'siz ham ishlaydi.

Yoqish uchun:
1. Cloudflare'da R2 faollashtirilgan bo'lishi kerak (**R2 Object Storage** bo'limi).
2. `wrangler.jsonc` ga quyidagi qatorni qo'shing:

   ```
   "r2_buckets": [{ "binding": "FILES", "bucket_name": "<slug>-files" }],
   ```

   Bucket keyingi deploy'da avtomatik yaratiladi.

## Bepul tarif chegaralari va platformaning moslashuvi

- **Server so'rovlari: kuniga 100 000 ta.** Talaba progressi 15 soniyada bir marta yig'ib saqlanadi, sahifa va taqdimotlar esa server so'rovi hisoblanmaydi. Shuning uchun 100–200 nafar talaba bemalol sig'adi. Limit oshib ketsa, sayt faqat ertasi kungacha to'xtaydi (Toshkent vaqti bilan soat 5:00 gacha).
- **Har bir so'rovga 10 ms protsessor vaqti:**
  - parol PBKDF2 (60 000 iteratsiya) bilan shifrlanadi;
  - AI ovozi MP3 ga siqilmasdan WAV formatida saqlanadi;
  - reyting va o'qituvchi paneli barcha ma'lumotni bir necha umumiy so'rov bilan oladi.

  Agar baribir "Exceeded CPU limit" xatosi chiqsa, `server/auth.mjs` faylidagi `PBKDF2_ITER` qiymatini kamaytiring.
- **D1: 5 GB, R2: 10 GB** (bepul).

## Netlify (zaxira versiya)

Netlify versiyasi o'zgarishsiz saqlangan:
- server ulagichi: `netlify/functions/api.mjs`;
- sozlamalar: `netlify.toml`;
- ma'lumotlar: Netlify Blobs.

Ikkala versiya ham bitta umumiy server kodidan (`server/` papka) foydalanadi.

Netlify kreditlari tejalishi uchun Netlify'dagi saytda **Stop builds** ni yoqing yoki saytni GitHub'dan uzing. Aks holda GitHub'ga har bir push Netlify'da ham deploy qiladi (har biri 15 kredit).

## Lokal sinov (Cloudflare muhitida)

```bash
npm install
npx wrangler dev --port 8788 --var TEACHER_CODE:ustoz-local --var JWT_SECRET:local-secret-1234567890
# http://localhost:8788
```

Agar loyiha Cloudflare **Pages** sifatida yaratilgan bo'lsa, `functions/api/[[path]].js` ulagichi ishlaydi. Bu holda bog'lanishlarni (D1 — `DB`, R2 — `FILES`) va `nodejs_compat` bayrog'ini panelda qo'lda qo'shish kerak.


## Xavfsizlik (qisqacha)

- **Test javoblari serverda.** Test savollari brauzerga faqat savol va variantlar bilan keladi; to'g'ri javob kaliti `server/quiz-keys.mjs` da (faqat server). Test serverda baholanadi (`POST /api/quiz/:mavzu`), ball va urinishlarni talaba o'zgartira olmaydi. Testlarni yangilash: `scripts/tests-src/NN.json` ni tahrirlab, `python3 scripts/apply-tests.py` ni ishga tushiring.
- **O'qituvchi kodi (`TEACHER_CODE`) xavfli.** Kod tarqalsa, istalgan odam o'qituvchi bo'lib, barcha talaba ma'lumotini ko'radi. Tavsiya: Brevo (`BREVO_API_KEY`, `MAIL_FROM`) ni ulab, `TEACHER_CODE` ni **o'chirib qo'ying** (Worker → Settings → Variables and Secrets → o'chirish). O'qituvchilar emaillari `TEACHER_EMAILS` da yoki panelda qo'shiladi.
- **Cheklovlar.** Kirish: bir email + bir manzil bo'yicha 15 daqiqada 8 ta xato; tasdiqlash kodi: 5 urinish (atomik hisob); o'qituvchi kodi: soatiga 30 ta umumiy xato. Hisoblagichlar D1 `counters` jadvalida.
- **Sessiya.** Chiqishda (logout) token serverda bekor qilinadi; parol o'zgarganda boshqa qurilmalardagi kirishlar to'xtaydi; himoyalangan fayllar uchun ham 60 soniyada qayta tekshiriladi.
- **Sarlavhalar.** CSP, HSTS, X-Frame-Options va boshqalar `worker/index.js` va `public/_headers` da (ikkalasini birga yangilang). Yangi tashqi manba (masalan, boshqa video xizmat) qo'shsangiz, CSP ga ham qo'shing.
- **GitHub repozitoriy Private bo'lsin** (Settings → Danger Zone → Change visibility).
- **Ma'lum cheklov:** test qayta topshirilganda to'g'ri javoblar ko'rsatiladi, shuning uchun eng yaxshi ball qayta urinishda oshishi mumkin; "o'qildi", "metod bajarildi" kabi belgilarni talaba o'zi belgilaydi (reytingda kichik ulush).

- **Kirish sahifalari ajratilgan.** Talabalar `#/login` va `#/register` da faqat talaba panelini ko'radi. O'qituvchilar uchun alohida (hech qayerda havola qilinmagan) manzillar: `#/ustoz` (kirish), `#/ustoz/register` (ro'yxatdan o'tish), `#/ustoz/forgot` (parolni tiklash). Masalan: `https://<sayt>/#/ustoz`.
- **Test qayta topshirilganda** to'g'ri javoblar ko'rsatilmaydi (server qaytarmaydi), faqat to'g'ri/noto'g'ri belgisi beriladi; to'g'ri javoblar birinchi urinishdan keyin ko'rinadi.

## Baza to'lib qolsa: «D1_ERROR: Exceeded maximum DB size»

Bepul tarifda D1 bazasi 500 MB bilan cheklangan. Agar R2 ulanmagan bo'lsa, talabalar yuklagan Word fayllar, taqdimot va video bo'laklari shu bazaning ichida saqlanadi (hajmi ~1,33 baravar ko'proq) va baza tez to'ladi.

1. O'qituvchi paneli → **Ombor (xotira)**: nima qancha joy egallaganini ko'ring va «Ortiqcha fayllarni o'chirish» (topshirilmagan, uzilib qolgan yuklashlar) hamda «AI ovoz keshini tozalash» tugmalarini bosing. Topshirilgan ishlarga tegilmaydi.
2. Doimiy yechim — **R2** (10 GB bepul): Cloudflare paneli → **R2 Object Storage** ni yoqing. `wrangler.jsonc` da R2 ulangan (`FILES` → `mikro-files`, deploy paytida bucket o'zi yaratiladi). Yangi fayllar R2 ga tushadi, «Ombor» sahifasidagi «R2 ga ko'chirish» tugmasi eski fayllarni ko'chirib, bazani bo'shatadi.
3. Muqobil: Cloudflare Workers Paid ($5/oy) — D1 limiti ancha katta.
