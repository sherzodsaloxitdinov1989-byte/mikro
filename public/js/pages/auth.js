import { h, mount, toast } from "../ui.js";
import { api, session } from "../api.js";

function afterLogin() {
  const next = sessionStorage.getItem("tt.after-login");
  sessionStorage.removeItem("tt.after-login");
  location.hash = next || (session.isTeacher ? "#/teacher" : "#/");
}

function field(label, attrs) {
  return h("label", { class: "field" }, h("span", {}, label), h("input", attrs));
}

export function renderLogin(el) {
  if (session.user) return afterLogin();
  const err = h("div");
  let role = "student";
  const ROLES = { student: ["🎓", "Talaba", "Talaba sifatida kirish", "Mavzular, topshiriq, testlar va natijalaringiz."], teacher: ["👩‍🏫", "O'qituvchi", "O'qituvchi sifatida kirish", "Baholash, talabalar va o'qituvchi paneli."] };
  const title = h("h1", {});
  const hint = h("p", { class: "muted" });
  const tabs = h("div", { class: "segmented role-switch" }, Object.entries(ROLES).map(([r, [icon, label]]) => h("label", { class: `seg ${r === role ? "active" : ""}` }, h("input", { type: "radio", name: "loginRole", value: r, checked: r === role, onchange: () => { role = r; paint(); } }), `${icon} ${label}`)));
  const paint = () => {
    tabs.querySelectorAll(".seg").forEach((s) => s.classList.toggle("active", s.querySelector("input").value === role));
    title.textContent = ROLES[role][2];
    hint.textContent = ROLES[role][3] + " Email va parolingizni kiriting.";
    err.replaceChildren();
  };
  const form = h(
    "form",
    { class: "card auth-card", onsubmit: async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const btn = form.querySelector("button");
      btn.disabled = true;
      err.replaceChildren();
      try {
        const res = await api.post("auth/login", { email: fd.get("email"), password: fd.get("password") });
        if (res.user.role !== role) {
          const actual = ROLES[res.user.role][1];
          err.replaceChildren(h("div", { class: "alert alert-error" }, `Bu profil «${actual}» profili. Yuqoridagi «${ROLES[res.user.role][0]} ${actual}» tugmasini tanlab, qayta kiring.`));
          return;
        }
        session.set(res.token, res.user);
        toast("Xush kelibsiz!", "ok");
        afterLogin();
      } catch (ex) {
        err.replaceChildren(h("div", { class: "alert alert-error" }, ex.message));
      } finally {
        btn.disabled = false;
      }
    } },
    tabs,
    title,
    hint,
    field("Email", { name: "email", type: "email", required: true, autocomplete: "email" }),
    field("Parol", { name: "password", type: "password", required: true, autocomplete: "current-password" }),
    h("p", { class: "small", style: { margin: "-6px 0 0", textAlign: "right" } }, h("a", { href: "#/forgot" }, "Parolni unutdingizmi?")),
    err,
    h("button", { class: "btn block lg", type: "submit" }, "Kirish"),
    h("p", { class: "center muted" }, "Profilingiz yo'qmi? ", h("a", { href: "#/register" }, "Ro'yxatdan o'ting"))
  );
  paint();
  mount(el, h("div", { class: "auth-wrap" }, form));
}

