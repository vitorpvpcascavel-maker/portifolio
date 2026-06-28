import { lazy, Suspense, useEffect, useState } from "react";

import { HomePage } from "./pages/HomePage";

const SkimoGraiaGalleryPage = lazy(() =>
  import("./pages/SkimoGraiaGalleryPage").then((m) => ({
    default: m.SkimoGraiaGalleryPage,
  }))
);

const MvEmporioGalleryPage = lazy(() =>
  import("./pages/MvEmporioGalleryPage").then((m) => ({
    default: m.MvEmporioGalleryPage,
  }))
);

const SkimoChatbotGalleryPage = lazy(() =>
  import("./pages/SkimoChatbotGalleryPage").then((m) => ({
    default: m.SkimoChatbotGalleryPage,
  }))
);

const CetComunicacaoGalleryPage = lazy(() =>
  import("./pages/CetComunicacaoGalleryPage").then((m) => ({
    default: m.CetComunicacaoGalleryPage,
  }))
);

const GALLERY_HASHES = {
  "galeria-skimo-graia": SkimoGraiaGalleryPage,
  "galeria-skimo-chatbot": SkimoChatbotGalleryPage,
  "galeria-mv-emporio": MvEmporioGalleryPage,
  "galeria-cet-comunicacao": CetComunicacaoGalleryPage,
} as const;

type GalleryHash = keyof typeof GALLERY_HASHES;

function getGalleryHash(): GalleryHash | null {
  const hash = window.location.hash.replace(/^#/, "");
  if (hash in GALLERY_HASHES) return hash as GalleryHash;
  return null;
}

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-[#0a0612]">
      <p className="text-sm text-slate-500 dark:text-zinc-400">Carregando...</p>
    </div>
  );
}

export default function App() {
  const [gallery, setGallery] = useState<GalleryHash | null>(() => getGalleryHash());

  useEffect(() => {
    const sync = () => setGallery(getGalleryHash());
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  if (gallery) {
    const GalleryPage = GALLERY_HASHES[gallery];
    return (
      <Suspense fallback={<PageFallback />}>
        <GalleryPage />
      </Suspense>
    );
  }

  return <HomePage />;
}
