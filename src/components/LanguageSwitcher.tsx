import { useI18n } from "../i18n/useI18n";
import type { Locale } from "../i18n/messages";

function FlagBr({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden>
      <rect width="20" height="14" fill="#009739" rx="1.5" />
      <path fill="#FFDF00" d="M10 2.2 17.2 7 10 11.8 2.8 7z" />
      <circle cx="10" cy="7" r="2.9" fill="#002776" />
    </svg>
  );
}

function FlagUs({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden>
      <rect width="20" height="14" fill="#B22234" rx="1.5" />
      <path
        fill="#fff"
        d="M0 2h20v2H0zm0 4h20v2H0zm0 4h20v2H0zm0 4h16v2H0z"
      />
      <rect width="8" height="7.6" fill="#3C3B6E" y="0" x="0" rx="0.5" />
      <g fill="#fff">
        <circle cx="1.2" cy="1.2" r="0.35" />
        <circle cx="2.8" cy="1.2" r="0.35" />
        <circle cx="4.4" cy="1.2" r="0.35" />
        <circle cx="6" cy="1.2" r="0.35" />
        <circle cx="1.2" cy="2.6" r="0.35" />
        <circle cx="2.8" cy="2.6" r="0.35" />
        <circle cx="4.4" cy="2.6" r="0.35" />
        <circle cx="6" cy="2.6" r="0.35" />
        <circle cx="2" cy="3.9" r="0.35" />
        <circle cx="3.6" cy="3.9" r="0.35" />
        <circle cx="5.2" cy="3.9" r="0.35" />
        <circle cx="1.2" cy="5.2" r="0.35" />
        <circle cx="2.8" cy="5.2" r="0.35" />
        <circle cx="4.4" cy="5.2" r="0.35" />
        <circle cx="6" cy="5.2" r="0.35" />
        <circle cx="2" cy="6.5" r="0.35" />
        <circle cx="3.6" cy="6.5" r="0.35" />
        <circle cx="5.2" cy="6.5" r="0.35" />
      </g>
    </svg>
  );
}

function FlagEs({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden>
      <rect width="20" height="14" fill="#AA151B" rx="1.5" />
      <rect y="3.5" width="20" height="7" fill="#F1BF00" />
    </svg>
  );
}

const OPTIONS: { locale: Locale; Flag: typeof FlagBr; labelKey: "langPt" | "langEn" | "langEs" }[] =
  [
    { locale: "pt", Flag: FlagBr, labelKey: "langPt" },
    { locale: "en", Flag: FlagUs, labelKey: "langEn" },
    { locale: "es", Flag: FlagEs, labelKey: "langEs" },
  ];

type LanguageSwitcherProps = {
  /** e.g. extra class for navbar vs mobile drawer */
  className?: string;
};

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { locale, setLocale, copy } = useI18n();

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className={`inline-flex items-center gap-0.5 rounded-lg border border-white/10 bg-night-card/60 p-0.5 ${className}`}
    >
      {OPTIONS.map(({ locale: loc, Flag, labelKey }) => {
        const active = locale === loc;
        return (
          <button
            key={loc}
            type="button"
            aria-label={copy.nav[labelKey]}
            aria-pressed={active}
            title={copy.nav[labelKey]}
            onClick={() => setLocale(loc)}
            className={`flex h-8 w-9 items-center justify-center rounded-md transition ${
              active
                ? "bg-white/15 ring-1 ring-accent-purple/50"
                : "opacity-75 hover:bg-white/10 hover:opacity-100"
            }`}
          >
            <Flag className="h-[14px] w-5 shrink-0" />
          </button>
        );
      })}
    </div>
  );
}
