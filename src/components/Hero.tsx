import { CvDownloadButton } from "./CvDownloadButton";
import { useI18n } from "../i18n/useI18n";

export function Hero() {
  const { copy } = useI18n();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-100/30 to-transparent dark:hidden" />
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-glow dark:block" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 backdrop-blur dark:border-white/10 dark:bg-[#120e1c]/80 dark:text-zinc-400 sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {copy.hero.badge}
        </div>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          {copy.hero.titleBefore}{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            {copy.hero.titleHighlight}
          </span>{" "}
          {copy.hero.titleAfter}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-zinc-400 sm:text-lg">
          {copy.hero.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projetos"
            className="rounded-lg bg-accent-purple px-6 py-3 text-sm font-semibold text-[#0f0a18] shadow-glow transition hover:bg-violet-200"
          >
            {copy.hero.projects}
          </a>
          <CvDownloadButton
            label={copy.hero.viewCv}
            variant="outline"
            className="px-6 py-3 text-sm"
          />
        </div>
      </div>
    </section>
  );
}
