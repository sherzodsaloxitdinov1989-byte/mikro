# Makroiqtisodiyot 2-oraliq nazorati: hisob-kitob masalalari (120 ta). Javoblar kodda hisoblanadi.
from fractions import Fraction as F

def num(x, nd=2):
    x = F(x)
    if x.denominator == 1: return f"{int(x):,}".replace(",", " ")
    return f"{float(x):.{nd}f}".rstrip("0").rstrip(".").replace(".", ",")

def pack(q, ok, bad, why, suf=""):
    bad = [b for b in dict.fromkeys(bad) if b != ok]
    if len(bad) < 3:
        try:
            v = F(ok.replace(" ", "").replace(",", ".").replace("%", "").split()[0] if False else ok.split(suf)[0].replace(" ", "").replace(",", ".")) if suf else F(ok.replace(" ", "").replace(",", ".").rstrip("%"))
            for w in (v * 2, v / 2, v + 1, v - 1, v * 3 / 2, v + 10, v * 4, v - 10, -v):
                c = num(w) + suf
                if c != ok and c not in bad: bad.append(c)
        except Exception: pass
    if len(bad) < 3: print("YETARLI EMAS:", q[:80], ok, bad)
    return (q, ok, bad[:3], why)

P = {t: [] for t in range(1, 15)}
def add(t, q, ok, bad, why, suf=""): P[t].append(pack(q, ok, bad, why, suf))

# ---- 2-mavzu: YaIM hisoblash (12) ----
for C, I, G, X, M in [(420, 130, 150, 90, 70), (610, 200, 220, 140, 180), (350, 90, 110, 60, 85)]:
    Y = C + I + G + X - M
    add(2, f"Iqtisodiyotda iste’mol xarajatlari {C}, yalpi investitsiyalar {I}, davlat xaridlari {G}, eksport {X} va import {M} mlrd so‘m. Xarajatlar usuli bo‘yicha YaIM qancha (mlrd so‘m)?",
        f"{Y}", [f"{C+I+G+X+M}", f"{C+I+G}", f"{C+I+G+X}", f"{Y-I}"], f"YaIM = C + I + G + (X − M) = {C}+{I}+{G}+({X}−{M}) = {Y}.")
for W, R, Int, Pr, A, T in [(520, 40, 60, 180, 90, 70), (800, 60, 90, 250, 120, 110), (430, 30, 50, 140, 70, 60)]:
    Y = W + R + Int + Pr + A + T
    add(2, f"Ish haqi {W}, renta {R}, foiz {Int}, foyda {Pr}, amortizatsiya {A} va sof bilvosita soliqlar {T} mlrd so‘m. Daromadlar usuli bo‘yicha YaIM qancha?",
        f"{Y}", [f"{Y-A}", f"{Y-T}", f"{Y-A-T}", f"{W+R+Int+Pr}"], f"Omil daromadlari {W+R+Int+Pr} + amortizatsiya {A} + sof bilvosita soliqlar {T} = {Y}.")
for g, f_, b in [(30, 50, 80), (40, 70, 120)]:
    add(2, f"Fermer {g} mln so‘mlik bug‘doy yetishtirib tegirmonga sotdi; tegirmon undan {f_} mln so‘mlik un tayyorlab novvoyxonaga sotdi; novvoyxona {b} mln so‘mlik non pishirib iste’molchiga sotdi. Novvoyxonada yaratilgan qo‘shilgan qiymat qancha (mln so‘m)?",
        f"{b-f_}", [f"{b}", f"{g+f_+b}", f"{f_-g}", f"{b-g}"], f"Qo‘shilgan qiymat = {b} − {f_} = {b-f_}; jami YaIMga {b} kiradi, oraliq mahsulot hisoblanmaydi.")
for nom, d in [(840, 120), (1200, 150), (990, 110)]:
    real = F(nom * 100, d)
    add(2, f"Nominal YaIM {nom} mlrd so‘m, YaIM deflyatori {d}% (bazis yil = 100). Real YaIM qancha (mlrd so‘m)?",
        num(real), [num(F(nom * d, 100)), num(nom - d), num(F(nom, d)), num(nom * 100)], f"Real YaIM = Nominal / Deflyator × 100 = {nom}/{d}×100 = {num(real)}.")
