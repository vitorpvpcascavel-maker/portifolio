/**
 * Captura telas do painel Skimo Graia Chatbot (dashboard local).
 * Pré-requisito: emuladores Firebase + dashboard em http://localhost:5173
 *   cd ../chatbot-sorveteria && npm run dev
 *
 * Uso: node scripts/capture-skimo-chatbot-screenshots.mjs
 *      SKIMO_CHATBOT_URL=http://localhost:5173 node scripts/capture-skimo-chatbot-screenshots.mjs
 */
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "projects", "skimo-chatbot");
const CHATBOT_ROOT = path.resolve(
  __dirname,
  "..",
  "..",
  "chatbot-sorveteria",
);
const chatbotRequire = createRequire(
  pathToFileURL(path.join(CHATBOT_ROOT, "package.json")).href,
);
const BASE = process.env.SKIMO_CHATBOT_URL ?? "http://localhost:5173";
const DESKTOP = { width: 1440, height: 900 };

const SHOTS = [
  { file: "01-painel-completo.png", prepare: prepareOverview },
  { file: "02-kanban.png", prepare: prepareKanbanOnly },
  { file: "03-chat-conversa.png", prepare: prepareChatThread },
  { file: "04-novo-pedido.png", prepare: prepareNewOrder },
  { file: "05-config-loja.png", prepare: prepareStoreSettings },
];

async function waitForApp(page) {
  await page.waitForTimeout(1200);
}

async function waitForKanban(page) {
  await page
    .getByText("Quadro de pedidos", { exact: false })
    .waitFor({ timeout: 20_000 })
    .catch(() => {});
  await page.waitForTimeout(600);
}

async function prepareOverview(page) {
  await waitForKanban(page);
}

async function prepareKanbanOnly(page) {
  await waitForKanban(page);
  const hide = page.getByRole("button", { name: /Ocultar conversas/i });
  if (await hide.isVisible().catch(() => false)) {
    await hide.click();
    await page.waitForTimeout(500);
  }
}

async function prepareChatThread(page) {
  await waitForKanban(page);
  const open = page.getByRole("button", { name: /Conversas/i });
  if (await open.isVisible().catch(() => false)) {
    await open.click();
    await page.waitForTimeout(600);
  }
  const first = page.locator(".wa-conv-item").first();
  if (await first.isVisible().catch(() => false)) {
    await first.click();
    await page.waitForTimeout(900);
  }
}

async function prepareNewOrder(page) {
  await waitForKanban(page);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(200);
  await page.getByRole("button", { name: "+ Novo Pedido" }).click();
  await page.waitForTimeout(700);
}

async function prepareStoreSettings(page) {
  await waitForKanban(page);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(200);
  await page.getByRole("button", { name: "⚙" }).click();
  await page.waitForTimeout(700);
}

async function waitForEmulators() {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch("http://127.0.0.1:4000/");
      if (res.ok) return;
    } catch {
      // aguardando
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error("Emuladores Firebase não respondem em http://127.0.0.1:4000");
}

async function waitForDashboard() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(BASE);
      if (res.ok) return;
    } catch {
      // aguardando
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`Dashboard não responde em ${BASE}`);
}

