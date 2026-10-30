// Server API bilan ishlash va foydalanuvchi sessiyasi.
const TOKEN_KEY = "tt.token";
const USER_KEY = "tt.user";

function safeGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function safeSet(key, value) {
  try {
    value === null ? localStorage.removeItem(key) : localStorage.setItem(key, value);
  } catch {}
}

export const session = {
  get token() {
    return safeGet(TOKEN_KEY);
  },
  get user() {
    try {
      return JSON.parse(safeGet(USER_KEY) || "null");
    } catch {
      return null;
    }
  },
  set(token, user) {
    safeSet(TOKEN_KEY, token);
    safeSet(USER_KEY, JSON.stringify(user));
    window.dispatchEvent(new Event("tt:auth"));
  },
  updateUser(user) {
    safeSet(USER_KEY, JSON.stringify(user));
    window.dispatchEvent(new Event("tt:auth"));
  },
  clear() {
    const oldToken = safeGet(TOKEN_KEY);
    safeSet(TOKEN_KEY, null);
    safeSet(USER_KEY, null);
    // Himoyalangan materiallar uchun sessiya cookie'si ham o'chiriladi
    try {
      sessionStorage.removeItem("tt.cookie-try");
      fetch("/api/auth/logout", { method: "POST", keepalive: true, headers: oldToken ? { authorization: `Bearer ${oldToken}` } : {} }).catch(() => {});
    } catch {}
    window.dispatchEvent(new Event("tt:auth"));
  },
  get isTeacher() {
    return this.user?.role === "teacher";
  },
};

async function request(method, path, data, { raw = false } = {}) {
  const binary = data instanceof Blob || data instanceof ArrayBuffer;
  const headers = { "content-type": binary ? "application/octet-stream" : "application/json" };
  if (session.token) headers.authorization = `Bearer ${session.token}`;
  const send = () => fetch(`/api/${path}`, { method, headers, body: data === undefined ? undefined : binary ? data : JSON.stringify(data) });
  // Cloudflare vaqtincha band bo'lsa (502/503/504, JSON javobsiz) so'rov o'zi qayta yuboriladi: talaba hech narsa yo'qotmaydi
  let res;
  for (let attempt = 0; ; attempt++) {
    try {
      res = await send();
    } catch (e) {
      if (attempt >= 3 || method === "POST") throw e;
      await new Promise((r) => setTimeout(r, 1000 * 2 ** attempt));
      continue;
    }
    const transient = [502, 503, 504].includes(res.status) && !(res.headers.get("content-type") || "").includes("application/json");
    if (!transient || attempt >= 3) break;
    await new Promise((r) => setTimeout(r, 1000 * 2 ** attempt));
  }
  if (res.status === 401 && session.token && !path.startsWith("auth/")) {
    const wasTeacher = session.user?.role === "teacher";
    session.clear();
    location.hash = wasTeacher ? "#/ustoz" : "#/login";
  }
  if (res.status === 403 && session.token && !path.startsWith("auth/")) {
    // Ro'yxat (ID raqam) bo'yicha qayta kirish talab etiladigan talaba: sessiya yopiladi, kirish sahifasiga yo'naltiriladi
    const clone = await res.clone().json().catch(() => null);
    if (clone?.code === "SHIFR_REQUIRED") {
      session.clear();
      sessionStorage.setItem("tt.relogin", clone.error);
      location.hash = "#/login";
    }
  }
  if (!res.ok) {
    let message = [502, 503, 504].includes(res.status) ? "Server hozir band. Bir ozdan keyin qayta urinib ko‘ring (fayl saqlanib qoladi)." : `Xatolik (${res.status})`;
    let payload = null;
    try {
      payload = await res.json();
      message = payload.error || message;
    } catch {}
    throw Object.assign(new Error(message), { status: res.status, data: payload });
  }
  return raw ? res : res.json();
}

export const api = {
  get: (p) => request("GET", p),
  post: (p, d) => request("POST", p, d ?? {}),
  put: (p, d) => request("PUT", p, d ?? {}),
  del: (p) => request("DELETE", p),
  stream: (p, d) => request("POST", p, d, { raw: true }),
  putBinary: (p, blob) => request("PUT", p, blob),
  raw: (p) => request("GET", p, undefined, { raw: true }),
};
