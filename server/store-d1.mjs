// Cloudflare uchun ma'lumotlar ombori: JSON yozuvlar — D1 (SQLite) bazasidagi kalit-qiymat jadvalida,
// ikkilik fayllar (taqdimot va video bo'laklari, AI ovozlari) — R2 bucket'da, R2 ulanmagan bo'lsa —
// D1'ning "bin" jadvalida (base64 bo'laklar, har bir qator D1 chegarasidan — 2 MB — kichik).
// Jadvallar birinchi so'rovda avtomatik yaratiladi (qo'lda SQL ishga tushirish shart emas).

import { Buffer } from "node:buffer";

const SCHEMA = [
  "CREATE TABLE IF NOT EXISTS kv (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated INTEGER NOT NULL)",
  "CREATE TABLE IF NOT EXISTS bin (key TEXT NOT NULL, part INTEGER NOT NULL, data TEXT NOT NULL, PRIMARY KEY (key, part))",
  "CREATE TABLE IF NOT EXISTS counters (key TEXT PRIMARY KEY, n INTEGER NOT NULL, since INTEGER NOT NULL)",
];
const PART = 1_200_000; // base64 belgi (~900 KB ikkilik ma'lumot)
// Prefiks bo'yicha qidiruv: key >= prefix AND key < prefix + U+FFFF (LIKE dan tezroq, indeksdan foydalanadi)
const upper = (prefix) => `${prefix}￿`;

