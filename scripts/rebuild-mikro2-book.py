#!/usr/bin/env python3
"""«Mikroiqtisodiyot-2» darsligini yangi (uslubli) Word fayldan qayta quradi: public/data/mikro2/book.js.

Yangi faylda matn uslublari (Heading 2/3, Tarif, Muhim, Misol, Keys...) bor, formulalar esa rasm (PNG). Formula rasmlari
oldindan matnga o'girilgan: scripts/formulas-src/mikro2/chNN.json  {"f": {rasm_id: "matn"}}.
Formula yozuvi: pastki indeks `x_{1}`, daraja `x^{2}`, kasr `(a)/(b)`; HTMLda <sub>/<sup> ga aylanadi.

    python3 scripts/rebuild-mikro2-book.py <darslik_kichik.docx>

Rasmlar (grafiklar) eski nomlari bilan qoladi (taqdimotlar shu nomlarga tayanadi): sarlavha raqami (1.3-rasm) bo'yicha moslanadi.
layers-auto.js va practice-auto.js ga tegmaydi.
"""
import html as H
import json
import re
import sys
from pathlib import Path

import docx
from docx.table import Table
from docx.text.paragraph import Paragraph

ROOT = Path(__file__).resolve().parent.parent
BOOKJS = ROOT / "public" / "data" / "mikro2" / "book.js"
FDIR = ROOT / "scripts" / "formulas-src" / "mikro2"
IMG = ROOT / "public" / "img" / "book" / "mikro2"
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
A_BLIP = "{http://schemas.openxmlformats.org/drawingml/2006/main}blip"
R_EMBED = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed"
ROMAN = {"I": 1, "II": 2, "III": 3, "IV": 4, "V": 5, "VI": 6, "VII": 7, "VIII": 8, "IX": 9, "X": 10, "XI": 11}
CH_RE = re.compile(r"^(XI|X|IX|VIII|VII|VI|V|IV|III|II|I)\s*BOB\.")
SEC_RE = re.compile(r"^(\d{1,2})\.(\d{1,2})\.\s+\S")
TITLE_RE = re.compile(r"^(Ta’rif|Esda tuting|Olimlar nazari|Amaliy misol\s*\d+\.\d+|Keys-stadi\s*\d+\.\d+|O‘zbekiston kontekstida|Yechish|Muhokama uchun savollar|Muhokama|Diqqat|Misol|Matematik izoh|Bobni o‘rganish natijasida siz)\s*([.:!]?)\s*")
BOX_STYLES = {"Tarif", "Muhim", "Olim", "Misol", "Keys", "Maqsad"}
esc = lambda s: H.escape(s, quote=False)
clean = lambda s: re.sub(r"\s+", " ", s.replace("\t", " ")).strip()

SUB = dict(zip("0123456789+-=()aehijklmnoprstuvx", "₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ"))
SUP = dict(zip("0123456789+-=()in", "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁱⁿ"))
FX = {}
MISSING = set()


OCC = {}
OVR = {}


def fx_text(i):
    t = OVR.get(i, FX.get(i.split("#")[0]))
    if t is None:
        MISSING.add(i.split("#")[0])
        return "⟦" + i + "⟧"
    return t


def fx_html(t):
    t = esc(t).replace("−", "−")
    for _ in range(3):
        t = re.sub(r"_\{([^{}]*)\}", r"<sub>\1</sub>", t)
        t = re.sub(r"\^\{([^{}]*)\}", r"<sup>\1</sup>", t)
    return t


def fx_plain(t):
    def conv(m, table, pre):
        s = m.group(1)
        return "".join(table[c] for c in s) if all(c in table for c in s) else pre + "(" + s + ")"

    for _ in range(3):
        t = re.sub(r"_\{([^{}]*)\}", lambda m: conv(m, SUB, "_"), t)
        t = re.sub(r"\^\{([^{}]*)\}", lambda m: conv(m, SUP, "^"), t)
    return t


