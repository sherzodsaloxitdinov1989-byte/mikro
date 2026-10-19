// Avtomatik yaratilgan (scripts/apply-practice.py --subject mikro2): amaliy mashg'ulotlar — masalalar (sonli javob bilan) va ochiq topshiriqlar.
// Manba: scripts/practice-src/mikro2/NN.json. Himoyalangan ma'lumot (yechimlar): kirmagan foydalanuvchida bo'sh bo'ladi.
export const AUTO_PRACTICE = {
 "1": {
  "goal": "Iqtisodiy model, ekzogen va endogen o‘zgaruvchilar tushunchalarini mustahkamlash; bozor muvozanati va narx nazoratini tahlil qilish, byudjet chizig‘ini qurish va uning o‘zgarishlarini baholash ko‘nikmalarini shakllantirish.",
  "concepts": [
   "Cheklangan resurslar va muqobil xarajat",
   "Pozitiv va normativ tahlil",
   "Iqtisodiy model: ekzogen va endogen o‘zgaruvchilar, ceteris paribus",
   "Rezervatsion narx va Pareto samaradorlik",
   "Byudjet to‘plami va byudjet chizig‘i",
   "Miqdoriy soliq, subsidiya va blokli tarif"
  ],
  "source": "Soy M., Saloxitdinov Sh. Mikroiqtisodiyot-2, 1-bob; I-ilova (A1), V-ilova (V.1)",
  "tasks": [
   {
    "id": "mm1-p1",
    "title": "Bozor muvozanati va narxning yuqori chegarasi",
    "text": "Bozorda talab funksiyasi Qd = 300 − 6P, taklif funksiyasi Qs = 4P − 50 (P — narx, ming so‘m; Q — dona). Muvozanat narx va miqdorni toping. Davlat narxning yuqori chegarasini P = 30 ming so‘m qilib belgilasa, bozorda qancha birlik taqchillik yuzaga keladi?",
    "fields": [
     {
      "label": "Muvozanat narxi",
      "value": 35,
      "unit": "ming so‘m"
     },
     {
      "label": "Muvozanat miqdori",
      "value": 90,
      "unit": "dona"
     },
     {
      "label": "Taqchillik hajmi",
      "value": 50,
      "unit": "dona"
     }
    ],
    "solution": "Qd = Qs: 300 − 6P = 4P − 50 → 350 = 10P → P* = 35. Q* = 300 − 6·35 = 90 (Qs = 4·35 − 50 = 90). P = 30 da: Qd = 300 − 180 = 120, Qs = 4·30 − 50 = 70. Taqchillik = 120 − 70 = 50.",
    "formula": "Qd = Qs; taqchillik = Qd(Pmax) − Qs(Pmax)",
    "note": "Narx muvozanatdan past belgilangani uchun talab taklifdan oshadi: iste’molchilar ko‘proq xohlaydi, ishlab chiqaruvchilar kamroq taklif qiladi."
   },
   {
    "id": "mm1-p2",
    "title": "Byudjet chizig‘i va narx o‘zgarishi",
    "text": "Iste’molchining daromadi m = 2 400 ming so‘m, birinchi tovar narxi p1 = 30 ming so‘m, ikkinchisiniki p2 = 40 ming so‘m. Byudjet chizig‘ining koordinata o‘qlari bilan kesishish nuqtalarini (x1 max, x2 max) va og‘ishini toping. Keyin p2 = 60 ming so‘mga oshsa, ikkinchi tovar bo‘yicha maksimal miqdor va yangi og‘ish qanday bo‘ladi?",
    "fields": [
     {
      "label": "x1 max (dastlab)",
      "value": 80,
      "unit": "birlik"
     },
     {
      "label": "x2 max (dastlab)",
      "value": 60,
      "unit": "birlik"
     },
     {
      "label": "x2 max (p2=60 da)",
      "value": 40,
      "unit": "birlik"
     },
     {
      "label": "Yangi og‘ish",
      "value": -0.5,
      "unit": ""
     }
    ],
    "solution": "Byudjet chizig‘i: 30x1 + 40x2 = 2400. x1 max = 2400/30 = 80, x2 max = 2400/40 = 60, og‘ish = −p1/p2 = −30/40 = −0,75. p2 = 60 da: x2 max = 2400/60 = 40, og‘ish = −30/60 = −0,5; x1 max = 80 o‘zgarmaydi, chiziq gorizontal o‘q kesishish nuqtasi atrofida ichkariga buriladi.",
    "formula": "p1x1 + p2x2 = m; og‘ish = −p1/p2",
    "note": "Bir tovar narxi oshganda byudjet chizig‘i parallel siljimaydi, balki narxi o‘zgarmagan tovar o‘qidagi nuqta atrofida buriladi."
   },
   {
    "id": "mm1-p3",
    "title": "Blokli tarif: siniq byudjet chizig‘i",
    "text": "Iste’molchi birinchi tovarning dastlabki 10 birligini 20 so‘mdan, keyingi birliklarini 30 so‘mdan sotib oladi. Ikkinchi tovar narxi p2 = 10 so‘m, daromad m = 600 so‘m. Byudjet chizig‘ining sinish nuqtasi koordinatalarini (x1, x2) va birinchi tovarning maksimal miqdorini toping.",
    "fields": [
     {
      "label": "Sinish nuqtasida x1",
      "value": 10,
      "unit": "birlik"
     },
     {
      "label": "Sinish nuqtasida x2",
      "value": 40,
      "unit": "birlik"
     },
     {
      "label": "x1 max",
      "value": 23.33,
      "unit": "birlik"
     }
    ],
    "solution": "x1 ≤ 10: 20x1 + 10x2 = 600. x1 = 10 da 200 so‘m sarflanadi, x2 = (600 − 200)/10 = 40 → sinish nuqtasi (10; 40). x1 > 10: 200 + 30(x1 − 10) + 10x2 = 600, ya’ni 30x1 + 10x2 = 700. x2 = 0 da x1 max = 700/30 ≈ 23,33.",
    "formula": "x1 ≤ 10: 20x1 + 10x2 = m; x1 > 10: 200 + 30(x1 − 10) + 10x2 = m",
    "note": "Tarif chekli narxni 20 dan 30 ga oshirgani uchun chiziq sinish nuqtasidan keyin tikroq bo‘ladi (og‘ish −2 dan −3 ga o‘tadi)."
   },
   {
    "id": "mm1-p4",
    "title": "Miqdoriy soliq va paushal subsidiya",
    "text": "Iste’molchining daromadi 2 400 ming so‘m, narxlar p1 = 40 va p2 = 60 ming so‘m. Birinchi tovarga 10 ming so‘m miqdoriy soliq joriy etildi va bir vaqtda iste’molchiga 300 ming so‘m paushal subsidiya berildi. Yangi byudjet chizig‘ida p1 ning yangi qiymatini, daromadni hamda x1 max va x2 max ni toping.",
    "fields": [
     {
      "label": "Yangi p1",
      "value": 50,
      "unit": "ming so‘m"
     },
     {
      "label": "Yangi daromad",
      "value": 2700,
      "unit": "ming so‘m"
     },
     {
      "label": "x1 max",
      "value": 54,
      "unit": "birlik"
     },
     {
      "label": "x2 max",
      "value": 45,
      "unit": "birlik"
     }
    ],
    "solution": "Soliqdan keyin iste’molchi uchun p1 = 40 + 10 = 50, subsidiya bilan daromad m = 2400 + 300 = 2700. Yangi byudjet chizig‘i: 50x1 + 60x2 = 2700. x1 max = 2700/50 = 54, x2 max = 2700/60 = 45. Dastlabki chiziqda x1 max = 60, x2 max = 40 edi.",
    "formula": "(p1 + t)x1 + p2x2 = m + S",
    "note": "Miqdoriy soliq birinchi tovar bo‘yicha og‘ishni tikroq qiladi, paushal subsidiya esa chiziqni og‘ishini o‘zgartirmay parallel tashqariga siljitadi."
   },
   {
    "id": "mm1-p5",
    "title": "Kvartiralar bozori: rezervatsion narx",
    "text": "Kvartiralar bozorida 100 ta kvartira bor. 300 nafar talabaning rezervatsion narxlari 500 dan 2 000 ming so‘mgacha bir tekis taqsimlangan. Raqobatli muvozanat narxini toping. Barcha kvartiralar bitta egaga tegishli bo‘lsa, u yagona narx belgilab nechta kvartirani ijaraga beradi va tushumi qancha bo‘ladi?",
    "fields": [
     {
      "label": "Raqobatli narx",
      "value": 1500,
      "unit": "ming so‘m"
     },
     {
      "label": "Monopolist ijaraga beradigan kvartiralar",
      "value": 100,
      "unit": "dona"
     },
     {
      "label": "Monopolist tushumi",
      "value": 150000,
      "unit": "ming so‘m"
     }
    ],
    "solution": "Rezervatsion narxi p dan yuqori talabalar soni: Qd(p) = 300·(2000 − p)/1500 = 400 − 0,2p. Raqobat: Qd = 100 → 400 − 0,2p = 100 → p* = 1500. Monopolist: tushum p(400 − 0,2p) p = 1000 da maksimal bo‘lardi (talab 200), ammo kvartiralar atigi 100 ta, shu sababli sotish p ≥ 1500 da mumkin. Demak narx 1500, 100 ta kvartira beriladi, tushum = 1500·100 = 150 000.",
    "formula": "Qd(p) = 300·(2000 − p)/1500; Qd = 100",
    "note": "Taklif cheklangan (vertikal) bo‘lgani uchun monopolist ham raqobatli narxni belgilaydi va barcha kvartiralarni ijaraga beradi."
   }
  ],
  "open": [
   "Kvartiralar bozori modelida qaysi o‘zgaruvchilar ekzogen, qaysilari endogen? Modelni O‘zbekistonning biror shahri uchun moslashtiring. Nima uchun Pareto samaradorlik adolat mezoni bo‘la olmaydi?",
   "Mobil operatorlarning paketli tariflari (abonent to‘lovi + paket + paketdan ortiq trafik narxi) byudjet to‘plamini qanday o‘zgartiradi? Bitta tarif rejasini tanlab, unga mos siniq byudjet chizig‘ini chizing. Elektr energiyasining blokli tarifi (birinchi 150 kVt·soat 600 so‘mdan, ortig‘i 900 so‘mdan; daromad 4 mln so‘m) uchun 250 kVt·soat iste’molda o‘rtacha va chekli narxni hisoblang.",
   "Inflatsiya sharoitida ish haqi narxlardan orqada qolsa, byudjet chizig‘i qanday siljiydi? «Barcha narxlar va daromad ikki baravar oshsa, hech narsa o‘zgarmaydi» degan fikrga qo‘shilasizmi? Pensionerlar misolida muhokama qiling. Oziq-ovqat narxlari 10 foizga oshganda o‘z oilangiz bir oylik byudjet chizig‘i qanday o‘zgarishini ko‘rsating.",
   "«Ijara narxi nazorati» munozarasi. Guruh ikkiga bo‘linadi: biri talabalar turar joyida ijara narxini cheklashni, ikkinchisi yangi turar joylar qurilishini rag‘batlantirishni himoya qiladi. Har bir guruh o‘z pozitsiyasini talab-taklif grafigi va Pareto samaradorlik tushunchasi asosida asoslaydi. Yakunda pozitiv va normativ argumentlarni ajrating.",
   "Qd = 200 − 5P va Qs = −40 + 7P bo‘lgan bozor uchun muvozanatni toping, so‘ng narxning yuqori chegarasi 15 va quyi chegarasi 25 bo‘lgan holatlarni grafikda tasvirlab, oqibatlarini tahlil qiling. Esse mavzulari (birini tanlang): «Iqtisodiy modellar reallikni soddalashtiradi: bu ularning kuchimi yoki zaifligimi?»; «Narx nazorati qachon oqlanishi mumkin?»; «Bozor narxlari axborot uzatish tizimi sifatida: F. fon Hayek g‘oyasining raqamli iqtisodiyotdagi ahamiyati»."
  ],
  "refs": [
   "Ekzogen o‘zgaruvchilar modelga tashqaridan beriladi (kvartiralar soni, talabalar daromadi, shahar markaziga yaqinlik, soliqlar); endogen o‘zgaruvchilar model ichida aniqlanadi (ijara narxi, ijaraga olinayotgan kvartiralar miqdori). Moslashtirishda shahar (masalan, Toshkent yoki Samarqand) bo‘yicha kvartiralar soni va talabalar rezervatsion narxlarini real ma’lumotlardan oling. Pareto samarali taqsimot adolatli bo‘lishi shart emas: bir kishi hamma narsani olgan taqsimot ham Pareto samarali bo‘lishi mumkin, chunki samaradorlik kimningdir ahvolini yomonlashtirmay boshqasiniki yaxshilanmasligini bildiradi, taqsimot adolatini emas.",
   "Paketli tarif byudjet to‘plamini siniq (pog‘onali) qiladi: abonent to‘lovi daromadni qisqartiradi, paket doirasida chekli narx nolga yaqin bo‘ladi, paketdan ortiq trafikda esa chekli narx keskin oshadi, chiziq sinish nuqtasida tikroq bo‘ladi. Elektr masalasi: to‘lov = 150·600 + 100·900 = 90 000 + 90 000 = 180 000 so‘m; o‘rtacha narx = 180 000/250 = 720 so‘m, chekli narx = 900 so‘m. O‘rtacha narx chekli narxdan past, chunki dastlabki birliklar arzonroq narxda olingan.",
   "Ish haqi narxlardan sekin o‘ssa, real daromad m/p kamayadi va byudjet chizig‘i parallel ichkariga siljiydi. Barcha narxlar va daromad bir xil nisbatda oshsa, byudjet chizig‘i (p1x1 + p2x2 = m tenglamaning ikki tomonini bir songa ko‘paytirish) o‘zgarmaydi, ya’ni iste’molchi imkoniyatlari o‘sha-o‘sha. Biroq pensionerlarda pensiya narxlar o‘sishidan keyin indekslansa yoki daromadi qat’iy bo‘lsa, ular uchun real daromad kamayadi, shuning uchun «hech narsa o‘zgarmaydi» faqat barcha narxlar va daromad aynan teng nisbatda o‘sganida to‘g‘ri bo‘ladi. Oziq-ovqat narxi 10 foizga oshsa, oziq-ovqat o‘qidagi kesishish nuqtasi m/(1,1·p) ga tushadi va chiziq boshqa xarajatlar o‘qidagi nuqta atrofida buriladi.",
   "Ijara narxini cheklashni himoya qiluvchilar muvozanatdan past narx talabalar uchun arzonlik beradi, deydi, ammo talab taklifdan oshib taqchillik, navbat va norasmiy bozor yuzaga kelishini, kvartiralar sifati pasayishini hisobga olishlari kerak. Qurilishni rag‘batlantirish tarafdorlari taklifni oshirib narxni pasaytirish mumkinligini ko‘rsatadi (taklif egri chizig‘i o‘ngga siljiydi), lekin qisqa muddatda taklif vertikal ekanini e’tiborga olishlari kerak. Pareto samaradorlik nuqtai nazaridan narx nazorati muvozanat bitimlarining bir qismini yo‘qotadi. Pozitiv argument: «Narx P* dan past bo‘lsa, taqchillik paydo bo‘ladi». Normativ argument: «Talabalar uchun ijara arzon bo‘lishi kerak».",
   "Muvozanat: 200 − 5P = −40 + 7P → 240 = 12P → P* = 20, Q* = 100. P = 15 da (yuqori chegara): Qd = 125, Qs = 65, taqchillik 60. P = 25 da (quyi chegara): Qd = 75, Qs = 135, ortiqcha taklif 60. Chegara faqat muvozanatdan past (yuqori chegara) yoki yuqori (quyi chegara) bo‘lganda amal qiladi. Grafikda talab va taklif egri chiziqlari, P = 15 va P = 25 gorizontal chiziqlari hamda ular orasidagi gorizontal masofa (taqchillik yoki ortiqcha) ko‘rsatilishi kerak. Esse uchun: aniq tezis, kamida ikki argument, qarshi fikr va xulosa bo‘lsin; pozitiv va normativ fikrlarni ajrating."
  ]
 },
 "2": {
  "goal": "Afzal ko‘rish aksiomalari, befarqlik chiziqlari va chekli almashtirish normasi (MRS) tushunchalarini mustahkamlash hamda iste’molchining optimal tanlovini Lagranj usulida topish ko‘nikmasini shakllantirish.",
  "concepts": [
   "afzal ko‘rish aksiomalari (to‘liqlik, refleksivlik, tranzitivlik)",
   "befarqlik chizig‘i va befarqlik kartasi",
   "chekli almashtirish normasi (MRS)",
   "naflilik funksiyasi (ordinal va kardinal)",
   "chekli naflilik va Gossen qonunlari",
   "optimal tanlov va Lagranj ko‘paytuvchisi"
  ],
  "source": "Soy M., Saloxitdinov Sh. Mikroiqtisodiyot-2, 2-bob; I-ilova (A2), V-ilova (V.2)",
  "tasks": [
   {
    "id": "mm2-p1",
    "title": "Kobb–Duglas iste’molchisi va Gossenning ikkinchi qonuni",
    "text": "Iste’molchining naflilik funksiyasi u = x₁^0,25 · x₂^0,75, narxlar p₁ = 5 va p₂ = 15 (ming so‘m), daromad m = 400 ming so‘m. Optimal to‘plamni toping va optimumda MU₁/p₁ = MU₂/p₂ tengligi bajarilishini tekshiring (MU₁/p₁ qiymatini yozing).",
    "fields": [
     {
      "label": "Optimal x₁*",
      "value": 20,
      "unit": "birlik"
     },
     {
      "label": "Optimal x₂*",
      "value": 20,
      "unit": "birlik"
     },
     {
      "label": "MU₁/p₁ = MU₂/p₂",
      "value": 0.05,
      "unit": ""
     }
    ],
    "solution": "Kobb–Duglas: x₁* = 0,25·400/5 = 20; x₂* = 0,75·400/15 = 20. MU₁ = 0,25·(x₂/x₁)^0,75 = 0,25; MU₂ = 0,75·(x₁/x₂)^0,25 = 0,75. MU₁/p₁ = 0,25/5 = 0,05; MU₂/p₂ = 0,75/15 = 0,05 — tenglik bajariladi.",
    "formula": "x₁* = a·m/p₁, x₂* = (1−a)·m/p₂; MU₁/p₁ = MU₂/p₂",
    "note": "Darslikdagi javob (20; 20) qayta hisoblash bilan tasdiqlandi."
   },
   {
    "id": "mm2-p2",
    "title": "Mukammal to‘ldiruvchilar: choy va qand",
    "text": "Iste’molchi bir piyola choyni faqat ikki bo‘lak qand bilan ichadi, boshqa nisbatda qoniqish olmaydi: u = min{2x₁, x₂}, bunda x₁ — choy piyolalari, x₂ — qand bo‘laklari. Narxlar p₁ = 4 va p₂ = 2 (ming so‘m), daromad m = 80 ming so‘m. Optimal to‘plamni toping.",
    "fields": [
     {
      "label": "Choy x₁*",
      "value": 10,
      "unit": "piyola"
     },
     {
      "label": "Qand x₂*",
      "value": 20,
      "unit": "bo‘lak"
     }
    ],
    "solution": "Optimumda sinish nuqtasi: 2x₁ = x₂. Byudjet: 4x₁ + 2·(2x₁) = 80 → 8x₁ = 80 → x₁* = 10, x₂* = 20.",
    "formula": "2x₁ = x₂; p₁x₁ + p₂x₂ = m",
    "note": "Mukammal to‘ldiruvchilarda ichki urinish sharti (MRS = p₁/p₂) emas, balki befarqlik chizig‘ining sinish nuqtasi ishlaydi."
   },
   {
    "id": "mm2-p3",
    "title": "Kvazichiziqli naflilik: daromad o‘zgarganda tanlov",
    "text": "Iste’molchining naflilik funksiyasi u = 30·ln x₁ + x₂, narxlar p₁ = 5 va p₂ = 1, daromad m = 200. a) Optimal to‘plamni toping. b) Daromad m = 100 ga tushsa, optimal to‘plam qanday bo‘ladi?",
    "fields": [
     {
      "label": "m = 200 da x₁*",
      "value": 6,
      "unit": "birlik"
     },
     {
      "label": "m = 200 da x₂*",
      "value": 170,
      "unit": "birlik"
     },
     {
      "label": "m = 100 da x₁*",
      "value": 6,
      "unit": "birlik"
     },
     {
      "label": "m = 100 da x₂*",
      "value": 70,
      "unit": "birlik"
     }
    ],
    "solution": "MRS: MU₁/MU₂ = (30/x₁)/1 = p₁/p₂ = 5 → x₁* = 6. Bu x₁ ga 5·6 = 30 sarflanishini bildiradi. a) x₂* = 200 − 30 = 170. b) x₁* = 6 o‘zgarmaydi (m ≥ 30 bo‘lgani uchun ichki yechim saqlanadi), x₂* = 100 − 30 = 70.",
    "formula": "30/x₁ = p₁/p₂; x₂ = m − p₁x₁",
    "note": "Kvazichiziqli funksiyada daromad samarasi x₁ bo‘yicha nolga teng: barcha daromad o‘zgarishi x₂ ga tushadi."
   },
   {
    "id": "mm2-p4",
    "title": "Daromad solig‘i va miqdoriy soliqni solishtirish",
    "text": "Iste’molchining naflilik funksiyasi u = √(x₁·x₂), narxlar p₁ = p₂ = 1, daromad m = 16. a) x₁ ga birlik boshiga t = 1 miqdoriy soliq joriy etildi (iste’molchi uchun p₁ = 2 bo‘ladi). Davlat tushumini va iste’molchi naflilik darajasini toping. b) Davlat xuddi shu tushumni daromad solig‘i orqali olsa, iste’molchi naflilik darajasi qancha bo‘ladi? Qaysi soliq iste’molchi uchun og‘irroq?",
    "fields": [
     {
      "label": "Davlat tushumi",
      "value": 4,
      "unit": ""
     },
     {
      "label": "Naflilik (miqdoriy soliq)",
      "value": 5.66,
      "unit": ""
     },
     {
      "label": "Naflilik (daromad solig‘i)",
      "value": 6,
      "unit": ""
     }
    ],
    "solution": "a) p₁ = 2: x₁ = m/(2p₁) = 16/4 = 4; x₂ = 16/(2·1) = 8. Tushum = t·x₁ = 1·4 = 4. u = √(4·8) = √32 ≈ 5,66. b) Daromad solig‘i 4: m = 12, p₁ = p₂ = 1: x₁ = x₂ = 6, u = 6. 6 > 5,66, demak miqdoriy soliq og‘irroq.",
    "formula": "x₁ = m/(2p₁), x₂ = m/(2p₂); T = t·x₁",
    "note": "Darslikdagi javob (tushum 4; u≈5,66; daromad solig‘ida u = 6) qayta hisoblash bilan tasdiqlandi. Miqdoriy soliq narxlar nisbatini buzadi, daromad solig‘i esa buzmaydi."
   },
   {
    "id": "mm2-p5",
    "title": "Naqd pul yoki oziq-ovqat taloni",
    "text": "Hukumat iste’molchiga yo 200 ming so‘m naqd pul, yo 200 ming so‘mlik oziq-ovqat taloni (faqat oziq-ovqatga sarflanadi) bermoqchi. Iste’molchining naflilik funksiyasi u = x₁^0,2 · x₂^0,8 (x₁ — oziq-ovqat, x₂ — boshqa tovarlar), dastlabki daromadi m = 500 ming so‘m, narxlar 1 ga teng. Har ikki holda optimal to‘plam va naflilikni toping; qaysi shakl afzalligini aniqlang.",
    "fields": [
     {
      "label": "Naqd pul: x₁*",
      "value": 140,
      "unit": "ming so‘m"
     },
     {
      "label": "Naqd pul: x₂*",
      "value": 560,
      "unit": "ming so‘m"
     },
     {
      "label": "Naqd pul: naflilik",
      "value": 424.4,
      "unit": ""
     },
     {
      "label": "Talon: naflilik",
      "value": 416.3,
      "unit": ""
     }
    ],
    "solution": "Naqd pul: m = 700, x₁ = 0,2·700 = 140, x₂ = 0,8·700 = 560; u = 140^0,2·560^0,8 ≈ 424,4. Talon: talonsiz optimum x₁ = 140 < 200, ya’ni talon cheklov bo‘ladi (burchak yechim): x₁ = 200, x₂ = 500; u = 200^0,2·500^0,8 ≈ 416,3. 424,4 > 416,3, demak naqd pul afzal.",
    "formula": "x₁ = 0,2m, x₂ = 0,8m; talon: x₁ ≥ 200",
    "note": "Darslikda ≈424 va ≈416 deb yaxlitlangan; qayta hisoblash 424,4 va 416,3 beradi. Talon faqat talonsiz tanlov talon miqdoridan kichik bo‘lganda cheklaydi."
   }
  ],
  "open": [
   "Kundalik hayotingizda tranzitivlik buzilgan holatlarni eslay olasizmi? Ular nima bilan izohlanadi? “Pul nasosi” argumenti qaysi aksiomaning zarurligini ko‘rsatadi?",
   "Choy va qand, chap va o‘ng poyabzal, ikki brend benzin uchun befarqlik chiziqlarini chizing. Nima uchun MRS ning absolyut qiymati kamayib boradi va bu qaysi farazdan kelib chiqadi?",
   "Naflilikni o‘lchash mumkinmi? Ordinal yondashuv nima uchun yetarli? u = x₁x₂ funksiyasining uchta monoton almashtirishini yozing.",
   "“Mulkchilik samarasi” tajribasi: guruhning yarmiga ramziy buyum (masalan, universitet logotipli ruchka) bering. Egalardan uni sotish uchun minimal narxni, buyumi yo‘qlardan sotib olish uchun maksimal narxni yozma so‘rang. O‘rtacha qiymatlarni solishtiring va natijani standart nazariya hamda Kaneman–Tayler tajribalari bilan muhokama qiling.",
   "“Turtki” (nudge) siyosatining O‘zbekistondagi qo‘llanilishiga misol keltiring (masalan, pensiya jamg‘armasi, organ donorligi, soliq to‘lovlari). Esse: “Turtki” siyosati — erkin tanlovga hurmatmi yoki yashirin manipulyatsiyami?"
  ],
  "refs": [
   "Misol: bir xil narx-sifatda uchta variantni juft-juft taqqoslashda A≻B, B≻C, lekin C≻A (masalan, kontekst yoki mezon o‘zgarishi tufayli). Izoh: tranzitivlik buzilsa, “eng yaxshi” tanlov bo‘lmaydi. “Pul nasosi”: C ga ega odam A ni olish uchun to‘lab almashtiradi, keyin B, so‘ng yana C ga o‘tadi va har safar pul yo‘qotadi — bu tranzitivlik aksiomasi zarurligini ko‘rsatadi.",
   "Choy–qand va chap–o‘ng poyabzal — mukammal to‘ldiruvchilar (L shaklidagi chiziqlar); ikki brend benzin — mukammal o‘rinbosarlar (to‘g‘ri chiziqlar, MRS doimiy). Oddiy tovarlar uchun chiziqlar manfiy og‘ishli, koordinata boshiga qavariq. |MRS| qavariqlik farazi (iste’molchi xilma-xillikni, o‘rtacha to‘plamni afzal ko‘radi) tufayli kamayadi: x₁ ko‘p bo‘lgan sari uning har bir qo‘shimcha birligi uchun kamroq x₂ dan voz kechiladi.",
   "Ordinal yondashuvda faqat to‘plamlar tartibi muhim, naflilik sonlari o‘zi ma’noga ega emas, shuning uchun har qanday monoton o‘suvchi almashtirish bir xil afzal ko‘rishlarni ifodalaydi. Misollar: v = ln x₁ + ln x₂, v = (x₁x₂)², v = 2x₁x₂ + 7 (v = −x₁x₂ esa monoton emas, tartibni teskari qiladi). Tanlov faqat MRS ga bog‘liq bo‘lgani uchun ordinal yondashuv yetarli.",
   "Kutilgan natija: egalar talab qiladigan sotish narxi (WTA) xaridorlarning to‘lashga tayyorligidan (WTP) odatda ancha yuqori bo‘ladi. Standart nazariyada daromad samarasi kichik bo‘lganda WTA ≈ WTP kutiladi, shuning uchun farq “mulkchilik samarasi”ni (yo‘qotishdan ehtiyot bo‘lish) ko‘rsatadi. Muhokamada krujka bilan o‘tkazilgan Kaneman–Tayler tajribasi va 10 talaba tajribasi natijalarini taqqoslang.",
   "Misollar: pensiya jamg‘armasiga avtomatik qo‘shilish (standart variant), organ donorligiga rozilik berish tartibi, soliq to‘lovlari bo‘yicha eslatma xabarlari. Esse reja: turtki erkin tanlovni cheklamaydi, standart variantni o‘zgartirib samaradorlikni oshiradi; lekin axborot assimetriyasi va yashirin ta’sir tufayli manipulyatsiya xavfi bor. Ikkala tomonni asoslab, shaffoflik va chiqib ketish imkoniyatini muhokama qiling."
  ]
 },
 "3": {
  "goal": "Talab funksiyasini keltirib chiqarish, Engel chiziqlari, elastiklik koeffitsientlarini hisoblash va aniqlangan afzal ko‘rish aksiomalarini tekshirish ko‘nikmalarini shakllantirish.",
  "concepts": [
   "talab funksiyasi",
   "Engel chizig‘i",
   "narx bo‘yicha talab elastikligi",
   "kesishgan elastiklik",
   "aniqlangan afzal ko‘rish (WARP)",
   "Laspeyres va Paashe indekslari"
  ],
  "source": "Soy M., Saloxitdinov Sh. Mikroiqtisodiyot-2, 3-bob; I-ilova (A3), V-ilova (V.3)",
  "tasks": [
   {
    "id": "mm3-p1",
    "title": "Doimiy elastiklikli talab",
    "text": "Talab funksiyasi q=50·p^(−1,5)·m^0,8·ps^0,3, bunda p – tovar narxi, m – daromad, ps – o‘rinbosar tovar narxi. Narx 10 foizga, o‘rinbosar tovar narxi 5 foizga, daromad 4 foizga oshsa, talab taxminan necha foizga o‘zgaradi (elastiklik koeffitsientlari yordamida)? Uchala elastiklikning yig‘indisini ham toping.",
    "fields": [
     {
      "label": "Talabning taxminiy o‘zgarishi",
      "value": -10.3,
      "unit": "%"
     },
     {
      "label": "Elastikliklar yig‘indisi (ε+η+ε₁₂)",
      "value": -0.4,
      "unit": ""
     }
    ],
    "solution": "Doimiy elastiklikli funksiyada darajalar elastiklikka teng: ε=−1,5; η=0,8; ε₁₂=0,3. %Δq ≈ ε·%Δp + ε₁₂·%Δps + η·%Δm = −1,5·10 + 0,3·5 + 0,8·4 = −15 + 1,5 + 3,2 = −10,3%. Elastikliklar yig‘indisi: −1,5+0,8+0,3 = −0,4.",
    "formula": "%Δq ≈ ε·%Δp + ε₁₂·%Δps + η·%Δm; nol darajali bir jinslilik: ε+ε₁₂+η=0",
    "note": "Yig‘indi nolga teng emas, ya’ni funksiya bir jinslilik shartini qanoatlantirmaydi va ratsional iste’molchi talabi bo‘la olmaydi. Aniq hisob (1,1^(−1,5)·1,04^0,8·1,05^0,3−1) ≈ −9,2% beradi; taxminiy formula kichik o‘zgarishlar uchun mos."
   },
   {
    "id": "mm3-p2",
    "title": "Chiziqli talab: elastiklik va tushum",
    "text": "Talab funksiyasi Q=300−5P. P=20, P=30 va P=40 da talab miqdorini, narx bo‘yicha elastiklikni va umumiy tushumni toping. Qaysi narxda tushum eng katta?",
    "fields": [
     {
      "label": "P=20 dagi elastiklik",
      "value": -0.5,
      "unit": ""
     },
     {
      "label": "P=30 dagi elastiklik",
      "value": -1,
      "unit": ""
     },
     {
      "label": "P=40 dagi elastiklik",
      "value": -2,
      "unit": ""
     },
     {
      "label": "Eng katta tushum",
      "value": 4500,
      "unit": ""
     }
    ],
    "solution": "ε=−5·P/Q. P=20: Q=200, ε=−100/200=−0,5, TR=4000. P=30: Q=150, ε=−150/150=−1, TR=4500. P=40: Q=100, ε=−200/100=−2, TR=4000. Tushum |ε|=1 bo‘lgan P=30 da maksimal.",
    "formula": "ε = (dQ/dP)·(P/Q); TR = P·Q",
    "note": "Noelastik qismda (|ε|<1) narx oshsa tushum o‘sadi, elastik qismda (|ε|>1) kamayadi; maksimum |ε|=1 nuqtasida."
   },
   {
    "id": "mm3-p3",
    "title": "Yoy elastikligi va tushum",
    "text": "Narx 2 000 so‘mdan 2 400 so‘mga oshganda sotuv 500 dondan 420 donaga kamaydi. O‘rtacha qiymatlar asosida yoy elastikligini hisoblang va tushumning o‘zgarishini toping.",
    "fields": [
     {
      "label": "Yoy elastikligi",
      "value": -0.96,
      "unit": ""
     },
     {
      "label": "Dastlabki tushum",
      "value": 1000000,
      "unit": "so‘m"
     },
     {
      "label": "Yangi tushum",
      "value": 1008000,
      "unit": "so‘m"
     }
    ],
    "solution": "%ΔQ = (420−500)/((500+420)/2) = −80/460 = −0,1739; %ΔP = (2400−2000)/((2000+2400)/2) = 400/2200 = 0,1818; ε = −0,1739/0,1818 ≈ −0,96 (noelastik). Tushum: 2000·500 = 1 000 000; 2400·420 = 1 008 000 so‘m.",
    "formula": "ε_yoy = (ΔQ/Q̄)/(ΔP/P̄)",
    "note": "|ε|<1 bo‘lgani uchun narx oshganda tushum ozgina (8 000 so‘mga) oshdi, bu nazariyaga mos."
   },
   {
    "id": "mm3-p4",
    "title": "Kobb–Duglas talabi va Engel chizig‘i",
    "text": "Naflilik funksiyasi u=x₁^0,6·x₂^0,4, narxlar p₁=30, p₂=20, daromad m=1000. Optimal iste’mol miqdorlarini toping va x₁ uchun Engel chizig‘ini m=k·x₁ ko‘rinishida yozib, k koeffitsientini aniqlang.",
    "fields": [
     {
      "label": "x₁*",
      "value": 20,
      "unit": ""
     },
     {
      "label": "x₂*",
      "value": 20,
      "unit": ""
     },
     {
      "label": "Engel chizig‘i koeffitsienti k",
      "value": 50,
      "unit": ""
     }
    ],
    "solution": "Kobb–Duglas talabi: x₁=0,6·m/p₁ = 0,6·1000/30 = 20; x₂=0,4·m/p₂ = 0,4·1000/20 = 20. Engel chizig‘i: x₁=0,6m/30 = m/50, ya’ni m=50·x₁ (to‘g‘ri chiziq, tovar daromad elastikligi η=1).",
    "formula": "x₁=α·m/p₁, x₂=(1−α)·m/p₂",
    "note": "Gomotetik afzal ko‘rishda Engel chizig‘i koordinata boshidan chiqadigan to‘g‘ri chiziq bo‘ladi."
   },
   {
    "id": "mm3-p5",
    "title": "Laspeyres va Paashe indekslari",
    "text": "Bazis davrda iste’mol to‘plami (10; 20), narxlar (5; 2). Joriy davrda to‘plam (8; 25), narxlar (6; 2,2). Laspeyres va Paashe narx indekslarini toping. Daromad 15 foizga oshgan bo‘lsa (daromad indeksi 1,15), iste’molchi ahvoli haqida xulosa chiqarish mumkinmi?",
    "fields": [
     {
      "label": "Laspeyres indeksi",
      "value": 1.156,
      "unit": ""
     },
     {
      "label": "Paashe indeksi",
      "value": 1.144,
      "unit": ""
     }
    ],
    "solution": "L = (6·10+2,2·20)/(5·10+2·20) = 104/90 = 1,156. P = (6·8+2,2·25)/(5·8+2·25) = 103/90 = 1,144. Daromad indeksi 1,15: 1,15 < L=1,156 – ahvol yaxshilanganligi haqida xulosa chiqmaydi; 1,15 > P=1,144 – yomonlashganligi haqida ham xulosa chiqmaydi. Natija noaniq.",
    "formula": "L = Σp¹x⁰/Σp⁰x⁰; P = Σp¹x¹/Σp⁰x¹; M¹/M⁰ ≥ L bo‘lsa ahvol yaxshilangan, M¹/M⁰ ≤ P bo‘lsa yomonlashgan",
    "note": "Indekslar 3 xona aniqligida yaxlitlangan (1,1556 va 1,1444)."
   }
  ],
  "open": [
   "Muhokama: Sizning oilangiz uchun qaysi tovarlar normal, qaysilari past sifatli? Daromad oshgan sari iste’mol tarkibi qanday o‘zgaradi? Nima uchun Giffen tovarlari juda kam uchraydi?",
   "Muhokama: Mobil internet, non, avtomobil va sigaret talabining narx elastikligini taxminiy baholang va asoslang. Kesishgan elastiklik yordamida «mobil aloqa bozori» chegaralarini qanday aniqlash mumkin?",
   "Interfaol topshiriq «Talab funksiyasini baholaymiz»: kichik guruhlar biror tovar (masalan, universitet oshxonasidagi ovqat) bo‘yicha guruhdoshlari o‘rtasida so‘rov o‘tkazib, turli narxlarda sotib olish niyatini aniqlaydi, ma’lumotlarni Excel’da chiziqli regressiya bilan baholab elastiklikni hisoblaydi va oshxonaga narx siyosati bo‘yicha tavsiya beradi.",
   "Mustaqil ish: biror tovar (benzin, un, mobil internet) uchun rasmiy statistika yoki savdo tarmog‘i ma’lumotlari asosida narx va iste’mol hajmi dinamikasini to‘plang, yoy elastikligini hisoblang va natijani 3.7-rasmdagi xalqaro baholar bilan solishtiring. Shuningdek, narx, daromad va kesishgan elastiklikka uchtadan real misol topib, ularni jadvalda rasmiylashtiring va talqin qiling.",
   "Esse yoki mustaqil tekshiruv: «Iste’mol narxlari indeksi (INI) inflatsiyani nima uchun oshirib ko‘rsatishi mumkin?» mavzusida esse yozing yoki oilangizning uch oylik xarajatlari bo‘yicha (ikki tovar guruhi va o‘rtacha narxlar asosida) WARP bajarilishini tekshiring."
  ],
  "refs": [
   "Normal tovarlar daromad oshganda iste’moli ortadigan (go‘sht, maishiy texnika), past sifatli tovarlar iste’moli kamayadigan (arzon makaron, ikkinchi qo‘l kiyim) tovarlardir. Giffen tovari albatta past sifatli bo‘lishi va byudjetning katta qismini egallashi, yaqin o‘rinbosari bo‘lmasligi kerak, shuning uchun daromad samarasi o‘rin almashtirish samarasidan kuchli bo‘lgan holat kam uchraydi. Javobda oila byudjeti ulushlari (Engel qonuni) dan foydalanish kerak.",
   "Elastiklikni baholashda zaruriylik, o‘rinbosarlar mavjudligi, byudjetdagi ulush va vaqt ufqi hisobga olinadi: non – noelastik, avtomobil – elastik, sigaret – odat tufayli noelastik, mobil internet – operatorlar orasida o‘tish mumkinligidan o‘rtacha yoki elastik. Kesishgan elastiklik yuqori bo‘lgan tovarlar (operatorlar xizmati) bir bozorga kiradi, ya’ni bozor chegarasi o‘rinbosarlik darajasi bilan belgilanadi.",
   "Namunaviy yo‘l: (1) 5–6 xil narxda «sotib olasizmi» so‘rovi o‘tkazing; (2) har narx uchun sotib olishga tayyorlar sonini hisoblab talab jadvalini tuzing; (3) Excel’da Q=a−bP regressiyasini baholang (TREND/LINEST); (4) joriy narxda ε=−b·P/Q ni hisoblang; (5) |ε|>1 bo‘lsa narxni pasaytirish, |ε|<1 bo‘lsa oshirish tushumni ko‘paytirishini asoslang. Namuna hajmi va so‘rovning qiyosiy cheklovlarini ham ko‘rsating.",
   "Tekshirish: yoy elastikligi formulasi to‘g‘ri qo‘llangani, |ε| ning 1 bilan solishtirilgani, tushum bilan bog‘lanishi va ma’lumot manbasi (stat.uz yoki savdo tarmog‘i) ko‘rsatilganini baholang. Jadvalda har bir elastiklik turi uchun ishorasi va iqtisodiy ma’nosi (o‘rinbosar/to‘ldiruvchi, normal/past sifatli, elastik/noelastik) izohlanishi kerak.",
   "Esse rejasi: INI qat’iy to‘plam (Laspeyres) bo‘yicha hisoblanadi, shuning uchun iste’molchilar arzonlashgan tovarga o‘tishini (almashtirish xatosi), yangi tovarlar va sifat o‘zgarishini hisobga olmaydi va turmush qiymati o‘sishini oshirib ko‘rsatadi; Paashe indeksi uni pasaytiradi. WARP tekshiruvida ikki davr uchun p¹x² va p²x¹ xarajatlari solishtiriladi: bir vaqtda ikkala tengsizlik buzilmasa, aniqlangan afzal ko‘rishda ziddiyat yo‘q."
  ]
 },
 "4": {
  "goal": "Narx o‘zgarishini almashtirish va daromad samaralariga ajratish, mehnat taklifi va vaqtlararo tanlov masalalarini yechish hamda joriy qiymat va real foiz stavkasini hisoblash ko‘nikmalarini shakllantirish.",
  "concepts": [
   "almashtirish samarasi",
   "daromad samarasi",
   "Slutskiy tenglamasi",
   "Xiks kompensatsiyasi",
   "mehnat taklifi va bo‘sh vaqt",
   "vaqtlararo byudjet cheklovi va real foiz stavkasi"
  ],
  "source": "Soy M., Saloxitdinov Sh. Mikroiqtisodiyot-2, 4-bob; I-ilova (A4), V-ilova (V.4)",
  "tasks": [
   {
    "id": "mm4-p1",
    "title": "Slutskiy samaralari",
    "text": "Iste’molchining 1-tovarga talabi x₁ = 15 + m/(25·p₁), daromad m = 1000. 1-tovar narxi p₁ = 4 dan 5 ga oshdi. Slutskiy bo‘yicha almashtirish va daromad samaralarini toping.",
    "fields": [
     {
      "label": "Dastlabki talab x₁⁰",
      "value": 25,
      "unit": "birlik"
     },
     {
      "label": "Kompensatsiya Δm",
      "value": 25,
      "unit": "pul birligi"
     },
     {
      "label": "Almashtirish samarasi",
      "value": -1.8,
      "unit": "birlik"
     },
     {
      "label": "Daromad samarasi",
      "value": -0.2,
      "unit": "birlik"
     }
    ],
    "solution": "x₁⁰ = 15 + 1000/(25·4) = 25. Xarid qobiliyatini saqlash: Δm = x₁⁰·Δp₁ = 25·1 = 25, m′ = 1025. x₁(5; 1025) = 15 + 1025/125 = 23,2, demak almashtirish samarasi 23,2 − 25 = −1,8. x₁(5; 1000) = 15 + 1000/125 = 23, daromad samarasi 23 − 23,2 = −0,2. Jami: −2.",
    "formula": "Δm = x₁⁰·Δp₁; Δx₁ = Δx₁ˢ + Δx₁ᵐ",
    "note": "Jami o‘zgarish −2 = −1,8 + (−0,2). Normal tovarda ikkala samara bir yo‘nalishda."
   },
   {
    "id": "mm4-p2",
    "title": "Slutskiy va Xiks almashtirish samarasi",
    "text": "Naflilik funksiyasi u = x₁·x₂, daromad m = 120, p₂ = 1. 1-tovar narxi p₁ = 2 dan 3 ga oshdi. Slutskiy va Xiks bo‘yicha almashtirish samaralarini toping (Xiks uchun 2 xonagacha yaxlitlang).",
    "fields": [
     {
      "label": "Dastlabki talab x₁⁰",
      "value": 30,
      "unit": "birlik"
     },
     {
      "label": "Yangi talab x₁ (p₁=3)",
      "value": 20,
      "unit": "birlik"
     },
     {
      "label": "Slutskiy almashtirish samarasi",
      "value": -5,
      "unit": "birlik"
     },
     {
      "label": "Xiks almashtirish samarasi",
      "value": -5.51,
      "unit": "birlik"
     }
    ],
    "solution": "Kobb–Duglas: x₁ = m/(2p₁). p₁=2: x₁ = 30; p₁=3: x₁ = 120/6 = 20. Slutskiy: Δm = 30·1 = 30, m′ = 150, x₁ = 150/6 = 25, samara 25 − 30 = −5. Xiks: dastlabki naflilik u = 30·60 = 1800; x₁ʰ = √(u·p₂/p₁) = √(1800/3) = √600 ≈ 24,49, samara 24,49 − 30 ≈ −5,51.",
    "formula": "m′ = m + x₁⁰·Δp₁; x₁ʰ = √(u·p₂/p₁)",
    "note": "Darslikda Xiks samarasi −5,5 deb yaxlitlangan (√600 ≈ 24,5). Xiks samarasi Slutskiydan absolyut qiymati bo‘yicha biroz katta, chunki Xiks kompensatsiyasi naflilikni saqlaydi."
   },
   {
    "id": "mm4-p3",
    "title": "Mehnat taklifi",
    "text": "Iste’molchining naflilik funksiyasi u = C^0,5·R^0,5 (C – iste’mol, R – bo‘sh vaqt). Soatlik ish haqi w = 40 ming so‘m, mehnatdan tashqari daromad M = 160 ming so‘m, sutkadagi umumiy vaqt T = 16 soat. Optimal bo‘sh vaqt va mehnat taklifini toping. M = 0 bo‘lsa, mehnat taklifi qancha bo‘ladi?",
    "fields": [
     {
      "label": "To‘liq daromad F",
      "value": 800,
      "unit": "ming so‘m"
     },
     {
      "label": "Bo‘sh vaqt R",
      "value": 10,
      "unit": "soat"
     },
     {
      "label": "Mehnat taklifi L (M=160)",
      "value": 6,
      "unit": "soat"
     },
     {
      "label": "Mehnat taklifi L (M=0)",
      "value": 8,
      "unit": "soat"
     }
    ],
    "solution": "F = w·T + M = 40·16 + 160 = 800. Kobb–Duglas: bo‘sh vaqtga sarf ulushi 0,5, R = 0,5·F/w = 0,5·800/40 = 10, L = 16 − 10 = 6. M = 0 da F = 640, R = 0,5·640/40 = 8, L = 16 − 8 = 8.",
    "formula": "F = wT + M; R = α·F/w; L = T − R",
    "note": "Mehnatdan tashqari daromad (M) bo‘lsa, mehnat taklifi kamayadi (8 dan 6 soatga): sof daromad samarasi."
   },
   {
    "id": "mm4-p4",
    "title": "Vaqtlararo tanlov: qarz olish",
    "text": "Talaba ikki davrli modelda yashaydi: u = ln c₁ + ln c₂. Birinchi davrda daromadi yo‘q (m₁ = 0), ikkinchi davrda m₂ = 220 mln so‘m olishi kutilmoqda. Foiz stavkasi r = 10%. Optimal iste’mol c₁, c₂ va qarz miqdorini toping.",
    "fields": [
     {
      "label": "Joriy qiymatdagi boylik W",
      "value": 200,
      "unit": "mln so‘m"
     },
     {
      "label": "Optimal c₁",
      "value": 100,
      "unit": "mln so‘m"
     },
     {
      "label": "Optimal c₂",
      "value": 110,
      "unit": "mln so‘m"
     },
     {
      "label": "Qarz miqdori",
      "value": 100,
      "unit": "mln so‘m"
     }
    ],
    "solution": "W = m₁ + m₂/(1+r) = 0 + 220/1,1 = 200. Simmetrik log-naflilikda boylik teng bo‘linadi: c₁ = W/2 = 100, c₂/(1+r) = W/2, c₂ = 100·1,1 = 110. Birinchi davrda daromad 0, iste’mol 100, demak qarz = 100. Tekshirish: ikkinchi davrda qaytarish 100·1,1 = 110, qolgan daromad 220 − 110 = 110 = c₂.",
    "formula": "c₁ + c₂/(1+r) = m₁ + m₂/(1+r)",
    "note": "Talaba qarz oluvchi. Foiz stavkasi oshsa, qarz oluvchining ahvoli yomonlashadi."
   },
   {
    "id": "mm4-p5",
    "title": "Soliqdan keyingi real foiz stavkasi",
    "text": "Inflatsiya 12%, depozit stavkasi yiliga 18%, foiz daromadiga 10% soliq solinadi. Soliqdan keyingi nominal stavkani va aniq real foiz stavkasini (Fisher tenglamasi bo‘yicha) toping.",
    "fields": [
     {
      "label": "Soliqdan keyingi nominal stavka",
      "value": 16.2,
      "unit": "%"
     },
     {
      "label": "Soliqdan keyingi real stavka",
      "value": 3.75,
      "unit": "%"
     }
    ],
    "solution": "Soliqdan keyingi nominal stavka: 18·(1 − 0,10) = 16,2%. Real stavka: ρ = (1 + 0,162)/(1 + 0,12) − 1 = 1,162/1,12 − 1 = 0,0375, ya’ni 3,75%. Taxminiy hisob: 16,2 − 12 = 4,2%.",
    "formula": "1 + ρ = (1 + r)/(1 + π)",
    "note": "Taxminiy formula (ρ ≈ r − π) 4,2% beradi, aniq qiymat 3,75% — inflatsiya yuqori bo‘lganda farq sezilarli."
   }
  ],
  "open": [
   "Muhokama savollari. 1) Benzin narxi keskin oshganda almashtirish va daromad samaralari qanday namoyon bo‘ladi? Qisqa va uzoq muddatda farq bormi? 2) Nima uchun yuqori daromadli mutaxassislar ish haqi oshganda kamroq ishlashi mumkin? 3) Ish haqi o‘rniga qo‘shimcha ish uchun oshirilgan stavka mehnat taklifiga qanday ta’sir qiladi? 4) Foiz stavkasining oshishi aholi jamg‘armalarini doimo oshiradimi? 5) Ta’limga investitsiyani NPV usulida baholashning qanday cheklovlari bor?",
   "Interfaol topshiriq «Kredit olishmi yoki jamg‘arishmi?». Juftliklarda 30 mln so‘mlik avtomobil (yoki noutbuk, maishiy texnika) sotib olishning ikki strategiyasini solishtiring: hozir kredit olish (bank shartlarini real taklif asosida oling) yoki 2 yil jamg‘arib, keyin sotib olish. Joriy qiymat, inflatsiya va shaxsiy afzal ko‘rishlarni hisobga olib qaror qabul qiling va guruhga taqdim eting.",
   "Keys 7. Inflatsiya, depozitlar va valyutadagi jamg‘armalar. Oila 50 mln so‘m jamg‘armaga ega va uni bir yilga joylashtirmoqchi. Variantlar: (A) so‘mdagi depozit, yillik 20%; (B) dollardagi depozit, yillik 5%, so‘mning dollarga nisbatan kutilgan qadrsizlanishi 8%, standart chetlanishi 10%; (C) oltin quymalar, kutilgan daromadlilik 12%, standart chetlanish 18%. Kutilgan inflatsiya 10% (shartli ma’lumotlar). Savollar: 1) Har bir variant uchun so‘mdagi kutilgan nominal va real daromadlilikni hisoblang. 2) Variantlarni «risk – daromadlilik» tekisligida tasvirlang. Riskdan qochuvchi oila qaysi variantni tanlashi mumkin? 3) Diversifikatsiya (masalan, 50% A, 30% B, 20% C) qanday natija beradi (variantlar o‘zaro bog‘lanmagan deb faraz qiling)? 4) Omonatlarni kafolatlash tizimi va bank tanlashda axloqiy risk masalasini muhokama qiling.",
   "Mustaqil ish. 1) O‘zingiz tanlagan tovar (go‘sht, benzin, kommunal xizmatlar) narxining keskin o‘zgarishi holatini tahlil qiling: almashtirish va daromad samaralarini grafikda ko‘rsating, qaysi samara ustunlik qilishini asoslang. 2) Turli banklarning depozit stavkalarini to‘plab, joriy inflatsiya darajasida real stavkalarni hisoblang; qaysi depozit jamg‘aruvchi uchun eng foydali? 3) Ipoteka krediti bo‘yicha (masalan, 20 yil, yillik 17 foiz) oylik annuitet to‘lovni hisoblang va kreditning umumiy qiymatini uy narxi bilan solishtiring. 4) Magistratura yoki qo‘shimcha kasbiy sertifikat olish loyihasining NPV ini hisoblang.",
   "Esse mavzulari (birini tanlang). 1) Ish haqi oshsa, odamlar ko‘proq ishlaydimi? Mehnat taklifi bo‘yicha empirik dalillar. 2) Real foiz stavkasi va aholi jamg‘armalari: O‘zbekiston tajribasi. 3) Pensiya tizimi islohoti: taqsimlovchi va jamg‘arib boriladigan tizimlarning afzallik va kamchiliklari. 4) Ta’lim – eng yaxshi investitsiyami? Inson kapitali nazariyasi asosida. 5) Kredit kartalari va iste’mol kreditlari: giperbolik diskontlash va moliyaviy savodxonlik."
  ],
  "refs": [
   "1) Narx oshganda nisbiy narx o‘zgaradi (almashtirish samarasi, talab kamayadi) va xarid qobiliyati pasayadi (daromad samarasi). Benzinda qisqa muddatda muqobil kam, shuning uchun talab noelastik va almashtirish samarasi kichik; uzoq muddatda tejamkor avtomobil, gaz yoki jamoat transportiga o‘tish imkoni almashtirish samarasini kuchaytiradi. 2) Yuqori daromadda bo‘sh vaqt normal tovar: daromad samarasi almashtirish samarasidan ustun kelib, mehnat taklifi chizig‘i orqaga qayriladi. 3) Oshirilgan stavka faqat qo‘shimcha soatlarga qo‘llansa, daromad samarasi kuchsiz bo‘lib, sof almashtirish samarasi mehnat taklifini oshiradi (siniq byudjet chizig‘i). 4) Yo‘q: jamg‘aruvchida almashtirish va daromad samaralari qarama-qarshi ishlaydi; qarz oluvchida esa ikkalasi jamg‘armani kamaytiradi. 5) Kelajakdagi daromad noaniq, diskont stavkasini tanlash sub’ektiv, nomoliyaviy foyda hisobga olinmaydi.",
   "Juftliklar ikkala strategiya uchun joriy qiymatni hisoblashi kerak: kreditda to‘lovlar yig‘indisining PV si (kredit foizi bo‘yicha) va jamg‘armada kelajakda ham narxi oshgan (inflatsiya) tovarni olish uchun zarur oylik jamg‘arma. Real foiz stavkasi (Fisher) bilan solishtirib, depozit stavkasi kredit stavkasidan past bo‘lgani uchun, odatda, bir martalik xaridning qiymati kreditda yuqori bo‘lishini ko‘rsating. Qaror shaxsiy diskontlash (sabrsizlik), mahsulotdan foydalanish foydasi va likvidlikka bog‘liqligini asoslang. Taqdimotda aniq hisob-kitob va xulosa bo‘lishi shart.",
   "Yo‘l-yo‘riq. A: nominal 20%, real 1,20/1,10 − 1 ≈ 9,1%, risk ≈ 0. B: nominal 1,05·1,08 − 1 ≈ 13,4%, real ≈ 3,1%, risk ≈ 10%. C: nominal 12%, real ≈ 1,8%, risk 18%. Bu shartli ma’lumotlarda A dominant ko‘rinadi (eng yuqori daromad, eng past risk), ammo valyuta va oltin inflatsiya va devalvatsiya xavfiga qarshi «sug‘urta» vazifasini bajaradi. Diversifikatsiyada portfel riski (o‘zaro bog‘lanmagan variantlar, A risksiz): σp = √(0,3²·0,10² + 0,2²·0,18²) = √(0,0009 + 0,001296) ≈ 4,7%. Omonat kafolati bank tanlashda axloqiy riskni oshiradi: omonatchi bankning ishonchliligiga e’tibor bermay yuqori stavkani izlaydi.",
   "Mustaqil ishlar bob matniga tayanib tekshiriladi. 1) Narx o‘zgarishi Slutskiy bo‘yicha ajratilgan: byudjet ulushi katta tovarda (kommunal xizmatlar, oziq-ovqat) daromad samarasi ustun, kichik ulushli tovarda almashtirish samarasi ustun bo‘ladi; grafikda byudjet chizig‘ini burish va siljitish ko‘rsatilsin. 2) Real stavka ρ = (1 + r)/(1 + π) − 1 formulasi bilan, soliq bo‘lsa soliqdan keyin hisoblanadi. 3) Oylik annuitet to‘lov A = PV·i/(1 − (1 + i)⁻ⁿ) formulasi bilan topiladi (i = 0,17/12, n = 240); jami to‘lov uy narxidan necha marta ko‘pligi ko‘rsatilsin. 4) NPV = −xarajat + kelgusi daromadlar PV si; qabul qilish mezoni NPV > 0, taxminlar va diskont stavkasi izohlansin.",
   "Esse har bir mavzuda bob tushunchalariga tayanishi shart: 1) almashtirish va daromad samaralari, orqaga qayriluvchi taklif chizig‘i, empirik dalillar; 2) Fisher tenglamasi, real stavka salbiy yoki musbat bo‘lganda jamg‘arma qarori; 3) vaqtlararo tanlov, hayot sikli, ikki tizimning xavf va moslashuvchanlik jihatidan solishtirilishi; 4) ta’limga xarajat va kelajakdagi ish haqi oqimi NPV si, cheklovlar; 5) giperbolik diskontlash va vaqt nomuvofiqligi, moliyaviy savodxonlik choralari. Esse tezis, dalil va xulosadan iborat bo‘lsin."
  ]
 },
 "5": {
  "goal": "Arbitraj sharti, kutilgan naflilik, risk mukofoti, sug‘urta va portfel tanlovi bo‘yicha hisob-kitob ko‘nikmalarini shakllantirish; noaniqlik sharoitida qaror qabul qilishni tahlil qilish.",
  "concepts": [
   "Arbitraj yo‘qligi sharti",
   "Kutilgan naflilik (fon Neyman–Morgenshtern)",
   "Ishonchli ekvivalent va risk mukofoti",
   "Adolatli sug‘urta mukofoti",
   "Diversifikatsiya va sistematik risk",
   "CAPM va beta koeffitsienti"
  ],
  "source": "Soy M., Saloxitdinov Sh. Mikroiqtisodiyot-2, 5-bob; I-ilova (A5), V-ilova (V.5)",
  "tasks": [
   {
    "id": "mm5-p1",
    "title": "Aksiyaning arbitraj narxi",
    "text": "Aksiya bir yildan keyin 15 ming so‘m dividend beradi va shu paytda 140 ming so‘mga sotilishi kutilmoqda. Foiz stavkasi 24%. Arbitraj yo‘qligi shartiga ko‘ra aksiyaning bugungi narxini toping.",
    "fields": [
     {
      "label": "Aksiyaning bugungi narxi",
      "value": 125,
      "unit": "ming so‘m"
     }
    ],
    "solution": "Arbitraj sharti: p0 = (D + p1)/(1 + r) = (15 + 140)/1,24 = 155/1,24 = 125 ming so‘m.",
    "formula": "p0 = (D + p1)/(1 + r)",
    "note": "Tekshiruv: bugungi 125 ming so‘m depozitga qo‘yilsa, bir yildan keyin 125·1,24 = 155 ming so‘m bo‘ladi – aksiya bilan bir xil."
   },
   {
    "id": "mm5-p2",
    "title": "Lotereya: ishonchli ekvivalent va risk mukofoti",
    "text": "Iste’molchining naflilik funksiyasi u = √w. Lotereyada 25% ehtimol bilan 144, 75% ehtimol bilan 16 yutiladi. Kutilgan qiymat E(w), ishonchli ekvivalent CE va risk mukofoti RP ni toping.",
    "fields": [
     {
      "label": "Kutilgan qiymat E(w)",
      "value": 48,
      "unit": ""
     },
     {
      "label": "Ishonchli ekvivalent CE",
      "value": 36,
      "unit": ""
     },
     {
      "label": "Risk mukofoti RP",
      "value": 12,
      "unit": ""
     }
    ],
    "solution": "E(w) = 0,25·144 + 0,75·16 = 36 + 12 = 48. EU = 0,25·√144 + 0,75·√16 = 0,25·12 + 0,75·4 = 6. CE: √CE = 6, CE = 36. RP = E(w) − CE = 48 − 36 = 12.",
    "formula": "EU = Σπᵢu(wᵢ); u(CE) = EU; RP = E(w) − CE",
    "note": "u botiq (√w), shuning uchun CE < E(w): iste’molchi riskdan qochadi."
   },
   {
    "id": "mm5-p3",
    "title": "Sug‘urta: ln w naflilik",
    "text": "Iste’molchining naflilik funksiyasi u = ln w, boyligi 200. 20% ehtimol bilan 100 yo‘qotadi. Ishonchli ekvivalent CE, risk mukofoti RP, adolatli sug‘urta mukofoti va iste’molchi to‘lashga tayyor maksimal mukofotni toping (bir o‘nli xonagacha yaxlitlang).",
    "fields": [
     {
      "label": "Ishonchli ekvivalent CE",
      "value": 174.1,
      "unit": ""
     },
     {
      "label": "Risk mukofoti RP",
      "value": 5.9,
      "unit": ""
     },
     {
      "label": "Adolatli mukofot",
      "value": 20,
      "unit": ""
     },
     {
      "label": "Maksimal mukofot",
      "value": 25.9,
      "unit": ""
     }
    ],
    "solution": "Sug‘urtasiz: EU = 0,2·ln100 + 0,8·ln200 = 0,2·4,6052 + 0,8·5,2983 = 5,1597. CE = e^5,1597 ≈ 174,1. E(w) = 0,2·100 + 0,8·200 = 180. RP = 180 − 174,1 = 5,9. Adolatli mukofot = 0,2·100 = 20. Maksimal mukofot = 200 − CE = 200 − 174,1 = 25,9.",
    "formula": "CE = e^EU; RP = E(w) − CE; adolatli mukofot = π·L; maksimal mukofot = w − CE",
    "note": "Maksimal mukofot (25,9) adolatli mukofotdan (20) katta, farqi (5,9) risk mukofotiga teng: shuning uchun sug‘urta kompaniyasi foyda ola oladi."
   },
   {
    "id": "mm5-p4",
    "title": "Riskli aktivga optimal ulush",
    "text": "Investor U = μ − 2σ² naflilik funksiyasiga ega (μ – portfel kutilgan daromadliligi, σ² – dispersiyasi). Risksiz stavka rf = 0,08, bozor portfeli daromadliligi rm = 0,16, uning riski σm = 0,2. Mablag‘ning x ulushi bozor portfeliga, qolgani risksiz aktivga qo‘yiladi. Optimal x*, portfel daromadliligi va riskini toping.",
    "fields": [
     {
      "label": "Optimal ulush x*",
      "value": 0.5,
      "unit": ""
     },
     {
      "label": "Portfel daromadliligi",
      "value": 0.12,
      "unit": ""
     },
     {
      "label": "Portfel riski σ",
      "value": 0.1,
      "unit": ""
     }
    ],
    "solution": "μ = (1 − x)·0,08 + x·0,16 = 0,08 + 0,08x; σ² = (xσm)² = 0,04x². U = 0,08 + 0,08x − 2·0,04x² = 0,08 + 0,08x − 0,08x². dU/dx = 0,08 − 0,16x = 0, x* = 0,5. μ = 0,08 + 0,04 = 0,12; σ = 0,5·0,2 = 0,1.",
    "formula": "μ = rf + x(rm − rf); σ = xσm; max U = μ − 2σ²",
    "note": "Investor mablag‘ining yarmini riskli aktivga qo‘yadi: portfel daromadliligi 12%, riski 10%."
   },
   {
    "id": "mm5-p5",
    "title": "Fermer sug‘urtalanadimi?",
    "text": "Fermer daromadi: yaxshi yilda (ehtimol 60%) 200 mln so‘m, yomon yilda (ehtimol 40%) 50 mln so‘m. Naflilik funksiyasi u = √w. Sug‘urta yomon yilda 100 mln so‘m to‘laydi, mukofot 45 mln so‘m (har ikki yilda to‘lanadi). Sug‘urtasiz va sug‘urta bilan kutilgan naflilikni (ikki xonagacha) hisoblab, fermer sug‘urtalanishini aniqlang. Sug‘urta bilan kutilgan naflilik qanchaga teng?",
    "fields": [
     {
      "label": "Sug‘urtasiz EU",
      "value": 11.31,
      "unit": ""
     },
     {
      "label": "Sug‘urta bilan EU",
      "value": 11.57,
      "unit": ""
     }
    ],
    "solution": "Sug‘urtasiz: EU = 0,6·√200 + 0,4·√50 = 0,6·14,142 + 0,4·7,071 = 8,485 + 2,828 = 11,31. Sug‘urta bilan: yaxshi yil 200 − 45 = 155, yomon yil 50 + 100 − 45 = 105. EU = 0,6·√155 + 0,4·√105 = 0,6·12,450 + 0,4·10,247 = 7,470 + 4,099 = 11,57. 11,57 > 11,31, demak fermer sug‘urtalanadi.",
    "formula": "EU = Σπᵢ√wᵢ; sug‘urtalanadi, agar EU(sug‘urta bilan) > EU(sug‘urtasiz)",
    "note": "Sug‘urtaning kutilgan to‘lovi 0,4·100 = 40 mln, mukofot esa 45 mln (adolatli emas), lekin fermer riskdan qochgani uchun baribir sug‘urtalanadi. Ishonchli ekvivalentlar: 128 (sug‘urtasiz) va ≈133,8 (sug‘urta bilan)."
   }
  ],
  "open": [
   "Uy sotib olish yoki ijarada yashash: arbitraj sharti nuqtai nazaridan tahlil qiling. Misol: uy 900 mln so‘m, yillik ijara 54 mln so‘m, kutilgan narx o‘sishi 9%, depozit stavkasi 16%. Uy aktivi daromadliligi depozit stavkasidan qanchaga farq qiladi va bu qanday xulosaga olib keladi?",
   "Nima uchun odamlar bir vaqtda ham lotereya chiptasi, ham sug‘urta sotib oladi? Istiqbol nazariyasi va naflilik funksiyasi shakli asosida tushuntiring.",
   "Fermer uchun hosil riskini boshqarishning qanday usullari bor? Diversifikatsiya nima uchun “bepul tushlik” deyiladi va u qaysi riskni yo‘qota olmaydi? Istiqbol nazariyasi investorlarning qaysi xatolarini tushuntiradi?",
   "“Riskka munosabat” so‘rovi (guruhda). Alle paradoksidagi ikki tanlovni va “aniq 500 ming yoki 50% ehtimol bilan 1 mln so‘m” kabi bir nechta lotereyalarni anonim tanlang. Natijalarni jamlab, guruhning o‘rtacha riskdan qochish darajasini baholang va kutilgan naflilik aksiomalarining (mustaqillik) buzilish holatlarini muhokama qiling.",
   "Mustaqil ish / esse: «Qishloq xo‘jaligida risklarni boshqarish: indeksli sug‘urta, fyuchers va kooperatsiya». Quyidagi keysdan foydalaning. Keys 8. Qishloq xo‘jaligi ekinlarini sug‘urtalash. Vaziyat. Fermerlar bahorgi sovuq, do‘l va qurg‘oqchilik xavfiga duch keladi. An’anaviy hosil sug‘urtasi kam tarqalgan: fermerlar mukofotni qimmat deb hisoblaydi, sug‘urta kompaniyalari esa zararni baholash xarajatlari yuqori va firibgarlik xavfi borligini aytadi. Taklif: ob-havo stansiyalari ma’lumotlariga asoslangan indeksli sug‘urta – agar mintaqada harorat yoki yog‘in belgilangan chegaradan chetga chiqsa, barcha sug‘urtalanganlarga avtomatik to‘lov qilinadi. Savollar: 1) An’anaviy hosil sug‘urtasidagi noxush tanlov va axloqiy risk muammolarini tushuntiring. 2) Indeksli sug‘urta bu muammolarni qanday hal qiladi? Uning asosiy kamchiligi – “bazis riski” (fermerning haqiqiy zarari indeksga mos kelmasligi) nimada? 3) Riskdan qochuvchi fermerning sug‘urtaga talabini kutilgan naflilik modeli asosida tahlil qiling. 4) Davlat mukofotlarning bir qismini subsidiyalashi oqlanadimi? Qanday shartlarda?"
  ],
  "refs": [
   "Uy daromadliligi = (ijara + kapital daromadi)/narx = (54 + 0,09·900)/900 = (54 + 81)/900 = 15%. Bu depozit stavkasidan (16%) past, demak arbitraj sharti buzilgan: uy narxi pasayishi yoki ijara oshishi kerak (yoki kutilgan o‘sish yuqoriroq bo‘lishi kerak). Yaxshi javobda ijaraga yashash (yashirin ijara), soliqlar va tranzaksiya xarajatlari ham hisobga olinadi; ijara va sotib olish teng qiymatli bo‘lishi uchun p0 = (D + p1)/(1 + r) sharti qo‘llanadi.",
   "Lotereya chiptasi kichik ehtimolli katta yutuqni beradi, sug‘urta esa katta zararni kamaytiradi. Klassik naflilik nazariyasida bu qarama-qarshi ko‘rinadi: botiq funksiya riskdan qochishni, qavariq funksiya riskni sevishni bildiradi. Istiqbol nazariyasi buni ehtimollarni tortish (kichik ehtimollar ortiqcha baholanadi) va yo‘qotishdan qochish bilan izohlaydi; Fridman–Sevij yondashuvida naflilik funksiyasi ham botiq, ham qavariq bo‘lgan qismlardan iborat. Javobda har ikki xulq-atvorning izohi bo‘lishi kerak.",
   "Usullar: diversifikatsiya (turli ekin va hududlar), sug‘urta (jumladan indeksli), fyuchers/forvard shartnomalar, kooperatsiya (riskni birlashtirish), jamg‘arma. Diversifikatsiya o‘ziga xos (idiosinkratik) riskni yo‘qotadi, shuning uchun “bepul tushlik”: kutilgan daromadni kamaytirmay, riskni pasaytiradi; ammo sistematik (bozor) riskni yo‘qota olmaydi. Istiqbol nazariyasi dispozitsiya samarasi (yutuqdagi aksiyani erta sotish, yo‘qotishdagisini ushlab turish), yo‘qotishdan qochish va mos yozuv nuqtasiga bog‘liqlik kabi xatolarni tushuntiradi.",
   "So‘rov natijalarini jamlang: Alle paradoksida ko‘pchilik A1 (aniq yutuq) va B2 ni tanlasa, bu kutilgan naflilik mustaqillik aksiomasining buzilishini bildiradi (ikkala juftlikda umumiy qism chiqarilsa, tanlov o‘zgarmasligi kerak edi). Aniq 500 ming va lotereya (kutilgan qiymat 500 ming) orasidan aniq summani tanlaganlar – riskdan qochuvchilar; lotereyani tanlaganlar – riskka neytral yoki riskni sevuvchilar. Guruh bo‘yicha ulushlarni hisoblab, o‘rtacha riskdan qochish darajasini izohlang.",
   "Yo‘l-yo‘riq. 1) An’anaviy sug‘urtada noxush tanlov (xavfli fermerlar ko‘proq sug‘urtalanadi) va axloqiy risk (sug‘urtalangach fermer ehtiyotkorligi kamayadi) mavjud, zararni individual baholash xarajati yuqori. 2) Indeks fermer harakatlariga bog‘liq emas – axloqiy risk yo‘qoladi; indeks hamma uchun ochiq – noxush tanlov kamayadi; zararni individual baholash xarajati yo‘q. Kamchiligi – bazis riski: fermerning haqiqiy zarari indeksdan farq qilishi mumkin. 3) Riskdan qochuvchi fermer (botiq u) adolatli mukofotda to‘liq sug‘urta qiladi; EU(sug‘urta bilan) > EU(sug‘urtasiz) bo‘lsa, mukofot adolatlidan yuqori bo‘lsa ham sug‘urtalanadi (V.5, 5-masalaga qarang). 4) Subsidiya ijobiy tashqi samaralar (oziq-ovqat xavfsizligi, qishloq aholisi daromadlari barqarorligi) mavjud bo‘lsa oqlanadi (X bob)."
  ]
 },
 "6": {
  "goal": "CS, PS, CV, EV va DWL ni hisoblash hamda soliq, narx chegarasi, import tarifi va kvota kabi davlat narx siyosati vositalarining iste’molchi va ishlab chiqaruvchi farovonligiga ta’sirini baholash ko‘nikmalarini shakllantirish.",
  "concepts": [
   "Iste’molchi ortiqchaligi (CS)",
   "Ishlab chiqaruvchi ortiqchaligi (PS)",
   "Kompensatsiyalovchi va ekvivalent variatsiya (CV, EV)",
   "“O‘lik yuk” yo‘qotishi (DWL)",
   "Soliq yukining taqsimlanishi",
   "Import tarifi va kvotasi (renta izlash)"
  ],
  "source": "Soy M., Saloxitdinov Sh. Mikroiqtisodiyot-2, 6-bob; I-ilova (A6), V-ilova (V.6)",
  "tasks": [
   {
    "id": "mm6-p1",
    "title": "Muvozanat, CS, PS va miqdoriy soliq",
    "text": "Talab Q=100−2P, taklif Q=3P−50 (P – ming so‘m). a) Muvozanat narxi va miqdorini hamda iste’molchi va ishlab chiqaruvchi ortiqchaligini (CS, PS) toping. b) Sotuvchilarga har bir birlik uchun t=10 miqdoriy soliq joriy etildi. Xaridor narxi (Pb), sotuvchi olgan narx (Ps), soliqdan keyingi miqdor, soliq tushumi va “o‘lik yuk” yo‘qotishini (DWL) toping.",
    "fields": [
     {
      "label": "Muvozanat narxi",
      "value": 30,
      "unit": "ming so‘m"
     },
     {
      "label": "CS",
      "value": 400,
      "unit": ""
     },
     {
      "label": "Xaridor narxi Pb (soliqdan keyin)",
      "value": 36,
      "unit": "ming so‘m"
     },
     {
      "label": "DWL",
      "value": 60,
      "unit": ""
     }
    ],
    "solution": "a) 100−2P=3P−50 → P*=30, Q*=40. Talab chizig‘ining narx o‘qi bilan kesishishi: P=50; taklif chizig‘ining: 3P−50=0 → P=50/3≈16,67. CS=0,5·40·(50−30)=400; PS=0,5·40·(30−16,67)≈266,7. b) 100−2Pb=3(Pb−10)−50 → 5Pb=180 → Pb=36, Ps=26, Q=100−72=28. Tushum=10·28=280. DWL=0,5·10·(40−28)=60. Soliq yukining 6/10=60% i xaridorga tushadi (talab taklifdan noelastikroq).",
    "formula": "CS=0,5·Q·(P_max−P); PS=0,5·Q·(P−P_min); Pb−Ps=t; DWL=0,5·t·(Q*−Q_t)",
    "note": "Maydonlar: P*, CS, Pb, DWL. Qolgan natijalar: Q*=40, PS≈266,7, Ps=26, Q=28, soliq tushumi 280."
   },
   {
    "id": "mm6-p2",
    "title": "Narxning yuqori chegarasi: taqchillik va DWL",
    "text": "Talab Qd=150−3P, taklif Qs=2P−50 (P – ming so‘m). Muvozanat narxi 40, miqdori 30. Hukumat narxning yuqori chegarasini Pmax=35 qilib belgiladi. Taqchillik hajmini va “o‘lik yuk” yo‘qotishini (DWL) toping (samarali taqsimot farazida: tovar eng yuqori to‘lashga tayyor xaridorlarga yetadi).",
    "fields": [
     {
      "label": "Taklif miqdori Qs",
      "value": 20,
      "unit": "birlik"
     },
     {
      "label": "Taqchillik",
      "value": 25,
      "unit": "birlik"
     },
     {
      "label": "DWL",
      "value": 41.67,
      "unit": ""
     }
    ],
    "solution": "Qs=2·35−50=20; Qd=150−3·35=45; taqchillik=45−20=25. Talab chizig‘ida Q=20 da P=(150−20)/3≈43,33. DWL=0,5·(30−20)·(43,33−35)=0,5·10·8,33≈41,67.",
    "formula": "Qs(Pmax); Qd(Pmax); taqchillik=Qd−Qs; DWL=0,5·(Q*−Qs)·(P_talab(Qs)−Pmax)",
    "note": "DWL≈41,7 (aniq qiymat 41,67). Bu nazariy minimum: navbat, qora bozor kabi real yo‘qotishlar undan katta bo‘lishi mumkin."
   },
   {
    "id": "mm6-p3",
    "title": "CV va EV: narx pasayishi",
    "text": "Iste’molchining naflilik funksiyasi u=x1·x2, daromadi m=200, p2=1. Birinchi tovar narxi p1=4 dan 1 gacha pasaydi. Kompensatsiyalovchi (CV) va ekvivalent (EV) variatsiyalarni toping. Xarajat funksiyasi: e(p1,p2,u)=2√(p1·p2·u).",
    "fields": [
     {
      "label": "Dastlabki naflilik u0",
      "value": 2500,
      "unit": ""
     },
     {
      "label": "Yangi naflilik u1",
      "value": 10000,
      "unit": ""
     },
     {
      "label": "CV",
      "value": 100,
      "unit": ""
     },
     {
      "label": "EV",
      "value": 200,
      "unit": ""
     }
    ],
    "solution": "Dastlab x1=m/(2p1)=25, x2=m/(2p2)=100, u0=2500. Narxdan keyin x1=100, x2=100, u1=10000. CV=m−e(p1new,u0)=200−2√(1·1·2500)=200−100=100. EV=e(p0,u1)−m=2√(4·1·10000)−200=400−200=200.",
    "formula": "CV=m−e(p¹,u⁰); EV=e(p⁰,u¹)−m",
    "note": "Narx pasayganda EV>CV; ΔCS ular orasida joylashadi (Uillig yaqinlashuvi)."
   },
   {
    "id": "mm6-p4",
    "title": "Import tarifi: kichik ochiq iqtisodiyot",
    "text": "Kichik ochiq iqtisodiyotda talab Qd=200−P, taklif Qs=P−20, jahon narxi Pw=60. Import tarifi 20 ga teng belgilandi. Tarifdan keyingi ichki narxni, importni, ishlab chiqaruvchilar yutug‘ini (ΔPS), tarif tushumini va sof yo‘qotishni (DWL) toping.",
    "fields": [
     {
      "label": "Tarifdan keyingi ichki narx",
      "value": 80,
      "unit": ""
     },
     {
      "label": "Ishlab chiqaruvchilar yutug‘i ΔPS",
      "value": 1000,
      "unit": ""
     },
     {
      "label": "Tarif tushumi",
      "value": 1200,
      "unit": ""
     },
     {
      "label": "DWL",
      "value": 400,
      "unit": ""
     }
    ],
    "solution": "Erkin savdoda P=60: Qd=140, Qs=40, import=100. Tarif bilan P=80: Qd=120, Qs=60, import=60. Iste’molchilar yo‘qotishi=0,5·(140+120)·20=2600. ΔPS=0,5·(40+60)·20=1000. Tushum=60·20=1200. DWL=0,5·20·(60−40)+0,5·20·(140−120)=200+200=400 (tekshiruv: 2600−1000−1200=400).",
    "formula": "P=Pw+tarif; ΔCS=−A−B−C−D; ΔPS=A; tushum=C; DWL=B+D",
    "note": "Tarifdan keyingi import 60 (erkin savdoda 100). Tushum = tarif×import = 20·60 = 1200."
   },
   {
    "id": "mm6-p5",
    "title": "Import kvotasi va kvota rentasi",
    "text": "Kichik ochiq iqtisodiyotda talab Qd=300−2P, taklif Qs=P, jahon narxi Pw=60. Import kvotasi 60 birlik qilib belgilandi. Erkin savdodagi importni, kvotadagi ichki narxni, iste’molchilar yo‘qotishini, ishlab chiqaruvchilar yutug‘ini, kvota rentasini va DWL ni toping.",
    "fields": [
     {
      "label": "Kvotadagi ichki narx",
      "value": 80,
      "unit": ""
     },
     {
      "label": "Kvota rentasi",
      "value": 1200,
      "unit": ""
     },
     {
      "label": "DWL",
      "value": 600,
      "unit": ""
     }
    ],
    "solution": "Erkin savdoda P=60: Qd=180, Qs=60, import=120. Kvota bilan: 300−2P−P=60 → P=80; Qs=80, Qd=140. Iste’molchilar yo‘qotishi=(180+140)/2·20=3200; ishlab chiqaruvchilar yutug‘i=(60+80)/2·20=1400; kvota rentasi=60·(80−60)=1200; DWL=3200−1400−1200=600.",
    "formula": "Qd(P)−Qs(P)=kvota; renta=kvota·(P−Pw); DWL=ΔCS−ΔPS−renta",
    "note": "Kvota rentasi litsenziya egalariga tegadi; tarif bo‘lganda shu yuza byudjetga tushar edi."
   }
  ],
  "open": [
   "“Hukumat yig‘ilishi” rolli o‘yini. Talabalar “Moliya vazirligi”, “Iste’molchilar uyushmasi”, “Ishlab chiqaruvchilar assotsiatsiyasi” va “Mustaqil ekspertlar” guruhlariga bo‘linadi. Muhokama mavzusi: un mahsulotlariga import bojini bekor qilish. Har bir guruh 6.5-paragrafdagi vositalar bilan o‘z manfaatlarini miqdoriy asoslaydi; “ekspertlar” umumiy farovonlik nuqtai nazaridan xulosa beradi.",
   "Narx nazorati qisqa muddatda kimga foyda keltiradi va uzoq muddatda nima uchun ko‘pincha zararli bo‘ladi? Aktsiz solig‘i yukini kim ko‘taradi – ishlab chiqaruvchimi yoki iste’molchi (sigaret va benzin misolida)? Javobingizni elastiklik asosida izohlang.",
   "Minimal ish haqini oshirish bandlikka qanday ta’sir qiladi? Raqobatli bozor modeli va boshqa nazariy qarashlarni (shu jumladan Kard va Kryuger tadqiqotini) solishtiring. Import bojlarini kamaytirish kimga foyda, kimga zarar keltiradi?",
   "Mustaqil ish (MT-3): O‘zbekistonda amalga oshirilgan biror narx siyosati chorasini (tarif o‘zgarishi, aktsiz stavkasi, import bojining o‘zgarishi, narx nazorati) tanlab, uning iste’molchilar, ishlab chiqaruvchilar va davlat byudjetiga ta’sirini 6.5-paragrafdagi usullar bilan tahlil qiling. Elastiklik baholarini adabiyotdan oling. Qo‘shimcha: sigaret yoki alkogol aktsizi oshirilishining soliq yuki taqsimotini va DWL ini taxminiy baholang; shahringizdagi infratuzilma loyihasi (yo‘l, ko‘prik, park) uchun soddalashtirilgan xarajat-foyda tahlilini tayyorlang.",
   "Keys 1. Non narxi: subsidiya, narx nazorati yoki maqsadli yordam? Vaziyat. Viloyat markazida oddiy non narxi un narxlarining oshishi sababli bir yilda 30 foizga oshdi. Aholining bir qismi narxni avvalgi darajada “muzlatish”ni talab qilmoqda. Hokimiyat uchta variantni ko‘rib chiqmoqda: (A) novvoyxonalar uchun non narxining yuqori chegarasini belgilash; (B) un ishlab chiqaruvchilarga har bir tonna un uchun subsidiya berish; (C) kam ta’minlangan oilalarga oylik pul kompensatsiyasi to‘lash. Shahar bo‘yicha non talabi Qd=400−50P, taklifi Qs=100P−200 (ming dona/kun, P – ming so‘m). Savollar: 1) Muvozanat narx va miqdorini toping. Narxning yuqori chegarasi 3,5 ming so‘m bo‘lsa, taqchillik va DWL qancha bo‘ladi? 2) Narxni 3,5 ming so‘mgacha tushirish uchun qanday miqdordagi subsidiya kerak? Uning byudjetga xarajati va DWL ni hisoblang. 3) Kam ta’minlangan oilalar (aholining 20%) uchun pul kompensatsiyasi variantini baholang: afzalliklari va kamchiliklari nimada? 4) Har uch variantni samaradorlik, adolat, byudjet xarajati va amalga oshirish qulayligi mezonlari bo‘yicha jadvalda solishtiring.",
   "Keys 3. Avtomobil bozori va import bojlari. Vaziyat. Mahalliy avtomobil zavodi ichki bozorda ustun mavqega ega. Import avtomobillariga yuqori bojlar va aktsizlar qo‘llanadi. Iste’molchilar uzoq kutish navbatlari va narxlar haqida shikoyat qilmoqda. Hukumat bojlarni bosqichma-bosqich pasaytirishni rejalashtirmoqda. Savollar: 1) Import bojining iste’molchilar, ichki ishlab chiqaruvchi va davlat byudjetiga ta’sirini 6.8-rasm asosida tahlil qiling. 2) Agar ichki ishlab chiqaruvchi monopolist bo‘lsa, boj uning narx belgilash imkoniyatlariga qanday ta’sir qiladi? Import raqobati monopol kuchni qanday cheklaydi? 3) Navbatlar mavjudligi narx muvozanatdan past ekanini ko‘rsatadimi? Navbatning “yashirin narxi”ni qanday baholash mumkin? 4) Bojlarni pasaytirish ishlab chiqarishdagi bandlik va sanoat siyosati maqsadlariga qanday ta’sir qilishi mumkin? Murosali yechim taklif qiling."
  ],
  "refs": [
   "Guruhlar quyidagicha asoslaydi: Moliya vazirligi – boj tushumi (C yuza) yo‘qotilishi va byudjet kamomadi; Iste’molchilar uyushmasi – narx pasayishidan CS ortishi (A+B+C+D); Ishlab chiqaruvchilar – PS kamayishi (A) va bandlik; ekspertlar – umumiy farovonlik sof o‘zgarishi (B+D yutug‘i) va o‘tish davri kompensatsiyasi. Har bir guruh kamida bitta sonli baho (mas., elastiklik asosida ΔCS, ΔPS) keltirishi kerak.",
   "Namunaviy javob: narx nazorati qisqa muddatda narxni qaytarib, narxni to‘lovchilarga foyda beradi, ammo taqchillik va DWL (talab va taklif chiziqlari orasidagi uchburchak) yuzaga keladi; uzoq muddatda taklif elastikligi oshgani sari taqchillik va sifat pasayishi kuchayadi. Aktsiz yukini bozorning noelastikroq tomoni ko‘proq ko‘taradi: sigaret va benzin talabi noelastik bo‘lgani uchun yukning katta qismi xaridorga tushadi.",
   "Namunaviy javob: raqobatli modelda minimal ish haqi (narxning quyi chegarasi) ishchi kuchi ortiqchasi, ya’ni ishsizlikni keltiradi; monopsoniya modelida esa bandlik oshishi mumkin. Kard–Kryuger tadqiqoti kutilgan salbiy bandlik ta’sirini topmagan. Bojlarni kamaytirish iste’molchilarga (narx pasayishi) va byudjetdan tashqari farovonlikka foyda beradi; ichki ishlab chiqaruvchilar PS ni yo‘qotadi, boj tushumi kamayadi, ammo jamiyat DWL (B+D) ni qaytarib oladi.",
   "Tekshirish yo‘riqnomasi: talaba aniq chorani (masalan, tarif yoki aktsiz) tanlashi, talab va taklif elastikligini manba bilan keltirishi, yukning taqsimlanishini (Es/(Es+|Ed|)), ΔCS, ΔPS, byudjet tushumi va DWL ni hisoblashi hamda siyosiy xulosa berishi kerak. Aktsiz uchun DWL≈0,5·t²·(elastiklik omili) qoidasidan foydalanish mumkin. Xarajat-foyda tahlilida foyda va xarajatlar joriy qiymatga keltiriladi (diskontlanadi), loyiha NPV>0 bo‘lsa qabul qilinadi.",
   "Yo‘l-yo‘riq. 1) Muvozanat: 400−50P=100P−200 → P*=4, Q*=200. Pmax=3,5 da Qs=150, Qd=225 – taqchillik 75 ming dona; talab chizig‘ida Q=150 da P=5; DWL=0,5·50·(5−3,5)=37,5 mln so‘m kuniga. 2) Subsidiya: xaridor narxi 3,5 uchun Qd=225; sotuvchi narxi Ps=(225+200)/100=4,25; subsidiya s=0,75 ming so‘m/dona, byudjet xarajati 0,75·225=168,75 mln so‘m kuniga; DWL=0,5·0,75·25≈9,4. 3) Pul kompensatsiyasi narxni buzmaydi (DWL deyarli yo‘q), maqsadli, lekin kam ta’minlanganlarni aniqlash va ma’muriy xarajat muammosi bor. 4) VI bobdagi 6.6-jadval va II bobdagi naqd va natural yordam tahlilidan foydalaning.",
   "Yo‘l-yo‘riq. 1) Boj ichki narxni jahon narxi + boj darajasiga ko‘taradi: iste’molchilar yo‘qotadi, ichki ishlab chiqaruvchi yutadi, davlat boj tushumini oladi, sof yo‘qotish B+D. 2) Monopolist import raqobati sharoitida narxni jahon narxi + boj darajasidan oshira olmaydi: boj qanchalik past bo‘lsa, ustama shunchalik kichik. 3) Navbatlar – narxning yuqori chegarasi kabi samara: tovar narx emas, kutish vaqti orqali taqsimlanadi; navbat vaqtining muqobil qiymatini (I bobdagi vaqt va pul cheklovi) hisoblang. 4) Bandlik yo‘qotilishi va o‘tish davri kompensatsiyasini hisobga olib, bojni bosqichma-bosqich pasaytirish tavsiya etiladi."
  ]
 },
 "7": {
  "goal": "Bozor talabi, ishlab chiqarish funksiyasi va xarajatlar tahlilini qo‘llab, raqobatli firma va tarmoqning qisqa hamda uzoq muddatli muvozanatini aniqlash ko‘nikmalarini shakllantirish.",
  "concepts": [
   "bozor talabi va gorizontal qo‘shish",
   "ishlab chiqarish funksiyasi va MRTS",
   "izokosta va xarajatlarni minimallashtirish",
   "qisqa muddatli xarajatlar (FC, VC, ATC, AVC, MC)",
   "foydani maksimallashtirish: P=MC",
   "uzoq muddatli tarmoq muvozanati: P=min LAC"
  ],
  "source": "Soy M., Saloxitdinov Sh. Mikroiqtisodiyot-2, 7-bob; I-ilova (A7), V-ilova (V.7)",
  "tasks": [
   {
    "id": "mm7-p1",
    "title": "Qisqa muddatli xarajatlar va foyda",
    "text": "Raqobatli firmaning qisqa muddatli umumiy xarajatlari TC=100+10Q+Q² (Q – dona, TC – ming so‘m). Bozor narxi P=50 ming so‘m. Toping: a) foydani maksimallashtiruvchi hajm Q* va foyda π; b) ishlab chiqarishni to‘xtatish narxi (min AVC) va zararsizlik narxi (min ATC).",
    "fields": [
     {
      "label": "Optimal hajm Q*",
      "value": 20,
      "unit": "dona"
     },
     {
      "label": "Foyda π",
      "value": 300,
      "unit": "ming so‘m"
     },
     {
      "label": "To‘xtatish narxi",
      "value": 10,
      "unit": "ming so‘m"
     },
     {
      "label": "Zararsizlik narxi",
      "value": 30,
      "unit": "ming so‘m"
     }
    ],
    "solution": "FC=100, VC=10Q+Q², AVC=10+Q, ATC=100/Q+10+Q, MC=10+2Q. a) P=MC: 50=10+2Q, Q*=20. TR=50·20=1000; TC=100+200+400=700; π=1000−700=300. b) AVC=10+Q Q→0 da eng kichik: min AVC=10 (to‘xtatish narxi). ATC minimumi: −100/Q²+1=0, Q=10, ATC=10+10+10=30 (zararsizlik narxi; shu nuqtada MC=10+20=30=ATC).",
    "formula": "P=MC; π=TR−TC; min AVC → to‘xtatish narxi; MC=ATC → zararsizlik narxi"
   },
   {
    "id": "mm7-p2",
    "title": "Uzoq va qisqa muddatli xarajatlar taqqosi",
    "text": "Firmaning ishlab chiqarish funksiyasi Q=10·L^0,5·K^0,5, ish haqi w=20, kapital narxi r=8. Qisqa muddatda kapital K=25 da qayd etilgan. Q=250 birlik ishlab chiqarilganda: a) uzoq muddatli xarajat LTC; b) qisqa muddatli xarajat STC (kapital xarajati ham hisobga olinadi); c) uzoq muddatda optimal kapital K*. (Hisoblashda 2 xona aniqlik.)",
    "fields": [
     {
      "label": "Uzoq muddatli xarajat LTC",
      "value": 632.46,
      "unit": ""
     },
     {
      "label": "Qisqa muddatli xarajat STC",
      "value": 700,
      "unit": ""
     },
     {
      "label": "Optimal kapital K*",
      "value": 39.53,
      "unit": ""
     }
    ],
    "solution": "Uzoq muddat: MRTS=K/L=w/r=20/8=2,5, ya’ni K=2,5L. Q=10·√(L·2,5L)=10·√2,5·L=15,81L. LTC=20L+8·2,5L=40L=40Q/15,81=2,53Q. Q=250: L=250/15,81=15,81; LTC=40·15,81=632,46; K*=2,5·15,81=39,53. Qisqa muddat: K=25 da Q=50√L, L=(250/50)²=25; STC=20·25+8·25=500+200=700. STC>LTC (700>632,46), chunki K=25 bu hajm uchun optimal emas.",
    "formula": "MRTS=w/r; LTC=wL+rK; STC=wL+r·K̄",
    "note": "Darslikda (V.7, 5-masala) LTC≈632, STC=700 va K*=39,5 berilgan; qayta hisoblash shuni tasdiqladi."
   },
   {
    "id": "mm7-p3",
    "title": "Tarmoqning qisqa muddatli muvozanati",
    "text": "Tarmoqda 50 ta bir xil firma bor. Har bir firmaning taklifi q=P−10 (P≥10). Bozor talabi Q=1500−25P. Toping: tarmoq taklifi, muvozanat narxi P*, tarmoq hajmi Q* va har bir firma hajmi q. (Natijani 2 xona aniqlikda yozing.)",
    "fields": [
     {
      "label": "Muvozanat narxi P*",
      "value": 26.67,
      "unit": ""
     },
     {
      "label": "Bozor hajmi Q*",
      "value": 833.33,
      "unit": ""
     },
     {
      "label": "Firma hajmi q",
      "value": 16.67,
      "unit": ""
     }
    ],
    "solution": "Tarmoq taklifi Q_S=50(P−10)=50P−500. Q_D=Q_S: 1500−25P=50P−500 → 75P=2000 → P*=26,67. Q*=50·26,67−500=833,33. Har bir firma q=Q*/50=16,67 (tekshiruv: 26,67−10=16,67).",
    "formula": "Q_S=n·q(P); Q_D=Q_S"
   },
   {
    "id": "mm7-p4",
    "title": "Uzoq muddatli tarmoq muvozanati",
    "text": "Tarmoqdagi har bir firmaning uzoq muddatli o‘rtacha xarajati LAC=q²−16q+80. Bozor talabi Q=3000−100P. Raqobatli uzoq muddatli muvozanatda firma hajmi q, narx P, bozor hajmi Q va firmalar soni n ni toping.",
    "fields": [
     {
      "label": "Firma hajmi q",
      "value": 8,
      "unit": ""
     },
     {
      "label": "Narx P",
      "value": 16,
      "unit": ""
     },
     {
      "label": "Bozor hajmi Q",
      "value": 1400,
      "unit": ""
     },
     {
      "label": "Firmalar soni n",
      "value": 175,
      "unit": "ta"
     }
    ],
    "solution": "Uzoq muddatli muvozanatda P=min LAC. LAC′=2q−16=0 → q=8. min LAC=64−128+80=16, demak P=16. Q=3000−100·16=1400. n=Q/q=1400/8=175.",
    "formula": "P=LMC=min LAC; n=Q/q"
   },
   {
    "id": "mm7-p5",
    "title": "Firma foydasi va taklif funksiyasi",
    "text": "Raqobatli firmaning xarajatlari TC=50+2Q+0,5Q². Toping: a) taklif funksiyasi va zararsizlik narxi; b) narx P=20 bo‘lganda optimal hajm va foyda.",
    "fields": [
     {
      "label": "Zararsizlik narxi",
      "value": 12,
      "unit": ""
     },
     {
      "label": "Optimal hajm (P=20)",
      "value": 18,
      "unit": ""
     },
     {
      "label": "Foyda (P=20)",
      "value": 112,
      "unit": ""
     }
    ],
    "solution": "MC=2+Q. P=MC → Q=P−2 (taklif funksiyasi, P≥min AVC=2). ATC=50/Q+2+0,5Q; min: −50/Q²+0,5=0 → Q=10, ATC=5+2+5=12 (zararsizlik narxi). P=20: Q=18; TR=360; TC=50+36+162=248; π=360−248=112.",
    "formula": "P=MC; min ATC; π=TR−TC",
    "note": "Darslikdagi javob (min ATC Q=10 da, P=12; π=112) qayta hisoblashda tasdiqlandi."
   }
  ],
  "open": [
   "Novvoyxona, sement zavodi va elektr tarmog‘i uchun minimal samarali masshtabni taqqoslang. Bu ularning bozor tuzilmasiga qanday ta’sir qiladi?",
   "Nima uchun zarar ko‘rayotgan firma qisqa muddatda ishlashda davom etadi? Real misollar keltiring. Qaytmaydigan xarajatlar xatosiga kundalik hayotdan va davlat loyihalaridan misollar keltiring.",
   "Dehqon bozoridagi sotuvchi mukammal raqobat sharoitidagi firma hisoblanadimi? Issiqxona xo‘jaliklari soni ko‘paysa, pomidor narxi uzoq muddatda qanday o‘zgaradi?",
   "Interfaol topshiriq «Biznes-reja» mini-loyihasi: kichik guruhlar shartli kichik korxona (masalan, choyxona, tikuvchilik sexi) uchun doimiy va o‘zgaruvchan xarajatlarni baholab xarajatlar jadvalini tuzadi, zararsizlik nuqtasini va bozor narxining uchta ssenariysi uchun foyda/zararni hisoblaydi; natijalar 7.10-rasmga o‘xshash grafikda taqdim etiladi.",
   "Mustaqil ish: ishlab chiqarish funksiyasi va xarajatlar. Qishloq xo‘jaligi yoki sanoatdan misol olib, chekli mahsuldorlikning kamayishini raqamli jadval va grafikda ko‘rsating; shuningdek 7.5-misol asosida narxning turli darajalari uchun firma foydasini Excel jadvalida hisoblab, foyda funksiyasi grafigini chizing.",
   "Esse mavzulari (birini tanlang): kichik va o‘rta biznesning optimal o‘lchami: masshtab samarasi va moslashuvchanlik; qaytmaydigan xarajatlar xatosi: davlat loyihalari misolida; texnologik taraqqiyot va mehnat unumdorligi; klaster tizimi: masshtab va qamrov samaralari nuqtai nazaridan.",
   "Keys 4. Paxta-to‘qimachilik klasteri: vertikal integratsiya. Vaziyat: klaster paxta yetishtirish, tozalash, yigirish va tikuvchilikni birlashtiradi. Ilgari fermerlar paxtani belgilangan narxda davlatga topshirgan; endi ular klaster bilan shartnoma tuzadi. Fermerlar shartnoma narxlari past ekanidan, klaster esa paxta sifati va o‘z vaqtida topshirilmasligidan shikoyat qilmoqda. Savollar: 1) Mintaqada yagona klaster bo‘lsa, u paxta xaridida monopsonist sifatida harakat qilishi mumkin. Fermerlarga to‘lanadigan narx va yetishtiriladigan paxta hajmini raqobatli bozor bilan solishtiring. 2) Paxta sifatini klaster bevosita kuzata olmaydi (o‘g‘it, sug‘orish, terim vaqti). Bu qaysi assimetrik axborot muammosi? Qanday shartnoma rag‘bat beradi? 3) Kouz (firma chegaralari) nuqtai nazaridan klasterning vertikal integratsiyasini qanday tushuntirish mumkin? 4) Fermerlar kooperativlari klaster bilan muzokaralarda qanday rol o‘ynashi mumkin?"
  ],
  "refs": [
   "Minimal samarali masshtab (MES) – LAC minimumiga erishiladigan eng kichik hajm. Novvoyxonada MES bozor hajmiga nisbatan juda kichik, shuning uchun ko‘plab firmalar raqobatlashadi. Sement zavodida MES katta, bozorda oz sonli firma sig‘adi (oligopoliya). Elektr tarmog‘ida MES butun bozorga teng yoki undan katta, ya’ni tabiiy monopoliya paydo bo‘ladi.",
   "Qisqa muddatda FC qaytmaydi, shuning uchun qaror P va AVC taqqoslanishiga asoslanadi: P>AVC bo‘lsa, ishlab chiqarish FC ning bir qismini qoplaydi va zarar to‘xtatishdagi zarardan (−FC) kam bo‘ladi. P<min AVC bo‘lsa to‘xtatish kerak. Qaytmaydigan xarajatlar xatosi: qurilishi boshlangan, ammo samarasiz loyihani «allaqachon ko‘p pul sarflandi» deb davom ettirish; qaror faqat kelgusi xarajat va daromadlarga qarab qabul qilinishi kerak.",
   "Dehqon bozori sotuvchisi ko‘p, mahsulot bir xil, kirish erkin bo‘lsa – narx qabul qiluvchi, ya’ni mukammal raqobatga yaqin; sifat, joylashuv va doimiy xaridorlar farqi uni ayrim hollarda monopolistik raqobatga yaqinlashtiradi. Issiqxonalar ko‘payishi bilan taklif ortadi, narx pasayadi; foyda nolga tushguncha kirish davom etadi va uzoq muddatda P=min LAC. Xarajatlar o‘zgarmasa (doimiy xarajatli tarmoq) uzoq muddatli narx avvalgi darajaga qaytadi.",
   "Tekshirish: doimiy (ijara, uskuna amortizatsiyasi) va o‘zgaruvchan (xomashyo, ish haqi) xarajatlar to‘g‘ri ajratilgan; ATC, AVC, MC hisoblangan; zararsizlik nuqtasi FC/(P−AVC) yoki min ATC orqali topilgan; uchta narx ssenariysida (yuqori, zararsizlik, to‘xtatish narxidan past) foyda/zarar hisoblangan va grafik 7.10-rasm kabi TR va TC yoki ATC/MC bilan chizilgan.",
   "Tekshirish: jadvalda omil miqdori, umumiy, o‘rtacha va chekli mahsulot ustunlari bo‘lishi, MP ma’lum nuqtadan keyin kamayishi ko‘rsatilishi kerak. Excel jadvalida har bir P uchun Q=Q(P), TR, TC va π hisoblanadi; foyda funksiyasi grafigi P=MC nuqtasida maksimumga ega ekani ko‘rsatiladi.",
   "Esse 2–3 sahifa, aniq tezis, bob nazariyasiga (masshtab samarasi, MES, qaytmaydigan xarajatlar, MR=MC) tayanishi va O‘zbekistondan 1–2 real misol keltirishi kerak. Baholash: nazariyadan to‘g‘ri foydalanish, dalillar, mantiqiy xulosa. Klaster esesida kattalashuv samaralari va bozor kuchi xavfi ikkala tomondan ko‘rib chiqilsin.",
   "Yo‘l-yo‘riq: 1) Monopsoniya: MFC>w, shuning uchun klaster raqobatli bozordagiga qaraganda past narx to‘laydi va past hajmda xarid qiladi (VIII bob). 2) Sifat yashirin harakat – prinsipal–agent va axloqiy risk muammosi (XI bob); sifat ko‘rsatkichlariga bog‘langan narx (bonus), uzoq muddatli shartnomalar va obro‘ rag‘bat beradi. 3) Vertikal integratsiya tranzaksion xarajatlarni kamaytiradi, lekin bozor kuchini kuchaytirishi mumkin. 4) Kooperativ fermerlarni birlashtirib muzokaralarda ularning kuchini oshiradi va monopsoniya ta’sirini kamaytiradi."
  ]
 },
 "8": {
  "goal": "Monopol narx va hajmni, ustama va Lerner indeksini, narx diskriminatsiyasi, ikki qismli tarif va oligopoliya (Kurno) muvozanatlarini hisoblash, bozor konsentratsiyasini HHI bilan o‘lchash ko‘nikmalarini shakllantirish.",
  "concepts": [
   "sof monopoliya",
   "monopol narx va ustama qoidasi",
   "Lerner indeksi",
   "narx diskriminatsiyasi",
   "Kurno muvozanati",
   "Herfindal–Hirshman indeksi"
  ],
  "source": "Soy M., Saloxitdinov Sh. Mikroiqtisodiyot-2, 8-bob; I-ilova (A8), V-ilova (V.8)",
  "tasks": [
   {
    "id": "mm8-p1",
    "title": "Monopolistning muvozanati va DWL",
    "text": "Monopolistning bozor talabi P=120−3Q, chekli xarajati doimiy: MC=30, doimiy xarajat yo‘q (FC=0). Monopol hajm va narxni, monopol foydani, Lerner indeksini hamda monopoliyaning o‘lik yuk yo‘qotishini (DWL) toping.",
    "fields": [
     {
      "label": "Monopol hajm Q",
      "value": 15,
      "unit": "birlik"
     },
     {
      "label": "Monopol narx P",
      "value": 75,
      "unit": "pul birligi"
     },
     {
      "label": "Monopol foyda",
      "value": 675,
      "unit": "pul birligi"
     },
     {
      "label": "Lerner indeksi",
      "value": 0.6,
      "unit": ""
     }
    ],
    "solution": "MR=120−6Q. MR=MC: 120−6Q=30 → Q=15. P=120−3·15=75. Foyda=(75−30)·15=675. Lerner indeksi L=(P−MC)/P=45/75=0,6. Raqobatli hajm: P=MC → 120−3Q=30, Qc=30. DWL=0,5·(Qc−Qm)·(Pm−MC)=0,5·15·45=337,5.",
    "formula": "MR=MC; L=(P−MC)/P=1/|ε|; DWL=0,5·(Qc−Qm)·(Pm−MC)",
    "note": "Raqobatli hajm Qc=30, shuning uchun DWL=337,5. Hisob qayta tekshirildi, darslik javobiga mos."
   },
   {
    "id": "mm8-p2",
    "title": "Ikki bozorda narx diskriminatsiyasi",
    "text": "Monopolist ikki bozorda sotadi. Birinchi bozorda talab Q1=50−P1, ikkinchisida Q2=30−0,5P2. Chekli xarajat ikkala bozorda ham doimiy: MC=10. Uchinchi darajali diskriminatsiya sharoitida har bir bozordagi narx va hajmni toping.",
    "fields": [
     {
      "label": "1-bozor narxi P1",
      "value": 30,
      "unit": "pul birligi"
     },
     {
      "label": "1-bozor hajmi Q1",
      "value": 20,
      "unit": "birlik"
     },
     {
      "label": "2-bozor narxi P2",
      "value": 35,
      "unit": "pul birligi"
     },
     {
      "label": "2-bozor hajmi Q2",
      "value": 12.5,
      "unit": "birlik"
     }
    ],
    "solution": "1-bozor: P1=50−Q1, MR1=50−2Q1=10 → Q1=20, P1=30. 2-bozor: P2=60−2Q2, MR2=60−4Q2=10 → Q2=12,5, P2=60−25=35. Tekshiruv: |ε1|=1·30/20=1,5; |ε2|=0,5·35/12,5=1,4. Talabi noelastikroq bozorda narx yuqori.",
    "formula": "MR1=MR2=MC",
    "note": "Ikkinchi bozorda talab noelastikroq (|ε|=1,4 < 1,5), shuning uchun narx yuqoriroq. Qayta hisoblash darslik javobiga mos."
   },
   {
    "id": "mm8-p3",
    "title": "Kurno duopoliyasi: har xil xarajatlar",
    "text": "Ikki firmali bozorda talab P=90−Q (Q=q1+q2). Firmalar hajmni bir vaqtda tanlaydi (Kurno). Birinchi firmaning chekli xarajati MC1=10, ikkinchisiniki MC2=20. Reaksiya funksiyalarini tuzib, muvozanat hajmlari, bozor narxi va firmalar foydasini toping.",
    "fields": [
     {
      "label": "1-firma hajmi q1",
      "value": 30,
      "unit": "birlik"
     },
     {
      "label": "2-firma hajmi q2",
      "value": 20,
      "unit": "birlik"
     },
     {
      "label": "Bozor narxi P",
      "value": 40,
      "unit": "pul birligi"
     },
     {
      "label": "1-firma foydasi",
      "value": 900,
      "unit": "pul birligi"
     }
    ],
    "solution": "1-firma: MR1=90−2q1−q2=10 → q1=(80−q2)/2=40−q2/2. 2-firma: 90−2q2−q1=20 → q2=(70−q1)/2=35−q1/2. Birgalikda: q1=40−17,5+q1/4 → 0,75q1=22,5 → q1=30, q2=20. Q=50, P=90−50=40. π1=(40−10)·30=900; π2=(40−20)·20=400.",
    "formula": "MRi=MCi, reaksiya funksiyalari: q1=(a−c1−q2)/2, q2=(a−c2−q1)/2 (b=1)",
    "note": "Xarajati past firma ko‘proq ishlab chiqaradi (30>20) va ko‘proq foyda oladi (900>400). Shtakelbergda (1-firma lider) q1=45, q2=12,5, P=32,5 bo‘lishi mumkin."
   },
   {
    "id": "mm8-p4",
    "title": "Ikki qismli tarif",
    "text": "Monopolist bir xil 200 nafar iste’molchiga xizmat ko‘rsatadi. Har bir iste’molchining talabi Q=30−P, chekli xarajat MC=6 (doimiy), doimiy xarajat yo‘q. Monopolist ikki qismli tarif qo‘llaydi: abonent to‘lovi T va foydalanish narxi p. Optimal p va T ni hamda monopolist foydasini toping.",
    "fields": [
     {
      "label": "Foydalanish narxi p",
      "value": 6,
      "unit": "pul birligi"
     },
     {
      "label": "Abonent to‘lovi T",
      "value": 288,
      "unit": "pul birligi"
     },
     {
      "label": "Monopolist foydasi",
      "value": 57600,
      "unit": "pul birligi"
     }
    ],
    "solution": "Optimal foydalanish narxi p=MC=6. Har bir iste’molchi Q=30−6=24 birlik iste’mol qiladi. Iste’molchi ortiqchaligi CS=0,5·24·(30−6)=0,5·24·24=288. Abonent to‘lovi T=CS=288. Foyda=200·288=57 600 (foydalanish to‘lovlari xarajatni aynan qoplaydi, chunki p=MC).",
    "formula": "p=MC; T=CS(p=MC)=0,5·(a−MC)·Q",
    "note": "Bunday tarifda hajm raqobatli darajada, DWL yo‘q, butun iste’molchi ortiqchaligi monopolistga o‘tadi."
   },
   {
    "id": "mm8-p5",
    "title": "HHI va birlashuv ta’siri",
    "text": "Bozorda beshta firma bor, ularning bozor ulushlari 30, 25, 20, 15 va 10 foiz. Herfindal–Hirshman indeksini (HHI) va uchta eng yirik firma konsentratsiya koeffitsiyentini (CR3) toping. Keyin ikki eng kichik firma (15% va 10%) qo‘shilsa, HHI qanchaga o‘zgaradi?",
    "fields": [
     {
      "label": "HHI",
      "value": 2250,
      "unit": ""
     },
     {
      "label": "CR3",
      "value": 75,
      "unit": "%"
     },
     {
      "label": "Qo‘shilgandan keyingi HHI",
      "value": 2550,
      "unit": ""
     },
     {
      "label": "HHI o‘sishi",
      "value": 300,
      "unit": ""
     }
    ],
    "solution": "HHI=30²+25²+20²+15²+10²=900+625+400+225+100=2250. CR3=30+25+20=75%. Qo‘shilgandan keyin ulushlar 30, 25, 20, 25: HHI=900+625+400+625=2550. O‘sish=2550−2250=300 (=2·15·10).",
    "formula": "HHI=Σ si²; CR_k=Σ s_i (k ta yirik firma); ΔHHI=2·s1·s2",
    "note": "2500 dan yuqori HHI odatda yuqori konsentratsiyalashgan bozorni bildiradi; 300 punktlik o‘sish antimonopol organ e’tiborini tortadigan darajada."
   }
  ],
  "open": [
   "Keys 2. Mobil aloqa bozorida raqobat. Vaziyat: mamlakatda to‘rtta mobil operator faoliyat yuritadi; ularning abonentlar bo‘yicha ulushlari taxminan 38%, 30%, 22% va 10% (shartli). Yangi xorijiy operator bozorga kirish uchun litsenziya so‘ramoqda. Mavjud operatorlar “bozor to‘yingan” deb e’tiroz bildirmoqda. Raqobat organi yangi operatorning kirishi narxlarga qanday ta’sir qilishini baholashi kerak. Savollar: 1. Joriy HHI va CR3 ni hisoblang. Bozor qanday konsentratsiyalashgan? 2. Agar bozorni Kurno modeli bilan tasvirlasak (n ta bir xil firma), firmalar soni 4 dan 5 ga oshganda narx va chekli xarajat orasidagi farq qanday o‘zgaradi? 3. Mobil aloqada tarmoq samaralari va o‘zaro ulanish (interconnect) tariflarining roli qanday? Yirik operator kichik raqobatchiga qarshi qanday strategiyalarni qo‘llashi mumkin? 4. Raqamlarni boshqa operatorga o‘tkazish (MNP) xizmati raqobatga qanday ta’sir qiladi?",
   "Muhokama: 1) O‘zbekistonda qaysi bozorlarda tabiiy monopoliya mavjud? Ularni tartibga solishning qaysi usuli (chekli yoki o‘rtacha xarajat bo‘yicha narx, price cap, ikki qismli tarif) maqsadga muvofiq? 2) Talaba chegirmasi, “happy hour”, aviachiptalarning turli narxlari narx diskriminatsiyasining qaysi turlariga kiradi?",
   "Muhokama: 1) Monopolistik raqobatdagi “ortiqcha quvvat” samarasizlikmi yoki xilma-xillikning narxi? 2) Nima uchun kartellar beqaror? OPEK tajribasini muhokama qiling. 3) Raqamli platformalar bozorida antimonopol siyosat qanday o‘ziga xosliklarga ega?",
   "Interfaol topshiriq «Kartel o‘yini». Talabalar 4 ta “firma”ga bo‘linadi. Har bir raundda firmalar yashirin ravishda “yuqori” yoki “past” ishlab chiqarish hajmini tanlaydi; o‘qituvchi oldindan tayyorlangan yutuqlar jadvali bo‘yicha natijalarni e’lon qiladi. 3-raunddan keyin firmalarga muzokara qilishga ruxsat beriladi. Kelishuvlar qanchalik bajarilgani va nima uchun buzilgani muhokama qilinadi.",
   "Mustaqil ish / esse (birini tanlang): 1) Biror oligopolistik bozor (mobil aloqa, avtomobil, sement) bo‘yicha firmalarning bozor ulushlari haqida ochiq ma’lumotlarni to‘plab, CR3 va HHI ni hisoblang. 2) Narx diskriminatsiyasining O‘zbekiston amaliyotidagi beshta misolini toping (transport, madaniyat, ta’lim, aloqa xizmatlari) va ularning turini aniqlang. 3) Esse: «Tabiiy monopoliyalarni tartibga solish: xalqaro tajriba va O‘zbekiston uchun saboqlar» yoki «Narx diskriminatsiyasi: iste’molchiga foydami yoki zararmi?»."
  ],
  "refs": [
   "1) HHI=38²+30²+22²+10²=1444+900+484+100=2928 – yuqori konsentratsiyalashgan bozor; CR3=38+30+22=90%. 2) Chiziqli talab va bir xil MC li Kurno modelida P−MC=(a−c)/(n+1): n=4 dan 5 ga oshsa, ustama 1/5 dan 1/6 ga, ya’ni taxminan 17% ga kamayadi; narx pasayadi. 3) Tarmoq samaralari kattaroq operatorni afzal qiladi; o‘zaro ulanish tarifini yuqori qo‘yish yoki tarmoq ichida arzon tarif berish kichik raqobatchini siqib chiqarishi mumkin. 4) MNP o‘tish xarajatlarini kamaytiradi va raqobatni kuchaytiradi. VIII bobdagi Kurno modeli, III bobdagi tarmoq samaralari va IX bobdagi strategik majburiyat tushunchalaridan foydalaning.",
   "1) Tabiiy monopoliya sohalari: elektr uzatish, gaz va suv ta’minoti, temir yo‘l infratuzilmasi. Usullarni 8.3-bo‘limdagi bilan solishtiring: P=MC zarar keltiradi va subsidiya talab qiladi, P=AC firma zararsizligini ta’minlaydi, price cap xarajatni kamaytirishga rag‘bat beradi, ikki qismli tarif samaradorlik va xarajat qoplanishini birlashtiradi. 2) Talaba chegirmasi va aviachiptalar narxi – asosan uchinchi (guruhlar) va ikkinchi darajali diskriminatsiya, “happy hour” – vaqt bo‘yicha. Arbitraj imkoniyati yo‘qligini ko‘rsating.",
   "1) Ortiqcha quvvat monopolistik raqobatda P=AC>MC bo‘lgani uchun uzoq muddatda firma minimal AC nuqtasidan chapda ishlaganidan kelib chiqadi; bir tomondan DWL, boshqa tomondan iste’molchi xilma-xillikdan naf oladi – ikkala qarashni keltiring. 2) Kartelda har bir a’zo kelishuvni buzib, hajmni oshirishda rag‘bat ko‘radi (mahbuslar dilemmasi); OPEK misolida kvotalarning buzilishini ko‘rsating. 3) Platformalarda tarmoq samaralari, ma’lumotlar, ko‘p tomonlama bozor va nol narx; bozor ulushi bilan hukmronlikni baholash qiyin.",
   "Yutuqlar jadvalida kelishuvdan chetlashish (“past” narx yoki “yuqori” hajm) kelishuvga rioya qilishdan ko‘ra foydaliroq bo‘lishi kerak (mahbuslar dilemmasi). Muzokaradan keyin ham kartel buzilishini va bu Kurno natijasiga yaqinlashishini muhokama qiling. Takroriy o‘yin, jazo mexanizmi, firmalar soni va kuzatish imkoniyati kartel barqarorligini oshirishini qayd eting.",
   "1) CR3 va HHI ni ulushlar kvadratlari yig‘indisi sifatida hisoblang; 2500 dan yuqori HHI – yuqori konsentratsiya. Manbani ko‘rsating. 2) Har misol uchun turini (1-, 2- yoki 3-darajali) va arbitraj to‘sig‘ini aniqlang. 3) Esse: muammo qo‘yilishi, nazariy asos (8.3 yoki 8.4-bo‘lim), O‘zbekiston va xorijiy misollar, xulosa; kamida 2–3 ochiq manbaga tayaning."
  ]
 },
 "9": {
  "goal": "Dominant strategiya, Nesh muvozanati, aralash strategiyalar, takrorlanadigan va ketma-ket o‘yinlar, auksionlar hamda kooperativ o‘yinlarni yechish ko‘nikmalarini shakllantirish.",
  "concepts": [
   "Nesh muvozanati",
   "dominant strategiya",
   "mahbus dilemmasi",
   "aralash strategiyalar va befarqlik tamoyili",
   "trigger strategiyasi va diskont omili",
   "teskari induksiya va qism o‘yin bo‘yicha mukammal muvozanat"
  ],
  "source": "Soy M., Saloxitdinov Sh. Mikroiqtisodiyot-2, 9-bob; I-ilova (A9), V-ilova (V.9)",
  "tasks": [
   {
    "id": "mm9-p1",
    "title": "Trigger strategiyasi va diskont omili",
    "text": "Cheksiz takrorlanadigan mahbus dilemmasida har davrdagi yutuqlar: hamkorlik qilganda har bir o‘yinchiga 10, bir tomonlama aldaganda aldovchiga 15, o‘zaro aldashda har biriga 4. Ikkala o‘yinchi trigger strategiyasini qo‘llaydi (bir marta aldash ro‘y bersa, abadiy aldashga o‘tadi). Hamkorlik barqaror bo‘lishi uchun diskont omili δ ning minimal qiymatini toping.",
    "fields": [
     {
      "label": "Minimal δ",
      "value": 0.4545,
      "unit": ""
     }
    ],
    "solution": "Hamkorlikda qolish: 10/(1−δ). Aldash: 15 + 4δ/(1−δ). Shart: 10/(1−δ) ≥ 15 + 4δ/(1−δ) → 10 ≥ 15(1−δ) + 4δ → 10 ≥ 15 − 11δ → 11δ ≥ 5 → δ ≥ 5/11 ≈ 0,4545.",
    "formula": "R/(1−δ) ≥ T + P·δ/(1−δ)  ⇒  δ ≥ (T − R)/(T − P)",
    "note": "Qayta hisoblash darslikdagi javobni (δ ≥ 5/11 ≈ 0,45) tasdiqlaydi. δ qancha katta bo‘lsa (o‘yinchilar kelajakni qancha yuqori qadrlasa), hamkorlik shuncha barqaror."
   },
   {
    "id": "mm9-p2",
    "title": "Aralash strategiyalardagi Nesh muvozanati",
    "text": "Ikki o‘yinchili o‘yinda A (qator) «Yuqori» yoki «Pastki», B (ustun) «Chap» yoki «O‘rta» strategiyani tanlaydi. Yutuqlar (A; B): (Yuqori, Chap) = (3; 1), (Yuqori, O‘rta) = (2; 4), (Pastki, Chap) = (1; 3), (Pastki, O‘rta) = (4; 2). Sof strategiyalarda muvozanat yo‘q. Aralash strategiyalardagi muvozanatda A «Yuqori»ni p ehtimol bilan, B «Chap»ni q ehtimol bilan tanlaydi. p va q ni toping.",
    "fields": [
     {
      "label": "A «Yuqori»ni tanlash ehtimoli p",
      "value": 0.25,
      "unit": ""
     },
     {
      "label": "B «Chap»ni tanlash ehtimoli q",
      "value": 0.5,
      "unit": ""
     }
    ],
    "solution": "B ni befarq qilish: 1·p + 3(1−p) = 4p + 2(1−p) → 3 − 2p = 2 + 2p → p = 0,25. A ni befarq qilish: 3q + 2(1−q) = 1·q + 4(1−q) → 2 + q = 4 − 3q → q = 0,5. Tekshiruv: B uchun 0,25 + 2,25 = 2,5 va 1 + 1,5 = 2,5; A uchun 1,5 + 1 = 2,5 va 0,5 + 2 = 2,5.",
    "formula": "Befarqlik tamoyili: raqibning har bir sof strategiyadagi kutilgan yutug‘i teng bo‘ladi",
    "note": "Darslikdagi javob (p = 0,25; q = 0,5) qayta hisoblashda tasdiqlandi. Har bir o‘yinchi o‘z ehtimolini raqibini befarq qiladigan qilib tanlashiga e’tibor bering."
   },
   {
    "id": "mm9-p3",
    "title": "Ketma-ket o‘yin: teskari induksiya",
    "text": "1-o‘yinchi avval A yoki B ni tanlaydi, so‘ng 2-o‘yinchi buni ko‘rib X yoki Y ni tanlaydi. Yutuqlar (1-o‘yinchi; 2-o‘yinchi): A dan keyin X = (3; 1), Y = (1; 2); B dan keyin X = (2; 3), Y = (4; 0). Teskari induksiya bilan qism o‘yin bo‘yicha mukammal muvozanatda 1-o‘yinchi va 2-o‘yinchining yutuqlarini toping.",
    "fields": [
     {
      "label": "1-o‘yinchining yutug‘i",
      "value": 2,
      "unit": ""
     },
     {
      "label": "2-o‘yinchining yutug‘i",
      "value": 3,
      "unit": ""
     }
    ],
    "solution": "A dan keyin 2-o‘yinchi: Y (2) > X (1) → natija (1; 2). B dan keyin: X (3) > Y (0) → natija (2; 3). 1-o‘yinchi A da 1, B da 2 oladi → B ni tanlaydi. Muvozanat: (B, X), yutuqlar (2; 3). Muvozanat strategiyasi to‘liq: 2-o‘yinchi A dan keyin Y, B dan keyin X ni tanlaydi.",
    "formula": "Teskari induksiya: oxirgi qadamdan boshlab har bir tugunda o‘yinchi o‘z yutug‘ini maksimallashtiradi",
    "note": "Darslik javobi (B, X; (2; 3)) tasdiqlandi. 1-o‘yinchi A ni tanlasa faqat 1 oladi, shuning uchun A bilan boshlash uni qiziqtirmaydi."
   },
   {
    "id": "mm9-p4",
    "title": "Kooperativ o‘yin: Shepli qiymati",
    "text": "Uch ishtirokchi A, B, C ning koalitsiya qiymatlari: v(A) = v(B) = v(C) = 0; v(AB) = v(AC) = v(BC) = 40; v(ABC) = 90. Har bir ishtirokchining Shepli qiymatini toping va yig‘indisi katta koalitsiya qiymatiga tengligini tekshiring.",
    "fields": [
     {
      "label": "Har bir ishtirokchining Shepli qiymati",
      "value": 30,
      "unit": "birlik"
     },
     {
      "label": "Uchala qiymat yig‘indisi",
      "value": 90,
      "unit": "birlik"
     }
    ],
    "solution": "Ishtirokchilar simmetrik, shuning uchun qiymatlar teng. 6 ta tartibning har birida A ning hissasi: birinchi bo‘lsa 0; ikkinchi bo‘lsa 40 − 0 = 40; oxirgi bo‘lsa 90 − 40 = 50. Tartiblar: birinchi – 2 ta (0), ikkinchi – 2 ta (40), oxirgi – 2 ta (50). Shepli(A) = (2·0 + 2·40 + 2·50)/6 = 180/6 = 30. Yig‘indi: 3·30 = 90 = v(ABC).",
    "formula": "φᵢ = barcha tartiblar bo‘yicha i-ishtirokchining o‘rtacha chekka hissasi = (1/n!)·Σ [v(S ∪ {i}) − v(S)]",
    "note": "Darslikdagi javob (har biriga 30) python orqali barcha 6 ta tartib bo‘yicha qayta hisoblandi va tasdiqlandi."
   },
   {
    "id": "mm9-p5",
    "title": "Birinchi narx yopiq auksionida sotuvchi daromadi",
    "text": "Ikki ishtirokchi birinchi narx yopiq auksionida ishtirok etadi. Ularning baholashlari [0; 100) oraliqda tekis taqsimlangan va mustaqil. Muvozanat strategiyasi b(v) = v/2. Eng yuqori baholash kutilgan qiymatining 2/3 qismiga teng (100 ning 2/3 qismi). Sotuvchining kutilgan daromadini toping va Vikri (ikkinchi narx) auksionidagi daromad bilan solishtiring.",
    "fields": [
     {
      "label": "Yutuvchining kutilgan baholashi",
      "value": 66.67,
      "unit": ""
     },
     {
      "label": "Sotuvchining kutilgan daromadi (birinchi narx)",
      "value": 33.33,
      "unit": ""
     },
     {
      "label": "Sotuvchining kutilgan daromadi (Vikri auksioni)",
      "value": 33.33,
      "unit": ""
     }
    ],
    "solution": "Yutuvchi baholashining kutilgan qiymati E[max(v1, v2)] = (2/3)·100 ≈ 66,67. Yutuvchi o‘z baholashining yarmini to‘laydi: 66,67/2 ≈ 33,33. Vikri auksionida to‘lov ikkinchi (past) baholashga teng: E[min(v1, v2)] = (1/3)·100 ≈ 33,33. Daromadlar teng.",
    "formula": "E[max] = 2/3·100; to‘lov = b(v) = v/2; Vikri: E[min] = 1/3·100",
    "note": "Hisob-kitob qayta tekshirildi: 100/3 = 33,33. Natija daromadlar ekvivalentligi teoremasini ko‘rsatadi: xavfga neytral ishtirokchilarda auksion turi sotuvchining kutilgan daromadini o‘zgartirmaydi."
   }
  ],
  "open": [
   "Kundalik hayotdan (yo‘l harakati, guruhdagi loyiha ishi, navbat) mahbus dilemmasiga misollar keltiring va ularning yutuqlar matritsasini tuzing.",
   "Nima uchun Nesh muvozanati har doim ham «eng yaxshi» natija emas? Futboldagi penaltilar va soliq tekshiruvlari o‘rtasida qanday o‘xshashlik bor?",
   "Firmalar qanday qilib tahdidlarini ishonchli qiladi? Davlat xaridlarida qaysi turdagi auksion samaraliroq? Fikringizni asoslang.",
   "Interfaol topshiriq «Ultimatum o‘yini»: juftliklarda bir talaba 10 ta shartli «tanga»ni bo‘lishni taklif qiladi, ikkinchisi qabul qiladi yoki rad etadi. 3 raund rollar almashtirilib o‘ynaladi. Natijalarni 9.6-rasm bilan solishtiring va ratsionallik, adolat hamda o‘zaro munosabat omillarini muhokama qiling.",
   "Esse: «Mahbus dilemmasidan chiqish yo‘llari: ijtimoiy normalar, institutlar va takroriy munosabatlar» yoki «Davlat xaridlarida auksionlar dizayni va korrupsiyaga qarshi kurash».",
   "Mustaqil ish: O‘zbekiston iqtisodiyotidan mahbus dilemmasi vaziyatiga uchta misol topib, ularni yutuqlar matritsasi shaklida ifodalang va hamkorlikka erishish yo‘llarini taklif qiling.",
   "Mustaqil ish: Davlat xaridlari portalidagi (xarid.uzex.uz) auksion yoki tender natijalarini tahlil qiling: qaysi auksion turi qo‘llaniladi, ishtirokchilar soni va narx pasayishi o‘rtasida qanday bog‘liqlik bor?",
   "Keys 5. Onlayn taksi platformalari. Vaziyat: shaharda ikkita yirik onlayn taksi platformasi faoliyat yuritadi. Talab yuqori bo‘lgan soatlarda (ertalab, kechqurun, yomg‘irli kunlarda) narxlar «dinamik koeffitsient» bilan bir necha baravar oshadi. Yo‘lovchilar bu amaliyotni «adolatsiz» deb hisoblab, narxning yuqori chegarasini o‘rnatishni talab qilmoqda. Haydovchilar esa platforma komissiyasi juda yuqori ekanidan noroziligini bildirmoqda. Savollar: 1) Dinamik narx belgilashni talab va taklif modeli orqali tushuntiring. Narxning yuqori chegarasi talab yuqori soatlarda qanday natija beradi? 2) Ikki tomonlama bozor (III bob, Tirol va Roshe) nuqtai nazaridan platformaning narx tuzilmasini tahlil qiling: nima uchun platforma yo‘lovchilarga chegirma berib, haydovchilardan komissiya oladi? 3) Ikki platforma o‘rtasidagi raqobat Bertran yoki Kurno modellaridan qaysi biriga ko‘proq mos keladi? 4) Haydovchilar va platforma o‘rtasidagi munosabatda prinsipal–agent muammosi qanday namoyon bo‘ladi (reyting tizimlari, buyurtmani rad etish)?",
   "Keys 9. Quyosh elektr stansiyalari uchun auksionlar. Vaziyat: hukumat qayta tiklanadigan energiya quvvatlarini oshirish maqsadida quyosh elektr stansiyalarini qurish huquqini xalqaro tanlov (auksion) orqali beradi: g‘olib – eng past elektr energiyasi tarifini taklif qilgan investor bo‘lib, davlat kompaniyasi u bilan 25 yillik elektr energiyasi xarid shartnomasini tuzadi. Xalqaro tajribada bunday auksionlar tariflarning keskin pasayishiga olib kelgan. Savollar: 1) Bu auksion qaysi turga kiradi? Ishtirokchilar soni ortishi tarif taklifiga qanday ta’sir qiladi? 2) «G‘olib la’nati» xavfi qanday namoyon bo‘lishi mumkin (xarajatlarni kam baholash, keyinchalik loyihani amalga oshirmaslik)? Uni kamaytirish uchun qanday kafolatlar talab qilinadi? 3) Uzoq muddatli shartnomaning riskni taqsimlashdagi rolini tahlil qiling: investor va davlat qaysi risklarni ko‘taradi (valyuta, talab, texnologik risk)? 4) Bu loyihani tashqi samaralar (uglerod chiqindilarini kamaytirish) nuqtai nazaridan baholang."
  ],
  "refs": [
   "Namunalar: hamkor bilan loyiha ishida «ishlash yoki ishlamaslik» (hamma ishlasa (5; 5), bittasi ishlamasa unga (8), ishlagan (0), hech kim ishlamasa (1; 1)); yo‘lda navbatga qarama-qarshi chiqish; jamoat joyini tozalash. Har birida dominant strategiya (aldash) va Nesh muvozanati Pareto samarasizligini ko‘rsating.",
   "Nesh muvozanatida hech kim bir tomonlama chetga chiqmaydi, lekin natija Pareto samarasiz bo‘lishi mumkin (mahbus dilemmasi), shuningdek bir nechta muvozanat mavjud bo‘lishi mumkin. Penalti va soliq tekshiruvi – aralash strategiyalar o‘yinlari: zarbachi/tekshiruvchi oldindan taxmin qilinmasligi uchun tasodifiy tanlaydi, ehtimollar raqibni befarq qiladi.",
   "Tahdid ishonchli bo‘lishi uchun u qism o‘yin bo‘yicha mukammal muvozanatga mos kelishi, ya’ni bajarilganda ham tahdid qiluvchi uchun foydali bo‘lishi kerak. Qaytarib bo‘lmaydigan strategik majburiyat (masalan, quvvatni oldindan kengaytirish) tahdidni ishonchli qiladi. Davlat xaridlarida ikkinchi narx (Vikri) auksioni haqiqiy baholashni rag‘batlantiradi, birinchi narx auksionida esa «g‘olib la’nati» va kelishuv xavfi mavjud.",
   "Odatiy natija: takliflar umumiy summaning 40–50 foizi, past takliflar (20–30 foiz) ko‘pincha rad etiladi. Standart nazariya (teskari induksiya) minimal taklif va uning qabul qilinishini bashorat qiladi. Farq adolat, o‘zaro munosabat va obro‘ omillari bilan izohlanadi.",
   "Esse tuzilishi: dilemma mohiyati; chiqish yo‘llari (takrorlanish va trigger/«qasdma-qasd» strategiyalari, diskont omili sharti, shartnoma va institutlar, ijtimoiy normalar); xulosa. Auksion dizayni mavzusida: Vikri va birinchi narx auksionlarini solishtiring, kelishuv va korrupsiyaga qarshi choralarni keltiring.",
   "Misollar: kartel kelishuvi (narx/miqdor), reklama urushi, umumiy resursdan (suv, yaylov) foydalanish. Har biri uchun 2×2 matritsa tuzing, Nesh muvozanatini toping va hamkorlik yo‘llarini (takroriy munosabat, nazorat, jarima) tavsiflang.",
   "Ishtirokchilar soni oshgan sari takliflar xarajatga yaqinlashadi. Tahlil: auksion turi (ochiq/yopiq, birinchi/ikkinchi narx), ishtirokchilar soni, boshlang‘ich va yakuniy narx. Natijalarni jadvalga kiriting va xulosa qiling.",
   "Dinamik narx qisqa muddatli taklifni (qo‘shimcha haydovchilarni yo‘lga chiqishga) rag‘batlantiradi va cheklangan taklifni eng yuqori baholovchi yo‘lovchilarga taqsimlaydi; narx chegarasi taqchillikka, kutish vaqtining keskin oshishiga olib keladi. Platformalar uchun tarmoq samaralari kuchli, shuning uchun bozor konsentratsiyalashishga moyil. Ikki tomonlama bozorda narx tuzilmasi tomonlarning narx elastikligi va tarmoq samarasiga bog‘liq: yo‘lovchi tomon rag‘batlantiriladi, haydovchilardan komissiya olinadi.",
   "Bu – teskari (xarid) birinchi narx yopiq auksioni; raqobatchilar soni oshgan sari takliflar xarajatga yaqinlashadi (IX bob). G‘olib la’natiga qarshi – ishtirok kafolatlari, malaka talablari, jarimalar. Uzoq muddatli shartnoma investorni narx riskidan himoya qilib, kapital narxini pasaytiradi (V bob). Uglerod chiqindilarini kamaytirish – ijobiy tashqi samara; uni hisobga olish davlat uchun subsidiya yoki yuqori tarifni oqlashi mumkin."
  ]
 },
 "10": {
  "goal": "Ejvort qutisi, tashqi samaralar, Pigu solig‘i, ruxsatnomalar savdosi, Kouz teoremasi, umumiy resurslar va jamoat ne’matlari bo‘yicha tahliliy ko‘nikmalarni shakllantirish.",
  "concepts": [
   "Ejvort qutisi va shartnoma chizig‘i",
   "tashqi samara",
   "Pigu solig‘i",
   "ruxsatnomalar savdosi va Kouz teoremasi",
   "umumiylar tragediyasi",
   "jamoat ne’mati va Lindal narxlari"
  ],
  "source": "Soy M., Saloxitdinov Sh. Mikroiqtisodiyot-2, 10-bob; I-ilova (A10), V-ilova (V.10)",
  "tasks": [
   {
    "id": "mm10-p1",
    "title": "Salbiy tashqi samara va Pigu solig‘i",
    "text": "Ishlab chiqarish natijasida atrof-muhitga zarar yetadi. Bozor talabi P = 200 − 2Q, chekli xususiy xarajat MPC = 20 + Q, chekli tashqi xarajat MEC = 0,5Q. Bozor muvozanat hajmini, ijtimoiy optimal hajmni, Pigu solig‘ini (optimal hajmda) va ortiqcha yo‘qotish (DWL) ni toping.",
    "fields": [
     {
      "label": "Bozor hajmi Qm",
      "value": 60,
      "unit": "birlik"
     },
     {
      "label": "Optimal hajm Q*",
      "value": 51.43,
      "unit": "birlik"
     },
     {
      "label": "Pigu solig‘i t",
      "value": 25.71,
      "unit": "pul birligi"
     },
     {
      "label": "DWL",
      "value": 128.57,
      "unit": "pul birligi"
     }
    ],
    "solution": "Bozor: 200 − 2Q = 20 + Q → Qm = 60. Ijtimoiy: MSC = MPC + MEC = 20 + 1,5Q; 200 − 2Q = 20 + 1,5Q → 3,5Q = 180 → Q* = 51,43. Pigu solig‘i t = MEC(Q*) = 0,5·51,43 = 25,71. DWL: Qm da MSC = 20 + 1,5·60 = 110, talab narxi P = 200 − 120 = 80, farq 30; DWL = 0,5·(60 − 51,43)·30 = 128,57.",
    "formula": "MSC = MPC + MEC; P = MSC; t = MEC(Q*)",
    "note": "Darslikda Qm = 60, Q* = 51,4, t = 25,7 keltirilgan; DWL qo‘shimcha hisoblandi."
   },
   {
    "id": "mm10-p2",
    "title": "Ochiq kirishli baliq ovi",
    "text": "Ko‘lda baliq ovlash: n ta qayiq ishlatilsa, umumiy hosil F(n) = 100n − 2n². Har bir qayiqning xarajati c = 20. Ochiq kirishda qayiqlar soni (o‘rtacha mahsulot = c) va ijtimoiy optimal qayiqlar soni (chekli mahsulot = c) ni toping.",
    "fields": [
     {
      "label": "Ochiq kirishda qayiqlar soni",
      "value": 40,
      "unit": "ta"
     },
     {
      "label": "Optimal qayiqlar soni",
      "value": 20,
      "unit": "ta"
     }
    ],
    "solution": "O‘rtacha mahsulot AP = F/n = 100 − 2n. Ochiq kirishda AP = c: 100 − 2n = 20 → n = 40. Optimumda MP = F′(n) = 100 − 4n = 20 → n* = 20. Ochiq kirishda qayiqlar soni optimaldan 2 baravar ko‘p.",
    "formula": "AP = c (ochiq kirish); MP = c (optimum)",
    "note": ""
   },
   {
    "id": "mm10-p3",
    "title": "Jamoat ne’mati va Lindal narxlari",
    "text": "Uch iste’molchining jamoat ne’mati uchun chekli baholashlari MRS1 = 50 − G, MRS2 = 40 − G, MRS3 = 30 − G; jamoat ne’matini ta’minlashning chekli xarajati MC = 60. Samarali miqdor G* va har bir iste’molchining Lindal narxi (t1, t2, t3) ni toping.",
    "fields": [
     {
      "label": "Samarali miqdor G*",
      "value": 20,
      "unit": "birlik"
     },
     {
      "label": "Lindal narxi t1",
      "value": 30,
      "unit": "pul birligi"
     },
     {
      "label": "Lindal narxi t2",
      "value": 20,
      "unit": "pul birligi"
     },
     {
      "label": "Lindal narxi t3",
      "value": 10,
      "unit": "pul birligi"
     }
    ],
    "solution": "Samuelson sharti: ΣMRSi = MC → 120 − 3G = 60 → G* = 20. Lindal narxlari G* dagi baholashga teng: t1 = 50 − 20 = 30, t2 = 40 − 20 = 20, t3 = 30 − 20 = 10; yig‘indisi 60 = MC.",
    "formula": "ΣMRSi = MC; ti = MRSi(G*)",
    "note": ""
   },
   {
    "id": "mm10-p4",
    "title": "Ruxsatnomalar savdosi va xarajat tejash",
    "text": "Ikki firmaning chekli tozalash xarajatlari MAC1 = a1 va MAC2 = 3a2 (a — kamaytirilgan chiqindi miqdori). Jami 80 birlik chiqindini kamaytirish talab qilinadi. Xarajat-samarali taqsimotni (a1, a2) va ruxsatnoma (kamaytirish) narxini toping. Jami tozalash xarajatlarini hisoblab, ularni teng taqsimot (har biri 40 birlik) bilan solishtiring: ruxsatnomalar savdosi qancha tejaydi? Jami xarajat MAC ning integraliga teng (firma 1: a1²/2, firma 2: 1,5·a2²).",
    "fields": [
     {
      "label": "Firma 1 kamaytirishi a1",
      "value": 60,
      "unit": "birlik"
     },
     {
      "label": "Firma 2 kamaytirishi a2",
      "value": 20,
      "unit": "birlik"
     },
     {
      "label": "Ruxsatnoma narxi p",
      "value": 60,
      "unit": "pul birligi"
     },
     {
      "label": "Tejalgan xarajat",
      "value": 800,
      "unit": "pul birligi"
     }
    ],
    "solution": "Xarajat-samaradorlik: MAC1 = MAC2 → a1 = 3a2; a1 + a2 = 80 → a2 = 20, a1 = 60. p = MAC = 60. Xarajat: 60²/2 + 1,5·20² = 1800 + 600 = 2400. Teng standartda: 40²/2 + 1,5·40² = 800 + 2400 = 3200. Tejash 3200 − 2400 = 800.",
    "formula": "MAC1 = MAC2 = p; a1 + a2 = A",
    "note": ""
   },
   {
    "id": "mm10-p5",
    "title": "Ejvort qutisi: umumiy muvozanat",
    "text": "Ikki iste’molchi, ikki tovar (x va y). Naflilik funksiyalari: uA = x^0,3·y^0,7, uB = x^0,6·y^0,4. Boshlang‘ich zaxiralar: A da (10; 0), B da (0; 10). y tovar narxi py = 1. Raqobatli muvozanatda x tovar narxi px, hamda A ning (xA, yA) va B ning xB iste’mol miqdorlarini toping (Koshi–Duglas funksiyada daromadning α ulushi x ga sarflanadi).",
    "fields": [
     {
      "label": "x narxi px",
      "value": 0.857,
      "unit": "(6/7)"
     },
     {
      "label": "xA",
      "value": 3,
      "unit": "birlik"
     },
     {
      "label": "yA",
      "value": 6,
      "unit": "birlik"
     },
     {
      "label": "xB",
      "value": 7,
      "unit": "birlik"
     }
    ],
    "solution": "A daromadi 10·px, B daromadi 10. x bozori: xA + xB = 10; xA = 0,3·10px/px = 3; xB = 0,6·10/px = 6/px. 3 + 6/px = 10 → px = 6/7 ≈ 0,857. yA = 0,7·10·px = 7·(6/7) = 6; xB = 6/(6/7) = 7; yB = 0,4·10 = 4. Tekshiruv: yA + yB = 10, xA + xB = 10.",
    "formula": "xi = αi·Mi/px; yi = (1 − αi)·Mi/py; Σxi = 10",
    "note": "yB = 4 (bozor tozalanishi tekshiruvi: 6 + 4 = 10)."
   }
  ],
  "open": [
   "Muhokama: Farovonlikning ikkinchi teoremasi ijtimoiy siyosat uchun qanday ahamiyatga ega?",
   "Muhokama: Shahringizdagi eng muhim salbiy tashqi samara qaysi? Uni qaysi vosita (Pigu solig‘i, standart, ruxsatnomalar savdosi, Kouz muzokaralari) bilan tartibga solgan bo‘lardingiz? Kouz teoremasi qaysi vaziyatlarda amalda ishlaydi, qaysilarida ishlamaydi? Uglerod solig‘i yoki emissiyalar savdosi — O‘zbekiston uchun qaysi biri maqbulroq?",
   "Muhokama: Mahalladagi qaysi ne’matlar jamoat ne’mati, qaysilari umumiy resurs hisoblanadi? Hashar an’anasini jamoaviy harakat nazariyasi nuqtai nazaridan tahlil qiling. Orol fojiasidan qanday iqtisodiy saboqlar chiqarish mumkin? «Tashabbusli byudjet» Samuelson shartini bajarishga qanchalik yaqinlashtiradi?",
   "Kouz masalasi: fabrika chiqindisi baliqchilarga 300 zarar keltiradi; filtr o‘rnatish 200 turadi; baliqchilarning boshqa joyga ko‘chishi 250 turadi. Huquqlar ikki xil taqsimlanganda (fabrikada ifloslantirish huquqi bor / baliqchilarda toza suv huquqi bor) natijani aniqlang.",
   "Interfaol topshiriq «Jamoat ne’mati o‘yini»: har bir talabaga 10 ta shartli tanga beriladi; istalgan qismini «umumiy fond»ga qo‘shadi. Fonddagi summa 2 ga ko‘paytirilib, barcha ishtirokchilar o‘rtasida teng taqsimlanadi. 5 raund: avval anonim, keyin hissalar e’lon qilinadigan va «jazolash» imkoniyati bilan. Hissalar dinamikasini tekinxo‘rlik nazariyasi va Ostrom tamoyillari asosida muhokama qiling.",
   "Keys 6. Shahar tirbandligi va pullik to‘xtash joylari. Vaziyat: poytaxt markazida avtomobillar soni tez o‘smoqda, ko‘chalarda tirbandlik va to‘xtash joylari tanqisligi kuchaymoqda. Shahar hokimligi markazda pullik to‘xtash joylari tizimini kengaytirish va jamoat transportini rivojlantirishni rejalashtirmoqda; ba’zi ekspertlar markazga kirish uchun «tirbandlik to‘lovi» joriy qilishni (London va Stokgolm tajribasi kabi) taklif qilmoqda. Savollar: 1) Tirbandlikni salbiy tashqi samara sifatida tahlil qiling: har bir qo‘shimcha haydovchi boshqalarga qanday xarajat yuklaydi? 2) Optimal tirbandlik to‘lovi Pigu solig‘i mantiqiga qanday mos keladi? Uni qanday baholash mumkin? 3) Bepul to‘xtash joylari «umumiy resurs» sifatida qanday muammolarga olib keladi? Pullik tizim bu muammoni qanday hal qiladi? 4) To‘lovlarning taqsimot oqibatlari (kam daromadli haydovchilarga ta’siri) va tushumni jamoat transportiga yo‘naltirishning ahamiyatini muhokama qiling.",
   "Mustaqil ish: yashash hududingizdagi ekologik muammolardan birini (havo ifloslanishi, suv, chiqindilar) tanlab, uni tashqi samara sifatida tahlil qiling va tartibga solish vositalarini taklif qiling; mahallangizdagi bir jamoat ne’mati bo‘yicha kichik so‘rov o‘tkazib, aholining to‘lashga tayyorligi asosida Samuelson sharti bo‘yicha samarali miqdorni baholang.",
   "Esse: Orol fojiasi — tashqi samaralar va umumiy resurslar nuqtai nazaridan saboqlar; yoki uglerod solig‘i va emissiyalar savdosidan qaysi biri samaraliroq."
  ],
  "refs": [
   "Ikkinchi teorema: har qanday Pareto samarali taqsimotga boshlang‘ich zaxiralarni qayta taqsimlash (bir martalik transfer) va raqobatli bozor orqali erishish mumkin. Shu sababli samaradorlik va adolat masalalarini ajratish mumkin: davlat zaxiralarni qayta taqsimlaydi, narxlarni buzmaydi. Cheklov: bir martalik, buzilishsiz transfer amalda qiyin.",
   "Yaxshi javobda aniq tashqi samara (havo ifloslanishi, chiqindi) nomlanadi, MPC va MEC ajratiladi. Vosita tanlovi asoslanadi: Pigu solig‘i MEC ni bilishni talab qiladi; ruxsatnomalar savdosi umumiy shiftga minimal xarajat bilan erishtiradi; Kouz esa tomonlar kam va tranzaksion xarajat past bo‘lganda ishlaydi. Uglerod solig‘i narx aniqligini, emissiyalar savdosi miqdor aniqligini beradi; O‘zbekiston institutlari imkoniyatiga qarab asoslang.",
   "Jamoat ne’mati: raqobatsiz va istisno qilinmaydigan (yoritish, xavfsizlik, mahalla yo‘li); umumiy resurs: raqobatli, lekin istisno qilinmaydigan (mahalla yaylovi, suv). Hashar — Ostrom tamoyillari (aniq chegara, o‘zaro nazorat, jazo) asosidagi jamoaviy harakat, tekinxo‘rlikni ijtimoiy normalar bilan yengish. Orol: umumiy resursdan ortiqcha foydalanish va salbiy tashqi samara. Tashabbusli byudjet ovoz berish orqali baholashlarni oshkor qiladi.",
   "Ikkala holatda ham filtr o‘rnatiladi, chunki filtr (200) zarar (300) va ko‘chishdan (250) arzon. Fabrikada ifloslantirish huquqi bo‘lsa, baliqchilar filtr narxini (200) to‘laydi (zarar 300 > 200); baliqchilarda toza suv huquqi bo‘lsa, fabrika filtrni o‘zi o‘rnatadi (200). Samaradorlik bir xil, taqsimot (kim to‘laydi) huquqqa bog‘liq — Kouz teoremasi.",
   "Bir martalik o‘yinda tekinxo‘rlik nazariyasiga ko‘ra hissa kam bo‘ladi (Nash muvozanati: 0); amalda dastlabki raundlarda yarmigacha hissa qo‘shiladi, anonim o‘yinda esa pasayadi. Hissalar e’lon qilinishi va jazolash imkoniyati hissalarni oshiradi — Ostrom tamoyillari (o‘zaro nazorat, bosqichma-bosqich jazo). Talabalar dinamikani grafikda ko‘rsatib, xulosa qiladi.",
   "Yo‘l-yo‘riq: haydovchi faqat o‘z vaqt xarajatini hisobga oladi (MPC), boshqalar vaqtini sekinlashtirish xarajati (MEC) esa hisobga olinmaydi, shuning uchun yo‘llardan ortiqcha foydalaniladi. Tirbandlik to‘lovi t = MEC optimal darajada (Pigu mantiqi). Bepul to‘xtash joylari umumiy resurs: ochiq kirish, tanqislik va qidiruv xarajatlari. Pullik tizim narx orqali talabni tartibga soladi. Tushumni jamoat transportini yaxshilashga yo‘naltirish «ikki tomonlama dividend» beradi va taqsimot muammosini yumshatadi.",
   "Tekshirish yo‘riqnomasi: tanlangan muammo MPC/MEC orqali tahlil qilinishi, tartibga solish vositalari (soliq, standart, ruxsatnoma, Kouz) taqqoslanishi kerak. So‘rovda har bir respondentning to‘lashga tayyorligi (MRSi) yig‘iladi, ΣMRSi = MC sharti bo‘yicha samarali hajm baholanadi; tekinxo‘rlik tufayli baholash pasaytirilishi mumkinligi qayd etiladi.",
   "Esse tuzilishi: muammo bayoni, iqtisodiy mexanizm, dalillar, xulosa. Orol misolida: Amudaryo va Sirdaryo suvidan paxta uchun ortiqcha foydalanish (ochiq kirish, umumiy resurs) va dengiz qurishining tashqi xarajatlari. Uglerod solig‘i narx aniqligini, savdo tizimi hajm aniqligini beradi; xarajat-samaradorlik sharti barcha MAC larning tengligi."
  ]
 },
 "11": {
  "goal": "Noxush tanlov, signal berish, skrining, axloqiy risk va prinsipal–agent modellarini yechish ko‘nikmalarini shakllantirish.",
  "concepts": [
   "assimetrik axborot",
   "yashirin xususiyat va yashirin harakat",
   "noxush tanlov (“limonlar bozori”)",
   "signal berish va ajratuvchi muvozanat",
   "axloqiy risk va franshiza",
   "prinsipal–agent muammosi (ishtirok va rag‘bat muvofiqligi shartlari)"
  ],
  "source": "Soy M., Saloxitdinov Sh. Mikroiqtisodiyot-2, 11-bob; I-ilova (A11), V-ilova (V.11)",
  "tasks": [
   {
    "id": "mm11-p1",
    "title": "Ishlatilgan avtomobillar bozori",
    "text": "Avtomobillar bozorida 40% sifatli (sotuvchi uchun 100, xaridor uchun 120 mln so‘m) va 60% sifatsiz (sotuvchi uchun 50, xaridor uchun 70 mln so‘m) avtomobillar bor. Xaridorlar riskka neytral va sifatni sotib olishdan oldin ajrata olmaydi. Barcha avtomobillar sotuvga chiqsa, xaridor to‘lashga tayyor kutilgan narxni, muvozanatda bozorda sotiladigan avtomobil narxini va sifatli avtomobillarning kritik ulushini (undan past bo‘lganda sifatlilar bozordan chiqadi) toping.",
    "fields": [
     {
      "label": "Kutilgan narx (barcha avtomobillar sotilsa)",
      "value": 90,
      "unit": "mln so‘m"
     },
     {
      "label": "Muvozanatda sotiladigan (sifatsiz) avtomobil narxi",
      "value": 70,
      "unit": "mln so‘m"
     },
     {
      "label": "Sifatli avtomobillarning kritik ulushi",
      "value": 60,
      "unit": "%"
     }
    ],
    "solution": "Kutilgan narx: 0,4·120 + 0,6·70 = 48 + 42 = 90 mln so‘m. Sifatli avtomobil egasi uchun qiymat 100 > 90, shuning uchun u sotmaydi; faqat sifatsizlar sotiladi va xaridorlar ularni 70 mln so‘mdan oladi. Kritik ulush s: 120s + 70(1−s) = 100 → 50s = 30 → s = 0,6, ya’ni sifatlilar ulushi 60% dan kam bo‘lsa, ular bozordan chiqadi.",
    "formula": "p = s·V_sifatli + (1−s)·V_sifatsiz; sifatlilar sotadi, agar p ≥ sotuvchi bahosi",
    "note": "Darslikdagi javobda faqat birinchi ikki son keltirilgan; kritik ulush qayta hisoblash bilan topildi (s = 0,6)."
   },
   {
    "id": "mm11-p2",
    "title": "Spens modeli: ajratuvchi muvozanat",
    "text": "Spens modelida past unumdor xodim firmaga 150, yuqori unumdor xodim 300 (mln so‘m) keltiradi. Ta’lim (signal) xarajati bir birlik uchun past unumdor xodimga 50, yuqori unumdor xodimga 20 mln so‘m. Firma y* dan yuqori ta’limga ega xodimlarga 300, qolganlarga 150 to‘laydi. Ajratuvchi muvozanat bo‘ladigan y* oralig‘ining quyi va yuqori chegarasini toping.",
    "fields": [
     {
      "label": "y* ning quyi chegarasi",
      "value": 3,
      "unit": ""
     },
     {
      "label": "y* ning yuqori chegarasi",
      "value": 7.5,
      "unit": ""
     }
    ],
    "solution": "Past unumdor taqlid qilmasligi uchun: 150 > 300 − 50y* → y* > 150/50 = 3. Yuqori unumdor signal berishi foydali bo‘lishi uchun: 300 − 20y* > 150 → y* < 150/20 = 7,5. Demak, 3 < y* < 7,5.",
    "formula": "w_past > w_yuqori − c_past·y*  va  w_yuqori − c_yuqori·y* > w_past",
    "note": ""
   },
   {
    "id": "mm11-p3",
    "title": "Sug‘urta va axloqiy risk: franshiza",
    "text": "Zarar miqdori 400 (mln so‘m). Zarar ehtimoli ehtiyotkorlik bilan 0,1, ehtiyotkorliksiz 0,3; ehtiyotkorlik xarajati 50. Sug‘urtasiz holatda ehtiyotkor harakat qilgan va ehtiyotkorsiz harakat qilgan shaxsning kutilgan umumiy xarajatini, shuningdek, to‘liq sug‘urtalangan shaxs ehtiyotkorlikni tanlashi uchun zarur franshizaning minimal miqdori D ni toping.",
    "fields": [
     {
      "label": "Ehtiyotkor bo‘lganda kutilgan xarajat (sug‘urtasiz)",
      "value": 90,
      "unit": "mln so‘m"
     },
     {
      "label": "Ehtiyotkorsiz kutilgan xarajat (sug‘urtasiz)",
      "value": 120,
      "unit": "mln so‘m"
     },
     {
      "label": "Minimal franshiza D",
      "value": 250,
      "unit": "mln so‘m"
     }
    ],
    "solution": "Ehtiyotkor: 0,1·400 + 50 = 40 + 50 = 90. Ehtiyotkorsiz: 0,3·400 = 120. 90 < 120, shuning uchun sug‘urtasiz ehtiyotkor bo‘ladi. To‘liq sug‘urtada shaxs zarar to‘lamaydi, ehtiyotkorlik xarajatini esa o‘zi ko‘taradi, shuning uchun ehtiyotkorsiz bo‘ladi (axloqiy risk). Franshiza D bilan ehtiyotkorlik foydali bo‘lishi uchun: (0,3 − 0,1)·D ≥ 50 → D ≥ 250.",
    "formula": "(π_ehtiyotkorsiz − π_ehtiyotkor)·D ≥ c",
    "note": ""
   },
   {
    "id": "mm11-p4",
    "title": "Prinsipal–agent: ijara haqi va ulushli shartnoma",
    "text": "Agent harakati x bo‘lganda mahsulot f(x) = 30x, agentning xarajati c(x) = 3x². Agentning muqobil daromadi (zaxira foydaliligi) 20. Samarali harakat darajasini va prinsipal oladigan eng yuqori ijara haqini (agent mahsulotning to‘liq egasi bo‘lib, prinsipalga qat’iy ijara to‘laydi) toping. Keyin agent mahsulotning 60% ini olsa, u qanday harakat tanlashini, bunda mahsulotni, prinsipal ulushini (40%) va agentning sof foydasini toping.",
    "fields": [
     {
      "label": "Samarali harakat x*",
      "value": 5,
      "unit": ""
     },
     {
      "label": "Ijara haqi R",
      "value": 55,
      "unit": ""
     },
     {
      "label": "Ulushli shartnomada agent harakati",
      "value": 3,
      "unit": ""
     },
     {
      "label": "Prinsipal daromadi (40% ulush)",
      "value": 36,
      "unit": ""
     }
    ],
    "solution": "Samarali harakat: f′(x) = c′(x) → 30 = 6x → x* = 5. Umumiy ortiqcha: 30·5 − 3·25 = 150 − 75 = 75. Ijara haqi: R = 75 − 20 = 55. Ulushli shartnoma: agent 0,6·30x − 3x² ni maksimallashtiradi → 18 = 6x → x = 3. Mahsulot: 30·3 = 90; prinsipal ulushi 0,4·90 = 36; agent foydasi 0,6·90 − 3·9 = 54 − 27 = 27 ≥ 20 (ishtirok sharti bajariladi). Ulushli shartnomada harakat samarali darajadan (5) past.",
    "formula": "f′(x) = c′(x);  R = f(x*) − c(x*) − u;  agent ulushi α: α·f′(x) = c′(x)",
    "note": "Manbadagi shartda c(x) ning daraja belgisi tushib qolgan; yechim yo‘li (30 = 6x) bo‘yicha c(x) = 3x² deb tiklandi."
   },
   {
    "id": "mm11-p5",
    "title": "Kredit bozori: zararsizlik stavkasi",
    "text": "Bank ishonchli qarz oluvchi (qarzni 0,95 ehtimol bilan qaytaradi) va xatarli qarz oluvchi (0,7 ehtimol bilan qaytaradi) o‘rtasida farq qila olmaydi. Ularning ulushi teng (50% va 50%). Kredit miqdori 100, bankning resurs qiymati (kredit xarajati) 10%. Qarz oluvchilarning o‘rtacha qaytarish ehtimolini va bank zarar ko‘rmaydigan minimal foiz stavkasini r toping (r ni foizda, yuzdan birgacha aniqlikda yozing).",
    "fields": [
     {
      "label": "O‘rtacha qaytarish ehtimoli",
      "value": 0.825,
      "unit": ""
     },
     {
      "label": "Zararsizlik foiz stavkasi r",
      "value": 33.33,
      "unit": "%"
     }
    ],
    "solution": "O‘rtacha ehtimol: 0,5·0,95 + 0,5·0,7 = 0,475 + 0,35 = 0,825. Zararsizlik sharti: 0,825·(1 + r) = 1,1 → 1 + r = 1,3333 → r ≈ 33,33%. Bunday yuqori stavkada ishonchli qarz oluvchilar kredit olmay qo‘yadi, xatarlilar ulushi ortadi (noxush tanlov, kredit ratsionlash).",
    "formula": "p̄·(1 + r) = 1 + i,  p̄ = Σ ulush·ehtimol",
    "note": ""
   }
  ],
  "open": [
   "Muhokama savollari: 1) Onlayn savdo platformalarida xaridor sifat haqidagi noaniqlikni qanday kamaytiradi? 2) Diplom – inson kapitalimi yoki signalmi? O‘z fikringizni asoslang. 3) Majburiy avtotransport sug‘urtasi qaysi muammoni hal qiladi? 4) Sotuvchi xodimlarga qat’iy maosh yoki savdodan foiz to‘lash – qaysi biri samaraliroq va nima uchun? 5) Davlat korxonalari rahbarlari uchun qanday rag‘batlantirish tizimi maqbul?",
   "Interfaol topshiriq – “Limonlar bozori” simulyatsiyasi. Talabalarning yarmi “sotuvchi” bo‘lib, har biriga yashirin sifat kartochkasi (yuqori yoki past) beriladi; qolganlari “xaridor”. Birinchi bosqichda sifat yashirin; ikkinchisida sotuvchilar “kafolat” berishi mumkin (kafolat past sifatli tovar uchun qimmat); uchinchisida “ekspertiza” xizmati joriy etiladi. Har bosqichda bitimlar soni va narxlarni qayd eting va natijalarni muhokama qiling.",
   "Esse mavzularidan birini tanlang: 1) Diplom: inson kapitali yoki signal? 2) Kredit tarixi va moliyaviy inklyuziya: assimetrik axborotni kamaytirish yo‘llari. 3) Davlat korxonalarida korporativ boshqaruv va KPI tizimi. 4) Sug‘urta bozorida firibgarlik va axloqiy risk: xalqaro tajriba. 5) Raqamli davrda shaxsiy ma’lumotlar: kimning axboroti ko‘proq?",
   "Mustaqil ish: 1) O‘zbekistondagi ishlatilgan avtomobillar, ko‘chmas mulk yoki onlayn savdo bozorlaridan birini tanlab, undagi assimetrik axborot muammolarini va ularni hal qilish mexanizmlarini tahlil qiling. 2) Ikki-uchta sug‘urta kompaniyasining avtotransport sug‘urtasi polislarini (franshiza, bonus-malus, qoplama shartlari) noxush tanlov va axloqiy risk nuqtai nazaridan solishtiring. 3) Biror tijorat bankining kredit berish shartlarini (garov, kredit tarixi va boshqalar) assimetrik axborotni kamaytirish nuqtai nazaridan tahlil qiling. 4) O‘zingiz biladigan tashkilotda xodimlarni rag‘batlantirish tizimini prinsipal–agent nazariyasi asosida tahlil qilib, takliflar bering.",
   "Keys 10. Oliy ta’limda to‘lov-kontrakt va diplomning qiymati. Vaziyat: oliy ta’lim muassasalari soni, jumladan xususiy va xorijiy universitetlar filiallari tez o‘sdi. To‘lov-kontrakt narxlari keng diapazonda farq qiladi. Ish beruvchilar diplom bilan bir qatorda xalqaro sertifikatlar va amaliy tajribaga ko‘proq e’tibor bermoqda. Savollar: 1) Ta’limga investitsiyani NPV usulida baholang: o‘qish xarajatlari (kontrakt va muqobil daromad) va kelajakdagi qo‘shimcha daromadni hisobga oling (IV bob, 4.7-misol). 2) Spens modeli nuqtai nazaridan diplom va xalqaro sertifikatlar qanday signal vazifasini bajaradi? Universitetlar soni oshganda diplomning signal qiymati qanday o‘zgaradi? 3) Ta’lim ijobiy tashqi samaralarga egami? Davlat granti va ta’lim krediti qanday asoslanadi? 4) Universitetlar o‘rtasidagi raqobatni monopolistik raqobat modeli asosida tahlil qiling: differensiatsiya qanday shakllarda namoyon bo‘ladi?"
  ],
  "refs": [
   "1) Onlayn platformada sharhlar, reytinglar, qaytarish kafolati va sotuvchi obro‘si sifat haqidagi axborotni oshkor qiladi (obro‘ va kafolat mexanizmlari). 2) Inson kapitali nuqtai nazarida diplom unumdorlikni oshiradi; signal nuqtai nazarida u faqat yuqori unumdor turni ajratadi. Ikkala talqinni Spens modeli bilan solishtiring. 3) Majburiy sug‘urta noxush tanlovni (faqat yuqori riskli kishilar sug‘urtalanishini) bartaraf etadi. 4) Qat’iy maosh rag‘bat bermaydi, foiz esa rag‘bat beradi, lekin agentni riskka duchor qiladi; murosa – aralash tizim. 5) Rahbar uchun natijaga bog‘liq mukofot (KPI), kuzatuv kengashi va shaffoflik; ishtirok va rag‘bat muvofiqligi shartlariga tayaning.",
   "Simulyatsiyada birinchi bosqichda xaridorlar kutilgan sifatga qarab o‘rtacha narx taklif qiladi, shuning uchun yuqori sifatli sotuvchilar chiqib ketadi va bitimlar kamayadi (noxush tanlov). Kafolat bosqichida past sifatli sotuvchi uchun kafolat qimmat bo‘lgani sababli u ajratuvchi signal vazifasini bajaradi, bitimlar soni ortadi. Ekspertiza bosqichi axborot assimetriyasini kamaytiradi va narxlar sifatga mos tabaqalanadi. Bitimlar soni va o‘rtacha narxni uchala bosqichda solishtirib xulosa chiqaring.",
   "Esse tuzilmasi: tanlangan mavzuda assimetrik axborot turini (yashirin xususiyat yoki yashirin harakat) aniqlang, tegishli modelni (Akerlof, Spens, Rotshild–Stiglits, prinsipal–agent) qo‘llang, mexanizm (signal, skrining, kafolat, kredit byurosi, franshiza) va yechim taklif qiling. Raqamli yoki real misol keltirish, natijada ijtimoiy samaradorlikka baho berish kerak.",
   "Tahlil qilinayotgan bozor yoki tashkilotda qaysi tomon ko‘proq biladi, muammo bitimdan oldin (noxush tanlov) yoki keyin (axloqiy risk) yuzaga kelishini aniqlang. Hal qilish vositalarini (11.7-jadval): signal, skrining, kafolat, franshiza, bonus-malus, monitoring, kredit tarixi yoki rag‘batlantiruvchi shartnomani konkret misol bilan baholang. Takliflar asoslangan va amalga oshirilishi mumkin bo‘lishi kerak.",
   "1) NPV: o‘qish davridagi kontrakt va yo‘qotilgan muqobil daromadni chiqim, o‘qishdan keyingi qo‘shimcha daromadni diskontlangan oqim sifatida hisoblang; NPV > 0 bo‘lsa, investitsiya oqlanadi. 2) Agar diplom ko‘pchilik uchun oson olinadigan bo‘lsa, u yuqori va past unumdorlarni ajratish qobiliyatini yo‘qotadi (birlashtiruvchi muvozanat, XI bob) va ish beruvchilar yangi signallarga (sertifikatlar, portfolio, staj) o‘tadi. 3) Ta’limning tashqi samaralari Pigu subsidiyasini (grantlarni) oqlaydi (X bob); kredit bozorlaridagi assimetrik axborot esa ta’lim kreditlarini davlat tomonidan qo‘llab-quvvatlashni asoslaydi. 4) Universitetlar differensiatsiyasi: yo‘nalish, sifat, brend, joylashuv, o‘qitish tili va shakli, xalqaro hamkorlik, narx."
  ]
 }
};
