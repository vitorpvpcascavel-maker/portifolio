import { useI18n } from "../i18n/useI18n";
import { Reveal } from "./Reveal";

const STACK = [
  "Cypress",
  "Playwright",
  "Postman",
  "JMeter",
  "Jenkins",
  "GitLab/GitHub",
  "Jira/Trello",
  "Confluence",
  "SCRUM",
  "SQL/MySQL/Oracle",
  "React",
  "TypeScript",
  "Node.js",
];

function TechItem({ name, delay }: { name: string; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="group flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 transition hover:border-accent-purple/30 hover:shadow-glow dark:border-white/5 dark:bg-[#120e1c]">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-accent-cyan ring-1 ring-slate-300 transition group-hover:text-accent-purple dark:bg-[#1a1428] dark:ring-white/10">
          {name.slice(0, 2).toUpperCase()}
        </div>
        <span className="text-center text-sm font-medium text-slate-600 dark:text-zinc-300">{name}</span>
      </div>
    </Reveal>
  );
}

export function TechStackGrid() {
  const { copy } = useI18n();

  return (
    <section id="especializacao" className="border-t border-slate-200 py-20 dark:border-white/5 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {copy.tech.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 dark:text-zinc-400">
            {copy.tech.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {STACK.map((name, i) => (
            <TechItem key={name} name={name} delay={0.04 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
