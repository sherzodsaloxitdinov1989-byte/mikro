import { h, mount, toast } from "../ui.js";
import { session } from "../api.js";
import { COURSE, TOPICS } from "../../data/topics.js";
const LAB = COURSE.features.lab;
import { loadProgress, topicCompletion } from "../progress.js";
import { dueCount } from "./review.js";
import { mountScene, LANDMARK_NAMES } from "../landmarks.js";
import { UPDATES, CHECKED } from "../../data/updates.js";

const SHOWCASE = [
  ["registan", "Samarqand"],
  ["khiva", "Xiva"],
  ["bukhara", "Buxoro"],
  ["guramir", "Samarqand"],
  ["shahizinda", "Samarqand"],
  ["aksaray", "Shahrisabz"],
];
const timeOfDay = () => {
  const hr = new Date().getHours();
  return hr >= 19 || hr < 6 ? "night" : hr >= 17 ? "sunset" : "day";
};

/** Bosh sahifa manzarasi: obidalar navbat bilan almashadi, sichqoncha bilan parallaks. */
function heroScene() {
  let i = 0;
  const time = timeOfDay();
  const stage = h("div", { class: "scene-stage" });
  const caption = h("div", { class: "scene-caption" });
  const dots = h("div", { class: "scene-dots", role: "tablist", "aria-label": "Obidalar" });
  let timer;
  const show = (n) => {
    i = (n + SHOWCASE.length) % SHOWCASE.length;
    const [key, city] = SHOWCASE[i];
    const layer = h("div", { class: "scene-layer entering" });
    mountScene(layer, { landmark: key, time });
    stage.append(layer);
    requestAnimationFrame(() => requestAnimationFrame(() => layer.classList.remove("entering")));
    const old = [...stage.children].slice(0, -1);
    setTimeout(() => old.forEach((o) => o.remove()), 1300);
    caption.replaceChildren(h("b", {}, LANDMARK_NAMES[key]), h("span", {}, `📍 ${city}`));
    dots.querySelectorAll("button").forEach((d, k) => d.classList.toggle("active", k === i));
    clearInterval(timer);
    timer = setInterval(() => (stage.isConnected ? show(i + 1) : clearInterval(timer)), 7000);
  };
  SHOWCASE.forEach(([key], k) => dots.append(h("button", { "aria-label": LANDMARK_NAMES[key], onclick: () => show(k) })));
  const wrap = h(
    "div",
    { class: "hero-visual scene-frame" },
    stage,
    h("div", { class: "scene-vignette", "aria-hidden": "true" }),
    caption,
    dots,
    h("a", { href: "#/topics", class: "scene-cta" }, "📚 Mavzular"),
    h("a", { href: "#/practice", class: "scene-cta second" }, "🧮 Amaliy mashg'ulotlar"),
    h("span", { class: "float-chip c1", "aria-hidden": "true" }, "🎓 Interaktiv darslik"),
    h("span", { class: "float-chip c2", "aria-hidden": "true" }, "🎮 Live"),
    h("span", { class: "float-chip c3", "aria-hidden": "true" }, "🤖 AI tekshiruv")
  );
  show(0);
  return wrap;
}

