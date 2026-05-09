import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contato" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-night-elevated/80 p-6 sm:p-10 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Vamos elevar a qualidade do seu produto?
                </h2>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  Estou aberto a conversar sobre automação, estratégia de QA ou
                  oportunidades onde qualidade seja prioridade de negócio.
                </p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li className="flex items-center gap-3 text-zinc-300">
                    <span className="text-accent-cyan" aria-hidden>
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <a
                      href="mailto:contato@exemplo.com"
                      className="hover:text-accent-purple"
                    >
                      contato@exemplo.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <span className="text-accent-cyan" aria-hidden>
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    Brasil — remoto / híbrido
                  </li>
                </ul>
                <div className="mt-8 flex gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-night-card text-zinc-400 transition hover:border-accent-purple/40 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-night-card text-zinc-400 transition hover:border-accent-purple/40 hover:text-white"
                    aria-label="GitHub"
                  >
                    GH
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
