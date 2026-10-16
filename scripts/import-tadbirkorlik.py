#!/usr/bin/env python3
"""«Tadbirkorlik asoslari» darsligini (DOCX) platforma ma'lumotlariga o'giradi.

Darslikning har bir bobida tayyor test, glossariy, masalalar, mustaqil ta'lim va nazorat savollari bor.
Skript ularni DARSLIKNING O'ZIDAN ajratib oladi (hech narsa o'ylab topilmaydi):

    python3 scripts/import-tadbirkorlik.py manbalar/darslik.docx

Yoziladi:
    public/data/book.js          — bob matni (bo'limlar, rasmlar, jadvallar, «keys» qutilari)
    public/data/layers-auto.js   — glossariy, testlar (kalitlar bilan), metodlar, mustaqil ishlar
    public/data/practice-auto.js — masalalar (namunaviy yechimlari bilan)
    public/img/book/*.png        — darslikdagi grafiklar
"""
import html as H
import json
import re
import sys
from pathlib import Path

import docx

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "public" / "data" / "tb"
IMG = ROOT / "public" / "img" / "book" / "tb"
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
A_BLIP = "{http://schemas.openxmlformats.org/drawingml/2006/main}blip"
R_EMBED = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed"

CH_RE = re.compile(r"^(\d+)\s*-?\s*BOB\.?\s*(.*)$", re.I)
SEC_RE = re.compile(r"^\d{1,2}\.\d{1,2}\.?\s")
esc = lambda s: H.escape(s, quote=False)


def clean(s):
    return re.sub(r"\s+", " ", s).strip()


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
        return "".join(out), imgs

    def items(self):
        """Hujjat tanasi ketma-ketligi: h1/h2/h3/p/tbl."""
        for ch in self.d.element.body.iterchildren():
            tag = ch.tag.split("}")[-1]
            if tag == "p":
                p = docx.text.paragraph.Paragraph(ch, self.d)
                st = (p.style.name or "").lower() if p.style is not None else ""
                kind = "h1" if "heading 1" in st else "h2" if "heading 2" in st else "h3" if "heading 3" in st else "p"
                html, imgs = self.run_html(ch)
                yield {"k": kind, "text": clean(p.text), "html": html.strip(), "imgs": imgs}
            elif tag == "tbl":
                yield {"k": "tbl", "tbl": docx.table.Table(ch, self.d)}


def cell_paras(cell):
    return [clean(p.text) for p in cell.paragraphs if clean(p.text)]


def table_html(doc, tb):
    """Bitta kataklik quti → «callout»; ko'p kataklik → jadval."""
    if len(tb.columns) == 1 and len(tb.rows) == 1:
        c = tb.rows[0].cells[0]
        parts = []
        for p in c.paragraphs:
            h, imgs = doc.run_html(p._p)
            if h.strip():
                parts.append(h.strip())
            for n in imgs:
                parts.append(f'<img src="/img/book/tb/{n}" loading="lazy" alt="">')
        if not parts:
            return ""
        title, rest = parts[0], parts[1:]
        cls = "callout"
        if clean(c.paragraphs[0].text).upper().startswith("RAQAMLAR TILIDA"):
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
        return f'<div class="{cls}"><p><b>{title}</b></p>{body}</div>'
    rows = []
    for r in tb.rows:
        cells, last = [], None
        for c in r.cells:
            if c._tc is last:
                continue
            last = c._tc
            cells.append(clean(c.text))
        rows.append(cells)
    if not rows:
        return ""
    head = "".join(f"<th>{esc(x)}</th>" for x in rows[0])
    bodyr = "".join("<tr>" + "".join(f"<td>{esc(x)}</td>" for x in r) + "</tr>" for r in rows[1:])
    return f'<div class="tbl-wrap"><table><thead><tr>{head}</tr></thead><tbody>{bodyr}</tbody></table></div>'


