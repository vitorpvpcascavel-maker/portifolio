export type GallerySlide = {
  src: string;
  labelKey: keyof typeof cetComunicacaoGalleryLabelKeys;
  restricted?: boolean;
};

const BASE = "/projects/cet-comunicacao";

function thumb(pngFile: string) {
  return `${BASE}/thumbs/${pngFile.replace(/\.png$/i, ".webp")}`;
}

export const cetComunicacaoGallery: GallerySlide[] = [
  { src: thumb("01-painel.png"), labelKey: "panel" },
  { src: thumb("02-equipamentos.png"), labelKey: "equipment" },
  { src: thumb("03-historico.png"), labelKey: "history", restricted: true },
  { src: thumb("04-relatorios.png"), labelKey: "reports", restricted: true },
];

export const cetComunicacaoCover = "/projects/cet-comunicacao/covers/cet-cover-c.png";

export const cetComunicacaoGalleryLabelKeys = {
  panel: true,
  equipment: true,
  history: true,
  reports: true,
} as const;

export type CetSectionKey = "app";

export type CetSectionLayout = "mobile";

export const cetComunicacaoSections: {
  sectionKey: CetSectionKey;
  layout: CetSectionLayout;
  slides: GallerySlide[];
}[] = [{ sectionKey: "app", layout: "mobile", slides: cetComunicacaoGallery }];
