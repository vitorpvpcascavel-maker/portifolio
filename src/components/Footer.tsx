import { CvDownloadButton } from "./CvDownloadButton";
import { useI18n } from "../i18n/useI18n";
import { SITE_CONTACT } from "../site";

export function Footer() {
  const { copy } = useI18n();

  return (
    <footer className="border-t border-slate-200 py-10 dark:border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-sm text-slate-500 dark:text-zinc-500 sm:flex-row sm:px-6">
        <span className="font-bold text-slate-600 dark:text-zinc-400">{copy.nav.brand}</span>
        <p className="order-last sm:order-none">
          © {new Date().getFullYear()} — {copy.footer.rights}
        </p>
        <nav className="flex flex-wrap justify-center gap-4">
          <a
            href={SITE_CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-purple"
          >
            {copy.footer.linkedin}
          </a>
          <a
            href={SITE_CONTACT.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-purple"
          >
            {copy.footer.github}
          </a>
          <a
            href={SITE_CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-purple"
          >
            {copy.footer.whatsapp}
          </a>
          <a
            href={`mailto:${SITE_CONTACT.email}`}
            className="hover:text-accent-purple"
          >
            {copy.footer.email}
          </a>
          <CvDownloadButton label={copy.footer.resume} variant="link" />
        </nav>
      </div>
    </footer>
  );
}
