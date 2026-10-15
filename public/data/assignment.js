// Avtomatik yaratilgan (scripts/import-assignment.py): 3-semestr topshirig'i — 11 bosqich, 3 muddat guruhi, 20 ball.
// Muddat va ballarni o'zgartirish: scripts/import-assignment.py dagi SETTINGS, so'ng skriptni qayta ishga tushiring.
export const ASSIGNMENT = {
 "id": "mikro-1",
 "form": "kunduzgi",
 "sampleName": "“Jizzax Coffee House” MCHJ",
 "title": "Tanlangan tadbirkorlik sub’ekti misolida mikroiqtisodiy tahlil",
 "docTitle": "Tanlangan Tadbirkorlik Sub’Ekti Misolida",
 "subtitle": "Mikroiqtisodiyot nazariyasini amaliyotga tatbiq etish bo‘yicha 11 ta mavzuli topshiriqlar majmuasi",
 "semester": 3,
 "total": 20,
 "intro": [
  "Ushbu topshiriqlar majmuasi mikroiqtisodiyot fanining barcha asosiy mavzularini qamrab oladi va talabalar tomonidan mustaqil ravishda bajarilishi mo‘ljallangan. Ilgari tayyorlangan “1-topshiriq” namunasidagi yondashuv davom ettirilib, har bir talaba semestr boshida biror real yoki shartli tadbirkorlik sub’ektini (kichik kafe, novvoyxona, do‘kon, ishlab chiqarish sexi va h.k.) tanlaydi va shu sub’ekt misolida barcha 11 ta mavzu bo‘yicha amaliy tahlil o‘tkazadi.",
  "Har bir mavzu bo‘yicha topshiriq bir xil tuzilmaga ega: (1) mavzuning maqsadi, (2) talaba bajarishi lozim bo‘lgan aniq vazifalar, (3) “Jizzax Coffee House” MCHJ kofexonasi misolida ishlab chiqilgan namuna-hisoblash, (4) talab qilinadigan yakuniy natija. Namunadagi raqamlar shartli bo‘lib, faqat hisoblash metodikasini ko‘rsatish uchun keltirilgan — talaba o‘z sub’ektining haqiqiy yoki ekspert baholari asosidagi ma’lumotlaridan foydalanishi kerak.",
  "Topshiriqlarni bajarish tartibi: mavzular ma’ruza kursi bilan parallel ravishda, ko‘rsatilgan ketma-ketlikda bajariladi. Har bir topshiriq alohida hisobot (1–2 bet, jadval va grafiklar bilan) shaklida rasmiylashtiriladi, semestr yakunida esa barcha 11 ta hisobot yagona “Mikroiqtisodiy tahlil portfeli”ga birlashtiriladi va himoya qilinadi."
 ],
 "groups": [
  {
   "id": 1,
   "stages": [
    1,
    2,
    3,
    4
   ],
   "due": "2026-10-31",
   "max": 7
  },
  {
   "id": 2,
   "stages": [
    5,
    6,
    7
   ],
   "due": "2026-11-29",
   "max": 6
  },
  {
   "id": 3,
   "stages": [
    8,
    9,
    10,
    11
   ],
   "due": "2026-12-26",
   "max": 7
  }
 ],
 "stages": [
  {
   "no": 1,
   "title": "“Mikroiqtisodiyot”ga kirish",
   "goal": "Mikroiqtisodiyot fanining predmeti va tadqiqot usullarini, cheklangan resurslar sharoitida tanlov muammosini, ishlab chiqarish imkoniyatlari chizig‘i (IIC) va muqobil xarajat tushunchalarini tanlangan tadbirkorlik sub’ekti misolida amalda tushunish.",
   "tasks": [
    "O‘zingiz tanlagan tadbirkorlik sub’ekti (kafe, do‘kon, ustaxona va h.k.) haqida qisqacha ma’lumot yozing: faoliyat turi, tashkiliy-huquqiy shakli, joylashuvi, asosiy mahsulot/xizmatlari.",
    "Sub’ekt ixtiyorida bo‘lgan asosiy iqtisodiy resurslarni (mehnat, kapital, yer, tadbirkorlik qobiliyati) sanab o‘ting va ularning cheklanganligini izohlang.",
    "Ikkita muqobil mahsulot (yoki xizmat) tanlab, mavjud resurslarni ular o‘rtasida taqsimlash asosida ishlab chiqarish imkoniyatlari chizig‘ini (jadval va grafik) tuzing.",
    "IIC bo‘yicha kamida uchta nuqta uchun muqobil xarajatni hisoblang va iqtisodiy samaradorlik (chiziq ustida), resurslardan to‘liq foydalanmaslik (chiziq ichida) va real bo‘lmagan hajm (chiziqdan tashqarida) holatlarini izohlang."
   ],
   "sampleIntro": "“Jizzax Coffee House” misolida bitta barista kuniga 8 soat ishlaydi. U shu vaqt ichida faqat espresso yoki faqat lattye tayyorlashga ixtisoslashsa, quyidagi maksimal hajmlarga erishadi:",
   "sampleTable": {
    "head": [
     "Variant",
     "Espresso (dona/kun)",
     "Lattye (dona/kun)",
     "Muqobil xarajat (1 lattye o‘rniga espresso)"
    ],
    "rows": [
     [
      "A",
      "100",
      "0",
      "—"
     ],
     [
      "B",
      "80",
      "12",
      "≈ 1,67 espresso"
     ],
     [
      "C",
      "50",
      "30",
      "≈ 1,67 espresso"
     ],
     [
      "D",
      "0",
      "60",
      "≈ 1,67 espresso"
     ]
    ]
   },
   "sampleAnalysis": "Barista bir xil vaqt resursidan foydalangani sababli, IIC chiziqli shaklda bo‘ladi va har bir qo‘shimcha lattye tayyorlash ≈1,67 dona espressodan voz kechishni bildiradi — bu 1 lattyening muqobil xarajatidir. Agar barista kuniga 40 espresso va 20 lattye tayyorlasa (chiziq ichida nuqta), bu resurslardan to‘liq foydalanilmayotganini bildiradi.",
   "result": "Sub’ekt tavsifi (0,5 bet) + resurslar ro‘yxati + IIC jadvali va grafigi + muqobil xarajat hisob-kitobi va qisqa xulosa.",
   "topic": 1,
   "dependsOn": []
  },
  {
   "no": 2,
   "title": "Talab va taklif tahlili asoslari. Bozor muvozanati",
   "goal": "Talab va taklif qonunlarini, ularni belgilovchi omillarni, talab va taklif funksiyalarini hamda bozor muvozanati narxi va hajmini aniqlashni o‘rganish.",
   "tasks": [
    "Sub’ektingiz sotadigan asosiy mahsulot uchun kamida 5 xil narx darajasida talab va taklif hajmlarini (real kuzatuv, so‘rov yoki ekspert bahosi asosida) jadval shaklida tuzing.",
    "Talabni belgilovchi omillarni (narx, daromad, did, mavsumiylik, raqobatchilar narxi) va taklifni belgilovchi omillarni (xomashyo narxi, texnologiya, soliq, raqobat) alohida jadvalda ko‘rsating.",
    "Jadval ma’lumotlari asosida talab (Qd = a − bP) va taklif (Qs = c + dP) funksiyalarini chiziqli tenglama ko‘rinishida yozing.",
    "Analitik (Qd = Qs tenglamasini yechish) va grafik usulda muvozanat narxi (Pe) va muvozanat hajmini (Qe) toping; ortiqcha talab yoki ortiqcha taklif holatlarini tushuntiring."
   ],
   "sampleIntro": "“Jizzax Coffee House” misolida qahva bo‘yicha talab-taklif jadvali:",
   "sampleTable": {
    "head": [
     "Narx (so‘m/dona)",
     "Talab hajmi (dona/kun)",
     "Taklif hajmi (dona/kun)"
    ],
    "rows": [
     [
      "10 000",
      "360",
      "240"
     ],
     [
      "12 000",
      "320",
      "200"
     ],
     [
      "14 000",
      "280",
      "160"
     ],
     [
      "16 000",
      "240",
      "120"
     ],
     [
      "18 000",
      "200",
      "80"
     ]
    ]
   },
   "sampleAnalysis": "Jadval asosida talab funksiyasi Qd = 600 − 0,02P, taklif funksiyasi Qs = −120 + 0,02P ko‘rinishida topiladi (ming so‘mda P bilan hisoblansa koeffitsientlar mos ravishda qayta hisoblanadi). Qd = Qs tengligidan Pe = 14 000 so‘m, Qe = 160 dona/kun muvozanat nuqtasi kelib chiqadi. Narx 14 000 so‘mdan past bo‘lsa — talab taklifdan oshib, tanqislik (defitsit) yuzaga keladi; yuqori bo‘lsa — ortiqcha taklif (profitsit) kuzatiladi.",
   "result": "Talab va taklifni belgilovchi omillar jadvali + talab-taklif jadvali + funksiyalar + grafik + muvozanat nuqtasi tahlili (1–1,5 bet).",
   "topic": 2,
   "dependsOn": [
    1
   ]
  },
  {
   "no": 3,
   "title": "Talab va taklif elastikligi",
   "goal": "Narx bo‘yicha talab va taklif elastikligi, daromad bo‘yicha elastiklik va o‘zaro (kross) elastiklik koeffitsientlarini hisoblash hamda ularning amaliy ahamiyatini tushunish.",
   "tasks": [
    "2-topshiriqdagi talab-taklif jadvalidan foydalanib, narx ikki qo‘shni daraja o‘rtasida o‘zgarganda talab bo‘yicha narx elastikligini yoy (arc elasticity) formulasi bilan hisoblang.",
    "Mahsulotingizni elastik, noelastik yoki birlik elastik ekanligini aniqlang va buni narx o‘zgarishi umumiy daromadga (TR = P×Q) qanday ta’sir qilishi bilan bog‘lab tushuntiring.",
    "Taklif elastikligini xuddi shu usulda hisoblang va uni qisqa hamda uzoq muddatli davr uchun solishtiring.",
    "Iste’molchilar daromadi o‘zgarishi bilan bog‘liq daromad elastikligini (yoki o‘rinbosar/to‘ldiruvchi mahsulot uchun kross-elastiklikni) shartli misolda hisoblab, mahsulot toifasini (oddiy/quyi/hashamat) aniqlang."
   ],
   "sampleIntro": "Narx 14 000 so‘mdan 16 000 so‘mgacha oshganda talab hajmi 280 dan 240 donagacha tushadi:",
   "sampleTable": {
    "head": [
     "Ko‘rsatkich",
     "Formula",
     "Natija"
    ],
    "rows": [
     [
      "Narx o‘zgarishi (%)",
      "(16000−14000)/((16000+14000)/2)×100",
      "≈ 13,3 %"
     ],
     [
      "Hajm o‘zgarishi (%)",
      "(240−280)/((240+280)/2)×100",
      "≈ −15,4 %"
     ],
     [
      "Talab elastikligi (Ed)",
      "%ΔQ / %ΔP",
      "≈ −1,15 (mutlaq qiymat > 1)"
     ]
    ]
   },
   "sampleAnalysis": "|Ed| ≈ 1,15 > 1 bo‘lgani uchun talab nisbatan elastik hisoblanadi: narxning 1 foizga oshishi talab hajmining undan ko‘proq (≈1,15 foiz) kamayishiga olib keladi. Bu holatda narxni oshirish umumiy daromadni kamaytiradi (TR 14000×280=3 920 000 dan 16000×240=3 840 000 so‘mgacha tushadi), shuning uchun kafega narxni keskin oshirishdan ko‘ra sifat va assortiment orqali talabni kengaytirish tavsiya etiladi.",
   "result": "Elastiklik hisob-kitoblari jadvali + Ed, Es qiymatlari + daromadga ta’sir tahlili + narx siyosati bo‘yicha yozma tavsiya (1 bet).",
   "topic": 3,
   "dependsOn": [
    2
   ]
  },
  {
   "no": 4,
   "title": "Iste’molchi tanlovi nazariyasi",
   "goal": "Befarqlik egri chiziqlari, byudjet chizig‘i va chegaraviy o‘rin almashtirish darajasi (MRS) yordamida iste’molchi muvozanatini aniqlashni o‘rganish.",
   "tasks": [
    "Ikkita mahsulot (masalan, qahva va shirinlik) tanlab, shartli iste’molchining oylik/kunlik byudjetini belgilang va byudjet chizig‘i tenglamasini (I = Px·X + Py·Y) yozing hamda grafigini chizing.",
    "Turli iste’mol kombinatsiyalari (savatlar) uchun shartli umumiy foydalilik (TU) qiymatlarini jadval shaklida ko‘rsating va chegaraviy foydalilik (MU) larni hisoblang.",
    "MUx/Px = MUy/Py muvozanat shartidan foydalanib, iste’molchi uchun optimal tanlov nuqtasini (X*, Y*) toping.",
    "Befarqlik egri chizig‘i va byudjet chizig‘ining urinish nuqtasini grafikda ko‘rsating va natijani iqtisodiy talqin qiling."
   ],
   "sampleIntro": "Mijozning kunlik byudjeti 50 000 so‘m, qahva narxi Px = 14 000 so‘m, shirinlik narxi Py = 10 000 so‘m bo‘lsin:",
   "sampleTable": {
    "head": [
     "Qahva (X)",
     "Shirinlik (Y)",
     "Xarajat (so‘m)",
     "TU (shartli)",
     "MUx/Px va MUy/Py"
    ],
    "rows": [
     [
      "3",
      "0,8",
      "≈ 50 000",
      "58",
      "muvozanatdan uzoq"
     ],
     [
      "2",
      "2,2",
      "≈ 50 000",
      "70",
      "yaqinlashmoqda"
     ],
     [
      "1",
      "3,6",
      "≈ 50 000",
      "64",
      "muvozanatdan uzoq"
     ]
    ]
   },
   "sampleAnalysis": "Jadvaldagi shartli foydalilik qiymatlariga ko‘ra, mijoz uchun eng yuqori umumiy foydalilik (TU=70) 2 dona qahva va 2,2 dona shirinlik kombinatsiyasida kuzatiladi — bu MUx/Px = MUy/Py shartiga eng yaqin nuqta bo‘lib, iste’molchi muvozanatini ifodalaydi. Grafikda bu nuqta byudjet chizig‘i bilan mos keluvchi befarqlik egri chizig‘ining urinish nuqtasiga to‘g‘ri keladi.",
   "result": "Byudjet chizig‘i tenglamasi va grafigi + TU/MU jadvali + optimal tanlov nuqtasi hisob-kitobi va befarqlik xaritasi sxemasi.",
   "topic": 4,
   "dependsOn": [
    1
   ]
  },
  {
   "no": 5,
   "title": "Daromad samarasi va almashtirish samarasi",
   "goal": "Mahsulot narxi o‘zgarishining iste’mol hajmiga bo‘lgan umumiy ta’sirini almashtirish samarasi (substitution effect) va daromad samarasiga (income effect) ajratib tahlil qilishni o‘rganish.",
   "tasks": [
    "4-topshiriqdagi mahsulotlardan birining (masalan, qahva) narxi pasayishi holatini oling va bu narx pasayishining umumiy ta’sirini (talab hajmi o‘zgarishi) aniqlang.",
    "Umumiy samarani sxematik/grafik tarzda ikki qismga ajrating: (a) nisbiy narz arzonlashuvi hisobiga iste’molni ko‘paytirish istagi (almashtirish samarasi), (b) real xarid qobiliyati oshishi hisobiga iste’molni o‘zgartirish (daromad samarasi).",
    "Mahsulotni oddiy tovar, quyi toifadagi tovar yoki Giffen tovari sifatida tasniflang va bu tasnifni asoslang.",
    "Ikkala samaraning yo‘nalishi (bir xil yoki qarama-qarshi) sub’ektning narx siyosatiga qanday amaliy xulosa berishini yozing."
   ],
   "sampleIntro": "Qahva narxi 14 000 so‘mdan 12 000 so‘mgacha pasayganda kuzatuv/so‘rovnoma natijalari (shartli):",
   "sampleTable": {
    "head": [
     "Samaraning turi",
     "Ta’siri (kunlik hajm o‘zgarishi)",
     "Izoh"
    ],
    "rows": [
     [
      "Almashtirish samarasi",
      "+28 dona",
      "Qahva nisbatan arzonlashgani uchun boshqa ichimliklar o‘rniga qahva ko‘proq tanlanadi"
     ],
     [
      "Daromad samarasi",
      "+12 dona",
      "Bo‘shagan mablag‘ hisobiga mijozlar umuman ko‘proq qahva ham iste’mol qiladi"
     ],
     [
      "Umumiy samara",
      "+40 dona (280→320)",
      "Ikkala samara bir yo‘nalishda — qahva oddiy tovar hisoblanadi"
     ]
    ]
   },
   "sampleAnalysis": "Almashtirish va daromad samaralari bir xil (musbat) yo‘nalishga ega bo‘lgani uchun qahva — oddiy (normal) tovar hisoblanadi: narx pasayganda uning iste’moli har ikkala mexanizm orqali ham o‘sadi. Agar daromad samarasi manfiy chiqib, umumiy o‘sishni qisman kamaytirganda mahsulot quyi toifaga, umuman teskari ishorali bo‘lganda esa Giffen tovariga misol bo‘lar edi.",
   "result": "Ikki samarani ajratib ko‘rsatuvchi jadval/grafik-sxema + mahsulot toifasi bo‘yicha asoslangan xulosa (0,5–1 bet).",
   "topic": 5,
   "dependsOn": [
    4
   ]
  },
  {
   "no": 6,
   "title": "Bozor va tavakkalchilik",
   "goal": "Noaniqlik sharoitida iqtisodiy qarorlar qabul qilish, kutilgan qiymat (expected value) tushunchasi va tavakkalchilikka munosabat (moyillik/betaraflik/qochish) turlarini o‘rganish.",
   "tasks": [
    "Sub’ektingiz duch keladigan asosiy tavakkalchilik turlarini aniqlang (bozor/talab tavakkalchiligi, narx tavakkalchiligi, xomashyo yetkazib berish tavakkalchiligi, valyuta tavakkalchiligi va h.k.).",
    "Kelajakdagi bir loyiha (yangi mahsulot, yangi filial, yangi jihoz sotib olish) uchun kamida ikkita ssenariy (muvaffaqiyatli/muvaffaqiyatsiz) va ularning ehtimolliklarini belgilang.",
    "Har bir ssenariy uchun kutilgan foyda/zararni hisoblang va kutilgan qiymatni (E = Σ pᵢ·Xᵢ) toping.",
    "Loyihaning tavakkalchilik darajasini (dispersiya yoki oddiy og‘ish orqali) baholang va tavakkalchilikni kamaytirish bo‘yicha kamida uchta chora (sug‘urta, diversifikatsiya, bosqichma-bosqich investitsiya va h.k.) taklif qiling."
   ],
   "sampleIntro": "“Jizzax Coffee House” yangi filial ochish loyihasini ko‘rib chiqadi:",
   "sampleTable": {
    "head": [
     "Ssenariy",
     "Ehtimollik",
     "Natija (foyda/zarar, mln so‘m)",
     "Ehtimollik × natija"
    ],
    "rows": [
     [
      "Muvaffaqiyatli",
      "0,6",
      "+30",
      "+18"
     ],
     [
      "Muvaffaqiyatsiz",
      "0,4",
      "−10",
      "−4"
     ],
     [
      "Kutilgan qiymat (E)",
      "1,0",
      "—",
      "+14 mln so‘m"
     ]
    ]
   },
   "sampleAnalysis": "Loyihaning kutilgan qiymati +14 mln so‘m bo‘lib, bu ijobiy ko‘rsatkich — o‘rtacha hisobda loyiha foydali. Biroq natijalar orasidagi katta farq (+30 va −10 mln) yuqori tavakkalchilikni bildiradi, shuning uchun kompaniyaga loyihani bosqichma-bosqich (pilot filial) boshlash, ijara shartnomasida moslashuvchan shartlar nazarda tutish va boshlang‘ich xarajatlarni sug‘urtalash tavsiya etiladi.",
   "result": "Ssenariylar jadvali + kutilgan qiymat hisobi + tavakkalchilikni baholash va uni kamaytirish bo‘yicha tavsiyalar (1 bet).",
   "topic": 6,
   "dependsOn": [
    1
   ]
  },
  {
   "no": 7,
   "title": "Ishlab chiqarish nazariyasi",
   "goal": "Ishlab chiqarish funksiyasi, umumiy (TP), o‘rtacha (AP) va chegaraviy (MP) mahsuldorlik ko‘rsatkichlarini hamda kamayuvchi chegaraviy unumdorlik qonunini amalda tahlil qilish.",
   "tasks": [
    "Bitta o‘zgaruvchan resursni (masalan, ishchilar/baristalar sonini) 0 dan 6–8 tagacha bosqichma-bosqich oshirib, har bir bosqichda umumiy mahsulot (TP) hajmini aniqlang.",
    "TP ma’lumotlari asosida o‘rtacha mahsuldorlik (AP = TP/L) va chegaraviy mahsuldorlik (MP = ΔTP/ΔL) ni hisoblab, jadval tuzing.",
    "TP, AP va MP grafiklarini chizing hamda kamayuvchi chegaraviy unumdorlik qonuni qaysi ishchidan boshlab amal qila boshlaganini aniqlang.",
    "Ishlab chiqarishning uch bosqichini (I, II, III bosqich) grafikda belgilab, korxona uchun optimal ishchilar sonini asoslang."
   ],
   "sampleIntro": "“Jizzax Coffee House”da baristalar sonini oshirib borish natijasida kunlik tayyorlanadigan qahva soni (shartli):",
   "sampleTable": {
    "head": [
     "Baristalar (L)",
     "TP (dona/kun)",
     "AP = TP/L",
     "MP (ΔTP)",
     "Izoh"
    ],
    "rows": [
     [
      "1",
      "70",
      "70,0",
      "70",
      "I bosqich"
     ],
     [
      "2",
      "150",
      "75,0",
      "80",
      "AP o‘smoqda"
     ],
     [
      "3",
      "216",
      "72,0",
      "66",
      "MP pasaya boshladi"
     ],
     [
      "4",
      "260",
      "65,0",
      "44",
      "kamayuvchi unumdorlik"
     ],
     [
      "5",
      "290",
      "58,0",
      "30",
      "kamayuvchi unumdorlik"
     ],
     [
      "6",
      "300",
      "50,0",
      "10",
      "III bosqichga yaqin"
     ]
    ]
   },
   "sampleAnalysis": "MP 2-baristadan keyin (80 dan 66 ga) pasaya boshlaydi — bu kamayuvchi chegaraviy unumdorlik qonunining amal qilish nuqtasi. AP esa 2-baristada maksimal (75,0) bo‘lib, undan keyin kamayadi. Korxona uchun optimal ishchilar soni odatda MP=AP nuqtasidan MP=0 nuqtasigacha bo‘lgan II bosqichda (taxminan 4–5 barista) joylashadi, chunki bu oraliqda resurslardan hali samarali foydalanilmoqda.",
   "result": "TP–AP–MP jadvali va uchta grafik (bitta koordinata tekisligida) + ishlab chiqarish bosqichlari tahlili va optimal ishchilar soni bo‘yicha xulosa.",
   "topic": 7,
   "dependsOn": [
    1
   ]
  },
  {
   "no": 8,
   "title": "Ishlab chiqarish xarajatlari",
   "goal": "Qisqa muddatli davrdagi xarajat turlarini (FC, VC, TC, AFC, AVC, ATC, MC) hisoblash, ularning o‘zaro bog‘liqligini va grafik shakllarini tahlil qilish.",
   "tasks": [
    "Sub’ektingiz uchun kamida 5 xil ishlab chiqarish hajmida doimiy (FC) va o‘zgaruvchan (VC) xarajatlarni aniqlang, TC = FC+VC ni hisoblang.",
    "Har bir hajm uchun o‘rtacha doimiy (AFC=FC/Q), o‘rtacha o‘zgaruvchan (AVC=VC/Q), o‘rtacha umumiy (ATC=TC/Q) va chegaraviy xarajat (MC=ΔTC/ΔQ) larni hisoblang.",
    "AFC, AVC, ATC va MC egri chiziqlarini bitta grafikda tasvirlang; MC ning ATC va AVC ning minimal nuqtalarini qanday kesib o‘tishini ko‘rsating.",
    "Xarajatlarning eng past nuqtasi (minimal ATC) ga mos keluvchi ishlab chiqarish hajmini aniqlang va bu korxona uchun nima anglatishini izohlang."
   ],
   "sampleIntro": "“Jizzax Coffee House” uchun oylik xarajatlar jadvali (Q — dona/oy, so‘mda):",
   "sampleTable": {
    "head": [
     "Q",
     "FC",
     "VC",
     "TC",
     "AFC",
     "AVC",
     "ATC",
     "MC"
    ],
    "rows": [
     [
      "3 000",
      "40 000 000",
      "21 000 000",
      "61 000 000",
      "13 333",
      "7 000",
      "20 333",
      "—"
     ],
     [
      "4 000",
      "40 000 000",
      "28 000 000",
      "68 000 000",
      "10 000",
      "7 000",
      "17 000",
      "7 000"
     ],
     [
      "5 000",
      "40 000 000",
      "35 000 000",
      "75 000 000",
      "8 000",
      "7 000",
      "15 000",
      "7 000"
     ],
     [
      "6 000",
      "40 000 000",
      "42 000 000",
      "82 000 000",
      "6 667",
      "7 000",
      "13 667",
      "7 000"
     ],
     [
      "7 000",
      "40 000 000",
      "49 000 000",
      "89 000 000",
      "5 714",
      "7 000",
      "12 714",
      "7 000"
     ]
    ]
   },
   "sampleAnalysis": "Ushbu misolda o‘zgaruvchan xarajat har bir mahsulot birligiga doimiy (7 000 so‘m) bo‘lgani uchun AVC va MC o‘zgarmas chiziq hosil qiladi, ATC esa AFC kamayishi hisobiga doimiy pasayadi. Real amaliyotda MC odatda U-simon shaklga ega bo‘lib, minimal ATC nuqtasida MC chizig‘i ATC ni kesib o‘tadi — bu nuqta korxona uchun eng samarali (bitta mahsulotga eng kam xarajat talab qiladigan) ishlab chiqarish hajmini bildiradi.",
   "result": "To‘liq xarajatlar jadvali (FC, VC, TC, AFC, AVC, ATC, MC) + xarajat egri chiziqlari grafigi + minimal ATC nuqtasi bo‘yicha xulosa.",
   "topic": 8,
   "dependsOn": [
    1
   ]
  },
  {
   "no": 9,
   "title": "Mukammal raqobatlashgan bozorda, qisqa muddatli oraliqda firma foydasini maksimallashtirish va uning taklifi",
   "goal": "MR=MC qoidasi asosida foyda maksimal bo‘ladigan ishlab chiqarish hajmini aniqlash va firmaning qisqa muddatli taklif egri chizig‘ini shakllantirish.",
   "tasks": [
    "Mukammal raqobat sharoitida P=MR ekanligini asoslab, bozor narxini (masalan, 8-topshiriqdagi ma’lumotlar asosida) belgilang.",
    "8-topshiriqdagi MC jadvalidan foydalanib, MR=MC shartini qanoatlantiradigan optimal hajmni (Q*) toping.",
    "Optimal hajmda jami daromad (TR=P×Q), jami xarajat (TC) va foyda (Π=TR−TC) ni hisoblang; foyda, zarar yoki nol-foyda holatini aniqlang.",
    "Bozor narxi AVC dan past tushgan holatni ko‘rib chiqing va firmaning yopilish nuqtasi (shutdown point) qayerda joylashishini tushuntirib, qisqa muddatli taklif egri chizig‘ini (MC ning AVC dan yuqori qismi) belgilang."
   ],
   "sampleIntro": "Bozor narxi P = 14 000 so‘m bo‘lganda, 8-topshiriqdagi xarajat jadvali asosida MR=MC nuqtasi:",
   "sampleTable": {
    "head": [
     "Q",
     "MC",
     "P (=MR)",
     "TR=P×Q",
     "Foyda (Π)"
    ],
    "rows": [
     [
      "5 000",
      "7 000",
      "14 000",
      "70 000 000",
      "−5 000 000"
     ],
     [
      "6 000",
      "7 000",
      "14 000",
      "84 000 000",
      "+2 000 000"
     ],
     [
      "7 000",
      "7 000",
      "14 000",
      "98 000 000",
      "+9 000 000"
     ]
    ]
   },
   "sampleAnalysis": "Berilgan misolda MC (7 000 so‘m) bozor narxidan (14 000 so‘m) doimiy past bo‘lgani uchun firma hajmni oshirishda davom etishi foydali — bu holat real hisob-kitoblarda MC ning ATC dan o‘tib ketadigan nuqtasigacha davom etadi. Amaliy topshiriqda talaba o‘z sub’ekti uchun MC ni P ga tenglashtiruvchi aniq Q* nuqtasini topib, shu nuqtada P>ATC bo‘lsa — ijobiy iqtisodiy foyda, P=ATC bo‘lsa — nol foyda, AVC<P<ATC bo‘lsa — zarar bilan ishlash, ammo faoliyatni davom ettirish, P<AVC bo‘lsa — ishlab chiqarishni to‘xtatish maqsadga muvofiqligini asoslashi kerak.",
   "result": "MR=MC hisob-kitob jadvali + optimal Q* va foyda hisobi + P, MC, AVC, ATC chiziqlari tasvirlangan grafik + yopilish nuqtasi tahlili.",
   "topic": 9,
   "dependsOn": [
    8
   ]
  },
  {
   "no": 10,
   "title": "Raqobatlashuvchi firma va tarmoqning uzoq muddatli davrdagi muvozanati, tarmoqning taklifi",
   "goal": "Uzoq muddatli davrda firmalarning bozorga kirishi/chiqishi jarayonini, nol iqtisodiy foyda holatidagi muvozanat shartini va tarmoq taklif egri chizig‘i turlarini o‘rganish.",
   "tasks": [
    "9-topshiriqdagi hisob-kitoblarga asoslanib, agar sub’ektingiz qisqa muddatda ijobiy iqtisodiy foyda olayotgan bo‘lsa, bu bozorga yangi raqobatchilarning kirishiga qanday turtki berishini tushuntiring.",
    "Yangi firmalar kirishi natijasida bozor taklifi va shu orqali bozor narxi qanday o‘zgarishini (kamayishini) sifat jihatidan tavsiflang.",
    "Uzoq muddatli muvozanat shartini (P = min LRAC, iqtisodiy foyda = 0) o‘z sub’ektingiz uchun izohlang: bu holatda narx qanday darajaga tushishi kerakligini baholang.",
    "Tarmog‘ingiz xarajatlar tarmog‘i turini (doimiy, o‘suvchi yoki kamayuvchi xarajatli tarmoq) aniqlab, tarmoq taklif egri chizig‘ining shaklini asoslang."
   ],
   "sampleIntro": "Jizzax shahrida yana ikkita yangi kofexona ochilishi natijasidagi prognoz (shartli):",
   "sampleTable": {
    "head": [
     "Holat",
     "Bozordagi firmalar soni",
     "Taxminiy narx",
     "Iqtisodiy foyda"
    ],
    "rows": [
     [
      "Boshlang‘ich (qisqa muddat)",
      "1",
      "14 000 so‘m",
      "ijobiy (+9 mln/oy)"
     ],
     [
      "O‘tish davri (yangi firmalar kirmoqda)",
      "2–3",
      "12 000–13 000 so‘m",
      "kamaymoqda"
     ],
     [
      "Uzoq muddatli muvozanat",
      "4+",
      "≈ min LRAC darajasida",
      "≈ 0 (normal foyda)"
     ]
    ]
   },
   "sampleAnalysis": "Boshlang‘ich bosqichda mavjud ijobiy iqtisodiy foyda yangi tadbirkorlarni jalb qiladi, natijada bozor taklifi ortadi va narx pasayadi. Bu jarayon narx har bir firmaning minimal uzoq muddatli o‘rtacha xarajatiga (min LRAC) tenglashguncha, ya’ni iqtisodiy foyda nolga tushguncha davom etadi. Agar xomashyo (kofe donasi, sut) narxi ko‘p firmalar talabi oshishi bilan birga qimmatlashsa — bu o‘suvchi xarajatli tarmoqqa, narx o‘zgarmasa — doimiy xarajatli tarmoqqa misol bo‘ladi va tarmoq taklif egri chizig‘i mos ravishda musbat qiyalikka ega yoki gorizontal bo‘ladi.",
   "result": "Bozorga kirish-chiqish jarayoni tavsifi + uzoq muddatli muvozanat sharti tahlili + tarmoq taklif egri chizig‘i turi bo‘yicha asoslangan xulosa (1–1,5 bet).",
   "topic": 10,
   "dependsOn": [
    9
   ]
  },
  {
   "no": 11,
   "title": "Raqobat va monopoliya",
   "goal": "Mukammal raqobat va monopoliya bozor tuzilmalarini taqqoslash, monopolist uchun narx va hajmni MR=MC qoidasi asosida aniqlash hamda monopoliya keltirib chiqaradigan sof yo‘qotishni (DWL) baholash.",
   "tasks": [
    "2-topshiriqdagi raqobat bozori muvozanatini (Pe, Qe) eslang va shu bozorda yagona sotuvchi (monopolist) qolgan farazi holatini ko‘rib chiqing.",
    "Monopolist uchun talab egri chizig‘i pasayuvchi bo‘lgani sababli MR<P ekanligini tushuntirib, MR=MC shartidan monopoliya narxi (Pm) va hajmini (Qm) shartli hisoblang.",
    "Raqobat va monopoliya holatlari uchun iste’molchi ortiqchaligi, ishlab chiqaruvchi ortiqchaligi va sof yo‘qotishni (deadweight loss, DWL) taqqoslovchi jadval tuzing.",
    "Monopoliyaning salbiy oqibatlarini kamaytirish bo‘yicha davlat tomonidan qo‘llaniladigan tartibga solish choralaridan (narx tavani, soliq, raqobatni rag‘batlantirish) kamida ikkitasini tavsiya qiling."
   ],
   "sampleIntro": "Raqobat va farazi monopoliya holatlarini taqqoslash (shartli ma’lumotlar):",
   "sampleTable": {
    "head": [
     "Ko‘rsatkich",
     "Mukammal raqobat",
     "Monopoliya",
     "Farq"
    ],
    "rows": [
     [
      "Narx",
      "14 000 so‘m",
      "18 000 so‘m",
      "+4 000 so‘m"
     ],
     [
      "Hajm (dona/kun)",
      "280",
      "200",
      "−80"
     ],
     [
      "Iste’molchi ortiqchaligi",
      "yuqori",
      "past",
      "kamaydi"
     ],
     [
      "Sof yo‘qotish (DWL)",
      "0",
      "shartli 240 000 so‘m/kun",
      "yuzaga keladi"
     ]
    ]
   },
   "sampleAnalysis": "Monopolist narxni raqobat darajasidan yuqori (18 000 so‘m) va hajmni past (200 dona) belgilab, o‘z foydasini maksimallashtiradi, ammo bu jamiyat uchun sof yo‘qotishga (DWL) olib keladi — chunki ba’zi iste’molchilar, ular to‘lashga tayyor bo‘lgan narx MC dan yuqori bo‘lsa-da, yuqori narx tufayli xariddan voz kechadi. Raqobatni rag‘batlantirish (yangi firmalarga bozorga kirish imkonini berish) yoki narx tavanini joriy etish orqali bu yo‘qotishni qisman kamaytirish mumkin.",
   "result": "Taqqoslash jadvali (raqobat vs monopoliya) + Pm, Qm hisob-kitobi + DWL ni ko‘rsatuvchi grafik sxema + tartibga solish bo‘yicha tavsiyalar (1–1,5 bet).",
   "topic": 11,
   "dependsOn": [
    2
   ]
  }
 ]
};