for gdp, net, dep in [(2000, 80, 180), (3500, -120, 300)]:
    gni = gdp + net
    add(2, f"YaIM {gdp}, xorijdan olingan sof birlamchi daromad {net}, asosiy kapital iste’moli (amortizatsiya) {dep} mlrd so‘m. Yalpi milliy daromad (YaMD) qancha?",
        f"{gni}", [f"{gdp-net}", f"{gni-dep}", f"{gdp-dep}", f"{gdp}"], f"YaMD = YaIM + xorijdan sof daromad = {gdp}+({net}) = {gni}.")
# ---- 3-mavzu: tsikl, YaIM uzilishi (6) ----
for yp, y in [(1000, 940), (2400, 2256), (800, 776), (1500, 1425)]:
    gap = F((y - yp) * 100, yp)
    add(3, f"Potensial YaIM {yp}, haqiqiy YaIM {y} mlrd so‘m. YaIM uzilishi potensialga nisbatan necha foizni tashkil qiladi?",
        f"{num(gap)}%", [f"{num(-gap)}%", f"{num(F((y-yp)*100, y))}%", f"{num(y-yp)}%", f"{num(F(y*100, yp))}%"], f"Uzilish = (Y − Y*)/Y* × 100 = ({y}−{yp})/{yp}×100 = {num(gap)}% (retsession).", suf="%")
for yp, gap in [(2000, 5), (1200, 3)]:
    y = F(yp * (100 - gap), 100)
    add(3, f"Potensial YaIM {yp} mlrd so‘m, iqtisodiyot potensialdan {gap}% past ishlab chiqarmoqda (retsession uzilish). Haqiqiy YaIM qancha?",
        num(y), [num(yp + F(yp * gap, 100)), num(yp - gap), num(F(yp, 1) * gap / 100), num(F(yp * 100, 100 - gap))], f"Y = Y*·(1 − {gap}/100) = {num(y)}.")
# ---- 4-mavzu: ishsizlik (12) ----
for E, U in [(570, 30), (1520, 80), (860, 140), (2400, 100)]:
    u = F(U * 100, E + U)
    add(4, f"Ishchi kuchi tarkibida {E} ming kishi band, {U} ming kishi ishsiz (ish qidiryapti). Ishsizlik darajasi qancha?",
        f"{num(u)}%", [f"{num(F(U*100, E))}%", f"{num(F(E*100, E+U))}%", f"{num(F(U*100, E+U+E))}%", f"{num(u/2)}%"], f"u = U/(E+U) = {U}/{E+U} = {num(u)}%.", suf="%")
for f_, s_, u in [(2, 3, 7), (1.5, 3.5, 8), (2.5, 4, 9)]:
    nat = F(f_).limit_denominator(10) + F(s_).limit_denominator(10)
    cyc = u - nat
    add(4, f"Friksion ishsizlik {num(F(f_).limit_denominator(10))}%, tarkibiy ishsizlik {num(F(s_).limit_denominator(10))}%, haqiqiy ishsizlik darajasi {u}%. Tsiklik ishsizlik darajasi qancha?",
        f"{num(cyc)}%", [f"{num(nat)}%", f"{num(F(u))}%", f"{num(cyc + F(f_).limit_denominator(10))}%", f"{num(-cyc)}%"], f"Tabiiy daraja = friksion + tarkibiy = {num(nat)}%; tsiklik = {u} − {num(nat)} = {num(cyc)}%.", suf="%")
for beta, u, un, yp in [(2, 9, 6, 1000), (2.5, 8, 5, 2000), (2, 7, 4, 1500), (2.5, 10, 6, 800)]:
    gap = F(beta).limit_denominator(10) * (u - un)
    loss = F(yp) * gap / 100
    add(4, f"Ouken qonuni bo‘yicha ishsizlik tabiiy darajadan 1 foiz bandga oshsa, YaIM potensialdan {num(F(beta).limit_denominator(10))}% ga kamayadi. Haqiqiy ishsizlik {u}%, tabiiy daraja {un}%, potensial YaIM {yp} mlrd so‘m bo‘lsa, YaIM yo‘qotilishi qancha (mlrd so‘m)?",
        num(loss), [num(F(yp) * (u - un) / 100), num(F(yp) * u / 100 * F(beta).limit_denominator(10)), num(gap), num(loss * 2)], f"Uzilish = {num(F(beta).limit_denominator(10))}×({u}−{un}) = {num(gap)}%; yo‘qotish = {yp}×{num(gap)}% = {num(loss)}.")
