// Avtomatik yaratilgan (scripts/apply-practice.py --subject makro): amaliy mashg'ulotlar — masalalar (sonli javob bilan) va ochiq topshiriqlar.
// Manba: scripts/practice-src/makro/NN.json. Himoyalangan ma'lumot (yechimlar): kirmagan foydalanuvchida bo'sh bo'ladi.
export const AUTO_PRACTICE = {
 "1": {
  "goal": "Makroiqtisodiy tahlilning boshlang‘ich ko‘nikmalarini shakllantirish: tarmoqlararo balans, doiraviy aylanish muvozanati, iqtisodiyotning ochiqlik darajasi, iqtisodiy o‘sish sur’atlari va oddiy model muvozanatini hisoblash.",
  "concepts": [
   "Tarmoqlararo balans va to‘g‘ridan-to‘g‘ri xarajatlar koeffitsiyentlari",
   "Yakuniy talab va qo‘shilgan qiymat",
   "Inyeksiyalar va chiqib ketishlar (doiraviy aylanish muvozanati)",
   "Tashqi savdo kvotasi (iqtisodiyotning ochiqlik darajasi)",
   "«70 qoidasi» va iqtisodiy o‘sish",
   "Endogen va ekzogen o‘zgaruvchilar, oqim va zaxira"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 1-bob",
  "tasks": [
   {
    "id": "mk1-p1",
    "title": "Uch tarmoqli tarmoqlararo balans",
    "text": "Uch tarmoqli iqtisodiyotda tarmoqlararo oqimlar quyidagicha (mlrd so‘m): qishloq xo‘jaligi o‘z tarmog‘iga 15, sanoatga 45, xizmatlarga 10 mahsulot yetkazib beradi; sanoat – mos ravishda 25, 100, 35; xizmatlar – 10, 30, 30. Tarmoqlarning yalpi mahsuloti: 150, 350, 250. a) Har bir tarmoq uchun yakuniy talab va qo‘shilgan qiymatni hisoblang. b) Qo‘shilgan qiymat yig‘indisi yakuniy talab yig‘indisiga tengligini tekshiring. c) Bevosita xarajatlar koeffitsiyentlari matritsasini tuzing. Quyida qishloq xo‘jaligi va sanoatning yakuniy talabi, xizmatlarning qo‘shilgan qiymati va jami qo‘shilgan qiymatni kiriting.",
    "fields": [
     {
      "label": "Qishloq xo‘jaligining yakuniy talabi",
      "value": 80,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Sanoatning yakuniy talabi",
      "value": 190,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Xizmatlarning qo‘shilgan qiymati",
      "value": 175,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Jami qo‘shilgan qiymat",
      "value": 450,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "Yakuniy talab = yalpi mahsulot − qatordagi oraliq sotuvlar yig‘indisi: qishloq xo‘jaligi 150 − (15+45+10) = 80; sanoat 350 − (25+100+35) = 190; xizmatlar 250 − (10+30+30) = 180. Jami 450. Qo‘shilgan qiymat = yalpi mahsulot − ustundagi oraliq xarajatlar: qishloq xo‘jaligi 150 − (15+25+10) = 100; sanoat 350 − (45+100+30) = 175; xizmatlar 250 − (10+35+30) = 175. Jami 450. Tenglik bajariladi: 450 = 450. Koeffitsiyentlar aij = zij / Xj: qishloq xo‘jaligi ustuni 0,100; 0,167; 0,067; sanoat ustuni 0,129; 0,286; 0,086; xizmatlar ustuni 0,040; 0,140; 0,120.",
    "formula": "YT(i) = X(i) − Σj zij; QQ(j) = X(j) − Σi zij; aij = zij / Xj; ΣYT = ΣQQ",
    "note": "Tekshiruv: jami oraliq oqimlar 15+45+10+25+100+35+10+30+30 = 300; yalpi mahsulot yig‘indisi 750; 750 − 300 = 450 – ham yakuniy talab, ham qo‘shilgan qiymat yig‘indisi. Koeffitsiyentlar matritsasi javob maydonlariga kiritilmaydi, yechimda berilgan."
   },
   {
    "id": "mk1-p2",
    "title": "Doiraviy aylanish: inyeksiyalar va chiqib ketishlar",
    "text": "Mamlakat iqtisodiyotida: S = 300, T = 400, IM = 250, I = 280, G = 450, X = 200 (mlrd so‘m). a) Inyeksiyalar va chiqib ketishlarni hisoblang. b) Iqtisodiyot muvozanatdami? c) YaIM qaysi yo‘nalishda o‘zgaradi va nima uchun? Quyida inyeksiyalar, chiqib ketishlar va ularning farqini (inyeksiyalar − chiqib ketishlar) kiriting.",
    "fields": [
     {
      "label": "Inyeksiyalar (I + G + X)",
      "value": 930,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Chiqib ketishlar (S + T + IM)",
      "value": 950,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Farq (inyeksiyalar − chiqib ketishlar)",
      "value": -20,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "Inyeksiyalar = I + G + X = 280 + 450 + 200 = 930. Chiqib ketishlar = S + T + IM = 300 + 400 + 250 = 950. Farq 930 − 950 = −20. Muvozanat sharti (inyeksiyalar = chiqib ketishlar) bajarilmaydi. Chiqib ketishlar inyeksiyalardan 20 ga ko‘p, ya’ni xarajatlar oqimiga qaytmagan mablag‘ ortiqcha, shuning uchun yalpi talab kamayadi va YaIM pasayadi.",
    "formula": "Muvozanat: S + T + IM = I + G + X",
    "note": "Inyeksiyalar chiqib ketishlardan kam bo‘lgani uchun YaIM muvozanat holatiga yetguncha kamayadi (doiraviy aylanishdan sarflanmay chiqib ketgan mablag‘ ko‘p)."
   },
   {
    "id": "mk1-p3",
    "title": "Tashqi savdo kvotasi",
    "text": "Mamlakatning eksporti 24 mlrd dollar, importi 31 mlrd dollar, YaIMi 90 mlrd dollar. Tashqi savdo kvotasini, eksport va import kvotalarini hisoblang (bir o‘nli xonagacha yaxlitlang). Natijani O‘zbekistonning 2025-yildagi ko‘rsatkichi (taxminan 53%) bilan taqqoslang.",
    "fields": [
     {
      "label": "Tashqi savdo kvotasi",
      "value": 61.1,
      "unit": "%"
     },
     {
      "label": "Eksport kvotasi",
      "value": 26.7,
      "unit": "%"
     },
     {
      "label": "Import kvotasi",
      "value": 34.4,
      "unit": "%"
     }
    ],
    "solution": "Tashqi savdo kvotasi = (X + IM) / YaIM × 100% = (24 + 31) / 90 × 100% = 61,1%. Eksport kvotasi = 24 / 90 × 100% = 26,7%. Import kvotasi = 31 / 90 × 100% = 34,4%. O‘zbekistonning 2025-yildagi kvotasi darslikka ko‘ra 81,2 / 152,5 × 100% ≈ 53% bo‘lgani uchun berilgan mamlakat iqtisodiyoti ochiqroq (farq taxminan 8 foiz punkti).",
    "formula": "Tashqi savdo kvotasi = (X + IM) / YaIM × 100%",
    "note": "Darslikda O‘zbekiston uchun: eksport 33,8 va import 47,3 mlrd dollar (yig‘indisi 81,1, matnda 81,2 – yaxlitlash farqi), YaIM 152,5 mlrd dollar. Berilgan mamlakatda import eksportdan ko‘p (sof eksport −7 mlrd dollar)."
   },
   {
    "id": "mk1-p4",
    "title": "«70 qoidasi»: daromad necha yilda ikki baravar oshadi",
    "text": "Yiliga 2%, 5% va 7% o‘sish sur’atlarida mamlakat daromadi necha yilda ikki baravar ko‘payishini «70 qoidasi» yordamida hisoblang (ikki baravar ko‘payish muddati ≈ 70 / o‘sish sur’ati). O‘zbekistonning 2025-yildagi o‘sish sur’ati (7,7%) saqlanib qolsa, YaIM necha yilda ikki baravar oshadi? Oxirgisini bir o‘nli xonagacha yaxlitlang.",
    "fields": [
     {
      "label": "2% o‘sishda ikki baravar oshish muddati",
      "value": 35,
      "unit": "yil"
     },
     {
      "label": "5% o‘sishda",
      "value": 14,
      "unit": "yil"
     },
     {
      "label": "7% o‘sishda",
      "value": 10,
      "unit": "yil"
     },
     {
      "label": "7,7% o‘sishda (O‘zbekiston, 2025)",
      "value": 9.1,
      "unit": "yil"
     }
    ],
    "solution": "70 / 2 = 35 yil; 70 / 5 = 14 yil; 70 / 7 = 10 yil; 70 / 7,7 ≈ 9,09 ≈ 9,1 yil.",
    "formula": "T ≈ 70 / g (g – o‘sish sur’ati, foizda)",
    "note": "Aniq formula bo‘yicha T = ln 2 / ln(1+g): 7,7% da ≈ 9,3 yil, ya’ni «70 qoidasi» yaxshi yaqinlashish beradi. O‘zbekistonning 7,7% ko‘rsatkichi darslikdan olingan."
   },
   {
    "id": "mk1-p5",
    "title": "Non bozori modeli: muvozanat va qiyosiy statika",
    "text": "Non bozorida talab funksiyasi Qd = 100 − 2P + 0,5Y, taklif funksiyasi Qs = 3P − 20 − 2Pu. Daromad Y = 40, un narxi Pu = 5. a) Muvozanat narxi va miqdorini toping. b) Daromad 60 ga oshsa, muvozanat qanday o‘zgaradi? c) Modelda qaysi o‘zgaruvchilar endogen, qaysilari ekzogen?",
    "fields": [
     {
      "label": "Dastlabki muvozanat narxi",
      "value": 30,
      "unit": "pul birligi"
     },
     {
      "label": "Dastlabki muvozanat miqdori",
      "value": 60,
      "unit": "birlik"
     },
     {
      "label": "Yangi muvozanat narxi (Y = 60)",
      "value": 32,
      "unit": "pul birligi"
     },
     {
      "label": "Yangi muvozanat miqdori (Y = 60)",
      "value": 66,
      "unit": "birlik"
     }
    ],
    "solution": "Y = 40, Pu = 5: Qd = 100 − 2P + 20 = 120 − 2P; Qs = 3P − 20 − 10 = 3P − 30. Qd = Qs: 120 − 2P = 3P − 30, 5P = 150, P = 30; Q = 120 − 60 = 60. Y = 60: Qd = 100 − 2P + 30 = 130 − 2P; 130 − 2P = 3P − 30, P = 32; Q = 130 − 64 = 66. Daromad oshganda talab egri chizig‘i o‘ngga siljiydi, narx 30 dan 32 ga, miqdor 60 dan 66 ga oshadi. Endogen o‘zgaruvchilar: P va Q; ekzogen: Y va Pu.",
    "formula": "Qd(P, Y) = Qs(P, Pu)",
    "note": "Tekshiruv: P = 30 da Qs = 3·30 − 30 = 60 = Qd; P = 32 da Qs = 3·32 − 30 = 66 = Qd."
   }
  ],
  "open": [
   "Quyidagi o‘zgaruvchilarni oqim va zaxiraga ajrating va sababini izohlang: a) davlat qarzi; b) byudjet taqchilligi; c) iste’mol; d) kapital; e) investitsiyalar; f) pul massasi; g) YaIM; h) ishsizlar soni; i) bir oy davomida ishga joylashganlar soni; j) amortizatsiya. Zaxira va oqim o‘rtasidagi bog‘liqlikni davlat qarzi va byudjet taqchilligi misolida tushuntiring.",
   "Klassik maktabning asosiy g‘oyalarini va Sey qonunining mohiyatini tushuntiring. Buyuk depressiya (1929–1933) klassik nazariyaning qaysi kamchiliklarini ochib berdi va Keyns nazariyasi bunga qanday javob berdi?",
   "2017-yildan keyin O‘zbekistonda makroiqtisodiy siyosatda qanday tub o‘zgarishlar amalga oshirildi? Valyuta bozori, monetar siyosat, soliq va byudjet siyosati bo‘yicha darslikda keltirilgan o‘zgarishlarni sanab, ular iqtisodiyotning ochiqligiga qanday ta’sir qilganini tahlil qiling."
  ],
  "refs": [
   "Oqim (vaqt birligi davomida o‘lchanadi): b) byudjet taqchilligi, c) iste’mol, e) investitsiyalar, g) YaIM, i) oy davomida ishga joylashganlar soni, j) amortizatsiya. Zaxira (ma’lum vaqt momentida o‘lchanadi): a) davlat qarzi, d) kapital, f) pul massasi, h) ishsizlar soni. Mankyuning vannadagi suv misoli: suv hajmi – zaxira, jo‘mrakdan oqayotgan suv – oqim. Davlat qarzi (zaxira) har yili byudjet taqchilligi (oqim) miqdorida ko‘payadi. Yaxshi javobda har bir ko‘rsatkichning o‘lchov birligi (yilga, oyga yoki sanaga) ham ko‘rsatiladi.",
   "Klassik maktab (Smit, Rikardo, Sey, Mill) va neoklassiklar (Marshall, Pigu): bozor mexanizmi o‘z-o‘zini tartibga soladi («ko‘rinmas qo‘l»), narx, ish haqi va foiz stavkalari to‘liq egiluvchan, pul neytral, davlat aralashuvi minimal (laissez-faire). Sey qonuni: «taklif o‘ziga mos talabni yaratadi» – har qanday ishlab chiqarish teng daromad vujudga keltiradi va u to‘liq sarflanadi, shuning uchun umumiy ortiqcha ishlab chiqarish bo‘lmaydi. Buyuk depressiyada AQSHda real YaIM taxminan 27% qisqardi, ishsizlik 25% ga yetdi, ish haqi va narxlarning pasayishi bandlikni tiklamadi – bu narxlar egiluvchanligi va Sey qonuni haqidagi farazlar noto‘g‘ri ekanini ko‘rsatdi. Keyns (1936) samarali talab ishlab chiqarish va bandlikni belgilashini, Sey qonuni amal qilmasligini asoslab, davlat aralashuvini taklif qildi.",
   "Darslikka ko‘ra: 2017-yil sentyabrda valyuta bozori liberallashtirildi, milliy valyutaning erkin konvertatsiyasi joriy etildi; Markaziy bank inflyatsion targetlash rejimiga bosqichma-bosqich o‘tdi (asosiy stavka 2025–2026-yillarda 14%, o‘rta muddatli inflyatsiya maqsadi 5%); 2019-yildan soliq islohoti soliq yukini kamaytirdi va soliqlar sonini qisqartirdi; 2020-yildan MHT-2008 xalqaro standartlarga moslashtirildi; fiskal qoidalar joriy etilib, konsolidatsiyalashgan byudjet taqchilligi 2024-yildagi 3,3% dan 2025-yilda 2,1% gacha qisqardi; JSTga a’zolik muzokaralari yakunlovchi bosqichda. Natijada iqtisodiyot ochiqroq va bozor signallariga sezgirroq bo‘ldi; tashqi savdo kvotasi 2025-yilda taxminan 53% ni tashkil etdi. Yaxshi javobda har bir o‘zgarish fiskal yoki monetar siyosat vositasi sifatida tasniflanadi."
  ]
 },
 "2": {
  "goal": "YaIM va unga tegishli milliy hisoblar ko‘rsatkichlarini (qo‘shilgan qiymat, xarajatlar va daromadlar usullari, YaMD, MD, ShD, tasarrufdagi daromad), jamg‘arma–investitsiya ayniyatini hamda nominal/real ko‘rsatkichlar va narx indekslarini hisoblash va talqin qilish ko‘nikmalarini shakllantirish.",
  "concepts": [
   "Qo‘shilgan qiymat va takroriy hisobdan qochish",
   "YaIMni xarajatlar va daromadlar usullarida hisoblash",
   "YaMD, SMD, MD, ShD va shaxsiy tasarrufdagi daromad zanjiri",
   "Jamg‘armalar va investitsiyalar ayniyati, «egizak taqchilliklar»",
   "Nominal va real YaIM, YaIM deflyatori",
   "Laspeyres, Paashe va Fisher indekslari; iste’mol narxlari indeksi (INI)"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 2-bob",
  "tasks": [
   {
    "id": "mk2-p1",
    "title": "Paxtadan kiyimgacha: qo‘shilgan qiymat",
    "text": "Paxta yetishtiruvchi fermer paxtani 600 mln so‘mga paxta-to‘qimachilik klasteriga sotdi. Klaster undan ip va mato ishlab chiqarib, tikuvchilik fabrikasiga 1100 mln so‘mga sotdi. Fabrika kiyimlar tikib, ulgurji savdo kompaniyasiga 1700 mln so‘mga sotdi; ulgurji kompaniya chakana savdo do‘konlariga 1950 mln so‘mga, do‘konlar esa aholiga 2300 mln so‘mga sotdi. a) Har bir bosqichdagi qo‘shilgan qiymatni hisoblang. b) Ushbu jarayonning YaIMga qo‘shgan hissasi qancha? c) Agar 30 foiz kiyim eksport qilingan bo‘lsa, natija o‘zgaradimi? Quyida klaster, fabrika va chakana savdoning qo‘shilgan qiymatini va YaIMga jami hissani kiriting.",
    "fields": [
     {
      "label": "Klasterning qo‘shilgan qiymati",
      "value": 500,
      "unit": "mln so‘m"
     },
     {
      "label": "Fabrikaning qo‘shilgan qiymati",
      "value": 600,
      "unit": "mln so‘m"
     },
     {
      "label": "Chakana savdoning qo‘shilgan qiymati",
      "value": 350,
      "unit": "mln so‘m"
     },
     {
      "label": "YaIMga jami hissa",
      "value": 2300,
      "unit": "mln so‘m"
     }
    ],
    "solution": "Qo‘shilgan qiymat = sotuv − sotib olingan oraliq mahsulot: fermer 600 − 0 = 600; klaster 1100 − 600 = 500; fabrika 1700 − 1100 = 600; ulgurji savdo 1950 − 1700 = 250; chakana savdo 2300 − 1950 = 350. Yig‘indi 600+500+600+250+350 = 2300 = yakuniy mahsulot qiymati (aholiga sotuv). c) Eksport qilingan qism ham mamlakatda ishlab chiqarilgan, shuning uchun YaIM o‘zgarmaydi (2300); faqat tarkibi o‘zgaradi: 30% eksportga (690), 70% iste’molga (1610).",
    "formula": "QQ = chiqarilgan mahsulot − oraliq mahsulot; ΣQQ = yakuniy mahsulot qiymati",
    "note": "Fermer va ulgurji savdo qo‘shilgan qiymati mos ravishda 600 va 250 mln so‘m (javob maydonlariga kiritilmagan). Takroriy hisobdan qochish uchun faqat yakuniy mahsulot (2300) yoki qo‘shilgan qiymatlar yig‘indisi olinadi; sotuvlar yig‘indisi (7650) YaIM emas."
   },
   {
    "id": "mk2-p2",
    "title": "YaIMni xarajatlar va daromadlar usullarida hisoblash",
    "text": "Quyidagi ma’lumotlar asosida (mlrd so‘m) YaIMni xarajatlar va daromadlar usullarida hisoblang: shaxsiy iste’mol – 2450; yalpi xususiy investitsiyalar – 820; davlat xaridlari – 690; eksport – 610; import – 780; ish haqi va ijtimoiy ajratmalar – 1940; renta – 110; foiz – 160; mulkdorlar daromadi – 230; korporatsiyalar foydasi – 450; egri soliqlar (subsidiyalarsiz) – 290; amortizatsiya – 610. Ikki natija mos keladimi? Statistik tafovutni aniqlang.",
    "fields": [
     {
      "label": "YaIM (xarajatlar usuli)",
      "value": 3790,
      "unit": "mlrd so‘m"
     },
     {
      "label": "YaIM (daromadlar usuli)",
      "value": 3790,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Statistik tafovut",
      "value": 0,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "Xarajatlar usuli: YaIM = C + I + G + NX = 2450 + 820 + 690 + (610 − 780) = 3960 − 170 = 3790. Daromadlar usuli: ish haqi 1940 + renta 110 + foiz 160 + mulkdorlar daromadi 230 + korporatsiyalar foydasi 450 + egri soliqlar 290 + amortizatsiya 610 = 3790. Ikki natija mos keladi, statistik tafovut 0.",
    "formula": "YaIM = C + I + G + (X − IM); YaIM = ish haqi + renta + foiz + mulkdorlar daromadi + foyda + egri soliqlar + amortizatsiya",
    "note": "Sof eksport manfiy (−170), ya’ni import eksportdan ko‘p. Amalda ikki usul statistik tafovut bilan farq qiladi; bu masalada ma’lumotlar tafovutsiz tanlangan."
   },
   {
    "id": "mk2-p3",
    "title": "YaIMdan shaxsiy tasarrufdagi daromadgacha va jamg‘arma",
    "text": "2-masala ma’lumotlariga quyidagilarni qo‘shing: xorijdan olingan sof omil daromadlari – 45; korporatsiyalar foydasiga soliq – 120; taqsimlanmagan foyda – 140; ijtimoiy sug‘urta ajratmalari – 260; transfert to‘lovlari – 330; shaxsiy daromad solig‘i – 310 (mlrd so‘m). YaMD, SMD, MD, ShD va shaxsiy tasarrufdagi daromadni hisoblang. Agar iste’mol 2450 bo‘lsa, uy xo‘jaliklari jamg‘armasi va jamg‘arish normasi qancha (jamg‘arish normasi – jamg‘armaning tasarrufdagi daromadga nisbati, 1 o‘nli xonagacha yaxlitlang)? Quyida shaxsiy daromad, tasarrufdagi daromad, jamg‘arma va jamg‘arish normasini kiriting.",
    "fields": [
     {
      "label": "Shaxsiy daromad (ShD)",
      "value": 2745,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Shaxsiy tasarrufdagi daromad",
      "value": 2435,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Uy xo‘jaliklari jamg‘armasi",
      "value": -15,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Jamg‘arish normasi",
      "value": -0.6,
      "unit": "%"
     }
    ],
    "solution": "YaMD = YaIM + sof omil daromadlari = 3790 + 45 = 3835. SMD = YaMD − amortizatsiya = 3835 − 610 = 3225. MD = SMD − egri soliqlar = 3225 − 290 = 2935. ShD = MD − foyda solig‘i − taqsimlanmagan foyda − ijtimoiy ajratmalar + transfertlar = 2935 − 120 − 140 − 260 + 330 = 2745. Tasarrufdagi daromad = ShD − shaxsiy daromad solig‘i = 2745 − 310 = 2435. Jamg‘arma = 2435 − 2450 = −15. Jamg‘arish normasi = −15 / 2435 × 100% ≈ −0,6%.",
    "formula": "YaMD = YaIM + sof omil daromadlari; SMD = YaMD − A; MD = SMD − egri soliqlar; ShD = MD − foyda solig‘i − taqsimlanmagan foyda − ijtimoiy ajratmalar + transfertlar; ShTD = ShD − shaxsiy daromad solig‘i",
    "note": "Jamg‘arma manfiy: uy xo‘jaliklari daromadidan ko‘p sarflagan (qarz olgan yoki oldingi jamg‘armalarini sarflagan). Oraliq natijalar: YaMD 3835, SMD 3225, MD 2935 – javob maydonlarida emas, yechimda berilgan."
   },
   {
    "id": "mk2-p4",
    "title": "Milliy jamg‘arma va tashqi dunyo jamg‘armasi",
    "text": "Mamlakatda xususiy jamg‘arma 380, investitsiyalar 450, soliqlar 520, davlat xaridlari 560 mlrd so‘m. a) Davlat jamg‘armasi va milliy jamg‘armani toping. b) Sof eksport qanchaga teng bo‘lishi kerak? c) Tashqi dunyo jamg‘armasi qancha? (Transfertlar e’tiborga olinmaydi, soliqlar sof soliqlar deb hisoblansin.)",
    "fields": [
     {
      "label": "Davlat jamg‘armasi",
      "value": -40,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Milliy jamg‘arma",
      "value": 340,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Sof eksport",
      "value": -110,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Tashqi dunyo jamg‘armasi",
      "value": 110,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "Davlat jamg‘armasi = T − G = 520 − 560 = −40 (byudjet taqchilligi). Milliy jamg‘arma = xususiy + davlat = 380 + (−40) = 340. Ayniyat: S = I + NX, demak NX = S − I = 340 − 450 = −110. Tashqi dunyo jamg‘armasi = −NX = 110 (investitsiyalarning 110 qismi xorijiy jamg‘arma hisobiga moliyalashadi).",
    "formula": "Sg = T − G; S = Sp + Sg; S = I + NX; Sxorij = −NX",
    "note": "«Egizak taqchilliklar»: byudjet taqchilligi (40) bilan birga tashqi savdo taqchilligi (110) mavjud. Tashqi savdo taqchilligi 110, byudjet taqchilligi 40 dan katta, chunki xususiy jamg‘arma (380) investitsiyalardan (450) ham kam."
   },
   {
    "id": "mk2-p5",
    "title": "Nominal va real YaIM, Laspeyres, Paashe va Fisher indekslari",
    "text": "Iqtisodiyotda uch tovar ishlab chiqariladi. Bazis yil (2024): olma – 2 so‘m/kg, 100 kg; non – 4 so‘m, 200 dona; ko‘ylak – 50 so‘m, 10 dona. Joriy yil (2025): olma – 3 so‘m, 110 kg; non – 5 so‘m, 190 dona; ko‘ylak – 52 so‘m, 14 dona. a) Nominal va real YaIMni hisoblang. b) Real o‘sish sur’atini toping. c) Laspeyres, Paashe va Fisher indekslarini hisoblang va natijalarni izohlang. Quyida 2025-yil real YaIMi (2024-yil narxlarida) va uch indeksni (3 o‘nli xonagacha) kiriting.",
    "fields": [
     {
      "label": "Real YaIM (2025, 2024-yil narxlarida)",
      "value": 1680,
      "unit": "so‘m"
     },
     {
      "label": "Laspeyres indeksi",
      "value": 1.213,
      "unit": ""
     },
     {
      "label": "Paashe indeksi",
      "value": 1.195,
      "unit": ""
     },
     {
      "label": "Fisher indeksi",
      "value": 1.204,
      "unit": ""
     }
    ],
    "solution": "2024-yil nominal YaIM = 2·100 + 4·200 + 50·10 = 200 + 800 + 500 = 1500. 2025-yil nominal = 3·110 + 5·190 + 52·14 = 330 + 950 + 728 = 2008. Real YaIM (2024-yil narxlarida) = 2·110 + 4·190 + 50·14 = 220 + 760 + 700 = 1680. Real o‘sish = 1680 / 1500 − 1 = 12,0%. Laspeyres = Σ Pt·Q0 / Σ P0·Q0 = (3·100 + 5·200 + 52·10) / 1500 = 1820 / 1500 = 1,213. Paashe (deflyator) = Σ Pt·Qt / Σ P0·Qt = 2008 / 1680 = 1,195. Fisher = √(1,2133 · 1,1952) = 1,204.",
    "formula": "IL = ΣPtQ0 / ΣP0Q0; IP = ΣPtQt / ΣP0Qt; IF = √(IL · IP); real YaIM = ΣP0Qt",
    "note": "Laspeyres narxlar o‘sishini oshirib ko‘rsatadi (21,3%), Paashe kamaytirib ko‘rsatadi (19,5%); Fisher – ikkalasining o‘rta geometrigi (20,4%). Nominal o‘sish 2008/1500 − 1 = 33,9%, shundan real o‘sish 12,0%."
   }
  ],
  "open": [
   "2024-yilda nominal YaIM 1454,6 trln so‘m, 2023-yilda – 1066,6 trln so‘m (rasmiy dastlabki qiymatlar), YaIM deflyatori o‘sishi 13,3 foiz. a) Nominal o‘sish sur’atini hisoblang. b) Real o‘sish sur’atini toping va uni rasmiy 6,5 foizlik ko‘rsatkich bilan solishtiring. c) Farq qanday sabablarga ko‘ra yuzaga kelishi mumkin? (Ko‘rsatma: statistik ma’lumotlarning qayta ko‘rib chiqilishini eslang.)",
   "Talabaning nominal stipendiyasi 2023-yilda 700 ming so‘m, 2025-yilda 820 ming so‘m bo‘ldi. Shu davrda INI 2024-yilda 9,8 foizga, 2025-yilda 7,3 foizga oshdi. Real stipendiya o‘sdimi yoki kamaydimi? Necha foizga? Natijani izohlang.",
   "Nima uchun YaIM farovonlikning mukammal o‘lchovi emas? Qanday muqobil ko‘rsatkichlarni bilasiz? Javobingizda YaIMga kiritilmaydigan operatsiyalardan misollar keltiring."
  ],
  "refs": [
   "Nominal o‘sish = 1454,6 / 1066,6 − 1 ≈ 36,4%. Deflyator o‘sishi 13,3% bo‘lsa, real o‘sish = 1,3638 / 1,133 − 1 ≈ 20,4%, bu rasmiy 6,5% dan ancha yuqori. Darslikdagi hisob: 1,133 × 1,065 ≈ 1,207, ya’ni nominal o‘sish taxminan 20,7% bo‘lishi kerak edi. Katta farq 2023-yilgi nominal YaIM dastlabki qiymati keyin qayta ko‘rib chiqilganini (yuqoriroq bo‘lganini) ko‘rsatadi. Boshqa sabablar: baza yili va narxlar o‘zgarishi, metodologiya o‘zgarishi, qamrov (norasmiy sektor) tuzatishlari. Xulosa: o‘sish sur’atini hisoblashda bir xil metodologiyadagi (qayta ko‘rib chiqilgan) qatorlarni taqqoslash kerak.",
   "Narxlar 2 yilda 1,098 × 1,073 ≈ 1,178 marta (17,8%) oshgan. Nominal stipendiya 820 / 700 = 1,171 marta (17,1%) oshgan. Real stipendiya 1,171 / 1,178 ≈ 0,994, ya’ni taxminan 0,6% ga kamaygan. Ya’ni nominal oshish inflyatsiyani to‘liq qoplamagan. Yaxshi javobda 2023-yil narxlarida real stipendiya (700 ming so‘m) bilan 2025-yil real qiymati (≈696 ming) solishtiriladi va nominal hamda real ko‘rsatkichlar farqi aytiladi.",
   "YaIM bozor operatsiyalarini o‘lchaydi, farovonlikning ko‘p jihatini hisobga olmaydi: uy ishlari va ko‘ngilli mehnat, yashirin (norasmiy) iqtisodiyot, bo‘sh vaqt, ekologiya va resurslarning tugashi, daromad tengsizligi, hayot sifati. Qayta sotilgan (ikkinchi qo‘l) tovarlar, sof moliyaviy bitimlar va transfertlar YaIMga kiritilmaydi. Muqobil ko‘rsatkichlar: inson rivojlanishi indeksi (IRI), baxt indeksi, «yashil» YaIM, jon boshiga YaIM XQP bo‘yicha. Yaxshi javobda YaIMning ijobiy tomoni (taqqoslanuvchan, hisoblash usuli aniq) ham aytiladi."
  ]
 },
 "3": {
  "goal": "Iqtisodiy tsikl bosqichlari, potensial YaIM va YaIM uzilishi, Samuelson multiplikator-akselerator modeli, retsessiya mezoni, shoklar va tarmoqlarning tsiklga sezgirligini hisob-kitoblar va tahlil orqali o‘zlashtirish.",
  "concepts": [
   "YaIM uzilishi (output gap)",
   "Retsessiya mezoni, cho‘qqi va tub nuqta",
   "Multiplikator-akselerator modeli (cv sharti)",
   "Talab shoki va taklif shoki",
   "Tsiklga sezgirlik koeffitsiyenti",
   "Ilg‘or, mos va kechikuvchi indikatorlar"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 3-bob",
  "tasks": [
   {
    "id": "mk3-p1",
    "title": "Potensial YaIM va YaIM uzilishi",
    "text": "Mamlakatda potensial YaIM yiliga 5 foizga o‘sadi. 2024-yilda haqiqiy va potensial YaIM 1000 trln so‘mga teng bo‘lgan. 2025-yilda haqiqiy YaIM 2 foizga, 2026-yilda 8 foizga o‘sdi. Har yil uchun potensial YaIMni, YaIM uzilishini (trln so‘mda va foizda) toping va qaysi siyosat maqsadga muvofiqligini aniqlang.",
    "fields": [
     {
      "label": "2026-yilgi potensial YaIM",
      "value": 1102.5,
      "unit": "trln so‘m"
     },
     {
      "label": "2025-yilgi YaIM uzilishi",
      "value": -30,
      "unit": "trln so‘m"
     },
     {
      "label": "2025-yilgi YaIM uzilishi (foizda)",
      "value": -2.86,
      "unit": "%"
     },
     {
      "label": "2026-yilgi YaIM uzilishi",
      "value": -0.9,
      "unit": "trln so‘m"
     }
    ],
    "solution": "Potensial: Y*2025 = 1000·1,05 = 1050; Y*2026 = 1050·1,05 = 1102,5. Haqiqiy: Y2025 = 1000·1,02 = 1020; Y2026 = 1020·1,08 = 1101,6. Uzilish 2025: 1020 − 1050 = −30 trln, (−30/1050)·100 = −2,86%. Uzilish 2026: 1101,6 − 1102,5 = −0,9 trln, ya’ni −0,08%.",
    "formula": "Y* t = Y* t−1·(1 + 0,05); uzilish = (Y − Y*)/Y*·100%",
    "note": "2025-yilda salbiy uzilish (−2,86%) — rag‘batlantiruvchi (ekspansion) siyosat maqsadga muvofiq. 2026-yilda uzilish deyarli yopilgan (−0,08%), iqtisodiyot potensial darajaga yetgan: neytral siyosat, qizib ketish xavfi uchun ehtiyotkor nazorat kerak."
   },
   {
    "id": "mk3-p2",
    "title": "Samuelson multiplikator-akselerator modeli",
    "text": "Samuelson modelida Yt = Ct + It + A, Ct = c·Yt−1, It = v·(Ct − Ct−1); c = 0,75, v = 1,2, avtonom xarajatlar A = 50. Boshlang‘ich muvozanatni toping. 1-davrda A bir martalik 60 ga oshadi (keyin yana 50 ga qaytadi). Keyingi 6 davr (2–7) uchun Y ni hisoblang va cv ko‘paytmasi bo‘yicha tebranishlar xarakterini aniqlang.",
    "fields": [
     {
      "label": "Boshlang‘ich muvozanat daromadi Y",
      "value": 200,
      "unit": "birlik"
     },
     {
      "label": "2-davr daromadi Y2",
      "value": 299,
      "unit": "birlik"
     },
     {
      "label": "3-davr daromadi Y3",
      "value": 309.35,
      "unit": "birlik"
     },
     {
      "label": "7-davr daromadi Y7",
      "value": 159.65,
      "unit": "birlik"
     }
    ],
    "solution": "Muvozanat: Y = A/(1 − c) = 50/0,25 = 200, C = 150, I = 0. 1-davrda Y1 = 200 + 60 = 260, C1 = 150 (darslikdagi misolga o‘xshash). 2-davr: C = 0,75·260 = 195; I = 1,2·(195 − 150) = 54; Y = 195 + 54 + 50 = 299. 3-davr: C = 224,25; I = 35,1; Y = 309,35. 4-davr: C = 232,01; I = 9,32; Y = 291,33. 5-davr: C = 218,5; I = −16,22; Y = 252,28. 6-davr: C = 189,21; I = −35,15; Y = 204,06. 7-davr: C = 153,04; I = −43,39; Y = 159,65. cv = 0,75·1,2 = 0,9.",
    "formula": "Y = A/(1 − c); Yt = c(1 + v)Yt−1 − cvYt−2 + A; tebranish xarakteri cv ga bog‘liq",
    "note": "Shart «A 60 ga oshadi» deb talqin qilindi: Y1 = 200 + 60 = 260 (darslikdagi 100 → 110 misoli kabi). cv = 0,9 < 1 — tebranishlar so‘nuvchi; hozircha 7-davrda Y muvozanatdan (200) pastga tushgan, keyin yana ko‘tariladi va asta-sekin 200 ga qaytadi."
   },
   {
    "id": "mk3-p3",
    "title": "Retsessiyani aniqlash",
    "text": "Mamlakat YaIMi choraklar bo‘yicha (o‘tgan chorakka nisbatan, mavsumiylik hisobga olingan holda) quyidagicha o‘zgargan: +1,2%; +0,8%; −0,3%; −0,9%; −0,4%; +0,6%; +1,1%. Retsessiya bo‘lganmi? Qaysi choraklarda? Cho‘qqi va tub nuqtani aniqlang. Retsessiya davomida YaIM jami necha foizga qisqargan?",
    "fields": [
     {
      "label": "Retsessiya davomiyligi (ketma-ket qisqargan choraklar)",
      "value": 3,
      "unit": "chorak"
     },
     {
      "label": "Retsessiya davomida YaIMning jami qisqarishi",
      "value": 1.59,
      "unit": "%"
     }
    ],
    "solution": "Ketma-ket ikki va undan ortiq chorak qisqarish — retsessiya. 3, 4 va 5-choraklarda YaIM qisqargan (−0,3; −0,9; −0,4), demak retsessiya 3 chorak davom etgan. Cho‘qqi — 2-chorak oxiri, tub nuqta — 5-chorak oxiri. Jami: 0,997·0,991·0,996 = 0,98407, ya’ni qisqarish 1 − 0,98407 = 1,59%.",
    "formula": "Jami o‘zgarish = Π(1 + gi) − 1",
    "note": "Oddiy yig‘indi (−0,3 − 0,9 − 0,4 = −1,6%) taxminiy, aniq qiymat murakkab foiz bilan hisoblanadi: −1,59%. Retsessiyaning amaliy mezoni — ketma-ket kamida ikki chorak real YaIM pasayishi. 6–7-choraklarda tiklanish bosqichi."
   },
   {
    "id": "mk3-p4",
    "title": "Neft narxi shoki",
    "text": "Neft eksport qiluvchi mamlakatda neft eksporti YaIMning 25 foizini tashkil etadi. Neft narxi bir yilda 40 foizga pasaydi, eksport hajmi esa o‘zgarmadi. Bu YaIMga birinchi navbatda qanday ta’sir ko‘rsatadi (multiplikator samarasisiz)? Multiplikator 1,6 ga teng bo‘lsa, yakuniy ta’sir qanday? Bu talab shokimi yoki taklif shokimi?",
    "fields": [
     {
      "label": "Birlamchi ta’sir (multiplikatorsiz)",
      "value": -10,
      "unit": "% YaIM"
     },
     {
      "label": "Yakuniy ta’sir (multiplikator 1,6)",
      "value": -16,
      "unit": "% YaIM"
     }
    ],
    "solution": "Eksport tushumi 40% ga kamaydi: 25%·0,40 = 10% YaIM. Birlamchi ta’sir −10% YaIM. Multiplikator bilan: −10%·1,6 = −16% YaIM.",
    "formula": "ΔY birlamchi = eksport ulushi·narx o‘zgarishi; ΔY yakuniy = k·ΔY birlamchi",
    "note": "Eksport tushumining kamayishi mamlakat mahsulotiga tashqi talabning pasayishi, ya’ni salbiy talab shoki. Eslatma: −16% — multiplikatorning mexanik qo‘llanishi, amalda import kamayishi, valyuta kursi va byudjet siyosati ta’sirni yumshatadi. Neft importyorlari uchun esa xarajatlar pasayadi — ijobiy taklif shoki."
   },
   {
    "id": "mk3-p5",
    "title": "Tarmoqlarning tsiklga sezgirligi",
    "text": "Retsessiya yilida YaIM −2% ga o‘zgargan, qurilish −12%, avtomobil sotuvlari −18%, oziq-ovqat sanoati +0,5%, sog‘liqni saqlash xizmatlari +1,5%. Tsiklga sezgirlik koeffitsiyentini (tarmoq o‘sishining YaIM o‘sishiga nisbati) hisoblang va tarmoqlarni tsiklik, atsiklik, kontrtsiklik guruhlarga ajrating.",
    "fields": [
     {
      "label": "Qurilish sezgirligi",
      "value": 6,
      "unit": "marta"
     },
     {
      "label": "Avtomobil sotuvlari sezgirligi",
      "value": 9,
      "unit": "marta"
     },
     {
      "label": "Oziq-ovqat sanoati sezgirligi",
      "value": -0.25,
      "unit": "marta"
     },
     {
      "label": "Sog‘liqni saqlash sezgirligi",
      "value": -0.75,
      "unit": "marta"
     }
    ],
    "solution": "Qurilish: −12/−2 = 6. Avtomobil: −18/−2 = 9. Oziq-ovqat: 0,5/−2 = −0,25. Sog‘liqni saqlash: 1,5/−2 = −0,75. Koeffitsiyent > 1 — kuchli tsiklik (qurilish, avtomobil sotuvlari); manfiy — tsiklga teskari harakat.",
    "formula": "sezgirlik = tarmoq o‘sishi / YaIM o‘sishi",
    "note": "Qat’iy hisobda oziq-ovqat va sog‘liqni saqlash koeffitsiyenti manfiy (kontrtsiklik, ayniqsa sog‘liqni saqlash −0,75). Oziq-ovqat (−0,25 ≈ 0) esa amalda atsiklik deb olinadi, chunki talab barqaror. Qurilish va avtomobil — tsiklik tarmoqlar."
   }
  ],
  "open": [
   "Siyosiy biznes-tsikl nazariyasi va real biznes-tsikllar nazariyasining asosiy g‘oyalarini taqqoslang: ular tsikl sabablarini va davlat barqarorlashtirish siyosatining zarurligini qanday baholaydi?",
   "Ilg‘or, mos va kechikuvchi indikatorlarga misollar keltiring. PMI indeksi nimani ko‘rsatadi? O‘zbekiston uchun ilg‘or indikatorlar tizimini (biznes kayfiyati indeksi, kreditlar, import) taklif qiling va asoslang.",
   "2008–2009-yillardagi jahon moliyaviy inqirozining sabablari va bosqichlarini tavsiflang. Globallashuv sharoitida shoklar mamlakatlararo qanday kanallar orqali tarqaladi?"
  ],
  "refs": [
   "Siyosiy biznes-tsikl (Nordxaus, 1975): hukumatlar saylov oldidan xarajatlarni oshirib, soliqlarni kamaytirib iqtisodiyotni rag‘batlantiradi, saylovdan keyin inflyatsiyani jilovlash uchun siyosatni qattiqlashtiradi — tsikl siyosiy sababga ega. Real biznes-tsikllar nazariyasi: tebranishlar texnologik shoklarga iqtisodiyotning samarali moslashuvi, shuning uchun davlat barqarorlashtirish siyosati zarur emas. Mezon: sabablar (siyosat va texnologiya), siyosiy xulosa farqi va tanqidiy baho.",
   "Ilg‘or indikatorlar tsiklni oldindan ko‘rsatadi (biznes kayfiyati, yangi buyurtmalar, kreditlar, fond indekslari), mos indikatorlar tsikl bilan bir vaqtda o‘zgaradi (YaIM, sanoat ishlab chiqarishi), kechikuvchilar keyin (ishsizlik, inflyatsiya). PMI (xaridorlar menejerlari indeksi) so‘rovga asoslangan: 50 dan yuqori — faollik o‘sishi, past — qisqarishi. O‘zbekiston uchun indikatorlar: biznes kayfiyati indeksi, bank kreditlari hajmi, import (ayniqsa investitsion tovarlar); har birining tsikldan oldin kelishini asoslash kerak.",
   "2008–2009 inqirozi AQSH ipoteka bozoridagi pufak, murakkab moliyaviy hosilalar, yuqori leverij va riskni noto‘g‘ri baholashdan boshlanib, global moliyaviy tizim inqiroziga aylandi (darslikdagi 3.4-jadvalga qarang). Shok tarqalish kanallari: savdo, moliyaviy (xalqaro banklar orqali), ishonch kanali va global qiymat zanjirlari. Misol: 2021-yilda Tayvandagi yarimo‘tkazgich ishlab chiqarish uzilishining butun dunyo avtomobilsozligiga ta’siri."
  ]
 },
 "4": {
  "goal": "Ishchi kuchi, ishsizlik darajasi va iqtisodiy faollikni hisoblash; mehnat bozori muvozanati, statsionar ishsizlik, Ouken qonuni va bandlik multiplikatori bo‘yicha amaliy ko‘nikmalarni shakllantirish.",
  "concepts": [
   "Ishchi kuchi, band aholi va ishsizlar",
   "Ishsizlik va iqtisodiy faollik darajasi",
   "Majburiy ishsizlik va ish haqining qat’iyligi",
   "Mankyuning statsionar ishsizlik modeli",
   "Ouken qonuni (ikki shakli)",
   "Bandlik multiplikatori"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 4-bob",
  "tasks": [
   {
    "id": "mk4-p1",
    "title": "Ishchi kuchi va ishsizlik darajasi",
    "text": "Mamlakatda aholi soni 40 mln, mehnatga layoqatli yoshdagi aholi 24 mln, shundan talabalar 2,1 mln, uy bekalari 2,4 mln, nogironlar 0,5 mln, umidini uzgan ishchilar 0,3 mln kishi (barchasi nofaol). Band aholi 17,5 mln kishi. Ishchi kuchi, ishsizlar soni, ishsizlik darajasi va iqtisodiy faollik darajasini toping. Umidini uzgan ishchilar ham ishsiz hisoblansa, ishsizlik darajasi qancha bo‘ladi?",
    "fields": [
     {
      "label": "Ishchi kuchi",
      "value": 18.7,
      "unit": "mln kishi"
     },
     {
      "label": "Ishsizlar soni",
      "value": 1.2,
      "unit": "mln kishi"
     },
     {
      "label": "Ishsizlik darajasi",
      "value": 6.42,
      "unit": "%"
     },
     {
      "label": "Iqtisodiy faollik darajasi",
      "value": 77.92,
      "unit": "%"
     }
    ],
    "solution": "Nofaollar: 2,1 + 2,4 + 0,5 + 0,3 = 5,3 mln. Ishchi kuchi = 24 − 5,3 = 18,7 mln. Ishsizlar = 18,7 − 17,5 = 1,2 mln. Ishsizlik darajasi = 1,2/18,7 = 6,42%. Iqtisodiy faollik = 18,7/24 = 77,92%. Umidini uzganlar bilan: ishsiz 1,5 mln, ishchi kuchi 19,0 mln, daraja 1,5/19,0 = 7,89%.",
    "formula": "L = E + U; u = U/L·100%; faollik = L / mehnatga layoqatli aholi·100%",
    "note": "Iqtisodiy faollik darajasi mehnatga layoqatli yoshdagi aholiga nisbatan olindi (aholi 40 mln emas). Umidini uzgan ishchilar rasmiy statistikada ishsiz hisoblanmaydi, shuning uchun rasmiy daraja ishsizlikni kamaytirib ko‘rsatadi. Qo‘shimcha natijalar: Umidini uzganlar bilan ishsizlik darajasi = 7.89 %."
   },
   {
    "id": "mk4-p2",
    "title": "Mehnat bozori muvozanati va minimal ish haqi",
    "text": "Mehnat bozorida talab LD = 120 − 8(W/P), taklif LS = 20 + 12(W/P) (L — mln kishi soat). Muvozanat real ish haqi va bandlikni toping. Davlat real ish haqining minimal darajasini 6 birlikda belgilasa, ishsizlik qancha bo‘ladi? Bu ishsizlik qaysi turga kiradi?",
    "fields": [
     {
      "label": "Muvozanat real ish haqi W/P",
      "value": 5,
      "unit": "birlik"
     },
     {
      "label": "Muvozanat bandlik",
      "value": 80,
      "unit": "mln kishi soat"
     },
     {
      "label": "Minimal ish haqi (6) da ishsizlik",
      "value": 20,
      "unit": "mln kishi soat"
     }
    ],
    "solution": "LD = LS: 120 − 8w = 20 + 12w, 100 = 20w, w = 5; L = 120 − 40 = 80. W/P = 6 da: LD = 120 − 48 = 72, LS = 20 + 72 = 92. Ishsizlik = LS − LD = 92 − 72 = 20.",
    "formula": "LD = LS; ishsizlik = LS − LD (W/P = 6 da)",
    "note": "Bu majburiy ishsizlik (ish haqining qat’iyligi tufayli): ish haqi muvozanatdan yuqori, bandlik 80 dan 72 ga tushadi, ishsizlar 20 mln kishi soat. Pigu konsepsiyasiga ko‘ra ish haqi moslashuvchan bo‘lsa, ishsizlik yo‘qoladi."
   },
   {
    "id": "mk4-p3",
    "title": "Statsionar ishsizlik darajasi",
    "text": "Har oy band ishchilarning 2 foizi ishini yo‘qotadi, ishsizlarning 30 foizi ish topadi. Statsionar ishsizlik darajasini va o‘rtacha ishsizlik davomiyligini hisoblang. Hukumat ish topish darajasini 40 foizga yetkazsa, ishsizlik qanchaga kamayadi? Ishchi kuchi 15 mln kishi bo‘lsa, bu necha kishini ishga joylashtirish demakdir?",
    "fields": [
     {
      "label": "Statsionar ishsizlik darajasi",
      "value": 6.25,
      "unit": "%"
     },
     {
      "label": "O‘rtacha ishsizlik davomiyligi",
      "value": 3.33,
      "unit": "oy"
     },
     {
      "label": "Ishsizlik darajasining kamayishi (f = 0,4 da)",
      "value": 1.49,
      "unit": "foiz punkti"
     },
     {
      "label": "Qo‘shimcha ishga joylashganlar",
      "value": 223214,
      "unit": "kishi"
     }
    ],
    "solution": "u* = s/(s + f) = 0,02/(0,02 + 0,30) = 6,25%. Davomiylik = 1/f = 1/0,3 = 3,33 oy. f = 0,4 da: u* = 0,02/0,42 = 4,76%; kamayish = 6,25 − 4,76 = 1,49 foiz punkti. Ishsizlar: 15 mln·0,0625 = 937 500 dan 15 mln·0,0476 = 714 286 gacha, farqi ≈ 223 214 kishi.",
    "formula": "u* = s/(s + f); davomiylik = 1/f",
    "note": "Natija (223 214 kishi) yaxlitlangan, aniq farq 223 214,3. Raqamlashtirish ish topish darajasini oshiradi, shu sababli friksion ishsizlik kamayadi."
   },
   {
    "id": "mk4-p4",
    "title": "Ouken qonuni: yo‘qotilgan mahsulot",
    "text": "Tabiiy ishsizlik darajasi 6%, haqiqiy daraja 9%, Ouken koeffitsiyenti 2, haqiqiy YaIM 900 mlrd dollar. Potensial YaIMni toping. Ishsizlik tufayli yo‘qotilgan mahsulot hajmini hisoblang. Agar haqiqiy ishsizlik 10 foizga oshsa (potensial YaIM o‘sha), yo‘qotishlar qanchaga yetadi?",
    "fields": [
     {
      "label": "Potensial YaIM",
      "value": 957.45,
      "unit": "mlrd dollar"
     },
     {
      "label": "Yo‘qotilgan mahsulot (u = 9%)",
      "value": 57.45,
      "unit": "mlrd dollar"
     },
     {
      "label": "Yo‘qotilgan mahsulot (u = 10%)",
      "value": 76.6,
      "unit": "mlrd dollar"
     }
    ],
    "solution": "Uzilish = −2·(9 − 6) = −6%. Y = Y*(1 − 0,06), Y* = 900/0,94 = 957,45 mlrd. Yo‘qotish = 957,45 − 900 = 57,45 mlrd dollar. u = 10% da uzilish = −2·4 = −8%, Y = 957,45·0,92 = 880,85, yo‘qotish = 957,45 − 880,85 = 76,60 mlrd dollar.",
    "formula": "(Y − Y*)/Y* = −β(u − u*)",
    "note": "«Ishsizlik 10 foizga oshsa» ifodasi haqiqiy ishsizlik darajasi 10% bo‘ladi deb talqin qilindi (10 foiz punktga emas). Yo‘qotishni Y* ning 6% i (57,45) deb ham hisoblash mumkin, lekin Y ga nisbatan emas, Y* ga nisbatan olinishi to‘g‘ri."
   },
   {
    "id": "mk4-p5",
    "title": "Ouken qonuni (Mankyu varianti)",
    "text": "Ouken qonuni (Mankyu varianti): %ΔY = 3% − 2Δu. Agar YaIM 1% o‘ssa, ishsizlik qanday o‘zgaradi? Ishsizlikni 8 foizdan 6 foizga ikki yil ichida tushirish uchun YaIM har yili qancha o‘sishi kerak? 2025-yilda O‘zbekistonda YaIM 7,7 foizga o‘sgan: formula to‘g‘ri bo‘lsa (normal o‘sish 5%, koeffitsiyent 2), ishsizlik qanchaga kamayishi kerak edi?",
    "fields": [
     {
      "label": "YaIM 1% o‘sganda Δu",
      "value": 1,
      "unit": "foiz punkti"
     },
     {
      "label": "Ikki yilda 8% dan 6% gacha uchun YaIM yillik o‘sishi",
      "value": 5,
      "unit": "%"
     },
     {
      "label": "O‘zbekiston 2025: Δu (normal o‘sish 5%)",
      "value": -1.35,
      "unit": "foiz punkti"
     }
    ],
    "solution": "a) 1 = 3 − 2Δu, Δu = 1 foiz punkti (ishsizlik oshadi, chunki o‘sish 3% dan past). b) Har yil Δu = −1 punkt: %ΔY = 3 − 2·(−1) = 5%. c) 7,7 = 5 − 2Δu, Δu = (5 − 7,7)/2 = −1,35 foiz punkti.",
    "formula": "%ΔY = normal o‘sish − β·Δu, Δu = (normal o‘sish − %ΔY)/β",
    "note": "a) bandda 1% o‘sish normal 3% o‘sishdan past, shuning uchun ishsizlik oshadi (+1 punkt), kamaymaydi. c) bandda koeffitsiyent AQSH uchun baholangan, O‘zbekiston uchun taxminiy qo‘llanadi."
   }
  ],
  "open": [
   "Neoklassik (Pigu) va keynscha yondashuvlarni taqqoslang: ishsizlikning sabablari nimada va ish haqini pasaytirish ishsizlikni kamaytiradimi? Majburiy va ixtiyoriy ishsizlik farqini tushuntiring.",
   "Faol va passiv bandlik siyosati o‘rtasidagi farq nimada? O‘zbekistonda qanday faol choralar qo‘llanilmoqda? «Sun’iy intellekt va kelajakdagi tarkibiy ishsizlik» mavzusida qisqa esse yozing.",
   "Viloyatda investitsiya loyihasi doirasida 1500 ta yangi ish o‘rni yaratildi. Iste’molga chegaraviy moyillik 0,7, qo‘shimcha daromadning 15 foizi soliqqa, 20 foizi import tovarlariga sarflanadi. Bandlik multiplikatorini va jami bandlik o‘sishini hisoblang (k = 1/(1 − MPC(1 − t) + MPM))."
  ],
  "refs": [
   "Pigu: ish haqi moslashuvchan, muvozanat real ish haqida ishsizlik yo‘qoladi; ishsizlik ish haqining qat’iyligidan (minimal ish haqi, kasaba uyushmalari) kelib chiqadi, davo — mehnat bozorini erkinlashtirish. Keyns: ish haqini pasaytirish iste’mol talabini kamaytirib, yalpi talabni va bandlikni yanada pasaytiradi; ishsizlikning sababi yalpi talab yetishmasligi, davo — fiskal rag‘batlantirish. Ixtiyoriy ishsizlik — ish haqi darajasida ishlashni istamaslik, majburiy — ishlashni xohlab ish topa olmaslik.",
   "Faol siyosat: kasb o‘qitish, qayta tayyorlash, ish o‘rinlari yaratish, bandlik xizmatlari, subsidiyalar; passiv — ishsizlik nafaqasi va ijtimoiy to‘lovlar. Faol siyosat uzoq muddatli ishsizlikni va inson kapitali yo‘qolishini kamaytiradi. O‘zbekiston choralarini darslikdagi bandlik siyosati bo‘limidan keltiring. Esse mezonlari: sun’iy intellektning ayrim kasblarni siqib chiqarishi (tarkibiy ishsizlik), qayta tayyorlashning roli, davlat siyosati takliflari.",
   "k = 1/(1 − 0,7·0,85 + 0,2) = 1/(1 − 0,595 + 0,2) = 1/0,605 = 1,653. Jami: 1,6529·1500 = 2479 ish o‘rni, shundan qo‘shimcha 2479 − 1500 = 979. Izoh: Soliq va import «oqib chiqish» tufayli multiplikator (1,65) oddiy 1/(1 − 0,7) = 3,33 dan ancha kichik."
  ]
 },
 "5": {
  "goal": "Inflyatsiya sur’atini o‘lchash, almashinuv tenglamasi, Fisher tenglamasi, Fillips egri chizig‘i va qurbonlik koeffitsiyenti bo‘yicha hisob-kitob ko‘nikmalarini shakllantirish; inflyatsiya oqibatlari va aksilinflyatsiya siyosatini tahlil qilish.",
  "concepts": [
   "Inflyatsiya sur’ati va narxlar indeksi",
   "Pulning miqdoriy nazariyasi (MV = PY)",
   "Fisher tenglamasi va real foiz stavkasi",
   "Fillips egri chizig‘i va adaptiv kutishlar",
   "Qurbonlik koeffitsiyenti va Ouken qonuni",
   "Seynoraj (inflyatsion soliq)"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 5-bob",
  "tasks": [
   {
    "id": "mk5-p1",
    "title": "Narxlar indeksi va real daromad",
    "text": "Narxlar indeksi 2023-yilda 145, 2024-yilda 159,2, 2025-yilda 170,8 (bazis yil = 100). Talabaning nominal daromadi 2023-yilda 1,2 mln so‘m, 2025-yilda 1,4 mln so‘m. 2024 va 2025-yillar uchun inflyatsiya sur’atini, 2023–2025-yillardagi ikki yillik jami inflyatsiyani va real daromadning o‘zgarishini (foizda) toping. Foizlarni ikki o‘nli xonagacha yaxlitlang.",
    "fields": [
     {
      "label": "2024-yil inflyatsiya sur’ati",
      "value": 9.79,
      "unit": "%"
     },
     {
      "label": "2025-yil inflyatsiya sur’ati",
      "value": 7.29,
      "unit": "%"
     },
     {
      "label": "Ikki yillik jami inflyatsiya",
      "value": 17.79,
      "unit": "%"
     },
     {
      "label": "Real daromadning o‘zgarishi (2023 → 2025)",
      "value": -0.96,
      "unit": "%"
     }
    ],
    "solution": "π2024 = (159,2 − 145)/145 = 9,79%; π2025 = (170,8 − 159,2)/159,2 = 7,29%. Jami: 170,8/145 − 1 = 17,79%. Real daromad 2023: 1,2/1,45 = 0,8276 mln; 2025: 1,4/1,708 = 0,8197 mln; o‘zgarish 0,8197/0,8276 − 1 = −0,96%.",
    "formula": "π = (Pt − Pt−1)/Pt−1 · 100%; real daromad = nominal daromad / narxlar indeksi",
    "note": "2023-yil inflyatsiyasini hisoblash uchun 2022-yil indeksi kerak, u shartda berilmagan (145 – bazis yilga nisbatan jamlangan o‘sish), shuning uchun faqat 2024 va 2025 hisoblandi. Nominal daromad 16,7% oshgan, narxlar 17,8% – real daromad biroz kamaygan."
   },
   {
    "id": "mk5-p2",
    "title": "Almashinuv tenglamasi: narxlar darajasi va inflyatsiya",
    "text": "Iqtisodiyotda pul massasi 400 trln so‘m, pulning aylanish tezligi 4, real YaIM 800 trln so‘m (bazis narxlarda). a) Narxlar darajasini toping. b) Pul massasi 20% ga, real YaIM 5% ga oshsa va aylanish tezligi o‘zgarmasa, yangi narxlar darajasi va inflyatsiya qancha bo‘ladi? c) Agar bir vaqtda aylanish tezligi 3% ga kamaysa-chi? Narxlar darajasini to‘rt o‘nli, inflyatsiyani ikki o‘nli xonagacha yaxlitlang.",
    "fields": [
     {
      "label": "a) Narxlar darajasi",
      "value": 2,
      "unit": ""
     },
     {
      "label": "b) Yangi narxlar darajasi",
      "value": 2.2857,
      "unit": ""
     },
     {
      "label": "b) Inflyatsiya",
      "value": 14.29,
      "unit": "%"
     },
     {
      "label": "c) Inflyatsiya (V 3% ga kamaysa)",
      "value": 10.86,
      "unit": "%"
     }
    ],
    "solution": "a) P = MV/Y = 400·4/800 = 2. b) M = 480, Y = 840, V = 4: P = 480·4/840 = 2,2857; inflyatsiya = 2,2857/2 − 1 = 14,29%. c) V = 4·0,97 = 3,88: P = 480·3,88/840 = 2,2171; inflyatsiya = 10,86%.",
    "formula": "MV = PY; P = MV/Y; π ≈ %ΔM + %ΔV − %ΔY",
    "note": "Taxminiy formula: 20 + 0 − 5 = 15% (b) va 20 − 3 − 5 = 12% (c); aniq hisob (14,29% va 10,86%) undan biroz past, chunki o‘zgarishlar ko‘paytma sifatida birlashadi."
   },
   {
    "id": "mk5-p3",
    "title": "Fisher tenglamasi: nominal stavka va real daromad",
    "text": "Bank kreditlar bo‘yicha 4% real daromad olishni istaydi. Kutilgan inflyatsiya 9%. a) Bank qanday nominal stavka belgilaydi (aniq formula bo‘yicha va taxminiy formula bo‘yicha)? b) Agar haqiqiy inflyatsiya 13% bo‘lsa, bankning real daromadi (aniq formula bo‘yicha) qancha bo‘ladi? Ikki o‘nli xonagacha yaxlitlang.",
    "fields": [
     {
      "label": "a) Nominal stavka (aniq)",
      "value": 13.36,
      "unit": "%"
     },
     {
      "label": "a) Nominal stavka (taxminiy)",
      "value": 13,
      "unit": "%"
     },
     {
      "label": "b) Bankning real daromadi (aniq)",
      "value": 0.32,
      "unit": "%"
     }
    ],
    "solution": "a) Aniq: 1 + i = (1 + r)(1 + πe) = 1,04·1,09 = 1,1336, i = 13,36%. Taxminiy: i ≈ r + πe = 4 + 9 = 13%. b) 1 + r = 1,1336/1,13 = 1,00319, r = 0,32%. (Taxminiy: 13,36 − 13 = 0,36%.)",
    "formula": "1 + i = (1 + r)(1 + π); i ≈ r + π",
    "note": "c) savol: haqiqiy inflyatsiya kutilganidan yuqori (13% > 9%) – kreditorlar (bank) yutqazdi, qarzdorlar yutdi: ular real qiymati kamaygan qarzni qaytaradi."
   },
   {
    "id": "mk5-p4",
    "title": "Fillips egri chizig‘i va qurbonlik koeffitsiyenti",
    "text": "Fillips egri chizig‘i tenglamasi: π = πe − 0,5(u − 6). Kutilgan inflyatsiya oldingi yil inflyatsiyasiga teng (adaptiv kutishlar), boshlang‘ich inflyatsiya 10%. Markaziy bank inflyatsiyani 4 yil ichida 2% ga tushirmoqchi (har yili 2 foiz punktdan). a) Har yili ishsizlik darajasi qancha bo‘lishi kerak? b) Jami tsiklik ishsizlik qancha (foiz punkt-yil)? c) Ouken koeffitsiyenti 2 bo‘lsa, qurbonlik koeffitsiyentini toping.",
    "fields": [
     {
      "label": "a) Har yilgi ishsizlik darajasi",
      "value": 10,
      "unit": "%"
     },
     {
      "label": "b) Jami tsiklik ishsizlik",
      "value": 16,
      "unit": "foiz punkt-yil"
     },
     {
      "label": "c) Qurbonlik koeffitsiyenti",
      "value": 4,
      "unit": ""
     }
    ],
    "solution": "a) π − πe = −2 = −0,5(u − 6) ⇒ u − 6 = 4 ⇒ u = 10%. b) Har yili tsiklik ishsizlik 10 − 6 = 4 punkt, 4 yil: 4·4 = 16 foiz punkt-yil. c) YaIM yo‘qotilishi = 2·16 = 32% (bir yillik YaIM); inflyatsiya 8 punktga pasaydi (10 → 2): 32/8 = 4.",
    "formula": "π − πe = −β(u − un); YaIM yo‘qotilishi = Ouken koeffitsiyenti · tsiklik ishsizlik; qurbonlik koeffitsiyenti = YaIM yo‘qotilishi / inflyatsiya pasayishi",
    "note": "Tabiiy ishsizlik darajasi 6% deb olindi (tenglamadan). Natija darslikdagi tarixiy baholarga (≈ 2,8–5) yaqin."
   },
   {
    "id": "mk5-p5",
    "title": "Inflyatsiyaning o‘rtacha vaznli indeksi",
    "text": "Iste’mol savati: oziq-ovqat (og‘irligi 45%), nooziq-ovqat tovarlari (30%), xizmatlar (25%). Yil davomida narxlar mos ravishda 5,4%, 5,1% va 13,9% ga oshdi. Umumiy inflyatsiyani hisoblang (bir o‘nli xonagacha) va rasmiy 7,3% ko‘rsatkich bilan solishtiring.",
    "fields": [
     {
      "label": "Umumiy inflyatsiya",
      "value": 7.4,
      "unit": "%"
     },
     {
      "label": "Hisobiy va rasmiy ko‘rsatkich farqi",
      "value": 0.1,
      "unit": "foiz punkt"
     }
    ],
    "solution": "π = 0,45·5,4 + 0,30·5,1 + 0,25·13,9 = 2,43 + 1,53 + 3,475 = 7,435 ≈ 7,4%. Rasmiy 7,3% dan farq ≈ 0,1 punkt.",
    "formula": "π = Σ wᵢ·πᵢ",
    "note": "Farq mumkin sabablar: savatning real og‘irliklari shartdagidan farq qilishi, yaxlitlash, mavsumiy tovarlar va tarkibiy farqlar. Shartdagi og‘irliklar taxminiy."
   }
  ],
  "open": [
   "Hukumat byudjet taqchilligini pul emissiyasi hisobidan moliyalashtiradi. Real pul qoldiqlari (M/P) 100 trln so‘m, pul massasi yiliga 30% ga o‘sadi. a) Seynorajni hisoblang. b) Inflyatsiya oshgani sababli aholi real pul qoldiqlarini 70 trln so‘mgacha kamaytirsa, seynoraj qanday o‘zgaradi? c) Qanday xulosa chiqarasiz?",
   "Shok terapiyasi va gradualizm strategiyalarini taqqoslang: qo‘llash sharti, qisqa muddatli narxi, xavflari va muvaffaqiyat sharti. O‘zbekiston uchun qaysi yo‘l mosligini asoslang.",
   "Inflyatsion targetlash rejimining asosiy elementlarini sanab, O‘zbekistonda uni amalga oshirish tajribasini (inflyatsiya omillari, Markaziy bank siyosati, natijalar va inflyatsion kutishlar muammosi) baholang."
  ],
  "refs": [
   "a) Seynoraj = (ΔM/M)·(M/P) = 0,3·100 = 30 trln so‘m. b) 0,3·70 = 21 trln so‘m: seynoraj 9 trln so‘mga kamayadi. c) Yuqori inflyatsiya sharoitida aholi pul saqlashdan qochadi, inflyatsion soliq bazasi (real pul qoldiqlari) qisqaradi; emissiyadan tushum o‘sib borishi shart emas, ma’lum nuqtadan so‘ng pasayadi. Shuning uchun emissiya orqali taqchillikni moliyalash barqaror emas, inflyatsion spiralni kuchaytiradi.",
   "Shok terapiyasi – keskin cheklash; giperinflyatsiya yoki yuqori galoplashuvchi inflyatsiyada qo‘llanadi, narxi chuqur, ammo qisqa retsessiya, xavfi ijtimoiy keskinlik va bankrotliklar; muvaffaqiyat sharti – siyosat ishonchliligi. Gradualizm – bosqichma-bosqich pasaytirish, mo‘’tadil/o‘rtacha inflyatsiyada; sekinlashuv uzoqroq, ammo yumshoqroq, xavfi – ishonchning yo‘qolishi; sharti – izchillik va kommunikatsiya. O‘zbekistonda inflyatsiya yuqori emas, ammo kutishlar barqaror emas, shuning uchun darslik tajribasiga ko‘ra gradualizm (inflyatsion targetlashga bosqichma-bosqich o‘tish) mosroq.",
   "Elementlar: raqamli maqsadning e’lon qilinishi, narxlar barqarorligining qonunda ustuvorligi, Markaziy bank mustaqilligi, foiz stavkasi asosiy vosita, shaffoflik, prognozga asoslangan siyosat (ta’sir 12–18 oy kechikadi). O‘zbekistonda Markaziy bank 2020-yildan rejimga o‘tishni e’lon qilgan; inflyatsiya omillari: 2017-yil valyuta liberallashuvi, tariflarni bosqichma-bosqich bozor darajasiga yaqinlashtirish, kredit ekspansiyasi, pul o‘tkazmalari, yuqori kutishlar. Muddat surilgan (5% maqsad), inflyatsiya 2024-yil 9,8% dan 2025-yil 7,3% ga pasaygan, ammo kutishlar hali yuqori – asosiy muammo."
  ]
 },
 "6": {
  "goal": "Yalpi talab va yalpi taklif tenglamalarini yozish, qisqa va uzoq muddatli muvozanatni topish, talab va taklif shoklarining oqibatlarini hisoblash hamda barqarorlashtirish siyosatini tahlil qilish ko‘nikmalarini shakllantirish.",
  "concepts": [
   "AD egri chizig‘i va pulning miqdoriy nazariyasi",
   "Foiz stavkasi, boylik va import xaridlari samaralari",
   "SRAS va LRAS (keynscha va klassik modellar)",
   "Qisqa va uzoq muddatli muvozanat",
   "Talab va taklif shoklari",
   "Moslashtiruvchi siyosat va barqarorlashtirish"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 6-bob",
  "tasks": [
   {
    "id": "mk6-p1",
    "title": "AD tenglamasi pulning miqdoriy nazariyasidan",
    "text": "Iqtisodiyotda pul massasi 500 trln so‘m, aylanish tezligi 3. a) AD tenglamasini yozing. b) P = 1; 1,2; 1,5 bo‘lganda yalpi talabni hisoblang. c) Pul massasi 10% ga kamaysa, AD tenglamasi qanday o‘zgaradi? d) Potensial YaIM 1400 trln so‘m bo‘lsa, uzoq muddatli muvozanat narxlar darajasini toping (pul massasi kamayishidan oldin va keyin; to‘rt o‘nli xonagacha).",
    "fields": [
     {
      "label": "a) AD: Y = k/P, k =",
      "value": 1500,
      "unit": ""
     },
     {
      "label": "b) Y (P = 1,2 da)",
      "value": 1250,
      "unit": "trln so‘m"
     },
     {
      "label": "c) Yangi k (M = 450 da)",
      "value": 1350,
      "unit": ""
     },
     {
      "label": "d) Uzoq muddatli P (M = 500 da)",
      "value": 1.0714,
      "unit": ""
     }
    ],
    "solution": "a) Y = MV/P = 500·3/P = 1500/P. b) P = 1: 1500; P = 1,2: 1250; P = 1,5: 1000. c) M = 450: Y = 450·3/P = 1350/P (AD egri chizig‘i chapga siljiydi). d) Y* = 1400: P = 1500/1400 = 1,0714; yangi: P = 1350/1400 = 0,9643.",
    "formula": "Y = MV/P; uzoq muddatli muvozanat: Y = Y*",
    "note": "Pul massasi 10% kamayganda uzoq muddatda narxlar ham 10% pasayadi (0,9643/1,0714 − 1 = −10%), real YaIM o‘zgarmaydi – pulning neytralligi. Qo‘shimcha natijalar: d) Uzoq muddatli P (M = 450 da) = 0.9643."
   },
   {
    "id": "mk6-p2",
    "title": "Qisqa muddatli muvozanat (keynscha SRAS)",
    "text": "Yalpi talab funksiyasi YD = 3200 − 400P, qisqa muddatli yalpi taklif P = 2 darajada gorizontal, potensial YaIM 2400. a) Qisqa muddatli muvozanatni toping. b) Iqtisodiyot qanday holatda (retsessiya yoki qizib ketish)? YaIM uzilishini hisoblang. c) Uzoq muddatda narxlar darajasi qanchaga o‘zgaradi?",
    "fields": [
     {
      "label": "a) Muvozanat YaIM",
      "value": 2400,
      "unit": ""
     },
     {
      "label": "b) YaIM uzilishi (Y − Y*)",
      "value": 0,
      "unit": ""
     },
     {
      "label": "c) Uzoq muddatda narxlar o‘zgarishi",
      "value": 0,
      "unit": ""
     }
    ],
    "solution": "a) P = 2: Y = 3200 − 400·2 = 2400. b) Y = Y* = 2400, uzilish = 0: iqtisodiyot potensial darajada, na retsessiya, na qizib ketish. c) Uzoq muddatli muvozanat: 3200 − 400P = 2400 ⇒ P = 2 – narxlar o‘zgarmaydi.",
    "formula": "Y = YD(P = 2); uzilish = Y − Y*",
    "note": "Shartdagi savol (retsessiya yoki qizib ketish) javobi: ikkalasi ham emas – iqtisodiyot to‘liq bandlikda, bu keyingi masala uchun boshlang‘ich holat."
   },
   {
    "id": "mk6-p3",
    "title": "Talab shoki: YaIM uzilishi va tsiklik ishsizlik",
    "text": "2-masala sharoitida yalpi talab kamayib, YD = 2960 − 400P bo‘ldi. a) Yangi qisqa muddatli muvozanatni toping. b) Ouken koeffitsiyenti 2 bo‘lsa, tsiklik ishsizlik qanchaga o‘zgaradi (foiz punkt)? c) Hukumat iqtisodiyotni potensial darajaga qaytarish uchun yalpi talabni (P = 2 da) qancha oshirishi kerak?",
    "fields": [
     {
      "label": "a) Yangi muvozanat YaIM",
      "value": 2160,
      "unit": ""
     },
     {
      "label": "b) Tsiklik ishsizlikning oshishi",
      "value": 5,
      "unit": "foiz punkt"
     },
     {
      "label": "c) Talabni oshirish hajmi",
      "value": 240,
      "unit": ""
     }
    ],
    "solution": "a) P = 2: Y = 2960 − 800 = 2160. b) Uzilish = (2160 − 2400)/2400 = −10%; Ouken: 10/2 = 5 foiz punkt tsiklik ishsizlik. c) 2400 − 2160 = 240 (AD ni 240 ga siljitish, ya’ni YD = 3200 − 400P ga qaytarish).",
    "formula": "uzilish % = (Y − Y*)/Y* · 100; Δu = |uzilish %| / Ouken koeffitsiyenti",
    "note": "Ouken koeffitsiyenti 2 deganda tsiklik ishsizlikning har 1 punkti YaIM ning 2% yo‘qotilishiga mos keladi."
   },
   {
    "id": "mk6-p4",
    "title": "Salbiy taklif shoki va moslashtiruvchi siyosat",
    "text": "Iqtisodiyot uzoq muddatli muvozanatda: Y* = 1000, P = 1. Neft narxi oshishi natijasida SRAS P = 1,2 darajaga ko‘tarildi. AD: Y = 2000 − 1000P. a) Qisqa muddatli muvozanatni toping. b) Markaziy bank to‘liq moslashtiruvchi siyosat yuritsa, yangi AD tenglamasi qanday bo‘lishi kerak? c) Moslashtiruvchi siyosat yuritilmasa, uzoq muddatda narxlar darajasi qanday bo‘ladi?",
    "fields": [
     {
      "label": "a) Qisqa muddatli YaIM",
      "value": 800,
      "unit": ""
     },
     {
      "label": "b) Yangi AD tenglamasida erkin had (Y = a − 1000P)",
      "value": 2200,
      "unit": ""
     },
     {
      "label": "c) Uzoq muddatli narxlar darajasi",
      "value": 1,
      "unit": ""
     }
    ],
    "solution": "a) Y = 2000 − 1000·1,2 = 800 (potensialdan 200 past, −20%). b) AD yangi nuqtadan o‘tishi kerak: Y = 1000, P = 1,2 ⇒ a = 1000 + 1200 = 2200; AD: Y = 2200 − 1000P. c) Moslashtirilmasa, retsessiya ta’sirida narxlar va ish haqi pasayadi, SRAS pastga qaytadi: 2000 − 1000P = 1000 ⇒ P = 1, Y = 1000.",
    "formula": "Y = a − bP; moslashtirish: AD ni (Y*, Pshok) nuqtadan o‘tkazish",
    "note": "Moslashtirish retsessiyani tezda yo‘qotadi, ammo narxlar darajasi doimiy yuqori (1,2) qoladi va inflyatsion kutishlar oshishi mumkin; moslashtirmaslik uzoq va og‘riqli retsessiya narxini talab qiladi."
   }
  ],
  "open": [
   "Quyidagi hodisalarning har biri AD yoki AS egri chizig‘ini qaysi tomonga siljitishini aniqlang: a) Markaziy bank asosiy stavkani pasaytirdi; b) eng kam ish haqi 30% ga oshirildi; c) QQS stavkasi 12% dan 15% ga oshirildi; d) Xitoyda iqtisodiy o‘sish sekinlashdi; e) aholining inflyatsion kutishlari keskin oshdi; f) yangi yirik mis koni ishga tushirildi; g) davlat kambag‘al oilalarga nafaqalarni oshirdi; h) so‘m AQSH dollariga nisbatan 15% ga qadrsizlandi.",
   "Keynscha va klassik yondashuvlarda AS egri chizig‘ining shakli haqidagi bahsni taqqoslang: farazlar, narxlar «yopishqoqligi»ning sabablari (Blinder tadqiqoti), klassik dixotomiya va pulning neytralligi.",
   "Salbiy talab shokining qisqa va uzoq muddatli oqibatlarini AD-AS grafigi yordamida tahlil qiling va barqarorlashtirish siyosatining vositalari hamda cheklovlarini baholang."
  ],
  "refs": [
   "a) AD o‘ngga (investitsiya va iste’mol oshadi). b) AS chapga (xarajatlar ortadi); talab tomonidan ham ta’sir mumkin. c) Soliq xarajatlarni oshiradi: AS chapga; iste’mol kamaysa AD ham chapga. d) Eksport talabi kamayadi: AD chapga. e) Kutishlar ish haqi va narxlarni oshiradi: SRAS chapga. f) Resurs taklifi oshadi: AS o‘ngga. g) Iste’mol oshadi: AD o‘ngga. h) Eksport raqobatbardoshligi oshadi (AD o‘ngga), ammo import xomashyo qimmatlashadi (AS chapga). Har javobda siljish (egri chiziq bo‘ylab harakat emas) sababini ko‘rsating.",
   "Klassik model: narxlar va ish haqi to‘liq moslashuvchan, bozorlar tez tozalanadi, shuning uchun uzoq muddatli AS vertikal (Y*); pul neytral, nominal va real o‘zgaruvchilar ajratiladi (klassik dixotomiya). Keynscha model: qisqa muddatda narxlar va ish haqi qotib qoladi, shuning uchun AS gorizontal va talab YaIM ni belgilaydi. «Yopishqoqlik» sabablari Blinder tadqiqotiga ko‘ra: koordinatsiya muvaffaqiyatsizligi, narx o‘zgartirish xarajatlari (menyu), shartnomalar va boshqalar. Xulosa: qisqa muddatda keynscha, uzoq muddatda klassik qarash to‘g‘ri; AS ning uch kesimi shuni aks ettiradi.",
   "Salbiy talab shoki (masalan, ishonch pasayishi) AD ni chapga siljitadi: qisqa muddatda YaIM va narxlar (biroz) kamayadi, ishsizlik oshadi (retsessiya). Uzoq muddatda narxlar va ish haqi pasayib, SRAS pastga siljiydi, YaIM potensialga qaytadi, narxlar daraja pastroq bo‘ladi. Barqarorlashtirish siyosati (pul-kredit va fiskal vositalar) AD ni o‘ngga siljitib retsessiyani qisqartiradi. Cheklovlar: ta’sir kechikishi, noaniq prognozlar, inflyatsion kutishlarning oshishi va davlat qarzi xavfi."
  ]
 },
 "7": {
  "goal": "Iste’mol va jamg‘arish funksiyalari, APC/MPC ko‘rsatkichlari, hayot tsikli va permanent daromad gipotezalari hamda investitsiyalarga talab, Tobin koeffitsiyenti va akselerator bo‘yicha hisob-kitob ko‘nikmalarini shakllantirish.",
  "concepts": [
   "Iste’mol va jamg‘arish funksiyalari",
   "APC, APS, MPC, MPS",
   "«Kuznets jumbog‘i»",
   "Hayot tsikli va permanent daromad gipotezalari",
   "Investitsiyalarga talab funksiyasi",
   "Tobin koeffitsiyenti va akselerator"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 7-bob",
  "tasks": [
   {
    "id": "mk7-p1",
    "title": "Iste’mol va jamg‘arish funksiyasi",
    "text": "Iste’mol funksiyasi C = 150 + 0,8Yd (mlrd so‘m). Jamg‘arish funksiyasini yozing; Yd = 500, 750, 1000 bo‘lganda C, S, APC, APS ni hisoblang; «kritik» nuqtani toping; tasarrufdagi daromad 100 ga oshsa, iste’mol va jamg‘arma qanchaga oshadi?",
    "fields": [
     {
      "label": "«Kritik» nuqta (C = Yd bo‘ladigan daromad)",
      "value": 750,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Yd = 500 da APC",
      "value": 1.1,
      "unit": ""
     },
     {
      "label": "Tasarrufdagi daromad 100 ga oshganda iste’molning o‘sishi",
      "value": 80,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Tasarrufdagi daromad 100 ga oshganda jamg‘armaning o‘sishi",
      "value": 20,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "S = Yd − C = −150 + 0,2Yd. Yd = 500: C = 550, S = −50, APC = 1,1, APS = −0,1. Yd = 750: C = 750, S = 0, APC = 1. Yd = 1000: C = 950, S = 50, APC = 0,95, APS = 0,05. Kritik nuqta: 150 + 0,8Yd = Yd, Yd = 750. ΔC = 0,8·100 = 80, ΔS = 0,2·100 = 20.",
    "formula": "S = −Ca + (1 − c)Yd; APC = C/Yd; APS = S/Yd; ΔC = MPC·ΔYd",
    "note": "APC daromad oshgani sari kamayadi (1,1 → 1 → 0,95), MPC = 0,8 esa o‘zgarmaydi."
   },
   {
    "id": "mk7-p2",
    "title": "MPC va iste’mol funksiyasini tiklash",
    "text": "Uy xo‘jaliklarining daromadi 600 dan 700 mlrd so‘mga oshganda, iste’mol 520 dan 595 mlrd so‘mga oshdi. MPC va MPS ni hisoblang, har ikki daromad darajasida APC va APS ni toping, chiziqli iste’mol funksiyasini tuzing.",
    "fields": [
     {
      "label": "MPC",
      "value": 0.75,
      "unit": ""
     },
     {
      "label": "Avtonom iste’mol Ca",
      "value": 70,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Y = 600 da APC",
      "value": 0.867,
      "unit": ""
     },
     {
      "label": "Y = 700 da APS",
      "value": 0.15,
      "unit": ""
     }
    ],
    "solution": "MPC = (595 − 520)/(700 − 600) = 0,75; MPS = 0,25. APC(600) = 520/600 = 0,867, APS = 0,133; APC(700) = 595/700 = 0,85, APS = 0,15. C = Ca + 0,75Y: 520 = Ca + 450, Ca = 70. Tekshiruv: 70 + 0,75·700 = 595. C = 70 + 0,75Y.",
    "formula": "MPC = ΔC/ΔY; C = Ca + MPC·Y; APC + APS = 1",
    "note": "Masalada soliqlar ko‘rsatilmagan, shuning uchun daromad tasarrufdagi daromad sifatida qaralgan. APC (0,867 → 0,85) kamayadi."
   },
   {
    "id": "mk7-p3",
    "title": "Hayot tsikli modeli",
    "text": "Inson 25 yoshda ishlay boshlaydi, 65 yoshda pensiyaga chiqadi va 80 yoshgacha yashashni kutadi. Yillik daromadi 60 mln so‘m, boshlang‘ich boyligi 150 mln so‘m. Iste’molni teng taqsimlash uchun yillik iste’mol qancha bo‘lishi kerak? Ishlagan yillarda yillik jamg‘arma qancha? Pensiyaga chiqqanda to‘plangan boylik qancha? C = αW + βY ko‘rinishida β ni toping.",
    "fields": [
     {
      "label": "Yillik iste’mol",
      "value": 46.36,
      "unit": "mln so‘m"
     },
     {
      "label": "Ishlagan yillarda yillik jamg‘arma",
      "value": 13.64,
      "unit": "mln so‘m"
     },
     {
      "label": "Pensiyadagi boylik",
      "value": 695.45,
      "unit": "mln so‘m"
     },
     {
      "label": "β koeffitsiyenti (daromadga moyillik)",
      "value": 0.727,
      "unit": ""
     }
    ],
    "solution": "Umr 25 dan 80 gacha = 55 yil, ish davri 65 − 25 = 40 yil. Umr bo‘yi resurs = 150 + 40·60 = 2550. C = 2550/55 = 46,36. Jamg‘arma S = 60 − 46,36 = 13,64. Boylik W = 150 + 40·13,64 = 695,45 (tekshiruv: pensiya 15 yil·46,36 = 695,45). C = (1/55)W + (40/55)Y, ya’ni α = 0,018, β = 0,727.",
    "formula": "C = (W + WL·Y)/N = αW + βY, α = 1/N, β = WL/N",
    "note": "Foiz stavkasi nolga teng deb olingan (ko‘rsatilmagan). Pensiyada jamg‘arma sarflanadi, boylik nolga tushadi."
   },
   {
    "id": "mk7-p4",
    "title": "Fridmenning permanent daromad modeli",
    "text": "C = 0,9YP; permanent daromad joriy yil va undan oldingi ikki yil daromadining o‘rtachasi. Daromadlar: 2023 – 100, 2024 – 110, 2025 – 120, 2026-yilda kutilmagan holda 150. 2025 va 2026-yillar uchun iste’mol va APC ni hisoblang va Keyns modeli (C = 0,9Y) bilan taqqoslang.",
    "fields": [
     {
      "label": "2025-yil iste’moli",
      "value": 99,
      "unit": ""
     },
     {
      "label": "2026-yil iste’moli",
      "value": 114,
      "unit": ""
     },
     {
      "label": "2026-yil APC",
      "value": 0.76,
      "unit": ""
     },
     {
      "label": "2026-yil iste’moli Keyns modeli bo‘yicha",
      "value": 135,
      "unit": ""
     }
    ],
    "solution": "2025: YP = (100 + 110 + 120)/3 = 110, C = 99, APC = 99/120 = 0,825. 2026: YP = (110 + 120 + 150)/3 = 126,67, C = 114, APC = 114/150 = 0,76. Keyns: 2025 – C = 108, APC = 0,9; 2026 – C = 135, APC = 0,9.",
    "formula": "C = 0,9YP; YP = (Yt + Yt−1 + Yt−2)/3; APC = C/Y",
    "note": "«O‘tgan uch yil» joriy yilni ham o‘z ichiga oladi deb talqin qilindi. Vaqtinchalik daromad o‘sishi iste’molni kam oshiradi (APC 0,825 → 0,76), Keyns modeli esa buni ko‘rsatmaydi."
   },
   {
    "id": "mk7-p5",
    "title": "Investitsiyalarga talab funksiyasi",
    "text": "Investitsiyalarga talab I = 400 − 20r (mlrd so‘m, r – foizda). r = 5, 8, 12 bo‘lganda investitsiyalar hajmini toping. Markaziy bank stavkani 2 punktga oshirsa, investitsiyalar qanchaga kamayadi? Avtonom investitsiyalar 60 ga oshsa, yangi funksiyani yozing.",
    "fields": [
     {
      "label": "r = 5 da investitsiyalar",
      "value": 300,
      "unit": "mlrd so‘m"
     },
     {
      "label": "r = 8 da investitsiyalar",
      "value": 240,
      "unit": "mlrd so‘m"
     },
     {
      "label": "r = 12 da investitsiyalar",
      "value": 160,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Stavka 2 punktga oshganda investitsiyalarning kamayishi",
      "value": 40,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "I(5) = 400 − 100 = 300; I(8) = 400 − 160 = 240; I(12) = 400 − 240 = 160. Stavka 2 punktga oshsa: ΔI = −20·2 = −40. Avtonom investitsiyalar 60 ga oshsa: I = 460 − 20r (egri chiziq parallel o‘ngga siljiydi).",
    "formula": "I = e − dr; ΔI = −d·Δr",
    "note": "Stavka o‘zgarishi egri chiziq bo‘ylab harakat, kutilayotgan foydaning o‘zgarishi esa egri chiziqning siljishidir."
   },
   {
    "id": "mk7-p6",
    "title": "Tobin koeffitsiyenti",
    "text": "Firmaning aksiyalar bozoridagi qiymati 450 mlrd so‘m, kapitalini almashtirish qiymati 360 mlrd so‘m. Tobin koeffitsiyentini hisoblang. Firma investitsiyalarni oshiradimi? Birja inqirozida aksiyalar narxi 30 foizga tushsa, koeffitsiyent qanday bo‘ladi?",
    "fields": [
     {
      "label": "Tobin koeffitsiyenti q",
      "value": 1.25,
      "unit": ""
     },
     {
      "label": "Aksiyalar 30% tushgandagi q",
      "value": 0.875,
      "unit": ""
     }
    ],
    "solution": "q = 450/360 = 1,25 > 1, firma investitsiyalarni oshiradi. Inqirozda bozor qiymati 450·0,7 = 315, q = 315/360 = 0,875 < 1, investitsiyalar rag‘batlantirilmaydi (qisqaradi).",
    "formula": "q = bozor qiymati / almashtirish qiymati",
    "note": "q > 1 – yangi kapital yaratish foydali; q < 1 – tayyor kapitalni sotib olish arzonroq."
   },
   {
    "id": "mk7-p7",
    "title": "Akselerator modeli",
    "text": "Kapital sig‘imi koeffitsiyenti v = 3. Ishlab chiqarish yillar bo‘yicha: 500, 520, 550, 570, 580, 580, 575. Har yil uchun sof investitsiyalarni hisoblang. Qaysi yilda investitsiyalar qisqara boshlaydi?",
    "fields": [
     {
      "label": "3-yil sof investitsiyalari",
      "value": 90,
      "unit": "mlrd so‘m"
     },
     {
      "label": "5-yil sof investitsiyalari",
      "value": 30,
      "unit": "mlrd so‘m"
     },
     {
      "label": "7-yil sof investitsiyalari",
      "value": -15,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Investitsiyalar qisqara boshlagan yil (tartib raqami)",
      "value": 4,
      "unit": ""
     }
    ],
    "solution": "I = v·ΔY. 2-yil: 3·20 = 60; 3-yil: 3·30 = 90; 4-yil: 3·20 = 60; 5-yil: 3·10 = 30; 6-yil: 0; 7-yil: 3·(−5) = −15 (1-yil uchun oldingi ma’lumot yo‘q). Investitsiyalar 4-yildan qisqaradi (90 → 60), garchi ishlab chiqarish hali o‘sayotgan bo‘lsa ham.",
    "formula": "I = v × ΔY",
    "note": "Sabab: investitsiyalar ishlab chiqarish darajasiga emas, uning o‘sish sur’atiga bog‘liq; o‘sish sekinlashishi bilanoq investitsiyalar kamayadi."
   }
  ],
  "open": [
   "«Kuznets jumbog‘i» nima va u qanday aniqlangan? Modilyanining hayot tsikli gipotezasi va Fridmenning permanent daromad gipotezasi uni qanday izohlaydi?",
   "Vaqtinchalik soliq kamaytirishning iste’molga ta’sirini Keyns, hayot tsikli va permanent daromad nazariyalari asosida baholang va xulosalarni taqqoslang.",
   "Investitsiyalarning beqarorligini belgilovchi omillar nimalardan iborat? O‘zbekiston investitsiya siyosatining asosiy yo‘nalishlarini sanab, ularni tahlil qiling."
  ],
  "refs": [
   "Kuznets jumbog‘i: qisqa muddatda daromad oshgani sari APC kamayadi (Keyns bilan mos), uzoq muddatda esa APC deyarli barqaror qoladi. Modilyani: iste’mol nafaqat daromad, balki boylik va hayot bosqichiga bog‘liq (C = αW + βY), boylik o‘sishi uzoq muddatda funksiyani yuqoriga siljitadi. Fridmen: iste’mol permanent daromadga bog‘liq, vaqtinchalik daromad asosan jamg‘ariladi, shuning uchun qisqa muddatli ma’lumotlarda APC o‘zgaradi, uzoq muddatda barqaror. Javobda ikki gipotezaning umumiy g‘oyasi (iste’molni tekislash) ko‘rsatilishi kerak.",
   "Keyns: iste’mol joriy daromadga bog‘liq, shuning uchun soliq kamayishi tasarrufdagi daromadni oshirib, iste’molni MPC ga qarab sezilarli oshiradi. Hayot tsikli: vaqtinchalik kamaytirish umr bo‘yi resursni kam oshiradi, iste’mol ozgina o‘sadi. Permanent daromad: vaqtinchalik o‘zgarish permanent daromadni deyarli o‘zgartirmaydi, ta’sir juda kichik; doimiy kamaytirish esa kuchli ta’sir qiladi. Xulosa: ta’sir kuchi soliq o‘zgarishining vaqtinchalik yoki doimiyligiga bog‘liq.",
   "Beqarorlik omillari: kutilayotgan sof foyda normasining o‘zgaruvchanligi, real foiz stavkasi, Tobin koeffitsiyenti (bozor kayfiyati) va akselerator samarasi (talab o‘sishi sekinlashganda investitsiyalar keskin kamayadi). O‘zbekistonda investitsiyalar YaIMning qariyb uchdan bir qismini tashkil etadi, moliyalashtirishda xorijiy manbalar ustun. Siyosat yo‘nalishlari: investitsiya muhitini yaxshilash (qonunchilik, investor huquqlari himoyasi), makroiqtisodiy liberallashtirish, maxsus iqtisodiy zonalar va asosiy vazifa – investitsiyalar samaradorligini oshirish. Javobda xorijiy manbalarga bog‘liqlik risklari ham tilga olinishi kerak."
  ]
 },
 "8": {
  "goal": "Keyns xochi, muvozanatli YaIM, multiplikatorlar, retsession va inflyatsion uzilishlarni hisoblash hamda tejamkorlik paradoksini miqdoriy tahlil qilish ko‘nikmalarini shakllantirish.",
  "concepts": [
   "Samarali talab va Keyns xochi",
   "Rejalashtirilgan va haqiqiy xarajatlar",
   "Avtonom xarajatlar multiplikatori",
   "Ochiq iqtisodiyot multiplikatori",
   "Retsession va inflyatsion uzilish",
   "Tejamkorlik paradoksi"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 8-bob",
  "tasks": [
   {
    "id": "mk8-p1",
    "title": "Yopiq iqtisodiyotda muvozanat",
    "text": "Yopiq iqtisodiyotda: C = 100 + 0,8Yd, I = 150, G = 200, T = 150 (mlrd so‘m). Muvozanatli YaIMni toping. Iste’mol, jamg‘arma va byudjet qoldig‘ini hisoblang. Multiplikatorni toping. Investitsiyalar 50 ga kamaysa, yangi muvozanatli YaIM qancha bo‘ladi?",
    "fields": [
     {
      "label": "Muvozanatli YaIM",
      "value": 1650,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Jamg‘arma",
      "value": 200,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Byudjet qoldig‘i (kamomad manfiy)",
      "value": -50,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Investitsiyalar 50 ga kamaygandagi YaIM",
      "value": 1400,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "Y = 100 + 0,8(Y − 150) + 150 + 200 = 330 + 0,8Y, Y = 1650. Yd = 1500, C = 100 + 1200 = 1300, S = 1500 − 1300 = 200. Byudjet: T − G = 150 − 200 = −50 (kamomad). k = 1/(1 − 0,8) = 5. ΔI = −50: ΔY = −250, Y = 1400.",
    "formula": "Y = C + I + G; k = 1/(1 − MPC); ΔY = k·ΔI",
    "note": "Tekshiruv (injeksiya = chiqib ketish): S + T = 200 + 150 = 350 = I + G = 150 + 200."
   },
   {
    "id": "mk8-p2",
    "title": "Retsession uzilishni bartaraf etish",
    "text": "1-masala sharoitida potensial YaIM 2000 mlrd so‘m. YaIM uzilishi va retsession uzilishni toping. Davlat xaridlarini qanchaga oshirish kerak? Soliqlarni qanchaga kamaytirish kerak (soliq multiplikatori −c/(1 − c))? Ikki variantning byudjetga ta’sirini taqqoslang.",
    "fields": [
     {
      "label": "YaIM uzilishi",
      "value": 350,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Davlat xaridlarini oshirish (retsession uzilish)",
      "value": 70,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Soliqlarni kamaytirish",
      "value": 87.5,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Soliq kamaytirish variantida byudjet kamomadi G ni oshirishdagidan qancha ko‘p",
      "value": 17.5,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "YaIM uzilishi = 2000 − 1650 = 350. Retsession uzilish = 350/5 = 70, demak ΔG = 70. Soliq multiplikatori = −0,8/0,2 = −4; ΔT = −350/4 = −87,5. G ni oshirishda byudjet kamomadi 50 + 70 = 120; soliqni kamaytirishda 50 + 87,5 = 137,5; farq 17,5.",
    "formula": "retsession uzilish = YaIM uzilishi/k; kT = −c/(1 − c)",
    "note": "Soliqlar bir martalik (lump-sum) deb olingan. G ni oshirish byudjetga kamroq yuk bo‘ladi, chunki G multiplikatori (5) soliq multiplikatoridan (4) katta."
   },
   {
    "id": "mk8-p3",
    "title": "PE funksiyasini aniqlash",
    "text": "Y = 1000 bo‘lganda rejalashtirilgan xarajatlar 1080 ga, Y = 1400 bo‘lganda 1400 ga teng (PE funksiyasi chiziqli). PE funksiyasini toping. Muvozanatli YaIM va multiplikatorni aniqlang. Y = 1000 da zaxiralar qanday o‘zgaradi?",
    "fields": [
     {
      "label": "Avtonom xarajatlar (PE funksiyasining kesishmasi)",
      "value": 280,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Egri chiziq og‘ishi (PE ning Y ga nisbatan moyilligi)",
      "value": 0.8,
      "unit": ""
     },
     {
      "label": "Muvozanatli YaIM",
      "value": 1400,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Y = 1000 da zaxiralar o‘zgarishi (kamayish manfiy)",
      "value": -80,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "Og‘ish = (1400 − 1080)/(1400 − 1000) = 0,8. PE = a + 0,8Y: 1400 = a + 1120, a = 280. PE = 280 + 0,8Y. Muvozanat: Y = PE, Y = 280/0,2 = 1400. k = 1/(1 − 0,8) = 5. Y = 1000 da PE = 1080 > 1000, zaxiralar 80 ga kamayadi, firmalar ishlab chiqarishni oshiradi.",
    "formula": "PE = a + bY; Y* = a/(1 − b); k = 1/(1 − b)",
    "note": "Y = 1400 da PE = Y bo‘lgani uchun u muvozanat nuqtasi."
   },
   {
    "id": "mk8-p4",
    "title": "Ochiq iqtisodiyotda muvozanat",
    "text": "C = 50 + 0,8(Y − T), T = 0,25Y, I = 200, G = 250, X = 180, IM = 30 + 0,1Y. Muvozanatli YaIMni toping. Multiplikatorni hisoblang. Sof eksport va byudjet qoldig‘ini toping. Eksport 40 ga oshsa, YaIM va sof eksport qanchaga o‘zgaradi?",
    "fields": [
     {
      "label": "Muvozanatli YaIM",
      "value": 1300,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Sof eksport",
      "value": 20,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Byudjet qoldig‘i",
      "value": 75,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Eksport 40 ga oshgandagi YaIM o‘sishi",
      "value": 80,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "C = 50 + 0,6Y. Y = 50 + 0,6Y + 200 + 250 + 180 − 30 − 0,1Y = 650 + 0,5Y, Y = 1300. k = 1/(1 − 0,8·0,75 + 0,1) = 1/0,5 = 2. T = 325, byudjet T − G = 75 (profitsit). IM = 30 + 130 = 160, NX = 180 − 160 = 20. ΔX = 40: ΔY = 2·40 = 80, Y = 1380; IM = 168, X = 220, NX = 52, ΔNX = +32.",
    "formula": "Y = C + I + G + X − IM; k = 1/(1 − c(1 − t) + m); NX = X − IM",
    "note": "Sof eksport 20 dan 52 gacha, ya’ni 32 ga oshadi (eksportning 40 o‘sishining bir qismi import o‘sishi (8) bilan so‘nadi)."
   },
   {
    "id": "mk8-p5",
    "title": "Tejamkorlik paradoksi",
    "text": "S = −100 + 0,2Y, I = 200 (G = T = 0, yopiq iqtisodiyot). Muvozanatli YaIM va jamg‘armani toping. Uy xo‘jaliklari har bir daromadda 40 ko‘p jamg‘arishga qaror qildi: S = −60 + 0,2Y; yangi YaIM va jamg‘armani toping. I = 100 + 0,1Y bo‘lsa, ikkala holat uchun YaIMni toping.",
    "fields": [
     {
      "label": "Dastlabki muvozanatli YaIM (I = 200)",
      "value": 1500,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Jamg‘arish oshgandan keyingi YaIM (I = 200)",
      "value": 1300,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Dastlabki YaIM (I = 100 + 0,1Y)",
      "value": 2000,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Jamg‘arish oshgandan keyingi YaIM (I = 100 + 0,1Y)",
      "value": 1600,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "Muvozanat S = I. a) −100 + 0,2Y = 200, Y = 1500, S = 200. b) −60 + 0,2Y = 200, Y = 1300, S = 200. c) −100 + 0,2Y = 100 + 0,1Y, Y = 2000, S = I = 300; keyin −60 + 0,2Y = 100 + 0,1Y, Y = 1600, S = I = 260.",
    "formula": "muvozanat: S = I",
    "note": "Paradoks: jamg‘arishga moyillik oshganda YaIM kamayadi, jami jamg‘arma o‘zgarmaydi (I mustaqil bo‘lsa, 200) yoki hatto kamayadi (300 → 260, I daromadga bog‘liq bo‘lsa)."
   },
   {
    "id": "mk8-p6",
    "title": "Multiplikatorlarni taqqoslash",
    "text": "MPC = 0,8, soliq stavkasi 20%, importga chegaraviy moyillik 0,25. Yopiq iqtisodiyot, proporsional soliqli yopiq iqtisodiyot va ochiq iqtisodiyot uchun multiplikatorlarni hisoblang. 50 mlrd so‘mlik davlat investitsiya loyihasining daromadga ta’sirini har uch holat uchun aniqlang.",
    "fields": [
     {
      "label": "Yopiq iqtisodiyotda daromad o‘sishi",
      "value": 250,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Proporsional soliqli iqtisodiyotda daromad o‘sishi",
      "value": 138.89,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Ochiq iqtisodiyotda multiplikator",
      "value": 1.64,
      "unit": ""
     },
     {
      "label": "Ochiq iqtisodiyotda daromad o‘sishi",
      "value": 81.97,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "Yopiq: k = 1/(1 − 0,8) = 5, ΔY = 250. Proporsional soliq: k = 1/(1 − 0,8·0,8) = 1/0,36 = 2,78, ΔY = 138,89. Ochiq: k = 1/(1 − 0,64 + 0,25) = 1/0,61 = 1,64, ΔY = 81,97.",
    "formula": "k = 1/(1 − c(1 − t) + m)",
    "note": "Soliq va import «chiqib ketishlar» ni oshirgani sari multiplikator kichrayadi (5 → 2,78 → 1,64)."
   }
  ],
  "open": [
   "Keyns klassik nazariyaning qaysi qoidalarini tanqid qildi va nima uchun uning fikricha bozor mexanizmi muvozanatni to‘liq bandlikda avtomatik ta’minlay olmaydi?",
   "Tejamkorlik paradoksini grafik yordamida tushuntiring. Nima uchun u «tarkib xatosi»ga misol bo‘ladi va uzoq muddatda ham amal qiladimi?",
   "O‘zbekiston sharoitida multiplikator qiymatiga qanday omillar ta’sir qiladi? Darslikdagi taxminiy ko‘rsatkichlar (c ≈ 0,8, t ≈ 0,2, m ≈ 0,3) asosida multiplikatorni baholab, iqtisodiy siyosat uchun xulosa chiqaring."
  ],
  "refs": [
   "Keyns tanqid qilgan qoidalar: narx va ish haqining moslashuvchanligi hamda bozorning o‘zini-o‘zi to‘liq bandlikda tartibga solishi. Uning fikricha, jamg‘arish va investitsiya qarorlarini turli subyektlar qabul qiladi, narxlar va ish haqi qat’iy (pastga qat’iy), shuning uchun yalpi talab yetishmasligi uzoq muddat davom etishi mumkin. Ishlab chiqarish hajmini samarali talab belgilaydi; muvozanat to‘liq bandlikdan past darajada ham o‘rnatilishi mumkin va davlat talabni rag‘batlantirishi kerak.",
   "Tejamkorlik paradoksi: jamiyat ko‘proq jamg‘arishga intilsa, iste’mol va yalpi talab kamayadi, YaIM multiplikator marta qisqaradi, natijada jami jamg‘armalar oshmaydi (yoki kamayadi). Har bir xo‘jalik uchun to‘g‘ri qaror hamma uchun birgalikda noto‘g‘ri natija beradi – shuning uchun «tarkib xatosi». Qisqa muddatda, narxlar qat’iy va resurslar bandligi to‘liq bo‘lmaganda amal qiladi; uzoq muddatda jamg‘arma investitsiyaga aylanib, kapital va o‘sishni oshirishi mumkin, bu moliya tizimi samaradorligiga bog‘liq. Javobda 8.7-rasm tavsifi bo‘lishi kerak.",
   "Hisob: k = 1/(1 − c(1 − t) + m) = 1/(1 − 0,8·0,8 + 0,3) = 1/0,66 ≈ 1,52. Bu oddiy multiplikator (5) dan ancha kichik. Omillar: MPC, soliq stavkasi, importga moyillik (soliq va import – «chiqib ketishlar»). Xulosa: davlat xarajatlari yoki pul o‘tkazmalari ko‘proq importni rag‘batlantirishi mumkin, shuning uchun ichki ishlab chiqarishni rag‘batlantirish va importga moyillikni kamaytirish multiplikatorni oshiradi. Yaxshi javobda baholash taxminiy ekani aytiladi."
  ]
 },
 "9": {
  "goal": "Pul miqdoriy nazariyasi, pul taklifi (bank va pul multiplikatori), obligatsiya narxi va pul bozori muvozanati (LM) bo‘yicha hisob-kitob ko‘nikmalarini shakllantirish; Markaziy bankning pul taklifini nazorat qilish imkoniyatlari va cheklovlarini tahlil qilish.",
  "concepts": [
   "Almashinuv (Fisher) va Kembrij tenglamalari, pulning aylanish tezligi",
   "Keynsning pulga talab motivlari va spekulyativ talab",
   "Obligatsiya narxi va foiz stavkasi o‘rtasidagi teskari bog‘liqlik",
   "Majburiy zaxira normasi va bank multiplikatori",
   "Pul bazasi, deponentlash koeffitsiyenti va pul multiplikatori",
   "Pul bozori muvozanati va LM egri chizig‘i"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 9-bob",
  "tasks": [
   {
    "id": "mk9-p1",
    "title": "Aylanish tezligi, Kembrij koeffitsiyenti va pul massasi",
    "text": "Iqtisodiyotda nominal YaIM 2000 trln so‘m, pul massasi 500 trln so‘m. a) Pulning aylanish tezligi va Kembrij koeffitsiyentini hisoblang. b) Agar real YaIM 6 foizga, narxlar 8 foizga oshsa va V o‘zgarmasa, pul massasi qanchaga oshishi kerak? c) Agar V 2 foizga kamaysa-chi?",
    "fields": [
     {
      "label": "a) Pulning aylanish tezligi V",
      "value": 4,
      "unit": "marta"
     },
     {
      "label": "a) Kembrij koeffitsiyenti k",
      "value": 0.25,
      "unit": ""
     },
     {
      "label": "b) Pul massasining o‘sishi (V o‘zgarmas)",
      "value": 70,
      "unit": "trln so‘m"
     },
     {
      "label": "c) Pul massasining o‘sishi (V 2% ga kamaysa)",
      "value": 80,
      "unit": "trln so‘m"
     }
    ],
    "solution": "a) V = PY/M = 2000/500 = 4; k = 1/V = 0,25. b) MV = PY dan o‘sish sur’atlarida: %ΔM + %ΔV = %ΔP + %ΔY. V o‘zgarmas: %ΔM = 8 + 6 = 14%, ya’ni 500·0,14 = 70 trln so‘m (M = 570). c) %ΔV = –2%: %ΔM = 14 + 2 = 16%, ya’ni 500·0,16 = 80 trln so‘m (M = 580).",
    "formula": "V = PY/M; k = 1/V; %ΔM + %ΔV ≈ %ΔP + %ΔY",
    "note": "Hisob o‘sish sur’atlarining yig‘indisi (yaqinlashtirilgan) qoidasi bo‘yicha qilindi. Aniq hisobda nominal YaIM 1,06·1,08 – 1 = 14,48% ga oshadi (pul massasi ≈ 72,4 trln so‘mga), farq yaqinlashtirishdan."
   },
   {
    "id": "mk9-p2",
    "title": "Muddatsiz obligatsiya narxi va kapital yo‘qotish",
    "text": "Yiliga 15 ming so‘m kupon to‘laydigan muddatsiz obligatsiyaning narxini bozor foiz stavkasi 10%, 12%, 15% va 20% bo‘lganda hisoblang. Agar investor obligatsiyani stavka 10% bo‘lganda sotib olgan bo‘lsa va stavka 15% ga oshsa, uning kapital yo‘qotishi qancha bo‘ladi?",
    "fields": [
     {
      "label": "Narx, r = 10%",
      "value": 150,
      "unit": "ming so‘m"
     },
     {
      "label": "Narx, r = 15%",
      "value": 100,
      "unit": "ming so‘m"
     },
     {
      "label": "Narx, r = 20%",
      "value": 75,
      "unit": "ming so‘m"
     },
     {
      "label": "Kapital yo‘qotish (10% dan 15% ga)",
      "value": 50,
      "unit": "ming so‘m"
     }
    ],
    "solution": "P = kupon/r: r = 10% da 15/0,10 = 150; 12% da 15/0,12 = 125; 15% da 15/0,15 = 100; 20% da 15/0,20 = 75 ming so‘m. Stavka 10% dan 15% ga oshsa, narx 150 dan 100 ga tushadi: yo‘qotish 150 – 100 = 50 ming so‘m (33,3%).",
    "formula": "P = kupon / r",
    "note": "12% dagi narx (125 ming so‘m) javob maydonlariga kiritilmagan, yechimda keltirilgan. Stavka oshganda narx tushadi: obligatsiya narxi va foiz stavkasi teskari bog‘liq."
   },
   {
    "id": "mk9-p3",
    "title": "Bank tizimida depozit va pul yaratilishi",
    "text": "Majburiy zaxira normasi 12%. Mijoz bankka 50 mln so‘m naqd pul qo‘ydi. a) Bank qancha kredit bera oladi? b) Bank tizimi jami qancha yangi depozit yaratishi mumkin? c) Pul massasi qanchaga oshadi? d) Agar banklar qo‘shimcha 3% ortiqcha zaxira saqlasa-chi?",
    "fields": [
     {
      "label": "a) Bank bera oladigan kredit",
      "value": 44,
      "unit": "mln so‘m"
     },
     {
      "label": "b) Jami depozitlar o‘sishi",
      "value": 416.67,
      "unit": "mln so‘m"
     },
     {
      "label": "c) Pul massasining o‘sishi",
      "value": 366.67,
      "unit": "mln so‘m"
     },
     {
      "label": "d) Jami depozitlar o‘sishi (rr + er = 15%)",
      "value": 333.33,
      "unit": "mln so‘m"
     }
    ],
    "solution": "a) Kredit = 50·(1 – 0,12) = 44 mln. b) Bank multiplikatori 1/rr = 1/0,12 ≈ 8,33; ΔD = 50·8,33 = 416,67 mln. c) Mijoz naqd pulni depozitga o‘tkazgani uchun muomaladagi naqd pul 50 mln ga kamaydi, depozitlar 416,67 mln ga oshdi: ΔM = 416,67 – 50 = 366,67 mln (jami kreditlar yig‘indisiga teng). d) rr + er = 0,15: ΔD = 50/0,15 = 333,33 mln; ΔM = 283,33 mln, birinchi bank krediti 42,5 mln.",
    "formula": "mb = 1/rr (ortiqcha zaxira bilan 1/(rr + er)); ΔD = mb·ΔR",
    "note": "c) bandida pul massasi M = C + D deb olindi. Agar boshlang‘ich 50 mln ni ham yangi pul sifatida hisoblasak (darslikdagi 1000 so‘mlik misoldagidek), javob 416,67 mln bo‘ladi. Ortiqcha zaxira multiplikatorni kamaytiradi."
   },
   {
    "id": "mk9-p4",
    "title": "Pul multiplikatori va pul massasi",
    "text": "Pul bazasi 200 trln so‘m, zaxira normasi 0,1, deponentlash koeffitsiyenti 0,3. a) Pul multiplikatori va pul massasini hisoblang. b) Markaziy bank ochiq bozorda 10 trln so‘mlik obligatsiya sotib olsa, pul massasi qanchaga o‘zgaradi? c) Agar banklarga ishonch pasayib, cr 0,5 ga oshsa, pul massasini avvalgi darajada saqlash uchun pul bazasi qanchaga oshirilishi kerak?",
    "fields": [
     {
      "label": "a) Pul multiplikatori m",
      "value": 3.25,
      "unit": ""
     },
     {
      "label": "a) Pul massasi M",
      "value": 650,
      "unit": "trln so‘m"
     },
     {
      "label": "b) Pul massasining o‘zgarishi",
      "value": 32.5,
      "unit": "trln so‘m"
     },
     {
      "label": "c) Pul bazasining zarur o‘sishi",
      "value": 60,
      "unit": "trln so‘m"
     }
    ],
    "solution": "a) m = (cr + 1)/(cr + rr) = 1,3/0,4 = 3,25; M = 3,25·200 = 650 trln. b) Obligatsiya sotib olinganda pul bazasi 10 trln ga oshadi: ΔM = 3,25·10 = +32,5 trln. c) cr = 0,5 da m = 1,5/0,6 = 2,5. M = 650 saqlanishi uchun B = 650/2,5 = 260 trln, ya’ni bazani 260 – 200 = 60 trln ga oshirish kerak.",
    "formula": "M = m·B; m = (cr + 1)/(cr + rr)",
    "note": "b) bandida m = 3,25 o‘zgarmas deb olindi. c) Buyuk depressiya misolida ko‘rsatilganidek, ishonch pasayishi multiplikatorni kamaytiradi va Markaziy bank nazoratini cheklaydi."
   },
   {
    "id": "mk9-p5",
    "title": "Pul bozori muvozanati va LM egri chizig‘i",
    "text": "Pulga talab funksiyasi: (M/P)D = 0,4Y – 20r. Real pul taklifi 600, Y = 2000. a) Muvozanatli foiz stavkasini toping. b) Pul taklifi 640 ga oshsa, foiz stavkasi qanday o‘zgaradi? c) Y 2100 ga oshsa (pul taklifi 600) foiz stavkasi qanday bo‘ladi? d) LM tenglamasini yozing.",
    "fields": [
     {
      "label": "a) Muvozanatli foiz stavkasi",
      "value": 10,
      "unit": "%"
     },
     {
      "label": "b) Foiz stavkasi (M/P = 640)",
      "value": 8,
      "unit": "%"
     },
     {
      "label": "c) Foiz stavkasi (Y = 2100)",
      "value": 12,
      "unit": "%"
     }
    ],
    "solution": "a) 600 = 0,4·2000 – 20r = 800 – 20r, r = 200/20 = 10%. b) 640 = 800 – 20r, r = 160/20 = 8% (2 punktga pasayadi). c) 600 = 0,4·2100 – 20r = 840 – 20r, r = 240/20 = 12% (2 punktga oshadi). d) M/P = 0,4Y – 20r dan r = 0,02Y – (M/P)/20; M/P = 600 da LM: r = 0,02Y – 30.",
    "formula": "M/P = kY – hr; LM: r = (k/h)Y – (1/h)(M/P)",
    "note": "LM egri chizig‘ining qiyaligi k/h = 0,4/20 = 0,02. Foiz stavkasi foizlarda (r = 10 ya’ni 10%) ifodalangan. Pul taklifi oshsa LM pastga siljiydi, daromad oshsa foiz stavkasi ortadi."
   }
  ],
  "open": [
   "Keynsning pulga talab motivlarini sanab, har birini tushuntiring. Nima uchun pulga spekulyativ talab foiz stavkasiga teskari bog‘liq? Javobingizda obligatsiya narxi va foiz stavkasi o‘rtasidagi bog‘liqlikni misol bilan ko‘rsating.",
   "Tijorat banklari qanday qilib pul yaratadi? 100 foizli va qisman zaxira tizimlarini taqqoslang, bank va pul multiplikatori formulalarini keltirib chiqaring. Markaziy bankning pul taklifini nazorat qilish imkoniyatlarini qanday omillar cheklaydi? Buyuk depressiya va 2008-yildan keyingi miqdoriy yumshatish misollarida buni tushuntiring.",
   "Keynscha pul siyosatining transmissiya mexanizmi qanday? Qachon pul siyosati samarasiz bo‘ladi? Fridmenning monetar qoidasi nima va monetaristlar nima uchun diskretsion siyosatga ishonmaydi?"
  ],
  "refs": [
   "Keyns uchta motivni ajratadi: bitimlar (kundalik xaridlar uchun, daromadga bog‘liq; daromad tez-tez olinsa talab kamayadi), ehtiyotkorlik (kutilmagan xarajatlar uchun, asosan daromadga bog‘liq) va spekulyativ (boylikni pul yoki obligatsiya shaklida saqlash tanlovi) motivi. Pul daromad keltirmaydi, shuning uchun uni saqlashning muqobil qiymati foiz stavkasidir: stavka yuqori bo‘lsa, pul saqlash qimmat va talab kamayadi. Obligatsiya narxi P = kupon/r: stavka 10% da 10 ming so‘mlik kupon 100 ming so‘m turadi, 5% da 200, 20% da 50 ming so‘m. Stavka yuqori bo‘lganda investorlar uni tushishini va narx oshishini kutib obligatsiya sotib oladi, stavka past bo‘lsa, kapital yo‘qotishdan qo‘rqib pul saqlaydi.",
   "100 foizli zaxira tizimida banklar depozitni to‘liq saqlaydi, kredit bermaydi va pul yaratmaydi. Qisman zaxirada 1000 so‘mlik depozitdan rr = 10% bo‘lsa 900 kreditga beriladi, u keyingi bankka depozit bo‘ladi va jami depozitlar 1000·1/rr = 10 000 ga yetadi: bank multiplikatori 1/rr (ortiqcha zaxira bilan 1/(rr + er)). Kengaytirilgan modelda M = C + D, B = C + R, M/B = (cr + 1)/(cr + rr), ya’ni M = m·B. Markaziy bank nazoratini cheklovchi omillar: cr (aholi ishonchi), banklarning ortiqcha zaxirasi, kredit talabi, dollarlashuv va moliyaviy innovatsiyalar. 1929–1933 yillarda baza 18% oshgan, pul massasi 28% qisqargan (cr 0,17 dan 0,41 ga, rr 0,14 dan 0,21 ga oshgan); 2008-yildan keyin baza ≈5 baravar oshgan, M2 esa ≈50% ga, chunki banklar ortiqcha zaxira saqlagan.",
   "Transmissiya mexanizmi: M↑ ⇒ r↓ ⇒ I↑ ⇒ AD↑ ⇒ Y↑. Pul siyosati samarasiz bo‘ladigan holatlar: likvidlik tuzog‘i (foiz juda past, pulga talab cheksiz elastik, birinchi bo‘g‘in uziladi) va investitsiya tuzog‘i (investitsiyalar foizga sezgir emas, ikkinchi bo‘g‘in uziladi); shuning uchun Keyns chuqur retsessiyada fiskal siyosatga ko‘proq ishongan. Fridmen qoidasi: pul massasi har yili real YaIMning uzoq muddatli o‘sish sur’atiga (yoki unga maqsadli inflyatsiyani qo‘shib) teng barqaror sur’atda o‘sishi kerak. Monetaristlar fikricha, diskretsion siyosatning ta’siri uzoq va o‘zgaruvchan kechikish bilan namoyon bo‘ladi, pulga talab barqaror va Markaziy bank xatolari inqirozlarni chuqurlashtirgan."
  ]
 },
 "10": {
  "goal": "Davlat byudjeti ko‘rsatkichlari, soliq yuki, soliqlarning progressivligi, daromadlar tengsizligi (Lorens, Jini), Laffer egri chizig‘i va davlat qarzi dinamikasi bo‘yicha hisob-kitob ko‘nikmalarini shakllantirish; byudjet-soliq siyosati vositalarini tahlil qilish.",
  "concepts": [
   "Soliq yuki, umumiy va birlamchi byudjet qoldig‘i",
   "Progressiv, proporsional va regressiv soliqlar; o‘rtacha va chegaraviy stavka",
   "Lorens egri chizig‘i va Jini koeffitsiyenti",
   "Laffer egri chizig‘i",
   "Birlamchi taqchillik va qarz yuki dinamikasi",
   "Tashqi samaralar, Pigu solig‘i, jamoat ne’matlari"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 10-bob",
  "tasks": [
   {
    "id": "mk10-p1",
    "title": "Soliq yuki va byudjet qoldig‘i",
    "text": "Mamlakatda YaIM 1800 trln so‘m, soliq tushumlari 380 trln so‘m, majburiy ijtimoiy to‘lovlar 45 trln so‘m, nobyudjet daromadlar 60 trln so‘m, davlat xaridlari 400 trln so‘m, transfertlar 90 trln so‘m, davlat qarzi bo‘yicha foizlar 25 trln so‘m. a) Soliq yukini hisoblang. b) Umumiy va birlamchi byudjet qoldig‘ini toping (trln so‘mda va YaIMga %). c) Davlat xarajatlarining YaIMdagi ulushini hisoblang.",
    "fields": [
     {
      "label": "a) Soliq yuki",
      "value": 23.61,
      "unit": "%"
     },
     {
      "label": "b) Umumiy byudjet qoldig‘i",
      "value": -30,
      "unit": "trln so‘m"
     },
     {
      "label": "b) Birlamchi byudjet qoldig‘i",
      "value": -5,
      "unit": "trln so‘m"
     },
     {
      "label": "c) Davlat xarajatlarining YaIMdagi ulushi",
      "value": 28.61,
      "unit": "%"
     }
    ],
    "solution": "a) Soliq yuki = (380 + 45)/1800·100 = 23,61%. b) Daromadlar = 380 + 45 + 60 = 485; xarajatlar = 400 + 90 + 25 = 515. Umumiy qoldiq = 485 – 515 = –30 trln (YaIMning –1,67%, taqchillik). Birlamchi qoldiq = –30 + 25 = –5 trln (–0,28%). c) 515/1800·100 = 28,61%.",
    "formula": "Soliq yuki = (Soliqlar + Majburiy to‘lovlar)/YaIM; Birlamchi qoldiq = Umumiy qoldiq + foiz to‘lovlari",
    "note": "Daromadlar soliq, majburiy ijtimoiy to‘lovlar va nobyudjet daromadlar yig‘indisi, xarajatlar esa davlat xaridlari, transfertlar va foizlar yig‘indisi deb talqin qilindi. Nobyudjet daromadlar soliq yukiga kirmaydi."
   },
   {
    "id": "mk10-p2",
    "title": "Progressiv daromad solig‘i",
    "text": "Soliq tizimi: yillik daromadning 30 mln so‘mgacha qismiga 0%, 30–100 mln so‘m qismiga 10%, 100 mln so‘mdan yuqori qismiga 25% stavka. 20, 60, 150 va 400 mln so‘m daromadli shaxslar uchun soliq summasi, o‘rtacha va chegaraviy stavkalarni hisoblang. Bu tizim progressivmi?",
    "fields": [
     {
      "label": "Soliq, daromad 60 mln",
      "value": 3,
      "unit": "mln so‘m"
     },
     {
      "label": "Soliq, daromad 150 mln",
      "value": 19.5,
      "unit": "mln so‘m"
     },
     {
      "label": "Soliq, daromad 400 mln",
      "value": 82,
      "unit": "mln so‘m"
     },
     {
      "label": "O‘rtacha stavka, daromad 400 mln",
      "value": 20.5,
      "unit": "%"
     }
    ],
    "solution": "20 mln: soliq 0 (o‘rtacha 0%, chegaraviy 0%). 60 mln: 0,10·(60 – 30) = 3 mln, o‘rtacha 5%, chegaraviy 10%. 150 mln: 0,10·70 + 0,25·50 = 7 + 12,5 = 19,5 mln, o‘rtacha 13%, chegaraviy 25%. 400 mln: 7 + 0,25·300 = 82 mln, o‘rtacha 20,5%, chegaraviy 25%. O‘rtacha stavka daromad bilan oshadi (0; 5; 13; 20,5%) – tizim progressiv.",
    "formula": "O‘rtacha stavka = T/Y; chegaraviy stavka = ΔT/ΔY",
    "note": "Progressivlik belgisi: o‘rtacha stavka daromad oshgani sari oshadi. Chegaraviy stavka (0; 10; 25%) o‘rtacha stavkadan yuqori, shuning uchun o‘rtacha stavka daromad bilan oshib, 25% ga intiladi."
   },
   {
    "id": "mk10-p3",
    "title": "QQS: progressivmi yoki regressiv?",
    "text": "Ikki oila: birinchisining yillik daromadi 40 mln so‘m, u 36 mln so‘mni iste’molga sarflaydi; ikkinchisining daromadi 200 mln so‘m, iste’moli 120 mln so‘m. QQS stavkasi 12% (iste’mol narxiga kiritilgan deb hisoblang). Har bir oila to‘laydigan QQS ning daromadga nisbatini toping. QQS progressivmi, proporsionalmi yoki regressivmi?",
    "fields": [
     {
      "label": "1-oila to‘lagan QQS",
      "value": 3.86,
      "unit": "mln so‘m"
     },
     {
      "label": "1-oila: QQS / daromad",
      "value": 9.64,
      "unit": "%"
     },
     {
      "label": "2-oila to‘lagan QQS",
      "value": 12.86,
      "unit": "mln so‘m"
     },
     {
      "label": "2-oila: QQS / daromad",
      "value": 6.43,
      "unit": "%"
     }
    ],
    "solution": "QQS iste’mol narxiga kiritilgan: QQS = iste’mol·0,12/1,12. 1-oila: 36·0,12/1,12 = 3,857 mln, daromadga nisbati 3,857/40 = 9,64%. 2-oila: 120·0,12/1,12 = 12,857 mln, 12,857/200 = 6,43%. Daromad oshganda nisbat kamayadi – QQS regressiv.",
    "formula": "QQS = Iste’mol·t/(1 + t); yuk = QQS/Daromad",
    "note": "Agar 12% iste’mol summasiga qo‘shimcha hisoblansa, nisbatlar 10,8% va 7,2% bo‘ladi; xulosa o‘zgarmaydi. Regressivlik sababi: boy oilalar daromadining kattaroq qismini jamg‘aradi."
   },
   {
    "id": "mk10-p4",
    "title": "Lorens egri chizig‘i va Jini koeffitsiyenti",
    "text": "Aholi besh guruhga (kvintillarga) bo‘lingan, ularning daromaddagi ulushi: 6%, 11%, 16%, 23%, 44%. a) Lorens egri chizig‘ini chizing. b) Trapetsiya usulida Jini koeffitsiyentini taxminan hisoblang. c) Soliq va transfertlardan keyin ulushlar 8%, 13%, 17%, 22%, 40% bo‘ldi. Jini koeffitsiyenti qanchaga o‘zgardi?",
    "fields": [
     {
      "label": "b) Jini koeffitsiyenti (soliqdan oldin)",
      "value": 0.352,
      "unit": ""
     },
     {
      "label": "c) Jini koeffitsiyenti (soliq va transfertdan keyin)",
      "value": 0.292,
      "unit": ""
     },
     {
      "label": "c) Jini koeffitsiyentining o‘zgarishi",
      "value": -0.06,
      "unit": ""
     }
    ],
    "solution": "Guruhlar kambag‘aldan boyga qarab tartiblangan. a) Lorens nuqtalari (aholi, daromad): (0;0), (0,2; 0,06), (0,4; 0,17), (0,6; 0,33), (0,8; 0,56), (1; 1). b) Egri chiziq ostidagi yuza (trapetsiyalar): 0,2·[(0 + 0,06)/2 + (0,06 + 0,17)/2 + (0,17 + 0,33)/2 + (0,33 + 0,56)/2 + (0,56 + 1)/2] = 0,2·1,62 = 0,324. G = 1 – 2·0,324 = 0,352. c) Yangi to‘plangan ulushlar: 0,08; 0,21; 0,38; 0,60; 1. Yuza = 0,2·1,77 = 0,354, G = 1 – 0,708 = 0,292. O‘zgarish: 0,292 – 0,352 = –0,06.",
    "formula": "G = A/(A + B) = 1 – 2·S(Lorens egri chizig‘i ostidagi yuza)",
    "note": "Trapetsiya usuli Jini koeffitsiyentini bir oz kam baholaydi (egri chiziq bo‘laklarga bo‘linadi), shuning uchun natija taxminiy. Soliq-transfert tizimi tengsizlikni 0,06 punktga kamaytirdi."
   },
   {
    "id": "mk10-p5",
    "title": "Laffer egri chizig‘i",
    "text": "Soliq tushumlari funksiyasi T = 2000t – 2500t² (mlrd so‘m, t – soliq stavkasi ulushda). a) Tushumlarni maksimallashtiruvchi stavkani toping. b) Maksimal tushum qancha? c) Agar joriy stavka 50% bo‘lsa, stavkani 40% ga pasaytirish tushumlarni qanday o‘zgartiradi?",
    "fields": [
     {
      "label": "a) Tushumni maksimallashtiruvchi stavka",
      "value": 40,
      "unit": "%"
     },
     {
      "label": "b) Maksimal tushum",
      "value": 400,
      "unit": "mlrd so‘m"
     },
     {
      "label": "c) Tushumning o‘zgarishi (50% dan 40% ga)",
      "value": 25,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "a) dT/dt = 2000 – 5000t = 0, t* = 0,4 (40%). b) T(0,4) = 2000·0,4 – 2500·0,16 = 800 – 400 = 400 mlrd. c) T(0,5) = 1000 – 625 = 375 mlrd; stavkani 40% ga pasaytirsak T = 400, ya’ni tushum 25 mlrd so‘mga oshadi.",
    "formula": "max T(t): dT/dt = 0",
    "note": "50% stavka t* = 40% dan yuqorida («taqiqlangan zona»), shuning uchun stavkani pasaytirish tushumni oshiradi."
   }
  ],
  "open": [
   "Davlat byudjeti nima? Muvozanatli byudjet, taqchillik va profitsitni ta’riflang. Byudjet taqchilligining qanday turlari mavjud, birlamchi taqchillik nima? Davlat qarzi va byudjet taqchilligi o‘rtasidagi bog‘liqlikni tushuntiring.",
   "Tashqi samara nima? Ijobiy va salbiy tashqi samaralarga misollar keltiring. Salbiy tashqi samaralarni bartaraf etish uchun davlat qanday vositalardan foydalanadi, Pigu solig‘i nima? Jamoat ne’matlari qanday xususiyatlarga ega va «tekinxo‘r» muammosi nima?",
   "Laffer egri chizig‘ining mohiyatini tushuntiring. O‘zbekistonda 2019-yildagi soliq islohotidan keyin soliq tushumlari o‘sishini Laffer samarasi bilan izohlash mumkinmi yoki boshqa omillar muhimroqmi? Tekis (proporsional) daromad solig‘i adolatlimi?"
  ],
  "refs": [
   "Davlat byudjeti – davlat vazifalarini bajarish uchun pul mablag‘larining markazlashgan fondini shakllantirish va undan foydalanish rejasi. Daromadlar xarajatlarga teng bo‘lsa byudjet muvozanatli, xarajatlar ko‘p bo‘lsa taqchillik (defitsit), daromadlar ko‘p bo‘lsa profitsit. Taqchillik turlari: umumiy (yalpi), birlamchi (qarz foizlarisiz) hamda tarkibiy va tsiklik. Taqchillik – oqim, qarz – zaxira: D(t) = D(t–1) + Taqchillik(t). Qarz nisbatining dinamikasi Δd ≈ (r – g)d – s; g > r bo‘lsa, kichik birlamchi taqchillik bilan ham qarz barqaror turishi mumkin.",
   "Tashqi samara – bitimda ishtirok etmagan uchinchi shaxslarga bozor narxida aks etmaydigan ta’sir. Salbiy (zavod chiqindilari, shovqin, chekish) bo‘lsa, MPC < MSC va bozor ortiqcha ishlab chiqaradi; davlat vositalari: Pigu solig‘i (zarar miqdorida soliq), ekologik normativlar, ifloslantirish huquqlari savdosi. Ijobiy (ta’lim, emlash, fundamental fan) bo‘lsa, MSB > MPB va bozor kam taklif qiladi; vosita: subsidiyalar, bepul ta’lim va tibbiy xizmat, grantlar. Jamoat ne’matlari iste’molda raqobatsiz va chiqarib bo‘lmaydigan (mudofaa, mayoq, ko‘cha yoritilishi); har kim tekinxo‘r bo‘lishni afzal ko‘rgani uchun bozor ularni ta’minlay olmaydi va ular byudjetdan moliyalashtiriladi.",
   "Laffer egri chizig‘i: stavka 0% va 100% da tushum nolga teng, oraliqda tushumni maksimallashtiruvchi t* mavjud; t* dan yuqori stavkalarda («taqiqlangan zona») pasaytirish tushumni oshiradi, pastida kamaytiradi. 2019-yilda QQS, ijtimoiy soliq stavkalari pasaytirilib, daromad solig‘i 12% lik tekis stavkaga o‘tgan, tushumlar esa baribir o‘sgan; asosiy sabab Laffer samarasidan ko‘ra soliq bazasining kengayishi (norasmiy faoliyatning qonuniylashuvi, imtiyozlar bekor qilinishi, elektron hisob-fakturalar, onlayn kassalar). Tekis soliq gorizontal adolat va soddalikni ta’minlaydi, vertikal adolat (to‘lovga qodirlik) nuqtai nazaridan esa progressiv shkalaga yutqazadi; optimal stavka mamlakatlar uchun bir xil emas."
  ]
 },
 "11": {
  "goal": "Fiskal multiplikatorlarni, tarkibiy va tsiklik byudjet qoldig‘ini, siqib chiqarish samarasini va davlat qarzi barqarorligini hisoblash; fiskal siyosatning makroiqtisodiy oqibatlarini baholash.",
  "concepts": [
   "Davlat xarajatlari va soliq multiplikatorlari",
   "Balanslashgan byudjet multiplikatori (Xaavelmo teoremasi)",
   "Avtomatik barqarorlashtiruvchilar",
   "Tarkibiy va tsiklik byudjet qoldig‘i",
   "Siqib chiqarish samarasi",
   "Davlat qarzi dinamikasi: Δd = (r – g)d – s"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 11-bob",
  "tasks": [
   {
    "id": "mk11-p1",
    "title": "Fiskal multiplikatorlar yopiq iqtisodiyotda",
    "text": "Yopiq iqtisodiyot: C = 200 + 0,75(Y – T), I = 300, G = 400, T = 400. a) Muvozanatli Y ni toping. b) kG, kT va balanslashgan byudjet multiplikatorini hisoblang. c) G 50 ga oshsa, Y va byudjet qoldig‘i qanday o‘zgaradi? d) T 50 ga kamaysa-chi? e) G va T ikkalasi 50 ga oshsa-chi? Maydonlarga a), b) va d) bandlar javobini kiriting.",
    "fields": [
     {
      "label": "Muvozanatli Y (a)",
      "value": 2400,
      "unit": ""
     },
     {
      "label": "Davlat xarajatlari multiplikatori kG (b)",
      "value": 4,
      "unit": "marta"
     },
     {
      "label": "Soliq multiplikatori kT (b)",
      "value": -3,
      "unit": "marta"
     },
     {
      "label": "T 50 ga kamayganda Y ning o‘zgarishi (d)",
      "value": 150,
      "unit": ""
     }
    ],
    "solution": "a) Y = [Ca – cT + I + G]/(1 – c) = (200 – 0,75·400 + 300 + 400)/0,25 = 600/0,25 = 2400. b) kG = 1/0,25 = 4; kT = –0,75/0,25 = –3; balanslashgan byudjet multiplikatori = 4 – 3 = 1. c) ΔY = 4·50 = 200 (Y = 2600); boshlang‘ich qoldiq T – G = 0, yangi qoldiq 400 – 450 = –50 (taqchillik 50). d) ΔY = –3·(–50) = +150 (Y = 2550); qoldiq 350 – 400 = –50. e) ΔY = 50 (Y = 2450); qoldiq o‘zgarmaydi (0).",
    "formula": "Y = (Ca – cT + I + G)/(1 – c); kG = 1/(1 – c); kT = –c/(1 – c); kB = kG + kT = 1",
    "note": "Qayd etilgan soliqlar sharoitida. Balanslashgan byudjetda ΔY = ΔG = 50 (Xaavelmo teoremasi). Darslikdagi 2-masala (potensial YaIM 2400) bu yerga kiritilmagan: 1-masalada muvozanatli Y allaqachon 2400, ya’ni uzilish nolga teng – shart noaniq."
   },
   {
    "id": "mk11-p2",
    "title": "Ochiq iqtisodiyot va avtomatik barqarorlashtiruvchilar",
    "text": "Iqtisodiyotda C = 100 + 0,8(Y – T), T = 0,2Y, I = 250, G = 350, X = 200, IM = 50 + 0,14Y. a) Muvozanatli Y ni toping. b) Davlat xarajatlari multiplikatorini hisoblang. c) Byudjet qoldig‘i va sof eksportni toping.",
    "fields": [
     {
      "label": "Muvozanatli Y",
      "value": 1700,
      "unit": ""
     },
     {
      "label": "Davlat xarajatlari multiplikatori kG",
      "value": 2,
      "unit": "marta"
     },
     {
      "label": "Byudjet qoldig‘i (T – G)",
      "value": -10,
      "unit": ""
     },
     {
      "label": "Sof eksport NX",
      "value": -88,
      "unit": ""
     }
    ],
    "solution": "a) Y = 100 + 0,8(Y – 0,2Y) + 250 + 350 + 200 – 50 – 0,14Y = 850 + 0,5Y, bundan Y = 1700. b) kG = 1/(1 – 0,8·0,8 + 0,14) = 1/0,5 = 2. c) T = 0,2·1700 = 340; qoldiq = 340 – 350 = –10 (taqchillik). IM = 50 + 0,14·1700 = 288; NX = 200 – 288 = –88. d) Avtomatik barqarorlashtiruvchi mavjudligi: soliq stavkasi t > 0 va importga moyillik m > 0 multiplikatorni 1/(1 – c) = 5 dan 2 gacha kamaytiradi.",
    "formula": "kG = 1/(1 – c(1 – t) + m); NX = X – IM",
    "note": "Xulosa: multiplikatorning 5 dan 2 gacha kamayishi iqtisodiyot shoklarga kam sezgir ekanini ko‘rsatadi."
   },
   {
    "id": "mk11-p3",
    "title": "Haqiqiy, tarkibiy va tsiklik byudjet qoldig‘i",
    "text": "Davlat xaridlari G = 300, soliqlar T = 0,2Y, transfertlar TR = 100 – 0,05Y. Haqiqiy YaIM 1800, potensial YaIM 2000. Haqiqiy, tarkibiy va tsiklik byudjet qoldiqlarini hisoblang. Hukumat siyosati rag‘batlantiruvchimi yoki cheklovchi?",
    "fields": [
     {
      "label": "Haqiqiy byudjet qoldig‘i",
      "value": 50,
      "unit": ""
     },
     {
      "label": "Tarkibiy byudjet qoldig‘i",
      "value": 100,
      "unit": ""
     },
     {
      "label": "Tsiklik byudjet qoldig‘i",
      "value": -50,
      "unit": ""
     }
    ],
    "solution": "Haqiqiy (Y = 1800): T = 360, TR = 100 – 90 = 10, qoldiq = 360 – 300 – 10 = +50 (profitsit). Tarkibiy (Y* = 2000): T = 400, TR = 0, qoldiq = 400 – 300 – 0 = +100. Tsiklik = 50 – 100 = –50. Fiskal siyosat tarkibiy qoldiq bo‘yicha baholanadi: tarkibiy profitsit (YaIMning 5 foizi) – siyosat cheklovchi.",
    "formula": "Haqiqiy qoldiq = Tarkibiy qoldiq + Tsiklik qoldiq; qoldiq = T – G – TR",
    "note": "Tsiklik qoldiq manfiy: YaIM potensialdan past bo‘lgani uchun avtomatik barqarorlashtiruvchilar profitsitni 50 ga kamaytirgan. Xulosa: tarkibiy profitsit katta, shu sababli siyosat cheklovchi xarakterga ega."
   },
   {
    "id": "mk11-p4",
    "title": "Qarz mablag‘lari bozori va siqib chiqarish",
    "text": "Qarz mablag‘lari bozorida: jamg‘arma S = 300 + 20r (davlat jamg‘armasi bilan birga), investitsiyalar I = 500 – 30r (r – foizda). a) Muvozanatli r va I ni toping. b) Byudjet taqchilligi 50 ga oshib, milliy jamg‘arma 50 ga kamaydi. Yangi r va I ni toping. c) Siqib chiqarish samarasi qancha?",
    "fields": [
     {
      "label": "Dastlabki muvozanatli r",
      "value": 4,
      "unit": "%"
     },
     {
      "label": "Yangi muvozanatli r",
      "value": 5,
      "unit": "%"
     },
     {
      "label": "Yangi investitsiyalar I",
      "value": 350,
      "unit": ""
     },
     {
      "label": "Siqib chiqarish samarasi (investitsiyalarning kamayishi)",
      "value": 30,
      "unit": ""
     }
    ],
    "solution": "a) 300 + 20r = 500 – 30r, 50r = 200, r = 4%; I = 500 – 120 = 380. b) Yangi S = 250 + 20r: 250 + 20r = 500 – 30r, r = 5%; I = 500 – 150 = 350. c) Siqib chiqarish: 380 – 350 = 30 (taqchillik 50 bo‘lsa-da, investitsiya 30 ga kamaydi).",
    "formula": "S(r) = I(r); siqib chiqarish = I0 – I1",
    "note": "Qolgan 20 birlik jamg‘arma kamayishi foiz oshishi hisobiga jamg‘arma o‘sishi (20·1 = 20) bilan qoplanadi: 50 = 30 + 20."
   },
   {
    "id": "mk11-p5",
    "title": "Davlat qarzining barqarorligi",
    "text": "Davlat qarzi YaIMning 50 foizi, real foiz stavkasi 5%, real o‘sish 2%. a) Qarzni barqarorlashtirish uchun qanday birlamchi profitsit kerak? b) Hukumat 2% birlamchi taqchillik bilan yashasa, 10 yildan keyin qarz nisbati qancha bo‘ladi (Δd = (r – g)d – s formulasi bo‘yicha yillik hisoblang)? c) Islohotlar o‘sishni 5% ga oshirsa-chi? (b va c da birlamchi taqchillik 2% saqlanadi.)",
    "fields": [
     {
      "label": "Barqarorlashtiruvchi birlamchi profitsit (YaIMga)",
      "value": 1.5,
      "unit": "%"
     },
     {
      "label": "10 yildan keyin qarz nisbati (b)",
      "value": 90.1,
      "unit": "% YaIM"
     },
     {
      "label": "10 yildan keyin qarz nisbati (c)",
      "value": 70,
      "unit": "% YaIM"
     }
    ],
    "solution": "a) Δd = 0 uchun s = (r – g)d = 0,03·0,5 = 0,015, ya’ni YaIMning 1,5 foizi. b) s = –0,02: d(t+1) = d(t) + 0,03·d(t) + 0,02 = 1,03·d(t) + 0,02. d0 = 0,5; 10 yildan keyin d ≈ 0,901 (90,1%). c) g = 5%: r – g = 0, shuning uchun Δd = 0,02 har yili; 10 yilda d = 0,5 + 0,2 = 0,70 (70%).",
    "formula": "Δd = (r – g)d – s; barqarorlik: s = (r – g)d",
    "note": "Taxminiy formula (darslikdagidek). Aniq formula d(t+1) = d(t)(1+r)/(1+g) + taqchillik bilan b) javob ≈ 89,7% chiqadi – farq kichik. O‘sish r dan yuqori bo‘lganda qarz «qor ko‘chkisi» bo‘lib o‘smaydi."
   }
  ],
  "open": [
   "Oliver-Tanzi samarasini hisoblang. Oylik inflyatsiya 5%, soliqlar o‘rtacha 3 oy kechikish bilan to‘lanadi, yillik nominal soliq tushumlari 200 trln so‘m. Real yo‘qotishni toping. Agar oylik inflyatsiya 0,6% ga tushsa-chi? Natijani «taqchillik – inflyatsiya» qopqoni nuqtai nazaridan izohlang.",
   "Balanslashgan byudjet multiplikatori nimaga teng va nima uchun (Xaavelmo teoremasi)? Soliqlarni kamaytirish va davlat xarajatlarini oshirishning afzalliklari va kamchiliklarini taqqoslang. Nima uchun har yili muvozanatli byudjet talabi retsessiyani chuqurlashtirishi mumkin?",
   "O‘zbekiston fiskal siyosatining asosiy xususiyatlarini va inqiroz sharoitidagi yo‘nalishlarini tahlil qiling. 11.1-jadval ma’lumotlariga (taqchillik: 2024-yilda 3,3%, 2025-yilda 2,1%; davlat qarzi ~31% YaIM) tayanib, Rikardo ekvivalentligi nazariyasi O‘zbekiston sharoitida qanchalik amal qilishini baholang."
  ],
  "refs": [
   "Real yo‘qotish = 1 – 1/(1 + π)^3. Oylik 5% da: 1 – 1/1,05³ = 1 – 0,864 ≈ 13,6%, ya’ni 200 trln so‘mning ≈ 27,2 trln so‘mi. Oylik 0,6% da: 1 – 1/1,006³ ≈ 1,8%, ya’ni ≈ 3,6 trln so‘m. Inflyatsiya pasayganda yo‘qotish taxminan 7,6 baravar kamayadi. Izoh: taqchillik pul emissiyasi bilan moliyalansa inflyatsiya oshadi, real soliq tushumi kamayadi, taqchillik yana kengayadi – qopqon yuzaga keladi; chiqish yo‘li – soliq tizimini barqarorlashtirish va indeksatsiya.",
   "Balanslashgan byudjet multiplikatori 1 ga teng: kG + kT = 1/(1 – c) – c/(1 – c) = 1, chunki soliqning birinchi raunddagi ta’siri faqat c ulush (MPC), xarajatniki esa to‘liq. Taqqoslash: xarajatlar multiplikatori kuchliroq (|kT| = kG – 1), soliqlarni kamaytirish esa tanlov erkinligi beradi, taklif tomoniga (ish, jamg‘arma) ta’sir qiladi va davlat hajmini kengaytirmaydi. Har yili muvozanatli byudjet retsessiyada soliq tushumlari kamayganda xarajatlarni qisqartirishni yoki soliqlarni oshirishni talab qiladi, ya’ni avtomatik barqarorlashtiruvchilarni «o‘chiradi» va yalpi talabni yanada kamaytiradi. Yaxshi javobda tsiklik muvozanatli byudjet va tarkibiy qoida (Germaniya «qarz tormozi») eslatiladi.",
   "Asosiy xususiyatlar: byudjet shaffofligi (2020-yildan byudjet qonun sifatida qabul qilinadi, «Ochiq byudjet» portali), 2019-yilgi soliq islohoti va 2020-yilgi Soliq kodeksi, fiskal qoidalar (taqchillik YaIMning 3 foizidan oshmasligi, «Davlat qarzi to‘g‘risida»gi qonun), taqchillikni qisqartirish (3,3% dan 2,1% gacha), energiya subsidiyalarini isloh qilish, Tiklanish va taraqqiyot jamg‘armasi. Inqiroz choralari: Inqirozga qarshi kurashish jamg‘armasi (10 trln so‘m), soliq imtiyozlari va to‘lovlarni kechiktirish, ijtimoiy himoya, infratuzilma investitsiyalari, tadbirkorlarni kreditlash. Rikardo ekvivalentligi: taqchillik qarz bilan moliyalansa, oqilona uy xo‘jaliklari kelajakdagi soliqlar uchun jamg‘aradi; tanqid – qisqa muddatli fikrlash, likvidlik cheklovlari, meros qoldirishga befarqlik. O‘zbekistonda moliyaviy bozorlar sayoz va likvidlik cheklovlari kuchli, shuning uchun nazariya to‘liq amal qilmasligi ehtimoli yuqori; asoslangan va mezonli xulosa talab qilinadi."
  ]
 },
 "12": {
  "goal": "Tijorat banki balansi, pul multiplikatori, Teylor qoidasi, real foiz stavkasi va transmissiya mexanizmi bo‘yicha hisob-kitob ko‘nikmalarini shakllantirish; pul-kredit siyosati vositalari va laglarini tahlil qilish.",
  "concepts": [
   "Bank balansi, kapital va leveredj",
   "Majburiy zaxira normasi",
   "Pul multiplikatori va ochiq bozor operatsiyalari",
   "Teylor qoidasi va Teylor prinsipi",
   "Ex ante va ex post real foiz stavkasi",
   "Transmissiya mexanizmi kanallari va tashqi lag"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 12-bob",
  "tasks": [
   {
    "id": "mk12-p1",
    "title": "Tijorat bankining balansi va leveredj",
    "text": "Tijorat bankining balansi: depozitlar 800 mlrd so‘m, kapital 100 mlrd so‘m, majburiy zaxira normasi 10%, bank 30 mlrd so‘m ortiqcha zaxira saqlaydi, qolgan mablag‘lar kreditlarga joylashtirilgan. a) Bank aktivlari tarkibini (zaxiralar, kreditlar) toping. b) Leveredj koeffitsiyentini hisoblang. c) Agar kreditlarning 8 foizi qaytmasa, bank kapitali qanchaga kamayadi? d) Majburiy zaxira normasi 15% ga oshirilsa (ortiqcha zaxira va depozitlar o‘zgarmasa), bank kreditlarni qanchaga qisqartirishi kerak?",
    "fields": [
     {
      "label": "Kreditlar (a)",
      "value": 790,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Leveredj koeffitsiyenti (b)",
      "value": 9,
      "unit": "marta"
     },
     {
      "label": "Kapital qoldig‘i zarardan keyin (c)",
      "value": 36.8,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Kreditlarni qisqartirish (d)",
      "value": 40,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "Aktivlar = majburiyatlar + kapital = 800 + 100 = 900. a) Majburiy zaxira 0,10·800 = 80; jami zaxira 80 + 30 = 110; kreditlar 900 – 110 = 790. b) Leveredj = 900/100 = 9. c) Zarar 0,08·790 = 63,2; kapital 100 – 63,2 = 36,8 (kapital 63,2% ga kamayadi). d) Majburiy zaxira 0,15·800 = 120; ortiqcha 30 saqlansa, zaxira 150, ya’ni 40 ga ko‘p – kreditlar 790 dan 750 ga qisqaradi.",
    "formula": "Aktivlar = Majburiyatlar + Kapital; Leveredj = Aktivlar/Kapital; Zaxira = rr·D + ortiqcha",
    "note": "d) bandda ortiqcha zaxira 30 o‘zgarmaydi deb olingan; agar bank ortiqcha zaxirani sarflasa (110 dan 120 gacha yetmaydi), qisqartirish 10 ga teng bo‘lardi. Zarar 63,2 kapitalning ko‘pini yo‘qotadi – leveredj 9 bo‘lganda ham xavf katta."
   },
   {
    "id": "mk12-p2",
    "title": "Pul massasi va pul bazasi",
    "text": "Pul bazasi 180 trln so‘m, cr = 0,3, rr = 0,08. a) Pul massasini hisoblang. b) Markaziy bank majburiy zaxira normasini 0,12 ga oshirdi. Pul massasi qanchaga o‘zgaradi? c) Pul massasini avvalgi darajada saqlash uchun Markaziy bank ochiq bozorda qancha qimmatli qog‘oz sotib olishi kerak?",
    "fields": [
     {
      "label": "Pul massasi (a)",
      "value": 615.79,
      "unit": "trln so‘m"
     },
     {
      "label": "Pul massasining o‘zgarishi (b)",
      "value": -58.65,
      "unit": "trln so‘m"
     },
     {
      "label": "Qimmatli qog‘ozlar xaridi (c)",
      "value": 18.95,
      "unit": "trln so‘m"
     }
    ],
    "solution": "m = (cr + 1)/(cr + rr). a) m = 1,3/0,38 = 3,421; M = 180·3,421 = 615,79. b) m = 1,3/0,42 = 3,095; M = 180·3,095 = 557,14; ΔM = 557,14 – 615,79 = –58,65. c) Kerakli B = 615,79/3,095 = 198,95; ΔB = 198,95 – 180 = 18,95 trln so‘m – shuncha qimmatli qog‘ozni Markaziy bank sotib oladi (pul bazasi oshadi).",
    "formula": "M = m·B; m = (cr + 1)/(cr + rr)",
    "note": "Majburiy zaxira normasi oshganda multiplikator kamayadi. Ochiq bozorda xarid pul bazasini ko‘paytiradi."
   },
   {
    "id": "mk12-p3",
    "title": "Teylor qoidasi bo‘yicha stavka",
    "text": "Teylor qoidasi: i = π + 2 + 0,5(π – 2) + 0,5 × uzilish (AQSH uchun). a) π = 3%, uzilish = –1% bo‘lsa, stavka qancha bo‘lishi kerak? b) π = 6%, uzilish = +2% bo‘lsa-chi? c) O‘zbekiston uchun (r* = 4%, π* = 5%) π = 6,5% va uzilish = +0,5% bo‘lsa, stavka qancha bo‘ladi?",
    "fields": [
     {
      "label": "Stavka (a)",
      "value": 5,
      "unit": "%"
     },
     {
      "label": "Stavka (b)",
      "value": 11,
      "unit": "%"
     },
     {
      "label": "Stavka O‘zbekiston uchun (c)",
      "value": 11.5,
      "unit": "%"
     }
    ],
    "solution": "a) i = 3 + 2 + 0,5·(3 – 2) + 0,5·(–1) = 3 + 2 + 0,5 – 0,5 = 5%. b) i = 6 + 2 + 0,5·4 + 0,5·2 = 6 + 2 + 2 + 1 = 11%. c) i = 6,5 + 4 + 0,5·(6,5 – 5) + 0,5·0,5 = 6,5 + 4 + 0,75 + 0,25 = 11,5%.",
    "formula": "i = π + r* + 0,5(π – π*) + 0,5 × YaIM uzilishi",
    "note": "Teylor prinsipi: inflyatsiya 1 punktga oshsa, nominal stavka 1,5 punktga oshishi kerak (real stavka ham oshadi). (b) da real stavka 11 – 6 = 5% bo‘ldi."
   },
   {
    "id": "mk12-p4",
    "title": "Ex ante va ex post real foiz stavkasi",
    "text": "Inflyatsiya 9%, Markaziy bank asosiy stavkasi 14%, kutilayotgan inflyatsiya 8%. a) Ex ante va ex post real stavkalarni hisoblang. b) Agar Markaziy bank real stavkani 6% darajasida saqlamoqchi bo‘lsa va kutilayotgan inflyatsiya 7% ga pasaysa, asosiy stavkani qanday o‘zgartirish kerak?",
    "fields": [
     {
      "label": "Ex ante real stavka",
      "value": 6,
      "unit": "%"
     },
     {
      "label": "Ex post real stavka",
      "value": 5,
      "unit": "%"
     },
     {
      "label": "Yangi asosiy stavka (b)",
      "value": 13,
      "unit": "%"
     },
     {
      "label": "Asosiy stavkaning o‘zgarishi (b)",
      "value": -1,
      "unit": "foiz punkti"
     }
    ],
    "solution": "a) Ex ante r = i – π^e = 14 – 8 = 6%; ex post r = i – π = 14 – 9 = 5%. b) i = r + π^e = 6 + 7 = 13%, ya’ni stavkani 1 punktga (14 dan 13 gacha) pasaytirish kerak.",
    "formula": "r = i – π (taxminiy Fisher tenglamasi); ex ante: π^e, ex post: haqiqiy π",
    "note": "Qaror kutilayotgan inflyatsiyaga asoslanadi, shuning uchun ex ante stavka muhim. Kutilayotgan inflyatsiya pasaysa, real stavkani saqlash uchun nominal stavka pasayadi."
   },
   {
    "id": "mk12-p5",
    "title": "Asosiy stavka oshishining YaIMga ta’siri",
    "text": "Asosiy stavka 1 foiz punktga oshirilganda: kredit stavkalari 0,7 punktga oshadi; investitsiyalar kredit stavkasining har 1 punkt oshishiga 3% ga kamayadi; investitsiyalar YaIMning 30%; multiplikator 1,5. YaIMga umumiy ta’sirni (foizda) taxminan hisoblang. Valyuta kursi kanalini ham hisobga olsak, natija qanday o‘zgarishi mumkin?",
    "fields": [
     {
      "label": "Investitsiyalarning nisbiy kamayishi",
      "value": -2.1,
      "unit": "%"
     },
     {
      "label": "Investitsiyalar kamayishi (YaIMga nisbatan)",
      "value": -0.63,
      "unit": "% YaIM"
     },
     {
      "label": "YaIMga umumiy ta’sir",
      "value": -0.945,
      "unit": "%"
     }
    ],
    "solution": "Kredit stavkasi +0,7 punkt, investitsiya 3%·0,7 = 2,1% ga kamayadi. ΔI = 0,021·0,30 = 0,0063, ya’ni YaIMning 0,63%. Multiplikator orqali ΔY = 1,5·0,63 = 0,945%. Valyuta kursi kanali: stavka oshsa milliy valyuta mustahkamlanadi, eksport qimmatlashadi, sof eksport kamayadi – YaIMning qisqarishi 0,945% dan kattaroq bo‘ladi (import arzonlashib, inflyatsiya ham pasayadi).",
    "formula": "ΔI/I = –3%·Δi_kredit; ΔY = k·ΔI",
    "note": "Shart talqini: sezgirlik (3%) kredit stavkasining 1 punktiga nisbatan olingan. Taxminiy hisob – boshqa kanallar (aktivlar narxi, kutishlar) e’tiborga olinmagan."
   }
  ],
  "open": [
   "Monetar siyosatning tashqi lagi o‘rtacha 15 oy. Markaziy bank yanvar oyida inflyatsiya maqsaddan 2 punkt yuqoriligini aniqladi va stavkani oshirdi. Ta’sir qachon to‘liq namoyon bo‘ladi? Agar shu davrda iqtisodiyot o‘z-o‘zidan sekinlasha boshlasa, qanday xavf yuzaga keladi? Grafik bilan tushuntiring.",
   "Rivojlanayotgan mamlakatlarda transmissiya mexanizmi nima uchun zaif ishlaydi? Transmissiya mexanizmining asosiy kanallarini tavsiflang va O‘zbekiston misolida buzilishlarni kamaytirish yo‘llarini baholang.",
   "Ikki bosqichli bank tizimi, foiz koridori va Markaziy bank mustaqilligini tahlil qiling. Vaqt bo‘yicha nomuvofiqlik muammosi nima va uni qanday hal qilish mumkin? Monetar va fiskal siyosatni muvofiqlashtirish muammolari hamda «fiskal ustunlik»ning mohiyatini yoriting."
  ],
  "refs": [
   "Ta’sir to‘liq namoyon bo‘lishi taxminan 15 oydan keyin, ya’ni keyingi yilning aprel oyi atrofida kutiladi. Ichki lag qisqa (qaror bir kunda), tashqi lag esa uzoq. Xavf: iqtisodiyot o‘z-o‘zidan sekinlashayotgan paytda stavkaning oshirilishi ta’sirini ko‘rsatadi va sekinlashuvni haddan tashqari chuqurlashtirishi (retsessiya) mumkin; ya’ni siyosat siklga qarshi emas, tsiklni kuchaytiruvchi (prosiklik) bo‘lib qoladi. Yaxshi javobda prognozlarga asoslangan qaror, oldindan ko‘ra bilish va ehtiyotkorlik tamoyili ham tilga olinadi. Grafikda vaqt o‘qida stavka oshirilgan moment, ta’sir egri chizig‘i va iqtisodiy tsikl ko‘rsatiladi.",
   "Kanallar: foiz stavkasi (real stavka orqali investitsiya va iste’mol), kredit kanali (bank kreditlash va balans), aktivlar narxlari, valyuta kursi, kutishlar. Zaiflik sabablari: dollarlashuv, davlat banklarining yuqori ulushi va yo‘naltirilgan imtiyozli kreditlar, sayoz moliya bozorlari, norasmiy iqtisodiyot va naqd pul, Markaziy bankka ishonchning pastligi, fiskal ustunlik. O‘zbekistonda choralar: imtiyozli kreditlashni bosqichma-bosqich tugatish, davlat banklarini xususiylashtirish, dollarlashuvni kamaytirish (xorijiy valyutadagi depozitlarga yuqoriroq zaxira normasi), kommunikatsiyani yaxshilash (oldindan e’lon qilingan jadval, yiliga 8 marta qaror). Natija: so‘mdagi muddatli depozitlar o‘sishi va inflyatsion kutishlarning pasayishi.",
   "Ikki bosqichli tizim: Markaziy bank (birinchi bosqich: emissiya, stavka, tartibga solish) va tijorat banklari (ikkinchi bosqich: depozit, kredit va hisob-kitob xizmatlari). Foiz koridori: asosiy stavka atrofida yuqori va quyi chegara (doimiy vositalar stavkalari), bozor stavkalari shu koridor ichida ushlab turiladi. Vaqt bo‘yicha nomuvofiqlik: ma’qul bo‘lgan siyosat va kelajakda amalga oshiriladigan siyosat farq qiladi (qisqa muddatli rag‘batlantirish vasvasasi); yechim – qoidalar (Teylor qoidasi, inflyatsion targetlash), Markaziy bank mustaqilligi va ishonchli kommunikatsiya. Fiskal ustunlik: byudjet taqchilligi monetar siyosatni bo‘ysundiradi va Markaziy bankni taqchillikni monetlashtirishga majbur qiladi; muvofiqlashtirish uchun fiskal qoidalar va Markaziy bank bilan hukumat vazifalarining aniq ajratilishi zarur."
  ]
 },
 "13": {
  "goal": "IS va LM tenglamalarini tuzish, birgalikdagi muvozanatni topish, fiskal va monetar multiplikatorlar, siqib chiqarish samarasi, likvidlik tuzog‘i va AD egri chizig‘ini hisoblash ko‘nikmalarini shakllantirish; siyosatlar kombinatsiyasini tahlil qilish.",
  "concepts": [
   "IS va LM egri chiziqlari",
   "Birgalikdagi muvozanat (Y*, r*)",
   "Fiskal va monetar multiplikatorlar",
   "Siqib chiqarish samarasi",
   "Likvidlik tuzog‘i va investitsiya tuzog‘i",
   "AD egri chizig‘i va Pigu samarasi"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 13-bob",
  "tasks": [
   {
    "id": "mk13-p1",
    "title": "IS-LM muvozanati va siyosat ta’siri",
    "text": "Iqtisodiyotda: C = 200 + 0,75(Y – T), I = 200 – 25r, G = 100, T = 100; pulga talab (M/P)D = Y – 100r, M = 1000, P = 2. a) IS va LM tenglamalarini toping. b) Muvozanatli Y va r ni aniqlang. c) G 150 ga oshsa, yangi muvozanatni toping va siqib chiqarish samarasini hisoblang (Keyns xochi bilan taqqoslang). d) M 1200 ga oshsa (G = 100), yangi muvozanatni toping.",
    "fields": [
     {
      "label": "Dastlabki muvozanatli daromad Y*",
      "value": 1100,
      "unit": ""
     },
     {
      "label": "G = 150 bo‘lganda yangi muvozanatli Y",
      "value": 1200,
      "unit": ""
     },
     {
      "label": "Siqib chiqarish samarasi (Keyns xochidagi Y dan farq)",
      "value": 100,
      "unit": ""
     },
     {
      "label": "M = 1200 bo‘lganda yangi muvozanatli Y",
      "value": 1150,
      "unit": ""
     }
    ],
    "solution": "a) IS: Y = 200 + 0,75(Y – 100) + 200 – 25r + 100 = 425 + 0,75Y – 25r, 0,25Y = 425 – 25r, Y = 1700 – 100r. LM: M/P = 500 = Y – 100r, Y = 500 + 100r. b) 1700 – 100r = 500 + 100r, r* = 6, Y* = 1100. c) G = 150: IS siljishi = 50/(1 – 0,75) = 200, IS: Y = 1900 – 100r; 1900 – 100r = 500 + 100r, r = 7, Y = 1200. Keyns xochida (r = 6 qayd etilgan) Y = 1100 + 200 = 1300. Siqib chiqarish = 1300 – 1200 = 100 (investitsiya 25·1 = 25 ga kamaydi, ya’ni I: 50 dan 25 ga). d) M/P = 600, LM: Y = 600 + 100r; 1700 – 100r = 600 + 100r, r = 5,5, Y = 1150.",
    "formula": "IS: Y = (Ca – cT + e + G – dr)/(1 – c); LM: M/P = kY – hr",
    "note": "Siljish hajmi ΔG/(1 – c) = 200, ammo foiz stavkasi 6 dan 7 ga oshgani uchun daromad faqat 100 ga o‘sdi. Pul taklifi oshganda r = 5,5 ga pasayadi va Y = 1150 ga oshadi."
   },
   {
    "id": "mk13-p2",
    "title": "Fiskal va monetar multiplikatorlar",
    "text": "13.3-banddagi misol (C = 100 + 0,8(Y – T), I = 300 – 25r, G = 200, T = 200, L = 0,5Y – 50r, M = 800, P = 1) sharoitida: a) fiskal va monetar multiplikatorlarni formulalar bo‘yicha hisoblang; b) G ni 50 ga oshirishning Y ga ta’sirini toping; c) M ni 50 ga oshirishning Y ga ta’sirini toping.",
    "fields": [
     {
      "label": "Fiskal multiplikator ΔY/ΔG",
      "value": 2.22,
      "unit": ""
     },
     {
      "label": "Monetar multiplikator ΔY/Δ(M/P)",
      "value": 1.11,
      "unit": ""
     },
     {
      "label": "G 50 ga oshganda daromad o‘zgarishi ΔY",
      "value": 111.1,
      "unit": "mlrd so‘m"
     },
     {
      "label": "M 50 ga oshganda daromad o‘zgarishi ΔY",
      "value": 55.6,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "Parametrlar: c = 0,8, d = 25, k = 0,5, h = 50. Fiskal multiplikator = 1/((1 – c) + dk/h) = 1/(0,2 + 25·0,5/50) = 1/(0,2 + 0,25) = 2,22 (Keyns xochida 1/0,2 = 5). Monetar multiplikator = (d/h)/((1 – c) + dk/h) = 0,5/0,45 = 1,11. G ga: ΔY = 50·2,222 = 111,1; M ga: ΔY = 50·1,111 = 55,6. Dastlabki muvozanat Y = 1866,7, r = 2,67.",
    "formula": "ΔY/ΔG = 1/((1 – c) + dk/h); ΔY/Δ(M/P) = (d/h)/((1 – c) + dk/h)",
    "note": "Tekshiruv: G = 250 da IS: Y = 2450 – 125r, LM: Y = 1600 + 100r, r = 3,78, Y = 1977,8 (ya’ni +111,1). M = 850 da LM: Y = 1700 + 100r, r = 2,22, Y = 1922,2 (ya’ni +55,6)."
   },
   {
    "id": "mk13-p3",
    "title": "Investitsiyalar foizga kam sezgir bo‘lganda",
    "text": "2-masalada investitsiyalarning foizga sezgirligi d = 5 ga kamaydi (I = 300 – 5r, avtonom qism o‘zgarmadi). Yangi muvozanatni toping va G hamda M ni 50 ga oshirish ta’sirini qayta hisoblang. Natijalarni 2-masala bilan solishtiring va xulosa chiqaring.",
    "fields": [
     {
      "label": "Yangi muvozanatli daromad Y*",
      "value": 2080,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Yangi muvozanatli foiz stavkasi r*",
      "value": 4.8,
      "unit": "%"
     },
     {
      "label": "G 50 ga oshganda ΔY",
      "value": 200,
      "unit": "mlrd so‘m"
     },
     {
      "label": "M 50 ga oshganda ΔY",
      "value": 20,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "IS: Y = 100 + 0,8(Y – 200) + 300 – 5r + 200 ⇒ 0,2Y = 440 – 5r ⇒ Y = 2200 – 25r. LM: Y = 1600 + 100r. 2200 – 25r = 1600 + 100r ⇒ r = 4,8, Y = 2080. Fiskal multiplikator = 1/(0,2 + 5·0,5/50) = 1/0,25 = 4, ΔY = 50·4 = 200. Monetar multiplikator = (5/50)/0,25 = 0,4, ΔY = 50·0,4 = 20.",
    "formula": "ΔY/ΔG = 1/((1 – c) + dk/h); ΔY/Δ(M/P) = (d/h)/((1 – c) + dk/h)",
    "note": "Xulosa: d 25 dan 5 ga kamayganda fiskal samara 111,1 dan 200 ga oshdi (siqib chiqarish kamaydi), monetar samara esa 55,6 dan 20 ga tushdi (IS tikroq, investitsiya tuzog‘iga yaqinlashish)."
   },
   {
    "id": "mk13-p4",
    "title": "AD egri chizig‘ini keltirib chiqarish",
    "text": "IS: Y = 2000 – 100r; LM: Y = 1000 + 100r (P = 1 da). Real pul taklifi P ga teskari proporsional: LM: Y = 600 + 400/P + 100r. a) P = 1; 1,25; 0,8 bo‘lganda muvozanatli Y ni toping. b) AD egri chizig‘i tenglamasini keltirib chiqaring. c) Agar potensial YaIM 1600 bo‘lsa, uzoq muddatli muvozanatli narxlar darajasini toping.",
    "fields": [
     {
      "label": "P = 1,25 bo‘lganda muvozanatli Y",
      "value": 1460,
      "unit": ""
     },
     {
      "label": "P = 0,8 bo‘lganda muvozanatli Y",
      "value": 1550,
      "unit": ""
     },
     {
      "label": "Uzoq muddatli muvozanatli narxlar darajasi P (ikki xonagacha)",
      "value": 0.67,
      "unit": ""
     }
    ],
    "solution": "IS = LM: 2000 – 100r = 600 + 400/P + 100r ⇒ 200r = 1400 – 400/P ⇒ r = 7 – 2/P. Y = 2000 – 100(7 – 2/P) = 1300 + 200/P (AD tenglamasi). P = 1: Y = 1500; P = 1,25: Y = 1300 + 160 = 1460; P = 0,8: Y = 1300 + 250 = 1550. Uzoq muddatda Y = 1600: 1300 + 200/P = 1600 ⇒ P = 200/300 = 0,667.",
    "formula": "AD: Y = 1300 + 200/P; uzoq muddatda Y = Y*",
    "note": "AD pastga qiyshaygan: P oshsa Y kamayadi. Joriy P = 1 da Y = 1500 < 1600, ya’ni retsessiya ayirmasi: narxlar pasayib, 0,67 ga tushishi kerak (LM o‘ngga siljiydi)."
   },
   {
    "id": "mk13-p5",
    "title": "Likvidlik tuzog‘i",
    "text": "Likvidlik tuzog‘i: LM r = 0,5% darajada Y < 1500 bo‘lganda gorizontal. IS: Y = 1400 – 50r. a) Muvozanatni toping. b) Pul taklifining oshishi muvozanatga ta’sir qiladimi? c) Davlat xaridlari 60 ga oshsa (multiplikator 2,5), IS ning gorizontal siljishi va multiplikator bo‘yicha daromad o‘sishini toping.",
    "fields": [
     {
      "label": "Muvozanatli daromad Y*",
      "value": 1375,
      "unit": ""
     },
     {
      "label": "Pul taklifi oshganda daromad o‘zgarishi",
      "value": 0,
      "unit": ""
     },
     {
      "label": "G 60 ga oshganda IS ning gorizontal siljishi (multiplikator bo‘yicha ΔY)",
      "value": 150,
      "unit": ""
     }
    ],
    "solution": "a) r = 0,5 da Y = 1400 – 50·0,5 = 1375 < 1500, demak muvozanat LM ning gorizontal kesimida: Y* = 1375, r* = 0,5%. b) Yo‘q: pul taklifi oshsa gorizontal kesim o‘ngga uzayadi, ammo kesishish nuqtasi o‘zgarmaydi (monetar siyosat samarasiz). c) ΔG = 60, multiplikator 2,5, IS ning gorizontal siljishi = 60·2,5 = 150, IS: Y = 1550 – 50r. r = 0,5 da Y = 1525.",
    "formula": "Gorizontal kesimda: r = const; ΔY = ΔG × (1/(1 – c))",
    "note": "Diqqat: 1525 > 1500, ya’ni multiplikator bo‘yicha nazariy o‘sish LM ning gorizontal kesimi chegarasidan o‘tib ketadi. Shuning uchun 150 – faqat to‘liq multiplikator samarasi (siqib chiqarishsiz); chegaradan o‘tgach LM ko‘tariluvchi bo‘ladi va haqiqiy o‘sish bundan kichikroq (shartda ko‘tariluvchi kesim tenglamasi berilmagan, aniq Y topilmaydi). Darslikdagi 6-masala (MB ning uch reaksiyasi) ochiq topshiriqqa o‘tkazildi."
   }
  ],
  "open": [
   "Hukumat davlat xaridlarini 100 ga oshirdi. Markaziy bank: a) foiz stavkasini qayd etilgan ushlab turadi; b) pul taklifini o‘zgartirmaydi; c) daromadni qayd etilgan ushlab turadi. Har bir holat uchun IS-LM grafigini chizing va Y, r, I ga ta’sirni tushuntiring.",
   "Monetar cheklash foiz stavkalarini oshiradimi yoki pasaytiradimi? Likvidlik samarasi va Fisher samarasini taqqoslang, 1979–1986-yillardagi AQSH (P. Volker) tajribasi bilan izohlang.",
   "IS-LM modelini O‘zbekiston sharoitida qo‘llashda qanday xususiyatlarni hisobga olish kerak? Agar investitsiyalar foiz stavkasiga kam sezgir bo‘lsa, qisqa muddatda qaysi siyosat – fiskal yoki monetar – yalpi talabga kuchliroq ta’sir qiladi va bu inflyatsiyani pasaytirish strategiyasi uchun nimani anglatadi?"
  ],
  "refs": [
   "a) MB foizni qayd etilgan ushlab tursa, u pul taklifini oshiradi: LM o‘ngga siljiydi, siqib chiqarish bo‘lmaydi, daromad to‘liq Keyns multiplikatori ΔG/(1 – c) miqdorida oshadi, r va I o‘zgarmaydi. b) Pul taklifi o‘zgarmasa, IS o‘ngga siljiydi, Y va r oshadi, I kamayadi (qisman siqib chiqarish), Y o‘sishi multiplikatordan kichik. c) MB daromadni qayd etilgan ushlab tursa, LM yuqoriga (chapga) siljiydi: Y o‘zgarmaydi, r eng ko‘p oshadi, I to‘liq siqib chiqariladi. Xulosa: fiskal multiplikator MB reaksiyasiga bog‘liq.",
   "IS-LM bo‘yicha pul taklifining qisqarishi LM ni chapga siljitadi va qisqa muddatda narxlar qat’iy bo‘lganda foiz stavkasini oshiradi (likvidlik samarasi). Uzoq muddatda pul o‘sishining sekinlashuvi inflyatsiya va kutilayotgan inflyatsiyani pasaytiradi, shuning uchun nominal stavka pasayadi (Fisher samarasi). AQSHda Volker siyosatidan keyin qisqa muddatli stavkalar 1979-yildagi 10 foizdan 1981-yilda 15 foizdan oshdi, 1986-yilga kelib 6 foizga tushdi. Demak, ikkala samara ham to‘g‘ri, faqat vaqt gorizonti har xil.",
   "Hisobga olinadigan xususiyatlar: iqtisodiyot ochiq (to‘liqroq tahlil uchun Mandell-Fleming modeli kerak), investitsiyalar ko‘p qismi xorijiy kredit, davlat dasturlari va imtiyozli kreditlar hisobidan moliyalanadi (d kichik, IS tik), Markaziy bank pul massasini emas, stavkani boshqaradi (LM gorizontalga yaqin; IS-MP yondashuvi), dollarlashuv va yo‘naltirilgan kreditlar foiz kanalini zaiflashtiradi. IS tik bo‘lsa, fiskal siyosat kuchliroq, monetar siyosat zaifroq ta’sir qiladi (13.2-jadval). Inflyatsiyani pasaytirishda faqat stavkaga tayanish yetarli emas: fiskal intizom va transmissiya kanallarini kuchaytirish zarur."
  ]
 },
 "14": {
  "goal": "Iqtisodiy o‘sish sur’atlarini hisoblash, «70 qoidasi»ni qo‘llash, o‘sishni hisoblash (Solou qoldig‘i) orqali o‘sish manbalarini ajratish, Domar va Xarrod modellari bo‘yicha muvozanatli, kafolatlangan va tabiiy o‘sish sur’atlarini topish.",
  "concepts": [
   "Real YaIM va aholi jon boshiga YaIM o‘sishi",
   "«70 qoidasi»",
   "Umumiy omil unumdorligi (Solou qoldig‘i)",
   "Domar formulasi ΔI/I = σs",
   "Xarrod modeli: G, Gw, Gn",
   "«Pichoq tig‘i» muammosi"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 14-bob",
  "tasks": [
   {
    "id": "mk14-p1",
    "title": "O‘sish sur’atlari va ikki baravar oshish muddati",
    "text": "Mamlakatda real YaIM 2024-yilda 1200 trln so‘m, 2025-yilda 1290 trln so‘m; aholi 37,2 mln dan 37,9 mln kishiga ko‘paydi. a) Real YaIM va aholi jon boshiga real YaIM o‘sish sur’atlarini hisoblang. b) Agar bu sur’atlar saqlansa, aholi jon boshiga YaIM necha yilda ikki baravar oshadi?",
    "fields": [
     {
      "label": "Real YaIM o‘sish sur’ati",
      "value": 7.5,
      "unit": "%"
     },
     {
      "label": "Aholi o‘sish sur’ati",
      "value": 1.88,
      "unit": "%"
     },
     {
      "label": "Aholi jon boshiga real YaIM o‘sish sur’ati",
      "value": 5.51,
      "unit": "%"
     },
     {
      "label": "Jon boshiga YaIM ikki baravar oshish muddati (aniq hisob)",
      "value": 12.9,
      "unit": "yil"
     }
    ],
    "solution": "gY = (1290 – 1200)/1200 = 7,5%. Aholi: 37,9/37,2 – 1 = 1,88%. Jon boshiga YaIM: 1290/37,9 = 34,04 va 1200/37,2 = 32,26 trln/mln, o‘sish = 34,04/32,26 – 1 = 5,51% (taxminan gY – gN = 7,5 – 1,88 = 5,62%). Ikki baravar oshish: (1,0551)^T = 2, T = ln2/ln1,0551 ≈ 12,9 yil; «70 qoidasi» bo‘yicha 70/5,51 ≈ 12,7 yil.",
    "formula": "gy ≈ gY – gN; T2x = ln2/ln(1 + g) ≈ 70/g(%)",
    "note": "Taqribiy formula (gY – gN) 5,62% beradi, aniq hisob 5,51%; ikki baravar oshish muddati uchun «70 qoidasi» 12,7 yil beradi."
   },
   {
    "id": "mk14-p2",
    "title": "O‘sishni hisoblash (Solou qoldig‘i)",
    "text": "Kobb-Duglas funksiyasi Y = AK^0,3·L^0,7. Yil davomida YaIM 6%, kapital 8%, mehnat 1,5% ga o‘sdi. a) UOU o‘sishini hisoblang. b) O‘sishning necha foizi kapital, mehnat va UOU hissasiga to‘g‘ri keladi? c) Agar UOU o‘sishi nolga teng bo‘lganda, YaIM qanchaga o‘sgan bo‘lardi?",
    "fields": [
     {
      "label": "UOU o‘sishi (Solou qoldig‘i)",
      "value": 2.55,
      "unit": "foiz punkt"
     },
     {
      "label": "Kapital hissasi (o‘sishdagi ulushi)",
      "value": 40,
      "unit": "%"
     },
     {
      "label": "UOU hissasi (o‘sishdagi ulushi)",
      "value": 42.5,
      "unit": "%"
     },
     {
      "label": "UOU o‘smaganda YaIM o‘sishi",
      "value": 3.45,
      "unit": "%"
     }
    ],
    "solution": "Kapital hissasi: 0,3·8 = 2,4 punkt; mehnat: 0,7·1,5 = 1,05 punkt; UOU = 6 – 2,4 – 1,05 = 2,55 punkt. Ulushlar: kapital 2,4/6 = 40%, mehnat 1,05/6 = 17,5%, UOU 2,55/6 = 42,5%. UOU = 0 bo‘lsa, YaIM o‘sishi = 2,4 + 1,05 = 3,45%.",
    "formula": "ΔA/A = ΔY/Y – α·ΔK/K – (1 – α)·ΔL/L",
    "note": "O‘sishning 57,5 foizi resurslarni ko‘paytirish (ekstensiv), 42,5 foizi samaradorlik (intensiv) hisobiga."
   },
   {
    "id": "mk14-p3",
    "title": "Domar modeli",
    "text": "Domar modeli: s = 0,2, σ = 0,3. a) Muvozanatli o‘sish sur’atini toping. b) Joriy yilda investitsiyalar 300 mlrd so‘m bo‘lsa, kelgusi yili ular qancha bo‘lishi kerak? c) Agar investitsiyalar faqat 4% ga o‘ssa, talab o‘sishi va quvvatlar o‘sishi o‘rtasidagi farqni (yillik) hisoblang.",
    "fields": [
     {
      "label": "Muvozanatli o‘sish sur’ati",
      "value": 6,
      "unit": "%"
     },
     {
      "label": "Kelgusi yilgi zarur investitsiyalar",
      "value": 318,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Quvvatlar o‘sishi (σI)",
      "value": 90,
      "unit": "mlrd so‘m"
     },
     {
      "label": "Talab o‘sishi, investitsiyalar 4% ga oshganda",
      "value": 60,
      "unit": "mlrd so‘m"
     }
    ],
    "solution": "a) ΔI/I = σs = 0,3·0,2 = 0,06 = 6%. b) I₁ = 300·1,06 = 318 mlrd so‘m. c) Quvvatlar o‘sishi ΔYs = σI = 0,3·300 = 90 mlrd so‘m. Investitsiyalar 4% ga oshsa, ΔI = 12, talab o‘sishi ΔYd = ΔI/s = 12/0,2 = 60 mlrd so‘m. Farq: 90 – 60 = 30 mlrd so‘m ortiqcha quvvat.",
    "formula": "ΔI/I = σ·s; ΔYd = ΔI/s; ΔYs = σI",
    "note": "Tekshiruv: 6% da ΔI = 18, ΔYd = 18/0,2 = 90 = ΔYs, ya’ni talab quvvatlarga teng. 4% da quvvatlar 30 mlrd so‘mga ortiqcha: ishsizlik va bo‘sh quvvatlar paydo bo‘ladi. «Nomutanosiblik» yillik o‘sish farqi sifatida hisoblandi."
   },
   {
    "id": "mk14-p4",
    "title": "Xarrod modeli",
    "text": "Xarrod modeli: s = 0,24, vr = 3, n = 1,5%, λ = 2,5%. a) Gw va Gn ni toping. b) Iqtisodiyot qanday muammoga duch keladi? c) Barqaror o‘sish uchun jamg‘arish normasi qanday bo‘lishi kerak? d) Agar haqiqiy kapital koeffitsiyenti 3,2 bo‘lsa, haqiqiy o‘sish sur’ati qancha va tadbirkorlar qanday reaksiya qiladi?",
    "fields": [
     {
      "label": "Kafolatlangan o‘sish sur’ati Gw",
      "value": 8,
      "unit": "%"
     },
     {
      "label": "Tabiiy o‘sish sur’ati Gn",
      "value": 4,
      "unit": "%"
     },
     {
      "label": "Barqaror o‘sish uchun zarur jamg‘arish normasi",
      "value": 12,
      "unit": "%"
     },
     {
      "label": "Haqiqiy o‘sish sur’ati G (C = 3,2)",
      "value": 7.5,
      "unit": "%"
     }
    ],
    "solution": "a) Gw = s/vr = 0,24/3 = 0,08 = 8%; Gn = n + λ = 1,5 + 2,5 = 4%. b) Gw > Gn: jamg‘arma juda ko‘p, iqtisodiyot 4% dan tez o‘sa olmaydi, surunkali ortiqcha quvvat va ishsizlik (sekulyar stagnatsiya). c) Gw = Gn uchun s = vr·Gn = 3·0,04 = 0,12 = 12%. d) G = s/C = 0,24/3,2 = 0,075 = 7,5%. G < Gw (7,5 < 8) va C > vr (3,2 > 3): ortiqcha quvvat, tadbirkorlar investitsiyalarni qisqartiradi, talab va G yanada pasayadi.",
    "formula": "Gw = s/vr; Gn = n + λ; G = s/C; barqarorlik: s/v = n + λ",
    "note": "Muqobil yechim: s = 0,24 da vr = s/Gn = 0,24/0,04 = 6 bo‘lishi kerak (kapital sig‘imini 6 ga oshirish). Kafolatlangan yo‘l beqaror («pichoq tig‘i»): G < Gw bo‘lgani uchun og‘ish kuchayadi."
   },
   {
    "id": "mk14-p5",
    "title": "2035-yilgacha jon boshiga YaIM maqsadi",
    "text": "Mamlakat 2035-yilgacha aholi jon boshiga YaIMni (XQP bo‘yicha) 11 ming dollardan 20 ming dollarga oshirmoqchi (10 yil). a) Aholi jon boshiga YaIM yiliga qanday sur’atda o‘sishi kerak? b) Aholi yiliga 1,8% o‘ssa, real YaIM o‘sishi qancha bo‘lishi kerak? c) ICOR = 4 bo‘lsa, investitsiyalar YaIMning necha foizini tashkil etishi kerak?",
    "fields": [
     {
      "label": "Jon boshiga YaIM talab etiladigan yillik o‘sishi",
      "value": 6.16,
      "unit": "%"
     },
     {
      "label": "Real YaIM talab etiladigan yillik o‘sishi",
      "value": 8.07,
      "unit": "%"
     },
     {
      "label": "Investitsiyalar ulushi (ICOR = 4)",
      "value": 32.3,
      "unit": "% YaIM"
     }
    ],
    "solution": "a) (20/11)^(1/10) – 1 = 1,818^0,1 – 1 = 0,0616 = 6,16%. b) 1 + gY = (1 + 0,0616)(1 + 0,018) = 1,0807, gY = 8,07% (taxminan 6,16 + 1,8 = 7,96%). c) Domar bo‘yicha o‘sish g = (I/Y)/ICOR, bundan I/Y = ICOR·g = 4·0,0807 = 0,323 = 32,3%.",
    "formula": "g = (20/11)^(1/T) – 1; 1 + gY = (1 + gy)(1 + gN); I/Y = ICOR × gY",
    "note": "Taqribiy formula (gy + gN = 7,96%) bilan I/Y = 31,8% chiqadi; aniq hisobda 32,3%. Bu 14.5-bandda keltirilgan O‘zbekiston investitsiya ulushiga (~32%) yaqin."
   }
  ],
  "open": [
   "Ekstensiv va intensiv iqtisodiy o‘sish o‘rtasidagi farqni tushuntiring. Ekstensiv o‘sishning resurs, texnologik va ekologik cheklovlarini misollar (Sobiq Ittifoq, Orol dengizi) bilan izohlang. O‘zbekistonda hozirgi o‘sish ko‘proq ekstensivmi yoki intensivmi, ICOR va kapital hissasi nuqtai nazaridan dalillar keltiring.",
   "Haqiqiy, kafolatlangan va tabiiy o‘sish sur’atlarini taqqoslang. «Pichoq tig‘i» muammosining mohiyatini tushuntiring; Gw > Gn va Gw < Gn holatlarida nima yuz beradi?",
   "Neokeynscha o‘sish modellarining (Xarrod-Domar) o‘ziga xos xususiyatlari, ahamiyati va kamchiliklarini sanab bering. Nima uchun Solou neoklassik modelni yaratdi?"
  ],
  "refs": [
   "Ekstensiv o‘sish ko‘proq resurs jalb qilish (yangi yerlar, ishchilar, zavodlar) hisobiga, samaradorlik o‘zgarmagan holda; cheklovlari: resurslar tugashi va kamayib boruvchi unumdorlik, texnologik qoloqlik, ekologik zarar (Orol fojiasi). Sobiq Ittifoq 1950–60-yillarda tez, ammo ekstensiv o‘sdi va 1970–80-yillarda to‘xtadi. Intensiv o‘sish samaradorlik va texnologiya hisobiga bo‘ladi. O‘zbekiston: investitsiyalar YaIMning ~uchdan biri, ICOR ≈ 4,2 va o‘sishning katta qismi kapital jamg‘arishga tayanadi, ya’ni hali ekstensiv xususiyat ustun; UOU o‘sishini tezlashtirish zarur.",
   "Haqiqiy G = s/C amalda kuzatiladi; kafolatlangan Gw = s/vr tadbirkorlarni qoniqtiradi; tabiiy Gn = n + λ to‘liq bandlikdagi maksimal sur’at. «Pichoq tig‘i»: G va Gw dan chetlanish o‘z-o‘zidan tuzalmaydi, kuchayadi. G > Gw bo‘lsa, quvvat yetishmaydi, investitsiyalar oshadi va inflyatsion yuksalish; G < Gw bo‘lsa, ortiqcha quvvat, investitsiyalar qisqaradi va depressiya. Gw > Gn bo‘lsa, surunkali ortiqcha quvvat va ishsizlik (sekulyar stagnatsiya); Gw < Gn bo‘lsa, tarkibiy ishsizlik. Barqarorlik uchun G = Gw = Gn kerak, ammo buning avtomatik mexanizmi yo‘q.",
   "Xususiyatlari: qat’iy texnologik koeffitsiyentlar (Leontyev tipi), investitsiyalarning talab va taklif roli, jamg‘arma va investitsiya turli subyektlarda, muvozanat beqaror, davlat aralashuvi zarur. Ahamiyati: o‘sishning dinamik tahlili, investitsiyalarning ikki tomonlama roli, jamg‘arish normasi va kapital samaradorligi, rejalashtirish vositasi. Kamchiliklari: kapital va mehnat almashtirilmasligi, beqarorlik tarixiy tajribaga mos emas, texnik taraqqiyot ekzogen, narx va foiz stavkasi roli e’tiborga olinmagan. Shu tanqid Solouni neoklassik modelga undadi."
  ]
 },
 "15": {
  "goal": "Solou modelida barqaror holat, jamg‘arish normasi, oltin qoida va texnik taraqqiyotning iqtisodiy o‘sishga ta’sirini hisoblash hamda o‘sish manbalarini tahlil qilish ko‘nikmalarini shakllantirish.",
  "concepts": [
   "Kobb-Duglas ishlab chiqarish funksiyasi va bir ishchiga ishlab chiqarish",
   "Solou modelining asosiy tenglamasi va barqaror holat",
   "Jamg‘arish normasi va oltin qoida",
   "Aholi o‘sishi va yaqinlashish (konvergensiya)",
   "Texnik taraqqiyot va mehnat samaradorligi",
   "O‘sishni hisoblash (UOU)"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 15-bob",
  "tasks": [
   {
    "id": "mk15-p1",
    "title": "Solou modeli: barqaror holat va oltin qoida",
    "text": "Ishlab chiqarish funksiyasi Y = K^0,5·L^0,5. s = 0,2, δ = 0,05, n = 0,02. a) Bir ishchiga ishlab chiqarish funksiyasini yozing. b) Barqaror holatdagi k*, y*, c* ni toping. c) Oltin qoida darajasidagi k va s ni toping. d) Iqtisodiyot oltin qoidadan yuqori yoki pastmi?",
    "fields": [
     {
      "label": "Barqaror kapital k*",
      "value": 8.16,
      "unit": "birlik"
     },
     {
      "label": "Barqaror daromad y*",
      "value": 2.86,
      "unit": "birlik"
     },
     {
      "label": "Barqaror iste’mol c*",
      "value": 2.29,
      "unit": "birlik"
     },
     {
      "label": "Oltin qoida kapitali k_oltin",
      "value": 51.02,
      "unit": "birlik"
     }
    ],
    "solution": "a) y = k^0,5. b) s·k^0,5 = (δ+n)k → k^0,5 = 0,2/0,07 = 2,857; k* = 8,16; y* = 2,86; c* = (1−s)y* = 0,8·2,857 = 2,29. c) MPK = 0,5·k^(−0,5) = δ+n = 0,07 → k^0,5 = 7,143, k_oltin = 51,02; oltin qoida jamg‘arish normasi s = α = 0,5. d) k* = 8,16 < 51,02 (s = 0,2 < 0,5): iqtisodiyot oltin qoida darajasidan past, jamg‘arishni oshirish uzoq muddatda iste’molni oshiradi.",
    "formula": "sy = (δ+n)k; MPK = δ+n; s_oltin = α",
    "note": "Oltin qoida: s = α (Kobb-Duglasda kapital ulushi). Masalaning d) bandi sifatli javob: «past»."
   },
   {
    "id": "mk15-p2",
    "title": "Jamg‘arish normasining oshishi",
    "text": "Y = K^(1/3)·L^(2/3), s = 0,24, δ = 0,06, n = 0. a) k* va y* ni toping. b) s 0,30 ga oshsa, yangi barqaror holatni toping. Daromad necha foizga oshadi? c) Oltin qoida jamg‘arish normasi qancha?",
    "fields": [
     {
      "label": "Dastlabki k*",
      "value": 8,
      "unit": "birlik"
     },
     {
      "label": "Dastlabki y*",
      "value": 2,
      "unit": "birlik"
     },
     {
      "label": "Yangi y* (s = 0,30)",
      "value": 2.236,
      "unit": "birlik"
     },
     {
      "label": "Daromadning o‘sishi",
      "value": 11.8,
      "unit": "%"
     }
    ],
    "solution": "y = k^(1/3). a) s·k^(1/3) = δk → k^(2/3) = s/δ = 4, k* = 4^1,5 = 8, y* = 8^(1/3) = 2. b) k^(2/3) = 0,30/0,06 = 5; k* = 5^1,5 = 11,18; y* = 5^0,5 = 2,236. Daromad o‘sishi 2,236/2 − 1 = 11,8%. c) s_oltin = α = 1/3 ≈ 0,333.",
    "formula": "k* = (s/(δ+n))^(1/(1−α)); y* = (k*)^α",
    "note": "Jamg‘arish normasi 25% oshganda (0,24 → 0,30) daromad barqaror holatda faqat 11,8% ga oshadi: kapitalning kamayib boruvchi unumdorligi."
   },
   {
    "id": "mk15-p3",
    "title": "O‘tish dinamikasi (jadval)",
    "text": "1-masala sharoitida (y = k^0,5, s = 0,2, δ+n = 0,07) boshlang‘ich kapital k0 = 4. Birinchi 5 yil uchun k, y, i, c va Δk ni hisoblang (jadval). O‘sish sur’ati qanday o‘zgaradi? Quyida 5-yil ko‘rsatkichlarini kiriting.",
    "fields": [
     {
      "label": "5-yilda kapital k",
      "value": 4.47,
      "unit": "birlik"
     },
     {
      "label": "5-yilda Δk",
      "value": 0.11,
      "unit": "birlik"
     },
     {
      "label": "1-yilda kapitalning o‘sish sur’ati",
      "value": 3.0,
      "unit": "%"
     },
     {
      "label": "5-yilda kapitalning o‘sish sur’ati",
      "value": 2.46,
      "unit": "%"
     }
    ],
    "solution": "Δk = s·√k − 0,07k. 1-yil: k = 4, y = 2, i = 0,4, c = 1,6, Δk = 0,12 (3,0%). 2-yil: k = 4,12, y = 2,030, Δk = 0,118. 3-yil: k = 4,238, y = 2,059, Δk = 0,115. 4-yil: k = 4,353, y = 2,086, Δk = 0,113. 5-yil: k = 4,465, y = 2,113, i = 0,423, c = 1,690, Δk = 0,110 (2,46%).",
    "formula": "Δk = s·f(k) − (δ+n)k",
    "note": "k0 = 4 < k* = 8,16, shuning uchun k o‘sadi, lekin o‘sish sur’ati sekinlashadi (3,0% → 2,5%) va k* ga yaqinlashgan sari nolga intiladi."
   },
   {
    "id": "mk15-p4",
    "title": "Aholi o‘sishi va farovonlik",
    "text": "Ikki mamlakat bir xil texnologiyaga (y = k^0,4), bir xil s = 0,25 va δ = 0,05 ga ega. A mamlakatda n = 0,01, B mamlakatda n = 0,03. Har birining barqaror holatdagi k* va y* ni toping. B mamlakat aholisi necha foiz kambag‘alroq?",
    "fields": [
     {
      "label": "A mamlakat k*",
      "value": 10.79,
      "unit": "birlik"
     },
     {
      "label": "B mamlakat k*",
      "value": 6.68,
      "unit": "birlik"
     },
     {
      "label": "A mamlakat y*",
      "value": 2.59,
      "unit": "birlik"
     },
     {
      "label": "B mamlakat aholisi kambag‘alligi",
      "value": 17.5,
      "unit": "%"
     }
    ],
    "solution": "k^0,6 = s/(δ+n). A: 0,25/0,06 = 4,167 → k* = 4,167^(1/0,6) = 10,79; y* = 10,79^0,4 = 2,59. B: 0,25/0,08 = 3,125 → k* = 6,68; y* = 2,14. y_B/y_A = 0,8255, ya’ni B aholisi 17,5% kambag‘alroq.",
    "formula": "k* = (s/(δ+n))^(1/(1−α)); y* = (k*)^α",
    "note": "Aholi o‘sishi yuqori bo‘lgan mamlakatda bir ishchiga kapital va daromad past (aniqrog‘i y_B = 2,14)."
   },
   {
    "id": "mk15-p5",
    "title": "Texnik taraqqiyotli Solou modeli",
    "text": "Texnik taraqqiyot bilan Solou modeli: y = k^0,3 (bir samarali ishchiga), s = 0,25, δ = 0,04, n = 0,015, g = 0,02. a) Barqaror holatdagi k* va y* ni toping. b) Bir ishchiga mahsulot, umumiy mahsulot va real ish haqi qanday sur’atlarda o‘sadi? c) Oltin qoida bo‘yicha MPK qancha bo‘lishi kerak?",
    "fields": [
     {
      "label": "Barqaror k*",
      "value": 5.58,
      "unit": "birlik"
     },
     {
      "label": "Barqaror y*",
      "value": 1.68,
      "unit": "birlik"
     },
     {
      "label": "Umumiy mahsulot o‘sish sur’ati",
      "value": 3.5,
      "unit": "%"
     },
     {
      "label": "Oltin qoida MPK",
      "value": 7.5,
      "unit": "%"
     }
    ],
    "solution": "a) s·k^0,3 = (δ+n+g)k → k^0,7 = 0,25/0,075 = 3,333; k* = 3,333^(1/0,7) = 5,58; y* = 5,58^0,3 = 1,68 (samarali ishchiga). b) Bir ishchiga mahsulot va real ish haqi — g = 2% ga; umumiy mahsulot — n+g = 3,5% ga o‘sadi. c) MPK = δ+n+g = 0,075 = 7,5%.",
    "formula": "sy = (δ+n+g)k; MPK_oltin = δ+n+g",
    "note": "Samarali ishchi birligidagi k va y barqaror holatda o‘zgarmaydi; doimiy o‘sishni faqat texnik taraqqiyot (g) ta’minlaydi."
   },
   {
    "id": "mk15-p6",
    "title": "O‘sishni hisoblash",
    "text": "Y = A·K^0,4·L^0,6. 10 yil davomida YaIM yiliga o‘rtacha 6,5%, kapital 8%, mehnat 2% o‘sgan. a) UOU o‘sishini toping. b) Keyingi 10 yilda kapital o‘sishi 6% ga, mehnat 1% ga sekinlashsa va UOU o‘zgarmasa, YaIM o‘sishi qancha bo‘ladi? c) 6,5% o‘sishni saqlash uchun UOU qanchaga tezlashishi kerak?",
    "fields": [
     {
      "label": "UOU o‘sishi",
      "value": 2.1,
      "unit": "%"
     },
     {
      "label": "Yangi YaIM o‘sishi",
      "value": 5.1,
      "unit": "%"
     },
     {
      "label": "6,5% uchun zarur UOU o‘sishi",
      "value": 3.5,
      "unit": "%"
     }
    ],
    "solution": "a) g_A = g_Y − 0,4·g_K − 0,6·g_L = 6,5 − 0,4·8 − 0,6·2 = 6,5 − 3,2 − 1,2 = 2,1%. b) g_Y = 0,4·6 + 0,6·1 + 2,1 = 2,4 + 0,6 + 2,1 = 5,1%. c) g_A = 6,5 − 2,4 − 0,6 = 3,5%, ya’ni UOU o‘sishi 1,4 foiz bandga tezlashishi kerak.",
    "formula": "g_Y = g_A + α·g_K + (1−α)·g_L",
    "note": "UOU (Solou qoldig‘i) — omillar hissasi ajratilgandan keyingi qoldiq."
   }
  ],
  "open": [
   "Solou modelida jamg‘arish normasining oshishi barqaror holatga va o‘sish sur’atiga qanday ta’sir qiladi? Nima uchun jamg‘arish normasi o‘sishi uzoq muddatda o‘sish sur’atini emas, balki daromad darajasini o‘zgartiradi? Yaponiya va Germaniyaning urushdan keyingi tez o‘sishini tushuntiring.",
   "«Oltin qoida» nima? Uning shartini keltirib chiqaring. Dinamik samarasizlik nima va jamg‘arish normasini oltin qoida darajasiga oshirish o‘tish davrida iste’molga qanday ta’sir qiladi?",
   "Endogen o‘sish nazariyalarining asosiy g‘oyalarini Solou modeli bilan solishtiring. Xiks bo‘yicha texnik taraqqiyot turlarini tavsiflang va O‘zbekistonda barqaror o‘sishni ta’minlash omillarini sanang."
  ],
  "refs": [
   "Jamg‘arish normasi s oshsa, sy egri chizig‘i yuqoriga siljiydi va yangi barqaror holatda k* va y* yuqori bo‘ladi. O‘tish davrida o‘sish sur’ati vaqtincha oshadi, lekin barqaror holatga yetgach, bir ishchiga daromad o‘sishi yana nolga (texnik taraqqiyot bo‘lsa g ga) tushadi. Demak, jamg‘arish daromad darajasiga ta’sir qiladi, uzoq muddatli o‘sish sur’atiga emas. Yaponiya va Germaniyada urush kapitalni vayron qildi, ya’ni k barqaror holatdan past bo‘ldi; yuqori jamg‘arish va yaqinlashish tufayli o‘sish tez bo‘ldi.",
   "Oltin qoida — barqaror holatda bir ishchiga iste’molni maksimallashtiruvchi jamg‘arish normasi (kapital darajasi). Shart: c* = f(k) − (δ+n)k ni k bo‘yicha maksimallashtirish → MPK = δ+n; Kobb-Duglasda s = α. Agar k oltin qoida darajasidan yuqori bo‘lsa, iqtisodiyot dinamik samarasiz: jamg‘arishni kamaytirish o‘tish davrida ham, barqaror holatda ham iste’molni oshiradi. Jamg‘arishni oshirish (k oltin qoidadan past bo‘lsa) avval iste’molni kamaytiradi, keyin esa uni dastlabkidan yuqori darajaga olib chiqadi.",
   "Solou modelida texnik taraqqiyot ekzogen (g berilgan); endogen o‘sish nazariyalarida u iqtisodiy qarorlar natijasi: inson kapitali, ilmiy-tadqiqot xarajatlari, bilim tarqalishi va kapitalning kamayib boruvchi unumdorligi yo‘qligi. Xiks bo‘yicha texnik taraqqiyot neytral, mehnat tejovchi va kapital tejovchi turlarga bo‘linadi. O‘zbekistonda barqaror o‘sish omillari sifatida investitsiyalar, inson kapitali, texnologiyalar, institutsional islohotlar va mehnat unumdorligini oshirish keltirilishi mumkin."
  ]
 },
 "16": {
  "goal": "Xalqaro savdo nazariyalari (mutlaq va nisbiy ustunlik, muqobil qiymat, savdo shartlari, jahon narxi, Balassa indeksi) bo‘yicha hisob-kitob ko‘nikmalarini shakllantirish va savdodan yutuq manbalarini tahlil qilish.",
  "concepts": [
   "Mutlaq va nisbiy (qiyosiy) ustunlik",
   "Muqobil qiymat",
   "Savdo shartlari chegarasi",
   "To‘liq ixtisoslashuv va savdodan yutuq",
   "Eksport taklifi, import talabi va jahon narxi",
   "Balassa indeksi (oshkor qiyosiy ustunlik)"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 16-bob",
  "tasks": [
   {
    "id": "mk16-p1",
    "title": "Mutlaq va nisbiy ustunlik",
    "text": "1 birlik tovar ishlab chiqarish uchun mehnat sarfi (kishi-soat): A mamlakatda – non 4, kiyim 8; B mamlakatda – non 6, kiyim 6. a) Mutlaq va nisbiy ustunliklarni aniqlang. b) Har bir mamlakatda muqobil qiymatlarni hisoblang. c) Savdo shartlari qanday chegarada bo‘lishi kerak?",
    "fields": [
     {
      "label": "A: 1 non muqobil qiymati",
      "value": 0.5,
      "unit": "kiyim"
     },
     {
      "label": "A: 1 kiyim muqobil qiymati",
      "value": 2,
      "unit": "non"
     },
     {
      "label": "B: 1 non muqobil qiymati",
      "value": 1,
      "unit": "kiyim"
     },
     {
      "label": "B: 1 kiyim muqobil qiymati",
      "value": 1,
      "unit": "non"
     }
    ],
    "solution": "a) Mutlaq ustunlik: nonda A (4 < 6), kiyimda B (6 < 8). b) A: 1 non = 4/8 = 0,5 kiyim, 1 kiyim = 2 non. B: 1 non = 6/6 = 1 kiyim, 1 kiyim = 1 non. Nonda A muqobil qiymati past (0,5 < 1) – A nonda, B kiyimda nisbiy ustunlikka ega. c) 1 non savdo narxi 0,5 va 1 kiyim oralig‘ida (0,5 < P < 1), ya’ni 1 kiyim 1 va 2 non oralig‘ida.",
    "formula": "Muqobil qiymat = a_i / a_j; 0,5 < P_non < 1 (kiyimda)",
    "note": "Har ikki mamlakat bir tovarda mutlaq ustunlikka ega, shuning uchun nisbiy ustunlikka ko‘ra ixtisoslashadi."
   },
   {
    "id": "mk16-p2",
    "title": "Meva va maishiy texnika",
    "text": "O‘zbekiston bir yilda 100 ming t meva yoki 50 ming dona maishiy texnika ishlab chiqarishi mumkin; Turkiya – 120 ming t meva yoki 120 ming dona texnika. a) Muqobil qiymatlarni hisoblang va nisbiy ustunlikni aniqlang. b) ICHE larni chizing. c) 1 dona texnika = 1,5 t meva nisbatida savdo qilinsa, ikkala mamlakat yutishini ko‘rsating.",
    "fields": [
     {
      "label": "O‘zbekiston: 1 dona texnika muqobil qiymati",
      "value": 2,
      "unit": "t meva"
     },
     {
      "label": "Turkiya: 1 dona texnika muqobil qiymati",
      "value": 1,
      "unit": "t meva"
     },
     {
      "label": "O‘zbekiston yutug‘i (1 dona texnikada)",
      "value": 0.5,
      "unit": "t meva"
     },
     {
      "label": "Turkiya yutug‘i (1 dona texnikada)",
      "value": 0.5,
      "unit": "t meva"
     }
    ],
    "solution": "a) O‘zbekiston: 1 dona texnika = 100/50 = 2 t meva (1 t meva = 0,5 dona). Turkiya: 1 dona texnika = 120/120 = 1 t meva. O‘zbekiston mevada (muqobil qiymat 0,5 < 1), Turkiya texnikada nisbiy ustunlikka ega. b) ICHE — to‘g‘ri chiziq: O‘zbekiston (0;100)–(50;0) va Turkiya (0;120)–(120;0). c) Savdo narxi 1,5 t meva ∈ (1; 2): O‘zbekiston texnikani 2 t emas, 1,5 t mevaga oladi (0,5 t tejaydi), Turkiya 1 dona texnika uchun 1 t emas, 1,5 t meva oladi (0,5 t yutadi).",
    "formula": "Muqobil qiymat = ishlab chiqarish imkoniyati nisbati; 1 < P < 2",
    "note": "Savdo narxi ikki mamlakatning muqobil qiymatlari oralig‘ida bo‘lsa, ikkalasi ham yutadi (grafikni qo‘lda chizing)."
   },
   {
    "id": "mk16-p3",
    "title": "Rikardo misoli: savdodan yutuq",
    "text": "Rikardo misolida (Angliya: mato 100, vino 120; Portugaliya: mato 90, vino 80 kishi-yil) har bir mamlakatda 7200 kishi-yil mehnat bor. a) Avtarkiyada har bir mamlakat mehnatni teng taqsimlasa, ishlab chiqarish qancha? b) To‘liq ixtisoslashuvda jami ishlab chiqarish qancha bo‘ladi? c) Savdodan yutuqni hisoblang (1 mato = 1 vino nisbatida).",
    "fields": [
     {
      "label": "Avtarkiyada jami mato",
      "value": 76,
      "unit": "birlik"
     },
     {
      "label": "Avtarkiyada jami vino",
      "value": 75,
      "unit": "birlik"
     },
     {
      "label": "Ixtisoslashuvda jami mato",
      "value": 72,
      "unit": "birlik"
     },
     {
      "label": "Ixtisoslashuvda jami vino",
      "value": 90,
      "unit": "birlik"
     }
    ],
    "solution": "a) Angliya: 3600/100 = 36 mato, 3600/120 = 30 vino. Portugaliya: 3600/90 = 40 mato, 3600/80 = 45 vino. Jami: 76 mato, 75 vino. b) Muqobil qiymat: Angliyada 1 mato = 100/120 = 0,83 vino, Portugaliyada 90/80 = 1,125 vino – Angliya matoda, Portugaliya vinoda ixtisoslashadi: mato 7200/100 = 72, vino 7200/80 = 90. c) Mato 4 birlikka kam, vino 15 birlikka ko‘p: 1:1 nisbatda sof yutuq 15 − 4 = 11 birlik. Masalan, Angliya 36 mato sotib 36 vino oladi: 36 mato + 36 vino (avtarkiyada 36 + 30); Portugaliya 36 vino berib 36 mato oladi: 36 mato + 54 vino (avtarkiyada 40 + 45).",
    "formula": "Angliya: 7200/100 va Portugaliya: 7200/80; yutuq = Δvino − Δmato (1:1)",
    "note": "Portugaliya ikkala tovarda ham mutlaq ustunlikka ega, lekin savdo baribir ikkalasiga foydali. Yutuq miqdori savdo narxiga bog‘liq: 1:1 – bir tanlov."
   },
   {
    "id": "mk16-p4",
    "title": "Jahon narxi va savdo hajmi",
    "text": "A mamlakatda paxtaga ichki talab QD = 100 – 2P, taklif QS = 3P – 20. B mamlakatda talab QD = 150 – 3P, taklif QS = 2P – 10. a) Har bir mamlakatda avtarkiya narxlarini toping. b) Eksport taklifi va import talabi funksiyalarini tuzing. c) Muvozanatli jahon narxi va savdo hajmini toping.",
    "fields": [
     {
      "label": "A mamlakat avtarkiya narxi",
      "value": 24,
      "unit": "pul birligi"
     },
     {
      "label": "B mamlakat avtarkiya narxi",
      "value": 32,
      "unit": "pul birligi"
     },
     {
      "label": "Jahon narxi",
      "value": 28,
      "unit": "pul birligi"
     },
     {
      "label": "Savdo hajmi",
      "value": 20,
      "unit": "birlik"
     }
    ],
    "solution": "a) A: 100 − 2P = 3P − 20 → P = 24 (Q = 52). B: 150 − 3P = 2P − 10 → P = 32 (Q = 54). b) A (past narx) eksport qiladi: EX = QS − QD = 5P − 120 (P > 24). B import qiladi: IM = QD − QS = 160 − 5P (P < 32). c) 5P − 120 = 160 − 5P → P = 28; hajm = 5·28 − 120 = 20. Tekshiruv: A: QS = 64, QD = 44 (eksport 20); B: QD = 66, QS = 46 (import 20).",
    "formula": "EX = QS − QD; IM = QD − QS; EX = IM",
    "note": "A mamlakat paxtani eksport qiladi (avtarkiya narxi past), B import qiladi."
   },
   {
    "id": "mk16-p5",
    "title": "Balassa indeksi",
    "text": "O‘zbekistonda ma’lum tovarning mamlakat eksportidagi ulushi 4%, shu tovarning jahon eksportidagi ulushi 0,5%. Boshqa tovarning ulushlari mos ravishda 1% va 2%. Har bir tovar uchun Balassa indeksini (RCA) hisoblang va talqin qiling.",
    "fields": [
     {
      "label": "1-tovar RCA",
      "value": 8,
      "unit": "marta"
     },
     {
      "label": "2-tovar RCA",
      "value": 0.5,
      "unit": "marta"
     }
    ],
    "solution": "RCA = (tovarning mamlakat eksportidagi ulushi) / (tovarning jahon eksportidagi ulushi). 1-tovar: 4/0,5 = 8. 2-tovar: 1/2 = 0,5. RCA > 1 – oshkor qiyosiy ustunlik (1-tovar, kuchli), RCA < 1 – ustunlik yo‘q (2-tovar).",
    "formula": "RCA = (x_ij/X_i) / (x_wj/X_w)",
    "note": "RCA = 1 chegaraviy qiymat."
   }
  ],
  "open": [
   "A. Smitning mutlaq ustunlik nazariyasini misol bilan tushuntiring va uning cheklovini ko‘rsating. Nima uchun Rikardoning nisbiy ustunlik nazariyasi bir mamlakat ikkala tovarda ham mutlaq ustun bo‘lganda ham savdo foydali ekanini isbotlaydi?",
   "Xeksher-Olin teoremasini ta’riflang. Ortiqcha va taqchil omillar nima? «Leontyev paradoksi» nima va uni qanday izohlash mumkin? Stolper-Samuelson teoremasining mohiyati nimada?",
   "O‘zbekiston eksport va import tarkibini savdo nazariyalari (nisbiy ustunlik, Xeksher-Olin, Porter rombi, yangi savdo nazariyasi) nuqtai nazaridan tahlil qiling. Qaysi nazariya qaysi tovarlar savdosini yaxshiroq tushuntiradi?"
  ],
  "refs": [
   "Smit: har bir mamlakat o‘zi eng kam xarajat bilan (mutlaq ustunlik) ishlab chiqaradigan tovarga ixtisoslashib, almashsa, ikkalasi yutadi (masalan, A nonda, B kiyimda ustun). Cheklov: bir mamlakat hech bir tovarda mutlaq ustunlikka ega bo‘lmasa, nazariya savdoni tushuntirolmaydi. Rikardo ustunlikni muqobil qiymat bo‘yicha o‘lchaydi: mamlakat muqobil qiymati past tovarga ixtisoslashadi, savdo narxi ikki mamlakat muqobil qiymatlari oralig‘ida bo‘lsa, ikkalasi ham yutadi. Javobda Angliya–Portugaliya (mato–vino) misoli keltirilsin.",
   "Xeksher-Olin: mamlakat o‘zida ortiqcha bo‘lgan omilni intensiv ishlatadigan tovarni eksport qiladi, taqchil omilni talab qiladigan tovarni import qiladi. Omillar narxlarining tenglashuvi teoremasiga ko‘ra erkin savdo omil narxlarini tenglashtirishga intiladi. Stolper-Samuelson: tovar narxi oshsa, uni intensiv ishlatadigan omilning real daromadi oshadi, ikkinchi omilniki kamayadi. Leontyev AQSh eksporti kapital-intensiv bo‘lishi kutilgan bo‘lsa-da, uning importi ko‘proq kapital-intensiv ekanini topdi; izohlar: mehnat sifati (inson kapitali), tabiiy resurslar, tariflar, talab farqlari.",
   "Tahlil mezonlari: eksport tarkibida mehnat va tabiiy resurs intensiv tovarlar (Xeksher-Olin, nisbiy ustunlik), tarmoq ichidagi savdo va miqyos samarasi (yangi savdo nazariyasi), klasterlar (Porter rombi: omil sharoitlari, talab, qo‘shni tarmoqlar, strategiya va raqobat). Talaba Balassa indeksidan foydalanib, ustunlik tovarlarini aniqlashi, import tarkibini texnologik murakkablik bo‘yicha baholashi va xulosada eksportni diversifikatsiya qilish yo‘llarini ko‘rsatishi kerak. Faqat darslik va tasdiqlangan ma’lumotlarga tayansin."
  ]
 },
 "17": {
  "goal": "Import tarifi, kvota, subsidiya va eksport bojining farovonlikka ta’sirini hisoblash; samarali himoya darajasini aniqlash va savdo siyosati vositalarini qiyosiy baholash.",
  "concepts": [
   "Import tarifi va sof yo‘qotishlar (b + d)",
   "Import kvotasi va kvota rentasi",
   "Ishlab chiqaruvchilarga subsidiya va maqsadli siyosat tamoyili",
   "Eksport boji",
   "Samarali himoya darajasi",
   "Optimal tarif va yosh tarmoqlarni himoya qilish"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 17-bob",
  "tasks": [
   {
    "id": "mk17-p1",
    "title": "Televizorlarga import tarifi",
    "text": "Kichik mamlakatda televizorlarga talab QD = 400 – 2P, taklif QS = 2P – 80 (ming dona, P – dollar). Jahon narxi 100 dollar. a) Erkin savdoda ichki ishlab chiqarish, iste’mol va importni toping. b) 20 dollar spetsifik tarif joriy qilinsa, yangi ko‘rsatkichlarni toping. c) Iste’molchilar yo‘qotishi, ishlab chiqaruvchilar yutug‘i, davlat daromadi va sof yo‘qotishni hisoblang.",
    "fields": [
     {
      "label": "Erkin savdoda import",
      "value": 80,
      "unit": "ming dona"
     },
     {
      "label": "Tarifdan keyin ichki ishlab chiqarish",
      "value": 160,
      "unit": "ming dona"
     },
     {
      "label": "Iste’molchilar yo‘qotishi",
      "value": 3600,
      "unit": "ming dollar"
     },
     {
      "label": "Sof yo‘qotish (b + d)",
      "value": 800,
      "unit": "ming dollar"
     }
    ],
    "solution": "a) P = 100: QS = 2·100 – 80 = 120, QD = 400 – 200 = 200, import = 200 – 120 = 80. b) Ichki narx 120: QS = 160, QD = 160, import = 0 (avtarkiya narxi 400 – 2P = 2P – 80 ⇒ P = 120, ya’ni tarif taqiqlovchi). c) Iste’molchilar yo‘qotishi = (200 + 160)/2 · 20 = 3600; ishlab chiqaruvchilar yutug‘i = (120 + 160)/2 · 20 = 2800; davlat daromadi = 20 · 0 = 0; sof yo‘qotish = 3600 – 2800 – 0 = 800 (b = ½·40·20 = 400, d = ½·40·20 = 400).",
    "formula": "ΔCS = –(a+b+c+d); ΔPS = +a; daromad = t·(QD – QS); sof yo‘qotish = b + d",
    "note": "Shartdagi 20 dollarlik tarif avtarkiya narxiga (120) aynan teng, shuning uchun import nolga tushadi va davlat daromadi 0. Birliklar: ming dona · dollar = ming dollar."
   },
   {
    "id": "mk17-p2",
    "title": "Import kvotasi va kvota rentasi",
    "text": "1-masala sharoitida tarif o‘rniga import kvotasi 80 ming dona qilib belgilandi. a) Ichki narxni toping. b) Kvota rentasini hisoblang. c) Litsenziyalar auksionda sotilganda va bepul taqsimlanganda farovonlik qanday taqsimlanadi? (Qo‘shimcha: kvota 40 ming dona bo‘lsa, ichki narx va renta qancha bo‘ladi?)",
    "fields": [
     {
      "label": "Ichki narx (kvota 80 ming dona)",
      "value": 100,
      "unit": "dollar"
     },
     {
      "label": "Kvota rentasi (kvota 80 ming dona)",
      "value": 0,
      "unit": "ming dollar"
     },
     {
      "label": "Ichki narx (kvota 40 ming dona)",
      "value": 110,
      "unit": "dollar"
     },
     {
      "label": "Kvota rentasi (kvota 40 ming dona)",
      "value": 400,
      "unit": "ming dollar"
     }
    ],
    "solution": "Kvota 80: QD – QS = 80 ⇒ (400 – 2P) – (2P – 80) = 80 ⇒ 480 – 4P = 80 ⇒ P = 100 – jahon narxiga teng, ya’ni kvota erkin savdodagi importga (80) teng va to‘sqinlik qilmaydi; renta = (100 – 100)·80 = 0. Kvota 40: 480 – 4P = 40 ⇒ P = 110; QS = 140, QD = 180; renta = (110 – 100)·40 = 400; iste’molchilar yo‘qotishi = (200 + 180)/2·10 = 1900, ishlab chiqaruvchilar yutug‘i = (120 + 140)/2·10 = 1300, sof yo‘qotish = 1900 – 1300 – 400 = 200 (renta olinsa).",
    "formula": "QD(P) – QS(P) = kvota; renta = (PK – Pw)·kvota",
    "note": "Darslikdagi shartda kvota (80) erkin savdodagi importga teng, shuning uchun u bog‘lamaydi (narx 100, renta 0). Mazmunli natija uchun 40 ming dona varianti qo‘shildi. Litsenziyalar auksionda sotilsa, renta davlatga tushadi (tarif kabi); bepul taqsimlansa – litsenziya egalariga; eksportyor mamlakatga berilsa (VER) – xorijga ketadi va sof yo‘qotish katta bo‘ladi."
   },
   {
    "id": "mk17-p3",
    "title": "Ishlab chiqaruvchilarga subsidiya",
    "text": "1-masala sharoitida hukumat ichki ishlab chiqarishni tarif bilan bir xil darajaga oshirish uchun ishlab chiqaruvchilarga subsidiya bermoqchi. a) Subsidiya miqdori qancha bo‘lishi kerak? b) Byudjet xarajatlarini hisoblang. c) Sof yo‘qotishni tarif bilan taqqoslang.",
    "fields": [
     {
      "label": "Subsidiya miqdori (birlikka)",
      "value": 20,
      "unit": "dollar"
     },
     {
      "label": "Byudjet xarajati",
      "value": 3200,
      "unit": "ming dollar"
     },
     {
      "label": "Subsidiya bo‘yicha sof yo‘qotish",
      "value": 400,
      "unit": "ming dollar"
     },
     {
      "label": "Tarif bo‘yicha sof yo‘qotish",
      "value": 800,
      "unit": "ming dollar"
     }
    ],
    "solution": "Maqsad: QS = 160 ⇒ 2P – 80 = 160 ⇒ P = 120, ya’ni ishlab chiqaruvchi 120 olishi kerak, jahon narxi 100 ⇒ s = 20. Byudjet xarajati = s·Q = 20·160 = 3200 (a + b). Ishlab chiqaruvchilar yutug‘i a = 2800. Sof yo‘qotish faqat b = ½·20·40 = 400 (iste’moldagi buzilish d yo‘q). Tarifda esa b + d = 800.",
    "formula": "s = P* – Pw; byudjet = s·Q2 = a + b; sof yo‘qotish = b",
    "note": "Iste’molchilar narx 100 da 200 ming dona iste’mol qilishda davom etadi. Subsidiya tarifga qaraganda ikki marta kam sof yo‘qotish beradi (maqsadli siyosat tamoyili), lekin byudjet mablag‘i talab qiladi."
   },
   {
    "id": "mk17-p4",
    "title": "Bug‘doy eksport boji",
    "text": "Mamlakat bug‘doy eksportchisi: talab QD = 100 – 5P, taklif QS = 10P – 20 (mln t). Jahon narxi 10. a) Erkin savdoda eksport hajmini toping. b) 2 birlik eksport boji joriy qilinsa, ichki narx, iste’mol, ishlab chiqarish va eksport qanday o‘zgaradi? c) Farovonlik o‘zgarishlarini hisoblang.",
    "fields": [
     {
      "label": "Erkin savdoda eksport",
      "value": 30,
      "unit": "mln t"
     },
     {
      "label": "Bojdan keyingi ichki narx",
      "value": 8,
      "unit": "birlik"
     },
     {
      "label": "Bojdan keyingi eksport",
      "value": 0,
      "unit": "mln t"
     },
     {
      "label": "Sof farovonlik o‘zgarishi",
      "value": -30,
      "unit": "mln birlik"
     }
    ],
    "solution": "a) P = 10: QD = 50, QS = 80, eksport = 30. b) Ichki narx = 10 – 2 = 8: QD = 60, QS = 60, eksport = 0 (avtarkiya narxi 100 – 5P = 10P – 20 ⇒ P = 8). c) Iste’molchilar yutug‘i = (50 + 60)/2·2 = 110; ishlab chiqaruvchilar yo‘qotishi = (80 + 60)/2·2 = 140; davlat daromadi = 2·0 = 0; sof o‘zgarish = 110 – 140 + 0 = –30.",
    "formula": "Pich = Pw – t; QD, QS ichki narxda; eksport = QS – QD",
    "note": "Boj (2) avtarkiya narxiga (8) aynan olib keladi, shuning uchun eksport to‘liq to‘xtaydi va davlat daromadi 0. Iste’molchilar yutadi, ishlab chiqaruvchilar yutqazadi."
   },
   {
    "id": "mk17-p5",
    "title": "Samarali himoya darajasi",
    "text": "Avtomobilga import boji 30%, butlovchi qismlarga 10%; butlovchi qismlar ulushi avtomobil qiymatining 70 foizi. a) Samarali himoya darajasini hisoblang. b) Agar butlovchilarga boj 0 ga tushirilsa, samarali himoya qanday o‘zgaradi? c) Natijani talqin qiling.",
    "fields": [
     {
      "label": "Samarali himoya darajasi",
      "value": 76.7,
      "unit": "%"
     },
     {
      "label": "Butlovchilarga boj 0 bo‘lganda samarali himoya",
      "value": 100,
      "unit": "%"
     }
    ],
    "solution": "g = (t – a·tb)/(1 – a) = (0,30 – 0,7·0,10)/(1 – 0,7) = 0,23/0,30 ≈ 0,767 = 76,7%. Butlovchilarga boj 0 bo‘lsa: g = 0,30/0,30 = 100%.",
    "formula": "g = (t – a·tb)/(1 – a)",
    "note": "Samarali himoya nominal tarifdan (30%) ancha yuqori, chunki tayyor mahsulotga boj yuqori, resurslarga past (tarif eskalatsiyasi). Butlovchilar bojini bekor qilish himoyani yanada oshiradi."
   }
  ],
  "open": [
   "«Optimal tarif» nima va u nima uchun faqat yirik mamlakatlar uchun mavjud? Bu siyosatning xatarlarini tushuntiring.",
   "Yosh tarmoqlarni himoya qilish dalilini tanqidiy baholang. Nima uchun hatto shu holda ham ishlab chiqaruvchilarga subsidiya tarifdan afzal? Janubiy Koreya va Argentina tajribasi bilan misol keltiring.",
   "O‘zbekistonning JSTga a’zo bo‘lish jarayoni, imkoniyatlari va xatarlarini tahlil qiling."
  ],
  "refs": [
   "Yirik mamlakat jahon narxiga ta’sir qila oladi: tarif import talabini qisqartirib, jahon narxini pasaytiradi va savdo shartlari yaxshilanadi. Shuning uchun tarifning dastlabki birliklari farovonlikni oshirishi mumkin va milliy farovonlikni maksimallashtiruvchi musbat «optimal tarif» mavjud. Kichik mamlakat jahon narxiga ta’sir qilmaydi, shuning uchun uning uchun optimal tarif nolga teng. Yutuq hamkorlar hisobiga olinadi, shuning uchun javob choralari va savdo urushi xavfi bor; yaxshi javobda 17.3-rasm izohlanadi.",
   "Dalil: yosh tarmoq o‘rganish va miqyos samaralari tufayli dastlab raqobatbardosh emas, vaqtinchalik himoya uni kuchaytiradi. Tanqid: kelajakdagi yutuqni oldindan bilish qiyin, himoya tarmoqni samarasiz qoldirishi, lobbizm va rent izlash xavfi bor. Hatto dalil to‘g‘ri bo‘lsa ham subsidiya afzal: u iste’moldagi buzilishni (d) keltirib chiqarmaydi, xarajat byudjetda ochiq ko‘rinadi (maqsadli siyosat tamoyili). Misollarda muvaffaqiyat va muvaffaqiyatsizlik omillarini (eksportga yo‘naltirilganlik, himoya muddati) solishtiring.",
   "Imkoniyatlar: bozorlarga kafolatlangan kirish, MFN va milliy rejim, tariflarni bog‘lash orqali barqarorlik, investitsiya muhiti va nizolarni hal qilish mexanizmi. Xatarlar: ayrim himoyalangan tarmoqlar (masalan, avtomobilsozlik, qishloq xo‘jaligi) uchun raqobat kuchayadi, davlat korxonalari va subsidiyalar bo‘yicha majburiyatlar. Qolgan vazifalar: antidemping, kompensatsiya va himoya choralari to‘g‘risidagi qonunlarni JST talablariga moslashtirish, valyuta tartibga solish. Javobda darslikdagi jarayon holati keltirilishi kerak."
  ]
 },
 "18": {
  "goal": "Kross-kurs, nominal va real kurs, xarid qobiliyati pariteti, foiz stavkalari pariteti va Mankyu modelida real valyuta kursini aniqlash bo‘yicha hisob-kitob ko‘nikmalarini shakllantirish.",
  "concepts": [
   "To‘g‘ri, bilvosita va kross-kotirovka",
   "Nominal va real valyuta kursi",
   "Xarid qobiliyati pariteti (mutlaq va nisbiy)",
   "Foiz stavkalari pariteti",
   "Qadrsizlanish va qimmatlashish",
   "Mankyu modelida muvozanatli real kurs"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 18-bob",
  "tasks": [
   {
    "id": "mk18-p1",
    "title": "Kross-kurslar va kotirovkalar",
    "text": "1 USD = 12 100 so‘m, 1 USD = 7,2 yuan, 1 USD = 470 tenge. a) Yuan va tengening so‘mdagi kross-kurslarini hisoblang. b) 1 so‘mning dollardagi bilvosita kotirovkasini toping. c) Agar tenge dollarga nisbatan 5% qadrsizlansa, tengening so‘mdagi kursi qanday o‘zgaradi?",
    "fields": [
     {
      "label": "1 yuanning so‘mdagi kursi",
      "value": 1680.56,
      "unit": "so‘m"
     },
     {
      "label": "1 tengening so‘mdagi kursi",
      "value": 25.74,
      "unit": "so‘m"
     },
     {
      "label": "1 so‘mning dollardagi kursi",
      "value": 8.26e-05,
      "unit": "USD"
     },
     {
      "label": "5% qadrsizlanishdan keyin 1 tenge",
      "value": 24.46,
      "unit": "so‘m"
     }
    ],
    "solution": "a) Yuan: 12 100/7,2 ≈ 1680,56 so‘m; tenge: 12 100/470 ≈ 25,74 so‘m. b) 1/12 100 ≈ 0,0000826 USD (1000 so‘m ≈ 0,0826 USD). c) Tengening dollardagi qiymati 5% kamayadi: 25,74·0,95 ≈ 24,46 so‘m, ya’ni tenge so‘mga nisbatan 5% arzonlashadi.",
    "formula": "kross-kurs = (so‘m/USD)/(valyuta/USD); bilvosita kurs = 1/to‘g‘ri kurs",
    "note": "«5% qadrsizlansa» tengening dollardagi qiymati 5% pasayadi deb talqin qilindi. Agar dollar kursi 470 dan 493,5 tengega o‘ssa (kursning 5% o‘sishi), tenge ≈ 24,52 so‘m bo‘ladi (≈4,8% pasayish)."
   },
   {
    "id": "mk18-p2",
    "title": "So‘mning nominal va real kursi",
    "text": "2024-yil oxirida 1 USD = 12 920 so‘m, 2025-yil oxirida 12 025 so‘m. a) So‘m necha foizga qimmatlashdi? b) O‘zbekistonda inflyatsiya 7,3%, AQSHda 2,7% bo‘lsa, so‘mning real kursi qanchaga o‘zgardi? c) Natijani eksportyorlar uchun talqin qiling.",
    "fields": [
     {
      "label": "So‘mning nominal qimmatlashishi",
      "value": 7.44,
      "unit": "%"
     },
     {
      "label": "Real kurs q ning o‘zgarishi",
      "value": -10.92,
      "unit": "%"
     },
     {
      "label": "So‘mning real qimmatlashishi",
      "value": 12.26,
      "unit": "%"
     }
    ],
    "solution": "a) So‘mning dollardagi qiymati 12 920/12 025 – 1 ≈ 7,44% ga oshdi (dollar kursi esa 6,93% ga pasaydi). b) q = e·P∗/P: q1/q0 = (12 025/12 920)·(1,027/1,073) ≈ 0,9308·0,9571 ≈ 0,8908, ya’ni q 10,92% ga pasaydi; so‘mning real qimmatlashishi 1/0,8908 – 1 ≈ 12,26%. c) O‘zbekiston tovarlari xorijiy tovarlarga nisbatan qimmatlashdi, eksportyorlarning narx raqobatbardoshligi pasaydi, import esa arzonlashdi.",
    "formula": "q = e·P∗/P; q1/q0 = (e1/e0)·[(1+π∗)/(1+π)]",
    "note": "Hisob to‘g‘ri kotirovkadagi real kurs formulasi (q = e·P∗/P) bo‘yicha qilindi. Taxminiy tekshiruv: %Δq ≈ %Δe + π∗ – π = –6,93 + 2,7 – 7,3 ≈ –11,5%."
   },
   {
    "id": "mk18-p3",
    "title": "XQP kursi va smartfon",
    "text": "Bir xil smartfon AQSHda 800 dollar, O‘zbekistonda 11,2 mln so‘m turadi; bozor kursi 1 USD = 12 000 so‘m. a) XQP kursini hisoblang. b) So‘m XQPga nisbatan qimmatmi yoki arzonmi? c) Arbitraj imkoniyati bormi? Qanday omillar arbitrajga to‘sqinlik qiladi?",
    "fields": [
     {
      "label": "XQP kursi",
      "value": 14000,
      "unit": "so‘m/USD"
     },
     {
      "label": "Smartfonning bozor kursidagi narxi O‘zbekistonda dollarda",
      "value": 933.33,
      "unit": "USD"
     },
     {
      "label": "Bozor kursining XQP kursidan og‘ishi",
      "value": -14.29,
      "unit": "%"
     }
    ],
    "solution": "a) e_XQP = 11 200 000/800 = 14 000 so‘m/USD. b) Bozor kursi 12 000 < 14 000: dollar XQPga nisbatan arzon, ya’ni so‘m qimmat (so‘m XQPdan 16,7% ga qimmat; bozor kursi XQP kursidan 14,29% past). O‘zbekistonda smartfon 11 200 000/12 000 ≈ 933,33 dollar, AQSHdagidan qimmat. c) Ha, smartfonni AQSHda sotib olib O‘zbekistonda sotish foydali, ammo transport xarajatlari, bojxona to‘siqlari, kafolat va brend farqlari, savdo qilinmaydigan xizmatlar arbitrajga to‘sqinlik qiladi.",
    "formula": "eXQP = P/P∗",
    "note": "Bu bir tovar bo‘yicha bir narx qonuni testi: XQP uzoq muddatda va taxminan bajariladi."
   },
   {
    "id": "mk18-p4",
    "title": "Nisbiy XQP va foiz pariteti",
    "text": "O‘zbekistonda yillik inflyatsiya 8%, AQSHda 3% kutilmoqda. a) Nisbiy XQP bo‘yicha so‘mning bir yildagi kutilgan qadrsizlanishini hisoblang. b) Joriy kurs 12 000 so‘m bo‘lsa, bir yildan keyingi XQP kursini toping. c) So‘mdagi depozit stavkasi 17%, dollardagi 5% bo‘lsa, foiz stavkalari pariteti bo‘yicha investor uchun qaysi depozit foydaliroq?",
    "fields": [
     {
      "label": "Kutilgan qadrsizlanish",
      "value": 4.85,
      "unit": "%"
     },
     {
      "label": "Bir yildan keyingi XQP kursi",
      "value": 12582.52,
      "unit": "so‘m/USD"
     },
     {
      "label": "Dollar depoziti so‘mdagi daromadliligi",
      "value": 10.1,
      "unit": "%"
     }
    ],
    "solution": "a) Aniq: 1,08/1,03 – 1 ≈ 4,85% (taxminan π – π∗ = 5%). b) 12 000·1,0485 ≈ 12 582,5 so‘m/USD. c) Dollar depozitining so‘mdagi daromadi = 1,05·1,0485 – 1 ≈ 10,1% (taxminan 5% + 4,85% ≈ 9,9%) – so‘m depozitidan (17%) past. Foiz paritetiga erishish uchun kutilgan qadrsizlanish 1,17/1,05 – 1 ≈ 11,4% bo‘lishi kerak. Shuning uchun so‘mdagi depozit foydaliroq, agar kutilgan qadrsizlanish 11,4% dan kam bo‘lsa.",
    "formula": "%Δe = π – π∗; (1+i) = (1+i∗)·(e1/e0)",
    "note": "Aniq formula ishlatildi; taxminiy formula natijalari 5% va 12 600 so‘m. Diqqat: bu yerda XQP prognozi bo‘yicha qadrsizlanish foiz farqidan (12 punkt) kam, shuning uchun foiz pariteti bajarilmayapti."
   },
   {
    "id": "mk18-p5",
    "title": "Mankyu modelida real kurs",
    "text": "Mankyu modelida: NX = 500 – 500ε, S = 1000, I = 900 – 50r∗, r∗ = 4. a) Muvozanatli real kursni toping. b) Hukumat xarajatlari 50 ga oshib, S 950 gacha kamaysa, yangi ε va NX ni toping. c) Jahon foiz stavkasi 6 gacha oshsa-chi?",
    "fields": [
     {
      "label": "Muvozanatli real kurs ε",
      "value": 0.4,
      "unit": ""
     },
     {
      "label": "Hukumat xarajatlari oshgandagi ε",
      "value": 0.5,
      "unit": ""
     },
     {
      "label": "Hukumat xarajatlari oshgandagi NX",
      "value": 250,
      "unit": ""
     },
     {
      "label": "r∗ = 6 bo‘lgandagi ε",
      "value": 0.2,
      "unit": ""
     }
    ],
    "solution": "a) I = 900 – 50·4 = 700; S – I = 300; NX = S – I ⇒ 500 – 500ε = 300 ⇒ ε = 0,4. b) S = 950: S – I = 250 ⇒ 500 – 500ε = 250 ⇒ ε = 0,5, NX = 250 (kamayadi, milliy valyuta qimmatlashadi). c) r∗ = 6: I = 900 – 300 = 600; S – I = 1000 – 600 = 400 ⇒ 500 – 500ε = 400 ⇒ ε = 0,2, NX = 400 (valyuta arzonlashadi).",
    "formula": "NX(ε) = S – I(r∗)",
    "note": "Fiskal ekspansiya ε ni oshiradi (milliy valyuta qimmatlashadi), sof eksport kamayadi; jahon foiz stavkasining oshishi investitsiyani kamaytirib, ε ni pasaytiradi va NX ni oshiradi."
   }
  ],
  "open": [
   "Egiluvchan va qayd etilgan valyuta kursi rejimlarining afzalliklari va kamchiliklari nimada? Qayd etilgan kurs sharoitida zaxiralar tugasa nima bo‘ladi?",
   "2017-yildagi valyuta liberallashtirilishining O‘zbekiston iqtisodiyoti uchun ahamiyati nimada? 2017–2025-yillarda so‘mning nominal va real kursi nima uchun turlicha o‘zgargan?",
   "O‘zbekiston Markaziy bankining «neytrallik tamoyili»ning mohiyati nimada? Foiz stavkalari pariteti valyuta kursini qanday tushuntiradi?"
  ],
  "refs": [
   "Egiluvchan kurs tashqi zarbalarni so‘ndiradi, markaziy bankka mustaqil pul siyosatini yuritishga imkon beradi va zaxiralarni talab qilmaydi, ammo kurs o‘zgaruvchan, kutishlar beqaror bo‘lishi mumkin. Qayd etilgan kurs aniqlik va barqarorlik beradi, lekin intervensiya uchun zaxiralar kerak. Zaxiralar tugasa, markaziy bank kursni ushlab tura olmaydi va devalvatsiya yuz beradi. Javobda 18.1-rasm va rejimlar spektri (18.2-rasm) keltirilishi kerak.",
   "2017-yil sentabrida valyuta bozori liberallashtirildi, erkin ayirboshlash ta’minlandi, boshqariladigan suzuvchi kurs rejimiga o‘tildi, bu eksport, investitsiyalar va tashqi savdo uchun sharoit yaratdi. Nominal ravishda so‘m 2017-yildan beri qadrsizlangan (kurs 8 120 dan 12 025 gacha), ammo O‘zbekistonda inflyatsiya AQSHdagidan yuqori bo‘lgani uchun real ma’noda so‘m qariyb 16% ga qimmatlashgan (q ≈ 84). Bu eksportning narx raqobatbardoshligini cheklashi mumkin.",
   "Markaziy bank ichki bozorda sotib olingan oltin hajmiga mos miqdorda valyuta bozorida xorijiy valyuta sotadi: pul massasiga ta’sir sterilizatsiya qilinadi, inflyatsiya bosimi kamayadi, zaxiralar barqaror saqlanadi, kurs darajasini «belgilash» maqsadi bo‘lmaydi. Foiz stavkalari pariteti: investorlar uchun turli valyutalardagi depozitlarning kutilgan daromadi tenglashadi, shuning uchun stavka farqi kutilgan qadrsizlanishga teng bo‘ladi; yuqori stavkali valyutaning kutilgan qadrsizlanishi katta."
  ]
 },
 "19": {
  "goal": "To‘lov balansini ikki yoqlama yozuv asosida tuzish, joriy hisob saldosini hisoblash, CA = S – I va CA = Y – A ayniyatlarini qo‘llash, tashqi barqarorlik ko‘rsatkichlarini baholash va Marshall-Lerner shartini tekshirish ko‘nikmalarini shakllantirish.",
  "concepts": [
   "Ikki yoqlama yozuv, kredit va debet",
   "Joriy operatsiyalar hisobi tarkibi",
   "Moliyaviy hisob va rezerv aktivlar",
   "CA = S – I va CA = Y – A ayniyatlari",
   "Tashqi barqarorlik ko‘rsatkichlari (Gidotti-Grinspen, import qamrovi)",
   "Marshall-Lerner sharti va J-egri chiziq"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 19-bob",
  "tasks": [
   {
    "id": "mk19-p1",
    "title": "Joriy hisob saldosi",
    "text": "Quyidagi operatsiyalarni to‘lov balansida ikki yoqlama yozuv bo‘yicha aks ettiring va joriy hisob saldosini toping (mln dollar): a) meva eksporti 200 (tushum bank hisobiga); b) avtomobillar importi 350 (bank hisobidan to‘landi); c) muhojirlarning pul o‘tkazmalari 150; d) xorijiy investorga dividend to‘lovi 30; e) Jahon bankidan 100 mln dollar kredit olindi; f) xorijiy turistlarning mamlakatdagi xarajatlari 60.",
    "fields": [
     {
      "label": "Joriy hisob saldosi",
      "value": 30,
      "unit": "mln dollar"
     }
    ],
    "solution": "Joriy hisobga a, b, c, d, f kiradi. Tovarlar: 200 – 350 = –150. Xizmatlar (turizm): +60. Birlamchi daromad (dividend): –30. Ikkilamchi daromad (pul o‘tkazmalari): +150. Saldo = –150 + 60 – 30 + 150 = +30. Kredit (e) moliyaviy hisobga kiradi: kredit olish majburiyat oshishi (+100 kirim), joriy hisob saldosiga ta’sir qilmaydi.",
    "formula": "CA = (X – M)tovar + (X – M)xizmat + birlamchi + ikkilamchi",
    "note": "Har bir operatsiya ikki yozuv beradi (masalan, eksport: kredit – tovar; debet – bank hisobi/valyuta aktivi). Pul o‘tkazmalari ikkilamchi daromadlarda aks etadi."
   },
   {
    "id": "mk19-p2",
    "title": "To‘lov balansi saldolari va rezervlar",
    "text": "Mamlakat ma’lumotlari (mlrd dollar): tovarlar eksporti 25, importi 40; xizmatlar eksporti 9, importi 13; sof birlamchi daromad +1; sof ikkilamchi daromad +14; kapital hisobi 0; to‘g‘ridan-to‘g‘ri investitsiyalar sof kirimi 4; portfel investitsiyalar sof kirimi 3; boshqa investitsiyalar sof kirimi 2; sof xatolar –0,5. a) Savdo balansi, joriy hisob saldosini toping. b) Rezervlar qanchaga o‘zgardi? c) Natijani talqin qiling.",
    "fields": [
     {
      "label": "Savdo balansi (tovarlar)",
      "value": -15,
      "unit": "mlrd dollar"
     },
     {
      "label": "Joriy hisob saldosi",
      "value": -4,
      "unit": "mlrd dollar"
     },
     {
      "label": "Rezerv aktivlarning o‘zgarishi (+ ortishi)",
      "value": 4.5,
      "unit": "mlrd dollar"
     }
    ],
    "solution": "Savdo balansi = 25 – 40 = –15. Tovarlar va xizmatlar: –15 – 4 = –19. CA = –19 + 1 + 14 = –4. Moliyaviy hisob (rezervlarsiz) sof kirimi = 4 + 3 + 2 = 9. Umumiy balans = CA + KA + FA(rezervsiz) + xatolar = –4 + 0 + 9 – 0,5 = +4,5, ya’ni rezervlar 4,5 mlrd dollarga ortadi.",
    "formula": "CA + KA + FA(rezervsiz) + xatolar = ΔRezervlar",
    "note": "Talqin: joriy hisob taqchilligi (4) kapital kirimi (9) bilan qoplangan, ortiqchasi rezervlarni oshirgan. Taqchillik pul o‘tkazmalari hisobiga ancha kichrayganini ham ko‘rsatadi. Rezervlar ortishini to‘lov balansi ijobiy saldosi deb talqin qilish mumkin (rezerv aktivlar ortishi balansda manfiy belgi bilan yozilishi BPM6 qoidasi, bu yerda ΔRezerv shaklida berilgan)."
   },
   {
    "id": "mk19-p3",
    "title": "Absorbsiya va joriy hisob",
    "text": "Mamlakatda YaIM 1000, iste’mol 650, investitsiyalar 300, davlat xarajatlari 120 (mlrd). a) Absorbsiya va joriy hisob saldosini toping (xorijdan sof daromad nolga teng). b) Milliy jamg‘armani hisoblang va CA = S – I ayniyatini tekshiring. c) Hukumat xarajatlarini 20 ga qisqartirsa, Y o‘zgarmagan holda CA qanday o‘zgaradi?",
    "fields": [
     {
      "label": "Absorbsiya A",
      "value": 1070,
      "unit": "mlrd"
     },
     {
      "label": "Joriy hisob saldosi CA",
      "value": -70,
      "unit": "mlrd"
     },
     {
      "label": "Milliy jamg‘arma S",
      "value": 230,
      "unit": "mlrd"
     },
     {
      "label": "Yangi CA (G 20 ga qisqargach)",
      "value": -50,
      "unit": "mlrd"
     }
    ],
    "solution": "A = C + I + G = 650 + 300 + 120 = 1070. CA = Y – A = 1000 – 1070 = –70. S = Y – C – G = 1000 – 650 – 120 = 230; S – I = 230 – 300 = –70 = CA, ayniyat bajariladi. G = 100 bo‘lsa, A = 1050, CA = 1000 – 1050 = –50: taqchillik 20 ga kamayadi.",
    "formula": "A = C + I + G; CA = Y – A = S – I",
    "note": "Xorijdan sof daromad nolga teng bo‘lgani uchun CA = NX. Byudjet xarajatlarini qisqartirish (Y o‘zgarmaganda) CA ni xarajat qisqarishi miqdorida yaxshilaydi."
   },
   {
    "id": "mk19-p4",
    "title": "Tashqi barqarorlik ko‘rsatkichlari",
    "text": "Mamlakatning xalqaro zaxiralari 30 mlrd dollar, yillik import 48 mlrd dollar, qisqa muddatli tashqi qarz 12 mlrd dollar, YaIM 120 mlrd dollar, joriy hisob taqchilligi 8 mlrd dollar. a) Zaxiralar necha oylik importni qoplaydi? b) Gidotti-Grinspen ko‘rsatkichini hisoblang. c) Joriy hisob taqchilligi YaIMga nisbatan qancha? Mamlakatning tashqi barqarorligiga baho bering.",
    "fields": [
     {
      "label": "Zaxiralar qamrab oladigan import",
      "value": 7.5,
      "unit": "oy"
     },
     {
      "label": "Gidotti-Grinspen ko‘rsatkichi",
      "value": 2.5,
      "unit": "marta"
     },
     {
      "label": "Joriy hisob taqchilligi / YaIM",
      "value": -6.67,
      "unit": "%"
     }
    ],
    "solution": "a) 30/48 · 12 = 7,5 oy. b) 30/12 = 2,5. c) –8/120 · 100 = –6,67%, ya’ni taqchillik YaIMning taxminan 6,7 foizi.",
    "formula": "Zaxira/Import · 12; Zaxira / Qisqa muddatli qarz; CA / YaIM · 100",
    "note": "Baho: import qamrovi (3 oydan ko‘p) va Gidotti-Grinspen (1 dan katta) me’yordan yuqori – qisqa muddatli xatar past. Ammo YaIMning taxminan 6,7% joriy hisob taqchilligi sezilarli (odatda 4–5% dan yuqori xavfli deb baholanadi), shuning uchun uni moliyalashtirish barqarorligini kuzatish zarur."
   },
   {
    "id": "mk19-p5",
    "title": "Marshall-Lerner sharti",
    "text": "Eksport talabining narx elastikligi –0,4, import talabining elastikligi –0,5. a) Marshall-Lerner sharti bajariladimi? b) Uzoq muddatda elastikliklar –0,9 va –0,8 bo‘lsa-chi? c) Natijalar asosida J-egri chiziq samarasini tushuntiring.",
    "fields": [
     {
      "label": "Qisqa muddat: |εx| + |εm|",
      "value": 0.9,
      "unit": ""
     },
     {
      "label": "Uzoq muddat: |εx| + |εm|",
      "value": 1.7,
      "unit": ""
     }
    ],
    "solution": "Shart: |εx| + |εm| > 1. Qisqa muddatda 0,4 + 0,5 = 0,9 < 1 – bajarilmaydi, devalvatsiya savdo balansini dastlab yomonlashtiradi. Uzoq muddatda 0,9 + 0,8 = 1,7 > 1 – bajariladi, balans yaxshilanadi. Shuning uchun balans avval pasayib, so‘ng o‘sadi – J shaklidagi egri chiziq.",
    "formula": "|εx| + |εm| > 1",
    "note": "Qisqa muddatda shartning bajarilmasligi J-egri chiziqning pasayuvchi qismini, uzoq muddatda bajarilishi esa o‘sib boruvchi qismini tushuntiradi."
   }
  ],
  "open": [
   "To‘lov balansi nima va uning makroiqtisodiy ahamiyati nimada? Joriy operatsiyalar hisobining tarkibiy qismlarini sanab, savdo balansi bilan farqini tushuntiring.",
   "Mankyuning «NX = S – I» ayniyatiga ko‘ra savdo taqchilligi har doim yomonmi? Taqchillik foydali va xavfli bo‘ladigan holatlarni misollar bilan taqqoslang.",
   "To‘lov balansi inqirozi qanday rivojlanadi va undan chiqish yo‘llari qanday? Xarajatlarni o‘zgartiruvchi va xarajatlarni yo‘naltiruvchi siyosatni taqqoslang."
  ],
  "refs": [
   "To‘lov balansi – ma’lum davrda rezidentlar va norezidentlar o‘rtasidagi barcha iqtisodiy operatsiyalarning tizimlashtirilgan hisoboti (BPM6, ikki yoqlama yozuv). Ahamiyati: tashqi iqtisodiy holat, valyuta kursi va zaxiralar bosimi, moliyalashtirish manbalari haqida ma’lumot beradi. Joriy hisob: tovarlar, xizmatlar, birlamchi va ikkilamchi daromadlar. Savdo balansi faqat tovarlar eksporti va importi farqi, joriy hisob esa xizmatlar va daromadlarni (jumladan pul o‘tkazmalarini) ham qamraydi.",
   "NX = S – I ayniyatiga ko‘ra savdo taqchilligi investitsiyalar jamg‘armadan ko‘pligini bildiradi, ya’ni qo‘shimcha investitsiyalar xorijiy mablag‘ bilan moliyalashtiriladi. Agar mablag‘ ishlab chiqarish quvvatini oshiruvchi investitsiyaga ketsa, kelajakdagi daromad qarzni to‘lashga yetadi va taqchillik foydali bo‘ladi. Agar u iste’molga ketsa yoki jamg‘arma past bo‘lsa, tashqi qarz oshadi va barqarorlik xavf ostida qoladi. Baholashda taqchillik hajmi, moliyalashtirish turi (to‘g‘ridan-to‘g‘ri investitsiya yoki qisqa muddatli qarz) va zaxiralar hisobga olinadi.",
   "Inqiroz uzoq davom etgan katta joriy hisob taqchilligi, zaxiralarning kamayishi, kapital chiqib ketishi va kursga bosim bilan rivojlanadi. Chiqish yo‘llari: xarajatlarni o‘zgartiruvchi siyosat (fiskal va monetar qisqartirish, talabni kamaytirish), xarajatlarni yo‘naltiruvchi siyosat (devalvatsiya, tarif), tarkibiy islohotlar va xalqaro moliyaviy yordam. Devalvatsiya Marshall-Lerner sharti bajarilganda samarali, qisqa muddatda J-egri chiziq samarasi kuzatiladi. Qisqartirish siyosati ishsizlikni oshirishi mumkin, shuning uchun siyosatlar kombinatsiyasi talab etiladi."
  ]
 },
 "20": {
  "goal": "Ochiq iqtisodiyotda muvozanatli ishlab chiqarish, multiplikatorlar va «egizak taqchilliklar»ni hisoblash; Mandell-Fleming modelida suzuvchi va qayd etilgan kurs sharoitida fiskal va monetar siyosat samaradorligini tahlil qilish.",
  "concepts": [
   "Sof eksport va importga chegaraviy moyillik",
   "Ochiq iqtisodiyot multiplikatori",
   "«Egizak taqchilliklar»",
   "Mandell-Fleming modeli (IS∗, LM∗)",
   "Suzuvchi va qayd etilgan kurs rejimlarida siyosat samaradorligi",
   "«Imkonsiz uchlik» va IS-LM-BP modeli"
  ],
  "source": "Saloxitdinov Sh.F. Makroiqtisodiyot, 20-bob",
  "tasks": [
   {
    "id": "mk20-p1",
    "title": "Ochiq iqtisodiyotda muvozanat va multiplikator",
    "text": "Iqtisodiyotda: C = 50 + 0,75(Y – T); T = 0,2Y; I = 150; G = 200; X = 180; M = 30 + 0,15Y. a) Muvozanatli Y va NX ni toping. b) Ochiq va yopiq iqtisodiyot multiplikatorlarini hisoblang. c) Eksport 30 ga oshsa, Y va NX qanday o‘zgaradi?",
    "fields": [
     {
      "label": "Muvozanatli Y",
      "value": 1000,
      "unit": ""
     },
     {
      "label": "NX",
      "value": 0,
      "unit": ""
     },
     {
      "label": "Ochiq iqtisodiyot multiplikatori",
      "value": 1.82,
      "unit": ""
     },
     {
      "label": "Yopiq iqtisodiyot multiplikatori",
      "value": 2.5,
      "unit": ""
     }
    ],
    "solution": "C = 50 + 0,6Y. Y = 50 + 0,6Y + 150 + 200 + 180 – 30 – 0,15Y = 550 + 0,45Y, Y = 550/0,55... aniqrog‘i: Y(1 – 0,6 + 0,15) = 550, Y = 550/0,55 = 1000. M = 30 + 150 = 180, NX = 180 – 180 = 0. Ochiq multiplikator 1/0,55 = 1,82; yopiq 1/(1 – 0,6) = 2,5. ΔX = 30: ΔY = 30·1,818 = 54,55; ΔM = 0,15·54,55 = 8,18; ΔNX = 30 – 8,18 = 21,82.",
    "formula": "Y = [a + I + G + X – M0]/(1 – c(1 – t) + m); k = 1/(1 – c(1 – t) + m)",
    "note": "Yo‘l: 1 – 0,75·0,8 + 0,15 = 0,55. Importga chegaraviy moyillik multiplikatorni kamaytiradi, chunki daromadning bir qismi xorijiy tovarlarga sarflanadi. Qo‘shimcha natijalar: ΔY (X + 30 bo‘lganda) = 54.55; ΔNX (X + 30 bo‘lganda) = 21.82."
   },
   {
    "id": "mk20-p2",
    "title": "Egizak taqchilliklar",
    "text": "1-masala sharoitida hukumat davlat xarajatlarini 40 ga oshirdi. a) Y, NX va byudjet saldosining o‘zgarishini toping. b) «Egizak taqchilliklar» g‘oyasini raqamlar asosida tushuntiring.",
    "fields": [
     {
      "label": "ΔY",
      "value": 72.73,
      "unit": ""
     },
     {
      "label": "ΔNX",
      "value": -10.91,
      "unit": ""
     },
     {
      "label": "Yangi byudjet saldosi (T – G)",
      "value": -25.45,
      "unit": ""
     }
    ],
    "solution": "ΔY = 40·1,818 = 72,73. ΔM = 0,15·72,73 = 10,91, shuning uchun ΔNX = –10,91. Soliq tushumi ΔT = 0,2·72,73 = 14,55; boshlang‘ich byudjet saldosi 200 – 200 = 0, yangi saldo = 14,55 – 40 = –25,45.",
    "formula": "ΔY = k·ΔG; ΔNX = –m·ΔY; ΔB = t·ΔY – ΔG",
    "note": "Fiskal ekspansiya byudjet taqchilligini (–25,45) va savdo taqchilligini (–10,91) bir vaqtda hosil qiladi – bu «egizak taqchilliklar»dir."
   },
   {
    "id": "mk20-p3",
    "title": "Mandell-Fleming: fiskal siyosat",
    "text": "Kichik ochiq iqtisodiyotda (Mandell-Fleming): C = 100 + 0,75(Y – T); I = 500 – 20r; G = T = 200; NX = 400 – 100e; M/P = Y – 100r; M = 1500, P = 1, r∗ = 5. a) LM∗ dan Y ni toping. b) IS∗ dan muvozanatli e ni toping. c) G 50 ga oshsa, suzuvchi kurs sharoitida Y va e qanday o‘zgaradi? d) Qayd etilgan kurs sharoitida-chi?",
    "fields": [
     {
      "label": "Y (LM∗ dan)",
      "value": 2000,
      "unit": ""
     },
     {
      "label": "Muvozanatli e",
      "value": 4.5,
      "unit": ""
     },
     {
      "label": "Suzuvchi kurs: yangi Y",
      "value": 2000,
      "unit": ""
     },
     {
      "label": "Suzuvchi kurs: yangi e",
      "value": 5.0,
      "unit": ""
     }
    ],
    "solution": "r = r∗ = 5. a) LM∗: 1500 = Y – 100·5, Y = 2000. b) IS∗: Y = 100 + 0,75(Y – 200) + (500 – 100) + 200 + 400 – 100e = 0,75Y + 950 – 100e, 0,25·2000 = 950 – 100e, e = 4,5. c) G = 250: 0,25Y = 1000 – 100e; LM∗ dan Y = 2000, shuning uchun e = 5,0. Y o‘zgarmaydi, NX 50 ga kamayadi (to‘liq siqib chiqarish). d) Qayd etilgan kurs e = 4,5: 0,25Y = 1000 – 450 = 550, Y = 2200 (ΔY = 200 = 50/0,25). Pul taklifi M = Y – 500 = 1700 gacha endogen oshadi.",
    "formula": "LM∗: M/P = Y – 100r∗; IS∗: Y = C + I(r∗) + G + NX(e)",
    "note": "Bu yerda e – real valyuta kursi: e oshishi milliy valyuta kuchayishi (NX kamayadi), kamayishi esa zaiflashishi (NX oshadi) ma’nosida. Suzuvchi kursda fiskal siyosat samarasiz, qayd etilganda samarali. Qo‘shimcha natijalar: Qayd etilgan kurs: yangi Y = 2200.0."
   },
   {
    "id": "mk20-p4",
    "title": "Mandell-Fleming: monetar siyosat",
    "text": "3-masala sharoitida pul taklifi 1500 dan 1600 ga oshirildi. a) Suzuvchi kurs sharoitida yangi Y, e va NX ni toping. b) Qayd etilgan kurs sharoitida natija qanday bo‘ladi va nima uchun?",
    "fields": [
     {
      "label": "Suzuvchi kurs: yangi Y",
      "value": 2100,
      "unit": ""
     },
     {
      "label": "Suzuvchi kurs: yangi e",
      "value": 4.25,
      "unit": ""
     },
     {
      "label": "Suzuvchi kurs: yangi NX",
      "value": -25.0,
      "unit": ""
     },
     {
      "label": "Qayd etilgan kurs: Y o‘zgarishi",
      "value": 0,
      "unit": ""
     }
    ],
    "solution": "a) LM∗: 1600 = Y – 500, Y = 2100. IS∗: 0,25·2100 = 950 – 100e, e = 4,25. NX = 400 – 100·4,25 = –25 (oldin 400 – 450 = –50: sof eksport 25 ga oshdi). b) Qayd etilgan kursda markaziy bank kursni ushlab turish uchun valyuta sotadi va pul taklifi 1500 ga qaytadi, shuning uchun Y = 2000, e = 4,5 o‘zgarmaydi.",
    "formula": "LM∗: Y = M/P + 100r∗; IS∗: 0,25Y = 950 – 100e",
    "note": "Suzuvchi kursda monetar siyosat milliy valyuta zaiflashuvi (e kamayishi) va sof eksport oshishi orqali ishlaydi; qayd etilgan kursda samarasiz."
   }
  ],
  "open": [
   "Ochiq iqtisodiyotda yalpi xarajatlar qanday tarkibiy qismlardan iborat? Eksport va import qanday omillarga bog‘liq va nima uchun ochiq iqtisodiyot multiplikatori yopiq iqtisodiyotnikidan kichik?",
   "Mandell-Fleming modelining asosiy farazlarini sanab, suzuvchi va qayd etilgan kurs sharoitida fiskal va monetar siyosat samaradorligini taqqoslang. Mamlakat xatari mukofotining oshishi nimaga olib keladi?",
   "Keys: mamlakat qayd etilgan kurs rejimida, kapital mobilligi past; joriy hisob taqchilligi YaIMning 6 foizi, zaxiralar 2,5 oylik importni qoplaydi, ishsizlik yuqori. Svon diagrammasi va IS-LM-BP modeli asosida holatni tahlil qiling, siyosat kombinatsiyasini taklif qiling va «imkonsiz uchlik» nuqtai nazaridan kerakli tarkibiy o‘zgarishlarni asoslang.",
   "O‘zbekistonda ochiq iqtisodiyot sharoitida makroiqtisodiy siyosatning xususiyatlarini Mandell-Fleming modeli asosida baholang."
  ],
  "refs": [
   "Y = C + I + G + NX. Eksport xorijiy daromad va valyuta kursiga, import milliy daromad va kursga bog‘liq; importga chegaraviy moyillik m daromadning importga sarflanadigan ulushi. Daromad o‘sishi importni oshirib, sof eksportni kamaytiradi, shuning uchun multiplikator 1/(1 – c(1 – t) + m) bo‘lib, yopiq iqtisodiyotdagi 1/(1 – c(1 – t)) dan kichik: daromadning bir qismi xorijga «oqib chiqadi».",
   "Farazlar: kichik ochiq iqtisodiyot, kapitalning mukammal mobilligi (r = r∗), narxlar qat’iy. Suzuvchi kursda fiskal siyosat samarasiz (kurs kuchayib sof eksportni siqib chiqaradi), monetar siyosat samarali. Qayd etilgan kursda fiskal siyosat samarali, monetar siyosat samarasiz (pul taklifi endogen). Mamlakat xatari mukofoti oshsa, ichki foiz stavkasi r∗ + mukofotga ko‘tariladi, investitsiyalar kamayadi, suzuvchi kursda valyuta zaiflashadi va sof eksport oshadi.",
   "Qayd etilgan kurs va past kapital mobilligida taqchilliklar zaxiralarni kamaytirmoqda, shuning uchun talabni kengaytirish cheklangan. Taklif: fiskal-monetar qat’iylashtirish bilan birga devalvatsiya yoki kurs moslashuvchanligini oshirish (xarajatlarni yo‘naltirish) va ishsizlikka qarshi tarkibiy choralar. Imkonsiz uchlikka ko‘ra uchtadan ikkitasi: kurs va kapital nazorati saqlansa, mustaqil monetar siyosat cheklanadi; ko‘proq moslashuvchan kursga o‘tish mustaqil siyosat imkonini beradi. Ichki va tashqi balans uchun ikki vosita (xarajat va kurs) kerak.",
   "Baholash mezonlari: kurs rejimi (boshqariladigan suzuvchi kurs), inflyatsion targetlash va fiskal konsolidatsiya kombinatsiyasining modelga mosligi; suzuvchi kursda monetar siyosatning kuchi va fiskal siyosatning cheklanganligi; pul o‘tkazmalari va xom ashyo eksportiga bog‘liqlik, dollarlashuv xatari, eksport diversifikatsiyasi zarurati. Javobda kamida bitta tashqi zarba misoli keltirilishi kerak."
  ]
 }
};