/** Parolni tiklash: email → pochtaga kelgan 6 xonali kod → yangi parol. Talaba ham, o'qituvchi ham shu yo'ldan foydalanadi. */
export async function renderForgot(el) {
  if (session.user) return afterLogin();
  let config = {};
  try {
    config = await api.get("config");
  } catch {}
  if (!config.mailEnabled) return renderForgotLegacy(el);

  const err = h("div");
  const card = h("div", { class: "card auth-card" });
  let email = "";
  let timer = null;

  const alertErr = (msg) => err.replaceChildren(h("div", { class: "alert alert-error" }, msg));

  function stepEmail() {
    clearInterval(timer);
    const input = h("input", { name: "email", type: "email", required: true, autocomplete: "email", value: email, placeholder: "ro'yxatdan o'tgan email" });
    const form = h("form", { class: "stack", onsubmit: async (e) => {
      e.preventDefault();
      email = input.value.trim().toLowerCase();
      const btn = form.querySelector("button");
      btn.disabled = true;
      err.replaceChildren();
      try {
        const res = await api.post("auth/forgot", { email });
        stepCode(res.resendAfterSec || 60, res.expiresInMin || 10);
      } catch (ex) {
        alertErr(ex.message);
        btn.disabled = false;
      }
    } },
      h("label", { class: "field" }, h("span", {}, "Email"), input),
      err,
      h("button", { class: "btn block lg", type: "submit" }, "Tasdiqlash kodini yuborish"));
    card.replaceChildren(
      h("h1", {}, "Parolni tiklash"),
      h("p", { class: "muted" }, "Talaba va o'qituvchi uchun bir xil: ro'yxatdan o'tgan emailingizni kiriting, pochtangizga 6 xonali tasdiqlash kodi yuboramiz. Eski parol kerak emas."),
      form,
      h("p", { class: "center muted" }, h("a", { href: "#/login" }, "← Kirish sahifasiga qaytish")));
  }

  function stepCode(resendAfter, minutes) {
    let left = resendAfter;
    const code = h("input", { name: "code", inputmode: "numeric", autocomplete: "one-time-code", maxlength: 6, required: true, placeholder: "______", style: { letterSpacing: "8px", fontSize: "1.4rem", textAlign: "center" } });
    const p1 = h("input", { type: "password", name: "newPassword", required: true, minlength: 6, autocomplete: "new-password" });
    const p2 = h("input", { type: "password", name: "newPassword2", required: true, minlength: 6, autocomplete: "new-password" });
    const resend = h("button", { type: "button", class: "btn ghost small", disabled: true }, "");
    const paint = () => {
      resend.disabled = left > 0;
      resend.textContent = left > 0 ? `Kodni qayta yuborish (${left} s)` : "Kodni qayta yuborish";
    };
    paint();
    clearInterval(timer);
    timer = setInterval(() => {
      if (!document.body.contains(card)) return clearInterval(timer);
      left = Math.max(0, left - 1);
      paint();
      if (!left) clearInterval(timer);
    }, 1000);
    resend.addEventListener("click", async () => {
      resend.disabled = true;
      err.replaceChildren();
      try {
        const res = await api.post("auth/forgot", { email });
        left = res.resendAfterSec || 60;
        toast("Yangi kod yuborildi", "ok");
        clearInterval(timer);
        timer = setInterval(() => ((left = Math.max(0, left - 1)), paint(), !left && clearInterval(timer)), 1000);
      } catch (ex) {
        alertErr(ex.message);
        left = 0;
      }
      paint();
    });
    const form = h("form", { class: "stack", onsubmit: async (e) => {
      e.preventDefault();
      err.replaceChildren();
      if (p1.value !== p2.value) return alertErr("Parollar mos kelmadi");
      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      try {
        const res = await api.post("auth/reset-code", { email, code: code.value, newPassword: p1.value });
        session.set(res.token, res.user);
        toast("Parol yangilandi. Xush kelibsiz!", "ok");
        afterLogin();
      } catch (ex) {
        alertErr(ex.message);
        btn.disabled = false;
      }
    } },
      h("div", { class: "alert alert-info small" }, `📧 ${email} manziliga 6 xonali kod yuborildi (${minutes} daqiqa amal qiladi). Kelmasa, “Spam” papkasini tekshiring. Bu email ro'yxatdan o'tmagan bo'lsa, kod kelmaydi.`),
      h("label", { class: "field" }, h("span", {}, "Tasdiqlash kodi"), code),
      h("div", { class: "grid cols-2" },
        h("label", { class: "field" }, h("span", {}, "Yangi parol"), p1),
        h("label", { class: "field" }, h("span", {}, "Yangi parolni takrorlang"), p2)),
      err,
      h("button", { class: "btn block lg", type: "submit" }, "Parolni yangilash va kirish"),
      h("div", { class: "row between wrap" }, resend, h("button", { type: "button", class: "btn ghost small", onclick: () => (err.replaceChildren(), stepEmail()) }, "Emailni o'zgartirish")));
    card.replaceChildren(h("h1", {}, "Kodni kiriting"), form);
    code.focus();
  }

  stepEmail();
  mount(el, h("div", { class: "auth-wrap" }, card));
}

