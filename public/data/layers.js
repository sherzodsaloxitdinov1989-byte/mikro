// Pedagogik qatlam: har bir mavzu uchun glossariy, interaktiv metodlar, testlar va mustaqil ishlar.
// Hammasi darslikdan avtomatik ajratiladi (scripts/import-mikro.py → layers-auto.js): glossariy, 30 tadan test
// (darslik kalitlari bilan), mustaqil ta'lim topshiriqlari; metodlar darslik glossariysi, bo'limlari,
// masalalari va xulosalaridan tuziladi. Bu yerda faqat belgilar (icon) va resurslar qo'shiladi.
// Himoyalangan ma'lumot (glossariy, test kalitlari): kirmagan foydalanuvchida bo'sh bo'ladi.
const AUTO = await (async () => {
  try {
    return (await import("./layers-auto.js")).AUTO;
  } catch {
    return {};
  }
})();

const ICONS = ["🧭", "⚖️", "📈", "🛒", "🔄", "🎲", "🏭", "💰", "🏪", "⏳", "🏛️", "💹", "⚔️", "👷", "🏗️", "🌾", "📊", "🌐", "🤝", "🌫️", "🏥"];
const RESOURCES = {
  1: [{ title: "N.G. Mankiw — Principles of Microeconomics (Cengage)", url: "https://www.cengage.com/c/principles-of-microeconomics-8e-mankiw/" }],
};

export const LAYERS = Object.fromEntries(
  Object.entries(AUTO).map(([num, L]) => [
    num,
    {
      ...L,
      icon: ICONS[num - 1] || "📘",
      glossary: L.glossary.map(([term, def]) => ({ term, def })),
      resources: RESOURCES[num] || [],
    },
  ])
);