# ---- 5-mavzu: inflyatsiya (12) ----
for p0, p1 in [(125, 140), (200, 218), (160, 172.8), (110, 123.2)]:
    pi = F(p1 - p0) * 100 / F(p0) if False else (F(str(p1)) - F(str(p0))) * 100 / F(str(p0))
    add(5, f"Iste’mol narxlari indeksi (ISI) o‘tgan yili {p0}, joriy yili {p1}. Yillik inflyatsiya sur’ati qancha?",
        f"{num(pi)}%", [f"{num(F(str(p1))*100/F(str(p0)))}%", f"{num(F(str(p1))-F(str(p0)))}%", f"{num((F(str(p1))-F(str(p0)))*100/F(str(p1)))}%", f"{num(pi*2)}%"], f"π = (ISI₁ − ISI₀)/ISI₀ × 100 = {num(pi)}%.", suf="%")
for i, pi in [(14, 9), (18, 12), (11, 6)]:
    r = i - pi
    add(5, f"Nominal foiz stavkasi {i}%, kutilayotgan inflyatsiya {pi}%. Fisher tenglamasiga ko‘ra real foiz stavkasi qancha?",
        f"{r}%", [f"{i+pi}%", f"{i}%", f"{pi}%", f"{r*2}%"], f"r = i − π = {i} − {pi} = {r}%.", suf="%")
for p in [2, 5, 7, 10]:
    y = F(70, p)
    add(5, f"Narxlar yiliga o‘rtacha {p}% ga oshib borsa, «70 qoidasi» bo‘yicha narxlar taxminan necha yilda ikki baravar oshadi?",
        f"{num(y)} yil", [f"{num(F(100, p))} yil", f"{num(F(p, 70))} yil", f"{num(F(35, p))} yil", f"{num(F(140, p))} yil"], f"70/{p} = {num(y)} yil.", suf=" yil")
for M, V, Y, k in [(200, 4, 400, 0), (150, 5, 300, 0)]:
    Pn = F(M * V, Y)
    add(5, f"Pul massasi M = {M}, pulning aylanish tezligi V = {V}, real ishlab chiqarish Y = {Y}. Pulning miqdoriy nazariyasi (MV = PY) bo‘yicha narxlar darajasi P nechaga teng?",
        num(Pn), [num(F(M * Y, V)), num(F(Y * V, M)), num(M + V), num(F(M, Y))], f"P = MV/Y = {M}×{V}/{Y} = {num(Pn)}.")
# ---- 6-mavzu: AD–AS, real pul qoldiqlari (4) ----
for M, Pn, newP in [(600, 2, 3), (900, 3, 2), (1200, 4, 6), (800, 2, 4)]:
    r0, r1 = F(M, Pn), F(M, newP)
    add(6, f"Nominal pul massasi {M} birlik o‘zgarmay qoldi, narxlar darajasi P = {Pn} dan {newP} gacha o‘zgardi. Real pul qoldiqlari (M/P) qanchaga o‘zgardi?",
        f"{num(r1 - r0)}", [f"{num(r0 - r1)}", f"{num(F(M, 1))}", f"{num(r1)}", f"{num(r0)}"], f"M/P: {num(r0)} → {num(r1)}; o‘zgarish {num(r1-r0)}.")
# ---- 7-mavzu: iste'mol funksiyasi (10) ----
for a, b, Yd in [(100, F(4, 5), 1000), (60, F(3, 4), 800), (120, F(9, 10), 1500), (80, F(2, 3), 900), (50, F(4, 5), 600)]:
    C = a + b * Yd; S = Yd - C
    add(7, f"Iste’mol funksiyasi C = {a} + {num(b)}·Yd. Tasarrufdagi daromad Yd = {Yd} bo‘lsa, jamg‘arma S qancha?",
        num(S), [num(C), num(b * Yd), num(Yd - a), num(S + a)], f"C = {a}+{num(b)}×{Yd} = {num(C)}; S = Yd − C = {num(S)}.")
