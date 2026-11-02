// Tadbirkorlik asoslari (141-23, 142-23): ma'ruza mashg'uloti uchun «Biznes-reja» topshirig'i — 10 ball (ma'ruzaning 30 balidan).
// Topshiriq o'qituvchi topshiriqlari tizimida (tasks.mjs) ishlaydi: talaba Word faylini yuklaydi, AI namunaviy biznes-rejalar asosida 10 ballik tizimda tekshiradi,
// o'qituvchi bahoni o'zgartira oladi. Topshiriq birinchi marta so'ralganda avtomatik yaratiladi va «Topshiriq yaratish» bo'limida tahrirlanadi.
export const BIZPLAN_ID = "bizplan-tb-1";
export const BIZPLAN_SUBJECT = "tadbirkorlik";
export const BIZPLAN_GROUPS = ["141-23", "142-23"];
export const BIZPLAN_MAX = 10;

const REFERENCE = `NAMUNAVIY BIZNES-REJALAR (5 ta namuna: 3D-printer xizmati, bolalar bog'chasi, bosmaxona, game club, gilam yuvish xizmati). Ularning UMUMIY TUZILISHI va mantig'i — baholash uchun etalon:

1) LOYIHANI TASHKIL QILISH: loyiha nomi; qanday xizmat/mahsulot taklif qilinadi; yer/xona maydoni (kv.m); loyiha summasi = kredit mablag'i + o'z mablag'i; moliyalashtirish obyektlari (uskuna, jihoz, ta'mir) va ular qiymati; ish haqi, ijara, kommunal xarajatlar uchun aylanma mablag'; kerakli ruxsatnoma/litsenziya haqida eslatma.
   Misollar: gilam yuvish — maydon 60 kv.m, loyiha 428,6 mln so'm (kredit 300 mln + o'z 128,6 mln); 3D-printer — 70 kv.m, 130 mln (kredit 100 mln); bosmaxona — 200 kv.m, 700 mln (kredit 400 mln); bolalar bog'chasi — 500 kv.m, 1,3 mlrd (kredit 1 mlrd); game club — 60 kv.m, 528,6 mln (kredit 370 mln + o'z 158,6 mln). Kredit muddati odatda 5–7 yil, yillik foiz ~15%.

2) XIZMAT KO'RSATISH TURLARI: har bir xizmat nomi, 1 kunda xizmat ko'rsatiladigan mijozlar/birlik soni va bir birlik narxi (so'm). Masalan, gilam yuvish: kuniga 120 kv.m, narxi 10 000 so'm/kv.m.

3) XIZMAT TUSHUMI REJASI: 1 kunlik, 1 oylik va 1 yillik tushum. To'g'ri hisob: kunlik hajm × narx = kunlik tushum; kunlik × ish kunlari (oyiga ~30 yoki 25–26) = oylik; oylik × 12 = yillik (gilam yuvish: 1 200 000 → 36 000 000 → 432 000 000 so'm).

4) BIR YILLIK XARAJATLAR: xomashyo/materiallar, elektr, suv, chiqindi, internet, ijara, reklama, amortizatsiya va h.k. — har biri summasi bilan, oxirida JAMI (gilam yuvish: 146,8 mln so'm).

5) SHTAT JADVALI VA ISH HAQI: lavozim, soni, bitta xodim oylik maoshi, umumiy oylik, yillik maosh, ijtimoiy soliq (ish haqi fondidan 12%), jami ish haqi xarajati. (Gilam yuvish: direktor 1 × 5 mln + ishchi 3 × 3 mln; yillik 168 mln + 20,16 mln soliq = 188,16 mln.)

6) KREDIT SHARTLARI VA QAYTARISH JADVALI: kredit summasi, foiz stavkasi, muddat, imtiyozli davr; yillar yoki oylar kesimida asosiy qarz to'lovi va foiz to'lovi, jami to'lov (foiz qoldiq qarzdan kamayib boradi).

7) MOLIYAVIY KO'RSATKICHLAR, FOYDA VA ZARARLAR HISOBI: yillar bo'yicha tushum − xarajatlar (materiallar, ish haqi, ijtimoiy soliq, amortizatsiya, foiz) = soliqqacha foyda; soliq; sof foyda.

8) PUL OQIMI (kredit davrida): yillar bo'yicha kirim (tushum) va chiqim (xarajat, kredit va foiz to'lovlari), oxirgi qoldiq — kredit to'lovlari pul oqimi bilan qoplanishini ko'rsatadi.

9) MOLIYAVIY HISOBOT / XULOSA: loyiha o'zini qoplash muddati, foydalilik, kredit qaytarish imkoniyati haqida xulosa.

BAHOLASHDA MUHIM: namunaga mexanik ko'chirma emas, talabaning O'Z loyihasi va O'Z hisob-kitoblari kutiladi; barcha jadvallar bir-biriga mos (tushum = hajm × narx, jami yig'indilar to'g'ri, ish haqi + 12% ijtimoiy soliq, kredit foizi qoldiqdan, foyda = tushum − xarajat) bo'lishi shart.`;

