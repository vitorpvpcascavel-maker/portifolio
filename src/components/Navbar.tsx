import { useMemo, useState } from "react";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { CvDownloadButton } from "./CvDownloadButton";
import { ThemeToggle } from "./ThemeToggle";
import { useI18n } from "../i18n/useI18n";

export function Navbar() {
  const { copy } = useI18n();
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { href: "#inicio", label: copy.nav.inicio },
      { href: "#sobre", label: copy.nav.sobre },
      { href: "#projetos", label: copy.nav.projetos },
      { href: "#experiencias", label: copy.nav.experiencias },
      { href: "#especializacao", label: copy.nav.especializacao },
      { href: "#educacao", label: copy.nav.educacao },
      { href: "#contato", label: copy.nav.contato },
    ],
    [copy.nav]
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-[#0a0612]/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#inicio"
          className="shrink-0 text-sm font-bold tracking-tight text-slate-900 dark:text-white sm:text-base"
        >
          {copy.nav.brand}
        </a>

        <ul className="hidden items-center gap-3 text-xs font-medium text-slate-600 dark:text-zinc-400 lg:flex lg:gap-4 lg:text-sm">
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
          <CvDownloadButton
            label={copy.nav.downloadCv}
            variant="primary"
            className="hidden px-3 py-2 text-xs sm:inline-flex sm:px-4 sm:text-sm"
          />
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-900 dark:border-white/10 dark:text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? copy.nav.closeMenu : copy.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-b border-slate-200 bg-white/95 dark:border-white/5 dark:bg-[#0a0612]/95 lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-700 dark:text-zinc-300">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-lg px-3 py-2 hover:bg-slate-100 hover:text-accent-purple dark:hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <CvDownloadButton
                label={copy.nav.downloadCv}
                variant="primary"
                className="w-full px-3 py-2.5 text-center text-sm"
                onAfterClick={() => setOpen(false)}
              />
            </li>
            <li className="flex justify-center gap-2 pb-2 pt-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
