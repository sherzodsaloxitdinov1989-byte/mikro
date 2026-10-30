// 3-semestr topshirig'i: 11 bosqich, har bir bosqich alohida yuklanadi (talaba) va baholanadi (o'qituvchi).
import { h, mount, toast, loading, fmtDate, modal, emptyState, downloadFile, integrityAlert } from "../ui.js";
import { api, session } from "../api.js";
import { toCSV } from "../stats.js";
import { COURSE, formByKey, subjectOfGroup, ASSIGNMENT_GROUPS, hasAssignment } from "../../data/course.js";
import { Report, saveBlobAs } from "../pdf-report.js";
import { assignmentFor, stageOf, groupOf, stageMax, deadlineOf, fmtScore, totalScore, assignmentClosed } from "../assignment-util.js";

const MONTHS = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
const fmtDue = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}-${MONTHS[m - 1]} ${y}`;
};

function deadlineChip(group, now) {
  const left = Math.ceil((new Date(`${group.due}T23:59:59+05:00`) - now) / 86400000);
  if (left < 0) return h("span", { class: "badge badge-warn" }, "Muddat tugagan");
  if (left === 0) return h("span", { class: "badge badge-warn" }, "Bugun oxirgi kun");
  return h("span", { class: `badge ${left <= 5 ? "badge-warn" : ""}` }, `${left} kun qoldi`);
}

function statusBadge(sub, form) {
  if (!sub) return h("span", { class: "badge" }, "Topshirilmagan");
  if (sub.teacher?.score != null && !sub.resubmitted) return h("span", { class: "badge badge-ok" }, `${fmtScore(sub.teacher.score)} / ${fmtScore(stageMax(sub.no, form))} ball`);
  return h("span", { class: "badge badge-warn" }, sub.late ? `Topshirildi (kech, −${sub.latePct || 20}%) · tekshirilmoqda` : "Topshirildi · tekshirilmoqda");
}

// ---------------- Talaba: natija varaqasini PDF qilib yuklab olish ----------------

async function resultPdf(res, user) {
  const form = res.form;
  const A = assignmentFor(form);
  const subs = Object.fromEntries(res.items.map((s) => [s.no, s]));
  const graded = (no) => subs[no]?.teacher?.score != null && !subs[no].resubmitted;
  const total = totalScore(res.items, form);
  const all = A.stages.every((s) => graded(s.no));
  const r = new Report();
  r.text(`${COURSE.brand} · ${COURSE.title}`, { size: 22, color: "#5b6b6e", gap: 6 });
  r.text("Topshiriq natijalari varaqasi", { size: 44, weight: 700, gap: 8 });
  r.text(`${A.semester}-semestr · ${A.title}`, { size: 24, color: "#5b6b6e", gap: 16 });
  r.rule();
  r.text(`Talaba: ${user.name}`, { size: 28, weight: 600, gap: 4 });
  r.text(`${user.idNumber ? `ID raqami: ${user.idNumber} · ` : ""}Guruh: ${user.group || "—"} · Ta'lim shakli: ${formByKey(form)?.title || form} · Sana: ${new Date().toLocaleDateString("uz-UZ")}`, { size: 22, color: "#5b6b6e", gap: 18 });
  r.box(130, "#e8f4f2", (c, y) => {
    c.font = `700 64px ${"sans-serif"}`;
    c.fillStyle = "#0e6b62";
    c.textBaseline = "top";
    c.fillText(`${fmtScore(total)} / ${A.total}`, r.x0 + 30, y + 24);
    c.font = "400 24px sans-serif";
    c.fillStyle = "#1c2b2e";
    c.fillText(all ? "Umumiy ball (barcha bosqichlar baholangan)" : "Umumiy ball (ba'zi bosqichlar hali baholanmagan)", r.x0 + 400, y + 48);
  });
  r.text("Bosqichlar bo'yicha ballar", { size: 30, weight: 700, gap: 8 });
  const wd = [0.08, 0.5, 0.19, 0.23];
  r.row(["№", "Bosqich", "Ball", "Holat"], wd, { weight: 700, fill: "#eef3f4" });
  for (const st of A.stages) {
    const sub = subs[st.no];
    r.row([String(st.no), st.title, graded(st.no) ? `${fmtScore(sub.teacher.score)} / ${fmtScore(stageMax(st.no, form))}` : "—", !sub ? "Topshirilmagan" : graded(st.no) ? (sub.late ? "Baholangan (kech)" : "Baholangan") : "Tekshirilmoqda"], wd);
  }
  r.y += 10;
  for (const g of A.groups) {
    const raw = g.stages.reduce((n, no) => n + (subs[no]?.teacher?.score || 0), 0);
    r.text(`${g.stages[0]}–${g.stages[g.stages.length - 1]}-bosqichlar: ${fmtScore(Math.min(g.max, raw))} / ${g.max} ball (muddat: ${fmtDue(g.due)})`, { size: 22, color: "#3a4a4d", gap: 4 });
  }
  r.y += 14;
  r.rule();
  r.text("O'qituvchi izohlari", { size: 30, weight: 700, gap: 10 });
  let any = false;
  for (const st of A.stages) {
    const sub = subs[st.no];
    if (!graded(st.no)) continue;
    any = true;
    r.text(`${st.no}-bosqich. ${st.title} — ${fmtScore(sub.teacher.score)} / ${fmtScore(stageMax(st.no, form))} ball`, { size: 25, weight: 700, gap: 4 });
    r.text(sub.teacher.comment?.trim() || "Izoh qoldirilmagan.", { size: 24, color: sub.teacher.comment?.trim() ? "#1c2b2e" : "#7a8a8d", x: r.x0 + 24, width: r.width - 24, gap: 6 });
    r.text(`${sub.teacher.by || "O'qituvchi"} · ${fmtDate(sub.teacher.at)}`, { size: 20, color: "#7a8a8d", x: r.x0 + 24, gap: 20 });
  }
  if (!any) r.text("Hali baholangan bosqich yo'q.", { color: "#7a8a8d" });
  r.footer(`${COURSE.brand} · ${user.name}`);
  return r.toPdf();
}

