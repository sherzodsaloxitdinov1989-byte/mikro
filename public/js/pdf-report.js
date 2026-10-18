// Oddiy PDF hisobot: sahifalar canvas'da chizilib (o'zbekcha harflar bilan), JPEG sifatida PDF'ga joylanadi.
// Tashqi kutubxona kerak emas; chop etish (window.print) bloklangan sahifalarda ham ishlaydi.

const W = 1240; // A4, ~150 dpi
const H = 1754;
const M = 90;
const FONT = '"Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif';

export class Report {
  constructor() {
    this.pages = [];
    this.x0 = M;
    this.width = W - 2 * M;
    this.newPage();
  }
  newPage() {
    const c = document.createElement("canvas");
    c.width = W;
    c.height = H;
    this.ctx = c.getContext("2d");
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(0, 0, W, H);
    this.pages.push(c);
    this.y = M;
  }
  need(h) {
    if (this.y + h > H - M) this.newPage();
  }
  font(size, weight = 400) {
    this.ctx.font = `${weight} ${size}px ${FONT}`;
  }
  lines(text, size, weight, width) {
    this.font(size, weight);
    const out = [];
    for (const para of String(text ?? "").split("\n")) {
      let line = "";
      for (const word of para.split(/\s+/).filter(Boolean)) {
        const t = line ? `${line} ${word}` : word;
        if (this.ctx.measureText(t).width > width && line) {
          out.push(line);
          line = word;
        } else line = t;
      }
      out.push(line);
    }
    return out;
  }
  /** Matn bloki (avtomatik qatorlarga bo'linadi va sahifadan sahifaga o'tadi). */
  text(text, { size = 26, weight = 400, color = "#1c2b2e", x = M, width = W - 2 * M, gap = 14 } = {}) {
    const lh = Math.round(size * 1.45);
    for (const line of this.lines(text, size, weight, width)) {
      this.need(lh);
      this.font(size, weight);
      this.ctx.fillStyle = color;
      this.ctx.textBaseline = "top";
      this.ctx.fillText(line, x, this.y);
      this.y += lh;
    }
    this.y += gap;
  }
  rule(color = "#cfd9db") {
    this.need(20);
    this.ctx.fillStyle = color;
    this.ctx.fillRect(M, this.y, W - 2 * M, 2);
    this.y += 20;
  }
  box(h, fill, draw) {
    this.need(h);
    this.ctx.fillStyle = fill;
    this.ctx.fillRect(M, this.y, W - 2 * M, h);
    draw(this.ctx, this.y);
    this.y += h + 18;
  }
  /** Jadval satri: ustunlar kengligi (kasr) bo'yicha. */
  row(cells, widths, { size = 24, weight = 400, fill = null, color = "#1c2b2e" } = {}) {
    const total = W - 2 * M;
    const pad = 12;
    const wrapped = cells.map((c, i) => this.lines(c, size, weight, total * widths[i] - pad * 2));
    const lh = Math.round(size * 1.4);
    const h = Math.max(...wrapped.map((l) => l.length)) * lh + pad * 2;
    this.need(h);
    if (fill) {
      this.ctx.fillStyle = fill;
      this.ctx.fillRect(M, this.y, total, h);
    }
    let x = M;
    this.ctx.textBaseline = "top";
    wrapped.forEach((ls, i) => {
      this.font(size, weight);
      this.ctx.fillStyle = color;
      ls.forEach((l, k) => this.ctx.fillText(l, x + pad, this.y + pad + k * lh));
      x += total * widths[i];
    });
    this.ctx.fillStyle = "#dfe7e9";
    this.ctx.fillRect(M, this.y + h - 1, total, 1);
    this.y += h;
  }
  footer(label) {
    this.pages.forEach((c, i) => {
      const ctx = c.getContext("2d");
      ctx.font = `400 20px ${FONT}`;
      ctx.fillStyle = "#7a8a8d";
      ctx.textBaseline = "top";
      ctx.fillText(label, M, H - 60);
      const t = `${i + 1} / ${this.pages.length}`;
      ctx.fillText(t, W - M - ctx.measureText(t).width, H - 60);
    });
  }
  /** PDF baytlarini yaratadi (har sahifa — bitta JPEG rasm). */
  async toPdf() {
    const jpegs = await Promise.all(this.pages.map((c) => new Promise((res) => c.toBlob(res, "image/jpeg", 0.92)).then((b) => b.arrayBuffer()).then((b) => new Uint8Array(b))));
    const enc = new TextEncoder();
    const chunks = [];
    const offsets = [];
    let size = 0;
    const push = (d) => {
      const b = typeof d === "string" ? enc.encode(d) : d;
      chunks.push(b);
      size += b.length;
    };
    const obj = (n, body) => {
      offsets[n] = size;
      push(`${n} 0 obj\n${body}\nendobj\n`);
    };
    const n = jpegs.length;
    push("%PDF-1.4\n");
    obj(1, "<< /Type /Catalog /Pages 2 0 R >>");
    obj(2, `<< /Type /Pages /Kids [${jpegs.map((_, i) => `${3 + i * 3} 0 R`).join(" ")}] /Count ${n} >>`);
    jpegs.forEach((j, i) => {
      const pg = 3 + i * 3;
      obj(pg, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 ${pg + 1} 0 R >> >> /Contents ${pg + 2} 0 R >>`);
      offsets[pg + 1] = size;
      push(`${pg + 1} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${W} /Height ${H} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${j.length} >>\nstream\n`);
      push(j);
      push("\nendstream\nendobj\n");
      const content = "q 595.28 0 0 841.89 0 0 cm /Im0 Do Q";
      obj(pg + 2, `<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
    });
    const count = 3 + n * 3;
    const xref = size;
    push(`xref\n0 ${count}\n0000000000 65535 f \n`);
    for (let i = 1; i < count; i++) push(`${String(offsets[i]).padStart(10, "0")} 00000 n \n`);
    push(`trailer\n<< /Size ${count} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`);
    return new Blob(chunks, { type: "application/pdf" });
  }
}

export function saveBlobAs(blob, name) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.append(a);
  a.click();
  setTimeout(() => (URL.revokeObjectURL(a.href), a.remove()), 500);
}
