#!/usr/bin/env python3
"""Darslikni (PDF, DOCX yoki TXT) platforma formatiga o'giradi: public/data/book.js

Foydalanish:
    python3 scripts/import-book.py manbalar/darslik.pdf
    python3 scripts/import-book.py manbalar/darslik.docx --topics manbalar/mavzular.txt
    python3 scripts/import-book.py manbalar/darslik.pdf --dry-run      # faqat hisobot, faylga yozmaydi

Mavzular qanday topiladi (birinchi ishlagani tanlanadi):
  1) --topics fayli: har qatorda bitta mavzu nomi, darslikdagi kabi tartibda (eng ishonchli usul;
     avtomatik ajratish noto'g'ri chiqsa shuni ishlating). Mavzu nomining boshidagi 30–40 belgi yetarli.
  2) DOCX'dagi "Heading 1" ("Заголовок 1") uslubidagi sarlavhalar.
  3) Matndagi sarlavhalar: "1-MAVZU", "MAVZU 1", "1-ma'ruza", "I BOB", "1-bob", "§ 1", "Тема 1", "Лекция 1" va h.k.
Mavzu ichidagi bo'limlar: "1.1. Nom" ko'rinishidagi qatorlar (DOCX'da "Heading 2" ham), "1.1.1." — kichik sarlavha.
"Nazorat savollari" / "Mavzu bo'yicha savollar" va "Tayanch iboralar" / "Kalit so'zlar" bloklari alohida ajratiladi.
Kirill yozuvidagi matn avtomatik lotin yozuviga o'giriladi (--no-translit bilan o'chiriladi).

Talab: PDF uchun poppler-utils (pdftotext), DOCX uchun python-docx (pip install python-docx).
"""
import argparse
import html
import json
import re
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from translit import to_latin  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "data" / "book.js"

AP = "[’‘'`ʼʻ]?"  # o'zbekcha apostrof variantlari
LETTERS = "A-Za-zА-Яа-яЁёЎўҚқҒғҲҳ’‘'`ʼʻ"

TOPIC_PATTERNS = [
    # 1-MAVZU. Nomi  |  1-mavzu: Nomi  |  1 - MA'RUZA  |  1-bob
    ("raqam-mavzu", re.compile(rf"^(\d{{1,2}})\s*[-–—]?\s*(?:MAVZU|MA{AP}RUZA|LEKSIYA|BOB|DARS|AMALIY MASHG{AP}ULOT)\b\.?[\s.:–—-]*(.*)$", re.I)),
    # MAVZU 1. Nomi  |  Mavzu № 1  |  Тема 1. ...  |  Лекция 1  |  Глава 1
    ("mavzu-raqam", re.compile(r"^(?:MAVZU|MA[’‘'`ʼʻ]?RUZA|LEKSIYA|TEMA|ТЕМА|LEKTSIYA|ЛЕКЦИЯ|GLAVA|ГЛАВА|BOB)\s*[-№#]?\s*(\d{1,2})\b\.?[\s.:–—-]*(.*)$", re.I)),
    # I BOB. Nomi  |  II-bob  |  III BO'LIM
    ("rim-bob", re.compile(rf"^([IVXLХ]{{1,6}})\s*[-–.]?\s*(?:BOB|BO{AP}LIM|ГЛАВА|РАЗДЕЛ)\b\.?[\s.:–—-]*(.*)$", re.I)),
    # § 1. Nomi
    ("paragraf", re.compile(r"^§\s*(\d{1,2})\.?\s*(.*)$")),
]
SECTION_RE = re.compile(r"^\s{0,30}(\d{1,2})\.(\d{1,2})(?:\.(\d{1,2}))?\.?\s+(\S.{2,})$")
QUESTIONS_RE = re.compile(rf"^(?:nazorat|takrorlash uchun|mavzu bo{AP}yicha|muhokama uchun|o{AP}z-o{AP}zini tekshirish uchun|bilimni tekshirish uchun|mustaqil ish uchun)?\s*(?:savollari?|savol va topshiriqlar|topshiriq va savollar|вопросы)\b.{{0,25}}$", re.I)
KEYWORDS_RE = re.compile(rf"^(?:mavzu bo{AP}yicha\s+)?(?:tayanch (?:so{AP}z\s+)?(?:iboralar|tushunchalar|so{AP}zlar|atamalar)|kalit so{AP}zlar|asosiy (?:tushuncha|atama)lar)\b[\s:.]*(.*)$", re.I)
INTRO_RE = re.compile(rf"^(KIRISH|SO{AP}Z ?BOSHI|MUQADDIMA|ВВЕДЕНИЕ|ПРЕДИСЛОВИЕ)\.?$", re.I)
LIT_RE = re.compile(rf"^(?:FOYDALANILGAN\s+)?ADABIYOTLAR(?:\s+RO{AP}YXATI)?\.?$|^ФОЙДАЛАНИЛГАН|^СПИСОК ЛИТЕРАТУРЫ|^ЛИТЕРАТУРА$|^TAVSIYA ETILADIGAN ADABIYOTLAR", re.I)
END_RE = re.compile(rf"^(ILOVALAR|ILOVA|GLOSSARIY|MUNDARIJA|ОГЛАВЛЕНИЕ|СОДЕРЖАНИЕ|ПРИЛОЖЕНИЯ)\.?$", re.I)
TOC_RE = re.compile(r"^(MUNDARIJA|ОГЛАВЛЕНИЕ|СОДЕРЖАНИЕ|CONTENTS)\.?$", re.I)
PAGE_NO_RE = re.compile(r"(\.{2,}|…+|\s{2,}|\t)\s*\d{1,3}\s*$")