class Rd:
    def __init__(self, path):
        self.d = docx.Document(str(path))
        self.rels = self.d.part.rels
        x = self.d.part.numbering_part.element
        absfmt = {}
        for a in x.iter(W + "abstractNum"):
            lv = a.find(W + "lvl")
            f = lv.find(W + "numFmt") if lv is not None else None
            absfmt[a.get(W + "abstractNumId")] = f.get(W + "val") if f is not None else "bullet"
        self.numfmt = {}
        for n in x.iter(W + "num"):
            ab = n.find(W + "abstractNumId")
            self.numfmt[n.get(W + "numId")] = absfmt.get(ab.get(W + "val"), "bullet") if ab is not None else "bullet"

    def parts(self, el):
        """Xatboshi → [(tur, matn, qalin)] ; tur: t (matn) | f (formula id)."""
        out = []
        for r in el.iter(W + "r"):
            b = r.find(f"{W}rPr/{W}b")
            bold = b is not None and b.get(W + "val") not in ("0", "false")
            txt = "".join((c.text or "") if c.tag == W + "t" else " " if c.tag in (W + "tab", W + "br") else "" for c in r)
            if txt:
                out.append(("t", txt, bold))
            for bl in r.iter(A_BLIP):
                rid = bl.get(R_EMBED)
                if rid in self.rels:
                    fid = self.rels[rid].target_ref.split("/")[-1][5:-4]
                    OCC[fid] = OCC.get(fid, 0) + 1
                    out.append(("f", f"{fid}#{OCC[fid]}", False))
        return out

    def info(self, el):
        p = Paragraph(el, self.d)
        num = el.find(f"{W}pPr/{W}numPr")
        fmt = None
        if num is not None:
            nid = num.find(W + "numId")
            fmt = self.numfmt.get(nid.get(W + "val")) if nid is not None else None
        return p.style.name, fmt, self.parts(el)


def plain(parts):
    s = "".join(fx_plain(fx_text(v)) if k == "f" else v for k, v, _ in parts)
    return clean(s)


def html_of(parts):
    segs = []
    for k, v, b in parts:
        if k == "f":
            segs.append(f'<span class="fx">{fx_html(fx_text(v))}</span>')
        else:
            e = esc(v)
            segs.append(f"<b>{e}</b>" if b and v.strip() else e)
    s = re.sub(r"\s+", " ", "".join(segs)).replace("</b><b>", "").replace("</b> <b>", " ")
    return s.strip()


def drop_prefix(parts, n):
    """Boshidagi n ta belgini (matn) olib tashlaydi."""
    out = []
    for k, v, b in parts:
        if n > 0 and k == "t":
            cut = min(n, len(v))
            v = v[cut:]
            n -= cut
            if not v:
                continue
        elif n > 0 and k == "f":
            n -= 1
        out.append((k, v, b))
    return out


def only_formula(parts):
    return any(k == "f" for k, *_ in parts) and not re.sub(r"[\s,;.:()]|\(\d+\.\d+\)", "", "".join(v for k, v, _ in parts if k == "t"))


