// Ilova marshrutizatori va navigatsiya.
import { h, mount, errorBox } from "./ui.js";
import { session } from "./api.js";
import { userHasContent, subjectOfGroup, SUBJECTS, hasAssignment } from "../data/course.js";
import { watch, transition, initTopbar } from "./motion.js";
import { initCelebrations } from "./celebrate.js";
import { initTools } from "./search.js";
import { initLightbox } from "./media.js";
import * as home from "./pages/home.js";
import * as auth from "./pages/auth.js";
import * as topics from "./pages/topics.js";
import * as selfStudy from "./pages/selfstudy.js";
import * as assignment from "./pages/assignment.js";
import * as tasks from "./pages/tasks.js";
import * as meets from "./pages/meets.js";
import * as subject from "./pages/subject.js";
import * as rating from "./pages/rating.js";
import * as teacher from "./pages/teacher.js";
import * as profile from "./pages/profile.js";
import * as passport from "./pages/passport.js";
import * as review from "./pages/review.js";
import * as cert from "./pages/cert.js";
import * as media from "./pages/media.js";
import * as live from "./pages/live.js";
import * as practice from "./pages/practice.js";
import * as lab from "./pages/lab.js";
import * as updates from "./pages/updates.js";
import * as qr from "./pages/qr.js";
import { UPDATES } from "../data/updates.js";
import { TOPICS, COURSE, SUBJECT_KEY } from "../data/topics.js";
import { initContentGuard } from "./guard.js";
import { initSecurityAlerts } from "./alerts.js";
import { initSecureMode, setRouteSecure } from "./secure.js";

const routes = [
  [/^\/?$/, home.render],
  [/^\/login$/, auth.renderLogin],
  [/^\/ustoz$/, auth.renderTeacherLogin],
  [/^\/ustoz\/register$/, auth.renderTeacherRegister],
  [/^\/ustoz\/forgot$/, auth.renderTeacherForgot],
  [/^\/register$/, auth.renderRegister],
  [/^\/forgot$/, auth.renderForgot],
  [/^\/topics$/, topics.renderList],
  [/^\/topics\/([\w-]+)$/, topics.renderTopic],
  [/^\/practice$/, practice.renderList],
  [/^\/practice\/([\w-]+)$/, practice.renderTopic],
  [/^\/lab$/, lab.renderList, { auth: true }],
  [/^\/lab\/([\w-]+)$/, lab.renderProject, { auth: true }],
  [/^\/updates$/, updates.render],
  [/^\/self-study$/, selfStudy.render, { auth: true, student: "#/teacher/self-study" }],
  [/^\/rating$/, rating.render, { auth: true, student: "#/teacher/rating" }],
  [/^\/fan(?:\/([\w-]+))?$/, subject.render, { auth: true }],
  [/^\/meets$/, meets.render, { auth: true, student: "#/teacher/meets" }],
  [/^\/tasks$/, tasks.render, { auth: true, student: "#/teacher/tasks" }],
  [/^\/tasks\/([\w-]+)$/, tasks.renderTask, { auth: true, student: "#/teacher/tasks" }],
  [/^\/assignment$/, assignment.render, { auth: true, student: "#/teacher/assignment" }],
  [/^\/assignment\/(\d{1,2})$/, assignment.renderStage, { auth: true, student: "#/teacher/assignment" }],
  [/^\/teacher(?:\/([\w-]+))?(?:\/([\w-]+))?$/, teacher.render, { teacher: true }],
  [/^\/profile$/, profile.render, { auth: true }],
  [/^\/passport$/, passport.render, { auth: true }],
  [/^\/review$/, review.render],
  [/^\/media$/, media.render],
  [/^\/live$/, live.renderJoin],
  [/^\/live\/play\/(\d{6})$/, live.renderPlay],
  [/^\/live\/host\/(\d{6})$/, live.renderHost, { teacher: true }],
  [/^\/cert\/([\w-]+)$/, cert.render],
  [/^\/qr$/, qr.render],
];

const NAV = [
  ["#/topics", "Mavzular", "📚"],
  ["#/practice", "Amaliyot", "🧮"],
  COURSE.features.lab && ["#/lab", "Laboratoriya", "🔬"],
  ["#/media", "Mediateka", "🎬"],
  ["#/assignment", "Topshiriq", "📝"],
  ["#/tasks", "Vazifalar", "🗂️"],
  ["#/meets", "Jonli dars", "📹"],
  ["#/rating", "Reyting", "🏆"],
  ["#/self-study", "Mustaqil ta'lim", "🧩"],
  UPDATES.length > 0 && ["#/updates", "Dolzarb", "🔄"],
].filter(Boolean);