def roman_to_int(s):
    s = s.upper().replace("Х", "X")
    vals = {"I": 1, "V": 5, "X": 10, "L": 50}
    total = 0
    for i, ch in enumerate(s):
        v = vals[ch]
        total += -v if i + 1 < len(s) and vals[s[i + 1]] > v else v
    return total


def norm(s):
    s = to_latin(s).lower()
    return re.sub(r"[^a-z0-9]", "", s)


# ---------------- Matnni o'qish ----------------

class Line:
    __slots__ = ("t", "style", "pre")

    def __init__(self, t, style=None, pre=False):
        self.t, self.style, self.pre = t, style, pre


def read_pdf(path):
    txt = subprocess.run(["pdftotext", "-layout", str(path), "-"], capture_output=True, text=True, check=True).stdout
    pages = [p.rstrip("\n").split("\n") for p in txt.split("\f")]
    # Har sahifada takrorlanadigan kolontitullar (sarlavha/pastki yozuv) va sahifa raqamlari olib tashlanadi
    from collections import Counter
    edge = Counter()
    for p in pages:
        ne = [x.strip() for x in p if x.strip()]
        for x in set(ne[:2] + ne[-2:]):
            edge[re.sub(r"\d+", "#", x)] += 1
    running = {k for k, v in edge.items() if v >= max(4, len(pages) * 0.3) and len(k) < 120}
    out = []
    for p in pages:
        keep = [x.rstrip() for x in p if not re.fullmatch(r"[-–— ]*\d{1,3}[-–— ]*", x.strip()) and not (x.strip() and re.sub(r"\d+", "#", x.strip()) in running)]
        # Sahifa chegarasidagi bo'sh qatorlar olib tashlanadi: xatboshi va bloklar sahifadan sahifaga uzluksiz davom etadi
        while keep and not keep[0].strip():
            keep.pop(0)
        while keep and not keep[-1].strip():
            keep.pop()
        out.extend(Line(x) for x in keep)
    return out


