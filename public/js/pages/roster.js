// O'qituvchi: guruh ro'yxati (F.I.Sh. + shifr) yuklash. Shifr bilan kiriladigan guruhlar (masalan, 141-23, 142-23).
import { h, mount, toast, loading, confirmDialog, fmtDate } from "../ui.js";
import { api } from "../api.js";
import { readXlsx, readDelimited } from "../xlsx-read.js";
import { SUBJECT_KEY, COURSE } from "../../data/topics.js";

const HEADRE = /^\s*(shifr|id|identifikatsi\w*\s*raqam\w*)\s*$/i;

/** Excel ID raqamni «1,23457E+13» (ilmiy yozuv), «123 456 789», «1234.0» ko'rinishida berishi mumkin: faqat raqamlar olinadi. */
function cleanId(v) {
  let s = String(v ?? "").trim();
  if (/^\d+([.,]\d+)?e\+?\d+$/i.test(s)) s = BigInt(Math.round(Number(s.replace(",", ".")))).toString();
  return s.replace(/[.,]0+$/, "").replace(/\D/g, "");
}

/** Jadvaldan { name, shifr } qatorlarini ajratadi: sarlavhadan ustunlarni topadi, topilmasa — 2- va 3-ustun. */
function parseRows(rows) {
  let nameCol = 1;
  let shifrCol = 2;
  let start = 0;
  const head = rows.findIndex((r) => r.some((c) => HEADRE.test(c)));
  if (head >= 0) {
    shifrCol = rows[head].findIndex((c) => HEADRE.test(c));
    const n = rows[head].findIndex((c) => /familiya|f\.?i\.?sh|ism/i.test(c));
    if (n >= 0) nameCol = n;
    start = head + 1;
  }
  return rows
    .slice(start)
    .map((r) => ({ name: String(r[nameCol] || "").trim(), shifr: cleanId(r[shifrCol]) }))
    .filter((x) => x.name && x.shifr);
}

const groupOfTitle = (rows) => rows.flat().map((c) => /\b(\d{3}-\d{2})\b/.exec(String(c))?.[1]).find(Boolean) || "";