function renderForgotLegacy(el) {
  const err = h("div");
  const form = h(
    "form",
    { class: "stack", onsubmit: async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      err.replaceChildren();
      if (fd.get("newPassword") !== fd.get("newPassword2")) return err.replaceChildren(h("div", { class: "alert alert-error" }, "Parollar mos kelmadi"));
      const btn = form.querySelector("button[type=submit]");
      const send = async (as) => {
        btn.disabled = true;
        try {
          const res = await api.post("auth/reset", { email: fd.get("email"), teacherCode: fd.get("teacherCode"), newPassword: fd.get("newPassword"), as });
          session.set(res.token, res.user);
          toast(as === "teacher" ? "Profil o'qituvchi profiliga aylantirildi, parol yangilandi!" : "Parol yangilandi. Xush kelibsiz!", "ok");
          afterLogin();
        } catch (ex) {
          err.replaceChildren(
            ex.data?.needsChoice
              ? h("div", { class: "alert alert-warn stack" },
                  h("div", {}, h("b", {}, `${ex.data.name || fd.get("email")}: `), ex.message),
                  h("div", { class: "row wrap" },
                    h("button", { type: "button", class: "btn", onclick: () => send("teacher") }, "👩‍🏫 O'qituvchi profiliga aylantirish"),
                    h("button", { type: "button", class: "btn ghost", onclick: () => send("student") }, "🎓 Faqat parolni yangilash")))
              : h("div", { class: "alert alert-error" }, ex.message)
          );
        } finally {
          btn.disabled = false;
        }
      };
      await send();
    } },
    field("Email", { name: "email", type: "email", required: true, autocomplete: "email" }),
    field("O'qituvchi kodi", { name: "teacherCode", type: "password", required: true, autocomplete: "off" }),
    h("p", { class: "muted small" }, "Ro'yxatdan o'tishda kiritilgan kod. U Netlify sozlamalarida saqlanadi: Site configuration → Environment variables → TEACHER_CODE."),
    h("div", { class: "grid cols-2" }, field("Yangi parol", { name: "newPassword", type: "password", required: true, minlength: 6, autocomplete: "new-password" }), field("Yangi parolni takrorlang", { name: "newPassword2", type: "password", required: true, minlength: 6, autocomplete: "new-password" })),
    err,
    h("button", { class: "btn block lg", type: "submit" }, "Parolni yangilash va kirish")
  );
  mount(
    el,
    h("div", { class: "auth-wrap" },
      h("div", { class: "card auth-card" },
        h("h1", {}, "Parolni tiklash"),
        h("div", { class: "alert alert-info" }, h("b", {}, "🎓 Talabamisiz? "), "O'qituvchingizga murojaat qiling — u panelning “Talabalar” bo'limida 🔑 tugmasi orqali sizga vaqtinchalik parol beradi. Kirgach, uni Profil sahifasida o'zgartiring."),
        h("div", { class: "alert alert-warn small" }, "Elektron pochta orqali tiklash hali ulanmagan (administrator BREVO_API_KEY va MAIL_FROM ni sozlashi kerak). Hozircha quyidagi usul ishlaydi."),
        h("h3", {}, "👩‍🏫 O'qituvchi uchun"),
        form,
        h("p", { class: "center muted" }, h("a", { href: "#/login" }, "← Kirish sahifasiga qaytish"))))
  );
}

/** Tajriba (TG) yoki nazorat (NG) guruhini tanlash kartalari. */
export function cohortPicker(name = "cohort") {
  const options = [
    ["experimental", "🧪", "Tajriba guruhi (TG)", "Platforma va AI tekshiruv asosida o'qiyman."],
    ["control", "📘", "Nazorat guruhi (NG)", "An'anaviy usulda o'qiyman."],
  ];
  const wrap = h(
    "fieldset",
    { class: "cohort-pick" },
    h("legend", {}, "Siz qaysi guruhdasiz?"),
    h("div", { class: "choice-cards" },
      options.map(([value, icon, title, text]) =>
        h("label", { class: "choice-card" },
          h("input", { type: "radio", name, value, onchange: () => wrap.querySelectorAll(".choice-card").forEach((c) => c.classList.toggle("active", c.querySelector("input").checked)) }),
          h("span", { class: "choice-icon" }, icon),
          h("b", {}, title),
          h("small", { class: "muted" }, text)))),
    h("p", { class: "muted small" }, "Guruhingizni o'qituvchingizdan aniqlang. Keyinchalik uni faqat o'qituvchi o'zgartira oladi.")
  );
  return wrap;
}

/** O'qituvchi ro'yxatdan o'tishi: ruxsat etilgan email + emailga kelgan kod (zaxira: umumiy o'qituvchi kodi). */
function teacherBlock(config, getEmail) {
  const box = h("div", { class: "hidden stack" });
  if (config.teacherByEmail) {
    const code = h("input", { name: "emailCode", inputmode: "numeric", autocomplete: "one-time-code", maxlength: 6, placeholder: "______", style: { letterSpacing: "6px", textAlign: "center" } });
    const status = h("p", { class: "muted small" }, "Emailingiz o'qituvchi sifatida ruxsat etilgan bo'lishi kerak (mavjud o'qituvchi sizni panelda qo'shadi). Yuqorida emailingizni yozib, «Kod yuborish» ni bosing.");
    const send = h("button", { type: "button", class: "btn ghost small" }, "📧 Tasdiqlash kodini yuborish");
    let timer = null;
    send.addEventListener("click", async () => {
      const email = getEmail();
      if (!email) return status.replaceChildren("Avval emailingizni kiriting.");
      send.disabled = true;
      try {
        const res = await api.post("auth/teacher-code", { email });
        status.replaceChildren(`📧 ${email} manziliga 6 xonali kod yuborildi (${res.expiresInMin} daqiqa amal qiladi). Kelmasa, «Spam» papkasini tekshiring.`);
        let left = res.resendAfterSec || 60;
        clearInterval(timer);
        timer = setInterval(() => {
          left--;
          send.textContent = left > 0 ? `Qayta yuborish (${left} s)` : "📧 Kodni qayta yuborish";
          if (left <= 0) (clearInterval(timer), (send.disabled = false));
        }, 1000);
        code.focus();
      } catch (ex) {
        status.replaceChildren(h("span", { class: "alert alert-error small" }, ex.message));
        send.disabled = false;
      }
    });
    box.append(status, send, h("label", { class: "field" }, h("span", {}, "Emailga kelgan kod"), code));
  }
  if (config.teacherByCode) {
    const codeField = field("O'qituvchi kodi", { name: "teacherCode", type: "password", autocomplete: "off" });
    box.append(config.teacherByEmail ? h("details", {}, h("summary", { class: "small" }, "Menda o'qituvchi kodi bor"), codeField) : h("div", {}, codeField, h("p", { class: "muted small" }, "Kodni platforma administratoridan oling.")));
  }
  return box;
}

