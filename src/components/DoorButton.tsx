"use client";

type Props = {
  open: boolean;
  onClick: () => void;
  className?: string;
};

export default function DoorButton({ open, onClick, className }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "w-full max-w-[260px] px-4 py-3 rounded-2xl zuyn-panel transition active:translate-y-[1px] " +
        (className ?? "")
      }
    >
      <div className="zuyn-surface zuyn-inner-highlight rounded-2xl px-4 py-3">
        <div className="flex items-center gap-4">
          <DoorArt open={open} />
          <div className="text-left">
            <div className="text-sm font-semibold">
              {open ? "Door opened" : "Knock on the door"}
            </div>
            <div className="mt-1 text-xs text-[var(--muted)]">
              {open ? "You may enter" : "Reveal contact links"}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function DoorArt({ open }: { open: boolean }) {
  return (
    <div className="relative size-[56px] shrink-0">
      <div className="absolute inset-0 rounded-xl bg-[var(--accent-soft)]" />

      <div className="absolute inset-[6px] rounded-lg border border-[var(--border-strong)] bg-[var(--panel-tint)]/70" />

      <div
        className={
          "absolute inset-[10px] rounded-md border border-[var(--border-strong)] bg-[var(--accent)]/35 shadow-[0_10px_18px_var(--shadow)] transition-transform duration-200" +
          (open ? " translate-x-[10px]" : "")
        }
      />

      <div
        className={
          "absolute top-1/2 -translate-y-1/2 size-[6px] rounded-full bg-[var(--foreground)]/60 transition-all duration-200" +
          (open ? " left-[34px]" : " left-[28px]")
        }
      />

      {open ? (
        <div className="absolute inset-[10px] rounded-md bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.55),transparent_55%)]" />
      ) : null}

      <div className="absolute left-[14px] right-[14px] bottom-[12px] h-[6px] rounded bg-[var(--foreground)]/10" />
    </div>
  );
}
