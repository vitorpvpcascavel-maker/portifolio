import { ProjectCard, type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "QA Dashboard Inteligente",
    description:
      "Painel com métricas de qualidade, tendências de defeitos e integração com pipelines para decisões em tempo real.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&q=80",
    tags: ["React", "Node.js", "Cypress"],
    demoUrl: "#",
    repoUrl: "https://github.com",
    delay: 0,
  },
  {
    title: "API Contract Testing Suite",
    description:
      "Suíte automatizada de contratos OpenAPI com relatórios e gates de merge no CI para APIs críticas.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&q=80",
    tags: ["TypeScript", "Jest", "Docker"],
    demoUrl: "#",
    repoUrl: "https://github.com",
    delay: 0.08,
  },
  {
    title: "Mobile E2E na nuvem",
    description:
      "Execução distribuída de testes Appium com paralelização e artefatos de vídeo para squads mobile.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop&q=80",
    tags: ["Appium", "Jenkins", "AWS"],
    demoUrl: "#",
    repoUrl: "https://github.com",
    delay: 0.12,
  },
  {
    title: "Quality Gates CI/CD",
    description:
      "Template reutilizável de quality gates: cobertura, smoke, performance baseline e aprovação por estágio.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop&q=80",
    tags: ["GitHub Actions", "Playwright"],
    demoUrl: "#",
    repoUrl: "https://github.com",
    delay: 0.16,
  },
];

export function Projects() {
  return (
    <section id="projetos" className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Projetos em Destaque
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">
          Seleção de trabalhos que mostram automação, confiabilidade e impacto
          em produção.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
