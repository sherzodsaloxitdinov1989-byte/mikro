// Semestr reytingi: guruh ichida ball yig'ish, daraja va rag'bat tizimi (talaba) hamda boshqaruv (o'qituvchi).
import { h, mount, toast, loading, fmtDate, modal, emptyState, downloadFile, progressBar } from "../ui.js";
import { api } from "../api.js";
import { toCSV } from "../stats.js";
import { COURSE, formByKey, currentSemester } from "../../data/course.js";
import { RATING_RULES, TIERS, MEDALS, REWARDS } from "../rating.js";
import { fmtIsoDate } from "../semester.js";

const fmt = (n) => String(Math.round(n * 10) / 10).replace(".", ",");
const semFromHash = () => Number(new URLSearchParams(location.hash.split("?")[1] || "").get("sem")) || currentSemester().no;

function semTabs(active, base) {
  return h("div", { class: "segmented role-switch" }, COURSE.semesters.map((s) => h("a", { class: `seg ${s.no === active ? "active" : ""}`, href: `${base}?sem=${s.no}`, style: { textDecoration: "none" } }, `${s.name} (${s.topics[0]}–${s.topics[1]}-mavzu)`)));
}

const periodText = (sem) =>
  sem.endsAt
    ? `${sem.startsAt ? fmtIsoDate(sem.startsAt) : "boshidan"} — ${fmtIsoDate(sem.endsAt)}${sem.ended ? " · yakunlangan" : sem.daysLeft >= 0 ? ` · ${sem.daysLeft} kun qoldi` : ""}`
    : "o'qish muddati hali belgilanmagan (ball yig'ilishda davom etadi)";

// ---------------- Talaba ----------------

