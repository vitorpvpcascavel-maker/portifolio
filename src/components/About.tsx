import { useI18n } from "../i18n/useI18n";
import { Reveal } from "./Reveal";

/** Qualquer jpg/png/webp na pasta `foto/` na raiz do projeto; prioriza `eu.*`. */
const fotoModules = import.meta.glob<string>("../../foto/*", {
  eager: true,
  import: "default",
});

function pickProfilePhoto(): string | null {
  const entries = Object.entries(fotoModules).filter(([path]) =>
    /\.(jpe?g|png|webp)$/i.test(path)
  );
  const named = entries.find(([path]) => /[/\\]eu\.[^/]+$/i.test(path));
  return (named?.[1] ?? entries[0]?.[1]) ?? null;
}

const profilePhoto = pickProfilePhoto();

export function About() {
  const { copy } = useI18n();

  return (
    <section id="sobre" className="border-t border-slate-200 dark:border-white/5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:grid-cols-2 sm:gap-16 sm:px-6">
        <Reveal>
          <div className="relative mx-auto aspect-square max-w-sm sm:mx-0">
            <div
              className="absolute -inset-1 rounded-2xl opacity-90 blur-sm"
              style={{
                background:
                  "linear-gradient(135deg, #22d3ee, #8b5cf6, #c4b5fd)",
              }}
            />
            <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-white dark:border-white/10 dark:bg-[#120e1c]">
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt={copy.about.photoAlt}
                  className="h-full w-full object-cover"
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-2 bg-slate-100 dark:bg-[#1a1428] p-6 text-center text-sm text-slate-500 dark:text-zinc-500">
                  <p>
                    {copy.about.noPhoto1a}{" "}
                    <code className="text-accent-cyan">foto/</code>{" "}
                    {copy.about.noPhoto1b}
                  </p>
                  <p>
                    {copy.about.noPhoto2a}{" "}
                    <code className="text-accent-cyan">eu.jpg</code>{" "}
                    {copy.about.noPhoto2b}{" "}
                    <code className="text-accent-cyan">eu.png</code>{" "}
                    {copy.about.noPhoto2c}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-zinc-600">
                    {copy.about.noPhoto3a}{" "}
                    <code className="text-accent-cyan">portifolio</code>{" "}
                    {copy.about.noPhoto3b}{" "}
                    <code className="text-accent-cyan">portfolio</code>
                    {copy.about.noPhoto3c}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {copy.about.heading}
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-slate-600 dark:text-zinc-400">
              {copy.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-8 dark:border-white/10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-purple">
                {copy.about.personalHeading}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-zinc-400">
                {copy.about.personalParagraph}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {copy.about.hobbies.map((hobby) => (
                  <li
                    key={hobby}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-[#120e1c] dark:text-zinc-300"
                  >
                    {hobby}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-sm text-slate-500 dark:text-zinc-500">
              {copy.about.footer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