export async function render(el) {
  mount(el, loading());
  const data = await api.get("admin/roster");
  const fails = await api.get("admin/roster-fails").catch(() => ({ counts: {}, recent: [] }));
  const body = h("div", { class: "stack" });
  mount(el, body);

  const draw = () => {
    body.replaceChildren(
      h("div", { class: "alert alert-info" }, h("b", {}, `${COURSE.title}: ID raqam bilan kirish. `), "Bu guruhlarga faqat siz yuklagan ro'yxat bo'yicha kirish mumkin: talaba ro'yxatdan o'tishda guruhi, F.I.Sh. va identifikatsiya raqamini kiritadi, ular ro'yxatga mos bo'lsagina profil ochiladi. Har bir ID raqam bir marta ishlatiladi. Raqamlar bazada ochiq saqlanmaydi (faqat xesh). Quyida shu fanning guruhlari va ularda ro'yxatdan o'tgan talabalar ko'rinadi."),
      failsCard(),
      ...data.groups.filter((g) => g.subject === SUBJECT_KEY).map((g) => groupCard(g)));
  };

  const REASONS = {
    shifr_not_found: ["ID raqam ro'yxatda topilmadi", "raqam xato yozilgan yoki boshqa guruhning raqami"],
    name_mismatch: ["ID raqam to'g'ri, ism mos kelmadi", "F.I.Sh. ro'yxatdagidan farq qiladi (imlo, kirill/lotin, tartib)"],
    already_claimed: ["ID raqam allaqachon band", "talaba ikkinchi profil ochmoqchi yoki parolini unutgan"],
    rate_limited: ["Urinishlar limiti", "bir manzildan ko'p urinish"],
  };
  const failsCard = () => {
    const ok = fails.recent.length;
    return h("details", { class: "card", open: ok > 0 && ok <= 40 },
      h("summary", {}, h("b", {}, `⚠️ ID raqam bilan kirishdagi muammolar (so'nggi urinishlar: ${ok})`), ok ? h("span", { class: "muted small" }, " — " + Object.entries(fails.counts).map(([k, n]) => `${REASONS[k]?.[0] || k}: ${n}`).join(" · ")) : h("span", { class: "muted small" }, " — hozircha muvaffaqiyatsiz urinish yo'q")),
      ok > 0 && h("div", { class: "table-wrap" }, h("table", { class: "table" },
        h("thead", {}, h("tr", {}, ["Vaqt", "Guruh", "Sabab", "Talaba yozgan ism", "Ro'yxatdagi ism", "Manzil"].map((c) => h("th", {}, c)))),
        h("tbody", {}, fails.recent.map((x) => h("tr", {}, h("td", { class: "small" }, fmtDate(x.at)), h("td", {}, x.group), h("td", { class: "small" }, h("b", {}, REASONS[x.reason]?.[0] || x.reason), h("div", { class: "muted" }, REASONS[x.reason]?.[1] || "")), h("td", {}, x.name || "—", x.digitsLen && x.reason === "shifr_not_found" && h("div", { class: "muted small" }, `kiritilgan raqam uzunligi: ${x.digitsLen}`)), h("td", {}, x.rosterName || "—"), h("td", { class: "small muted" }, x.ip || "—")))))),
      h("p", { class: "small muted" }, "Maslahat: «ism mos kelmadi» ko'p bo'lsa, ro'yxatdagi ism imlosini tekshiring — talaba shu ismni yozishi kerak. «Topilmadi» ko'p bo'lsa, ro'yxatdagi ID raqamlar to'g'ri yuklanganini (Excelda ilmiy yozuvga aylanmaganini) tekshiring."));
  };

  const groupCard = (g) => {
    const file = h("input", { type: "file", accept: ".xlsx,.csv,.txt", class: "hidden", onchange: async () => {
      const f = file.files[0];
      file.value = "";
      if (!f) return;
      try {
        const rows = /\.xlsx$/i.test(f.name) ? await readXlsx(f) : await readDelimited(f);
        const found = groupOfTitle(rows);
        if (found && found !== g.group && !(await confirmDialog(`Fayl sarlavhasida ${found}-guruh ko'rsatilgan, siz esa ${g.group} uchun yuklayapsiz. Baribir davom etilsinmi?`))) return;
        const entries = parseRows(rows);
        if (!entries.length) return toast("Faylda F.I.Sh. va shifr topilmadi (ustunlar: №, F.I.Sh., Shifr)", "error");
        if (!(await confirmDialog(`${g.group}: ${entries.length} ta talaba yuklanadi${g.entries.length ? " (eski ro'yxat almashtiriladi, ro'yxatdan o'tgan talabalar saqlanadi)" : ""}. Davom etilsinmi?`))) return;
        const res = await api.put(`admin/roster/${g.group}`, { entries });
        toast(`${g.group}: ${res.count} ta talaba yuklandi`, "ok");
        render(el);
      } catch (ex) {
        toast(ex.message, "error");
      }
    } });
    const claimed = g.entries.filter((e) => e.claimed).length;
    return h("section", { class: "card stack" },
      h("div", { class: "row between wrap" },
        h("div", {}, h("h3", {}, `${g.group}-guruh`), h("p", { class: "muted small" }, g.entries.length ? `${g.entries.length} ta talaba · ${claimed} tasi ro'yxatdan o'tgan · yuklangan: ${fmtDate(g.uploadedAt)} (${g.by})${g.migration && g.unlinkedProfiles ? ` · ID raqamga hali bog'lanmagan eski profillar: ${g.unlinkedProfiles} ta (qayta kirganda bog'lanadi)` : ""}` : (g.migration ? "Ro'yxat hali yuklanmagan — hozircha talabalar avvalgidek kiradi. Ro'yxatni yuklaganingizdan keyin talabalar ID raqam (shifr) bilan qayta kiradi; ularning avvalgi barcha natijalari saqlanadi." : "Ro'yxat hali yuklanmagan — talabalar bu guruhga kira olmaydi."))),
        h("div", {}, h("button", { class: "btn", onclick: () => file.click() }, g.entries.length ? "📤 Ro'yxatni yangilash" : "📤 Ro'yxat yuklash"), file)),
      g.entries.length > 0 && h("div", { class: "table-wrap" }, h("table", { class: "table" },
        h("thead", {}, h("tr", {}, ["№", "F.I.Sh.", "Holati", "Email", ""].map((x) => h("th", {}, x)))),
        h("tbody", {}, g.entries.map((e) => h("tr", {},
          h("td", { class: "center muted" }, `${e.n}.`),
          h("td", {}, e.name),
          h("td", {}, e.claimed ? h("span", { class: "badge badge-ok" }, "Ro'yxatdan o'tgan") : h("span", { class: "badge" }, "Kutilmoqda"), !e.claimed && e.hasOldProfile && h("div", { class: "muted small" }, "eski profili bor — natijalari saqlanadi")),
          h("td", { class: "small muted" }, e.claimed ? `${e.email || ""}${e.claimedAt ? ` · ${fmtDate(e.claimedAt)}` : ""}` : "—"),
          h("td", {}, e.claimed && h("button", { class: "btn ghost small", title: "Shifrni bo'shatish (talaba profilini yo'qotgan bo'lsa)", onclick: async () => {
            if (!(await confirmDialog(`${e.name} shifri bo'shatilsinmi? U shifr bilan qayta kirishi/ro'yxatdan o'tishi kerak bo'ladi.`))) return;
            try {
              await api.post(`admin/roster/${g.group}/${e.n}/release`, {});
              e.claimed = false;
              draw();
            } catch (ex) {
              toast(ex.message, "error");
            }
          } }, "Bo'shatish"))))))));
  };
  draw();
}
