import type { Locale } from "./i18n/messages";

export const SITE_CONTACT = {
  email: "victorbastosconceicao@gmail.com",
  phone: "(14) 99620-7227",
  whatsapp: "https://wa.me/5514996207227",
  linkedin: "https://www.linkedin.com/in/victor-bastos-72b181192/",
  github: "https://github.com/victordanbc",
} as const;

/** PDFs em `cv/` na raiz (servidos em dev e copiados para `dist/cv` no build). */
const CV_FILES: Record<Locale, string> = {
  pt: "CV_Victor_Portuguese.pdf",
  en: "CV_Victor_English.pdf",
  es: "CV_Victor_Spanish.pdf",
};

export function cvForLocale(locale: Locale): { url: string; filename: string } {
  const filename = CV_FILES[locale];
  return { url: `/cv/${filename}`, filename };
}

export function whatsAppContactUrl(
  template: string,
  fields: { name: string; email: string; message: string }
) {
  const text = template
    .replaceAll("{name}", fields.name)
    .replaceAll("{email}", fields.email)
    .replaceAll("{message}", fields.message);
  return `${SITE_CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}

export async function downloadCvFile(url: string, filename: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CV download failed: ${response.status}`);
  }

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(objectUrl);
}