class Render:
    def __init__(self, doc):
        self.doc, self.out, self.bul = doc, [], []

    def flush(self):
        if self.bul:
            self.out.append("<ul>" + "".join(self.bul) + "</ul>")
            self.bul = []

    def add(self, it):
        k = it["k"]
        if k == "tbl":
            self.flush()
            h = table_html(self.doc, it["tbl"])
            if h:
                self.out.append(h)
            return
        for n in it.get("imgs", []):
            self.flush()
            self.out.append(f'<p class="figure"><img src="/img/book/tb/{n}" loading="lazy" alt=""></p>')
        t, h = it["text"], it["html"]
        if not t:
            return
        if k in ("h2", "h3"):
            self.flush()
            self.out.append(f"<h4>{esc(t)}</h4>")
        elif t.startswith("•"):
            self.bul.append(f"<li>{h.lstrip('• ').strip()}</li>")
        else:
            self.flush()
            if re.match(r"^\d{1,2}(\.\d{1,2})*\.?\s*-?\s*(jadval|rasm|chizma|diagramma)\b", t, re.I):
                self.out.append(f'<p class="caption"><b>{h}</b></p>')
            elif re.match(r"^(Manba|Izoh)\s*:", t):
                self.out.append(f'<p class="source">{h}</p>')
            else:
                self.out.append(f"<p>{h}</p>")

    def html(self):
        self.flush()
        return "".join(self.out)


def numbered(items):
    """«1. matn» ko'rinishidagi xatboshilar → [[raqam, matn]]"""
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


def gloss_rows(tb):
    rows = []
    for r in tb.rows[1:]:
        c = [clean(x.text) for x in r.cells]
        if len(c) >= 3 and c[0] and c[2]:
            rows.append((c[0], c[1], c[2]))
    return rows


