// Ma'lumotlar ombori interfeysi. Muhitga qarab ulanadi:
//   Netlify  — server/store-netlify.mjs (Netlify Blobs yoki lokal .data/ papka)
//   Cloudflare — server/store-d1.mjs (D1 ma'lumotlar bazasi + R2 fayllar)
// Ombor metodlari: get(key), set(key, value), del(key), getBinary(key), setBinary(key, data), list(prefix),
// ixtiyoriy: entries(prefix) → [[key, value], ...] (bitta so'rovda; bo'lmasa get bilan yig'iladi).

let backend = null;

export function useStore(store) {
  backend = store;
}

export function db() {
  if (!backend) throw new Error("Ma'lumotlar ombori ulanmagan");
  return backend;
}

/** Prefiks bo'yicha barcha yozuvlar: [[kalit, qiymat], ...] */
export async function getEntries(prefix) {
  const store = db();
  if (store.entries) return store.entries(prefix);
  const keys = await store.list(prefix);
  const values = await Promise.all(keys.map((k) => store.get(k)));
  return keys.map((k, i) => [k, values[i]]).filter(([, v]) => v != null);
}

export async function getMany(prefix) {
  return (await getEntries(prefix)).map(([, v]) => v);
}

// ---------- Urinishlar hisoblagichi (cheklovlar) ----------
// D1 da atomik (parallel so'rovlar bilan aylanib o'tib bo'lmaydi); boshqa omborlarda oddiy (atomik emas) zaxira.

/** Oyna ichida hisoblagichni oshiradi: { n, since } */
export async function hit(key, windowMs) {
  const store = db();
  if (store.hit) return store.hit(key, windowMs);
  const rec = (await store.get(`counter/${key}`)) || { n: 0, since: Date.now() };
  if (Date.now() - rec.since > windowMs) Object.assign(rec, { n: 0, since: Date.now() });
  rec.n++;
  await store.set(`counter/${key}`, rec);
  return rec;
}

/** Hisoblagichni oshirmasdan o'qiydi. */
export async function peekHit(key, windowMs) {
  const store = db();
  if (store.peekHit) return store.peekHit(key, windowMs);
  const rec = await store.get(`counter/${key}`);
  return rec && Date.now() - rec.since <= windowMs ? rec : { n: 0, since: Date.now() };
}

export async function resetHit(key) {
  const store = db();
  if (store.resetHit) return store.resetHit(key);
  await store.del(`counter/${key}`);
}