async function seedPortfolioDemo() {
  process.env.FIRESTORE_EMULATOR_HOST = "127.0.0.1:8080";
  process.env.GOOGLE_CLOUD_PROJECT = "lanchonete-dev";

  const adminPath = path.join(CHATBOT_ROOT, "node_modules", "firebase-admin");
  if (!fs.existsSync(adminPath)) {
    console.warn("firebase-admin não encontrado no chatbot — pulando seed de demo.");
    return;
  }

  const admin = chatbotRequire("firebase-admin");
  if (!admin.apps.length) {
    admin.initializeApp({ projectId: "lanchonete-dev" });
  }

  const db = admin.firestore();
  const now = Date.now();
  const phone = "41999887766";

  await db.doc("sistema/loja").set(
    {
      acceptOrders: true,
      deliveryFee: 5,
      minimumOrder: 25,
      pixKey: "skimo@email.com",
      openTime: "17:00",
      closeTime: "02:00",
      daysOpen: [0, 1, 2, 3, 4, 5, 6],
      closedMessage:
        "No momento não estamos aceitando pedidos pelo WhatsApp. Volte mais tarde! 🙏",
      updatedAt: now,
    },
    { merge: true },
  );

  await db.doc("sistema/bot").set({ online: true, paused: false }, { merge: true });

  const pedidosSnap = await db.collection("pedidos").limit(1).get();
  if (pedidosSnap.empty) {
    const sampleOrders = [
      {
        nome: "Maria Silva",
        telefone: phone,
        itens: [
          { item: "X-Burger", quantity: 1, price: 22 },
          { item: "Batata M", quantity: 1, price: 12 },
        ],
        endereco: "Rua das Flores, 120 — Centro",
        pagamento: "Pix",
        tipoEntrega: "entrega",
        total: 39,
        status: "novo",
        source: "whatsapp",
        createdAtMs: now - 120_000,
        kitchenPrintStatus: "pending",
      },
      {
        nome: "João Costa",
        telefone: "41988776655",
        itens: [{ item: "Combo Skimo", quantity: 1, price: 35 }],
        endereco: "Retirada no balcão",
        pagamento: "Dinheiro",
        tipoEntrega: "balcao",
        total: 35,
        status: "preparando",
        source: "balcao",
        createdAtMs: now - 300_000,
        kitchenPrintStatus: "printed",
      },
      {
        nome: "Ana Pereira",
        telefone: "41977665544",
        itens: [
          { item: "Milk Shake", quantity: 2, price: 14 },
          { item: "Hot Dog", quantity: 1, price: 16 },
        ],
        endereco: "Av. Brasil, 890 — Jardim América",
        pagamento: "Cartão na entrega",
        tipoEntrega: "entrega",
        total: 44,
        status: "saiu_entrega",
        source: "whatsapp",
        createdAtMs: now - 600_000,
        kitchenPrintStatus: "printed",
      },
    ];

    for (const order of sampleOrders) {
      await db.collection("pedidos").add({
        ...order,
        observacoes: null,
        trocoPara: null,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });
    }
    console.log("[Seed] Pedidos de demonstração criados.");
  }

  const msgsSnap = await db.collection("mensagens").where("telefone", "==", phone).limit(1).get();
  if (msgsSnap.empty) {
    const messages = [
      {
        telefone: phone,
        texto: "Oi! Quero fazer um pedido 🍔",
        direcao: "cliente",
        nome: "Maria Silva",
        tipo: "text",
        createdAtMs: now - 900_000,
      },
      {
        telefone: phone,
        texto:
          "Olá Maria! Bem-vindo à Skimo Graia 🍦\n\nDigite *1* para ver o cardápio ou *2* para falar com atendente.",
        direcao: "bot",
        nome: null,
        tipo: "text",
        createdAtMs: now - 890_000,
      },
      {
        telefone: phone,
        texto: "1",
        direcao: "cliente",
        nome: "Maria Silva",
        tipo: "text",
        createdAtMs: now - 880_000,
      },
      {
        telefone: phone,
        texto: "🍔 *CARDÁPIO*\n\n1. X-Burger — R$ 22\n2. Combo Skimo — R$ 35\n3. Milk Shake — R$ 14",
        direcao: "bot",
        nome: null,
        tipo: "text",
        createdAtMs: now - 870_000,
      },
      {
        telefone: phone,
        texto: "Quero um X-Burger e batata M",
        direcao: "cliente",
        nome: "Maria Silva",
        tipo: "text",
        createdAtMs: now - 200_000,
      },
      {
        telefone: phone,
        texto: "Perfeito! Seu pedido foi registrado. Em breve confirmamos a entrega. ✅",
        direcao: "bot",
        nome: null,
        tipo: "text",
        createdAtMs: now - 150_000,
      },
    ];

    for (const msg of messages) {
      await db.collection("mensagens").add({
        ...msg,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });
    }
    console.log("[Seed] Conversa de demonstração criada.");
  }

  await db.collection("contatos").doc(phone).set(
    {
      nome: "Maria Silva",
      telefone: phone,
      updatedAt: now,
    },
    { merge: true },
  );
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log("Aguardando emuladores e dashboard...");
  await waitForEmulators().catch(() => {
    console.warn("Emuladores não detectados — tentando captura mesmo assim.");
  });
  await waitForDashboard();
  await seedPortfolioDemo();

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize(DESKTOP);

  for (const shot of SHOTS) {
    const out = path.join(OUT_DIR, shot.file);
    if (fs.existsSync(out) && process.env.FORCE_CAPTURE !== "1") {
      console.log(`↷ ${shot.file}`);
      continue;
    }

    await page.goto(BASE, { waitUntil: "domcontentloaded", timeout: 20_000 });
    await waitForApp(page);
    await shot.prepare(page);
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