class Sect:
    def __init__(self, rd, figmap):
        self.rd, self.figmap = rd, figmap
        self.out, self.lst, self.box = [], None, None  # lst: [tag, items]

    def close_list(self):
        if self.lst:
            tag, items = self.lst
            self.out.append(f"<{tag}>" + "".join(f"<li>{x}</li>" for x in items) + f"</{tag}>")
            self.lst = None

    def close_box(self):
        if self.box:
            cls, title, paras = self.box
            body, items = "", []
            for x in paras:
                if x.startswith("– ") or x.startswith("• "):
                    items.append(f"<li>{x[2:]}</li>")
                    continue
                if items:
                    body += "<ul>" + "".join(items) + "</ul>"
                    items = []
                body += f"<p>{x}</p>"
            if items:
                body += "<ul>" + "".join(items) + "</ul>"
            head = f"<p><b>{esc(title)}</b></p>" if title else ""
            self.out.append(f'<div class="{cls}">{head}{body}</div>')
            self.box = None

    def para(self, style, fmt, parts):
        txt = plain(parts)
        if style == "Captioned Figure":
            self.close_list(); self.close_box()
            self.pending_fig = [v for k, v, _ in parts if k == "f"]
            return
        if not txt and not any(k == "f" for k, *_ in parts):
            return
        if style in ("Image Caption", "Table Caption"):
            self.close_list(); self.close_box()
            if style == "Image Caption":
                m = re.match(r"^(\d+\.\d+)-rasm", txt)
                name = self.figmap.get(m.group(1)) if m else None
                if name:
                    self.out.append(f'<p class="figure"><img src="/img/book/mikro2/{name}" loading="lazy" alt=""></p>')
                else:
                    print("  ! rasm topilmadi:", txt[:50])
            self.out.append(f'<p class="caption"><b>{html_of(parts)}</b></p>')
            return
        if style in BOX_STYLES:
            self.close_list()
            m = TITLE_RE.match(txt)
            if m or self.box is None or self.box[0].split()[0] != "callout" or not self.box:
                pass
            if m and self.box is not None and style != "Maqsad":
                self.close_box()
            if self.box is None:
                if m:
                    title = m.group(1) + (m.group(2) or "")
                    parts = drop_prefix(parts, len(m.group(0)))
                    cls = "callout callout-calc" if m.group(1).startswith("Yechish") else "callout"
                    self.box = [cls, title, []]
                else:
                    self.box = ["callout", "", []]
            h = html_of(parts)
            if h:
                self.box[2].append(h)
            return
        self.close_box()
        if style == "Heading 3":
            self.close_list()
            self.out.append(f"<h4>{html_of(parts)}</h4>")
            return
        if style == "Source Code":
            self.close_list()
            self.out.append(f"<pre>{esc(txt)}</pre>")
            return
        if style == "Compact" or (txt.startswith(("– ", "• ")) and style in ("Body Text", "First Paragraph")):
            tag = "ol" if fmt == "decimal" else "ul"
            h = html_of(parts)
            h = re.sub(r"^[–•]\s*", "", h)
            if self.lst and self.lst[0] != tag:
                self.close_list()
            if not self.lst:
                self.lst = [tag, []]
            self.lst[1].append(h)
            return
        self.close_list()
        if only_formula(parts):
            self.out.append(f'<p class="formula">{html_of(parts)}</p>')
        else:
            self.out.append(f"<p>{html_of(parts)}</p>")

    def table(self, tb):
        self.close_list(); self.close_box()
        rows = []
        for r in tb.rows:
            cells, last = [], None
            for c in r.cells:
                if c._tc is last:
                    continue
                last = c._tc
                ps = [self.rd.parts(p._p) for p in c.paragraphs]
                cells.append(" ".join(x for x in (html_of(p) for p in ps) if x))
            rows.append(cells)
        if not rows:
            return
        head = "".join(f"<th>{c}</th>" for c in rows[0])
        body = "".join("<tr>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>" for r in rows[1:])
        self.out.append(f'<div class="tbl-wrap"><table><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table></div>')

    def html(self):
        self.close_list(); self.close_box()
        return "".join(self.out)


