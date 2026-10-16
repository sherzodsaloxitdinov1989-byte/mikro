// Pedagogik qatlam yig'uvchisi (fanga bog'liq emas): AUTO (layers-auto.js) ga belgi (icon) va resurslar qo'shadi.
export function buildLayers(auto, { icons = [], resources = {} } = {}) {
  return Object.fromEntries(
    Object.entries(auto || {}).map(([num, L]) => [
      num,
      {
        ...L,
        icon: icons[num - 1] || "📘",
        glossary: (L.glossary || []).map(([term, def]) => ({ term, def })),
        resources: resources[num] || [],
      },
    ])
  );
}
