import { ReactNode } from "react";
import Header from "@/components/Header";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto w-full max-w-[1100px] px-5 py-10">
        <Header />
        {children}
      </div>
    </div>
  );
}
