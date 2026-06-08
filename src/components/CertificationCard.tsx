import { Reveal } from "./Reveal";

function CardContent({ name, issuer }: { name: string; issuer: string }) {
  return (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/20 text-accent-cyan">
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
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-zinc-500">{issuer}</p>
      </div>
    </>
  );
}

export function CertificationCard({
  name,
  issuer,
  href,
  delay = 0,
}: {
  name: string;
  issuer: string;
  href?: string;
  delay?: number;
}) {
  const cardClassName =
    "flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-accent-purple/25 dark:border-white/5 dark:bg-[#120e1c]";

  return (
    <Reveal delay={delay}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${cardClassName} group cursor-pointer hover:bg-violet-50/60 hover:shadow-sm dark:hover:bg-violet-500/5`}
          aria-label={`${name} — Udemy`}
        >
          <CardContent name={name} issuer={issuer} />
          <svg
            className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 opacity-0 transition group-hover:opacity-100 dark:text-zinc-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      ) : (
        <div className={cardClassName}>
          <CardContent name={name} issuer={issuer} />
        </div>
      )}
    </Reveal>
  );
}
