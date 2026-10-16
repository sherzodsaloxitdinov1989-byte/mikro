#!/usr/bin/env python3
"""scripts/tests-src/NN.json dagi testlarni tekshiradi va public/data/layers-auto.js dagi `tests` o'rniga yozadi.

    python3 scripts/apply-tests.py              # asosiy fan
    python3 scripts/apply-tests.py --subject tb # Tadbirkorlik asoslari (scripts/tests-src/tb/NN.json)
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
# Fan: standart — asosiy fan (Mikroiqtisodiyot); "--subject tb" — Tadbirkorlik asoslari
TB = "--subject" in sys.argv and sys.argv[sys.argv.index("--subject") + 1] == "tb"
AUTO = ROOT / "public" / "data" / ("tb/layers-auto.js" if TB else "layers-auto.js")
SRC = ROOT / "scripts" / "tests-src" / ("tb" if TB else "")
KEYS_OUT = ROOT / "server" / ("quiz-keys-tb.mjs" if TB else "quiz-keys.mjs")
BAD = re.compile(r"hammasi to.g.ri|hech biri|barcha javoblar|yuqoridagilarning|a va b ", re.I)

text = AUTO.read_text(encoding="utf-8")
i = text.index("{")
head, d = text[:i], json.loads(text[i : text.rindex("}") + 1])
tail = text[text.rindex("}") + 1 :]
errs = []
keys = {}
for num in sorted(d, key=int):
    f = SRC / f"{int(num):02d}.json"
    if not f.exists():
        errs.append(f"{f.name}: yo'q")
        continue
    tests = json.loads(f.read_text(encoding="utf-8"))
    seen = set()
    longest = 0
    for k, t in enumerate(tests, 1):
        w = f"{f.name} #{k}"
        o = t.get("options", [])
        if len(o) != 4 or len(set(o)) != 4: errs.append(f"{w}: 4 ta noyob variant kerak")
        if not isinstance(t.get("c"), int) or not 0 <= t["c"] < len(o): errs.append(f"{w}: c noto'g'ri"); continue
        if not t.get("q", "").strip() or any(not x.strip() for x in o): errs.append(f"{w}: bo'sh matn")
        if any(BAD.search(x) for x in o): errs.append(f"{w}: taqiqlangan variant")
        if t["q"] in seen: errs.append(f"{w}: takroriy savol")
        seen.add(t["q"])
        if len(o[t["c"]]) > max(len(x) for j, x in enumerate(o) if j != t["c"]): longest += 1
    if len(tests) != 20: errs.append(f"{f.name}: {len(tests)} ta (20 kerak)")
    cs = [t["c"] for t in tests]
    if max(cs.count(x) for x in range(4)) > 8: errs.append(f"{f.name}: c taqsimoti notekis {[cs.count(x) for x in range(4)]}")
    if longest > 8: errs.append(f"{f.name}: to'g'ri javob {longest} ta savolda eng uzun")
    # Mijozga (brauzerga) faqat savol va variantlar beriladi; to'g'ri javob kaliti va izoh faqat serverda (server/quiz-keys.mjs).
    d[num]["tests"] = [{"q": t["q"], "options": t["options"]} for t in tests]
    keys[num] = [{"c": t["c"], **({"e": t["e"]} if t.get("e") else {})} for t in tests]
if errs:
    print("\n".join(errs)); sys.exit(1)
AUTO.write_text(head + json.dumps(d, ensure_ascii=False, indent=1) + tail, encoding="utf-8")
KEYS_OUT.write_text(
    "// Avtomatik yaratilgan (scripts/apply-tests.py" + (" --subject tb" if TB else "") + "): test javob kalitlari — FAQAT server. Brauzerga yuborilmaydi.\n"
    "export const KEYS = " + json.dumps(keys, ensure_ascii=False, indent=1) + ";\n",
    encoding="utf-8",
)
print("✅", sum(len(v["tests"]) for v in d.values()), "ta test yozildi")