export function bizplanTask(createdBy = "tizim") {
  const now = new Date().toISOString();
  return {
    id: BIZPLAN_ID,
    subject: BIZPLAN_SUBJECT,
    title: "Biznes-reja (ma'ruza mashg'uloti, 10 ball)",
    description: `O'zingiz tanlagan xizmat yo'nalishi bo'yicha TO'LIQ BIZNES-REJA tayyorlang va Word (.docx) faylida yuklang. Namuna sifatida 5 ta biznes-reja berilgan (3D-printer xizmati, bolalar bog'chasi, bosmaxona, game club, gilam yuvish): ulardagi tuzilishga amal qiling, lekin o'z loyihangiz, narxlaringiz va hisob-kitoblaringiz bo'lsin.

Biznes-reja quyidagi bo'limlardan iborat bo'lishi shart:
1. Kirish va loyihani tashkil qilish: loyiha nomi, g'oya va xizmat tavsifi, joylashuv va maydon (kv.m), loyiha summasi (kredit va o'z mablag'i), moliyalashtirish obyektlari (uskuna, jihoz) va ularning qiymati, kerak bo'lsa litsenziya/ruxsatnoma.
2. Xizmat ko'rsatish turlari: har bir xizmat uchun kunlik hajm va narx.
3. Xizmatdan tushadigan tushum rejasi: kunlik, oylik va yillik tushum (hajm × narx × ish kunlari).
4. Bir yillik xarajatlar: xomashyo/materiallar, kommunal, ijara, reklama, amortizatsiya va boshqalar — jami bilan.
5. Shtat jadvali va ish haqi xarajatlari: lavozimlar, soni, maosh, ijtimoiy soliq (12%).
6. Kredit shartlari va qaytarish jadvali: summa, foiz, muddat, imtiyozli davr; yillar kesimida asosiy qarz va foiz to'lovlari.
7. Foyda va zararlar hisobi (kredit davri bo'yicha) va pul oqimi.
8. Xulosa: loyiha o'zini qoplash muddati va kredit qaytarish imkoniyati.

Talablar: barcha raqamlar o'zaro mos bo'lsin (jadvallar yig'indisi, tushum = hajm × narx va h.k.); hajm kamida 5–8 bet; jadvallar Word jadvali ko'rinishida bo'lsin. Boshqa talabadan ko'chirilgan ish past baholanadi. Javobni 3 martagacha yuborish va AI tekshiruvidan o'tkazib, ishni yaxshilash mumkin.`,
    forms: [],
    groups: BIZPLAN_GROUPS,
    semester: 0,
    due: "",
    allowLate: true,
    max: BIZPLAN_MAX,
    mode: "file",
    published: true,
    aiEnabled: true,
    criteria: [
      { key: "c1", name: "Biznes-reja tuzilishi va to'liqligi (barcha bo'limlar)", max: 20 },
      { key: "c2", name: "Loyiha va xizmatlar tavsifi, g'oyaning real va asosli ekani", max: 15 },
      { key: "c3", name: "Tushum va xarajat hisob-kitoblarining to'g'riligi hamda o'zaro mosligi", max: 25 },
      { key: "c4", name: "Shtat jadvali, ish haqi va ijtimoiy soliq hisobi", max: 10 },
      { key: "c5", name: "Kredit qaytarish jadvali, foyda-zarar va pul oqimi tahlili", max: 20 },
      { key: "c6", name: "O'z ijodi, rasmiylashtirish va xulosaning sifati", max: 10 },
    ],
    rubric: "Ishni namunaviy biznes-rejalar (NAMUNAVIY JAVOB bo'limi) bilan solishtirib tekshir: barcha 8 bo'lim bormi; jadvallardagi sonlar mantiqan mos kelishi shart (tushum = kunlik hajm × narx × ish kunlari; xarajatlar yig'indisi; ish haqi fondiga 12% ijtimoiy soliq; kredit foizi qoldiq qarzdan; foyda = tushum − xarajat; pul oqimi qoldig'i). Hisob-kitoblarni o'zing qayta hisobla va xatolarni 'checks' da ko'rsat. Namunani mexanik ko'chirgan (xizmat, narx va raqamlari aynan namunadagidek) ishga 'O'z ijodi' mezonida past ball qo'y. Loyiha real va hajmi mantiqiy bo'lsin (masalan, maydon va uskuna soniga mos kunlik hajm). Hajmi juda kichik (1–2 bet) yoki bo'limlari yetishmaydigan ishga yuqori ball berma.",
    reference: REFERENCE,
    createdBy,
    createdAt: now,
    updatedAt: now,
    system: "bizplan",
  };
}
