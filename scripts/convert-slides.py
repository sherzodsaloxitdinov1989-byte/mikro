#!/usr/bin/env python3
"""Dars taqdimotlarini (PPTX/PPT/PDF) platformaga joylaydi: public/slides/NN.pdf va course.js dagi decks ro'yxati.

Foydalanish:
    python3 scripts/convert-slides.py manbalar/

Fayl nomidan mavzu raqami olinadi: "3-mavzu.pptx", "Mavzu_03.pptx", "3-ma'ruza.pptx", "Lecture 3.pptx", "03.pptx".
PPTX → PDF uchun LibreOffice (soffice) kerak, sahifalar sonini aniqlash uchun poppler-utils (pdfinfo).
"""
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SLIDES = ROOT / "public" / "slides"
COURSE = ROOT / "public" / "data" / "course.js"
NUM_RES = [
    re.compile(r"(\d{1,2})\s*[-_ ]?\s*(?:mavzu|ma.?ruza|maruza|dars|lecture|lekts|тема|лекц|мавзу)", re.I),
    re.compile(r"(?:mavzu|ma.?ruza|maruza|dars|lecture|тема|лекция|мавзу)\s*[-_ №#]?\s*(\d{1,2})", re.I),
    re.compile(r"^(\d{1,2})(?:\D|$)"),
]


def topic_num(name):
    for rx in NUM_RES:
        m = rx.search(name)
        if m:
            return int(m.group(1))
    return None


def pages(pdf):
    out = subprocess.run(["pdfinfo", str(pdf)], capture_output=True, text=True).stdout
    m = re.search(r"Pages:\s+(\d+)", out)
    return int(m.group(1)) if m else 1


def main():
    src = Path(sys.argv[1] if len(sys.argv) > 1 else ROOT / "manbalar")
    files = sorted(p for p in src.iterdir() if p.suffix.lower() in (".pptx", ".ppt", ".pdf") and not p.name.startswith("~"))
    soffice = shutil.which("soffice") or shutil.which("libreoffice")
    SLIDES.mkdir(parents=True, exist_ok=True)
    decks = {}
    for f in files:
        n = topic_num(f.stem)
        if n is None:
            print(f"–  {f.name}: mavzu raqami aniqlanmadi, o'tkazib yuborildi")
            continue
        dest = SLIDES / f"{n:02d}.pdf"
        if f.suffix.lower() == ".pdf":
            if re.search(r"darslik|qo.?llanma|dastur|uslubiy", f.stem, re.I):
                continue
            shutil.copy(f, dest)
        else:
            if not soffice:
                sys.exit("LibreOffice topilmadi (soffice). O'rnating: sudo apt install libreoffice-impress")
            with tempfile.TemporaryDirectory() as tmp:
                subprocess.run([soffice, "--headless", "--convert-to", "pdf", "--outdir", tmp, str(f)], capture_output=True, check=True)
                out = next(Path(tmp).glob("*.pdf"), None)
                if not out:
                    print(f"✖  {f.name}: PDF ga o'girib bo'lmadi")
                    continue
                shutil.move(str(out), dest)
        decks[n] = pages(dest)
        print(f"✔  {f.name} → public/slides/{n:02d}.pdf ({decks[n]} sahifa, {dest.stat().st_size // 1024} KB)")
    if not decks:
        sys.exit("Taqdimot topilmadi.")
    s = COURSE.read_text(encoding="utf-8")
    body = ", ".join(f"{k}: {v}" for k, v in sorted(decks.items()))
    s2 = re.sub(r"decks:\s*\{[^}]*\}", "decks: { " + body + " }", s, count=1)
    COURSE.write_text(s2, encoding="utf-8")
    print(f"\n✅ course.js → decks yangilandi ({len(decks)} ta taqdimot).")


if __name__ == "__main__":
    main()
