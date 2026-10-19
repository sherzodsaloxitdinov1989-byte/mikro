#!/usr/bin/env python3
"""«Mikroiqtisodiyot-2» (magistratura) darsligini (DOCX) platforma ma'lumotlariga o'giradi.

Manba hujjat PDF'dan o'girilgan: har satr alohida xatboshi, sahifa raqamlari xatboshi bo'lib qolgan, qutilar (ta'rif, esda tuting,
amaliy misol) har satri alohida jadval. Skript satrlarni xatboshilarga birlashtiradi, qutilarni tiklaydi va bob oxiridagi
bo'limlarni (xulosa, nazorat savollari, testlar, masalalar) ajratadi. Hech narsa o'ylab topilmaydi.

    python3 scripts/import-mikro2.py manbalar/mikro2.docx [--raw /tmp/m2]

Yoziladi:
    public/data/mikro2/book.js, layers-auto.js, practice-auto.js (+ meta.js bo'lmasa)
    public/img/book/mikro2/*.png
    scripts/tests-src/mikro2/NN.raw.json   — darslikdagi testlar (kalit bilan), 20 ta tanlash/tozalash uchun
    --raw papkasiga: har bob uchun agentlar uchun xom matn (JSON)
"""
import html as H
import json
import re
import sys
from collections import Counter
from pathlib import Path

import docx
from docx.table import Table
from docx.text.paragraph import Paragraph

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "public" / "data" / "mikro2"
IMG = ROOT / "public" / "img" / "book" / "mikro2"
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
A_BLIP = "{http://schemas.openxmlformats.org/drawingml/2006/main}blip"
R_EMBED = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed"

ROMAN = {"I": 1, "II": 2, "III": 3, "IV": 4, "V": 5, "VI": 6, "VII": 7, "VIII": 8, "IX": 9, "X": 10, "XI": 11}
CH_RE = re.compile(r"^(XI|X|IX|VIII|VII|VI|V|IV|III|II|I)\s*BOB\.\s*(.*)$")
SEC_RE = re.compile(r"^(\d{1,2})\.(\d{1,2})\.\s+\S")
TAILS = ["Qisqa xulosalar", "Nazorat savollari", "Mustaqil ish topshiriqlari", "Mustaqil yechish uchun masalalar", "Esse va munozara mavzulari", "Test savollari"]
esc = lambda s: H.escape(s, quote=False)
clean = lambda s: re.sub(r"\s+", " ", s.replace("\t", " ")).strip()

FIXES = [
    (r"\bma x\b", "max"), (r"\bmi n\b", "min"), (r"\bM R T S\b", "MRTS"), (r"\bM R S\b", "MRS"), (r"\bM R P L\b", "MRPL"),
    (r"\b([MA]) (C|B|R|U|P)\b(?=[\s=(,.;:)])", r"\1\2"), (r"\bA (T|V|F) C\b", r"A\1C"), (r"\b(T|V|F|A) C\b(?=[\s=(,.;:)])", r"\1C"),
    (r"\bc o v\b", "cov"), (r"¿", "*"),
]


def fix(s):
    for a, b in FIXES:
        s = re.sub(a, b, s)
    return s


class Doc:
    def __init__(self, path):
        self.d = docx.Document(str(path))
        self.rels = self.d.part.rels
        IMG.mkdir(parents=True, exist_ok=True)
        self.saved = set()

    def para(self, el):
        p = Paragraph(el, self.d)
        runs = [r for r in el.iter(W + "r")]
        parts, imgs, bold_all, any_txt = [], [], True, False
        for r in runs:
            txt = "".join((c.text or "") if c.tag == W + "t" else " " if c.tag == W + "tab" else "" for c in r)
            b = r.find(f"{W}rPr/{W}b")
            is_b = b is not None and b.get(W + "val") not in ("0", "false")
            if txt.strip():
                any_txt = True
                bold_all &= is_b
            if txt:
                parts.append((txt, is_b))
            for bl in r.iter(A_BLIP):
                rid = bl.get(R_EMBED)
                if rid and rid in self.rels:
                    part = self.rels[rid].target_part
                    name = Path(str(part.partname)).name
                    if name not in self.saved:
                        (IMG / name).write_bytes(part.blob)
                        self.saved.add(name)
                    imgs.append(name)
        text = fix(clean("".join(t for t, _ in parts)))
        sz = None
        for r in p.runs:
            if r.font.size:
                sz = r.font.size.pt
                break
        return {"t": "p", "text": text, "parts": parts, "bold": bool(any_txt and bold_all), "imgs": imgs, "size": sz, "right": p.alignment is not None and int(p.alignment) == 2}

    def blocks(self):
        for el in self.d.element.body.iterchildren():
            tag = el.tag.split("}")[-1]
            if tag == "p":
                yield self.para(el)
            elif tag == "tbl":
                tb = Table(el, self.d)
                rows = []
                for r in tb.rows:
                    cells, last = [], None
                    for c in r.cells:
                        if c._tc is last:
                            continue
                        last = c._tc
                        paras = [self.para(p._p) for p in c.paragraphs]
                        cells.append({"text": fix(clean(" ".join(x["text"] for x in paras))), "imgs": [i for x in paras for i in x["imgs"]]})
                    rows.append(cells)
                yield {"t": "tbl", "rows": rows}


