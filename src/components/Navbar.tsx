import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

import { cvForLocale } from "../site";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "../i18n/useI18n";

export function Navbar() {
  const { copy, locale } = useI18n();
  const cv = cvForLocale(locale);
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { href: "#inicio", label: copy.nav.inicio },
      { href: "#experiencias", label: copy.nav.experiencias },
      { href: "#projetos", label: copy.nav.projetos },
      { href: "#especializacao", label: copy.nav.especializacao },
      { href: "#contato", label: copy.nav.contato },
    ],
    [copy.nav]
  );

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-night/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#inicio"
          className="shrink-0 text-sm font-bold tracking-tight text-white sm:text-base"
        >
          {copy.nav.brand}
        </a>

        <ul className="hidden items-center gap-6 text-sm font-medium text-zinc-400 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-accent-purple"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={cv.url}
            download={cv.filename}
            className="hidden rounded-lg bg-accent-purple px-3 py-2 text-xs font-semibold text-night transition hover:bg-violet-200 sm:inline-flex sm:px-4 sm:text-sm"
          >
            {copy.nav.downloadCv}
          </a>
          <LanguageSwitcher />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            aria-expanded={open}
            aria-label={open ? copy.nav.closeMenu : copy.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-white/5 bg-night/95 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-3 text-sm font-medium text-zinc-300">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-accent-purple"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={cv.url}
                  download={cv.filename}
                  className="block rounded-lg bg-accent-purple px-3 py-2.5 text-center font-semibold text-night"
                  onClick={() => setOpen(false)}
                >
                  {copy.nav.downloadCv}
                </a>
              </li>
              <li className="flex justify-center pb-2 pt-4">
                <LanguageSwitcher />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
