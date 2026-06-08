import { useState } from "react";

import { useI18n } from "../i18n/useI18n";
import { cvForLocale, downloadCvFile } from "../site";

type Variant = "primary" | "outline" | "link";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-accent-purple font-semibold text-[#0f0a18] transition hover:bg-violet-200 disabled:cursor-wait disabled:opacity-80",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 font-semibold text-slate-900 transition hover:border-violet-400 hover:bg-slate-100 disabled:cursor-wait disabled:opacity-70 dark:border-white/20 dark:text-white dark:hover:border-accent-purple/60 dark:hover:bg-white/5",
  link: "inline-flex items-center gap-1.5 transition hover:text-accent-purple disabled:cursor-wait disabled:opacity-70",
};

function Spinner({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <span
      className={`inline-block animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
      aria-hidden
    />
  );
}

export function CvDownloadButton({
  label,
  variant = "primary",
  className = "",
  onAfterClick,
}: {
  label: string;
  variant?: Variant;
  className?: string;
  onAfterClick?: () => void;
}) {
  const { copy, locale } = useI18n();
  const cv = cvForLocale(locale);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  async function handleClick() {
    if (status === "loading") return;

    setStatus("loading");
    const minDelay = new Promise((resolve) => setTimeout(resolve, 700));

    try {
      await Promise.all([
        downloadCvFile(cv.url, cv.filename),
        minDelay,
      ]);
      setStatus("done");
      window.setTimeout(() => setStatus("idle"), 2200);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 2800);
    }

    onAfterClick?.();
  }

  const text =
    status === "loading"
      ? copy.cvDownload.downloading
      : status === "done"
        ? copy.cvDownload.done
        : status === "error"
          ? copy.cvDownload.error
          : label;

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={status === "loading"}
      aria-busy={status === "loading"}
      className={`${VARIANT_CLASSES[variant]} ${className}`}
    >
      {status === "loading" && <Spinner />}
      {status === "done" && (
        <span className="text-sm" aria-hidden>
          ✓
        </span>
      )}
      {text}
    </button>
  );
}
