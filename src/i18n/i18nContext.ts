import { createContext } from "react";

import type { Copy, Locale } from "./messages";

export type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: Copy;
};

export const I18nContext = createContext<I18nContextValue | null>(null);
