// O'qituvchi platformaning o'zida yaratadigan topshiriqlar: talaba (ro'yxat, topshirish, AI tekshiruv) va o'qituvchi (yaratish, ishlarni baholash).
import { h, mount, toast, loading, fmtDate, modal, confirmDialog, emptyState, downloadFile } from "../ui.js";
import { api } from "../api.js";
import { toCSV } from "../stats.js";
import { COURSE, formByKey, subjectOfGroup, subjectByKey } from "../../data/course.js";
import { SUBJECT_KEY } from "../../data/topics.js";
import { extractText } from "../doctext.js";
import { reviewView, saveBlob } from "./assignment.js";

const MONTHS = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
const fmtDue = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}-${MONTHS[m - 1]} ${y}`;
};
const fmtScore = (n) => (n == null ? "—" : String(Math.round(n * 100) / 100).replace(".", ","));
const sizeLabel = (n) => (n > 1048576 ? `${(n / 1048576).toFixed(1)} MB` : `${Math.ceil(n / 1024)} KB`);
const MODES = { any: "Fayl yoki matn", file: "Fayl yuklash shart", text: "Matn yozish shart" };
const chk = (box, ...text) => h("label", { style: { display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "8px", cursor: "pointer" } }, box, h("span", {}, ...text));
const ACCEPT = ".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp";

function dueChip(task, now) {
  if (!task.due) return h("span", { class: "chip chip-soft" }, "Muddat belgilanmagan");
  const left = Math.ceil((new Date(`${task.due}T23:59:59+05:00`) - now) / 86400000);
  const txt = left < 0 ? "Muddat tugagan" : left === 0 ? "Bugun oxirgi kun" : `${left} kun qoldi`;
  return h("span", { class: "chip chip-soft" }, `Muddat: ${fmtDue(task.due)}`, " · ", h("b", { class: left <= 3 ? "warn-text" : "" }, txt));
}

function statusBadge(task) {
  const sub = task.sub;
  if (!sub) return h("span", { class: "badge" }, "Topshirilmagan");
  if (sub.teacher?.score != null && !sub.resubmitted) return h("span", { class: "badge badge-ok" }, `${fmtScore(sub.teacher.score)} / ${fmtScore(task.max)} ball`);
  return h("span", { class: "badge badge-warn" }, sub.late ? "Topshirildi (kech) · tekshirilmoqda" : "Topshirildi · tekshirilmoqda");
}

// ---------------- Talaba: ro'yxat ----------------

export async function render(el) {
  mount(el, loading());
  const res = await api.get("tasks");
  const now = new Date(res.now);
  const done = res.tasks.filter((t) => t.sub).length;
  mount(
    el,
    h("div", { class: "page-head" }, h("div", {}, h("h1", {}, "Vazifalar"), h("p", { class: "muted" }, "O'qituvchi sizga bergan topshiriqlar. Har birini muddatigacha topshiring, AI bilan tekshirib ko'ring.")), res.tasks.length > 0 && h("span", { class: "chip chip-soft" }, `${done}/${res.tasks.length} topshirildi`)),
    res.tasks.length
      ? h("div", { class: "stack" }, res.tasks.map((t) =>
          h("a", { class: "card task-card", href: `#/tasks/${t.id}`, style: { display: "block", color: "inherit", textDecoration: "none" } },
            h("div", { class: "row between wrap" }, h("h3", {}, t.title), statusBadge(t)),
            h("p", { class: "small muted" }, t.description.slice(0, 160) + (t.description.length > 160 ? "…" : "")),
            h("div", { class: "row wrap" }, dueChip(t, now), h("span", { class: "chip chip-soft" }, `Maksimal: ${fmtScore(t.max)} ball`), t.semester > 0 && h("span", { class: "chip chip-soft" }, `${t.semester}-semestr`)))))
      : emptyState("📝", "Hozircha vazifa yo'q", "O'qituvchi yangi topshiriq qo'shganda shu yerda ko'rinadi.")
  );
}

async function uploadFile(id, file, onProgress) {
  const init = await api.post(`tasks/${id}/upload`, { name: file.name, size: file.size });
  for (let i = 0; i < init.chunks; i++) {
    await api.putBinary(`tasks/${id}/upload/${init.uploadId}/${i}`, file.slice(i * init.chunkSize, (i + 1) * init.chunkSize));
    onProgress((i + 1) / init.chunks);
  }
  return { uploadId: init.uploadId, name: file.name, size: file.size, mime: file.type };
}

// ---------------- Talaba: bitta topshiriq ----------------

