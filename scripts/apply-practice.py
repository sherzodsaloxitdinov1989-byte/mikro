#!/usr/bin/env python3
"""scripts/practice-src/tb/NN.json dagi amaliy mashg'ulotlarni tekshiradi va public/data/tb/practice-auto.js ga yozadi.

    python3 scripts/apply-practice.py --subject tb
"""
import json, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
if not ("--subject" in sys.argv and sys.argv[sys.argv.index("--subject") + 1] == "tb"):
    sys.exit("Foydalanish: python3 scripts/apply-practice.py --subject tb")
SRC = ROOT / "scripts" / "practice-src" / "tb"
OUT = ROOT / "public" / "data" / "tb" / "practice-auto.js"
layers = json.loads((lambda s: s[s.index("{") : s.rindex("}") + 1])((ROOT / "public/data/tb/layers-auto.js").read_text(encoding="utf-8")))

errs, out = [], {}
for num in sorted(layers, key=int):
    f = SRC / f"{int(num):02d}.json"
    if not f.exists():
        errs.append(f"{f.name}: yo'q")
        continue
    p = json.loads(f.read_text(encoding="utf-8"))
    w = f.name
    for k in ("goal", "concepts", "source", "tasks", "open", "refs"):
        if k not in p:
            errs.append(f"{w}: '{k}' yo'q")
    if len(p.get("open", [])) != len(p.get("refs", [])):
        errs.append(f"{w}: open ({len(p.get('open', []))}) va refs ({len(p.get('refs', []))}) uzunligi teng emas")
    ids = set()
    for t in p.get("tasks", []):
        if t["id"] in ids:
            errs.append(f"{w}: takroriy id {t['id']}")
        ids.add(t["id"])
        if not t.get("fields") or len(t["fields"]) > 4:
            errs.append(f"{w}: {t['id']} maydonlari 1–4 ta bo'lsin")
        for fl in t.get("fields", []):
            if not isinstance(fl.get("value"), (int, float)) or not fl.get("label"):
                errs.append(f"{w}: {t['id']} maydon noto'g'ri {fl}")
        for k in ("title", "text", "solution"):
            if not str(t.get(k, "")).strip():
                errs.append(f"{w}: {t['id']} '{k}' bo'sh")
    if not p.get("open") and not p.get("tasks"):
        errs.append(f"{w}: topshiriq yo'q")
    out[num] = p
if errs:
    print("\n".join(errs))
    sys.exit(1)
OUT.write_text(
    "// Avtomatik yaratilgan (scripts/apply-practice.py --subject tb): amaliy mashg'ulotlar — masalalar (sonli javob bilan) va ochiq topshiriqlar.\n"
    "// Manba: scripts/practice-src/tb/NN.json. Himoyalangan ma'lumot (yechimlar): kirmagan foydalanuvchida bo'sh bo'ladi.\n"
    "export const AUTO_PRACTICE = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n",
    encoding="utf-8",
)
print("✅", sum(len(v["tasks"]) for v in out.values()), "ta sonli masala,", sum(len(v["open"]) for v in out.values()), "ta ochiq topshiriq yozildi")
