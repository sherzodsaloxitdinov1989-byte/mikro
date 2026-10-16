// Fan sozlamalarini (public/data/course.js) statik fayllarga yozadi:
// index.html (sarlavha, logotip, pastki qism), manifest.webmanifest, wrangler.jsonc (Worker va baza nomi), package.json.
// Ishga tushirish: npm run configure   (course.js ni o'zgartirgandan keyin har safar)
import fs from "node:fs";
import { COURSE } from "../public/data/course.js";

const root = new URL("..", import.meta.url).pathname;
const read = (f) => fs.readFileSync(root + f, "utf8");
const write = (f, s) => (fs.writeFileSync(root + f, s), console.log("✔", f));
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

if (!/^[a-z0-9][a-z0-9-]{1,50}[a-z0-9]$/.test(COURSE.slug)) {
  console.error(`✖ course.js: slug "${COURSE.slug}" noto'g'ri — faqat kichik lotin harflar, raqamlar va "-" (3–52 belgi).`);
  process.exit(1);
}
if (!/^[A-Za-z]{1,4}$/.test(COURSE.certPrefix)) {
  console.error(`✖ course.js: certPrefix "${COURSE.certPrefix}" — 1–4 ta lotin harf bo'lishi kerak.`);
  process.exit(1);
}

const [brandMain, ...brandRest] = COURSE.brand.split(" ");
const desc = `“${COURSE.title}” fani bo'yicha interaktiv ta'lim platformasi: darslik, testlar, amaliy mashg'ulotlar va sun'iy intellekt asosidagi tekshiruv.`;

let html = read("public/index.html");
html = html
  .replace(/<title>[^<]*<\/title>/, `<title>${esc(COURSE.brand)} — ${esc(COURSE.title)}</title>`)
  .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(desc)}" />`)
  .replace(/<span class="brand-mark">[^<]*<\/span>/, `<span class="brand-mark">${COURSE.logo}</span>`)
  .replace(/<span class="brand-text">.*?<\/span>\s*\n/, `<span class="brand-text"><strong>${esc(brandMain)}</strong><small>${esc(brandRest.join(" "))}</small></span>\n`)
  .replace(/(<div class="container footer-inner">\s*)<span>.*?<\/span>\s*<span class="muted">.*?<\/span>/s, `$1<span>© ${new Date().getFullYear()} ${esc(COURSE.brand)} — ${esc(COURSE.title)} · <a href="#/qr">📱 QR-kod</a></span>\n        <span class="muted">${esc(COURSE.audience)} · Manba: ${esc(COURSE.source)}</span>`);
write("public/index.html", html);

const man = JSON.parse(read("public/manifest.webmanifest"));
man.name = `${COURSE.brand} — ${COURSE.title}`;
man.short_name = COURSE.brand.length <= 12 ? COURSE.brand : brandMain;
man.description = desc;
man.categories = ["education"];
man.shortcuts = [{ name: "Mavzular", url: "/#/topics" }, { name: "Amaliy mashg'ulotlar", url: "/#/practice" }, ...(COURSE.features.lab ? [{ name: "Tahlil laboratoriyasi", url: "/#/lab" }] : [])];
write("public/manifest.webmanifest", JSON.stringify(man, null, 2) + "\n");

let wr = read("wrangler.jsonc");
wr = wr
  .replace(/"name": "[^"]*"/, `"name": "${COURSE.slug}"`)
  .replace(/"database_name": "[^"]*"/, `"database_name": "${COURSE.dbName || COURSE.slug + "-db"}"`)
  .replace(/"bucket_name": "[^"]*"/g, `"bucket_name": "${COURSE.slug}-files"`);
write("wrangler.jsonc", wr);

const pkg = JSON.parse(read("package.json"));
pkg.name = COURSE.slug;
pkg.description = desc;
write("package.json", JSON.stringify(pkg, null, 2) + "\n");

console.log(`\nTayyor. Cloudflare'dagi sayt manzili: https://${COURSE.slug}.<akkaunt-nomi>.workers.dev`);
