import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

export default function StateButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external,
}: Props) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-xl border-2 border-[var(--border-strong)] shadow-[0_10px_30px_var(--shadow)] active:translate-y-[1px] active:shadow-[0_6px_18px_var(--shadow)] transition";

  const styles =
    variant === "primary"
      ? "bg-[var(--accent)] text-white hover:brightness-105"
      : "bg-[var(--panel)] text-[var(--foreground)] hover:bg-[var(--panel-tint)]";

  const cls = `${base} ${styles} ${className ?? ""}`;

  if (href) {
    if (external) {
      return (
        <a className={cls} href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }

    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} onClick={onClick} type="button">
      {children}
    </button>
  );
}
