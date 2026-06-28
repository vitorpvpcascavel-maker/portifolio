export type GallerySlide = {
  src: string;
  labelKey: keyof typeof skimoGalleryLabelKeys;
  restricted?: boolean;
};

const SKIMO_BASE = "/projects/skimo-graia";

function skimoThumb(pngFile: string) {
  return `${SKIMO_BASE}/thumbs/${pngFile.replace(/\.png$/i, ".webp")}`;
}

/** Ordem do fluxo do app (entrada → cliente → checkout → admin). */
export const skimoGraiaGallery: GallerySlide[] = [
  { src: skimoThumb("01-entry-entrar.png"), labelKey: "entryLogin", restricted: true },
  { src: skimoThumb("02-entry-criar-conta.png"), labelKey: "entrySignup", restricted: true },
  { src: skimoThumb("03-entry-convidado.png"), labelKey: "entryGuest" },
  { src: skimoThumb("04-home.png"), labelKey: "home" },
  { src: skimoThumb("05-catalogo.png"), labelKey: "catalog" },
  { src: skimoThumb("06-carrinho.png"), labelKey: "cart" },
  { src: skimoThumb("07-ofertas.png"), labelKey: "offers" },
  { src: skimoThumb("08-perfil.png"), labelKey: "profile", restricted: true },
  { src: skimoThumb("09-ajuda.png"), labelKey: "help" },
  { src: skimoThumb("10-metodos-pagamento.png"), labelKey: "paymentMethods", restricted: true },
  { src: skimoThumb("11-privacidade.png"), labelKey: "privacy", restricted: true },
  { src: skimoThumb("12-confirmar-endereco.png"), labelKey: "address", restricted: true },
  { src: skimoThumb("13-checkout.png"), labelKey: "checkout", restricted: true },
  { src: skimoThumb("14-rastrear-pedido.png"), labelKey: "tracking", restricted: true },
  { src: skimoThumb("15-meus-pedidos.png"), labelKey: "orders", restricted: true },
  { src: skimoThumb("16-admin-login.png"), labelKey: "adminLogin", restricted: true },
  { src: skimoThumb("17-admin-painel.png"), labelKey: "adminDashboard", restricted: true },
  { src: skimoThumb("18-admin-pedidos.png"), labelKey: "adminOrders", restricted: true },
  { src: skimoThumb("19-admin-fiados.png"), labelKey: "adminCredit", restricted: true },
  { src: skimoThumb("20-admin-ofertas.png"), labelKey: "adminOffers", restricted: true },
  { src: skimoThumb("21-admin-analises.png"), labelKey: "adminAnalytics", restricted: true },
  { src: skimoThumb("22-admin-config.png"), labelKey: "adminSettings", restricted: true },
];

/** Capa estilizada para o card na home. */
export const skimoGraiaCover = `${SKIMO_BASE}/covers/skimo-cover-model-1-dark-mockup.png`;

export const skimoGalleryLabelKeys = {
  entryLogin: true,
  entrySignup: true,
  entryGuest: true,
  home: true,
  catalog: true,
  cart: true,
  offers: true,
  profile: true,
  help: true,
  paymentMethods: true,
  privacy: true,
  address: true,
  checkout: true,
  tracking: true,
  orders: true,
  adminLogin: true,
  adminDashboard: true,
  adminOrders: true,
  adminCredit: true,
  adminOffers: true,
  adminAnalytics: true,
  adminSettings: true,
} as const;

export type SkimoSectionKey = "entry" | "customer" | "checkout" | "admin";
export type SkimoSectionLayout = "mobile" | "desktop";

export const skimoGraiaSections: {
  sectionKey: SkimoSectionKey;
  layout: SkimoSectionLayout;
  slides: GallerySlide[];
}[] = [
  { sectionKey: "entry", layout: "mobile", slides: skimoGraiaGallery.slice(0, 3) },
  { sectionKey: "customer", layout: "mobile", slides: skimoGraiaGallery.slice(3, 9) },
  { sectionKey: "checkout", layout: "mobile", slides: skimoGraiaGallery.slice(9, 15) },
  { sectionKey: "admin", layout: "desktop", slides: skimoGraiaGallery.slice(15) },
];