const main = document.getElementById("main");
const nav = document.getElementById("nav");
const toggle = document.querySelector(".menu-toggle");
let cleanup = null;

function renderNav() {
  const path = location.hash || "#/";
  const user = session.user;
  const isTeacher = user?.role === "teacher";
  document.documentElement.dataset.role = user ? user.role : "guest";
  // Talabaga xos bo'limlar (topshiriq, mustaqil ta'lim) o'qituvchi menyusida ko'rinmaydi: ular uchun o'qituvchi panelida alohida bo'lim bor.
  const STUDENT_ONLY = ["#/assignment", "#/tasks", "#/meets", "#/self-study", "#/rating"];
  let items = NAV.filter(([href]) => !(isTeacher && STUDENT_ONLY.includes(href)) && !(user && !isTeacher && href === "#/assignment" && !hasAssignment(user.group))); // 20 ballik topshiriq — faqat 331–334-25
  const stu = user && !isTeacher ? subjectOfGroup(user.group) : null;
  const ownSubject = stu && stu.key !== SUBJECTS[0].key ? stu : null; // asosiy fandan boshqa fan talabasi
  if (ownSubject) {
    // Asosiy fanning 3-semestr topshirig'i, reytingi va dolzarb ma'lumotlari unga ko'rinmaydi; fan sahifasi (semestr, guruh reytingi) qo'shiladi
    items = items.filter(([href]) => !["#/assignment", "#/rating", "#/updates"].includes(href));
    items.unshift(["#/fan", ownSubject.title, ownSubject.icon]);
    if (!ownSubject.hasContent) items = [items[0], ["#/tasks", "Vazifalar", "🗂️"], ["#/meets", "Jonli dars", "📹"]];
  } else if (isTeacher) items.splice(1, 0, ["#/fan", "Fanlar", "🧭"]);
  // Pastki qism: boshqa fan talabasiga asosiy fan darsligi haqidagi ma'lumot ko'rsatilmaydi
  const foot = document.querySelector(".footer-inner");
  if (foot) {
    foot.dataset.orig ||= foot.innerHTML;
    foot.innerHTML = foot.dataset.orig;
    if (ownSubject) {
      foot.replaceChildren(h("span", {}, `© 2026 MikroAkademiya — ${ownSubject.title}`), h("span", { class: "muted" }, ownSubject.hasContent && COURSE.source ? `${ownSubject.direction} yo'nalishi · Manba: ${COURSE.source}` : `${ownSubject.direction} yo'nalishi · ${ownSubject.groups.join(", ")} guruhlari`));
    }
  }
  if (isTeacher) items.push(["#/teacher", "O'qituvchi paneli", "👩‍🏫"]);
  else if (user && (!ownSubject || ownSubject.hasContent)) items.push(["#/passport", ownSubject ? COURSE.passportName : "Talaba pasporti", "🛂"]);
  const active = (href) => (href === "#/" ? path === "#/" || path === "" : path.startsWith(href));
  // O'qituvchi uchun fan almashtirgich: tanlangan fan mavzulari, testlari va materiallari bilan ishlaydi (sahifa qayta yuklanadi)
  const switcher = isTeacher && SUBJECTS.length > 1
    ? h("select", { class: "subject-switch", title: "Fan", "aria-label": "Fan", onchange: (e) => {
        try { localStorage.setItem("tt.subject", e.target.value); sessionStorage.setItem("tt.subject-picked", "1"); } catch {}
        location.reload();
      } }, SUBJECTS.map((s) => h("option", { value: s.key, selected: s.key === SUBJECT_KEY }, `${s.icon} ${s.title}`)))
    : null;
  mount(
    nav,
    items.map(([href, label, icon]) => h("a", { href, class: active(href) ? "active" : "" }, h("span", { class: "nav-icon" }, icon), label)),
    switcher,
    user
      ? h("a", { href: "#/profile", class: `nav-user ${active("#/profile") ? "active" : ""}` }, h("span", { class: "avatar" }, user.name.slice(0, 1).toUpperCase()), h("span", { class: "nav-user-name" }, user.name.split(" ")[0]), h("span", { class: `role-chip ${isTeacher ? "teacher" : "student"}` }, isTeacher ? "O'qituvchi" : "Talaba"))
      : h("a", { href: "#/login", class: "btn small" }, "Kirish")
  );
}

