import { useI18n } from "../i18n/useI18n";
import { Reveal } from "./Reveal";

const profilePhoto = "/foto/eu.png";

export function About() {
  const { copy } = useI18n();

  return (
    <section id="sobre" className="border-t border-slate-200 dark:border-white/5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:grid-cols-2 sm:gap-16 sm:px-6">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm sm:mx-0">
            <div className="relative aspect-[4/5] w-full">
              <div
                className="absolute -inset-1 rounded-2xl opacity-90 blur-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #22d3ee, #8b5cf6, #c4b5fd)",
                }}
              />
              <div className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-300 bg-slate-100 dark:border-white/10 dark:bg-[#120e1c]">
                <img
                  src={profilePhoto}
                  alt={copy.about.photoAlt}
                  className="h-full w-full object-cover object-[center_22%]"
                  width={1024}
                  height={682}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {copy.about.heading}
            </h2>
            <p className="mt-2 text-lg font-medium text-slate-700 dark:text-zinc-300">
              {copy.about.intro}
            </p>
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
