// Video dars studiyasi (o'qituvchi): mavzu taqdimoti + AI ssenariy + AI ovoz → brauzerning o'zida video (WebM) yozib olinadi
// va mavzuning video darslariga joylanadi. Serverda video ishlanmaydi: hammasi o'qituvchi brauzerida bajariladi.
import { h, modal, toast } from "./ui.js";
import { api } from "./api.js";
import { openSlidesPdf } from "./slides.js";
import { uploadVideo, invalidateVideos } from "./media.js";

const W = 1280;
const H = 720;
const MAX_BYTES = 80 * 1024 * 1024;

const wrapLines = (ctx, text, maxW) => {
  const lines = [];
  let line = "";
  for (const word of String(text).split(/\s+/).filter(Boolean)) {
    const t = line ? `${line} ${word}` : word;
    if (ctx.measureText(t).width > maxW && line) {
      lines.push(line);
      line = word;
    } else line = t;
  }
  if (line) lines.push(line);
  return lines;
};

const sentencesOf = (text) => String(text).replace(/\s+/g, " ").match(/[^.!?]+[.!?]*/g)?.map((x) => x.trim()).filter(Boolean) || [];
const readSeconds = (text) => Math.max(4, Math.round(String(text).length / 13));
const pickMime = () => ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm"].find((m) => window.MediaRecorder?.isTypeSupported?.(m));

function drawFrame(ctx, bitmap, subtitle, progress) {
  ctx.fillStyle = "#0b1416";
  ctx.fillRect(0, 0, W, H);
  if (bitmap) {
    const r = Math.min(W / bitmap.width, (H - 20) / bitmap.height);
    const w = bitmap.width * r;
    const h2 = bitmap.height * r;
    ctx.drawImage(bitmap, (W - w) / 2, (H - h2) / 2, w, h2);
  }
  if (subtitle) {
    ctx.font = '600 30px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
    const lines = wrapLines(ctx, subtitle, W - 200).slice(-3);
    const bh = lines.length * 42 + 24;
    ctx.fillStyle = "rgba(0,0,0,0.68)";
    ctx.beginPath();
    ctx.roundRect(70, H - bh - 36, W - 140, bh, 14);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.textBaseline = "top";
    lines.forEach((l, i) => ctx.fillText(l, 100, H - bh - 36 + 14 + i * 42));
  }
  ctx.fillStyle = "#1db4a4";
  ctx.fillRect(0, H - 6, W * progress, 6);
}

