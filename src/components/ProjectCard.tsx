import EnergyTag from "@/components/EnergyTag";
import EntryButton from "@/components/EntryButton";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="zuyn-panel rounded-2xl">
      <div className="zuyn-surface zuyn-inner-highlight rounded-2xl p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{project.hook}</p>
            <p className="mt-2 text-xs text-[var(--muted)]">
              {project.role} · {project.timeline}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <EnergyTag key={t}>{t}</EnergyTag>
          ))}
        </div>

        <div className="mt-5">
          <div className="rounded-2xl border border-[var(--border)] zuyn-panel overflow-hidden">
            <div className="zuyn-surface zuyn-inner-highlight p-4">
              <div className="mx-auto w-full max-w-[360px]">
                <div className="rounded-[28px] border border-[var(--border-strong)] bg-[var(--panel)]/35 shadow-[0_18px_45px_var(--shadow)] overflow-hidden">
                  <div className="aspect-[9/16] w-full">
                    <iframe
                      title={`${project.title} demo`}
                      src={project.sections.demo.url}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <EntryButton href={`/projects/${project.slug}`}>Enter project</EntryButton>
        </div>
      </div>
    </div>
  );
}
