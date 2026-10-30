#!/usr/bin/env python3
"""Mikroiqtisodiyot oraliq nazorati savollar bazasi: scripts/exam-src/mikro/theory{1..6}.py (+extra34.py) va problems.py -> server/exam-bank-mikro1.mjs
400 ta: 280 nazariy (70%) + 120 masala (30%). To'g'ri javob o'rni teng taqsimlanadi (har biri 100 ta)."""
import sys, os, json, random, statistics
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "exam-src", "mikro"))
import theory1, theory2, theory3, theory4, theory5, theory6, extra34, problems, fixes1, fixes2, fixes3, fixes4, fixes5, fixes6, trims

th = {1: theory1.T, 2: theory2.T, 3: theory3.T + extra34.T3, 4: theory4.T + extra34.T4, 5: theory5.T + extra34.T5, 6: theory6.T + extra34.T6}
FIX = {}
for m in (fixes1, fixes2, fixes3, fixes4, fixes5, fixes6):
    FIX.update(m.F)
used = set()
tused = set()
def fixed(q, ok, bad):
    for k, v in FIX.items():
        if q.startswith(k):
            used.add(k); ok, bad = v[0], v[1]; break
    for k, v in trims.TRIM.items():
        if q.startswith(k):
            tused.add(k); ok = v; break
    return ok, bad
items = []
for t in range(1, 7):
    for q, ok, bad, why in th[t]:
        ok, bad = fixed(q, ok, bad)
        items.append({"t": t, "k": "th", "q": q.strip(), "ok": ok.strip(), "bad": [b.strip() for b in bad], "w": why.strip()})
    for q, ok, bad, why in problems.problems(t):
        items.append({"t": t, "k": "pr", "q": q.strip(), "ok": ok.strip(), "bad": [b.strip() for b in bad], "w": why.strip()})
assert used == set(FIX), 'mos kelmagan tuzatishlar: %s' % sorted(set(FIX) - used)
assert tused == set(trims.TRIM), 'mos kelmagan trim: %s' % sorted(set(trims.TRIM) - tused)
n_th = sum(1 for i in items if i["k"] == "th"); n_pr = len(items) - n_th
assert (n_th, n_pr) == (280, 120), (n_th, n_pr)
for i in items:
    opts = [i["ok"]] + i["bad"]
    assert len(opts) == 4 and len(set(opts)) == 4, i["q"][:60]
    assert not any(any(w in o.lower() for w in ("hammasi to", "barchasi to", "yuqoridagi")) for o in opts), i["q"][:60]
assert len({i["q"] for i in items}) == len(items), "takror savol bor"

# To'g'ri javob o'rnini teng taqsimlash (har bir mavzuda ham muvozanatli)
rnd = random.Random(20261104)
slots = [k % 4 for k in range(len(items))]
rnd.shuffle(slots)
# nazariy savollarda to'g'ri javob uzunlik bo'yicha ajralib qolmasligi uchun statistikani hisoblaymiz
longest = shortest = 0; ratios = []
for i in items:
    L = [len(o) for o in [i["ok"]] + i["bad"]]
    if L[0] == max(L) and L.count(max(L)) == 1: longest += 1
    if L[0] == min(L) and L.count(min(L)) == 1: shortest += 1
    ratios.append(L[0] / (sum(L[1:]) / 3))
bank = []
for i, s in zip(items, slots):
    opts = list(i["bad"]); rnd.shuffle(opts); opts.insert(s, i["ok"])
    bank.append({"t": i["t"], "q": i["q"], "o": opts, "c": s, "w": i["w"], "k": i["k"]})
dist = [sum(1 for b in bank if b["c"] == k) for k in range(4)]
print(f"savollar: {len(bank)} (nazariy {n_th}, masala {n_pr}) | mavzu bo'yicha:", {t: sum(1 for b in bank if b['t'] == t) for t in range(1, 7)})
print("kalit taqsimoti:", dist, "| eng uzun javob:", f"{longest/len(items):.0%}", "eng qisqa:", f"{shortest/len(items):.0%}", "| o'rtacha uzunlik nisbati:", round(statistics.mean(ratios), 2))
out = f"// AVTOMATIK YARATILGAN (scripts/build-exam-mikro.py). Mikroiqtisodiyot 1-oraliq nazorati savollar bazasi: {len(bank)} ta. Faqat serverda — javob kalitlari brauzerga yuborilmaydi.\n"
out += "export const BANK = " + json.dumps(bank, ensure_ascii=False, indent=0) + ";\n"
open("server/exam-bank-mikro1.mjs", "w").write(out)