def read_docx(path):
    try:
        import docx  # python-docx
    except ImportError:
        sys.exit("python-docx o'rnatilmagan: pip install python-docx")
    d = docx.Document(str(path))
    out = []
    body = d.element.body
    for child in body.iterchildren():
        tag = child.tag.split("}")[-1]
        if tag == "p":
            p = docx.text.paragraph.Paragraph(child, d)
            t = p.text.replace("\t", "    ").strip()
            st = (p.style.name or "").lower() if p.style is not None else ""
            style = None
            if re.search(r"heading 1|заголовок 1|title|название", st):
                style = "h1"
            elif re.search(r"heading [23]|заголовок [23]|subtitle", st):
                style = "h2"
            elif t and p.runs and all(r.bold for r in p.runs if r.text.strip()):
                style = "bold"
            for part in t.split("\n"):
                out.append(Line(part, style))
            out.append(Line(""))
        elif tag == "tbl":
            tb = docx.table.Table(child, d)
            rows = []
            for r in tb.rows:
                cells = []
                for c in r.cells:
                    v = re.sub(r"\s+", " ", c.text).strip()
                    if not cells or cells[-1] != v:
                        cells.append(v)
                rows.append(cells)
            if rows:
                widths = [max(len(r[i]) if i < len(r) else 0 for r in rows) for i in range(max(map(len, rows)))]
                for r in rows:
                    out.append(Line("  ".join((r[i] if i < len(r) else "").ljust(min(widths[i], 40)) for i in range(len(widths))).rstrip(), pre=True))
                out.append(Line(""))
    return out


def read_txt(path):
    return [Line(x.rstrip()) for x in Path(path).read_text(encoding="utf-8", errors="replace").split("\n")]


# ---------------- Yordamchilar ----------------

def is_prose(line):
    if line.pre:
        return False
    raw = line.t
    s = raw.strip()
    if not s:
        return False
    indent = len(raw) - len(raw.lstrip())
    if indent > 12:
        return False
    nums = len(re.findall(rf"(?<![{LETTERS}\d])[-+]?\d[\d\s]*[,.]?\d*(?![{LETTERS}\d])", s))
    words = len(re.findall(rf"[{LETTERS}]{{2,}}", s))
    gaps = len(re.findall(r"\S\s{3,}\S", s))
    if nums >= 3 and nums >= words:
        return False
    if gaps >= 2 and nums >= 2:
        return False
    if gaps >= 3:
        return False
    if words >= 3 or len(s) > 40:
        return True
    return words >= 1 and nums < 2 and gaps == 0


def clean(s):
    return re.sub(r"\s+", " ", s).strip()


class Builder:
    """Qatorlarni xatboshi (<p>), kichik sarlavha (<h4>) va jadval/formula (<pre>) bloklariga yig'adi."""

    def __init__(self, docx_mode=False):
        self.blocks, self.para, self.pre, self.docx = [], [], [], docx_mode

    def flush_para(self):
        if self.para:
            self.blocks.append(("p", clean(" ".join(self.para))))
            self.para = []

    def flush_pre(self):
        while self.pre and not self.pre[-1].strip():
            self.pre.pop()
        if self.pre:
            ind = min(len(x) - len(x.lstrip()) for x in self.pre if x.strip())
            self.blocks.append(("pre", "\n".join(x[ind:].rstrip() for x in self.pre)))
            self.pre = []

    def flush(self):
        self.flush_para()
        self.flush_pre()

    def heading(self, text):
        self.flush()
        self.blocks.append(("h", clean(text)))

    def add(self, line):
        if not line.t.strip():
            if self.docx:
                self.flush_para()
            elif self.pre:
                self.pre.append("")
            return
        if is_prose(line):
            self.flush_pre()
            indent = len(line.t) - len(line.t.lstrip())
            if indent >= 3 and self.para:
                self.flush_para()
            s = line.t.strip()
            if self.para and self.para[-1].endswith("-") and not self.para[-1].endswith(" -"):
                self.para[-1] = self.para[-1][:-1] + s if re.search(r"[a-zа-я’‘]-$", self.para[-1]) and s[:1].islower() else self.para[-1] + s
                return
            self.para.append(s)
        else:
            self.flush_para()
            self.pre.append(line.t)

    def html(self):
        self.flush()
        out = []
        for kind, text in self.blocks:
            if not text.strip():
                continue
            if kind == "p":
                if re.match(r"^\d{1,2}(\.\d{1,2})*\.?\s*-?\s*(jadval|rasm|chizma|diagramma)\b", text, re.I):
                    out.append(f'<p class="caption"><b>{html.escape(text, quote=False)}</b></p>')
                elif re.match(r"^(Manba|Izoh)\s*:", text):
                    out.append(f'<p class="source">{html.escape(text, quote=False)}</p>')
                else:
                    out.append(f"<p>{html.escape(text, quote=False)}</p>")
            elif kind == "h":
                out.append(f"<h4>{html.escape(text, quote=False)}</h4>")
            else:
                out.append(f'<pre class="book-pre">{html.escape(text, quote=False)}</pre>')
        return "".join(out)


