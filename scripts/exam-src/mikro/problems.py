# Mikroiqtisodiyot oraliq nazorati: hisob-kitob masalalari (1–6 mavzu, har mavzudan 20 ta = jami 120).
# Har bir masala parametrlardan hisoblab tuziladi: javob kodda hisoblanadi (qo'lda yozilmaydi).
from fractions import Fraction as F
from math import isqrt
import itertools

def num(x, nd=2):
    x = F(x)
    if x.denominator == 1:
        v = int(x)
        return f"{v:,}".replace(",", " ")
    s = f"{float(x):.{nd}f}".rstrip("0").rstrip(".")
    return s.replace(".", ",")

def lin(a, b, sign='−'):
    return f"{a} {sign} {'' if b == 1 else b}P"

def sup(c, d):
    return (f"−{c} + " if c else "") + ("" if d == 1 else str(d)) + "P"

def pack(q, ok, bad, why):
    bad = [b for b in dict.fromkeys(bad) if b != ok]
    if len(bad) < 3:
        try:
            v = F(ok.replace(" ", "").replace(",", ".").split()[0].replace("%", ""))
            suf = ok[len(ok.split()[0]):] if len(ok.split()) > 1 else ""
            for w in (v * 2, v / 2, v + 1, v - 1, v * 3 / 2, v + 10, -v):
                c = num(w) + suf
                if c != ok and c not in bad: bad.append(c)
        except Exception:
            pass
    if len(bad) < 3:
        print("YETARLI EMAS:", q[:90], ok, bad)
    return (q, ok, bad[:3], why)

P = {1: [], 2: [], 3: [], 4: [], 5: [], 6: []}

# ---------------- 1-mavzu: muqobil xarajat, IICH, qiyosiy ustunlik, marginal tahlil ----------------
for X, Y, dX in [(90, 30, 36), (120, 40, 45), (100, 25, 60), (150, 50, 60), (80, 20, 24)]:
    ans = F(dX * Y, X)
    P[1].append(pack(
        f"Ishlab chiqarish imkoniyatlari chegarasi to‘g‘ri chiziq: barcha resurs bilan A tovardan {X} birlik yoki B tovardan {Y} birlik ishlab chiqarish mumkin. A tovar ishlab chiqarish {dX} birlikka kamaytirilsa, B tovar ishlab chiqarish qanchaga ko‘payadi?",
        f"{num(ans)} birlikka", [f"{num(F(dX*X, Y))} birlikka", f"{num(dX)} birlikka", f"{num(Y)} birlikka", f"{num(F(Y*X, dX))} birlikka"],
        f"1 birlik A ning muqobil xarajati {num(F(Y, X))} birlik B. {dX} birlik A dan voz kechilsa, B {dX}·{Y}/{X} = {num(ans)} birlikka ko‘payadi."))
for (ac, at), (vc, vt) in [((4, 2), (3, 3)), ((6, 2), (4, 4)), ((8, 2), (6, 3)), ((9, 3), (4, 2)), ((12, 3), (10, 5))]:
    lo, hi = sorted([F(ac, at), F(vc, vt)])
    ok = f"{num(lo)} dan {num(hi)} gacha"
    bad = [f"{num(F(at, ac))} dan {num(F(vt, vc))} gacha" if F(at, ac) < F(vt, vc) else f"{num(F(vt, vc))} dan {num(F(at, ac))} gacha",
           f"{num(min(ac, vc))} dan {num(max(ac, vc))} gacha", f"{num(min(at, vt))} dan {num(max(at, vt))} gacha", f"{num(lo + 1)} dan {num(hi + 1)} gacha"]
    P[1].append(pack(
        f"Ali bir soatda {ac} ta stul yoki {at} ta stol, Vali esa {vc} ta stul yoki {vt} ta stol yasay oladi. Savdo ikkala tomon uchun ham foydali bo‘lishi uchun 1 ta stolning narxi (stul hisobida) qaysi oraliqda bo‘lishi kerak?",
        ok, bad,
        f"Stolning muqobil xarajati: Ali {num(F(ac, at))} stul, Vali {num(F(vc, vt))} stul. Kelishuv narxi shu ikki qiymat oralig‘ida bo‘lganda ikkalasi ham yutadi."))
