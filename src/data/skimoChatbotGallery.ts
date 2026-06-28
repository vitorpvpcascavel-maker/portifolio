export type GallerySlide = {
  src: string;
  labelKey: keyof typeof skimoChatbotGalleryLabelKeys;
  restricted?: boolean;
};

const BASE = "/projects/skimo-chatbot";

function thumb(pngFile: string) {
  return `${BASE}/thumbs/${pngFile.replace(/\.png$/i, ".webp")}`;
}

export const skimoChatbotGallery: GallerySlide[] = [
  { src: thumb("01-painel-completo.png"), labelKey: "panelOverview" },
  { src: thumb("02-kanban.png"), labelKey: "kanban", restricted: true },
  { src: thumb("03-chat-conversa.png"), labelKey: "chatThread", restricted: true },
  { src: thumb("04-novo-pedido.png"), labelKey: "newOrder", restricted: true },
  { src: thumb("05-config-loja.png"), labelKey: "storeSettings", restricted: true },
];

export const skimoChatbotGalleryLabelKeys = {
  panelOverview: true,
  kanban: true,
  chatThread: true,
  newOrder: true,
  storeSettings: true,
} as const;

export type SkimoChatbotSectionKey = "painel" | "modais";

export type SkimoChatbotSectionLayout = "desktop";

export const skimoChatbotSections: {
  sectionKey: SkimoChatbotSectionKey;
  layout: SkimoChatbotSectionLayout;
  slides: GallerySlide[];
}[] = [
  { sectionKey: "painel", layout: "desktop", slides: skimoChatbotGallery.slice(0, 3) },
  { sectionKey: "modais", layout: "desktop", slides: skimoChatbotGallery.slice(3) },
];