def drop_pages(blocks):
    out = []
    for b in blocks:
        if b["t"] == "p" and re.fullmatch(r"\d{1,3}", b["text"]) and not b["imgs"]:
            continue
        out.append(b)
    return out


TERM_END = re.compile(r"[.!?:;»”)]$")
NEW_PARA = re.compile(r"^([–•\-]\s|\d{1,2}[.)]\s?\S|[A-D]\)|\([a-z0-9]\))")


def join_text(a, b):
    return a + b if a.endswith("-") and len(a) > 2 and a[-2].isalpha() and b[:1].islower() else a + " " + b


def reflow(lines):
    """Satrlar → xatboshilar (qattiq o'ralgan matnni tiklash)."""
    out = []
    for ln in lines:
        ln = ln.strip()
        if not ln:
            continue
        if out and not NEW_PARA.match(ln) and not (TERM_END.search(out[-1]) and re.match(r"^[A-ZO‘“\"(\d]", ln)):
            out[-1] = join_text(out[-1], ln)
        else:
            out.append(ln)
    return out


def para_html(parts):
    segs = []
    for t, b in parts:
        t = fix(t.replace("\t", " "))
        if t.strip() == "" and not segs:
            continue
        e = esc(t)
        segs.append(f"<b>{e}</b>" if b and t.strip() else e)
    return re.sub(r"\s+", " ", "".join(segs)).replace("</b><b>", "").strip()


CALL_RE = re.compile(r"^(Ta’rif|Ta’rif\.|Esda tuting|Olimlar nazari|Amaliy misol\s*\d+\.\d+|Keys-stadi\s*\d+\.\d+|O‘zbekiston kontekstida|Yechish|Muhokama uchun savollar|Muhokama|Diqqat|Misol|Matematik izoh|Bobni o‘rganish natijasida siz)\b")


def img_tag(n):
    return f'<img src="/img/book/mikro2/{n}" loading="lazy" alt="">'


def table_html(rows):
    if not rows:
        return ""
    if len(rows) == 1 and 1 < len(rows[0]) <= 3:  # formula qatori: «ifoda ... (1.2)»
        txt = " ".join(c["text"] for c in rows[0] if c["text"])
        return f'<p class="formula">{esc(txt)}</p>' if txt else ""
    head = "".join(f"<th>{esc(c['text'])}</th>" for c in rows[0])
    body = "".join("<tr>" + "".join(f"<td>{esc(c['text'])}</td>" for c in r) + "</tr>" for r in rows[1:])
    return f'<div class="tbl-wrap"><table><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table></div>'


