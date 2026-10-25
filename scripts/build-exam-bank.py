#!/usr/bin/env python3
"""Imtihon savollar bazasini yig'adi: <papka>/NN.json (har biri [{q, options[4], c, why}]) -> server/exam-bank-<id>.mjs.
Foydalanish: python3 scripts/build-exam-bank.py <papka> <id> [--total 400] [--tests-src]
  --tests-src: papka o'rniga scripts/tests-src/makro (sinov uchun, oddiy testlar)."""
import json, sys, os, re, random

src, bid = sys.argv[1], sys.argv[2]
total = int(sys.argv[sys.argv.index("--total") + 1]) if "--total" in sys.argv else 400
bank = []
for fn in sorted(os.listdir(src)):
    m = re.match(r"(\d+)\.json$", fn)
    if not m or int(m.group(1)) > 14:
        continue
    t = int(m.group(1))
    for it in json.load(open(os.path.join(src, fn))):
        assert len(it["options"]) == 4 and it["c"] in (0, 1, 2, 3), (fn, it["q"][:40])
        assert len(set(it["options"])) == 4, (fn, "bir xil variantlar", it["q"][:40])
        bank.append({"t": t, "q": it["q"].strip(), "o": [o.strip() for o in it["options"]], "c": it["c"], "w": (it.get("why") or "").strip()})
assert len(bank) >= total, f"savollar yetarli emas: {len(bank)} < {total}"
if len(bank) > total:
    # ortiqchasini eng ko'p savolli mavzulardan olib tashlaymiz
    random.seed(7)
    while len(bank) > total:
        cnt = {}
        for b in bank: cnt[b["t"]] = cnt.get(b["t"], 0) + 1
        top = max(cnt, key=cnt.get)
        idx = [i for i, b in enumerate(bank) if b["t"] == top]
        bank.pop(random.choice(idx))
dist = [sum(1 for b in bank if b["c"] == k) for k in range(4)]
out = f"// AVTOMATIK YARATILGAN (scripts/build-exam-bank.py). Imtihon savollar bazasi: {len(bank)} ta. Faqat serverda — javob kalitlari brauzerga yuborilmaydi.\n"
out += "export const BANK = " + json.dumps(bank, ensure_ascii=False, indent=0) + ";\n"
open(f"server/exam-bank-{bid}.mjs", "w").write(out)
print("savollar:", len(bank), "| mavzu bo'yicha:", {t: sum(1 for b in bank if b['t'] == t) for t in sorted({b['t'] for b in bank})}, "| kalit taqsimoti:", dist)