export async function openVideoStudio(topic, onCreated) {
  const body = h("div", { class: "stack" }, h("p", { class: "muted" }, "Taqdimot yuklanmoqda…"));
  let closed = false;
  let recording = null;
  const close = modal(`🎬 Video dars yaratish — ${topic.num}-mavzu`, body, { wide: true });
  const obs = new MutationObserver(() => {
    if (!body.isConnected) {
      closed = true;
      recording?.cancel();
      obs.disconnect();
    }
  });
  obs.observe(document.body, { childList: true, subtree: true });

  let meta;
  let info;
  try {
    [meta, info] = await Promise.all([api.get(`slides/${topic.id}`), api.get("tts").catch(() => ({ enabled: false, voices: [] }))]);
    if (!meta && topic.deck) meta = { kind: "pdf", src: topic.deck, topicId: topic.id, pages: topic.deckPages };
    if (!meta) {
      body.replaceChildren(h("div", { class: "alert alert-warn" }, "Bu mavzuga hali taqdimot yuklanmagan. Avval “Taqdimotlar” bo'limida PDF taqdimot yuklang — video shu slaydlar asosida yaratiladi."));
      return;
    }
    if (meta.kind === "link") {
      body.replaceChildren(h("div", { class: "alert alert-warn" }, "Bu mavzuning taqdimoti havola ko'rinishida. Video yaratish uchun PDF taqdimot kerak."));
      return;
    }
  } catch (e) {
    body.replaceChildren(h("div", { class: "alert alert-warn" }, e.message || "Taqdimotni olib bo'lmadi"));
    return;
  }

  let pdf;
  const slides = [];
  try {
    pdf = await openSlidesPdf(meta);
    for (let i = 1; i <= Math.min(pdf.numPages, 60); i++) {
      const page = await pdf.getPage(i);
      const vp = page.getViewport({ scale: 1 });
      const scale = Math.min(2, 1280 / vp.width);
      const view = page.getViewport({ scale });
      const c = document.createElement("canvas");
      c.width = Math.round(view.width);
      c.height = Math.round(view.height);
      await page.render({ canvasContext: c.getContext("2d"), viewport: view }).promise;
      const tc = await page.getTextContent();
      const text = tc.items.map((x) => x.str + (x.hasEOL ? "\n" : " ")).join("").replace(/[ \t]+/g, " ").trim();
      slides.push({ n: i, bitmap: c, text, narration: "" });
      if (closed) return;
    }
  } catch (e) {
    body.replaceChildren(h("div", { class: "alert alert-warn" }, `Taqdimotni ochib bo'lmadi: ${e.message}`));
    return;
  }

  const ttsOn = Boolean(info.enabled);
  const title = h("input", { type: "text", maxlength: 150, value: `${topic.title} — video dars` });
  const voice = h("select", {}, (info.voices || []).map((v) => h("option", { value: v.id, selected: v.id === info.defaultVoice }, v.label)));
  const subs = h("input", { type: "checkbox", checked: true });
  const status = h("p", { class: "small muted" }, `${slides.length} ta slayd topildi. “AI bilan ssenariy yozish” tugmasi har bir slayd uchun diktor matnini tayyorlaydi; matnlarni tahrirlashingiz mumkin.`);
  const list = h("div", { class: "stack" });
  const totalLbl = h("b", {});
  const secsOf = (s) => (s.narration.trim() ? readSeconds(s.narration) : 3);
  const updateTotal = () => (totalLbl.textContent = `Taxminiy davomiyligi: ~${Math.ceil(slides.reduce((n, s) => n + secsOf(s), 0) / 60)} daqiqa`);
  const drawList = () => {
    list.replaceChildren(...slides.map((s) => {
      const thumb = document.createElement("canvas");
      thumb.width = 224;
      thumb.height = Math.round((224 * s.bitmap.height) / s.bitmap.width);
      thumb.getContext("2d").drawImage(s.bitmap, 0, 0, thumb.width, thumb.height);
      thumb.style.cssText = "border-radius:8px;border:1px solid var(--border);flex:none;max-width:224px";
      return h("div", { class: "row", style: { alignItems: "flex-start", gap: "12px" } }, thumb,
        h("label", { class: "field grow" }, h("span", { class: "small muted" }, `${s.n}-slayd · diktor matni`),
          h("textarea", { rows: 4, maxlength: 1500, placeholder: "Bu slayd uchun o'qiladigan matn (bo'sh bo'lsa, slayd 3 soniya ko'rsatiladi)", oninput: (e) => ((s.narration = e.target.value), updateTotal()) }, s.narration)));
    }));
    updateTotal();
  };
  drawList();

  const aiBtn = h("button", { class: "btn ghost", onclick: async () => {
    aiBtn.disabled = true;
    aiBtn.textContent = "🤖 Yozilmoqda… (15–60 soniya)";
    try {
      const res = await api.post("admin/video-script", { topicId: topic.id, slides: slides.map((s) => ({ n: s.n, text: s.text })) });
      for (const r of res.slides) {
        const s = slides.find((x) => x.n === r.n);
        if (s) s.narration = r.narration || "";
      }
      drawList();
      status.textContent = res.ai ? "✅ Ssenariy tayyor. Matnlarni o'qib chiqing, kerak bo'lsa tahrirlang." : "AI ulanmagan: matn slaydlardan olindi — o'zingiz tahrirlang.";
    } catch (e) {
      toast(e.message, "error");
    } finally {
      aiBtn.disabled = false;
      aiBtn.textContent = "✨ AI bilan ssenariy yozish";
    }
  } }, "✨ AI bilan ssenariy yozish");

  const progress = h("div", { class: "small muted hidden" });
  const result = h("div", { class: "stack" });
  const recBtn = h("button", { class: "btn", onclick: () => record() }, "🎬 Videoni yozib olish");
  const stopBtn = h("button", { class: "btn ghost hidden", onclick: () => recording?.cancel() }, "⏹ To'xtatish");

  async function record() {
    if (!window.MediaRecorder || !HTMLCanvasElement.prototype.captureStream) return toast("Bu brauzer video yozishni qo'llamaydi. Chrome yoki Edge'dan foydalaning.", "error");
    if (!slides.some((s) => s.narration.trim()) && !confirm("Hech bir slaydga diktor matni yozilmagan: video ovozsiz va matnsiz bo'ladi. Davom etilsinmi?")) return;
    const mime = pickMime();
    recBtn.disabled = true;
    stopBtn.classList.remove("hidden");
    progress.classList.remove("hidden");
    result.replaceChildren();
    let cancelled = false;
    const cv = document.createElement("canvas");
    cv.width = W;
    cv.height = H;
    const ctx = cv.getContext("2d");
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const dest = ac.createMediaStreamDestination();
    const stream = cv.captureStream(25);
    dest.stream.getAudioTracks().forEach((t) => stream.addTrack(t));
    const rec = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 700_000, audioBitsPerSecond: 64_000 });
    const chunks = [];
    rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    const stopped = new Promise((r) => (rec.onstop = r));
    recording = { cancel: () => ((cancelled = true), progress.textContent = "To'xtatilmoqda…") };
    let elapsed = 0;
    try {
      // 1) Ovozlarni tayyorlash (keshlanadi: bir xil matn qayta yaratilmaydi)
      const audios = [];
      for (const [i, s] of slides.entries()) {
        if (cancelled) break;
        const text = s.narration.trim();
        let buf = null;
        if (text && ttsOn) {
          progress.textContent = `🔊 Ovoz tayyorlanmoqda: ${i + 1}/${slides.length}…`;
          try {
            const r = await api.post("tts", { text, voice: voice.value, style: "narrator" });
            const res = await fetch(r.url, { credentials: "include" });
            if (!res.ok) throw new Error("Ovoz fayli olinmadi");
            buf = await ac.decodeAudioData(await res.arrayBuffer());
          } catch (e) {
            throw new Error(`${i + 1}-slayd ovozi yaratilmadi: ${e.message}`);
          }
        }
        audios.push(buf);
      }
      if (cancelled) throw new Error("Bekor qilindi");
      // 2) Yozib olish (real vaqtda): oyna ochiq turishi kerak
      if (ac.state === "suspended") await ac.resume();
      rec.start(1000);
      const text0 = secsOf;
      const total = slides.reduce((n, s, i) => n + (audios[i] ? audios[i].duration + 0.7 : text0(s)), 0);
      for (const [i, s] of slides.entries()) {
        if (cancelled) break;
        const buf = audios[i];
        const dur = buf ? buf.duration + 0.7 : text0(s);
        const sents = sentencesOf(s.narration);
        if (buf) {
          const src = ac.createBufferSource();
          src.buffer = buf;
          src.connect(dest);
          src.start();
        }
        const t0 = performance.now();
        await new Promise((resolve) => {
          const tick = () => {
            const t = (performance.now() - t0) / 1000;
            const frac = Math.min(1, t / dur);
            // Subtitr: jumlalar ovoz davomiyligiga nisbatan almashadi (uzunligi bo'yicha)
            let sub = "";
            if (subs.checked && sents.length) {
              const lens = sents.map((x) => x.length);
              const all = lens.reduce((a, b) => a + b, 0);
              let acc = 0;
              const pos = Math.min(0.999, t / Math.max(0.1, buf ? buf.duration : dur)) * all;
              for (let k = 0; k < sents.length; k++) {
                acc += lens[k];
                if (pos < acc) {
                  sub = sents[k];
                  break;
                }
              }
            }
            drawFrame(ctx, s.bitmap, sub, Math.min(1, (elapsed + t) / total));
            progress.textContent = `🎬 Yozilmoqda: ${i + 1}/${slides.length}-slayd · ${Math.floor((elapsed + t) / 60)}:${String(Math.floor((elapsed + t) % 60)).padStart(2, "0")} / ~${Math.floor(total / 60)}:${String(Math.round(total % 60)).padStart(2, "0")} — bu oynani yopmang va boshqa oynaga o'tmang`;
            if (frac >= 1 || cancelled) return resolve();
            setTimeout(tick, 40);
          };
          tick();
        });
        elapsed += dur;
      }
      if (!cancelled) {
        drawFrame(ctx, slides[slides.length - 1].bitmap, "", 1);
        await new Promise((r) => setTimeout(r, 500));
      }
      rec.stop();
      await stopped;
      if (cancelled) throw new Error("Bekor qilindi");
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const big = blob.size > MAX_BYTES;
      result.replaceChildren(
        h("video", { src: url, controls: true, style: { width: "100%", maxHeight: "420px", background: "#000", borderRadius: "10px" } }),
        h("p", { class: "small muted" }, `Hajmi: ${(blob.size / 1048576).toFixed(1)} MB · davomiyligi ~${Math.round(elapsed)} soniya${big ? " — 80 MB dan katta, joylab bo'lmaydi: slaydlar yoki matnlarni qisqartiring." : ""}`),
        h("div", { class: "row wrap" },
          h("button", { class: "btn", disabled: big, onclick: async (e) => {
            const b = e.target;
            b.disabled = true;
            b.textContent = "Joylanmoqda… 0%";
            try {
              const file = new File([blob], `${topic.id}-video-dars.webm`, { type: "video/webm" });
              const v = await uploadVideo(topic.id, file, { title: title.value.trim() || `${topic.title} — video dars`, description: "Platformada yaratilgan video dars (slaydlar + diktor ovozi).", duration: elapsed, onProgress: (p) => (b.textContent = `Joylanmoqda… ${Math.round(p * 100)}%`) });
              invalidateVideos();
              toast("Video dars mavzuga joylandi", "ok");
              onCreated?.(v);
              close();
            } catch (ex) {
              toast(ex.message, "error");
              b.disabled = false;
              b.textContent = "⬆ Mavzuga joylash";
            }
          } }, "⬆ Mavzuga joylash")));
      progress.textContent = "✅ Video tayyor. Ko'rib chiqing va mavzuga joylang.";
    } catch (e) {
      if (rec.state !== "inactive") rec.stop();
      progress.textContent = e.message === "Bekor qilindi" ? "Bekor qilindi." : `⚠️ ${e.message}`;
      if (e.message !== "Bekor qilindi") toast(e.message, "error");
    } finally {
      recording = null;
      ac.close().catch(() => {});
      recBtn.disabled = false;
      stopBtn.classList.add("hidden");
    }
  }

  body.replaceChildren(
    !ttsOn && h("div", { class: "alert alert-warn small" }, "AI ovozi ulanmagan (Gemini kaliti yo'q): video ovozsiz bo'ladi, diktor matni subtitr sifatida ko'rsatiladi."),
    h("div", { class: "row wrap" },
      h("label", { class: "field grow" }, h("span", {}, "Video nomi"), title),
      ttsOn && h("label", { class: "field" }, h("span", {}, "Diktor ovozi"), voice)),
    h("label", { class: "row small", style: { gap: "8px" } }, subs, "Subtitr (diktor matni ekranda ko'rinsin)"),
    status,
    h("div", { class: "row between wrap" }, aiBtn, totalLbl),
    list,
    h("div", { class: "alert alert-info small" }, "Video brauzerda real vaqtda yozib olinadi (5 daqiqalik video — 5 daqiqa). Yozish paytida bu oynani yopmang va boshqa oynaga o'tmang. Tayyor video 80 MB dan oshmasligi kerak."),
    h("div", { class: "row wrap" }, recBtn, stopBtn),
    progress,
    result
  );
}
