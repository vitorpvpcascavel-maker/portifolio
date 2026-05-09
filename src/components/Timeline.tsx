import { useI18n } from "../i18n/useI18n";
import { Reveal } from "./Reveal";

export function Timeline() {
  const { copy } = useI18n();

  return (
    <section id="experiencias" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {copy.timeline.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">
          {copy.timeline.subtitle}
        </p>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent-cyan via-accent-purpledeep to-transparent lg:left-1/2 lg:block lg:-translate-x-1/2"
            aria-hidden
          />
          <div className="space-y-10 lg:space-y-14">
            {copy.timeline.entries.map((e, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={`${e.company}-${e.period}`} delay={0.06 * i}>
                  <div
                    className={`relative flex w-full ${isLeft ? "lg:justify-end lg:pr-[52%]" : "lg:justify-start lg:pl-[52%]"}`}
                  >
                    <article className="w-full max-w-lg rounded-2xl border border-white/5 bg-night-card p-5 shadow-sm sm:p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                        {e.period}
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-white">{e.role}</h3>
                      <p className="text-sm font-medium text-accent-purple">{e.company}</p>
                      <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-400">
                        {e.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
