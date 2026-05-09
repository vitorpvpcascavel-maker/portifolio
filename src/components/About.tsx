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
    <section id="sobre" className="border-t border-white/5 py-20 sm:py-24">
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
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-night-card">
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
                <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-2 bg-night-elevated p-6 text-center text-sm text-zinc-500">
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
                  <p className="text-xs text-zinc-600">
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
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {copy.about.heading}
            </h2>
            <p className="mt-6 leading-relaxed text-zinc-400">{copy.about.body}</p>
            <ul className="mt-8 space-y-5">
              {copy.about.bullets.map((b) => (
                <li
                  key={b.title}
                  className="flex gap-4 rounded-xl border border-white/5 bg-night-card/50 p-4"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-purpledeep/20 text-accent-cyan">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-white">{b.title}</p>
                    <p className="mt-1 text-sm text-zinc-500">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