def callout_html(lines, imgs=()):
    split = []
    for ln in lines:
        pcs = re.split(r"(?<=[;:.])\s*–\s+(?=\S)", ln)
        split.append(pcs[0])
        split.extend("– " + x for x in pcs[1:])
    lines = split
    paras = reflow(lines)
    if not paras:
        return ""
    first = paras[0]
    m = re.match(r"^(Ta’rif|Esda tuting|Olimlar nazari|Amaliy misol\s*\d+\.\d+|Keys-stadi\s*\d+\.\d+|O‘zbekiston kontekstida|Yechish|Muhokama uchun savollar|Muhokama|Diqqat|Misol|Bobni o‘rganish natijasida siz)\s*([.:!]?)\s*(.*)$", first)
    cls = "callout"
    if m:
        title = m.group(1) + (m.group(2) or "")
        rest = ([m.group(3)] if m.group(3) else []) + paras[1:]
        if m.group(1).startswith("Yechish"):
            cls += " callout-calc"
    else:
        title, rest = "", paras
    body, bullets = "", []
    for x in rest:
        if re.match(r"^[–•]\s", x):
            bullets.append(f"<li>{esc(re.sub(r'^[–•]\s*', '', x))}</li>")
            continue
        if bullets:
            body += "<ul>" + "".join(bullets) + "</ul>"
            bullets = []
        body += f"<p>{esc(x)}</p>"
    if bullets:
        body += "<ul>" + "".join(bullets) + "</ul>"
    for n in imgs:
        body += img_tag(n)
    head = f"<p><b>{esc(title)}</b></p>" if title else ""
    return f'<div class="{cls}">{head}{body}</div>'


class Render:
    """Blok ketma-ketligi → HTML. Ketma-ket kelgan 1x1 jadvallar bitta qutiga birlashtiriladi."""

    def __init__(self):
        self.out, self.lines, self.box, self.boximgs = [], [], [], []

    def flush_lines(self):
        for p in reflow(self.lines):
            if re.match(r"^[–•]\s", p):
                self.out.append(("li", esc(re.sub(r"^[–•]\s*", "", p))))
            else:
                self.out.append(("p", esc(p)))
        self.lines = []

    def flush_box(self):
        if self.box or self.boximgs:
            h = callout_html(self.box, self.boximgs)
            if h:
                self.out.append(("raw", h))
        self.box, self.boximgs = [], []

    def add(self, b):
        if b["t"] == "tbl":
            rows = b["rows"]
            if len(rows) == 1 and len(rows[0]) == 1:
                self.flush_lines()
                self.box.append(rows[0][0]["text"])
                self.boximgs += rows[0][0]["imgs"]
                return
            self.flush_lines()
            self.flush_box()
            h = table_html(rows)
            if h:
                self.out.append(("raw", h))
            return
        self.flush_box()
        for n in b["imgs"]:
            self.flush_lines()
            self.out.append(("raw", f'<p class="figure">{img_tag(n)}</p>'))
        t = b["text"]
        if not t:
            return
        if re.match(r"^\d{1,2}\.\d{1,2}-(jadval|rasm)\b", t):
            self.flush_lines()
            self.out.append(("cap", esc(t)))
            return
        if b["bold"] and len(t) <= 140 and not re.match(r"^\d+\.\d+\.", t):
            self.flush_lines()
            self.out.append(("h4", esc(t)))
            return
        # xatboshi boshidagi qisqa qalin qism — kichik sarlavha (qolgan matn — xatboshi)
        lead = ""
        for txt, bd in b["parts"]:
            if bd or not txt.strip():
                lead += txt
            else:
                break
        lead = clean(fix(lead))
        if 6 <= len(lead) <= 100 and len(lead) < len(t) - 20 and not lead.endswith((".", ":", "!", "?")) and not re.match(r"^\d", lead):
            self.flush_lines()
            self.out.append(("h4", esc(lead)))
            t = t[len(lead):].strip() if t.startswith(lead) else t
        self.lines.append(t)

    def html(self):
        self.flush_lines()
        self.flush_box()
        out, lis = [], []
        for k, h in self.out:
            if k == "li":
                lis.append(f"<li>{h}</li>")
                continue
            if lis:
                out.append("<ul>" + "".join(lis) + "</ul>")
                lis = []
            if k == "p":
                out.append(f"<p>{h}</p>")
            elif k == "h4":
                out.append(f"<h4>{h}</h4>")
            elif k == "cap":
                out.append(f'<p class="caption"><b>{h}</b></p>')
            else:
                out.append(h)
        if lis:
            out.append("<ul>" + "".join(lis) + "</ul>")
        return "".join(out)


def flat_text(blocks):
    """Blok ketma-ketligi → bitta matn (jadval katakchalari ham qo'shiladi)."""
    parts = []
    for b in blocks:
        if b["t"] == "p":
            parts.append(b["text"])
        else:
            for r in b["rows"]:
                parts.extend(c["text"] for c in r)
    return clean(" ".join(x for x in parts if x))