for mb, mc in [([60, 48, 36, 24, 12], [10, 15, 20, 25, 30]), ([90, 70, 50, 30, 10], [20, 20, 25, 30, 35]), ([80, 64, 48, 32, 16], [12, 18, 24, 30, 36]),
               ([70, 55, 40, 25, 10], [15, 15, 20, 28, 40]), ([100, 75, 50, 30, 10], [30, 30, 30, 30, 30])]:
    k = 0
    while k < len(mb) and mb[k] >= mc[k]: k += 1
    tot = sum(mb[i] - mc[i] for i in range(k))
    P[1].append(pack(
        f"Talaba qo‘shimcha o‘qish soatlarining marginal foydasi (MB) ketma-ket {mb}, marginal xarajati (MC) esa {mc} ga teng (shartli birliklarda). Agar u har bir soatni alohida baholab, MB ≥ MC bo‘lguncha o‘qisa, uning umumiy sof foydasi qancha bo‘ladi?",
        f"{tot}", [f"{sum(mb[:k])}", f"{sum(mb[i]-mc[i] for i in range(min(k+1,5)))}", f"{sum(mb[i]-mc[i] for i in range(max(k-1,1)))}", f"{tot+ sum(mc[:k])//2}"],
        f"Soatlar MB ≥ MC bo‘lguncha ({k} soat) davom etadi; sof foyda = Σ(MB − MC) = {tot}."))
for T, B, R, W in [(18, 3, 12, 2), (24, 4, 15, 3), (30, 5, 18, 2), (20, 2, 10, 4), (36, 6, 20, 3)]:
    ans = T + B + 12 * W
    P[1].append(pack(
        f"Talaba bir yil davomida kontrakt {T} mln, darsliklar uchun {B} mln so‘m to‘laydi, yotoqxonaga {R} mln so‘m to‘laydi (o‘qimasa ham shuncha to‘lagan bo‘lardi). O‘qimaganida oyiga {W} mln so‘m maosh olardi. Uning o‘qishning bir yillik iqtisodiy (muqobil) xarajati qancha (mln so‘m)?",
        f"{ans}", [f"{T+B+R+12*W}", f"{T+B+R}", f"{T+B}", f"{12*W+T}"],
        f"Iqtisodiy xarajat = aniq xarajatlar (kontrakt + darslik) + qo‘ldan boy berilgan maosh: {T}+{B}+12·{W} = {ans}. Yotoqxona o‘qishdan qat’i nazar to‘lanadi, hisobga kirmaydi."))

# ---------------- 2-mavzu: talab va taklif, muvozanat ----------------
for a, b, c, d in [(100, 2, 20, 4), (120, 3, 30, 3), (150, 5, 30, 10), (90, 1, 30, 2)]:
    p = F(a + c, b + d); q = a - b * p
    P[2].append(pack(
        f"Talab Qd = {lin(a, b)}, taklif Qs = {sup(c, d)}. Muvozanat tovar miqdori qancha?",
        num(q), [num(a - b * F(a, b+d)), num(p), num(F(a + c, 2)), num(d * p)],
        f"{a} − {b}P = −{c} + {d}P → P* = {num(p)}; Q* = {a} − {b}·{num(p)} = {num(q)}."))