export async function render(el) {
  const user = session.user;
  await loadProgress();
  const due = user?.role === "student" ? dueCount() : 0;
  const done = TOPICS.filter((t) => topicCompletion(t) === 100).length;
  const tests = TOPICS.reduce((s, t) => s + t.quiz.length, 0);
  const questions = TOPICS.reduce((s, t) => s + t.questions.length, 0);

  const tasks = TOPICS.reduce((s, t) => s + ((t.practice?.tasks.length || 0) + (t.practice?.open?.length || 0)), 0);
  const features = [
    ["📚", "Interaktiv mavzular", `${TOPICS.length ? `${TOPICS.length} ta mavzu: ` : ""}o'quv qo'llanma matni (lotin yozuvida), dars taqdimotlari, tushunchalar, nazorat savollari, testlar va interaktiv metodlar.`, "#/topics"],
    ["🧮", "Amaliy mashg'ulotlar + AI tekshiruv", `${tasks} ta masala darhol tekshiriladi; keys va xulosalaringizni sun'iy intellekt 10 ballik mezon bo'yicha baholab, batafsil feedback beradi.`, "#/practice"],
    LAB && ["🔬", "Tahlil laboratoriyasi", "Turistik korxona balansi va moliyaviy natijalarini kiriting — 30+ koeffitsiyent, DuPont, zararsizlik nuqtasi va grafiklar avtomatik hisoblanadi; hisobotingizni AI va o'qituvchi baholaydi.", "#/lab"],
    UPDATES.length > 0 && ["🔄", "Dolzarb ma'lumotlar", `Darslikdagi eskirgan statistika va me'yoriy hujjatlar tekshirildi: ${UPDATES.length} ta yangilanish, rasmiy manbalar bilan (${CHECKED.split("-").reverse().join(".")} holatiga).`, "#/updates"],
    ["🧩", "Mustaqil ta'lim", "Shaxsiy o'quv rejasi, mustaqil ish topshiriqlari, o'qituvchi bahosi va refleksiv kundalik.", "#/self-study"],
    ["🎬", "Mediateka va audiokitob", "Animatsion darslar, dars taqdimotlari, video darslar va darslik matnini o'zbekcha AI ovozida tinglash.", "#/media"],
    ["🎮", "Live viktorina", "Sinfda Kahoot uslubidagi jonli musobaqa va so'z buluti: PIN yoki QR-kod orqali qo'shiling.", "#/live"],
  ].filter(Boolean);

  mount(
    el,
    h(
      "section",
      { class: "hero-xl" },
      h(
        "div",
        {},
        h("span", { class: "hero-chip" }, h("span", { class: "dot" }), COURSE.audience),
        h("h1", {}, h("span", { class: "gradient-text" }, COURSE.heroTitle[0]), h("br"), COURSE.heroTitle[1] || ""),
        h("p", { class: "lead" }, COURSE.description),
        h(
          "div",
          { class: "row wrap" },
          h("a", { href: "#/topics", class: "btn lg" }, "📚 O'qishni boshlash"),
          h("a", { href: "#/practice", class: "btn ghost lg" }, "🧮 Amaliy mashg'ulotlar"),
          LAB && h("a", { href: "#/lab", class: "btn ghost lg" }, "🔬 Tahlil laboratoriyasi"),
          h("a", { href: "#/live", class: "btn ghost lg" }, "🎮 Live o'yin")
        ),
        !TOPICS.length ? h("div", { class: "alert alert-info" }, "Darslik materiallarini ko'rish uchun tizimga kiring yoki ro'yxatdan o'ting.") : h(
          "div",
          { class: "counter-row" },
          [[TOPICS.length, "mavzu"], [tests, "test savoli"], [tasks, "amaliy topshiriq"], [questions, "nazorat savoli"]].map(([n, l]) => h("div", { class: "counter" }, h("b", { "data-count": n }, "0"), h("span", {}, l)))
        )
      ),
      heroScene()
    ),
    user &&
      h(
        "div",
        { class: "card hero-card accent" },
        h("div", { class: "row between wrap" },
          h("div", { class: "row home-me" },
            h("div", {}, h("div", { class: "eyebrow" }, "Shaxsiy kabinet"), h("h3", {}, `Xush kelibsiz, ${user.name.split(" ")[0]}!`), h("p", { class: "muted small" }, `${done} / ${TOPICS.length} mavzu to'liq o'zlashtirildi`))),
          h("div", { class: "row wrap" },
            user.role === "student" && h("a", { href: "#/review", class: `btn ${due ? "" : "ghost"}` }, `🔁 Takrorlash${due ? ` (${due})` : ""}`),
            h("a", { href: user.role === "teacher" ? "#/teacher" : "#/self-study", class: "btn" }, user.role === "teacher" ? "O'qituvchi paneli" : "O'quv rejam"),
            user.role === "student" && LAB && h("a", { href: "#/lab", class: "btn ghost" }, "🔬 Laboratoriya")))
      ),
    !user &&
      h("div", { class: "card hero-card accent" }, h("div", { class: "row between wrap" }, h("div", {}, h("h3", {}, "Profilingizni yarating"), h("p", { class: "muted small" }, "Email va parol orqali ro'yxatdan o'ting: progressingiz saqlanadi, AI tekshiruv, mustaqil ta'lim va reyting ochiladi.")), h("div", { class: "row" }, h("a", { href: "#/register", class: "btn" }, "Ro'yxatdan o'tish"), h("a", { href: "#/login", class: "btn ghost" }, "Kirish")))),
    !user && (COURSE.studyForms || []).length > 0 && h("section", { class: "stack" }, h("h2", { class: "section-title" }, "Ta'lim shakllari"), h("div", { class: "grid cols-2" }, COURSE.studyForms.map((f) => h("a", { class: "card feature-card", href: `#/register?form=${f.key}` }, h("div", { class: "stat-icon" }, f.icon || "🎓"), h("h3", {}, f.title), h("p", { class: "muted small" }, `Guruhlar: ${f.groups.join(", ")}`), h("span", { class: "btn small" }, "Ro'yxatdan o'tish →"))))),
    inviteCard(user),
    h("h2", { class: "section-title" }, "Platforma imkoniyatlari"),
    h("section", { class: "grid cols-3" }, features.map(([icon, title, text, href]) => h("a", { href, class: "card feature tilt" }, h("div", { class: "feature-icon" }, icon), h("h3", {}, title), h("p", { class: "muted small" }, text)))),
    h(
      "section",
      { class: "card how" },
      h("h2", {}, "Platformada qanday o'qiladi?"),
      h(
        "ol",
        { class: "timeline" },
        [
          ["Nazariya", "Mavzuni darslik matni, dars taqdimoti yoki animatsion dars orqali o'rganing; “Dolzarb” belgilarida eskirgan ma'lumotlarning yangi qiymatini ko'ring."],
          ["Mustahkamlash", "Tushunchalar kartalari, nazorat savollari va test (o'tish balli 60%)."],
          ["Amaliy mashg'ulot", "Masalalarni yeching — javob darhol tekshiriladi; keys va xulosani yozib, AI dan 10 ballik feedback oling."],
          LAB && ["Tahlil laboratoriyasi", "Namuna yoki real korxonaning kompleks moliyaviy tahlilini bajarib, hisobotni AI va o'qituvchiga topshiring."],
          ["Natija", "Semestr oxirida ma'ruza va amaliy mashg'ulot ballari bo'yicha natijangizni PDF qilib yuklab oling."],
        ].filter(Boolean).map(([t, d], i) => h("li", { class: "reveal" }, h("span", { class: "t-num" }, i + 1), h("b", {}, t), h("p", { class: "muted small" }, d)))
      )
    )
  );
}

