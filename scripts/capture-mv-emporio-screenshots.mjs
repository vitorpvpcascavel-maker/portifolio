/**
 * Captura telas do MV Empório (preview/dev em localhost).
 * Uso: MV_EMPORIO_URL=http://127.0.0.1:5190 node scripts/capture-mv-emporio-screenshots.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "projects", "mv-emporio");
const BASE = process.env.MV_EMPORIO_URL ?? "http://127.0.0.1:5190";

const MOBILE = { width: 390, height: 844 };
const DESKTOP = { width: 1440, height: 900 };

const SHOTS = [
  { file: "01-login.png", url: "/", viewport: MOBILE },
  { file: "02-loja-catalogo.png", url: "/loja", viewport: MOBILE },
  { file: "03-loja-promocoes.png", url: "/loja/promocoes", viewport: MOBILE },
  { file: "04-loja-carrinho.png", url: "/loja/carrinho", viewport: MOBILE },
  { file: "05-loja-checkout.png", url: "/loja/checkout", viewport: MOBILE },
  { file: "06-loja-pedidos.png", url: "/loja/pedidos", viewport: MOBILE },
  { file: "07-loja-perfil.png", url: "/loja/perfil", viewport: MOBILE },
  { file: "08-caixa-pdv.png", url: "/caixa", viewport: MOBILE, login: "funcionario" },
  { file: "09-caixa-pedidos.png", url: "/caixa/pedidos", viewport: MOBILE, login: "funcionario" },
  { file: "10-caixa-precos-margem.png", url: "/caixa/precos", viewport: MOBILE, login: "funcionario" },
  { file: "11-caixa-estoque.png", url: "/caixa/estoque", viewport: MOBILE, login: "funcionario" },
  { file: "12-caixa-entrada.png", url: "/caixa/entrada", viewport: MOBILE, login: "funcionario" },
  { file: "13-admin-dashboard.png", url: "/admin", viewport: DESKTOP, login: "admin" },
  { file: "14-admin-pedidos.png", url: "/admin/pedidos", viewport: DESKTOP, login: "admin" },
  { file: "15-admin-faturamento.png", url: "/admin/faturamento", viewport: DESKTOP, login: "admin" },
  { file: "16-admin-produtos.png", url: "/admin/produtos", viewport: DESKTOP, login: "admin" },
  { file: "17-admin-precos.png", url: "/admin/precos", viewport: DESKTOP, login: "admin" },
  { file: "18-admin-promocoes.png", url: "/admin/promocoes", viewport: DESKTOP, login: "admin" },
  { file: "19-admin-relatorios.png", url: "/admin/relatorios", viewport: DESKTOP, login: "admin" },
  { file: "20-admin-inventario.png", url: "/admin/inventario", viewport: DESKTOP, login: "admin" },
];

async function waitForApp(page) {
  await page.waitForTimeout(900);
}

async function clearSession(page) {
  await page.evaluate(() => localStorage.removeItem("mv-emporio-session"));
}

async function doLogin(page, username) {
  await page.goto(`${BASE}/`, { waitUntil: "domcontentloaded", timeout: 15_000 });
  await waitForApp(page);

  const onLogin = await page.locator('input[autocomplete="username"]').isVisible().catch(() => false);
  if (!onLogin) return;

  await page.locator('input[autocomplete="username"]').fill(username);
  await page.locator('input[autocomplete="current-password"]').fill(username);
  await page.getByRole("button", { name: "Entrar" }).click();
  await page.waitForURL((url) => !url.pathname.endsWith("/") || url.pathname !== "/", { timeout: 10_000 }).catch(() => {});
  await waitForApp(page);
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  let currentLogin = null;

  for (const shot of SHOTS) {
    const out = path.join(OUT_DIR, shot.file);
    if (fs.existsSync(out)) {
      console.log(`↷ ${shot.file}`);
      continue;
    }

    if (shot.login && shot.login !== currentLogin) {
      if (currentLogin) {
        await clearSession(page);
      }
      await doLogin(page, shot.login);
      currentLogin = shot.login;
    }

    await page.setViewportSize(shot.viewport);
    await page.goto(`${BASE}${shot.url}`, { waitUntil: "domcontentloaded", timeout: 15_000 });
    await waitForApp(page);
    await page.screenshot({ path: out, fullPage: false });
    console.log(`✓ ${shot.file}`);
  }

  await browser.close();
  console.log(`\nPronto → ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
