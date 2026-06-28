import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const srcDir = path.join(root, "public", "projects", "skimo-graia");
const thumbDir = path.join(srcDir, "thumbs");

const MOBILE_WIDTH = 520;
const DESKTOP_WIDTH = 1920;
const WEBP_QUALITY = 82;

function isDesktopShot(name) {
  return /admin/i.test(name);
}

async function main() {
  if (!fs.existsSync(srcDir)) {
    console.warn("Skimo screenshots folder not found, skipping optimization.");
    return;
  }

  fs.mkdirSync(thumbDir, { recursive: true });

  const pngs = fs
    .readdirSync(srcDir)
    .filter((name) => name.toLowerCase().endsWith(".png"))
    .sort();

  let totalBefore = 0;
  let totalAfter = 0;

  for (const name of pngs) {
    const input = path.join(srcDir, name);
    const output = path.join(thumbDir, name.replace(/\.png$/i, ".webp"));
    const width = isDesktopShot(name) ? DESKTOP_WIDTH : MOBILE_WIDTH;

    totalBefore += fs.statSync(input).size;

    await sharp(input)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(output);

    totalAfter += fs.statSync(output).size;
  }

  console.log(
    `Skimo thumbs: ${pngs.length} files, ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