/** Asosiy oynada: saytga taklif havolasi (nusxalash, ulashish, QR-kod). Manzil joriy domendan olinadi. */
function inviteCard(user) {
  const url = `${location.origin}/`;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast("Havola nusxalandi", "ok");
    } catch {
      input.select();
      toast("Havolani belgilab nusxalang (Ctrl+C)", "warn");
    }
  };
  const input = h("input", { type: "text", readonly: true, value: url, class: "grow", "aria-label": "Sayt taklif havolasi", onfocus: (e) => e.target.select() });
  const text = `${COURSE.brand} — “${COURSE.title}” interaktiv ta'lim platformasi`;
  return h("section", { class: "card hero-card invite-card" },
    h("div", { class: "row between wrap" },
      h("div", {},
        h("div", { class: "eyebrow" }, "🔗 Sayt taklif havolasi"),
        h("h3", {}, user?.role === "teacher" ? "Talabalarga havolani yuboring" : "Guruhdoshlaringizni taklif qiling"),
        h("p", { class: "muted small" }, "Havolani bosib ochgan kishi ro'yxatdan o'tadi yoki tizimga kiradi. Telefon kamerasi bilan kirish uchun QR-kod ham bor.")),
      h("div", { class: "row wrap", style: { flex: "1 1 360px", justifyContent: "flex-end" } },
        input,
        h("button", { class: "btn", onclick: copy }, "📋 Nusxalash"),
        h("a", { class: "btn ghost", href: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, target: "_blank", rel: "noopener noreferrer" }, "✈️ Telegram"),
        navigator.share && h("button", { class: "btn ghost", onclick: () => navigator.share({ title: COURSE.brand, text, url }).catch(() => {}) }, "📤 Ulashish"),
        h("a", { class: "btn ghost", href: "#/qr" }, "📱 QR-kod"))));
}