export async function render(el) {
  mount(el, loading());
  const semNo = semFromHash();
  const d = await api.get(`rating?sem=${semNo}`);
  const me = d.me;
  const sem = d.sem;
  const tier = me ? me.tier : null;
  const nextPct = (() => {
    const cur = TIERS[tier?.index ?? 0];
    const next = TIERS[(tier?.index ?? 0) + 1];
    return next && me ? Math.round(((me.points - cur.min) / (next.min - cur.min)) * 100) : 100;
  })();
  const next = TIERS[(tier?.index ?? 0) + 1];
  const rows = (list) =>
    h("div", { class: "card table-wrap" },
      h("table", { class: "table" },
        h("thead", {}, h("tr", {}, h("th", { class: "center" }, "O'rin"), h("th", {}, "Talaba"), h("th", {}, "Daraja"), h("th", { class: "center" }, "Ball"))),
        h("tbody", {}, list.map((r) => h("tr", { class: r.me ? "me-row" : "", style: r.me ? { background: "var(--primary-soft)", fontWeight: 700 } : {} },
          h("td", { class: "center" }, MEDALS[r.rank - 1] || r.rank),
          h("td", {}, r.name, r.me && " (siz)", d.weeklyLeader && !d.weeklyLeader.me && r.name === d.weeklyLeader.name && r.group === d.group ? " 🔥" : "", r.me && d.weeklyLeader?.me ? " 🔥" : ""),
          h("td", {}, `${r.tier.icon} ${r.tier.name}`),
          h("td", { class: "center" }, fmt(r.points)))))));

  mount(el,
    h("div", { class: "page-head" }, h("div", {}, h("h1", {}, "🏆 Reyting"), h("p", { class: "muted" }, `${sem.name} · ${sem.term}`), h("p", { class: "small muted" }, `O'qish muddati: ${periodText(sem)}`))),
    semTabs(sem.no, "#/rating"),
    d.frozen && h("div", { class: "alert alert-info" }, "🏁 Semestr yakunlangan: bu — yakuniy reyting natijasi."),
    !d.group && h("div", { class: "alert alert-warn" }, "Guruhingiz belgilanmagan. Profil sahifasida guruhingizni tanlang — shunda guruh reytingida ishtirok etasiz."),
    me && h("div", { class: "grid cols-3" },
      h("div", { class: "card stat-card" }, h("div", { class: "stat-icon" }, tier.icon), h("b", {}, `${fmt(me.points)} ball`), h("span", { class: "muted small" }, tier.name)),
      h("div", { class: "card stat-card" }, h("div", { class: "stat-icon" }, MEDALS[(me.groupRank || 99) - 1] || "👥"), h("b", {}, me.groupRank ? `${me.groupRank} / ${me.groupSize}` : "—"), h("span", { class: "muted small" }, `${d.group || "guruhsiz"} guruhida o'rin`)),
      h("div", { class: "card stat-card" }, h("div", { class: "stat-icon" }, formByKey(d.form)?.icon || "🎓"), h("b", {}, me.formRank ? `${me.formRank} / ${me.formSize}` : "—"), h("span", { class: "muted small" }, `${formByKey(d.form)?.name || ""} ta'lim shaklida o'rin`))),
    me && h("div", { class: "card stack" },
      h("div", { class: "row between wrap" }, h("b", {}, next ? `Keyingi daraja: ${next.icon} ${next.name}` : "Eng yuqori darajaga erishdingiz! 💎"), next && h("span", { class: "muted small" }, `yana ${fmt(next.min - me.points)} ball`)),
      progressBar(nextPct)),
    d.weeklyLeader && h("div", { class: "alert alert-info" }, `🔥 Haftaning faol talabasi (${d.group}): `, h("b", {}, d.weeklyLeader.me ? "siz!" : d.weeklyLeader.name), ` — oxirgi 7 kunda ${d.weeklyLeader.count} ta faollik.`),
    h("section", { class: "card table-wrap" },
      h("h3", {}, "Ballaringiz qanday yig'ilgan"),
      h("table", { class: "table" }, h("thead", {}, h("tr", {}, h("th", {}, "Manba"), h("th", {}, "Qoida"), h("th", { class: "center" }, "Ball"), h("th", { class: "center" }, "Eng ko'pi"))),
        h("tbody", {}, RATING_RULES.map((r) => h("tr", {}, h("td", {}, `${r.icon} ${r.name}`), h("td", { class: "muted small" }, r.rule), h("td", { class: "center" }, h("b", {}, me ? fmt(me.breakdown[r.key] || 0) : "—")), h("td", { class: "center muted" }, r.key === "bonus" ? "cheklanmagan" : d.max?.breakdown[r.key] ? fmt(d.max.breakdown[r.key]) : "—")))),
        h("tfoot", {}, h("tr", {}, h("td", { colspan: 2 }, h("b", {}, `${sem.name} (${sem.topics[0]}–${sem.topics[1]}-mavzular): jami`)), h("td", { class: "center" }, h("b", {}, me ? fmt(me.points) : "—")), h("td", { class: "center" }, h("b", {}, d.max ? `${fmt(d.max.total)}+` : "—")))))),
    d.max && d.max.breakdown.assignment === 0 && h("p", { class: "small muted" }, `${sem.name}da 20 ballik semestr topshirig'i yo'q: ball faqat ${sem.topics[0]}–${sem.topics[1]}-mavzular bo'yicha yig'iladi.`),
    h("h2", { class: "section-title" }, `👥 ${d.group || "Guruh"} reytingi`),
    d.groupList.length ? rows(d.groupList) : emptyState("👥", "Guruh reytingi bo'sh", "Guruhingizdagi talabalar ball yig'a boshlagach, jadval shu yerda chiqadi."),
    h("h2", { class: "section-title" }, `${formByKey(d.form)?.icon || "🎓"} ${formByKey(d.form)?.name || ""} ta'lim shakli — eng yaxshi 10 talaba`),
    d.formTop.length ? rows(d.formTop) : null,
    h("section", { class: "card stack" },
      h("h2", {}, "🎁 Rag'batlantirish tizimi"),
      h("div", { class: "grid cols-2" }, REWARDS.map((r) => h("div", { class: "card" }, h("div", { class: "stat-icon" }, r.icon), h("b", {}, r.title), h("p", { class: "small muted" }, r.text)))),
      h("h3", {}, "Darajalar"),
      h("div", { class: "row wrap" }, TIERS.map((t) => h("span", { class: `chip ${me && me.tier.index >= TIERS.indexOf(t) ? "" : "chip-soft"}` }, `${t.icon} ${t.name} — ${t.min}+ ball`)))),
    h("p", { class: "small muted" }, `Reyting ${new Date(d.updatedAt).toLocaleString("uz-UZ")} holatiga ko'ra; har daqiqada yangilanadi. Ismini yashirgan talabalar «Yashirin ishtirokchi» deb ko'rsatiladi (Profil → Reytingda ismim ko'rinsin).`));
}

// ---------------- O'qituvchi ----------------

