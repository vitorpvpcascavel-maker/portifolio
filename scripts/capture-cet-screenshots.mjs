/**
 * Captura telas do CET Comunicação (Expo web local).
 * Pré-requisito: npx expo start --web --port 8090
 *
 * Uso: node scripts/capture-cet-screenshots.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "projects", "cet-comunicacao");
const COVER_OUT = path.join(__dirname, "..", "public", "projects", "cet-comunicacao-cover.png");
const BASE = process.env.CET_URL ?? "http://localhost:8090";
const MOBILE = { width: 390, height: 844 };

const SHOTS = [
  { file: "01-painel.png", nav: null },
  { file: "02-equipamentos.png", nav: "Equipamentos" },
  { file: "03-historico.png", nav: "Histórico" },
  { file: "04-relatorios.png", nav: "Relatórios" },
];

async function waitForApp(page) {
  await page.getByText("Controle de Equipamentos").waitFor({ timeout: 30_000 });
  await page.waitForTimeout(900);
}

async function goNav(page, label) {
  if (!label) return;
  await page.getByText(label, { exact: true }).first().click();
  await page.waitForTimeout(700);
}

async function waitForAppUrl() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(BASE);
      if (res.ok) return;
    } catch {
      // aguardando
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`CET app não responde em ${BASE}`);
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  await waitForAppUrl();

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize(MOBILE);

  for (const shot of SHOTS) {
    const out = path.join(OUT_DIR, shot.file);
    if (fs.existsSync(out) && process.env.FORCE_CAPTURE !== "1") {
      console.log(`↷ ${shot.file}`);
      continue;
    }

    await page.goto(BASE, { waitUntil: "domcontentloaded", timeout: 30_000 });
    await waitForApp(page);
    await goNav(page, shot.nav);
    await page.screenshot({ path: out, fullPage: false });
    console.log(`✓ ${shot.file}`);
  }

  const coverSrc = path.join(OUT_DIR, "01-painel.png");
  if (fs.existsSync(coverSrc)) {
    fs.copyFileSync(coverSrc, COVER_OUT);
    console.log(`✓ capa → cet-comunicacao-cover.png`);
  }

  await browser.close();
  console.log(`\nPronto → ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