export async function renderRegister(el) {
  if (session.user) return afterLogin();
  let config = { teacherSignup: false };
  try {
    config = await api.get("config");
  } catch {}
  const err = h("div");
  const teacherFields = teacherBlock(config, () => form.querySelector("input[name=email]").value.trim().toLowerCase());
  const studentFields = h("div", {}, (config.groups?.length ? h("label", { class: "field" }, h("span", {}, `Guruh${config.studyForm ? ` (${config.studyForm.toLowerCase()} ta'lim)` : ""}`), h("select", { name: "group" }, h("option", { value: "" }, "Guruhingizni tanlang"), config.groups.map((g) => h("option", { value: g }, g)))) : field("Guruh", { name: "group", placeholder: "Masalan: TUR-401", maxlength: 60 })));
  const form = h(
    "form",
    { class: "card auth-card", onsubmit: async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      if (fd.get("password") !== fd.get("password2")) {
        err.replaceChildren(h("div", { class: "alert alert-error" }, "Parollar mos kelmadi"));
        return;
      }
      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      err.replaceChildren();
      try {
        const res = await api.post("auth/register", Object.fromEntries(fd));
        session.set(res.token, res.user);
        toast("Profil yaratildi!", "ok");
        afterLogin();
      } catch (ex) {
        err.replaceChildren(h("div", { class: "alert alert-error" }, ex.message));
      } finally {
        btn.disabled = false;
      }
    } },
    h("h1", {}, "Ro'yxatdan o'tish"),
    config.teacherSignup &&
      h(
        "div",
        { class: "segmented role-switch" },
        ["student", "teacher"].map((r, i) =>
          h("label", { class: `seg ${i === 0 ? "active" : ""}` }, h("input", { type: "radio", name: "role", value: r, checked: i === 0, onchange: (e) => {
            form.querySelectorAll(".role-switch .seg").forEach((s) => s.classList.toggle("active", s.contains(e.target)));
            teacherFields.classList.toggle("hidden", r !== "teacher");
            studentFields.classList.toggle("hidden", r === "teacher");
          } }), r === "student" ? "🎓 Talaba" : "👩‍🏫 O'qituvchi")
        )
      ),
    field("Ism-familiya", { name: "name", required: true, maxlength: 120, autocomplete: "name" }),
    field("Email", { name: "email", type: "email", required: true, autocomplete: "email" }),
    field("Ta'lim muassasasi", { name: "college", placeholder: "Masalan: O'zMU Jizzax filiali", maxlength: 160, list: "college-list", autocomplete: "off" }),
    h("datalist", { id: "college-list" }, (config.colleges || []).map((c) => h("option", { value: c }))),
    studentFields,
    teacherFields,
    h("div", { class: "grid cols-2" }, field("Parol", { name: "password", type: "password", required: true, minlength: 6, autocomplete: "new-password" }), field("Parolni takrorlang", { name: "password2", type: "password", required: true, minlength: 6, autocomplete: "new-password" })),
    h("p", { class: "muted small" }, "Ro'yxatdan o'tish orqali o'quv natijalaringiz (test, amaliy mashg'ulot, AI tekshiruvlari) o'qituvchingizga ko'rinishiga rozilik bildirasiz. Javoblaringiz AI tekshiruvi uchun sun'iy intellekt xizmatiga yuboriladi."),
    err,
    h("button", { class: "btn block lg", type: "submit" }, "Profil yaratish"),
    h("p", { class: "center muted" }, "Profilingiz bormi? ", h("a", { href: "#/login" }, "Kirish"))
  );
  mount(el, h("div", { class: "auth-wrap" }, form));
}
