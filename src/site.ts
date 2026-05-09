import type { Locale } from "./i18n/messages";

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
