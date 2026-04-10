import { ReactNode } from "react";

type WindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function GameWindow({ title, children, className }: WindowProps) {
  return (
    <div
      className={
        "zuyn-panel rounded-2xl " +
        (className ?? "")
      }
    >
      <div className="zuyn-surface rounded-2xl">
        <div className="zuyn-panel-header flex items-center justify-between gap-3 px-4 py-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-[var(--accent)]" />
            <span className="inline-block size-2 rounded-full bg-[color-mix(in_srgb,var(--accent)_65%,white)]" />
            <span className="inline-block size-2 rounded-full bg-[color-mix(in_srgb,var(--accent)_35%,white)]" />
          </div>
          <div>{title}</div>
          <div className="w-12" />
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export function PixelBlock({
  className,
}: {
  className?: string;
}) {
  return <div className={"zuyn-panel rounded-2xl " + (className ?? "")} />;
}