for a, b, Yd in [(100, F(4, 5), 1000), (60, F(3, 4), 800), (120, F(9, 10), 1500), (80, F(2, 3), 900), (50, F(4, 5), 600)]:
    C = a + b * Yd; apc = C / Yd
    add(7, f"Iste’mol funksiyasi C = {a} + {num(b)}·Yd. Yd = {Yd} da iste’molga o‘rtacha moyillik (APC) nechaga teng?",
        num(apc, 3), [num(b, 3), num(1 - b, 3), num(Yd / C, 3), num(apc + F(1, 10), 3)], f"C = {num(C)}; APC = C/Yd = {num(C)}/{Yd} = {num(apc,3)} (MPC = {num(b)} dan farq qiladi).")
# ---- 8-mavzu: Keyns, multiplikator (14) ----
for b in [F(3, 4), F(4, 5), F(9, 10), F(2, 3)]:
    k = 1 / (1 - b)
    add(8, f"Iste’molga chegaraviy moyillik MPC = {num(b)}. Avtonom xarajatlar multiplikatori (soliqsiz yopiq iqtisodiyot) nechaga teng?",
        num(k), [num(1 / b), num(b / (1 - b)), num(1 - b), num(k + 1)], f"k = 1/(1 − MPC) = 1/(1 − {num(b)}) = {num(k)}.")
for a, I, G, b in [(100, 150, 250, F(3, 4)), (80, 120, 200, F(4, 5)), (200, 100, 300, F(2, 3)), (60, 140, 100, F(3, 4))]:
    Y = (a + I + G) / (1 - b)
    add(8, f"Yopiq iqtisodiyot (soliqsiz): C = {a} + {num(b)}Y, I = {I}, G = {G}. Muvozanatli YaIM (Y) qancha?",
        num(Y), [num(a + I + G), num((a + I + G) * b), num((I + G) / (1 - b)), num(Y / 2)], f"Y = (a + I + G)/(1 − b) = {a+I+G}/{num(1-b)} = {num(Y)}.")
for b, dI in [(F(3, 4), 40), (F(4, 5), 30), (F(9, 10), 20), (F(2, 3), 60)]:
    d = dI / (1 - b)
    add(8, f"MPC = {num(b)}. Investitsiyalar {dI} birlikka oshsa, muvozanatli YaIM qanchaga o‘zgaradi?",
        num(d), [num(dI), num(dI * b), num(dI / b), num(dI * (1 - b))], f"ΔY = ΔI/(1 − MPC) = {dI}/{num(1-b)} = {num(d)}.")
for b, yp, y in [(F(3, 4), 1000, 920), (F(4, 5), 1500, 1400)]:
    k = 1 / (1 - b); need = F(yp - y) / k
    add(8, f"MPC = {num(b)}, muvozanatli YaIM {y}, potensial YaIM {yp}. Retsession uzilishni yopish uchun avtonom xarajatlar qanchaga oshishi kerak?",
        num(need), [num(yp - y), num((yp - y) * k), num((yp - y) * b), num(need * 2)], f"Uzilish {yp-y}; k = {num(k)}; ΔA = {yp-y}/{num(k)} = {num(need)}.")
for b, ym, yp in [(F(3, 4), 1100, 1000), (F(2, 3), 960, 900)]:
    k = 1 / (1 - b); cut = F(ym - yp) / k
    add(8, f"MPC = {num(b)}, muvozanatli YaIM {ym}, potensial YaIM {yp} (inflyatsion uzilish). Uni yopish uchun avtonom xarajatlar qanchaga kamayishi kerak?",
        num(cut), [num(ym - yp), num((ym - yp) * k), num(cut * 2), num((ym - yp) * b)], f"Uzilish {ym-yp}; ΔA = −{ym-yp}/{num(k)} = −{num(cut)}.")
# ---- 9-mavzu: pul (10) ----
for rr, D in [(F(1, 10), 500), (F(1, 5), 400), (F(1, 8), 800), (F(1, 4), 600)]:
    mm = 1 / rr
    add(9, f"Majburiy zaxira normasi {num(rr*100)}%, banklar ortiqcha zaxira saqlamaydi, aholi naqd pul ushlamaydi. Markaziy bank pul bazasini {D} birlikka oshirsa, pul massasi (M) qanchaga o‘zgaradi?",
        num(D * mm), [num(D), num(D * rr), num(D * (mm - 1)), num(D / mm / 2)], f"Pul multiplikatori = 1/rr = {num(mm)}; ΔM = {D}×{num(mm)} = {num(D*mm)}.")