# ---------------- Tuzilmani aniqlash ----------------

def toc_range(lines):
    """Mundarija qatorlari (sahifa raqami bilan tugaydigan) — mavzu sarlavhalarini qidirishda hisobga olinmaydi."""
    skip = set()
    for i, ln in enumerate(lines):
        if not TOC_RE.match(ln.t.strip()):
            continue
        last, miss, j = i, 0, i + 1
        while j < len(lines) and miss <= 8:
            s = lines[j].t.strip()
            if s and PAGE_NO_RE.search(s) and len(s) < 220:
                last, miss = j, 0
            elif s:
                miss += 1
            j += 1
        skip.update(range(i, last + 1))
    return skip


def heading_text(lines, i):
    """Sarlavha bir necha qatorga bo'lingan bo'lsa (KATTA harflar), birlashtiradi."""
    t = lines[i].t.strip()
    j = i + 1
    while j < len(lines) and j - i < 4:
        s = lines[j].t.strip()
        if not s or s.upper() != s or SECTION_RE.match(lines[j].t) or not re.search(r"[A-ZА-Я]", s) or len(s) > 120:
            break
        t += " " + s
        j += 1
    return t, j


def find_topics_from_file(lines, skip, titles):
    keys = [norm(t)[:40] for t in titles]
    # Qidiruv boshdagi mundarija va "Kirish" sarlavhasidan keyin boshlanadi (ular kitobning birinchi 20% qismida bo'lsa)
    head = int(len(lines) * 0.2)
    marks = [i for i in skip if i < head] + [i for i in range(head) if INTRO_RE.match(lines[i].t.strip())]
    found, start = [], (max(marks) + 1 if marks else 0)
    for n, key in enumerate(keys, 1):
        hit = None
        for i in range(start, len(lines)):
            if i in skip or not lines[i].t.strip():
                continue
            window = norm(" ".join(lines[k].t for k in range(i, min(i + 3, len(lines)))))
            if window.startswith(key) or (len(key) > 12 and key in norm(lines[i].t + " " + (lines[i + 1].t if i + 1 < len(lines) else ""))[:len(key) + 30]):
                hit = i
                break
        if hit is None:
            print(f"⚠️  {n}-mavzu nomi topilmadi: {titles[n - 1][:70]}")
            continue
        _, end = heading_text(lines, hit)
        found.append({"line": hit, "body": end, "num": n, "chapter": "", "title": titles[n - 1].strip()})
        start = end
    return found


def find_topics_docx(lines, skip):
    for style in ("h1", "h2"):
        idx = [i for i, ln in enumerate(lines) if ln.style == style and ln.t.strip() and i not in skip
               and not INTRO_RE.match(ln.t.strip()) and not LIT_RE.match(ln.t.strip()) and not END_RE.match(ln.t.strip())]
        if 2 <= len(idx) <= 80:
            out = []
            for n, i in enumerate(idx, 1):
                title = lines[i].t.strip()
                for _, rx in TOPIC_PATTERNS:
                    m = rx.match(title)
                    if m and m.group(2).strip():
                        title = m.group(2).strip()
                        break
                out.append({"line": i, "body": i + 1, "num": n, "chapter": "", "title": title})
            return out, style
    return [], None