for a, b, c, d, pf in [(100, 2, 20, 4, 25), (120, 3, 30, 3, 28), (150, 5, 30, 10, 16), (90, 1, 30, 2, 50)]:
    p = F(a + c, b + d); assert pf > p
    sur = (-c + d * pf) - (a - b * pf)
    P[2].append(pack(
        f"Talab Qd = {lin(a, b)}, taklif Qs = {sup(c, d)}. Hukumat narxning quyi chegarasini P = {pf} etib belgilasa, bozorda qancha ortiqcha taklif (tovar ortiqchaligi) vujudga keladi?",
        num(sur), [num(a - b * pf), num(-c + d * pf), num(sur + (a - b*p) // 2 if False else F(sur, 2)), num((a - b * p))],
        f"P = {pf} da Qd = {a-b*pf}, Qs = {-c+d*pf}; ortiqchalik = Qs − Qd = {num(sur)}."))
for a, b, c, d, t in [(120, 2, 20, 2, 10), (100, 3, 20, 3, 6), (200, 4, 40, 4, 8), (150, 5, 30, 5, 5)]:
    p = F(a + c + d * t, b + d); q = a - b * p
    rev = t * q
    P[2].append(pack(
        f"Talab Qd = {lin(a, b)}, taklif Qs = {sup(c, d)}. Sotuvchilardan har bir sotilgan birlik uchun {t} so‘m solig‘ qo‘yildi. Davlat byudjetiga tushadigan soliq tushumi qancha (so‘m)?",
        num(rev), [num(t * (a - b * F(a + c, b + d))), num(t * (-c + d * F(a + c, b + d))), num(rev + t * d), num(t * p)],
        f"Soliqdan keyin taklif Qs = −{c} + {d}(P − {t}). Muvozanat: P = {num(p)}, Q = {num(q)}. Tushum = {t}·{num(q)} = {num(rev)}."))
for a, b, c, d in [(100, 2, 20, 4), (120, 3, 30, 3), (150, 5, 30, 10), (240, 4, 0, 8)]:
    p = F(a + c, b + d); q = a - b * p
    cs = F(1, 2) * (F(a, b) - p) * q
    P[2].append(pack(
        f"Talab Qd = {lin(a, b)}, taklif Qs = {sup(c, d)}. Muvozanatda iste’molchi ortiqchaligi (consumer surplus) nimaga teng?",
        num(cs), [num(F(a, b) * q / 2 + 0 if False else (F(a, b) * q)), num(F(1, 2) * (F(a, b)) * q), num(F(1, 2) * p * q), num(cs * 2)],
        f"Talab chizig‘ining narx o‘qi bilan kesishishi P = {num(F(a,b))}. CS = ½·({num(F(a,b))} − {num(p)})·{num(q)} = {num(cs)}."))
for a, b, c, d, k, dI in [(100, 2, 20, 4, 2, 6), (120, 3, 30, 3, 3, 6), (150, 5, 30, 10, 5, 6), (90, 1, 30, 2, 3, 5)]:
    dp = F(k * dI, b + d)
    P[2].append(pack(
        f"Normal tovarga talab Qd = {lin(a, b)} + {k}·I (I — daromad), taklif Qs = {sup(c, d)}. Daromad {dI} birlikka oshsa, muvozanat narx qanchaga o‘zgaradi?",
        f"{num(dp)} ga oshadi", [f"{num(dp)} ga kamayadi", f"{num(F(k*dI, b))} ga oshadi", f"{num(F(k*dI, d))} ga oshadi", f"{num(k*dI)} ga oshadi"],
        f"Daromad o‘zgarganda talab {k}·{dI} = {k*dI} birlikka siljiydi; ΔP = {k*dI}/({b}+{d}) = {num(dp)} (normal tovar — narx oshadi)."))

# ---------------- 3-mavzu: elastiklik ----------------
for p1, q1, p2, q2 in [(10, 60, 12, 50), (20, 100, 25, 70), (8, 90, 10, 60), (50, 200, 40, 260)]:
    e = abs(F(q2 - q1, q1 + q2) / F(p2 - p1, p1 + p2))
    e_start = abs(F(q2 - q1, q1) / F(p2 - p1, p1))
    P[3].append(pack(
        f"Narx {p1} dan {p2} so‘mga o‘zgarganda talab qilingan miqdor {q1} dan {q2} ga o‘zgardi. O‘rta nuqta (arc) usuli bo‘yicha talabning narx bo‘yicha elastikligi moduli qancha?",
        num(e), [num(e_start), num(abs(F(q2-q1, p2-p1))), num(F(1, e) if e else 0), num(abs(F(q2 - q1, q2) / F(p2 - p1, p2)))],
        f"E = |ΔQ/Q̄| : |ΔP/P̄| = |{q2-q1}/{num(F(q1+q2,2))}| : |{p2-p1}/{num(F(p1+p2,2))}| = {num(e)}."))
for e, pc in [(2, 10), (3, 5), (F(3, 2), 20), (4, 5)]:
    e = F(e); r = (1 + F(pc, 100)) * (1 - e * F(pc, 100)) - 1
    P[3].append(pack(
        f"Talabning narx bo‘yicha elastikligi (modul) {num(e)} ga teng. Narx {pc}% ga oshirilsa (talab o‘zgarishi aniq hisoblansin), sotuvchining tushumi qanday o‘zgaradi?",
        f"{num(r*100)}% ga o‘zgaradi", [f"{num((F(pc)) - e*pc)}% ga o‘zgaradi", f"{num(pc)}% ga oshadi", f"{num(-e*pc)}% ga o‘zgaradi", f"{num(-r*100)}% ga o‘zgaradi"],
        f"Miqdor {num(e*pc)}% ga kamayadi: (1 + {num(F(pc,100))})·(1 − {num(e*pc/100)}) − 1 = {num(r)}; tushum {num(r*100)}% ga o‘zgaradi."))
for a, b, pp in [(120, 4, 10), (120, 4, 20), (200, 5, 20), (180, 3, 40)]:
    q = a - b * pp; e = F(b * pp, q)
    P[3].append(pack(
        f"Talab funksiyasi Q = {a} − {b}P. Narx P = {pp} bo‘lgan nuqtada talabning narx bo‘yicha elastikligi (modul) nechaga teng?",
        num(e), [num(F(q, b * pp)), num(b), num(F(pp, q)), num(F(b * q, pp) if False else F(b*pp, a))],
        f"E = b·P/Q = {b}·{pp}/{q} = {num(e)}."))
for ep, dp_, ei, di in [(F(-8, 5), 5, F(1, 2), 6), (F(-3, 2), 4, F(3, 2), 4), (F(-2), 3, F(1, 4), 8), (F(-5, 4), 8, F(3, 2), 2)]:
    # narx dp_% ga tushadi, daromad di% ga oshadi
    tot = -ep * dp_ + ei * di
    P[3].append(pack(
        f"Talabning narx bo‘yicha elastikligi {num(ep)}, daromad bo‘yicha elastikligi {num(ei)}. Narx {dp_}% ga pasayib, daromad {di}% ga oshsa, talab qilingan miqdor taxminan necha foizga o‘zgaradi?",
        f"{num(tot)}% ga oshadi", [f"{num(-ep*dp_ - ei*di)}% ga oshadi", f"{num(-ep*dp_)}% ga oshadi", f"{num(ei*di)}% ga oshadi", f"{num(tot)}% ga kamayadi"],
        f"Narx ta’siri: {num(-ep)}·{dp_} = {num(-ep*dp_)}%; daromad ta’siri: {num(ei)}·{di} = {num(ei*di)}%. Jami {num(tot)}%."))
for es, ed, t in [(F(3, 2), F(1, 2), 12), (3, 1, 20), (F(2), F(1, 2), 10), (F(1), F(3), 16)]:
    es, ed = F(es), F(ed)
    buy = t * es / (es + ed)
    P[3].append(pack(
        f"Taklifning narx bo‘yicha elastikligi {num(es)}, talabniki (modul) {num(ed)}. Har bir birlikka {t} so‘mlik soliq qo‘yilsa, soliq yukining qanchasini iste’molchi ko‘taradi (so‘m)?",
        num(buy), [num(t - buy), num(t * ed / (es + ed) if False else F(t, 2)), num(t * ed / es), num(t * es / ed)],
        f"Soliq yukini nisbatan noelastik tomon ko‘proq ko‘taradi: iste’molchi ulushi = Es/(Es+Ed) = {num(es/(es+ed))}; {t}·{num(es/(es+ed))} = {num(buy)}."))

# ---------------- 4-mavzu: iste'molchi tanlovi ----------------
for I, px, py, x in [(600, 20, 30, 12), (480, 12, 16, 10), (900, 30, 45, 15), (720, 18, 24, 20)]:
    ans = F(I - px * x, py)
    P[4].append(pack(
        f"Iste’molchining daromadi {I} so‘m, X tovar narxi {px}, Y tovar narxi {py} so‘m. U X tovardan {x} birlik sotib olsa, Y tovardan maksimal necha birlik sotib ola oladi?",
        num(ans), [num(F(I, py)), num(F(I - py * x, px)), num(F(I, px) - x), num(F(px * x, py))],
        f"Y = (I − Px·X)/Py = ({I} − {px}·{x})/{py} = {num(ans)}."))
for I, px, py in [(240, 4, 6), (360, 6, 3), (480, 8, 4), (600, 5, 10), (720, 9, 6)]:
    x, y = F(I, 2 * px), F(I, 2 * py)
    P[4].append(pack(
        f"Iste’molchi foydalilik funksiyasi U = X·Y, daromadi {I} so‘m, Px = {px}, Py = {py}. Foydalilikni maksimallashtiruvchi tanlovda erishiladigan umumiy foydalilik (U) qancha?",
        num(x * y), [num(F(I, px) * F(I, py)), num(x + y), num(2 * x * y), num(F(I, px + py) ** 2)],
        f"Kobb–Duglas holida xarajatning yarmi har bir tovarga: X = {num(x)}, Y = {num(y)}; U = {num(x*y)}."))
for I, px, py in [(300, 5, 10), (240, 4, 8), (450, 5, 15), (360, 6, 4), (540, 9, 6)]:
    y = F(2 * I, 3 * py); x = F(I, 3 * px)
    P[4].append(pack(
        f"Foydalilik funksiyasi U = X·Y², daromad {I} so‘m, Px = {px}, Py = {py}. Optimal tanlovda Y tovardan necha birlik sotib olinadi?",
        num(y), [num(F(I, 2 * py)), num(F(I, 3 * py)), num(F(I, py)), num(x)],
        f"U = X^1·Y^2 uchun Y ga xarajat ulushi 2/3: Y = (2/3)·I/Py = {num(y)}."))
for mux, muy, px, py, B in [([40, 32, 24, 16, 8], [30, 24, 18, 12, 6], 4, 3, 24), ([50, 40, 30, 20, 10], [36, 30, 24, 18, 12], 5, 6, 40),
                            ([60, 45, 30, 15, 5], [40, 32, 24, 16, 8], 6, 4, 32), ([48, 36, 24, 12, 6], [35, 28, 21, 14, 7], 4, 7, 40),
                            ([72, 60, 48, 36, 24], [50, 40, 30, 20, 10], 6, 5, 41), ([56, 42, 28, 14, 7], [45, 36, 27, 18, 9], 7, 3, 30)]:
    x = y = 0; spent = 0
    while True:
        cands = []
        if x < 5 and spent + px <= B: cands.append((F(mux[x], px), 'x'))
        if y < 5 and spent + py <= B: cands.append((F(muy[y], py), 'y'))
        if not cands: break
        best = max(cands)[1]
        if best == 'x': spent += px; x += 1
        else: spent += py; y += 1
    tu = sum(mux[:x]) + sum(muy[:y])
    P[4].append(pack(
        f"Iste’molchi byudjeti {B} so‘m, Px = {px}, Py = {py}. X tovarning ketma-ket marginal foydaliliklari: {mux}, Y tovarniki: {muy}. Har bir qadamda MU/P eng katta bo‘lgan birlikni olib borsa, optimal tanlovdagi umumiy foydalilik qancha?",
        f"{tu}", [f"{tu + (mux[x] if x < 5 else 0)}", f"{sum(mux[:B//px if B//px<5 else 5])}", f"{tu - muy[y-1] if y else tu-1}", f"{sum(muy[:B//py if B//py<5 else 5])}"],
        f"Birliklar MU/P kamayish tartibida tanlanadi: X={x}, Y={y} (xarajat {spent} so‘m). Jami foydalilik {tu}."))

# ---------------- 5-mavzu: daromad va almashtirish samarasi (Slutskiy) ----------------
def slutsky_params(count):
    out = []
    for I in range(120, 1200, 12):
        for p1 in range(2, 13):
            for p2 in range(p1 + 1, 25):
                if I % (3 * p1) or I % (3 * p2): continue
                x0 = F(I, 3 * p1); x1 = F(I, 3 * p2)
                I2 = I + (p2 - p1) * x0; xs = I2 / (3 * p2)
                if xs.denominator != 1 or x0 < 10 or (xs - x0) == (x1 - xs): continue
                if (I2).denominator != 1: continue
                out.append((I, p1, p2, x0, x1, I2, xs))
    return out
SL = slutsky_params(0)
step = len(SL) // 14
pick = [SL[i * step] for i in range(0, 8)]
for n, (I, p1, p2, x0, x1, I2, xs) in enumerate(pick):
    se, ie, tot = xs - x0, x1 - xs, x1 - x0
    base = f"Iste’molchi foydalilik funksiyasi U = X·Y², daromadi {I} so‘m. X tovar narxi {p1} dan {p2} so‘mga oshdi. Slutskiy usuli bo‘yicha "
    if n % 2 == 0:
        P[5].append(pack(base + "almashtirish samarasi X tovar miqdorini qanchaga o‘zgartiradi?",
            num(se), [num(ie), num(tot), num(-se), num(F(se, 2))],
            f"x0={num(x0)}, x1={num(x1)}; asl tanlovni saqlaydigan daromad I′={num(I2)}, x_s={num(xs)}. AS = x_s − x0 = {num(se)}."))
    else:
        P[5].append(pack(base + "daromad samarasi X tovar miqdorini qanchaga o‘zgartiradi?",
            num(ie), [num(se), num(tot), num(-ie), num(ie * 2)],
            f"x0={num(x0)}, x1={num(x1)}, x_s={num(xs)}. DS = x1 − x_s = {num(ie)} (umumiy samara {num(tot)})."))
for I, p1, p2, x0, x1, I2, xs in [SL[i * step + step // 2] for i in range(8, 14)]:
    P[5].append(pack(
        f"Iste’molchi X va Y tovarlarga U = X·Y² funksiya bo‘yicha pul sarflaydi; daromad {I} so‘m. X tovar narxi {p1} dan {p2} so‘mga oshdi. Iste’molchi dastlabki tanlovni (narx oshishidan oldingi to‘plamni) sotib ola olishi uchun unga qanday daromad kerak (so‘m)?",
        num(I2), [num(I), num(I + (p2 - p1) * x1), num(I + (p2 - p1)), num(F(I * p2, p1))],
        f"Dastlabki X = {num(x0)}. Qo‘shimcha xarajat = ({p2} − {p1})·{num(x0)} = {num((p2-p1)*x0)}; I′ = {I} + {num((p2-p1)*x0)} = {num(I2)}."))
for q0, qs, q1, p in [(40, 46, 38, 4), (50, 56, 52, 3), (30, 38, 31, 6), (60, 65, 57, 2), (24, 30, 22, 5), (80, 88, 79, 7)]:
    P[5].append(pack(
        f"Tovar narxi pasayganda iste’molchi miqdori {q0} dan {q1} ga o‘zgardi. Asl foydalilikni saqlaydigan kompensatsiyalangan talab bo‘yicha miqdor {qs} bo‘lsa, daromad samarasi qancha va tovar qanday tovar?",
        f"{q1 - qs}; Giffen tovari" if q1 < q0 else f"{q1 - qs}; past toifali tovar",
        [f"{q1 - qs}; normal tovar", f"{qs - q0}; normal tovar", f"{q1 - q0}; Giffen tovari" if q1 < q0 else f"{q1 - q0}; past toifali tovar", f"{qs - q0}; Giffen tovari"],
        f"Almashtirish samarasi = {qs}−{q0} = {qs-q0} (+); daromad samarasi = {q1}−{qs} = {q1-qs} (manfiy → tovar past toifali"
        + ("; umumiy samara manfiy → Giffen)." if q1 < q0 else ")."))) 

# ---------------- 6-mavzu: bozor va tavakkalchilik ----------------
for pr, vals in [((0.2, 0.5, 0.3), (100, 200, 400)), ((0.1, 0.6, 0.3), (50, 150, 350)), ((0.25, 0.25, 0.5), (0, 400, 600)), ((0.4, 0.4, 0.2), (80, 120, 500)), ((0.3, 0.3, 0.4), (10, 90, 240))]:
    ev = sum(F(p).limit_denominator(100) * v for p, v in zip(pr, vals))
    P[6].append(pack(
        f"Investitsiya loyihasi {vals[0]} mln so‘m daromadni {num(F(pr[0]).limit_denominator(100))} ehtimol bilan, {vals[1]} mln so‘mni {num(F(pr[1]).limit_denominator(100))} ehtimol bilan, {vals[2]} mln so‘mni {num(F(pr[2]).limit_denominator(100))} ehtimol bilan keltiradi. Kutilayotgan daromad (matematik kutilma) qancha (mln so‘m)?",
        num(ev), [num(F(sum(vals), 3)), num(vals[1]), num(ev + F(vals[2] - vals[0], 4)), num(sum(F(p).limit_denominator(100) * v * v for p, v in zip(pr, vals)))],
        f"E = Σ p·x = {num(ev)}."))
for p, a, b in [(F(1, 2), 100, 300), (F(1, 2), 40, 200), (F(1, 2), 0, 400), (F(1, 5), 50, 300), (F(1, 4), 100, 500)]:
    ev = p * a + (1 - p) * b; var = p * (a - ev) ** 2 + (1 - p) * (b - ev) ** 2
    P[6].append(pack(
        f"Lotereyada {num(p)} ehtimol bilan {a} ming so‘m, {num(1-p)} ehtimol bilan {b} ming so‘m yutuq beriladi. Yutuqning dispersiyasi (variance) nimaga teng?",
        num(var), [num(var ** F(1, 2) if False else F(isqrt(int(var)))) if var == int(var) and isqrt(int(var))**2 == int(var) else num(var / 2), num(ev), num(p * (1 - p) * (b - a)), num(abs(b - a))],
        f"E = {num(ev)}; σ² = Σp(x−E)² = {num(var)}."))
for p, w1, w2 in [(F(1, 2), 100, 400), (F(1, 2), 64, 324), (F(1, 2), 0, 400), (F(1, 4), 16, 256), (F(3, 4), 36, 196)]:
    ev = p * w1 + (1 - p) * w2
    eu = p * isqrt(w1) + (1 - p) * isqrt(w2); ce = eu ** 2; rp = ev - ce
    P[6].append(pack(
        f"Iste’molchining foydalilik funksiyasi U = √W. U {num(p)} ehtimol bilan {w1} mln, {num(1-p)} ehtimol bilan {w2} mln so‘m boylikka ega bo‘ladi. Uning tavakkalchilik uchun to‘lovi (risk premium = kutilayotgan boylik − aniq ekvivalent) qancha (mln so‘m)?",
        num(rp), [num(ce), num(ev), num(eu), num(F(ev - ce, 2))],
        f"EV = {num(ev)}; EU = {num(eu)}; aniq ekvivalent CE = EU² = {num(ce)}; risk premium = {num(ev)} − {num(ce)} = {num(rp)}."))
for pl, L, ld in [(F(1, 10), 200, 20), (F(1, 20), 400, 25), (F(1, 8), 160, 50), (F(3, 100), 500, 20), (F(1, 5), 150, 10)]:
    fair = pl * L; prem = fair * (1 + F(ld, 100))
    P[6].append(pack(
        f"Avtomobil o‘g‘irlanish ehtimoli {num(pl)}, zarar {L} mln so‘m. Sug‘urta kompaniyasi to‘liq qoplashni, adolatli (aktuar) mukofotga {ld}% ustama qo‘shib taklif qiladi. Sug‘urta mukofoti qancha (mln so‘m)?",
        num(prem), [num(fair), num(L * (1 + F(ld, 100))), num(fair + ld), num(fair * (1 + F(ld, 100)) + fair)],
        f"Adolatli mukofot = p·L = {num(fair)}; ustama bilan {num(fair)}·{1+ld/100} = {num(prem)}."))

def problems(t):
    assert len(P[t]) == 20, (t, len(P[t]))
    return P[t]

if __name__ == "__main__":
    for t in range(1, 7):
        print(t, len(P[t]))
        for q, ok, bad, why in P[t][:1]: print("  ", q[:120], "|", ok, bad)