// ---------------- Talaba: bosqichlar ro'yxati ----------------

export async function render(el) {
  if (session.user?.role === "student" && !hasAssignment(session.user.group)) return mount(el, emptyState("🔒", "Bu topshiriq sizning guruhingiz uchun emas", `20 ballik topshiriq faqat kunduzgi ta'limning ${ASSIGNMENT_GROUPS.join(", ")} guruhlariga beriladi.`, h("a", { class: "btn", href: "#/" }, "Bosh sahifa")));
  mount(el, loading());
  const res = await api.get("assignment");
  const form = res.form;
  const A = assignmentFor(form);
  const now = new Date(res.now);
  const subs = Object.fromEntries(res.items.map((s) => [s.no, s]));
  const total = totalScore(res.items, form);
  const done = res.items.length;
  mount(
    el,
    h("div", { class: "page-head" },
      h("div", {}, h("h1", {}, "Topshiriq"), h("p", { class: "muted" }, `${A.semester}-semestr · Mikroiqtisodiyot · ${formByKey(form)?.title || "Bakalavriat"} · ${A.stages.length} bosqich, jami ${A.total} ball`))),
    h("div", { class: "card accent" },
      h("div", { class: "row between wrap" },
        h("div", {}, h("h3", {}, A.title), A.intro.map((p) => h("p", { class: "small" }, p))),
        h("div", { class: "stat-card" }, h("b", {}, `${fmtScore(total)} / ${A.total}`), h("span", { class: "muted small" }, `o'qituvchi qo'ygan ball · ${done}/${A.stages.length} bosqich topshirildi`),
          res.items.some((s) => s.teacher?.score != null && !s.resubmitted) && h("button", { class: "btn small", onclick: async (e) => {
            const btn = e.target;
            btn.disabled = true;
            try {
              const u = session.user || {};
              saveBlobAs(await resultPdf(res, u), `topshiriq-natija-${(u.name || "talaba").replace(/[^\w]+/g, "_")}.pdf`);
              toast("PDF tayyor", "ok");
            } catch (ex) {
              console.error("PDF xatosi:", ex);
              toast("PDF yaratib bo'lmadi", "error");
            } finally {
              btn.disabled = false;
            }
          } }, "📄 Natijani PDF qilib yuklab olish")))),
    h("div", { class: "alert alert-info" }, h("b", {}, "Eslatma: "), "bosqichlar o'zaro bog'liq — hammasi 1-bosqichda tanlagan tadbirkorlik sub'ektingizga tegishli, keyingi bosqichlardagi raqamlar oldingilariga mos bo'lishi kerak. AI tekshiruv ham shu izchillikni tekshiradi. Har bir bosqichni alohida yuklang."),
    A.groups.map((g) =>
      h("section", { class: "card" },
        h("div", { class: "row between wrap" },
          h("h2", {}, `${g.stages[0]}–${g.stages[g.stages.length - 1]}-bosqichlar`),
          h("div", { class: "row wrap" }, h("span", { class: "chip chip-soft" }, `Muddat: ${fmtDue(g.due)}`), h("span", { class: "chip chip-soft" }, `Maksimal: ${g.max} ball`), deadlineChip(g, now))),
        h("div", { class: "task-list" },
          g.stages.map((no) => {
            const st = stageOf(no, form);
            const sub = subs[no];
            return h("div", { class: "task" },
              h("div", { class: "grow" },
                h("div", { class: "row wrap" }, h("b", {}, `${no}-bosqich. ${st.title}`), statusBadge(sub, form)),
                h("p", { class: "small muted" }, `Natija: ${st.result}`),
                st.dependsOn.length > 0 && h("p", { class: "small muted" }, `🔗 Tayanadi: ${st.dependsOn.map((d) => `${d}-bosqich${subs[d] ? "" : " (hali topshirilmagan)"}`).join(", ")}`),
                sub?.teacher?.comment && h("div", { class: "alert alert-info small" }, "👩‍🏫 ", sub.teacher.comment)),
              h("a", { class: `btn small ${sub ? "ghost" : ""}`, href: `#/assignment/${no}` }, sub ? "Ochish" : "Bajarish"));
          })))));
}

// ---------------- Talaba: bitta bosqich ----------------

const STATUS = { done: ["✅", "To'liq"], partial: ["🟡", "Qisman"], missing: ["❌", "Yo'q"] };
const itemList = (title, items, labels) =>
  items?.length > 0 && h("div", {}, h("b", {}, title), h("ul", { class: "clean" }, items.map((i) => h("li", {}, `${STATUS[i.status][0]} `, h("b", {}, `${i.text ? i.text.slice(0, 110) : labels?.[i.n - 1] ? labels[i.n - 1].slice(0, 90) + (labels[i.n - 1].length > 90 ? "…" : "") : i.n + "-band"}`), ` — ${STATUS[i.status][1]}.`, i.note ? ` ${i.note}` : ""))));

