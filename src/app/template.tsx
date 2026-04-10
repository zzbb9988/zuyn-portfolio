"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="zuyn-page-enter">
      {children}
    </div>
  );
}