def numbered(text, start=1):
    """«1. matn 2. matn» → [(raqam, matn)] (ketma-ket raqamlar bo'yicha)."""
    out, pos, n = [], 0, start
    marks = []
    while True:
        m = re.compile(rf"(?:(?<=\s)|^){n}\.\s?(?=[A-ZO‘“\"(a-z0-9(–-])").search(text, pos)
        if not m:
            break
        marks.append((n, m.start(), m.end()))
        pos = m.end()
        n += 1
    for i, (num, s, e) in enumerate(marks):
        end = marks[i + 1][1] if i + 1 < len(marks) else len(text)
        out.append((num, clean(text[e:end])))
    return out


def parse_tests(text):
    text = re.sub(r"\s\d{1,3}\s+(?=A\))", " ", " " + text + " ").strip()
    items = numbered(text)
    tests = []
    for n, body in items:
        m = re.search(r"A\)\s*(.*?)\s*B\)\s*(.*?)\s*C\)\s*(.*?)\s*D\)\s*(.*)$", body)
        if not m:
            tests.append({"n": n, "bad": True, "raw": body})
            continue
        q = clean(body[: m.start()])
        tests.append({"n": n, "q": q, "options": [clean(m.group(i)) for i in range(1, 5)]})
    return tests


def sentence_case(s):
    s = s.lower()
    s = re.sub(r"([.:]\s+)([a-zo‘ʻ'’])", lambda m: m.group(1) + m.group(2).upper(), s)
    for i, ch in enumerate(s):
        if ch.isalpha():
            return s[:i] + ch.upper() + s[i + 1:]
    return s


def kw_split(text):
    out = []
    for p in re.split(r"[;,]\s*", text):
        p = clean(p).strip(" .")
        if 2 < len(p) <= 70 and p not in out:
            out.append(p)
    return out