async function route() {
  if (cleanup) {
    try { cleanup(); } catch {}
    cleanup = null;
  }
  const path = (location.hash || "#/").slice(1).split("?")[0];
  document.body.classList.remove("nav-open");
  // Jonli viktorina — to'liq ekranli o'yin rejimi (menyu va pastki panelsiz)
  document.body.classList.toggle("live-mode", /^\/live(\/|$)/.test(path));
  // Katta ekrandagi QR-kod — menyusiz, butun ekranni egallaydi
  document.body.classList.toggle("qr-mode", path === "/qr");
  document.body.classList.toggle("cert-mode", /^\/cert\//.test(path));
  document.querySelectorAll(".modal-overlay").forEach((m) => m.remove());
  toggle.setAttribute("aria-expanded", "false");
  renderNav();
  // Test va topshiriq sahifalarida ekran surati himoyasi
  setRouteSecure(/^\/(assignment|tasks|practice\/|live\/play\/)/.test(path));
  // Darslik materiallari faqat tizimga kirgan foydalanuvchiga ko'rsatiladi
  const PUBLIC = /^\/(login|register|forgot|ustoz|ustoz\/register|ustoz\/forgot|qr)?$|^\/cert\/|^\/live(\/|$)/;
  if (!session.user && !PUBLIC.test(path)) {
    sessionStorage.setItem("tt.after-login", location.hash);
    location.hash = /^\/(teacher|live\/host)/.test(path) ? "#/ustoz" : "#/login";
    return;
  }
  // Boshqa fan talabasi asosiy fan bo'limlariga kirmaydi: o'z fani sahifasiga yo'naltiriladi
  if (session.user && session.user.role === "student") {
    const su = subjectOfGroup(session.user.group);
    const other = su.key !== SUBJECTS[0].key;
    const closed = !su.hasContent && (path === "/" || path === "" || /^\/(topics|practice|lab|media|self-study|updates)(\/|$)/.test(path));
    if (closed || (other && /^\/(assignment|rating|lab|updates)(\/|$)/.test(path))) {
      location.hash = "#/fan";
      return;
    }
  }
  for (const [pattern, fn, opts = {}] of routes) {
    const m = path.match(pattern);
    if (!m) continue;
    if ((opts.auth || opts.teacher) && !session.user) {
      sessionStorage.setItem("tt.after-login", location.hash);
      location.hash = opts.teacher ? "#/ustoz" : "#/login";
      return;
    }
    if (opts.student && session.user.role === "teacher") {
      location.hash = opts.student;
      return;
    }
    if (opts.teacher && session.user.role !== "teacher") {
      mount(main, errorBox(new Error("Bu bo'lim faqat o'qituvchilar uchun.")));
      return;
    }
    await transition(() => {
      main.replaceChildren();
      window.scrollTo(0, 0);
    });
    try {
      cleanup = (await fn(main, ...m.slice(1))) || null;
    } catch (e) {
      console.error(e);
      mount(main, errorBox(e));
    }
    main.focus({ preventScroll: true });
    return;
  }
  mount(main, h("div", { class: "empty" }, h("div", { class: "empty-icon" }, "🧭"), h("h3", {}, "Sahifa topilmadi"), h("a", { href: "#/", class: "btn" }, "Bosh sahifaga")));
}

toggle.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", String(open));
});
window.addEventListener("hashchange", route);
window.addEventListener("tt:auth", renderNav);
main.setAttribute("tabindex", "-1");
initTopbar();
initTools();
initCelebrations();
initLightbox();
watch(main);
initContentGuard();
initSecureMode();
initSecurityAlerts();
// Oldin kirgan foydalanuvchida himoya cookie'si bo'lmasligi mumkin: bir marta o'rnatib, sahifani qayta yuklaymiz
if (session.token && userHasContent(session.user) && !TOPICS.length && !sessionStorage.getItem("tt.cookie-try")) {
  sessionStorage.setItem("tt.cookie-try", "1");
  fetch("/api/auth/session", { method: "POST", headers: { authorization: `Bearer ${session.token}` } }).finally(() => location.reload());
} else {
  route();
}

// ---------- Ilova (PWA): o'rnatish va internetsiz rejim ----------
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}));
}
const offlineBar = h("div", { class: "offline-bar", role: "status" }, "📴 Internet aloqasi yo'q — oldin ochilgan mavzular va taqdimotlar oflayn ishlaydi. Natijalar aloqa tiklangach saqlanadi.");
const syncOnline = () => (navigator.onLine ? offlineBar.remove() : document.body.append(offlineBar));
window.addEventListener("online", syncOnline);
window.addEventListener("offline", syncOnline);
syncOnline();
let installEvent = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  installEvent = e;
  if (document.querySelector(".install-btn")) return;
  const btn = h("button", { class: "icon-btn tool-btn install-btn", title: "Ilovani o'rnatish", "aria-label": "Ilovani o'rnatish", onclick: async () => {
    installEvent?.prompt();
    await installEvent?.userChoice;
    installEvent = null;
    btn.remove();
  } }, "📲");
  document.querySelector(".topbar-tools")?.prepend(btn);
});
