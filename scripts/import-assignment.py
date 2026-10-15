#!/usr/bin/env python3
"""Topshiriq faylini (DOCX) platforma ma'lumotiga o'giradi: public/data/assignment.js

    python3 scripts/import-assignment.py manbalar/topshiriq.docx

Matn (maqsad, vazifalar, namuna jadvali va tahlili, natija) fayldan olinadi.
Muddatlar, ballar va bosqichlar bog'liqligi pastdagi SETTINGS da (o'qituvchi talabi bo'yicha).
"""
import json
import re
import sys
from pathlib import Path

import docx
from docx.table import Table

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "data" / "assignment.js"

SETTINGS = {
    "id": "mikro-1",
    "semester": 3,
    "total": 20,
    # Muddat: sana kuni oxirigacha (Toshkent vaqti, UTC+5)
    "groups": [
        {"id": 1, "stages": [1, 2, 3, 4], "due": "2026-10-31", "max": 7},
        {"id": 2, "stages": [5, 6, 7], "due": "2026-11-29", "max": 6},
        {"id": 3, "stages": [8, 9, 10, 11], "due": "2026-12-26", "max": 7},
    ],
    # Bosqichlar o'zaro bog'liqligi (faylda aniq ko'rsatilgan: "2-topshiriqdagi...", "4-topshiriqdagi..." va h.k.).
    # Hamma bosqich 1-bosqichda tanlangan BITTA tadbirkorlik sub'ektiga tegishli.
    "dependsOn": {1: [], 2: [1], 3: [2], 4: [1], 5: [4], 6: [1], 7: [1], 8: [1], 9: [8], 10: [9], 11: [2]},
}

clean = lambda s: re.sub(r"\s+", " ", s).strip()


def main():
    src = Path(sys.argv[1] if len(sys.argv) > 1 else ROOT / "manbalar" / "topshiriq.docx")
    d = docx.Document(str(src))
    items = []
    for ch in d.element.body.iterchildren():
        tag = ch.tag.split("}")[-1]
        if tag == "p":
            t = clean(docx.text.paragraph.Paragraph(ch, d).text)
            if t:
                items.append(("p", t))
        elif tag == "tbl":
            tb = Table(ch, d)
            rows = []
            for r in tb.rows:
                cells, last = [], None
                for c in r.cells:
                    if c._tc is last:
                        continue
                    last = c._tc
                    cells.append(clean(c.text))
                rows.append(cells)
            items.append(("t", rows))

    title = items[0][1]
    subtitle = items[1][1]
    stages, intro, cur, mode, seen_first = [], [], None, None, False
    for kind, v in items[2:]:
        if kind == "p":
            m = re.match(r"^(\d{1,2})-mavzu\.\s*(.+)$", v)
            if m:
                seen_first = True
                cur = {"no": int(m.group(1)), "title": m.group(2).strip(), "goal": "", "tasks": [], "sampleIntro": "", "sampleTable": None, "sampleAnalysis": "", "result": ""}
                stages.append(cur)
                mode = None
                continue
            if not seen_first:
                if not v.startswith("Mavzular bo") :
                    intro.append(v)
                continue
            if v == "Maqsad":
                mode = "goal"
            elif v == "Bajariladigan vazifalar":
                mode = "tasks"
            elif v.startswith("Namuna"):
                mode = "sample"
            elif v == "Talab qilinadigan natija":
                mode = "result"
            elif mode == "goal":
                cur["goal"] = v
            elif mode == "tasks":
                cur["tasks"].append(v)
            elif mode == "sample":
                if v.startswith("Tahlil:"):
                    cur["sampleAnalysis"] = v[len("Tahlil:"):].strip()
                else:
                    cur["sampleIntro"] = (cur["sampleIntro"] + " " + v).strip()
            elif mode == "result":
                cur["result"] = v
        elif cur and mode == "sample" and cur["sampleTable"] is None:
            rows = v
            cur["sampleTable"] = {"head": rows[0], "rows": rows[1:]}
    # Bosh jadvaldagi (umumiy ko'rinish) "Mavzular bo'yicha..." qatori kirishga tushmasligi uchun tekshiruv
    assert [s["no"] for s in stages] == list(range(1, 12)), [s["no"] for s in stages]
    for s in stages:
        s["topic"] = s["no"]  # darslikdagi mavzu raqami bilan bir xil
        s["dependsOn"] = SETTINGS["dependsOn"][s["no"]]
        assert s["goal"] and s["tasks"] and s["result"], s["no"]
    data = {
        "id": SETTINGS["id"],
        "form": "kunduzgi",
        "sampleName": "“Jizzax Coffee House” MCHJ",
        "title": "Tanlangan tadbirkorlik sub’ekti misolida mikroiqtisodiy tahlil",
        "docTitle": title.title() if title.isupper() else title,
        "subtitle": subtitle,
        "semester": SETTINGS["semester"],
        "total": SETTINGS["total"],
        "intro": intro,
        "groups": SETTINGS["groups"],
        "stages": stages,
    }
    assert sum(g["max"] for g in data["groups"]) == data["total"]
    OUT.write_text(
        "// Avtomatik yaratilgan (scripts/import-assignment.py): 3-semestr topshirig'i — 11 bosqich, 3 muddat guruhi, 20 ball.\n"
        "// Muddat va ballarni o'zgartirish: scripts/import-assignment.py dagi SETTINGS, so'ng skriptni qayta ishga tushiring.\n"
        "export const ASSIGNMENT = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )
    print(f"✅ {OUT.relative_to(ROOT)}: {len(stages)} bosqich, {sum(len(s['tasks']) for s in stages)} vazifa, intro {len(intro)} xatboshi")
    for s in stages:
        print(s["no"], s["title"][:60], "| vazifa", len(s["tasks"]), "| jadval", bool(s["sampleTable"]), "| tahlil", bool(s["sampleAnalysis"]))


if __name__ == "__main__":
    main()
