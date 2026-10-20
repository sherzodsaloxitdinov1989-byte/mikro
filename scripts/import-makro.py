#!/usr/bin/env python3
"""«Makroiqtisodiyot» darsligini (DOCX; eski .doc bo'lsa avval `soffice --headless --convert-to docx`) platforma ma'lumotlariga o'giradi.

Darslikning har bir bobida tayyor test, glossariy, masalalar, mustaqil ta'lim va nazorat savollari bor.
Skript ularni DARSLIKNING O'ZIDAN ajratib oladi (hech narsa o'ylab topilmaydi):

    python3 scripts/import-makro.py manbalar/makro.docx [--raw /tmp/mk-raw]

Yoziladi:
    public/data/makro/book.js, layers-auto.js, practice-auto.js (+ meta.js bo'lmasa)
    public/img/book/makro/*.png          — darslikdagi grafiklar
    scripts/tests-src/makro/NN.json      — darslikdagi testlar (kalit bilan; javob o'rinlari aralashtirilgan)
    --raw papkasiga: har bob uchun agentlar uchun xom matn (JSON)
"""
import html as H
import json
import random
import re
import sys
from pathlib import Path

import docx
from docx.table import Table
from docx.text.paragraph import Paragraph

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "public" / "data" / "makro"
IMG = ROOT / "public" / "img" / "book" / "makro"
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
A_BLIP = "{http://schemas.openxmlformats.org/drawingml/2006/main}blip"
R_EMBED = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed"

CH_RE = re.compile(r"^(\d+)\s*-?\s*BOB\.?\s*(.*)$", re.I)
SEC_RE = re.compile(r"^\d{1,2}\.\d{1,2}\.?\s")
esc = lambda s: H.escape(s, quote=False)
clean = lambda s: re.sub(r"\s+", " ", s.replace("\xa0", " ")).strip()
MATH = re.compile(r"[=Σ√×÷±≤≥≈π]")


class Doc:
    def __init__(self, path):
        self.d = docx.Document(str(path))
        self.rels = self.d.part.rels
        IMG.mkdir(parents=True, exist_ok=True)
        self.saved = set()

    def run_html(self, p_el):
        """Xatboshidan matn (yuqori/pastki indekslar bilan) va rasm nomlari."""
        out, imgs = [], []
        for r in p_el.iter(W + "r"):
            va = r.find(f"{W}rPr/{W}vertAlign")
            mode = va.get(W + "val") if va is not None else None
            txt = ""
            for ch in r:
                if ch.tag == W + "t":
                    txt += ch.text or ""
                elif ch.tag == W + "tab":
                    txt += " "
                elif ch.tag == W + "br":
                    txt += "\n"
            if txt:
                e = esc(txt).replace("\n", "<br>")
                out.append(f"<sup>{e}</sup>" if mode == "superscript" else f"<sub>{e}</sub>" if mode == "subscript" else e)
            for bl in r.iter(A_BLIP):
                rid = bl.get(R_EMBED)
                if rid and rid in self.rels:
                    part = self.rels[rid].target_part
                    name = Path(str(part.partname)).name
                    if name not in self.saved:
                        (IMG / name).write_bytes(part.blob)
                        self.saved.add(name)
                    imgs.append(name)
        html = re.sub(r"</(sub|sup)><\1>", "", "".join(out))
        return html, imgs

    def items(self):
        """Hujjat tanasi ketma-ketligi: h1/h2/h3/p/tbl."""
        for ch in self.d.element.body.iterchildren():
            tag = ch.tag.split("}")[-1]
            if tag == "p":
                p = Paragraph(ch, self.d)
                st = (p.style.name or "").lower() if p.style is not None else ""
                kind = "h1" if "heading 1" in st else "h2" if "heading 2" in st else "h3" if "heading 3" in st else "p"
                html, imgs = self.run_html(ch)
                yield {"k": kind, "text": clean(p.text), "html": html.strip(), "imgs": imgs, "center": (lambda j: j is not None and j.get(W + "val") in ("center",))(ch.find(f"{W}pPr/{W}jc"))}
            elif tag == "tbl":
                yield {"k": "tbl", "tbl": Table(ch, self.d)}


def cell_html(doc, cell):
    parts = []
    for p in cell.paragraphs:
        h, imgs = doc.run_html(p._p)
        if h.strip():
            parts.append(h.strip())
        for n in imgs:
            parts.append(f'<img src="/img/book/makro/{n}" loading="lazy" alt="">')
    return parts


