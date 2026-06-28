import { Reveal } from "./Reveal";

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  screensPath?: string;
  delay?: number;
  demoLabel: string;
  repoLabel: string;
  viewLabel: string;
};

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
  screensPath,
  delay = 0,
  demoLabel,
  repoLabel,
  viewLabel,
}: Project) {
  const hasActions = demoUrl || repoUrl || screensPath;

  return (
    <Reveal delay={delay}>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-glow dark:border-white/5 dark:bg-[#120e1c] dark:hover:border-white/10">
        <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-[#1a1428]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-zinc-500">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200 dark:bg-[#1a1428] dark:text-zinc-400 dark:ring-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
          {hasActions && (
            <div className="mt-5 flex flex-wrap gap-3">
              {screensPath && (
                <a
                  href={screensPath}
                  className="rounded-lg bg-accent-purple px-4 py-2 text-xs font-semibold text-[#0f0a18] transition hover:bg-violet-200"
                >
                  {viewLabel}
                </a>
              )}
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-accent-purple px-4 py-2 text-xs font-semibold text-[#0f0a18] transition hover:bg-violet-200"
                >
                  {demoLabel}
                </a>
              )}
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-900 transition hover:border-accent-purple/50 hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
                >
                  {repoLabel}
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}
