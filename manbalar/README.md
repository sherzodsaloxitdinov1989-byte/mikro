# Manbalar

Platformani yangi fanga moslash uchun boshlang'ich materiallar shu papkaga yuklanadi:

- **Darslik / o'quv qo'llanma** — PDF yoki DOCX (eski `.doc` bo'lsa, Word'da `.docx` qilib saqlang). Kirill yozuvidagisi ham bo'ladi — avtomatik lotinga o'giriladi.
- **Fan dasturi (sillabus)** — fan nomi, kodi, soatlar, ta'lim natijalari va baholash tizimi shundan olinadi.
- **Dars taqdimotlari** — PPTX yoki PDF. Fayl nomida mavzu raqami bo'lsin: `1-mavzu.pptx`, `2-mavzu.pptx` ...
- **Amaliy mashg'ulotlar to'plami** (bo'lsa) — masalalar va javoblar.
- Ixtiyoriy: testlar, keyslar, qo'shimcha materiallar.

Yuklash: GitHub'da shu papkani oching → **Add file → Upload files** → fayllarni sudrab tashlang → **Commit changes**.

## Joriy manba
`darslik.docx` — Sh.F. Saloxitdinov, «Mikroiqtisodiyot» darsligi (21 bob). Platforma ma'lumotlarini qayta yaratish:

```bash
python3 scripts/import-mikro.py manbalar/darslik.docx
```
Skript `public/data/book.js`, `layers-auto.js`, `practice-auto.js` va `public/img/book/` ni yangilaydi.
