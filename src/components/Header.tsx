"use client";

import { usePathname } from "next/navigation";
import { useRouteTransition } from "@/components/RouteTransitionProvider";

const nav = [
  { href: "/", label: "Room" },
  { href: "/projects", label: "Projects" },
  { href: "/thinking", label: "Thinking" },
  { href: "/braindump", label: "Vibe Coding" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { go } = useRouteTransition();

  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <div className="zuyn-panel rounded-2xl">
        <div className="zuyn-surface zuyn-inner-highlight rounded-2xl px-3 py-2">
          <nav className="flex flex-wrap items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => go(item.href)}
                  className={
                    "px-3 py-2 text-sm rounded-xl transition border " +
                    (active
                      ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--foreground)]"
                      : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--accent-soft)]")
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