def main():
    path = Path(sys.argv[1] if len(sys.argv) > 1 else ROOT / "manbalar" / "tadbirkorlik.docx")
    DATA.mkdir(parents=True, exist_ok=True)
    doc = Doc(path)
    items = list(doc.items())

    chapters, zones = [], {}
    cur, zone = None, "pre"
    for it in items:
        if it["k"] == "h1":
            t = it["text"]
            m = CH_RE.match(t)
            if m:
                cur = {"no": int(m.group(1)), "title": clean(m.group(2)).strip(" .:"), "items": []}
                chapters.append(cur)
                zone = "ch"
                continue
            if t.upper().startswith("KIRISH"):
                zone = "intro"
            elif t.upper().startswith("MUNDARIJA"):
                zone = "skip"
            else:
                m2 = re.match(r"^ILOVA\s+([A-Z])\b", t.upper())
                zone = "app" + m2.group(1) if m2 else "skip"
            zones.setdefault(zone, [])
            continue
        if zone == "ch":
            cur["items"].append(it)
        elif zone not in ("pre", "skip"):
            zones.setdefault(zone, []).append(it)

    # --- Glossariy puli (Ilova V va Q jadvallari)
    pool = []
    for z in ("appV", "appQ"):
        for it in zones.get(z, []):
            if it["k"] == "tbl" and [clean(c.text) for c in it["tbl"].rows[0].cells][:3] == ["Atama", "Inglizcha", "Izoh"]:
                pool.extend(gloss_rows(it["tbl"]))

    # --- Ilova E: amaliy mashg'ulotlar (E.n)
    prac = {}
    cur_e = None
    for it in zones.get("appE", []):
        if it["k"] == "h2":
            m = re.match(r"^E\.(\d+)\.", it["text"])
            cur_e = prac.setdefault(int(m.group(1)), {"title": it["text"], "lines": [], "errors": []}) if m else None
            h3 = None
        elif cur_e is not None:
            if it["k"] == "h3":
                h3 = it["text"]
            elif it["k"] == "p" and it["text"]:
                (cur_e["errors"] if h3 and "xato" in h3.lower() else cur_e["lines"]).append(it["text"])

    # --- Ilova Z: hisob-kitob masalalari (Z.k), bob raqamlari sarlavhada
    zprobs = {}
    cur_z = None
    for it in zones.get("appZ", []):
        if it["k"] == "h2":
            m = re.match(r"^Z\.(\d+)\.\s*(.*?)\s*\(([\d,\s\-]+)-bob\)\s*$", it["text"])
            if m:
                chs = [int(x) for x in re.findall(r"\d+", m.group(3))]
                cur_z = {"title": m.group(2), "chapters": chs, "q": "", "sol": [], "concl": ""}
                for c in chs:
                    zprobs.setdefault(c, []).append(cur_z)
            else:
                cur_z = None
        elif cur_z is not None and it["k"] == "p" and it["text"]:
            t = it["text"]
            if t.startswith("Masala."):
                cur_z["q"] = t[len("Masala."):].strip()
            elif t.startswith("Yechim"):
                continue
            elif t.startswith("Xulosa"):
                cur_z["concl"] = t
            elif it["html"].startswith("•") or True:
                cur_z["sol"].append(re.sub(r"^•\s*", "", t))

    # --- Ilova J: mustaqil ta'lim jadvali
    selfrows = {}
    for it in zones.get("appJ", []):
        if it["k"] == "tbl":
            rows = [[clean(c.text) for c in r.cells] for r in it["tbl"].rows]
            if rows and rows[0][:2] == ["№", "Mavzu"]:
                for r in rows[1:]:
                    if r[0].isdigit():
                        selfrows[int(r[0])] = r
                break

    topics, layers, practice = [], {}, {}
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

        # Kirish qismi: modul qatori, maqsad, tayanch tushunchalar (bob rejasi alohida ko'rsatiladi)
        pre_items, grp, goal, kwtext = [], None, "", ""
        for it in parts.get("_pre", []):
            if it["k"] == "h3":
                grp = it["text"].lower()
                if "reja" not in grp:
                    pre_items.append(it)
                continue
            if grp and "reja" in grp:
                continue
            pre_items.append(it)
            if grp and "maqsad" in grp and it["k"] == "p":
                goal += (" " if goal else "") + it["text"]
            if grp and "tayanch" in grp and it["k"] == "p":
                kwtext += (" " if kwtext else "") + it["text"]
        keywords = kw_split(kwtext)

        sections, plan = [], []
        pre = Render(doc)
        for it in pre_items:
            pre.add(it)
        if pre.html():
            sections.append({"title": "", "html": pre.html()})
        case_sec = None
        for n in order:
            if SEC_RE.match(n) or n.lower().startswith("xulosa"):
                r = Render(doc)
                for it in parts[n]:
                    r.add(it)
                sections.append({"title": n.rstrip("."), "html": r.html()})
                if SEC_RE.match(n):
                    plan.append(n.rstrip("."))
                    if re.search(r"keys", n, re.I) and case_sec is None:
                        case_sec = parts[n]

        # Nazorat savollari va amaliy topshiriqlar
        qs, prep, extras, lab = [], [], [], None
        for it in find("nazorat savollari"):
            if it["k"] == "h3":
                lab = it["text"].lower()
            elif it["k"] == "p" and it["text"]:
                if lab is None:
                    qs.append(clean(it["text"]))
                elif "tayyorgarlik" in lab:
                    prep.append(clean(it["text"]))
                else:
                    extras.append(clean(it["text"]))

        # Glossariy: tayanch tushunchalar + puldagi atamalar (bob matnida uchraydiganlar)
        body_text = " ".join(re.sub(r"<[^>]+>", " ", s["html"]).lower() for s in sections)
        gl, seen = [], set()

        def add_gloss(term, eng, df):
            k = term.lower()
            if k in seen:
                return
            seen.add(k)
            d = df.rstrip(".") + "."
            gl.append((term, d + (f" (inglizcha: {eng})" if eng and eng.lower() != term.lower() and not eng[0].isdigit() else "")))

        def pool_match(kw):
            k = kw.lower()
            for t, e, d in pool:
                tl = re.sub(r",.*$", "", t.lower()).strip()
                if tl == k or tl.startswith(k) or k.startswith(tl) or (len(k) > 5 and (k in tl or tl in k)):
                    return t, e, d
            return None

        for kw in keywords:
            m = pool_match(kw)
            if m:
                add_gloss(m[0], m[1], m[2])
        extra = []
        for t, e, d in pool:
            if t.lower() in seen:
                continue
            c = body_text.count(re.sub(r",.*$", "", t.lower()).strip())
            if c >= 2:
                extra.append((c, t, e, d))
        for c, t, e, d in sorted(extra, reverse=True):
            if len(gl) >= 10:
                break
            add_gloss(t, e, d)
        gloss = gl[:10]

        title = sentence_case(ch["title"])
        methods = []
        sample = [re.sub(r"^\d+\.\d+\.?\s*", "", p) for p in plan if not re.search(r"chuqurlashtirilgan", p, re.I)][:8]
        if sample:
            methods.append({"type": "cluster", "id": f"tb{num}-cluster", "title": f"Klaster: {title}", "instruction": "Mavzuning asosiy tushunchalari va ularning o'zaro bog'liqligini klaster ko'rinishida tuzing.", "center": title[:40], "sample": sample})
        pairs = [[t, d.split(" (inglizcha")[0]] for t, d in gloss if len(d) <= 190][:6]
        if len(pairs) >= 4:
            methods.append({"type": "matching", "id": f"tb{num}-match", "title": "Tushuncha va uning ta'rifi", "instruction": "Har bir tushunchani uning ta'rifi bilan moslang.", "pairs": pairs})
        if case_sec:
            lead, rest, hit = [], [], False
            task_line = ""
            for it in case_sec:
                if it["k"] == "h3":
                    hit = True
                    continue
                if it["k"] != "p" or not it["text"]:
                    continue
                if it["text"].startswith("Topshiriq"):
                    task_line = it["text"]
                    continue
                (rest if hit else lead).append(it["text"])
            text = cut_sentence(" ".join(lead), 1500)
            if text and rest:
                qs_case = [task_line] if task_line else ["Vaziyatni mavzudagi tushunchalar yordamida tahlil qiling.", "Qanday qaror va tavsiya berasiz? Asoslang."]
                methods.append({"type": "case", "id": f"tb{num}-case", "title": "Keys: " + re.sub(r'^\d+\.\d+\.\s*(Amaliy keys|Keys)\s*:?\s*', '', plan[[bool(re.search("keys", p, re.I)) for p in plan].index(True)]) if any(re.search("keys", p, re.I) for p in plan) else "Keys-stadi", "instruction": "Vaziyatni o'qing, o'z yechimingizni yozing, so'ng namunaviy tahlil bilan solishtiring.", "text": text, "questions": qs_case, "model": cut_sentence(" ".join(rest), 2200)})
        concl = [clean(it["text"]) for it in find("xulosa") if it["k"] == "p" and it["text"]]
        sents = []
        for c in concl:
            sents += [s.strip() for s in re.split(r"(?<=[.!?])\s+", c) if 40 < len(s.strip()) < 260]
        sents = sents[:5]
        if len(sents) >= 3:
            methods.append({"type": "insert", "id": f"tb{num}-insert", "title": "INSERT: bob xulosasi", "instruction": "Har bir fikrni o'qib, belgilang: ✓ bilaman, + yangi, − qarama-qarshi, ? tushunarsiz.", "sentences": sents})

        selfs = []
        if num in selfrows:
            r = selfrows[num]
            selfs.append({"id": f"tb{num}-s1", "title": r[1], "type": "Mustaqil ish", "description": f"{r[2].rstrip('.')}. Natija va hajm: {r[3].rstrip('.')}."})

        topics.append({"num": num, "chapter": "", "title": ch["title"], "plan": plan, "sections": sections or [{"title": "", "html": ""}], "questions": qs, "keywords": keywords[:14]})
        layers[num] = {"icon": "", "title": title, "glossary": gloss, "methods": methods, "tests": [], "selfStudy": selfs, "resources": []}

        # Amaliy mashg'ulot (qoralama): E.n uslubiy ko'rsatma, tayyorgarlik topshirig'i, qo'shimcha topshiriqlar, Z masalalari
        open_, refs = [], []
        e = prac.get(num)
        e_goal = ""
        if e:
            lines = e["lines"]
            mg = next((l for l in lines if l.startswith("Maqsad")), "")
            e_goal = re.sub(r"^Maqsad\s*:\s*", "", mg).strip()
            steps = [l for l in lines if not l.startswith(("Maqsad", "Bajarish tartibi", "Natija"))]
            res = next((l for l in lines if l.startswith("Natija")), "")
            et = re.sub(r"^E\.\d+\.\s*", "", e["title"])
            q = f"{et}. {e_goal}" + (" Bajarish tartibi: " + "; ".join(f"{i}) {s.rstrip('.')}" for i, s in enumerate(steps, 1)) + "." if steps else "")
            open_.append(q)
            refs.append(res + (" Ko'p uchraydigan xatolar: " + "; ".join(x.rstrip(".") for x in e["errors"]) + "." if e["errors"] else ""))
        for t in prep:
            open_.append("Amaliy mashg'ulotga tayyorgarlik: " + t)
            refs.append("")
        for t in extras:
            open_.append(t)
            refs.append("")
        for zp in zprobs.get(num, []):
            open_.append(f"{zp['title']}. {zp['q']}")
            refs.append(" ".join(zp["sol"]) + (" " + zp["concl"] if zp["concl"] else ""))
        if not open_:
            open_ = qs[:3]
            refs = [""] * len(open_)
        practice[num] = {
            "goal": e_goal or f"«{title}» mavzusi bo'yicha topshiriqlarni bajarib, bilimlarni amalda qo'llash.",
            "concepts": keywords[:6],
            "source": f"Saloxitdinov Sh.F. Tadbirkorlik asoslari, {num}-bob; Ilova E, Z",
            "tasks": [],
            "open": open_,
            "refs": refs,
        }

    # Kirish va adabiyotlar
    r = Render(doc)
    for it in zones.get("intro", []):
        r.add(it)
    lit = [it["text"] for it in zones.get("appG", []) if it["k"] == "p" and it["text"]]

    js = lambda o: json.dumps(o, ensure_ascii=False, indent=1)
    (DATA / "book.js").write_text(
        "// Avtomatik yaratilgan fayl — qo'lda tahrirlamang.\n"
        f"// Manba: {path.name}\n// Qayta yaratish: python3 scripts/import-tadbirkorlik.py manbalar/tadbirkorlik.docx\n"
        "export const BOOK = " + js({"intro": r.html(), "topics": topics, "literature": lit}) + ";\n",
        encoding="utf-8",
    )
    (DATA / "layers-auto.js").write_text(
        "// Avtomatik yaratilgan (scripts/import-tadbirkorlik.py): glossariy, metodlar, mustaqil ishlar. Testlar: scripts/apply-tests.py --subject tb.\n"
        "export const AUTO = " + js(layers) + ";\n",
        encoding="utf-8",
    )
    (DATA / "practice-auto.js").write_text(
        "// Avtomatik yaratilgan (scripts/import-tadbirkorlik.py): amaliy mashg'ulotlar qoralamasi. Yakuniy: scripts/apply-practice.py --subject tb.\n"
        "export const AUTO_PRACTICE = " + js(practice) + ";\n",
        encoding="utf-8",
    )
    # Qoralama manbalar (agentlar/o'qituvchi tahrirlashi uchun)
    psrc = ROOT / "scripts" / "practice-src" / "tb"
    psrc.mkdir(parents=True, exist_ok=True)
    for n, p in practice.items():
        f = psrc / f"{n:02d}.json"
        if not f.exists():
            f.write_text(js(p), encoding="utf-8")
    print(f"{'№':>3} {'bo‘lim':>6} {'savol':>5} {'gloss':>5} {'ochiq':>5} {'mustaqil':>8} {'metod':>5}  nomi")
    for t in topics:
        L, P = layers[t["num"]], practice.get(t["num"], {})
        print(f"{t['num']:>3} {len(t['sections']):>6} {len(t['questions']):>5} {len(L['glossary']):>5} {len(P.get('open', [])):>5} {len(L['selfStudy']):>8} {len(L['methods']):>5}  {t['title'][:55]}")
    print(f"rasmlar: {len(doc.saved)} ta; adabiyotlar: {len(lit)}; kirish: {len(r.html())} belgi; glossariy puli: {len(pool)}")


if __name__ == "__main__":
    main()
