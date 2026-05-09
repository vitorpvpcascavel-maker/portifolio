import { motion } from "framer-motion";

import { useI18n } from "../i18n/useI18n";
import { cvForLocale } from "../site";

export function Hero() {
  const { copy, locale } = useI18n();
  const cv = cvForLocale(locale);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-glow" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-night-card/80 px-3 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {copy.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {copy.hero.titleBefore}{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            {copy.hero.titleHighlight}
          </span>{" "}
          {copy.hero.titleAfter}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          {copy.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projetos"
            className="rounded-lg bg-accent-purple px-6 py-3 text-sm font-semibold text-night shadow-glow transition hover:bg-violet-200"
          >
            {copy.hero.projects}
          </a>
          <a
            href={cv.url}
            download={cv.filename}
            className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent-purple/60 hover:bg-white/5"
          >
            {copy.hero.viewCv}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
