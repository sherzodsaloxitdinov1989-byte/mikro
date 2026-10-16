// Asosiy fan (Mikroiqtisodiyot) pedagogik qatlami: glossariy, testlar (kalitlarsiz), metodlar, mustaqil ishlar — layers-auto.js dan.
// Scriptlar (check-content, make-slides) uchun; ilova esa topics.js orqali fanga qarab yuklaydi.
import { buildLayers } from "./layers-lib.js";
import { ICONS, RESOURCES } from "./mikro-meta.js";
const AUTO = await (async () => {
  try {
    return (await import("./layers-auto.js")).AUTO;
  } catch {
    return {};
  }
})();

export { buildLayers };
export const LAYERS = buildLayers(AUTO, { icons: ICONS, resources: RESOURCES });