export async function teacherView(el) {
  let semNo = semFromHash();
  let groupFilter = "";
  let formFilter = "";
  let textFilter = "";
  let data = null;
  const body = h("div", { class: "stack" });

  async function load() {
    body.replaceChildren(loading());
    data = await api.get(`admin/rating?sem=${semNo}`);
    draw();
  }

  function draw() {
    const sem = data.sem;
    const matches = (r) => (!formFilter || r.form === formFilter) && (!groupFilter || r.group === groupFilter) && (!textFilter || `${r.fullName} ${r.email}`.toLowerCase().includes(textFilter));
    const byGroupRank = (a, b) => (a.group || "~").localeCompare(b.group || "~") || a.rank - b.rank;
    // Faqat talabasi bor guruhlar (ta'lim shakli tanlangan bo'lsa — shu shakldagilar), har birida talabalar soni
    const groupCount = new Map();
    for (const r of data.rows) if (!formFilter || r.form === formFilter) groupCount.set(r.group || "", (groupCount.get(r.group || "") || 0) + 1);
    const groupNames = [...groupCount.keys()].sort((a, b) => (a || "~").localeCompare(b || "~"));
    if (groupFilter && !groupCount.has(groupFilter)) groupFilter = "";
    const forms = (COURSE.studyForms || []).filter((f) => data.rows.some((r) => r.form === f.key));
    const semSel = h("select", { onchange: (e) => ((semNo = Number(e.target.value)), (groupFilter = ""), (formFilter = ""), load()) }, COURSE.semesters.map((s) => h("option", { value: s.no, selected: s.no === semNo }, `${s.name} (${s.topics[0]}–${s.topics[1]}-mavzu)`)));
    const formSel = h("select", { onchange: (e) => ((formFilter = e.target.value), (groupFilter = ""), draw()) }, h("option", { value: "" }, "Barcha ta'lim shakllari"), forms.map((f) => h("option", { value: f.key, selected: f.key === formFilter }, f.name)));
    const grpSel = h("select", { onchange: (e) => ((groupFilter = e.target.value), draw()) }, h("option", { value: "" }, `Barcha guruhlar (${[...groupCount.values()].reduce((n, v) => n + v, 0)})`), groupNames.map((g) => h("option", { value: g, selected: g === groupFilter }, `${g || "Guruhsiz"} (${groupCount.get(g)})`)));
    const search = h("input", { type: "search", placeholder: "Ism yoki email…", value: textFilter, oninput: (e) => ((textFilter = e.target.value.toLowerCase()), paintTable()) });
    const tableBox = h("div");
    const chips = h("div", { class: "row wrap" }, h("button", { class: `chip ${!groupFilter ? "" : "chip-soft"}`, onclick: () => ((groupFilter = ""), draw()) }, "Hammasi"), groupNames.map((g) => h("button", { class: `chip ${groupFilter === g ? "" : "chip-soft"}`, onclick: () => ((groupFilter = groupFilter === g ? "" : g), draw()) }, `${g || "Guruhsiz"} · ${groupCount.get(g)}`)));
    const csv = () =>
      downloadFile(`reyting-${sem.name}${groupFilter ? `-${groupFilter}` : ""}.csv`, toCSV([
        ["Guruh", "O'rin", "Talaba", "Email", "Ta'lim shakli", "Jami ball", "Daraja", ...RATING_RULES.map((r) => r.name)],
        ...data.rows.filter(matches).sort(byGroupRank).map((r) => [r.group, r.rank, r.fullName, r.email, formByKey(r.form)?.name || "", r.points, r.tier.name, ...RATING_RULES.map((x) => r.breakdown[x.key])]),
      ]));
    const bonusModal = (r) => {
      const points = h("input", { type: "number", step: 0.5, min: -50, max: 50, placeholder: "masalan: 5", required: true, style: { maxWidth: "140px" } });
      const reason = h("input", { type: "text", maxlength: 200, placeholder: "Sabab: darsdagi faol ishtirok, ijodiy ish...", required: true });
      const mine = data.bonuses.filter((b) => b.userId === r.id);
      const close = modal(`🎁 Rag'bat balli — ${r.fullName}`, h("div", { class: "stack" },
        h("p", { class: "muted small" }, `${r.group || "guruhsiz"} · hozirgi ball: ${fmt(r.points)} · ${sem.name}`),
        h("form", { class: "stack", onsubmit: async (e) => {
          e.preventDefault();
          try {
            await api.post("admin/rating/bonus", { userId: r.id, sem: sem.no, points: Number(points.value), reason: reason.value });
            toast("Rag'bat balli qo'shildi", "ok");
            close();
            load();
          } catch (ex) {
            toast(ex.message, "error");
          }
        } },
          h("div", { class: "row wrap" }, h("label", { class: "field" }, h("span", {}, "Ball (−50…+50)"), points), h("label", { class: "field grow" }, h("span", {}, "Sabab"), reason)),
          h("button", { class: "btn", type: "submit" }, "Qo'shish")),
        mine.length > 0 && h("div", {}, h("b", {}, "Oldingi rag'bat ballari"), h("ul", {}, mine.map((b) => h("li", {}, `${b.points > 0 ? "+" : ""}${fmt(b.points)} — ${b.reason} `, h("span", { class: "muted small" }, `(${b.by}, ${fmtDate(b.at)}) `), h("button", { class: "btn small ghost", onclick: async () => { await api.post("admin/rating/bonus/remove", { userId: b.userId, id: b.id }); toast("O'chirildi", "ok"); close(); load(); } }, "O'chirish")))))), { wide: true });
    };
    const paintTable = () => {
      const list = data.rows.filter(matches).sort(byGroupRank);
      const avg = list.length ? list.reduce((n, r) => n + r.points, 0) / list.length : 0;
      tableBox.replaceChildren(h("p", { class: "muted small" }, `Ko'rsatilmoqda: ${list.length} talaba${list.length ? ` · o'rtacha ball: ${fmt(avg)} · eng yuqori: ${fmt(Math.max(...list.map((r) => r.points)))}` : ""}`),
      list.length
        ? h("div", { class: "card table-wrap" }, h("table", { class: "table" },
            h("thead", {}, h("tr", {}, h("th", {}, "Guruh"), h("th", { class: "center" }, "O'rin"), h("th", {}, "Talaba"), h("th", {}, "Daraja"), h("th", { class: "center" }, "Jami"), RATING_RULES.map((r) => h("th", { class: "center", title: r.name }, r.icon)), h("th", {}, ""))),
            h("tbody", {}, list.map((r) => h("tr", {},
              h("td", {}, r.group || "—", h("div", { class: "muted small" }, formByKey(r.form)?.name || "")),
              h("td", { class: "center" }, MEDALS[r.rank - 1] || r.rank),
              h("td", {}, r.fullName, h("div", { class: "muted small" }, r.email)),
              h("td", {}, `${r.tier.icon} ${r.tier.name}`),
              h("td", { class: "center" }, h("b", {}, fmt(r.points))),
              RATING_RULES.map((x) => h("td", { class: "center small" }, fmt(r.breakdown[x.key] || 0))),
              h("td", {}, h("button", { class: "btn small ghost", title: "Rag'bat balli berish", onclick: () => bonusModal(r) }, "🎁")))))))
        : emptyState("👥", "Talabalar topilmadi")
      );
    };
    body.replaceChildren(
      h("div", { class: "row between wrap" },
        h("div", { class: "row wrap" }, semSel, formSel, grpSel, search),
        h("div", { class: "row wrap" },
          sem.ended && h("button", { class: "btn ghost", onclick: async () => { if (!confirm("Qotirilgan yakuniy natija qayta hisoblansinmi?")) return; await api.post("admin/rating/recalc", { sem: sem.no }); toast("Qayta hisoblandi", "ok"); load(); } }, "♻ Qayta hisoblash"),
          h("button", { class: "btn ghost", onclick: csv }, "⬇ CSV (Excel)"))),
      h("div", { class: `alert ${data.frozen ? "alert-info" : "alert-info"} small` }, `${sem.name} — ${sem.term}. O'qish muddati: ${periodText(sem)}.${data.frozen ? " Yakuniy natija qotirilgan." : ""} Ball qoidalari: ${RATING_RULES.map((r) => `${r.icon} ${r.name} (${r.rule})`).join("; ")}.`),
      chips,
      tableBox,
      data.bonuses.length > 0 && h("details", { class: "card" }, h("summary", {}, h("b", {}, `🎁 Berilgan rag'bat ballari (${data.bonuses.length})`)),
        h("ul", {}, data.bonuses.slice(0, 50).map((b) => h("li", {}, `${b.name} (${b.group || "—"}): ${b.points > 0 ? "+" : ""}${fmt(b.points)} — ${b.reason} `, h("span", { class: "muted small" }, `${b.by}, ${fmtDate(b.at)}`)))))
    );
    paintTable();
  }

  mount(el, body);
  await load();
}