for c, r in [(F(1, 5), F(1, 10)), (F(1, 4), F(1, 5)), (F(1, 3), F(1, 6))]:
    mm = (1 + c) / (c + r)
    add(9, f"Naqd pul/depozit nisbati c = {num(c)}, zaxira/depozit nisbati r = {num(r)}. Pul multiplikatori (M/MB) nechaga teng?",
        num(mm), [num(1 / r), num(1 / (c + r)), num((1 + c) / r), num(mm + 1)], f"mm = (1 + c)/(c + r) = (1+{num(c)})/({num(c)}+{num(r)}) = {num(mm)}.")
for Pn, Y, M in [(2, 500, 250), (4, 300, 200), (5, 400, 500)]:
    V = F(Pn * Y, M)
    add(9, f"Narxlar darajasi P = {Pn}, real YaIM Y = {Y}, pul massasi M = {M}. Pulning aylanish tezligi V (MV = PY) nechaga teng?",
        num(V), [num(F(M, Pn * Y)), num(F(M * Y, Pn)), num(Pn * Y * M), num(V * 2)], f"V = PY/M = {Pn}×{Y}/{M} = {num(V)}.")
add(9, "Aholi naqd pul sifatida 300, banklardagi depozitlari 900 birlik ushlab turibdi. M1 = naqd pul + depozit deb olinsa, naqd pulning M1 dagi ulushi necha foiz?",
    "25%", ["30%", "33,33%", "75%"], "M1 = 300 + 900 = 1200; ulush = 300/1200 = 25%.")
# ---- 10-mavzu: byudjet (6) ----
for T, G, Y in [(420, 480, 4000), (900, 1080, 12000), (250, 300, 2500)]:
    d = G - T
    add(10, f"Davlat byudjeti daromadlari (soliqlar) {T}, xarajatlari {G} mlrd so‘m, YaIM {Y} mlrd so‘m. Byudjet taqchilligi YaIMning necha foizini tashkil qiladi?",
        f"{num(F(d*100, Y))}%", [f"{num(F(G*100, Y))}%", f"{num(F(T*100, Y))}%", f"{num(F(d*100, G))}%", f"{num(F(d*100, T))}%"], f"Taqchillik = G − T = {d}; {d}/{Y}×100 = {num(F(d*100,Y))}%.", suf="%")
for inc, tax in [(30, 3), (80, 14)]:
    # progressiv: 0–20: 5%, 20–60: 15%, 60+: 25% (mln so'm)
    t = F(min(inc, 20)) * F(5, 100) + F(max(0, min(inc, 60) - 20)) * F(15, 100) + F(max(0, inc - 60)) * F(25, 100)
    add(10, f"Progressiv soliq shkalasi: daromadning 20 mln so‘migacha — 5%, 20 dan 60 mln so‘migacha — 15%, 60 mln so‘mdan yuqori qismiga — 25%. Yillik daromadi {inc} mln so‘m bo‘lgan shaxs qancha soliq to‘laydi (mln so‘m)?",
        num(t), [num(F(inc) * F(5, 100)), num(F(inc) * F(15, 100)), num(F(inc) * F(25, 100)), num(t + 2)], f"Soliq = chegaraviy stavkalar bo‘yicha bosqichma-bosqich = {num(t)} mln so‘m.")
# ---- 11-mavzu: fiskal multiplikatorlar (12) ----
for b, dG in [(F(3, 4), 20), (F(4, 5), 15), (F(2, 3), 30), (F(9, 10), 10)]:
    d = dG / (1 - b)
    add(11, f"MPC = {num(b)}. Davlat xaridlari {dG} birlikka oshirilsa (soliqlar o‘zgarmaydi), muvozanatli YaIM qanchaga oshadi?",
        num(d), [num(dG), num(dG * b / (1 - b)), num(dG / b), num(dG * (1 - b))], f"ΔY = ΔG/(1 − MPC) = {dG}/{num(1-b)} = {num(d)}.")
