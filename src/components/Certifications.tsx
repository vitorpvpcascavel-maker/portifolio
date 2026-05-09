import { useI18n } from "../i18n/useI18n";
import { CertificationCard } from "./CertificationCard";

export function Certifications() {
  const { copy } = useI18n();

  return (
    <section className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {copy.certifications.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">
          {copy.certifications.subtitle}
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {copy.certifications.items.map((c, i) => (
            <CertificationCard key={c.name} {...c} delay={0.08 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
