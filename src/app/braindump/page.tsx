"use client";

import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useMemo, useState } from "react";

type LabFilter = "All" | "UX Design" | "AI-Assisted Planning" | "Game Design";

export default function BraindumpPage() {
  const [filter, setFilter] = useState<LabFilter>("All");

  const visibleProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <Layout>
      <div className="zuyn-panel rounded-2xl">
        <div className="p-5 zuyn-surface zuyn-inner-highlight rounded-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold">Vibe Coding Experiment Lab</h1>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Unfinished ideas, experiments, and fragments.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <FilterButton active={filter === "All"} onClick={() => setFilter("All")}>
                All
              </FilterButton>
              <FilterButton active={filter === "UX Design"} onClick={() => setFilter("UX Design")}>
                UX Design
              </FilterButton>
              <FilterButton
                active={filter === "AI-Assisted Planning"}
                onClick={() => setFilter("AI-Assisted Planning")}
              >
                AI-Assisted Planning
              </FilterButton>
              <FilterButton active={filter === "Game Design"} onClick={() => setFilter("Game Design")}>
                Game Design
              </FilterButton>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {visibleProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Layout>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "border px-3 py-2 text-xs transition rounded-xl zuyn-surface zuyn-inner-highlight " +
        (active
          ? "border-[var(--accent)] text-[var(--foreground)]"
          : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)]")
      }
    >
      {children}
    </button>
  );
}
