"use client";

import { ReactNode, useId, useState } from "react";
import { useRouteTransition } from "@/components/RouteTransitionProvider";

type Props = {
  label: string;
  to: string;
  style: { left: string; top: string };
  children: ReactNode;
};

export default function PixelObject({ label, to, style, children }: Props) {
  const { go } = useRouteTransition();
  const [hover, setHover] = useState(false);
  const tipId = useId();

  return (
    <div
      className="absolute"
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        type="button"
        aria-describedby={tipId}
        onClick={() => go(to)}
        className="relative outline-none transition will-change-transform"
      >
        <div
          className={
            "transition duration-150 " +
            (hover
              ? "-translate-y-[2px] drop-shadow-[0_0_18px_var(--accent-soft)]"
              : "")
          }
        >
          {children}
        </div>

        <div
          id={tipId}
          className={
            "pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full mt-[-10px] transition " +
            (hover ? "opacity-100 scale-100" : "opacity-0 scale-95")
          }
        >
          <div className="zuyn-panel rounded-2xl">
            <div className="px-3 py-2 text-xs text-[var(--foreground)] whitespace-nowrap zuyn-surface rounded-2xl">
              {label}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
