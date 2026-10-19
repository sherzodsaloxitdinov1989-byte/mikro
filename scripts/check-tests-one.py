#!/usr/bin/env python3
"""Bitta bob test faylini apply-tests.py qoidalari bilan tekshiradi (boshqa fayllarga tegmaydi).

    python3 scripts/check-tests-one.py mikro2 3      # scripts/tests-src/mikro2/03.json
"""
import json, math, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
subj, num = sys.argv[1], int(sys.argv[2])
f = ROOT / "scripts" / "tests-src" / subj / f"{num:02d}.json"
BAD = re.compile(r"hammasi to.g.ri|hech biri|barcha javoblar|yuqoridagilarning|a va b ", re.I)
tests = json.loads(f.read_text(encoding="utf-8"))
errs, seen, longest = [], set(), 0
for k, t in enumerate(tests, 1):
    w = f"#{k}"
    o = t.get("options", [])
    if len(o) != 4 or len(set(o)) != 4: errs.append(f"{w}: 4 ta noyob variant kerak")
    if not isinstance(t.get("c"), int) or not 0 <= t["c"] < len(o): errs.append(f"{w}: c noto'g'ri"); continue
    if not t.get("q", "").strip() or any(not x.strip() for x in o): errs.append(f"{w}: bo'sh matn")
    if any(BAD.search(x) for x in o): errs.append(f"{w}: taqiqlangan variant")
    if t["q"] in seen: errs.append(f"{w}: takroriy savol")
    seen.add(t["q"])
    if len(o[t["c"]]) > max(len(x) for j, x in enumerate(o) if j != t["c"]): longest += 1
    if re.search(r"\b(ma x|mi n|M R S|M R T S)\b|¿", " ".join(o) + t["q"]): errs.append(f"{w}: formulada buzilgan belgi qoldi")
n = len(tests)
if not 20 <= n <= 30: errs.append(f"{n} ta savol (20–30 kerak)")
cs = [t["c"] for t in tests if isinstance(t.get("c"), int)]
cap = math.ceil(n * 0.4)
if cs and max(cs.count(x) for x in range(4)) > cap: errs.append(f"c taqsimoti notekis {[cs.count(x) for x in range(4)]} (har biri ≤ {cap})")
if longest > cap: errs.append(f"to'g'ri javob {longest} ta savolda eng uzun (≤ {cap} bo'lsin)")
print("\n".join(errs) if errs else f"✅ {f.name}: {n} ta test, c taqsimoti {[cs.count(x) for x in range(4)]}, eng uzun javob {longest} ta")
sys.exit(1 if errs else 0)
