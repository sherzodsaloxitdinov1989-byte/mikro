// AVTOMATIK YARATILGAN (scripts/build-exam-mikro.py). Mikroiqtisodiyot 1-oraliq nazorati savollar bazasi: 400 ta. Faqat serverda — javob kalitlari brauzerga yuborilmaydi.
export const BANK = [
{
"t": 1,
"q": "Iqtisodiyotning asosiy muammosi — kamyoblik. Quyidagi fikrlardan qaysi biri kamyoblikning mohiyatini to‘g‘ri ifodalaydi?",
"o": [
"Ehtiyojlar cheksiz, ularni qondiruvchi resurslar esa cheklangan va muqobil maqsadlarga ishlatilishi mumkin",
"Tovarlar narxi yuqori bo‘lgan holatdagina ehtiyojlarni qondirish uchun resurslar yetishmay qoladi",
"Resurslar cheklangan bo‘lgani uchun faqat kambag‘al mamlakatlardagina tovar tanqisligi vujudga keladi",
"Kamyoblik faqat tabiiy resurslarning tugab borishi natijasida vujudga keladigan vaqtinchalik holat"
],
"c": 0,
"w": "Kamyoblik — resurslarning cheklanganligi va ularning muqobil ishlatilish imkoniyati; u har qanday jamiyatda mavjud.",
"k": "th"
},
{
"t": 1,
"q": "Muqobil (alternativ) xarajat deb nimaga aytiladi?",
"o": [
"Tanlangan variantni amalga oshirish uchun to‘langan barcha pul xarajatlarning yig‘indisiga",
"Voz kechilgan barcha muqobil variantlar qiymatlarining arifmetik yig‘indisiga",
"Tanlangan variant uchun voz kechilgan eng yaxshi muqobil variantning qiymatiga",
"Tovarni ishlab chiqarishga sarflangan resurslarning bozor narxlaridagi jami qiymatiga"
],
"c": 2,
"w": "Muqobil xarajat — qo‘ldan boy berilgan ENG YAXSHI muqobil variant qiymati, ularning yig‘indisi emas.",
"k": "th"
},
{
"t": 1,
"q": "Mankyuning «odamlar o‘z rag‘batlariga javob beradi» tamoyiliga ko‘ra, benzin narxi oshganda quyidagilardan qaysi biri kutiladi?",
"o": [
"Iste’molchilar tejamkor avtomobillarga talabni oshiradi va yaqin masofaga yurishni kamaytiradi",
"Barcha iste’molchilar jamoat transportiga o‘tadi va avtomobil bozori butunlay yo‘qoladi",
"Iste’molchilar benzin sarfini o‘zgartirmaydi, chunki ularning ehtiyoji narxga bog‘liq bo‘lmaydi",
"Benzinga talab hajmi o‘zgarmaydi, ammo sotuvchilar taklifni narx oshishi hisobiga ko‘paytiradi"
],
"c": 0,
"w": "Narx — rag‘bat signali: u o‘zgarganda iqtisodiy subyektlar xatti-harakatini moslashtiradi.",
"k": "th"
},
{
"t": 1,
"q": "Marginal (chekli) fikrlash nimani anglatadi?",
"o": [
"Qaror qabul qilishda o‘tgan davrda sarflangan xarajatlarni to‘liq hisobga olishni",
"Qarorni eng kam xarajat talab qiladigan variant foydasiga qarab qabul qilishni",
"Qaror qabul qilishda faqat umumiy foyda va umumiy xarajat o‘rtasidagi farqni baholashni",
"Qaror qabul qilishda kichik qo‘shimcha o‘zgarishning foydasi va xarajatini solishtirishni"
],
"c": 3,
"w": "Rasional subyekt qo‘shimcha (marginal) foyda marginal xarajatdan katta bo‘lsagina harakatni davom ettiradi.",
"k": "th"
},
{
"t": 1,
"q": "Qaysi holatda rasional iqtisodiy subyekt faoliyat hajmini oshiradi?",
"o": [
"Faoliyatning umumiy xarajati umumiy foydasidan kam bo‘lib qolayotgan har qanday holatda",
"Oldingi birliklar bo‘yicha olingan foyda yetarlicha katta bo‘lganda",
"Qo‘shimcha birlikning o‘rtacha xarajati o‘rtacha foydasiga teng bo‘lganda",
"Qo‘shimcha birlikning marginal foydasi uning marginal xarajatidan katta bo‘lganda"
],
"c": 3,
"w": "MB > MC bo‘lsa, qo‘shimcha birlik sof foyda keltiradi.",
"k": "th"
},
{
"t": 1,
"q": "«Cho‘kkan xarajat» (sunk cost) haqidagi qaysi tasdiq to‘g‘ri?",
"o": [
"U qaytarib olish mumkin bo‘lgan xarajat bo‘lib, kelgusi qarorlarda hisobga olinishi shart",
"U kelgusida olinishi kutilayotgan foydadan ayriladigan muqobil xarajat qismi hisoblanadi",
"U faqat ishlab chiqarish jarayonidagi o‘zgaruvchan xarajatlarni ifodalaydigan tushuncha",
"U qaytarib bo‘lmaydigan xarajat, kelgusi qarorlarda hisobga olinmasligi kerak"
],
"c": 3,
"w": "Cho‘kkan xarajat qaytmaydi, shuning uchun u marginal qarorga ta’sir qilmasligi kerak.",
"k": "th"
},
{
"t": 1,
"q": "Ishlab chiqarish imkoniyatlari chegarasi (IICH) bo‘ylab harakat nimani ko‘rsatadi?",
"o": [
"Bir tovarni ko‘paytirish uchun ikkinchisidan voz kechish zarurligini, ya’ni muqobil xarajatni",
"Mamlakat resurslarining ishlab chiqarishda mutlaqo ishlatilmayotganini ko‘rsatadi",
"Texnologiya o‘zgarganda ishlab chiqarish imkoniyatlari yangi darajaga ko‘tarilishini ko‘rsatadi",
"Ikkala tovarni bir vaqtda ko‘paytirish mumkinligini, chunki resurslar to‘liq ishlatilmagan bo‘ladi"
],
"c": 0,
"w": "IICH ustida resurslar to‘liq ishlatilgan; harakat muqobil xarajatni ko‘rsatadi.",
"k": "th"
},
{
"t": 1,
"q": "IICH ichidagi nuqta (chegaradan pastda) qanday holatni bildiradi?",
"o": [
"Hozirgi resurs va texnologiya bilan erishib bo‘lmaydigan imkoniyat darajasini",
"Muqobil xarajat nolga teng bo‘lgan muvozanat holatini",
"Resurslardan maksimal darajada va to‘liq samarali foydalanilayotgan holatni",
"Resurslardan to‘liq foydalanilmayotgan yoki samarasiz ishlatilayotgan holatni"
],
"c": 3,
"w": "Chegaradan pastdagi nuqta — ishsizlik yoki samarasizlik; chegaradan yuqori nuqta esa erishib bo‘lmaydi.",
"k": "th"
},
{
"t": 1,
"q": "IICH ning tashqariga siljishiga qaysi omil sabab bo‘la oladi?",
"o": [
"Iste’molchilar didining o‘zgarishi tufayli bir tovarga talabning ortishi",
"Mamlakatda ishsizlik darajasining vaqtincha pasayishi va resurslardan to‘liq foydalanish",
"Ishlab chiqarish texnologiyasining takomillashuvi yoki resurslar miqdorining ko‘payishi",
"Bir tovar ishlab chiqarishni kamaytirib, ikkinchisini ko‘paytirish haqidagi qaror"
],
"c": 2,
"w": "Chegara siljishi iqtisodiy o‘sishni bildiradi: resurs yoki texnologiya o‘zgaradi.",
"k": "th"
},
{
"t": 1,
"q": "Qavariq (tashqariga egilgan) IICH nimani anglatadi?",
"o": [
"Ko‘proq tovar ishlab chiqarilgan sari uning muqobil xarajati ortib borishini",
"Resurslarning barchasi har ikkala tovarni ishlab chiqarishga teng darajada yaroqliligini",
"Ishlab chiqarish hajmi ortishi bilan muqobil xarajat kamayib borishini",
"Muqobil xarajat ishlab chiqarish hajmidan qat’i nazar o‘zgarmay qolishini"
],
"c": 0,
"w": "Resurslar ixtisoslashgan bo‘lgani uchun muqobil xarajat o‘sib boradi (ortib boruvchi muqobil xarajat qonuni).",
"k": "th"
},
{
"t": 1,
"q": "Mutlaq ustunlik va qiyosiy ustunlik o‘rtasidagi asosiy farq nimada?",
"o": [
"Mutlaq ustunlik faqat xalqaro savdoda, qiyosiy ustunlik esa faqat ichki bozorda qo‘llaniladi",
"Mutlaq ustunlik — kam resurs sarflab ishlab chiqarish, qiyosiy ustunlik — past muqobil xarajat bilan ishlab chiqarish",
"Mutlaq ustunlikka ega tomon doim ikkala tovarni ham o‘zi ishlab chiqarishi samarali bo‘ladi",
"Mutlaq ustunlik — past muqobil xarajat, qiyosiy ustunlik esa kam resurs sarflab ishlab chiqarish qobiliyati"
],
"c": 1,
"w": "Savdo foydasi qiyosiy ustunlikka (muqobil xarajat) asoslanadi, mutlaq ustunlikka emas.",
"k": "th"
},
{
"t": 1,
"q": "Ikkala tovarni ham boshqasiga qaraganda tezroq ishlab chiqaradigan ishlab chiqaruvchi uchun savdo...",
"o": [
"Faqat ikkinchi tomon ham mutlaq ustunlikka ega bo‘lgandagina foydali bo‘ladi",
"Baribir foydali bo‘ladi, chunki u qiyosiy ustunlikka ega tovarga ixtisoslashadi",
"Faqat narxlar davlat tomonidan tartibga solingan taqdirdagina foydali bo‘ladi",
"Foydasiz bo‘ladi, chunki u hamma tovarni o‘zi ishlab chiqarib ko‘proq yutadi"
],
"c": 1,
"w": "Ikki tomonda muqobil xarajatlar farq qilsa, ixtisoslashuv va savdo ikkala tomonga ham foyda beradi.",
"k": "th"
},
{
"t": 1,
"q": "Savdoning umumiy foydasi nimadan kelib chiqadi?",
"o": [
"Tomonlardan birining ixtisoslashmasdan, o‘z ehtiyojini to‘liq o‘zi ishlab chiqarishidan",
"Barcha tomonlar bir xil tovarni ishlab chiqarib, bozordagi narxni pasaytirishidan",
"Har bir tomon muqobil xarajati past tovarga ixtisoslashib, umumiy hajm ortishidan",
"Bir tomon boshqa tomon hisobiga ko‘proq resurs to‘plab, uni yutqazishga majbur qilishidan"
],
"c": 2,
"w": "Savdo «nol yig‘indili o‘yin» emas: ixtisoslashuv umumiy hajmni oshiradi.",
"k": "th"
},
{
"t": 1,
"q": "Mikroiqtisodiyot qaysi masalani o‘rganadi?",
"o": [
"Mamlakat yalpi ichki mahsuloti tarkibi va xalqaro iqtisodiy ko‘rsatkichlarni",
"Uy xo‘jaliklari va firmalarning qarorlarini hamda ularning bozorlardagi o‘zaro ta’sirini",
"Davlat byudjeti, pul-kredit siyosati va to‘lov balansi bilan bog‘liq masalalarni",
"Butun iqtisodiyot miqyosidagi inflyatsiya, ishsizlik va iqtisodiy o‘sish sur’atlarini"
],
"c": 1,
"w": "Mikro — alohida subyektlar va bozorlar; makro — butun iqtisodiyot ko‘rsatkichlari.",
"k": "th"
},
{
"t": 1,
"q": "Quyidagi gaplardan qaysi biri normativ (me’yoriy) iqtisodiy fikrga misol bo‘ladi?",
"o": [
"Soliq stavkasi oshirilsa, soliq to‘lovchilarning mehnat taklifi kamayishi mumkin",
"Eng kam ish haqi oshirilishi kerak, chunki bu kam ta’minlanganlarga yordam beradi",
"Kechagi kunga nisbatan bugun benzinning o‘rtacha bozor narxi 3 foizga oshib ketdi",
"Eng kam ish haqi oshirilganda yoshlar o‘rtasida ishsizlik darajasi ortishi mumkin"
],
"c": 1,
"w": "Normativ fikr «qanday bo‘lishi kerak» degan baho beradi; pozitiv fikr faktni tasvirlaydi va tekshirib bo‘ladi.",
"k": "th"
},
{
"t": 1,
"q": "Pozitiv iqtisodiy tahlil haqida qaysi tasdiq to‘g‘ri?",
"o": [
"U «nima bo‘lmoqda» va «nima bo‘ladi» savollariga javob beradi, faktlar bilan tekshiriladi",
"U natijalarni tekshirib bo‘lmaydigan, sub’ektiv fikrlar majmuasidan iborat bo‘ladi",
"U «nima bo‘lishi kerak» savoliga javob beradi va qadriyatlarga asoslangan baho beradi",
"U faqat davlat siyosatining adolatli yoki adolatsizligini baholash bilan shug‘ullanadi"
],
"c": 0,
"w": "Pozitiv tahlil — ob’ektiv, tekshiriladigan; normativ — baholovchi.",
"k": "th"
},
{
"t": 1,
"q": "Iqtisodiy model qanday vazifani bajaradi?",
"o": [
"Kuzatilgan faktlarni emas, faqat nazariy xulosalarni isbotlash uchun tuziladi",
"Murakkab voqelikni soddalashtirib, muhim bog‘liqliklarni ajratib ko‘rsatishga yordam beradi",
"Real iqtisodiyotning barcha tafsilotlarini to‘liq va aniq aks ettirishga harakat qiladi",
"Faqat matematik formulalar bilan ifodalangan taqdirdagina foydali hisoblanadi"
],
"c": 1,
"w": "Model — soddalashtirish; uning qimmati kerakli bog‘liqliklarni ko‘rsata olishida.",
"k": "th"
},
{
"t": 1,
"q": "Boshqa sharoitlar o‘zgarmaganda (ceteris paribus) farazi nima uchun kerak?",
"o": [
"Bitta omilning ta’sirini boshqa omillardan ajratib o‘rganish uchun",
"Iqtisodiy jarayonlar vaqt o‘tishi bilan doimo bir xil qolishini isbotlash uchun",
"Narx va miqdor o‘rtasidagi bog‘liqlik yo‘qligini ko‘rsatish uchun",
"Barcha omillar bir vaqtda o‘zgarishining umumiy natijasini hisoblash uchun"
],
"c": 0,
"w": "Ceteris paribus — bir o‘zgaruvchining ta’sirini sof holda ajratish usuli.",
"k": "th"
},
{
"t": 1,
"q": "Doiraviy oqim (circular-flow) modelida uy xo‘jaliklari resurs bozorida qanday ishtirok etadi?",
"o": [
"Resurslarni xarid qiluvchi sifatida chiqib, ishlab chiqarish xarajatlarini to‘laydi",
"Resurslarni (mehnat, kapital, yer) sotuvchi sifatida chiqadi va buning evaziga daromad oladi",
"Faqat davlatga soliq to‘lovchi sifatida ishtirok etadi va bozorga bevosita kirmaydi",
"Tayyor tovar va xizmatlarni sotuvchi sifatida chiqib, tushum oladi"
],
"c": 1,
"w": "Uy xo‘jaliklari — resurs sotuvchisi va tayyor tovar xaridori; firmalar esa teskari rolda.",
"k": "th"
},
{
"t": 1,
"q": "Bozor mexanizmida «ko‘rinmas qo‘l» g‘oyasi nimani anglatadi?",
"o": [
"Bozor ishtirokchilari o‘zaro kelishib, narxni sun’iy ravishda yuqori darajada ushlab turishi",
"Shaxsiy manfaatni ko‘zlagan subyektlar narx signallari orqali beixtiyor umumiy farovonlikka xizmat qiladi",
"Iqtisodiyotdagi har qanday xatolik davlat tomonidan o‘z-o‘zidan avtomatik tuzatilib turishi",
"Davlat barcha narxlarni markazlashgan tartibda belgilab, resurslarni o‘zi taqsimlashi"
],
"c": 1,
"w": "Adam Smit: narxlar resurslarni samarali taqsimlovchi signal vazifasini bajaradi.",
"k": "th"
},
{
"t": 1,
"q": "Qachon davlat aralashuvi bozor samaradorligini oshirishi mumkin?",
"o": [
"Bozor erkin ishlab, hech qanday nuqson bo‘lmaganda ham narxlarni tartibga solish orqali",
"Barcha tomonlar to‘liq axborotga ega bo‘lib, raqobat mukammal bo‘lganda",
"Tashqi ta’sirlar yoki bozor hokimiyati kabi «bozor muvaffaqiyatsizligi» mavjud bo‘lganda",
"Iste’molchilar o‘z tanlovlaridan to‘liq mamnun bo‘lgan har qanday holatda"
],
"c": 2,
"w": "Bozor muvaffaqiyatsizligi (tashqi ta’sir, monopoliya) davlat aralashuvini asoslaydi.",
"k": "th"
},
{
"t": 1,
"q": "Quyidagilardan qaysi biri bozor muvaffaqiyatsizligining sababi emas?",
"o": [
"Ishlab chiqarish yoki iste’mol jarayonidagi tashqi ta’sirlarning mavjudligi",
"Axborotning bozor ishtirokchilari o‘rtasida notekis taqsimlanganligi",
"Mulk huquqining aniq belgilanganligi va uning ishonchli himoya qilinishi",
"Alohida firmaning narxga ta’sir qiladigan bozor hokimiyatiga egaligi"
],
"c": 2,
"w": "Aniq mulk huquqi bozor ishlashiga yordam beradi; boshqa uchtasi muvaffaqiyatsizlik sabablari.",
"k": "th"
},
{
"t": 1,
"q": "Samaradorlik va adolat o‘rtasidagi ziddiyat nimani bildiradi?",
"o": [
"Samarali bozor natijasi har doim adolatli taqsimotni ham o‘z-o‘zidan ta’minlab beradi",
"Daromadni qayta taqsimlash hamisha ham samaradorlikni, ham adolatni bir vaqtda oshirib boradi",
"Daromadni qayta taqsimlash adolatni oshirishi mumkin, lekin rag‘bat susayib umumiy hajm kamayishi mumkin",
"Adolat va samaradorlik mazmunan bir xil bo‘lgani uchun ular o‘rtasida ziddiyat vujudga kelmaydi"
],
"c": 2,
"w": "«Pirog»ni teng bo‘lish uning hajmini kamaytirishi mumkin — klassik trade-off.",
"k": "th"
},
{
"t": 1,
"q": "Quyidagi holatlardan qaysi biri «tashqi ta’sir» (eksternaliya) ga misol?",
"o": [
"Zavod chiqindisi atrofdagi aholi sog‘lig‘ini yomonlashtiradi, bu zarar narxda aks etmaydi",
"Bank omonat uchun mijozga oldindan kelishilgan foiz to‘lovini to‘lab turishi",
"Mijoz tovarni xarid qilganda sotuvchiga kelishilgan bozor narxida to‘lov to‘lashi",
"Firma yangi ishchilarni yollab, ularga bozor shartlariga mos ish haqini to‘lashi"
],
"c": 0,
"w": "Eksternaliya — bitim ishtirokchisi bo‘lmagan uchinchi tomonga ta’sir, narxda hisobga olinmaydi.",
"k": "th"
},
{
"t": 1,
"q": "Qaysi holat «bozor hokimiyati» ni bildiradi?",
"o": [
"Ko‘p sonli kichik firmalarning hech biri bozor narxiga ta’sir qila olmasligini",
"Bitta firma yoki kichik firmalar guruhi bozor narxiga sezilarli ta’sir ko‘rsata olishini",
"Iste’molchilar umumiy talab orqali narxni mutlaqo erkin belgilab bera olishini",
"Davlatning bozordagi barcha narxlarni to‘liq nazorat qilib turishini"
],
"c": 1,
"w": "Bozor hokimiyati — narxga ta’sir qila olish qobiliyati (monopoliya, oligopoliya).",
"k": "th"
},
{
"t": 1,
"q": "Resurslar (ishlab chiqarish omillari)ning to‘g‘ri tasnifini ko‘rsating.",
"o": [
"Iste’mol tovarlari, xizmatlar, kapital tovarlar va oraliq mahsulotlar",
"Pul, qimmatli qog‘ozlar, ko‘chmas mulk va valyuta zaxiralari",
"Mehnat, kapital, yer (tabiiy resurslar) va tadbirkorlik qobiliyati",
"Mehnat, ish haqi, foiz va renta kabi omil daromadlari"
],
"c": 2,
"w": "Omillar: mehnat, kapital, yer, tadbirkorlik. Ish haqi, foiz, renta, foyda — ularning daromadlari.",
"k": "th"
},
{
"t": 1,
"q": "Omil daromadlari (omillar uchun to‘lovlar)ning to‘g‘ri juftligi qaysi?",
"o": [
"Mehnat — foyda, kapital — renta, yer — foiz, tadbirkorlik qobiliyati — ish haqi",
"Mehnat — renta, kapital — ish haqi, yer — foyda, tadbirkorlik qobiliyati — foiz",
"Mehnat — ish haqi, kapital — foiz, yer — renta, tadbirkorlik qobiliyati — foyda",
"Mehnat — foiz, kapital — foyda, yer — ish haqi, tadbirkorlik qobiliyati — renta"
],
"c": 2,
"w": "Har bir omil o‘ziga mos daromad turini keltiradi.",
"k": "th"
},
{
"t": 1,
"q": "Iqtisodiy foyda va buxgalteriya foydasi o‘rtasidagi farq nimada?",
"o": [
"Buxgalteriya foydasi tushumdan yashirin xarajatlar ham ayirilgandan keyin hisoblanadi",
"Iqtisodiy foyda tushumdan aniq va yashirin (muqobil) xarajatlar ayirilgandan keyin hisoblanadi",
"Iqtisodiy foyda doim buxgalteriya foydasidan katta bo‘ladi",
"Iqtisodiy foyda tushumdan faqat soliqlar ayirilgandan keyin hisoblanadi"
],
"c": 1,
"w": "Iqtisodiy foyda = tushum − (aniq + yashirin xarajatlar); buxgalteriya foydasi = tushum − aniq xarajatlar.",
"k": "th"
},
{
"t": 1,
"q": "Quyidagilardan qaysi biri yashirin (pulsiz) xarajatga misol bo‘ladi?",
"o": [
"Olingan kredit uchun bankka muntazam to‘lanadigan foiz to‘lovlari va asosiy qarz",
"Xom ashyo xarid qilish uchun yetkazib beruvchiga o‘tkazilgan pul mablag‘lari summasi",
"Tadbirkorning xodimlarga to‘laydigan ish haqi va ijara uchun to‘laydigan pul to‘lovlari",
"O‘z biznesida ishlagan tadbirkorning boshqa joyda olishi mumkin bo‘lgan maoshdan voz kechishi"
],
"c": 3,
"w": "Yashirin xarajat — pul to‘lovi bo‘lmagan, lekin boy berilgan muqobil imkoniyat.",
"k": "th"
},
{
"t": 1,
"q": "Quyidagi omillardan qaysi biri qarorlar qabul qilishda «rag‘bat» ta’sirini kuchaytiradi?",
"o": [
"Qaror qabul qiluvchining tanlovi natijasiga hech qanday javobgarlikning yo‘qligi",
"Barcha ishtirokchilarga baravar ish haqining belgilab qo‘yilishi",
"Xatti-harakat natijasi bilan mukofot yoki jazo o‘rtasida aniq bog‘liqlik mavjudligi",
"Qaror natijalari haqidagi axborotning yashirib qo‘yilishi"
],
"c": 2,
"w": "Rag‘bat — xatti-harakatni yo‘naltiradigan foyda/xarajat; bog‘liqlik aniq bo‘lsa kuchli ta’sir qiladi.",
"k": "th"
},
{
"t": 1,
"q": "Mutlaq ustunlik tushunchasi nimani ifodalaydi?",
"o": [
"Ishlab chiqaruvchining tovarni boshqalarga qaraganda past muqobil xarajat bilan ishlab chiqarishini",
"Ishlab chiqaruvchining bir xil tovarni boshqalarga qaraganda kam resurs sarflab ishlab chiqarishini",
"Ishlab chiqaruvchining ishlab chiqarish hajmi bo‘yicha bozorda monopol bo‘lishini",
"Ishlab chiqaruvchining faqat bozorda eng yuqori narxda sotishini"
],
"c": 1,
"w": "Mutlaq ustunlik — unumdorlik ko‘rsatkichi (bir birlikka sarf).",
"k": "th"
},
{
"t": 1,
"q": "Davlat qaror qabul qilganda «samaradorlik» ko‘rsatkichi nimani anglatadi?",
"o": [
"Davlat byudjeti xarajatlarining har yili o‘sib borishini",
"Barcha ishlab chiqaruvchilarning bir xil foyda olishini",
"Jamiyat iqtisodiy foydani barcha a’zolar o‘rtasida teng taqsimlash xususiyatini",
"Jamiyat o‘z kamyob resurslaridan eng ko‘p foyda olish xususiyatini"
],
"c": 3,
"w": "Samaradorlik — «pirog» hajmi; adolat — uni qanday bo‘lishish.",
"k": "th"
},
{
"t": 1,
"q": "Uy xo‘jaligi firmaning tovarini sotib olganda doiraviy oqimda pul qaysi yo‘nalishda harakatlanadi?",
"o": [
"Firmadan uy xo‘jaligiga — resurslar bozori orqali pul ko‘rinishida",
"Uy xo‘jaligidan firmaga — tovar va xizmatlar bozori orqali",
"Firmadan firmaga — kapital bozori orqali, bevosita bitimlar bilan",
"Uy xo‘jaligidan davlatga — faqat soliq to‘lovi ko‘rinishida"
],
"c": 1,
"w": "Iste’mol xarajatlari uy xo‘jaligidan firmaga, tovar va xizmatlar esa teskari yo‘nalishda oqadi.",
"k": "th"
},
{
"t": 1,
"q": "Iqtisodiy tanlovda «bepul tushlik yo‘q» ifodasi nimani bildiradi?",
"o": [
"Tovar narxlari ishlab chiqarish xarajatlaridan doimo yuqori bo‘lishini va bo‘lishi kerakligini",
"Davlat hech qachon fuqarolarga bepul xizmat ko‘rsatmasligini va ko‘rsata olmasligini",
"Tovarlarning barchasi doimo pul to‘lab sotib olinishi shartligini va bepul tovar yo‘qligini",
"Har qanday tanlov biror narsadan voz kechishni, ya’ni muqobil xarajatni talab qilishini"
],
"c": 3,
"w": "Pulsiz ko‘ringan tanlovning ham muqobil xarajati (vaqt, imkoniyat) bor.",
"k": "th"
},
{
"t": 1,
"q": "Quyidagi sharoitda IICH chiziqli (to‘g‘ri chiziq) bo‘ladi:",
"o": [
"Texnologiya vaqt o‘tishi bilan tez yangilanib, ishlab chiqarish samaradorligi oshib turganda",
"Resurslar ixtisoslashgan bo‘lib, muqobil xarajat ishlab chiqarish hajmi bilan ortib borganda",
"Ishlab chiqarishda mehnat o‘rniga kapital ko‘proq ishlatilib, mehnat unumdorligi oshganda",
"Resurslar ikkala tovarga bir xil darajada yaroqli bo‘lib, muqobil xarajat o‘zgarmaganda"
],
"c": 3,
"w": "Doimiy muqobil xarajat ↔ to‘g‘ri chiziqli IICH.",
"k": "th"
},
{
"t": 1,
"q": "Mikroiqtisodiyotning «birinchi tamoyili»: «odamlar tanlov qilishga majbur» ning asosiy sababi nima?",
"o": [
"Narxlar doimiy o‘zgarib turgani sababli kelgusini rejalashtirishning mumkin bo‘lmay qolishi",
"Resurslarning kamyobligi tufayli bir maqsadga erishish boshqasidan voz kechishni talab qilishi",
"Davlat siyosati tomonidan iste’molchi tanlov erkinligining qonuniy ravishda cheklab qo‘yilishi",
"Barcha tovarlarning bir xil sifat va xususiyatga ega bo‘lishi sababli almashtirib bo‘lmasligi"
],
"c": 1,
"w": "Kamyoblik → tanlov → muqobil xarajat.",
"k": "th"
},
{
"t": 1,
"q": "Iqtisodchilar o‘rtasidagi kelishmovchiliklarning asosiy sabablaridan biri nima?",
"o": [
"Barcha iqtisodchilarning bir xil nazariyani rad etishi",
"Iqtisodiyotning ilmiy usuldan foydalanmasligi va faqat sub’ektiv fikrga tayanishi",
"Statistik ma’lumotlarning umuman mavjud emasligi",
"Ilmiy hukmlardagi farq va normativ qadriyatlarga oid fikrlar xilma-xilligi"
],
"c": 3,
"w": "Kelishmovchilik ham pozitiv (model tanlovi), ham normativ (qadriyatlar) farqdan kelib chiqadi.",
"k": "th"
},
{
"t": 1,
"q": "Qaysi tasdiq «mutlaq ustunlik»ka ega bo‘lmagan davlat uchun to‘g‘ri?",
"o": [
"U faqat xom ashyo yetkazib berishga mahkum bo‘lib, savdodan yutqazadi",
"U savdoda doim yutqazadi, chunki barcha tovarlar bo‘yicha zaif",
"U baribir qiyosiy ustunlikka ega bo‘lishi va xalqaro savdodan foyda ko‘rishi mumkin",
"U hech qanday tovarni samarali ishlab chiqara olmaydi va savdoda ishtirok eta olmaydi"
],
"c": 2,
"w": "Qiyosiy ustunlik har doim kamida bitta tovarda mavjud (muqobil xarajatlar farq qiladi).",
"k": "th"
},
{
"t": 1,
"q": "Resurslarning «to‘liq bandligi» IICH da qanday aks etadi?",
"o": [
"IICH chizig‘i muqobil xarajat nolga tengligini ko‘rsatadi va tovarlar o‘rtasida tanlov bo‘lmaydi",
"Iqtisodiyot chegaradan tashqarida bo‘lib, kutilgan natijalar to‘liq amalga oshib boradi",
"Iqtisodiyot chegaradan ancha pastda bo‘lib, ikkala tovarni ham bir vaqtda ko‘paytirish mumkin bo‘ladi",
"Iqtisodiyot chegara chizig‘ida bo‘ladi — yangi tovarni faqat boshqasidan voz kechib ko‘paytirish mumkin"
],
"c": 3,
"w": "Chegara ustidagi nuqta — samarali nuqta.",
"k": "th"
},
{
"t": 1,
"q": "Qaysi holda iqtisodiyot IICH dan tashqaridagi nuqtani tanlay olmaydi?",
"o": [
"Iste’molchilar shu nuqtani afzal ko‘rmaganda, garchi uni amalga oshirish imkoniyati mavjud bo‘lsa ham",
"Narxlar beqaror bo‘lib, inflyatsiya yuqori darajada bo‘lib turganda va bozor beqaror bo‘lganda",
"Davlat shu nuqtani qonun bilan taqiqlab qo‘ygan va uni amalga oshirishga ruxsat bermagan taqdirdagina",
"Resurslar va texnologiya o‘zgarmagan holda, chunki bunday nuqta hozirgi imkoniyatlardan yuqori"
],
"c": 3,
"w": "Chegaradan tashqari nuqta mavjud resurs va texnologiyada erishib bo‘lmaydigan imkoniyat.",
"k": "th"
},
{
"t": 1,
"q": "Uy xo‘jaligining bozor qarori (masalan, ko‘proq ishlash yoki dam olish) iqtisodiyotda qanday tahlil qilinadi?",
"o": [
"Boshqalarning qarorlariga qarab, o‘z manfaatini va shaxsiy ehtiyojlarini inobatga olmasdan",
"Faqat umumiy olingan daromad miqdoriga qarab, vaqtning muqobil qiymatini hisobga olmasdan",
"Faqat o‘tgan oydagi daromad darajasiga tayanib, kelgusidagi imkoniyatlarni hisobga olmasdan",
"Qo‘shimcha ish soati foydasi (daromad) va uning muqobil xarajati (dam olish) solishtirilib"
],
"c": 3,
"w": "Dam olish — ish vaqtining muqobil xarajati; marginal tahlil qo‘llaniladi.",
"k": "th"
},
{
"t": 1,
"q": "Iqtisodiyotda «samarasizlik» deganda nima tushuniladi?",
"o": [
"Resurslar boshqa taqsimlansa, kimningdir ahvolini yomonlashtirmay boshqasiniki yaxshilanadigan holat",
"Jamiyatning barcha a’zolari daromadlari o‘rtasida tenglik mavjud bo‘lmaydigan har qanday holat",
"Resurslar qanday taqsimlanishidan qat’i nazar, kimningdir ahvoli albatta yomonlashadigan holat",
"Davlat bozor jarayoniga bevosita aralashgan har qanday holat va uning natijalari majmui"
],
"c": 0,
"w": "Samarasizlik — Pareto yaxshilanishi mumkin bo‘lgan holat.",
"k": "th"
},
{
"t": 1,
"q": "Quyidagi holatlarning qaysi biri marginal tahlil mantig‘iga muvofiq?",
"o": [
"Aviakompaniya bo‘sh o‘rinni sotmaydi, chunki o‘rtacha xarajat chipta narxidan yuqori bo‘ladi",
"Aviakompaniya barcha chiptalarni bir xil narxda sotadi, chunki hamma yo‘lovchi xarajati teng",
"Aviakompaniya reysni bekor qiladi, chunki avvalgi sarflangan cho‘kkan xarajatlar qoplanmagan",
"Aviakompaniya bo‘sh o‘rinni arzon sotadi, chunki qo‘shimcha yo‘lovchining marginal xarajati juda past"
],
"c": 3,
"w": "Qaror qo‘shimcha birlikning marginal foydasi va marginal xarajatiga qarab qabul qilinadi.",
"k": "th"
},
{
"t": 1,
"q": "Taqsimotning mikro darajasidagi markaziy savoli qaysi?",
"o": [
"Valyuta kursi qanday belgilanishi va zaxiralar qanday saqlanishi",
"Nima, qanday va kim uchun ishlab chiqarilishi",
"Pul massasi qancha bo‘lishi va inflyatsiya qanday bo‘lishi",
"Davlat qarzi qanday boshqarilishi va byudjet qanday tuzilishi"
],
"c": 1,
"w": "Iqtisodiyotning asosiy uch savoli: nima, qanday va kim uchun ishlab chiqarish.",
"k": "th"
},
{
"t": 1,
"q": "Iqtisodiy tizimlarning bozor tipi uchun xos belgi qaysi?",
"o": [
"Resurslar taqsimoti markaziy rejalashtiruvchi organ ko‘rsatmalari asosida amalga oshiriladi",
"Ishlab chiqarish vositalari to‘liq davlat mulki bo‘lib, narxlar rejadan kelib chiqib belgilanadi",
"Resurslar narxlar va xususiy mulk asosida, ko‘plab mustaqil qarorlar orqali taqsimlanadi",
"Iste’molchilarning tanlov erkinligi qonunan cheklangan bo‘lib, ehtiyojlar rejadan belgilanadi"
],
"c": 2,
"w": "Bozor tizimida narx mexanizmi va xususiy mulk asosiy rol o‘ynaydi.",
"k": "th"
},
{
"t": 1,
"q": "Quyidagi vaziyatda «muqobil xarajat» eng yuqori bo‘lgan tanlovni aniqlang: talabaning bir kunlik vaqti 8 soat, u...",
"o": [
"Maoshsiz ishlab, tajriba orttirishni tanlagan bo‘lsa",
"Bir kunda eng yuqori maosh keltiradigan ishdan voz kechib o‘qiydigan bo‘lsa",
"Bir kunda eng kam maosh keltiradigan ishdan voz kechib o‘qiydigan bo‘lsa",
"Hech qanday ishlamasdan, faqat dam olib o‘qiydigan bo‘lsa"
],
"c": 1,
"w": "Muqobil xarajat eng yaxshi boy berilgan variantga teng — qancha yuqori maoshdan voz kechilsa, shuncha katta.",
"k": "th"
},
{
"t": 1,
"q": "Iqtisodiy «o‘sish» IICH grafigida qanday ko‘rinadi?",
"o": [
"Chegara chizig‘ining koordinata boshiga yaqinlashishi ko‘rinishida va ishlab chiqarish imkoniyati kamayishi",
"Chegara chizig‘i bo‘ylab bir nuqtadan boshqa nuqtaga o‘tish ko‘rinishida va tovarlar tarkibi o‘zgarishi",
"Butun chegara chizig‘ining koordinata boshidan uzoqlashishi (tashqariga siljishi) ko‘rinishida",
"Chegaradan pastdagi nuqtadan chegara ustidagi nuqtaga o‘tish ko‘rinishida va resurslar to‘liq bandligi"
],
"c": 2,
"w": "O‘sish — chegaraning siljishi; chegara bo‘ylab harakat — tanlov, chegaraga yaqinlashish — bandlik oshishi.",
"k": "th"
},
{
"t": 1,
"q": "Ishlab chiqarish imkoniyatlari chegarasi to‘g‘ri chiziq: barcha resurs bilan A tovardan 90 birlik yoki B tovardan 30 birlik ishlab chiqarish mumkin. A tovar ishlab chiqarish 36 birlikka kamaytirilsa, B tovar ishlab chiqarish qanchaga ko‘payadi?",
"o": [
"30 birlikka",
"12 birlikka",
"36 birlikka",
"108 birlikka"
],
"c": 1,
"w": "1 birlik A ning muqobil xarajati 0,33 birlik B. 36 birlik A dan voz kechilsa, B 36·30/90 = 12 birlikka ko‘payadi.",
"k": "pr"
},
{
"t": 1,
"q": "Ishlab chiqarish imkoniyatlari chegarasi to‘g‘ri chiziq: barcha resurs bilan A tovardan 120 birlik yoki B tovardan 40 birlik ishlab chiqarish mumkin. A tovar ishlab chiqarish 45 birlikka kamaytirilsa, B tovar ishlab chiqarish qanchaga ko‘payadi?",
"o": [
"40 birlikka",
"45 birlikka",
"15 birlikka",
"135 birlikka"
],
"c": 2,
"w": "1 birlik A ning muqobil xarajati 0,33 birlik B. 45 birlik A dan voz kechilsa, B 45·40/120 = 15 birlikka ko‘payadi.",
"k": "pr"
},
{
"t": 1,
"q": "Ishlab chiqarish imkoniyatlari chegarasi to‘g‘ri chiziq: barcha resurs bilan A tovardan 100 birlik yoki B tovardan 25 birlik ishlab chiqarish mumkin. A tovar ishlab chiqarish 60 birlikka kamaytirilsa, B tovar ishlab chiqarish qanchaga ko‘payadi?",
"o": [
"240 birlikka",
"60 birlikka",
"15 birlikka",
"25 birlikka"
],
"c": 2,
"w": "1 birlik A ning muqobil xarajati 0,25 birlik B. 60 birlik A dan voz kechilsa, B 60·25/100 = 15 birlikka ko‘payadi.",
"k": "pr"
},
{
"t": 1,
"q": "Ishlab chiqarish imkoniyatlari chegarasi to‘g‘ri chiziq: barcha resurs bilan A tovardan 150 birlik yoki B tovardan 50 birlik ishlab chiqarish mumkin. A tovar ishlab chiqarish 60 birlikka kamaytirilsa, B tovar ishlab chiqarish qanchaga ko‘payadi?",
"o": [
"20 birlikka",
"180 birlikka",
"60 birlikka",
"50 birlikka"
],
"c": 0,
"w": "1 birlik A ning muqobil xarajati 0,33 birlik B. 60 birlik A dan voz kechilsa, B 60·50/150 = 20 birlikka ko‘payadi.",
"k": "pr"
},
{
"t": 1,
"q": "Ishlab chiqarish imkoniyatlari chegarasi to‘g‘ri chiziq: barcha resurs bilan A tovardan 80 birlik yoki B tovardan 20 birlik ishlab chiqarish mumkin. A tovar ishlab chiqarish 24 birlikka kamaytirilsa, B tovar ishlab chiqarish qanchaga ko‘payadi?",
"o": [
"24 birlikka",
"6 birlikka",
"20 birlikka",
"96 birlikka"
],
"c": 1,
"w": "1 birlik A ning muqobil xarajati 0,25 birlik B. 24 birlik A dan voz kechilsa, B 24·20/80 = 6 birlikka ko‘payadi.",
"k": "pr"
},
{
"t": 1,
"q": "Ali bir soatda 4 ta stul yoki 2 ta stol, Vali esa 3 ta stul yoki 3 ta stol yasay oladi. Savdo ikkala tomon uchun ham foydali bo‘lishi uchun 1 ta stolning narxi (stul hisobida) qaysi oraliqda bo‘lishi kerak?",
"o": [
"2 dan 3 gacha",
"0,5 dan 1 gacha",
"3 dan 4 gacha",
"1 dan 2 gacha"
],
"c": 3,
"w": "Stolning muqobil xarajati: Ali 2 stul, Vali 1 stul. Kelishuv narxi shu ikki qiymat oralig‘ida bo‘lganda ikkalasi ham yutadi.",
"k": "pr"
},
{
"t": 1,
"q": "Ali bir soatda 6 ta stul yoki 2 ta stol, Vali esa 4 ta stul yoki 4 ta stol yasay oladi. Savdo ikkala tomon uchun ham foydali bo‘lishi uchun 1 ta stolning narxi (stul hisobida) qaysi oraliqda bo‘lishi kerak?",
"o": [
"4 dan 6 gacha",
"1 dan 3 gacha",
"2 dan 4 gacha",
"0,33 dan 1 gacha"
],
"c": 1,
"w": "Stolning muqobil xarajati: Ali 3 stul, Vali 1 stul. Kelishuv narxi shu ikki qiymat oralig‘ida bo‘lganda ikkalasi ham yutadi.",
"k": "pr"
},
{
"t": 1,
"q": "Ali bir soatda 8 ta stul yoki 2 ta stol, Vali esa 6 ta stul yoki 3 ta stol yasay oladi. Savdo ikkala tomon uchun ham foydali bo‘lishi uchun 1 ta stolning narxi (stul hisobida) qaysi oraliqda bo‘lishi kerak?",
"o": [
"2 dan 3 gacha",
"2 dan 4 gacha",
"6 dan 8 gacha",
"0,25 dan 0,5 gacha"
],
"c": 1,
"w": "Stolning muqobil xarajati: Ali 4 stul, Vali 2 stul. Kelishuv narxi shu ikki qiymat oralig‘ida bo‘lganda ikkalasi ham yutadi.",
"k": "pr"
},
{
"t": 1,
"q": "Ali bir soatda 9 ta stul yoki 3 ta stol, Vali esa 4 ta stul yoki 2 ta stol yasay oladi. Savdo ikkala tomon uchun ham foydali bo‘lishi uchun 1 ta stolning narxi (stul hisobida) qaysi oraliqda bo‘lishi kerak?",
"o": [
"2 dan 3 gacha",
"3 dan 4 gacha",
"4 dan 9 gacha",
"0,33 dan 0,5 gacha"
],
"c": 0,
"w": "Stolning muqobil xarajati: Ali 3 stul, Vali 2 stul. Kelishuv narxi shu ikki qiymat oralig‘ida bo‘lganda ikkalasi ham yutadi.",
"k": "pr"
},
{
"t": 1,
"q": "Ali bir soatda 12 ta stul yoki 3 ta stol, Vali esa 10 ta stul yoki 5 ta stol yasay oladi. Savdo ikkala tomon uchun ham foydali bo‘lishi uchun 1 ta stolning narxi (stul hisobida) qaysi oraliqda bo‘lishi kerak?",
"o": [
"0,25 dan 0,5 gacha",
"3 dan 5 gacha",
"10 dan 12 gacha",
"2 dan 4 gacha"
],
"c": 3,
"w": "Stolning muqobil xarajati: Ali 4 stul, Vali 2 stul. Kelishuv narxi shu ikki qiymat oralig‘ida bo‘lganda ikkalasi ham yutadi.",
"k": "pr"
},
{
"t": 1,
"q": "Talaba qo‘shimcha o‘qish soatlarining marginal foydasi (MB) ketma-ket [60, 48, 36, 24, 12], marginal xarajati (MC) esa [10, 15, 20, 25, 30] ga teng (shartli birliklarda). Agar u har bir soatni alohida baholab, MB ≥ MC bo‘lguncha o‘qisa, uning umumiy sof foydasi qancha bo‘ladi?",
"o": [
"98",
"144",
"83",
"99"
],
"c": 3,
"w": "Soatlar MB ≥ MC bo‘lguncha (3 soat) davom etadi; sof foyda = Σ(MB − MC) = 99.",
"k": "pr"
},
{
"t": 1,
"q": "Talaba qo‘shimcha o‘qish soatlarining marginal foydasi (MB) ketma-ket [90, 70, 50, 30, 10], marginal xarajati (MC) esa [20, 20, 25, 30, 35] ga teng (shartli birliklarda). Agar u har bir soatni alohida baholab, MB ≥ MC bo‘lguncha o‘qisa, uning umumiy sof foydasi qancha bo‘ladi?",
"o": [
"145",
"192",
"240",
"120"
],
"c": 0,
"w": "Soatlar MB ≥ MC bo‘lguncha (4 soat) davom etadi; sof foyda = Σ(MB − MC) = 145.",
"k": "pr"
},
{
"t": 1,
"q": "Talaba qo‘shimcha o‘qish soatlarining marginal foydasi (MB) ketma-ket [80, 64, 48, 32, 16], marginal xarajati (MC) esa [12, 18, 24, 30, 36] ga teng (shartli birliklarda). Agar u har bir soatni alohida baholab, MB ≥ MC bo‘lguncha o‘qisa, uning umumiy sof foydasi qancha bo‘ladi?",
"o": [
"138",
"140",
"120",
"224"
],
"c": 1,
"w": "Soatlar MB ≥ MC bo‘lguncha (4 soat) davom etadi; sof foyda = Σ(MB − MC) = 140.",
"k": "pr"
},
{
"t": 1,
"q": "Talaba qo‘shimcha o‘qish soatlarining marginal foydasi (MB) ketma-ket [70, 55, 40, 25, 10], marginal xarajati (MC) esa [15, 15, 20, 28, 40] ga teng (shartli birliklarda). Agar u har bir soatni alohida baholab, MB ≥ MC bo‘lguncha o‘qisa, uning umumiy sof foydasi qancha bo‘ladi?",
"o": [
"165",
"115",
"95",
"112"
],
"c": 1,
"w": "Soatlar MB ≥ MC bo‘lguncha (3 soat) davom etadi; sof foyda = Σ(MB − MC) = 115.",
"k": "pr"
},
{
"t": 1,
"q": "Talaba qo‘shimcha o‘qish soatlarining marginal foydasi (MB) ketma-ket [100, 75, 50, 30, 10], marginal xarajati (MC) esa [30, 30, 30, 30, 30] ga teng (shartli birliklarda). Agar u har bir soatni alohida baholab, MB ≥ MC bo‘lguncha o‘qisa, uning umumiy sof foydasi qancha bo‘ladi?",
"o": [
"135",
"195",
"115",
"255"
],
"c": 0,
"w": "Soatlar MB ≥ MC bo‘lguncha (4 soat) davom etadi; sof foyda = Σ(MB − MC) = 135.",
"k": "pr"
},
{
"t": 1,
"q": "Talaba bir yil davomida kontrakt 18 mln, darsliklar uchun 3 mln so‘m to‘laydi, yotoqxonaga 12 mln so‘m to‘laydi (o‘qimasa ham shuncha to‘lagan bo‘lardi). O‘qimaganida oyiga 2 mln so‘m maosh olardi. Uning o‘qishning bir yillik iqtisodiy (muqobil) xarajati qancha (mln so‘m)?",
"o": [
"21",
"57",
"45",
"33"
],
"c": 2,
"w": "Iqtisodiy xarajat = aniq xarajatlar (kontrakt + darslik) + qo‘ldan boy berilgan maosh: 18+3+12·2 = 45. Yotoqxona o‘qishdan qat’i nazar to‘lanadi, hisobga kirmaydi.",
"k": "pr"
},
{
"t": 1,
"q": "Talaba bir yil davomida kontrakt 24 mln, darsliklar uchun 4 mln so‘m to‘laydi, yotoqxonaga 15 mln so‘m to‘laydi (o‘qimasa ham shuncha to‘lagan bo‘lardi). O‘qimaganida oyiga 3 mln so‘m maosh olardi. Uning o‘qishning bir yillik iqtisodiy (muqobil) xarajati qancha (mln so‘m)?",
"o": [
"64",
"28",
"79",
"43"
],
"c": 0,
"w": "Iqtisodiy xarajat = aniq xarajatlar (kontrakt + darslik) + qo‘ldan boy berilgan maosh: 24+4+12·3 = 64. Yotoqxona o‘qishdan qat’i nazar to‘lanadi, hisobga kirmaydi.",
"k": "pr"
},
{
"t": 1,
"q": "Talaba bir yil davomida kontrakt 30 mln, darsliklar uchun 5 mln so‘m to‘laydi, yotoqxonaga 18 mln so‘m to‘laydi (o‘qimasa ham shuncha to‘lagan bo‘lardi). O‘qimaganida oyiga 2 mln so‘m maosh olardi. Uning o‘qishning bir yillik iqtisodiy (muqobil) xarajati qancha (mln so‘m)?",
"o": [
"53",
"35",
"77",
"59"
],
"c": 3,
"w": "Iqtisodiy xarajat = aniq xarajatlar (kontrakt + darslik) + qo‘ldan boy berilgan maosh: 30+5+12·2 = 59. Yotoqxona o‘qishdan qat’i nazar to‘lanadi, hisobga kirmaydi.",
"k": "pr"
},
{
"t": 1,
"q": "Talaba bir yil davomida kontrakt 20 mln, darsliklar uchun 2 mln so‘m to‘laydi, yotoqxonaga 10 mln so‘m to‘laydi (o‘qimasa ham shuncha to‘lagan bo‘lardi). O‘qimaganida oyiga 4 mln so‘m maosh olardi. Uning o‘qishning bir yillik iqtisodiy (muqobil) xarajati qancha (mln so‘m)?",
"o": [
"32",
"80",
"70",
"22"
],
"c": 2,
"w": "Iqtisodiy xarajat = aniq xarajatlar (kontrakt + darslik) + qo‘ldan boy berilgan maosh: 20+2+12·4 = 70. Yotoqxona o‘qishdan qat’i nazar to‘lanadi, hisobga kirmaydi.",
"k": "pr"
},
{
"t": 1,
"q": "Talaba bir yil davomida kontrakt 36 mln, darsliklar uchun 6 mln so‘m to‘laydi, yotoqxonaga 20 mln so‘m to‘laydi (o‘qimasa ham shuncha to‘lagan bo‘lardi). O‘qimaganida oyiga 3 mln so‘m maosh olardi. Uning o‘qishning bir yillik iqtisodiy (muqobil) xarajati qancha (mln so‘m)?",
"o": [
"98",
"42",
"78",
"62"
],
"c": 2,
"w": "Iqtisodiy xarajat = aniq xarajatlar (kontrakt + darslik) + qo‘ldan boy berilgan maosh: 36+6+12·3 = 78. Yotoqxona o‘qishdan qat’i nazar to‘lanadi, hisobga kirmaydi.",
"k": "pr"
},
{
"t": 2,
"q": "Talab qonuniga ko‘ra, boshqa sharoitlar o‘zgarmaganda tovar narxi oshsa nima sodir bo‘ladi?",
"o": [
"Talab qilinadigan miqdor oshadi, chunki iste’molchilar qimmat tovarni sifatliroq deb hisoblaydi",
"Talab egri chizig‘i butunlay yuqoriga va o‘ngga siljiydi, talab oshadi va muvozanat o‘zgaradi",
"Talab egri chizig‘i pastga va chapga siljiydi, shu sababli talab kamayadi va narx tushadi",
"Talab qilinadigan miqdor kamayadi, talab egri chizig‘i bo‘ylab harakat sodir bo‘ladi"
],
"c": 3,
"w": "Narx o‘zgarishi talab qilinadigan MIQDORni o‘zgartiradi (chiziq bo‘ylab harakat); talab siljishi boshqa omillardan.",
"k": "th"
},
{
"t": 2,
"q": "Quyidagi omillardan qaysi biri talab egri chizig‘ining siljishiga sabab bo‘ladi?",
"o": [
"Iste’molchilar daromadining o‘zgarishi",
"Tovarning o‘z narxining o‘zgarishi",
"Xom ashyo narxining pasayishi",
"Ishlab chiqarish texnologiyasining takomillashuvi"
],
"c": 0,
"w": "O‘z narxi — chiziq bo‘ylab harakat; daromad, did, o‘rinbosar narxi, kutishlar, xaridorlar soni — siljish.",
"k": "th"
},
{
"t": 2,
"q": "Normal tovar uchun daromad oshganda talab qanday o‘zgaradi?",
"o": [
"Talab oshadi va talab egri chizig‘i o‘ngga siljiydi",
"Talab o‘zgarmaydi, faqat narx oshadi",
"Talab kamayadi va egri chiziq chapga siljiydi",
"Talab qilinadigan miqdor kamayadi va egri chiziq bo‘ylab harakat sodir bo‘ladi"
],
"c": 0,
"w": "Normal tovar: daromad ↑ → talab ↑.",
"k": "th"
},
{
"t": 2,
"q": "Past toifali (inferior) tovar deb qanday tovarga aytiladi?",
"o": [
"Iste’molchi daromadi oshganda talab kamayadigan tovarga",
"Daromad oshganda talabi o‘zgarmaydigan zaruriy tovarga",
"Narxi oshganda talabi ham oshadigan nodir tovarga",
"Sifati past bo‘lgani uchun narxi arzon bo‘lgan har qanday tovarga"
],
"c": 0,
"w": "Inferior tovar — daromad bilan talab teskari bog‘liq (masalan, arzon iste’mol mahsuloti).",
"k": "th"
},
{
"t": 2,
"q": "O‘rinbosar (substitut) tovarlar narxi o‘zgarsa nima bo‘ladi? Choy narxi oshganda qahvaga talab...",
"o": [
"O‘zgarmaydi, chunki bu tovarlar mustaqil",
"Oshadi, qahva talabi egri chizig‘i o‘ngga siljiydi",
"Faqat qahva narxi oshganda o‘zgaradi",
"Kamayadi, qahva talabi egri chizig‘i chapga siljiydi"
],
"c": 1,
"w": "Substitutlar: biri qimmatlashsa, ikkinchisiga talab oshadi.",
"k": "th"
},
{
"t": 2,
"q": "To‘ldiruvchi (komplement) tovarlar narxi o‘zgarsa nima bo‘ladi? Avtomobil benzini narxi oshganda katta dvigatelli avtomobillarga talab...",
"o": [
"Avval oshib, so‘ng keskin kamayadi",
"Oshadi, talab egri chizig‘i o‘ngga siljiydi",
"Kamayadi, talab egri chizig‘i chapga siljiydi",
"O‘zgarmaydi, chunki avtomobil narxi o‘zgarmagan"
],
"c": 2,
"w": "Komplementlar: biri qimmatlashsa, ikkinchisiga talab kamayadi.",
"k": "th"
},
{
"t": 2,
"q": "Talab qilinadigan miqdorning o‘zgarishi va talabning o‘zgarishi o‘rtasidagi farq qaysi javobda to‘g‘ri ko‘rsatilgan?",
"o": [
"Ikkalasi ham faqat daromad o‘zgarishi tufayli chiziqning siljishini bildiradi",
"Birinchisi narxdan boshqa omil tufayli chiziqning siljishi, ikkinchisi narx tufayli chiziq bo‘ylab harakat",
"Ikkalasi ham narx o‘zgarishi tufayli chiziq bo‘ylab harakatni bildiradi",
"Birinchisi narx o‘zgarishi tufayli chiziq bo‘ylab harakat, ikkinchisi narxdan boshqa omil tufayli chiziqning siljishi"
],
"c": 3,
"w": "Miqdor o‘zgarishi — harakat; talab o‘zgarishi — siljish.",
"k": "th"
},
{
"t": 2,
"q": "Taklif qonuniga ko‘ra, boshqa sharoitlar teng bo‘lganda narx oshsa...",
"o": [
"Taklif egri chizig‘i pastga siljiydi, taklif ko‘payadi",
"Taklif qilinadigan miqdor kamayadi",
"Taklif qilinadigan miqdor oshadi",
"Taklif egri chizig‘i butunlay chapga siljiydi"
],
"c": 2,
"w": "Narx ↑ → taklif qilinadigan miqdor ↑ (chiziq bo‘ylab harakat).",
"k": "th"
},
{
"t": 2,
"q": "Taklif egri chizig‘ini o‘ngga (taklif oshishi) siljituvchi omil qaysi?",
"o": [
"Iste’molchilar didining o‘zgarishi va yangi modaning paydo bo‘lishi",
"Ishlab chiqarish texnologiyasining takomillashuvi",
"Tovarning o‘z narxining oshishi va savdo hajmining kengayishi",
"Xaridorlar sonining ko‘payishi va aholi daromadlarining o‘sishi"
],
"c": 1,
"w": "Texnologiya, resurs narxi pasayishi, sotuvchilar soni ko‘payishi taklifni oshiradi.",
"k": "th"
},
{
"t": 2,
"q": "Ishlab chiqarish resurslari narxi oshsa, taklif egri chizig‘i...",
"o": [
"Siljimaydi, faqat harakat sodir bo‘ladi",
"Chapga (yuqoriga) siljiydi, taklif kamayadi",
"O‘ngga (pastga) siljiydi, taklif oshadi",
"Gorizontal holatga o‘tadi"
],
"c": 1,
"w": "Xarajatlar ↑ → har bir narxda kamroq taklif qilinadi.",
"k": "th"
},
{
"t": 2,
"q": "Muvozanat narxda...",
"o": [
"Talab qilingan miqdor taklif qilingan miqdorga teng bo‘ladi va bozor tozalanadi",
"Sotuvchilar maksimal foydani, xaridorlar esa minimal foydalilikni oladi",
"Talab taklifdan doimo yuqori bo‘lib, tanqislik saqlanadi",
"Taklif talabdan doim yuqori bo‘lib, ortiqchalik saqlanadi"
],
"c": 0,
"w": "Muvozanat: Qd = Qs; shu narxda ortiqchalik ham tanqislik ham yo‘q.",
"k": "th"
},
{
"t": 2,
"q": "Narx muvozanatdan yuqori bo‘lsa bozorda nima yuz beradi?",
"o": [
"Tovar ortiqchaligi vujudga keladi va narx pasayish tomon bosim ostida bo‘ladi",
"Bozor muvozanati darhol tiklanadi, miqdorlar o‘zgarmaydi",
"Talab ham, taklif ham nolga tushadi",
"Tovar tanqisligi vujudga keladi va narx oshish tomon bosim ostida bo‘ladi"
],
"c": 0,
"w": "P > P*: Qs > Qd → ortiqchalik → narx tushadi.",
"k": "th"
},
{
"t": 2,
"q": "Narx muvozanatdan past bo‘lsa bozorda nima yuz beradi?",
"o": [
"Bozor muvozanatda qoladi",
"Taklif talabdan oshib ketadi",
"Ortiqchalik vujudga keladi va narx pasayishga moyil bo‘ladi",
"Tanqislik vujudga keladi va narx oshishga moyil bo‘ladi"
],
"c": 3,
"w": "P < P*: Qd > Qs → tanqislik → narx oshadi.",
"k": "th"
},
{
"t": 2,
"q": "Talab ortishi (siljish) va taklif o‘zgarmaganda yangi muvozanatda nima kuzatiladi?",
"o": [
"Muvozanat narx va miqdor ikkalasi ham oshadi",
"Muvozanat narx o‘zgarmaydi, miqdor oshadi",
"Muvozanat narx pasayadi, miqdor oshadi",
"Muvozanat narx oshadi, miqdor kamayadi"
],
"c": 0,
"w": "Talab ↑: D o‘ngga → P ↑, Q ↑.",
"k": "th"
},
{
"t": 2,
"q": "Taklif ortishi (siljish) va talab o‘zgarmaganda yangi muvozanatda nima kuzatiladi?",
"o": [
"Muvozanat narx pasayadi, miqdor oshadi",
"Muvozanat narx pasayadi, miqdor kamayadi",
"Muvozanat narx oshadi, miqdor oshadi",
"Muvozanat narx oshadi, miqdor kamayadi"
],
"c": 0,
"w": "Taklif ↑: S o‘ngga → P ↓, Q ↑.",
"k": "th"
},
{
"t": 2,
"q": "Talab ham, taklif ham bir vaqtda oshsa, qaysi natija aniq bo‘ladi?",
"o": [
"Muvozanat miqdor oshadi, narx o‘zgarishi esa siljishlar kattaligiga bog‘liq bo‘ladi",
"Muvozanat narx aniq pasayadi, miqdor o‘zgarishi esa siljishlar kattaligiga bog‘liq bo‘ladi",
"Muvozanat narx aniq oshadi, miqdor o‘zgarishi esa siljishlar kattaligiga bog‘liq bo‘ladi",
"Muvozanat miqdor aniq kamayadi, narx esa aniq oshadi va bozor muvozanati buziladi"
],
"c": 0,
"w": "D↑ va S↑: Q aniq ↑; P noaniq.",
"k": "th"
},
{
"t": 2,
"q": "Talab kamaysa va taklif oshsa, muvozanat narx va miqdor qanday o‘zgaradi?",
"o": [
"Miqdor aniq oshadi, narx o‘zgarishi noaniq bo‘ladi",
"Narx ham, miqdor ham aniq pasayadi",
"Narx aniq pasayadi, miqdor o‘zgarishi noaniq bo‘ladi",
"Narx aniq oshadi, miqdor o‘zgarishi noaniq bo‘ladi"
],
"c": 2,
"w": "D↓ va S↑: P aniq ↓; Q noaniq.",
"k": "th"
},
{
"t": 2,
"q": "Narxning yuqori chegarasi (price ceiling) muvozanat narxdan past belgilansa nima yuz beradi?",
"o": [
"Narx avtomatik ravishda muvozanat darajasigacha ko‘tarilib, tanqislik darhol yo‘qoladi",
"Tanqislik vujudga keladi, chunki talab qilingan miqdor taklifdan katta bo‘ladi",
"Ortiqchalik vujudga keladi, chunki taklif qilingan miqdor talabdan katta bo‘ladi",
"Bozor muvozanati o‘zgarmaydi, chunki belgilangan chegara samarasiz va bog‘lamaydigan bo‘ladi"
],
"c": 1,
"w": "Bog‘lovchi narx shift: P_max < P* → Qd > Qs → tanqislik.",
"k": "th"
},
{
"t": 2,
"q": "Narxning quyi chegarasi (price floor) muvozanat narxdan yuqori belgilansa nima yuz beradi?",
"o": [
"Tanqislik vujudga keladi va navbatlar paydo bo‘ladi",
"Sotuvchilar tovarni arzonroq narxda sotishga majbur bo‘ladi",
"Ortiqchalik (ishsizlik, yig‘ilib qolgan tovar) vujudga keladi",
"Bozor muvozanati tiklanadi va qo‘shimcha o‘zgarish bo‘lmaydi"
],
"c": 2,
"w": "P_min > P* → Qs > Qd → ortiqchalik (masalan, minimal ish haqi ishsizlik keltirishi mumkin).",
"k": "th"
},
{
"t": 2,
"q": "Muvozanat narxdan yuqori belgilangan narxning quyi chegarasi (price floor)...",
"o": [
"Hech qachon ortiqchalik vujudga keltirmaydi",
"Bog‘lamaydi, chunki bozor narxi baribir shu chegaradan yuqori bo‘ladi",
"Faqat taklifni emas, talabni ham oshiradi",
"Bog‘lovchi (samarali) hisoblanadi va bozor natijasini o‘zgartiradi"
],
"c": 3,
"w": "Muvozanatdan yuqori floor — bog‘lovchi; muvozanatdan past floor — bog‘lamaydi.",
"k": "th"
},
{
"t": 2,
"q": "Iste’molchi ortiqchaligi (consumer surplus) nima?",
"o": [
"Iste’molchining tovar uchun to‘lashga tayyor narxi va haqiqatda to‘lagan narxi o‘rtasidagi farq",
"Iste’molchi to‘lagan narx bilan sotuvchining ishlab chiqarish xarajati o‘rtasidagi farq",
"Iste’molchi daromadi bilan sotib olinayotgan tovar narxi o‘rtasidagi umumiy farq",
"Bozorda talab qilingan va taklif qilingan miqdorlar o‘rtasida vujudga kelgan farq"
],
"c": 0,
"w": "CS = to‘lashga tayyor narx − haqiqiy narx; grafikda talab egri chizig‘i ostidan narx tepasida.",
"k": "th"
},
{
"t": 2,
"q": "Ishlab chiqaruvchi ortiqchaligi (producer surplus) nima?",
"o": [
"Sotuvchi olgan narx bilan iste’molchining to‘lashga tayyor bo‘lgan narxi o‘rtasidagi farq",
"Sotuvchining umumiy tushumi bilan davlatga to‘langan soliq summasi o‘rtasidagi farq",
"Sotuvchi olgan narx va uning tovarni sotishga tayyor eng past narxi (xarajati) o‘rtasidagi farq",
"Muvozanat narx bilan tashqi bozordagi jahon narxi o‘rtasidagi farq miqdori"
],
"c": 2,
"w": "PS = narx − sotuvchining eng past qabul qiladigan narxi (xarajat).",
"k": "th"
},
{
"t": 2,
"q": "Umumiy ortiqcha (total surplus) muvozanat miqdorida...",
"o": [
"Maksimal darajaga erishadi, shuning uchun bozor muvozanati samarali hisoblanadi",
"Minimal bo‘ladi, chunki ikki tomon ham o‘z foydasining bir qismidan voz kechadi",
"Muvozanat miqdoridan past hajmda eng yuqori bo‘ladi va undan keyin kamayib boradi",
"Faqat iste’molchi ortiqchaligiga teng bo‘ladi va sotuvchi ortiqchaligi nolga tenglashadi"
],
"c": 0,
"w": "Q* da MB = MC, ya’ni umumiy ortiqcha maksimal.",
"k": "th"
},
{
"t": 2,
"q": "Muvozanatdan past miqdorda ishlab chiqarilsa (masalan, kvota orqali), jamiyat nimani yo‘qotadi?",
"o": [
"Hech narsa yo‘qotmaydi, chunki kamaygan hajm hisobiga narx oshib, foyda ko‘payadi",
"Sof yo‘qotish (deadweight loss) ko‘rinishida umumiy ortiqchaning bir qismini yo‘qotadi",
"Faqat davlat daromadini yo‘qotadi, bozor ishtirokchilari esa bundan zarar ko‘rmaydi",
"Faqat sotuvchilar ortiqchaligini yo‘qotadi, iste’molchilar esa bundan yutib chiqadi"
],
"c": 1,
"w": "Q < Q* da MB > MC bo‘lgan bitimlar amalga oshmaydi → DWL.",
"k": "th"
},
{
"t": 2,
"q": "Birlikka solinadigan soliq sotuvchilardan undirilsa, taklif egri chizig‘i...",
"o": [
"Gorizontal chiziqqa aylanadi",
"Soliq miqdoricha yuqoriga (chapga) siljiydi",
"Hech qanday siljimaydi, chunki soliq talabga ta’sir qiladi",
"Soliq miqdoricha pastga (o‘ngga) siljiydi"
],
"c": 1,
"w": "Sotuvchi uchun har birlik t ga qimmatlashadi → S yuqoriga.",
"k": "th"
},
{
"t": 2,
"q": "Soliq sotuvchidan yoki xaridordan undirilishidan qat’i nazar...",
"o": [
"Soliq yukini doim sotuvchi ko‘taradi, chunki soliq uning daromadidan ushlab qolinadi",
"Soliq yukini doim to‘lovni qonuniy ravishda amalga oshiruvchi tomon to‘liq ko‘taradi",
"Soliq yukini doim iste’molchi ko‘taradi, chunki sotuvchi uni narxga qo‘shib yuboradi",
"Soliq yukining taqsimlanishi bir xil bo‘ladi, chunki u talab va taklif elastikligiga bog‘liq"
],
"c": 3,
"w": "Soliqning iqtisodiy yuki to‘lov qonuniy kimdan undirilishiga bog‘liq emas (tushish nazariyasi).",
"k": "th"
},
{
"t": 2,
"q": "Soliq kiritilgach, xaridor to‘laydigan narx bilan sotuvchi qo‘lga oladigan narx o‘rtasidagi farq nimaga teng?",
"o": [
"Soliq tushumining umumiy miqdoriga teng",
"Muvozanat narxning yarmiga teng",
"Birlikka solinadigan soliq miqdoriga teng",
"Sof yo‘qotish miqdoriga teng bo‘ladi"
],
"c": 2,
"w": "P_xaridor − P_sotuvchi = t.",
"k": "th"
},
{
"t": 2,
"q": "Sof yo‘qotish (DWL) soliq natijasida qanday vujudga keladi?",
"o": [
"Soliq tushumining davlat tomonidan to‘liq yo‘qotilishi hisobiga umumiy ortiqcha kamayadi",
"Ishlab chiqarish hajmining soliqdan keyin oshishi hisobiga umumiy ortiqcha kamayadi",
"Iste’molchi ortiqchaligining sotuvchi ortiqchaligiga o‘tishi natijasida umumiy ortiqcha kamayadi",
"Soliq tufayli amalga oshmay qolgan foydali bitimlar hisobiga umumiy ortiqcha kamayadi"
],
"c": 3,
"w": "DWL = soliq tufayli yo‘qolgan bitimlar bo‘yicha ortiqcha; tushum esa davlatga o‘tadi (transfer).",
"k": "th"
},
{
"t": 2,
"q": "Taklif noelastik, talab elastik bo‘lsa, soliq yukini ko‘proq kim ko‘taradi?",
"o": [
"Iste’molchilar, chunki ularning narx o‘zgarishiga moslashish imkoniyati kamroq",
"Soliq yuki teng taqsimlanadi",
"Sotuvchilar, chunki ularning narx o‘zgarishiga moslashish imkoniyati kamroq",
"Davlatning o‘zi, chunki soliq tushumi kamayadi"
],
"c": 2,
"w": "Kamroq elastik tomon (moslasha olmaydigan) ko‘proq yuk ko‘taradi.",
"k": "th"
},
{
"t": 2,
"q": "Quyidagi holatda talab egri chizig‘ining o‘ngga siljishi kutilmaydi:",
"o": [
"Tovarning o‘z narxi pasayganda",
"O‘rinbosar tovar narxi oshganda",
"Iste’molchilar daromadi oshganda (normal tovar)",
"Tovarga moda paydo bo‘lib, did o‘zgarganda"
],
"c": 0,
"w": "O‘z narxi o‘zgarishi harakatni keltiradi, siljishni emas.",
"k": "th"
},
{
"t": 2,
"q": "Talab egri chizig‘i odatda qanday ko‘rinishga ega va nima uchun?",
"o": [
"Vertikal, chunki talab qilingan miqdor narx o‘zgarishiga umuman bog‘liq bo‘lmaydi",
"Yuqoriga qiyalangan, chunki narx oshganda iste’molchilar tovar sifatiga ko‘proq ishonadi",
"Gorizontal, chunki xaridorlar narxning har qanday o‘zgarishiga befarq munosabatda bo‘ladi",
"Pastga qiyalangan, chunki narx pasayganda daromad va almashtirish samaralari talabni oshiradi"
],
"c": 3,
"w": "Talab qonuni va uning sababi: daromad hamda almashtirish samarasi.",
"k": "th"
},
{
"t": 2,
"q": "Bozor talabi qanday hosil bo‘ladi?",
"o": [
"Eng yuqori narx to‘lashga tayyor xaridor talabini tanlash orqali",
"Individual talablarni har bir miqdorda narx bo‘yicha (vertikal) qo‘shish orqali",
"Individual talablarning o‘rtacha narxini hisoblash orqali",
"Individual talablarni har bir narxda miqdor bo‘yicha (gorizontal) qo‘shish orqali"
],
"c": 3,
"w": "Bozor talabi = individual talablarning gorizontal yig‘indisi.",
"k": "th"
},
{
"t": 2,
"q": "Quyidagi tasdiqlardan qaysi biri taklifning vaqt bo‘yicha xususiyatiga to‘g‘ri keladi?",
"o": [
"Qisqa muddatda taklif narx o‘zgarishiga uzoq muddatdagidan moslashuvchanroq bo‘ladi",
"Uzoq muddatda taklif narx o‘zgarishiga mutlaqo bog‘liq bo‘lmay, o‘zgarmay qolaveradi",
"Uzoq muddatda taklif narx o‘zgarishiga qisqa muddatdagidan moslashuvchanroq bo‘ladi",
"Taklif muddatdan qat’i nazar narx o‘zgarishiga bir xil moslashuvchanlik bilan javob beradi"
],
"c": 2,
"w": "Vaqt o‘tishi bilan firmalar ishlab chiqarish hajmini moslashtira oladi.",
"k": "th"
},
{
"t": 2,
"q": "Narxga bog‘liq bo‘lmagan, doim bir xil miqdorda taklif qilinadigan tovarning (masalan, noyob yer uchastkasi) taklif egri chizig‘i...",
"o": [
"Vertikal bo‘ladi",
"Yuqoriga qiyalangan bo‘ladi",
"Pastga qiyalangan bo‘ladi",
"Gorizontal bo‘ladi"
],
"c": 0,
"w": "Mutlaq noelastik taklif — vertikal.",
"k": "th"
},
{
"t": 2,
"q": "Kelgusida narx oshishi kutilganda iste’molchilar bugungi talabni...",
"o": [
"Oshiradilar, bugungi talab egri chizig‘i o‘ngga siljiydi",
"O‘zgartirmaydilar, chunki kutish talabga ta’sir qilmaydi",
"Kamaytiradilar, bugungi talab egri chizig‘i chapga siljiydi",
"Faqat narx bugun oshgandagina o‘zgartiradilar"
],
"c": 0,
"w": "Kutishlar talabga ta’sir qiluvchi omil: narx ↑ kutilsa, bugun ko‘proq xarid qilinadi.",
"k": "th"
},
{
"t": 2,
"q": "Xaridorlar soni kamaygan taqdirda bozor talabi...",
"o": [
"O‘zgarmaydi, faqat narx o‘zgaradi",
"Kamayadi, talab egri chizig‘i chapga siljiydi",
"Oshadi, talab egri chizig‘i o‘ngga siljiydi",
"Faqat taklifga bog‘liq bo‘lib qoladi"
],
"c": 1,
"w": "Bozor talabi xaridorlar soniga bog‘liq.",
"k": "th"
},
{
"t": 2,
"q": "Quyidagi holatlarning qaysi biri muvozanat narxning oshishiga olib keladi?",
"o": [
"Talabning kamayishi va taklifning o‘zgarmay qolishi",
"Talabning oshishi va taklifning kamayishi bir vaqtda sodir bo‘lishi",
"Talabning kamayishi va taklifning oshishi bir vaqtda sodir bo‘lishi",
"Taklifning oshishi va talabning o‘zgarmay qolishi"
],
"c": 1,
"w": "D↑ va S↓ → P aniq ↑.",
"k": "th"
},
{
"t": 2,
"q": "Quyidagilardan qaysi biri «tanqislik»ning belgisi hisoblanadi?",
"o": [
"Belgilangan narxda taklif qilingan miqdor talab qilingan miqdordan ko‘p bo‘lishi",
"Iste’molchilar ortiqchaligining nolga teng bo‘lishi",
"Ishlab chiqarilgan tovarlarning barchasi sotilib bo‘lishi",
"Belgilangan narxda talab qilingan miqdor taklif qilingan miqdordan ko‘p bo‘lishi"
],
"c": 3,
"w": "Tanqislik: Qd > Qs.",
"k": "th"
},
{
"t": 2,
"q": "Davlat narxini tartibga solgan bozorda qora bozor paydo bo‘lishining asosiy sababi:",
"o": [
"Narxning muvozanat darajasida belgilanishi",
"Rasmiy narxda ortiqchalik tufayli sotuvchilar tovarni arzon sotishga majbur bo‘lishi",
"Rasmiy narxda tanqislik tufayli ayrimlar yuqori narx to‘lashga tayyor bo‘lishi",
"Soliqlarning mutlaqo bekor qilinishi"
],
"c": 2,
"w": "Narx shifti → tanqislik → yuqori narx to‘lashga tayyorlar uchun norasmiy bozor.",
"k": "th"
},
{
"t": 2,
"q": "Minimal ish haqini muvozanat ish haqidan yuqori belgilash mehnat bozorida qanday natijaga olib keladi?",
"o": [
"Mehnat taklifi talabdan oshib, ishsizlik vujudga keladi",
"Mehnat bozorida muvozanat o‘zgarmaydi",
"Mehnat talabi taklifdan oshib, ishchi kuchi tanqisligi vujudga keladi",
"Ish haqi muvozanat darajasigacha pasayadi"
],
"c": 0,
"w": "Mehnat bozorida narx — ish haqi; floor → ortiqcha taklif = ishsizlik.",
"k": "th"
},
{
"t": 2,
"q": "Subsidiya (ishlab chiqaruvchiga birlik uchun to‘lov) taklif egri chizig‘iga qanday ta’sir qiladi?",
"o": [
"Talab egri chizig‘i o‘ngga siljiydi",
"Taklif egri chizig‘i subsidiya miqdoricha yuqoriga siljiydi",
"Taklif egri chizig‘i subsidiya miqdoricha pastga (o‘ngga) siljiydi",
"Hech qanday egri chiziq siljimaydi"
],
"c": 2,
"w": "Subsidiya — manfiy soliq: xarajatni kamaytiradi → S ↓/o‘ngga.",
"k": "th"
},
{
"t": 2,
"q": "Kvota (miqdoriy chegara) muvozanat miqdordan kam belgilansa, xaridor to‘lashga tayyor narx...",
"o": [
"Ishlab chiqarish xarajatidan past bo‘ladi, bu esa bozorda ortiqchalik mavjudligini ko‘rsatadi",
"Ishlab chiqarish xarajatiga teng bo‘ladi va bozor samaradorligi yanada yuqori bo‘lib qoladi",
"Nolga teng bo‘ladi, chunki xaridorlar kvota sharoitida tovarga talabni to‘liq yo‘qotadi",
"Ishlab chiqarish xarajatidan yuqori bo‘ladi, bu esa foydali bitimlar amalga oshmaganini ko‘rsatadi"
],
"c": 3,
"w": "Q < Q*: MB > MC — bitim bo‘lmay qolgan, DWL mavjud.",
"k": "th"
},
{
"t": 2,
"q": "Talab egri chizig‘i ustidagi nuqta iste’molchi uchun nimani bildiradi?",
"o": [
"Shu miqdordagi birlik uchun to‘lashga tayyor bo‘lgan eng yuqori narxni",
"Shu narxda talab qilinadigan jami tushumni",
"Shu miqdordagi birlikni ishlab chiqarishga sarflangan o‘rtacha xarajatni",
"Shu miqdordagi birlikni sotishdan oladigan sotuvchi foydasini"
],
"c": 0,
"w": "Talab chizig‘i = marginal to‘lashga tayyorlik (marginal foyda).",
"k": "th"
},
{
"t": 2,
"q": "Taklif egri chizig‘i ustidagi nuqta sotuvchi uchun nimani bildiradi?",
"o": [
"Shu miqdordagi tovarni sotishdan olinadigan umumiy tushumning pul ko‘rinishidagi miqdorini",
"Shu birlik uchun iste’molchining to‘lashga tayyor bo‘lgan eng yuqori narxini",
"Shu birlikni sotishga rozi bo‘lgan eng past narxni, ya’ni marginal xarajatni",
"Shu birlikni sotishdan sotuvchi oladigan o‘rtacha foydaning pul ko‘rinishidagi miqdorini"
],
"c": 2,
"w": "Taklif chizig‘i = marginal xarajat (raqobatli bozorda).",
"k": "th"
},
{
"t": 2,
"q": "Qanday holatda talab va taklif tahlilidagi muvozanat «barqaror» deyiladi?",
"o": [
"Narx muvozanatdan chetga chiqqanda bozor kuchlari uni yanada uzoqlashtirsa",
"Davlat narxni doimiy ravishda ushlab tursa",
"Narx muvozanatdan chetga chiqsa, bozor kuchlari uni muvozanatga qaytarsa",
"Narx hech qachon o‘zgarmasa"
],
"c": 2,
"w": "Barqaror muvozanat: tanqislik/ortiqchalik narxni qaytaradi.",
"k": "th"
},
{
"t": 2,
"q": "Mukammal raqobat bozorida bitta xaridorning xatti-harakati...",
"o": [
"Bozor narxini o‘zi belgilab beradi, chunki u bozorda katta ulushga ega bo‘lib hisoblanadi",
"Bozor narxiga sezilarli ta’sir ko‘rsatmaydi, chunki u narxni qabul qiluvchi hisoblanadi",
"Faqat taklifga ta’sir qiladi, talabga esa hech qanday ta’sir ko‘rsata olmaydi va hisoblanmaydi",
"Doimo muvozanat narxning o‘zgarishiga olib keladi, chunki har bir xaridor muhim hisoblanadi"
],
"c": 1,
"w": "Narxni qabul qiluvchi (price taker) — individual ulushi juda kichik.",
"k": "th"
},
{
"t": 2,
"q": "Quyidagilardan qaysi biri tovar bozorida talabning pasayishini bildiradi?",
"o": [
"Narx pasayishi natijasida xaridorlar avvalgidan ko‘proq miqdorni sotib olishi",
"Sotuvchilar har bir narxda avvalgidan ko‘proq miqdorda tovar taklif qilishi",
"Muvozanat narxning o‘zgarmay qolishi bilan birga miqdorning ham o‘zgarmasligi",
"Har bir narxda xaridorlar kamroq miqdorni sotib olishga tayyor bo‘lishi"
],
"c": 3,
"w": "Talab pasayishi — butun egri chiziqning chapga siljishi.",
"k": "th"
},
{
"t": 2,
"q": "Talab Qd = 100 − 2P, taklif Qs = −20 + 4P. Muvozanat tovar miqdori qancha?",
"o": [
"80",
"66,67",
"60",
"20"
],
"c": 2,
"w": "100 − 2P = −20 + 4P → P* = 20; Q* = 100 − 2·20 = 60.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 120 − 3P, taklif Qs = −30 + 3P. Muvozanat tovar miqdori qancha?",
"o": [
"75",
"25",
"45",
"60"
],
"c": 2,
"w": "120 − 3P = −30 + 3P → P* = 25; Q* = 120 − 3·25 = 45.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 150 − 5P, taklif Qs = −30 + 10P. Muvozanat tovar miqdori qancha?",
"o": [
"120",
"90",
"12",
"100"
],
"c": 1,
"w": "150 − 5P = −30 + 10P → P* = 12; Q* = 150 − 5·12 = 90.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 90 − P, taklif Qs = −30 + 2P. Muvozanat tovar miqdori qancha?",
"o": [
"80",
"60",
"50",
"40"
],
"c": 2,
"w": "90 − 1P = −30 + 2P → P* = 40; Q* = 90 − 1·40 = 50.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 100 − 2P, taklif Qs = −20 + 4P. Hukumat narxning quyi chegarasini P = 25 etib belgilasa, bozorda qancha ortiqcha taklif (tovar ortiqchaligi) vujudga keladi?",
"o": [
"50",
"15",
"30",
"80"
],
"c": 2,
"w": "P = 25 da Qd = 50, Qs = 80; ortiqchalik = Qs − Qd = 30.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 120 − 3P, taklif Qs = −30 + 3P. Hukumat narxning quyi chegarasini P = 28 etib belgilasa, bozorda qancha ortiqcha taklif (tovar ortiqchaligi) vujudga keladi?",
"o": [
"36",
"18",
"9",
"54"
],
"c": 1,
"w": "P = 28 da Qd = 36, Qs = 54; ortiqchalik = Qs − Qd = 18.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 150 − 5P, taklif Qs = −30 + 10P. Hukumat narxning quyi chegarasini P = 16 etib belgilasa, bozorda qancha ortiqcha taklif (tovar ortiqchaligi) vujudga keladi?",
"o": [
"60",
"30",
"70",
"130"
],
"c": 0,
"w": "P = 16 da Qd = 70, Qs = 130; ortiqchalik = Qs − Qd = 60.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 90 − P, taklif Qs = −30 + 2P. Hukumat narxning quyi chegarasini P = 50 etib belgilasa, bozorda qancha ortiqcha taklif (tovar ortiqchaligi) vujudga keladi?",
"o": [
"15",
"70",
"30",
"40"
],
"c": 2,
"w": "P = 50 da Qd = 40, Qs = 70; ortiqchalik = Qs − Qd = 30.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 120 − 2P, taklif Qs = −20 + 2P. Sotuvchilardan har bir sotilgan birlik uchun 10 so‘m solig‘ qo‘yildi. Davlat byudjetiga tushadigan soliq tushumi qancha (so‘m)?",
"o": [
"500",
"400",
"800",
"420"
],
"c": 1,
"w": "Soliqdan keyin taklif Qs = −20 + 2(P − 10). Muvozanat: P = 40, Q = 40. Tushum = 10·40 = 400.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 100 − 3P, taklif Qs = −20 + 3P. Sotuvchilardan har bir sotilgan birlik uchun 6 so‘m solig‘ qo‘yildi. Davlat byudjetiga tushadigan soliq tushumi qancha (so‘m)?",
"o": [
"138",
"186",
"204",
"240"
],
"c": 1,
"w": "Soliqdan keyin taklif Qs = −20 + 3(P − 6). Muvozanat: P = 23, Q = 31. Tushum = 6·31 = 186.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 200 − 4P, taklif Qs = −40 + 4P. Sotuvchilardan har bir sotilgan birlik uchun 8 so‘m solig‘ qo‘yildi. Davlat byudjetiga tushadigan soliq tushumi qancha (so‘m)?",
"o": [
"544",
"272",
"640",
"512"
],
"c": 3,
"w": "Soliqdan keyin taklif Qs = −40 + 4(P − 8). Muvozanat: P = 34, Q = 64. Tushum = 8·64 = 512.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 150 − 5P, taklif Qs = −30 + 5P. Sotuvchilardan har bir sotilgan birlik uchun 5 so‘m solig‘ qo‘yildi. Davlat byudjetiga tushadigan soliq tushumi qancha (so‘m)?",
"o": [
"262,5",
"300",
"237,5",
"102,5"
],
"c": 2,
"w": "Soliqdan keyin taklif Qs = −30 + 5(P − 5). Muvozanat: P = 20,5, Q = 47,5. Tushum = 5·47,5 = 237,5.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 100 − 2P, taklif Qs = −20 + 4P. Muvozanatda iste’molchi ortiqchaligi (consumer surplus) nimaga teng?",
"o": [
"600",
"1 500",
"3 000",
"900"
],
"c": 3,
"w": "Talab chizig‘ining narx o‘qi bilan kesishishi P = 50. CS = ½·(50 − 20)·60 = 900.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 120 − 3P, taklif Qs = −30 + 3P. Muvozanatda iste’molchi ortiqchaligi (consumer surplus) nimaga teng?",
"o": [
"337,5",
"562,5",
"900",
"1 800"
],
"c": 0,
"w": "Talab chizig‘ining narx o‘qi bilan kesishishi P = 40. CS = ½·(40 − 25)·45 = 337,5.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 150 − 5P, taklif Qs = −30 + 10P. Muvozanatda iste’molchi ortiqchaligi (consumer surplus) nimaga teng?",
"o": [
"810",
"540",
"1 350",
"2 700"
],
"c": 0,
"w": "Talab chizig‘ining narx o‘qi bilan kesishishi P = 30. CS = ½·(30 − 12)·90 = 810.",
"k": "pr"
},
{
"t": 2,
"q": "Talab Qd = 240 − 4P, taklif Qs = 8P. Muvozanatda iste’molchi ortiqchaligi (consumer surplus) nimaga teng?",
"o": [
"9 600",
"3 200",
"4 800",
"1 600"
],
"c": 1,
"w": "Talab chizig‘ining narx o‘qi bilan kesishishi P = 60. CS = ½·(60 − 20)·160 = 3 200.",
"k": "pr"
},
{
"t": 2,
"q": "Normal tovarga talab Qd = 100 − 2P + 2·I (I — daromad), taklif Qs = −20 + 4P. Daromad 6 birlikka oshsa, muvozanat narx qanchaga o‘zgaradi?",
"o": [
"2 ga oshadi",
"2 ga kamayadi",
"3 ga oshadi",
"6 ga oshadi"
],
"c": 0,
"w": "Daromad o‘zgarganda talab 2·6 = 12 birlikka siljiydi; ΔP = 12/(2+4) = 2 (normal tovar — narx oshadi).",
"k": "pr"
},
{
"t": 2,
"q": "Normal tovarga talab Qd = 120 − 3P + 3·I (I — daromad), taklif Qs = −30 + 3P. Daromad 6 birlikka oshsa, muvozanat narx qanchaga o‘zgaradi?",
"o": [
"3 ga oshadi",
"18 ga oshadi",
"3 ga kamayadi",
"6 ga oshadi"
],
"c": 0,
"w": "Daromad o‘zgarganda talab 3·6 = 18 birlikka siljiydi; ΔP = 18/(3+3) = 3 (normal tovar — narx oshadi).",
"k": "pr"
},
{
"t": 2,
"q": "Normal tovarga talab Qd = 150 − 5P + 5·I (I — daromad), taklif Qs = −30 + 10P. Daromad 6 birlikka oshsa, muvozanat narx qanchaga o‘zgaradi?",
"o": [
"2 ga oshadi",
"3 ga oshadi",
"2 ga kamayadi",
"6 ga oshadi"
],
"c": 0,
"w": "Daromad o‘zgarganda talab 5·6 = 30 birlikka siljiydi; ΔP = 30/(5+10) = 2 (normal tovar — narx oshadi).",
"k": "pr"
},
{
"t": 2,
"q": "Normal tovarga talab Qd = 90 − P + 3·I (I — daromad), taklif Qs = −30 + 2P. Daromad 5 birlikka oshsa, muvozanat narx qanchaga o‘zgaradi?",
"o": [
"15 ga oshadi",
"5 ga kamayadi",
"5 ga oshadi",
"7,5 ga oshadi"
],
"c": 2,
"w": "Daromad o‘zgarganda talab 3·5 = 15 birlikka siljiydi; ΔP = 15/(1+2) = 5 (normal tovar — narx oshadi).",
"k": "pr"
},
{
"t": 3,
"q": "Talabning narx bo‘yicha elastikligi nimani o‘lchaydi?",
"o": [
"Narx 1 foizga o‘zgarganda talab qilingan miqdor necha foizga o‘zgarishini",
"Miqdor 1 foizga o‘zgarganda narx necha foizga o‘zgarishini",
"Daromad 1 foizga o‘zgarganda talab qilingan miqdor necha foizga o‘zgarishini",
"Narx 1 so‘mga o‘zgarganda talab qilingan miqdor necha birlikka o‘zgarishini"
],
"c": 0,
"w": "E_d = %ΔQd / %ΔP.",
"k": "th"
},
{
"t": 3,
"q": "Talab elastik deyiladi, agar...",
"o": [
"Elastiklik moduli aynan 1 ga teng bo‘lsa va narx o‘zgarmasa",
"Elastiklik moduli 1 dan kichik bo‘lsa, ya’ni miqdor foizi narx foizidan kam o‘zgarsa",
"Elastiklik moduli 1 dan katta bo‘lsa, ya’ni miqdor foizi narx foizidan ko‘p o‘zgarsa",
"Talab egri chizig‘i vertikal bo‘lib, narx o‘zgarishiga miqdor javob bermasa"
],
"c": 2,
"w": "|E| > 1 — elastik; |E| < 1 — noelastik; |E| = 1 — birlik elastik.",
"k": "th"
},
{
"t": 3,
"q": "Talab noelastik (|E| < 1) bo‘lganda narx oshsa, sotuvchi tushumi...",
"o": [
"O‘zgarmaydi, chunki narx va miqdor ta’siri bir xil bo‘ladi",
"Avval oshib, so‘ng nolga tushadi",
"Kamayadi, chunki miqdor kamayishi foizi narx oshishi foizidan ko‘p bo‘ladi",
"Oshadi, chunki miqdor kamayishi foizi narx oshishi foizidan kam bo‘ladi"
],
"c": 3,
"w": "Noelastik talab: narx ↑ → TR ↑.",
"k": "th"
},
{
"t": 3,
"q": "Talab elastik (|E| > 1) bo‘lganda narx oshsa, sotuvchi tushumi...",
"o": [
"Oshadi, chunki miqdor kamayishi foizi narx oshishi foizidan kam bo‘ladi",
"Faqat taklif elastik bo‘lsagina kamayadi",
"Kamayadi, chunki miqdor kamayishi foizi narx oshishi foizidan ko‘p bo‘ladi",
"O‘zgarmaydi, chunki talab elastikligi tushumga ta’sir qilmaydi"
],
"c": 2,
"w": "Elastik talab: narx ↑ → TR ↓.",
"k": "th"
},
{
"t": 3,
"q": "Birlik elastik talabda (|E| = 1) narx o‘zgarishi tushumga qanday ta’sir qiladi?",
"o": [
"Tushum narx pasayishi bilan keskin ortadi",
"Tushum doim oshadi va nol nuqtadan boshlanadi",
"Tushum o‘zgarmaydi va maksimal darajada bo‘ladi",
"Tushum doim kamayadi va minimumga tushadi"
],
"c": 2,
"w": "|E| = 1 nuqtada TR maksimum.",
"k": "th"
},
{
"t": 3,
"q": "Chiziqli (to‘g‘ri chiziqli) talab egri chizig‘ining turli nuqtalarida elastiklik...",
"o": [
"Turlicha bo‘ladi: yuqori narxlarda noelastik, past narxlarda elastik bo‘lib boradi",
"Hamma nuqtalarda bir xil bo‘ladi, chunki qiyalik o‘zgarmaydi va elastiklik ham o‘zgarmaydi",
"Doim birlik elastik bo‘ladi, chunki talab chizig‘i to‘g‘ri chiziq shaklida bo‘ladi",
"Turlicha bo‘ladi: yuqori narxlarda elastik, past narxlarda noelastik"
],
"c": 3,
"w": "Qiyalik doimiy, lekin E = (1/qiyalik)·(P/Q) o‘zgaradi.",
"k": "th"
},
{
"t": 3,
"q": "Mutlaq elastik talab (E = ∞) egri chizig‘i qanday ko‘rinishda bo‘ladi?",
"o": [
"Pastga qiyalangan to‘g‘ri chiziq",
"Giperbola",
"Gorizontal chiziq",
"Vertikal chiziq"
],
"c": 2,
"w": "Narx biroz o‘zgarsa, miqdor nolga yoki cheksizga o‘tadi.",
"k": "th"
},
{
"t": 3,
"q": "Mutlaq noelastik talab (E = 0) egri chizig‘i qanday ko‘rinishda bo‘ladi?",
"o": [
"Koordinata boshidan o‘tuvchi nur",
"Yuqoriga qiyalangan to‘g‘ri chiziq",
"Gorizontal chiziq",
"Vertikal chiziq"
],
"c": 3,
"w": "Narx qanday bo‘lsa ham miqdor o‘zgarmaydi.",
"k": "th"
},
{
"t": 3,
"q": "Talab elastikligini aniqlovchi omillardan qaysi biri to‘g‘ri ko‘rsatilgan?",
"o": [
"Sotuvchilar soni va ularning o‘zaro kelishuvi mavjudligi",
"Tovarni ishlab chiqarishda qo‘llaniladigan texnologiya turi",
"Davlat tomonidan belgilangan soliq stavkasining miqdori",
"O‘rinbosar tovarlarning mavjudligi va ularning soni"
],
"c": 3,
"w": "Substitutlar ko‘p bo‘lsa — talab elastik.",
"k": "th"
},
{
"t": 3,
"q": "Zaruriy tovarlar (non, tuz) talabi odatda...",
"o": [
"Elastik bo‘ladi, chunki bunday tovarlarni xohlagan vaqtda almashtirish mumkin",
"Mutlaq elastik bo‘ladi, chunki ular ko‘p sotuvchilar tomonidan taklif etiladi",
"Birlik elastik bo‘ladi, chunki ularga sarf daromadning teng qismiga to‘g‘ri keladi",
"Noelastik bo‘ladi, chunki iste’molchi narx oshganda ham ularni xarid qilishda davom etadi"
],
"c": 3,
"w": "Zaruriy tovarlarda o‘rinbosar kam → noelastik.",
"k": "th"
},
{
"t": 3,
"q": "Hashamatli tovarlar (yaxta, zargarlik) talabi odatda...",
"o": [
"Noelastik bo‘ladi, chunki ular hayot uchun zarur hisoblanadi",
"Elastiklik daromaddan mustaqil bo‘ladi",
"Mutlaq noelastik bo‘ladi, chunki ularga talab daromadga bog‘liq emas",
"Elastik bo‘ladi, chunki narx oshganda ulardan voz kechish oson"
],
"c": 3,
"w": "Hashamatli tovar: o‘rinbosarlar ko‘p, voz kechish oson → elastik.",
"k": "th"
},
{
"t": 3,
"q": "Vaqt bo‘yicha talab elastikligi qanday o‘zgaradi?",
"o": [
"Uzoq muddatda talab qisqa muddatdagiga qaraganda noelastikroq bo‘lib, kamroq moslashadi",
"Uzoq muddatda iste’molchilar moslashishga ulgurgani uchun talab elastiklashadi",
"Qisqa muddatda talab doim mutlaq elastik bo‘ladi, uzoq muddatda esa mutlaq noelastik",
"Vaqt omili elastiklikka ta’sir qilmaydi, shuning uchun talab elastikligi o‘zgarmaydi"
],
"c": 1,
"w": "Masalan, benzin narxi oshganda uzoq muddatda tejamkor avtomobilga o‘tiladi.",
"k": "th"
},
{
"t": 3,
"q": "Bozor keng belgilangan tovarlar (masalan, «oziq-ovqat») talabi, tor belgilangan tovarlarga (masalan, «shokolad») nisbatan...",
"o": [
"Noelastikroq bo‘ladi, chunki keng toifaning o‘rinbosarlari kamroq",
"Mutlaq elastik bo‘ladi",
"Elastikroq bo‘ladi, chunki keng toifada o‘rinbosarlar ko‘proq",
"Aynan bir xil elastiklikka ega bo‘ladi"
],
"c": 0,
"w": "Tor toifada o‘rinbosarlar ko‘p — elastik; keng toifa — noelastik.",
"k": "th"
},
{
"t": 3,
"q": "Daromad bo‘yicha talab elastikligi manfiy bo‘lsa, tovar...",
"o": [
"Normal tovar hisoblanadi",
"Giffen tovarining mutlaq belgisi sifatida talqin etiladi",
"Past toifali (inferior) tovar hisoblanadi",
"Hashamatli tovar hisoblanadi"
],
"c": 2,
"w": "E_I < 0 → inferior; 0 < E_I < 1 → zaruriy; E_I > 1 → hashamatli.",
"k": "th"
},
{
"t": 3,
"q": "Daromad bo‘yicha elastiklik 1 dan katta bo‘lsa, tovar...",
"o": [
"Daromadga umuman bog‘liq bo‘lmagan, narx o‘zgarishiga javob beruvchi tovar bo‘ladi",
"Hashamatli (luxury) tovar bo‘lib, tovarga sarfda daromadning ulushi ortadi",
"Past toifali tovar bo‘lib, daromad oshganda unga bo‘lgan talab kamayib boradi",
"Zaruriy tovar bo‘lib, daromad oshganda unga sarfda daromadning ulushi kamayadi"
],
"c": 1,
"w": "E_I > 1 → daromad ulushi tovarga oshadi.",
"k": "th"
},
{
"t": 3,
"q": "Daromad bo‘yicha elastiklik 0 dan 1 gacha bo‘lsa, tovar...",
"o": [
"Hashamatli tovar: daromad oshganda talab daromad o‘sishidan ham tezroq oshib boradi",
"Mustaqil tovar: daromad oshganda ham talab umuman o‘zgarmay, o‘sha darajada qoladi",
"Past toifali tovar: daromad oshganda talab kamayib, daromad o‘sishiga teskari bo‘ladi",
"Zaruriy normal tovar: daromad oshganda talab oshadi, lekin daromad o‘sishidan sekinroq"
],
"c": 3,
"w": "0 < E_I < 1: zaruriy tovar.",
"k": "th"
},
{
"t": 3,
"q": "Talabning o‘zaro (kesishgan) elastikligi musbat bo‘lsa, ikki tovar...",
"o": [
"O‘rinbosar (substitut) bo‘ladi",
"To‘ldiruvchi (komplement) bo‘ladi",
"Bir-biriga bog‘liq bo‘lmagan tovar bo‘ladi",
"Ikkalasi ham past toifali tovar bo‘ladi"
],
"c": 0,
"w": "E_xy > 0 → substitut; < 0 → komplement.",
"k": "th"
},
{
"t": 3,
"q": "Talabning o‘zaro elastikligi manfiy bo‘lsa, ikki tovar...",
"o": [
"Mustaqil tovarlar bo‘ladi",
"To‘ldiruvchi (komplement) bo‘ladi",
"O‘rinbosar (substitut) bo‘ladi",
"Hashamatli tovarlar bo‘ladi"
],
"c": 1,
"w": "Biri qimmatlashsa, ikkinchisiga talab kamayadi.",
"k": "th"
},
{
"t": 3,
"q": "Taklifning narx bo‘yicha elastikligi nimani bildiradi?",
"o": [
"Narx 1 foizga o‘zgarganda talab qilingan miqdor necha foizga o‘zgarishini",
"Taklif 1 birlikka o‘zgarganda narx necha so‘mga o‘zgarishini",
"Xarajat 1 foizga o‘zgarganda narx necha foizga o‘zgarishini",
"Narx 1 foizga o‘zgarganda taklif qilingan miqdor necha foizga o‘zgarishini"
],
"c": 3,
"w": "E_s = %ΔQs / %ΔP.",
"k": "th"
},
{
"t": 3,
"q": "Taklif elastikligini belgilovchi asosiy omil qaysi?",
"o": [
"Sotuvchilarning ishlab chiqarish hajmini narx o‘zgarishiga moslashtira olish imkoniyati",
"Tovarning narxi va sifati o‘rtasidagi nisbat hamda xaridorlarning narxga sezgirligi",
"Iste’molchilarning daromad darajasi va ularning didlari hamda kutishlari o‘zgarishi",
"Xaridorlarning didi va kutishlari hamda o‘rinbosar tovarlarning mavjudligi va soni"
],
"c": 0,
"w": "Moslashish imkoniyati (quvvat, resurs, vaqt) taklif elastikligini belgilaydi.",
"k": "th"
},
{
"t": 3,
"q": "Qisqa muddatda taklif odatda...",
"o": [
"Elastikroq bo‘ladi, chunki firmalar ishlab chiqarish quvvatini darhol kengaytira oladi",
"Uzoq muddatdagiga teng elastiklikka ega bo‘ladi, chunki firmalar o‘zgarishga tayyor turadi",
"Mutlaq elastik bo‘ladi, chunki firmalar narx o‘zgarishiga zudlik bilan javob beradi",
"Noelastikroq bo‘ladi, chunki firmalar ishlab chiqarish quvvatini tez o‘zgartira olmaydi"
],
"c": 3,
"w": "Uzoq muddatda quvvat va texnologiya o‘zgaradi → taklif elastikroq.",
"k": "th"
},
{
"t": 3,
"q": "Talab va taklif elastikligi soliq yukining taqsimlanishiga qanday ta’sir qiladi?",
"o": [
"Soliq yuki elastiklikdan qat’i nazar teng taqsimlanadi",
"Soliq yukini doim iste’molchi ko‘taradi",
"Soliq yukini nisbatan elastik tomon ko‘proq ko‘taradi",
"Soliq yukini nisbatan noelastik tomon ko‘proq ko‘taradi"
],
"c": 3,
"w": "Moslasha olmaydigan tomon ko‘proq to‘laydi.",
"k": "th"
},
{
"t": 3,
"q": "Taklif mutlaq noelastik bo‘lsa (masalan, yer), unga solingan soliq yukini...",
"o": [
"To‘liq sotuvchi (yer egasi) ko‘taradi",
"To‘liq iste’molchi ko‘taradi",
"Hech kim ko‘tarmaydi, soliq yo‘qoladi",
"Teng ravishda ikkala tomon ko‘taradi"
],
"c": 0,
"w": "Vertikal taklif: narx o‘zgarmaydi, sotuvchi qo‘lga oladigan narx soliq miqdoricha tushadi.",
"k": "th"
},
{
"t": 3,
"q": "Sotuvchi tushumi narx o‘zgarishi bilan qanday bog‘liq bo‘lsa, talab noelastik hisoblanadi?",
"o": [
"Narx va tushum qarama-qarshi yo‘nalishda o‘zgarsa",
"Narx pasayganda tushum oshsa",
"Narx va tushum bir yo‘nalishda o‘zgarsa",
"Narx o‘zgarganda tushum doimo o‘zgarmay qolsa"
],
"c": 2,
"w": "Narx ↑ va TR ↑ — noelastik.",
"k": "th"
},
{
"t": 3,
"q": "Mamlakatda qishloq xo‘jaligi hosili ko‘paysa, dehqonlar umumiy tushumi ko‘pincha...",
"o": [
"O‘zgarmaydi, chunki hosil va narx ta’siri teng bo‘ladi",
"Oshadi, chunki oziq-ovqatga talab elastik bo‘lib, miqdor keskin oshadi",
"Faqat eksport mavjud bo‘lgandagina kamayadi",
"Kamayadi, chunki oziq-ovqatga talab noelastik bo‘lib, narx keskin tushadi"
],
"c": 3,
"w": "Hosil ko‘paysa taklif ↑, noelastik talabda narx keskin tushadi → TR ↓ («qishloq xo‘jaligi paradoksi»).",
"k": "th"
},
{
"t": 3,
"q": "Egri chiziq bo‘ylab tovar narxi 10 dan 20 ga oshganda, o‘rta nuqta usulida narx o‘zgarishi foizi qanday hisoblanadi?",
"o": [
"(20 − 10) / ((20 + 10)/2) × 100 ≈ 66,7%",
"(20 − 10) / 10 × 100 = 100%",
"(20 − 10) / (20 × 10) × 100 = 5%",
"(20 − 10) / 20 × 100 = 50%"
],
"c": 0,
"w": "Arc usulida bazani o‘rtacha qiymat sifatida oladi: yo‘nalishga bog‘liq emas.",
"k": "th"
},
{
"t": 3,
"q": "O‘rta nuqta (arc) usulining afzalligi nimada?",
"o": [
"Elastiklik narx o‘zgarishining yo‘nalishiga (oshish yoki pasayish) bog‘liq bo‘lmaydi",
"U faqat noelastik talab uchun qo‘llanadi, elastik talabda esa natija aniq chiqmaydi",
"U har doim elastiklikni aynan 1 ga teng qilib beradi va tushumni maksimallashtiradi",
"U miqdor o‘zgarishini hisobga olmaydi, faqat narx o‘zgarishiga qarab hisoblab chiqadi"
],
"c": 0,
"w": "Arc usuli simmetrik: A→B va B→A bir xil natija beradi.",
"k": "th"
},
{
"t": 3,
"q": "Nuqtaviy elastiklik chiziqli talab Q = a − bP uchun qaysi formula bilan topiladi?",
"o": [
"E = b · Q / P",
"E = Q / (b · P)",
"E = b · P / Q",
"E = a · P / Q"
],
"c": 2,
"w": "dQ/dP = −b; E = (dQ/dP)·(P/Q) = −bP/Q.",
"k": "th"
},
{
"t": 3,
"q": "Talab funksiyasi Q = 100 − 2P bo‘lsa, birlik elastiklik nuqtasi qaysi narxga to‘g‘ri keladi?",
"o": [
"P = 20",
"P = 10",
"P = 50",
"P = 25"
],
"c": 3,
"w": "E = 2P/(100 − 2P) = 1 → 2P = 100 − 2P → P = 25.",
"k": "th"
},
{
"t": 3,
"q": "Qaysi holda talab egri chizig‘i bo‘ylab harakat jarayonida tushum maksimal bo‘ladi?",
"o": [
"Talab mutlaq noelastik bo‘lgan nuqtada",
"Narx nolga teng bo‘lgan nuqtada",
"Talab mutlaq elastik bo‘lgan nuqtada",
"Talab birlik elastik bo‘lgan nuqtada"
],
"c": 3,
"w": "TR maksimum: MR = 0, |E| = 1.",
"k": "th"
},
{
"t": 3,
"q": "Sotuvchi tushumini oshirmoqchi va talab elastik. U qanday qaror qabul qilishi kerak?",
"o": [
"Ishlab chiqarishni to‘xtatishi kerak",
"Narxni pasaytirishi kerak, chunki miqdor oshishi foizi narx pasayishi foizidan ko‘p bo‘ladi",
"Narxni o‘zgartirmasligi kerak, chunki tushum elastiklikka bog‘liq emas",
"Narxni oshirishi kerak, chunki miqdor kamayishi foizi narx oshishi foizidan kam bo‘ladi"
],
"c": 1,
"w": "Elastik talabda narx ↓ → TR ↑.",
"k": "th"
},
{
"t": 3,
"q": "Giffen tovari uchun talabning narx bo‘yicha egri chizig‘i...",
"o": [
"Yuqoriga qiyalangan bo‘ladi, chunki daromad samarasi almashtirish samarasidan kuchli",
"Vertikal bo‘ladi, chunki talab qilingan miqdor narx o‘zgarishiga umuman bog‘liq bo‘lmaydi",
"Pastga qiyalangan bo‘ladi, chunki almashtirish samarasi har doim daromad samarasidan kuchli",
"Gorizontal bo‘ladi, chunki iste’molchilar narxning har qanday o‘zgarishiga bir xil javob beradi"
],
"c": 0,
"w": "Giffen: narx ↑ → miqdor ↑ (past toifali tovar, kuchli daromad samarasi).",
"k": "th"
},
{
"t": 3,
"q": "Talab egri chizig‘i bo‘ylab joylashgan ikki nuqta orasida elastiklik 2 ga teng. Narx 5 foizga oshsa, miqdor...",
"o": [
"Taxminan 7 foizga kamayadi",
"Taxminan 10 foizga kamayadi",
"Taxminan 2,5 foizga kamayadi",
"Taxminan 10 foizga oshadi"
],
"c": 1,
"w": "%ΔQ = E · %ΔP = 2·5 = 10% (kamayish).",
"k": "th"
},
{
"t": 3,
"q": "Hukumat sigaretaga aktsiz soliqni oshirdi. Talab noelastik. Natijada...",
"o": [
"Soliq tushumi kamayadi, chunki iste’mol keskin pasayadi",
"Sigaret narxi pasayadi",
"Soliq tushumi o‘zgarmaydi, chunki miqdor kamayishi tushumni qoplaydi",
"Soliq tushumi oshadi, chunki iste’mol miqdori nisbatan kam kamayadi"
],
"c": 3,
"w": "Noelastik talab → soliq bazasi (miqdor) kam kamayadi.",
"k": "th"
},
{
"t": 3,
"q": "Quyidagi tovar juftligidan qaysi biri uchun talabning o‘zaro elastikligi musbat bo‘lishi eng ehtimol?",
"o": [
"Sariyog‘ va margarin",
"Avtomobil va benzin",
"Qalam va qog‘oz",
"Printer va uning kartridji"
],
"c": 0,
"w": "Sariyog‘ va margarin — o‘rinbosarlar (E_xy > 0).",
"k": "th"
},
{
"t": 3,
"q": "Taklif elastikligi 1 dan katta bo‘lsa (elastik taklif), narx 10 foizga oshganda taklif qilinadigan miqdor...",
"o": [
"Aynan 10 foizga kamayadi",
"10 foizdan kamroq oshadi",
"10 foizdan ko‘proq oshadi",
"Hech o‘zgarmaydi"
],
"c": 2,
"w": "E_s > 1: miqdor foizi narx foizidan katta.",
"k": "th"
},
{
"t": 3,
"q": "Egri chiziq qiyaligi va elastiklik o‘rtasidagi farq qaysi javobda to‘g‘ri aytilgan?",
"o": [
"Qiyalik va elastiklik doim bir xil kattalikdir",
"Qiyalik foizli o‘zgarishlar nisbati, elastiklik esa absolyut o‘zgarishlar nisbatidir",
"Qiyalik absolyut o‘zgarishlar nisbati, elastiklik esa foizli o‘zgarishlar nisbatidir",
"Elastiklik faqat taklif egri chizig‘i uchun, qiyalik faqat talab uchun hisoblanadi"
],
"c": 2,
"w": "Qiyalik birliklarga bog‘liq; elastiklik o‘lchovsiz.",
"k": "th"
},
{
"t": 3,
"q": "Talabning narx bo‘yicha elastikligi qaysi tovar uchun eng yuqori bo‘lishi kutiladi?",
"o": [
"Yagona ishlab chiqaruvchisi bor, hayot uchun zarur dori vositasi",
"Ko‘plab yaqin o‘rinbosarlari bor, daromadning katta qismini egallovchi tovar",
"Yaqin o‘rinbosari yo‘q, daromadning juda kichik qismini egallovchi zaruriy tovar",
"Daromadning ahamiyatsiz qismini egallovchi odatiy zaruriy tovar"
],
"c": 1,
"w": "Substitutlar ko‘p va byudjet ulushi katta → elastik.",
"k": "th"
},
{
"t": 3,
"q": "Narxning 1% oshishi talab qilinadigan miqdorni 0,4% kamaytirsa, bu talab...",
"o": [
"Birlik elastik, chunki o‘zgarishlar mos keladi",
"Noelastik, chunki |E| = 0,4 < 1",
"Elastik, chunki |E| = 0,4 < 1",
"Mutlaq noelastik, chunki E ≠ 0"
],
"c": 1,
"w": "|E| = 0,4 → noelastik.",
"k": "th"
},
{
"t": 3,
"q": "Tushum o‘zgarishining taxminiy formulasi (kichik o‘zgarishlar): %ΔTR ≈",
"o": [
"%ΔP + %ΔQ",
"%ΔP − %ΔQ",
"%ΔP · %ΔQ",
"%ΔP / %ΔQ"
],
"c": 0,
"w": "TR = P·Q → logarifmik hosila: %ΔTR ≈ %ΔP + %ΔQ.",
"k": "th"
},
{
"t": 3,
"q": "Narx elastikligi doimiy bo‘lgan talab egri chizig‘i (masalan, Q = A·P^(−e)) qanday ko‘rinishda bo‘ladi?",
"o": [
"Gorizontal chiziq ko‘rinishida bo‘ladi va barcha narxlarda bir xil qolaveradi",
"Koordinata boshiga qavariq, giperbolasimon egri chiziq ko‘rinishida bo‘ladi",
"Yuqoriga qiyalangan egri chiziq ko‘rinishida bo‘lib, narx bilan birga o‘sib boradi",
"Pastga qiyalangan to‘g‘ri chiziq ko‘rinishida bo‘ladi va qiyaligi o‘zgarmaydi"
],
"c": 1,
"w": "Doimiy elastiklikli talab — darajali funksiya.",
"k": "th"
},
{
"t": 3,
"q": "Soliq to‘lovchining qonuniy to‘lovchi bilan iqtisodiy yukni ko‘taruvchi o‘rtasidagi farq nimani bildiradi?",
"o": [
"Soliqni kim to‘lashidan qat’i nazar, yukni bozor elastikligi taqsimlashini",
"Soliq yukining faqat iste’molchilar zimmasiga tushishini va sotuvchiga ta’sir qilmasligini",
"Soliq yukining faqat davlatga o‘tishini va bozor ishtirokchilariga ta’sir qilmasligini",
"Qonuniy to‘lovchi soliq yukini doimo to‘liq o‘zi ko‘tarishini va boshqa tomonga o‘tkazmasligini"
],
"c": 0,
"w": "Tushish nazariyasi: yuk talab va taklif elastikligiga bog‘liq.",
"k": "th"
},
{
"t": 3,
"q": "Talab egri chizig‘i o‘ngga siljiganda, elastiklikning o‘zgarishi...",
"o": [
"Har bir narxda miqdor oshadi, elastiklik esa shu nuqtadagi P/Q nisbatiga bog‘liq o‘zgaradi",
"Elastiklik har doim kamayadi, chunki talab oshgan sari narxga sezgirlik ham pasayib ketadi",
"Elastiklik har doim oshadi, chunki talab oshgan sari narxga sezgirlik ham ortib boradi",
"Elastiklik hech qachon o‘zgarmaydi, chunki egri chiziq siljiganda uning shakli saqlanadi"
],
"c": 0,
"w": "E = bP/Q: Q o‘zgarsa, E ham o‘zgaradi.",
"k": "th"
},
{
"t": 3,
"q": "Qaysi omil taklifning elastikligini oshiradi?",
"o": [
"Ishlab chiqarish texnologiyasining o‘zgarmasligi va resurslarning noyobligi",
"Resurslarning kamyobligi va mavjud quvvatning to‘liq yuklanganligi",
"Qisqa vaqt oralig‘ida tez qaror qabul qilish zarurati",
"Zaxira (ombor) tovar va bo‘sh ishlab chiqarish quvvatining mavjudligi"
],
"c": 3,
"w": "Bo‘sh quvvat va zaxira → narx ↑ da taklifni tez oshirish mumkin.",
"k": "th"
},
{
"t": 3,
"q": "Talab elastikligi 0,5 bo‘lgan tovar narxi 20 foizga oshirilsa, sotuvchining tushumi taxminan...",
"o": [
"O‘zgarmaydi",
"10 foizga kamayadi",
"20 foizga oshadi",
"10 foizga oshadi"
],
"c": 3,
"w": "Miqdor 10% ga kamayadi; %ΔTR ≈ 20 − 10 = +10%.",
"k": "th"
},
{
"t": 3,
"q": "Kesishgan elastiklik koeffitsiyenti 0 ga yaqin bo‘lsa, ikki tovar...",
"o": [
"Ikkalasi ham hashamatli tovarlar hisoblanib, daromad oshganda ularga talab keskin ortadi",
"Bir-birining kuchli o‘rinbosarlari hisoblanib, biri qimmatlashsa ikkinchisiga talab oshadi",
"Bir-biriga deyarli bog‘liq bo‘lmagan (mustaqil) tovarlar hisoblanadi",
"Bir-birini to‘ldiruvchi tovarlar hisoblanib, biri qimmatlashsa ikkinchisiga talab kamayadi"
],
"c": 2,
"w": "E_xy ≈ 0: bir tovar narxi o‘zgarishi ikkinchisi talabiga ta’sir qilmaydi.",
"k": "th"
},
{
"t": 3,
"q": "Taklif elastikligi talab elastikligidan katta bo‘lgan bozorda birlik soliq kiritilsa...",
"o": [
"Soliq yukining ko‘p qismini iste’molchi ko‘taradi",
"Soliq yuki ikki tomon o‘rtasida albatta teng bo‘linadi",
"Soliq yukining ko‘p qismini sotuvchi ko‘taradi",
"Soliq yukini hech kim ko‘tarmaydi"
],
"c": 0,
"w": "Kamroq elastik tomon (talab) ko‘proq yuk ko‘taradi.",
"k": "th"
},
{
"t": 3,
"q": "Narx 10 dan 12 so‘mga o‘zgarganda talab qilingan miqdor 60 dan 50 ga o‘zgardi. O‘rta nuqta (arc) usuli bo‘yicha talabning narx bo‘yicha elastikligi moduli qancha?",
"o": [
"1,2",
"5",
"0,83",
"1"
],
"c": 3,
"w": "E = |ΔQ/Q̄| : |ΔP/P̄| = |-10/55| : |2/11| = 1.",
"k": "pr"
},
{
"t": 3,
"q": "Narx 20 dan 25 so‘mga o‘zgarganda talab qilingan miqdor 100 dan 70 ga o‘zgardi. O‘rta nuqta (arc) usuli bo‘yicha talabning narx bo‘yicha elastikligi moduli qancha?",
"o": [
"6",
"1,2",
"0,63",
"1,59"
],
"c": 3,
"w": "E = |ΔQ/Q̄| : |ΔP/P̄| = |-30/85| : |5/22,5| = 1,59.",
"k": "pr"
},
{
"t": 3,
"q": "Narx 8 dan 10 so‘mga o‘zgarganda talab qilingan miqdor 90 dan 60 ga o‘zgardi. O‘rta nuqta (arc) usuli bo‘yicha talabning narx bo‘yicha elastikligi moduli qancha?",
"o": [
"1,8",
"0,56",
"1,33",
"15"
],
"c": 0,
"w": "E = |ΔQ/Q̄| : |ΔP/P̄| = |-30/75| : |2/9| = 1,8.",
"k": "pr"
},
{
"t": 3,
"q": "Narx 50 dan 40 so‘mga o‘zgarganda talab qilingan miqdor 200 dan 260 ga o‘zgardi. O‘rta nuqta (arc) usuli bo‘yicha talabning narx bo‘yicha elastikligi moduli qancha?",
"o": [
"0,85",
"1,17",
"6",
"1,5"
],
"c": 1,
"w": "E = |ΔQ/Q̄| : |ΔP/P̄| = |60/230| : |-10/45| = 1,17.",
"k": "pr"
},
{
"t": 3,
"q": "Talabning narx bo‘yicha elastikligi (modul) 2 ga teng. Narx 10% ga oshirilsa (talab o‘zgarishi aniq hisoblansin), sotuvchining tushumi qanday o‘zgaradi?",
"o": [
"-20% ga o‘zgaradi",
"-12% ga o‘zgaradi",
"10% ga oshadi",
"-10% ga o‘zgaradi"
],
"c": 1,
"w": "Miqdor 20% ga kamayadi: (1 + 0,1)·(1 − 0,2) − 1 = -0,12; tushum -12% ga o‘zgaradi.",
"k": "pr"
},
{
"t": 3,
"q": "Talabning narx bo‘yicha elastikligi (modul) 3 ga teng. Narx 5% ga oshirilsa (talab o‘zgarishi aniq hisoblansin), sotuvchining tushumi qanday o‘zgaradi?",
"o": [
"-15% ga o‘zgaradi",
"-10,75% ga o‘zgaradi",
"-10% ga o‘zgaradi",
"5% ga oshadi"
],
"c": 1,
"w": "Miqdor 15% ga kamayadi: (1 + 0,05)·(1 − 0,15) − 1 = -0,11; tushum -10,75% ga o‘zgaradi.",
"k": "pr"
},
{
"t": 3,
"q": "Talabning narx bo‘yicha elastikligi (modul) 1,5 ga teng. Narx 20% ga oshirilsa (talab o‘zgarishi aniq hisoblansin), sotuvchining tushumi qanday o‘zgaradi?",
"o": [
"20% ga oshadi",
"-10% ga o‘zgaradi",
"-30% ga o‘zgaradi",
"-16% ga o‘zgaradi"
],
"c": 3,
"w": "Miqdor 30% ga kamayadi: (1 + 0,2)·(1 − 0,3) − 1 = -0,16; tushum -16% ga o‘zgaradi.",
"k": "pr"
},
{
"t": 3,
"q": "Talabning narx bo‘yicha elastikligi (modul) 4 ga teng. Narx 5% ga oshirilsa (talab o‘zgarishi aniq hisoblansin), sotuvchining tushumi qanday o‘zgaradi?",
"o": [
"-20% ga o‘zgaradi",
"-16% ga o‘zgaradi",
"-15% ga o‘zgaradi",
"5% ga oshadi"
],
"c": 1,
"w": "Miqdor 20% ga kamayadi: (1 + 0,05)·(1 − 0,2) − 1 = -0,16; tushum -16% ga o‘zgaradi.",
"k": "pr"
},
{
"t": 3,
"q": "Talab funksiyasi Q = 120 − 4P. Narx P = 10 bo‘lgan nuqtada talabning narx bo‘yicha elastikligi (modul) nechaga teng?",
"o": [
"2",
"4",
"0,5",
"0,12"
],
"c": 2,
"w": "E = b·P/Q = 4·10/80 = 0,5.",
"k": "pr"
},
{
"t": 3,
"q": "Talab funksiyasi Q = 120 − 4P. Narx P = 20 bo‘lgan nuqtada talabning narx bo‘yicha elastikligi (modul) nechaga teng?",
"o": [
"0,67",
"4",
"0,5",
"2"
],
"c": 3,
"w": "E = b·P/Q = 4·20/40 = 2.",
"k": "pr"
},
{
"t": 3,
"q": "Talab funksiyasi Q = 200 − 5P. Narx P = 20 bo‘lgan nuqtada talabning narx bo‘yicha elastikligi (modul) nechaga teng?",
"o": [
"0,5",
"5",
"0,2",
"1"
],
"c": 3,
"w": "E = b·P/Q = 5·20/100 = 1.",
"k": "pr"
},
{
"t": 3,
"q": "Talab funksiyasi Q = 180 − 3P. Narx P = 40 bo‘lgan nuqtada talabning narx bo‘yicha elastikligi (modul) nechaga teng?",
"o": [
"3",
"2",
"0,67",
"0,5"
],
"c": 1,
"w": "E = b·P/Q = 3·40/60 = 2.",
"k": "pr"
},
{
"t": 3,
"q": "Talabning narx bo‘yicha elastikligi -1,6, daromad bo‘yicha elastikligi 0,5. Narx 5% ga pasayib, daromad 6% ga oshsa, talab qilingan miqdor taxminan necha foizga o‘zgaradi?",
"o": [
"8% ga oshadi",
"3% ga oshadi",
"5% ga oshadi",
"11% ga oshadi"
],
"c": 3,
"w": "Narx ta’siri: 1,6·5 = 8%; daromad ta’siri: 0,5·6 = 3%. Jami 11%.",
"k": "pr"
},
{
"t": 3,
"q": "Talabning narx bo‘yicha elastikligi -1,5, daromad bo‘yicha elastikligi 1,5. Narx 4% ga pasayib, daromad 4% ga oshsa, talab qilingan miqdor taxminan necha foizga o‘zgaradi?",
"o": [
"0% ga oshadi",
"12% ga kamayadi",
"12% ga oshadi",
"6% ga oshadi"
],
"c": 2,
"w": "Narx ta’siri: 1,5·4 = 6%; daromad ta’siri: 1,5·4 = 6%. Jami 12%.",
"k": "pr"
},
{
"t": 3,
"q": "Talabning narx bo‘yicha elastikligi -2, daromad bo‘yicha elastikligi 0,25. Narx 3% ga pasayib, daromad 8% ga oshsa, talab qilingan miqdor taxminan necha foizga o‘zgaradi?",
"o": [
"4% ga oshadi",
"6% ga oshadi",
"2% ga oshadi",
"8% ga oshadi"
],
"c": 3,
"w": "Narx ta’siri: 2·3 = 6%; daromad ta’siri: 0,25·8 = 2%. Jami 8%.",
"k": "pr"
},
{
"t": 3,
"q": "Talabning narx bo‘yicha elastikligi -1,25, daromad bo‘yicha elastikligi 1,5. Narx 8% ga pasayib, daromad 2% ga oshsa, talab qilingan miqdor taxminan necha foizga o‘zgaradi?",
"o": [
"3% ga oshadi",
"7% ga oshadi",
"13% ga oshadi",
"10% ga oshadi"
],
"c": 2,
"w": "Narx ta’siri: 1,25·8 = 10%; daromad ta’siri: 1,5·2 = 3%. Jami 13%.",
"k": "pr"
},
{
"t": 3,
"q": "Taklifning narx bo‘yicha elastikligi 1,5, talabniki (modul) 0,5. Har bir birlikka 12 so‘mlik soliq qo‘yilsa, soliq yukining qanchasini iste’molchi ko‘taradi (so‘m)?",
"o": [
"6",
"3",
"9",
"4"
],
"c": 2,
"w": "Soliq yukini nisbatan noelastik tomon ko‘proq ko‘taradi: iste’molchi ulushi = Es/(Es+Ed) = 0,75; 12·0,75 = 9.",
"k": "pr"
},
{
"t": 3,
"q": "Taklifning narx bo‘yicha elastikligi 3, talabniki (modul) 1. Har bir birlikka 20 so‘mlik soliq qo‘yilsa, soliq yukining qanchasini iste’molchi ko‘taradi (so‘m)?",
"o": [
"15",
"10",
"6,67",
"5"
],
"c": 0,
"w": "Soliq yukini nisbatan noelastik tomon ko‘proq ko‘taradi: iste’molchi ulushi = Es/(Es+Ed) = 0,75; 20·0,75 = 15.",
"k": "pr"
},
{
"t": 3,
"q": "Taklifning narx bo‘yicha elastikligi 2, talabniki (modul) 0,5. Har bir birlikka 10 so‘mlik soliq qo‘yilsa, soliq yukining qanchasini iste’molchi ko‘taradi (so‘m)?",
"o": [
"5",
"2,5",
"2",
"8"
],
"c": 3,
"w": "Soliq yukini nisbatan noelastik tomon ko‘proq ko‘taradi: iste’molchi ulushi = Es/(Es+Ed) = 0,8; 10·0,8 = 8.",
"k": "pr"
},
{
"t": 3,
"q": "Taklifning narx bo‘yicha elastikligi 1, talabniki (modul) 3. Har bir birlikka 16 so‘mlik soliq qo‘yilsa, soliq yukining qanchasini iste’molchi ko‘taradi (so‘m)?",
"o": [
"48",
"4",
"12",
"8"
],
"c": 1,
"w": "Soliq yukini nisbatan noelastik tomon ko‘proq ko‘taradi: iste’molchi ulushi = Es/(Es+Ed) = 0,25; 16·0,25 = 4.",
"k": "pr"
},
{
"t": 4,
"q": "Foydalilik (utility) tushunchasi nimani ifodalaydi?",
"o": [
"Tovarning jismoniy xususiyatlari va uning sifat ko‘rsatkichlarini",
"Iste’molchining tovar yoki xizmatni iste’mol qilishdan oladigan qoniqish darajasini",
"Iste’molchi daromadining tovar narxiga nisbatini",
"Tovarning ishlab chiqarish xarajatlari va uning bozordagi narxi o‘rtasidagi farqni"
],
"c": 1,
"w": "Foydalilik — sub’ektiv qoniqish o‘lchovi.",
"k": "th"
},
{
"t": 4,
"q": "Marginal foydalilik (MU) nima?",
"o": [
"Tovarning qo‘shimcha bir birligi uchun to‘lanadigan bozor narxi",
"Tovarning barcha birliklaridan olingan umumiy foydalilikning o‘rtacha qiymati",
"Tovarning qo‘shimcha bir birligini iste’mol qilishdan umumiy foydalilikning ortishi",
"Tovarning qo‘shimcha bir birligini ishlab chiqarish xarajati"
],
"c": 2,
"w": "MU = ΔTU / ΔQ.",
"k": "th"
},
{
"t": 4,
"q": "Marginal foydalilikning kamayish qonuni nimani bildiradi?",
"o": [
"Tovarning har bir keyingi birligidan olinadigan qo‘shimcha foydalilik kamayib borishini",
"Tovar narxi pasayishi bilan uning marginal foydaliligi ham doimiy ravishda oshib borishini",
"Iste’molchi daromadi oshishi bilan tovarning marginal foydaliligi ham oshib borishini",
"Tovarning umumiy foydaliligi har bir keyingi birlik bilan kamayib borishini va nolga tushishini"
],
"c": 0,
"w": "Umumiy foydalilik oshadi (sekinroq), marginal foydalilik esa kamayadi.",
"k": "th"
},
{
"t": 4,
"q": "Marginal foydalilik nolga teng bo‘lgan nuqtada umumiy foydalilik...",
"o": [
"Minimal darajaga tushadi",
"Maksimal darajaga yetadi",
"Nolga teng bo‘ladi",
"Cheksizga intiladi"
],
"c": 1,
"w": "MU = 0 ↔ TU maksimum.",
"k": "th"
},
{
"t": 4,
"q": "Marginal foydalilik manfiy bo‘lsa...",
"o": [
"Iste’molchi shu tovarni sotib olishni yanada ko‘paytiradi va miqdorni oshirib boradi",
"Umumiy foydalilik o‘zgarmaydi, chunki qo‘shimcha birlik foyda ham zarar ham bermaydi",
"Umumiy foydalilik oshadi, lekin avvalgisiga qaraganda sekinroq sur’atda oshadi",
"Umumiy foydalilik kamayadi, ya’ni qo‘shimcha birlik zarar keltiradi"
],
"c": 3,
"w": "MU < 0 → TU ↓.",
"k": "th"
},
{
"t": 4,
"q": "Byudjet cheklovi chizig‘ining qiyaligi nimaga teng?",
"o": [
"I / Px, ya’ni daromadning birinchi tovar narxiga nisbatiga",
"−Px / Py, ya’ni tovarlar narxlari nisbatiga (mutlaq qiymatda)",
"MUx / MUy, ya’ni marginal foydaliliklar nisbatiga",
"−Py / Px, ya’ni ikkinchi tovar narxining birinchisiga nisbatiga"
],
"c": 1,
"w": "X o‘qida X, Y o‘qida Y bo‘lsa, qiyalik −Px/Py.",
"k": "th"
},
{
"t": 4,
"q": "Daromad oshganda (narxlar o‘zgarmaganda) byudjet chizig‘i...",
"o": [
"O‘ziga parallel ravishda koordinata boshidan uzoqlashadi",
"Qiyaligini o‘zgartirib, bir o‘q atrofida buriladi",
"O‘ziga parallel ravishda koordinata boshiga yaqinlashadi",
"O‘zgarishsiz qoladi"
],
"c": 0,
"w": "Daromad ↑: parallel siljish; narx o‘zgarishi: qiyalik o‘zgaradi.",
"k": "th"
},
{
"t": 4,
"q": "Faqat X tovar narxi oshsa, byudjet chizig‘i...",
"o": [
"Chiziq o‘ziga parallel ravishda koordinata boshidan uzoqlashib, qiyaligi o‘zgarmaydi",
"Ikkala o‘qdagi kesishmasi ham o‘zgarmay, chiziq o‘z holatida o‘zgarishsiz qoladi",
"Y o‘qidagi kesishmasi o‘zgarib, X o‘qidagi kesishmasi o‘zgarmay, chiziq buriladi",
"X o‘qidagi kesishmasi koordinata boshiga yaqinlashib, Y o‘qidagisi o‘zgarmay, chiziq buriladi"
],
"c": 3,
"w": "Px ↑: I/Px kamayadi, I/Py o‘zgarmaydi.",
"k": "th"
},
{
"t": 4,
"q": "Befarqlik egri chizig‘i (indifference curve) nimani ko‘rsatadi?",
"o": [
"Iste’molchiga bir xil qoniqish keltiradigan tovarlar to‘plamlari yig‘indisini",
"Tovarlarning bir xil bozor narxiga ega to‘plamlari yig‘indisini",
"Iste’molchi daromadining o‘zgarishi bilan talab qilingan miqdor bog‘liqligini",
"Iste’molchi byudjeti bilan sarflanadigan tovarlar to‘plamlari yig‘indisini"
],
"c": 0,
"w": "BEC bo‘ylab foydalilik doimiy.",
"k": "th"
},
{
"t": 4,
"q": "Befarqlik egri chiziqlarining asosiy xususiyatlaridan qaysi biri noto‘g‘ri?",
"o": [
"Egri chiziqlar pastga qiyalangan bo‘ladi",
"Ikki befarqlik egri chizig‘i bir-biri bilan kesishishi mumkin",
"Koordinata boshidan uzoqroq egri chiziq yuqori foydalilik darajasini bildiradi",
"Egri chiziqlar koordinata boshiga qavariq bo‘ladi"
],
"c": 1,
"w": "Kesishish tranzitivlik shartini buzadi; BEClar kesishmaydi.",
"k": "th"
},
{
"t": 4,
"q": "Almashtirishning marginal normasi (MRS) nima?",
"o": [
"Ikki tovar bozor narxlarining o‘zaro nisbati, ya’ni nisbiy narx va byudjet chizig‘i qiyaligi",
"Ikki tovarning umumiy foydaliliklari o‘rtasidagi nisbat va ularning o‘zaro bog‘liqligi darajasi",
"Daromadning birinchi tovarga sarflanadigan ulushi va ikkinchi tovarga sarflanadigan ulushi nisbati",
"Foydalilik o‘zgarmasligi uchun bir tovarni ko‘proq olish evaziga ikkinchisidan voz kechishga tayyorlik"
],
"c": 3,
"w": "MRS = −ΔY/ΔX = MUx/MUy BEC bo‘ylab.",
"k": "th"
},
{
"t": 4,
"q": "MRS kamayish tamoyili nimani bildiradi?",
"o": [
"X va Y tovarlarning narxlari nisbati doim kamayib borishini",
"Daromad oshgan sari MRS doim kamayishini",
"X tovar miqdori oshgan sari, qo‘shimcha X uchun Y dan voz kechishga tayyorlik oshishini",
"X tovar miqdori oshgan sari, qo‘shimcha X uchun Y dan voz kechishga tayyorlik kamayishini"
],
"c": 3,
"w": "BEC ning koordinata boshiga qavariqligi MRS kamayishi bilan bog‘liq.",
"k": "th"
},
{
"t": 4,
"q": "Iste’molchi muvozanati (optimal tanlov) shartini ko‘rsating.",
"o": [
"Umumiy foydalilik nolga teng bo‘ladi",
"Befarqlik egri chizig‘i byudjet chizig‘iga urinadi: MRS = Px / Py",
"Befarqlik egri chizig‘i byudjet chizig‘ini ikki nuqtada kesadi",
"Byudjet chizig‘i koordinata o‘qlaridan biriga parallel bo‘ladi"
],
"c": 1,
"w": "Optimumda qiyaliklar teng: MRS = Px/Py.",
"k": "th"
},
{
"t": 4,
"q": "Gossenning ikkinchi qonuni (muvozanat sharti)ga ko‘ra, optimal tanlovda...",
"o": [
"MUx · Px = MUy · Py bo‘ladi, ya’ni foydalilik va narx ko‘paytmalari o‘zaro teng bo‘ladi",
"MUx = MUy bo‘ladi, ya’ni marginal foydaliliklar narxlardan qat’i nazar bir-biriga teng bo‘ladi",
"MUx / Px = MUy / Py: oxirgi so‘mdan olinadigan foydalilik tovarlar bo‘yicha teng bo‘ladi",
"Px = Py bo‘ladi, ya’ni narxlar foydaliliklardan qat’i nazar doimo o‘zaro teng bo‘lib turadi"
],
"c": 2,
"w": "Teng marginal tamoyil: oxirgi so‘mdan olinadigan MU tengligi.",
"k": "th"
},
{
"t": 4,
"q": "MUx/Px > MUy/Py bo‘lsa, iste’molchi...",
"o": [
"X tovarni ko‘proq, Y tovarni kamroq sotib oladi",
"Ikkala tovarni ham ko‘proq sotib oladi",
"Y tovarni ko‘proq, X tovarni kamroq sotib oladi",
"Tanlovini o‘zgartirmaydi, chunki optimumda turibdi"
],
"c": 0,
"w": "X dan 1 so‘mga ko‘proq foyda → X ga o‘tadi.",
"k": "th"
},
{
"t": 4,
"q": "Qanday holatda tovar uchun talab egri chizig‘i optimum nuqtalaridan hosil qilinadi?",
"o": [
"Boshqa omillar o‘zgarmaganda narx o‘zgarishiga javoban optimal miqdorlar nuqtalarini tutashtirib",
"Barcha narxlar va daromad bir vaqtda o‘zgarganda hosil bo‘ladigan optimal nuqtalarni tutashtirib",
"Byudjet chizig‘i qiyaligini o‘zgartirmasdan, faqat uning o‘rnini siljitib hosil bo‘lgan nuqtalarni",
"Faqat daromad o‘zgarganda hosil bo‘ladigan optimal tanlov nuqtalarini birin-ketin tutashtirib"
],
"c": 0,
"w": "Narx-iste’mol egri chizig‘idan talab egri chizig‘i hosil bo‘ladi.",
"k": "th"
},
{
"t": 4,
"q": "Daromad-iste’mol egri chizig‘i (Engel egri chizig‘i bilan bog‘liq) nimani ko‘rsatadi?",
"o": [
"Narx va daromad birgalikda o‘zgarganda tanlovning o‘zgarishini",
"Daromad o‘zgarmaganda narx oshganda optimal tanlovlarning o‘zgarishini",
"Narxlar o‘zgarmaganda daromad oshganda optimal tanlovlarning o‘zgarishini",
"Faqat sotuvchilarning ishlab chiqarish hajmi o‘zgarishini"
],
"c": 2,
"w": "Daromad kengayish yo‘li: daromad ↑ bo‘ylab optimal nuqtalar.",
"k": "th"
},
{
"t": 4,
"q": "Mukammal o‘rinbosar (substitut) tovarlar uchun befarqlik egri chiziqlari...",
"o": [
"L shaklida bo‘ladi",
"Gorizontal bo‘ladi",
"To‘g‘ri chiziq ko‘rinishida bo‘ladi",
"Giperbola ko‘rinishida qavariq bo‘ladi"
],
"c": 2,
"w": "Mukammal substitut: MRS doimiy.",
"k": "th"
},
{
"t": 4,
"q": "Mukammal to‘ldiruvchi (komplement) tovarlar (masalan, o‘ng va chap poyabzal) uchun befarqlik egri chiziqlari...",
"o": [
"L shaklida bo‘ladi",
"To‘g‘ri chiziq ko‘rinishida bo‘ladi",
"Vertikal chiziq bo‘ladi",
"Giperbola ko‘rinishida bo‘ladi"
],
"c": 0,
"w": "Tovarlar qat’iy nisbatda iste’mol qilinadi.",
"k": "th"
},
{
"t": 4,
"q": "Kobb–Duglas foydalilik funksiyasi U = X^a · Y^b da optimal tanlovda X ga xarajat ulushi...",
"o": [
"a · b ga teng bo‘ladi",
"a / (a + b) ga teng bo‘ladi",
"1 / (a + b) ga teng bo‘ladi",
"b / (a + b) ga teng bo‘ladi"
],
"c": 1,
"w": "Kobb–Duglasda xarajat ulushlari doimiy: X uchun a/(a+b).",
"k": "th"
},
{
"t": 4,
"q": "Kardinalistik (miqdoriy) foydalilik nazariyasi va ordinalistik nazariya o‘rtasidagi asosiy farq qaysi?",
"o": [
"Birinchisi faqat tartibini solishtirish mumkin deydi, ikkinchisi esa uni son bilan o‘lchash mumkin deydi",
"Birinchisi foydalilikni son bilan o‘lchash mumkin deydi, ikkinchisi esa faqat tartibini solishtirishni yetarli deydi",
"Ikkala nazariya ham foydalilikni pul birligida o‘lchaydi va bir xil xulosalarga olib keladi",
"Birinchisi faqat bozor narxlariga tayanadi, ikkinchisi esa faqat iste’molchi daromadiga tayanadi"
],
"c": 1,
"w": "Gossen/Marshall — kardinalistik; Xiks/Pareto — ordinalistik (BEC).",
"k": "th"
},
{
"t": 4,
"q": "Iste’molchi afzalliklari to‘g‘risidagi «to‘liqlik» (completeness) aksiomasi nimani anglatadi?",
"o": [
"Iste’molchi barcha tovarlarni sotib olishga yetarli mablag‘ga ega ekanligini va qarz olmasligini",
"Ko‘proq miqdordagi tovar har doim kamroq miqdordagi tovardan yaxshiroq hisoblanishini",
"Iste’molchi afzalliklari vaqt o‘tishi bilan, shuningdek narxlar o‘zgarganda ham o‘zgarmasligini",
"Iste’molchi har qanday ikki tovar to‘plamini solishtira olishini va qaysi birini afzal ko‘rishini bilishini"
],
"c": 3,
"w": "Aksioma: to‘liqlik, tranzitivlik, to‘yinmaslik.",
"k": "th"
},
{
"t": 4,
"q": "Tranzitivlik aksiomasiga ko‘ra, agar A to‘plam B dan, B esa C dan afzal bo‘lsa...",
"o": [
"A va C ni solishtirib bo‘lmaydi",
"A to‘plam C dan afzal bo‘ladi",
"A va C to‘plamlari befarq bo‘ladi",
"C to‘plam A dan afzal bo‘ladi"
],
"c": 1,
"w": "Tranzitivlik BEClar kesishmasligini ta’minlaydi.",
"k": "th"
},
{
"t": 4,
"q": "Byudjet chizig‘idan pastda yoki unda joylashgan to‘plamlar nima deyiladi?",
"o": [
"Talab to‘plami (barcha mumkin narxlardagi talab qilingan miqdorlar)",
"Byudjet to‘plami (iste’molchi sotib olishi mumkin bo‘lgan to‘plamlar)",
"Optimal to‘plam (iste’molchining yagona eng yaxshi, yakuniy tanlovi)",
"Befarqlik to‘plami (iste’molchiga bir xil foydalilik keltiradigan to‘plamlar)"
],
"c": 1,
"w": "Byudjet to‘plami — byudjet chizig‘i va undan pastdagi nuqtalar.",
"k": "th"
},
{
"t": 4,
"q": "Quyidagi holatda iste’molchi optimal tanlovda emas: MRS = 3, Px / Py = 2. U...",
"o": [
"Ikkala tovarni ham ko‘proq sotib olishi kerak",
"Y tovarni ko‘proq, X tovarni kamroq sotib olishi kerak",
"Tanlovini o‘zgartirmasligi kerak",
"X tovarni ko‘proq, Y tovarni kamroq sotib olishi kerak"
],
"c": 3,
"w": "MRS > Px/Py: X ning subyektiv qadri bozor qadridan yuqori → X ko‘proq.",
"k": "th"
},
{
"t": 4,
"q": "Quyidagi holat qaysi biri burchak (corner) yechimini bildiradi?",
"o": [
"Iste’molchi daromadining barchasini faqat bitta tovarga sarflashi",
"Iste’molchi daromadining yarmini jamg‘arib, qolganini sarflashi",
"Iste’molchi ikkala tovarni ham to‘liq teng miqdorlarda sotib olishi",
"Iste’molchi tovarlarni narxiga qarab emas, didiga ko‘ra tanlashi"
],
"c": 0,
"w": "Burchak yechim: bitta tovar miqdori nolga teng.",
"k": "th"
},
{
"t": 4,
"q": "Daromad oshganda iste’molchi optimal tanlovida X tovar miqdori kamaysa, X...",
"o": [
"Normal tovar hisoblanadi",
"Past toifali (inferior) tovar",
"Mukammal komplement hisoblanadi",
"Hashamatli tovar hisoblanadi"
],
"c": 1,
"w": "Daromad ↑ → miqdor ↓ ⇒ inferior.",
"k": "th"
},
{
"t": 4,
"q": "Iste’molchi ortiqchaligi marginal foydalilik nuqtai nazaridan qanday talqin qilinadi?",
"o": [
"Marginal foydalilik nolga teng bo‘lgan nuqtada belgilanadigan narx va unga mos miqdor",
"Birinchi birlik narxi bilan oxirgi birlik narxi o‘rtasidagi farqning pul ifodasi",
"Har bir birlik marginal foydaliligining pul ifodasi bilan narx farqlarining yig‘indisi",
"Jami sarflangan pul miqdori bilan umumiy foydalilik o‘rtasidagi nisbatning pul ifodasi"
],
"c": 2,
"w": "CS = Σ(MU_i − P) pul ifodasida.",
"k": "th"
},
{
"t": 4,
"q": "Suv va olmos paradoksi qanday hal qilinadi?",
"o": [
"Narx davlat tomonidan belgilanadi, shuning uchun suv arzon, olmos esa qimmat qilib qo‘yiladi",
"Narx faqat ishlab chiqarish xarajatiga bog‘liq bo‘lgani uchun bu yerda hech qanday paradoks yo‘q",
"Narx umumiy foydalilikka bog‘liq bo‘ladi: suvning umumiy foydaliligi olmosnikidan past bo‘ladi",
"Narx umumiy emas, marginal foydalilikka bog‘liq: suvning marginal foydaliligi past, olmosniki yuqori"
],
"c": 3,
"w": "Suv — umumiy foydalilik katta, MU past; olmos — MU yuqori.",
"k": "th"
},
{
"t": 4,
"q": "Byudjet chizig‘i tenglamasi qaysi?",
"o": [
"Px + Py = I·(X + Y)",
"Px·X + Py·Y = I",
"Px·Y + Py·X = I",
"X/Px + Y/Py = I"
],
"c": 1,
"w": "Jami sarf daromadga teng.",
"k": "th"
},
{
"t": 4,
"q": "Daromadi 1200 so‘m, Px = 30, Py = 40 bo‘lgan iste’molchi uchun byudjet chizig‘ining qiyaligi (mutlaq qiymat) nechaga teng?",
"o": [
"1,33",
"0,75",
"30",
"40"
],
"c": 1,
"w": "Px/Py = 30/40 = 0,75.",
"k": "th"
},
{
"t": 4,
"q": "Iste’molchi muvozanatda MUx = 12, MUy = 8, Px = 6 bo‘lsa, Py nechaga teng?",
"o": [
"8",
"4",
"9",
"2"
],
"c": 1,
"w": "MUx/Px = MUy/Py → 12/6 = 8/Py → Py = 4.",
"k": "th"
},
{
"t": 4,
"q": "X tovarning marginal foydaliligi 20, Y tovarniki 5 bo‘lsa, MRS (X ning Y ga nisbatan) nechaga teng?",
"o": [
"4",
"15",
"100",
"0,25"
],
"c": 0,
"w": "MRS = MUx/MUy = 20/5 = 4.",
"k": "th"
},
{
"t": 4,
"q": "Narx pasayishi «real daromad»ga qanday ta’sir qiladi?",
"o": [
"Real daromad o‘zgarmaydi, chunki nominal daromad o‘zgarmagan",
"Nominal daromad ham avtomatik oshadi",
"Real daromad kamayadi, chunki tovar arzonlashadi",
"Iste’molchi sotib olish qobiliyati (real daromad) oshadi"
],
"c": 3,
"w": "Narx ↓ → bir xil nominal daromadga ko‘proq tovar → real daromad ↑.",
"k": "th"
},
{
"t": 4,
"q": "Quyidagi tasdiqlardan qaysi biri to‘g‘ri?",
"o": [
"Umumiy foydalilik oshib borayotganda marginal foydalilik kamayishi mumkin",
"Marginal foydalilik kamayganda umumiy foydalilik ham doim kamayadi",
"Marginal foydalilik hech qachon musbat bo‘lmaydi",
"Umumiy foydalilik oshganda marginal foydalilik ham doim oshadi"
],
"c": 0,
"w": "TU ning o‘sish sur’ati (MU) kamayadi, lekin MU > 0 ekan, TU o‘sadi.",
"k": "th"
},
{
"t": 4,
"q": "Ordinalistik yondashuvda foydalilik funksiyasi U = XY va V = (XY)² qanday talqin qilinadi?",
"o": [
"Ikkalasi turli afzalliklarni ifodalaydi, chunki sonlar farq qiladi",
"Faqat U to‘g‘ri, V esa noto‘g‘ri",
"Ikkalasi bir xil afzalliklarni ifodalaydi, chunki tartib saqlanadi",
"Ikkalasi ham foydalilikni pul bilan o‘lchaydi"
],
"c": 2,
"w": "Monoton o‘sib boruvchi o‘zgartirish afzalliklar tartibini saqlaydi.",
"k": "th"
},
{
"t": 4,
"q": "Optimal tanlovda byudjet chizig‘i bilan befarqlik egri chizig‘i qanday joylashadi?",
"o": [
"Ular o‘zaro parallel bo‘lib, hech qachon kesishmaydi va urinmaydi",
"Ular o‘zaro perpendikulyar bo‘lib, qiyaliklari ko‘paytmasi −1 ga teng",
"Ular bir-birini ikki nuqtada kesib o‘tadi va qiyaliklari farq qiladi",
"Optimal nuqtada ular bir-biriga urinadi va qiyaliklari teng bo‘ladi"
],
"c": 3,
"w": "Urinma shart: MRS = Px/Py.",
"k": "th"
},
{
"t": 4,
"q": "Agar Px 2 marta oshsa va daromad ham 2 marta oshsa (Py o‘zgarmasa), byudjet chizig‘i...",
"o": [
"Ikkala o‘qdagi kesishmasi o‘zgarmaydi",
"Faqat qiyaligi o‘zgaradi, kesishmalar o‘zgarmaydi",
"X o‘qidagi kesishmasi 2 marta oshadi, Y o‘qidagisi o‘zgarmaydi",
"Y o‘qidagi kesishmasi 2 marta oshadi, X o‘qidagisi o‘zgarmaydi"
],
"c": 3,
"w": "X o‘qida: I/Px o‘zgarmaydi; Y o‘qida: I/Py 2 marta oshadi.",
"k": "th"
},
{
"t": 4,
"q": "Quyidagilardan qaysi biri iste’molchining «oqilona» (rasional) xulq-atvori sifatida talqin qilinadi?",
"o": [
"Narxlarga e’tibor bermay, faqat o‘z didiga qarab, nimani xohlasa shuni tanlash",
"Daromadning barchasini bitta tovarga sarflash va boshqasini sotib olmaslik",
"Har doim bozordagi eng arzon tovarni tanlash va boshqasiga qaramaslik",
"Berilgan byudjet cheklovi doirasida o‘z foydaliligini maksimallashtirishga intilish"
],
"c": 3,
"w": "Rasionallik: cheklov ostida foydalilikni maksimallashtirish.",
"k": "th"
},
{
"t": 4,
"q": "Qo‘shimcha birlik tovarning narxi unga bo‘lgan marginal foydalilikdan (pul ifodasida) yuqori bo‘lsa, iste’molchi...",
"o": [
"Uni ko‘proq sotib oladi, chunki narx yuqori sifatni bildiradi",
"Uni baribir sotib oladi, chunki narx ko‘rsatkich emas",
"Uni sotib olmaydi, chunki xarajat foydadan katta",
"Boshqa tovarlarning barchasidan voz kechadi"
],
"c": 2,
"w": "MB < narx → sotib olinmaydi.",
"k": "th"
},
{
"t": 4,
"q": "Quyidagilardan qaysi biri talab qonunining foydalilik nazariyasidagi izohi?",
"o": [
"Narx pasayganda MU oshgani uchun iste’molchi shu tovarni avvalgidan ko‘proq sotib oladi",
"Narx pasayganda daromad kamayganligi sababli iste’molchi tovarni ko‘proq iste’mol qiladi",
"Narx pasayganda MU/P nisbati oshgani uchun iste’molchi shu tovarni ko‘proq sotib oladi",
"Narx pasayganda tovar sifati oshganligi sababli iste’molchi uni ko‘proq sotib oladi"
],
"c": 2,
"w": "P ↓ → MU/P ↑ → tovar miqdori ko‘paytiriladi, MU kamayib muvozanat tiklanadi.",
"k": "th"
},
{
"t": 4,
"q": "Ikki tovar uchun MUx/Px < MUy/Py bo‘lsa, iste’molchi tanlovini qanday o‘zgartiradi?",
"o": [
"Ikkala tovarni ham bir xil nisbatda kamaytiradi",
"Y tovarni ko‘paytirib, X tovarni kamaytiradi, bunda MUy kamayib, MUx oshadi",
"X tovarni ko‘paytirib, Y tovarni kamaytiradi, bunda MUx kamayib, MUy oshadi",
"Tanlovini o‘zgartirmaydi va byudjetni jamg‘aradi"
],
"c": 1,
"w": "Teng marginal tamoyil: foyda kattaroq tovarga o‘tiladi.",
"k": "th"
},
{
"t": 4,
"q": "Daromad va narxlar bir xil nisbatda (masalan, 2 baravar) oshsa, iste’molchining optimal tanlovi...",
"o": [
"Ikki baravar kamayadi, chunki narxlar ikki baravar oshgan",
"O‘zgarmaydi, chunki byudjet to‘plami avvalgidek qoladi",
"Ikki baravar ko‘payadi, chunki daromad ikki baravar oshgan",
"Faqat bitta tovar bo‘yicha o‘zgarib, ikkinchisi o‘zgarmaydi"
],
"c": 1,
"w": "Byudjet chizig‘i bir xil qoladi (nolinchi bir jinslilik).",
"k": "th"
},
{
"t": 4,
"q": "Befarqlik xaritasida koordinata boshidan uzoqroq joylashgan egri chiziq...",
"o": [
"Faqat byudjet chizig‘i bilan kesishgan to‘plamlarni ifodalaydi",
"Iste’molchiga ko‘proq foydalilik keltiruvchi to‘plamlarni",
"Bir xil foydalilik keltiruvchi to‘plamlarni ifodalaydi",
"Kamroq foydalilik keltiruvchi to‘plamlarni ifodalaydi"
],
"c": 1,
"w": "To‘yinmaslik aksiomasi: ko‘proq — yaxshiroq.",
"k": "th"
},
{
"t": 4,
"q": "X va Y iste’molchi uchun 1:1 nisbatda mukammal o‘rinbosar bo‘lsa va Px < Py bo‘lsa, iste’molchi...",
"o": [
"Hech qanday tovar sotib olmaydi va daromadini jamg‘aradi",
"Faqat qimmatroq tovarni sotib oladi, arzonini olmaydi",
"Faqat arzonroq tovarni sotib oladi (burchak yechim)",
"Ikkala tovarni ham to‘liq teng miqdorda sotib oladi"
],
"c": 2,
"w": "Mukammal substitutda MRS doimiy: arzonroq tovar tanlanadi.",
"k": "th"
},
{
"t": 4,
"q": "Marginal foydalilik 40, tovar narxi 10 so‘m bo‘lsa, shu tovarning «bir so‘mga to‘g‘ri keladigan marginal foydaliligi» nechaga teng?",
"o": [
"4",
"30",
"400",
"0,25"
],
"c": 0,
"w": "MU/P = 40/10 = 4.",
"k": "th"
},
{
"t": 4,
"q": "Iste’molchi byudjeti oshib, narxlar o‘zgarmasa, uning optimal to‘plamidagi «foydalilik darajasi»...",
"o": [
"Yuqoriroq befarqlik egri chizig‘iga o‘tib, oshadi",
"Bir xil qoladi",
"Pastroq befarqlik egri chizig‘iga o‘tib, kamayadi",
"Nolga teng bo‘ladi"
],
"c": 0,
"w": "Byudjet kengayishi — yuqoriroq BEC.",
"k": "th"
},
{
"t": 4,
"q": "Iste’molchining daromadi 600 so‘m, X tovar narxi 20, Y tovar narxi 30 so‘m. U X tovardan 12 birlik sotib olsa, Y tovardan maksimal necha birlik sotib ola oladi?",
"o": [
"12",
"8",
"20",
"18"
],
"c": 0,
"w": "Y = (I − Px·X)/Py = (600 − 20·12)/30 = 12.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchining daromadi 480 so‘m, X tovar narxi 12, Y tovar narxi 16 so‘m. U X tovardan 10 birlik sotib olsa, Y tovardan maksimal necha birlik sotib ola oladi?",
"o": [
"22,5",
"7,5",
"26,67",
"30"
],
"c": 0,
"w": "Y = (I − Px·X)/Py = (480 − 12·10)/16 = 22,5.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchining daromadi 900 so‘m, X tovar narxi 30, Y tovar narxi 45 so‘m. U X tovardan 15 birlik sotib olsa, Y tovardan maksimal necha birlik sotib ola oladi?",
"o": [
"15",
"20",
"10",
"7,5"
],
"c": 2,
"w": "Y = (I − Px·X)/Py = (900 − 30·15)/45 = 10.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchining daromadi 720 so‘m, X tovar narxi 18, Y tovar narxi 24 so‘m. U X tovardan 20 birlik sotib olsa, Y tovardan maksimal necha birlik sotib ola oladi?",
"o": [
"20",
"13,33",
"15",
"30"
],
"c": 2,
"w": "Y = (I − Px·X)/Py = (720 − 18·20)/24 = 15.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchi foydalilik funksiyasi U = X·Y, daromadi 240 so‘m, Px = 4, Py = 6. Foydalilikni maksimallashtiruvchi tanlovda erishiladigan umumiy foydalilik (U) qancha?",
"o": [
"2 400",
"1 200",
"600",
"50"
],
"c": 2,
"w": "Kobb–Duglas holida xarajatning yarmi har bir tovarga: X = 30, Y = 20; U = 600.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchi foydalilik funksiyasi U = X·Y, daromadi 360 so‘m, Px = 6, Py = 3. Foydalilikni maksimallashtiruvchi tanlovda erishiladigan umumiy foydalilik (U) qancha?",
"o": [
"3 600",
"1 800",
"90",
"7 200"
],
"c": 1,
"w": "Kobb–Duglas holida xarajatning yarmi har bir tovarga: X = 30, Y = 60; U = 1 800.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchi foydalilik funksiyasi U = X·Y, daromadi 480 so‘m, Px = 8, Py = 4. Foydalilikni maksimallashtiruvchi tanlovda erishiladigan umumiy foydalilik (U) qancha?",
"o": [
"7 200",
"1 800",
"3 600",
"90"
],
"c": 1,
"w": "Kobb–Duglas holida xarajatning yarmi har bir tovarga: X = 30, Y = 60; U = 1 800.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchi foydalilik funksiyasi U = X·Y, daromadi 600 so‘m, Px = 5, Py = 10. Foydalilikni maksimallashtiruvchi tanlovda erishiladigan umumiy foydalilik (U) qancha?",
"o": [
"90",
"1 800",
"7 200",
"3 600"
],
"c": 1,
"w": "Kobb–Duglas holida xarajatning yarmi har bir tovarga: X = 60, Y = 30; U = 1 800.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchi foydalilik funksiyasi U = X·Y, daromadi 720 so‘m, Px = 9, Py = 6. Foydalilikni maksimallashtiruvchi tanlovda erishiladigan umumiy foydalilik (U) qancha?",
"o": [
"4 800",
"100",
"2 400",
"9 600"
],
"c": 2,
"w": "Kobb–Duglas holida xarajatning yarmi har bir tovarga: X = 40, Y = 60; U = 2 400.",
"k": "pr"
},
{
"t": 4,
"q": "Foydalilik funksiyasi U = X·Y², daromad 300 so‘m, Px = 5, Py = 10. Optimal tanlovda Y tovardan necha birlik sotib olinadi?",
"o": [
"15",
"30",
"10",
"20"
],
"c": 3,
"w": "U = X^1·Y^2 uchun Y ga xarajat ulushi 2/3: Y = (2/3)·I/Py = 20.",
"k": "pr"
},
{
"t": 4,
"q": "Foydalilik funksiyasi U = X·Y², daromad 240 so‘m, Px = 4, Py = 8. Optimal tanlovda Y tovardan necha birlik sotib olinadi?",
"o": [
"30",
"10",
"20",
"15"
],
"c": 2,
"w": "U = X^1·Y^2 uchun Y ga xarajat ulushi 2/3: Y = (2/3)·I/Py = 20.",
"k": "pr"
},
{
"t": 4,
"q": "Foydalilik funksiyasi U = X·Y², daromad 450 so‘m, Px = 5, Py = 15. Optimal tanlovda Y tovardan necha birlik sotib olinadi?",
"o": [
"10",
"15",
"20",
"30"
],
"c": 2,
"w": "U = X^1·Y^2 uchun Y ga xarajat ulushi 2/3: Y = (2/3)·I/Py = 20.",
"k": "pr"
},
{
"t": 4,
"q": "Foydalilik funksiyasi U = X·Y², daromad 360 so‘m, Px = 6, Py = 4. Optimal tanlovda Y tovardan necha birlik sotib olinadi?",
"o": [
"30",
"45",
"90",
"60"
],
"c": 3,
"w": "U = X^1·Y^2 uchun Y ga xarajat ulushi 2/3: Y = (2/3)·I/Py = 60.",
"k": "pr"
},
{
"t": 4,
"q": "Foydalilik funksiyasi U = X·Y², daromad 540 so‘m, Px = 9, Py = 6. Optimal tanlovda Y tovardan necha birlik sotib olinadi?",
"o": [
"45",
"90",
"30",
"60"
],
"c": 3,
"w": "U = X^1·Y^2 uchun Y ga xarajat ulushi 2/3: Y = (2/3)·I/Py = 60.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchi byudjeti 24 so‘m, Px = 4, Py = 3. X tovarning ketma-ket marginal foydaliliklari: [40, 32, 24, 16, 8], Y tovarniki: [30, 24, 18, 12, 6]. Har bir qadamda MU/P eng katta bo‘lgan birlikni olib borsa, optimal tanlovdagi umumiy foydalilik qancha?",
"o": [
"196",
"120",
"168",
"180"
],
"c": 3,
"w": "Birliklar MU/P kamayish tartibida tanlanadi: X=3, Y=4 (xarajat 24 so‘m). Jami foydalilik 180.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchi byudjeti 40 so‘m, Px = 5, Py = 6. X tovarning ketma-ket marginal foydaliliklari: [50, 40, 30, 20, 10], Y tovarniki: [36, 30, 24, 18, 12]. Har bir qadamda MU/P eng katta bo‘lgan birlikni olib borsa, optimal tanlovdagi umumiy foydalilik qancha?",
"o": [
"150",
"230",
"240",
"206"
],
"c": 1,
"w": "Birliklar MU/P kamayish tartibida tanlanadi: X=4, Y=3 (xarajat 38 so‘m). Jami foydalilik 230.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchi byudjeti 32 so‘m, Px = 6, Py = 4. X tovarning ketma-ket marginal foydaliliklari: [60, 45, 30, 15, 5], Y tovarniki: [40, 32, 24, 16, 8]. Har bir qadamda MU/P eng katta bo‘lgan birlikni olib borsa, optimal tanlovdagi umumiy foydalilik qancha?",
"o": [
"155",
"207",
"246",
"231"
],
"c": 3,
"w": "Birliklar MU/P kamayish tartibida tanlanadi: X=3, Y=3 (xarajat 30 so‘m). Jami foydalilik 231.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchi byudjeti 40 so‘m, Px = 4, Py = 7. X tovarning ketma-ket marginal foydaliliklari: [48, 36, 24, 12, 6], Y tovarniki: [35, 28, 21, 14, 7]. Har bir qadamda MU/P eng katta bo‘lgan birlikni olib borsa, optimal tanlovdagi umumiy foydalilik qancha?",
"o": [
"183",
"204",
"126",
"210"
],
"c": 1,
"w": "Birliklar MU/P kamayish tartibida tanlanadi: X=4, Y=3 (xarajat 37 so‘m). Jami foydalilik 204.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchi byudjeti 41 so‘m, Px = 6, Py = 5. X tovarning ketma-ket marginal foydaliliklari: [72, 60, 48, 36, 24], Y tovarniki: [50, 40, 30, 20, 10]. Har bir qadamda MU/P eng katta bo‘lgan birlikni olib borsa, optimal tanlovdagi umumiy foydalilik qancha?",
"o": [
"240",
"336",
"360",
"306"
],
"c": 1,
"w": "Birliklar MU/P kamayish tartibida tanlanadi: X=4, Y=3 (xarajat 39 so‘m). Jami foydalilik 336.",
"k": "pr"
},
{
"t": 4,
"q": "Iste’molchi byudjeti 30 so‘m, Px = 7, Py = 3. X tovarning ketma-ket marginal foydaliliklari: [56, 42, 28, 14, 7], Y tovarniki: [45, 36, 27, 18, 9]. Har bir qadamda MU/P eng katta bo‘lgan birlikni olib borsa, optimal tanlovdagi umumiy foydalilik qancha?",
"o": [
"233",
"261",
"224",
"140"
],
"c": 0,
"w": "Birliklar MU/P kamayish tartibida tanlanadi: X=2, Y=5 (xarajat 29 so‘m). Jami foydalilik 233.",
"k": "pr"
},
{
"t": 5,
"q": "Narx o‘zgarganda talab qilingan miqdorning umumiy o‘zgarishi qanday tarkibiy qismlardan iborat?",
"o": [
"Almashtirish samarasi va daromad samarasi yig‘indisidan",
"Almashtirish samarasi va narx samarasining ko‘paytmasidan",
"Faqat almashtirish samarasidan, daromad samarasi hisobga olinmaydi",
"Daromad samarasi va foydalilik samarasi yig‘indisidan"
],
"c": 0,
"w": "Umumiy samara = AS + DS.",
"k": "th"
},
{
"t": 5,
"q": "Almashtirish samarasi (substitution effect) nimani ifodalaydi?",
"o": [
"Nisbiy narx o‘zgarishi tufayli iste’molchining foydalilik darajasini saqlab tanlovni moslashtirishini",
"Daromad o‘zgarishi tufayli barcha tovarlar miqdorining bir xil nisbatda o‘zgarishini",
"Narx o‘zgarishi tufayli iste’molchining real daromadi o‘zgarishi natijasida tanlovi o‘zgarishini",
"Tovar sifati o‘zgarishi tufayli iste’molchi talabining o‘zgarishini va narx ta’sirini"
],
"c": 0,
"w": "AS — nisbiy narx; DS — real daromad.",
"k": "th"
},
{
"t": 5,
"q": "Daromad samarasi (income effect) nimani ifodalaydi?",
"o": [
"Nominal daromad o‘zgarishi tufayli bozordagi narxlarning o‘zgarishini va ularning ta’sirini",
"Nisbiy narxlar o‘zgarishi tufayli iste’molchining tovarlarni o‘zaro almashtirishini",
"Narx o‘zgarishi iste’molchining real daromadini o‘zgartirib, talabga ta’sir qilishini",
"Sotuvchi daromadi o‘zgarishi tufayli taklif miqdorining o‘zgarishi hamda uning natijasini"
],
"c": 2,
"w": "Narx ↓ → real daromad ↑ → talab o‘zgaradi.",
"k": "th"
},
{
"t": 5,
"q": "Normal tovar narxi pasayganda almashtirish va daromad samaralari...",
"o": [
"Ikkalasi ham tovar miqdorini kamaytiradi",
"Ikkalasi ham tovar miqdorini oshiradi",
"Almashtirish samarasi kamaytiradi, daromad samarasi oshiradi",
"Almashtirish samarasi oshiradi, daromad samarasi kamaytiradi"
],
"c": 1,
"w": "Normal tovarda AS va DS bir yo‘nalishda.",
"k": "th"
},
{
"t": 5,
"q": "Past toifali (inferior) tovar narxi pasayganda...",
"o": [
"Almashtirish samarasi miqdorni oshiradi, daromad samarasi esa kamaytiradi",
"Almashtirish samarasi miqdorni kamaytiradi, daromad samarasi oshiradi",
"Ikkala samara ham miqdorni oshiradi",
"Ikkala samara ham miqdorni kamaytiradi"
],
"c": 0,
"w": "Inferior: AS (+), DS (−).",
"k": "th"
},
{
"t": 5,
"q": "Qachon talab egri chizig‘i pastga qiyalangan bo‘lib qoladi (inferior, lekin Giffen emas) tovar uchun?",
"o": [
"Ikkala samara nolga teng bo‘lganda",
"Almashtirish samarasi daromad samarasidan kuchli bo‘lganda",
"Daromad samarasi musbat bo‘lganda",
"Daromad samarasi almashtirish samarasidan kuchli bo‘lganda"
],
"c": 1,
"w": "|AS| > |DS| → umumiy samara narx bilan teskari.",
"k": "th"
},
{
"t": 5,
"q": "Giffen tovari nima?",
"o": [
"Narxi o‘zgarganda talabi umuman o‘zgarmaydigan, zaruriy tovar",
"Narxi oshganda talab qilingan miqdori ham oshadigan, past toifali tovar",
"Narxi oshganda talab qilingan miqdori kamayadigan, oddiy normal tovar",
"Daromad oshganda talabi tez oshadigan, hashamatli va qimmat tovar"
],
"c": 1,
"w": "Giffen: inferior va kuchli daromad samarasi (|DS| > |AS|).",
"k": "th"
},
{
"t": 5,
"q": "Giffen tovari bo‘lishining zaruriy sharti qaysi?",
"o": [
"Tovar hashamatli bo‘lib, uning narxi iste’molchi byudjetiga nisbatan juda yuqori bo‘lishi",
"Tovar normal bo‘lib, almashtirish samarasi daromad samarasidan absolyut qiymatda katta bo‘lishi",
"Tovar past toifali bo‘lishi va daromad samarasi almashtirish samarasidan absolyut qiymatda katta bo‘lishi",
"Tovarning yaqin o‘rinbosarlari bo‘lmasligi va bozorda yagona ishlab chiqaruvchi mavjudligi"
],
"c": 2,
"w": "Faqat inferior tovar va kuchli DS Giffenga olib keladi.",
"k": "th"
},
{
"t": 5,
"q": "Veblen tovari (hashamatli, «obro‘ tovari») Giffen tovaridan nimasi bilan farq qiladi?",
"o": [
"Veblen tovarida narx oshganda talab oshishi obro‘ va statusni ko‘rsatish istagi bilan bog‘liq",
"Veblen tovari faqat iste’molchi daromadi juda kam bo‘lgan holatlarda sotib olinadi",
"Veblen tovarida talab egri chizig‘i doim pastga qiyalangan bo‘lib, talab qonuniga bo‘ysunadi",
"Veblen tovari har doim past toifali tovar bo‘lib, daromad samarasi bilan izohlanadi"
],
"c": 0,
"w": "Veblen effekti — iste’molning demonstrativ tabiati.",
"k": "th"
},
{
"t": 5,
"q": "Slutskiy bo‘yicha almashtirish samarasini aniqlashda narx o‘zgargandan keyin iste’molchining daromadi qanday tuzatiladi?",
"o": [
"Eski tanlovni yangi narxlarda aynan sotib olish mumkin bo‘ladigan darajaga o‘zgartiriladi",
"Foydalilik darajasi dastlabkidan ham yuqori bo‘ladigan darajaga qadar ko‘tariladi",
"Narx o‘zgarishiga qaramay daromad o‘zgartirilmaydi va dastlabki holatida qoldiriladi",
"Iste’molchi daromadi nol darajagacha tushiriladi va tanlov qayta ko‘rib chiqiladi"
],
"c": 0,
"w": "Slutskiy: I′ = I + ΔP·X0 — eski to‘plam sotib olinadigan daromad.",
"k": "th"
},
{
"t": 5,
"q": "Xiks bo‘yicha almashtirish samarasini aniqlashda kompensatsiya qanday amalga oshiriladi?",
"o": [
"Iste’molchi dastlabki foydalilik darajasida (bir xil BEC da) qoladigan qilib daromad tuzatiladi",
"Daromad umuman o‘zgartirilmaydi",
"Dastlabki tovar to‘plamini aynan sotib olish mumkin bo‘lgan darajada daromad tuzatiladi",
"Daromad yangi narxlar bo‘yicha ikki baravar ko‘paytiriladi"
],
"c": 0,
"w": "Xiks: foydalilik doimiy; Slutskiy: sotib olish qobiliyati doimiy.",
"k": "th"
},
{
"t": 5,
"q": "Slutskiy va Xiks usullarining umumiy natijasi (almashtirish samarasi) haqida nima deyish mumkin?",
"o": [
"Ular bir xil yo‘nalishdagi samara beradi, narx o‘zgarishi kichik bo‘lsa natijalar deyarli mos keladi",
"Xiks usuli faqat past toifali tovarlarga mos keladi, Slutskiy usuli esa faqat normalga",
"Ular doimo aynan bir xil son qiymatini beradi, narx o‘zgarishi qanchalik katta bo‘lmasin",
"Ular butunlay qarama-qarshi yo‘nalishdagi natija beradi va o‘zaro hech qachon mos kelmaydi"
],
"c": 0,
"w": "Slutskiy kompensatsiyasi Xiksdan ko‘proq (yoki teng).",
"k": "th"
},
{
"t": 5,
"q": "Narx pasayganda almashtirish samarasining ishorasi qanday bo‘ladi?",
"o": [
"Doimo nolga teng bo‘ladi",
"Har doim manfiy — tovar miqdori kamayadi",
"Tovar normal bo‘lsa musbat, past toifali bo‘lsa manfiy bo‘ladi",
"Har doim musbat — tovar miqdori oshadi"
],
"c": 3,
"w": "AS har doim narx bilan teskari yo‘nalishda (talab qonunining asosiy qismi).",
"k": "th"
},
{
"t": 5,
"q": "Daromad samarasining ishorasi nimaga bog‘liq?",
"o": [
"Faqat iste’molchining dastlabki miqdoriga",
"Faqat sotuvchilar soniga",
"Faqat narxning oshishi yoki kamayishiga",
"Tovarning normal yoki inferior bo‘lishiga"
],
"c": 3,
"w": "Normal: narx ↓ → DS (+); inferior: narx ↓ → DS (−).",
"k": "th"
},
{
"t": 5,
"q": "Daromad samarasi nolga teng bo‘lgan holat qaysi?",
"o": [
"Tovar mukammal elastik bo‘lib, narx biroz o‘zgarganda talab cheksiz o‘zgaradigan holat",
"Tovar Giffen tovari bo‘lib, narx oshganda talab ham kuchli oshadigan holat",
"Daromad o‘zgarganda talab qilingan miqdor o‘zgarmaydigan (kvazichiziqli foydalilikdagi) tovar",
"Tovar narxi o‘zgarmay qolgan va iste’molchi tanlovi ham o‘zgarmagan har qanday holat"
],
"c": 2,
"w": "Kvazichiziqli foydalilikda DS = 0, talab faqat AS bilan belgilanadi.",
"k": "th"
},
{
"t": 5,
"q": "Narx oshganda iste’molchining real daromadi...",
"o": [
"Kamayadi, chunki bir xil nominal daromadga kamroq tovar olish mumkin bo‘ladi",
"Faqat normal tovarlar uchun oshadi, past toifali tovarlar uchun esa kamayib boradi",
"O‘zgarmaydi, chunki nominal daromad o‘zgarmagani uchun sotib olish qobiliyati ham saqlanadi",
"Oshadi, chunki tovar qimmatlashgani sari iste’molchining boyligi va imkoniyati ortadi"
],
"c": 0,
"w": "P ↑ → sotib olish qobiliyati ↓.",
"k": "th"
},
{
"t": 5,
"q": "Quyidagi holat qaysi samaraga mos keladi: «Kartoshka narxi oshdi, aholi non va makaronga o‘ta boshladi»?",
"o": [
"Veblen samarasiga",
"Daromad samarasiga",
"Giffen samarasiga",
"Almashtirish samarasiga"
],
"c": 3,
"w": "Nisbiy narx o‘zgarishi → boshqa tovarga o‘tish = AS.",
"k": "th"
},
{
"t": 5,
"q": "«Kambag‘al oila uchun kartoshka narxi oshgach, go‘sht sotib olishdan voz kechib kartoshkani ko‘proq oldi» — bu holat...",
"o": [
"Hashamatli tovarga talab ortishi, chunki real daromad o‘sib, hamma sifatlini xohlaydi",
"Talabning mutlaq noelastik bo‘lishi, chunki kartoshka uchun o‘rinbosar umuman mavjud emas",
"Almashtirish samarasining oddiy ko‘rinishi, chunki kartoshka go‘shtga nisbatan arzonroq",
"Giffen paradoksi: daromad samarasi almashtirish samarasidan kuchli bo‘lgan holat"
],
"c": 3,
"w": "Kartoshka — inferior, byudjetning katta qismi; real daromad keskin tushdi.",
"k": "th"
},
{
"t": 5,
"q": "Kompensatsiyalangan talab egri chizig‘i nimani ko‘rsatadi?",
"o": [
"Foydalilik darajasi o‘zgarmaganda narx o‘zgarishiga javoban talab qilingan miqdorlarni",
"Daromad o‘zgarmaganda narx o‘zgarishiga javoban iste’molchi talab qilgan miqdorlarni",
"Narx o‘zgarmaganda daromad o‘zgarishiga javoban iste’molchi talab qilgan miqdorlarni",
"Narx o‘zgarganda sotuvchilar taklif qilgan va bozorga chiqargan tovar miqdorlarini"
],
"c": 0,
"w": "Xiks talabi faqat almashtirish samarasini o‘z ichiga oladi.",
"k": "th"
},
{
"t": 5,
"q": "Mehnat taklifida narx — soatlik ish haqi. Ish haqi oshganda daromad samarasi ko‘pincha...",
"o": [
"Mehnat taklifiga ta’sir qilmaydi",
"Dam olishni kamaytirishga (mehnat taklifini oshirishga) olib keladi",
"Faqat mehnat talabini kamaytiradi",
"Dam olishni ko‘paytirishga (mehnat taklifini kamaytirishga) olib keladi"
],
"c": 3,
"w": "Ish haqi ↑ → boyroq → dam olish (normal tovar) ko‘payadi; almashtirish samarasi esa ishni rag‘batlantiradi.",
"k": "th"
},
{
"t": 5,
"q": "Mehnat taklifi egri chizig‘ining orqaga egilishi qachon kuzatiladi?",
"o": [
"Ish haqi o‘zgarmay qolgan va ishchilar mehnat soatlarini o‘zgartirmaganda hamda dam olishda",
"Dam olish past toifali tovar bo‘lib, daromad oshganda ishchilar dam olishni kamaytirganda",
"Ish haqi past bo‘lganda almashtirish samarasi daromad samarasidan kuchli bo‘lib turganda",
"Ish haqi yuqori darajaga yetganda daromad samarasi almashtirish samarasidan kuchli bo‘lib qolganda"
],
"c": 3,
"w": "Orqaga egilgan mehnat taklifi: yuqori ish haqida DS > AS.",
"k": "th"
},
{
"t": 5,
"q": "Qarz oluvchi va jamg‘aruvchi uchun foiz stavkasi oshishi daromad samarasi jihatidan...",
"o": [
"Jamg‘aruvchiga ijobiy (boyroq bo‘ladi), qarz oluvchiga esa salbiy ta’sir qiladi",
"Hech kimga ta’sir qilmaydi, chunki foiz oshishi faqat banklar daromadiga ta’sir qiladi",
"Ikkalasiga ham ijobiy ta’sir qiladi, chunki foiz oshishi real daromadni oshiradi",
"Ikkalasiga ham salbiy ta’sir qiladi, chunki foiz oshishi real daromadni kamaytiradi"
],
"c": 0,
"w": "Foiz oshishi jamg‘aruvchining real daromadini oshiradi, qarz oluvchiniki kamayadi.",
"k": "th"
},
{
"t": 5,
"q": "Narx pasayganda byudjet chizig‘i buriladi. Almashtirish samarasini ajratish uchun qanday yordamchi chiziq chiziladi?",
"o": [
"Eski narx qiyaligiga ega bo‘lib, yangi optimal tanlov nuqtasidan o‘tuvchi yordamchi chiziq",
"Koordinata o‘qlaridan biriga parallel bo‘lgan va daromadi o‘zgarmaydigan yordamchi chiziq",
"Yangi narx qiyaligidagi chiziq: eski befarqlik egri chizig‘iga urinuvchi (Xiks) yoki eski nuqtadan o‘tuvchi (Slutskiy)",
"Daromadi nolga teng bo‘lgan holatni ifodalovchi va koordinata boshidan o‘tuvchi yordamchi chiziq"
],
"c": 2,
"w": "Yordamchi (kompensatsiyalangan) byudjet chizig‘i yangi nisbiy narxga parallel.",
"k": "th"
},
{
"t": 5,
"q": "Normal tovar bo‘lsa, narx pasayganda umumiy samara...",
"o": [
"Nolga teng bo‘ladi, chunki ikki samara bir-birini to‘liq bartaraf qilib yuboradi",
"Doimo musbat bo‘ladi, chunki ikki samara bir yo‘nalishda ishlaydi",
"Ishorasi noaniq bo‘ladi, chunki bu faqat iste’molchi didiga bog‘liq bo‘lib qoladi",
"Doimo manfiy bo‘ladi, chunki ikki samara qarama-qarshi yo‘nalishda ishlaydi"
],
"c": 1,
"w": "Normal tovar talab qonuniga bo‘ysunadi.",
"k": "th"
},
{
"t": 5,
"q": "Quyidagilardan qaysi birida daromad samarasi eng kuchli bo‘lishi kutiladi?",
"o": [
"Narxi umuman o‘zgarmaydigan tovar uchun hamma vaqt",
"Iste’molchi byudjetining katta qismini egallovchi tovar narxi o‘zgarganda",
"Byudjetning juda kichik qismini egallovchi tovar narxi o‘zgarganda",
"Mukammal o‘rinbosarlari bo‘lgan tovar narxi o‘zgarganda"
],
"c": 1,
"w": "Byudjet ulushi katta → real daromadga ta’sir katta.",
"k": "th"
},
{
"t": 5,
"q": "Almashtirish samarasi eng kuchli bo‘ladigan tovar qaysi?",
"o": [
"Yaqin o‘rinbosarlari ko‘p bo‘lgan tovar",
"Byudjetning kichik qismini egallovchi zaruriy tovar",
"Mukammal komplementi bor tovar",
"Yaqin o‘rinbosari bo‘lmagan zaruriy tovar"
],
"c": 0,
"w": "O‘rinbosarlar ko‘p → AS katta.",
"k": "th"
},
{
"t": 5,
"q": "Mukammal komplement tovarlar (L-shaklidagi BEC) uchun almashtirish samarasi...",
"o": [
"Nolga teng, chunki tovarlar doimiy nisbatda iste’mol qilinadi",
"Faqat manfiy qiymatga ega bo‘ladi, chunki tovarlar bir-biriga qarama-qarshi ta’sir qiladi",
"Eng katta qiymatga ega bo‘ladi, chunki tovarlar o‘zaro to‘liq almashtirilishi mumkin",
"Daromad samarasiga teng bo‘ladi, chunki ikkala samara bir xil kattalikka ega bo‘ladi"
],
"c": 0,
"w": "BEC burchagida MRS aniqlanmaydi: o‘zgartirish bo‘lmaydi.",
"k": "th"
},
{
"t": 5,
"q": "Narx pasayishi bilan iste’molchining farovonligi (foydalilik darajasi)...",
"o": [
"Faqat Giffen tovari uchun oshadi, boshqa barcha tovarlar uchun o‘zgarmay qoladi",
"Kamayadi, chunki narx pasayganda tovar sifati ham pasayib, foydalilik kamayadi",
"O‘zgarmaydi, chunki nominal daromad o‘zgarmagani uchun farovonlik ham o‘zgarmaydi",
"Oshadi, chunki u avvalgi to‘plamni sotib olib, qo‘shimcha mablag‘ga ega bo‘ladi"
],
"c": 3,
"w": "Narx ↓ → real daromad ↑ → yuqoriroq BEC.",
"k": "th"
},
{
"t": 5,
"q": "Giffen va past toifali tovarlar o‘rtasidagi munosabat haqidagi qaysi tasdiq to‘g‘ri?",
"o": [
"Barcha Giffen tovarlari past toifali bo‘ladi, lekin barcha past toifali tovarlar Giffen emas",
"Giffen tovarlari talab qonuniga to‘liq bo‘ysunadi va ularning talab chizig‘i pastga qiyalangan",
"Giffen tovari normal tovar bo‘lishi ham mumkin, agar iste’molchi daromadi yetarlicha yuqori bo‘lsa",
"Barcha past toifali tovarlar Giffen tovari bo‘ladi va ularning talabi narx bilan oshadi"
],
"c": 0,
"w": "Giffen ⊂ inferior.",
"k": "th"
},
{
"t": 5,
"q": "Real hayotda Giffen tovarlari kam uchrashining asosiy sababi nima?",
"o": [
"Ular har doim juda qimmat bo‘lib, oddiy iste’molchi ularni sotib olmaydi",
"Ular qonun bilan taqiqlangan va faqat maxsus ruxsat bilan sotiladi",
"Ular faqat xalqaro bozorda sotiladi, ichki bozorda esa umuman uchramaydi",
"Tovar byudjetning katta qismini egallashi va yaqin o‘rinbosari bo‘lmasligi shart"
],
"c": 3,
"w": "Shartlar juda qat’iy.",
"k": "th"
},
{
"t": 5,
"q": "Daromadning 20% ini sarflaydigan tovar narxi 10% ga oshdi. Real daromad taxminan...",
"o": [
"20% ga kamayadi",
"2% ga oshadi",
"2% ga kamayadi",
"10% ga kamayadi"
],
"c": 2,
"w": "Δ real daromad ≈ −ulush × %ΔP = −0,2·10 = −2%.",
"k": "th"
},
{
"t": 5,
"q": "Kompensatsiya qilingan narx pasayishi (Xiks) bo‘yicha iste’molchi miqdorini...",
"o": [
"O‘zgartirmaydi, chunki foydalilik darajasi doimiy bo‘lgani uchun tanlov ham o‘zgarmaydi",
"Kamaytiradi, chunki kompensatsiya tufayli iste’molchi real daromadi pasayib ketadi",
"Almashtirish samarasi tufayli oshiradi, chunki nisbatan arzonlashgan tovar afzal ko‘riladi",
"Daromad samarasi tufayli oshiradi, chunki real daromad kompensatsiya hisobiga o‘sib boradi"
],
"c": 2,
"w": "Foydalilik doimiy → faqat nisbiy narx ta’siri.",
"k": "th"
},
{
"t": 5,
"q": "Kvazichiziqli foydalilik funksiyasi U = √X + Y da X tovar uchun daromad samarasi...",
"o": [
"Cheksiz katta bo‘ladi, chunki funksiya X bo‘yicha botiq va daromadga juda sezgir",
"Manfiy bo‘ladi, chunki X past toifali tovar bo‘lib, daromad oshganda talab kamayadi",
"Nolga teng bo‘ladi, chunki X ning optimal miqdori daromadga bog‘liq emas",
"Musbat bo‘ladi, chunki X normal tovar bo‘lib, daromad oshganda talab ham oshadi"
],
"c": 2,
"w": "Kvazichiziqlida X ning optimumi faqat narxlar nisbatiga bog‘liq.",
"k": "th"
},
{
"t": 5,
"q": "Quyidagi hodisa daromad samarasiga misol bo‘ladi:",
"o": [
"Brend tanlashda reklama ta’siri ostida iste’molchi didining o‘zgarishi",
"Choy narxi oshgach, iste’molchining arzonroq qahvaga o‘tib qolishi",
"Benzin narxi oshgach, haydovchi boshqa xarajatlarini qisqartirib, kam yurishi",
"Do‘kon narxlarni pasaytirganda xaridorlar sonining sezilarli ko‘payishi"
],
"c": 2,
"w": "Real daromadning kamayishi → barcha xarajatlarni qayta ko‘rib chiqish.",
"k": "th"
},
{
"t": 5,
"q": "Narx pasaygandan keyin iste’molchi yangi byudjet chizig‘ida ushbu tovardan miqdorni 10 birlikka oshirdi. Agar almashtirish samarasi 7 birlik bo‘lsa, daromad samarasi nechaga teng?",
"o": [
"−3 birlik",
"3 birlik",
"7 birlik",
"17 birlik"
],
"c": 1,
"w": "Umumiy = AS + DS → DS = 10 − 7 = 3.",
"k": "th"
},
{
"t": 5,
"q": "Narx pasaygandan keyin tovar miqdori 4 birlikka kamaysa va almashtirish samarasi +2 bo‘lsa, daromad samarasi...",
"o": [
"−6 birlik bo‘ladi va tovar Giffen tovari hisoblanadi",
"+6 birlik bo‘ladi va tovar normal tovar hisoblanadi",
"+2 birlik bo‘ladi va tovar Giffen tovari hisoblanadi",
"−2 birlik bo‘ladi va tovar normal tovar hisoblanadi"
],
"c": 0,
"w": "−4 = 2 + DS → DS = −6; |DS| > |AS| va DS<0 → Giffen.",
"k": "th"
},
{
"t": 5,
"q": "Qaysi omil almashtirish samarasini kuchaytiradi?",
"o": [
"Tovarlar o‘rtasida yaqinlik (o‘rinbosarlik) darajasining oshishi",
"Iste’molchi daromadi miqdorining nolga yaqinlashib borishi",
"Tovarlar o‘rtasida o‘zaro to‘ldiruvchilik darajasining oshishi",
"Tovar narxining o‘zgarmay, bir xil darajada saqlanib turishi"
],
"c": 0,
"w": "O‘rinbosarlik yuqori → BEC to‘g‘rirog‘ → AS katta.",
"k": "th"
},
{
"t": 5,
"q": "Nominal daromad va narxlar bir xil foizga oshganda, iste’molchining real daromadi...",
"o": [
"Kamayadi va almashtirish samarasi sodir bo‘lib, tanlov o‘zgaradi",
"Oshadi va daromad samarasi sodir bo‘lib, tanlov o‘zgarib boradi",
"O‘zgarmaydi va na daromad, na almashtirish samarasi sodir bo‘ladi",
"Nolga tushadi va iste’molchi hech qanday tovar sotib ola olmaydi"
],
"c": 2,
"w": "Nisbiy narxlar va real daromad o‘zgarmaydi.",
"k": "th"
},
{
"t": 5,
"q": "Past toifali tovar narxi oshganda real daromadning kamayishi natijasida iste’molchi shu tovarni...",
"o": [
"Ko‘proq sotib olishi mumkin, chunki real daromad kamayib, u arzon past toifali tovarga o‘tadi",
"Sotib olishdan butunlay voz kechadi, chunki narx oshgani uchun tovar iste’molchiga yaramaydi",
"Hech qanday o‘zgarishsiz sotib oladi, chunki past toifali tovarga talab narxga bog‘liq emas",
"Kamroq sotib oladi, chunki real daromad kamaygani sari barcha tovarlar miqdori kamayadi"
],
"c": 0,
"w": "Inferior tovarda DS narx ↑ → miqdor ↑.",
"k": "th"
},
{
"t": 5,
"q": "Almashtirish samarasi talab qonunining qaysi qismini tushuntiradi?",
"o": [
"Daromad oshganda talab qilingan miqdor oshishining sof («real daromad») qismini",
"Muvozanat narxning shakllanishini hamda bozor tozalanish jarayonini",
"Taklif qonunining asosiy qismini va sotuvchilar xulq-atvorining o‘zgarishini",
"Narx oshganda talab qilingan miqdor kamayishining sof («nisbiy narx») qismini"
],
"c": 3,
"w": "AS har doim talab qonuniga mos.",
"k": "th"
},
{
"t": 5,
"q": "Uy xo‘jaligi sarflarida oziq-ovqat ulushi katta bo‘lgan kambag‘al oilalar oziq-ovqat narxi oshganda...",
"o": [
"Faqat almashtirish samarasini sezadi",
"Almashtirish va daromad samaralari nolga teng bo‘ladi",
"Hech qanday daromad samarasi sezmaydi",
"Kuchli daromad samarasini boshdan kechiradi"
],
"c": 3,
"w": "Ulush katta → real daromadga ta’sir kuchli.",
"k": "th"
},
{
"t": 5,
"q": "Narx oshganda iste’molchi tanlovining Slutskiy bo‘yicha dekompozitsiyasida oraliq (kompensatsiyalangan) nuqta qaysi shartga javob beradi?",
"o": [
"U eski nisbiy narxlarda yangi tanlov to‘plami sotib olinadigan byudjet chizig‘ida yotadi",
"U koordinata boshiga eng yaqin joylashgan nuqta bo‘ladi",
"U daromad nolga teng bo‘lgan nuqta bo‘ladi",
"U yangi nisbiy narxlarda eski tanlov to‘plami sotib olinadigan byudjet chizig‘ida yotadi"
],
"c": 3,
"w": "Slutskiy oraliq nuqtasi: yangi qiyalik, eski to‘plamdan o‘tuvchi chiziq.",
"k": "th"
},
{
"t": 5,
"q": "Past toifali tovar narxi pasayganda daromad samarasining ishorasi...",
"o": [
"Manfiy bo‘ladi: real daromad oshgani sababli iste’molchi shu tovarni kamroq sotib oladi",
"Almashtirish samarasining ishorasiga bog‘liq emas, lekin doim musbat bo‘ladi",
"Musbat bo‘ladi: real daromad oshgani sababli iste’molchi shu tovarni ko‘proq sotib oladi",
"Nolga teng bo‘ladi"
],
"c": 0,
"w": "Inferior: real daromad ↑ → talab ↓.",
"k": "th"
},
{
"t": 5,
"q": "Almashtirish samarasi va daromad samarasi haqidagi qaysi tasdiq noto‘g‘ri?",
"o": [
"Almashtirish samarasi narx pasayganda ba’zan miqdorni kamaytirishi mumkin",
"Daromad samarasining ishorasi tovarning normal yoki inferior ekanligiga bog‘liq",
"Almashtirish samarasi narx pasayganda miqdorni oshiradi",
"Giffen tovarida daromad samarasi almashtirish samarasidan kuchli bo‘ladi"
],
"c": 0,
"w": "AS har doim narxga teskari yo‘nalishda.",
"k": "th"
},
{
"t": 5,
"q": "Narx pasayishida normal tovar uchun umumiy samara 12 birlik bo‘lib, daromad samarasi 5 birlik bo‘lsa, almashtirish samarasi...",
"o": [
"−7 birlik",
"7 birlik",
"17 birlik",
"5 birlik"
],
"c": 1,
"w": "AS = 12 − 5 = 7.",
"k": "th"
},
{
"t": 5,
"q": "Kichik narx o‘zgarishida Slutskiy tenglamasi qaysi ko‘rinishda yoziladi?",
"o": [
"dX/dP = (almashtirish samarasi, manfiy) − X · (dX/dI)",
"dX/dP = (almashtirish samarasi, manfiy) + X · (dX/dI)",
"dX/dP = (dX/dI) · P − X",
"dX/dP = X · (dX/dI) / P"
],
"c": 0,
"w": "Slutskiy: umumiy = AS − X·(∂X/∂I).",
"k": "th"
},
{
"t": 5,
"q": "Iste’molchi foydalilik funksiyasi U = X·Y², daromadi 120 so‘m. X tovar narxi 2 dan 5 so‘mga oshdi. Slutskiy usuli bo‘yicha almashtirish samarasi X tovar miqdorini qanchaga o‘zgartiradi?",
"o": [
"-4",
"-12",
"-8",
"8"
],
"c": 2,
"w": "x0=20, x1=8; asl tanlovni saqlaydigan daromad I′=180, x_s=12. AS = x_s − x0 = -8.",
"k": "pr"
},
{
"t": 5,
"q": "Iste’molchi foydalilik funksiyasi U = X·Y², daromadi 216 so‘m. X tovar narxi 6 dan 8 so‘mga oshdi. Slutskiy usuli bo‘yicha daromad samarasi X tovar miqdorini qanchaga o‘zgartiradi?",
"o": [
"1",
"-1",
"-2",
"-3"
],
"c": 1,
"w": "x0=12, x1=9, x_s=10. DS = x1 − x_s = -1 (umumiy samara -3).",
"k": "pr"
},
{
"t": 5,
"q": "Iste’molchi foydalilik funksiyasi U = X·Y², daromadi 324 so‘m. X tovar narxi 3 dan 4 so‘mga oshdi. Slutskiy usuli bo‘yicha almashtirish samarasi X tovar miqdorini qanchaga o‘zgartiradi?",
"o": [
"-6",
"-9",
"6",
"-3"
],
"c": 0,
"w": "x0=36, x1=27; asl tanlovni saqlaydigan daromad I′=360, x_s=30. AS = x_s − x0 = -6.",
"k": "pr"
},
{
"t": 5,
"q": "Iste’molchi foydalilik funksiyasi U = X·Y², daromadi 396 so‘m. X tovar narxi 4 dan 22 so‘mga oshdi. Slutskiy usuli bo‘yicha daromad samarasi X tovar miqdorini qanchaga o‘zgartiradi?",
"o": [
"-18",
"-27",
"-9",
"9"
],
"c": 2,
"w": "x0=33, x1=6, x_s=15. DS = x1 − x_s = -9 (umumiy samara -27).",
"k": "pr"
},
{
"t": 5,
"q": "Iste’molchi foydalilik funksiyasi U = X·Y², daromadi 468 so‘m. X tovar narxi 4 dan 13 so‘mga oshdi. Slutskiy usuli bo‘yicha almashtirish samarasi X tovar miqdorini qanchaga o‘zgartiradi?",
"o": [
"-9",
"18",
"-18",
"-27"
],
"c": 2,
"w": "x0=39, x1=12; asl tanlovni saqlaydigan daromad I′=819, x_s=21. AS = x_s − x0 = -18.",
"k": "pr"
},
{
"t": 5,
"q": "Iste’molchi foydalilik funksiyasi U = X·Y², daromadi 540 so‘m. X tovar narxi 4 dan 6 so‘mga oshdi. Slutskiy usuli bo‘yicha daromad samarasi X tovar miqdorini qanchaga o‘zgartiradi?",
"o": [
"-15",
"-10",
"5",
"-5"
],
"c": 3,
"w": "x0=45, x1=30, x_s=35. DS = x1 − x_s = -5 (umumiy samara -15).",
"k": "pr"
},
{
"t": 5,
"q": "Iste’molchi foydalilik funksiyasi U = X·Y², daromadi 624 so‘m. X tovar narxi 4 dan 16 so‘mga oshdi. Slutskiy usuli bo‘yicha almashtirish samarasi X tovar miqdorini qanchaga o‘zgartiradi?",
"o": [
"26",
"-13",
"-26",
"-39"
],
"c": 2,
"w": "x0=52, x1=13; asl tanlovni saqlaydigan daromad I′=1 248, x_s=26. AS = x_s − x0 = -26.",
"k": "pr"
},
{
"t": 5,
"q": "Iste’molchi foydalilik funksiyasi U = X·Y², daromadi 672 so‘m. X tovar narxi 2 dan 8 so‘mga oshdi. Slutskiy usuli bo‘yicha daromad samarasi X tovar miqdorini qanchaga o‘zgartiradi?",
"o": [
"28",
"-84",
"-56",
"-28"
],
"c": 3,
"w": "x0=112, x1=28, x_s=56. DS = x1 − x_s = -28 (umumiy samara -84).",
"k": "pr"
},
{
"t": 5,
"q": "Iste’molchi X va Y tovarlarga U = X·Y² funksiya bo‘yicha pul sarflaydi; daromad 780 so‘m. X tovar narxi 4 dan 13 so‘mga oshdi. Iste’molchi dastlabki tanlovni (narx oshishidan oldingi to‘plamni) sotib ola olishi uchun unga qanday daromad kerak (so‘m)?",
"o": [
"960",
"789",
"780",
"1 365"
],
"c": 3,
"w": "Dastlabki X = 65. Qo‘shimcha xarajat = (13 − 4)·65 = 585; I′ = 780 + 585 = 1 365.",
"k": "pr"
},
{
"t": 5,
"q": "Iste’molchi X va Y tovarlarga U = X·Y² funksiya bo‘yicha pul sarflaydi; daromad 864 so‘m. X tovar narxi 3 dan 12 so‘mga oshdi. Iste’molchi dastlabki tanlovni (narx oshishidan oldingi to‘plamni) sotib ola olishi uchun unga qanday daromad kerak (so‘m)?",
"o": [
"1 080",
"873",
"864",
"1 728"
],
"c": 3,
"w": "Dastlabki X = 96. Qo‘shimcha xarajat = (12 − 3)·96 = 864; I′ = 864 + 864 = 1 728.",
"k": "pr"
},
{
"t": 5,
"q": "Iste’molchi X va Y tovarlarga U = X·Y² funksiya bo‘yicha pul sarflaydi; daromad 936 so‘m. X tovar narxi 6 dan 24 so‘mga oshdi. Iste’molchi dastlabki tanlovni (narx oshishidan oldingi to‘plamni) sotib ola olishi uchun unga qanday daromad kerak (so‘m)?",
"o": [
"1 170",
"1 872",
"954",
"936"
],
"c": 1,
"w": "Dastlabki X = 52. Qo‘shimcha xarajat = (24 − 6)·52 = 936; I′ = 936 + 936 = 1 872.",
"k": "pr"
},
{
"t": 5,
"q": "Iste’molchi X va Y tovarlarga U = X·Y² funksiya bo‘yicha pul sarflaydi; daromad 1008 so‘m. X tovar narxi 7 dan 8 so‘mga oshdi. Iste’molchi dastlabki tanlovni (narx oshishidan oldingi to‘plamni) sotib ola olishi uchun unga qanday daromad kerak (so‘m)?",
"o": [
"1 056",
"1 050",
"1 009",
"1 008"
],
"c": 0,
"w": "Dastlabki X = 48. Qo‘shimcha xarajat = (8 − 7)·48 = 48; I′ = 1008 + 48 = 1 056.",
"k": "pr"
},
{
"t": 5,
"q": "Iste’molchi X va Y tovarlarga U = X·Y² funksiya bo‘yicha pul sarflaydi; daromad 1080 so‘m. X tovar narxi 4 dan 20 so‘mga oshdi. Iste’molchi dastlabki tanlovni (narx oshishidan oldingi to‘plamni) sotib ola olishi uchun unga qanday daromad kerak (so‘m)?",
"o": [
"1 368",
"1 080",
"2 520",
"1 096"
],
"c": 2,
"w": "Dastlabki X = 90. Qo‘shimcha xarajat = (20 − 4)·90 = 1 440; I′ = 1080 + 1 440 = 2 520.",
"k": "pr"
},
{
"t": 5,
"q": "Iste’molchi X va Y tovarlarga U = X·Y² funksiya bo‘yicha pul sarflaydi; daromad 1152 so‘m. X tovar narxi 2 dan 8 so‘mga oshdi. Iste’molchi dastlabki tanlovni (narx oshishidan oldingi to‘plamni) sotib ola olishi uchun unga qanday daromad kerak (so‘m)?",
"o": [
"1 158",
"1 152",
"2 304",
"1 440"
],
"c": 2,
"w": "Dastlabki X = 192. Qo‘shimcha xarajat = (8 − 2)·192 = 1 152; I′ = 1152 + 1 152 = 2 304.",
"k": "pr"
},
{
"t": 5,
"q": "Tovar narxi pasayganda iste’molchi miqdori 40 dan 38 ga o‘zgardi. Asl foydalilikni saqlaydigan kompensatsiyalangan talab bo‘yicha miqdor 46 bo‘lsa, daromad samarasi qancha va tovar qanday tovar?",
"o": [
"6; normal tovar",
"-8; normal tovar",
"-8; Giffen tovari",
"-2; Giffen tovari"
],
"c": 2,
"w": "Almashtirish samarasi = 46−40 = 6 (+); daromad samarasi = 38−46 = -8 (manfiy → tovar past toifali; umumiy samara manfiy → Giffen).",
"k": "pr"
},
{
"t": 5,
"q": "Tovar narxi pasayganda iste’molchi miqdori 50 dan 52 ga o‘zgardi. Asl foydalilikni saqlaydigan kompensatsiyalangan talab bo‘yicha miqdor 56 bo‘lsa, daromad samarasi qancha va tovar qanday tovar?",
"o": [
"-4; normal tovar",
"2; past toifali tovar",
"-4; past toifali tovar",
"6; normal tovar"
],
"c": 2,
"w": "Almashtirish samarasi = 56−50 = 6 (+); daromad samarasi = 52−56 = -4 (manfiy → tovar past toifali).",
"k": "pr"
},
{
"t": 5,
"q": "Tovar narxi pasayganda iste’molchi miqdori 30 dan 31 ga o‘zgardi. Asl foydalilikni saqlaydigan kompensatsiyalangan talab bo‘yicha miqdor 38 bo‘lsa, daromad samarasi qancha va tovar qanday tovar?",
"o": [
"-7; normal tovar",
"-7; past toifali tovar",
"8; normal tovar",
"1; past toifali tovar"
],
"c": 1,
"w": "Almashtirish samarasi = 38−30 = 8 (+); daromad samarasi = 31−38 = -7 (manfiy → tovar past toifali).",
"k": "pr"
},
{
"t": 5,
"q": "Tovar narxi pasayganda iste’molchi miqdori 60 dan 57 ga o‘zgardi. Asl foydalilikni saqlaydigan kompensatsiyalangan talab bo‘yicha miqdor 65 bo‘lsa, daromad samarasi qancha va tovar qanday tovar?",
"o": [
"-8; normal tovar",
"-8; Giffen tovari",
"5; normal tovar",
"-3; Giffen tovari"
],
"c": 1,
"w": "Almashtirish samarasi = 65−60 = 5 (+); daromad samarasi = 57−65 = -8 (manfiy → tovar past toifali; umumiy samara manfiy → Giffen).",
"k": "pr"
},
{
"t": 5,
"q": "Tovar narxi pasayganda iste’molchi miqdori 24 dan 22 ga o‘zgardi. Asl foydalilikni saqlaydigan kompensatsiyalangan talab bo‘yicha miqdor 30 bo‘lsa, daromad samarasi qancha va tovar qanday tovar?",
"o": [
"-8; normal tovar",
"-2; Giffen tovari",
"6; normal tovar",
"-8; Giffen tovari"
],
"c": 3,
"w": "Almashtirish samarasi = 30−24 = 6 (+); daromad samarasi = 22−30 = -8 (manfiy → tovar past toifali; umumiy samara manfiy → Giffen).",
"k": "pr"
},
{
"t": 5,
"q": "Tovar narxi pasayganda iste’molchi miqdori 80 dan 79 ga o‘zgardi. Asl foydalilikni saqlaydigan kompensatsiyalangan talab bo‘yicha miqdor 88 bo‘lsa, daromad samarasi qancha va tovar qanday tovar?",
"o": [
"-1; Giffen tovari",
"-9; normal tovar",
"-9; Giffen tovari",
"8; normal tovar"
],
"c": 2,
"w": "Almashtirish samarasi = 88−80 = 8 (+); daromad samarasi = 79−88 = -9 (manfiy → tovar past toifali; umumiy samara manfiy → Giffen).",
"k": "pr"
},
{
"t": 6,
"q": "Iqtisodiyotda «tavakkalchilik» (risk) va «noaniqlik» (uncertainty) o‘rtasidagi farq nimada?",
"o": [
"Tavakkalchilik faqat moliyaviy bozorlarda, noaniqlik faqat tovar bozorlarida uchraydi",
"Ular bir xil tushuncha bo‘lib, faqat nomi bilan farq qiladi",
"Tavakkalchilikda natijalar ehtimoli noma’lum, noaniqlikda esa ma’lum bo‘ladi",
"Tavakkalchilikda natijalar ehtimoli ma’lum, noaniqlikda esa ehtimollar noma’lum bo‘ladi"
],
"c": 3,
"w": "Nayt: risk — ehtimollar ma’lum; noaniqlik — noma’lum.",
"k": "th"
},
{
"t": 6,
"q": "Kutilayotgan qiymat (matematik kutilma) qanday hisoblanadi?",
"o": [
"Natijalarning eng katta va eng kichik qiymatlari o‘rtasidagi farqni topish orqali",
"Natija qiymatlarining kvadratlarini ehtimollarga ko‘paytirib, yig‘indisini topish orqali",
"Har bir natija qiymatini uning ehtimoliga ko‘paytirib, hosilalarni qo‘shish orqali",
"Natija qiymatlarini ehtimolliklar yig‘indisiga bo‘lib, o‘rtacha qiymatni topish orqali"
],
"c": 2,
"w": "E(X) = Σ p_i · x_i.",
"k": "th"
},
{
"t": 6,
"q": "Dispersiya (variance) va standart og‘ish tavakkalchilik o‘lchovi sifatida nimani ko‘rsatadi?",
"o": [
"Ehtimollar yig‘indisining birdan chetlashishini va ehtimollarning to‘liqligini",
"Natijalarning eng yuqori va eng past qiymatlari o‘rtasidagi farqning kattaligini",
"Natijalarning kutilayotgan qiymatdan o‘rtacha chetlashishini, ya’ni tarqoqlikni",
"Natijalarning kutilayotgan qiymatga aynan tengligini va ularning o‘zgarmasligini"
],
"c": 2,
"w": "Σ p(x − E)² — tavakkalchilik o‘lchovi.",
"k": "th"
},
{
"t": 6,
"q": "Ikki loyiha kutilayotgan daromadi bir xil. Standart og‘ishi katta bo‘lgan loyiha...",
"o": [
"Tavakkalchiligi past hisoblanadi",
"Ehtimoli bir xil bo‘lgan loyiha hisoblanadi",
"Kutilayotgan foydasi yuqoriroq hisoblanadi",
"Tavakkalchiligi yuqori hisoblanadi"
],
"c": 3,
"w": "Teng E da σ katta → riskli.",
"k": "th"
},
{
"t": 6,
"q": "Tavakkalchilikdan qochuvchi (risk-averse) iste’molchi uchun foydalilik funksiyasi...",
"o": [
"Boylikka bog‘liq bo‘lmaydi, ya’ni foydalilik doimiy va o‘zgarmas darajada saqlanadi",
"Boylikka nisbatan to‘g‘ri chiziq bo‘ladi, ya’ni marginal foydalilik doimiy qoladi",
"Boylikka nisbatan qavariq (konveks) bo‘ladi, ya’ni boylikning marginal foydaliligi ortadi",
"Boylikka nisbatan botiq (konkav) bo‘ladi, ya’ni boylikning marginal foydaliligi kamayadi"
],
"c": 3,
"w": "Konkav U(W): U(E[W]) > E[U(W)].",
"k": "th"
},
{
"t": 6,
"q": "Tavakkalchilikka befarq (risk-neutral) shaxs uchun foydalilik funksiyasi...",
"o": [
"Boylikka nisbatan botiq bo‘ladi",
"Boylikka nisbatan vertikal bo‘ladi",
"Boylikka nisbatan qavariq bo‘ladi",
"Boylikka nisbatan chiziqli bo‘ladi"
],
"c": 3,
"w": "Risk-neutral: faqat kutilayotgan qiymatga qaraydi.",
"k": "th"
},
{
"t": 6,
"q": "Tavakkalchilikni yoqtiruvchi (risk-loving) shaxs uchun foydalilik funksiyasi...",
"o": [
"Boylikka nisbatan chiziqli bo‘ladi",
"Boylikka nisbatan qavariq (konveks) bo‘ladi",
"Doimiy qiymatga ega bo‘ladi",
"Boylikka nisbatan botiq (konkav) bo‘ladi"
],
"c": 1,
"w": "Konveks U(W): E[U(W)] > U(E[W]).",
"k": "th"
},
{
"t": 6,
"q": "Kutilayotgan foydalilik (expected utility) nazariyasiga ko‘ra, shaxs...",
"o": [
"Eng yomon mumkin bo‘lgan natija foydaliligini maksimallashtirishga harakat qiladi",
"Eng yaxshi mumkin bo‘lgan natija ro‘y berish ehtimolini maksimallashtirishga harakat qiladi",
"Natijalar pul qiymatining oddiy o‘rtacha qiymatini maksimallashtirishga harakat qiladi",
"Natijalar foydaliligining ehtimol bo‘yicha o‘rtacha qiymatini maksimallashtiradi"
],
"c": 3,
"w": "Fon Neyman–Morgenstern: E[U] = Σ p·U(x).",
"k": "th"
},
{
"t": 6,
"q": "Aniq ekvivalent (certainty equivalent) nima?",
"o": [
"Lotereyaning kutilayotgan qiymatidan har doim katta bo‘ladigan kafolatlangan summa",
"Lotereya bilan bir xil foydalilik keltiradigan kafolatlangan summa",
"Lotereyaning eng katta mumkin bo‘lgan yutug‘i miqdori va uning ehtimoli",
"Lotereyada ishtirok etish uchun to‘lanadigan va qaytarilmaydigan chipta narxi"
],
"c": 1,
"w": "U(CE) = E[U].",
"k": "th"
},
{
"t": 6,
"q": "Tavakkalchilikdan qochuvchi shaxs uchun aniq ekvivalent...",
"o": [
"Doimo nolga teng bo‘ladi, chunki tavakkalchilikdan qochuvchi lotereyada qatnashmaydi",
"Kutilayotgan qiymatdan katta bo‘ladi, farq esa tavakkalchilik uchun mukofot hisoblanadi",
"Kutilayotgan qiymatdan kichik bo‘ladi, farq tavakkalchilik uchun to‘lov (risk premium) bo‘ladi",
"Kutilayotgan qiymatga teng bo‘ladi, shuning uchun tavakkalchilik uchun to‘lov bo‘lmaydi"
],
"c": 2,
"w": "Risk premium = E(W) − CE > 0 (risk-averse uchun).",
"k": "th"
},
{
"t": 6,
"q": "Sug‘urtaning iqtisodiy mohiyati nimada?",
"o": [
"Katta zarar xavfini ko‘p sug‘urtalanuvchilar o‘rtasida taqsimlab, tavakkalchilikni kamaytirishda",
"Barcha zararlarni faqat davlat zimmasiga yuklab, jamiyat xarajatini kamaytirishda",
"Sug‘urta kompaniyasi foydasini har qanday sharoitda ham kafolatlab turishda va oshirishda",
"Zarar yuz berish ehtimolini nolga tushirib, voqea sodir bo‘lishining oldini olishda"
],
"c": 0,
"w": "Risk pooling: katta sonlar qonuni.",
"k": "th"
},
{
"t": 6,
"q": "Aktuar jihatdan adolatli sug‘urta mukofoti qaysi formula bilan topiladi?",
"o": [
"Zarar ehtimoli × zarar miqdori",
"Zarar miqdoridan ehtimol foizi ayirmasi",
"Zarar ehtimoli + zarar miqdori",
"Zarar miqdori / zarar ehtimoli"
],
"c": 0,
"w": "Fair premium = p·L.",
"k": "th"
},
{
"t": 6,
"q": "Tavakkalchilikdan qochuvchi shaxs adolatli sug‘urtaga to‘liq sug‘urta...",
"o": [
"Faqat qisman sug‘urtalaydi, chunki to‘liq sug‘urta foydasiz va ortiqcha xarajat bo‘ladi",
"Qiladi, chunki kafolatlangan boylik kutilayotgan boylikka teng bo‘lib, foydalilik yuqoriroq bo‘ladi",
"Qilmaydi, chunki tavakkalchilik har doim foydali bo‘lib, uni chetlab o‘tish samarasiz",
"Qilmaydi, chunki sug‘urta kutilayotgan boylikni kamaytiradi va foydalilikni pasaytiradi"
],
"c": 1,
"w": "Adolatli narxda risk-averse shaxs to‘liq sug‘urta qiladi.",
"k": "th"
},
{
"t": 6,
"q": "Ko‘p sonli mustaqil tavakkalchiliklar birlashtirilganda o‘rtacha zararning tarqoqligi...",
"o": [
"O‘zgarmaydi (katta sonlar qonuni)",
"Nolga tenglashadi (katta sonlar qonuni)",
"Kamayadi (katta sonlar qonuni)",
"Oshadi (katta sonlar qonuni)"
],
"c": 2,
"w": "Diversifikatsiya/pooling: σ/√n.",
"k": "th"
},
{
"t": 6,
"q": "Diversifikatsiya nima?",
"o": [
"Aktivlarni sotib olmay, mablag‘ni naqd pul ko‘rinishida uyda saqlab turish",
"Faqat xavfsiz aktivlarni sotib olib, hech qanday tavakkalchilikka yo‘l qo‘ymaslik",
"Mablag‘larni turli aktivlarga joylashtirib, umumiy tavakkalchilikni kamaytirish",
"Barcha mablag‘ni eng daromadli bitta aktivga joylab, foydani maksimal oshirish"
],
"c": 2,
"w": "Tuxumni bitta savatga solmaslik.",
"k": "th"
},
{
"t": 6,
"q": "Diversifikatsiya qaysi turdagi tavakkalchilikni samarali kamaytiradi?",
"o": [
"Barcha turdagi tavakkalchilikni to‘liq yo‘q qiladi",
"Inflyatsiya tavakkalchiligini",
"Butun bozorga ta’sir qiluvchi (sistemali) tavakkalchilikni",
"Individual (idiosinkratik) tavakkalchilikni"
],
"c": 3,
"w": "Sistemali risk diversifikatsiyalanmaydi.",
"k": "th"
},
{
"t": 6,
"q": "Aktivlar daromadlari o‘rtasida manfiy korrelyatsiya mavjud bo‘lsa, portfel tavakkalchiligi...",
"o": [
"Alohida aktivlar tavakkalchiligidan kamroq bo‘ladi",
"O‘zgarmaydi",
"Alohida aktivlar tavakkalchiligidan ko‘proq bo‘ladi",
"Doim nolga teng bo‘ladi"
],
"c": 0,
"w": "Manfiy korrelyatsiya tebranishlarni bir-birini qoplaydi.",
"k": "th"
},
{
"t": 6,
"q": "Axborotning assimetrikligi nima?",
"o": [
"Bitim barcha ishtirokchilarining bir xil hajm va sifatdagi axborotga ega bo‘lishi",
"Bitim ishtirokchilaridan birining boshqasidan ko‘ra ko‘proq yoki sifatliroq axborotga ega bo‘lishi",
"Bozorda axborotning umuman mavjud bo‘lmasligi va hech kimning hech narsani bilmasligi",
"Axborotning faqat davlat tomonidan yagona manbadan, hamma uchun bir xil berilishi"
],
"c": 1,
"w": "Masalan, sotuvchi mashina sifatini xaridordan yaxshiroq biladi.",
"k": "th"
},
{
"t": 6,
"q": "Salbiy tanlov (adverse selection) deb nimaga aytiladi?",
"o": [
"Tovar narxining muvozanat darajasidan past belgilanishi va natijada tanqislik paydo bo‘lishi",
"Bozor ishtirokchilarining barchasi bir xil sifatdagi tovar yoki xizmatni tanlashi hamda xaridi",
"Bitimdan oldin axborot assimetriyasi tufayli yuqori xavfli ishtirokchilar bozorga ko‘proq jalb etilishi",
"Bitimdan keyin sug‘urtalangan shaxsning avvalgidan ehtiyotsizroq harakat qila boshlashi"
],
"c": 2,
"w": "Adverse selection — «ex ante»; moral hazard — «ex post».",
"k": "th"
},
{
"t": 6,
"q": "«Limonlar bozori» (Akerlof) modelida sifatsiz mashinalar bozorni «siqib chiqaradi», chunki...",
"o": [
"Xaridor sifatni ajrata olmay o‘rtacha narx to‘laydi, shuning uchun yaxshi mashina egalari bozordan chiqadi",
"Xaridorlar faqat eng arzon mashinalarni xohlaydi, sifatga umuman e’tibor bermaydi va tanlamaydi",
"Davlat sifatsiz mashinalarni subsidiyalaydi, shu sababli ularning ulushi bozorda ortib boradi",
"Sotuvchilar sifatsiz mashinalarni doimo juda qimmat narxda sotib, katta foyda olib turadi"
],
"c": 0,
"w": "Axborot assimetriyasi → sifatli tovarlar bozordan chiqadi.",
"k": "th"
},
{
"t": 6,
"q": "Axloqiy tavakkal (moral hazard) deb nimaga aytiladi?",
"o": [
"Sug‘urta kompaniyasining to‘lov qobiliyatini yo‘qotib, bankrot bo‘lib qolishi",
"Sug‘urtalanganidan so‘ng shaxs ehtiyotkorligini kamaytirib, zarar ehtimolini oshirishi",
"Sug‘urta mukofotining barcha mijozlar uchun bir xil miqdorda belgilab qo‘yilishi",
"Sug‘urta olishdan oldin yuqori xavfli mijozlarning sug‘urtaga ko‘proq jalb etilishi"
],
"c": 1,
"w": "Moral hazard — bitimdan keyingi xulq.",
"k": "th"
},
{
"t": 6,
"q": "Sug‘urtada axloqiy tavakkalni kamaytirish usuli qaysi?",
"o": [
"Franshiza (mijozning o‘z ulushi) va qisman qoplash joriy qilish",
"Zarar to‘g‘risidagi axborotni sug‘urta kompaniyasidan yashirib qo‘yish",
"Sug‘urta mukofotini nolga tushirib, mijozlarni jalb qilishga harakat qilish",
"Barcha zararlarni to‘liq, 100 foiz miqdorda qoplashni kafolatlash"
],
"c": 0,
"w": "Mijoz ham zararning bir qismini ko‘taradi → ehtiyotkorroq bo‘ladi.",
"k": "th"
},
{
"t": 6,
"q": "Sug‘urtada salbiy tanlovni kamaytirish usuli qaysi?",
"o": [
"Mijozlarni xavf guruhlariga ajratib, har biriga mos mukofot belgilash va ma’lumot so‘rash",
"Barcha mijozlarga, xavf darajasidan qat’i nazar, bir xil past mukofot belgilash",
"Sug‘urtani faqat eng xavfli mijozlarga berib, boshqalarga xizmat ko‘rsatmaslik",
"Mijozlardan hech qanday axborot so‘ramay, hammani bir xil shartlarda sug‘urtalash"
],
"c": 0,
"w": "Skrining va tabaqalashtirish.",
"k": "th"
},
{
"t": 6,
"q": "Signal berish (signaling) nima?",
"o": [
"Raqobatchi firmalarning o‘zaro kelishib, narxni bir xil darajada belgilashi",
"Davlatning narxlarni tartibga solib, bozor ishtirokchilariga yo‘nalish berishi",
"Axborotga ega bo‘lmagan tomonning narxni sun’iy ravishda oshirib yuborishi",
"Axborotga ega tomonning o‘z sifatini boshqalarga ishonchli ko‘rsatish uchun qiladigan harakati"
],
"c": 3,
"w": "Masalan, ta’lim diplomi — mehnat bozorida signal (Spens).",
"k": "th"
},
{
"t": 6,
"q": "Mehnat bozorida diplom signal sifatida ishlashining sharti qaysi?",
"o": [
"Signal berish qobiliyati yuqori bo‘lganlar uchun arzonroq, past bo‘lganlar uchun qimmatroq bo‘lishi",
"Signal faqat ish beruvchi tomonidan beriladigan va ishchi bilmaydigan bo‘lishi",
"Signal barcha ishchilar uchun, qobiliyatidan qat’i nazar, bir xil xarajatli bo‘lishi",
"Signal hech kimga hech qanday xarajat keltirmasdan, bepul berilishi mumkin bo‘lishi"
],
"c": 0,
"w": "Ajratuvchi muvozanat: signal xarajati turli tipda farq qiladi.",
"k": "th"
},
{
"t": 6,
"q": "Tavakkalchilik bilan bog‘liq «tavakkalchilik uchun to‘lov» (risk premium) qanday ma’noni anglatadi?",
"o": [
"Lotereyada ishtirok etish natijasida olish mumkin bo‘lgan eng kichik yutuq miqdori",
"Tavakkalchilikdan qochuvchi shaxs kafolatli natija evaziga voz kechishga tayyor boylik qismini",
"Tavakkalchilik uchun davlat byudjetiga to‘lanadigan va qonun bilan belgilangan soliq",
"Sug‘urta kompaniyasining ma’muriy xarajatlarini qoplash uchun undiriladigan to‘lov"
],
"c": 1,
"w": "Risk premium = E(W) − CE.",
"k": "th"
},
{
"t": 6,
"q": "Agar U(W) = √W va W = 100 kafolatlangan bo‘lsa, shaxsning foydaliligi...",
"o": [
"10 ga teng",
"50 ga teng",
"100 ga teng",
"1 ga teng"
],
"c": 0,
"w": "U = √100 = 10.",
"k": "th"
},
{
"t": 6,
"q": "Foydalilik funksiyasi U(W) = ln W bo‘lgan shaxs tavakkalchilikka nisbatan...",
"o": [
"Tavakkalchilikka munosabati noaniq, chunki ln W boylik darajasiga bog‘liq",
"Tavakkalchilikdan qochuvchi hisoblanadi, chunki ln W botiq funksiya",
"Tavakkalchilikka befarq hisoblanadi, chunki ln W chiziqli funksiya bo‘ladi",
"Tavakkalchilikni yoqtiruvchi hisoblanadi, chunki ln W qavariq funksiya bo‘ladi"
],
"c": 1,
"w": "U″ = −1/W² < 0 → konkav.",
"k": "th"
},
{
"t": 6,
"q": "Sankt-Peterburg paradoksi nimani ko‘rsatadi?",
"o": [
"Sug‘urta hech qachon foydali emasligi va undan voz kechish zarurligini ko‘rsatadi",
"Odamlar har doim kutilayotgan qiymatga mutlaq mos ravishda qaror qabul qilishini ko‘rsatadi",
"Odamlar cheksiz kutilayotgan qiymatli o‘yinga cheklangan summa to‘laydi — marginal foydalilik kamayadi",
"Lotereyalar har doim foydali bo‘lishi va ularda ishtirok etish maqsadga muvofiqligini ko‘rsatadi"
],
"c": 2,
"w": "Bernulli: foydalilikning marginal kamayishi tufayli yechiladi.",
"k": "th"
},
{
"t": 6,
"q": "Aktsiyalar bozorida yuqori kutilayotgan daromad odatda nima bilan birga keladi?",
"o": [
"Past tavakkalchilik bilan",
"Yuqoriroq tavakkalchilik bilan",
"Doimiy kafolatlangan daromad bilan",
"Tavakkalchilikning yo‘qligi bilan"
],
"c": 1,
"w": "Risk–daromad almashinuvi (trade-off).",
"k": "th"
},
{
"t": 6,
"q": "Tavakkalchilikdan qochuvchi investor uchun kafolatlangan daromadli obligatsiya va riskli aktsiya o‘rtasida tanlovda...",
"o": [
"Aktsiya va obligatsiyani bir-biridan farqlamaydi va ular o‘rtasida befarq bo‘lib qoladi",
"Riskli aktsiya yetarli qo‘shimcha daromad (risk premium) bermasa, obligatsiyani afzal ko‘radi",
"Har doim aktsiyani tanlaydi, chunki aktsiya kutilayotgan daromadi yuqoriroq bo‘ladi",
"Har doim tavakkalchilikni yoqtiradi va kafolatlangan daromadli obligatsiyani rad etadi"
],
"c": 1,
"w": "Risk premium yetarli bo‘lsagina riskli aktiv tanlanadi.",
"k": "th"
},
{
"t": 6,
"q": "Qisman sug‘urta (franshiza bilan) afzalligi nima?",
"o": [
"Sug‘urta kompaniyasi foydasini cheksiz oshirib, mukofotni sezilarli ko‘paytiradi",
"Sug‘urtalanuvchini butunlay tavakkalchiliksiz qilib, barcha xavfni bartaraf etadi",
"Mijozning barcha zararini 100 foiz qoplab, hech qanday ulush qoldirmaydi",
"Mukofotni kamaytiradi va sug‘urtalanuvchini ehtiyotkor bo‘lishga rag‘batlantiradi"
],
"c": 3,
"w": "Franshiza moral hazardni kamaytiradi.",
"k": "th"
},
{
"t": 6,
"q": "Optsion (variant) qiymatiga ko‘ra, aktsiya bahosining tebranishi (volatillik) oshsa, call-optsion narxi...",
"o": [
"O‘zgarmaydi, chunki optsion narxi aktsiya tebranishiga bog‘liq bo‘lmay qoladi",
"Nolga tushadi, chunki yuqori tebranishda optsion butunlay qadrsizlanib ketadi",
"Oshadi, chunki yutuq potensiali cheksiz, zarar esa cheklangan bo‘ladi",
"Kamayadi, chunki tavakkalchilik oshgani sari optsion jozibadorligi ham pasayadi"
],
"c": 2,
"w": "Optsionning asimmetrik to‘lov tuzilmasi.",
"k": "th"
},
{
"t": 6,
"q": "Quyidagilardan qaysi biri tavakkalchilikni boshqarish usuli emas?",
"o": [
"Barcha mablag‘ni bitta aktivga joylash",
"Sug‘urta qilish",
"Diversifikatsiya qilish",
"Xedjlash (hedging)"
],
"c": 0,
"w": "Konsentratsiya riskni oshiradi.",
"k": "th"
},
{
"t": 6,
"q": "Xedjlash nima?",
"o": [
"Mavjud pozitsiyaning narx xavfini qarama-qarshi pozitsiya orqali kamaytirish",
"Aktivlarni sotmasdan, uzoq muddat davomida o‘zgarishsiz saqlab turish usuli",
"Soliq to‘lashdan qochish va daromadni yashirish uchun qo‘llaniladigan usul",
"Tavakkalchilikni ataylab oshirish orqali yuqori foyda olishga intilish usuli"
],
"c": 0,
"w": "Masalan, fyuchers kontraktlari bilan narx tavakkalini cheklash.",
"k": "th"
},
{
"t": 6,
"q": "Tavakkalchilik mavjud sharoitda ikki loyihani solishtirishda «variatsiya koeffitsiyenti» nimani ko‘rsatadi?",
"o": [
"Kutilayotgan daromad va dispersiyaning o‘zaro ko‘paytmasi bo‘lgan kattalikni",
"Bir birlik kutilayotgan daromadga to‘g‘ri keladigan tavakkalchilik (σ/E) miqdorini",
"Barcha mumkin bo‘lgan natijalar ehtimollarining yig‘indisi bo‘lgan kattalikni",
"Eng yuqori va eng past mumkin bo‘lgan daromadlar orasidagi farqning kattaligini"
],
"c": 1,
"w": "CV = σ / E.",
"k": "th"
},
{
"t": 6,
"q": "Teng ehtimol bilan 0 yoki 200 yutuq beruvchi lotereya va 100 kafolatlangan summa mavjud. Risk-averse shaxs...",
"o": [
"Kafolatlangan 100 ni afzal ko‘radi, chunki kutilayotgan qiymatlar teng, lekin xavf yo‘q",
"Lotereyani afzal ko‘radi, chunki yutish va yutqazish ehtimollari o‘zaro teng bo‘ladi",
"Lotereyani afzal ko‘radi, chunki yutuq 200 ga yetishi mumkin va bu foydali bo‘ladi",
"Ikkalasini ham farqlamaydi, chunki kutilayotgan qiymatlar teng bo‘lgani uchun befarq"
],
"c": 0,
"w": "E = 100; risk-averse uchun kafolat afzal.",
"k": "th"
},
{
"t": 6,
"q": "Moliyaviy bozorlarda «likvidlik» tavakkalchiligi nima?",
"o": [
"Soliq stavkalarining kutilmaganda o‘zgarib, daromadni kamaytirib yuborishi xavfi",
"Valyuta kursining o‘zgarmay qolishi sababli foyda ko‘rilmay qolishi xavfi",
"Aktivni tez va narxini sezilarli yo‘qotmasdan pulga aylantira olmaslik xavfi",
"Aktiv narxining uzluksiz va doimiy ravishda oshib borishi ehtimoli hamda xavfi"
],
"c": 2,
"w": "Likvidlik riski.",
"k": "th"
},
{
"t": 6,
"q": "Mulkdor uyini yong‘inga qarshi sug‘urtalagani uchun yong‘in xavfsizligiga kamroq e’tibor bersa, bu...",
"o": [
"Diversifikatsiya hisoblanadi",
"Salbiy tanlov hisoblanadi",
"Signal berish hisoblanadi",
"Axloqiy tavakkal (moral hazard)"
],
"c": 3,
"w": "Ehtiyotkorlik kamayishi — moral hazard.",
"k": "th"
},
{
"t": 6,
"q": "Kasalligini biluvchi odamlarning sog‘liqni sug‘urtalashga ko‘proq intilishi...",
"o": [
"Xedjlashga misol bo‘ladi",
"Diversifikatsiyaga misol bo‘ladi",
"Salbiy tanlovga misol bo‘ladi",
"Axloqiy tavakkalga misol bo‘ladi"
],
"c": 2,
"w": "Ex ante axborot assimetriyasi.",
"k": "th"
},
{
"t": 6,
"q": "Davlat majburiy sug‘urta joriy etishining asosiy iqtisodiy dalili:",
"o": [
"Sug‘urta mukofotini nolga tushirib, xizmatni hamma uchun bepul qilib qo‘yish",
"Barcha xavf guruhlarini qamrab olib, salbiy tanlovni kamaytirish",
"Tavakkalchilikni oshirib, mijozlarning ehtiyotkorligini kamaytirib yuborish",
"Sug‘urta bozorini butunlay yo‘qotib, uni davlat faoliyati bilan almashtirish"
],
"c": 1,
"w": "Majburiylik past xavfli mijozlarning chiqib ketishini oldini oladi.",
"k": "th"
},
{
"t": 6,
"q": "Aktivlarning kutilayotgan daromadi yuqori, ammo tebranuvchanligi ham yuqori bo‘lsa, risk-averse investor...",
"o": [
"Uni hech qachon tanlamaydi, chunki tebranuvchanlik yuqori bo‘lsa ham rad etiladi",
"Faqat tavakkalchilik evaziga yetarli qo‘shimcha daromad olsagina uni tanlaydi",
"Uni har doim tanlaydi, chunki kutilayotgan daromad yuqori bo‘lsa yetarli hisoblanadi",
"Qaror qabul qila olmaydi, chunki yuqori daromad va risk bir-birini to‘liq qoplaydi"
],
"c": 1,
"w": "Risk premium orqali kompensatsiya talab qiladi.",
"k": "th"
},
{
"t": 6,
"q": "Adolatli o‘yin (fair gamble) deb qanday lotereyaga aytiladi?",
"o": [
"Kutilayotgan sof yutug‘i nolga teng bo‘lgan lotereyaga",
"Yutish ehtimoli 50 foiz bo‘lgan lotereyaga",
"Eng katta yutug‘i chipta narxidan yuqori bo‘lgan lotereyaga",
"Kutilayotgan sof yutug‘i musbat bo‘lgan lotereyaga"
],
"c": 0,
"w": "E(sof yutuq) = 0.",
"k": "th"
},
{
"t": 6,
"q": "Tavakkalchilikdan qochuvchi shaxs adolatli o‘yinda ishtirok etishga...",
"o": [
"Doim rozi bo‘ladi, chunki adolatli o‘yinda kutilayotgan yutuq nolga teng bo‘lib qoladi",
"Ishtirok etish yoki etmaslikka befarq bo‘ladi, chunki kutilayotgan sof yutuq nolga teng",
"Rozi bo‘lmaydi, chunki kutilayotgan foydalilik kafolatlangan holatdagidan past bo‘ladi",
"Faqat yutish ehtimoli 50 foizdan past bo‘lgan taqdirdagina rozi bo‘ladi va qatnashadi"
],
"c": 2,
"w": "Konkav U: E[U] < U(E).",
"k": "th"
},
{
"t": 6,
"q": "Tavakkalchilikdan qochuvchi shaxs adolatli mukofotdan yuqori sug‘urta mukofotini ham to‘lashga rozi bo‘lishi mumkin. Bu qachon sodir bo‘ladi?",
"o": [
"Sug‘urta kompaniyasi mijozdan hech qanday axborot so‘ramasa va hammani qabul qilsa",
"Ortiqcha to‘lov uning tavakkalchilik uchun to‘lovidan (risk premium) oshmasa",
"Zarar ehtimoli 100 foizga yetsa va zarar albatta sodir bo‘ladigan bo‘lib qolsa",
"Ortiqcha to‘lov nolga teng bo‘lsa va mukofot aktuar jihatdan adolatli bo‘lib qolsa"
],
"c": 1,
"w": "Sug‘urtaga tayyorlik chegarasi: p·L + risk premium.",
"k": "th"
},
{
"t": 6,
"q": "Ikkita mustaqil, bir xil riskli aktivga mablag‘ teng bo‘linib joylashtirilsa, portfel dispersiyasi...",
"o": [
"Alohida aktiv dispersiyasidan ikki baravar katta bo‘ladi",
"Alohida aktiv dispersiyasining yarmiga teng bo‘ladi",
"Nolga teng bo‘ladi",
"Alohida aktiv dispersiyasiga teng bo‘ladi"
],
"c": 1,
"w": "Var = (1/2)²·σ² + (1/2)²·σ² = σ²/2.",
"k": "th"
},
{
"t": 6,
"q": "Investitsiya loyihasi 100 mln so‘m daromadni 0,2 ehtimol bilan, 200 mln so‘mni 0,5 ehtimol bilan, 400 mln so‘mni 0,3 ehtimol bilan keltiradi. Kutilayotgan daromad (matematik kutilma) qancha (mln so‘m)?",
"o": [
"315",
"233,33",
"240",
"200"
],
"c": 2,
"w": "E = Σ p·x = 240.",
"k": "pr"
},
{
"t": 6,
"q": "Investitsiya loyihasi 50 mln so‘m daromadni 0,1 ehtimol bilan, 150 mln so‘mni 0,6 ehtimol bilan, 350 mln so‘mni 0,3 ehtimol bilan keltiradi. Kutilayotgan daromad (matematik kutilma) qancha (mln so‘m)?",
"o": [
"200",
"275",
"150",
"183,33"
],
"c": 0,
"w": "E = Σ p·x = 200.",
"k": "pr"
},
{
"t": 6,
"q": "Investitsiya loyihasi 0 mln so‘m daromadni 0,25 ehtimol bilan, 400 mln so‘mni 0,25 ehtimol bilan, 600 mln so‘mni 0,5 ehtimol bilan keltiradi. Kutilayotgan daromad (matematik kutilma) qancha (mln so‘m)?",
"o": [
"220 000",
"333,33",
"400",
"550"
],
"c": 2,
"w": "E = Σ p·x = 400.",
"k": "pr"
},
{
"t": 6,
"q": "Investitsiya loyihasi 80 mln so‘m daromadni 0,4 ehtimol bilan, 120 mln so‘mni 0,4 ehtimol bilan, 500 mln so‘mni 0,2 ehtimol bilan keltiradi. Kutilayotgan daromad (matematik kutilma) qancha (mln so‘m)?",
"o": [
"233,33",
"180",
"120",
"285"
],
"c": 1,
"w": "E = Σ p·x = 180.",
"k": "pr"
},
{
"t": 6,
"q": "Investitsiya loyihasi 10 mln so‘m daromadni 0,3 ehtimol bilan, 90 mln so‘mni 0,3 ehtimol bilan, 240 mln so‘mni 0,4 ehtimol bilan keltiradi. Kutilayotgan daromad (matematik kutilma) qancha (mln so‘m)?",
"o": [
"90",
"113,33",
"126",
"183,5"
],
"c": 2,
"w": "E = Σ p·x = 126.",
"k": "pr"
},
{
"t": 6,
"q": "Lotereyada 0,5 ehtimol bilan 100 ming so‘m, 0,5 ehtimol bilan 300 ming so‘m yutuq beriladi. Yutuqning dispersiyasi (variance) nimaga teng?",
"o": [
"100",
"10 000",
"200",
"50"
],
"c": 1,
"w": "E = 200; σ² = Σp(x−E)² = 10 000.",
"k": "pr"
},
{
"t": 6,
"q": "Lotereyada 0,5 ehtimol bilan 40 ming so‘m, 0,5 ehtimol bilan 200 ming so‘m yutuq beriladi. Yutuqning dispersiyasi (variance) nimaga teng?",
"o": [
"6 400",
"80",
"120",
"40"
],
"c": 0,
"w": "E = 120; σ² = Σp(x−E)² = 6 400.",
"k": "pr"
},
{
"t": 6,
"q": "Lotereyada 0,5 ehtimol bilan 0 ming so‘m, 0,5 ehtimol bilan 400 ming so‘m yutuq beriladi. Yutuqning dispersiyasi (variance) nimaga teng?",
"o": [
"400",
"40 000",
"100",
"200"
],
"c": 1,
"w": "E = 200; σ² = Σp(x−E)² = 40 000.",
"k": "pr"
},
{
"t": 6,
"q": "Lotereyada 0,2 ehtimol bilan 50 ming so‘m, 0,8 ehtimol bilan 300 ming so‘m yutuq beriladi. Yutuqning dispersiyasi (variance) nimaga teng?",
"o": [
"10 000",
"100",
"250",
"40"
],
"c": 0,
"w": "E = 250; σ² = Σp(x−E)² = 10 000.",
"k": "pr"
},
{
"t": 6,
"q": "Lotereyada 0,25 ehtimol bilan 100 ming so‘m, 0,75 ehtimol bilan 500 ming so‘m yutuq beriladi. Yutuqning dispersiyasi (variance) nimaga teng?",
"o": [
"400",
"15 000",
"75",
"30 000"
],
"c": 3,
"w": "E = 400; σ² = Σp(x−E)² = 30 000.",
"k": "pr"
},
{
"t": 6,
"q": "Iste’molchining foydalilik funksiyasi U = √W. U 0,5 ehtimol bilan 100 mln, 0,5 ehtimol bilan 400 mln so‘m boylikka ega bo‘ladi. Uning tavakkalchilik uchun to‘lovi (risk premium = kutilayotgan boylik − aniq ekvivalent) qancha (mln so‘m)?",
"o": [
"225",
"250",
"25",
"15"
],
"c": 2,
"w": "EV = 250; EU = 15; aniq ekvivalent CE = EU² = 225; risk premium = 250 − 225 = 25.",
"k": "pr"
},
{
"t": 6,
"q": "Iste’molchining foydalilik funksiyasi U = √W. U 0,5 ehtimol bilan 64 mln, 0,5 ehtimol bilan 324 mln so‘m boylikka ega bo‘ladi. Uning tavakkalchilik uchun to‘lovi (risk premium = kutilayotgan boylik − aniq ekvivalent) qancha (mln so‘m)?",
"o": [
"25",
"13",
"169",
"194"
],
"c": 0,
"w": "EV = 194; EU = 13; aniq ekvivalent CE = EU² = 169; risk premium = 194 − 169 = 25.",
"k": "pr"
},
{
"t": 6,
"q": "Iste’molchining foydalilik funksiyasi U = √W. U 0,5 ehtimol bilan 0 mln, 0,5 ehtimol bilan 400 mln so‘m boylikka ega bo‘ladi. Uning tavakkalchilik uchun to‘lovi (risk premium = kutilayotgan boylik − aniq ekvivalent) qancha (mln so‘m)?",
"o": [
"200",
"50",
"100",
"10"
],
"c": 2,
"w": "EV = 200; EU = 10; aniq ekvivalent CE = EU² = 100; risk premium = 200 − 100 = 100.",
"k": "pr"
},
{
"t": 6,
"q": "Iste’molchining foydalilik funksiyasi U = √W. U 0,25 ehtimol bilan 16 mln, 0,75 ehtimol bilan 256 mln so‘m boylikka ega bo‘ladi. Uning tavakkalchilik uchun to‘lovi (risk premium = kutilayotgan boylik − aniq ekvivalent) qancha (mln so‘m)?",
"o": [
"13",
"196",
"27",
"169"
],
"c": 2,
"w": "EV = 196; EU = 13; aniq ekvivalent CE = EU² = 169; risk premium = 196 − 169 = 27.",
"k": "pr"
},
{
"t": 6,
"q": "Iste’molchining foydalilik funksiyasi U = √W. U 0,75 ehtimol bilan 36 mln, 0,25 ehtimol bilan 196 mln so‘m boylikka ega bo‘ladi. Uning tavakkalchilik uchun to‘lovi (risk premium = kutilayotgan boylik − aniq ekvivalent) qancha (mln so‘m)?",
"o": [
"8",
"64",
"76",
"12"
],
"c": 3,
"w": "EV = 76; EU = 8; aniq ekvivalent CE = EU² = 64; risk premium = 76 − 64 = 12.",
"k": "pr"
},
{
"t": 6,
"q": "Avtomobil o‘g‘irlanish ehtimoli 0,1, zarar 200 mln so‘m. Sug‘urta kompaniyasi to‘liq qoplashni, adolatli (aktuar) mukofotga 20% ustama qo‘shib taklif qiladi. Sug‘urta mukofoti qancha (mln so‘m)?",
"o": [
"20",
"24",
"40",
"240"
],
"c": 1,
"w": "Adolatli mukofot = p·L = 20; ustama bilan 20·1.2 = 24.",
"k": "pr"
},
{
"t": 6,
"q": "Avtomobil o‘g‘irlanish ehtimoli 0,05, zarar 400 mln so‘m. Sug‘urta kompaniyasi to‘liq qoplashni, adolatli (aktuar) mukofotga 25% ustama qo‘shib taklif qiladi. Sug‘urta mukofoti qancha (mln so‘m)?",
"o": [
"45",
"25",
"500",
"20"
],
"c": 1,
"w": "Adolatli mukofot = p·L = 20; ustama bilan 20·1.25 = 25.",
"k": "pr"
},
{
"t": 6,
"q": "Avtomobil o‘g‘irlanish ehtimoli 0,12, zarar 160 mln so‘m. Sug‘urta kompaniyasi to‘liq qoplashni, adolatli (aktuar) mukofotga 50% ustama qo‘shib taklif qiladi. Sug‘urta mukofoti qancha (mln so‘m)?",
"o": [
"240",
"70",
"20",
"30"
],
"c": 3,
"w": "Adolatli mukofot = p·L = 20; ustama bilan 20·1.5 = 30.",
"k": "pr"
},
{
"t": 6,
"q": "Avtomobil o‘g‘irlanish ehtimoli 0,03, zarar 500 mln so‘m. Sug‘urta kompaniyasi to‘liq qoplashni, adolatli (aktuar) mukofotga 20% ustama qo‘shib taklif qiladi. Sug‘urta mukofoti qancha (mln so‘m)?",
"o": [
"35",
"600",
"15",
"18"
],
"c": 3,
"w": "Adolatli mukofot = p·L = 15; ustama bilan 15·1.2 = 18.",
"k": "pr"
},
{
"t": 6,
"q": "Avtomobil o‘g‘irlanish ehtimoli 0,2, zarar 150 mln so‘m. Sug‘urta kompaniyasi to‘liq qoplashni, adolatli (aktuar) mukofotga 10% ustama qo‘shib taklif qiladi. Sug‘urta mukofoti qancha (mln so‘m)?",
"o": [
"40",
"30",
"165",
"33"
],
"c": 3,
"w": "Adolatli mukofot = p·L = 30; ustama bilan 30·1.1 = 33.",
"k": "pr"
}
];
