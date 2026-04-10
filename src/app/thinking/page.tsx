"use client";

import Layout from "@/components/Layout";
import { thinkingNodes, type ThinkingNode } from "@/data/thinking";
import { useMemo, useState } from "react";

export default function ThinkingPage() {
  const [active, setActive] = useState<ThinkingNode | null>(thinkingNodes[0] ?? null);

  const links = useMemo(() => {
    const byId = new Map(thinkingNodes.map((n) => [n.id, n] as const));
    const pairs: Array<{ a: ThinkingNode; b: ThinkingNode }> = [];
    for (const n of thinkingNodes) {
      for (const to of n.links) {
        const target = byId.get(to);
        if (target) pairs.push({ a: n, b: target });
      }
    }
    return pairs;
  }, []);

  return (
    <Layout>
      <div className="zuyn-panel rounded-2xl">
        <div className="p-5 zuyn-surface zuyn-inner-highlight rounded-2xl">
          <h1 className="text-2xl font-semibold">How I think</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            A small skill tree of the patterns I design with.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_360px]">
        <div className="zuyn-panel rounded-2xl">
          <div className="p-5 zuyn-surface zuyn-inner-highlight rounded-2xl">
            <div className="relative w-full aspect-[16/10]">
              <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                {links.map(({ a, b }) => (
                  <line
                    key={`${a.id}-${b.id}`}
                    x1={`${a.pos.x}%`}
                    y1={`${a.pos.y}%`}
                    x2={`${b.pos.x}%`}
                    y2={`${b.pos.y}%`}
                    stroke="var(--border-strong)"
                    strokeWidth="2"
                    strokeLinecap="square"
                    opacity="0.65"
                  />
                ))}
              </svg>

              {thinkingNodes.map((n) => {
                const isActive = active?.id === n.id;
                return (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => setActive(n)}
                    className={
                      "absolute -translate-x-1/2 -translate-y-1/2 border border-[var(--border-strong)] shadow-[0_14px_28px_var(--shadow)] transition rounded-2xl " +
                      (isActive
                        ? "bg-[var(--accent)] text-white"
                        : "zuyn-surface zuyn-inner-highlight text-[var(--foreground)] hover:drop-shadow-[0_0_18px_var(--accent-soft)]")
                    }
                    style={{ left: `${n.pos.x}%`, top: `${n.pos.y}%` }}
                  >
                    <div className="px-3 py-2">
                      <div className="text-xs font-semibold whitespace-nowrap">{n.title}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-6 h-fit">
          <div className="zuyn-panel rounded-2xl">
            <div className="zuyn-surface zuyn-inner-highlight rounded-2xl">
              <div className="zuyn-panel-header px-5 py-3 text-xs">Node</div>
              <div className="p-5">
                {active ? (
                  <>
                    <div className="text-lg font-semibold">{active.title}</div>
                    <div className="mt-2 text-sm text-[var(--muted)]">{active.short}</div>
                    <div className="mt-4 text-sm leading-6">{active.detail}</div>
                  </>
                ) : (
                  <div className="text-sm text-[var(--muted)]">Select a node.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
