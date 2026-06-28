import { useEffect } from "react";

import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { LazyScreenshot } from "../components/LazyScreenshot";
import { ThemeToggle } from "../components/ThemeToggle";
import { skimoChatbotSections } from "../data/skimoChatbotGallery";
import { useI18n } from "../i18n/useI18n";

export function SkimoChatbotGalleryPage() {
  const { copy } = useI18n();
  const page = copy.skimoChatbotGalleryPage;

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
        </div>

        <div className="mt-14 space-y-16">
          {skimoChatbotSections.map((section, sectionIndex) => {
            const slideOffset = skimoChatbotSections
              .slice(0, sectionIndex)
              .reduce((total, item) => total + item.slides.length, 0);

            return (
              <section key={section.sectionKey}>
                <h2 className="text-lg font-semibold uppercase tracking-wider text-accent-purple">
                  {page.sections[section.sectionKey]}
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-8">
                  {section.slides.map((slide, slideIndex) => (
                    <figure
                      key={slide.src}
                      className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md dark:border-white/10 dark:bg-[#120e1c]"
                    >
                      <figcaption className="border-b border-slate-200 px-2 py-2 text-xs font-medium text-slate-700 dark:border-white/10 dark:text-zinc-300 sm:px-3 sm:py-2.5 sm:text-sm">
                        {copy.projects.skimoChatbotGallery[slide.labelKey]}
                      </figcaption>
                      <LazyScreenshot
                        src={slide.src}
                        alt={copy.projects.skimoChatbotGallery[slide.labelKey]}
                        layout={section.layout}
                        priority={slideOffset + slideIndex < 2}
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
