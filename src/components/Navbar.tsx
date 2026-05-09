import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#projetos", label: "Projetos" },
  { href: "#especializacao", label: "Especialização" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

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
          QA Automation Elite
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
            href="/cv.pdf"
            className="hidden rounded-lg bg-accent-purple px-3 py-2 text-xs font-semibold text-night transition hover:bg-violet-200 sm:inline-flex sm:px-4 sm:text-sm"
          >
            Baixar Currículo
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
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
                  href="/cv.pdf"
                  className="block rounded-lg bg-accent-purple px-3 py-2.5 text-center font-semibold text-night"
                  onClick={() => setOpen(false)}
                >
                  Baixar Currículo
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