def table_html(doc, tb):
    """Bitta kataklik quti → «callout»; ko'p kataklik → jadval."""
    if len(tb.columns) == 1 and len(tb.rows) == 1:
        parts = cell_html(doc, tb.rows[0].cells[0])
        if not parts:
            return ""
        title, rest = parts[0], parts[1:]
        cls = "callout"
        if re.search(r"AMALIY MISOL|YECHISH|MASALA", re.sub(r"<[^>]+>", "", title).upper()):
            cls += " callout-calc"
        body, bullets = "", []
        for x in rest:
            if x.startswith("•"):
                bullets.append(f"<li>{x.lstrip('• ').strip()}</li>")
                continue
            if bullets:
                body += "<ul>" + "".join(bullets) + "</ul>"
                bullets = []
            body += x if x.startswith("<img") else f"<p>{x}</p>"
        if bullets:
            body += "<ul>" + "".join(bullets) + "</ul>"
        title_txt = re.sub(r"<[^>]+>", "", title)
        # Sarlavhani qisqa va chiroyli ko'rsatish: BARCHA HARF KATTA bo'lsa, birinchi harfni katta, qolganini kichik
        if title_txt.isupper():
            t2 = title_txt.lower()
            title = esc(t2[:1].upper() + t2[1:])
        return f'<div class="{cls}"><p><b>{title}</b></p>{body}</div>'
    rows = []
    for r in tb.rows:
        cells, last = [], None
        for c in r.cells:
            if c._tc is last:
                continue
            last = c._tc
            cells.append(" ".join(cell_html(doc, c)) or "")
        rows.append(cells)
    if not rows:
        return ""
    head = "".join(f"<th>{x}</th>" for x in rows[0])
    bodyr = "".join("<tr>" + "".join(f"<td>{x}</td>" for x in r) + "</tr>" for r in rows[1:])
    return f'<div class="tbl-wrap"><table><thead><tr>{head}</tr></thead><tbody>{bodyr}</tbody></table></div>'


CAP_ONLY = re.compile(r"^\d{1,2}\.\d{1,2}-?\s*(jadval|rasm)\.?$", re.I)
CAP_FULL = re.compile(r"^\d{1,2}(\.\d{1,2})*\.?\s*-?\s*(jadval|rasm|chizma|diagramma)\b", re.I)


class Render:
    def __init__(self, doc):
        self.doc, self.out, self.bul, self.cap = doc, [], [], None

    def flush(self):
        if self.bul:
            self.out.append("<ul>" + "".join(self.bul) + "</ul>")
            self.bul = []

    def add(self, it):
        k = it["k"]
        if k == "tbl":
            self.flush()
            self.cap = None
            h = table_html(self.doc, it["tbl"])
            if h:
                self.out.append(h)
            return
        for n in it.get("imgs", []):
            self.flush()
            self.out.append(f'<p class="figure"><img src="/img/book/makro/{n}" loading="lazy" alt=""></p>')
        t, h = it["text"], it["html"]
        if not t:
            return
        if self.cap:  # «1.5-jadval» alohida satrda bo'lsa, keyingi satr — uning nomi
            self.out.append(f'<p class="caption"><b>{self.cap} {h}</b></p>')
            self.cap = None
            return
        if CAP_ONLY.match(t):
            self.flush()
            self.cap = esc(t.rstrip("."))
            return
        if k in ("h2", "h3"):
            self.flush()
            self.out.append(f"<h4>{esc(t)}</h4>")
        elif t.startswith("•") or t.startswith("– "):
            item = re.sub(r"^(•|–)\s*", "", h).strip()
            self.bul.append(f"<li>{item}</li>")
        else:
            self.flush()
            if CAP_FULL.match(t) and len(t) < 160:
                self.out.append(f'<p class="caption"><b>{h}</b></p>')
            elif re.match(r"^(Manba|Izoh)\s*:", t):
                self.out.append(f'<p class="source">{h}</p>')
            elif it.get("center") and MATH.search(t) and len(t) < 170 and not it.get("imgs"):
                self.out.append(f'<p class="formula">{h}</p>')
            else:
                self.out.append(f"<p>{h}</p>")

    def html(self):
        self.flush()
        return "".join(self.out)


def numbered(items):
    """«1. matn» / «1) matn» ko'rinishidagi xatboshilar → [[raqam, matn]]"""
    out = []
    for it in items:
        if it["k"] != "p" or not it["text"]:
            continue
        m = re.match(r"^(\d{1,2})[.)]\s*(.+)$", it["text"])
        if m:
            out.append([int(m.group(1)), m.group(2)])
        elif out:
            out[-1][1] += " " + it["text"]
    return out


