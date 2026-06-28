/**
 * Captura screenshot real do portfólio para o card em Projetos.
 * Uso: npm run preview (ou site no ar) + node scripts/capture-portfolio-cover.mjs
 */
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "projects", "portfolio-cover.png");
const BASE = process.env.PORTFOLIO_URL ?? "https://victorqa.web.app";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
  });

  await page.addInitScript(() => {
    localStorage.setItem("portfolio-theme", "dark");
    document.documentElement.classList.add("dark");
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  });

  await page.goto(`${BASE}/`, { waitUntil: "domcontentloaded", timeout: 30_000 });
  await page.waitForSelector("#inicio h1", { timeout: 15_000 });
  await page.waitForTimeout(1500);

  await page.screenshot({ path: OUT, fullPage: false });
  await browser.close();

  console.log(`Capa salva em ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