def find_topics_regex(lines, skip):
    best, best_name = [], None
    for name, rx in TOPIC_PATTERNS:
        hits = []
        for i, ln in enumerate(lines):
            s = ln.t.strip()
            if i in skip or not s or len(s) > 200:
                continue
            m = rx.match(s)
            if not m:
                continue
            num = roman_to_int(m.group(1)) if name == "rim-bob" else int(m.group(1))
            hits.append((i, num, m.group(2).strip()))
        # Mundarija aniqlanmagan bo'lsa, "1" bir necha marta uchraydi — eng uzun bo'lak olinadi.
        # Darslikdagi raqamlash xatolari (masalan, IV o'rniga VI) kechiriladi: raqamlar asosan o'sib borsa yetarli.
        segs, cur = [], []
        for h in hits:
            if h[1] == 1 and cur:
                segs.append(cur)
                cur = []
            cur.append(h)
        if cur:
            segs.append(cur)
        run = max(segs, key=len) if segs else []
        if len(run) >= 2:
            ups = sum(1 for x, y in zip(run, run[1:]) if y[1] > x[1])
            if ups < 0.7 * (len(run) - 1):
                run = []
        if len(run) > len(best):
            best, best_name = run, name
    for k, (i, num, _) in enumerate(best, 1):
        if num != k:
            print(f"⚠️  Darslikda raqamlash xatosi: {k}-mavzu sarlavhasida {num} yozilgan (qator {i + 1}) — tartib bo'yicha {k}-mavzu deb olindi.")
    out = []
    for i, num, rest in best:
        if rest and len(rest) > 3:
            title, end = heading_text(lines, i)
            for _, rx in TOPIC_PATTERNS:
                m = rx.match(title)
                if m:
                    title = m.group(2).strip()
                    break
        else:  # nom keyingi qatorda
            j = i + 1
            while j < len(lines) and not lines[j].t.strip():
                j += 1
            title, end = heading_text(lines, j) if j < len(lines) else ("", i + 1)
        out.append({"line": i, "body": end, "num": num, "chapter": best_name == "rim-bob" and lines[i].t.strip().split()[0].upper().replace("Х", "X") or "", "title": title.strip(" .:–-")})
    return out, best_name


