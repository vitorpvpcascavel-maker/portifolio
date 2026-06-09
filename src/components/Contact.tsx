import { useI18n } from "../i18n/useI18n";
import { SITE_CONTACT } from "../site";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./SocialIcons";

export function Contact() {
  const { copy } = useI18n();

  return (
    <section id="contato" className="border-t border-slate-200 py-20 dark:border-white/5 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100/80 p-6 dark:border-white/5 dark:bg-[#1a1428]/80 sm:p-10 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  {copy.contact.heading}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600 dark:text-zinc-400">{copy.contact.body}</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li className="flex items-center gap-3 text-slate-600 dark:text-zinc-300">
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
                      href={`mailto:${SITE_CONTACT.email}`}
                      className="hover:text-accent-purple"
                    >
                      {SITE_CONTACT.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 dark:text-zinc-300">
                    <span className="text-accent-cyan" aria-hidden>
                      <WhatsAppIcon />
                    </span>
                    <a
                      href={SITE_CONTACT.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-purple"
                    >
                      {SITE_CONTACT.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 dark:text-zinc-300">
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
                    {copy.contact.location}
                  </li>
                </ul>
                <div className="mt-8 flex gap-3">
                  <a
                    href={SITE_CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 transition hover:border-accent-purple/40 hover:text-slate-900 dark:border-white/10 dark:bg-[#120e1c] dark:text-zinc-400 dark:hover:text-white"
                    aria-label={copy.footer.whatsapp}
                  >
                    <WhatsAppIcon />
                  </a>
                  <a
                    href={SITE_CONTACT.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 transition hover:border-accent-purple/40 hover:text-slate-900 dark:border-white/10 dark:bg-[#120e1c] dark:text-zinc-400 dark:hover:text-white"
                    aria-label={copy.footer.linkedin}
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={SITE_CONTACT.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 transition hover:border-accent-purple/40 hover:text-slate-900 dark:border-white/10 dark:bg-[#120e1c] dark:text-zinc-400 dark:hover:text-white"
                    aria-label={copy.footer.github}
                  >
                    <GitHubIcon />
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
