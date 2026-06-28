import { useEffect, useRef, useState } from "react";

import { useI18n } from "../i18n/useI18n";

export type ScreenshotLayout = "mobile" | "desktop";

type LazyScreenshotProps = {
  src: string;
  alt: string;
  layout: ScreenshotLayout;
  priority?: boolean;
  restricted?: boolean;
};

export function LazyScreenshot({
  src,
  alt,
  layout,
  priority = false,
  restricted = false,
}: LazyScreenshotProps) {
  const { copy } = useI18n();
  const hostRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(priority);

  useEffect(() => {
    if (priority || show) return;

    const host = hostRef.current;
    if (!host) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px" },
    );

    observer.observe(host);
    return () => observer.disconnect();
  }, [priority, show]);

  const isDesktop = layout === "desktop";

  return (
    <div
      ref={hostRef}
      className={
        isDesktop
          ? "w-full bg-white p-1 dark:bg-[#0f0a18] sm:p-2"
          : "aspect-[780/1688] w-full bg-slate-100 dark:bg-[#1a1428]"
      }
    >
      {show ? (
        <div className="relative overflow-hidden">
          <img
            src={src}
            alt={alt}
            width={isDesktop ? 1920 : 480}
            height={isDesktop ? 1200 : 1038}
            className={
              isDesktop
                ? `mx-auto w-full max-w-none rounded-sm${restricted ? " scale-105 blur-xl select-none" : ""}`
                : `h-full w-full object-cover object-top${restricted ? " scale-105 blur-xl select-none" : ""}`
            }
            decoding="async"
            fetchPriority={priority ? "high" : "low"}
            draggable={restricted ? false : undefined}
            onContextMenu={restricted ? (e) => e.preventDefault() : undefined}
          />
          {restricted ? (
            <div
              className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-slate-900/25 px-4 text-center backdrop-blur-[1px] dark:bg-black/35"
              aria-hidden
            >
              <span className="text-lg leading-none" aria-hidden>
                🔒
              </span>
              <span className="rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm dark:bg-[#1a1428]/95 dark:text-zinc-100">
                {copy.gallery.protectedPreview}
              </span>
              <span className="max-w-[220px] text-[10px] font-medium leading-snug text-white drop-shadow-sm sm:text-xs">
                {copy.gallery.protectedHint}
              </span>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
