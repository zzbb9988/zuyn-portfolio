"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Ctx = {
  go: (to: string) => void;
  isTransitioning: boolean;
};

const RouteTransitionContext = createContext<Ctx | null>(null);

export function RouteTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(false);
  }, [pathname]);

  const go = useCallback(
    (to: string) => {
      setIsTransitioning(true);
      window.setTimeout(() => {
        router.push(to);
      }, 140);
    },
    [router],
  );

  const value = useMemo(() => ({ go, isTransitioning }), [go, isTransitioning]);

  return (
    <RouteTransitionContext.Provider value={value}>
      {children}
      <div
        aria-hidden="true"
        className={
          "fixed inset-0 z-[60] bg-[var(--background)] transition-opacity duration-150 pointer-events-none " +
          (isTransitioning ? "opacity-100" : "opacity-0")
        }
      />
    </RouteTransitionContext.Provider>
  );
}

export function useRouteTransition() {
  const ctx = useContext(RouteTransitionContext);
  if (!ctx) {
    throw new Error("useRouteTransition must be used within RouteTransitionProvider");
  }
  return ctx;
}
