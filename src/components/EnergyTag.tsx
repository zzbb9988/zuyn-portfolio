type Props = {
  children: string;
};

export default function EnergyTag({ children }: Props) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs border border-[var(--border)] bg-[var(--panel-tint)] text-[var(--muted)]">
      {children}
    </span>
  );
}
