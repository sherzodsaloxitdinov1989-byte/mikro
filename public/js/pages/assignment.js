// 3-semestr topshirig'i: 11 bosqich, har bir bosqich alohida yuklanadi (talaba) va baholanadi (o'qituvchi).
import { h, mount, toast, loading, fmtDate, modal, emptyState, downloadFile } from "../ui.js";
import { api, session } from "../api.js";
import { toCSV } from "../stats.js";
import { COURSE, formByKey } from "../../data/course.js";
import { assignmentFor, stageOf, groupOf, stageMax, deadlineOf, fmtScore, totalScore } from "../assignment-util.js";
import { extractText } from "../doctext.js";

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
  return h("span", { class: "badge badge-warn" }, sub.late ? "Topshirildi (kech) · tekshirilmoqda" : "Topshirildi · tekshirilmoqda");
}

// ---------------- Talaba: bosqichlar ro'yxati ----------------

export async function render(el) {
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
        h("div", { class: "stat-card" }, h("b", {}, `${fmtScore(total)} / ${A.total}`), h("span", { class: "muted small" }, `o'qituvchi qo'ygan ball · ${done}/${A.stages.length} bosqich topshirildi`)))),
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

export function reviewView(ai, criteria) {
  if (!ai) return null;
  return h("div", { class: "stack" },
    ai.estimated && h("div", { class: "alert alert-warn small" }, "AI kaliti ulanmagan: baho avtomatik qoidalar asosida taxminiy hisoblangan. Hisob-kitoblar va izchillikni o'qituvchi tekshiradi."),
    h("div", { class: "row between wrap" },
      h("div", {}, h("b", {}, `AI bahosi: ${ai.percent}% `), h("span", { class: "muted small" }, `→ taklif etilgan ball: ${fmtScore(ai.suggested)} / ${fmtScore(ai.max)}`)),
      h("span", { class: "muted small" }, fmtDate(ai.at))),
    h("div", { class: "table-wrap" }, h("table", { class: "table" }, h("tbody", {}, criteria.map((c) => h("tr", {}, h("td", {}, c.name), h("td", { class: "num" }, `${ai.scores[c.key]} / ${c.max}`)))))),
    ai.summary && h("p", {}, ai.summary),
    ai.consistency && h("div", { class: "alert alert-info small" }, h("b", {}, "🔗 Oldingi bosqichlar bilan izchillik: "), ai.consistency),
    ai.strengths?.length > 0 && h("div", {}, h("b", {}, "✅ Yaxshi tomonlari"), h("ul", {}, ai.strengths.map((x) => h("li", {}, x)))),
    ai.mistakes?.length > 0 && h("div", {}, h("b", {}, "⚠️ Kamchiliklar"), h("ul", {}, ai.mistakes.map((x) => h("li", {}, x)))),
    ai.recommendations?.length > 0 && h("div", {}, h("b", {}, "💡 Tavsiyalar"), h("ul", {}, ai.recommendations.map((x) => h("li", {}, x)))));
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

const sizeLabel = (n) => (n > 1048576 ? `${(n / 1048576).toFixed(1)} MB` : `${Math.ceil(n / 1024)} KB`);

export async function renderStage(el, noParam) {
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

  let picked = null;
  const text = h("textarea", { rows: 14, placeholder: "Hisobot matni: sub'ekt tavsifi, jadvallar (| bilan ajratib), hisob-kitoblar, grafik izohi va xulosa. Fayl yuklasangiz, matn avtomatik to'ldiriladi.", maxlength: 30000 }, sub?.text || "");
  const fileInput = h("input", { type: "file", accept: ".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp" });
  const fileNote = h("p", { class: "small muted" }, sub?.file ? `Yuklangan fayl: ${sub.file.name} (${sizeLabel(sub.file.size)})` : "Fayl hali yuklanmagan.");
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
    fileNote.textContent = `Tanlandi: ${f.name} (${sizeLabel(f.size)})`;
    if (/\.(pdf|docx)$/i.test(f.name)) {
      fileNote.textContent += " · matn ajratilmoqda…";
      const t = await extractText(f);
      if (t && (!text.value.trim() || confirm("Hisobot matni faylingizdagi matn bilan almashtirilsinmi?"))) text.value = t.slice(0, 30000);
      fileNote.textContent = `Tanlandi: ${f.name} (${sizeLabel(f.size)})${t ? ` · ${t.length} belgi matn ajratildi` : " · matn ajratib bo'lmadi — hisobot matnini qo'lda kiriting"}`;
    } else {
      fileNote.textContent += " · bu fayl turidan matn ajratilmaydi: AI tekshiruvi uchun asosiy jadval va hisob-kitoblarni matn sifatida yozing.";
    }
  });

  const drawAi = (rec) => {
    const stale = rec?.ai && rec.ai.forSubmittedAt !== rec.submittedAt;
    aiBox.replaceChildren(
      rec?.ai ? h("div", { class: "stack" }, stale && h("div", { class: "alert alert-warn small" }, "Bu tekshiruv oldingi variantga tegishli. Yangi variantni qayta tekshiring."), reviewView(rec.ai, res.criteria)) : h("p", { class: "muted small" }, "Hisobotni yuborgach, “AI bilan tekshirish” tugmasi orqali baho va tavsiyalar oling. AI oldingi bosqichlaringiz bilan izchillikni ham tekshiradi."));
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
      const rec = await api.post(`assignment/${no}/submit`, { text: text.value, file });
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
    late && h("div", { class: "alert alert-warn" }, "Bu bosqich muddati tugagan. Hisobot qabul qilinadi, ammo kech topshirilgan deb belgilanadi."),
    h("div", { class: "card" }, h("h3", {}, "🎯 Maqsad"), h("p", {}, st.goal), h("h3", {}, "📝 Bajariladigan vazifalar"), h("ol", {}, st.tasks.map((t) => h("li", {}, t))), h("h3", {}, "📦 Talab qilinadigan natija"), h("p", {}, st.result)),
    sample,
    h("div", { class: "card stack" },
      h("h3", {}, "📤 Hisobotni yuklash"),
      sub && h("p", { class: "small muted" }, `Oxirgi yuborilgan: ${fmtDate(sub.submittedAt)} · urinish: ${sub.attempts}${sub.late ? " · kech" : ""}`),
      h("label", { class: "field" }, h("span", {}, "Hisobot fayli (PDF, Word, Excel yoki rasm; 12 MB gacha)"), fileInput),
      fileNote,
      sub?.file && h("button", { class: "btn ghost small", onclick: () => saveBlob(`assignment/${no}/file`, sub.file.name) }, "⬇ Yuklangan faylni yuklab olish"),
      h("label", { class: "field" }, h("span", {}, "Hisobot matni (AI tekshiruv va o'qituvchi uchun)"), text),
      prog,
      h("div", { class: "row end" }, submitBtn)),
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
  const allRows = students.filter((u) => u.role === "student");
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
      .filter((u) => !q || `${u.name} ${u.email}`.toLowerCase().includes(q.toLowerCase()))
      .sort((a, b) => (a.group || "").localeCompare(b.group || "") || a.name.localeCompare(b.name));
    table.replaceChildren(
      h("table", { class: "table" },
        h("thead", {}, h("tr", {}, h("th", {}, "Talaba"), h("th", {}, "Guruh"), A.stages.map((s) => h("th", { class: "center", title: s.title }, s.no)), h("th", { class: "center" }, `Jami / ${A.total}`))),
        h("tbody", {}, list.map((u) =>
          h("tr", {},
            h("td", {}, u.name),
            h("td", {}, u.group || "—", u.studyForm && h("div", { class: "muted small" }, formByKey(u.studyForm)?.name || "")),
            A.stages.map((s) => {
              const it = by.get(`${u.id}/${s.no}`);
              let label = "·", cls = "muted";
              if (it) {
                if (it.teacher?.score != null && !it.resubmitted) (label = fmtScore(it.teacher.score)), (cls = "");
                else (label = it.late ? "⏰" : "●"), (cls = "warn-text");
              }
              return h("td", { class: "center" }, it ? h("a", { href: "#", class: cls, title: `${s.title}${it.late ? " · kech" : ""}`, onclick: (e) => (e.preventDefault(), openModal(u, it, draw)) }, label) : h("span", { class: "muted" }, "·"));
            }),
            h("td", { class: "center" }, h("b", {}, fmtScore(totalScore(subsOf(u), curForm)))))))));
    if (!list.length) table.append(emptyState("👥", "Talabalar topilmadi"));
  };

  const sel = h("select", { onchange: (e) => ((groupFilter = e.target.value), draw()) });
  const fillGroups = () => {
    groupFilter = "";
    sel.replaceChildren(h("option", { value: "" }, "Barcha guruhlar"), ...(formByKey(curForm)?.groups || []).map((x) => h("option", { value: x }, x)));
  };
  fillGroups();
  // Ta'lim shakli bo'yicha alohida topshiriq: kunduzgi va masofaviy topshiriqlar bosqichlari va matnlari farq qiladi
  const formTabs = h("div", { class: "segmented role-switch" }, (COURSE.studyForms || []).map((f) => h("label", { class: `seg ${f.key === curForm ? "active" : ""}` }, h("input", { type: "radio", name: "assignForm", value: f.key, checked: f.key === curForm, onchange: () => {
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
      ["Talaba", "Email", "Ta'lim shakli", "Guruh", ...A.stages.map((s) => `${s.no}-bosqich (${fmtScore(stageMax(s.no, curForm))})`), ...A.groups.map((g) => `${g.stages[0]}–${g.stages[g.stages.length - 1]} guruh (${g.max})`), `Jami (${A.total})`],
        ...allRows.filter((u) => formOf(u) === curForm).map((u) => {
          const its = subsOf(u);
          const m = new Map(its.map((i) => [i.no, i]));
          return [u.name, u.email, formByKey(u.studyForm)?.name || "", u.group, ...A.stages.map((s) => m.get(s.no)?.teacher?.score ?? (m.get(s.no) ? "tekshirilmagan" : "")), ...A.groups.map((g) => Math.min(g.max, g.stages.reduce((n, no) => n + (m.get(no)?.teacher?.score || 0), 0))), totalScore(its, curForm)];
        })]));

  const pending = data.items.filter((i) => i.teacher?.score == null || i.resubmitted).length;
  const noteText = () => `${assignmentFor(curForm).title}. ● — topshirilgan, baholanmagan · ⏰ — muddatdan keyin topshirilgan · raqam — qo'yilgan ball · · — topshirilmagan. Katakni bosib hisobotni ko'ring va ball qo'ying. Bosqich balli: guruh balli guruhdagi bosqichlar soniga teng bo'linadi (${assignmentFor(curForm).groups.map((g) => `${g.stages[0]}–${g.stages[g.stages.length - 1]} → ${fmtScore(Math.round((g.max / g.stages.length) * 100) / 100)}`).join("; ")}).`;
  const note = h("p", { class: "small muted" }, noteText());
  mount(el,
    formTabs,
    h("div", { class: "row between wrap" },
      h("div", { class: "row wrap" }, sel, search),
      h("div", { class: "row wrap" }, h("span", { class: "badge badge-warn" }, `${pending} ta baholanmagan`), h("button", { class: "btn ghost", onclick: csv }, "⬇ CSV (Excel)"))),
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
      it.file && h("button", { class: "btn ghost small", onclick: () => saveBlob(`admin/assignment/${it.userId}/${it.no}/file`, it.file.name) }, `⬇ ${it.file.name} (${sizeLabel(it.file.size)})`),
      it.text ? h("div", { class: "card" }, h("b", {}, "Hisobot matni"), h("p", { class: "pre-wrap small" }, it.text)) : h("p", { class: "muted small" }, "Matn yo'q (faqat fayl)."),
      prior.length > 0 && h("details", {}, h("summary", {}, `🔗 Oldingi bog'liq bosqichlar (${prior.map((p) => p.no).join(", ")}) — izchillikni tekshirish uchun`), prior.map((p) => h("div", { class: "card" }, h("b", {}, `${p.no}-bosqich`), h("p", { class: "pre-wrap small" }, (p.text || "(matn yo'q, faqat fayl)").slice(0, 4000))))),
      it.ai ? h("div", { class: "card" }, h("h4", {}, "🤖 AI tekshiruvi"), reviewView(it.ai, data.criteria)) : h("p", { class: "muted small" }, "AI tekshiruvi hali o'tkazilmagan."),
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