export async function renderTask(el, id) {
  mount(el, loading());
  const res = await api.get("tasks");
  const task = res.tasks.find((t) => t.id === id);
  if (!task) return mount(el, emptyState("🧭", "Topshiriq topilmadi", "U o'chirilgan yoki sizga tegishli emas.", h("a", { class: "btn", href: "#/tasks" }, "Vazifalarga qaytish")));
  const now = new Date(res.now);
  const sub = task.sub;
  const closed = task.due && !task.allowLate && now > new Date(`${task.due}T23:59:59+05:00`);
  let picked = null;
  const text = h("textarea", { rows: 12, maxlength: 30000, placeholder: "Javob matni. PDF yoki Word fayl yuklasangiz, matn avtomatik to'ldiriladi." }, sub?.text || "");
  const fileInput = h("input", { type: "file", accept: ACCEPT });
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
      if (t && (!text.value.trim() || confirm("Javob matni faylingizdagi matn bilan almashtirilsinmi?"))) text.value = t.slice(0, 30000);
      fileNote.textContent = `Tanlandi: ${f.name} (${sizeLabel(f.size)})${t ? ` · ${t.length} belgi matn ajratildi` : " · matn ajratib bo'lmadi — javob matnini qo'lda kiriting"}`;
    } else fileNote.textContent += " · bu fayl turidan matn ajratilmaydi: AI tekshiruvi uchun asosiy qismini matn sifatida yozing.";
  });

  const drawAi = (rec) => {
    const stale = rec?.ai && rec.ai.forSubmittedAt !== rec.submittedAt;
    aiBox.replaceChildren(
      rec?.ai
        ? h("div", { class: "stack" }, stale && h("div", { class: "alert alert-warn small" }, "Bu tekshiruv oldingi variantga tegishli. Yangi variantni qayta tekshiring."), reviewView(rec.ai, task.criteria))
        : h("p", { class: "muted small" }, "Ishni yuborgach, “AI bilan tekshirish” tugmasi orqali baho va tavsiyalar oling.")
    );
  };
  drawAi(sub);

  const submitBtn = h("button", { class: "btn lg", disabled: closed, onclick: async (e) => {
    const btn = e.target;
    btn.disabled = true;
    try {
      let file;
      if (picked) {
        prog.classList.remove("hidden");
        file = await uploadFile(id, picked, (p) => (prog.textContent = `Yuklanmoqda… ${Math.round(p * 100)}%`));
        prog.classList.add("hidden");
      }
      const rec = await api.post(`tasks/${id}/submit`, { text: text.value, file });
      toast(rec.late ? "Yuborildi (muddatdan keyin)" : "Ish yuborildi!", rec.late ? "warn" : "ok");
      await renderTask(el, id);
    } catch (ex) {
      toast(ex.message, "error");
      prog.classList.add("hidden");
      btn.disabled = false;
    }
  } }, sub ? "Qayta yuborish" : "Ishni yuborish");

  const reviewBtn = h("button", { class: "btn ghost", disabled: !sub, onclick: async (e) => {
    const btn = e.target;
    btn.disabled = true;
    btn.textContent = "🤖 AI tekshirmoqda… (10–40 soniya)";
    try {
      const rec = await api.post(`tasks/${id}/review`, {});
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

  mount(
    el,
    h("p", { class: "breadcrumb" }, h("a", { href: "#/tasks" }, "Vazifalar"), ` / ${task.title}`),
    h("div", { class: "page-head" }, h("div", {}, h("h1", {}, task.title), h("div", { class: "row wrap" }, dueChip(task, now), h("span", { class: "chip chip-soft" }, `Maksimal: ${fmtScore(task.max)} ball`), h("span", { class: "chip chip-soft" }, MODES[task.mode]), statusBadge(task)))),
    closed && h("div", { class: "alert alert-warn" }, "Bu topshiriqning muddati tugagan, endi qabul qilinmaydi."),
    !closed && task.due && now > new Date(`${task.due}T23:59:59+05:00`) && h("div", { class: "alert alert-warn" }, "Muddat tugagan. Ish qabul qilinadi, ammo kech topshirilgan deb belgilanadi."),
    h("div", { class: "card" }, h("h3", {}, "📝 Topshiriq sharti"), h("p", { class: "pre-wrap" }, task.description)),
    h("div", { class: "card stack" },
      h("h3", {}, "📤 Ishni yuklash"),
      sub && h("p", { class: "small muted" }, `Oxirgi yuborilgan: ${fmtDate(sub.submittedAt)} · urinish: ${sub.attempts}${sub.late ? " · kech" : ""}`),
      h("label", { class: "field" }, h("span", {}, "Fayl (PDF, Word, Excel yoki rasm; 12 MB gacha)"), fileInput),
      fileNote,
      sub?.file && h("button", { class: "btn ghost small", onclick: () => saveBlob(`tasks/${id}/file`, sub.file.name) }, "⬇ Yuklangan faylni ko'rish"),
      h("label", { class: "field" }, h("span", {}, "Javob matni"), text),
      prog,
      h("div", { class: "row end" }, submitBtn)),
    task.aiEnabled && h("div", { class: "card stack" },
      h("div", { class: "row between wrap" }, h("h3", {}, "🤖 AI tekshiruvi"), reviewBtn),
      h("details", {}, h("summary", { class: "small muted" }, "Baholash mezonlari"), h("ul", {}, task.criteria.map((c) => h("li", {}, `${c.name} — ${c.max} %`)))),
      aiBox),
    sub?.teacher && h("div", { class: "card accent" },
      h("h3", {}, "👩‍🏫 O'qituvchi bahosi"),
      h("p", {}, h("b", {}, sub.teacher.score != null ? `${fmtScore(sub.teacher.score)} / ${fmtScore(task.max)} ball` : "Ball qo'yilmagan"), sub.resubmitted ? " (qayta yuborganingiz uchun qayta ko'rib chiqiladi)" : ""),
      sub.teacher.comment && h("p", { class: "pre-wrap" }, sub.teacher.comment),
      h("p", { class: "small muted" }, `${sub.teacher.by} · ${fmtDate(sub.teacher.at)}`))
  );
}

// ---------------- O'qituvchi ----------------

const audienceText = (t) => {
  const forms = t.forms.length ? t.forms.map((k) => formByKey(k)?.name || k).join(", ") : "Barcha ta'lim shakllari";
  return t.groups.length ? `${forms} · ${t.groups.join(", ")}` : `${forms} · barcha guruhlar`;
};

export async function teacherView(el) {
  mount(el, loading());
  const data = await api.get("admin/tasks");
  data.tasks = data.tasks.filter((t) => (t.subject || "mikro") === SUBJECT_KEY); // faqat tanlangan fan topshiriqlari
  const body = h("div", { class: "stack" });
  mount(el, body);
  const list = () => drawList(body, data, () => teacherView(el));
  list();
}

function drawList(body, data, reload) {
  const now = new Date(data.now);
  const pendingAll = data.tasks.reduce((n, t) => n + (t.stat.submitted - t.stat.graded), 0);
  body.replaceChildren(
    h("div", { class: "row between wrap" },
      h("div", {}, h("p", { class: "muted small" }, "Topshiriqni shu yerda yarating: shart, kimga berilishi (ta'lim shakli / guruh), muddat, ball va AI tekshiruv mezonlari. Talabalar “Vazifalar” bo'limida ko'radi va ishini yuklaydi.")),
      h("div", { class: "row wrap" }, pendingAll > 0 && h("span", { class: "badge badge-warn" }, `${pendingAll} ta baholanmagan`), h("button", { class: "btn ghost", onclick: () => openImport(data, reload) }, "📥 Fayldan yaratish"), h("button", { class: "btn", onclick: () => openBuilder(null, data, reload) }, "＋ Yangi topshiriq"))),
    data.tasks.length
      ? h("div", { class: "card table-wrap" }, h("table", { class: "table" },
          h("thead", {}, h("tr", {}, ["Topshiriq", "Kimga", "Muddat", "Ball", "Topshirilgan", "Holati", ""].map((t) => h("th", {}, t)))),
          h("tbody", {}, data.tasks.map((t) =>
            h("tr", {},
              h("td", {}, h("b", {}, t.title), t.semester > 0 && h("div", { class: "muted small" }, `${t.semester}-semestr`)),
              h("td", { class: "small" }, audienceText(t)),
              h("td", { class: "small" }, t.due ? fmtDue(t.due) : "—"),
              h("td", { class: "center" }, fmtScore(t.max)),
              h("td", { class: "center" }, `${t.stat.submitted}`, t.stat.submitted - t.stat.graded > 0 && h("div", { class: "warn-text small" }, `${t.stat.submitted - t.stat.graded} ta baholanmagan`)),
              h("td", {}, h("span", { class: `badge ${t.published ? "badge-ok" : ""}` }, t.published ? "Nashr etilgan" : "Qoralama")),
              h("td", {}, h("div", { class: "row wrap" },
                h("button", { class: "btn small", onclick: () => openSubmissions(body, t.id, data, reload) }, "Ishlar"),
                h("button", { class: "btn ghost small", onclick: () => openBuilder(t, data, reload) }, "Tahrirlash"),
                h("button", { class: "btn ghost small", title: t.published ? "Talabalardan yashirish" : "Talabalarga ko'rsatish", onclick: async () => {
                  try {
                    await api.put(`admin/tasks/${t.id}`, { ...t, published: !t.published });
                    toast(t.published ? "Qoralamaga qaytarildi" : "Nashr etildi", "ok");
                    reload();
                  } catch (ex) {
                    toast(ex.message, "error");
                  }
                } }, t.published ? "Yashirish" : "Nashr etish"),
                h("button", { class: "btn ghost small", onclick: async () => {
                  if (!(await confirmDialog(`“${t.title}” o'chirilsinmi? Talabalarning yuborgan ishlari (${t.stat.submitted} ta) ham o'chadi.`))) return;
                  try {
                    await api.del(`admin/tasks/${t.id}`);
                    toast("O'chirildi", "ok");
                    reload();
                  } catch (ex) {
                    toast(ex.message, "error");
                  }
                } }, "🗑"))))))))
      : emptyState("📝", "Hali topshiriq yaratilmagan", "“Yangi topshiriq” tugmasi orqali birinchi topshiriqni yarating.")
  );
}

/** Fayl (Word, PDF, matn) yuklab, undan topshiriqlar loyihasini olish; o'qituvchi ko'rib chiqib, tanlanganlarini yaratadi. */
function openImport(data, reload) {
  const forms = COURSE.studyForms || [];
  const fileInput = h("input", { type: "file", accept: ".docx,.pdf,.txt,.md" });
  const status = h("p", { class: "small muted" }, "Topshiriqlar yozilgan Word (.docx), PDF yoki matn (.txt) faylni yuklang. AI undagi topshiriqlarni ajratib beradi, siz ko'rib chiqib tahrirlaysiz va yaratasiz.");
  const draftsBox = h("div", { class: "stack" });
  const settings = h("div", { class: "stack hidden" });
  const create = h("button", { class: "btn hidden", disabled: true }, "Tanlanganlarni yaratish");
  const due = h("input", { type: "date" });
  const defMax = h("input", { type: "number", min: 1, max: 100, step: 0.5, value: 10, style: { maxWidth: "110px" } });
  const mode = h("select", {}, Object.entries(MODES).map(([k, v]) => h("option", { value: k }, v)));
  const aiOn = h("input", { type: "checkbox", checked: true });
  const published = h("input", { type: "checkbox" });
  const formBoxes = forms.map((f) => ({ f, box: h("input", { type: "checkbox", value: f.key }) }));
  let drafts = [];

  const pick = async () => {
    const f = fileInput.files[0];
    if (!f) return;
    if (f.size > 15 * 1024 * 1024) return toast("Fayl juda katta (15 MB gacha)", "error");
    fileInput.disabled = true;
    status.textContent = "⏳ Fayl o'qilmoqda…";
    try {
      const text = await extractText(f);
      if (text.length < 30) throw new Error("Fayldan matn ajratib bo'lmadi. Word (.docx), matnli PDF yoki .txt fayl yuklang (skanerlangan rasm PDF o'qilmaydi).");
      status.textContent = "🤖 Topshiriqlar ajratilmoqda… (10–60 soniya)";
      const res = await api.post("admin/tasks/import", { text, subject: SUBJECT_KEY, fileName: f.name });
      drafts = res.tasks.map((t) => ({ ...t, on: true }));
      status.textContent = `${drafts.length} ta topshiriq topildi${res.ai ? "" : " (AI ulanmagan: matn sarlavhalar bo'yicha bo'lindi — tekshirib, kerak bo'lsa tahrirlang)"}. Keraksizini olib tashlang, matnini tahrirlang.`;
      drawDrafts();
      settings.classList.remove("hidden");
      create.classList.remove("hidden");
    } catch (ex) {
      status.textContent = ex.message;
      toast(ex.message, "error");
    } finally {
      fileInput.disabled = false;
    }
  };
  fileInput.addEventListener("change", pick);

  const drawDrafts = () => {
    draftsBox.replaceChildren(...drafts.map((d, i) =>
      h("div", { class: "card stack" },
        h("div", { class: "row wrap" },
          h("input", { type: "checkbox", checked: d.on, onchange: (e) => ((d.on = e.target.checked), refresh()) }),
          h("input", { type: "text", class: "grow", maxlength: 150, value: d.title, oninput: (e) => (d.title = e.target.value) }),
          h("label", { class: "row small muted" }, "Ball: ", h("input", { type: "number", min: 0, max: 100, step: 0.5, value: d.max || "", placeholder: "—", style: { maxWidth: "80px" }, oninput: (e) => (d.max = Number(e.target.value)) }))),
        h("textarea", { rows: 5, maxlength: 8000, oninput: (e) => (d.description = e.target.value) }, d.description),
        (d.reference || d.rubric) && h("details", { class: "small" }, h("summary", {}, "Javob / ko'rsatma (talabaga ko'rinmaydi)"),
          d.rubric && h("label", { class: "field" }, h("span", {}, "AI uchun ko'rsatma"), h("textarea", { rows: 2, oninput: (e) => (d.rubric = e.target.value) }, d.rubric)),
          d.reference && h("label", { class: "field" }, h("span", {}, "To'g'ri javob / yechim"), h("textarea", { rows: 3, oninput: (e) => (d.reference = e.target.value) }, d.reference))))));
    refresh();
  };
  const refresh = () => {
    const n = drafts.filter((d) => d.on).length;
    create.disabled = !n;
    create.textContent = `Tanlanganlarni yaratish (${n})`;
  };

  settings.append(
    h("div", { class: "card stack" },
      h("b", {}, "Hammasi uchun umumiy sozlamalar"),
      h("p", { class: "small muted" }, "Ta'lim shakli tanlanmasa — hamma talabaga. Keyin har bir topshiriqni “Tahrirlash” orqali o'zgartirish mumkin."),
      h("div", { class: "row wrap" }, formBoxes.map(({ f, box }) => chk(box, `${f.icon || ""} ${f.name}`))),
      h("div", { class: "row wrap" },
        h("label", { class: "field" }, h("span", {}, "Muddat"), due),
        h("label", { class: "field" }, h("span", {}, "Ball (ko'rsatilmaganlar uchun)"), defMax),
        h("label", { class: "field" }, h("span", {}, "Talaba nima yuboradi"), mode)),
      chk(aiOn, "AI tekshiruvi yoqilgan"),
      chk(published, h("b", {}, "Darhol nashr etilsin"), h("span", { class: "muted small" }, " (belgilanmasa — qoralama, talabalar ko'rmaydi)"))));

  const close = modal("📥 Fayldan topshiriqlar yaratish", h("div", { class: "stack" },
    h("label", { class: "field" }, h("span", {}, "Fayl"), fileInput),
    status,
    draftsBox,
    settings,
    h("div", { class: "row end" }, h("button", { class: "btn ghost", onclick: () => close() }, "Bekor qilish"), create)), { wide: true });

  create.addEventListener("click", async () => {
    const chosen = drafts.filter((d) => d.on);
    if (chosen.some((d) => d.title.trim().length < 3 || d.description.trim().length < 10)) return toast("Har bir topshiriqda nom va shart bo'lishi kerak", "warn");
    create.disabled = true;
    let ok = 0;
    for (const d of chosen) {
      try {
        await api.post("admin/tasks", {
          subject: SUBJECT_KEY, title: d.title, description: d.description, max: d.max > 0 ? d.max : Number(defMax.value) || 10, due: due.value, semester: 0, mode: mode.value,
          allowLate: true, aiEnabled: aiOn.checked, published: published.checked,
          forms: formBoxes.filter((x) => x.box.checked).map((x) => x.f.key),
          groups: SUBJECT_KEY === "mikro" ? [] : [...(subjectByKey(SUBJECT_KEY)?.groups || [])],
          rubric: d.rubric, reference: d.reference,
        });
        ok++;
      } catch (ex) {
        toast(`“${d.title.slice(0, 40)}”: ${ex.message}`, "error");
      }
    }
    if (ok) toast(`${ok} ta topshiriq yaratildi${published.checked ? "" : " (qoralama)"}`, "ok");
    close();
    reload();
  });
}

function openBuilder(task, data, reload) {
  // Yangi topshiriq tanlangan fan guruhlariga beriladi (asosiy fan — hammaga)
  const t = task || { title: "", description: "", forms: [], groups: SUBJECT_KEY === "mikro" ? [] : [...(subjectByKey(SUBJECT_KEY)?.groups || [])], semester: 0, due: "", allowLate: true, max: 10, mode: "any", published: false, aiEnabled: true, criteria: [], rubric: "", reference: "" };
  const forms = COURSE.studyForms || [];
  const title = h("input", { type: "text", maxlength: 150, value: t.title, placeholder: "Masalan: Talab elastikligini hisoblash" });
  const description = h("textarea", { rows: 8, maxlength: 8000, placeholder: "Topshiriq sharti: nima qilish kerak, qanday ma'lumotlar beriladi, natija qanday bo'lishi kerak." }, t.description);
  const max = h("input", { type: "number", min: 1, max: 100, step: 0.5, value: t.max, style: { maxWidth: "110px" } });
  const due = h("input", { type: "date", value: t.due });
  const semester = h("select", {}, h("option", { value: 0 }, "Belgilanmagan"), [1, 2, 3, 4, 5, 6, 7, 8].map((n) => h("option", { value: n, selected: t.semester === n }, `${n}-semestr`)));
  const mode = h("select", {}, Object.entries(MODES).map(([k, v]) => h("option", { value: k, selected: t.mode === k }, v)));
  const allowLate = h("input", { type: "checkbox", checked: t.allowLate });
  const aiOn = h("input", { type: "checkbox", checked: t.aiEnabled });
  const published = h("input", { type: "checkbox", checked: t.published });
  const rubric = h("textarea", { rows: 3, maxlength: 3000, placeholder: "AI uchun ko'rsatma (talabaga ko'rsatilmaydi). Masalan: formulani to'g'ri qo'llaganiga e'tibor ber." }, t.rubric);
  const reference = h("textarea", { rows: 4, maxlength: 6000, placeholder: "To'g'ri javob yoki namunaviy yechim (talabaga ko'rsatilmaydi). AI shu bilan solishtiradi." }, t.reference);
  const formBoxes = forms.map((f) => ({ f, box: h("input", { type: "checkbox", value: f.key, checked: t.forms.includes(f.key) }) }));
  const groupBoxes = (COURSE.groups || []).map((g) => ({ g, box: h("input", { type: "checkbox", value: g, checked: t.groups.includes(g) }) }));
  let crit = (t.criteria.length ? t.criteria : [{ name: "Mazmunning to'liqligi", max: 30 }, { name: "To'g'riligi va aniqligi", max: 30 }, { name: "Tahlil va asoslash", max: 25 }, { name: "Rasmiylashtirish va uslub", max: 15 }]).map((c) => ({ name: c.name, max: c.max }));
  const critBox = h("div", { class: "stack" });
  const sum = h("b", {});
  const drawCrit = () => {
    const total = crit.reduce((n, c) => n + (Number(c.max) || 0), 0);
    sum.textContent = `Jami: ${total} / 100`;
    sum.className = total === 100 ? "" : "warn-text";
    critBox.replaceChildren(...crit.map((c, i) =>
      h("div", { class: "row wrap" },
        h("input", { type: "text", value: c.name, maxlength: 90, class: "grow", placeholder: "Mezon nomi", oninput: (e) => (c.name = e.target.value) }),
        h("input", { type: "number", min: 1, max: 100, value: c.max, style: { maxWidth: "90px" }, oninput: (e) => ((c.max = Number(e.target.value)), drawCritSum()) }),
        h("button", { class: "btn ghost small", type: "button", disabled: crit.length <= 1, onclick: () => (crit.splice(i, 1), drawCrit()) }, "✕"))));
  };
  const drawCritSum = () => {
    const total = crit.reduce((n, c) => n + (Number(c.max) || 0), 0);
    sum.textContent = `Jami: ${total} / 100`;
    sum.className = total === 100 ? "" : "warn-text";
  };
  drawCrit();
  const checks = (items) => h("div", { class: "row wrap" }, items);
  const close = modal(task ? "Topshiriqni tahrirlash" : "Yangi topshiriq", h("div", { class: "stack" },
    h("label", { class: "field" }, h("span", {}, "Nomi"), title),
    h("label", { class: "field" }, h("span", {}, "Topshiriq sharti"), description),
    h("div", { class: "card stack" },
      h("b", {}, "Kimga beriladi"),
      h("p", { class: "small muted" }, "Hech biri tanlanmasa — hamma talabaga."),
      checks(formBoxes.map(({ f, box }) => chk(box, `${f.icon || ""} ${f.name}`))),
      h("details", {}, h("summary", { class: "small" }, "Alohida guruhlar"), checks(groupBoxes.map(({ g, box }) => chk(box, subjectOfGroup(g).key === "mikro" ? g : `${g} · ${subjectOfGroup(g).direction}`))))),
    h("div", { class: "row wrap" },
      h("label", { class: "field" }, h("span", {}, "Maksimal ball"), max),
      h("label", { class: "field" }, h("span", {}, "Topshirish muddati"), due),
      h("label", { class: "field" }, h("span", {}, "Semestr"), semester),
      h("label", { class: "field" }, h("span", {}, "Talaba nima yuboradi"), mode)),
    chk(allowLate, "Muddatdan keyin ham qabul qilinsin (kech deb belgilanadi)"),
    h("div", { class: "card stack" },
      chk(aiOn, h("b", {}, "AI tekshiruvi yoqilgan")),
      h("p", { class: "small muted" }, "AI mezonlar bo'yicha 100 ballik baho beradi, tizim uni maksimal ballga o'tkazib, o'qituvchiga taklif sifatida ko'rsatadi. Yakuniy ballni o'zingiz qo'yasiz."),
      critBox,
      h("div", { class: "row between wrap" }, h("button", { class: "btn ghost small", type: "button", disabled: false, onclick: () => (crit.length < 6 ? (crit.push({ name: "", max: 10 }), drawCrit()) : toast("Mezonlar 6 tadan oshmasin", "warn")) }, "＋ Mezon qo'shish"), sum),
      h("label", { class: "field" }, h("span", {}, "AI uchun ko'rsatma (ixtiyoriy)"), rubric),
      h("label", { class: "field" }, h("span", {}, "To'g'ri javob / namunaviy yechim (ixtiyoriy)"), reference)),
    chk(published, h("b", {}, "Nashr etilsin"), h("span", { class: "muted small" }, " (belgilanmasa, qoralama bo'lib qoladi — talabalar ko'rmaydi)")),
    h("div", { class: "row end" },
      h("button", { class: "btn ghost", onclick: () => close() }, "Bekor qilish"),
      h("button", { class: "btn", onclick: async (e) => {
        e.target.disabled = true;
        const payload = {
          subject: task?.subject || SUBJECT_KEY, title: title.value, description: description.value, max: Number(max.value), due: due.value, semester: Number(semester.value), mode: mode.value,
          allowLate: allowLate.checked, aiEnabled: aiOn.checked, published: published.checked,
          forms: formBoxes.filter((x) => x.box.checked).map((x) => x.f.key), groups: groupBoxes.filter((x) => x.box.checked).map((x) => x.g),
          criteria: crit.map((c) => ({ name: c.name, max: Number(c.max) })), rubric: rubric.value, reference: reference.value,
        };
        try {
          if (task) await api.put(`admin/tasks/${task.id}`, payload);
          else await api.post("admin/tasks", payload);
          toast(task ? "Saqlandi" : "Topshiriq yaratildi", "ok");
          close();
          reload();
        } catch (ex) {
          toast(ex.message, "error");
          e.target.disabled = false;
        }
      } }, task ? "Saqlash" : "Yaratish"))), { wide: true });
}

async function openSubmissions(body, id, listData, reloadList) {
  mount(body, loading());
  const res = await api.get(`admin/tasks/${id}/submissions`);
  const { task } = res;
  const by = new Map(res.items.map((s) => [s.userId, s]));
  let groupFilter = "";
  const groups = [...new Set(res.students.map((s) => s.group).filter(Boolean))].sort();
  const table = h("div", { class: "card table-wrap" });
  const draw = () => {
    const rows = res.students.filter((s) => !groupFilter || s.group === groupFilter).sort((a, b) => (a.group || "").localeCompare(b.group || "") || a.name.localeCompare(b.name));
    table.replaceChildren(
      h("table", { class: "table" },
        h("thead", {}, h("tr", {}, ["№", "Talaba", "Guruh", "Holati", "Yuborilgan", `Ball / ${fmtScore(task.max)}`, "AI taklifi", ""].map((c) => h("th", {}, c)))),
        h("tbody", {}, rows.map((s, idx) => {
          const it = by.get(s.id);
          const graded = it?.teacher?.score != null && !it.resubmitted;
          return h("tr", {},
            h("td", { class: "center muted" }, `${idx + 1}.`),
            h("td", {}, s.name, h("div", { class: "muted small" }, formByKey(s.studyForm)?.name || "")),
            h("td", {}, s.group || "—"),
            h("td", {}, it ? h("span", { class: `badge ${graded ? "badge-ok" : "badge-warn"}` }, graded ? "Baholangan" : it.resubmitted ? "Qayta yuborilgan" : it.late ? "Kech · baholanmagan" : "Baholanmagan") : h("span", { class: "badge" }, "Topshirmagan")),
            h("td", { class: "small" }, it ? fmtDate(it.submittedAt) : "—"),
            h("td", { class: "center" }, graded ? h("b", {}, fmtScore(it.teacher.score)) : "—"),
            h("td", { class: "center small" }, it?.ai ? fmtScore(it.ai.suggested) : "—"),
            h("td", {}, it && h("button", { class: "btn small", onclick: () => openGrade(s, it) }, graded ? "Ko'rish" : "Baholash")));
        }))));
    if (!rows.length) table.append(emptyState("👥", "Talabalar topilmadi", "Bu topshiriq tegishli bo'lgan talabalar ro'yxatdan o'tmagan."));
  };
  const csv = () =>
    downloadFile(`topshiriq-${task.title.slice(0, 30).replace(/\s+/g, "-")}.csv`, toCSV([
      ["Talaba", "Email", "Ta'lim shakli", "Guruh", "Holati", "Yuborilgan", "Kech", `Ball (${task.max})`, "AI taklifi", "Izoh"],
      ...res.students.map((s) => {
        const it = by.get(s.id);
        return [s.name, s.email, formByKey(s.studyForm)?.name || "", s.group, it ? "topshirgan" : "topshirmagan", it?.submittedAt?.slice(0, 16).replace("T", " ") || "", it?.late ? "ha" : "", it?.teacher?.score ?? "", it?.ai?.suggested ?? "", it?.teacher?.comment || ""];
      }),
    ]));
  const submitted = res.items.length;
  mount(body,
    h("div", { class: "row between wrap" },
      h("div", {}, h("button", { class: "btn ghost small", onclick: reloadList }, "← Topshiriqlar ro'yxati"), h("h3", { style: { marginTop: "8px" } }, task.title), h("p", { class: "muted small" }, `${audienceText(task)} · muddat: ${task.due ? fmtDue(task.due) : "yo'q"} · ${submitted}/${res.students.length} topshirgan`)),
      h("div", { class: "row wrap" }, h("select", { onchange: (e) => ((groupFilter = e.target.value), draw()) }, h("option", { value: "" }, "Barcha guruhlar"), groups.map((g) => h("option", { value: g }, g))), h("button", { class: "btn ghost", onclick: csv }, "⬇ CSV (Excel)"))),
    table);
  draw();

  function openGrade(s, it) {
    const score = h("input", { type: "number", min: 0, max: task.max, step: 0.05, value: it.teacher?.score ?? "", style: { maxWidth: "120px" } });
    const comment = h("textarea", { rows: 3, placeholder: "Talabaga izoh va tavsiyalar" }, it.teacher?.comment || "");
    const closeGrade = modal(`${s.name} — ${task.title}`, h("div", { class: "stack" },
      h("p", { class: "muted small" }, `Guruh ${s.group || "—"} · yuborilgan: ${fmtDate(it.submittedAt)} · urinish: ${it.attempts}${it.late ? " · ⏰ KECH" : ""}`),
      it.file && h("button", { class: "btn ghost small", onclick: () => saveBlob(`admin/tasks/${id}/file/${it.userId}`, it.file.name) }, `⬇ ${it.file.name} (${sizeLabel(it.file.size)})`),
      it.text ? h("div", { class: "card" }, h("b", {}, "Javob matni"), h("p", { class: "pre-wrap small" }, it.text)) : h("p", { class: "muted small" }, "Matn yo'q (faqat fayl)."),
      it.ai ? h("div", { class: "card" }, h("h4", {}, "🤖 AI tekshiruvi"), reviewView(it.ai, task.criteria)) : h("p", { class: "muted small" }, "AI tekshiruvi hali o'tkazilmagan."),
      h("div", { class: "row wrap grade-form" },
        h("label", { class: "field" }, h("span", {}, `Ball (0–${fmtScore(task.max)})`), score),
        it.ai && h("button", { class: "btn ghost small", onclick: () => (score.value = it.ai.suggested) }, `AI taklifi: ${fmtScore(it.ai.suggested)}`),
        h("label", { class: "field grow" }, h("span", {}, "Izoh"), comment),
        h("button", { class: "btn", onclick: async (e) => {
          e.target.disabled = true;
          try {
            const rec = await api.put(`admin/tasks/${id}/grade/${it.userId}`, { score: score.value === "" ? null : Number(score.value), comment: comment.value });
            Object.assign(it, rec);
            toast("Ball saqlandi", "ok");
            closeGrade();
            draw();
          } catch (ex) {
            toast(ex.message, "error");
            e.target.disabled = false;
          }
        } }, "Saqlash"))), { wide: true });
  }
}
