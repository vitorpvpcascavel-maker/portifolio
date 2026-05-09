import { Reveal } from "./Reveal";

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  delay?: number;
  demoLabel: string;
  repoLabel: string;
};

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
  delay = 0,
  demoLabel,
  repoLabel,
}: Project) {
  return (
    <Reveal delay={delay}>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-night-card transition hover:border-white/10 hover:shadow-glow">
        <div className="aspect-video overflow-hidden bg-night-elevated">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-night-elevated px-2 py-0.5 text-xs font-medium text-zinc-400 ring-1 ring-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-accent-purple px-4 py-2 text-xs font-semibold text-night transition hover:bg-violet-200"
            >
              {demoLabel}
            </a>
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:border-accent-purple/50 hover:bg-white/5"
            >
              {repoLabel}
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
