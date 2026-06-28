export type GallerySlide = {
  src: string;
  labelKey: keyof typeof mvEmporioGalleryLabelKeys;
  restricted?: boolean;
};

const MV_BASE = "/projects/mv-emporio";

function mvThumb(pngFile: string) {
  return `${MV_BASE}/thumbs/${pngFile.replace(/\.png$/i, ".webp")}`;
}

export const mvEmporioGallery: GallerySlide[] = [
  { src: mvThumb("01-login.png"), labelKey: "login", restricted: true },
  { src: mvThumb("02-loja-catalogo.png"), labelKey: "shopCatalog" },
  { src: mvThumb("03-loja-promocoes.png"), labelKey: "shopPromos" },
  { src: mvThumb("04-loja-carrinho.png"), labelKey: "shopCart" },
  { src: mvThumb("05-loja-checkout.png"), labelKey: "shopCheckout", restricted: true },
  { src: mvThumb("06-loja-pedidos.png"), labelKey: "shopOrders", restricted: true },
  { src: mvThumb("07-loja-perfil.png"), labelKey: "shopProfile", restricted: true },
  { src: mvThumb("08-caixa-pdv.png"), labelKey: "caixaPdv", restricted: true },
  { src: mvThumb("09-caixa-pedidos.png"), labelKey: "caixaOrders", restricted: true },
  { src: mvThumb("10-caixa-precos-margem.png"), labelKey: "caixaPricing", restricted: true },
  { src: mvThumb("11-caixa-estoque.png"), labelKey: "caixaStock", restricted: true },
  { src: mvThumb("12-caixa-entrada.png"), labelKey: "caixaIntake", restricted: true },
  { src: mvThumb("13-admin-dashboard.png"), labelKey: "adminDashboard", restricted: true },
  { src: mvThumb("14-admin-pedidos.png"), labelKey: "adminOrders", restricted: true },
  { src: mvThumb("15-admin-faturamento.png"), labelKey: "adminBilling", restricted: true },
  { src: mvThumb("16-admin-produtos.png"), labelKey: "adminProducts", restricted: true },
  { src: mvThumb("17-admin-precos.png"), labelKey: "adminPricing", restricted: true },
  { src: mvThumb("18-admin-promocoes.png"), labelKey: "adminPromos", restricted: true },
  { src: mvThumb("19-admin-relatorios.png"), labelKey: "adminReports", restricted: true },
  { src: mvThumb("20-admin-inventario.png"), labelKey: "adminInventory", restricted: true },
];

export const mvEmporioCover = `${MV_BASE}/covers/mv-emporio-cover.png`;

export const mvEmporioGalleryLabelKeys = {
  login: true,
  shopCatalog: true,
  shopPromos: true,
  shopCart: true,
  shopCheckout: true,
  shopOrders: true,
  shopProfile: true,
  caixaPdv: true,
  caixaOrders: true,
  caixaPricing: true,
  caixaStock: true,
  caixaIntake: true,
  adminDashboard: true,
  adminOrders: true,
  adminBilling: true,
  adminProducts: true,
  adminPricing: true,
  adminPromos: true,
  adminReports: true,
  adminInventory: true,
} as const;

export type MvSectionKey = "entry" | "shop" | "caixa" | "admin";
export type MvSectionLayout = "mobile" | "desktop";

export const mvEmporioSections: {
  sectionKey: MvSectionKey;
  layout: MvSectionLayout;
  slides: GallerySlide[];
}[] = [
  { sectionKey: "entry", layout: "mobile", slides: mvEmporioGallery.slice(0, 1) },
  { sectionKey: "shop", layout: "mobile", slides: mvEmporioGallery.slice(1, 7) },
  { sectionKey: "caixa", layout: "mobile", slides: mvEmporioGallery.slice(7, 12) },
  { sectionKey: "admin", layout: "desktop", slides: mvEmporioGallery.slice(12) },
];
