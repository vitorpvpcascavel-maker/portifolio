import { useEffect } from "react";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { LazyScreenshot } from "../components/LazyScreenshot";
import { ThemeToggle } from "../components/ThemeToggle";
import { skimoGraiaSections } from "../data/skimoGraiaGallery";
import { useI18n } from "../i18n/useI18n";

export function SkimoGraiaGalleryPage() {
  const { copy } = useI18n();
  const page = copy.skimoGalleryPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0612]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-[#0a0612]/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a
            href="#projetos"
            className="text-sm font-medium text-slate-600 transition hover:text-accent-purple dark:text-zinc-400"
          >
            ← {page.back}
          </a>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {page.title}
          </h1>
          <p className="mt-4 leading-relaxed text-slate-600 dark:text-zinc-400">
            {page.subtitle}
          </p>
          <a
            href="https://github.com/victordanbc/skimograia"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-accent-purple/50 hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
          >
            GitHub
          </a>
        </div>

        <div className="mt-14 space-y-16">
          {skimoGraiaSections.map((section, sectionIndex) => {
            const slideOffset = skimoGraiaSections
              .slice(0, sectionIndex)
              .reduce((total, item) => total + item.slides.length, 0);

            return (
            <section key={section.sectionKey}>
              <h2 className="text-lg font-semibold uppercase tracking-wider text-accent-purple">
                {page.sections[section.sectionKey]}
              </h2>
              <div
                className={
                  section.layout === "desktop"
                    ? "mt-8 grid grid-cols-1 gap-8"
                    : "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5"
                }
              >
                {section.slides.map((slide, slideIndex) => (
                  <figure
                    key={slide.src}
                    className={
                      section.layout === "desktop"
                        ? "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md dark:border-white/10 dark:bg-[#120e1c]"
                        : "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#120e1c]"
                    }
                  >
                    <figcaption className="border-b border-slate-200 px-2 py-2 text-xs font-medium text-slate-700 dark:border-white/10 dark:text-zinc-300 sm:px-3 sm:py-2.5 sm:text-sm">
                      {copy.projects.skimoGallery[slide.labelKey]}
                    </figcaption>
                    <LazyScreenshot
                      src={slide.src}
                      alt={copy.projects.skimoGallery[slide.labelKey]}
                      layout={section.layout}
                      priority={slideOffset + slideIndex < 4}
                      restricted={slide.restricted}
                    />
                  </figure>
                ))}
              </div>
            </section>
            );
          })}
        </div>

        <div className="mt-16 border-t border-slate-200 pt-10 dark:border-white/10">
          <a
            href="#projetos"
            className="inline-flex rounded-lg bg-accent-purple px-6 py-3 text-sm font-semibold text-[#0f0a18] transition hover:bg-violet-200"
          >
            ← {page.back}
          </a>
        </div>
      </main>
    </div>
  );
}