def parse_topic(lines, a, b, num, docx_mode):
    secs, questions, keywords = [], [], []
    plan = []
    pre_sec = Builder(docx_mode)
    cur = None
    mode = "text"
    # Bo'lim raqami odatda mavzu raqamidan boshlanadi (2.1, 2.2); boshqacha bo'lsa — mavzudagi eng ko'p birinchi raqam
    firsts = [int(m.group(1)) for ln in lines[a:b] for m in [SECTION_RE.match(ln.t)] if m and not m.group(3) and len(ln.t.strip()) < 160]
    major = num if num in firsts else (max(set(firsts), key=firsts.count) if firsts else None)
    seen = set()
    kw_lines = 0
    for k in range(a, b):
        ln = lines[k]
        s = ln.t.strip()
        if s:
            if QUESTIONS_RE.match(s) and len(s) < 60:
                mode = "q"
                continue
            km = KEYWORDS_RE.match(s)
            if km and (len(s) < 60 or (":" in s[:60] and len(s) < 400)):
                mode = "kw"
                kw_lines = 0
                if km.group(1).strip():
                    keywords.append(km.group(1))
                continue
        m = SECTION_RE.match(ln.t)
        is_sec = (m and major is not None and int(m.group(1)) == major and len(s) < 160 and (m.group(1), m.group(2), m.group(3)) not in seen
                  and re.match(rf"[{LETTERS}«“\"]", m.group(4)) and not m.group(4).rstrip().endswith(","))
        if docx_mode and ln.style == "h2" and s:
            is_sec, m = True, None
        if is_sec and (m is None or not m.group(3)):
            title = s if m is None else f"{m.group(1)}.{m.group(2)}. {clean(m.group(4))}"
            if m is not None:
                seen.add((m.group(1), m.group(2), None))
            cur = {"title": title.rstrip("."), "b": Builder(docx_mode)}
            secs.append(cur)
            plan.append(cur["title"])
            mode = "text"
            continue
        if is_sec and m.group(3):
            seen.add((m.group(1), m.group(2), m.group(3)))
            (cur["b"] if cur else pre_sec).heading(f"{m.group(1)}.{m.group(2)}.{m.group(3)}. {clean(m.group(4))}")
            mode = "text"
            continue
        if mode == "q":
            if not s:
                continue
            qm = re.match(r"^(\d{1,2})[.)]\s*(.+)$", s) or re.match(r"^[-•–]\s*(.+)$", s)
            if qm:
                questions.append(qm.group(qm.lastindex))
                continue
            # Raqamsiz qator: oldingi savol tugamagan bo'lsa — davomi, aks holda savollar bloki tugadi
            if questions and not ln.pre and not re.search(r"[?.!]$", questions[-1]) and not SECTION_RE.match(ln.t):
                questions[-1] += " " + s
                continue
            mode = "text"
        if mode == "kw":
            # Tayanch iboralar odatda bitta xatboshi: bo'sh qatorgacha (ko'pi bilan 10 qator)
            if s and not ln.pre and kw_lines < 10:
                keywords.append(s)
                kw_lines += 1
                continue
            if not s and not keywords:
                continue
            mode = "text"
            if not s:
                continue
        (cur["b"] if cur else pre_sec).add(ln)
    sections = []
    intro_html = pre_sec.html()
    if intro_html:
        sections.append({"title": "", "html": intro_html})
    sections += [{"title": x["title"], "html": x["b"].html()} for x in secs]
    if not sections:
        sections = [{"title": "", "html": ""}]
    kw = [clean(x).strip(" .") for x in re.split(r"[,;]", " ".join(keywords)) if 1 < len(clean(x)) < 80]
    return {"plan": plan, "sections": sections, "questions": [clean(q) for q in questions if len(clean(q)) > 5], "keywords": kw}