for b, dT in [(F(3, 4), 20), (F(4, 5), 10), (F(2, 3), 30), (F(9, 10), 10)]:
    d = -b * dT / (1 - b)
    add(11, f"MPC = {num(b)}. Soliqlar (bir yo‘la olinadigan) {dT} birlikka oshirilsa, muvozanatli YaIM qanchaga o‘zgaradi?",
        num(d), [num(-dT / (1 - b)), num(b * dT / (1 - b)), num(-dT), num(-b * dT)], f"ΔY = −MPC·ΔT/(1 − MPC) = −{num(b)}×{dT}/{num(1-b)} = {num(d)}.")
for b, dG in [(F(3, 4), 40), (F(4, 5), 25), (F(2, 3), 60)]:
    add(11, f"MPC = {num(b)}. Davlat xaridlari ham, soliqlar ham {dG} birlikka bir vaqtda oshirilsa (balanslashgan byudjet), muvozanatli YaIM qanchaga o‘zgaradi?",
        f"{dG}", [num(dG / (1 - b)), num(-b * dG / (1 - b)), "0", num(dG * b)], f"Balanslashgan byudjet multiplikatori = 1: ΔY = {dG}.")
for b, gap in [(F(3, 4), 60), (F(4, 5), 100)]:
    need = F(gap) * (1 - b) / b
    add(11, f"MPC = {num(b)}, retsession uzilish {gap} birlik. Faqat soliqlarni kamaytirish orqali uzilishni yopish uchun soliqlar qanchaga kamaytirilishi kerak?",
        num(need), [num(F(gap) * (1 - b)), num(F(gap) / b), num(gap), num(need * 2)], f"|soliq multiplikatori| = b/(1−b); ΔT = {gap}×(1−{num(b)})/{num(b)} = {num(need)}.")
# ---- 12-mavzu: pul-kredit siyosati (6) ----
for pi, ps, r, gap in [(8, 4, 2, -2), (10, 5, 2, 1), (6, 3, 2, -4)]:
    i = pi + r + F(1, 2) * (pi - ps) + F(1, 2) * gap
    add(12, f"Teylor qoidasi: i = π + r* + 0,5(π − π*) + 0,5·(YaIM uzilishi, %). Joriy inflyatsiya π = {pi}%, maqsad π* = {ps}%, neytral real stavka r* = {r}%, YaIM uzilishi {gap}%. Markaziy bank stavkasi i nechaga teng?",
        f"{num(i)}%", [f"{num(i + 2)}%", f"{num(i - 2)}%", f"{num(pi + r)}%", f"{num(F(1,2) * (pi - ps) + r)}%"], f"i = {pi} + {r} + 0,5×({pi}−{ps}) + 0,5×({gap}) = {num(i)}%.", suf="%")
for D, rr in [(2000, F(1, 10)), (1500, F(1, 5)), (800, F(1, 8))]:
    add(12, f"Tijorat banklarining depozitlari {D} mlrd so‘m, majburiy zaxira normasi {num(rr*100)}%. Banklar markaziy bankda saqlashi shart bo‘lgan majburiy zaxira qancha (mlrd so‘m)?",
        num(D * rr), [num(D * (1 - rr)), num(D / rr), num(D + D * rr), num(D * rr / 2)], f"Zaxira = {D}×{num(rr)} = {num(D*rr)}.")
# ---- 13-mavzu: IS–LM (8) ----
def islm(A, a, B, c): i = F(A - B, a + c); return i, A - a * i
for A, a, B, c in [(1500, 50, 300, 100), (2000, 100, 500, 50), (1800, 40, 600, 80), (2400, 100, 400, 100)]:
    i, Y = islm(A, a, B, c)
    add(13, f"IS egri chizig‘i: Y = {A} − {a}i; LM egri chizig‘i: Y = {B} + {c}i (i — foiz stavkasi, %). Umumiy muvozanatda daromad Y nechaga teng?",
        num(Y), [num(i), num(A), num(B + c), num(Y + 100)], f"{A} − {a}i = {B} + {c}i → i = {num(i)}%; Y = {num(Y)}.")
