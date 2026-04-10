import Layout from "@/components/Layout";
import EnergyTag from "@/components/EnergyTag";
import StateButton from "@/components/StateButton";
import { getProjectBySlug } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <Layout>
        <div className="zuyn-panel rounded-2xl">
          <div className="p-5 zuyn-surface zuyn-inner-highlight rounded-2xl">
            <h1 className="text-xl font-semibold">Not found</h1>
            <p className="mt-2 text-sm text-[var(--muted)]">This level doesn’t exist.</p>
            <div className="mt-4">
              <StateButton href="/projects" variant="ghost">
                Back to projects
              </StateButton>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="zuyn-panel rounded-2xl">
        <div className="p-6 zuyn-surface zuyn-inner-highlight rounded-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold">{project.title}</h1>
              <p className="mt-2 text-sm text-[var(--muted)]">{project.hook}</p>
              <p className="mt-2 text-xs text-[var(--muted)]">
                {project.role} · {project.timeline}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <EnergyTag key={t}>{t}</EnergyTag>
                ))}
              </div>
            </div>
            <div className="shrink-0">
              <StateButton href="/projects" variant="ghost">
                Back
              </StateButton>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="grid gap-4">
          <div id="mission" className="scroll-mt-6" />
          <SectionWindow title={project.sections.mission.title}>
            <p className="text-sm leading-6">{project.sections.mission.content}</p>
          </SectionWindow>

          <div id="problem" className="scroll-mt-6" />
          <SectionWindow title={project.sections.problem.title}>
            <p className="text-sm leading-6">{project.sections.problem.content}</p>
          </SectionWindow>

          <div id="insight" className="scroll-mt-6" />
          <SectionWindow title={project.sections.insight.title}>
            <p className="text-sm leading-6">{project.sections.insight.content}</p>
          </SectionWindow>

          <div id="solution" className="scroll-mt-6" />
          <SectionWindow title={project.sections.solution.title}>
            <p className="text-sm leading-6">{project.sections.solution.content}</p>
          </SectionWindow>

          <div id="demo" className="scroll-mt-6" />
          <SectionWindow title="Demo">
            <div className="flex flex-col gap-3">
              <div>
                <StateButton href={project.sections.demo.url} external>
                  {project.sections.demo.label}
                </StateButton>
              </div>
              <div className="rounded-xl border border-[var(--border)] zuyn-surface p-4">
                <div className="text-xs text-[var(--muted)]">What to notice</div>
                <ul className="mt-2 list-disc pl-5 text-sm">
                  {project.sections.demo.whatToNotice.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionWindow>

          <div id="learnings" className="scroll-mt-6" />
          <SectionWindow title={project.sections.learnings.title}>
            <ul className="list-disc pl-5 text-sm">
              {project.sections.learnings.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </SectionWindow>
        </div>

        <div className="lg:sticky lg:top-6 h-fit">
          <div className="zuyn-panel rounded-2xl">
            <div className="p-5 zuyn-surface zuyn-inner-highlight rounded-2xl">
              <div className="text-sm font-semibold">Quest Steps</div>
              <div className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
                <a className="hover:text-[var(--foreground)]" href="#mission">
                  Mission
                </a>
                <a className="hover:text-[var(--foreground)]" href="#problem">
                  Problem
                </a>
                <a className="hover:text-[var(--foreground)]" href="#insight">
                  Insight
                </a>
                <a className="hover:text-[var(--foreground)]" href="#solution">
                  Solution
                </a>
                <a className="hover:text-[var(--foreground)]" href="#demo">
                  Demo
                </a>
                <a className="hover:text-[var(--foreground)]" href="#learnings">
                  Learnings
                </a>
              </div>
              <div className="mt-4">
                <StateButton href={project.sections.demo.url} external variant="ghost">
                  Demo ↗
                </StateButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function SectionWindow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="zuyn-panel rounded-2xl">
      <div className="zuyn-surface zuyn-inner-highlight rounded-2xl">
        <div className="zuyn-panel-header px-5 py-3 text-xs">{title}</div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
