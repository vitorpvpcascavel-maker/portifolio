import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { I18nContext, type I18nContextValue } from "./i18nContext";
import { defaultLocale, messages, type Locale } from "./messages";

const STORAGE_KEY = "qa-portfolio-locale";

function readStoredLocale(): Locale {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "pt" || v === "en" || v === "es") return v;
  } catch {
    /* private mode */
  }
  return defaultLocale;
}

function htmlLang(locale: Locale): string {
  if (locale === "pt") return "pt-BR";
  if (locale === "es") return "es";
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window === "undefined" ? defaultLocale : readStoredLocale()
  );

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = htmlLang(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang(locale);
    document.title = messages[locale].meta.title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", messages[locale].meta.description);
    }
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      copy: messages[locale],
    }),
    [locale, setLocale]
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}
