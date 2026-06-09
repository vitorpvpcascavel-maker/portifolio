import {
  certificationUrls,
  type CertificationUrlId,
} from "../data/certificationUrls";
import { useI18n } from "../i18n/useI18n";
import { CertificationCard } from "./CertificationCard";

export function Certifications() {
  const { copy } = useI18n();

  return (
    <section id="educacao" className="border-t border-slate-200 py-20 dark:border-white/5 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {copy.certifications.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 dark:text-zinc-400">
          {copy.certifications.subtitle}
        </p>

        <div className="mt-12 space-y-12">
          {copy.certifications.groups.map((group, groupIndex) => {
            const offset = copy.certifications.groups
              .slice(0, groupIndex)
              .reduce((total, current) => total + current.items.length, 0);

            return (
              <div key={group.label ?? `group-${groupIndex}`}>
                {group.label ? (
                  <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-accent-purple">
                    {group.label}
                  </h3>
                ) : null}
                <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item, i) => {
                    const href =
                      "id" in item
                        ? certificationUrls[item.id as CertificationUrlId]
                        : undefined;

                    return (
                    <CertificationCard
                      key={"id" in item ? item.id : item.name}
                      name={item.name}
                      issuer={item.issuer}
                      href={href}
                      delay={0.04 * (offset + i)}
                    />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