const VERDICT = { original: ["✅", "O'z ijodi ko'rinadi", "alert-info"], suspicious: ["⚠️", "Shubhali: AI yordami yoki ko'chirish ehtimoli bor", "alert-warn"], likely: ["🚫", "AI tomonidan tayyorlangan yoki ko'chirilgan bo'lishi ehtimoli yuqori", "alert-warn"] };

function originalityView(o) {
  if (!o) return null;
  const [icon, label, cls] = VERDICT[o.verdict] || VERDICT.original;
  return h("div", { class: `alert ${cls} small stack` },
    h("div", {}, h("b", {}, `${icon} O'z ijodi tekshiruvi: ${label}`), ` · AI ehtimoli: ${o.likelihood}%${o.similarPct >= 50 ? ` · boshqa ish bilan o'xshashlik: ${o.similarPct}%` : ""}${o.estimated ? " (taxminiy: AI kaliti ulanmagan)" : ""}`),
    o.notes?.length > 0 && h("div", {}, h("b", {}, o.notes.join(" "))),
    o.similarTo && h("div", {}, `O'xshash ish: ${o.similarTo.name || "—"} (${o.similarTo.group || "—"})`),
    o.signs?.length > 0 && h("ul", {}, o.signs.map((x) => h("li", {}, x))),
    h("div", { class: "muted" }, "Bu ehtimoliy baho, qat'iy dalil emas. Yakuniy qarorni o'qituvchi qabul qiladi."));
}

export function reviewView(ai, criteria, stage) {
  if (!ai) return null;
  const parts = stage ? String(stage.result || "").split(/\s+\+\s+/).map((x) => x.trim()).filter(Boolean) : null;
  return h("div", { class: "stack" },
    ai.estimated && h("div", { class: "alert alert-warn small" }, "AI kaliti ulanmagan: baho avtomatik qoidalar asosida taxminiy hisoblangan. Hisob-kitoblar va izchillikni o'qituvchi tekshiradi."),
    h("div", { class: "row between wrap" },
      h("div", {}, h("b", {}, `AI bahosi: ${ai.percent}% `), ai.percentRaw != null && ai.percentRaw !== ai.percent && h("span", { class: "muted small" }, `(o'z ijodi pasaytirishigacha ${ai.percentRaw}%) `), h("span", { class: "muted small" }, `→ taklif etilgan ball: ${fmtScore(ai.suggested)} / ${fmtScore(ai.max)}`)),
      h("span", { class: "muted small" }, fmtDate(ai.at))),
    integrityAlert(ai.integrity),
    ai.contentPenalty && h("div", { class: "alert alert-danger small" }, h("b", {}, `📋 Ish mazmunidagi jiddiy kamchiliklar uchun baho ${ai.contentPenalty.percent}% ga kamaytirildi (${ai.contentPenalty.before}% → ${ai.percent}%)`),
      h("ul", {}, ai.contentPenalty.reasons.map((r) => h("li", {}, `−${r.percent}%: ${r.text}`))), h("p", { class: "muted small" }, "Kamchiliklarni to'g'rilab, ishni qayta yuborib, AI tekshiruvini qayta o'tkazishingiz mumkin.")),
    ai.latePenalty && h("div", { class: "alert alert-warn small" }, `⏰ Ish muddatdan keyin topshirilgan: AI bahosidan ${ai.latePenalty.percent}% jarima ushlab qolindi (${ai.latePenalty.before}% → ${ai.percent}%).`),
    h("div", { class: "table-wrap" }, h("table", { class: "table" }, h("tbody", {}, criteria.map((c) => h("tr", {}, h("td", {}, c.name, ai.reasons?.[c.key] && h("div", { class: "muted small" }, ai.reasons[c.key])), h("td", { class: "num" }, `${ai.scores[c.key]} / ${c.max}`)))))),
    ai.summary && h("p", {}, ai.summary),
    originalityView(ai.originality),
    ai.copiedSample && h("div", { class: "alert alert-warn small" }, "⚠️ Namunadagi raqamlar/ma'lumotlar ko'chirilgan ko'rinadi. O'z sub'ektingiz ma'lumotlaridan foydalaning."),
    itemList("📋 Vazifalar bo'yicha", ai.tasks, stage?.tasks),
    itemList("📋 Topshiriq talablari bo'yicha", ai.requirements),
    itemList("📦 Talab qilingan natija qismlari", ai.parts, parts),
    ai.checks?.length > 0 && h("div", {}, h("b", {}, "🧮 Hisob-kitoblarni qayta tekshirish"), h("div", { class: "table-wrap" }, h("table", { class: "table" },
      h("thead", {}, h("tr", {}, ["Nima", "Talaba", "To'g'ri", ""].map((x) => h("th", {}, x)))),
      h("tbody", {}, ai.checks.map((c) => h("tr", {}, h("td", {}, c.what), h("td", {}, c.student), h("td", {}, c.correct), h("td", {}, c.ok ? "✅" : "❌"))))))),
    ai.consistency && h("div", { class: "alert alert-info small" }, h("b", {}, "🔗 Oldingi bosqichlar bilan izchillik: "), ai.consistency),
    ai.strengths?.length > 0 && h("div", {}, h("b", {}, "✅ Yaxshi tomonlari"), h("ul", {}, ai.strengths.map((x) => h("li", {}, x)))),
    ai.mistakes?.length > 0 && h("div", {}, h("b", {}, "⚠️ Kamchiliklar"), h("ul", {}, ai.mistakes.map((x) => h("li", {}, x)))),
    ai.recommendations?.length > 0 && h("div", {}, h("b", {}, "💡 Tavsiyalar"), h("ul", {}, ai.recommendations.map((x) => h("li", {}, x)))),
    ai.adjustments?.length > 0 && h("details", { class: "small muted" }, h("summary", {}, "Tizim tuzatgan ballar"), h("ul", {}, ai.adjustments.map((x) => h("li", {}, x)))));
}

async function uploadFile(no, file, onProgress) {
  const init = await api.post(`assignment/${no}/upload`, { name: file.name, size: file.size });
  for (let i = 0; i < init.chunks; i++) {
    await api.putBinary(`assignment/${no}/upload/${init.uploadId}/${i}`, file.slice(i * init.chunkSize, (i + 1) * init.chunkSize));
    onProgress((i + 1) / init.chunks);
  }
  return { uploadId: init.uploadId, name: file.name, size: file.size, mime: file.type };
}

export async function saveBlob(path, name) {
  const res = await api.raw(path);
  const blob = await res.blob();
  const a = h("a", { href: URL.createObjectURL(blob), download: name });
  document.body.append(a);
  a.click();
  setTimeout(() => (URL.revokeObjectURL(a.href), a.remove()), 500);
}

const mediaNote = (s) => (s?.media ? ` · ${s.media.images} ta rasm, ${s.media.charts} ta diagramma topildi` : "");
const sizeLabel = (n) => (n > 1048576 ? `${(n / 1048576).toFixed(1)} MB` : `${Math.ceil(n / 1024)} KB`);

export async function renderStage(el, noParam) {
  if (session.user?.role === "student" && !hasAssignment(session.user.group)) return mount(el, emptyState("🔒", "Bu topshiriq sizning guruhingiz uchun emas", `20 ballik topshiriq faqat kunduzgi ta'limning ${ASSIGNMENT_GROUPS.join(", ")} guruhlariga beriladi.`, h("a", { class: "btn", href: "#/" }, "Bosh sahifa")));
  const no = Number(noParam);
  mount(el, loading());
  const res = await api.get("assignment");
  const form = res.form;
  const st = stageOf(no, form);
  if (!st) return mount(el, emptyState("🧭", "Bunday bosqich yo'q", "", h("a", { class: "btn", href: "#/assignment" }, "Topshiriqqa qaytish")));
  const now = new Date(res.now);
  const subs = Object.fromEntries(res.items.map((s) => [s.no, s]));
  const sub = subs[no];
  const g = groupOf(no, form);
  const max = stageMax(no, form);
  const late = now > deadlineOf(no, form);
  const closedAll = assignmentClosed(now);
  const firstOnly = closedAll && no === 1 && !sub; // 1-bosqich: yopilgandan keyin faqat birinchi marta yuklash (50% jarima)
  const closed = closedAll && !firstOnly;

  let picked = null;
  const fileInput = h("input", { type: "file", accept: ".docx", disabled: closed });
  const fileNote = h("p", { class: "small muted" }, sub?.file ? `Yuklangan fayl: ${sub.file.name} (${sizeLabel(sub.file.size)})${mediaNote(sub)}` : "Fayl hali yuklanmagan.");
  const prog = h("div", { class: "hidden small muted" });
  const aiBox = h("div", { class: "stack" });

  fileInput.addEventListener("change", async () => {
    const f = fileInput.files[0];
    picked = f || null;
    if (!f) return;
    if (f.size > 12 * 1024 * 1024) {
      picked = null;
      fileInput.value = "";
      return toast("Fayl juda katta (eng ko'pi 12 MB)", "error");
    }
    if (!/\.docx$/i.test(f.name)) {
      picked = null;
      fileInput.value = "";
      return toast("Faqat Word (.docx) fayl yuklanadi. Hisobotni Word'da saqlang.", "error");
    }
    fileNote.textContent = `Tanlandi: ${f.name} (${sizeLabel(f.size)})`;
  });

  const drawAi = (rec) => {
    const stale = rec?.ai && rec.ai.forSubmittedAt !== rec.submittedAt;
    aiBox.replaceChildren(
      rec?.ai ? h("div", { class: "stack" }, stale && h("div", { class: "alert alert-warn small" }, "Bu tekshiruv oldingi variantga tegishli. Yangi variantni qayta tekshiring."), reviewView(rec.ai, res.criteria, st)) : h("p", { class: "muted small" }, "Hisobotni yuborgach, “AI bilan tekshirish” tugmasi orqali baho va tavsiyalar oling. AI oldingi bosqichlaringiz bilan izchillikni ham tekshiradi."));
  };
  drawAi(sub);

  const submitBtn = h("button", { class: "btn lg", onclick: async (e) => {
    const btn = e.target;
    btn.disabled = true;
    try {
      let file;
      if (picked) {
        prog.classList.remove("hidden");
        file = await uploadFile(no, picked, (p) => (prog.textContent = `Yuklanmoqda… ${Math.round(p * 100)}%`));
        prog.classList.add("hidden");
      }
      const rec = await api.post(`assignment/${no}/submit`, { file });
      toast(rec.late ? "Yuborildi (muddatdan keyin)" : "Hisobot yuborildi!", rec.late ? "warn" : "ok");
      location.hash = `#/assignment/${no}`;
      await renderStage(el, no);
    } catch (ex) {
      toast(ex.message, "error");
      prog.classList.add("hidden");
      btn.disabled = false;
    }
  } }, sub ? "Qayta yuborish" : "Hisobotni yuborish");

  const reviewBtn = h("button", { class: "btn ghost", disabled: !sub, onclick: async (e) => {
    const btn = e.target;
    btn.disabled = true;
    btn.textContent = "🤖 AI tekshirmoqda… (10–40 soniya)";
    try {
      const rec = await api.post(`assignment/${no}/review`, {});
      Object.assign(sub, rec);
      drawAi(rec);
      toast("AI tekshiruvi tayyor", "ok");
    } catch (ex) {
      toast(ex.message, "error");
    } finally {
      btn.disabled = false;
      btn.textContent = "🤖 Qayta tekshirish";
    }
  } }, sub?.ai ? "🤖 Qayta tekshirish" : "🤖 AI bilan tekshirish");

  const dep = st.dependsOn.length
    ? h("div", { class: "alert alert-info" },
        h("b", {}, "🔗 Bog'liqlik: "),
        `bu bosqich ${st.dependsOn.map((d) => `${d}-bosqich`).join(", ")} natijalariga tayanadi. `,
        st.dependsOn.map((d) => h("a", { href: `#/assignment/${d}`, class: "chip chip-soft" }, `${d}-bosqich ${subs[d] ? "✓" : "— topshirilmagan"}`)),
        " Raqamlar va sub'ekt oldingi bosqichlar bilan mos bo'lishi kerak.")
    : h("div", { class: "alert alert-info" }, h("b", {}, "Boshlang'ich bosqich: "), "bu yerda tanlagan sub'ektingiz keyingi barcha bosqichlar uchun asos bo'ladi.");

  const sample = st.sampleTable
    ? h("details", { class: "card" },
        h("summary", {}, h("b", {}, `📎 Namuna — ${assignmentFor(form).sampleName} misolida (shartli raqamlar)`)),
        h("p", {}, st.sampleIntro),
        h("div", { class: "table-wrap" }, h("table", { class: "table" }, h("thead", {}, h("tr", {}, st.sampleTable.head.map((c) => h("th", {}, c)))), h("tbody", {}, st.sampleTable.rows.map((r) => h("tr", {}, r.map((c) => h("td", {}, c))))))),
        h("p", {}, h("b", {}, "Tahlil: "), st.sampleAnalysis),
        h("p", { class: "small muted" }, "Namunadagi raqamlarni ko'chirmang — o'z sub'ektingiz ma'lumotlaridan foydalaning."))
    : null;

  mount(
    el,
    h("p", { class: "breadcrumb" }, h("a", { href: "#/assignment" }, "Topshiriq"), ` / ${no}-bosqich`),
    h("div", { class: "page-head" },
      h("div", {}, h("h1", {}, `${no}-bosqich. ${st.title}`),
        h("div", { class: "row wrap" },
          h("span", { class: "chip chip-soft" }, `Muddat: ${fmtDue(g.due)}`),
          deadlineChip(g, now),
          h("span", { class: "chip chip-soft" }, `Maksimal: ${fmtScore(max)} ball`),
          h("a", { class: "chip chip-soft", href: `#/topics/t${st.topic}` }, `📖 ${st.topic}-mavzu nazariyasi`)))),
    dep,
    firstOnly && h("div", { class: "alert alert-warn" }, "⏰ Muddat (31-oktyabr 23:59) tugagan. Siz 1-bosqich hisobotini hali yuklamagansiz, shuning uchun birinchi marta yuklashingiz mumkin, lekin ball 50% kamaytiriladi. Yuklagandan keyin uni o'zgartirib yoki qayta yuklab bo'lmaydi."),
    closed && h("div", { class: "alert alert-warn" }, "🔒 Topshiriqni yuklash va o'zgartirish muddati tugagan (31-oktyabr 23:59 gacha edi). Endi hisobotni yuklab ham, o'zgartirib ham bo'lmaydi."),
    !closedAll && h("div", { class: "alert small" }, "🕒 Hisobotni 31-oktyabr soat 23:59 gacha yuklash yoki o'zgartirish mumkin. Undan keyin tizim yopiladi."),
    late && !closedAll && h("div", { class: "alert alert-warn" }, "⏰ Bu bosqich muddati tugagan. Hisobot qabul qilinadi, ammo kech topshirilgan deb belgilanadi va AI bahosidan 20% jarima ushlab qolinadi."),
    h("div", { class: "card" }, h("h3", {}, "🎯 Maqsad"), h("p", {}, st.goal), h("h3", {}, "📝 Bajariladigan vazifalar"), h("ol", {}, st.tasks.map((t) => h("li", {}, t))), h("h3", {}, "📦 Talab qilinadigan natija"), h("p", {}, st.result)),
    sample,
    h("div", { class: "card stack" },
      h("h3", {}, "📤 Hisobotni yuklash"),
      sub && h("p", { class: "small muted" }, `Oxirgi yuborilgan: ${fmtDate(sub.submittedAt)} · urinish: ${sub.attempts}${sub.late ? ` · kech${sub.latePct ? ` (−${sub.latePct}%)` : ""}` : ""}`),
      sub?.content?.issues?.length > 0 && h("div", { class: "alert alert-warn small" }, h("b", {}, "📋 Tezkor tekshiruv: ishda quyidagi kamchiliklar topildi — to'g'rilab qayta yuborishingiz mumkin. Jiddiy kamchiliklar AI bahosini 60% gacha kamaytiradi"), h("ul", {}, sub.content.issues.map((i) => h("li", {}, i.text)))),
      h("label", { class: "field" }, h("span", {}, "Hisobot fayli — faqat Word (.docx), 12 MB gacha. Jadval, formula, rasm va grafiklarni shu faylga joylang"), fileInput),
      fileNote,
      sub?.file && h("button", { class: "btn ghost small", onclick: () => saveBlob(`assignment/${no}/file`, sub.file.name) }, "⬇ Yuklangan faylni yuklab olish"),
      sub?.text && h("details", { class: "small" }, h("summary", {}, "Fayldan o'qilgan matn (AI shuni va rasmlarni ko'radi)"), h("p", { class: "pre-wrap" }, sub.text.slice(0, 6000))),
      prog,
      h("div", { class: "row end" }, closed ? h("span", { class: "muted small" }, "Yuklash yopilgan") : submitBtn)),
    h("div", { class: "card stack" }, h("div", { class: "row between wrap" }, h("h3", {}, "🤖 AI tekshiruvi va izchillik"), reviewBtn), aiBox),
    sub?.teacher && h("div", { class: "card accent" },
      h("h3", {}, "👩‍🏫 O'qituvchi bahosi"),
      h("p", {}, h("b", {}, sub.teacher.score != null ? `${fmtScore(sub.teacher.score)} / ${fmtScore(max)} ball` : "Ball qo'yilmagan"), sub.resubmitted ? " (qayta yuborganingiz uchun qayta ko'rib chiqiladi)" : ""),
      sub.teacher.comment && h("p", { class: "pre-wrap" }, sub.teacher.comment),
      h("p", { class: "small muted" }, `${sub.teacher.by} · ${fmtDate(sub.teacher.at)}`))
  );
}

// ---------------- O'qituvchi: topshiriqlar jadvali va baholash ----------------

export async function teacherView(el) {
  const [data, students] = await Promise.all([api.get("admin/assignment"), api.get("admin/students")]);
  const allRows = students.filter((u) => u.role === "student" && hasAssignment(u.group)); // faqat kunduzgi 331-25 … 334-25
  const formOf = (u) => u.studyForm || "kunduzgi";
  let curForm = "kunduzgi";
  let A = assignmentFor(curForm);
  let rows = allRows.filter((u) => formOf(u) === curForm);
  const by = new Map();
  for (const it of data.items) by.set(`${it.userId}/${it.no}`, it);
  let groupFilter = "";
  let q = "";
  const table = h("div", { class: "card table-wrap" });
  const subsOf = (u) => A.stages.map((s) => by.get(`${u.id}/${s.no}`)).filter(Boolean);

  const draw = () => {
    const list = rows
      .filter((u) => !groupFilter || u.group === groupFilter)
      .filter((u) => !q || `${u.name} ${u.email} ${u.idNumber || ""}`.toLowerCase().includes(q.toLowerCase()))
      .sort((a, b) => (a.group || "").localeCompare(b.group || "") || a.name.localeCompare(b.name));
    table.replaceChildren(
      h("table", { class: "table" },
        h("thead", {}, h("tr", {}, h("th", { class: "center" }, "№"), h("th", {}, "Talaba"), h("th", {}, "Guruh"), A.stages.map((s) => h("th", { class: "center", title: s.title }, s.no)), h("th", { class: "center" }, `Jami / ${A.total}`))),
        h("tbody", {}, list.map((u, idx) =>
          h("tr", {},
            h("td", { class: "center muted" }, `${idx + 1}.`),
            h("td", {}, u.name, u.idNumber && h("div", { class: "muted small" }, `ID: ${u.idNumber}`)),
            h("td", {}, u.group || "—", u.studyForm && h("div", { class: "muted small" }, formByKey(u.studyForm)?.name || "")),
            A.stages.map((s) => {
              const it = by.get(`${u.id}/${s.no}`);
              let label = "·", cls = "muted";
              if (it) {
                if (it.teacher?.score != null && !it.resubmitted) (label = fmtScore(it.teacher.score)), (cls = "");
                else (label = it.late ? "⏰" : "●"), (cls = "warn-text");
              }
              return h("td", { class: "center" }, it ? h("a", { href: "#", class: cls, title: `${s.title}${it.late ? " · kech" : ""}${it.dup ? " · ⚠ boshqa talaba ishi bilan takrorlanish" : ""}${it.content?.issues?.some((i) => i.level === "high") ? " · 📋 mazmun talabga mos emas" : ""}`, onclick: (e) => (e.preventDefault(), openModal(u, it, draw)) }, label, it.dup && h("sup", { style: { color: "#dc2626" } }, "⚠"), it.content?.issues?.some((i) => i.level === "high") && h("sup", { style: { color: "#d97706" } }, "📋")) : h("span", { class: "muted" }, "·"));
            }),
            h("td", { class: "center" }, h("b", {}, fmtScore(totalScore(subsOf(u), curForm)))))))));
    if (!list.length) table.append(emptyState("👥", "Talabalar topilmadi"));
  };

  const sel = h("select", { onchange: (e) => ((groupFilter = e.target.value), draw()) });
  const fillGroups = () => {
    groupFilter = "";
    sel.replaceChildren(h("option", { value: "" }, "Barcha guruhlar"), ...ASSIGNMENT_GROUPS.map((x) => h("option", { value: x }, x)));
  };
  fillGroups();
  // Ta'lim shakli bo'yicha alohida topshiriq: kunduzgi va masofaviy topshiriqlar bosqichlari va matnlari farq qiladi
  const formTabs = h("div", { class: "segmented role-switch" }, (COURSE.studyForms || []).filter((f) => f.key === "kunduzgi").map((f) => h("label", { class: `seg ${f.key === curForm ? "active" : ""}` }, h("input", { type: "radio", name: "assignForm", value: f.key, checked: f.key === curForm, onchange: () => {
    curForm = f.key;
    A = assignmentFor(curForm);
    rows = allRows.filter((u) => formOf(u) === curForm);
    formTabs.querySelectorAll(".seg").forEach((x) => x.classList.toggle("active", x.querySelector("input").value === curForm));
    fillGroups();
    draw();
    note.textContent = noteText();
  } }), `${f.icon || ""} ${f.name}`)));
  const search = h("input", { type: "search", placeholder: "Qidirish: ism yoki email", oninput: (e) => ((q = e.target.value), draw()) });
  const csv = () =>
    downloadFile(`topshiriq-ballari-${curForm}.csv`, toCSV([
      ["№", "Talaba", "ID raqami", "Email", "Ta'lim shakli", "Guruh", ...A.stages.map((s) => `${s.no}-bosqich (${fmtScore(stageMax(s.no, curForm))})`), ...A.groups.map((g) => `${g.stages[0]}–${g.stages[g.stages.length - 1]} guruh (${g.max})`), `Jami (${A.total})`],
        ...allRows.filter((u) => formOf(u) === curForm).map((u, i) => {
          const its = subsOf(u);
          const m = new Map(its.map((i) => [i.no, i]));
          return [i + 1, u.name, u.idNumber || "", u.email, formByKey(u.studyForm)?.name || "", u.group, ...A.stages.map((s) => m.get(s.no)?.teacher?.score ?? (m.get(s.no) ? "tekshirilmagan" : "")), ...A.groups.map((g) => Math.min(g.max, g.stages.reduce((n, no) => n + (m.get(no)?.teacher?.score || 0), 0))), totalScore(its, curForm)];
        })]));

  const pending = data.items.filter((i) => i.teacher?.score == null || i.resubmitted).length;
  const noteText = () => `${assignmentFor(curForm).title}. ● — topshirilgan, baholanmagan · ⏰ — muddatdan keyin topshirilgan · raqam — qo'yilgan ball · · — topshirilmagan. Katakni bosib hisobotni ko'ring va ball qo'ying. Bosqich balli: guruh balli guruhdagi bosqichlar soniga teng bo'linadi (${assignmentFor(curForm).groups.map((g) => `${g.stages[0]}–${g.stages[g.stages.length - 1]} → ${fmtScore(Math.round((g.max / g.stages.length) * 100) / 100)}`).join("; ")}).`;
  const note = h("p", { class: "small muted" }, noteText());
  mount(el,
    formTabs,
    h("div", { class: "row between wrap" },
      h("div", { class: "row wrap" }, sel, search),
      h("div", { class: "row wrap" }, h("span", { class: "badge badge-warn" }, `${pending} ta baholanmagan`), h("button", { class: "btn ghost", onclick: async (e) => {
        const todo = data.items.filter((i) => (i.form || "kunduzgi") === curForm && (i.text || "").trim().length >= 60 && (!i.ai || i.ai.forSubmittedAt !== i.submittedAt));
        if (!todo.length) return toast("Qayta tekshiriladigan yangi ish yo'q: barcha ishlar AI tekshiruvidan o'tgan", "ok");
        if (!confirm(`${todo.length} ta ish AI bilan tekshiriladi (har biri ~30 soniya). Davom etilsinmi?`)) return;
        const btn = e.target;
        btn.disabled = true;
        let done = 0, failed = 0;
        for (const it of todo) {
          btn.textContent = `🤖 ${done + failed + 1}/${todo.length}…`;
          try {
            Object.assign(it, await api.post(`admin/assignment/${it.userId}/${it.no}/review`, {}));
            done++;
          } catch (ex) {
            failed++;
          }
        }
        btn.disabled = false;
        btn.textContent = "🤖 Yangi ishlarni AI bilan tekshirish";
        toast(`Tekshirildi: ${done}${failed ? `, xato: ${failed}` : ""}`, failed ? "warn" : "ok");
        draw();
      } }, "🤖 Yangi ishlarni AI bilan tekshirish"), h("button", { class: "btn ghost", onclick: csv }, "⬇ CSV (Excel)"))),
    note,
    table);
  draw();

  function openModal(u, it, redraw) {
    const st = stageOf(it.no, curForm);
    const max = stageMax(it.no, curForm);
    const score = h("input", { type: "number", min: 0, max, step: 0.05, value: it.teacher?.score ?? "", style: { maxWidth: "120px" } });
    const comment = h("textarea", { rows: 3, placeholder: "Talabaga izoh va tavsiyalar" }, it.teacher?.comment || "");
    const prior = (st.dependsOn.length ? [1, ...st.dependsOn.filter((d) => d !== 1)] : [])
      .map((n) => by.get(`${u.id}/${n}`))
      .filter(Boolean);
    const close = modal(`${u.name} — ${it.no}-bosqich`, h("div", { class: "stack" },
      h("p", { class: "muted small" }, `${st.title} · guruh ${u.group || "—"} · yuborilgan: ${fmtDate(it.submittedAt)} · urinish: ${it.attempts}${it.late ? " · ⏰ KECH" : ""}`),
      it.dup && h("div", { class: "alert alert-danger small" }, h("b", {}, "⚠️ Takrorlanish aniqlandi"),
        it.dup.work && h("p", {}, `Ish matni ${it.dup.work.with.name} (${it.dup.work.with.group || "—"}) ishi bilan ${it.dup.work.pct}% o'xshash. `, it.dup.work.pct >= 70 ? "Ko'chirilgan bo'lishi ehtimoli yuqori." : "Shubhali — solishtirib ko'ring."),
        it.dup.object && h("p", {}, `Ob'ekt (tadbirkorlik sub'ekti) takrori: «${it.dup.object.name}» sub'ektini ${it.dup.object.with.name} (${it.dup.object.with.group || "—"}) ham tanlagan.`),
        h("p", { class: "muted small" }, `Aniqlangan: ${fmtDate(it.dup.at)}. Bu avtomatik ehtimoliy baho — yakuniy qarorni o'qituvchi qabul qiladi.`)),
      it.content && h("div", { class: `alert ${it.content.issues.some((i) => i.level === "high") ? "alert-danger" : it.content.issues.length ? "alert-warn" : "alert-ok"} small` }, h("b", {}, "📋 Mazmun tekshiruvi (avtomatik)"),
        h("p", { class: "muted small" }, `Hajm: ${it.content.words} so'z · talablarga moslik (tayanch tushunchalar): ${it.content.coverage}%${it.content.parts.length > 1 ? ` · natija qismlari: ${it.content.parts.filter((p) => p.ok).length}/${it.content.parts.length}` : ""}`),
        it.content.issues.length ? h("ul", {}, it.content.issues.map((i) => h("li", {}, `${i.level === "high" ? "🔴" : "🟡"} ${i.text}`))) : h("p", {}, "✅ Muammo topilmadi (chuqur tahlil uchun «AI tekshiruvi»dan foydalaning)."),
        h("p", { class: "muted small" }, "Bu tezkor ehtimoliy tekshiruv; hisob-kitoblar va asoslanganlikni AI tekshiruvi va o'qituvchi baholaydi. Jiddiy (🔴) kamchiliklar uchun AI bahosi holatiga qarab 60% gacha kamaytiriladi.")),
      it.file && h("button", { class: "btn ghost small", onclick: () => saveBlob(`admin/assignment/${it.userId}/${it.no}/file`, it.file.name) }, `⬇ ${it.file.name} (${sizeLabel(it.file.size)})`),
      it.text ? h("div", { class: "card" }, h("b", {}, "Hisobot matni"), h("p", { class: "pre-wrap small" }, it.text)) : h("p", { class: "muted small" }, "Matn yo'q."),
      prior.length > 0 && h("details", {}, h("summary", {}, `🔗 Oldingi bog'liq bosqichlar (${prior.map((p) => p.no).join(", ")}) — izchillikni tekshirish uchun`), prior.map((p) => h("div", { class: "card" }, h("b", {}, `${p.no}-bosqich`), h("p", { class: "pre-wrap small" }, (p.text || "(matn yo'q, faqat fayl)").slice(0, 4000))))),
      h("div", { class: "row between wrap" }, h("h4", {}, "🤖 AI tekshiruvi"), h("button", { class: "btn ghost small", onclick: async (e) => {
        const btn = e.target;
        btn.disabled = true;
        btn.textContent = "🤖 Tekshirilmoqda… (10–60 soniya)";
        try {
          Object.assign(it, await api.post(`admin/assignment/${it.userId}/${it.no}/review`, {}));
          by.set(`${it.userId}/${it.no}`, it);
          toast("AI tekshiruvi yangilandi", "ok");
          close();
          openModal(u, it, redraw);
        } catch (ex) {
          toast(ex.message, "error");
          btn.disabled = false;
          btn.textContent = "🤖 AI bilan qayta tekshirish";
        }
      } }, it.ai ? "🤖 AI bilan qayta tekshirish" : "🤖 AI bilan tekshirish")),
      it.ai ? h("div", { class: "card" }, reviewView(it.ai, data.criteria, st)) : h("p", { class: "muted small" }, "AI tekshiruvi hali o'tkazilmagan."),
      h("div", { class: "row wrap grade-form" },
        h("label", { class: "field" }, h("span", {}, `Ball (0–${fmtScore(max)})`), score),
        it.ai && h("button", { class: "btn ghost small", onclick: () => (score.value = it.ai.suggested) }, `AI taklifi: ${fmtScore(it.ai.suggested)}`),
        h("label", { class: "field grow" }, h("span", {}, "Izoh"), comment),
        h("button", { class: "btn", onclick: async (e) => {
          e.target.disabled = true;
          try {
            const rec = await api.put(`admin/assignment/${it.userId}/${it.no}/grade`, { score: score.value === "" ? null : Number(score.value), comment: comment.value });
            Object.assign(it, rec);
            by.set(`${it.userId}/${it.no}`, it);
            toast("Ball saqlandi", "ok");
            close();
            redraw();
          } catch (ex) {
            toast(ex.message, "error");
            e.target.disabled = false;
          }
        } }, "Saqlash"))), { wide: true });
  }
}