def cut_sentence(s, n):
    if len(s) <= n:
        return s
    t = s[:n]
    i = max(t.rfind(". "), t.rfind("? "), t.rfind("! "))
    return (t[: i + 1] if i > n * 0.5 else t.rsplit(" ", 1)[0] + "…").strip()


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    raw_dir = Path(sys.argv[sys.argv.index("--raw") + 1]) if "--raw" in sys.argv else None
    if raw_dir:
        args = [a for a in args if a != str(raw_dir)]
        raw_dir.mkdir(parents=True, exist_ok=True)
    path = Path(args[0] if args else ROOT / "manbalar" / "mikro2.docx")
    DATA.mkdir(parents=True, exist_ok=True)
    doc = Doc(path)
    blocks = drop_pages(list(doc.blocks()))

    # --- Zonalar: bob matni boshlanishi (mundarijadan keyin) → boblar va ilovalar
    chapters, zones, zone, cur = [], {}, "pre", None
    started = False
    for b in blocks:
        if b["t"] == "p":
            t = b["text"]
            m = CH_RE.match(t) if (b["bold"] or (b["size"] or 0) >= 15) and zone in ("pre", "ch") else None
            if m and not started and not (b["size"] and b["size"] >= 15):
                m = None
            if m:
                started = True
                no = ROMAN[m.group(1)]
                cur = next((c for c in chapters if c["no"] == no), None)
                if cur is None:
                    cur = {"no": no, "title": clean(m.group(2)).strip(" .:"), "blocks": []}
                    chapters.append(cur)
                zone = "ch"
                continue
            if started:
                u = t.upper()
                if zone not in ("key", "lit") and re.match(r"^(I|II|III|IV|V|VI|VII|VIII)-ILOVA\.", u) and b["bold"]:
                    zone = "app" + re.match(r"^([IVX]+)-ILOVA", u).group(1)
                    zones.setdefault(zone, [])
                    continue
                if u.startswith("IZOHLI LUG") and b["bold"]:
                    zone = "gloss"
                    zones.setdefault(zone, [])
                    continue
                if u.startswith("TEST SAVOLLARIGA JAVOBLAR KALITI"):
                    zone = "key"
                    zones.setdefault(zone, [])
                    continue
                if u.startswith("RASMLAR VA JADVALLAR RO"):
                    zone = "skip"
                    continue
                if u.startswith("FOYDALANILGAN ADABIYOTLAR"):
                    zone = "lit"
                    zones.setdefault(zone, [])
                    continue
        if not started:
            continue
        if zone == "ch":
            cur["blocks"].append(b)
        elif zone not in ("pre", "skip"):
            zones.setdefault(zone, []).append(b)
    chapters.sort(key=lambda c: c["no"])
    print("boblar:", [(c["no"], len(c["blocks"])) for c in chapters])
    print("zonalar:", {k: len(v) for k, v in zones.items()})

    # --- Test kalitlari
    keys, curk = {}, None
    for b in zones.get("key", []):
        if b["t"] == "p":
            m = CH_RE.match(b["text"])
            if m:
                curk = ROMAN[m.group(1)]
                keys.setdefault(curk, {})
            elif re.match(r"^III-ILOVA", b["text"]):
                curk = "final"
                keys.setdefault(curk, {})
        elif curk is not None and len(b["rows"]) == 2:
            nums, lets = b["rows"]
            for a, c in zip(nums, lets):
                if a["text"].isdigit() and c["text"].strip()[:1] in "ABCD":
                    keys[curk][int(a["text"])] = "ABCD".index(c["text"].strip()[:1])

    # --- Izohli lug'at puli
    gtext = flat_text(zones.get("gloss", []))
    pool = []
    pieces = re.split(r"(?<=[.)])\s+(?=[A-ZO‘][^.–]{1,90}?\s(?:\([^)]{2,70}\)\s)?–\s)", gtext)
    for pc in pieces:
        m = re.match(r"^(.+?)\s(?:\(([^)]{2,70})\)\s)?–\s(.+)$", pc.strip())
        if m:
            pool.append((clean(m.group(1)), clean(m.group(2) or ""), clean(m.group(3))))
    print("lug'at pul:", len(pool))

    topics, layers, practice, raw_all = [], {}, {}, {}
    tests_dir = ROOT / "scripts" / "tests-src" / "mikro2"
    tests_dir.mkdir(parents=True, exist_ok=True)
    report = []
    for ch in chapters:
        num = ch["no"]
        bl = ch["blocks"]
        # zonalarga bo'lish: kirish → bo'limlar → bob oxiri bo'limlari
        zones_ch, name, buf = {"_pre": []}, "_pre", []
        order = []
        for b in bl:
            t = b["text"] if b["t"] == "p" else ""
            is_head = b["t"] == "p" and b["bold"] is not None
            if b["t"] == "p" and (SEC_RE.match(t) and b["bold"]) :
                name = t
                order.append(name)
                zones_ch.setdefault(name, [])
                continue
            if b["t"] == "p" and t in TAILS:
                name = t
                order.append(name)
                zones_ch.setdefault(name, [])
                continue
            zones_ch.setdefault(name, []).append(b)

        # tayanch tushunchalar va bob natijalari (kirish qismi)
        kwtext, goal_html = "", ""
        pre_blocks = []
        for b in zones_ch["_pre"]:
            if b["t"] == "tbl":
                txt = " ".join(c["text"] for r in b["rows"] for c in r)
                if txt.startswith("Tayanch tushunchalar"):
                    kwtext += re.sub(r"^Tayanch tushunchalar\s*:\s*", "", txt)
                    continue
            elif b["text"].startswith("Tayanch tushunchalar"):
                kwtext += re.sub(r"^Tayanch tushunchalar\s*:\s*", "", b["text"])
                continue
            pre_blocks.append(b)
        keywords = kw_split(kwtext)

        sections, plan = [], []
        rp = Render()
        for b in pre_blocks:
            rp.add(b)
        if rp.html():
            sections.append({"title": "", "html": rp.html()})
        for n in order:
            if n in TAILS:
                continue
            r = Render()
            for b in zones_ch[n]:
                r.add(b)
            sections.append({"title": n.rstrip("."), "html": r.html()})
            plan.append(n.rstrip("."))

        def zt(name):
            return flat_text(zones_ch.get(name, []))

        concl_paras = reflow([t for t in re.split(r"(?<=[.!?])\s+(?=\d{1,2}\.\s)", zt("Qisqa xulosalar"))])
        questions = [q for _, q in numbered(zt("Nazorat savollari"))]
        selfwork = numbered(zt("Mustaqil ish topshiriqlari"))
        selfprob = numbered(zt("Mustaqil yechish uchun masalalar"))
        essays = [q for _, q in numbered(zt("Esse va munozara mavzulari"))]
        tests = parse_tests(zt("Test savollari"))
        ks = keys.get(num, {})
        ok = [t for t in tests if not t.get("bad")]
        for t in ok:
            t["c"] = ks.get(t["n"])
        (tests_dir / f"{num:02d}.raw.json").write_text(json.dumps(tests, ensure_ascii=False, indent=1), encoding="utf-8")
        report.append((num, len(tests), len(ok), len(ks), sum(1 for t in ok if t.get("c") is not None)))

        # Glossariy: tayanch tushunchalar + bobda ko'p uchraydigan atamalar
        body_text = " ".join(re.sub(r"<[^>]+>", " ", s["html"]).lower() for s in sections)
        gl, seen = [], set()

        def add_gloss(term, eng, df):
            k = term.lower()
            if k in seen:
                return
            seen.add(k)
            d = df.rstrip(".") + "."
            gl.append((term, d + (f" (inglizcha: {re.sub(r'^(ingl\.|inglizcha:)\s*', '', eng)})" if eng and not re.match(r"^\d", eng) else "")))

        def pool_match(kw):
            k = kw.lower()
            for t, e, d in pool:
                tl = re.sub(r",.*$", "", t.lower()).strip()
                if tl == k or tl.startswith(k) or k.startswith(tl) or (len(k) > 6 and (k in tl or tl in k)):
                    return t, e, d
            return None

        for kw in keywords:
            m = pool_match(kw)
            if m:
                add_gloss(*m)
        extra = []
        for t, e, d in pool:
            if t.lower() in seen:
                continue
            c = body_text.count(re.sub(r",.*$", "", t.lower()).strip())
            if c >= 3 and len(d) <= 320:
                extra.append((c, t, e, d))
        for c, t, e, d in sorted(extra, reverse=True):
            if len(gl) >= 10:
                break
            add_gloss(t, e, d)
        gloss = gl[:10]

        title = sentence_case(ch["title"])
        methods = []
        sample = [re.sub(r"^\d+\.\d+\.?\s*", "", p) for p in plan if not re.search(r"yechib ko‘rsatilgan", p, re.I)][:8]
        if sample:
            methods.append({"type": "cluster", "id": f"mm{num}-cluster", "title": f"Klaster: {title}", "instruction": "Mavzuning asosiy tushunchalari va ularning o'zaro bog'liqligini klaster ko'rinishida tuzing.", "center": title[:40], "sample": sample})
        pairs = [[t, d.split(" (inglizcha")[0]] for t, d in gloss if len(d) <= 190][:6]
        if len(pairs) >= 4:
            methods.append({"type": "matching", "id": f"mm{num}-match", "title": "Tushuncha va uning ta'rifi", "instruction": "Har bir tushunchani uning ta'rifi bilan moslang.", "pairs": pairs})
        sents = [s.strip() for c in concl_paras for s in re.split(r"(?<=[.!?])\s+", c) if 50 < len(s.strip()) < 260]
        sents = [re.sub(r"^\d{1,2}\.\s*", "", s) for s in sents][:5]
        if len(sents) >= 3:
            methods.append({"type": "insert", "id": f"mm{num}-insert", "title": "INSERT: bob xulosasi", "instruction": "Har bir fikrni o'qib, belgilang: ✓ bilaman, + yangi, − qarama-qarshi, ? tushunarsiz.", "sentences": sents})
        selfs = [{"id": f"mm{num}-s{i}", "title": cut_sentence(re.sub(r"^\(MT-\d+\)\s*", "", t), 90).rstrip(".:"), "type": "Mustaqil ish", "description": re.sub(r"^\(MT-\d+\)\s*", "", t)} for i, (n, t) in enumerate(selfwork[:2], 1)]

        topics.append({"num": num, "chapter": "", "title": ch["title"], "plan": plan, "sections": sections or [{"title": "", "html": ""}], "questions": questions, "keywords": keywords[:14]})
        layers[num] = {"icon": "", "title": title, "glossary": gloss, "methods": methods, "tests": [], "selfStudy": selfs, "resources": []}
        practice[num] = {"goal": "", "concepts": keywords[:6], "source": f"Soy M., Saloxitdinov Sh. Mikroiqtisodiyot-2, {num}-bob; I-ilova, V-ilova", "tasks": [], "open": [], "refs": []}
        raw_all[num] = {
            "no": num, "title": ch["title"], "keywords": keywords, "plan": plan,
            "text": {s["title"] or "Kirish": re.sub(r"<[^>]+>", " ", s["html"]) for s in sections},
            "concl": concl_paras, "questions": questions, "selfwork": selfwork, "selfprob": [t for _, t in selfprob], "essays": essays,
            "worked": next((flat_text(zones_ch[n]) for n in order if re.search(r"yechib ko‘rsatilgan", n, re.I)), ""),
        }

    # Ilovalar (agentlar uchun xom matn)
    apps = {k: flat_text(v) for k, v in zones.items() if k.startswith("app")}
    if raw_dir:
        for num, d in raw_all.items():
            (raw_dir / f"ch{num:02d}.json").write_text(json.dumps(d, ensure_ascii=False, indent=1), encoding="utf-8")
        (raw_dir / "apps.json").write_text(json.dumps(apps, ensure_ascii=False, indent=1), encoding="utf-8")
        (raw_dir / "keys.json").write_text(json.dumps({str(k): v for k, v in keys.items()}, ensure_ascii=False, indent=1), encoding="utf-8")

    # Kirish: annotatsiya va so'z boshi (hujjatning boshida, bobdan oldin)
    texts = [(i, b["text"]) for i, b in enumerate(blocks) if b["t"] == "p" and b["text"]]
    def idx(prefix, after=0):
        return next((i for i, t in texts if i >= after and t.startswith(prefix)), None)
    a0, a1 = idx("Darslik “Mikroiqtisodiyot-2” fanining"), idx("Taqrizchilar")
    s0, s1 = idx("SO‘Z BOSHI"), idx("Shartli belgilar")
    intro_parts = []
    if a0 is not None and a1 is not None:
        intro_parts.append("<h4>Darslik haqida</h4>" + "".join(f"<p>{esc(x)}</p>" for x in reflow([b["text"] for b in blocks[a0:a1] if b["t"] == "p" and b["text"]])))
    if s0 is not None and s1 is not None:
        intro_parts.append("<h4>So‘z boshi</h4>" + "".join(f"<p>{esc(x)}</p>" for x in reflow([b["text"] for b in blocks[s0 + 1:s1] if b["t"] == "p" and b["text"]])))
    intro_html = "".join(intro_parts)
    lit = [clean(b["text"]) for b in zones.get("lit", []) if b["t"] == "p" and b["text"]]
    js = lambda o: json.dumps(o, ensure_ascii=False, indent=1)
    (DATA / "book.js").write_text(
        "// Avtomatik yaratilgan fayl — qo'lda tahrirlamang.\n"
        f"// Manba: {path.name}\n// Qayta yaratish: python3 scripts/import-mikro2.py manbalar/mikro2.docx\n"
        "export const BOOK = " + js({"intro": intro_html, "topics": topics, "literature": lit}) + ";\n",
        encoding="utf-8",
    )
    (DATA / "layers-auto.js").write_text(
        "// Avtomatik yaratilgan (scripts/import-mikro2.py): glossariy, metodlar, mustaqil ishlar. Testlar: scripts/apply-tests.py --subject mikro2.\n"
        "export const AUTO = " + js(layers) + ";\n",
        encoding="utf-8",
    )
    (DATA / "practice-auto.js").write_text(
        "// Avtomatik yaratilgan (scripts/import-mikro2.py): amaliy mashg'ulotlar. Yakuniy: scripts/apply-practice.py --subject mikro2.\n"
        "export const AUTO_PRACTICE = " + js(practice) + ";\n",
        encoding="utf-8",
    )
    print(f"{'№':>3} {'bo‘lim':>6} {'savol':>5} {'gloss':>5} {'mustaqil':>8} {'metod':>5} {'esse':>5} {'masala':>6}  nomi")
    for t in topics:
        L, R = layers[t["num"]], raw_all[t["num"]]
        print(f"{t['num']:>3} {len(t['sections']):>6} {len(t['questions']):>5} {len(L['glossary']):>5} {len(L['selfStudy']):>8} {len(L['methods']):>5} {len(R['essays']):>5} {len(R['selfprob']):>6}  {t['title'][:50]}")
    print("testlar (bob, jami, parsed, kalit, kalitli):", report)
    print(f"rasmlar: {len(doc.saved)}; adabiyotlar: {len(lit)}; ilovalar: { {k: len(v) for k, v in apps.items()} }")


if __name__ == "__main__":
    main()
