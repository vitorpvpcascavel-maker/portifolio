import { useMemo } from "react";

import { projectMeta } from "../data/projects";
import { useI18n } from "../i18n/useI18n";
import { ProjectCard, type Project } from "./ProjectCard";

export function Projects() {
  const { copy } = useI18n();

  const projects: Project[] = useMemo(
    () =>
      copy.projects.items.map((item, i) => ({
        title: item.title,
        description: item.description,
        demoLabel: copy.projects.demo,
        repoLabel: copy.projects.repo,
        ...projectMeta[i]!,
      })),
    [copy.projects]
  );

  return (
    <section id="projetos" className="border-t border-slate-200 py-20 dark:border-white/5 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {copy.projects.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 dark:text-zinc-400">
          {copy.projects.subtitle}
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