def main():
    src = Path(sys.argv[1])
    for f in sorted(FDIR.glob("ch[0-9]*.json")):
        FX.update(json.loads(f.read_text(encoding="utf-8"))["f"])
    ov = FDIR / "overrides.json"
    if ov.exists():
        OVR.update(json.loads(ov.read_text(encoding="utf-8")))
    print("formulalar:", len(FX), "tuzatishlar:", len(OVR))
    old_js = BOOKJS.read_text(encoding="utf-8")
    old = json.loads(old_js[old_js.index("{"): old_js.rindex("}") + 1])
    figmap = {}
    for t in old["topics"]:
        for s in t["sections"]:
            for m in re.finditer(r'<img src="/img/book/mikro2/(image\d+\.png)"[^>]*></p><p class="caption"><b>(\d+\.\d+)-rasm', s["html"]):
                figmap[m.group(2)] = m.group(1)
    print("rasm moslash:", len(figmap))
    rd = Rd(src)
    chapters, cur, mode = {}, None, "pre"
    intro_paras, pre_lines, lit = [], [], []
    for el in rd.d.element.body.iterchildren():
        tag = el.tag.split("}")[-1]
        if tag == "p":
            style, fmt, parts = rd.info(el)
            txt = plain(parts)
            if style == "Heading 1":
                m = CH_RE.match(txt)
                if m:
                    cur = chapters.setdefault(ROMAN[m.group(1)], {"secs": [], "q": [], "name": None, "pre": []})
                    mode = "ch"
                elif txt.upper().startswith("SO‘Z BOSHI"):
                    mode = "preface"
                elif txt.upper().startswith("FOYDALANILGAN ADABIYOT"):
                    mode = "lit"
                else:
                    mode = "skip"
                continue
            if mode == "pre" and style == "Body Text" and txt.startswith(("Darslik “Mikro", "Darslikning o‘ziga", "Darslik oliy")):
                intro_paras.append(("about", html_of(parts)))
            elif mode == "preface":
                if txt.startswith("Shartli belgilar"):
                    mode = "skip"
                elif txt:
                    intro_paras.append(("pref", html_of(parts)))
            elif mode == "lit" and style == "Adabiyot":
                lit.append(txt)
            elif mode == "ch":
                if style == "Heading 2":
                    cur["name"] = txt.rstrip(".") if SEC_RE.match(txt) else txt
                    cur["kind"] = "sec" if SEC_RE.match(txt) else ("q" if txt == "Nazorat savollari" else "skip")
                    if cur["kind"] == "sec":
                        cur["secs"].append({"title": cur["name"], "S": Sect(rd, figmap)})
                    continue
                if cur["name"] is None:
                    if not hasattr(cur, "S0"):
                        cur.setdefault("S0", Sect(rd, figmap))
                    if not txt.startswith("Tayanch tushunchalar"):
                        cur["S0"].para(style, fmt, parts)
                elif cur["kind"] == "sec":
                    cur["secs"][-1]["S"].para(style, fmt, parts)
                elif cur["kind"] == "q" and style == "Compact":
                    cur["q"].append(txt)
        elif tag == "tbl" and mode == "ch":
            tb = Table(el, rd.d)
            if cur["name"] is None:
                cur.setdefault("S0", Sect(rd, figmap)).table(tb)
            elif cur["kind"] == "sec":
                cur["secs"][-1]["S"].table(tb)
    for t in old["topics"]:
        c = chapters[t["num"]]
        secs = []
        if "S0" in c and c["S0"].html():
            secs.append({"title": "", "html": c["S0"].html()})
        secs += [{"title": s["title"], "html": s["S"].html()} for s in c["secs"]]
        t["sections"] = secs
        t["plan"] = [s["title"] for s in c["secs"]]
        if c["q"]:
            t["questions"] = c["q"]
        print(t["num"], len(secs), "bo'lim", len(c["q"]), "savol")
    about = "".join(f"<p>{x}</p>" for k, x in intro_paras if k == "about")
    pref = "".join(f"<p>{x}</p>" for k, x in intro_paras if k == "pref")
    old["intro"] = (f"<h4>Darslik haqida</h4>{about}" if about else "") + (f"<h4>So‘z boshi</h4>{pref}" if pref else "")
    if lit:
        old["literature"] = lit
    BOOKJS.write_text(
        "// Avtomatik yaratilgan fayl — qo'lda tahrirlamang.\n"
        "// Qayta yaratish: python3 scripts/rebuild-mikro2-book.py <darslik_kichik.docx>  (formulalar: scripts/formulas-src/mikro2/)\n"
        "export const BOOK = " + json.dumps(old, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )
    print("yetishmayotgan formula rasmlari:", len(MISSING), sorted(MISSING)[:10])


if __name__ == "__main__":
    main()