def sentence_case(s):
    s = s.lower()
    s = re.sub(r"([.:]\s+)([a-zо‘ʻ'’])", lambda m: m.group(1) + m.group(2).upper(), s)
    for i, ch in enumerate(s):
        if ch.isalpha():
            return s[:i] + ch.upper() + s[i + 1:]
    return s


def kw_split(text):
    parts = re.split(r"[;,]\s*|\.\s+(?=[A-ZА-Я“‘O])", text)
    out = []
    for p in parts:
        p = clean(p).strip(" .")
        if 2 < len(p) <= 60 and p not in out:
            out.append(p)
    return out


def cut_sentence(s, n):
    if len(s) <= n:
        return s
    t = s[:n]
    i = max(t.rfind(". "), t.rfind("? "), t.rfind("! "))
    return (t[: i + 1] if i > n * 0.5 else t.rsplit(" ", 1)[0] + "…").strip()


def parse_tests(items):
    tests, cur = [], None
    for it in items:
        if it["k"] != "p" or not it["text"]:
            continue
        t = it["text"]
        mo = re.match(r"^([A-D])\)\s*(.*)$", t)
        mq = re.match(r"^(\d{1,2})\.\s+(.*)$", t)
        if mo and cur is not None:
            cur["options"].append(mo.group(2).strip())
        elif mq and (cur is None or len(cur["options"]) >= 4):
            cur = {"n": int(mq.group(1)), "q": mq.group(2).strip(), "options": []}
            tests.append(cur)
        elif cur is not None:
            if cur["options"]:
                cur["options"][-1] += " " + t
            else:
                cur["q"] += " " + t
    return tests


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    raw_dir = Path(sys.argv[sys.argv.index("--raw") + 1]) if "--raw" in sys.argv else None
    if raw_dir:
        args = [a for a in args if a != str(raw_dir)]
        raw_dir.mkdir(parents=True, exist_ok=True)
    path = Path(args[0] if args else ROOT / "manbalar" / "makro.docx")
    DATA.mkdir(parents=True, exist_ok=True)
    doc = Doc(path)
    items = list(doc.items())

    chapters, zones, cur, zone = [], {}, None, "pre"
    for it in items:
        if it["k"] == "h1":
            t = it["text"]
            m = CH_RE.match(t)
            if m:
                cur = {"no": int(m.group(1)), "title": clean(m.group(2)).strip(" .:"), "items": []}
                chapters.append(cur)
                zone = "ch"
                continue
            u = t.upper()
            if u.startswith("KIRISH"):
                zone = "intro"
            elif u.startswith("ILOVALAR"):
                zone = "apps"
            elif u.startswith("TEST SAVOLLARINING JAVOBLARI"):
                zone = "keys"
            elif u.startswith("FOYDALANILGAN ADABIYOT"):
                zone = "lit"
            else:
                zone = "skip"
            zones.setdefault(zone, [])
            continue
        if zone == "ch":
            cur["items"].append(it)
        elif zone not in ("pre", "skip"):
            zones.setdefault(zone, []).append(it)
    print("boblar:", [(c["no"], len(c["items"])) for c in chapters])

    # --- Test kalitlari: «N-bob bo'yicha test kalitlari» + jadval (juft qatorlar — raqamlar, toq qatorlar — harflar)
    keys, kch = {}, None
    for it in zones.get("keys", []):
        if it["k"] == "p":
            m = re.match(r"^(\d+)-bob", it["text"])
            if m:
                kch = int(m.group(1))
        elif it["k"] == "tbl" and kch:
            rows = [[clean(c.text) for c in r.cells] for r in it["tbl"].rows]
            for a in range(0, len(rows) - 1, 2):
                for n, l in zip(rows[a], rows[a + 1]):
                    if n.isdigit() and l[:1] in "ABCD" and l:
                        keys.setdefault(kch, {})[int(n)] = "ABCD".index(l[:1])

    # --- Ilovalar: glossariy puli (3-ilova), yakuniy nazorat savollari (4-ilova)
    pool, final_q, app = [], {}, None
    curm = None
    for it in zones.get("apps", []):
        if it["k"] == "h2":
            m = re.match(r"^(\d+)-ilova", it["text"])
            app = int(m.group(1)) if m else None
            continue
        if app == 3 and it["k"] == "p" and it["text"]:
            m = re.match(r"^(.+?)\s[–-]\s(.+?)\s*\((\d+)-bob\)\.?$", it["text"])
            if m:
                pool.append((clean(m.group(1)), clean(m.group(2)), int(m.group(3))))
        if app == 4:
            if it["k"] == "h3":
                m = re.match(r"^(\d+)-mavzu", it["text"])
                curm = int(m.group(1)) if m else None
            elif curm and it["k"] == "p" and it["text"]:
                final_q.setdefault(curm, []).append(re.sub(r"^\d+[.)]\s*", "", it["text"]))
    print("glossariy puli:", len(pool), "kalitlar:", {k: len(v) for k, v in keys.items()})

    topics, layers, practice, raw_all, report = [], {}, {}, {}, []
    tests_dir = ROOT / "scripts" / "tests-src" / "makro"
    tests_dir.mkdir(parents=True, exist_ok=True)
    for ch in chapters:
        num = ch["no"]
        parts, name, buf, order = {}, "_pre", [], []
        for it in ch["items"]:
            if it["k"] == "h2":
                parts.setdefault(name, []).extend(buf)
                name, buf = it["text"], []
                order.append(name)
            else:
                buf.append(it)
        parts.setdefault(name, []).extend(buf)

        def find(*ks):
            for n in parts:
                if any(k in n.lower() for k in ks):
                    return parts[n]
            return []

        # Kirish: «Bobni o'rganish natijasida siz» qutisi; tayanch tushunchalar
        pre_items, kwtext = [], ""
        for it in parts.get("_pre", []):
            if it["k"] == "p" and it["text"].lower().startswith("tayanch tushunchalar"):
                kwtext += re.sub(r"^Tayanch tushunchalar\s*:\s*", "", it["text"], flags=re.I)
                continue
            pre_items.append(it)
        keywords = kw_split(kwtext)

        sections, plan = [], []
        pre = Render(doc)
        for it in pre_items:
            pre.add(it)
        if pre.html():
            sections.append({"title": "", "html": pre.html()})
        for n in order:
            if SEC_RE.match(n):
                r = Render(doc)
                for it in parts[n]:
                    r.add(it)
                sections.append({"title": n.rstrip("."), "html": r.html()})
                plan.append(n.rstrip("."))

        qs = [clean(t) for _, t in numbered(find("nazorat savollari"))]
        probs = [clean(t) for _, t in numbered(find("masala va mashq"))]
        concl = [re.sub(r"^\d+\)\s*", "", clean(it["text"])) for it in find("bob bo", "xulosa") if it["k"] == "p" and it["text"]]
        selfwork = [clean(t) for _, t in numbered(find("mustaqil ta"))]

        # Testlar (darslikdan) va kalitlar
        tests = parse_tests(find("test savollari"))
        ks = keys.get(num, {})
        ok = [t for t in tests if len(t["options"]) == 4]
        for t in ok:
            t["c"] = ks.get(t["n"])
        report.append((num, len(tests), len(ok), len(ks), sum(1 for t in ok if t.get("c") is not None)))
        good = [t for t in ok if t.get("c") is not None]
        rng = random.Random(num * 7919)
        slots = [i % 4 for i in range(len(good))]
        rng.shuffle(slots)
        out_t = []
        for t, pos in zip(good, slots):
            correct = t["options"][t["c"]]
            others = [o for i, o in enumerate(t["options"]) if i != t["c"]]
            rng.shuffle(others)
            opts = others[:pos] + [correct] + others[pos:]
            out_t.append({"q": t["q"], "options": opts, "c": pos})
        (tests_dir / f"{num:02d}.json").write_text(json.dumps(out_t, ensure_ascii=False, indent=1), encoding="utf-8")

        # Glossariy: bobdagi «Glossariy» bo'limi (atama – ta'rif)
        gl = []
        for it in find("glossariy"):
            if it["k"] == "p" and it["text"]:
                m = re.match(r"^(.+?)\s[–-]\s(.+)$", it["text"])
                if m:
                    gl.append((clean(m.group(1)), clean(m.group(2)).rstrip(".") + "."))
        if len(gl) < 6:  # yetmasa, 3-ilova pulidan shu bobga tegishlilari
            have = {t.lower() for t, _ in gl}
            for t, d, c in pool:
                if c == num and t.lower() not in have and len(gl) < 10:
                    gl.append((t, d.rstrip(".") + "."))
        gloss = gl[:10]

        title = sentence_case(ch["title"])
        methods = []
        sample = [re.sub(r"^\d+\.\d+\.?\s*", "", p) for p in plan][:8]
        if sample:
            methods.append({"type": "cluster", "id": f"mk{num}-cluster", "title": f"Klaster: {title}", "instruction": "Mavzuning asosiy tushunchalari va ularning o'zaro bog'liqligini klaster ko'rinishida tuzing.", "center": title[:40], "sample": sample})
        pairs = [[t, d] for t, d in gloss if len(d) <= 190][:6]
        if len(pairs) >= 4:
            methods.append({"type": "matching", "id": f"mk{num}-match", "title": "Tushuncha va uning ta'rifi", "instruction": "Har bir tushunchani uning ta'rifi bilan moslang.", "pairs": pairs})
        sents = []
        for c in concl:
            sents += [s.strip() for s in re.split(r"(?<=[.!?])\s+", c) if 40 < len(s.strip()) < 260]
        sents = sents[:5]
        if len(sents) >= 3:
            methods.append({"type": "insert", "id": f"mk{num}-insert", "title": "INSERT: bob xulosasi", "instruction": "Har bir fikrni o'qib, belgilang: ✓ bilaman, + yangi, − qarama-qarshi, ? tushunarsiz.", "sentences": sents})
        selfs = [{"id": f"mk{num}-s{i}", "title": cut_sentence(re.sub(r"^\(?MT\d*\)?\s*", "", t), 90).rstrip(".:"), "type": "Mustaqil ish", "description": t} for i, t in enumerate(selfwork[:2], 1)]

        topics.append({"num": num, "chapter": "", "title": ch["title"], "plan": plan, "sections": sections or [{"title": "", "html": ""}], "questions": qs, "keywords": keywords[:14]})
        layers[num] = {"icon": "", "title": title, "glossary": gloss, "methods": methods, "tests": [], "selfStudy": selfs, "resources": []}
        practice[num] = {"goal": f"«{title}» mavzusi bo'yicha masalalarni yechib, bilimlarni amalda qo'llash.", "concepts": keywords[:6], "source": f"Saloxitdinov Sh.F. Makroiqtisodiyot, {num}-bob", "tasks": [], "open": probs[:3] or qs[:3], "refs": [""] * len(probs[:3] or qs[:3])}
        raw_all[num] = {
            "no": num, "title": ch["title"], "keywords": keywords, "plan": plan,
            "text": {s["title"] or "Kirish": re.sub(r"<[^>]+>", " ", s["html"]) for s in sections},
            "concl": concl, "questions": qs, "problems": probs, "selfwork": selfwork, "final": final_q.get(num, []),
        }

    if raw_dir:
        for num, d in raw_all.items():
            (raw_dir / f"ch{num:02d}.json").write_text(json.dumps(d, ensure_ascii=False, indent=1), encoding="utf-8")

    r = Render(doc)
    for it in zones.get("intro", []):
        r.add(it)
    lit = [clean(it["text"]) for it in zones.get("lit", []) if it["k"] == "p" and it["text"]]

    js = lambda o: json.dumps(o, ensure_ascii=False, indent=1)
    (DATA / "book.js").write_text(
        "// Avtomatik yaratilgan fayl — qo'lda tahrirlamang.\n"
        f"// Manba: {path.name}\n// Qayta yaratish: python3 scripts/import-makro.py manbalar/makro.docx\n"
        "export const BOOK = " + js({"intro": r.html(), "topics": topics, "literature": lit}) + ";\n",
        encoding="utf-8",
    )
    (DATA / "layers-auto.js").write_text(
        "// Avtomatik yaratilgan (scripts/import-makro.py): glossariy, metodlar, mustaqil ishlar. Testlar: scripts/apply-tests.py --subject makro.\n"
        "export const AUTO = " + js(layers) + ";\n",
        encoding="utf-8",
    )
    (DATA / "practice-auto.js").write_text(
        "// Avtomatik yaratilgan (scripts/import-makro.py): amaliy mashg'ulotlar qoralamasi. Yakuniy: scripts/apply-practice.py --subject makro.\n"
        "export const AUTO_PRACTICE = " + js(practice) + ";\n",
        encoding="utf-8",
    )
    print(f"{'№':>3} {'bo‘lim':>6} {'savol':>5} {'gloss':>5} {'masala':>6} {'mustaqil':>8} {'metod':>5}  nomi")
    for t in topics:
        L, R = layers[t["num"]], raw_all[t["num"]]
        print(f"{t['num']:>3} {len(t['sections']):>6} {len(t['questions']):>5} {len(L['glossary']):>5} {len(R['problems']):>6} {len(L['selfStudy']):>8} {len(L['methods']):>5}  {t['title'][:50]}")
    print("testlar (bob, jami, 4 variantli, kalit, kalitli):", report)
    print(f"rasmlar: {len(doc.saved)}; adabiyotlar: {len(lit)}; kirish: {len(r.html())} belgi; glossariy puli: {len(pool)}")


if __name__ == "__main__":
    main()
