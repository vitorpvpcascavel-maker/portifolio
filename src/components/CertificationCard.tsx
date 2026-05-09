import { Reveal } from "./Reveal";

export type Certification = {
  name: string;
  issuer: string;
  delay?: number;
};

export function CertificationCard({ name, issuer, delay = 0 }: Certification) {
  return (
    <Reveal delay={delay}>
      <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-night-card p-5 transition hover:border-accent-purple/25">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-purpledeep/20 text-accent-purple">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="mt-1 text-sm text-zinc-500">{issuer}</p>
        </div>
      </div>
    </Reveal>
  );
}
