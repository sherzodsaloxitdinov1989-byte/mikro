// AVTOMATIK YARATILGAN (scripts/build-exam-bank.py). Imtihon savollar bazasi: 400 ta. Faqat serverda — javob kalitlari brauzerga yuborilmaydi.
export const BANK = [
{
"t": 1,
"q": "Shartli iqtisodiyotda real YaIM 800 mlrd so‘m bo‘lib, yiliga 5% dan o‘smoqda. Shu sur’at saqlansa, 3 yildan keyin real YaIM qancha bo‘ladi?",
"o": [
"920,0 mlrd so‘m",
"882,0 mlrd so‘m",
"972,4 mlrd so‘m",
"926,1 mlrd so‘m"
],
"c": 3,
"w": "800 × 1,05^3 = 926,1. 920 — oddiy foiz (800 × 1,15), 882 — 2 yillik, 972,4 — 4 yillik o‘sish natijasi."
},
{
"t": 1,
"q": "Ochiq iqtisodiyotda eksport 72, import 108, YaIM 450 mlrd so‘m. Tashqi savdo kvotasi (X + IM) / YaIM × 100% bo‘yicha qancha?",
"o": [
"8%",
"40%",
"16%",
"24%"
],
"c": 1,
"w": "(72 + 108) / 450 = 0,40. 8% — sof eksportning moduli (36/450), 16% — faqat eksport, 24% — faqat import ulushi."
},
{
"t": 1,
"q": "Mamlakatda S = 150, T = 200, IM = 100, I = 180, G = 210, X = 90 (mlrd so‘m). Inyeksiyalar chiqib ketishlarga nisbatan qanday va firmalar nima qiladi?",
"o": [
"30 mlrd so‘m kam; zaxiralar ko‘payadi, ishlab chiqarish qisqaradi",
"30 mlrd so‘m ortiq; zaxiralar kamayadi, ishlab chiqarish kengayadi",
"40 mlrd so‘m ortiq; zaxiralar kamayadi, ishlab chiqarish kengayadi",
"10 mlrd so‘m kam; zaxiralar ko‘payadi, ishlab chiqarish qisqaradi"
],
"c": 1,
"w": "Chiqib ketishlar 150 + 200 + 100 = 450, inyeksiyalar 180 + 210 + 90 = 480. Inyeksiyalar 30 ga ko‘p: rejalashtirilgan xarajat ishlab chiqarishdan oshadi, zaxiralar kamayadi, firmalar ishlab chiqarishni kengaytiradi."
},
{
"t": 1,
"q": "Uch tarmoqli balansda xizmatlar tarmog‘ining yalpi mahsuloti 300 mlrd so‘m, u sanoatdan 50 mlrd so‘mlik oraliq mahsulot sarflagan (sanoatning yalpi mahsuloti 400, qishloq xo‘jaliginiki 200 mlrd so‘m). Xizmatlarning 1 so‘mlik mahsuloti uchun sanoatdan bevosita sarf necha tiyin?",
"o": [
"12,5 tiyin",
"16,7 tiyin",
"25,0 tiyin",
"3,3 tiyin"
],
"c": 1,
"w": "Koeffitsiyent tegishli ustundagi (xarid qiluvchi) tarmoq yalpi mahsulotiga bo‘linadi: 50 / 300 = 0,167. 12,5 — sanoat yalpi mahsulotiga (50/400), 25 — qishloq xo‘jaligi yalpi mahsulotiga (50/200) bo‘lingan noto‘g‘ri hisob."
},
{
"t": 1,
"q": "Uch tarmoq yalpi mahsuloti 300, 500 va 400 mlrd so‘m (jami 1200), yakuniy talab mos ravishda 140, 230 va 180 mlrd so‘m. Tarmoqlararo balansda (X = AX + Y) barcha tarmoqlarning oraliq iste’moli jami qancha?",
"o": [
"550 mlrd so‘m",
"650 mlrd so‘m",
"1 750 mlrd so‘m",
"1 200 mlrd so‘m"
],
"c": 1,
"w": "AX = X – Y: yalpi mahsulot 1200 dan yakuniy talab 140 + 230 + 180 = 550 ayirilsa, 650 qoladi. 550 — yakuniy talab (= jami qo‘shilgan qiymat) holos."
},
{
"t": 1,
"q": "Bir tarmoqli Leontyev modelida X = AX + Y, bunda to‘g‘ridan-to‘g‘ri xarajat koeffitsiyenti a = 0,25. Yakuniy talab 30 mlrd so‘mga oshsa, yalpi mahsulot qanchaga oshadi?",
"o": [
"30 mlrd so‘mga",
"40 mlrd so‘mga",
"37,5 mlrd so‘mga",
"7,5 mlrd so‘mga"
],
"c": 1,
"w": "ΔX = ΔY / (1 – a) = 30 / 0,75 = 40. 30 — zanjir reaksiyasi e’tiborga olinmagan; 37,5 = 30 × 1,25 va 7,5 = 30 × 0,25 — formulani noto‘g‘ri qo‘llash."
},
{
"t": 1,
"q": "Yil boshida davlat qarzi 240 mlrd so‘m edi. Byudjet taqchilligi 1-yil 20, 2-yil 30 mlrd so‘m bo‘ldi; 2-yil oxirida YaIM 1000 mlrd so‘m. Qarzning YaIMga nisbati qancha (taqchillik qarz hisobiga qoplanadi)?",
"o": [
"5%",
"24%",
"29%",
"26%"
],
"c": 2,
"w": "Qarz zaxira, taqchillik oqim: 240 + 20 + 30 = 290; 290 / 1000 = 29%. 5% — faqat taqchilliklar, 24% — boshlang‘ich qarz, 26% — faqat 1-yil taqchilligi qo‘shilgan."
},
{
"t": 1,
"q": "Ochiq iqtisodiyotda C = 620, I = 180, G = 210, X = 140, IM = 190 (mlrd so‘m). Yalpi xarajatlar Y = C + I + G + NX qancha?",
"o": [
"1 010 mlrd so‘m",
"1 150 mlrd so‘m",
"1 340 mlrd so‘m",
"960 mlrd so‘m"
],
"c": 3,
"w": "NX = 140 – 190 = –50; Y = 620 + 180 + 210 – 50 = 960. 1010 — NX hisobga olinmagan, 1150 — faqat eksport qo‘shilgan, 1340 — import ham qo‘shilgan."
},
{
"t": 1,
"q": "Ochiq iqtisodiyotda S = 130, I = 170, T = 190, G = 210 (mlrd so‘m). (S – I) + (T – G) = NX ayniyatiga ko‘ra sof eksport qancha?",
"o": [
"+60 mlrd so‘m",
"–20 mlrd so‘m",
"–60 mlrd so‘m",
"–40 mlrd so‘m"
],
"c": 2,
"w": "(130 – 170) + (190 – 210) = –40 – 20 = –60. –40 faqat xususiy sektor balansi, –20 faqat byudjet balansi; +60 ishorasi noto‘g‘ri."
},
{
"t": 1,
"q": "Ikki mamlakat daromadi bir xil boshlang‘ich qiymatdan boshlanadi: birinchisi yiliga 2%, ikkinchisi 7% o‘sadi. 35 yildan so‘ng ikkinchisining daromadi birinchisinikidan taxminan necha marta ko‘p?",
"o": [
"Taxminan 5,3 marta",
"Taxminan 3,5 marta",
"Taxminan 11 marta",
"Taxminan 35 marta"
],
"c": 0,
"w": "1,02^35 ≈ 2,0 va 1,07^35 ≈ 10,7; nisbat 10,7 / 2,0 ≈ 5,3. 3,5 — foizlar nisbati (7/2), 11 — faqat ikkinchi mamlakatning o‘z o‘sishi."
},
{
"t": 1,
"q": "Fiziokratlar «Iqtisodiy jadval»ida fermerlar 2 mlrd livr renta to‘laydi; yer egalari uning yarmini hunarmandlardan buyum sotib olishga sarflaydi. Bu 1 mlrd livr qaysi sinfga o‘tadi va fiziokratlar bu sinfga qanday baho bergan?",
"o": [
"Unumli sinfga; ular fiziokratlar fikricha, yerga tayanib sof mahsulot yaratadi",
"Unumsiz sinfga; ular qiymat yaratmaydi, faqat uning shaklini o‘zgartiradi",
"Mulkdorlar sinfiga; ular renta olgani uchun fiziokratlar bo‘yicha qiymat yaratuvchi hisoblangan",
"Unumsiz sinfga; ular fiziokratlar fikricha sof mahsulotning asosiy yaratuvchisi hisoblangan"
],
"c": 1,
"w": "Hunarmandlar va savdogarlar Kene bo‘yicha unumsiz (bepusht) sinf: faqat yer sof mahsulot yaratadi, hunarmandlar esa qiymatni faqat o‘zgartiradi."
},
{
"t": 1,
"q": "Retsessiyada omborlar sotilmagan mahsulotga to‘la, firmalar xodimlarni qisqartirmoqda, nominal ish haqi esa shartnomalar bo‘yicha pasaymayapti. Keynscha tahlilning eng izchil xulosasi qaysi?",
"o": [
"Qat’iy narx va ish haqi tufayli bozor tez tiklanmaydi; yalpi talabni oshirish kerak bo‘lishi mumkin",
"Sey qonuniga ko‘ra umumiy ortiqcha ishlab chiqarish bo‘lmaydi, shu sababli holat o‘z-o‘zidan tuzaladi va aralashuv shart emas",
"Bandlik faqat nominal ish haqi pasayganda tiklanadi, shuning uchun davlat ish haqini kamaytirishi lozim",
"Taklif o‘ziga mos talabni yaratadi, shu sababli ishlab chiqarishni yanada kengaytirish yetarli bo‘ladi"
],
"c": 0,
"w": "Keyns bo‘yicha ish haqi va narxlar qisqa muddatda qat’iy, bozor avtomatik tiklanmaydi, ishlab chiqarishni samarali (yalpi) talab belgilaydi."
},
{
"t": 1,
"q": "Keyns nazariyasi qoidalaridan qaysi biri NOTO‘G‘RI keltirilgan?",
"o": [
"Jamg‘arish va investitsiya tengligi foiz stavkasi orqali avtomatik ta’minlanadi",
"Iqtisodiyot uzoq vaqt to‘liq bandlikdan past darajadagi muvozanat holatida qolishi mumkin",
"Nominal ish haqi qisqa muddatda qat’iy bo‘lib, pastga qarab osongina egilmaydi",
"Ishlab chiqarish va bandlik darajasini asosan samarali (yalpi) talab belgilaydi"
],
"c": 0,
"w": "Keynsga ko‘ra jamg‘arish va investitsiya turli subyektlar tomonidan amalga oshiriladi, ularning tengligi foiz stavkasi orqali avtomatik ta’minlanmaydi — avtomatik tenglik klassik qarash."
},
{
"t": 1,
"q": "Quyidagilardan qaysi biri klassik maktab qarashlariga TEGISHLI EMAS?",
"o": [
"Qat’iy nominal ish haqi tufayli majburiy ishsizlik uzoq saqlanishi mumkin",
"Pul faqat ayirboshlash vositasi bo‘lib, real iqtisodiyotga ta’sir ko‘rsatmaydi (pulning neytralligi)",
"Narxlar, ish haqi va foiz stavkalari to‘liq egiluvchan bo‘lgani uchun bozorlar doimo muvozanatga intiladi",
"Har qanday ishlab chiqarish teng daromad yaratadi va bu daromad to‘liq sarflanadi"
],
"c": 0,
"w": "Qat’iy nominal ish haqi va majburiy ishsizlik g‘oyasi Keynsga xos; klassiklar to‘liq egiluvchan narxlar va pul neytralligidan kelib chiqadi."
},
{
"t": 1,
"q": "Markaziy bank pul massasini 8% ga oshirishini bir yil oldin ishonchli e’lon qildi; firmalar va ishchilar narx hamda ish haqini oldindan moslashtirdi. Qaysi yondashuv bashoratiga ko‘ra real ishlab chiqarish deyarli o‘zgarmaydi, narxlar esa oshadi?",
"o": [
"Yangi klassik maktab (ratsional kutishlar)",
"Keynschilik (yalpi talab ishlab chiqarishni belgilaydi)",
"Yangi keynschilik (menyu xarajatlari tufayli qat’iy narxlar)",
"Monetarizm (qisqa muddatda qisman qat’iy narxlar)"
],
"c": 0,
"w": "Yangi klassik maktabda kutilgan siyosat samarasiz: ratsional agentlar uni oldindan narxlarga kiritadi. Qolgan maktablarda qisqa muddatli qat’iylik tufayli real ta’sir saqlanadi."
},
{
"t": 1,
"q": "Iqtisodchi qisqa muddatli pasayishni texnologik shok bilan izohlaydi, narxlarni to‘liq egiluvchan deb biladi va barqarorlashtirish siyosatiga ehtiyoj yo‘q deydi. U qaysi maktab vakili?",
"o": [
"Real biznes-tsikllar nazariyasi (Kidland, Preskott)",
"Keynschilik (Xansen, Xiks): yalpi talab ishlab chiqarishni belgilaydi",
"Monetarizm (Fridmen, Shvarts): inflyatsiya har doim pul hodisasi",
"Yangi keynschilik (Mankyu, Romer): menyu xarajatlari va qat’iy narxlar"
],
"c": 0,
"w": "Real biznes-tsikllar nazariyasi: tebranishlar texnologik shoklardan, narxlar to‘liq egiluvchan, barqarorlashtirish shart emas."
},
{
"t": 1,
"q": "Non bozori modelida Q^d = D(P, Y), Q^s = S(P, P_u), muvozanat Q^d = Q^s. Un narxi (P_u) oshdi, aholi daromadi (Y) o‘zgarmadi. Qaysi xulosa to‘g‘ri?",
"o": [
"P_u endogen; taklif egri chizig‘i chapga siljiydi, muvozanat narxi ham, miqdori ham oshadi",
"P_u ekzogen; talab egri chizig‘i chapga siljiydi, muvozanat narxi ham, miqdori ham kamayadi",
"P_u ekzogen; taklif chapga siljiydi, narx oshadi, miqdor kamayadi",
"P_u ekzogen; taklif egri chizig‘i o‘ngga siljiydi, narx tushadi, miqdor esa oshadi"
],
"c": 2,
"w": "Un narxi model tashqarisida beriladi (ekzogen) va xarajatni oshirib, taklifni chapga suradi: P ↑, Q ↓. Talab egri chizig‘i faqat Y va narxga bog‘liq, shuning uchun siljimaydi."
},
{
"t": 1,
"q": "Modelda G, T, M ekzogen, Y, P, r, u esa endogen o‘zgaruvchilar. G o‘zgarganda muvozanatli Y, P, r, u qanday o‘zgarishini solishtirish qaysi tahlil usuliga mansub?",
"o": [
"Agregatlash: ko‘plab alohida kattaliklarni yagona umumlashgan ko‘rsatkichga birlashtirish usuli",
"Normativ tahlil: davlat nimani qilishi kerakligi haqidagi qadriyatga asoslangan baholash",
"Qiyosiy statika: ekzogen o‘zgarganda endogen muvozanat qanday o‘zgarishini solishtirish",
"Zaxira-oqim tahlili: vaqt momentidagi qoldiq bilan davr oqimini farqlash usuli"
],
"c": 2,
"w": "Ekzogen o‘zgaruvchi o‘zgarganda endogenlarning yangi muvozanat qiymatini taqqoslash qiyosiy statika deb ataladi."
},
{
"t": 1,
"q": "Byudjet taqchilligi yil davomida 40 dan 25 mlrd so‘mgacha kamaydi, ammo nolga tushmadi. Davlat qarziga ta’siri qanday?",
"o": [
"Qarz 15 mlrd so‘mga kamayadi, chunki taqchillik oldingi yildagidan qisqargan",
"Qarz o‘zgarmaydi, chunki taqchillik qisqargani qarz o‘sishini to‘xtatadi",
"Qarz kamaya boshlaydi, chunki zaxira ko‘rsatkichi oqimlarga bog‘liq emas",
"Qarz ko‘payishda davom etadi, ammo sekinroq: yiliga 25 mlrd so‘mga"
],
"c": 3,
"w": "Qarz zaxira, taqchillik oqim: taqchillik ijobiy ekan, qarz har yili uning miqdoricha ko‘payadi (qisqarayotgan taqchillik faqat o‘sish sur’atini sekinlashtiradi)."
},
{
"t": 1,
"q": "Quyidagi fikrlardan qaysi biri NORMATIV tahlilga misol?",
"o": [
"Inflyatsiya biroz oshsa ham, hukumat ishsizlikni kamaytirishi lozim",
"Markaziy bank asosiy stavkani oshirsa, bank kreditlari hajmi odatda qisqaradi",
"Neft kabi xomashyo narxining keskin oshishi odatda narxlar umumiy darajasini tezlashtiradi",
"Real YaIM nominal YaIMni YaIM deflyatoriga bo‘lish orqali hisoblanadi"
],
"c": 0,
"w": "Normativ tahlil «nima bo‘lishi kerak?» savoliga javob beradi va qadriyatlarga asoslanadi; qolganlari «nima bor?» ni tasvirlovchi pozitiv fikrlar."
},
{
"t": 1,
"q": "Narxlar qat’iy bo‘lgan qisqa muddatda barcha uy xo‘jaliklari bir vaqtda jamg‘arma ulushini oshirdi, investitsiya rejalari o‘zgarmadi. Tarkib xatosi mantig‘iga ko‘ra eng ehtimoliy oqibat qaysi?",
"o": [
"Yalpi talab va daromad qisqaradi, jamg‘arma rejalangandan kam oshadi yoki kamayadi",
"Jamg‘arma jamiyat darajasida ham har bir oiladagidek proporsional ravishda oshadi",
"Investitsiyalar jamg‘arma oshgani sababli avtomatik oshadi va daromad o‘zgarmaydi",
"Narxlar darhol pasayadi va real ishlab chiqarish hajmi o‘zgarmay qoladi"
],
"c": 0,
"w": "Bir oila uchun to‘g‘ri bo‘lgan (ko‘p tejash — boy bo‘lish) butun jamiyat uchun to‘g‘ri emas: talab qisqarib, daromadlar va jamg‘armaning o‘zi kamayishi mumkin («tejamkorlik paradoksi»)."
},
{
"t": 1,
"q": "Bir yilda barcha tovarlar narxi va barcha nominal daromadlar aynan 2 baravar oshdi. Qaysi xulosa to‘g‘ri?",
"o": [
"Nisbiy narxlar 2 baravar oshgan va real daromad 2 baravar kamaygan, ya’ni farovonlik pasaygan",
"Real daromad 2 baravar oshgan, chunki nominal daromad 2 baravar oshgan",
"Nisbiy narxlar va real daromad o‘zgarmagan; umumiy narxlar darajasining oshishi — inflyatsiya",
"Nisbiy narxlar o‘zgargan, shu sababli alohida bozorlarning mikroiqtisodiy muvozanati buzilgan"
],
"c": 2,
"w": "Hamma narxlar bir xil oshsa, nisbiy narxlar o‘zgarmaydi; nominal daromad ham xuddi shuncha oshgani uchun real daromad o‘zgarmaydi. Narxlar umumiy darajasi — makro tushuncha."
},
{
"t": 1,
"q": "Pul massasi 10% oshdi. Mankyu yondashuviga ko‘ra qisqa va uzoq muddatli ta’sirlar qanday?",
"o": [
"Ikkala muddatda ham real ishlab chiqarish 10% ga oshadi, chunki pul real kattalikka ta’sir qiladi",
"Qisqa muddatda faqat narxlar oshadi, uzoq muddatda esa real ishlab chiqarish ham oshadi",
"Uzoq muddatda faqat narxlar oshadi; qisqa muddatda qat’iy narxlar tufayli ishlab chiqarish ham oshishi mumkin",
"Ikkala muddatda ham faqat narxlar oshadi, chunki narxlar doim bir zumda moslashadi"
],
"c": 2,
"w": "Uzoq muddatda narxlar egiluvchan va pul neytral; qisqa muddatda narxlar «yopishqoq», shu sababli yalpi talab o‘zgarishi real ishlab chiqarishga ta’sir qiladi."
},
{
"t": 1,
"q": "Mankyu yondashuvidagi vaqt gorizontlariga oid qaysi juftlik to‘g‘ri tuzilgan?",
"o": [
"Qisqa muddat — narxlar egiluvchan, ishlab chiqarishni omillar belgilaydi (klassik model)",
"Uzoq muddat — narxlar qat’iy, ishlab chiqarishni yalpi talab belgilaydi (Keyns xochi)",
"Qisqa muddat — ishlab chiqarishni texnologiya va omillar belgilaydi (IS-LM modeli)",
"Juda uzoq muddat — o‘sishni kapital, aholi va texnologiya belgilaydi (Solou)"
],
"c": 3,
"w": "Qisqa muddat: qat’iy narxlar, yalpi talab (Keyns xochi, IS-LM); uzoq muddat: egiluvchan narxlar, omillar va texnologiya (klassik model); juda uzoq muddat: kapital, aholi, texnologiya o‘sishi (Solou)."
},
{
"t": 1,
"q": "Uy xo‘jaliklari daromadning qo‘shimcha qismini jamg‘ara boshladi, firmalarning investitsiya rejalari o‘zgarmadi. Doiraviy aylanish modeli bo‘yicha dastlabki oqibat qaysi?",
"o": [
"Inyeksiyalar chiqib ketishlardan ortadi; zaxiralar kamayib, ishlab chiqarish kengayadi",
"Chiqib ketishlar va inyeksiyalar bir xil miqdorda o‘zgaradi va YaIM o‘zgarmay qoladi",
"Firmalar investitsiyani jamg‘armaga teng miqdorda avtomatik oshiradi, ishlab chiqarish o‘zgarmaydi",
"Chiqib ketishlar inyeksiyalardan ortadi; zaxiralar to‘planib, ishlab chiqarish qisqaradi"
],
"c": 3,
"w": "S ortdi, I o‘zgarmadi: chiqib ketishlar > inyeksiyalar, talab ishlab chiqarishdan kam, zaxira to‘planadi va ishlab chiqarish qisqaradi. Jamg‘arma va investitsiya qarorlari turli subyektlarniki, shu sababli tenglik avtomatik emas."
},
{
"t": 1,
"q": "Qaysi tranzaksiya doiraviy aylanish modelida to‘g‘ri tasniflangan?",
"o": [
"Firmaning xorijdan stanok sotib olishi — eksport (inyeksiya)",
"Uy xo‘jaligining bank omonatiga qo‘ygan puli — investitsiya (inyeksiya)",
"Daromad solig‘ining davlatga to‘lanishi — davlat xaridlari (inyeksiya)",
"Xorijlik turistning mahalliy mehmonxonaga to‘lovi — eksport (inyeksiya)"
],
"c": 3,
"w": "Turistning xarajati — xizmat eksporti. Stanok xaridi — import (chiqib ketish); omonat — jamg‘arma (chiqib ketish); soliq — chiqib ketish."
},
{
"t": 1,
"q": "Quyidagi «vosita — siyosat shakli» juftliklaridan qaysi biri NOTO‘G‘RI?",
"o": [
"Valyuta intervensiyalari o‘tkazish — valyuta siyosati",
"Davlat xarajatlari va soliqlarni o‘zgartirish — fiskal siyosat",
"Majburiy zaxira normasini o‘zgartirish — fiskal siyosat",
"Import kvotalari va tariflarni belgilash — tashqi savdo siyosati"
],
"c": 2,
"w": "Majburiy zaxira normasi markaziy bankning monetar (pul-kredit) siyosati vositasi, fiskal siyosat emas."
},
{
"t": 1,
"q": "Markaziy bank inflyatsiyani jilovlash uchun asosiy stavkani oshirdi. Maqsadlar o‘rtasidagi qarama-qarshilik mantig‘iga ko‘ra qaysi yon ta’sir kutiladi?",
"o": [
"Yalpi talab oshadi va ishsizlik kamayadi, chunki qimmat kredit investitsiyani rag‘batlantiradi",
"Narxlar barqarorligi va to‘liq bandlik bir vaqtda mustahkamlanadi, qarama-qarshilik yo‘q",
"Eksport kamayadi, ammo investitsiyalar tezlashadi",
"Investitsiyalar va o‘sish sekinlashadi, ishsizlik oshish xavfi tug‘iladi"
],
"c": 3,
"w": "Foiz stavkasi oshirilsa, kredit qimmatlashib investitsiyalar va o‘sish sekinlashadi: inflyatsiyani jilovlash o‘sish va bandlik hisobiga kechishi mumkin."
},
{
"t": 1,
"q": "Statistika idorasi ishsizlikni hisoblashni XMT standartiga moslashtirdi va rasmiy ko‘rsatkich 6% dan 9% gacha «sakradi». Tahlilchi uchun qaysi xulosa to‘g‘ri?",
"o": [
"Ishsizlik haqiqatda 3 foiz bandga oshgan, shuning uchun iqtisodiyotda retsessiya boshlanganini tan olish zarur",
"Sakrashning bir qismi metodologik o‘zgarishdan bo‘lishi mumkin; bir xil metodologiyadagi qatorlar kerak",
"Metodologiya o‘zgargani muhim emas, shu sababli yangi va eski raqamlarni bevosita taqqoslash mumkin va to‘g‘ri",
"Bu o‘zgarish ishsizlikni oshirmaydi, ammo statistik jihatdan real YaIMni 3 foizga kamaytirib ko‘rsatadi"
],
"c": 1,
"w": "Makroiqtisodiy ma’lumotlarni tahlil qilishda statistik metodologiya o‘zgarishlarini doim hisobga olish zarur: sakrash real ishsizlikning shunchalik oshganini anglatmasligi mumkin."
},
{
"t": 2,
"q": "Paxta zanjiri (mln so‘m): fermer paxtani ip yigiruvchiga 200 ga sotadi (oraliq xarajati yo‘q); ip yigiruvchi ipni to‘quvchiga 350 ga; to‘quvchi matoni tikuvchiga 600 ga; tikuvchi tayyor kiyimni iste’molchiga 900 ga sotadi. Barcha bosqich sotuvlarini qo‘shish YaIMni qancha oshirib ko‘rsatadi (takroriy hisob)?",
"o": [
"900 mln so‘m",
"2 050 mln so‘m",
"1 150 mln so‘m",
"250 mln so‘m"
],
"c": 2,
"w": "Sotuvlar yig‘indisi 200 + 350 + 600 + 900 = 2050; YaIM = yakuniy mahsulot = qo‘shilgan qiymatlar yig‘indisi = 900. Takroriy hisob 2050 – 900 = 1150."
},
{
"t": 2,
"q": "Shartli mamlakat (mlrd so‘m): iste’mol 540; firmalarning asosiy kapitalga investitsiyasi 160; uy-joy qurilishi 40; zaxiralar o‘zgarishi –25; davlatning yakuniy iste’moli 120; davlat investitsiyalari 30 (G ga kiritiladi); eksport 210; import 260; pensiyalar 70; ikkinchi qo‘l avtomobillar savdosi 15. Xarajatlar usulida YaIM qancha?",
"o": [
"840 mlrd so‘m",
"815 mlrd so‘m",
"885 mlrd so‘m",
"785 mlrd so‘m"
],
"c": 1,
"w": "C = 540; I = 160 + 40 – 25 = 175; G = 120 + 30 = 150; NX = –50. YaIM = 540 + 175 + 150 – 50 = 815. 840 — zaxiralar o‘zgarishi tashlab ketilgan (manfiy), 885 — pensiyalar qo‘shilgan, 785 — davlat investitsiyasi kiritilmagan."
},
{
"t": 2,
"q": "YaIM 2000, xorijdan olingan omil daromadlari 25, xorijga to‘langan omil daromadlari 60, amortizatsiya 240, egri soliqlar 150, subsidiyalar 30 (mlrd so‘m). Milliy daromad (MD) qancha?",
"o": [
"1 575 mlrd so‘m",
"1 845 mlrd so‘m",
"1 580 mlrd so‘m",
"1 605 mlrd so‘m"
],
"c": 3,
"w": "YaMD = 2000 + 25 – 60 = 1965; SMD = 1965 – 240 = 1725; MD = 1725 – 150 + 30 = 1605. 1575 — subsidiya qo‘shilmagan, 1845 — amortizatsiya chegirilmagan, 1580 — xorijdan olingan omil daromadi hisobga olinmagan."
},
{
"t": 2,
"q": "Milliy daromad 1200; korporatsiyalar foyda solig‘i 90; taqsimlanmagan foyda 70; ijtimoiy sug‘urta ajratmalari 110; transfertlar 130; shaxsiy soliqlar 150; uy xo‘jaliklari iste’moli 790 (mlrd so‘m). Jamg‘arish normasi (S / Y_d) qancha?",
"o": [
"11,3%",
"10,0%",
"86,8%",
"13,2%"
],
"c": 3,
"w": "ShD = 1200 – 90 – 70 – 110 + 130 = 1060; Y_d = 1060 – 150 = 910; S = 910 – 790 = 120; 120 / 910 = 13,2%. 11,3% — shaxsiy daromadga, 10% — milliy daromadga nisbat, 86,8% — iste’mol ulushi."
},
{
"t": 2,
"q": "Bazis yil 2024 (deflyator 100): nominal YaIM 1 900 mlrd so‘m. 2025-yilda nominal YaIM 2 520 mlrd so‘m, YaIM deflyatori 126. Real YaIM o‘sishi qancha?",
"o": [
"32,6%",
"26,0%",
"5,3%",
"6,6%"
],
"c": 2,
"w": "Real YaIM 2025 = 2520 / 1,26 = 2000; o‘sish 2000 / 1900 – 1 = 5,3%. 32,6% — nominal o‘sish, 26% — narxlar o‘sishi, 6,6% — ularning oddiy ayirmasi."
},
{
"t": 2,
"q": "O‘tgan yilda sanoat YaIMning 28%, xizmatlar 44% ulushini egallagan. Joriy yilda sanoat 6%, xizmatlar 8,5% o‘sdi. Hissa = o‘tgan yil ulushi × o‘sish sur’ati formulasiga ko‘ra ikki tarmoqning YaIM o‘sishiga jami hissasi qancha?",
"o": [
"14,5 foiz punkti",
"7,25 foiz punkti",
"5,42 foiz punkti",
"3,74 foiz punkti"
],
"c": 2,
"w": "0,28 × 6 + 0,44 × 8,5 = 1,68 + 3,74 = 5,42. 14,5 — o‘sish sur’atlari yig‘indisi, 7,25 — oddiy o‘rtacha, 3,74 — faqat xizmatlar hissasi."
},
{
"t": 2,
"q": "Iste’mol savati: choy va non. Bazis yil: choy narxi 300, miqdori 10; non narxi 100, miqdori 60. Joriy yil: choy narxi 360, miqdori 8; non narxi 110, miqdori 70. Laspeyres indeksi (INI) bo‘yicha narxlar o‘sishi qancha?",
"o": [
"13,3%",
"12,6%",
"15,0%",
"12,9%"
],
"c": 0,
"w": "I_L = (360 × 10 + 110 × 60) / (300 × 10 + 100 × 60) = 10 200 / 9 000 = 1,133. 12,6% — Paashe (joriy miqdorlar), 15% — narx o‘zgarishlarining oddiy o‘rtachasi (20% va 10%), 12,9% — Fisher."
},
{
"t": 2,
"q": "Ikki tovarli iqtisodiyotda: bazis yilda olma (narx 200, miqdor 50) va sut (100; 80); joriy yilda olma (400; 30) va sut (110; 100). Fisher indeksi bo‘yicha narxlar o‘sishi qancha?",
"o": [
"60,0%",
"43,8%",
"51,7%",
"103,8%"
],
"c": 2,
"w": "I_L = 28 800 / 18 000 = 1,6; I_P = 23 000 / 16 000 = 1,4375; I_F = √(1,6 × 1,4375) = √2,3 ≈ 1,517 (51,7%). 60% — Laspeyres, 43,8% — Paashe, 103,8% — ikkalasining yig‘indisi."
},
{
"t": 2,
"q": "Ochiq iqtisodiyotda xususiy jamg‘arma S = 310, T = 270, G = 300, X = 180, IM = 240 (mlrd so‘m). I = S + (T – G) + (IM – X) ayniyatiga ko‘ra ichki investitsiyalar qancha?",
"o": [
"340 mlrd so‘m",
"220 mlrd so‘m",
"400 mlrd so‘m",
"370 mlrd so‘m"
],
"c": 0,
"w": "I = 310 + (270 – 300) + (240 – 180) = 310 – 30 + 60 = 340. 220 — tashqi jamg‘arma ayirilgan, 400 — davlat jamg‘armasi ishorasi teskari, 370 — davlat jamg‘armasi hisobga olinmagan."
},
{
"t": 2,
"q": "Nominal ish haqi 4 200 000 so‘mdan 4 725 000 so‘mga (12,5%) oshdi, INI 100 dan 115 ga ko‘tarildi. Real ish haqi qanday o‘zgardi?",
"o": [
"12,5% ga oshdi",
"Taxminan 2,5% ga kamaydi",
"Taxminan 2,2% ga kamaydi",
"Taxminan 2,5% ga oshdi"
],
"c": 2,
"w": "Real kattalik = nominal / indeks: 1,125 / 1,15 = 0,978, ya’ni –2,2%. –2,5% — ayirma yaqinlashuvi (12,5 – 15), lekin aniq hisobda 2,2%."
},
{
"t": 2,
"q": "Yil boshida mamlakat kapital zaxirasi 1 200 mlrd so‘m, yalpi investitsiyalar 260, amortizatsiya 290 mlrd so‘m. Yil oxirida kapital zaxirasi va takror ishlab chiqarish turi qaysi?",
"o": [
"1 230 mlrd so‘m; kengaytirilgan takror ishlab chiqarish",
"1 170 mlrd so‘m; qisqargan takror ishlab chiqarish",
"1 460 mlrd so‘m; kengaytirilgan takror ishlab chiqarish",
"1 200 mlrd so‘m; oddiy takror ishlab chiqarish"
],
"c": 1,
"w": "Sof investitsiya = 260 – 290 = –30 < 0, kapital 1200 – 30 = 1170 ga kamayadi. 1460 — yalpi investitsiya to‘liq qo‘shilgan."
},
{
"t": 2,
"q": "Avtomobil zavodi joriy yil 100 avtomobil ishlab chiqarib, 85 tasini 20 mln so‘mdan sotdi, 15 tasi omborda qoldi. Keyingi yil zavod umuman ishlab chiqarmadi va ombordagi 15 tasini sotdi. Zavodning YaIMga qo‘shgan hissasi (mln so‘m) 1-yil va 2-yil bo‘yicha qancha?",
"o": [
"1-yil 1700; 2-yil 300",
"1-yil 2000; 2-yil 300",
"1-yil 1700; 2-yil 0",
"1-yil 2000; 2-yil 0"
],
"c": 3,
"w": "1-yil: C = 85 × 20 = 1700 va zaxiralarga investitsiya 15 × 20 = 300, jami 2000. 2-yil: C = +300, zaxira o‘zgarishi –300, jami 0. YaIM sotilgan emas, ishlab chiqarilgan mahsulotni o‘lchaydi."
},
{
"t": 2,
"q": "Xususiy sektorda S – I = +15, davlat byudjetida T – G = –40 (mlrd so‘m). (S – I) + (T – G) = NX ayniyatiga ko‘ra sof eksport qancha?",
"o": [
"–25 mlrd so‘m",
"+25 mlrd so‘m",
"–55 mlrd so‘m",
"+55 mlrd so‘m"
],
"c": 0,
"w": "NX = 15 + (–40) = –25: byudjet taqchilligining bir qismini xususiy jamg‘arma qoplaydi, qolgani savdo balansi taqchilligida ko‘rinadi."
},
{
"t": 2,
"q": "Joriy yilda (mln so‘m): shu yili qurilgan yangi uy 500 ga sotildi; 4 yillik ikkinchi qo‘l avtomobil 80 ga sotildi (dallol haqi 4); aksiyalar 200 ga sotildi (broker haqi 3); pensiyalar 50 to‘landi. Bu operatsiyalarning YaIMga kiruvchi qismi qancha?",
"o": [
"587 mln so‘m",
"787 mln so‘m",
"837 mln so‘m",
"507 mln so‘m"
],
"c": 3,
"w": "Faqat yangi uy (500), dallol (4) va broker (3) xizmat haqi kiradi: 507. Ikkinchi qo‘l avtomobil qiymati, qimmatli qog‘ozlar va transfertlar (pensiya) YaIMga kirmaydi."
},
{
"t": 2,
"q": "Koreya kompaniyasining filiali O‘zbekistonda uch yildan beri ishlaydi; joriy yilda 100 mlrd so‘m qo‘shilgan qiymat yaratdi, shundan 20 mlrd so‘mi foyda sifatida Koreyaga o‘tkazildi. Bu operatsiyalarning O‘zbekiston ko‘rsatkichlariga ta’siri qanday?",
"o": [
"YaIMga 80, YaMDga 80, chunki xorijga o‘tkazilgan foyda YaIMdan ham chiqariladi",
"YaIMga 100, YaMDga 80, chunki foyda xorijga to‘lanadigan omil daromadi",
"YaIMga 100, YaMDga 100, chunki filial rezident va foyda hisobga olinmaydi",
"YaIMga 0, YaMDga 80, chunki filial egasi xorijiy kompaniya hisoblanadi"
],
"c": 1,
"w": "Filial rezident, mahsulot hududda yaratilgan: YaIM +100. Foydaning xorijga o‘tkazilgan qismi xorijga to‘langan omil daromadi: YaMD = 100 – 20 = 80."
},
{
"t": 2,
"q": "Hukumat pensiyalarni 30 mlrd so‘mga oshirdi; pensionerlar qo‘shimcha daromadning 80% ini sarfladi. Xarajatlar usulida birinchi bosqichda qanday o‘zgarish ro‘y beradi?",
"o": [
"G o‘zgarmaydi, C 24 ga oshadi",
"G 30 ga oshadi, C o‘zgarmaydi",
"G 30 ga, C 24 ga oshadi",
"G 6 ga, C 24 ga oshadi"
],
"c": 0,
"w": "Pensiya — transfert, G tarkibiga kirmaydi; u uy xo‘jaliklari daromadini oshiradi, sarflangan qismi (0,8 × 30 = 24) C da aks etadi."
},
{
"t": 2,
"q": "Uy xo‘jaligi chet eldan 5 mln so‘mlik televizor sotib oldi. Xarajatlar usulida bu operatsiyaning sof ta’siri qanday?",
"o": [
"C +5, NX –5, YaIM o‘zgarmaydi",
"C +5, NX o‘zgarmaydi, YaIM +5",
"C o‘zgarmaydi, NX –5, YaIM –5",
"C +5, NX +5, YaIM +10"
],
"c": 0,
"w": "Import iste’mol xarajatlari C ga kirib qolgani uchun NX da ayiriladi: ichki ishlab chiqarish o‘zgarmagani sababli YaIM ham o‘zgarmaydi."
},
{
"t": 2,
"q": "Quyidagi uch holatning qaysi tasnifi to‘g‘ri? (a) oila shu yili qurilgan yangi uyni sotib oldi; (b) oila 10 yillik uyni sotib oldi; (c) oila o‘z uyida yashaydi.",
"o": [
"(a) iste’mol C; (b) investitsiya I; (c) YaIMda hisobga olinmaydi, chunki ijara to‘lanmaydi",
"(a) I; (b) YaIMga kirmaydi (faqat dallol xizmati); (c) shartli ijara, C ga",
"(a) investitsiya I; (b) investitsiya I; (c) YaIMda hisobga olinmaydi, chunki ijara to‘lanmaydi",
"(a) iste’mol C; (b) YaIMga kirmaydi (faqat dallol xizmati); (c) shartli ijara, C ga"
],
"c": 1,
"w": "Yangi uy sotib olish uy-joy investitsiyasi; eski uy savdosi joriy ishlab chiqarish emas; o‘z uyida yashash shartli ijara sifatida baholanib iste’molga kiritiladi."
},
{
"t": 2,
"q": "Firmalar mahsulotni rejalashtirganidan sekin sotdi va ombor kutilmaganda to‘ldi. Yopiq iqtisodiyotda S ≡ I ayniyati qanday saqlanadi?",
"o": [
"Ayniyat buziladi, chunki rejalashtirilgan I jamg‘armadan kam bo‘lib qoladi va u faqat muvozanatda tiklanadi",
"Zaxira ko‘payishi iste’mol C ga kiradi, shu sababli haqiqiy S va I teng bo‘lmaydi",
"Rejalashtirilmagan zaxira ko‘payishi haqiqiy I ga kiradi, shuning uchun haqiqiy S va I teng",
"Zaxira hisobga olinmaydi, chunki sotilmagan mahsulot YaIMga kirmaydi; ayniyat boshqa yo‘l bilan saqlanadi"
],
"c": 2,
"w": "Ayniyat ta’rifdan kelib chiqadi va doim bajariladi: sotilmagan mahsulot zaxirasiga investitsiya YaIMga kiradi. Rejalashtirilgan va haqiqiy kattaliklar farqi muvozanat sharti bilan bog‘liq."
},
{
"t": 2,
"q": "Ikki hodisa: (1) davlat sotib oladigan mahalliy harbiy samolyot narxi oshdi; (2) xorijdan keltirilgan avtomobillar narxi oshdi. Ular qaysi indekslarda aks etadi?",
"o": [
"(1) — faqat INIda; (2) — faqat deflyatorda, chunki import mahalliy ishlab chiqarishga kiradi",
"(1) — faqat deflyatorda; (2) — faqat INIda, import tovarlari uchun",
"Ikkalasi ham ikkala indeksda aks etadi, chunki ikkala indeks ham narxlar o‘zgarishini o‘lchaydi",
"(1) — ikkala indeksda; (2) — faqat deflyatorda, chunki import YaIMga kiradi"
],
"c": 1,
"w": "Deflyator mamlakatda ishlab chiqarilgan barcha tovarlarni (davlat xaridlari ham) qamraydi, importni qamramaydi; INI esa faqat iste’molchi savatidagi tovarlarni, importni ham qamraydi."
},
{
"t": 2,
"q": "YaIMning farovonlik o‘lchovi sifatidagi kamchiliklari haqidagi qaysi fikr NOTO‘G‘RI?",
"o": [
"Bo‘sh vaqt qiymati va nobozor faoliyat (uy mehnati) YaIMda aks etmaydi",
"YaIM ishlab chiqarilgan, ammo sotilmagan mahsulotni hisobga olmaydi",
"Daromadlar taqsimotidagi tengsizlik o‘rtacha ko‘rsatkichda ko‘rinmay qoladi",
"Atrof-muhit holati yomonlashishi va tabiiy resurslarning kamayishi hisobga olinmaydi"
],
"c": 1,
"w": "Sotilmagan mahsulot zaxiralarga investitsiya sifatida YaIMga kiradi — YaIM ishlab chiqarilgan mahsulotni o‘lchaydi. Qolgan uchtasi darslikdagi haqiqiy kamchiliklar."
},
{
"t": 2,
"q": "Milliy daromaddan shaxsiy daromadga (ShD) o‘tishda quyidagi elementlardan qaysi biri chegirilmaydi, aksincha qo‘shiladi?",
"o": [
"Korporatsiyalar foydasiga solig‘i",
"Taqsimlanmagan foyda",
"Ijtimoiy sug‘urta ajratmalari",
"Transfert to‘lovlari"
],
"c": 3,
"w": "ShD = MD – foyda solig‘i – taqsimlanmagan foyda – ijtimoiy ajratmalar + transfertlar."
},
{
"t": 2,
"q": "Qaysi ko‘rsatkich YaIMga bo‘sh vaqt va uy mehnati qiymatini qo‘shib, «zararli» xarajatlarni chegiradi?",
"o": [
"Inson taraqqiyoti indeksi (BMT Taraqqiyot dasturi)",
"Jini koeffitsiyenti (daromadlar tengsizligi)",
"Iqtisodiy farovonlik o‘lchovi (MEW)",
"Xarid qobiliyati pariteti bo‘yicha aholi jon boshiga YaIM"
],
"c": 2,
"w": "Nordxaus va Tobin (1972) MEWi: YaIM + bo‘sh vaqt + uy mehnati – «zararli» xarajatlar. ITI daromad, ta’lim va umr davomiyligini, Jini tengsizlikni o‘lchaydi."
},
{
"t": 2,
"q": "Doimiy (bazis yil) narxlarida xizmatlarning YaIMdagi ulushi 40% edi. Keyingi yilda real YaIM 6% ga, xizmatlar sohasi real 8% ga o‘sdi. Yangi ulush qancha?",
"o": [
"Taxminan 40,8%",
"Taxminan 42,4%",
"Taxminan 43,2%",
"Taxminan 40,0%"
],
"c": 0,
"w": "Yangi ulush = 0,40 × 1,08 / 1,06 = 0,4075. 42,4 va 43,2 — bo‘luvchi hisobga olinmagan (0,4 × 1,06; 0,4 × 1,08), 40,0 — ulush o‘zgarmagan deb faraz qilingan."
},
{
"t": 2,
"q": "Iste’molchilar qimmatlashgan tovardan arzonlashgan tovarga o‘tdi (nisbiy narxlar o‘zgardi). Narxlar o‘sishini baholash bo‘yicha qaysi munosabat to‘g‘ri?",
"o": [
"Laspeyres (INI) < Fisher < Paashe (deflyator)",
"Fisher < Paashe (deflyator) < Laspeyres (INI)",
"Paashe (deflyator) = Laspeyres (INI) < Fisher",
"Paashe (deflyator) < Fisher < Laspeyres (INI)"
],
"c": 3,
"w": "Laspeyres qayd etilgan bazis savatdan foydalanadi va almashtirishni hisobga olmay inflyatsiyani oshirib ko‘rsatadi; Paashe joriy miqdorlar bilan kamaytirib ko‘rsatadi; Fisher ikkalasining o‘rta geometrigi."
},
{
"t": 2,
"q": "Daromadlar usulida dehqon xo‘jaliklari va o‘zini o‘zi band qilganlar daromadi nima uchun «yalpi aralash daromad» deb ataladi?",
"o": [
"Chunki ular ham ish haqi, ham transfert to‘lovlari oladi, ikkalasi birgalikda hisoblanadi",
"Chunki mehnat va kapital daromadini bir-biridan ajratib bo‘lmaydi",
"Chunki daromadning bir qismi xorijdan, bir qismi ichki manbalardan olinadi",
"Chunki daromadning bir qismi soliqqa tortiladi, boshqa qismi soliqdan ozod etiladi"
],
"c": 1,
"w": "Bunday egalarda mehnat va kapital daromadini ajratib bo‘lmaydi, shuning uchun yalpi foydadan alohida «aralash daromad» deyiladi."
},
{
"t": 2,
"q": "Iqtisodiyot jami bo‘yicha o‘zgarmagan yalpi qo‘shilgan qiymat (YaQQ) bilan mahsulotlarga subsidiyalarni oshirdi. Ishlab chiqarish usuli formulasiga ko‘ra bozor narxlaridagi YaIM qanday o‘zgaradi?",
"o": [
"Oshadi, chunki subsidiya ishlab chiqarishni rag‘batlantiradi va YaQQ ga qo‘shiladi",
"O‘zgarmaydi, chunki YaQQ o‘zgarmagan",
"Oshadi, chunki subsidiya davlat xaridlari (G) tarkibiga kiradi",
"Kamayadi, chunki YaIM = ΣYaQQ + (mahsulotlarga soliqlar – subsidiyalar)"
],
"c": 3,
"w": "Formulada subsidiyalar ayiriladi: YaQQ o‘zgarmaganda subsidiyalar oshsa, mahsulotlarga sof soliqlar va YaIM kamayadi."
},
{
"t": 2,
"q": "Nominal YaIM 2024-yilda 600 trln, 2025-yilda 693 trln so‘m bo‘ldi. YaIM deflyatori shu davrda 100 dan 110 ga oshdi. Real YaIMning o‘sish sur’ati qancha?",
"o": [
"5,0%",
"15,5%",
"10,0%",
"5,5%"
],
"c": 0,
"w": "Real YaIM_2025 = 693 / 1,10 = 630; o‘sish = 630 / 600 – 1 = 5%. Nominal o‘sish (15,5%) narx ta’sirini ham o‘z ichiga oladi."
},
{
"t": 2,
"q": "Yalpi ichki mahsulot 500, amortizatsiya ajratmalari 60, bilvosita soliqlar 40, subsidiyalar 5 (chet eldan sof omil daromadlari nolga teng). Omil qiymatidagi sof ichki mahsulot (milliy daromad) qancha?",
"o": [
"445",
"405",
"440",
"400"
],
"c": 1,
"w": "Sof ichki mahsulot = 500 – 60 = 440; omil qiymatida = 440 – 40 + 5 = 405. Subsidiya qo‘shiladi, bilvosita soliq ayriladi."
},
{
"t": 3,
"q": "Potensial YaIM 1800 trln so'm, haqiqiy YaIM esa 1710 trln so'm. YaIM uzilishi (output gap) foizda qancha va u nimani bildiradi?",
"o": [
"–5,0%: retsession uzilish, ishsizlik tabiiy darajadan yuqori",
"–5,3%: retsession uzilish, ishsizlik tabiiy darajadan yuqori",
"+5,0%: inflyatsion uzilish, iqtisodiyot qizib ketgan",
"–10,0%: retsession uzilish, ishsizlik tabiiy darajadan past"
],
"c": 0,
"w": "Uzilish = (Y – Y*) / Y* × 100% = (1710 – 1800) / 1800 × 100% = –5,0%. Maxraj potensial YaIM bo'lishi kerak (haqiqiy emas); manfiy uzilish – resurslar to'liq ishlatilmayotgani."
},
{
"t": 3,
"q": "Potensial YaIM 2000 trln so'm, YaIM uzilishi –3%, aholi 40 mln kishi. Retsessiya tufayli yo'qotilgan mahsulot aholi jon boshiga yiliga qancha?",
"o": [
"1,2 mln so'm",
"48,5 mln so'm",
"1,5 mln so'm",
"0,6 mln so'm"
],
"c": 2,
"w": "Haqiqiy YaIM = 2000 × (1 – 0,03) = 1940 trln. Yo'qotish = 2000 – 1940 = 60 trln; 60 trln / 40 mln = 1,5 mln so'm. Uzilish potensial YaIMdan hisoblanadi, shuning uchun 3% ni haqiqiy YaIMdan olish xato."
},
{
"t": 3,
"q": "Real YaIMning chorak o'zgarishlari: 1-chorak +0,6%, 2-chorak –0,3%, 3-chorak –0,5%, 4-chorak +0,2%. Soddalashtirilgan mezonga (ketma-ket ikki chorak qisqarish) ko'ra iqtisodiyot retsessiyada ekani qaysi chorak natijasi e'lon qilinganda tasdiqlanadi?",
"o": [
"2-chorak, chunki qisqarish aynan shu chorakda boshlangan",
"4-chorak, chunki faqat to'liq yil natijasi bo'yicha aniqlanadi",
"Mezon bajarilmagan, chunki 4-chorakda o'sish tiklangan",
"3-chorak, chunki 2- va 3-chorak ketma-ket qisqargan"
],
"c": 3,
"w": "Mezon ikki ketma-ket chorakda qisqarishni talab qiladi: 2-chorak (–0,3%) yolg'iz yetarli emas, 3-chorakda (–0,5%) ikkinchi qisqarish yuz berib, mezon bajariladi. Keyingi tiklanish mezonning bajarilganini bekor qilmaydi."
},
{
"t": 3,
"q": "Samuelson modelida Y_t = c(1 + v) Y_t–1 – cv Y_t–2 + A. Quyidagi parametrlar to'plamlaridan qaysi birida tebranishlar so'nib, iqtisodiyot muvozanatga qaytadi?",
"o": [
"c = 0,8; v = 1,5",
"c = 0,6; v = 1,5",
"c = 0,5; v = 2,0",
"c = 0,9; v = 1,2"
],
"c": 1,
"w": "Shart cv < 1. c = 0,6; v = 1,5 uchun cv = 0,9 < 1 (so'nuvchi). Qolganlarida: 0,8×1,5 = 1,2 > 1 (kuchayuvchi), 0,5×2 = 1 (doimiy amplituda), 0,9×1,2 = 1,08 > 1 (kuchayuvchi)."
},
{
"t": 3,
"q": "Multiplikator-akselerator modelida c = 0,8; v = 1; A = 20. Ikki oldingi davrda daromad Y_t–2 = 110 va Y_t–1 = 120 bo'lgan. Joriy davr daromadi Y_t qancha?",
"o": [
"100",
"126",
"104",
"124"
],
"c": 3,
"w": "Y_t = c(1+v)Y_t–1 – cvY_t–2 + A = 1,6×120 – 0,8×110 + 20 = 192 – 88 + 20 = 124. Tekshiruv: C_t = 96, C_t–1 = 88, I_t = 1×(96–88) = 8, Y_t = 96 + 8 + 20 = 124. Y_t–1 va Y_t–2 o'rni almashtirilsa 100 chiqadi."
},
{
"t": 3,
"q": "Iqtisodiyotda faollik cho'qqilari 1999, 2007, 2014 va 2021-yillarda kuzatilgan. Tsiklning o'rtacha davomiyligi va uning eng ehtimoliy turi qaysi?",
"o": [
"Taxminan 7,3 yil – Kitchin tsikli",
"22 yil – Kuznets tsikli",
"Taxminan 5,5 yil – Kitchin tsikli",
"Taxminan 7,3 yil – Jyuglyar tsikli"
],
"c": 3,
"w": "Cho'qqidan cho'qqigacha: (2021 – 1999) / 3 ta oraliq = 7,33 yil, bu 7–11 yillik Jyuglyar (asosiy kapitalni yangilash) tsikliga mos. Oraliqlar soni cho'qqilar sonidan bitta kam."
},
{
"t": 3,
"q": "Mamlakatda real YaIM ketma-ket uch yil davomida mos ravishda 6%, 5% va 4% ga qisqardi. Umumiy qisqarish va uning tasnifi qanday?",
"o": [
"15,0%: depressiya belgilariga ega",
"Taxminan 14,3%: depressiya belgilariga ega",
"Taxminan 14,3%: oddiy retsessiya, chunki har yilgi pasayish 10% dan kam",
"Taxminan 4,9% (o'rtacha): oddiy retsessiya"
],
"c": 1,
"w": "Qisqarishlar ko'paytmasi: 0,94 × 0,95 × 0,96 = 0,8573; umumiy qisqarish = 14,3%. Foizlar qo'shilmaydi. 10% dan ortiq pasayish va bir necha yil davomiyligi depressiya belgilaridir."
},
{
"t": 3,
"q": "Boshida YaIM uzilishi nolga teng edi. Bir yilda haqiqiy YaIM 3% ga, potensial YaIM esa 4% ga o'sdi. Yil oxirida YaIM uzilishi taxminan qancha?",
"o": [
"+1,0%",
"0% (ikkalasi ham o'sdi)",
"–1,0%",
"–4,0%"
],
"c": 2,
"w": "Y/Y* = 1,03/1,04 = 0,9904, ya'ni uzilish ≈ –0,96% ≈ –1,0%. Haqiqiy YaIM o'ssa ham, potensialdan sekinroq o'sishi retsession uzilishni hosil qiladi."
},
{
"t": 3,
"q": "Retsessiyada YaIM 1000 dan 970 trln so'mgacha pasaydi. Shu davrda iste'mol 650 dan 645 gacha, davlat xarajatlari o'zgarmay, sof eksport 40 dan 37 gacha kamaydi. Investitsiyalar qancha o'zgargan?",
"o": [
"-22 trln so'm",
"–25 trln so'm",
"–38 trln so'm",
"–8 trln so'm"
],
"c": 0,
"w": "Y = C + I + G + NX bo'yicha ΔY = ΔC + ΔI + ΔG + ΔNX: –30 = –5 + ΔI + 0 – 3, bundan ΔI = –22. Pasayishning qariyb 73% i investitsiyalarga to'g'ri keladi – ular iste'moldan ancha kuchli tebranadi."
},
{
"t": 3,
"q": "Tadbirkorlar kayfiyati yomonlashib, avtonom investitsiyalar 20 birlikka kamaydi. Iste'molga chegaraviy moyillik 0,75 bo'lsa, multiplikator samarasini hisobga olganda daromad qanchaga o'zgaradi?",
"o": [
"–60",
"–20",
"–80",
"–15"
],
"c": 2,
"w": "Multiplikator k = 1/(1 – MPC) = 1/0,25 = 4; ΔY = 4 × (–20) = –80. –60 – MPC/(1–MPC) formulasini qo'llash natijasi (u faqat qo'shimcha, indutsirlangan o'zgarish), –15 esa MPC × ΔI."
},
{
"t": 3,
"q": "Importga bog'liq iqtisodiyotda yil davomida real YaIM 3% pasaydi, umumiy narxlar darajasi esa 9% oshdi; sababi xomashyo importi narxining keskin o'sishi. Bu vaziyat qaysi shokka mos keladi?",
"o": [
"Salbiy talab shoki: yalpi talab chapga siljigan, narxlar va ishlab chiqarish birga pasaygan bo'lishi kerak edi",
"Salbiy taklif shoki: yalpi taklif chapga siljigan, stagflyatsiya",
"Ijobiy talab shoki: yalpi talab o'ngga siljigan, narx ham ishlab chiqarish ham oshishi kerak edi",
"Ijobiy taklif shoki: yalpi taklif o'ngga siljigan, narxlar pasayib ishlab chiqarish oshishi kerak edi"
],
"c": 1,
"w": "Talab shoklari ishlab chiqarish va narxlarni bir yo'nalishda, taklif shoklari esa qarama-qarshi yo'nalishda o'zgartiradi. Ishlab chiqarish ↓, narxlar ↑ – salbiy taklif shokining (stagflyatsiyaning) belgisi."
},
{
"t": 3,
"q": "Quyidagi hodisalardan qaysi biri yalpi talab shoki hisoblanmaydi?",
"o": [
"Ish haqining keskin oshishi",
"Investorlar kayfiyatining keskin yomonlashishi",
"Markaziy bankning pul taklifini qisqartirishi",
"Xorijiy talabning kutilmagan pasayishi"
],
"c": 0,
"w": "Ish haqining keskin oshishi ishlab chiqarish xarajatlarini oshirib, yalpi taklif egri chizig'ini siljitadi (taklif shoki). Qolgan uchtasi yalpi talabni siljituvchi omillar."
},
{
"t": 3,
"q": "Mamlakatni salbiy taklif shoki (neft narxi o'sishi) qamrab oldi: ishlab chiqarish pasaydi, inflyatsiya tezlashdi. Hukumat yalpi talabni rag'batlantirishga qaror qildi. Mankyuning tahliliga ko'ra natija qanday bo'ladi?",
"o": [
"Ishlab chiqarish qisman tiklanadi, inflyatsiya esa tezlashadi",
"Ishlab chiqarish ham, narxlar ham pasayadi",
"Narxlar o'zgarmay, ishlab chiqarish to'liq tiklanadi va shok yo'qoladi",
"Ishlab chiqarish yanada qisqaradi, inflyatsiya esa pasayadi"
],
"c": 0,
"w": "Taklif shoki siyosatchini tanlov oldiga qo'yadi: talabni rag'batlantirish ishlab chiqarishni tiklaydi, ammo inflyatsiyani kuchaytiradi; cheklash esa inflyatsiyani jilovlaydi, lekin retsessiyani chuqurlashtiradi."
},
{
"t": 3,
"q": "Hukumat maslahatchisi: «Joriy pasayish unumdorlikning kutilmagan pasayishiga iqtisodiyotning optimal moslashuvidir, shuning uchun fiskal rag'batlantirish kerak emas». Bu pozitsiya qaysi nazariyaga mos?",
"o": [
"Keynscha investitsiyalar beqarorligi nazariyasi",
"Real biznes-tsikllar nazariyasi (Kidland, Preskott)",
"Monetaristik nazariya (Fridman)",
"Kam iste'mol nazariyasi (Gobson)"
],
"c": 1,
"w": "Real biznes-tsikllar nazariyasiga ko'ra retsessiya «bozor muvaffaqiyatsizligi» emas, texnologik shokka samarali moslashuv; shu sababli barqarorlashtirish siyosati zarur emas. Keynschilar, monetaristlar va kam iste'molchilar esa tsiklni nomutanosiblik yoki xatolar bilan izohlaydi."
},
{
"t": 3,
"q": "Tsikl turlari va ularning asosiy sabablaridan qaysi juftlik NOTO'G'RI?",
"o": [
"Kondratyev to'lqinlari – tovar zaxiralari va axborot kechikishi",
"Kitchin tsikllari – tovar-moddiy zaxiralarning o'zgarishi",
"Jyuglyar tsikllari – asosiy kapitalni ommaviy yangilash",
"Kuznets tsikllari – qurilish va demografik o'zgarishlar"
],
"c": 0,
"w": "Zaxiralar va axborot kechikishi Kitchin tsiklining sababi. Kondratyev uzun to'lqinlari fundamental texnologik inqiloblar (texnologik ukladlar) va infratuzilma bilan bog'liq."
},
{
"t": 3,
"q": "Tsiklga munosabat bo'yicha tarmoq tasniflaridan qaysi biri to'g'ri?",
"o": [
"Lombardlar – tsiklik (protsiklik)",
"Avtomobilsozlik – kontrtsiklik",
"Qayta tayyorlash kurslari – tsiklik (protsiklik)",
"Kommunal xizmatlar – atsiklik (neytral)"
],
"c": 3,
"w": "Kommunal xizmatlar zaruriy, shuning uchun tsiklga kam sezgir. Lombardlar va qayta tayyorlash kurslari retsessiyada faollashadi (kontrtsiklik), avtomobilsozlik esa kuchli tsiklik tarmoq."
},
{
"t": 3,
"q": "Daromad vaqtincha 5% ga kamayganda iste'mol YaIMga nisbatan ancha barqaror qoladi, investitsiyalar esa keskin qisqaradi. Bunga eng to'g'ri izoh qaysi?",
"o": [
"Iste'mol daromadga umuman bog'liq emas, investitsiyalar esa daromadga to'liq va bir xil bog'liq",
"Iste'mol jamg'arma hisobiga tekislanadi; investitsiya esa kutishlar, foiz va akseleratorga kuchli bog'liq",
"Investitsiya tovarlari narxi iste'mol tovarlari narxiga qaraganda ancha tezroq o'zgaradi",
"Davlat investitsiyalarni doimo kafolatlaydi, iste'molni esa kafolatlamaydi"
],
"c": 1,
"w": "Iste'molni vaqt bo'yicha tekislash (Fridman, Modilyani) iste'molni barqaror qiladi. Investitsiya kelajakdagi foyda kutishlariga va akselerator samarasiga bog'liq, shu sababli talabning kichik o'zgarishi ham undan kuchli tebranish keltirib chiqaradi."
},
{
"t": 3,
"q": "Quyidagi iqtisodiy ko'rsatkichlardan qaysi biri ilg'or (yetakchi) indikator hisoblanmaydi?",
"o": [
"Qurilishga ruxsatnomalar soni",
"Sanoat ishlab chiqarishi hajmi",
"Iste'molchilar ishonchi indeksi",
"Aksiyalar bozori indeksi"
],
"c": 1,
"w": "Sanoat ishlab chiqarishi, real YaIM, bandlik va chakana savdo – mos (bir vaqtdagi) indikatorlar. Ruxsatnomalar, ishonch indeksi, aksiyalar indeksi tsiklni oldindan ko'rsatadi."
},
{
"t": 3,
"q": "Sanoat PMI indeksi ikki oy ichida 56 dan 51 ga tushdi. Qaysi xulosa to'g'ri?",
"o": [
"Faollik hali kengaymoqda, ammo sur'ati sekinlashgan",
"Sanoat faolligi qisqarish bosqichiga o'tdi, chunki indeks ikki oyda pasaygan",
"Faollik tobora kuchayib bormoqda, chunki indeks hali 50 dan yuqori",
"Retsessiya allaqachon boshlangan, chunki indeks pasaygan"
],
"c": 0,
"w": "PMI > 50 – faollik kengaymoqda, < 50 – qisqarmoqda. 56 → 51 o'sish sur'ati sekinlashganini bildiradi, ammo qiymat hali 50 dan yuqori; bu sekinlashuvning ilg'or signali bo'lishi mumkin, lekin retsessiyaning isboti emas."
},
{
"t": 3,
"q": "Real YaIM tub nuqtadan o'tib, o'sishni boshladi. Tsikl bosqichlari jadvaliga ko'ra ishsizlik haqida nima deyish to'g'ri?",
"o": [
"Ishsizlik hali oshishi mumkin, chunki u kechikuvchi indikator",
"Ishsizlik tub nuqtada minimal bo'ladi va YaIM o'sishi bilan darhol pasayadi",
"Ishsizlik YaIM bilan bir vaqtda o'zgaradi, chunki u mos (bir vaqtdagi) indikator",
"Ishsizlik ilg'or indikator sifatida YaIM o'sishidan oldin pasayadi"
],
"c": 0,
"w": "Jadvalga ko'ra ishsizlik tub nuqtada maksimal darajaga kechikib yetadi. Firmalar tiklanishning barqarorligiga ishonch hosil qilgunga qadar yangi xodim yollamaydi."
},
{
"t": 3,
"q": "A mamlakatida saylovga 8 oy qolganda soliqlar kamaytirilib, davlat xarajatlari oshirildi. Qaysi nazariya buni izohlaydi va saylovdan keyin nimani kutish mumkin?",
"o": [
"Nordxausning siyosiy biznes-tsikli; saylovdan keyin yanada kuchliroq rag'batlantirish",
"Shumpeterning innovatsion nazariyasi; saylovdan keyin yangi texnologik to'lqin boshlanadi",
"Nordxausning siyosiy biznes-tsikli; saylovdan keyin cheklovchi siyosat",
"Fridmenning monetar nazariyasi; saylovdan keyin pul taklifining doimiy o'sishi"
],
"c": 2,
"w": "Nordxaus (1975): hukumatlar saylov oldidan iqtisodiyotni rag'batlantiradi, saylovdan keyin esa inflyatsiyani jilovlash uchun cheklovchi siyosatga o'tadi – saylov tsikliga mos tebranishlar paydo bo'ladi."
},
{
"t": 3,
"q": "Quyidagi nazariyalardan qaysi biri tsikllarni asosan ichki (endogen) mexanizm bilan izohlaydi?",
"o": [
"Samuelsonning multiplikator-akselerator modeli",
"Shumpeterning innovatsiyalar to'lqini nazariyasi",
"Jevonsning Quyosh dog'lari gipotezasi",
"Nordxausning siyosiy biznes-tsikl nazariyasi"
],
"c": 0,
"w": "Multiplikator va akselerator o'zaro ta'siri tizim ichida tebranish hosil qiladi. Innovatsiyalar, Quyosh dog'lari va siyosiy hodisalar tizimdan tashqaridagi (ekzogen) omillar sifatida qaraladi."
},
{
"t": 3,
"q": "Darslikda «Buyuk mo'tadillik» (1980-yillar o'rtasi – 2007) sabablari sifatida keltirilmagan omilni toping.",
"o": [
"Markaziy banklar siyosatining takomillashuvi",
"Just-in-time tizimlari orqali zaxiralarni boshqarishning yaxshilanishi",
"Iqtisodiyotda xizmatlar ulushining oshishi",
"Tovar zaxiralarini boshqarishning yomonlashuvi"
],
"c": 3,
"w": "Sabablar: markaziy bank siyosati, zaxiralarni boshqarish (just-in-time) yaxshilanishi, xizmatlar ulushi oshishi va «omad». Zaxira boshqaruvining yomonlashuvi – aksincha ta'sir qiladigan omil."
},
{
"t": 3,
"q": "Mankyu bo'yicha 2008–2009-yillardagi inqirozning to'g'ri ketma-ketligi qaysi?",
"o": [
"Banklar zarari → uy-joy pufagi → ipoteka to'lamaslik → kredit tanqisligi va yalpi talab qisqarishi",
"Kredit tanqisligi → uy-joy narxlari pasayishi → qimmatli qog'ozlar qadrsizlanishi → ipoteka to'lamaslik",
"Uy-joy pufagi → narxlar pasayishi va ipoteka to'lamaslik → murakkab qimmatli qog'ozlar qadrsizlanishi, banklar zarari → kredit tanqisligi va yalpi talab qisqarishi",
"Yalpi talab qisqarishi → banklar zarari → uy-joy pufagi → ipoteka to'lamaslik"
],
"c": 2,
"w": "Past stavkalar va subprime kreditlar uy-joy narxlarini oshirdi (pufak), 2006-yildan narxlar tushib, qarzdorlar to'lay olmadi; ipotekaga asoslangan qimmatli qog'ozlar qadrsizlanib, banklar (Lehman) zarar ko'rdi; so'ng kredit tanqisligi yalpi talabni qisqartirdi."
},
{
"t": 3,
"q": "A mamlakatdagi bank tizimi muammolari tufayli xalqaro banklar B mamlakatdan kreditlarni qaytarib oldi; B da kreditlar qimmatlashdi. Shokning mamlakatlararo tarqalishining qaysi kanali ishlamoqda?",
"o": [
"Savdo kanali",
"Ishonch kanali",
"Moliyaviy kanal",
"Fiskal kanal"
],
"c": 2,
"w": "Kapital oqimlarining keskin o'zgarishi va xalqaro banklar orqali tarqalish – moliyaviy kanal. Savdo kanali – hamkorga talab kamayishi, ishonch kanali – bir bozordagi vahimaning boshqasiga o'tishi."
},
{
"t": 3,
"q": "Iqtisodiyotda YaIM uzilishi +2% va inflyatsion bosim kuchayib bormoqda. Qaysi antitsiklik choralar to'plami mos?",
"o": [
"Soliqlarni kamaytirish va pul taklifini ko'paytirish",
"Davlat xarajatlarini oshirish va foiz stavkasini pasaytirish",
"Davlat xarajatlarini qisqartirish, foiz stavkasini oshirish",
"Soliqlarni kamaytirish va foiz stavkasini oshirish"
],
"c": 2,
"w": "Ijobiy uzilish – iqtisodiyot qizib ketgan; yuksalishda cheklovchi siyosat qo'llanadi: xarajatlarni qisqartirish, soliqlarni oshirish, stavkani ko'tarish. Boshqa to'plamlar rag'batlantiruvchi yoki o'zaro qarama-qarshi."
},
{
"t": 3,
"q": "Ishlab chiqarish past darajada barqarorlashgan, foiz stavkalari va narxlar eng past, ishsizlik yuqori, ortiqcha zaxiralar asta-sekin kamayib bormoqda. Klassik to'rt bosqichli tsiklning qaysi bosqichi?",
"o": [
"Inqiroz (krizis)",
"Jonlanish (tiklanish)",
"Yuksalish (bum)",
"Depressiya (turg'unlik)"
],
"c": 3,
"w": "Inqirozda ishlab chiqarish keskin qisqaradi, depressiyada esa past darajada barqarorlashadi. Jonlanishda asosiy kapitalni yangilash va investitsiyalar o'sishi boshlanadi – bu belgilar bu yerda yo'q."
},
{
"t": 3,
"q": "Tsiklning tub nuqtasida makroiqtisodiy ko'rsatkichlarning qaysi kombinatsiyasi jadvalga mos keladi?",
"o": [
"Investitsiyalar minimal, byudjet taqchilligi minimal, korxonalar foydasi minimal",
"Investitsiyalar yuqori, ishsizlik maksimal, foiz stavkalari past",
"Inflyatsiya yuqori, foiz stavkalari yuqori, tovar zaxiralari yuqori",
"Investitsiyalar minimal, byudjet taqchilligi maksimal, korxonalar foydasi minimal"
],
"c": 3,
"w": "Tub nuqtada soliq tushumlari minimal, ijtimoiy xarajatlar yuqori bo'lgani uchun byudjet taqchilligi maksimal; investitsiyalar va foyda minimal. Inflyatsiya va stavkalarning yuqoriligi cho'qqiga xos."
},
{
"t": 3,
"q": "Talab pasayganda yirik monopol firmalar narxlarni deyarli o'zgartirmay, ishlab chiqarishni qisqartiradi. Bu tsikl uchun qanday oqibat keltiradi?",
"o": [
"Narxlar tez pasayib, ishlab chiqarish darhol tiklanadi",
"Narxlar pastga kam moslashadi, tsiklning real ta'siri kuchayadi",
"Tsikl amplitudasi kamayadi, chunki narxlar barqaror bo'ladi",
"Tsikl faqat nominal ko'rsatkichlarda aks etadi, ishsizlik o'zgarmaydi"
],
"c": 1,
"w": "Narxlar qat'iy bo'lsa, moslashuv narx orqali emas, hajm orqali sodir bo'ladi: ishlab chiqarish va bandlik ko'proq tebranadi."
},
{
"t": 4,
"q": "Mehnatga layoqatli yoshdagi aholi 18,0 mln, band aholi 12,6 mln, ishsizlar 0,9 mln kishi. Ishsizlik darajasi qancha?",
"o": [
"5,0%",
"7,1%",
"6,7%",
"70,0%"
],
"c": 2,
"w": "L = E + U = 13,5 mln; u = U/L × 100% = 0,9/13,5 × 100% = 6,7%. Maxrajga mehnatga layoqatli aholi (5,0%) yoki band aholi (7,1%) qo'yish xato; 70,0% – bandlik darajasi."
},
{
"t": 4,
"q": "Retsessiyada ishchi kuchi 14 mln (12 mln band, 2 mln ishsiz). Keyin 0,5 mln ishsiz ish topishdan umidini uzib, faol qidirishni to'xtatdi; boshqa hech narsa o'zgarmadi. Yangi ishsizlik darajasi qancha?",
"o": [
"10,7%",
"12,5%",
"14,3%",
"11,1%"
],
"c": 3,
"w": "Umidini uzganlar ishchi kuchidan chiqadi: U = 1,5 mln, L = 12 + 1,5 = 13,5 mln; u = 1,5/13,5 = 11,11%. Boshlang'ich daraja 14,29% edi – statistika haqiqiy holatdan yaxshiroq ko'rinadi. Maxrajni 14 yoki 12 deb olish xato."
},
{
"t": 4,
"q": "Mankyu statsionar modelida har oy band aholining 1,5% i ishini yo'qotadi, ishsizlarning 28,5% i ish topadi. Tabiiy ishsizlik darajasi qancha?",
"o": [
"5,3%",
"5,0%",
"1,5%",
"10,0%"
],
"c": 1,
"w": "u* = s/(s+f) = 0,015/(0,015 + 0,285) = 0,015/0,3 = 5,0%. s/f = 5,3% – maxrajda s ni unutish xatosi."
},
{
"t": 4,
"q": "Mankyu modelida har oy s = 0,03 band aholi ishini yo'qotadi. Onlayn bandlik platformalari tufayli ish topish darajasi f = 0,27 dan f = 0,57 gacha oshdi. Tabiiy ishsizlik darajasi necha foiz punktga o'zgaradi?",
"o": [
"2,5 punktga kamayadi",
"5,0 punktga kamayadi",
"10,0 punktga kamayadi",
"5,0 punktga oshadi"
],
"c": 1,
"w": "Avval u* = 0,03/0,30 = 10,0%, keyin 0,03/0,60 = 5,0%; farq 5,0 punkt. f ortishi u* ni pasaytiradi."
},
{
"t": 4,
"q": "O'rtacha ish muddati 40 oy, o'rtacha ishsizlik davomiyligi esa 2 oy. Mankyu statsionar modeliga ko'ra tabiiy ishsizlik darajasi taxminan qancha?",
"o": [
"5,0%",
"2,5%",
"4,8%",
"9,1%"
],
"c": 2,
"w": "s = 1/40 = 0,025, f = 1/2 = 0,5; u* = s/(s+f) = 0,025/0,525 = 4,76% ≈ 4,8%. 2/40 = 5,0% – davomiyliklar nisbatini olish yaqin, ammo noto'g'ri; aniq formula s/(s+f)."
},
{
"t": 4,
"q": "Viloyatda yangi sanoat klasteri 3000 ta ish o'rni yaratdi. Iste'molga chegaraviy moyillik 0,75 bo'lsa, bandlik multiplikatori orqali boshqa tarmoqlarda qo'shimcha qancha ish o'rni paydo bo'ladi?",
"o": [
"12000",
"2250",
"9000",
"7500"
],
"c": 2,
"w": "k_N = 1/(1 – 0,75) = 4; jami ΔN = 4 × 3000 = 12000. Birlamchi 3000 ni chiqarsak, qo'shimcha 9000 ish o'rni. 12000 – jami bandlik o'sishi, savol esa qo'shimcha o'rinlarni so'raydi."
},
{
"t": 4,
"q": "Haqiqiy ishsizlik 9%, tabiiy ishsizlik 6%, Ouken koeffitsiyenti β = 2, haqiqiy YaIM 1880 trln so'm. Potensial YaIM qancha?",
"o": [
"1992,8 trln so'm",
"1767,2 trln so'm",
"2000 trln so'm",
"2256 trln so'm"
],
"c": 2,
"w": "Uzilish = –2 × (9 – 6) = –6%. (Y – Y*)/Y* = –0,06, bundan Y* = Y/0,94 = 2000. 1880 × 1,06 = 1992,8 – uzilishni haqiqiy YaIMdan hisoblash xatosi."
},
{
"t": 4,
"q": "Mankyu varianti bo'yicha %ΔY = 3% – 2 × Δu. Bir yilda real YaIM atigi 1% ga o'sgan bo'lsa, ishsizlik darajasi qanday o'zgargan?",
"o": [
"1 foiz punktga kamaygan",
"1 foiz punktga oshgan",
"2 foiz punktga oshgan",
"O'zgarmagan, chunki YaIM o'sgan"
],
"c": 1,
"w": "1 = 3 – 2Δu, bundan Δu = +1 punkt. «Normal» 3% dan past o'sish ishsizlikni oshiradi, hatto YaIM o'ssa ham."
},
{
"t": 4,
"q": "Potensial YaIM 2400 trln so'm, haqiqiy ishsizlik 7%, tabiiy ishsizlik 5%, Ouken koeffitsiyenti 2,5. Ishsizlik tufayli yiliga qancha mahsulot yo'qotiladi?",
"o": [
"48 trln so'm",
"60 trln so'm",
"180 trln so'm",
"120 trln so'm"
],
"c": 3,
"w": "Uzilish = –2,5 × (7 – 5) = –5%; yo'qotish = 0,05 × 2400 = 120 trln. 48 – β ni qo'llamasdan 2 punktni olish; 60 – 2,5% ni olish."
},
{
"t": 4,
"q": "Mamlakatda ichki ishchi kuchi 15 mln (ishsizlar 0,7 mln). Xorijdagi 1,5 mln mehnat migranti qaytib keldi va hech biri ish topa olmadi. Ishsizlik darajasi qancha bo'ladi?",
"o": [
"14,7%",
"13,3%",
"9,1%",
"4,7%"
],
"c": 1,
"w": "Qaytganlar ishchi kuchi va ishsizlar tarkibiga qo'shiladi: u = (0,7 + 1,5)/(15 + 1,5) = 13,33%. Faqat suratga qo'shib, maxrajni o'zgartirmaslik xato (14,7%). Bu migratsiyaning «xavfsizlik klapani» roli."
},
{
"t": 4,
"q": "Mehnatga layoqatli yoshdagi aholi 20 mln, band aholi 14 mln, ishsizlar 1 mln. Bandlik darajasi qancha?",
"o": [
"70,0%",
"75,0%",
"93,3%",
"6,7%"
],
"c": 0,
"w": "Bandlik darajasi = band aholi / mehnatga layoqatli aholi = 14/20 = 70%. 75% – iqtisodiy faollik darajasi (15/20), 93,3% – ishchi kuchidagi band ulushi, 6,7% – ishsizlik darajasi."
},
{
"t": 4,
"q": "Yalpi talab chuqur pasaygan, tovarlar bozorida sotuv kam. Hukumat ish haqini umumiy 10% ga kamaytirishni taklif qilmoqda. Keynscha konsepsiyaga ko'ra eng ehtimoliy oqibat qaysi?",
"o": [
"Uy xo'jaliklari daromadi va iste'mol talabi kamayib, firmalar sotuvi qisqaradi; bandlik oshmasligi yoki yanada pasayishi mumkin",
"Mehnat narxining arzonlashuvi mehnatga talabni oshiradi va majburiy ishsizlik tezda yo'qoladi",
"Real ish haqi muvozanat darajasiga tushadi, shuning uchun ixtiyoriy ishsizlik kamayadi",
"Firmalarning xarajati kamayadi, shuning uchun sotuv hajmidan qat'i nazar xodim yollash oshadi"
],
"c": 0,
"w": "Keyns: bandlikni tovarlar bozoridagi samarali talab belgilaydi; ish haqi ayni paytda uy xo'jaliklari daromadi. Umumiy pasayish talabni qisqartiradi va vaziyatni yomonlashtirishi mumkin. Qolgan javoblar Piguning neoklassik mantig'i."
},
{
"t": 4,
"q": "Samarali ish haqi nazariyasi mexanizmlariga KIRMAYDIGAN tasdiqni toping.",
"o": [
"Yuqori ish haqi kadrlar qo'nimsizligini va yangi xodimlarni o'qitish xarajatlarini kamaytiradi",
"Raqobat tufayli firmalar ish haqini doim muvozanat darajasigacha tushiradi va xarajat kamayadi",
"Yuqori ish haqi ish joyiga ko'proq malakali nomzodlarni jalb qiladi",
"Ishdan ayrilish qimmatroq bo'lgani uchun ishchilarning mas'uliyati ortadi"
],
"c": 1,
"w": "Samarali ish haqida firmalar ixtiyoriy ravishda ish haqini bozor darajasidan yuqori to'laydi (unumdorlik, salomatlik, qo'nimsizlik, saralash, mas'uliyat). Ish haqini doim muvozanatga tushirish – Pigu mantig'i va bu mexanizm emas."
},
{
"t": 4,
"q": "Uchta holat: (1) boshqa shaharga ko'chgan oila boshlig'i yangi ish qidirmoqda; (2) avtomatlashtirish tufayli kasbi talabdan chiqqan operator; (3) yalpi talab pasayishi tufayli zavod ishlab chiqarishni qisqartirib, payvandchini bo'shatdi. Ishsizlik turlari bo'yicha to'g'ri tasnif qaysi?",
"o": [
"(1) friksion, (2) tarkibiy, (3) tsiklik",
"(1) tarkibiy, (2) friksion, (3) tsiklik",
"(1) friksion, (2) tsiklik, (3) tarkibiy",
"(1) tsiklik, (2) tarkibiy, (3) friksion"
],
"c": 0,
"w": "Ko'chish va ish qidirish – friksion; kasb talabining texnologik yo'qolishi – tarkibiy; yalpi talab pasayishi – tsiklik ishsizlik."
},
{
"t": 4,
"q": "Quyidagilardan qaysi biri tarkibiy (strukturaviy) ishsizlikka misol BO'LMAYDI?",
"o": [
"Avtomatlashtirish natijasida kasbi talabdan chiqqan kassir",
"Yaxshiroq ish izlab o'z xohishi bilan ishdan ketgan mutaxassis",
"Eng kam ish haqi muvozanatdan yuqori bo'lgani sabab ish topa olmayotgan tajribasiz yoshlar",
"Kasaba uyushmasi yuqori ish haqi kelishgani uchun ish topa olmayotgan autsayderlar"
],
"c": 1,
"w": "Yaxshiroq ish izlab ixtiyoriy ketish – friksion ishsizlik. Qolganlari malaka-talab nomuvofiqligi yoki ish haqining qat'iyligi (eng kam ish haqi, kasaba uyushmalari) bilan bog'liq tarkibiy ishsizlik."
},
{
"t": 4,
"q": "Iqtisodiyotda haqiqiy ishsizlik 3,8%, tabiiy ishsizlik 5,0%. Qaysi xulosa to'g'ri?",
"o": [
"Tsiklik ishsizlik +1,2 punkt: iqtisodiyot retsessiyada",
"Tabiiy ishsizlik 3,8% ga tushgan, tsiklik ishsizlik nolga teng",
"Friksion ishsizlik yo'qolgan, shuning uchun u < u*",
"Tsiklik ishsizlik manfiy (–1,2 punkt): ishchi kuchi me'yoridan ortiq band, iqtisodiyot potensialdan yuqorida ishlayapti"
],
"c": 3,
"w": "u = u* + u_tsiklik: 3,8 = 5,0 + u_tsiklik, u_tsiklik = –1,2. Bu yuksalishga xos (qo'shimcha ish soatlari, ikkinchi ish o'rinlari). Tabiiy daraja bir kunda o'zgarmaydi, friksion ishsizlik esa yo'qolmaydi."
},
{
"t": 4,
"q": "Beveridj egri chizig'i bo'yicha qaysi kuzatuv egri chiziqning O'NGGA siljishini (moslashuv samaradorligining pasayishini) ko'rsatadi, egri chiziq bo'ylab harakatni emas?",
"o": [
"Ishsizlik 5% dan 7% ga oshdi, bo'sh ish o'rinlari 3% dan 1,8% ga kamaydi",
"Ishsizlik 5% dan 3% ga kamaydi, bo'sh ish o'rinlari 3% dan 5% ga oshdi",
"Ishsizlik 5% dan 7% ga, bo'sh ish o'rinlari 3% dan 3,6% ga oshdi",
"Ishsizlik 5% dan 3% ga, bo'sh ish o'rinlari 3% dan 2% ga kamaydi"
],
"c": 2,
"w": "Egri chiziq bo'ylab harakatda ishsizlik va bo'sh o'rinlar qarama-qarshi o'zgaradi (tsiklik). Ikkalasining birga oshishi – o'ngga siljish: ko'p ishsiz va ko'p bo'sh o'rin bir vaqtda, ya'ni tarkibiy nomuvofiqlik. Ikkalasi birga kamaysa – chapga siljish."
},
{
"t": 4,
"q": "Mehnat bozorida histerezis mexanizmlariga KIRMAYDIGAN omilni toping.",
"o": [
"Uzoq ishsizlik tufayli malaka yo'qolishi",
"Ishsizlarning ish qidirish motivatsiyasi pasayishi",
"Insayder-autsayder muammosining kuchayishi",
"Uzoq ishsiz qolganlarning malakasi oshib, ish beruvchilar uchun jozibadorligi ortishi"
],
"c": 3,
"w": "Histerezisda vaqtinchalik shok tabiiy ishsizlikni oshiradi: malaka yo'qoladi, motivatsiya pasayadi, insayderlar o'z manfaatini himoya qiladi. Malakaning oshishi aksincha ta'sir qiladi."
},
{
"t": 4,
"q": "Retsessiyada 200 ming ishsiz ish topishdan umidini uzib, faol qidirishni to'xtatdi va iqtisodiy nofaol guruhga o'tdi. Boshqa sharoit o'zgarmaganda rasmiy ko'rsatkichlar qanday o'zgaradi?",
"o": [
"Ishsizlik darajasi ham, iqtisodiy faollik darajasi ham oshadi",
"Ishsizlik darajasi pasayadi, faollik darajasi o'zgarmaydi",
"Ishsizlik darajasi o'zgarmaydi, faollik darajasi oshadi",
"Ishsizlik darajasi ham, iqtisodiy faollik darajasi ham pasayadi"
],
"c": 3,
"w": "Umidini uzganlar ishchi kuchidan chiqadi: L va U kamayadi, u = U/L pasayadi, faollik darajasi (L/aholi) ham pasayadi. Natijada rasmiy ishsizlik haqiqiy holatni to'liq aks ettirmaydi."
},
{
"t": 4,
"q": "Mankyu modelida quyidagi o'zgarishlardan qaysi biri tabiiy ishsizlik darajasini OSHIRADI?",
"o": [
"Saxiy va uzoq muddatli nafaqalar tufayli ish topish darajasining pasayishi",
"Bo'sh ish o'rinlari onlayn bazasi tufayli ish topish darajasining oshishi",
"Tarkibiy o'zgarishlar sekinlashishi sababli ishdan ajralish darajasining pasayishi",
"Qayta tayyorlash dasturlari natijasida ish topish darajasining oshishi"
],
"c": 0,
"w": "u* = s/(s+f): f kamaysa yoki s oshsa u* oshadi. Saxiy nafaqalar ish qidirish jadalligini va f ni pasaytiradi. Boshqa variantlar s ni kamaytiradi yoki f ni oshiradi, ya'ni u* ni pasaytiradi."
},
{
"t": 4,
"q": "Kasaba uyushmasi a'zolari uchun bozor muvozanatidan yuqori ish haqi kelishildi. Mankyu mantig'iga ko'ra bu nimaga olib keladi?",
"o": [
"Tsiklik ishsizlik yo'qoladi, chunki daromad oshgani uchun hamma uchun talab oshadi",
"Friksion ishsizlik kamayadi, chunki ish qidirish tezlashadi",
"Uyushmaga kirmagan autsayderlar uchun ish o'rinlari kamayib, tarkibiy ishsizlik oshadi",
"Mehnat bozorida muvozanat tiklanadi va ixtiyoriy ishsizlik paydo bo'lmaydi"
],
"c": 2,
"w": "Yuqori ish haqi (wage rigidity) ish o'rinlari sonini kamaytiradi: insayderlar yutadi, autsayderlar ish topa olmaydi – bu Mankyuning tarkibiy ishsizlik talqini."
},
{
"t": 4,
"q": "Quyidagi o'zgarishlardan qaysi biri bandlik multiplikatorini KAMAYTIRADI?",
"o": [
"Iste'molga chegaraviy moyillikning oshishi",
"Jamg'arishga chegaraviy moyillikning kamayishi",
"Yangi daromadning ichki ishlab chiqarilgan iste'mol tovarlariga ko'proq sarflanishi",
"Daromadning katta qismi soliqlar va import tovarlariga ketishi"
],
"c": 3,
"w": "k_N = 1/(1 – MPC). Soliq va import daromadning ichki iste'molga qaytmaydigan qismi bo'lib, samarali MPC ni pasaytiradi. MPC ortishi va MPS kamayishi multiplikatorni oshiradi."
},
{
"t": 4,
"q": "Viloyatda ko'p bo'sh ish o'rinlari (dasturlash, payvandlash) mavjud, ishsizlarning aksariyati esa eskirgan kasb egalari; ishsizlik uzoq davom etmoqda. Darslikdagi jadvalga ko'ra birinchi navbatda qaysi chora mos?",
"o": [
"Faqat yalpi talabni fiskal va monetar rag'batlantirish",
"Mavsumiy ish dasturlari va faoliyatni diversifikatsiya qilish",
"Ish haqini umumiy pasaytirish va nafaqalarni oshirish",
"Qayta o'qitish, kasbiy ta'lim va hududiy mobillikni rag'batlantirish"
],
"c": 3,
"w": "Bo'sh o'rinlar va ishsizlar bir vaqtda mavjud, ammo malaka mos emas – tarkibiy ishsizlik. Uning choralari: qayta o'qitish, kasbiy ta'lim, mobillik. Yalpi talab choralari tsiklik ishsizlikka mos."
},
{
"t": 4,
"q": "Narxlar 8% ga oshdi, nominal ish haqi esa 3% ga oshdi. 1,03/1,08 – 1 formulasi bilan aniq hisoblanganda real ish haqi qanday o'zgargan?",
"o": [
"–5,0% (kamaygan)",
"–4,6% (kamaygan)",
"+3,0% (oshgan)",
"+4,9% (oshgan)"
],
"c": 1,
"w": "Real ish haqi o'zgarishi = 1,03/1,08 – 1 = –4,63% ≈ –4,6%. Ayirma (–5,0%) – taxminiy; 1,08/1,03 – 1 = +4,9% kabi teskari nisbat noto'g'ri. Keyns: ishchilar real ish haqining narxlar orqali pasayishiga osonroq rozi bo'ladi."
},
{
"t": 4,
"q": "XMT mezonlariga ko'ra quyidagi shaxslardan qaysi biri ishsiz hisoblanadi?",
"o": [
"Hozir ishi yo'q, so'nggi 4 hafta ichida faol ish qidirgan va 2 hafta ichida ishga kirisha oladigan shaxs",
"Ish topishdan umidini uzib, uzoq vaqtdan beri qidirmayotgan shaxs",
"Faol qidirayotgan, lekin ishga faqat 3 oydan keyin kirisha oladigan talaba",
"Tekshirilgan haftada haq to'lanadigan bir soatlik ishda bo'lgan shaxs"
],
"c": 0,
"w": "Ishsizlik uchun uchta shart: ishi yo'q, so'nggi 4 hafta faol qidirgan, 2 hafta ichida ishga tayyor. Umidini uzganlar va tayyor bo'lmaganlar nofaol; haftada kamida 1 soat haq to'lanadigan ish bor – band."
},
{
"t": 4,
"q": "Qishloqda 5 kishi bajaradigan ish hajmini 8 kishi bajarmoqda; 3 kishi ketsa ham ishlab chiqarish hajmi o'zgarmasdi. Ular rasman band hisoblanadi. Bu qanday ishsizlik shakli?",
"o": [
"Yashirin ishsizlik",
"Mavsumiy ishsizlik",
"Institutsional ishsizlik",
"Uzoq muddatli (turg'un) ishsizlik"
],
"c": 0,
"w": "Rasmiy band, ammo amalda samarasiz band bo'lganlar (qishloq xo'jaligidagi ortiqcha ishchi kuchi) yashirin ishsizlikni tashkil qiladi. Mavsumiylik faoliyat davriyligi bilan, institutsionallik nafaqa/soliq/qonun bilan bog'liq."
},
{
"t": 4,
"q": "Retsessiyadan keyin YaIM potensial darajaga qaytdi, lekin ishsizlik oldingi darajadan 1,5 punkt yuqori. Ishsizlarning ko'pchiligi uzoq vaqt ishsiz bo'lgan, malakasi eskirgan. Eng mos izoh qaysi?",
"o": [
"Histerezis: uzoq retsessiya tabiiy ishsizlik darajasini oshirgan",
"Tsiklik ishsizlik hali yuqori, chunki YaIM uzilishi saqlanib qolgan",
"Piguga ko'ra bu ixtiyoriy ishsizlik, shuning uchun iqtisodiy sabab yo'q",
"Mavsumiy ishsizlik, chunki davr yilning ma'lum qismi bilan bog'liq"
],
"c": 0,
"w": "YaIM potensialga teng (uzilish yo'q), demak ortiqcha ishsizlik tsiklik emas. Malaka yo'qolishi tufayli tabiiy daraja ko'tarilgan – histerezis (Yevropa, 1980-yillar)."
},
{
"t": 4,
"q": "Rivojlanayotgan mamlakatda YaIM sezilarli qisqardi, lekin rasmiy ishsizlik juda oz oshdi. Darslikdagi mulohazalarga ko'ra bunga eng mos izoh qaysi?",
"o": [
"Norasmiy sektor va mehnat migratsiyasi bufer vazifasini bajaradi, shuning uchun Ouken bog'liqligi zaiflashadi",
"Ouken koeffitsiyenti bunday mamlakatlarda doim birdan kichik emas, aksincha, bog'liqlik kuchayadi",
"Ishsizlik tsiklga bog'liq emas, uni faqat demografik omillar belgilaydi",
"Retsessiya paytida umidini uzgan ishchilar rasmiy ishsizlar safiga qo'shiladi"
],
"c": 0,
"w": "Norasmiy sektor ish yo'qotganlarni qabul qiladi, migratsiya ichki ishsizlikni xorijga «chiqaradi»; shuning uchun rasmiy ishsizlik YaIMga kam sezgir. Umidini uzganlar ishsizlar safidan chiqadi, qo'shilmaydi."
},
{
"t": 4,
"q": "Mehnat bozorining neoklassik modelida hukumat eng kam ish haqini muvozanatdagi real ish haqidan PAST darajada belgiladi. Natija qanday bo'ladi?",
"o": [
"Mehnat taklifi talabdan oshadi va majburiy ishsizlik paydo bo'ladi",
"Mehnatga talab oshib, bandlik muvozanatdan yuqoriga chiqadi",
"Cheklov ta'sir qilmaydi: bozor muvozanati va bandlik o'zgarmaydi",
"Real ish haqi pasayadi va ixtiyoriy ishsizlik oshadi"
],
"c": 2,
"w": "Eng kam ish haqi faqat muvozanatdan yuqori bo'lsa «ishlaydi» (L_S > L_D, ishsizlik). Muvozanatdan past chegara bozor ish haqini o'zgartirmaydi."
},
{
"t": 5,
"q": "Savatning dastlabki narxi 500 000 so‘m. Narxlar umumiy darajasi birinchi yili 12%, ikkinchi yili 8% ga oshdi. Ikki yildan keyin shu savat necha so‘m turadi?",
"o": [
"604 800 so‘m",
"600 000 so‘m",
"627 200 so‘m",
"580 000 so‘m"
],
"c": 0,
"w": "Inflyatsiya to‘planadi: 500 000 × 1,12 × 1,08 = 604 800. Oddiy yig‘indi (20%) yoki bir xil stavkani takrorlash xato natija beradi."
},
{
"t": 5,
"q": "Mamlakatda pul massasi 25% ga oshdi, real YaIM 5% ga o‘sdi, pulning aylanish tezligi esa 4% ga pasaydi (remonetizatsiya). Almashinuv tenglamasining o‘sish sur’atlaridagi ko‘rinishidan inflyatsiya qancha?",
"o": [
"20%",
"24%",
"26%",
"16%"
],
"c": 3,
"w": "π = ΔM/M + ΔV/V – ΔY/Y = 25% + (–4%) – 5% = 16%. V ni hisobga olmaslik 20% beradi."
},
{
"t": 5,
"q": "Kredit nominal stavkasi 20%, inflyatsiya 8%. Fisherning aniq munosabati (1 + i) = (1 + r)(1 + π) dan foydalansak, real stavka taxminan qancha?",
"o": [
"12,0%",
"11,1%",
"9,6%",
"28,0%"
],
"c": 1,
"w": "1 + r = 1,20 / 1,08 = 1,1111, ya’ni r ≈ 11,1%. Taqribiy i – π = 12% aniq qiymatdan farq qiladi."
},
{
"t": 5,
"q": "Yillik inflyatsiya barqaror 3,5% bo‘lsa, «70 qoidasi»ga ko‘ra narxlar darajasi 4 baravar oshishi uchun taxminan necha yil kerak?",
"o": [
"40 yil",
"20 yil",
"17,5 yil",
"80 yil"
],
"c": 0,
"w": "Ikki baravar oshish: 70 / 3,5 = 20 yil. 4 baravar = ikki marta ikki baravar oshish, ya’ni 2 × 20 = 40 yil."
},
{
"t": 5,
"q": "Naqd pul massasi M = 200 trln so‘m bo‘lgan mamlakatda markaziy bank uni bir yilda 15% ga oshirib, hukumat xarajatlarini moliyalashtirdi. Narxlar indeksi P = 1,25 (bazaviy yil = 1). Real seynoraj qancha?",
"o": [
"30 trln so‘m",
"24 trln so‘m",
"37,5 trln so‘m",
"160 trln so‘m"
],
"c": 1,
"w": "ΔM = 0,15 × 200 = 30 trln. Seynoraj = ΔM / P = 30 / 1,25 = 24 trln (bazaviy yil narxlarida)."
},
{
"t": 5,
"q": "Dezinflyatsiya natijasida inflyatsiya 10% dan 6% gacha tushirildi. Bunda tsiklik ishsizlik 2 yil davomida o‘rtacha yiliga 2 foiz punktga oshdi. Oken qonuniga ko‘ra 1 foiz punkt tsiklik ishsizlik 2% YaIM yo‘qotishga teng. Qurbonlik koeffitsiyenti qancha?",
"o": [
"1,0",
"2,0",
"4,0",
"8,0"
],
"c": 1,
"w": "Yo‘qotish = 2 pp × 2 yil × 2 = 8% YaIM. Inflyatsiya 4 pp pasaygan: 8 / 4 = 2,0. Oken koeffitsiyentini unutish 1,0 beradi."
},
{
"t": 5,
"q": "Adaptiv kutishlar (π^e = o‘tgan yil inflyatsiyasi = 6%) ostida Fillips egri chizig‘i π = π^e – β(u – u^n) + ν berilgan. β = 0,5; u = 4%; u^n = 6%; neft shoki tufayli ν = 2 foiz punkt. Joriy inflyatsiya qancha?",
"o": [
"7%",
"5%",
"3%",
"9%"
],
"c": 3,
"w": "π = 6 – 0,5 × (4 – 6) + 2 = 6 + 1 + 2 = 9%. Taklif shoki (ν) ni tushirib qoldirish 7% beradi."
},
{
"t": 5,
"q": "Bank 1 yilga 16% nominal stavkada kredit berdi. Shartnoma paytida kutilgan inflyatsiya 9% edi, yil oxirida haqiqiy inflyatsiya 12% bo‘ldi. Qaysi xulosa to‘g‘ri?",
"o": [
"Ex post real stavka taxminan 4%; kreditor yutdi, qarzdor kutilganidan ko‘proq to‘ladi",
"Ex post real stavka taxminan 7%; kreditor yutdi, qarzdor kutilganidan ko‘proq to‘ladi",
"Ex post real stavka taxminan 7%; kreditor yutqazdi, qarzdor kutilganidan kam to‘ladi",
"Ex post real stavka taxminan 4%; kreditor kutganidan kam real daromad oldi, qarzdor yutdi"
],
"c": 3,
"w": "Ex ante real stavka 16 – 9 = 7%, ex post real stavka 16 – 12 = 4%. Kutilmagan inflyatsiya qarzni qadrsizlantirdi: qarzdor yutdi, kreditor yutqazdi."
},
{
"t": 5,
"q": "Inflyatsiyani 9% dan 5% gacha tushirish rejalashtirilgan, qurbonlik koeffitsiyenti 3 deb baholanmoqda. Yillik YaIM 800 trln so‘m bo‘lsa, dezinflyatsiyaning jami taxminiy narxi qancha?",
"o": [
"32 trln so‘m (YaIMning 4%)",
"96 trln so‘m (YaIMning 12%)",
"72 trln so‘m (YaIMning 9%)",
"40 trln so‘m (YaIMning 5%)"
],
"c": 1,
"w": "Inflyatsiya 4 pp pasayadi: yo‘qotish = 3 × 4 = 12% YaIM = 0,12 × 800 = 96 trln so‘m."
},
{
"t": 5,
"q": "Narxlar darajasi uch yilda jami 33,1% ga oshgan. Geometrik o‘rtacha yillik inflyatsiya qancha?",
"o": [
"11,0%",
"9,0%",
"10,0%",
"12,0%"
],
"c": 2,
"w": "(1,331)^(1/3) = 1,10, ya’ni 10,0%. 33,1 / 3 = 11,0% — aritmetik o‘rtacha to‘planish ta’sirini hisobga olmaydi."
},
{
"t": 5,
"q": "INI bo‘yicha yillik inflyatsiya 8%. Ma’muriy tartibga solinadigan narxlar INI savatining 20% ini tashkil etadi va yil davomida o‘rtacha 20% ga oshgan. Qolgan 80% narxlar bir tekis o‘sgan deb olinsa, bazaviy inflyatsiya (ma’muriy narxlarsiz) qancha?",
"o": [
"4,0%",
"6,4%",
"12,0%",
"5,0%"
],
"c": 3,
"w": "8 = 0,2 × 20 + 0,8 × x, bundan x = (8 – 4) / 0,8 = 5,0%."
},
{
"t": 5,
"q": "Joriy yilda nominal YaIM PY = 900 trln so‘m, pul massasi M = 300 trln so‘m, V o‘zgarmas. Kelgusi yil real YaIM 4% o‘sishi va narxlar 20% oshishi kutilmoqda. V ni o‘zgartirmaslik uchun M qancha bo‘lishi kerak?",
"o": [
"374,4 trln so‘m",
"372,0 trln so‘m",
"360,0 trln so‘m",
"312,0 trln so‘m"
],
"c": 0,
"w": "MV = PY da V doimiy bo‘lsa, M nominal YaIM kabi o‘sadi: 300 × 1,04 × 1,20 = 374,4. Foizlarni qo‘shish (1,24) xato."
},
{
"t": 5,
"q": "Soliq to‘lovchi 100 mln so‘m soliqni 2 oy kechikib to‘ladi. Har oy narxlar 25% ga oshadi (har oy ×1,25). Oliver-Tanzi samarasiga ko‘ra, to‘langan summaning to‘lov kuni narxlaridagi real qiymati qancha?",
"o": [
"75 mln so‘m",
"50 mln so‘m",
"64 mln so‘m",
"80 mln so‘m"
],
"c": 2,
"w": "100 / 1,25^2 = 100 / 1,5625 = 64 mln. Kechikish davomida soliqning real qiymati yemiriladi."
},
{
"t": 5,
"q": "Narxlar darajasi indeksi 100 dan 125 gacha oshdi. Mankyu bo‘yicha pulning qiymati (1/P), ya’ni bir so‘mning xarid qobiliyati qancha foizga kamaydi?",
"o": [
"25% ga",
"80% ga",
"20% ga",
"12,5% ga"
],
"c": 2,
"w": "1/P: 1/1,00 = 1 dan 1/1,25 = 0,8 gacha, ya’ni 20% ga kamaydi. Narxlar 25% oshgani pulning xarid qobiliyati 25% tushganini anglatmaydi."
},
{
"t": 5,
"q": "Quyidagi holatlardan qaysi birini inflyatsiya ta’rifiga to‘liq mos deb hisoblash to‘g‘ri?",
"o": [
"Qurg‘oqchilik tufayli kartoshka narxining 40% oshishi, boshqa tovarlar narxi deyarli o‘zgarmay qolishi",
"QQS stavkasi oshirilgach narxlar darajasining bir martalik sakrashi va undan keyin yangi darajada barqaror qolishi",
"Mavsum tugashi bilan meva-sabzavot narxlarining keskin tushishi va keyingi mavsumda yana oshishi",
"Uch yil davomida iste’mol savatidagi deyarli barcha guruhlar narxi yiliga taxminan 6% dan oshib borishi"
],
"c": 3,
"w": "Inflyatsiya narxlarning umumiy darajasi va barqaror (davomli) o‘sishi. Alohida tovar narxi, bir martalik sakrash va mavsumiy tebranish inflyatsiya emas."
},
{
"t": 5,
"q": "Uch yil davomida yillik inflyatsiya 12%, 9%, 5% bo‘ldi. Bu jarayon va narxlar haqida qaysi xulosa to‘g‘ri?",
"o": [
"Dezinflyatsiya: narxlar hamon oshmoqda, lekin o‘sish sur’ati pasaymoqda",
"Deflyatsiya: narxlar umumiy darajasi har yili pasayib bormoqda",
"Deflyatsiya: inflyatsiya sur’ati pasaygani uchun narxlar arzonlashmoqda",
"Dezinflyatsiya: narxlar darajasi birinchi yilgidan past bo‘lib qolgan"
],
"c": 0,
"w": "Narxlar darajasi pasayganda deflyatsiya, o‘sish sur’ati pasayganda dezinflyatsiya bo‘ladi. Bu yerda P har yili oshgan."
},
{
"t": 5,
"q": "Iqtisodiyotda neft va gaz narxi keskin oshgan. Narxlar umumiy darajasi 9% ga oshdi, real YaIM 3% ga qisqardi, ishsizlik oshdi. AD–AS tahlili bo‘yicha bu qaysi holatga mos?",
"o": [
"Xarajatlar inflyatsiyasi: AS chapga siljigan, stagflyatsiya",
"Talab inflyatsiyasi: AD o‘ngga siljigan, to‘liq bandlikka yaqinlashish",
"Bosib turilgan inflyatsiya: narxlar qayd etilgan, taqchillik kuchaygan",
"Talab inflyatsiyasi: kredit ekspansiyasi natijasida AD o‘ngga siljigan"
],
"c": 0,
"w": "Narxlar oshib, real YaIM qisqarishi va ishsizlik o‘sishi AS chapga siljiganini ko‘rsatadi (xarajatlar inflyatsiyasi). Talab inflyatsiyasida real YaIM oshadi."
},
{
"t": 5,
"q": "Quyidagilardan qaysi biri xarajatlar inflyatsiyasining sababi HISOBLANMAYDI?",
"o": [
"Davlat xarajatlarining oshishi va iste’mol kayfiyatining yaxshilanishi",
"Ish haqining mehnat unumdorligidan tez o‘sishi (kuchli kasaba uyushmalari)",
"Milliy valyuta qadrsizlanishi tufayli import xom ashyo qimmatlashishi",
"Egri soliqlar (QQS, aksizlar) stavkalarining oshirilishi va narxlarga qo‘shilishi"
],
"c": 0,
"w": "Davlat xarajatlari va kayfiyatning yaxshilanishi AD ni o‘ngga siljitadi, ya’ni talab inflyatsiyasi sababi. Boshqa variantlar AS ni chapga siljitadi."
},
{
"t": 5,
"q": "Inflyatsion spiralning ketma-ketligi qaysi variantda to‘g‘ri keltirilgan?",
"o": [
"AD o‘ngga → narxlar oshadi → nominal ish haqi pasayadi → SRAS o‘ngga → narxlar tushadi → muvozanat o‘z-o‘zidan tiklanadi va spiral to‘xtaydi, Y o‘zgarmaydi",
"AD o‘ngga → narxlar oshadi → real ish haqi kamayadi → nominal ish haqi talabi → SRAS chapga → narxlar yanada oshadi, Y potensialga qaytadi → yana AD rag‘batlantiriladi",
"SRAS chapga → ishlab chiqarish oshadi → bandlik oshadi → ish haqi tushadi → AD chapga → narxlar tushadi → muvozanat tiklanadi, inflyatsiya to‘xtaydi",
"AD chapga → narxlar tushadi → real ish haqi oshadi → SRAS o‘ngga → ishlab chiqarish potensialdan oshadi → narxlar yana tushadi, spiral hosil bo‘ladi"
],
"c": 1,
"w": "Spiral: AD↑ → P↑ → W talabi↑ → SRAS chapga → P yanada↑, Y potensialga qaytadi → yana rag‘batlantirish. Narxlar har sikl balandroq bo‘ladi."
},
{
"t": 5,
"q": "Bank 10% qayd etilgan nominal stavkada kredit berdi, inflyatsiya esa kutilmaganda 18% bo‘ldi. Quyidagilardan qaysi biri real jihatdan YUTADI?",
"o": [
"Shu stavkada depozit qo‘ygan omonatchi",
"Qayd etilgan narxda 2 yilga shartnoma tuzgan mahsulot yetkazib beruvchi",
"10% qayd etilgan stavkada kredit olgan firma",
"Indeksatsiya qilinmagan nafaqa oluvchi"
],
"c": 2,
"w": "Real stavka 10 – 18 = –8%: qarzning real qiymati kamayadi, qarzdor yutadi. Qolgan uchtasida real daromad kamayadi."
},
{
"t": 5,
"q": "Inflyatsiya yuqori bo‘lgani uchun restoran narx yorliqlarini har hafta qayta chop etmoqda, aholi esa naqd pulni kam ushlab, bankka tez-tez qatnamoqda. Bu qaysi xarajatlar turi?",
"o": [
"Birinchisi — menyu xarajatlari, ikkinchisi — poyabzal eskirishi xarajatlari",
"Birinchisi — poyabzal eskirishi xarajatlari, ikkinchisi — menyu xarajatlari",
"Ikkalasi ham menyu xarajatlari, chunki ikkalasi narx o‘zgarishi bilan bog‘liq",
"Birinchisi — nisbiy narxlar buzilishi, ikkinchisi — soliq yuki buzilishi"
],
"c": 0,
"w": "Narx yorliqlarini yangilash — menyu xarajatlari; naqd pulni kamaytirib bankka tez-tez borish — poyabzal eskirishi xarajatlari."
},
{
"t": 5,
"q": "Fisher samarasi haqida qaysi tasdiq to‘g‘ri?",
"o": [
"Kutilgan inflyatsiya oshganda real stavka bir xil miqdorda oshadi, nominal stavka esa o‘zgarmaydi",
"Kutilmagan inflyatsiya nominal stavkani darhol va to‘liq oshiradi, chunki shartnoma allaqachon imzolangan",
"Real stavka o‘zgarmas bo‘lsa, kutilgan inflyatsiyaning 3 pp oshishi nominal stavkani ham 3 pp oshiradi",
"Nominal stavka oshganda inflyatsiya 1 pp ga kamayadi, shuning uchun real stavka doim barqaror qoladi"
],
"c": 2,
"w": "Fisher tenglamasi i = r + π^e: kutilgan inflyatsiya o‘sishi nominal stavkani 1:1 oshiradi. Kutilmagan inflyatsiya shartnoma stavkasiga ta’sir qilmaydi."
},
{
"t": 5,
"q": "Hukumat ishsizlikni tabiiy darajadan past ushlab turish uchun yalpi talabni doimiy rag‘batlantirmoqda. Fridmen–Felps nazariyasiga ko‘ra uzoq muddatda nima bo‘ladi?",
"o": [
"Ishsizlik past darajada barqaror qoladi, inflyatsiya yuqori bo‘ladi, lekin o‘zgarmas darajada saqlanib turadi",
"Uzoq muddatli Fillips egri chizig‘i manfiy og‘ma bo‘lib qoladi, inflyatsiya va ishsizlik muqobilligi saqlanadi",
"Kutilgan inflyatsiya oshadi, SRPC yuqoriga siljiydi; ishsizlik tabiiy darajaga qaytadi, inflyatsiya yuqori qoladi",
"Ishsizlik tabiiy darajaga qaytadi, inflyatsiya ham dastlabki darajasiga tushadi, SRPC esa joyida qoladi"
],
"c": 2,
"w": "Agentlar yuqori inflyatsiyaga moslashadi, π^e oshadi, SRPC siljiydi. Natijada u^n da LRPC vertikal: muqobillik yo‘q, inflyatsiya esa yuqoriligicha qoladi."
},
{
"t": 5,
"q": "Fillips egri chizig‘i π = π^e – β(u – u^n) + ν da jahon bozorida neft narxi keskin pasaydi (ν < 0). Boshqa omillar o‘zgarmasa, nima ro‘y beradi?",
"o": [
"Qisqa muddatli Fillips egri chizig‘i yuqoriga siljiydi: o‘sha ishsizlik darajasida inflyatsiya yuqori bo‘ladi",
"Uzoq muddatli Fillips egri chizig‘i chapga siljiydi, tabiiy ishsizlik darajasi pasayadi",
"Iqtisodiyot qisqa muddatli egri chiziq bo‘ylab pastga harakatlanadi, ishsizlik oshadi",
"Qisqa muddatli Fillips egri chizig‘i pastga siljiydi: o‘sha ishsizlik darajasida inflyatsiya past bo‘ladi"
],
"c": 3,
"w": "ν — taklif shoklari hadi. ν < 0 bo‘lsa, har bir u da π kamayadi: SRPC pastga siljiydi. Egri chiziq bo‘ylab harakat esa u ning o‘zgarishidan bo‘ladi."
},
{
"t": 5,
"q": "Shok terapiyasi tarafdorlari dezinflyatsiyaning narxi (qurbonlik koeffitsiyenti) kichik bo‘lishi mumkin deb hisoblaydi. Bu qaysi shartga tayanadi?",
"o": [
"Kutishlarning adaptiv shakllanib, asta-sekin o‘zgarishiga",
"Daromadlarning to‘liq indeksatsiya qilinishi va inflyatsiya inersiyasi saqlanishiga",
"Narxlar va ish haqini ma’muriy muzlatish orqali bosimni vaqtincha olib tashlashga",
"Siyosatning ishonchliligi tufayli kutishlar tez pasayishiga (ratsional kutishlar)"
],
"c": 3,
"w": "Ratsional kutishlarga ko‘ra, ishonchli va qat’iy e’lon qilingan siyosat kutishlarni darhol pasaytiradi, shuning uchun ishsizlik oshishi kam bo‘ladi."
},
{
"t": 5,
"q": "Pensiya va ish haqini inflyatsiyaga to‘liq indeksatsiya qilishning ikki tomonlama ta’siri haqida qaysi tasdiq to‘g‘ri?",
"o": [
"Qayta taqsimlovchi ta’sirni kuchaytiradi, ammo inflyatsion inersiyani kamaytiradi",
"Qayta taqsimlovchi ta’sirni kamaytiradi, ammo inflyatsion inersiyani kuchaytiradi",
"Inflyatsiyaning ham qayta taqsimlovchi ta’sirini, ham inersiyasini birdek kamaytiradi",
"Qayta taqsimlovchi ta’sirga ta’sir qilmaydi, faqat nominal stavkalarni pasaytiradi"
],
"c": 1,
"w": "Indeksatsiya daromadlar real qiymatini himoya qiladi, ammo narx oshishi avtomatik ish haqiga o‘tadi va inflyatsiyani «uzaytiradi»."
},
{
"t": 5,
"q": "Quyidagilardan qaysi biri bosib turilgan (yashirin) inflyatsiyaning belgisi EMAS?",
"o": [
"Do‘konlarda navbatlar va tovarlarning peshtaxtadan yo‘qolishi",
"«Qora bozor»ning paydo bo‘lishi va tovar sifatining pasayishi",
"Aholida ishlatib bo‘lmaydigan majburiy pul jamg‘armalarining to‘planishi",
"Chakana narxlarning erkin va tez oshishi, peshtaxtalarda tovar mo‘lligi"
],
"c": 3,
"w": "Bosib turilgan inflyatsiyada narxlar ma’muriy qayd etilgan, bosim narxda emas, taqchillikda ko‘rinadi. Erkin narxlar oshishi ochiq inflyatsiya belgisi."
},
{
"t": 5,
"q": "Quyidagilardan qaysi biri inflyatsion targetlash rejimining elementi HISOBLANMAYDI?",
"o": [
"Raqamli inflyatsiya maqsadini ochiq e’lon qilish va unga javobgarlik",
"Raqamli maqsadga erishish uchun narxlar va ish haqini ma’muriy muzlatish",
"Markaziy bank mustaqilligi va narxlar barqarorligining qonunda ustuvorligi",
"Joriy emas, kutilayotgan inflyatsiyaga asoslangan prognozli qarorlar qabul qilish"
],
"c": 1,
"w": "Targetlash foiz stavkasi, shaffoflik va prognozga tayanadi. Narxlarni muzlatish baholar va daromadlar siyosatiga kiradi."
},
{
"t": 5,
"q": "Nima uchun rivojlangan mamlakatlar markaziy banklari inflyatsiya maqsadini nol emas, 2% atrofida belgilaydi?",
"o": [
"Chunki miqdoriy nazariyaga ko‘ra 2% inflyatsiya real YaIM o‘sishini maksimal qiladi",
"Chunki Fisher samarasi nominal stavka kamida 2 pp bo‘lishini qat’iy talab qiladi",
"Nol maqsad deflyatsiya xavfini oshiradi va nominal stavkani pasaytirish zaxirasini qisqartiradi",
"Chunki 2% inflyatsiya seynorajni nolga tushirib, soliq yukini butunlay kamaytiradi"
],
"c": 2,
"w": "Mo‘tadil inflyatsiya deflyatsion spiral xavfidan himoya qiladi va nominal ish haqi qat’iyligida real ish haqi moslashuvini osonlashtiradi."
},
{
"t": 6,
"q": "AD egri chizig‘i Y = M × V / P ko‘rinishida berilgan, M = 500 trln so‘m, V = 4. Markaziy bank M ni 550 trln so‘mga oshirdi. P = 1,25 bo‘lsa, yalpi talab hajmi qancha?",
"o": [
"1600 trln so‘m",
"1936 trln so‘m",
"1760 trln so‘m",
"2200 trln so‘m"
],
"c": 2,
"w": "Y = 550 × 4 / 1,25 = 1760. Oldingi qiymat 500 × 4 / 1,25 = 1600; narx omilini tushirib qoldirish 2200 beradi."
},
{
"t": 6,
"q": "Narxlar qat’iy (gorizontal SRAS), pul va foiz stavkasi samaralari e’tiborga olinmaydi. Davlat xarajatlari 20 trln so‘mga oshdi, MPC = 0,75, soliqlar o‘zgarmas. Muvozanatli real YaIM qancha o‘zgaradi?",
"o": [
"20 trln so‘mga oshadi",
"60 trln so‘mga oshadi",
"80 trln so‘mga oshadi",
"26,7 trln so‘mga oshadi"
],
"c": 2,
"w": "Multiplikator = 1 / (1 – MPC) = 4. ΔY = 4 × 20 = 80. 20/0,75 = 26,7 noto‘g‘ri formula natijasi."
},
{
"t": 6,
"q": "Valras qonuniga ko‘ra to‘rt bozor (tovar, mehnat, pul, obligatsiya) bo‘yicha ortiqcha talab qiymatlarining yig‘indisi nolga teng. Tovar bozorida +30, mehnat bozorida –10, pul bozorida –25 (trln so‘m). Obligatsiyalar bozoridagi ortiqcha talab qiymati qancha?",
"o": [
"–5 trln so‘m",
"0 trln so‘m",
"+5 trln so‘m",
"+65 trln so‘m"
],
"c": 2,
"w": "30 – 10 – 25 + x = 0, bundan x = +5. Qolgan uch bozorda muvozanat bo‘lmagani uchun to‘rtinchisida ham muvozanat yo‘q."
},
{
"t": 6,
"q": "AD: Y = 2000 / P. Qisqa muddatda narxlar P = 1,25 da qat’iy, potensial real YaIM Ȳ = 1250. Uzoq muddatda narxlar moslashganda muvozanatli narxlar darajasi qancha bo‘ladi?",
"o": [
"1,28",
"0,63",
"1,25",
"1,60"
],
"c": 3,
"w": "Qisqa muddatda Y = 2000 / 1,25 = 1600 > Ȳ. Uzoq muddatda Y = Ȳ = 1250: P = 2000 / 1250 = 1,60."
},
{
"t": 6,
"q": "Uzoq muddatda klassik model qo‘llanadi: M = 600, V = 2,5, potensial Ȳ = 1500, boshlang‘ich P = 1. Markaziy bank M ni 720 ga oshirdi. Yangi uzoq muddatli muvozanat qanday?",
"o": [
"P = 1,2; Y = 1500",
"P = 1,0; Y = 1800",
"P = 1,2; Y = 1800",
"P = 1,44; Y = 1500"
],
"c": 0,
"w": "MV = 720 × 2,5 = 1800 = P × 1500, P = 1,2. Vertikal LRAS: real ishlab chiqarish o‘zgarmaydi (pulning neytralligi)."
},
{
"t": 6,
"q": "Keynscha gorizontal SRAS sharoitida narxlar P = 1,5 darajasida qat’iy. V = 3. Markaziy bank pul massasini 40 trln so‘mga oshirdi. AD: Y = MV / P bo‘lsa, muvozanatli real YaIM qancha o‘zgaradi?",
"o": [
"120 trln so‘mga oshadi",
"26,7 trln so‘mga oshadi",
"80 trln so‘mga oshadi",
"180 trln so‘mga oshadi"
],
"c": 2,
"w": "ΔY = ΔM × V / P = 40 × 3 / 1,5 = 80. Narx darajasiga bo‘lmaslik 120 beradi."
},
{
"t": 6,
"q": "AD egri chizig‘i Y = MV / P ko‘rinishida. Narxlar darajasi 20% ga pasaydi (M qayd etilgan). Real kassa qoldiqlari M/P qanchaga o‘zgaradi?",
"o": [
"20% ga oshadi",
"25% ga oshadi",
"80% ga oshadi",
"12,5% ga oshadi"
],
"c": 1,
"w": "M/P: 1/0,8 = 1,25. Narx 20% pasaysa, real qoldiq 25% oshadi (foizlar asosi turlicha)."
},
{
"t": 6,
"q": "Real YaIM Y = 1440, potensial daraja Ȳ = 1500. Oken qonuniga ko‘ra YaIM potensialdan 2% past bo‘lsa, tsiklik ishsizlik 1 foiz punktga oshadi (koeffitsiyent 2). Tsiklik ishsizlik qancha?",
"o": [
"4 foiz punkt",
"8 foiz punkt",
"1 foiz punkt",
"2 foiz punkt"
],
"c": 3,
"w": "Tafovut = (1440 – 1500) / 1500 = –4%. 4% / 2 = 2 pp tsiklik ishsizlik."
},
{
"t": 6,
"q": "Uy xo‘jaliklari 300 mln so‘m miqdorida nominal qiymati qayd etilgan aktivlarga (depozit, obligatsiya) ega. Narxlar darajasi 1,00 dan 0,80 gacha pasaydi. Bu aktivlarning real qiymati (dastlabki narxlarda) qancha o‘zgardi?",
"o": [
"60 mln so‘mga oshdi",
"75 mln so‘mga oshdi",
"375 mln so‘mga oshdi",
"80 mln so‘mga oshdi"
],
"c": 1,
"w": "Real qiymat = 300 / 0,8 = 375, o‘sish 75 mln. 20% × 300 = 60 noto‘g‘ri, chunki real qiymat 1/P ga bog‘liq."
},
{
"t": 6,
"q": "Narxlar darajasi 1,00 dan 1,12 gacha oshdi, real YaIM 1000 dan 960 gacha qisqardi (stagflyatsiya). Nominal YaIM qancha foizga o‘zgardi?",
"o": [
"12% ga oshdi",
"4% ga kamaydi",
"8% ga oshdi",
"Taxminan 7,5% ga oshdi"
],
"c": 3,
"w": "Nominal YaIM = P × Y: 1000 dan 1,12 × 960 = 1075,2 ga, ya’ni +7,5%. 12 – 4 = 8 taqribiy hisob, aniq emas."
},
{
"t": 6,
"q": "Qisqa muddatda nominal ish haqi qayd etilgan (2 mln so‘m), narxlar darajasi esa 25% oshdi. Keynscha yondashuvga ko‘ra real ish haqi va firmalar xatti-harakati qanday?",
"o": [
"Real ish haqi 20% ga kamayadi; firmalar ishlab chiqarish va bandlikni kengaytirishi mumkin",
"Real ish haqi 25% ga kamayadi; firmalar ishlab chiqarishni qisqartirib, bandlikni kamaytiradi",
"Real ish haqi o‘zgarmaydi, chunki nominal ish haqi narxlarga qarab darhol va to‘liq moslashadi",
"Real ish haqi 20% ga oshadi; firmalar mehnatga talabni qisqartirib, bandlikni kamaytiradi"
],
"c": 0,
"w": "W/P: 1/1,25 = 0,8, ya’ni –20%. Real ish haqi tushsa, mehnat arzonlashadi va qisqa muddatli taklif ortadi (SRAS bo‘ylab harakat)."
},
{
"t": 6,
"q": "Foiz stavkasi (Keyns) samarasining to‘g‘ri zanjiri qaysi?",
"o": [
"P pasayadi → pulga talab kamayadi → foiz stavkasi tushadi → investitsiyalar oshadi → AD oshadi",
"P pasayadi → pulga talab oshadi → foiz stavkasi ko‘tariladi → investitsiyalar kamayadi → AD kamayadi",
"P pasayadi → real kurs oshadi → eksport kamayadi → NX tushadi → AD kamayadi",
"P pasayadi → nominal aktivlar real qiymati kamayadi → iste’mol kamayadi → AD kamayadi"
],
"c": 0,
"w": "Narxlar tushsa, bitimlar uchun kam pul kerak, ortiqcha pul kredit bozoriga tushadi, r pasayadi, I va davomli iste’mol oshadi."
},
{
"t": 6,
"q": "Quyidagi hodisalardan qaysi biri AD egri chizig‘ining O‘ZINI siljitadi (egri chiziq bo‘ylab harakat emas)?",
"o": [
"Mahalliy narxlarning pasayishi tufayli xaridorlar importdan mahalliy tovarlarga o‘tishi",
"Savdo hamkorlarida iqtisodiy o‘sishning tezlashishi tufayli eksportga talab oshishi",
"Narxlar tushgani sababli uy xo‘jaliklari nominal jamg‘armalarining real qiymati oshishi",
"Narxlar pasayishi bilan kredit resurslari ko‘payib, foiz stavkasi tushishi"
],
"c": 1,
"w": "Uchta variant narxlar o‘zgarishi natijasi (import, boylik, foiz samarasi) — AD bo‘ylab harakat. Xorijiy talab esa bahodan boshqa omil."
},
{
"t": 6,
"q": "Iqtisodiyot uzoq muddatli muvozanatda. Rossiyadan pul o‘tkazmalari keskin oshdi (ijobiy talab shoki), siyosat aralashmaydi. Mankyu sxemasiga ko‘ra uzoq muddatli natija qanday?",
"o": [
"Real YaIM potensialdan yuqori bo‘lib qoladi, narxlar darajasi esa o‘zgarmay turadi, chunki ish haqi moslashmaydi",
"Real YaIM potensial darajaga qaytadi, narxlar darajasi esa dastlabkidan yuqori bo‘ladi",
"Real YaIM potensial darajaga qaytadi, narxlar dastlabki darajaga tushadi, chunki talab shoki vaqtinchalik",
"Real YaIM va narxlar darajasi ikkalasi ham doimiy ravishda yuqori bo‘lib qoladi va muvozanat tiklanmaydi"
],
"c": 1,
"w": "Qisqa muddatda Y oshadi. Keyin ish haqi va narxlar oshib, SRAS siljiydi: Y→Ȳ, P yuqori. Talab shoklari uzoq muddatda faqat narxlarga ta’sir qiladi."
},
{
"t": 6,
"q": "Iqtisodiyotda ishsizlik yuqori, ko‘plab quvvatlar bo‘sh. Hukumat xarajatlarni oshirdi: real YaIM tez o‘sdi, narxlar deyarli o‘zgarmadi. AS egri chizig‘ining uch kesimidan qaysi biri bilan ishlayapmiz?",
"o": [
"Oraliq (ko‘tariluvchi) kesim: ayrim tarmoqlarda resurslar taqchil bo‘la boshlagan",
"Klassik (vertikal) kesim: iqtisodiyot potensial darajada ishlayapti",
"Keynscha (gorizontal) kesim: bo‘sh resurslar bor",
"Gorizontal kesim, chunki firmalar xarajatlar oshgani sababli narxlarni qat’iy ushlaydi"
],
"c": 2,
"w": "Bo‘sh resurslar bor, firmalar qayd etilgan narxda ko‘proq ishlab chiqarishi mumkin: AD o‘sishi deyarli to‘liq Y ga o‘tadi."
},
{
"t": 6,
"q": "Klassik modelda markaziy bank pul massasini ikki baravar oshirdi. Pulning neytralligi va klassik dixotomiyaga ko‘ra nima kutiladi?",
"o": [
"Narxlar o‘zgarmaydi, real YaIM esa pul massasi kabi ikki baravar oshadi va bandlik ko‘payadi",
"Narxlar ikki baravar oshadi, real ish haqi pasayib, real YaIM esa qisqa muddatda oshadi",
"Nominal ish haqi o‘zgarmaydi, narxlar oshgani uchun real ish haqi ikki baravar kamayadi",
"Narxlar va nominal ish haqi taxminan ikki baravar oshadi; real ish haqi va Y o‘zgarmaydi"
],
"c": 3,
"w": "Nominal o‘zgaruvchilar (M, P, W) real o‘zgaruvchilarga (Y, W/P) ta’sir qilmaydi: bu klassik dixotomiya."
},
{
"t": 6,
"q": "Quyidagilardan qaysi biri AS egri chizig‘ini O‘NGGA siljitmaydi?",
"o": [
"Deregulyatsiya va biznes muhitining yaxshilanishi",
"Davlat xaridlarining oshishi",
"Milliy valyutaning qimmatlashishi tufayli import resurslarning arzonlashishi",
"Ishchilar malakasining va texnologiyalarning yaxshilanishi"
],
"c": 1,
"w": "Davlat xaridlari AD komponenti (G). Qolganlari xarajatlarni kamaytirib yoki unumdorlikni oshirib AS ni o‘ngga siljitadi."
},
{
"t": 6,
"q": "Firma rahbari: «Raqobatchilarim narxni oshirmasa, men birinchi bo‘lib oshirmayman». Blinder tadqiqotida bu narxlar qat’iyligining qaysi sababiga mos keladi?",
"o": [
"Xarajatlarga asoslangan narx belgilash (xarajatlar sekin o‘zgaradi)",
"Muvofiqlashtirish muammosi (raqobatchilarni kutish)",
"Narxdan boshqa omillar bo‘yicha raqobat (yetkazib berish muddati)",
"Psixologik narx chegaralari (9 990 so‘m kabi narxlar)"
],
"c": 1,
"w": "Bu eng ko‘p tilga olingan javob: firmalar bir-birining narx qarorini kutadi, natijada narxlar «yopishqoq» bo‘ladi."
},
{
"t": 6,
"q": "Markaziy bank energiya narxi oshishidan kelib chiqqan salbiy taklif shokini noto‘g‘ri talab shoki deb baholab, AD ni rag‘batlantirdi. Qisqa muddatda nimaga olib kelishi mumkin?",
"o": [
"Narxlar pasayadi, real YaIM potensialdan yuqoriga chiqib ketadi va bandlik kengayadi",
"Real YaIM yanada qisqaradi, narxlar darajasi esa deyarli o‘zgarmay qoladi",
"Narxlar va real YaIM ikkalasi ham tezda dastlabki darajaga qaytib keladi",
"Narxlar oshadi, Y potensialga yaqinlashadi; inflyatsion kutishlar kuchayishi mumkin"
],
"c": 3,
"w": "Akkomodatsion siyosat AD ni siljitadi: Y tiklanadi, lekin P yuqori darajada qoladi. Shok turi noto‘g‘ri aniqlansa, inflyatsion kutishlar oshishi mumkin."
},
{
"t": 6,
"q": "Qizib ketgan iqtisodiyotni sovutish uchun cheklovchi siyosat 18 oydan keyin ta’sir qila boshlaydi, shok esa 12 oydan keyin o‘z-o‘zidan so‘ndi. Faol siyosatga qarshi dalil sifatida bu holat nimani ko‘rsatadi?",
"o": [
"Cheklovchi siyosat har doim va hamma sharoitda AD ni o‘ngga siljitishini",
"Potensial YaIM har doim aniq baholanishini va shok turi osonlik bilan aniqlanishini",
"Siyosat laglari bo‘lmaganda ham faol siyosatning mutlaqo keraksiz bo‘lishini",
"Vaqt kechikishi tufayli siyosat tebranishlarni yumshatmasdan, kuchaytirishi mumkin"
],
"c": 3,
"w": "Lag (aniqlash, qaror, ta’sir) tufayli siyosat tsiklning noto‘g‘ri fazasiga to‘g‘ri kelishi mumkin; monetaristlar shu sababli qoidalarga tayanishni taklif qiladi."
},
{
"t": 6,
"q": "2020-yilda pandemiya bir vaqtda AD ni ham, SRAS ni ham chapga siljitdi. Bu holda qaysi o‘zgarish aniq (bir ma’noli) aytiladi?",
"o": [
"Real YaIM kamayadi, narxlar o‘zgarishi esa shoklarning nisbiy kuchiga bog‘liq",
"Narxlar oshadi, real YaIM ning o‘zgarishi noaniq",
"Narxlar ham, real YaIM ham aniq kamayadi",
"Real YaIM kamayadi va narxlar albatta oshadi (stagflyatsiya)"
],
"c": 0,
"w": "Ikkala shok ham Y ni kamaytiradi. Talab shoki P ni pasaytiradi, taklif shoki oshiradi: natija qaysi biri kuchliroqligiga bog‘liq."
},
{
"t": 6,
"q": "Salbiy taklif shokiga akkomodatsion siyosat va akkomodatsiyasiz yo‘lni taqqoslang. Qaysi xulosa to‘g‘ri?",
"o": [
"Akkomodatsiya Y ni tez tiklaydi, lekin narxlar yuqori qoladi; siyosatsiz — uzoq retsessiya, ammo narxlar qaytadi",
"Akkomodatsiya narxlarni dastlabki darajaga qaytaradi, siyosatsiz yo‘lda esa narxlar doimiy ravishda oshadi",
"Ikkala yo‘lda ham Y uzoq retsessiyada qoladi, ular faqat narxlar darajasi bilan farq qiladi",
"Akkomodatsiya Y ni va narxlarni ikkalasini ham dastlabki darajaga tez qaytaradi, bunda xarajatlar bo‘lmaydi"
],
"c": 0,
"w": "Akkomodatsiya: AD→, Y potensialga tez qaytadi, P yuqori. Siyosatsiz: ish haqi va narxlar pasayib, SRAS qaytadi, P dastlabki darajaga tushadi, lekin retsessiya uzoq."
},
{
"t": 6,
"q": "Nima uchun AD egri chizig‘ining pastga og‘ishini tushuntirishda mikroiqtisodiyotdagi almashtirish samarasi yetarli emas?",
"o": [
"Makroda barcha narxlar birga o‘zgaradi, nisbiy narxlar deyarli o‘zgarmaydi; shu sababli foiz, boylik va import samaralari ishlaydi",
"Makroda narxlar qayd etilgan, o‘zgaruvchi faqat pul massasi, shuning uchun daromad samarasi kuchayadi va AD og‘adi",
"Almashtirish samarasi faqat davlat xarajatlariga tegishli bo‘lib, uy xo‘jaliklari qarorlarida ishtirok etmaydi",
"Makroda yalpi talab faqat iste’moldan iborat, shuning uchun investitsiya va eksport hisobga olinmaydi"
],
"c": 0,
"w": "Mikroda boshqa narxlar qayd etilgan. Makroda barcha narxlar birga o‘zgaradi, shuning uchun uchta «baho omili» samaralari AD ning og‘ishini tushuntiradi."
},
{
"t": 6,
"q": "Aholida ishonch pasaydi: odamlar pulni tezroq sarflash o‘rniga ushlab tura boshladi (V kamaydi), M esa o‘zgarmadi. Miqdoriy nazariyadagi AD (Y = MV / P) uchun natija qanday?",
"o": [
"AD o‘ngga siljiydi, chunki aholida pul ko‘proq to‘planadi",
"AD chapga siljiydi; uni qaytarish uchun M ni oshirish kerak",
"AD siljimaydi, faqat egri chiziq bo‘ylab harakat bo‘ladi",
"AS egri chizig‘i pastga siljiydi, AD o‘zgarmaydi"
],
"c": 1,
"w": "Har bir P da Y = MV/P kamayadi — AD chapga. M ni V pasayishiga mos oshirib, AD ni avvalgi holatga qaytarish mumkin."
},
{
"t": 6,
"q": "Keynscha gorizontal SRAS sharoitida firmalarning tovar zaxiralari kutilmaganda ko‘paydi (talab pasaydi). Narxlar qat’iy. Muvozanat qaysi mexanizm orqali tiklanadi?",
"o": [
"Firmalar narxlarni darhol pasaytiradi va ishlab chiqarish hajmini o‘zgartirmaydi",
"Firmalar narxlarni oshiradi, shu bilan zaxiralar tez kamayadi va muvozanat tiklanadi",
"Firmalar ishlab chiqarishni qisqartiradi: moslashuv narx orqali emas, hajm orqali ro‘y beradi",
"Zaxiralar to‘planib boraveradi, chunki bunday sharoitda muvozanat mexanizmi ishlamaydi"
],
"c": 2,
"w": "Narxlar qat’iy bo‘lganda ortiqcha zaxira ishlab chiqarishni qisqartirishga olib keladi. Narxlar moslashuvi faqat uzoq muddatda."
},
{
"t": 6,
"q": "Iqtisodiyot retsessiya sharoitida (Y < Ȳ), siyosat aralashmaydi. Uzoq muddatda o‘z-o‘zini tiklash qaysi mexanizm orqali ro‘y beradi?",
"o": [
"Ishsizlik bosimida narxlar va ish haqi pasayadi, SRAS pastga siljiydi, Y ga qaytiladi",
"AD o‘z-o‘zidan o‘ngga siljiydi, chunki retsessiya iste’molni avtomatik oshiradi",
"LRAS chapga siljiydi, potensial YaIM qisqarib, haqiqiy darajaga tushib qoladi",
"Narxlar va ish haqi oshadi, SRAS yuqoriga siljib, muvozanat tiklanadi"
],
"c": 0,
"w": "Y < Ȳ bo‘lsa, ishsizlik ish haqini tushiradi, xarajatlar kamayadi, SRAS pastga siljiydi, P pasayadi va Y Ȳ gacha oshadi."
},
{
"t": 6,
"q": "Korxonalarga soliq yuki va tekshiruvlar kamaytirilib, deregulyatsiya o‘tkazildi. AD–AS tahlili bo‘yicha qisqa muddatli ta’sir qanday?",
"o": [
"AD o‘ngga siljiydi: real YaIM ham, narxlar ham oshadi",
"SRAS chapga siljiydi: real YaIM kamayadi, narxlar oshadi",
"AD chapga siljiydi: real YaIM va narxlar ikkalasi kamayadi",
"SRAS o‘ngga siljiydi: Y oshadi, P pasayadi"
],
"c": 3,
"w": "Biznes soliqlari va ma’muriy to‘siqlarning kamayishi xarajatlarni tushiradi, AS o‘ngga siljiydi: Y↑, P↓."
},
{
"t": 6,
"q": "Mahalliy narxlar pasayganda eksport kengayishi va import qisqarishi, buning natijasida NX oshishi AD egri chizig‘ining qaysi pastga og‘ish sababiga mos keladi?",
"o": [
"Foiz stavkasi samarasi (Keyns)",
"Boylik samarasi (Pigu)",
"Import xaridlari samarasi (Mandell–Fleming)",
"Almashtirish samarasi (mikroiqtisodiy)"
],
"c": 2,
"w": "P↓ → mahalliy tovarlar xorijiynikiga nisbatan arzonlashadi → X↑, IM↓ → NX↑ → AD↑. Bu Mandell–Fleming samarasi."
},
{
"t": 6,
"q": "Aholi ishonchi pasayib, pulning aylanish tezligi V = 4 dan 3,6 gacha tushdi. AD: Y = MV / P. M = 500 trln so‘m edi. AD ni avvalgi holatda saqlash uchun markaziy bank M ni taxminan qancha foizga oshirishi kerak?",
"o": [
"10,0% ga",
"9,1% ga",
"12,5% ga",
"11,1% ga"
],
"c": 3,
"w": "MV = 2000 saqlanishi kerak: M = 2000 / 3,6 = 555,6, ya’ni +11,1%. V 10% tushgani uchun M ni 10% oshirish yetmaydi."
},
{
"t": 7,
"q": "Iste’mol funksiyasi C = 150 + 0,6Y_d. Tasarrufdagi daromad 500 mln so‘m bo‘lganda APC va APS qanday?",
"o": [
"APC = 0,6; APS = 0,4",
"APC = 0,3; APS = 0,7",
"APC = 0,75; APS = 0,25",
"APC = 0,9; APS = 0,1"
],
"c": 3,
"w": "C = 150 + 0,6×500 = 450; APC = 450/500 = 0,9; APS = 1 – 0,9 = 0,1. MPC (0,6) bilan APC ni aralashtirmaslik kerak."
},
{
"t": 7,
"q": "C = 60 + 0,85Y bo‘lsa, «kritik» (nol jamg‘arma) nuqtadagi daromad qancha (mln so‘m)?",
"o": [
"400",
"70,6",
"340",
"51"
],
"c": 0,
"w": "C = Y shartidan 60 + 0,85Y = Y, bundan Y = 60/(1 – 0,85) = 400."
},
{
"t": 7,
"q": "Tasarrufdagi daromad 800 bo‘lganda jamg‘arma –10, 1000 bo‘lganda +40 ga teng. Chiziqli funksiya bo‘lsa, iste’mol funksiyasi qaysi?",
"o": [
"C = 210 + 0,25Y_d",
"C = 10 + 0,75Y_d",
"C = –210 + 0,75Y_d",
"C = 210 + 0,75Y_d"
],
"c": 3,
"w": "MPS = ΔS/ΔY_d = 50/200 = 0,25, demak MPC = 0,75. S = –C_a + 0,25Y_d: –10 = –C_a + 200, C_a = 210."
},
{
"t": 7,
"q": "Inson 50 yil yashashni kutadi, 40 yil ishlaydi, har yili 60 mln so‘m daromad oladi, dastlabki boyligi 300 mln so‘m. Hayot tsikli modelida iste’molni umr bo‘yi tekislasa, yillik iste’moli qancha?",
"o": [
"7,2 mln so‘m",
"54 mln so‘m",
"67,5 mln so‘m",
"48 mln so‘m"
],
"c": 1,
"w": "C = (W + RY)/T = (300 + 40×60)/50 = 2700/50 = 54. Boylikni yoki R ni e’tiborsiz qoldirish xato natija beradi."
},
{
"t": 7,
"q": "Fridmen modelida C = 0,9Y^P. Oilaning permanent daromadi 100, joriy daromadi esa tasodifiy mukofot tufayli 120 bo‘ldi. Shu yilgi APC qancha?",
"o": [
"0,75",
"0,90",
"0,83",
"0,60"
],
"c": 0,
"w": "C = 0,9×100 = 90; APC = C/Y = 90/120 = 0,75. Vaqtinchalik daromad (20) iste’molga deyarli ta’sir qilmaydi, shuning uchun APC 0,9 dan past."
},
{
"t": 7,
"q": "Fridmen modelida C = 0,9Y^P. Oilaning permanent daromadi 100 dan 110 ga oshdi va shu yili yana 20 birlik bir martalik tasodifiy daromad oldi. Iste’mol qanchaga oshadi?",
"o": [
"27",
"18",
"30",
"9"
],
"c": 3,
"w": "Faqat permanent daromad o‘zgarishi hisobga olinadi: ΔC = 0,9×10 = 9. Tranzitor 20 birlik iste’molni oshirmaydi."
},
{
"t": 7,
"q": "Investitsiyalar talabi I = 500 – 25r. Kredit stavkasi nominal 14%, kutilayotgan inflyatsiya 4%. Investitsiyalar hajmi qancha (r – foizlarda)?",
"o": [
"250",
"150",
"400",
"50"
],
"c": 0,
"w": "Qarorda real stavka olinadi: r = 14 – 4 = 10; I = 500 – 25×10 = 250. Nominal stavka bilan 150, inflyatsiyani qo‘shsak 50 chiqadi (xato)."
},
{
"t": 7,
"q": "Firmaning aksiyalar bozoridagi qiymati 1200, uning kapitalini hozirgi narxlarda qayta qurish qiymati 960. Tobin koeffitsiyenti va xulosa qaysi?",
"o": [
"q = 0,80; mavjud firmani sotib olish arzonroq, investitsiyalar qisqaradi",
"q = 1,25; mavjud firmalarni sotib olish arzonroq, investitsiyalar qisqaradi",
"q = 0,80; yangi kapital qurish foydali, investitsiyalar kengayadi",
"q = 1,25; yangi kapital qurish firmaga foydali, investitsiyalar kengayadi"
],
"c": 3,
"w": "q = bozor qiymati / almashtirish qiymati = 1200/960 = 1,25 > 1: bozor kapitalni qurish xarajatidan qimmat baholaydi, investitsiya rag‘batlanadi."
},
{
"t": 7,
"q": "Akselerator v = 2,5. Ishlab chiqarish 100 dan 110 ga, keyingi yili 118 ga o‘sdi. 2-yilda sof investitsiyalar 1-yilga nisbatan qanchaga o‘zgardi?",
"o": [
"5 ga oshdi",
"5 ga kamaydi",
"2 ga kamaydi",
"20 ga kamaydi"
],
"c": 1,
"w": "I_1 = 2,5×10 = 25; I_2 = 2,5×8 = 20; o‘zgarish –5. Ishlab chiqarish o‘sishda, lekin o‘sish sur’ati sekinlashgani uchun investitsiyalar qisqardi."
},
{
"t": 7,
"q": "Hukumat 6,5% o‘sishga erishmoqchi. ICOR = 4 bo‘lsa, investitsiyalarning YaIMdagi zarur ulushi qancha?",
"o": [
"1,6%",
"61,5%",
"10,5%",
"26%"
],
"c": 3,
"w": "ICOR = (I/Y)/g, demak I/Y = ICOR × g = 4×6,5 = 26%. Bo‘lish yoki qo‘shish xato natija beradi."
},
{
"t": 7,
"q": "Ochiq iqtisodiyotda: Y = 1000, T = 250, C = 600, G = 270, IM = 180, X = 150. I = S_p + S_g + S_f ayniyatidan investitsiyalar qancha?",
"o": [
"130",
"200",
"160",
"100"
],
"c": 2,
"w": "S_p = Y – T – C = 150; S_g = T – G = –20; S_f = IM – X = 30; I = 150 – 20 + 30 = 160."
},
{
"t": 7,
"q": "Loyihaning kutilayotgan sof foyda normasi 12%, bank krediti nominal 15%, kutilayotgan inflyatsiya 5%. Qaysi xulosa to‘g‘ri?",
"o": [
"Loyiha amalga oshirilmaydi: nominal stavka 15% foyda normasidan yuqori",
"Loyiha amalga oshiriladi: real stavka 10% foyda normasidan past",
"Loyiha amalga oshirilmaydi: real stavka 20% (15% + 5%) foyda normasidan yuqori",
"Loyiha amalga oshiriladi, chunki foyda normasi inflyatsiya darajasidan yuqori"
],
"c": 1,
"w": "Qarorda foyda normasi real foiz stavkasi (15 – 5 = 10%) bilan solishtiriladi: 12% > 10%."
},
{
"t": 7,
"q": "Mankyu ajratgan Keynsning uchta farazidan qaysi biri Keynsga TEGISHLI EMAS?",
"o": [
"MPC 0 dan katta, 1 dan kichik bo‘ladi, ya’ni qo‘shimcha daromadning bir qismi jamg‘ariladi",
"Foiz stavkasi iste’mol va jamg‘arishning asosiy belgilovchisidir",
"Iste’molga o‘rtacha moyillik daromad oshishi bilan kamayadi",
"Iste’molning asosiy belgilovchisi joriy daromad hisoblanadi"
],
"c": 1,
"w": "Keyns uchun foiz stavkasining ta’siri ahamiyatsiz; foiz stavkasini jamg‘arish omili deb hisoblash klassiklarga xos."
},
{
"t": 7,
"q": "Qaysi empirik natijalar kombinatsiyasi «Kuznets jumbog‘i»ni hosil qiladi?",
"o": [
"Kesim va qisqa muddatli qatorlarda APC o‘zgarmaydi, uzoq muddatli qatorlarda daromad bilan kamayadi",
"Qisqa va uzoq muddatli qatorlarda APC kamayadi, kesim ma’lumotlarida esa deyarli o‘zgarmaydi",
"Kesim ma’lumotlarida MPC manfiy, qisqa va uzoq muddatli qatorlarda esa musbat bo‘ladi",
"Kesim va qisqa muddatli qatorlarda APC daromad bilan kamayadi, uzoq muddatli qatorlarda deyarli o‘zgarmaydi"
],
"c": 3,
"w": "Keyns funksiyasi kesim va qisqa qatorlarda tasdiqlandi, Kuznets esa uzoq muddatda APC barqarorligini topdi; shu nomuvofiqlik jumboqdir."
},
{
"t": 7,
"q": "Hayot tsikli modelida APC = αW/Y + β. Retsessiya yilida daromad vaqtincha pasaydi, boylik deyarli o‘zgarmadi. APC qanday o‘zgaradi?",
"o": [
"Kamayadi: W/Y nisbati kamayadi, iste’mol daromadga proporsional o‘zgaradi",
"O‘zgarmaydi: APC faqat β = R/T koeffitsiyentiga teng bo‘ladi",
"Oshadi: W/Y nisbati ortadi, iste’mol daromadchalik pasaymaydi",
"Oshadi: β koeffitsiyenti daromad pasayishi bilan ortadi"
],
"c": 2,
"w": "Y pasaysa, W/Y ortadi va αW/Y ortadi; β = R/T daromad o‘zgarishi bilan o‘zgarmaydi."
},
{
"t": 7,
"q": "Hukumat soliqlarni faqat bir yilga kamaytirdi. Nazariyalar bo‘yicha iste’molga ta’sirning kuchi (kuchlidan zaifga) qaysi tartibda?",
"o": [
"Fridmen > Modilyani > Keyns",
"Modilyani > Keyns > Fridmen",
"Keyns > Modilyani > Fridmen",
"Keyns > Fridmen > Modilyani"
],
"c": 2,
"w": "Keynsda MPC yuqori, shu sababli ta’sir kuchli; hayot tsikli – zaif; permanent daromad – juda zaif, chunki vaqtinchalik o‘zgarish permanent daromadni deyarli o‘zgartirmaydi."
},
{
"t": 7,
"q": "Bir martalik soliq qaytarilishidan iste’molga sarflangan ulush sof permanent daromad modelidagidan yuqori, oddiy Keyns modelidagidan past bo‘ldi. Eng ishonarli izoh qaysi?",
"o": [
"Qarz ololmaydigan (likvidlik cheklovli) oilalar vaqtinchalik daromadni ham joriy iste’molga sarflaydi",
"Iste’mol faqat boylikka bog‘liq bo‘lib, joriy daromadga umuman bog‘liq emas",
"Foiz stavkasi iste’molning asosiy belgilovchisi bo‘lib, daromad ta’siri ahamiyatsiz",
"Barcha oilalar vaqtinchalik daromadni permanent daromad deb xato hisoblaydi"
],
"c": 0,
"w": "Mankyuga ko‘ra likvidlik cheklovlari tufayli vaqtinchalik daromad ham joriy iste’molni oshiradi."
},
{
"t": 7,
"q": "Quyidagilardan qaysi biri iste’mol funksiyasini siljitmaydi, balki uning bo‘ylab harakatga olib keladi?",
"o": [
"Uy-joy narxlarining oshishi (boylik effekti)",
"Kelajakda daromadlar oshishini kutish",
"Soliqlar oshishi tufayli Y_d ning kamayishi",
"Uy xo‘jaliklari qarzdorligining oshishi"
],
"c": 2,
"w": "Y_d o‘zgarishi funksiya bo‘ylab harakat; boylik, kutish va qarzdorlik esa funksiyaning o‘zini siljitadi."
},
{
"t": 7,
"q": "C = C_a + cY_d (C_a > 0) funksiyada Y_d > 0 bo‘lganda MPC va APC o‘rtasidagi munosabat qaysi?",
"o": [
"APC < MPC; daromad oshgani sari ular uzoqlashadi",
"APC = MPC barcha daromad darajalarida",
"APC > MPC; daromad oshgani sari ular uzoqlashadi",
"APC > MPC; daromad oshgani sari APC MPC ga yaqinlashadi"
],
"c": 3,
"w": "APC = C_a/Y_d + c, shuning uchun APC > c va Y_d oshganda birinchi had kamayib, APC → c."
},
{
"t": 7,
"q": "Avtonom iste’mol C_a oshdi, c o‘zgarmadi. «Kritik» nuqta va jamg‘arish funksiyasining gorizontal o‘qni kesish nuqtasi qanday o‘zgaradi?",
"o": [
"Ikkalasi chapga siljiydi, chunki iste’mol ortgan",
"Kritik nuqta o‘ngga siljiydi, jamg‘arish funksiyasining qiyaligi ortadi",
"Ikkalasi o‘ngga siljiydi, jamg‘arish funksiyasining qiyaligi o‘zgarmaydi",
"O‘zgarmaydi, chunki c o‘zgarmagan"
],
"c": 2,
"w": "Kritik daromad C_a/(1 – c) ortadi; S = –C_a + (1 – c)Y_d ning qiyaligi (1 – c) o‘zgarmaydi."
},
{
"t": 7,
"q": "Aksiyalar bozorida firma qiymati keskin tushdi, kapitalni qayta sotib olish narxlari esa o‘zgarmadi. Tobin koeffitsiyenti va investitsiyalar haqida xulosa?",
"o": [
"q kamayadi, lekin investitsiyalar ortadi",
"q kamayadi, investitsiyalar qisqarishi kutiladi",
"q ortadi, investitsiyalar kengayadi",
"q o‘zgarmaydi, chunki almashtirish qiymati o‘zgarmagan"
],
"c": 1,
"w": "q suratdagi bozor qiymati kamaygani sari pasayadi; q < 1 bo‘lsa yangi kapital qurishdan ko‘ra mavjud firmani sotib olish arzon, investitsiya qisqaradi."
},
{
"t": 7,
"q": "Qaysi holatda akselerator modeliga ko‘ra sof investitsiyalar qisqaradi, garchi ishlab chiqarish o‘sishda davom etsa ham?",
"o": [
"Ishlab chiqarish ketma-ket 100, 110, 119",
"Ishlab chiqarish ketma-ket 100, 110, 121",
"Ishlab chiqarish ketma-ket 100, 110, 120",
"Ishlab chiqarish ketma-ket 100, 100, 110"
],
"c": 0,
"w": "I = v×ΔY. 119 holatida ΔY 10 dan 9 ga tushadi, investitsiya kamayadi; 121 da ΔY o‘sadi; 120 da o‘zgarmaydi; oxirgisida ortadi."
},
{
"t": 7,
"q": "Quyidagilardan qaysi biri investitsiyalar beqarorligining sababi HISOBLANMAYDI?",
"o": [
"Kapital tovarlarning uzoq xizmat muddati va almashtirishni kechiktirish imkoni",
"Innovatsiyalarning notekis, to‘lqinsimon kelishi",
"Investitsiya qilingan kapitalni yo‘qotishsiz qayta sotish imkoniyati",
"Talab o‘sish sur’atining kichik o‘zgarishi investitsiyani katta o‘zgartirishi"
],
"c": 2,
"w": "Aksincha, kapitalni qaytarib sotib bo‘lmasligi noaniqlikda «kutish va kuzatish»ga olib keladi va beqarorlik manbai bo‘ladi."
},
{
"t": 7,
"q": "Quyidagilardan qaysi biri INDUKSIYALANGAN investitsiyaga misol?",
"o": [
"Sotuv hajmi barqaror o‘sgani uchun firmaning ishlab chiqarish quvvatini kengaytirishi",
"Yangi texnologiya paydo bo‘lgani uchun uskunalarni almashtirish",
"Davlatning uzoq muddatli strategik dasturi doirasida zavod qurilishi",
"Aholi sonining o‘zgarishi tufayli uy-joy qurilishi"
],
"c": 0,
"w": "Induksiyalangan investitsiyalar daromad (talab) o‘zgarishiga bog‘liq (akselerator); qolganlari avtonom omillar."
},
{
"t": 7,
"q": "Quyidagi hodisalardan qaysi biri investitsiyalarga talab egri chizig‘i bo‘ylab harakat emas, uning siljishiga olib keladi?",
"o": [
"Biznes kayfiyati yaxshilanib, kutilayotgan foydaning ortishi",
"Markaziy bank real foiz stavkasini pasaytirishi",
"Real foiz stavkasi oshib, ayrim loyihalarning foydasiz bo‘lib qolishi",
"Kreditlar qimmatlashgani uchun firmalarning investitsiyani qisqartirishi"
],
"c": 0,
"w": "Real foiz stavkasi o‘zgarishi I = e – dr bo‘ylab harakat; kutishlar, texnologiya, soliq kabi omillar e ni o‘zgartirib, egri chiziqni siljitadi."
},
{
"t": 7,
"q": "Aholi tarkibida o‘rta yoshdagi (daromadi iste’moldan yuqori) ishlovchilar ulushi oshdi, yoshlar va keksalar ulushi kamaydi. Hayot tsikli gipotezasiga ko‘ra yalpi jamg‘arma normasi qanday o‘zgaradi?",
"o": [
"Kamayadi: o‘rta yoshdagilar uy-joy va ta’lim uchun eng ko‘p qarz oladi",
"O‘zgarmaydi: iste’mol umr bo‘yi tekis bo‘lgani uchun yosh tarkibi ahamiyatsiz",
"Oshadi: o‘rta yoshda pensiya uchun jamg‘arish eng yuqori bo‘ladi",
"Kamayadi: foiz stavkasining ta’siri o‘rta yoshda kuchayadi"
],
"c": 2,
"w": "Hayot tsikli gipotezasiga ko‘ra yoshlar qarz oladi, o‘rta yoshdagilar jamg‘aradi, keksalar sarflaydi; o‘rta yosh ulushi ortsa, yalpi jamg‘arma ortadi."
},
{
"t": 7,
"q": "Mankyu keksalar jamg‘armalarini kutilgandek tez sarflamasligini izohlaganda quyidagilardan qaysi birini KELTIRMAYDI?",
"o": [
"Umr davomiyligi va tibbiy xarajatlar noaniqligi tufayli ehtiyotkorlik jamg‘armasi",
"Keksalar iste’moli faqat joriy daromadga bog‘liq ekanligini («asosiy psixologik qonun»)",
"Farzandlar va nevaralarga meros qoldirish istagi",
"Oilaviy qadriyatlar kuchli jamiyatlarda bu omillarning ahamiyati kattaligi"
],
"c": 1,
"w": "Mankyu ikki sababni ko‘rsatadi: ehtiyotkorlik jamg‘armasi va meros qoldirish istagi."
},
{
"t": 7,
"q": "I = S_p + S_g + S_f. Xususiy jamg‘arma va investitsiyalar o‘zgarmagan holda byudjet defitsiti kengayib, S_g 30 ga kamaydi. S_f = IM – X qanday o‘zgaradi?",
"o": [
"30 ga ortadi (xorijdan kapital oqimi kuchayadi)",
"30 ga kamayadi (xorijga kapital chiqib ketadi)",
"O‘zgarmaydi, chunki investitsiya va xususiy jamg‘arma o‘zgarmagan",
"60 ga ortadi (defitsit ikki baravar ta’sir qiladi)"
],
"c": 0,
"w": "I va S_p o‘zgarmas bo‘lsa, S_g + S_f yig‘indisi ham o‘zgarmaydi: S_g –30 bo‘lsa, S_f +30 bo‘lishi kerak."
},
{
"t": 7,
"q": "Keyns funksiyasiga tayanib urushdan keyin «sekulyar stagnatsiya» bashorat qilingan edi. Bu bashorat qanday mantiqqa asoslangan va nega amalga oshmadi?",
"o": [
"Daromad ortishi bilan APC oshib talab haddan ortadi deb kutilgan; ammo jamg‘arma normasi tushdi",
"Daromad ortishi bilan APC kamayib jamg‘arma normasi oshadi, talab yetishmaydi deb kutilgan; ammo uzoq muddatda APC barqaror qoldi",
"MPC birdan katta deb hisoblangan; ammo aslida MPC nolga teng chiqdi",
"Foiz stavkasi jamg‘armani belgilaydi deb kutilgan; ammo foiz stavkasi o‘zgarmadi"
],
"c": 1,
"w": "Keyns APC ning pasayishidan jamg‘arma normasi oshib, talab yetishmasligi kelib chiqadi deb hisoblagan; Kuznets natijalari uzoq muddatda APC barqarorligini ko‘rsatdi."
},
{
"t": 8,
"q": "C = 120 + 0,8(Y – T), I = 180, G = 250, T = 200 (mlrd so‘m). Muvozanatli daromad qancha?",
"o": [
"1950",
"2750",
"3550",
"487,5"
],
"c": 0,
"w": "A = 120 – 0,8×200 + 180 + 250 = 390; Y* = 390/(1 – 0,8) = 1950. Soliqni e’tiborsiz qoldirsak 2750, qo‘shsak 3550 chiqadi (xato)."
},
{
"t": 8,
"q": "PE = 300 + 0,7Y. Firmalar 1500 birlik ishlab chiqardi. Rejalashtirilmagan zaxira o‘zgarishi va keyingi davrdagi ishlab chiqarish tendensiyasi qanday?",
"o": [
"Zaxira 150 ga kamayadi; ishlab chiqarish oshadi",
"Zaxira 150 ga ortadi; ishlab chiqarish oshadi",
"Zaxira 150 ga ortadi; ishlab chiqarish qisqaradi",
"Zaxira 500 ga ortadi; ishlab chiqarish qisqaradi"
],
"c": 2,
"w": "PE = 300 + 0,7×1500 = 1350; Y – PE = 150 > 0 – tovar sotilmay omborda qoladi. Muvozanat Y* = 300/0,3 = 1000, ishlab chiqarish kamayadi."
},
{
"t": 8,
"q": "MPC 0,8 dan 0,75 ga tushdi. 40 mlrd so‘mlik avtonom xarajatlar o‘sishining daromadga ta’siri qanday o‘zgaradi?",
"o": [
"10 mlrd so‘mga kamayadi (MPC farqi bo‘yicha)",
"8 mlrd so‘mga kamayadi (40×0,2)",
"40 mlrd so‘mga kamayadi (200 dan 160 ga)",
"40 mlrd so‘mga ortadi (multiplikator oshadi)"
],
"c": 2,
"w": "k = 1/(1 – 0,8) = 5 → ΔY = 200; k = 1/(1 – 0,75) = 4 → ΔY = 160. Farq 40."
},
{
"t": 8,
"q": "c = 0,8, samarali soliq stavkasi t = 0,25, importga chegaraviy moyillik m = 0,2. Ochiq iqtisodiyot multiplikatori qancha?",
"o": [
"2,5",
"≈ 1,67",
"5",
"1,25"
],
"c": 1,
"w": "k = 1/(1 – c(1 – t) + m) = 1/(1 – 0,6 + 0,2) = 1/0,6 ≈ 1,67. m ni tashlab ketsak 2,5, t va m ni tashlab ketsak 5 chiqadi."
},
{
"t": 8,
"q": "Eksport X = 300 (avtonom), import IM = 50 + 0,2Y. Y = 1200 bo‘lganda sof eksport qancha?",
"o": [
"60",
"250",
"550",
"10"
],
"c": 3,
"w": "NX = X – IM_a – mY = 300 – 50 – 0,2×1200 = 10."
},
{
"t": 8,
"q": "Ochiq iqtisodiyot: C = 100 + 0,8(Y – T), T = 150, I = 200, G = 150, X = 120, IM = 0,1Y. Muvozanatli daromad qancha?",
"o": [
"2250",
"1500",
"1900",
"642,9"
],
"c": 1,
"w": "PE = 100 – 120 + 200 + 150 + 120 + 0,8Y – 0,1Y = 450 + 0,7Y; Y = 450/0,3 = 1500."
},
{
"t": 8,
"q": "S = –50 + 0,2(Y – T), T = 100, I = 140, G = 110. S + T = I + G shartidan muvozanatli Y qancha?",
"o": [
"1600",
"550",
"1100",
"1250"
],
"c": 2,
"w": "–50 + 0,2(Y – 100) + 100 = 250 ⇒ 0,2Y = 220 ⇒ Y = 1100. Soliq T ni chiqib ketish sifatida qo‘shmasak 1600 chiqadi."
},
{
"t": 8,
"q": "Muvozanatli YaIM 2400, potensial YaIM 2600, MPC = 0,6 (soliqlar qayd etilgan, yopiq iqtisodiyot). Retsession uzilish qancha?",
"o": [
"200",
"120",
"500",
"80"
],
"c": 3,
"w": "k = 1/(1 – 0,6) = 2,5; retsession uzilish = (2600 – 2400)/2,5 = 80. YaIM uzilishi (200) bilan aralashtirmaslik kerak."
},
{
"t": 8,
"q": "Muvozanatli YaIM 3000, potensial YaIM 2800, MPC = 0,75. Inflyatsion uzilish qancha?",
"o": [
"50",
"200",
"800",
"150"
],
"c": 0,
"w": "k = 4; inflyatsion uzilish = (3000 – 2800)/4 = 50: xarajatlarni shuncha kamaytirish kerak."
},
{
"t": 8,
"q": "MPC = 0,75, soliqlar daromadga bog‘liq emas, yopiq iqtisodiyot. G va T bir vaqtda 40 ga oshirildi. Muvozanatli daromad qanchaga o‘zgaradi?",
"o": [
"O‘zgarmaydi",
"40 ga ortadi",
"160 ga ortadi",
"120 ga ortadi"
],
"c": 1,
"w": "ΔY = k×ΔG + k_T×ΔT = 4×40 – 3×40 = 40 (balanslangan byudjet multiplikatori 1 ga teng)."
},
{
"t": 8,
"q": "Jamiyat avtonom iste’molni 20 ga kamaytirdi (MPC = 0,75), investitsiyalar avtonom. Yangi muvozanatda daromad va jami jamg‘arma qanday o‘zgaradi?",
"o": [
"Daromad 20 ga kamayadi; jamg‘arma 20 ga ortadi",
"Daromad 80 ga kamayadi; jamg‘arma 80 ga kamayadi",
"Daromad 80 ga kamayadi; jamg‘arma o‘zgarmaydi",
"Daromad 60 ga kamayadi; jamg‘arma 20 ga ortadi"
],
"c": 2,
"w": "ΔY = 4×(–20) = –80. Muvozanatda S = I (avtonom), shuning uchun jamg‘arma o‘zgarmaydi: tejamkorlik paradoksi."
},
{
"t": 8,
"q": "ΔG = 100 mlrd so‘m, MPC = 0,6. Birlamchi (1-raund) xarajatni ham qo‘shib, dastlabki uch raunddan keyin jami daromad o‘sishi qancha?",
"o": [
"250 mlrd so‘m",
"160 mlrd so‘m",
"196 mlrd so‘m",
"216 mlrd so‘m"
],
"c": 2,
"w": "100 + 60 + 36 = 196. To‘liq multiplikatsiya 100/0,4 = 250 ga cheksiz raunddan keyin yaqinlashadi."
},
{
"t": 8,
"q": "c = 0,9, proporsional soliq stavkasi t = 0,2 (import yo‘q). Davlat xaridlari 50 ga oshsa, daromad taxminan qanchaga oshadi?",
"o": [
"500",
"≈ 178,6",
"250",
"≈ 166,7"
],
"c": 1,
"w": "k = 1/(1 – c(1 – t)) = 1/(1 – 0,72) ≈ 3,57; ΔY = 50×3,57 ≈ 178,6. Soliqni hisobga olmasak 500 chiqadi."
},
{
"t": 8,
"q": "MPC = 0,6 (yopiq, T qayd etilgan). Daromadni 90 ga oshirish uchun nima qilish kerak?",
"o": [
"G ni 60 ga oshirish yoki soliqlarni 36 ga kamaytirish",
"G ni 36 ga oshirish yoki soliqlarni 60 ga kamaytirish",
"G ni 36 ga oshirish yoki soliqlarni 36 ga kamaytirish",
"G ni 54 ga oshirish yoki soliqlarni 60 ga kamaytirish"
],
"c": 1,
"w": "k = 2,5 ⇒ ΔG = 90/2,5 = 36; k_T = –0,6/0,4 = –1,5 ⇒ ΔT = –90/1,5 = –60."
},
{
"t": 8,
"q": "A iqtisodiyotda c = 0,8, t = 0,1, m = 0,1; B iqtisodiyotda c = 0,8, t = 0,3, m = 0,3. Eksport 100 ga kamaysa, daromad taxminan qanchaga qisqaradi?",
"o": [
"A: ≈ 135, B: ≈ 263",
"A: ≈ 357, B: ≈ 227",
"A: ≈ 263, B: ≈ 135",
"A: 500, B: 500"
],
"c": 2,
"w": "k_A = 1/(1 – 0,72 + 0,1) ≈ 2,63; k_B = 1/(1 – 0,56 + 0,3) ≈ 1,35. Ko‘proq «chiqib ketish»li iqtisodiyot shoklarga kamroq sezgir."
},
{
"t": 8,
"q": "Quyidagilardan qaysi biri Keynsning klassik nazariyaga tanqidiga KIRMAYDI?",
"o": [
"Jamg‘arma asosan foiz stavkasiga bog‘liq, shu sababli foiz jamg‘arma va investitsiyani tenglashtiradi",
"Jamg‘arish va investitsiya qarorlarini turli subyektlar turli sabablarga ko‘ra qabul qiladi",
"Jamg‘armalar asosan daromadga bog‘liq",
"Narxlar va ish haqi qisqa muddatda qat’iy"
],
"c": 0,
"w": "Birinchi variant aynan klassiklarning mantiqi; Keyns uni rad etgan."
},
{
"t": 8,
"q": "Firmalar rejalashtirganidan 12 birlik kam sotdi. Qaysi xulosa to‘g‘ri?",
"o": [
"Haqiqiy xarajatlar YaIMdan 12 ga kam bo‘ladi, shuning uchun firmalar ishlab chiqarishni oshiradi",
"Haqiqiy va rejalashtirilgan xarajatlar teng bo‘ladi, shuning uchun zaxiralar o‘zgarmaydi",
"Rejalashtirilgan xarajatlar YaIMdan katta, shuning uchun firmalar ishlab chiqarishni oshiradi",
"Haqiqiy xarajatlar rejalashtirilganidan 12 ga katta, chunki sotilmagan tovar zaxira investitsiyasi sifatida hisoblanadi; ishlab chiqarish qisqaradi"
],
"c": 3,
"w": "Haqiqiy xarajat = Y = PE + rejalashtirilmagan zaxira o‘zgarishi; PE < Y, shuning uchun firmalar ishlab chiqarishni qisqartiradi."
},
{
"t": 8,
"q": "Quyidagilardan qaysi biri PE chizig‘ining parallel siljishini emas, balki QIYALIGINI o‘zgartiradi?",
"o": [
"Davlat xaridlarining avtonom oshishi",
"Eksport talabining chet eldagi daromad oshishi tufayli ortishi",
"Avtonom investitsiyalarning oshishi",
"Iste’molga chegaraviy moyillikning kamayishi"
],
"c": 3,
"w": "PE = A + cY: G, X, I faqat A ni o‘zgartiradi (siljish), c esa qiyalikni o‘zgartiradi."
},
{
"t": 8,
"q": "Daromadning joriy darajasida rejalashtirilgan jamg‘arma 180, rejalashtirilgan investitsiya 150 (yopiq, davlatsiz iqtisodiyot). Nima sodir bo‘ladi?",
"o": [
"Rejalashtirilmagan zaxiralar 30 ga kamayadi, ishlab chiqarish va daromad oshadi",
"Iqtisodiyot muvozanatda, chunki ex post S = I har doim bajariladi",
"Rejalashtirilmagan zaxiralar 30 ga ortadi, ishlab chiqarish va daromad kamayadi",
"Ex post jamg‘arma 30 ga kamayadi, daromad esa o‘zgarmaydi"
],
"c": 2,
"w": "S > I_r ⇒ iste’mol yetarli emas, haqiqiy investitsiya I_h = I_r + 30 (zaxira); S = I_h ex post tenglik saqlanadi, lekin muvozanat emas – daromad qisqaradi."
},
{
"t": 8,
"q": "Quyidagilardan qaysi biri avtonom xarajatlar multiplikatorini KAMAYTIRMAYDI?",
"o": [
"Importga chegaraviy moyillikning oshishi",
"Proporsional soliq stavkasining oshishi",
"Jamg‘arishga chegaraviy moyillikning oshishi",
"Davlat xaridlarining avtonom qismi hajmining oshishi"
],
"c": 3,
"w": "k MPS, t va m ning funksiyasi; avtonom G ning hajmi k ni emas, faqat muvozanatli daromadni oshiradi."
},
{
"t": 8,
"q": "Quyidagilardan qaysi biri Keyns xochi modelining soddalashtiruvchi farazlariga KIRMAYDI?",
"o": [
"Narxlar darajasi qayd etilgan, nominal va real kattaliklar bir xil o‘zgaradi",
"Foiz stavkasi qayd etilgan, pul bozori hisobga olinmaydi",
"Investitsiyalar, davlat xaridlari va soliqlar ekzogen (avtonom) hisoblanadi",
"Barcha resurslar to‘liq band, shuning uchun talab oshsa narxlar oshadi"
],
"c": 3,
"w": "Modelda foydalanilmayotgan resurslar bor va firmalar joriy narxlarda har qanday talabni qondirishga tayyor."
},
{
"t": 8,
"q": "Ochiq iqtisodiyotda (m > 0) davlat xaridlari oshdi, boshqa avtonom omillar o‘zgarmadi. Natija qanday?",
"o": [
"Daromad ortadi, importning ko‘payishi hisobiga sof eksport kamayadi",
"Daromad ortadi, sof eksport ham ortadi",
"Daromad o‘zgarmaydi, chunki import ortishi uni to‘liq «yutadi»",
"Daromad yopiq iqtisodiyotdagidan ko‘proq ortadi, sof eksport kamayadi"
],
"c": 0,
"w": "Ochiq iqtisodiyotda multiplikator kichikroq, daromad oshgani sari IM = IM_a + mY ortadi va NX = NX_a – mY kamayadi."
},
{
"t": 8,
"q": "Quyidagi vaziyatlardan qaysi birida tejamkorlik paradoksi amal qiladi?",
"o": [
"Qisqa muddatda, foydalanilmayotgan resurslar mavjud va jamg‘armalar investitsiyaga aylanmaganda",
"Uzoq muddatda, iqtisodiyot to‘liq bandlikda va jamg‘armalar to‘liq investitsiyaga aylanganda",
"Narxlar to‘liq moslashgan va ishlab chiqarish potensial darajada bo‘lganda",
"Faqat bitta oila jamg‘arishni oshirganda"
],
"c": 0,
"w": "Paradoks yalpi talab yetishmasligi mavjud qisqa muddatli Keyns sharoitida amal qiladi; uzoq muddatda yuqori jamg‘arma o‘sishni rag‘batlantiradi."
},
{
"t": 8,
"q": "Rejalashtirilgan investitsiya I = 100 + 0,1Y. Uy xo‘jaliklari jamg‘arish moyilligini oshirdi. Yangi muvozanatda jami jamg‘arma dastlabkiga nisbatan qanday?",
"o": [
"O‘zgarmaydi, chunki muvozanatda S = I har doim saqlanadi",
"Oshadi, chunki har bir daromad darajasida jamg‘arish ko‘p",
"Oshadi, chunki multiplikator ortadi",
"Kamayadi: daromad pasayishi bilan induksiyalangan investitsiyalar kamayadi va S = I"
],
"c": 3,
"w": "Y pasayadi ⇒ I = 100 + 0,1Y kamayadi ⇒ muvozanatdagi S = I ham kamayadi."
},
{
"t": 8,
"q": "Mankyuga ko‘ra, Keyns xochi IS egri chizig‘iga o‘tishda nima qo‘shiladi?",
"o": [
"Investitsiyalarning foiz stavkasiga bog‘liqligi",
"Avtonom xarajatlarning daromadga multiplikativ ta’siri",
"Rejalashtirilmagan zaxiralar orqali muvozanatga erishish mexanizmi",
"Davlat xaridlari va soliqlarning ekzogen deb olinishi"
],
"c": 0,
"w": "Keyns xochida foiz stavkasi qayd etilgan; keyingi qadamda I ning r ga bog‘liqligi kiritilib, IS egri chizig‘i hosil qilinadi."
},
{
"t": 8,
"q": "Mankyuga ko‘ra, hududiy multiplikator milliy multiplikatordan nima uchun farq qilishi mumkin?",
"o": [
"Milliy darajada soliqlar va monetar siyosat ham javoban o‘zgaradi",
"Hududlarda iste’molga chegaraviy moyillik doim 1 ga teng bo‘ladi",
"Milliy darajada import umuman bo‘lmagani uchun multiplikator kattaroq bo‘ladi",
"Hududiy tahlilda narxlar qayd etilmagani uchun multiplikator kichikroq bo‘ladi"
],
"c": 0,
"w": "Hududlararo taqqoslashda monetar va soliq siyosati hamma hududlarga bir xil; milliy darajada esa ular o‘zgaradi, shu sababli multiplikator farq qiladi."
},
{
"t": 8,
"q": "MPC ortsa, bir xil YaIM uzilishida retsession uzilish qanday o‘zgaradi?",
"o": [
"Ortadi: MPC oshgani sari YaIM uzilishi ham ko‘payadi va uni yopish qiyinlashadi",
"Kamayadi: multiplikator ortadi, (Y* – Y_1)/k kichrayadi",
"Kamayadi: MPC ortishi bilan YaIM uzilishining o‘zi kamayadi",
"O‘zgarmaydi: retsession uzilish MPC ga bog‘liq emas, faqat potensial YaIMga bog‘liq"
],
"c": 1,
"w": "Retsession uzilish = YaIM uzilishi / k; k = 1/(1 – MPC) ortgani sari kerakli xarajat qo‘shimchasi kichrayadi."
},
{
"t": 8,
"q": "Qayd etilgan narxli modelda muvozanatli daromad potensialdan 150 ga yuqori chiqdi. Real iqtisodiyotda nima kutiladi?",
"o": [
"Ishlab chiqarish potensialdan 150 ga doimiy yuqori bo‘lib, narxlar barqaror qoladi",
"Ishlab chiqarish potensialdan uzoq oshib keta olmaydi; ortiqcha talab narxlar o‘sishiga (talab inflyatsiyasiga) olib keladi",
"Ortiqcha talab bandlikni qisqartirib, ishsizlik darajasini oshiradi",
"Ortiqcha talab tufayli rejalashtirilmagan zaxiralar ko‘payadi, ishlab chiqarish qisqaradi"
],
"c": 1,
"w": "Inflyatsion uzilishda yalpi talab imkoniyatdan oshgan, shuning uchun narxlar oshadi; zaxiralar esa kamayadi, ishsizlik pasayadi."
},
{
"t": 8,
"q": "Ishlab chiqarish muvozanatdan past (Y_1 < Y*). Moslashuv mexanizmi qanday ishlaydi?",
"o": [
"PE > Y, zaxiralar kutilmaganda kamayadi, firmalar ishlab chiqarish va bandlikni oshiradi",
"PE > Y, narxlar oshadi va Y muvozanatga qaytadi",
"PE < Y, zaxiralar to‘planadi, firmalar ishlab chiqarishni qisqartiradi",
"PE = Y, lekin ish haqi pasayib bandlik oshadi"
],
"c": 0,
"w": "Keyns xochida narxlar emas, ishlab chiqarish hajmi zaxiralar signali orqali moslashadi."
},
{
"t": 9,
"q": "Pul bazasi B = 200 trln so‘m, deponentlash koeffitsiyenti cr = 0,4, zaxira normasi rr = 0,1. Mankyu modeliga ko‘ra pul massasi qancha?",
"o": [
"2000 trln so‘m",
"560 trln so‘m",
"700 trln so‘m",
"280 trln so‘m"
],
"c": 1,
"w": "m = (cr + 1)/(cr + rr) = 1,4/0,5 = 2,8; M = 2,8 × 200 = 560. 2000 — oddiy bank multiplikatori 1/rr ni noto‘g‘ri qo‘llash natijasi."
},
{
"t": 9,
"q": "Iqtisodiyotda B = 100 va rr = 0,1. Raqamli to‘lovlar tufayli cr 0,2 dan 0,1 gacha kamaydi, Markaziy bank esa hech narsa qilmadi. Pul massasi qanday o‘zgaradi?",
"o": [
"100 ga oshadi",
"50 ga oshadi",
"150 ga kamayadi",
"150 ga oshadi"
],
"c": 3,
"w": "Dastlab m = 1,2/0,3 = 4, M = 400; keyin m = 1,1/0,2 = 5,5, M = 550. O‘zgarish +150."
},
{
"t": 9,
"q": "Bir yilda pul massasi 8 foizga oshdi, real YaIM 3 foizga o‘sdi, pulning aylanish tezligi esa 2 foizga kamaydi. MV = PY tenglamasiga ko‘ra narxlar darajasi taxminan qanday o‘zgaradi?",
"o": [
"3 foizga oshadi",
"5 foizga oshadi",
"7 foizga oshadi",
"13 foizga oshadi"
],
"c": 0,
"w": "ΔP/P ≈ ΔM/M + ΔV/V – ΔY/Y = 8 – 2 – 3 = 3 foiz. 5 foiz — V ning o‘zgarishi hisobga olinmagan xato."
},
{
"t": 9,
"q": "Kembrij tenglamasida (M^D = k × PY) k = 0,2, real YaIM Y = 400, pul taklifi M = 240. Pul bozori muvozanatda bo‘lishi uchun narxlar darajasi P qancha bo‘lishi kerak?",
"o": [
"0,6",
"5",
"3",
"0,12"
],
"c": 2,
"w": "M = kPY dan P = M/(kY) = 240/(0,2 × 400) = 3."
},
{
"t": 9,
"q": "Yiliga 12 ming so‘m kupon to‘laydigan muddatsiz obligatsiya narxi P = kupon / r formulasi bilan aniqlanadi. Bozor foiz stavkasi 8% dan 6% ga tushsa, obligatsiya narxi qanday o‘zgaradi?",
"o": [
"200 dan 150 ming so‘mgacha tushadi",
"150 dan 175 ming so‘mgacha oshadi",
"150 dan 200 ming so‘mgacha oshadi",
"o‘zgarmaydi, chunki kupon qayd etilgan"
],
"c": 2,
"w": "12/0,08 = 150; 12/0,06 = 200. Foiz va obligatsiya narxi o‘rtasidagi bog‘liqlik teskari va chiziqli emas."
},
{
"t": 9,
"q": "Pulga talab (M/P)^D = 0,5Y – 40r (r – foiz punktlarida). Y = 400, real pul taklifi M/P = 140. Muvozanatli foiz stavkasi qancha?",
"o": [
"1,5%",
"3,5%",
"5%",
"8,5%"
],
"c": 0,
"w": "0,5 × 400 – 40r = 140 → 200 – 40r = 140 → r = 1,5."
},
{
"t": 9,
"q": "Pul bozorida muvozanat sharti M/P = 0,4Y – 50r. Real pul taklifi qayd etilgan holda Y 100 birlikka oshsa, muvozanatli foiz stavkasi qanday o‘zgaradi?",
"o": [
"0,4 punktga oshadi",
"2 punktga oshadi",
"0,8 punktga kamayadi",
"0,8 punktga oshadi"
],
"c": 3,
"w": "LM: r = (k/h)Y – M/(hP); Δr = (0,4/50) × 100 = 0,8 punkt. Daromad oshsa talab o‘ngga siljiydi, foiz oshadi."
},
{
"t": 9,
"q": "Majburiy zaxira normasi 12%, banklar yana depozitning 8 foizini ortiqcha zaxira sifatida saqlaydi, aholi esa naqd pul ushlamaydi. Bank tizimiga 400 mln so‘m yangi zaxira kelib tushsa, depozitlar maksimal qancha oshadi?",
"o": [
"3333 mln so‘m",
"2000 mln so‘m",
"5000 mln so‘m",
"4800 mln so‘m"
],
"c": 1,
"w": "m_b = 1/(rr + er) = 1/0,2 = 5; ΔD = 400 × 5 = 2000. 3333 — ortiqcha zaxira e’tiborga olinmagan."
},
{
"t": 9,
"q": "Markaziy bank ochiq bozorda 40 mln so‘mlik obligatsiyani sotib olib, pul bazasini shuncha oshirdi. cr = 0,5 va rr = 0,1 bo‘lsa, pul massasi qancha oshadi?",
"o": [
"100 mln so‘m",
"400 mln so‘m",
"60 mln so‘m",
"16 mln so‘m"
],
"c": 0,
"w": "m = 1,5/0,6 = 2,5; ΔM = 2,5 × 40 = 100. 400 — 1/rr ni qo‘llash (naqd pul sizib chiqishi hisobga olinmagan)."
},
{
"t": 9,
"q": "Inqirozdan oldin B = 100, cr = 0,2, rr = 0,1 edi. Inqirozda cr = 0,4 va rr = 0,2 ga oshdi, Markaziy bank esa pul bazasini 10% ga ko‘paytirdi. Pul massasiga nima bo‘ldi?",
"o": [
"400 dan 440 gacha oshdi",
"400 dan 220 gacha kamaydi",
"400 dan taxminan 257 gacha kamaydi",
"400 da o‘zgarishsiz qoldi"
],
"c": 2,
"w": "Avval m = 4, M = 400. Keyin m = 1,4/0,6 ≈ 2,33; B = 110; M ≈ 257. Baza oshgan bo‘lsa-da, multiplikator kamayishi massani qisqartirdi."
},
{
"t": 9,
"q": "Markaziy bank yillik inflyatsiyani 2 foizda ushlamoqchi. Real YaIM uzoq muddatda 3 foiz o‘sadi, moliyaviy innovatsiyalar tufayli pulning aylanish tezligi yiliga 1 foizga kamayadi. Almashinuv tenglamasiga ko‘ra pul massasi qancha sur’atda o‘sishi kerak?",
"o": [
"5 foiz",
"6 foiz",
"4 foiz",
"7 foiz"
],
"c": 1,
"w": "ΔM/M = π + ΔY/Y – ΔV/V = 2 + 3 + 1 = 6. Faqat 2 + 3 = 5 deb hisoblash V ning pasayishini unutish."
},
{
"t": 9,
"q": "Aylanish tezligi va real YaIM o‘zgarmagan. Pul massasi 450 dan 540 trln so‘mga oshdi. Narxlar darajasi qanday o‘zgaradi?",
"o": [
"16,7 foizga oshadi",
"10 foizga oshadi",
"90 foizga oshadi",
"20 foizga oshadi"
],
"c": 3,
"w": "MV = PY da V va Y qayd etilgan: P ~ M, 540/450 = 1,2. 16,7 foiz — bazani noto‘g‘ri tanlash (90/540)."
},
{
"t": 9,
"q": "Baumol–Tobin modelida naqd pulga talab daromadning kvadrat ildiziga proporsional, miqdoriy nazariyada (M^D = kPY) esa nominal daromadga proporsional. Boshqa sharoit teng, daromad 9 baravar oshsa, talab qanday o‘zgaradi?",
"o": [
"Baumol–Tobin bo‘yicha 9 baravar, miqdoriy nazariya bo‘yicha 3 baravar",
"Ikkala nazariyada ham 3 baravar",
"Baumol–Tobin bo‘yicha 81 baravar, miqdoriy nazariya bo‘yicha 9 baravar",
"Baumol–Tobin bo‘yicha 3 baravar, miqdoriy nazariya bo‘yicha 9 baravar"
],
"c": 3,
"w": "√9 = 3 — Baumol–Tobin; kPY da talab daromad bilan bir xil nisbatda ya’ni 9 baravar oshadi (Baumol–Tobinda esa naqd pul zaxirasidan tejash samarasi bor)."
},
{
"t": 9,
"q": "Talaba oylik 2,4 mln so‘m daromadni bir marta oladi va oy davomida bir tekis sarflaydi. Agar daromad har hafta 4 ta teng qismda berilsa, bitimlar uchun o‘rtacha pul qoldig‘i va pulning aylanish tezligi qanday o‘zgaradi?",
"o": [
"Qoldiq 1,2 dan 0,6 mln so‘mga tushadi, aylanish tezligi 2 baravar oshadi",
"Qoldiq 1,2 dan 0,3 mln so‘mga tushadi, aylanish tezligi 4 baravar oshadi",
"Qoldiq 1,2 dan 0,3 mln so‘mga tushadi, aylanish tezligi 4 baravar kamayadi",
"Qoldiq o‘zgarmaydi, chunki yillik daromad bir xil"
],
"c": 1,
"w": "Bir martalik to‘lovda o‘rtacha qoldiq 2,4/2 = 1,2; haftalik 0,6/2 = 0,3 (4 marta kam). Talab kamaysa, V = PY/M 4 baravar oshadi."
},
{
"t": 9,
"q": "Federal zaxira tizimi miqdoriy yumshatish davrida pul bazasini 5 baravar oshirdi, M2 esa faqat 1,5 baravar oshdi. Pul multiplikatori dastlabki qiymatining qanday qismiga tushdi?",
"o": [
"20 foiziga",
"50 foiziga",
"30 foiziga",
"70 foiziga"
],
"c": 2,
"w": "m = M/B; m_yangi/m_eski = 1,5/5 = 0,3. Sabab: banklar ortiqcha zaxira saqlab qoldi."
},
{
"t": 9,
"q": "Mamlakatda M2/YaIM nisbati (monetizatsiya) 40% dan 50% ga oshdi. Pulning aylanish tezligi V va Kembrij koeffitsiyenti k qanday o‘zgardi?",
"o": [
"V 2,5 dan 2,0 ga tushdi, k 0,4 dan 0,5 ga oshdi",
"V 0,4 dan 0,5 ga oshdi, k 2,5 dan 2,0 ga tushdi",
"V 2,5 dan 3,0 ga oshdi, k 0,4 dan 0,33 ga tushdi",
"V ham, k ham 20 foizga tushdi"
],
"c": 0,
"w": "k = M/PY = 0,4 → 0,5; V = 1/k = 2,5 → 2,0. Moliyaviy chuqurlashuvda V pasayadi, k oshadi."
},
{
"t": 9,
"q": "Qisqa muddatda P = 2, M = 100 (real kassa qoldiqlari 50). Markaziy bank M ni 125 ga oshirdi. Uzoq muddatda Y va r dastlabki darajasiga qaytganda narxlar darajasi qancha bo‘ladi?",
"o": [
"2,5",
"2,25",
"2,0",
"3,0"
],
"c": 0,
"w": "Uzoq muddatda pul neytral: M/P = 50 saqlanadi, P = 125/50 = 2,5 (narxlar M bilan proporsional oshadi)."
},
{
"t": 9,
"q": "Investor obligatsiyalar narxi tushishini kutib, portfelining katta qismini naqd pulda ushlab turibdi. Keynsning qaysi motivi ishlayapti va nima kutilmoqda?",
"o": [
"Spekulyativ motiv: foiz stavkasi pasayishi kutilmoqda",
"Ehtiyotkorlik motivi: daromadning oshishi kutilmoqda",
"Spekulyativ motiv: foiz stavkasi oshishi kutilmoqda",
"Bitimlar motivi: narxlarning pasayishi kutilmoqda"
],
"c": 2,
"w": "Obligatsiya narxi tushishi = foiz oshishi; kapital yo‘qotishdan qochish uchun pul saqlanadi (L_2(r))."
},
{
"t": 9,
"q": "Quyidagi o‘zgarishlardan qaysi biri pul multiplikatori m = (cr + 1)/(cr + rr) ni oshirmaydi?",
"o": [
"Majburiy zaxira normasining pasayishi",
"Banklarning ortiqcha zaxiralarini kreditga yo‘naltirishi",
"Plastik kartalar tufayli aholining kamroq naqd pul ushlashi",
"Aholining depozitlarning bir qismini naqd pulga aylantirishi"
],
"c": 3,
"w": "m cr va rr ning kamayuvchi funksiyasi. cr ning oshishi m ni kamaytiradi, qolgan holatlarda esa cr yoki samarali rr pasayadi."
},
{
"t": 9,
"q": "Mijoz joriy hisob raqamidagi 5 mln so‘mni bir yillik muddatli depozitga o‘tkazdi. M1 va M2 ga ta’siri qanday?",
"o": [
"M1 ham, M2 ham 5 mln ga kamayadi",
"M1 5 mln ga kamayadi, M2 o‘zgarmaydi",
"M1 o‘zgarmaydi, M2 5 mln ga oshadi",
"M1 5 mln ga kamayadi, M2 5 mln ga oshadi"
],
"c": 1,
"w": "Talab qilib olinguncha depozit M1 ga kiradi; muddatli depozit faqat M2 ga (kvazi pul). M2 = M1 + muddatli depozitlar, jami o‘zgarmaydi."
},
{
"t": 9,
"q": "Banklar depozitning 20 foizini zaxirada saqlaydi, qolganini to‘liq kreditga beradi; aholi naqd pul ushlamaydi, barcha kreditlar qayta bankka depozit bo‘lib qaytadi. Dastlab muomalada 1000 so‘m naqd pul bor edi va u bankka qo‘yildi. Pul massasi (M = C + D) qanchaga oshadi?",
"o": [
"5000 ga",
"4000 ga",
"1000 ga",
"9000 ga"
],
"c": 1,
"w": "Yakuniy depozitlar 1000/0,2 = 5000, naqd pul 0; dastlabki M = 1000. ΔM = 5000 – 1000 = 4000."
},
{
"t": 9,
"q": "Real daromad oshib, pulga talab egri chizig‘i o‘ngga siljidi. Markaziy bank foiz stavkasini o‘zgarishsiz saqlamoqchi. U nima qilishi kerak?",
"o": [
"Pul taklifini oshirishi: taklif chizig‘i ham o‘ngga siljiydi",
"Pul taklifini kamaytirishi: ortiqcha talab bosimi so‘nib, foiz barqarorlashadi",
"Hech narsa qilmasligi: muvozanat o‘z-o‘zidan eski foizda tiklanadi",
"Majburiy zaxira normasini oshirishi: talab chizig‘i chapga qaytadi"
],
"c": 0,
"w": "Daromad oshishi Md ni o‘ngga siljitadi; Ms o‘zgarmasa, foiz oshadi. Foizni qayd etish uchun Ms ham o‘ngga siljishi kerak."
},
{
"t": 9,
"q": "Foiz stavkasi muvozanatdan yuqori, pul bozorida ortiqcha taklif bor. Qisqa muddatda (P qayd etilgan) muvozanat qaysi ketma-ketlikda tiklanadi?",
"o": [
"Ortiqcha pul sarflanadi → narxlar oshadi → real M/P kamayadi → foiz oshadi",
"Ortiqcha pul uchun obligatsiyalar sotiladi → narxi tushadi → foiz oshadi",
"Ortiqcha pul obligatsiyaga yo‘naladi → narxi oshadi → foiz pasayadi",
"Markaziy bank ortiqcha pulni yig‘adi → taklif chapga siljiydi → foiz oshadi"
],
"c": 2,
"w": "Valras qonuni: pul bozorida ortiqcha taklif obligatsiyalar bozorida ortiqcha talabga teng; obligatsiya narxi ↑ ⇒ r ↓."
},
{
"t": 9,
"q": "Quyidagilardan qaysi biri LM egri chizig‘ini siljitmaydi?",
"o": [
"Nominal pul taklifi M ning oshishi",
"Narxlar darajasi P ning oshishi",
"Raqamli to‘lovlar tufayli pulga talabning kamayishi",
"Davlat xaridlari G ning oshishi"
],
"c": 3,
"w": "G tovarlar bozori (IS) ni siljitadi. M, P va pulga talab o‘zgarishi esa pul bozori muvozanatini va shu bilan LM ni siljitadi."
},
{
"t": 9,
"q": "Pulga talab foiz stavkasiga umuman sezgir emas (h = 0). LM egri chizig‘i va pul taklifi oshishining ta’siri qanday?",
"o": [
"LM vertikal; M oshishi uni o‘ngga siljitadi (Y = M/(kP))",
"LM gorizontal; pul taklifi oshishi talab chizig‘iga ta’sir qilmaydi, daromad o‘zgarmaydi",
"LM vertikal; pul taklifi oshishi faqat foiz stavkasini o‘zgartiradi, Y o‘zgarmaydi",
"LM gorizontal; pul taklifi oshishi foiz stavkasini keskin pasaytirib yuboradi"
],
"c": 0,
"w": "M/P = kY – hr da h = 0 bo‘lsa M/P = kY, ya’ni Y = M/(kP) — foizga bog‘liq bo‘lmagan vertikal chiziq. Gorizontal LM h → ∞ (likvidlik tuzog‘i)."
},
{
"t": 9,
"q": "Markaziy bank pul taklifini oshirdi. A holatda foiz stavkasi deyarli o‘zgarmadi (qo‘shimcha pul to‘liq saqlandi). B holatda foiz pasaydi, lekin investitsiyalar oshmadi. A va B qaysi tuzoqlarga mos?",
"o": [
"A – investitsiya tuzog‘i, B – likvidlik tuzog‘i",
"Ikkalasi ham likvidlik tuzog‘i",
"A – Pigu–Patinkin samarasi, B – Fisher samarasi",
"A – likvidlik tuzog‘i, B – investitsiya tuzog‘i"
],
"c": 3,
"w": "M↑ ⇒ r↓ ⇒ I↑ ⇒ Y↑ zanjirida likvidlik tuzog‘i 1-bo‘g‘inni (M↑ ⇒ r↓), investitsiya tuzog‘i 2-bo‘g‘inni (r↓ ⇒ I↑) uzadi."
},
{
"t": 9,
"q": "Giperinflyatsiya davrida pulning aylanish tezligi keskin oshishining asosiy sababi nima?",
"o": [
"Real daromadning keskin oshishi tufayli bitimlar uchun talab kengayadi",
"Kutilayotgan inflyatsiya nominal foizni oshiradi, pul saqlash qimmatlashadi, k kamayadi",
"Majburiy zaxira normasi pasayib, pul multiplikatori oshadi",
"Aholi bitimlar uchun ko‘proq pul saqlay boshlaydi, k oshadi"
],
"c": 1,
"w": "(M/P)^D = L(r + π^e, Y): π^e ↑ ⇒ i ↑ ⇒ talab ↓ ⇒ k ↓ ⇒ V = 1/k ↑."
},
{
"t": 9,
"q": "Quyidagi juftliklardan qaysi biri to‘g‘ri?",
"o": [
"Keyns: pulga talab foizga sezgir emas, shu bois pul siyosati juda kuchli bo‘ladi",
"Kembrij: pulga talab foiz stavkasiga bog‘liq bo‘lib, k = V ga teng",
"Fridmen: talab permanent daromadga bog‘liq, foizga sezgirligi past",
"Tobin: xavfdan qochuvchi investor pulni faqat bitim motivida saqlaydi"
],
"c": 2,
"w": "Fridmen — barqaror talab, past foiz sezgirligi, k foiz qoidasi. Keyns talabi foizga sezgir; Kembrijda k = 1/V; Tobin diversifikatsiya motivini qo‘shdi."
},
{
"t": 9,
"q": "Harbiy asirlar lagerida chekmaydigan asirlar ham sigaretani to‘lov sifatida qabul qildi va barcha narxlar sigaretda ifodalandi. Bu holat nimani ko‘rsatadi?",
"o": [
"Sigaret tovar pul bo‘ldi: ichki qiymatga ega, hamma qabul qiladi",
"Sigaret fiat pul bo‘ldi: u davlat farmoni bilan pul deb e’lon qilingan",
"Sigaret kvazi pulga aylandi: muddatli depozitga o‘xshab, foiz keltiradi",
"Sigaret M2 agregatiga kirdi, chunki likvidligi past bo‘lgani uchun"
],
"c": 0,
"w": "Tovar pul ichki qiymatga ega; pul davlat qarorisiz ham, umumiy qabul qilish asosida paydo bo‘lishi mumkin."
},
{
"t": 10,
"q": "Daromad solig‘i: 100 mln so‘mgacha 10%, 100 mln dan oshgan qismiga 30%. Daromadi 300 mln so‘m bo‘lgan shaxsning o‘rtacha soliq stavkasi qancha?",
"o": [
"23,3%",
"30%",
"20%",
"26,7%"
],
"c": 0,
"w": "Soliq = 10 + 0,3 × 200 = 70; 70/300 ≈ 23,3%. 30% — chegaraviy stavka, 20% — stavkalarning oddiy o‘rtachasi."
},
{
"t": 10,
"q": "Davlat qarzi YaIMning 60 foizi, qarz bo‘yicha real foiz stavkasi 4%, real o‘sish 2,5%, birlamchi taqchillik YaIMning 1 foizi. Δd ≈ (r – g) × d – s formulasiga ko‘ra qarz nisbati qanday o‘zgaradi?",
"o": [
"0,9 foiz punktga oshadi",
"0,1 foiz punktga kamayadi",
"1,9 foiz punktga oshadi",
"2,5 foiz punktga oshadi"
],
"c": 2,
"w": "(0,04 – 0,025) × 60 = 0,9; s = –1 bo‘lgani uchun –s = +1; Δd = 1,9."
},
{
"t": 10,
"q": "Qarz nisbati d = 80%, real foiz r = 5%, real o‘sish g = 2%. Qarz nisbatini o‘zgartirmaslik (Δd = 0) uchun qanday birlamchi profitsit (YaIMga nisbatan) kerak?",
"o": [
"1,6%",
"2,4%",
"4%",
"3%"
],
"c": 1,
"w": "Δd = (r – g)d – s = 0 ⇒ s = 0,03 × 80 = 2,4. 1,6 — g ni 2 emas, d ni 0,02 bilan ko‘paytirish xatosi."
},
{
"t": 10,
"q": "Davlat qarzi 400 trln so‘m, YaIM 1000 trln so‘m. Yil davomida taqchillik 60 trln so‘m bo‘ldi, nominal YaIM 5% o‘sdi. Yil oxirida qarz/YaIM nisbati qancha?",
"o": [
"46%",
"43,8%",
"40%",
"38,1%"
],
"c": 1,
"w": "D_t = 400 + 60 = 460; YaIM = 1050; 460/1050 ≈ 43,8%. 46% — YaIM o‘sishi hisobga olinmagan."
},
{
"t": 10,
"q": "Byudjet daromadlari 700, xarajatlari 780 (shundan qarz foizlari 50), YaIM 2000. Birlamchi taqchillik YaIMga nisbatan qancha?",
"o": [
"4%",
"2,5%",
"6,5%",
"1,5%"
],
"c": 3,
"w": "Umumiy taqchillik 80 (4%); foizlarsiz 80 – 50 = 30; 30/2000 = 1,5%."
},
{
"t": 10,
"q": "Tovarga talab P = 80 – 2Q, xususiy chegaraviy xarajat MPC = 20 + 2Q. Har bir birlik ishlab chiqarish uchinchi shaxslarga 6 so‘mlik zarar keltiradi. Ijtimoiy optimal hajm va uni ta’minlovchi Pigu solig‘i qanday?",
"o": [
"Q = 13,5; soliq birlikka 6 so‘m",
"Q = 15; soliq birlikka 6 so‘m",
"Q = 13,5; soliq birlikka 3 so‘m",
"Q = 12; soliq birlikka 12 so‘m"
],
"c": 0,
"w": "MSC = 26 + 2Q; 80 – 2Q = 26 + 2Q ⇒ Q = 13,5. Soliq zarar miqdoriga teng (6). Bozor muvozanati Q = 15."
},
{
"t": 10,
"q": "Tovar birligiga 10 so‘m soliq solindi. Talab elastikligi (moduli) 0,5, taklif elastikligi 1,5. Soliq yukidan xaridorlar ulushi qancha?",
"o": [
"2,5 so‘m (25%)",
"5 so‘m (50%)",
"7,5 so‘m (75%)",
"10 so‘m (100%)"
],
"c": 2,
"w": "Xaridorlar ulushi = E_s/(E_s + |E_d|) = 1,5/2 = 0,75. Elastikligi kam tomon (talab) yukning ko‘p qismini ko‘taradi."
},
{
"t": 10,
"q": "Lorens egri chizig‘i bilan diagonal orasidagi maydon A = 0,12, diagonal ostidagi uchburchakning qolgan qismi B = 0,38. Jini koeffitsiyenti qancha?",
"o": [
"0,32",
"0,76",
"0,24",
"0,12"
],
"c": 2,
"w": "G = A/(A + B) = 0,12/0,50 = 0,24. 0,32 — A/B ni olish xatosi."
},
{
"t": 10,
"q": "Soliq bazasi B(t) = 1000 × (1 – t), tushum R = t × B(t) (t – stavka). Stavka 80% dan 60% ga tushirilsa, tushum qanday o‘zgaradi?",
"o": [
"80 ga oshadi",
"80 ga kamayadi",
"o‘zgarmaydi",
"160 ga oshadi"
],
"c": 0,
"w": "R(0,8) = 1000 × 0,8 × 0,2 = 160; R(0,6) = 1000 × 0,6 × 0,4 = 240. Optimal t* = 50%, 80% «taqiqlangan zona»da."
},
{
"t": 10,
"q": "Davlat xarajatlari yiliga 8% ga, nominal YaIM esa 5% ga o‘smoqda. Boshlang‘ich xarajatlar ulushi YaIMning 30% i. Bir yildan keyin ulush va Vagner qonuniga munosabat qanday?",
"o": [
"Taxminan 29,2%; Vagner qonuniga zid",
"Taxminan 30,9%; Vagner qonuniga mos",
"Taxminan 33%; Vagner qonuniga mos",
"Taxminan 30%; ulush o‘zgarmaydi"
],
"c": 1,
"w": "30 × 1,08/1,05 ≈ 30,9%. Xarajatlar YaIMdan tez oshsa, ulush o‘sadi — Vagner qonuni."
},
{
"t": 10,
"q": "Jamoat ne’mati uchun ikki iste’molchining chegaraviy foydasi MB1 = 10 – Q va MB2 = 8 – Q, chegaraviy xarajat MC = 6. Ijtimoiy optimal hajm qancha?",
"o": [
"4",
"2",
"12",
"6"
],
"c": 3,
"w": "Jamoat ne’matida MB lar vertikal qo‘shiladi: 18 – 2Q = 6 ⇒ Q = 6. 4 — faqat birinchi iste’molchiga qarab (10 – Q = 6)."
},
{
"t": 10,
"q": "Ta’lim xizmatida xususiy MB = 50 – Q, MC = 10 + Q, har birlik uchinchi shaxslarga 8 so‘mlik qo‘shimcha foyda beradi. Bozor va ijtimoiy optimal hajm qanday?",
"o": [
"Bozor 20, optimum 24",
"Bozor 24, optimum 20",
"Bozor 20, optimum 28",
"Bozor 22, optimum 22"
],
"c": 0,
"w": "Bozor: 50 – Q = 10 + Q ⇒ 20. Ijtimoiy: 58 – Q = 10 + Q ⇒ 24. Ijobiy tashqi samarada bozor kam ishlab chiqaradi, subsidiya 8."
},
{
"t": 10,
"q": "Daromad 1000 dan 1500 gacha oshganda soliq 150 dan 260 gacha oshdi. Chegaraviy stavka va soliq turi qanday?",
"o": [
"Chegaraviy 17,3%; o‘rtacha stavka oshgani uchun progressiv",
"Chegaraviy 22%; o‘rtacha stavka oshgani uchun regressiv",
"Chegaraviy 22%; o‘rtacha stavka oshgani uchun progressiv",
"Chegaraviy 26%; stavka o‘zgarmagani uchun proporsional"
],
"c": 2,
"w": "Δsoliq/Δdaromad = 110/500 = 22%. O‘rtacha stavka 15% → 260/1500 ≈ 17,3% — oshgan, demak progressiv."
},
{
"t": 10,
"q": "A uy xo‘jaligi daromadi 100 mln so‘m va iste’moli 90 mln; B uy xo‘jaligi daromadi 400 mln va iste’moli 200 mln. Iste’mol summasiga 10% egri soliq solinadi. Daromadga nisbatan soliq yuki va soliq turi qanday?",
"o": [
"A – 10%, B – 10%: proporsional",
"A – 5%, B – 9%: progressiv",
"A – 9%, B – 5%: progressiv",
"A – 9%, B – 5%: regressiv"
],
"c": 3,
"w": "A: 9/100 = 9%; B: 20/400 = 5%. Daromad oshganda yuk kamaydi — regressiv (kambag‘al daromadining ko‘proq qismini sarflaydi)."
},
{
"t": 10,
"q": "Soliq stavkasi 10% dan 20% ga oshirilsa (boshqa sharoit teng), o‘lik yuk yo‘qotishi (deadweight loss) taxminan necha baravar oshadi?",
"o": [
"2 baravar",
"4 baravar",
"3 baravar",
"8 baravar"
],
"c": 1,
"w": "DWL stavkaning kvadratiga proporsional: (20/10)^2 = 4."
},
{
"t": 10,
"q": "Quyidagilardan qaysi biri soliqning belgisi EMAS?",
"o": [
"Majburiylik",
"Qaytarilish",
"Ekvivalentsizlik",
"Qonuniylik"
],
"c": 1,
"w": "Soliq majburiy, qaytarilmaydigan, bevosita ekvivalentsiz va qonuniy to‘lov. Qaytarilish belgisi yo‘q."
},
{
"t": 10,
"q": "Ikki xodim bir xil daromad oladi, ammo biri imtiyoz tufayli kamroq soliq to‘laydi. Soliqqa tortishning qaysi tamoyili buzilgan?",
"o": [
"Vertikal adolat",
"Foyda olish tamoyili",
"Soliq aniqligi tamoyili",
"Gorizontal adolat"
],
"c": 3,
"w": "Gorizontal adolat: teng daromadli shaxslar teng soliq to‘laydi. Vertikal adolat — turli daromadlilar o‘rtasidagi nisbat."
},
{
"t": 10,
"q": "Yoqilg‘iga aksiz yo‘l qurilishini moliyalashtirish uchun, progressiv daromad solig‘i esa ijtimoiy dasturlar uchun olinadi. Ular qaysi tamoyillarga asoslangan?",
"o": [
"Birinchisi — to‘lovga qodirlik, ikkinchisi — foyda olish tamoyili",
"Ikkalasi ham foyda olish tamoyiliga asoslangan",
"Birinchisi — foyda olish, ikkinchisi — to‘lovga qodirlik tamoyili",
"Birinchisi — gorizontal adolat, ikkinchisi — soddalik va ma’muriy samaradorlik"
],
"c": 2,
"w": "Yo‘ldan foydalanuvchilar to‘laydi (foyda olish); boylar ko‘proq to‘laydi (to‘lovga qodirlik, vertikal adolat)."
},
{
"t": 10,
"q": "Kemalar soni oshsa ham mayoq xizmati kamaymaydi va to‘lamagan kemani chetlatib bo‘lmaydi. Bu ne’matning xususiyatlari va bozor muammosi nima?",
"o": [
"Raqobatsiz, chiqarib bo‘lmaydigan; tekinxo‘rlik tufayli bozor kam taklif qiladi",
"Raqobatli va chiqarib bo‘ladigan; salbiy tashqi samara tufayli ortiqcha taklif",
"Raqobatsiz, lekin chiqarib bo‘ladigan; sotuvchi monopol narx qo‘yadi",
"Raqobatli va chiqarib bo‘lmaydigan; tekinxo‘rlik muammosi yuzaga kelmaydi"
],
"c": 0,
"w": "Jamoat ne’mati: iste’molda raqobatsiz va chiqarib bo‘lmaydi; free-rider muammosi sababli byudjetdan moliyalashtiriladi."
},
{
"t": 10,
"q": "Quyidagi choralardan qaysi biri salbiy tashqi samarani kamaytirishga xizmat QILMAYDI?",
"o": [
"Ifloslantiruvchiga ishlab chiqarish hajmiga qarab subsidiya berish",
"Zarar miqdorida Pigu solig‘ini joriy etish",
"Ifloslantirish huquqlari savdosini tashkil etish",
"Qat’iy ekologik normativlar belgilash"
],
"c": 0,
"w": "Ifloslantiruvchini subsidiyalash MPC ni yanada kamaytirib, ortiqcha ishlab chiqarishni oshiradi. Qolganlari xususiy xarajatni ijtimoiy xarajatga yaqinlashtiradi."
},
{
"t": 10,
"q": "Soliq stavkalari pasaytirilgach tushumlar tez o‘sdi. Aniqlanishicha, norasmiy faoliyat qonuniylashgan, imtiyozlar bekor qilingan, elektron hisob-fakturalar joriy etilgan. Qaysi xulosa eng to‘g‘ri?",
"o": [
"Tushumlar o‘sishi stavkalar t* dan yuqori bo‘lganini to‘liq isbotlaydi",
"Laffer egri chizig‘i noto‘g‘ri ekani bu misolda isbotlandi, demak",
"Baza kengayishi o‘sishni izohlaydi; «taqiqlangan zona»da bo‘lish o‘z-o‘zidan isbotlanmaydi",
"Tushum o‘sishi faqat nominal YaIM o‘sishi bilan izohlanadi, xolos"
],
"c": 2,
"w": "Stavka pasayganda tushum oshishi uchun baza keskin kengayishi mumkin; sabablarni ajratmasdan Laffer samarasini tasdiqlab bo‘lmaydi."
},
{
"t": 10,
"q": "Davlatning foizdan tashqari xarajatlari va daromadlari o‘zgarmadi, ammo qarz bo‘yicha foiz to‘lovlari oshdi. Taqchillik ko‘rsatkichlariga ta’siri qanday?",
"o": [
"Ikkalasi ham oshadi",
"Umumiy taqchillik oshadi, birlamchi taqchillik o‘zgarmaydi",
"Birlamchi oshadi, umumiy o‘zgarmaydi",
"Ikkalasi ham o‘zgarmaydi"
],
"c": 1,
"w": "Birlamchi taqchillik foiz to‘lovlarisiz hisoblanadi, umumiy taqchillik ularni o‘z ichiga oladi."
},
{
"t": 10,
"q": "Quyidagilardan qaysi biri zaxira ko‘rsatkichi (qolganlari oqim)?",
"o": [
"Yillik byudjet taqchilligi",
"Yil davomida yig‘ilgan soliq tushumlari",
"Yillik davlat xaridlari",
"Davlat qarzi"
],
"c": 3,
"w": "Qarz — ma’lum sanadagi to‘plangan majburiyatlar (zaxira); D_t = D_t–1 + taqchillik. Qolganlari davr uchun oqim."
},
{
"t": 10,
"q": "Quyidagilardan qaysi biri byudjet daromadi emas, balki taqchillikni moliyalashtirish manbai hisoblanadi?",
"o": [
"Litsenziya va ruxsatnoma to‘lovlari",
"Xorijiy davlatlar tomonidan berilgan grantlar",
"Davlat obligatsiyalarini chiqarishdan tushgan mablag‘",
"Davlat mulkini xususiylashtirishdan tushum"
],
"c": 2,
"w": "Qarz mablag‘lari daromad emas, moliyalashtirish manbai. Grantlar rasmiy transfert, qolganlari nosoliq daromadlar."
},
{
"t": 10,
"q": "Davlatning iqtisodiyotdagi ishtirokini baholashda faqat davlat byudjeti olinib, maqsadli fondlar hisobga olinmasa, qanday xato yuz beradi?",
"o": [
"Davlat ishtiroki ortiqcha baholanadi, chunki fondlar ikki marta sanaladi",
"Davlat ishtiroki kam baholanadi, taqqoslash buziladi",
"Faqat soliq tushumlari buziladi, xarajatlar buzilmaydi",
"Xato yo‘q, chunki fondlar nodavlat sektorga tegishli"
],
"c": 1,
"w": "Konsolidatsiyalashgan byudjet davlat byudjeti, maqsadli fondlar va boshqalarni birlashtirib, ishtirokni to‘liq aks ettiradi."
},
{
"t": 10,
"q": "Quyidagilardan qaysi biri Vagner keltirgan davlat xarajatlari o‘sishi sabablariga kirmaydi?",
"o": [
"Foiz stavkalari pasayishi tufayli davlat qarzi xizmatining arzonlashuvi",
"Ijtimoiy-ma’muriy funksiyalarning murakkablashuvi",
"Ta’lim va sog‘liqni saqlashga talabning daromad oshgani sayin tezroq o‘sishi",
"Tabiiy monopoliyalar va yirik infratuzilmani boshqarish zarurati"
],
"c": 0,
"w": "Vagner uch sabab keltirgan: ma’muriy murakkablashuv, madaniy-farovonlik xarajatlari (elastiklik > 1) va monopoliya/infratuzilma."
},
{
"t": 10,
"q": "Soliq undirish xarajatlari yig‘ilgan soliq summasining katta qismini yutib yubormoqda. A. Smitning qaysi tamoyili buzilgan?",
"o": [
"Aniqlik",
"Qulaylik",
"Adolatlilik",
"Tejamkorlik"
],
"c": 3,
"w": "Tejamkorlik: undirish xarajatlari minimal bo‘lishi kerak. Aniqlik — miqdor va muddat aniqligi, qulaylik — to‘lash qulayligi."
},
{
"t": 10,
"q": "Hukumat eng yuqori chegaraviy daromad solig‘i stavkasini 40% dan 70% gacha oshirdi. Nazariyaga ko‘ra eng mos natija qaysi?",
"o": [
"Samaradorlik ham, adolat ham bir vaqtda mutlaq oshadi, muqobillik yo‘qoladi",
"Vertikal adolat kuchayadi, lekin ish va investitsiya rag‘bati zaiflashishi mumkin",
"Lorens egri chizig‘i diagonaldan uzoqlashadi, Jini koeffitsiyenti oshadi",
"Soliq tushumlari har doim oshadi, chunki stavka oshgan"
],
"c": 1,
"w": "Adolatlilik va samaradorlik o‘rtasida muqobillik bor; Laffer egri chizig‘iga ko‘ra yuqori stavkada tushum kamayishi ham mumkin."
},
{
"t": 10,
"q": "Yillik daromad 1000 so‘m bo‘lgan shaxs uchun progressiv shkala: daromadning dastlabki 400 so‘mi 10% bilan, qolgan qismi 30% bilan soliqqa tortiladi. Uning o‘rtacha soliq stavkasi qancha?",
"o": [
"30%",
"20%",
"22%",
"25%"
],
"c": 2,
"w": "Soliq = 0,10 × 400 + 0,30 × 600 = 40 + 180 = 220; o‘rtacha stavka = 220 / 1000 = 22%. 30% — chegaraviy stavka."
},
{
"t": 11,
"q": "Hukumat davlat xaridlarini 80 mlrd so‘mga oshirdi va soliqlarni 50 mlrd so‘mga oshirdi. MPC = 0,75, soliqlar qayd etilgan, iqtisodiyot yopiq. Daromadning umumiy o‘zgarishi qancha?",
"o": [
"+320 mlrd so‘m",
"+170 mlrd so‘m",
"+30 mlrd so‘m",
"+80 mlrd so‘m"
],
"c": 1,
"w": "k_G = 4, k_T = –3. ΔY = 4 × 80 + (–3) × 50 = 320 – 150 = 170. +30 — oddiy ayirma, +80 — balanslashgan byudjet multiplikatorini noo‘rin qo‘llash (ΔG ≠ ΔT), +320 — soliqni hisobga olmaslik."
},
{
"t": 11,
"q": "Retsessiya statistikada 6 oydan keyin aniqlandi, parlament paketni 5 oy muhokama qildi, «belkurakka tayyor» loyiha yo‘qligi tufayli qurilish 12 oydan keyin boshlandi, multiplikator jarayoni yana 9 oy davom etdi. Ichki laglar yig‘indisi qancha?",
"o": [
"32 oy: barcha to‘rt lag birgalikda",
"20 oy: tan olish, qaror qabul qilish va ta’sir laglari",
"23 oy: tan olish, qaror, amalga oshirish",
"26 oy: qaror qabul qilish, amalga oshirish va ta’sir laglari"
],
"c": 2,
"w": "Ichki laglar — tan olish (6), qaror qabul qilish (5) va amalga oshirish (12) = 23 oy. Ta’sir lagi (multiplikator jarayoni, 9 oy) tashqi lag hisoblanadi."
},
{
"t": 11,
"q": "Oltin va mis narxlari yuqori bo‘lgan yillarda tushumlarning bir qismi jamg‘armaga yo‘naltiriladi, narxlar tushganda sarflanadi. Bu qaysi tamoyilga mos keladi?",
"o": [
"Tsiklga qarshi siyosat: «xavfsizlik yostig‘i» yaratish",
"Yillik muvozanatli byudjet tamoyili: har yili tushum xarajatga teng bo‘lishi shart",
"Funksional moliya: byudjet muvozanati ahamiyatsiz, jamg‘armalar ham kerak emas",
"Prosiklik siyosat: yuksalishda xarajatlarni oshirib, pasayishda qisqartirish"
],
"c": 0,
"w": "Suveren/jamg‘arma fondlari (Norvegiya, Chili tajribasi) yuksalishda jamg‘arib, inqirozda sarflash orqali tsiklni yumshatadi."
},
{
"t": 11,
"q": "Uy xo‘jaliklarining katta qismi likvidlik cheklovlariga duch keladi (bank qarz bermaydi). Hukumat soliqni kamaytirib, qarzni kelajak soliqlari bilan qoplashni rejalashtirgan. Rikardo ekvivalentligiga nisbatan nima deyish mumkin?",
"o": [
"Ular butun qo‘shimcha daromadni kelajak soliqlari uchun jamg‘aradi, ekvivalentlik yanada kuchayadi",
"Likvidlik cheklovi faqat investitsiyalarga ta’sir qiladi, iste’mol esa doimiy daromadga bog‘liq bo‘lgani uchun o‘zgarmaydi",
"Ular daromadni sarflaydi, ekvivalentlik buziladi, AD oshadi",
"Iste’mol kamayadi, chunki odamlar kelajak soliqlarini hozirdan hisobga oladi va qarz olishga majbur bo‘ladi"
],
"c": 2,
"w": "Likvidlik cheklovlari Rikardo ekvivalentligiga qarshi asosiy dalillardan biri: odamlar bugun sarflashni xohlaydi, qarz ola olmaydi."
},
{
"t": 11,
"q": "Soliq 100 trln so‘mga kamaytirilib, taqchillik davlat qarzi bilan qoplandi; MPC = 0,8. Rikardo ekvivalentligi to‘liq amal qilsa, birinchi bosqichda nima yuz beradi?",
"o": [
"Iste’mol 100 ga oshadi, xususiy jamg‘arma o‘zgarmaydi, milliy jamg‘arma 100 ga kamayadi",
"Iste’mol 80 ga oshadi, xususiy jamg‘arma 20 ga oshadi, milliy jamg‘arma kamayadi",
"Iste’mol o‘zgarmaydi, xususiy jamg‘arma 100 ga oshadi, milliy jamg‘arma 100 ga kamayadi",
"Iste’mol o‘zgarmaydi, xususiy jamg‘arma 100 ga oshadi, milliy jamg‘arma o‘zgarmaydi"
],
"c": 3,
"w": "Rikardo bo‘yicha uy xo‘jaliklari butun qo‘shimcha daromadni kelajakdagi soliqlar uchun jamg‘aradi: xususiy jamg‘arma +100 davlat jamg‘armasi –100 ni to‘liq qoplaydi, milliy jamg‘arma o‘zgarmaydi. An’anaviy nuqtai nazarda ΔC = c × 100 = 80."
},
{
"t": 11,
"q": "Davlat qarzi YaIMning 60 foizini tashkil etadi, real foiz stavkasi 5%, real o‘sish 3%, birlamchi profitsit YaIMning 1 foizi. Δd = (r – g) × d – s formulasiga ko‘ra qarz nisbati bir yilda qanday o‘zgaradi?",
"o": [
"Taxminan 0,2 foiz punktga oshadi",
"Taxminan 0,2 foiz punktga kamayadi",
"Taxminan 3,0 foiz punktga oshadi",
"Taxminan 1,2 foiz punktga oshadi"
],
"c": 0,
"w": "(0,05 – 0,03) × 60 = 1,2; 1,2 – 1 = +0,2 foiz punkt. 1,2 — birlamchi profitsit hisobga olinmagan; –0,2 — ishora xatosi; 3,0 — g ayirilmagan (0,05 × 60)."
},
{
"t": 11,
"q": "Quyidagilardan qaysi biri avtomatik (nodiskret) barqarorlashtiruvchi HISOBLANMAYDI?",
"o": [
"Ishsizlik nafaqalari to‘lovlarining ishsizlar soni oshishi bilan o‘zi ko‘payishi",
"Progressiv daromad solig‘i tushumlarining retsessiyada daromadga nisbatan tezroq kamayishi",
"Korporativ foyda solig‘i tushumlarining iqtisodiy tsiklga qarab o‘zgarishi",
"Parlament qarori bilan infratuzilma loyihalariga qo‘shimcha mablag‘ ajratish"
],
"c": 3,
"w": "Avtomatik barqarorlashtiruvchilar maxsus qarorsiz, ichki laglarsiz ishlaydi. Parlament qarori — diskret fiskal siyosat."
},
{
"t": 11,
"q": "Davlat qarzining 70% i xorijiy valyutadagi tashqi qarz. Milliy valyuta keskin qadrsizlandi. Eng ehtimoliy oqibat qaysi?",
"o": [
"Qarz yuki soliq to‘lovchilardan ichki obligatsiya egalariga qayta taqsimlanadi, mamlakat boyligi o‘zgarmaydi",
"Qarz yuki milliy valyutada oshadi, to‘lash uchun eksportdan valyuta topiladi",
"Qarz yuki kamayadi, chunki qadrsizlanish milliy valyutadagi nominal daromadlarni oshiradi",
"Foiz to‘lovlari mamlakat ichida qolgani sababli qadrsizlanish qarz yukiga ta’sir qilmaydi"
],
"c": 1,
"w": "Tashqi qarz xorijiy valyutada bo‘lsa, qadrsizlanish yukni keskin oshiradi. Ichki qarzda foiz mamlakat ichida qayta taqsimlanadi."
},
{
"t": 11,
"q": "Qaysi sharoitda davlat qarz olishining siqib chiqarish samarasi eng kuchsiz bo‘ladi?",
"o": [
"Markaziy bank inflyatsiyani jilovlash uchun stavkani oshirmoqda, bo‘sh quvvatlar tugagan",
"Klassik holat: milliy jamg‘arma qayd etilgan, resurslar to‘liq band, xususiy sektor kreditga muhtoj",
"To‘liq bandlik, investitsiyalar foiz stavkasiga juda sezgir, Markaziy bank siyosati moslashmaydi",
"Chuqur retsessiya: bo‘sh resurslar ko‘p, investitsiyalar foizga kam sezgir"
],
"c": 3,
"w": "Siqib chiqarish bo‘sh resurslar yo‘qligi, investitsiyalarning yuqori foiz sezgirligi va Markaziy bank qat’iy siyosatida kuchayadi; retsessiyada kam."
},
{
"t": 11,
"q": "Yopiq iqtisodiyotda potensial YaIM Y = 1000 da to‘liq bandlik. C = 100 + 0,6(Y – T), T = 200, G = 200. Hukumat G ni 260 ga oshirdi, soliq o‘zgarmadi, Y = 1000 qayd etilgan. Qarz mablag‘lari bozori modeliga ko‘ra nima yuz beradi?",
"o": [
"Jamg‘arma 220 dan 160 ga tushadi, investitsiyalar 60 ga kamayadi",
"Investitsiyalar o‘zgarmaydi, chunki Y qayd etilgan va qo‘shimcha davlat xarajati xususiy iste’moldan qoplanadi",
"Milliy jamg‘arma 160 ga tushadi, ammo investitsiyalar faqat 36 ga kamayadi (60 × 0,6), qolgani import hisobiga qoplanadi",
"Milliy jamg‘arma 220 ga ko‘tariladi, investitsiyalar esa 150 ga kamayadi (60 × 2,5 multiplikator bilan)"
],
"c": 0,
"w": "C = 100 + 0,6 × 800 = 580. S = Y – C – G: 1000 – 580 – 200 = 220; keyin 1000 – 580 – 260 = 160. I = S bo‘lgani uchun I ham 60 ga kamayadi (to‘liq siqib chiqarish)."
},
{
"t": 11,
"q": "Iqtisodiyotda MPC = 0,9, soliqlar qayd etilgan, iqtisodiyot yopiq. Potensial YaIM haqiqiy YaIMdan 90 mlrd so‘mga yuqori. Uzilishni faqat soliqlarni o‘zgartirish orqali yopish uchun nima qilish kerak?",
"o": [
"Soliqlarni 10 mlrd so‘mga oshirish",
"Soliqlarni 9 mlrd so‘mga kamaytirish",
"Soliqlarni 10 mlrd so‘mga kamaytirish",
"Soliqlarni 81 mlrd so‘mga kamaytirish"
],
"c": 2,
"w": "k_T = –MPC/MPS = –0,9/0,1 = –9. ΔT = 90 / (–9) = –10, ya’ni soliqlarni 10 ga kamaytirish kerak. 9 — davlat xarajatlari multiplikatori (k_G = 10) bilan hisoblangan ΔG."
},
{
"t": 11,
"q": "Konstitutsiyada har yilgi muvozanatli byudjet talabi mavjud. Retsessiyada soliq tushumlari kamaydi. Mankyu mantig‘iga ko‘ra nima yuz beradi?",
"o": [
"Taqchillik Markaziy bank emissiyasi bilan yopiladi, shu sababli pul bazasi oshadi va inflyatsiya pasayadi",
"Talab qayd etilganligi sababli ishlab chiqarish o‘zgarmaydi, balans esa soliq stavkalari avtomatik o‘zgarishi bilan tiklanadi",
"Soliq oshirish yoki xarajat qisqartirish zarur; bu avtomatik barqarorlashtiruvchilarni «o‘chirib», retsessiyani chuqurlashtiradi",
"Hukumat xarajatlarni oshirib, talabni qo‘llab-quvvatlaydi, AD oshadi va retsessiya yumshaydi, chunki balans talabi tsiklga bog‘liq emas"
],
"c": 2,
"w": "Yillik balans talabi tsiklga qarshi emas, tsiklni kuchaytiruvchi (prosiklik) siyosatni majbur qiladi."
},
{
"t": 11,
"q": "Quyidagi juftlikdan qaysi biri Oliver–Tanzi va siqib chiqarish samaralarini to‘g‘ri ajratadi?",
"o": [
"Oliver–Tanzi: foiz stavkasi oshib, xususiy investitsiyalar kamayadi; siqib chiqarish: kechikish tufayli inflyatsiya real soliq tushumini kamaytiradi",
"Oliver–Tanzi: soliq stavkasi oshib, tushum kamayadi (Laffer mantig‘i); siqib chiqarish: milliy valyuta qadrsizlanishi tufayli import qimmatlashadi",
"Ikkalasi ham pul emissiyasi natijasida yuzaga keladigan valyuta kursining mustahkamlanishini va eksport pasayishini bildiradi",
"Oliver–Tanzi: kechikkan soliqlar inflyatsiyada real qiymatini yo‘qotadi; siqib chiqarish: davlat qarzi foizni oshirib investitsiyani kamaytiradi"
],
"c": 3,
"w": "Oliver–Tanzi — soliq kechikishi + inflyatsiya (emissiya bilan moliyalash holati); siqib chiqarish — qarz bilan moliyalash holati va qarz mablag‘lari bozori mexanizmi."
},
{
"t": 11,
"q": "Mamlakatda c = 0,9. Hukumat daromad soliqi stavkasini t = 0,2 dan t = 0,3 ga oshirdi (yopiq iqtisodiyot, T = tY). Multiplikator k = 1 / (1 – c(1 – t)) qanday o‘zgaradi?",
"o": [
"≈ 1,22 dan ≈ 1,37 gacha oshadi",
"10 dan 10 gacha, o‘zgarmaydi",
"≈ 2,08 dan ≈ 1,49 gacha kamayadi",
"≈ 3,57 dan ≈ 2,70 gacha kamayadi"
],
"c": 3,
"w": "t = 0,2: k = 1 / (1 – 0,72) = 3,57; t = 0,3: k = 1 / (1 – 0,63) = 2,70. Yuqori t multiplikatorni kamaytiradi — avtomatik barqarorlashtiruvchilar kuchayadi."
},
{
"t": 11,
"q": "Mankyu bo‘yicha davlat qarzi o‘sishining oqibatlariga quyidagilardan qaysi biri KIRMAYDI?",
"o": [
"Soliqlar oshishi hisobiga iqtisodiy rag‘batlarning zaiflashuvi",
"Daromadlar tengsizligining oshishi",
"Milliy jamg‘arma va kapital zaxiralarining ko‘payishi",
"Defolt xavfi tufayli foiz stavkasiga risk mukofotining qo‘shilishi"
],
"c": 2,
"w": "Taqchillik milliy jamg‘armani kamaytiradi va investitsiyalarni siqib chiqaradi; kapital zaxiralari ko‘payishi emas, kamayishi kutiladi."
},
{
"t": 11,
"q": "Ochiq iqtisodiyotda c = 0,8, t = 0,25 (proporsional soliq), m = 0,2. Davlat xaridlari 30 mlrd so‘mga oshsa, muvozanatli daromad qanchaga o‘zgaradi?",
"o": [
"≈ 66,7 mlrd so‘m",
"75 mlrd so‘m",
"≈ 50 mlrd so‘m",
"150 mlrd so‘m"
],
"c": 2,
"w": "k_G = 1 / (1 – c(1 – t) + m) = 1 / (1 – 0,6 + 0,2) = 1 / 0,6 ≈ 1,67; ΔY = 1,67 × 30 = 50. 75 — importni hisobga olmaslik, 150 — soliq va importni hisobga olmaslik, 66,7 — t ni c(1 – t) o‘rniga qo‘shib yuborish."
},
{
"t": 11,
"q": "Davlat byudjeti taqchilligi pul emissiyasi bilan moliyalanmoqda, soliqlar kechikish bilan to‘lanadi. Oliver–Tanzi «qopqoni»ning to‘g‘ri zanjiri qaysi?",
"o": [
"Emissiya → valyuta mustahkamlanishi → import ↑ → bojxona tushumlari ↑ → taqchillik ↓",
"Emissiya → foiz stavkasi ↑ → investitsiya ↓ → soliq bazasi ↓ → taqchillik ↑ → yana qarz",
"Taqchillik ↑ → qarz olish ↑ → inflyatsiya ↓ → real soliq ↑ → taqchillik ↓ (barqarorlik)",
"Emissiya → inflyatsiya ↑ → real soliq tushumi ↓ → taqchillik ↑ → emissiya"
],
"c": 3,
"w": "Soliqlar kechikib to‘lanadi, inflyatsiya ularning real qiymatini yemiradi; real tushum kamayib, taqchillik oshadi va emissiya kuchayadi."
},
{
"t": 11,
"q": "Hukumat yillik 200 trln so‘m nominal soliq tushumini kutmoqda; soliqlar o‘rtacha 3 oy kechikish bilan to‘lanadi, oylik inflyatsiya 2%. Oliver–Tanzi samarasi tufayli real tushum taxminan qanchaga kamayadi?",
"o": [
"≈ 11,5 trln so‘m",
"4,0 trln so‘m",
"≈ 12,2 trln so‘m",
"12,0 trln so‘m"
],
"c": 0,
"w": "Real yo‘qotish = 1 – 1/1,02^3 = 1 – 0,9423 ≈ 5,77%; 200 × 0,0577 ≈ 11,5. 12,0 — oddiy foiz (3 × 2%), 12,2 — 1,02^3 – 1 ni nominal summaga ko‘paytirish, 4,0 — bir oylik inflyatsiya."
},
{
"t": 11,
"q": "MPC = 0,8 bo‘lganda k_G = 5, k_T = –4. Soliq multiplikatorining mutlaq qiymati davlat xarajatlari multiplikatoridan kichik bo‘lishining iqtisodiy sababi qaysi?",
"o": [
"Soliqlar faqat investitsiyalarga ta’sir qiladi, iste’mol esa soliqqa bog‘liq emas, shuning uchun soliq ta’siri doim zaifroq",
"Soliq o‘zgarishi tasarrufdagi daromadga emas, faqat narxlarga ta’sir qiladi, shu sababli uning yalpi talabga ta’siri kichikroq",
"Soliq kamayganda daromadning MPS ulushi jamg‘ariladi, shu sababli birinchi raund talabi ΔT dan kam; xaridlar esa to‘liq qo‘shiladi",
"Davlat xaridlari multiplikatori import hisobiga kattalashadi, soliq multiplikatori esa import ta’sirida kichrayadi"
],
"c": 2,
"w": "Birinchi raunddagi ta’sir ΔG uchun ΔG ga, soliq uchun esa c × ΔT ga teng (c < 1). Shu sababli |k_T| = c/(1 – c) = k_G – 1."
},
{
"t": 11,
"q": "Δd = (r – g) × d – s formulasidan qaysi xulosa to‘g‘ri?",
"o": [
"Formula nominal qarzning mutlaq hajmiga bog‘liq, qarzning YaIMga nisbatiga emas, shuning uchun d ahamiyatsiz",
"g > r bo‘lsa, doimiy birlamchi taqchilikda ham nisbat cheklangan darajada barqarorlashadi",
"g > r bo‘lsa ham, qarz nisbatini barqarorlashtirish uchun birlamchi profitsit albatta shart",
"r > g bo‘lsa, qarz nisbati birlamchi balansdan qat’i nazar o‘z-o‘zidan kamayadi"
],
"c": 1,
"w": "g > r sharoitida (r – g) d manfiy, qarz YaIMdan tezroq «suyuladi». r > g bo‘lsa, barqarorlik uchun birlamchi profitsit kerak."
},
{
"t": 11,
"q": "MPC = 0,6. Hukumat bir holda transfertlarni 40 mlrd so‘mga, boshqa holda davlat xaridlarini 40 mlrd so‘mga oshiradi (soliqlar qayd etilgan, yopiq iqtisodiyot). Daromad o‘zgarishlari qanday?",
"o": [
"Transfertlarda +60, xaridlarda +100",
"Transfertlarda +100, xaridlarda +100",
"Transfertlarda +24, xaridlarda +100",
"Transfertlarda +60, xaridlarda +60"
],
"c": 0,
"w": "k_TR = c/(1 – c) = 1,5 → 60; k_G = 1/(1 – c) = 2,5 → 100. Transfertda birinchi raundda faqat c ulushi sarflanadi, shu sababli |k_TR| = k_G – 1."
},
{
"t": 11,
"q": "Potensial YaIM haqiqiy YaIMdan 120 mlrd so‘mga yuqori, MPC = 0,75. Uzilish byudjet qoldig‘ini o‘zgartirmasdan, faqat balanslashgan byudjet orqali yopilmoqda. Qaysi variant to‘g‘ri?",
"o": [
"ΔG = ΔT = 30 mlrd so‘m; taqchillik o‘zgarmaydi",
"ΔG = ΔT = 120 mlrd so‘m; taqchillik o‘zgarmaydi",
"ΔG = ΔT = 480 mlrd so‘m; taqchillik 120 ga oshadi",
"ΔG = ΔT = 40 mlrd so‘m; taqchillik o‘zgarmaydi"
],
"c": 1,
"w": "Balanslashgan byudjet multiplikatori 1 ga teng (k_G + k_T = 4 – 3), shuning uchun ΔY = ΔG = 120. 30 va 40 — mos ravishda k_G = 4 va |k_T| = 3 ga bo‘lingan (noto‘g‘ri)."
},
{
"t": 11,
"q": "Hukumat «byudjet muvozanati o‘zi maqsad emas, asosiy maqsad — to‘liq bandlik va narxlar barqarorligi; zarur bo‘lsa taqchillik ham bo‘ladi» deb hisoblaydi. Bu qaysi konsepsiya?",
"o": [
"Tsiklik muvozanatli byudjet",
"Yillik muvozanatli byudjet",
"Tarkibiy balans qoidasi («qarz tormozi»)",
"Funksional moliya (A. Lerner)"
],
"c": 3,
"w": "Funksional moliya byudjet balansini maqsad emas, vosita deb biladi; tsiklik muvozanat esa tsikl davomida balansni talab qiladi."
},
{
"t": 11,
"q": "Kichik ochiq iqtisodiyot taqchillikni xorijdan qarz olib moliyalashtirmoqda va kapital harakatchan. Siqib chiqarish qaysi kanal orqali namoyon bo‘ladi?",
"o": [
"Kapital oqimi valyutani mustahkamlab sof eksportni kamaytiradi",
"Foiz oshib, xususiy jamg‘arma investitsiyaga aylanadi va siqib chiqarish kuchsizlanadi",
"Siqib chiqarish yo‘qoladi, chunki qarz xorijiy valyutada olinadi va ichki foizga ta’sir qilmaydi",
"Milliy valyuta qadrsizlanadi va sof eksport oshadi, shu sababli siqib chiqarish eksport orqali namoyon bo‘ladi"
],
"c": 0,
"w": "Ochiq iqtisodiyotda qarz xorijdan olinishi mumkin, ammo bu valyuta kursini mustahkamlab sof eksportni siqib chiqaradi (20-bob)."
},
{
"t": 11,
"q": "Qarz nisbatini barqarorlashtirish uchun (Δd = 0) qarz YaIMning 80 foizi, real foiz stavkasi 6%, real o‘sish 2% bo‘lsa, qanday birlamchi profitsit (YaIMga nisbatan) talab qilinadi?",
"o": [
"1,6%",
"3,2%",
"4,8%",
"6,4%"
],
"c": 1,
"w": "Δd = 0 uchun s = (r – g) × d = 0,04 × 80 = 3,2. 4,8 = 0,06 × 80 (g hisobga olinmagan), 1,6 = 0,02 × 80 (faqat g), 6,4 = 0,08 × 80 (r + g)."
},
{
"t": 11,
"q": "Ikkita soliq kamaytirish: A — faqat bir yilga, B — doimiy; hajmi bir xil. Permanent daromad nazariyasiga ko‘ra iste’molga ta’siri qanday?",
"o": [
"A da iste’mol ko‘proq oshadi, chunki odamlar vaqtinchalik daromadni tezroq sarflaydi",
"B da iste’mol ko‘proq oshadi, A da asosan jamg‘ariladi",
"Ikkalasida ham iste’mol kamayadi, chunki kelajakda soliqlar oshishi kutiladi",
"Ikkalasida ham bir xil, chunki bir yillik tasarrufdagi daromad bir xil oshgan"
],
"c": 1,
"w": "Iste’mol doimiy daromadga bog‘liq: vaqtinchalik o‘zgarish iste’molga zaif ta’sir qiladi."
},
{
"t": 11,
"q": "Iqtisodiyot AS egri chizig‘ining vertikal (klassik) kesimida, to‘liq bandlikda ishlayapti. Hukumat davlat xaridlarini oshirdi. Qisqa muddatda eng ehtimoliy natija qaysi?",
"o": [
"Real YaIM oshadi va raqobat kuchayishi tufayli narxlar darajasi pasayadi",
"AD chapga siljiydi, shu sababli ishsizlik kamayadi va ishlab chiqarish potensialdan oshadi",
"Real YaIM k_G = 1/(1 – c) marta oshadi, narxlar darajasi deyarli o‘zgarmaydi, bandlik to‘liq saqlanadi",
"Ishlab chiqarish o‘zgarmaydi, narxlar oshadi"
],
"c": 3,
"w": "Klassik kesimda ishlab chiqarish potensial darajada qayd etilgan: AD o‘ngga siljishi faqat narxlarni oshiradi. Multiplikator to‘liq amal qilishi uchun bo‘sh resurslar (keynscha kesim) kerak."
},
{
"t": 11,
"q": "Retsessiya davrida haqiqiy byudjet taqchilligi YaIMning 1% idan 4% igacha oshdi, tarkibiy taqchillik esa 1% darajasida qoldi. Qanday xulosa to‘g‘ri?",
"o": [
"Tarkibiy taqchillik o‘zgarmaganligi sababli hech qanday xulosa chiqarib bo‘lmaydi",
"Faol rag‘batlantirish bo‘lmagan; oshish tsiklik qism hisobiga",
"Hukumat keskin diskret rag‘batlantirish o‘tkazgan, chunki haqiqiy taqchillik 3 punktga oshgan",
"Hukumat soliq stavkalarini keskin pasaytirgan, shu sababli tushumlar kamayib taqchillik oshgan"
],
"c": 1,
"w": "Fiskal siyosat yo‘nalishi tarkibiy qoldiq bo‘yicha baholanadi. Uning o‘zgarmasligi diskret choralar bo‘lmaganini bildiradi; 3 punkt oshish — tsiklik qism."
},
{
"t": 11,
"q": "Davlat xaridlari G = 600 mlrd so‘m, soliq tushumlari T = 0,3Y. Haqiqiy YaIM 1800, potensial YaIM 2200 mlrd so‘m. Byudjet qoldig‘ining tarkibi qaysi variantda to‘g‘ri?",
"o": [
"Tarkibiy qoldiq +60, tsiklik qoldiq –120",
"Tarkibiy qoldiq –60, tsiklik qoldiq 0",
"Tarkibiy qoldiq +120, tsiklik qoldiq –180",
"Tarkibiy qoldiq 0, tsiklik qoldiq –60"
],
"c": 0,
"w": "Haqiqiy: 0,3 × 1800 – 600 = –60. Tarkibiy (Y* = 2200): 660 – 600 = +60. Tsiklik = –60 – 60 = –120. Ikkinchi variant haqiqiy qoldiqni tarkibiy deb olgan."
},
{
"t": 12,
"q": "Ko‘chmas mulk narxlari va ipoteka krediti tez o‘smoqda, boshqa sohalarda inflyatsiya past. Pufakni cheklash uchun eng maqsadli vosita qaysi?",
"o": [
"Ochiq bozorda qimmatli qog‘ozlar sotib olish orqali pul bazasini kengaytirish",
"Majburiy zaxira normasini pasaytirish orqali banklar likvidligini oshirish",
"LTV va DTI bo‘yicha cheklovlar",
"Asosiy stavkani keskin oshirish, bu butun iqtisodiyotga bir tekis ta’sir qiladi"
],
"c": 2,
"w": "Makroprudensial vositalar aniq risklarga yo‘naltirilgan; asosiy stavka butun iqtisodiyotga ta’sir qiladi (qo‘pol)."
},
{
"t": 12,
"q": "Markaziy bank past inflyatsiyani va’da qildi, odamlar ishondi. Keyin kutilmagan inflyatsiya bilan ishsizlikni kamaytirish «foydali» bo‘lib qoldi. Oqilona agentlar nima qiladi va qanday yechim yordam beradi?",
"o": [
"Va’daga ishonadi, inflyatsiya pasayadi; yechim — Markaziy bankni hukumat nazoratiga to‘liq o‘tkazish",
"Ishonmaydi, inflyatsiya yuqori; yechim — qoida va mustaqillik",
"Va’daga ishonmaydi, ishsizlik pasayadi; yechim — siyosatni yashirin yuritish va kutilmagan qarorlar",
"Ishsizlik pasayadi, inflyatsiya o‘zgarmaydi; yechim — pul massasini muntazam oshirish"
],
"c": 1,
"w": "Vaqt bo‘yicha nomuvofiqlik (Kidlend va Preskott): oqilona kutishlarda inflyatsiya yuqori, ishsizlik kamaymaydi. Yechimlar: qoidalar, mustaqillik, obro‘li rahbar, targetlash."
},
{
"t": 12,
"q": "Bank aktivlari 2400 mlrd, kapitali 120 mlrd so‘m. Aktivlar qiymati necha foizga tushsa, bank kapitali to‘liq yo‘qoladi va leveredj koeffitsiyenti nechaga teng?",
"o": [
"20%; leveredj 5",
"2,5%; leveredj 40",
"10%; leveredj 10",
"5%; leveredj 20"
],
"c": 3,
"w": "Leveredj = aktivlar / kapital = 2400/120 = 20. Kapital yo‘qolishi uchun aktivlar 120/2400 = 5% ga tushishi kifoya."
},
{
"t": 12,
"q": "Uzoq yillar juda past stavkalar saqlandi: samarasiz korxonalar bozorda qolmoqda, ko‘chmas mulk narxlari haddan tashqari oshdi. Bu qaysi ko‘zda tutilmagan oqibatlarga mos?",
"o": [
"Oliver–Tanzi samarasi va siqib chiqarish",
"Fiskal ustunlik va vaqt bo‘yicha nomuvofiqlik",
"Kredit kanalining buzilishi va dollarlashuv",
"Zombi-firmalar va aktivlar pufagi"
],
"c": 3,
"w": "Arzon kredit samarasiz firmalarni saqlab qoladi va aktivlar narxini oshiradi; bular uzoq past stavkalarning salbiy samaralari."
},
{
"t": 12,
"q": "Inflyatsiya va valyuta bosimi sharoitida qat’iy pul-kredit siyosati doirasida qaysi chora MOS KELMAYDI?",
"o": [
"Teskari REPO orqali ortiqcha likvidlikni jalb qilish",
"Davlat qimmatli qog‘ozlarini sotib olish",
"Majburiy zaxira normasini oshirish (xorijiy valyuta depozitlari uchun ham)",
"Asosiy stavkani oshirish va foiz koridorini yuqoriga siljitish"
],
"c": 1,
"w": "Qimmatli qog‘ozlarni sotib olish pul bazasini oshiradi — yumshoq siyosat vositasi; qat’iy siyosatda ularni sotish kerak."
},
{
"t": 12,
"q": "Quyidagi uchlikdan qaysi biri (operatsion mo‘ljal – oraliq mo‘ljal – pirovard maqsad) to‘g‘ri tasniflangan?",
"o": [
"Overnayt stavka – M2 – inflyatsiya",
"Pul bazasi – YaIM o‘sishi – valyuta kursi",
"Inflyatsiya prognozi – bank zaxiralari – bandlik",
"M2 – overnayt stavka – YaIM o‘sishi"
],
"c": 0,
"w": "Operatsion mo‘ljallar (overnayt stavka, zaxiralar, pul bazasi) bevosita boshqariladi; oraliq (M2, kredit, valyuta kursi) bilvosita; pirovard — inflyatsiya, o‘sish, bandlik."
},
{
"t": 12,
"q": "Foiz koridori asosiy stavka (14%) atrofida simmetrik: ±1,5 foiz punkt. Overnayt kredit (yuqori chegara) va overnayt depozit (quyi chegara) stavkalari qancha?",
"o": [
"16,0% va 12,0%",
"12,5% va 15,5%",
"15,5% va 14,0%",
"15,5% va 12,5%"
],
"c": 3,
"w": "Yuqori chegara = 14 + 1,5 = 15,5 (Markaziy bank kreditlari), quyi = 14 – 1,5 = 12,5 (overnayt depozitlar)."
},
{
"t": 12,
"q": "Teylor qoidasi bo‘yicha (koeffitsiyentlar 0,5 va 0,5) inflyatsiya maqsaddan 2 foiz punktga oshdi va YaIM uzilishi 1 punktga ortdi. Qoida bo‘yicha nominal stavka qanchaga oshishi kerak?",
"o": [
"2,5 foiz punktga",
"3,5 foiz punktga",
"1,5 foiz punktga",
"3,0 foiz punktga"
],
"c": 1,
"w": "π oshishi stavkaga 1 + 0,5 = 1,5 koeffitsiyent bilan ta’sir qiladi: 2 × 1,5 = 3; uzilish: 0,5 × 1 = 0,5. Jami 3,5. 3,0 — uzilish unutilgan."
},
{
"t": 12,
"q": "Inflyatsiya maqsaddan 2 foiz punktga oshdi (boshqa o‘zgarishlarsiz), Markaziy bank nominal stavkani 1 punktga oshirdi. Teylor printsipi nuqtai nazaridan baho qaysi?",
"o": [
"Yetarli: real stavka o‘zgarmadi, chunki inflyatsiya va nominal stavka bir yo‘nalishda o‘zgardi",
"Yetarli: nominal stavka 1 punktga oshgani uchun real stavka ham oshdi va talab pasayadi",
"Ortiqcha: qoida faqat 0,5 punkt oshirishni talab qiladi, qolgani real stavkani oshiradi",
"Yetarli emas: real stavka 1 punktga pasaydi, kerak — 3 punkt"
],
"c": 3,
"w": "Δr = 1 – 2 = –1. Teylor printsipi: π ga javob koeffitsiyenti 1 dan katta (1,5 × 2 = 3), real stavka ham oshishi kerak."
},
{
"t": 12,
"q": "Hukumat byudjet konsolidatsiyasini o‘tkazmoqda (soliq ↑, xarajat ↓), Markaziy bank esa stavkani pasaytirmoqda. Natija qanday?",
"o": [
"Foiz stavkasi o‘zgarmaydi, AD kuchli kamayadi, chunki soliq oshishi ta’sirni belgilaydi",
"Foiz kuchli pasayadi, investitsiyalar rag‘batlanadi, AD noaniq",
"Foiz stavkasi kuchli oshadi, AD kuchli kamayadi, investitsiyalar siqib chiqariladi",
"AD kuchli oshadi, inflyatsiya xavfi eng yuqori, chunki ikkala siyosat ham rag‘batlantiruvchi"
],
"c": 1,
"w": "Yumshoq monetar + cheklovchi fiskal: foiz pasayadi, AD ga ta’sir noaniq (fiskal qisqarish va monetar kengayish bir-birini qisman qoplaydi)."
},
{
"t": 12,
"q": "Hukumat katta taqchillikni Markaziy bankdan bevosita kredit olib moliyalashga majbur qilmoqda. Eng ehtimoliy oqibat qaysi?",
"o": [
"Markaziy bank mustaqilligi kuchayadi, inflyatsion kutishlar pasayadi, chunki hukumat bilan hamkorlik oshadi",
"Siqib chiqarish kuchayadi, foiz oshadi va inflyatsiya pasayadi, chunki qarz bozordan olinadi",
"Pul bazasi oshadi, monetar siyosat narx barqarorligiga xizmat qila olmaydi",
"Transmissiya kuchayadi, chunki asosiy stavka signali aniqlashadi va hukumat dasturi bilan uyg‘unlashadi"
],
"c": 2,
"w": "Fiskal ustunlik: taqchillikni monetizatsiya qilish pul bazasini oshiradi va inflyatsion kutishlarni ko‘taradi; shu sababli bevosita kreditlash taqiqlanadi."
},
{
"t": 12,
"q": "Asosiy stavka 2 foiz punktga pasaytirildi, ammo inflyatsion kutishlar bir vaqtda 3 foiz punktga pasaydi. Foiz stavkasi kanali nuqtai nazaridan real stavka (r = i – π^e) qanday o‘zgardi?",
"o": [
"2 foiz punktga pasaydi — siyosat yumshadi, kutishlar ta’sir qilmaydi",
"5 foiz punktga oshdi — o‘zgarishlar yig‘indisi",
"1 punktga oshdi, siyosat qat’iylashdi",
"3 foiz punktga pasaydi — kutishlar pasayishi stavkani pasaytirishni kuchaytirdi"
],
"c": 2,
"w": "Δr = Δi – Δπ^e = –2 – (–3) = +1. Investitsiya va iste’molga real stavka ta’sir qiladi."
},
{
"t": 12,
"q": "Markaziy bank stavkani bugun pasaytirdi. Laglar haqidagi qaysi bayonot to‘g‘ri?",
"o": [
"Inflyatsiyaga maksimal ta’sir ishlab chiqarishdan oldin, taxminan 3–6 oyda seziladi",
"Ichki lag qisqa, tashqi lag uzoq: ishlab chiqarishga 6–12, inflyatsiyaga 12–24 oy",
"Ikkala lag ham qisqa, shuning uchun bank joriy inflyatsiyaga qarab harakat qiladi, prognoz kerak emas",
"Ichki lag uzoq, tashqi lag qisqa, chunki qaror siyosiy jarayon va kengash uzoq muhokama qiladi"
],
"c": 1,
"w": "Monetar siyosatda ichki lag qisqa, tashqi lag uzoq va o‘zgaruvchan (Fridmen); fiskal siyosatda aksincha."
},
{
"t": 12,
"q": "Pul bazasi 200 mlrd so‘m, cr = 0,25. Majburiy zaxira normasi rr 0,10 dan 0,15 gacha oshirildi. m = (cr + 1)/(cr + rr) bo‘lsa, pul massasi qanday o‘zgaradi?",
"o": [
"≈ 53,6 mlrd so‘mga kamayadi (m = (1 + rr)/(cr + rr) deb)",
"≈ 666,7 mlrd so‘mga kamayadi",
"≈ 71,4 mlrd so‘mga kamayadi (m = 1/(cr + rr) deb)",
"≈ 89,3 mlrd so‘mga kamayadi"
],
"c": 3,
"w": "rr = 0,10: m = 1,25/0,35 = 3,571, M = 714,3. rr = 0,15: m = 1,25/0,40 = 3,125, M = 625. ΔM = –89,3. 666,7 — oddiy 1/rr multiplikatori (cr hisobga olinmagan)."
},
{
"t": 12,
"q": "Banklararo bozorda ortiqcha likvidlik bor, overnayt stavka koridorning quyi chegarasiga yaqinlashmoqda. Markaziy bank likvidlikni jalb qilish uchun nima qiladi?",
"o": [
"Majburiy zaxira normasini pasaytirib, banklarning kredit imkoniyatini kengaytiradi",
"To‘g‘ridan-to‘g‘ri REPO orqali banklarga likvidlik beradi va overnayt stavkani koridor ichida ushlab turadi",
"Teskari REPO yoki depozit auksionlari o‘tkazadi",
"Overnayt kredit stavkasini pasaytiradi va ikkilamchi bozorda obligatsiyalar sotib oladi"
],
"c": 2,
"w": "To‘g‘ridan-to‘g‘ri REPO likvidlik beradi, teskari REPO esa jalb qiladi; ortiqcha likvidlikda jalb qilish vositalari kerak."
},
{
"t": 12,
"q": "Inflyatsiya vaqtincha oshdi, ayni paytda mintaqa qarz inqirozi va retsessiyaga kirmoqda. Faqat narxlar barqarorligi mandatiga ega bank va ikki tomonlama (narx + bandlik) mandatli bank xatti-harakati qanday farqlanadi?",
"o": [
"Ikkalasi ham stavkani oshiradi, chunki inflyatsiya oshgan",
"Birinchisi stavkani pasaytiradi, ikkinchisi oshiradi, chunki birinchisi retsessiyaga e’tibor beradi",
"Mandatlar farqi qarorlarga ta’sir qilmaydi, chunki ikkala bank ham bir xil Teylor qoidasiga amal qiladi",
"Birinchisi stavkani oshiradi, ikkinchisi bandlik sababli past saqlaydi"
],
"c": 3,
"w": "YeMB 2011-yilda stavkani oshirdi (keyin bekor qildi), Fed esa ikki tomonlama mandati tufayli stavkani nolga yaqin saqladi."
},
{
"t": 12,
"q": "Markaziy bank pul massasini qayd etgan (qat’iy belgilagan). Iqtisodiyotda pulga talab oshdi. Natija qanday bo‘ladi?",
"o": [
"Foiz stavkasi oshadi",
"Foiz stavkasi pasayadi",
"Pul massasi talabga moslashib oshadi",
"Foiz stavkasi ham, pul massasi ham qayd etilgan holda qoladi"
],
"c": 0,
"w": "Markaziy bank pul massasi va foiz stavkasini bir vaqtda mustaqil belgilay olmaydi: massa qayd etilsa, stavka talabga qarab o‘zgaradi."
},
{
"t": 12,
"q": "Markaziy bank ochiq bozorda 60 mlrd so‘mlik obligatsiya sotib oldi. cr = 0,2, rr = 0,1, m = (cr + 1)/(cr + rr). Pul massasi taxminan qanchaga oshadi?",
"o": [
"60 mlrd so‘m",
"240 mlrd so‘m",
"600 mlrd so‘m",
"72 mlrd so‘m"
],
"c": 1,
"w": "m = 1,2/0,3 = 4; ΔM = 4 × 60 = 240. 600 — oddiy 1/rr = 10 multiplikatori, 72 — 1,2 × 60."
},
{
"t": 12,
"q": "Hukumat taqchillikni oshirib xarajatlarni ko‘paytirmoqda, Markaziy bank inflyatsiyani jilovlash uchun stavkani oshirmoqda. Monetar–fiskal kombinatsiyalar jadvaliga ko‘ra natija qanday?",
"o": [
"Foiz kuchli oshadi, AD noaniq, investitsiyalar siqiladi",
"Foiz stavkasi ta’siri noaniq, AD kuchli kamayadi, chunki ikkala siyosat ham cheklovchi",
"Foiz stavkasi kuchli pasayadi, AD kuchli oshadi va investitsiyalar rag‘batlanadi",
"Foiz stavkasi o‘zgarmaydi, AD o‘zgarmaydi, chunki ikki siyosat bir-birini to‘liq qoplaydi"
],
"c": 0,
"w": "Qat’iy monetar + rag‘batlantiruvchi fiskal: siyosatlar ziddiyati, stavka kuchli oshadi, siqib chiqarish."
},
{
"t": 12,
"q": "Teylor qoidasi: i = π + r* + 0,5(π – π*) + 0,5 × YaIM uzilishi. π = 7%, r* = 3%, π* = 4%, YaIM uzilishi = –2%. Qoida bo‘yicha stavka qancha?",
"o": [
"10,5%",
"9,0%",
"11,5%",
"12,5%"
],
"c": 0,
"w": "i = 7 + 3 + 0,5 × 3 + 0,5 × (–2) = 10 + 1,5 – 1 = 10,5. 11,5 — uzilish hisobga olinmagan, 12,5 — uzilish ishorasi teskari, 9,0 — inflyatsiya uzilishi hisobga olinmagan."
},
{
"t": 12,
"q": "Bankda so‘mdagi depozitlar 500 mlrd so‘m (majburiy zaxira normasi 12%), xorijiy valyutadagi depozitlar 300 mlrd so‘mga ekvivalent (norma 18%). Jami majburiy zaxira qancha?",
"o": [
"96 mlrd so‘m",
"114 mlrd so‘m",
"120 mlrd so‘m",
"144 mlrd so‘m"
],
"c": 1,
"w": "500 × 0,12 + 300 × 0,18 = 60 + 54 = 114. 96 va 144 — barcha depozitlarga bitta norma; 120 — oddiy o‘rtacha (15%)."
},
{
"t": 12,
"q": "Bankning depozitlari 800 mlrd so‘m, majburiy zaxira normasi 10%. Bank Markaziy bankdagi hisobida 110 mlrd so‘m saqlaydi. Naqd pul chiqib ketmaydi. Ortiqcha zaxira hisobiga tizim bo‘yicha depozitlarning maksimal qo‘shimcha o‘sishi qancha?",
"o": [
"300 mlrd so‘m",
"1100 mlrd so‘m",
"30 mlrd so‘m",
"80 mlrd so‘m"
],
"c": 0,
"w": "Majburiy zaxira = 80, ortiqcha = 110 – 80 = 30. Multiplikator 1/rr = 10, qo‘shimcha depozit = 30 × 10 = 300."
},
{
"t": 12,
"q": "Stavka oshganda qarz oluvchilarning garov qiymati va sof boyligi kamayib, ularga kredit berish riskliroq bo‘lib qoladi. Bu qaysi kanalga mos keladi?",
"o": [
"Aktivlar narxlari kanali (Tobin koeffitsiyenti va boylik samarasi)",
"Kutishlar kanali: inflyatsion kutishlarning o‘zgarishi",
"Kredit kanalining balans shakli",
"Bank kreditlash kanali: banklarning kredit taklifini cheklashi"
],
"c": 2,
"w": "Balans kanali qarz oluvchining moliyaviy holati yomonlashuviga asoslanadi; bank kreditlash kanali esa banklarning kredit taklifini cheklashiga."
},
{
"t": 12,
"q": "Teylor qoidasida π = 8%, r* = 2%, π* = 4% (koeffitsiyentlar 0,5 va 0,5). Markaziy bank stavkasi 11% bo‘lsa, qoidaga ko‘ra u qanday YaIM uzilishiga mos keladi?",
"o": [
"–1%",
"0% (uzilish yo‘q)",
"–2% (potensialdan past)",
"+2% (potensialdan yuqori)"
],
"c": 2,
"w": "Uzilishsiz qoida stavkasi: 8 + 2 + 0,5 × 4 = 12. 11 = 12 + 0,5 × gap → gap = –2."
},
{
"t": 12,
"q": "Depozit va kreditlarning katta qismi xorijiy valyutada. Markaziy bank so‘mdagi asosiy stavkani oshirdi. Transmissiya mexanizmiga ta’siri qanday?",
"o": [
"Faqat ochiq bozor operatsiyalari ta’sirsiz qoladi, asosiy stavka esa to‘liq ishlaydi",
"Ta’sir o‘zgarmaydi, chunki milliy va xorijiy valyutadagi stavkalar xalqaro bozorda baribir bog‘lanadi",
"Ta’sir kuchayadi, chunki dollarlashuv kutishlarni mustahkamlaydi va stavka signali aniqroq bo‘ladi",
"Ta’sir zaiflashadi: valyuta stavkalari asosiy stavkaga bog‘liq emas"
],
"c": 3,
"w": "Yuqori dollarlashuv transmissiyani buzuvchi omillardan biri; shu sababli xorijiy valyuta depozitlari uchun yuqoriroq majburiy zaxira kabi vositalar ishlatiladi."
},
{
"t": 12,
"q": "Markaziy bank asosiy stavkani oshirdi; iqtisodiyot kichik va ochiq, kapital harakatchan. Valyuta kursi kanalining to‘g‘ri zanjiri qaysi?",
"o": [
"Kapital oqib kelishi → milliy valyuta qadrsizlanishi → eksport ↑ → inflyatsiya ↑ (stavka oshirilganiga qaramay)",
"Kapital chiqib ketishi → milliy valyuta qadrsizlanishi → import qimmatlashadi (inflyatsiya ↑), sof eksport ↑ va bu stavka oshishining natijasi",
"Valyuta kursi o‘zgarmaydi, chunki ochiq iqtisodiyotda ham ta’sir faqat kredit stavkalari orqali o‘tadi",
"Kapital oqimi → valyuta mustahkamlanadi → import arzonlashadi (inflyatsiya ↓), sof eksport ↓"
],
"c": 3,
"w": "Stavka oshsa, milliy aktivlar jozibador bo‘ladi; valyuta mustahkamlanadi, import arzonlashib inflyatsiya pasayadi, sof eksport kamayadi."
},
{
"t": 12,
"q": "Bank 800 mlrd so‘mlik kreditlarni 20% da, 200 mlrd so‘mlik qimmatli qog‘ozlarni 10% da joylashtirgan. Resurslar: 850 mlrd so‘m depozit (12% to‘lanadi) va 150 mlrd so‘m o‘z kapitali. Foiz marjasi (sof foiz daromadi) qancha?",
"o": [
"78 mlrd so‘m",
"180 mlrd so‘m",
"102 mlrd so‘m",
"60 mlrd so‘m"
],
"c": 0,
"w": "Foiz daromadi: 160 + 20 = 180. Foiz xarajati: 850 × 0,12 = 102 (o‘z kapitali uchun foiz to‘lanmaydi). Marja = 78. 60 — barcha 1000 ga 12% to‘langan deb hisoblash."
},
{
"t": 12,
"q": "Markaziy bank 100 mlrd so‘mlik obligatsiyani 7 kunga REPO bilan, yillik 14% (kunlar 365) da sotdi. Banklar kelishuv oxirida foiz sifatida qancha to‘laydi?",
"o": [
"≈ 0,27 mlrd so‘m",
"≈ 0,04 mlrd so‘m",
"≈ 0,98 mlrd so‘m",
"14 mlrd so‘m"
],
"c": 0,
"w": "100 × 0,14 × 7/365 = 0,268. 0,04 — bir kunlik foiz, 14 — butun yil foizi."
},
{
"t": 12,
"q": "Markaziy bankning inflyatsion maqsadi ishonchli, korxonalar va xodimlar kelgusi inflyatsiyani past deb kutmoqda. Bu transmissiyaga qanday ta’sir qiladi?",
"o": [
"Kutishlar kanali ishlamaydi, chunki kutishlar faqat o‘tgan inflyatsiyaga bog‘liq va ishonch ta’sir qilmaydi",
"Inflyatsiya darhol oshadi, chunki Markaziy bank obro‘si talabni va ish haqini kuchaytiradi",
"Past inflyatsiya narx va ish haqi qarorlariga kiritiladi; stavkani kamroq oshirish kerak",
"Transmissiya zaiflashadi va stavkani ancha yuqori saqlashga to‘g‘ri keladi"
],
"c": 2,
"w": "Ishonchli siyosat kutishlarni bevosita pasaytiradi; ishonch past bo‘lsa, inflyatsiyani jilovlash uchun yuqori stavka kerak."
},
{
"t": 13,
"q": "IS: C = 200 + 0,75(Y – T), I = 400 – 20r, G = 300, T = 250. LM: pulga talab L = 0,4Y – 40r, real pul taklifi M/P = 600. Muvozanatli daromad Y qancha?",
"o": [
"2850",
"2250",
"1500",
"2667"
],
"c": 1,
"w": "IS: 0,25Y = 712,5 – 20r, ya’ni Y = 2850 – 80r. LM: Y = 1500 + 100r. Tenglashtirsak 180r = 1350, r = 7,5%, Y = 2250."
},
{
"t": 13,
"q": "IS-LM modelida c = 0,8, d = 25, k = 0,5, h = 50. Davlat xaridlari 90 ga oshdi (narxlar qayd etilgan, M o‘zgarmagan). Muvozanatli daromad qanchaga o‘zgaradi?",
"o": [
"450",
"200",
"129",
"180"
],
"c": 1,
"w": "Multiplikator = 1 / ((1 – c) + dk/h) = 1 / (0,2 + 25×0,5/50) = 1/0,45 = 2,22; ΔY = 90 × 2,22 = 200. 450 – siqib chiqarishni hisobga olmagan Keyns multiplikatori (90/0,2)."
},
{
"t": 13,
"q": "Parametrlar: c = 0,8, d = 25, k = 0,5, h = 50. Markaziy bank real pul taklifini (M/P) 108 ga oshirdi. Fiskal siyosat o‘zgarmaydi. Daromad qanchaga oshadi?",
"o": [
"54",
"120",
"216",
"240"
],
"c": 1,
"w": "Monetar multiplikator = (d/h) / ((1 – c) + dk/h) = 0,5/0,45 = 1,11; ΔY = 108 × 1,11 = 120. 240 – d/h ko‘paytuvchisi unutilgan, 216 – 1/k ga ko‘paytirilgan."
},
{
"t": 13,
"q": "c = 0,75 bo‘lganda hukumat soliqlarni 40 ga kamaytirdi (yig‘ma soliq, T). Har bir foiz stavkasida IS egri chizig‘i gorizontal bo‘yicha qancha miqdorda o‘ngga siljiydi?",
"o": [
"160",
"30",
"10",
"120"
],
"c": 3,
"w": "Soliq o‘zgarishi IS ni cΔT/(1 – c) = 0,75×40/0,25 = 120 ga siljitadi. 160 – davlat xaridlari multiplikatori (ΔT/(1 – c)) qo‘llangan xato."
},
{
"t": 13,
"q": "LM egri chizig‘i k = 0,5 bo‘lgan pulga talab (L = 0,5Y – 40r) bilan berilgan. M = 900 va P = 1,5 edi; narxlar darajasi 2 gacha oshdi. Har bir foiz stavkasida LM egri chizig‘i qanchaga siljiydi?",
"o": [
"150 ga chapga",
"300 ga chapga",
"300 ga o‘ngga",
"600 ga chapga"
],
"c": 1,
"w": "M/P 600 dan 450 ga kamaydi (Δ = –150). Y = (M/P + hr)/k bo‘lgani uchun gorizontal siljish = 150/0,5 = 300, narx oshgani sababli – chapga."
},
{
"t": 13,
"q": "IS: Y = 3000 – 150r, LM: Y = 1200 + 150r, investitsiya funksiyasi I = 500 – 30r. Markaziy bank pul taklifini oshirib, LM ni Y = 1500 + 150r holatiga o‘tkazdi. Investitsiyalar qanchaga o‘zgaradi?",
"o": [
"150 ga oshadi",
"60 ga oshadi",
"30 ga oshadi",
"30 ga kamayadi"
],
"c": 2,
"w": "Dastlab r = 6, I = 320. Yangi muvozanat: 3000 – 150r = 1500 + 150r, r = 5, I = 350. Demak ΔI = +30 (150 – daromadning o‘zgarishi)."
},
{
"t": 13,
"q": "c = 0,6, d = 30, k = 0,5, h = 75. Davlat xaridlari 90 ga oshdi. Siqib chiqarish samarasi tufayli daromad Keyns xochidagi natijadan qancha kam oshadi?",
"o": [
"75",
"150",
"225",
"60"
],
"c": 0,
"w": "Keyns xochida: 90/0,4 = 225. IS-LM da: 90 / (0,4 + 30×0,5/75) = 90/0,6 = 150. Siqib chiqarish samarasi = 225 – 150 = 75."
},
{
"t": 13,
"q": "IS: Y = 2000 – 100r, LM: M/P = 0,5Y – 50r, M = 1000. IS-LM dan yalpi talab egri chizig‘ini keltirib chiqaring. P = 4 bo‘lganda AD bo‘yicha daromad qancha?",
"o": [
"1250",
"250",
"500",
"1500"
],
"c": 0,
"w": "r = (2000 – Y)/100 ni LM ga qo‘ysak: M/P = Y – 1000, ya’ni AD: Y = 1000 + 1000/P. P = 4 da Y = 1250. P = 2 bo‘lganda esa 1500 bo‘lardi."
},
{
"t": 13,
"q": "Likvidlik tuzog‘i sharoitida LM r = 2% da gorizontal, IS: Y = 2400 – 100r, c = 0,75. Hukumat xaridlarini 60 ga oshirsa, daromad qanchaga o‘zgaradi?",
"o": [
"o‘zgarmaydi",
"240 ga oshadi",
"60 ga oshadi",
"120 ga oshadi"
],
"c": 1,
"w": "Gorizontal kesimda foiz stavkasi o‘zgarmaydi, siqib chiqarish yo‘q: ΔY = ΔG/(1 – c) = 60/0,25 = 240."
},
{
"t": 13,
"q": "Darslikdagi misolda (C = 100 + 0,8(Y – T), T = 200, I = 300 – 25r, LM: Y = 1600 + 100r) G = 200 dan 250 ga oshirildi. Yangi muvozanatli foiz stavkasi qancha?",
"o": [
"taxminan 2,67%",
"taxminan 5,17%",
"taxminan 3,78%",
"4,00%"
],
"c": 2,
"w": "Yangi IS: Y = 2450 – 125r. 2450 – 125r = 1600 + 100r, r = 850/225 ≈ 3,78%, Y ≈ 1977,8. 5,17% – foiz stavkasi o‘zgarmagandagi (to‘liq Keyns multiplikatori) daromaddan LM bo‘yicha hisoblangan noto‘g‘ri natija."
},
{
"t": 13,
"q": "Likvidlik tuzog‘ida nominal foiz stavkasi 0% ga teng, narxlar esa yiliga 4% ga pasayishi kutilmoqda. Fisher munosabati bo‘yicha real foiz stavkasi qancha va bu Pigu samarasiga nisbatan qanday ahamiyatga ega?",
"o": [
"–4%; investitsiyalarni rag‘batlantiradi",
"0%; deflyatsiya talabga ta’sir qilmaydi",
"+4%; real boylik oshgani uchun IS o‘ngga siljiydi",
"+4%; investitsiyalarni bostiradi, Pigu samarasini zaiflashtirishi mumkin"
],
"c": 3,
"w": "r = i – π^e = 0 – (–4%) = +4%. Kutilayotgan deflyatsiya real stavkani oshiradi va qarzlar real yukini ham og‘irlashtiradi (Fisher), bu Pigu samarasidan kuchliroq bo‘lishi mumkin."
},
{
"t": 13,
"q": "Hukumat davlat xaridlarini oshirdi. Markaziy bank foiz stavkasini o‘zgarmas saqlashga qaror qildi. Mankyu tahliliga ko‘ra natija qanday?",
"o": [
"Pul taklifi o‘zgarmaydi, foiz stavkasi oshadi, multiplikator 1/(1 – c) dan kichik bo‘ladi",
"Pul taklifi qisqartiriladi, LM chapga siljiydi, daromad o‘zgarmaydi, faqat narxlar oshadi",
"Pul taklifi qat’iy qoladi, shuning uchun daromad ham, foiz stavkasi ham o‘zgarmaydi",
"Pul taklifi oshiriladi, LM o‘ngga siljiydi, siqib chiqarish yo‘qoladi, multiplikator 1/(1 – c) ga teng"
],
"c": 3,
"w": "Foiz stavkasini qayd etish uchun Markaziy bank pul taklifini oshirib LM ni IS bilan birga o‘ngga siljitadi. Siqib chiqarish yo‘qoladi, fiskal multiplikator Keyns xochidagiga teng bo‘ladi. Daromadni qayd etsa, aksincha – faqat r oshadi."
},
{
"t": 13,
"q": "«Biznes kayfiyati yaxshilandi» shoki IS-LM modelida kuzatilganda investitsiyalar (I) ning o‘zgarishi nima uchun aniq emas?",
"o": [
"Avtonom I oshadi, ammo r ham oshib, I ni kamaytiradi – ikki qarama-qarshi ta’sir",
"LM chapga siljib, daromad kamayadi va investitsiyalar sust bo‘lib qoladi",
"Foiz stavkasi pasayadi, shuning uchun investitsiyalar albatta oshadi",
"IS siljimaydi, shuning uchun hech qaysi o‘zgaruvchi o‘zgarmaydi"
],
"c": 0,
"w": "IS o‘ngga siljiydi: Y va r oshadi. Avtonom I ning o‘sishi investitsiyani oshiradi, yuqori r esa kamaytiradi – umumiy natija parametrlarga bog‘liq."
},
{
"t": 13,
"q": "Iste’molchilar ishonchi keskin pasaydi. IS-LM modeliga ko‘ra qisqa muddatda qaysi kombinatsiya to‘g‘ri?",
"o": [
"Y, C va I kamayadi, r pasayadi",
"Y va r kamayadi, I o‘zgarmaydi, C oshadi",
"Y kamayadi, r oshadi, I ham kamayadi",
"Y va C kamayadi, r pasayadi, I oshadi"
],
"c": 3,
"w": "IS chapga siljiydi: Y va C kamayadi, r pasayadi. Foiz stavkasining pasayishi esa I ni oshiradi."
},
{
"t": 13,
"q": "Quyidagi omillardan qaysi biri IS egri chizig‘ini emas, LM egri chizig‘ini siljitadi?",
"o": [
"Narxlar darajasining oshishi",
"Sof eksportning o‘sishi",
"Soliqlarning kamayishi",
"Biznes optimizmi tufayli avtonom investitsiyalarning oshishi"
],
"c": 0,
"w": "G, T, avtonom C va I hamda NX IS ni siljitadi. Narxlar darajasi real pul taklifi M/P orqali LM ni chapga siljitadi."
},
{
"t": 13,
"q": "Quyidagilardan qaysi biri IS egri chizig‘ini yotiqroq qiladi?",
"o": [
"Investitsiyalarning foizga sezgirligi (d) ning kamayishi",
"Proporsional soliqlarning joriy etilishi va importga moyillikning oshishi",
"Davlat xaridlari multiplikatorining kamayishi",
"MPC (c) ning oshishi"
],
"c": 3,
"w": "IS qiyaligi (1 – c)/d: c oshsa yoki d oshsa qiyalik kamayadi. Proporsional soliq, import va d ning kamayishi IS ni tikroq qiladi."
},
{
"t": 13,
"q": "X iqtisodiyotda k = 0,6, h = 30; Y iqtisodiyotda k = 0,4, h = 80 (boshqa parametrlar bir xil). Qaysi xulosa to‘g‘ri?",
"o": [
"X da LM yotiqroq bo‘lgani uchun fiskal siyosat X da samaraliroq",
"Y da LM tikroq bo‘lgani uchun monetar siyosat Y da samaraliroq",
"X da LM tikroq: fiskal siyosat kamroq, monetar siyosat ko‘proq samarali",
"Ikkala iqtisodiyotda LM qiyaligi bir xil, shuning uchun farq yo‘q"
],
"c": 2,
"w": "LM qiyaligi k/h: X da 0,02, Y da 0,005. Tik LM da fiskal ekspansiya r ni ko‘proq oshiradi, siqib chiqarish kuchli, monetar ekspansiya esa samaraliroq."
},
{
"t": 13,
"q": "Qisqa muddatda (P qayd etilgan) pul taklifi 10% ga oshirildi. IS-LM + LRAS tahliliga ko‘ra uzoq muddat uchun qaysi xulosa to‘g‘ri?",
"o": [
"P taxminan 10% ga oshadi; M/P, r va Y dastlabki darajaga qaytadi",
"P o‘zgarmaydi, r past qoladi, Y potensialdan yuqori bo‘lib turadi",
"P 10% ga oshadi, lekin Y oshgan holda saqlanib qoladi",
"M/P oshgan holda qoladi, faqat foiz stavkasi dastlabki darajaga qaytadi"
],
"c": 0,
"w": "Uzoq muddatda pul neytral: narxlar pul taklifiga proporsional oshadi, real pul taklifi, foiz stavkasi va daromad dastlabki holatga qaytadi."
},
{
"t": 13,
"q": "Iqtisodiyot potensial darajada. Uzoq muddatda (narxlar moslashganda) davlat xaridlarining oshishi pul taklifining oshishidan nimasi bilan farq qiladi?",
"o": [
"Birinchisida r yuqori, I past qoladi; ikkinchisida r va I dastlabki holatga qaytadi",
"Birinchisida Y potensialdan yuqori qoladi, ikkinchisida potensialga qaytadi",
"Ikkalasida ham r va I dastlabki holatga qaytadi, faqat narxlar o‘zgaradi",
"Birinchisida narxlar o‘zgarmaydi, ikkinchisida narxlar oshadi va Y ham oshadi"
],
"c": 0,
"w": "Fiskal ekspansiyada P oshib, M/P kamayadi, LM chapga siljiydi: Y potensialga qaytadi, lekin r yuqori, I past (to‘liq siqib chiqarish). Monetar ekspansiya faqat narxlarni oshiradi."
},
{
"t": 13,
"q": "Quyidagi fikrlardan qaysi biri Mankyu keltirgan «Volker tajribasi» xulosasiga zid (noto‘g‘ri)?",
"o": [
"Qisqa muddatda likvidlik samarasi tufayli pul qisqarishi stavkalarni oshiradi",
"Fisher samarasi qisqa muddatda, narxlar qat’iy bo‘lganda ustun keladi",
"Uzoq muddatda kutilayotgan inflyatsiyaning pasayishi nominal stavkani tushiradi",
"Ikkala samara ham bor, ammo turli vaqt gorizontlarida ustun keladi"
],
"c": 1,
"w": "Qisqa muddatda narxlar qat’iy – likvidlik samarasi (stavka oshadi), uzoq muddatda narxlar moslashganda Fisher samarasi (stavka pasayadi) ustun."
},
{
"t": 13,
"q": "Ikki holat: (A) pul taklifi oshadi, ammo foiz stavkasi umuman pasaymaydi; (B) pul taklifi oshgach foiz stavkasi pasayadi, biroq investitsiya va daromad o‘zgarmaydi. Ular qaysi hodisalarga mos?",
"o": [
"A – likvidlik tuzog‘i; B – investitsiya tuzog‘i",
"A – investitsiya tuzog‘i; B – likvidlik tuzog‘i",
"A – klassik kesim (LM vertikal); B – likvidlik tuzog‘i",
"A – siqib chiqarish samarasi; B – Pigu samarasi"
],
"c": 0,
"w": "Likvidlik tuzog‘ida pulga talab cheksiz elastik (LM gorizontal), pul taklifi r ni tushirmaydi. Investitsiya tuzog‘ida r tushadi, lekin I foizga sezgir emas (IS vertikal)."
},
{
"t": 13,
"q": "Nominal stavka nolga yetgan sharoitda «oldindan yo‘naltirish» (forward guidance) nima uchun yalpi talabga ta’sir qilishi mumkin?",
"o": [
"Nominal stavka manfiy bo‘la olmasligi sababli real stavka oshib, investitsiyalarni rag‘batlantiradi",
"U pul taklifini ko‘paytirib, LM ning gorizontal kesimini vertikal kesimga aylantiradi",
"U davlat xaridlarini oshirib, IS egri chizig‘ini o‘ngga siljitadi",
"Past stavkalar va’dasi kutilayotgan inflyatsiyani oshirib, real stavkani pasaytiradi"
],
"c": 3,
"w": "Real stavka r = i – π^e. i ni pasaytirib bo‘lmasa, π^e ni oshirish orqali real stavka tushiriladi va investitsiyalar rag‘batlantiriladi."
},
{
"t": 13,
"q": "Quyidagi hodisalardan qaysi biri AD egri chizig‘ining o‘zi bo‘ylab harakat (siljish emas) deb tasniflanadi?",
"o": [
"Markaziy bank pul taklifini nominal oshirishi",
"Davlat xaridlarining oshishi",
"Narxlar pasayib, real pul taklifining oshishi",
"Moliyaviy noaniqlik tufayli pulga talabning oshishi"
],
"c": 2,
"w": "Narx o‘zgarishi AD bo‘ylab harakat beradi (foiz stavkasi samarasi). Fiskal, monetar siyosat va IS/LM shoklari esa AD ni siljitadi."
},
{
"t": 13,
"q": "Hukumat davlat xarajatlarini qisqartirdi (byudjet konsolidatsiyasi), Markaziy bank bir vaqtda pul taklifini oshirdi. IS-LM ga ko‘ra qaysi xulosa aniq to‘g‘ri?",
"o": [
"Daromad albatta pasayadi, foiz stavkasi esa oshadi",
"Daromad albatta oshadi, foiz stavkasi o‘zgarmaydi",
"r pasayadi va I oshadi; Y ning o‘zgarishi siljishlar nisbatiga bog‘liq",
"Foiz stavkasi keskin oshadi, investitsiyalar to‘liq siqib chiqariladi"
],
"c": 2,
"w": "IS chapga, LM o‘ngga siljiydi: r aniq pasayadi, I oshadi. Y ga ikki siljish qarama-qarshi ta’sir qiladi, shuning uchun natija siljish kattaliklariga bog‘liq."
},
{
"t": 13,
"q": "Investitsiyalar foiz stavkasiga kam sezgir (d kichik, IS tik) bo‘lgan iqtisodiyotda qisqa muddatli ta’sir haqida qaysi gap to‘g‘ri?",
"o": [
"Siqib chiqarish kuchli, fiskal siyosat samarasiz, monetar siyosat samarali",
"Siqib chiqarish zaif, fiskal multiplikator 1/(1 – c) ga yaqin; monetar siyosat kuchsiz",
"Fiskal va monetar siyosat teng darajada samarali bo‘ladi",
"Monetar multiplikator fiskal multiplikatordan katta bo‘ladi"
],
"c": 1,
"w": "Fiskal multiplikator 1/((1 – c) + dk/h): d → 0 da u 1/(1 – c) ga yaqinlashadi. Monetar multiplikator (d/h)/(…) esa d bilan birga kamayadi."
},
{
"t": 13,
"q": "IS egri chizig‘i Y = 2600 – 100r, LM egri chizig‘i Y = 1000 + 100r (r — foiz punktlarida). Iste’molga chegaraviy moyillik 0,8. Davlat xarajatlari 50 ga oshsa, yangi muvozanatda Y qanchaga o‘zgaradi?",
"o": [
"+250",
"+125",
"+50",
"+175"
],
"c": 1,
"w": "IS gorizontal bo‘yicha k·ΔG = 5 × 50 = 250 ga siljiydi: Y = 2850 – 100r. LM bilan kesishuv: 2850 – 100r = 1000 + 100r → r = 9,25, Y = 1925 (oldin 1800). ΔY = +125: qolgan qismini siqib chiqarish yutadi."
},
{
"t": 14,
"q": "Mamlakatda real YaIM 1200 dan 1260 mlrd so‘mga oshdi, aholi soni esa 50 mln dan 50,75 mln kishiga ko‘paydi. Darslikdagi taqribiy formula bo‘yicha aholi jon boshiga real YaIM o‘sish sur’ati qancha?",
"o": [
"taxminan 6,5%",
"taxminan 3,5%",
"5,0%",
"taxminan 1,5%"
],
"c": 1,
"w": "g_Y = 60/1200 = 5%; g_N = 0,75/50 = 1,5%; g_y ≈ g_Y – g_N = 3,5%. 6,5% – ayirish o‘rniga qo‘shilgan xato."
},
{
"t": 14,
"q": "Mamlakatda real YaIM yiliga 7%, aholi 2% ga o‘sadi. «70 qoidasi»ga ko‘ra aholi jon boshiga real daromad taxminan necha yilda to‘rt baravar oshadi?",
"o": [
"14 yilda",
"28 yilda",
"20 yilda",
"35 yilda"
],
"c": 1,
"w": "Jon boshiga o‘sish ≈ 5%; ikki baravar bo‘lish 70/5 = 14 yil, to‘rt baravar – ikki marta ikki baravar, ya’ni 28 yil. 20 yil – umumiy YaIM (7%) bo‘yicha hisoblangan."
},
{
"t": 14,
"q": "Aholi jon boshiga daromad 8000 dollar. U yiliga 4% dan o‘sib borsa, 25 yildan keyin qancha bo‘ladi (murakkab o‘sish)?",
"o": [
"16 000 dollar",
"taxminan 21 327 dollar",
"taxminan 17 529 dollar",
"24 000 dollar"
],
"c": 1,
"w": "8000 × 1,04^25 ≈ 8000 × 2,666 = 21 327. 16 000 – oddiy (murakkablashtirilmagan) o‘sish: 8000 × (1 + 0,04×25); 17 529 esa 20 yillik natija."
},
{
"t": 14,
"q": "Real YaIM 5%, kapital zaxirasi 6%, band aholi 1% ga o‘sdi. Kapitalning daromaddagi ulushi α = 0,4. Solou qoldig‘i (UOU o‘sishi) qancha?",
"o": [
"1,0 foiz punkt",
"2,6 foiz punkt",
"–2,0 foiz punkt",
"2,0 foiz punkt"
],
"c": 3,
"w": "α·ΔK/K = 0,4×6 = 2,4; (1 – α)·ΔL/L = 0,6×1 = 0,6; UOU = 5 – 2,4 – 0,6 = 2,0. 1,0 – ulushlar almashtirib yuborilgan (0,4×1 + 0,6×6 = 4,0)."
},
{
"t": 14,
"q": "Real YaIM 6%, kapital 8%, mehnat 1,5% ga o‘sdi; α = 0,35. O‘sishning qancha qismi umumiy omil unumdorligi (UOU) hisobiga to‘g‘ri keladi?",
"o": [
"taxminan 47%",
"taxminan 37%",
"taxminan 16%",
"taxminan 63%"
],
"c": 1,
"w": "Kapital: 0,35×8 = 2,8; mehnat: 0,65×1,5 = 0,975; UOU = 6 – 2,8 – 0,975 = 2,225 p.p.; ulushi 2,225/6 ≈ 37%. 47% – kapital hissasi, 16% – mehnat hissasi."
},
{
"t": 14,
"q": "Domar tipidagi rejalashtirishda maqsadli o‘sish 6%, kapital sig‘imi v = 4, ichki jamg‘arma YaIMning 15% i. Zarur investitsiyalar o‘sish × v formulasi bo‘yicha aniqlanadi. «Moliyalashtirish uzilishi» YaIMning necha foizini tashkil qiladi?",
"o": [
"24%",
"1,5%",
"9%",
"15%"
],
"c": 2,
"w": "Zarur investitsiyalar = 0,06 × 4 = 24% YaIM; ichki jamg‘arma 15%; uzilish = 24 – 15 = 9%. 1,5% – 6% ni 4 ga bo‘lishdan kelgan xato natija."
},
{
"t": 14,
"q": "Domar modelida s = 0,25, σ = 0,2, joriy investitsiya I = 300 va u 18 ga oshirildi. Talab va taklif tomonidan daromad o‘sishi qanday va oqibat nima?",
"o": [
"ΔY_d = 72 > ΔY_s = 60 – talab quvvatlardan oshadi, inflyatsion bosim",
"ΔY_d = 72 > ΔY_s = 60 – quvvatlar ortiqcha, ishsizlik oshadi",
"ΔY_d = 60 > ΔY_s = 72 – talab yetishmaydi, ishsizlik oshadi",
"ΔY_d = ΔY_s = 60 – to‘liq bandlikda muvozanat"
],
"c": 0,
"w": "ΔY_d = ΔI/s = 18/0,25 = 72; ΔY_s = σI = 0,2×300 = 60. Talab taklifdan katta – inflyatsion bosim. Muvozanat uchun ΔI/I = σs = 5%, haqiqiy esa 6%."
},
{
"t": 14,
"q": "Xarrod modelida v_r = 3, ishchi kuchi 1,5% va mehnat unumdorligi 2,5% ga o‘smoqda. To‘liq bandlik bilan barqaror o‘sish (G_w = G_n) uchun jamg‘arish normasi qancha bo‘lishi kerak?",
"o": [
"12%",
"8%",
"4%",
"1,3%"
],
"c": 0,
"w": "G_n = 1,5 + 2,5 = 4%. G_w = s/v_r = G_n ⇒ s = 0,04 × 3 = 0,12 = 12%. 1,3% – 4% ni 3 ga bo‘lishdan kelgan xato natija."
},
{
"t": 14,
"q": "Xarrod modelida s = 0,2, haqiqiy kapital koeffitsiyenti C = 2,5, tadbirkorlar zarur deb hisoblaydigan kapital koeffitsiyenti v_r = 4. Qaysi xulosa to‘g‘ri?",
"o": [
"G = 8% > G_w = 5%; ortiqcha quvvatlar paydo bo‘ladi, investitsiyalar qisqaradi",
"G = 8% > G_w = 5%; kapital yetishmaydi, investitsiyalar oshadi va G yana ortadi",
"G = 5% < G_w = 8%; ortiqcha quvvatlar paydo bo‘ladi, G pasayadi",
"G = G_w = 8%; iqtisodiyot barqaror yo‘lda"
],
"c": 1,
"w": "G = s/C = 0,2/2,5 = 8%; G_w = s/v_r = 0,2/4 = 5%. C < v_r – quvvatlar yetishmaydi, tadbirkorlar investitsiyani oshiradi va talab yanada tez o‘sadi («pichoq tig‘i»)."
},
{
"t": 14,
"q": "Xarrod modelida jamg‘arish normasi 27%, v_r = 4,5, ishchi kuchi yiliga 1,8% ga o‘sadi. To‘liq bandlikda barqaror o‘sish bo‘lishi uchun mehnat unumdorligi (λ) qanday sur’atda o‘sishi kerak?",
"o": [
"6,0%",
"7,8%",
"4,2%",
"1,8%"
],
"c": 2,
"w": "G_w = 0,27/4,5 = 6%. G_w = G_n = n + λ ⇒ λ = 6 – 1,8 = 4,2%. 7,8% – n va G_w qo‘shib yuborilgan."
},
{
"t": 14,
"q": "Investitsiyalar YaIMning 30% ini tashkil etadi, kapital sig‘imi (ICOR) 5, aholi yiliga 1,5% ga o‘sadi. Domar mantiqiga ko‘ra aholi jon boshiga YaIM taxminan qanday sur’atda o‘sadi?",
"o": [
"6,0%",
"taxminan 1,5%",
"taxminan 7,5%",
"taxminan 4,5%"
],
"c": 3,
"w": "Domar: g = s/v = 0,30/5 = 6%; jon boshiga g_y ≈ 6 – 1,5 = 4,5%. 6% – aholi o‘sishi hisobga olinmagan, 7,5% – aholi o‘sishi qo‘shilgan xato."
},
{
"t": 14,
"q": "A mamlakat yiliga 3%, B mamlakat yiliga 5% o‘sadi, boshlang‘ich daromadlar teng. 40 yildan keyin B ning daromadi A nikidan taxminan necha baravar yuqori bo‘ladi?",
"o": [
"taxminan 2,2 baravar",
"taxminan 1,8 baravar",
"taxminan 1,02 baravar",
"taxminan 3,3 baravar"
],
"c": 0,
"w": "(1,05/1,03)^40 ≈ 2,16. 1,8 – oddiy farq (2% × 40 = 80%) bo‘yicha hisob; 3,3 esa 1,03^40 ning o‘zi."
},
{
"t": 14,
"q": "Domar modelida investitsiya hajmi I o‘zgarmay qoladi (ΔI = 0, s va σ musbat). Qanday natija kuzatiladi?",
"o": [
"Talab ham, quvvatlar ham teng o‘sadi, to‘liq bandlik saqlanib qoladi",
"Talab σI ga o‘sadi, quvvatlar o‘smaydi, shuning uchun inflyatsion bosim yuzaga keladi",
"Na talab, na quvvatlar o‘zgaradi, chunki I o‘zgarmagan, demak iqtisodiyot muvozanatda",
"ΔY_d = 0, ΔY_s = σI > 0 – ortiqcha quvvatlar"
],
"c": 3,
"w": "Talab ΔY_d = ΔI/s faqat investitsiyalar o‘sishiga bog‘liq, taklif ΔY_s = σI esa darajasiga bog‘liq. ΔI = 0 da quvvatlar o‘sadi, talab o‘smaydi."
},
{
"t": 14,
"q": "Qaysi hodisa darslik ma’nosidagi iqtisodiy o‘sishni (ICHE ning o‘zgarishi) ifodalaydi, tsiklik tiklanishni emas?",
"o": [
"Yangi texnologiya tufayli ICHE ning tashqariga siljishi",
"Ishsizlik kamayib, iqtisodiyotning ICHE ichidagi nuqtadan egri chiziqqa o‘tishi",
"Retsessiyadan keyin ishlab chiqarishning potensial darajaga qaytishi",
"Bo‘sh quvvatlardan to‘liq foydalanishga o‘tish"
],
"c": 0,
"w": "ICHE ichidagi nuqtadan egri chiziqqa o‘tish – tsiklik tiklanish. Haqiqiy o‘sish potensial darajaning o‘zi oshganda, ya’ni ICHE siljiganda ro‘y beradi."
},
{
"t": 14,
"q": "Quyidagilardan qaysi biri intensiv o‘sishga EMAS, ekstensiv o‘sishga misol bo‘ladi?",
"o": [
"Ishchilar malakasining oshishi",
"Resurslarni samaraliroq tarmoqlarga qayta taqsimlash",
"Xuddi shunday texnologiyali yangi zavodlar qurish",
"Ishlab chiqarishni tashkil etish va boshqarishning takomillashuvi"
],
"c": 2,
"w": "Ekstensiv o‘sish samaradorlik o‘zgarmagan holda ko‘proq resurs jalb qilish hisobiga bo‘ladi. Boshqa variantlar resurslardan foydalanish samaradorligini oshiradi."
},
{
"t": 14,
"q": "Quyidagilardan qaysi biri darslikda Sobiq Ittifoq ekstensiv o‘sishi to‘xtashining sabablari sifatida KELTIRILMAGAN?",
"o": [
"Qishloq aholisini shaharga ko‘chirish imkoniyatlarining tugashi",
"Kapitalning chegaraviy samaradorligining pasayishi",
"Texnologik yangilanishning sustligi",
"Xorijiy investitsiyalarning to‘liq to‘xtashi"
],
"c": 3,
"w": "Darslik sabablar sifatida ko‘chirish imkoniyatlarining tugashi, kapital chegaraviy samaradorligining pasayishi va sust texnologik yangilanishni keltiradi."
},
{
"t": 14,
"q": "Quyidagi o‘zgarishlardan qaysi biri (qolgan omillar o‘zgarmaganda) mehnat unumdorligi Y/L ni oshirmaydi?",
"o": [
"Har bir ishchiga to‘g‘ri keladigan kapitalning (K/L) oshishi, ya’ni kapital bilan qurollanish",
"Inson kapitalining, ya’ni ishchilar bilim va ko‘nikmalarining oshishi",
"L va K ning teng sur’atda oshishi (K/L o‘zgarmaydi)",
"Mulk huquqlari himoyasi, qonun ustuvorligi va institutlarning yaxshilanishi"
],
"c": 2,
"w": "Y/L ni K/L, inson kapitali, texnologiya, institutlar va boshqaruv belgilaydi. K va L bir xil nisbatda oshsa, har bir ishchiga kapital o‘zgarmaydi – unumdorlik ham o‘zgarmaydi."
},
{
"t": 14,
"q": "Quyidagi xususiyatlardan qaysi biri Xarrod modelini Domar modelidan ajratib turadi?",
"o": [
"Akselerator prinsipi (I = vΔY) va haqiqiy, kafolatlangan, tabiiy sur’atlarni farqlash",
"Investitsiyalarning ikki tomonlama (talab va taklif) roli",
"Jamg‘arish normasi va kapital unumdorligining ko‘paytmasi sifatida o‘sish sur’ati",
"Qat’iy texnologik koeffitsiyentlarga asoslanish"
],
"c": 0,
"w": "Domarda o‘sish σs, investitsiyalarning ikki tomonlama roli markaziy; Xarrodda esa akselerator va uch xil sur’at ajratiladi. Qat’iy koeffitsiyentlar ikkala modelga xos."
},
{
"t": 14,
"q": "Xarrod modelida haqiqiy sur’at kafolatlanganidan past (G < G_w) bo‘lib qoldi. Voqealar zanjiri qanday kechadi?",
"o": [
"C < v_r, quvvatlar yetishmaydi → investitsiyalar oshadi → G yana pasayadi",
"C > v_r, ortiqcha quvvatlar → investitsiyalar qisqaradi → talab kamayadi → G yanada pasayadi",
"C > v_r, ortiqcha quvvatlar → investitsiyalar oshadi → G kafolatlangan sur’atga qaytadi",
"C = v_r → tadbirkorlar qarorni o‘zgartirmaydi → G = G_w tiklanadi"
],
"c": 1,
"w": "G < G_w ⇒ haqiqiy kapital koeffitsiyenti zarurdan katta (C > v_r), ortiqcha quvvatlar paydo bo‘ladi, tadbirkorlar investitsiyani qisqartiradi va depressiya kuchayadi."
},
{
"t": 14,
"q": "Nima uchun Xarrod modelida G = G_w = G_n tengligi («oltin asr») o‘z-o‘zidan ta’minlanmaydi?",
"o": [
"Chunki s, v, n va λ bir-biridan mustaqil ekzogen belgilanadi va moslashtiruvchi mexanizm yo‘q",
"Chunki foiz stavkasi va narxlar bu sur’atlarni avtomatik tenglashtirishga ulgurmaydi",
"Chunki kapital va mehnat o‘zaro almashtirilib, tenglik buziladi",
"Chunki G_n ni faqat davlat belgilaydi, G_w ni esa xususiy sektor belgilaydi"
],
"c": 0,
"w": "Modelda jamg‘arish normasi, kapital koeffitsiyenti, ishchi kuchi o‘sishi va texnik taraqqiyot mustaqil berilgan; ularning tengligi tasodifga bog‘liq. Narx va foiz moslashuvi modelda yo‘q."
},
{
"t": 14,
"q": "Quyidagilardan qaysi biri neokeynscha o‘sish modellariga xos xususiyat EMAS?",
"o": [
"Qat’iy texnologik koeffitsiyentlar (Leontyev tipidagi funksiya)",
"Muvozanatli o‘sish yo‘lining beqarorligi",
"Davlat aralashuvining zarurligi",
"Narxlar va foiz stavkalari kapital–mehnat nisbatini moslashtirishi"
],
"c": 3,
"w": "Neokeynscha modellarda kapital va mehnat almashtirilmaydi, narx va foiz stavkalarining moslashtiruvchi roli e’tiborga olinmagan – aynan shu keyinchalik tanqid qilingan."
},
{
"t": 14,
"q": "Solou neoklassik modelni yaratishiga neokeynscha modellarning qaysi kamchiliklari turtki bo‘lgan?",
"o": [
"Investitsiyalarning ikki tomonlama rolini e’tiborga olmaganligi",
"Jamg‘armaning o‘sishdagi rolini inkor etganligi",
"Almashtirilmaslik va «pichoq tig‘i» beqarorligi",
"Texnik taraqqiyotning haddan tashqari endogen qaralganligi"
],
"c": 2,
"w": "Darslik bo‘yicha qat’iy koeffitsiyentlar, beqarorlik, ekzogen texnik taraqqiyot va narxlar moslashuvchi rolining yo‘qligi tanqid qilingan; Solou moslashuvchan texnologiyali model yaratdi."
},
{
"t": 14,
"q": "Solou qoldig‘i (UOU o‘sishi) haqida qaysi gap to‘g‘ri?",
"o": [
"U kapital zaxirasining o‘sish sur’atiga teng bo‘lib, mehnat hissasi bilan qo‘shiladi",
"U faqat mehnat unumdorligining o‘sishini o‘lchaydi, texnologik o‘zgarishni emas",
"Kapital va mehnat bilan izohlanmagan qoldiq; texnologiya va institutlarni aks ettiradi",
"U o‘sish sur’atidan doim kichik bo‘ladi va hech qachon nolga teng bo‘lmaydi"
],
"c": 2,
"w": "ΔA/A = ΔY/Y – α·ΔK/K – (1 – α)·ΔL/L: omillar o‘sishi bilan tushuntirilmagan qoldiq. U texnologiya, institutlar, boshqaruv va o‘lchash xatolarini o‘z ichiga oladi."
},
{
"t": 14,
"q": "Rivojlanayotgan mamlakat «moliyalashtirish uzilishi»ni xorijiy yordam bilan to‘ldirdi, investitsiyalar ko‘paydi, ammo o‘sish tezlashmadi. Isterli (1999) tadqiqotlari bilan mos tushuntirish qaysi?",
"o": [
"Domar formulasi aynan shunday natijani bashorat qiladi, chunki yordam jamg‘arish normasini oshiradi",
"Investitsiya–o‘sish mexanik bog‘liqligi kam tasdiqlanadi; o‘sishni samaradorlik, institutlar belgilaydi",
"Xorijiy yordam doim jamg‘arish normasini pasaytiradi, shuning uchun tabiiy sur’at G_n o‘zgarmaydi",
"Xarrod modelidagi G_n kafolatlangan sur’atdan doim past bo‘lgani uchun o‘sish tezlasha olmaydi"
],
"c": 1,
"w": "Isterli ko‘rsatishicha, «zarur investitsiya = o‘sish × kapital sig‘imi» mexanik bog‘liqligi amalda kamdan-kam tasdiqlangan – o‘sishni samaradorlik va institutlar belgilaydi."
},
{
"t": 14,
"q": "Solou modelida y = k^0,5, jamg‘arish normasi s = 0,3, aholi o‘sishi n = 0,02, kapitalning yeyilishi δ = 0,08. Barqaror holatda jon boshiga iste’mol qancha?",
"o": [
"2,1",
"0,9",
"3,0",
"2,7"
],
"c": 0,
"w": "k* = (s/(n+δ))^2 = 3^2 = 9; y* = √9 = 3; c* = (1 – s)·y* = 0,7 × 3 = 2,1. 0,9 — jamg‘arma (investitsiya), 3,0 — mahsulot."
},
{
"t": 14,
"q": "Iqtisodiyotda real YaIM 5% ga, kapital 4% ga, mehnat 1% ga o‘sdi. Kapitalning ulushi α = 0,4. Solou qoldig‘i (umumiy omillar unumdorligi o‘sishi) qancha?",
"o": [
"2,2%",
"2,4%",
"2,8%",
"0,0%"
],
"c": 2,
"w": "g_A = g_Y – α·g_K – (1 – α)·g_L = 5 – 0,4×4 – 0,6×1 = 2,8%. Ulushlarni almashtirish 2,2% beradi."
}
];
