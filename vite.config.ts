import fs from "node:fs";
import fsPromises from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CV_URL_PREFIX = "/cv/";

function isPathInsideDir(file: string, dir: string) {
  const rel = path.relative(path.resolve(dir), path.resolve(file));
  return rel !== "" && !rel.startsWith("..") && !path.isAbsolute(rel);
}

function serveCvFolder(): Plugin {
  const cvRoot = path.resolve(__dirname, "cv");
  return {
    name: "serve-cv-folder",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const raw = req.url?.split("?")[0]?.split("#")[0];
        if (!raw?.startsWith(CV_URL_PREFIX) || raw.includes("..")) {
          return next();
        }
        const rel = decodeURIComponent(raw.slice(CV_URL_PREFIX.length));
        if (!rel || rel.endsWith("/")) {
          return next();
        }
        if (!rel.toLowerCase().endsWith(".pdf")) {
          return next();
        }
        const filePath = path.resolve(cvRoot, rel);
        if (!isPathInsideDir(filePath, cvRoot)) {
          res.statusCode = 403;
          res.end();
          return;
        }
        fs.stat(filePath, (err, st) => {
          if (err || !st.isFile()) {
            return next();
          }
          res.setHeader("Content-Type", "application/pdf");
          fs.createReadStream(filePath).pipe(res);
        });
      });
    },
  };
}

function copyCvFolderToDist(): Plugin {
  return {
    name: "copy-cv-folder-to-dist",
    async closeBundle() {
      const cvDir = path.resolve(__dirname, "cv");
      const distCv = path.resolve(__dirname, "dist", "cv");
      if (!fs.existsSync(cvDir)) {
        return;
      }
      await fsPromises.mkdir(distCv, { recursive: true });
      const entries = await fsPromises.readdir(cvDir, { withFileTypes: true });
      for (const e of entries) {
        if (e.isFile() && e.name.toLowerCase().endsWith(".pdf")) {
          await fsPromises.copyFile(
            path.join(cvDir, e.name),
            path.join(distCv, e.name)
          );
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), serveCvFolder(), copyCvFolderToDist()],
});
