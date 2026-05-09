import { useI18n } from "../i18n/useI18n";
import { cvForLocale } from "../site";

export function Footer() {
  const { copy, locale } = useI18n();
  const cv = cvForLocale(locale);

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <span className="font-bold text-zinc-400">{copy.nav.brand}</span>
        <p className="order-last sm:order-none">
          © {new Date().getFullYear()} — {copy.footer.rights}
        </p>
        <nav className="flex flex-wrap justify-center gap-4">
          <a href="https://linkedin.com" className="hover:text-accent-purple">
            LinkedIn
          </a>
          <a href="https://github.com" className="hover:text-accent-purple">
            GitHub
          </a>
          <a href="mailto:contato@exemplo.com" className="hover:text-accent-purple">
            Email
          </a>
          <a href={cv.url} download={cv.filename} className="hover:text-accent-purple">
            {copy.footer.resume}
          </a>
        </nav>
      </div>
    </footer>
  );
}