for A, a, B, c in [(1500, 50, 300, 100), (2000, 100, 500, 50)]:
    i, Y = islm(A, a, B, c)
    add(13, f"IS egri chizig‘i: Y = {A} − {a}i; LM egri chizig‘i: Y = {B} + {c}i. Muvozanat foiz stavkasi i (%) nechaga teng?",
        f"{num(i)}%", [f"{num(Y)}%", f"{num(F(A, a))}%", f"{num(F(B, c))}%", f"{num(i * 2)}%"], f"{A} − {a}i = {B} + {c}i → i = {num(A-B)}/{a+c} = {num(i)}%.", suf="%")
for A, a, B, c, dA in [(1500, 50, 300, 100, 150), (2000, 100, 500, 50, 300)]:
    i0, Y0 = islm(A, a, B, c); i1, Y1 = islm(A + dA, a, B, c)
    add(13, f"IS: Y = {A} − {a}i, LM: Y = {B} + {c}i. Davlat xaridlari oshishi IS ni o‘ngga {dA} birlikka siljitdi (Y = {A+dA} − {a}i). Muvozanatli daromad qanchaga o‘zgaradi (siqib chiqarish samarasi hisobga olinadi)?",
        num(Y1 - Y0), [num(dA), num(Y1), num(i1 - i0), num((Y1 - Y0) * 2)], f"Yangi muvozanat: Y = {num(Y1)}; ΔY = {num(Y1)} − {num(Y0)} = {num(Y1-Y0)} (< {dA}, chunki foiz oshib, investitsiyani siqib chiqaradi).")
# ---- 14-mavzu: iqtisodiy o'sish (8) ----
for y0, y1 in [(1000, 1050), (2400, 2520), (800, 848)]:
    g = F((y1 - y0) * 100, y0)
    add(14, f"Real YaIM {y0} dan {y1} mlrd so‘mga o‘zgardi. Iqtisodiy o‘sish sur’ati qancha?",
        f"{num(g)}%", [f"{num(F((y1-y0)*100, y1))}%", f"{num(y1 - y0)}%", f"{num(F(y1*100, y0))}%", f"{num(g * 2)}%"], f"g = (Y₁ − Y₀)/Y₀ × 100 = {num(g)}%.", suf="%")
for ga, gk, gl, al in [(5, 6, 2, F(1, 3)), (6, 8, 3, F(1, 4)), (4, 6, 1, F(1, 2))]:
    gA = ga - al * gk - (1 - al) * gl
    add(14, f"YaIM yiliga {ga}% o‘sdi; kapital {gk}%, mehnat {gl}% ga o‘sdi. Kapitalning YaIMdagi ulushi α = {num(al)} bo‘lsa, umumiy omil unumdorligining (Solou qoldig‘i) o‘sishi qancha?",
        f"{num(gA)}%", [f"{num(F(ga) - gk)}%", f"{num(F(ga) - gl)}%", f"{num(F(ga) - al * gk)}%", f"{num(gA + 1)}%"], f"gA = g − α·gK − (1−α)·gL = {ga} − {num(al*gk)} − {num((1-al)*gl)} = {num(gA)}%.", suf="%")
for s, v in [(F(1, 5), 4), (F(3, 20), 3), (F(1, 4), 5)]:
    g = s / v
    add(14, f"Xarrod–Domar modelida jamg‘arish normasi s = {num(s)}, kapital sig‘imi v = {v}. Kafolatlangan o‘sish sur’ati (g = s/v) qancha?",
        f"{num(g*100)}%", [f"{num(s*100)}%", f"{num(v*s*100)}%", f"{num(F(v)/s)}%", f"{num(g*200)}%"], f"g = s/v = {num(s)}/{v} = {num(g*100)}%.", suf="%")
add(14, "YaIM yiliga 4% o‘sdi, aholi soni 1% ga ko‘paydi. Aholi jon boshiga YaIM taxminan necha foizga o‘sdi?",
    "3%", ["5%", "4%", "1%"], "g(jon boshiga) ≈ gY − gaholi = 4 − 1 = 3%.")

DROP = {2: [11], 5: [12], 8: [3, 7], 9: [10], 11: [12]}  # umumiy son 120 bo'lishi uchun
for t, idx in DROP.items(): P[t] = [x for i, x in enumerate(P[t]) if i not in idx]
COUNTS = {t: len(P[t]) for t in P}
def problems(t): return P[t]
if __name__ == "__main__":
    print(COUNTS, sum(COUNTS.values()))
