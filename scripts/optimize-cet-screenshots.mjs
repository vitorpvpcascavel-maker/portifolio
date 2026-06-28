import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const srcDir = path.join(root, "public", "projects", "cet-comunicacao");
const thumbDir = path.join(srcDir, "thumbs");

const MOBILE_WIDTH = 520;
const WEBP_QUALITY = 82;

async function main() {
  if (!fs.existsSync(srcDir)) {
    console.warn("CET screenshots folder not found, skipping optimization.");
    return;
  }

  fs.mkdirSync(thumbDir, { recursive: true });

  const pngs = fs
    .readdirSync(srcDir)
    .filter((name) => name.toLowerCase().endsWith(".png"))
    .sort();

  if (pngs.length === 0) {
    console.warn("No CET PNGs found, skipping optimization.");
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const name of pngs) {
    const input = path.join(srcDir, name);
    const output = path.join(thumbDir, name.replace(/\.png$/i, ".webp"));

    totalBefore += fs.statSync(input).size;

    await sharp(input)
      .resize(MOBILE_WIDTH, null, { withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(output);

    totalAfter += fs.statSync(output).size;
  }

  console.log(
    `CET thumbs: ${pngs.length} files, ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
