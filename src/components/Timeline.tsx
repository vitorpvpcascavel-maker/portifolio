import { Reveal } from "./Reveal";

type Entry = {
  side: "left" | "right";
  role: string;
  company: string;
  period: string;
  points: string[];
};

const entries: Entry[] = [
  {
    side: "left",
    role: "Senior QA Automation Engineer",
    company: "Tech Corp",
    period: "2022 — Presente",
    points: [
      "Liderança técnica da estratégia de testes automatizados",
      "Redução de 40% no tempo de regressão com paralelização",
      "Mentoria de pares em boas práticas de automação",
    ],
  },
  {
    side: "right",
    role: "QA Automation Engineer",
    company: "StartupXYZ",
    period: "2019 — 2022",
    points: [
      "Construção de framework Cypress desde zero",
      "Integração com pipelines Jenkins e Docker",
      "Relatórios de qualidade para stakeholders",
    ],
  },
  {
    side: "left",
    role: "Analista de QA",
    company: "Agência Digital",
    period: "2017 — 2019",
    points: [
      "Testes manuais e início da automação web",
      "Participação em cerimônias ágeis e triagem de bugs",
    ],
  },
];

function TimelineCard({ e, i }: { e: Entry; i: number }) {
  const isLeft = e.side === "left";
  return (
    <Reveal delay={0.06 * i}>
      <div
        className={`relative flex w-full ${isLeft ? "lg:justify-end lg:pr-[52%]" : "lg:justify-start lg:pl-[52%]"}`}
      >
        <article className="w-full max-w-lg rounded-2xl border border-white/5 bg-night-card p-5 shadow-sm sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
            {e.period}
          </p>
          <h3 className="mt-2 text-lg font-bold text-white">{e.role}</h3>
          <p className="text-sm font-medium text-accent-purple">{e.company}</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-400">
            {e.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </article>
      </div>
    </Reveal>
  );
}

export function Timeline() {
  return (
    <section id="experiencias" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Jornada Profissional
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">
          Experiências que moldaram minha visão de qualidade como produto.
        </p>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent-cyan via-accent-purpledeep to-transparent lg:left-1/2 lg:block lg:-translate-x-1/2"
            aria-hidden
          />
          <div className="space-y-10 lg:space-y-14">
            {entries.map((e, i) => (
              <TimelineCard key={`${e.company}-${e.period}`} e={e} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