export function d1Store(DB, FILES) {
  let ready = null;
  const init = () => (ready ||= DB.batch(SCHEMA.map((q) => DB.prepare(q))).catch((e) => {
    ready = null;
    throw e;
  }));
  /** R2 dagi barcha obyektlar (prefiks bo'yicha): [{ key, size }] */
  const r2All = async (prefix = "") => {
    const out = [];
    let cursor;
    do {
      const page = await FILES.list({ prefix, cursor });
      for (const o of page.objects) out.push({ key: o.key, size: o.size });
      cursor = page.truncated ? page.cursor : undefined;
    } while (cursor);
    return out;
  };
  return {
    /** Atomik hisoblagich (urinishlar cheklovi uchun): oyna ichida n ni bittaga oshiradi va { n, since } qaytaradi. */
    async hit(key, windowMs) {
      await init();
      const now = Date.now();
      const row = await DB.prepare(
        "INSERT INTO counters (key, n, since) VALUES (?1, 1, ?2) ON CONFLICT(key) DO UPDATE SET n = CASE WHEN ?2 - since > ?3 THEN 1 ELSE n + 1 END, since = CASE WHEN ?2 - since > ?3 THEN ?2 ELSE since END RETURNING n, since"
      )
        .bind(key, now, windowMs)
        .first();
      return { n: row.n, since: row.since };
    },
    async peekHit(key, windowMs) {
      await init();
      const row = await DB.prepare("SELECT n, since FROM counters WHERE key = ?").bind(key).first();
      return row && Date.now() - row.since <= windowMs ? { n: row.n, since: row.since } : { n: 0, since: Date.now() };
    },
    async resetHit(key) {
      await init();
      await DB.prepare("DELETE FROM counters WHERE key = ?").bind(key).run();
    },
    async get(key) {
      await init();
      const row = await DB.prepare("SELECT value FROM kv WHERE key = ?").bind(key).first();
      return row ? JSON.parse(row.value) : null;
    },
    async set(key, value) {
      await init();
      await DB.prepare("INSERT INTO kv (key, value, updated) VALUES (?1, ?2, ?3) ON CONFLICT(key) DO UPDATE SET value = ?2, updated = ?3")
        .bind(key, JSON.stringify(value), Date.now())
        .run();
    },
    async del(key) {
      await init();
      await DB.batch([DB.prepare("DELETE FROM kv WHERE key = ?").bind(key), DB.prepare("DELETE FROM bin WHERE key = ?").bind(key)]);
      if (FILES) await FILES.delete(key).catch(() => {});
    },
    async getBinary(key) {
      if (FILES) {
        const obj = await FILES.get(key);
        if (obj) return obj.arrayBuffer();
        // R2 ulanishdan oldin yuklangan fayllar hali D1 da bo'lishi mumkin: o'qiladi (keyin R2 ga ko'chiriladi)
      }
      await init();
      const { results } = await DB.prepare("SELECT data FROM bin WHERE key = ? ORDER BY part").bind(key).all();
      if (!results.length) return null;
      const buf = Buffer.from(results.map((r) => r.data).join(""), "base64");
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    },
    async setBinary(key, data) {
      if (FILES) return void (await FILES.put(key, data));
      await init();
      const b64 = Buffer.from(data instanceof ArrayBuffer ? new Uint8Array(data) : data).toString("base64");
      const stmts = [DB.prepare("DELETE FROM bin WHERE key = ?").bind(key)];
      for (let i = 0, part = 0; i < b64.length; i += PART, part++) stmts.push(DB.prepare("INSERT INTO bin (key, part, data) VALUES (?, ?, ?)").bind(key, part, b64.slice(i, i + PART)));
      await DB.batch(stmts);
    },
    /** Ombor hisoboti: D1 hajmi (JSON yozuvlar va fayl bo'laklari) turlar bo'yicha. */
    async stats() {
      await init();
      const grp = (col, tbl, extra = "") => DB.prepare(`SELECT CASE WHEN instr(key,'/')>0 THEN substr(key,1,instr(key,'/')-1) ELSE key END AS p, COUNT(${extra || "*"}) AS n, SUM(length(${col})) AS b FROM ${tbl} GROUP BY p ORDER BY b DESC`).all();
      const [kv, bin, cnt] = await Promise.all([grp("value", "kv"), grp("data", "bin", "DISTINCT key"), DB.prepare("SELECT COUNT(*) AS n FROM counters").first()]);
      let r2 = [];
      if (FILES) {
        const by = new Map();
        for (const o of await r2All()) {
          const p = o.key.split("/")[0];
          const r = by.get(p) || { p, n: 0, b: 0 };
          r.n++;
          r.b += o.size;
          by.set(p, r);
        }
        r2 = [...by.values()].sort((a, b) => b.b - a.b);
      }
      return { hasR2: Boolean(FILES), kv: kv.results, bin: bin.results, r2, counters: cnt?.n || 0 };
    },
    /** Fayl kalitlari va hajmi (D1 dagi bo'laklar bo'yicha): [{ key, bytes }] */
    async binSizes(prefix = "") {
      await init();
      const { results } = await DB.prepare("SELECT key, SUM(length(data)) AS b FROM bin WHERE key >= ? AND key < ? GROUP BY key").bind(prefix, upper(prefix)).all();
      const out = results.map((r) => ({ key: r.key, bytes: r.b, where: "d1" }));
      if (FILES) for (const o of await r2All(prefix)) out.push({ key: o.key, bytes: 0, r2Bytes: o.size, where: "r2" });
      return out;
    },
    /** Eski urinishlar hisoblagichlarini o'chiradi (1 kundan eski). */
    async cleanCounters() {
      await init();
      const r = await DB.prepare("DELETE FROM counters WHERE ?1 - since > 86400000").bind(Date.now()).run();
      return r.meta?.changes || 0;
    },
    /** D1 dagi fayllarni R2 ga ko'chiradi (R2 ulangan bo'lsa) va D1 dan o'chiradi: baza bo'shaydi. */
    async migrateToR2(limit = 25) {
      if (!FILES) return { moved: 0, remaining: 0, r2: false };
      await init();
      const { results } = await DB.prepare("SELECT DISTINCT key FROM bin LIMIT ?").bind(limit).all();
      let moved = 0;
      for (const { key } of results) {
        const { results: parts } = await DB.prepare("SELECT data FROM bin WHERE key = ? ORDER BY part").bind(key).all();
        const buf = Buffer.from(parts.map((r) => r.data).join(""), "base64");
        await FILES.put(key, buf);
        await DB.prepare("DELETE FROM bin WHERE key = ?").bind(key).run();
        moved++;
      }
      const left = await DB.prepare("SELECT COUNT(DISTINCT key) AS n FROM bin").first();
      return { moved, remaining: left?.n || 0, r2: true };
    },
    async list(prefix = "") {
      await init();
      const keys = new Set();
      const { results } = await DB.prepare("SELECT key FROM kv WHERE key >= ? AND key < ?").bind(prefix, upper(prefix)).all();
      for (const r of results) keys.add(r.key);
      const bins = await DB.prepare("SELECT DISTINCT key FROM bin WHERE key >= ? AND key < ?").bind(prefix, upper(prefix)).all();
      for (const r of bins.results) keys.add(r.key);
      if (FILES) {
        let cursor;
        do {
          const page = await FILES.list({ prefix, cursor });
          for (const o of page.objects) keys.add(o.key);
          cursor = page.truncated ? page.cursor : undefined;
        } while (cursor);
      }
      return [...keys];
    },
    async entries(prefix = "") {
      await init();
      const { results } = await DB.prepare("SELECT key, value FROM kv WHERE key >= ? AND key < ? ORDER BY key").bind(prefix, upper(prefix)).all();
      return results.map((r) => [r.key, JSON.parse(r.value)]);
    },
  };
}
