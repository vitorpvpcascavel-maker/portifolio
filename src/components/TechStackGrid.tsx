import { Reveal } from "./Reveal";

const stack = [
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "Cypress", icon: "Cy" },
  { name: "Selenium", icon: "Se" },
  { name: "Playwright", icon: "Pw" },
  { name: "Jest", icon: "Je" },
  { name: "Docker", icon: "Do" },
  { name: "Jenkins", icon: "Jk" },
  { name: "GitHub Actions", icon: "GA" },
  { name: "Python", icon: "Py" },
  { name: "Postman", icon: "Pm" },
  { name: "AWS", icon: "AWS" },
];

function TechCard({ name, icon, delay }: { name: string; icon: string; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="group flex flex-col items-center justify-center rounded-xl border border-white/5 bg-night-card p-6 transition hover:border-accent-purple/30 hover:shadow-glow">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-night-elevated text-xs font-bold text-accent-cyan ring-1 ring-white/10 transition group-hover:text-accent-purple">
          {icon}
        </div>
        <span className="text-center text-sm font-medium text-zinc-300">{name}</span>
      </div>
    </Reveal>
  );
}

export function TechStackGrid() {
  return (
    <section id="especializacao" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">
            Tecnologias de ponta para automação de alta performance
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stack.map((t, i) => (
            <TechCard key={t.name} {...t} delay={0.03 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
