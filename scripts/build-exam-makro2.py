#!/usr/bin/env python3
"""Makroiqtisodiyot 2-oraliq nazorati savollar bazasi: scripts/exam-src/makro2/m1..m14.py (+extra.py) va problems.py -> server/exam-bank-makro2.mjs
400 ta: 280 nazariy (70%) + 120 masala (30%). To'g'ri javob o'rni teng taqsimlanadi; eski bazadagi savollar bilan takrorlanish tekshiriladi."""
import sys, os, json, random, re, statistics, importlib
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "exam-src", "makro2"))
import problems, extra
FX = {}
for _n in ("fx1", "fx2", "fx3", "fx4"):
    try: FX.update(importlib.import_module(_n).FX)
    except ImportError: pass
items = []
_ti = 0
for t in range(1, 15):
    m = importlib.import_module(f"m{t}")
    for q, ok, bad, why in m.T + extra.X.get(t, []):
        if _ti in FX: bad = FX[_ti]
        _ti += 1
        items.append({"t": t, "k": "th", "q": q.strip(), "ok": ok.strip(), "bad": [b.strip() for b in bad], "w": why.strip()})
    for q, ok, bad, why in problems.problems(t):
        items.append({"t": t, "k": "pr", "q": q.strip(), "ok": ok.strip(), "bad": [b.strip() for b in bad], "w": why.strip()})
n_th = sum(1 for i in items if i["k"] == "th"); n_pr = len(items) - n_th
assert (n_th, n_pr) == (280, 120), (n_th, n_pr)
for i in items:
    opts = [i["ok"]] + i["bad"]
    assert len(opts) == 4 and len(set(opts)) == 4, i["q"][:60]
    assert not any(w in o.lower() for o in opts for w in ("hammasi to", "barchasi to", "yuqoridagi")), i["q"][:60]
assert len({i["q"] for i in items}) == len(items), "takror savol bor"
# eski bazadagi savollar bilan o'xshashlik
old = json.load(open("/tmp/oldq.json")) if os.path.exists("/tmp/oldq.json") else []
tk = lambda s: {w[:5] for w in re.findall(r"[\w’']{4,}", s.lower())}
oldt = [(q, tk(q)) for q in old]
dups = []
for i in items:
    a = tk(i["q"])
    for q, b in oldt:
        if a and b and len(a & b) / len(a | b) > 0.6: dups.append((i["q"][:70], q[:70])); break
print("eski baza bilan o'xshash:", len(dups))
for d in dups[:20]: print("  ", d)
rnd = random.Random(20261110)
slots = [k % 4 for k in range(len(items))]; rnd.shuffle(slots)
lg = sh = 0; big = 0
for i in items:
    L = [len(o) for o in [i["ok"]] + i["bad"]]; c = L[0]; mb = max(L[1:])
    lg += c > mb; sh += c < min(L[1:]); big += c > mb * 1.10
bank = []
for i, s in zip(items, slots):
    o = list(i["bad"]); rnd.shuffle(o); o.insert(s, i["ok"])
    bank.append({"t": i["t"], "q": i["q"], "o": o, "c": s, "w": i["w"], "k": i["k"]})
print(f"savollar: {len(bank)} (nazariy {n_th}, masala {n_pr}) | mavzu:", {t: sum(1 for b in bank if b['t'] == t) for t in range(1, 15)})
print("kalit:", [sum(1 for b in bank if b['c'] == k) for k in range(4)], f"| eng uzun {lg/len(items):.0%}, eng qisqa {sh/len(items):.0%}, 10% dan uzun: {big}")
open("server/exam-bank-makro2.mjs", "w").write(f"// AVTOMATIK YARATILGAN (scripts/build-exam-makro2.py). Makroiqtisodiyot 2-oraliq nazorati savollar bazasi: {len(bank)} ta. Faqat serverda — javob kalitlari brauzerga yuborilmaydi.\nexport const BANK = " + json.dumps(bank, ensure_ascii=False, indent=0) + ";\n")