def main():
    ap = argparse.ArgumentParser(description="Darslikni public/data/book.js ga o'girish")
    ap.add_argument("file")
    ap.add_argument("--topics", help="mavzu nomlari ro'yxati (har qatorda bittasi)")
    ap.add_argument("--no-translit", action="store_true", help="kirill → lotin o'girishni o'chirish")
    ap.add_argument("--dry-run", action="store_true", help="faylga yozmasdan faqat hisobot chiqarish")
    args = ap.parse_args()
    path = Path(args.file)
    ext = path.suffix.lower()
    if ext == ".pdf":
        lines = read_pdf(path)
    elif ext == ".docx":
        lines = read_docx(path)
    elif ext in (".txt", ".md"):
        lines = read_txt(path)
    else:
        sys.exit("Faqat .pdf, .docx yoki .txt (eski .doc faylni Word'da .docx qilib saqlang)")
    docx_mode = ext == ".docx"

    sample = "".join(x.t for x in lines[:4000])
    cyr = len(re.findall(r"[А-Яа-яЁёЎўҚқҒғҲҳ]", sample))
    lat = len(re.findall(r"[A-Za-z]", sample))
    if not args.no_translit and cyr > lat:
        print("Kirill yozuvi aniqlandi → lotin yozuviga o'giriladi.")
        for x in lines:
            x.t = to_latin(x.t)

    skip = toc_range(lines)
    method = ""
    if args.topics:
        titles = [t.strip() for t in Path(args.topics).read_text(encoding="utf-8").split("\n") if t.strip()]
        topics = find_topics_from_file(lines, skip, titles)
        method = f"--topics fayli ({len(titles)} ta nom)"
    else:
        topics, style = (find_topics_docx(lines, skip) if docx_mode else ([], None))
        method = f"DOCX {style} sarlavhalari" if topics else ""
        if len(topics) < 2:
            topics, name = find_topics_regex(lines, skip)
            method = f"matndagi sarlavhalar ({name})"
    if not topics:
        sys.exit("❌ Mavzular topilmadi. Mavzu nomlarini manbalar/mavzular.txt fayliga (har qatorda bittasi) yozib, --topics bilan qayta ishga tushiring.")

    # Kirish: KIRISH sarlavhasidan birinchi mavzugacha; adabiyotlar: oxirgi mavzudan keyingi ADABIYOTLAR sarlavhasidan
    first = topics[0]["line"]
    intro_at = next((i for i in range(first - 1, -1, -1) if i not in skip and INTRO_RE.match(lines[i].t.strip())), None)
    intro = Builder(docx_mode)
    if intro_at is not None:
        for ln in lines[intro_at + 1:first]:
            intro.add(ln)
    last = topics[-1]["line"]
    end = len(lines)
    lit_at = None
    for i in range(last + 1, len(lines)):
        s = lines[i].t.strip()
        if i in skip or TOC_RE.match(s) or END_RE.match(s):
            end = min(end, i)
            if TOC_RE.match(s):
                break
        if LIT_RE.match(s) and lit_at is None:
            lit_at, end = i, min(end, i)
    literature = []
    if lit_at is not None:
        for ln in lines[lit_at + 1:]:
            s = ln.t.strip()
            if not s:
                continue
            if TOC_RE.match(s) or END_RE.match(s):
                break
            if re.match(r"^(\d{1,3}[.)]|[IVX]+\.)\s", s) or not literature:
                literature.append(s)
            else:
                literature[-1] += " " + s

    book_topics = []
    for k, t in enumerate(topics):
        stop = topics[k + 1]["line"] if k + 1 < len(topics) else end
        body = parse_topic(lines, t["body"], stop, t["num"], docx_mode)
        book_topics.append({"num": k + 1, "chapter": t["chapter"], "title": clean(t["title"]) or f"{k + 1}-mavzu", **body})

    print(f"\nMavzular aniqlash usuli: {method}")
    print(f"{'№':>3}  {'belgi':>7}  {'bo‘lim':>6}  {'savol':>5}  {'ibora':>5}  nomi")
    for t in book_topics:
        chars = sum(len(re.sub(r"<[^>]+>", "", s["html"])) for s in t["sections"])
        flag = "  ⚠️ juda qisqa" if chars < 1500 else ("  ⚠️ juda uzun — mavzular to'g'ri ajratilganini tekshiring" if chars > 150000 else "")
        print(f"{t['num']:>3}  {chars:>7}  {len([s for s in t['sections'] if s['title']]):>6}  {len(t['questions']):>5}  {len(t['keywords']):>5}  {t['title'][:70]}{flag}")
    print(f"Kirish: {len(intro.blocks)} blok · Adabiyotlar: {len(literature)} ta")

    if args.dry_run:
        print("\n(--dry-run: fayl yozilmadi)")
        return
    data = {"intro": intro.html(), "topics": book_topics, "literature": literature}
    OUT.write_text(
        "// Avtomatik yaratilgan fayl — qo'lda tahrirlamang (kerak bo'lsa skriptni qayta ishga tushiring).\n"
        f"// Manba: {path.name}\n"
        f"// Qayta yaratish: python3 scripts/import-book.py {path.as_posix()}{' --topics ' + args.topics if args.topics else ''}\n"
        "export const BOOK = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )
    print(f"\n✅ {OUT.relative_to(ROOT)} yozildi ({OUT.stat().st_size // 1024} KB).")


if __name__ == "__main__":
    main()
