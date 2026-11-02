#!/usr/bin/env python3
"""Tadbirkorlik asoslari oraliq nazorati savollar bazasi: scripts/exam-src/tb/t1..t7.py -> server/exam-bank-tb1.mjs (400 ta nazariy savol).
To'g'ri javob o'rni teng taqsimlanadi."""
import sys, os, json, random, statistics
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "exam-src", "tb"))
mods = [__import__(f"t{i}") for i in range(1, 8)]
try:
    import tbfix
    FIX, TRIM = tbfix.FIX, tbfix.TRIM
except ImportError:
    FIX, TRIM = {}, {}
NB = {}
for _n in ("nb1", "nb2", "nb3", "nb4", "nb6"):
    try: NB.update(__import__(_n).NB)
    except ImportError: pass
OKS = {}
for _n in ("ok5", "ok6"):
    try: OKS.update(__import__(_n).OK)
    except ImportError: pass
used = set()
clean = lambda s: s.replace("­", "").strip()
items = []
gi = -1
for t, m in enumerate(mods, 1):
    for q, ok, bad, why in m.T:
        gi += 1
        if gi in NB: bad = NB[gi]
        if gi in OKS: ok = OKS[gi]
        q = clean(q)
        for k, v in FIX.items():
            if q.startswith(k): used.add(("f", k)); ok, bad = v
        for k, v in TRIM.items():
            if q.startswith(k): used.add(("t", k)); ok = v
        items.append({"t": t, "q": q, "ok": clean(ok), "bad": [clean(b) for b in bad], "w": clean(why)})
assert used == {("f", k) for k in FIX} | {("t", k) for k in TRIM}, "mos kelmagan tuzatish: %s" % (({("f", k) for k in FIX} | {("t", k) for k in TRIM}) - used)
assert len(items) == 400, len(items)
for i in items:
    opts = [i["ok"]] + i["bad"]
    assert len(opts) == 4 and len(set(opts)) == 4, i["q"][:60]
    assert not any(w in o.lower() for o in opts for w in ("hammasi to", "barchasi to", "yuqoridagi")), i["q"][:60]
assert len({i["q"] for i in items}) == 400, "takror savol bor"
rnd = random.Random(20261102)
slots = [k % 4 for k in range(400)]; rnd.shuffle(slots)
lg = sh = 0; big = []
for i in items:
    L = [len(o) for o in [i["ok"]] + i["bad"]]; c = L[0]; mb = max(L[1:])
    lg += c > mb; sh += c < min(L[1:])
    if c > mb * 1.10: big.append(i["q"][:50])
bank = []
for i, s in zip(items, slots):
    o = list(i["bad"]); rnd.shuffle(o); o.insert(s, i["ok"])
    bank.append({"t": i["t"], "q": i["q"], "o": o, "c": s, "w": i["w"], "k": "th"})
print("savollar:", len(bank), "| mavzu:", {t: sum(1 for b in bank if b["t"] == t) for t in range(1, 8)}, "| kalit:", [sum(1 for b in bank if b["c"] == k) for k in range(4)])
print(f"to'g'ri javob eng uzun: {lg/400:.0%}, eng qisqa: {sh/400:.0%}, 10% dan uzun: {len(big)}")
if "-v" in sys.argv: print("\n".join(big))
open("server/exam-bank-tb1.mjs", "w").write(f"// AVTOMATIK YARATILGAN (scripts/build-exam-tb.py). Tadbirkorlik asoslari 1-oraliq nazorati savollar bazasi: {len(bank)} ta. Faqat serverda — javob kalitlari brauzerga yuborilmaydi.\nexport const BANK = " + json.dumps(bank, ensure_ascii=False, indent=0) + ";\n")
