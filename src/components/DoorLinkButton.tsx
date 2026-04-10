"use client";

import { useState } from "react";
import { useRouteTransition } from "@/components/RouteTransitionProvider";

type Props = {
  href: string;
  labelClosed: string;
  labelOpen?: string;
  variant?: "lavender" | "gold" | "red" | "vibrant" | "usyd";
  className?: string;
};

export default function DoorLinkButton({
  href,
  labelClosed,
  labelOpen = "Enter",
  variant = "lavender",
  className,
}: Props) {
  const { go } = useRouteTransition();
  const [open, setOpen] = useState(false);

  const outer =
    variant === "gold"
      ? "inline-flex items-center gap-3 px-4 py-3 rounded-2xl transition active:translate-y-[1px] bg-gradient-to-b from-black/40 to-black/20 border border-[rgba(255,215,0,0.22)] shadow-[0_22px_70px_rgba(0,0,0,0.55)]"
      : variant === "red"
        ? "inline-flex items-center gap-3 px-4 py-3 rounded-2xl transition active:translate-y-[1px] bg-gradient-to-b from-black/50 to-black/25 border border-white/10 shadow-[0_22px_70px_rgba(0,0,0,0.60)]"
        : variant === "vibrant"
          ? "inline-flex items-center gap-3 px-4 py-3 rounded-2xl transition active:translate-y-[1px] bg-white/35 border border-black/10 shadow-[0_22px_70px_rgba(0,0,0,0.14)] backdrop-blur-[14px]"
          : variant === "usyd"
            ? "inline-flex items-center gap-3 px-4 py-3 rounded-2xl transition active:translate-y-[1px] bg-white/35 border border-[rgba(4,30,66,0.16)] shadow-[0_22px_70px_rgba(0,0,0,0.12)] backdrop-blur-[14px]"
        : "inline-flex items-center gap-3 px-4 py-3 rounded-2xl zuyn-panel transition active:translate-y-[1px]";

  const inner =
    variant === "gold"
      ? "rounded-2xl px-4 py-3 flex items-center gap-3 bg-black/35 border border-[rgba(255,215,0,0.16)] shadow-[inset_0_1px_0_rgba(255,215,0,0.12)]"
      : variant === "red"
        ? "rounded-2xl px-4 py-3 flex items-center gap-3 bg-black/40 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        : variant === "vibrant"
          ? "rounded-2xl px-4 py-3 flex items-center gap-3 bg-white/60 border border-black/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
          : variant === "usyd"
            ? "rounded-2xl px-4 py-3 flex items-center gap-3 bg-white/60 border border-[rgba(4,30,66,0.16)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
        : "zuyn-surface zuyn-inner-highlight rounded-2xl px-4 py-3 flex items-center gap-3";

  const labelCls =
    variant === "red"
      ? "text-white"
      : variant === "vibrant"
        ? "text-[rgba(15,15,15,0.90)]"
        : variant === "usyd"
          ? "text-[rgba(4,30,66,0.92)]"
          : "";
  const hintCls =
    variant === "red"
      ? "text-white/70"
      : variant === "vibrant"
        ? "text-[rgba(45,45,45,0.70)]"
        : variant === "usyd"
          ? "text-[rgba(4,30,66,0.62)]"
          : "text-[var(--muted)]";

  return (
    <button
      type="button"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={() => go(href)}
      className={
        outer +
        " " +
        (className ?? "")
      }
    >
      <div className={inner}>
        <DoorArt open={open} variant={variant} />
        <div className="text-left">
          <div className={`text-sm font-semibold ${labelCls}`}>{open ? labelOpen : labelClosed}</div>
          <div className={`mt-1 text-xs ${hintCls}`}>Click to open</div>
        </div>
      </div>
    </button>
  );
}

function DoorArt({ open, variant }: { open: boolean; variant: "lavender" | "gold" | "red" | "vibrant" | "usyd" }) {
  const base =
    variant === "gold"
      ? "bg-[rgba(255,215,0,0.12)]"
      : variant === "red"
        ? "bg-[rgba(214,69,69,0.18)]"
        : variant === "vibrant"
          ? "bg-[linear-gradient(90deg,rgba(204,255,0,0.45),rgba(0,180,255,0.35),rgba(184,156,255,0.40))]"
          : variant === "usyd"
            ? "bg-[linear-gradient(90deg,rgba(4,30,66,0.22),rgba(228,0,43,0.16))]"
        : "bg-[var(--accent-soft)]";
  const inset =
    variant === "gold"
      ? "border border-[rgba(255,215,0,0.30)] bg-black/25"
      : variant === "red"
        ? "border border-white/15 bg-black/30"
        : variant === "vibrant"
          ? "border border-black/10 bg-white/55"
          : variant === "usyd"
            ? "border border-[rgba(4,30,66,0.18)] bg-white/55"
      : "border border-[var(--border-strong)] bg-[var(--panel-tint)]/70";
  const door =
    variant === "gold"
      ? "border border-[rgba(255,215,0,0.30)] bg-[linear-gradient(180deg,rgba(255,215,0,0.22),rgba(255,215,0,0.10))]"
      : variant === "red"
        ? "border border-white/15 bg-[linear-gradient(180deg,rgba(214,69,69,0.28),rgba(214,69,69,0.12))]"
        : variant === "vibrant"
          ? "border border-black/10 bg-[linear-gradient(180deg,rgba(204,255,0,0.35),rgba(0,180,255,0.18))]"
          : variant === "usyd"
            ? "border border-[rgba(4,30,66,0.20)] bg-[linear-gradient(180deg,rgba(4,30,66,0.30),rgba(4,30,66,0.12))]"
      : "border border-[var(--border-strong)] bg-[var(--accent)]/35";
  const knob =
    variant === "gold"
      ? "bg-[rgba(255,215,0,0.75)]"
      : variant === "red"
        ? "bg-[rgba(255,255,255,0.70)]"
        : variant === "vibrant"
          ? "bg-[rgba(45,45,45,0.45)]"
          : variant === "usyd"
            ? "bg-[rgba(228,0,43,0.70)]"
        : "bg-[var(--foreground)]/60";
  const glow =
    variant === "gold"
      ? "bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.35),transparent_55%)]"
      : variant === "red"
        ? "bg-[radial-gradient(circle_at_30%_50%,rgba(214,69,69,0.35),transparent_55%)]"
        : variant === "vibrant"
          ? "bg-[radial-gradient(circle_at_30%_50%,rgba(204,255,0,0.35),transparent_55%)]"
          : variant === "usyd"
            ? "bg-[radial-gradient(circle_at_30%_50%,rgba(228,0,43,0.25),transparent_55%)]"
      : "bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.55),transparent_55%)]";

  return (
    <div className="relative size-[46px] shrink-0">
      <div className={`absolute inset-0 rounded-xl ${base}`} />
      <div className={`absolute inset-[5px] rounded-lg ${inset}`} />
      <div
        className={
          `absolute inset-[9px] rounded-md ${door} shadow-[0_10px_18px_var(--shadow)] transition-transform duration-200` +
          (open ? " translate-x-[8px]" : "")
        }
      />
      <div
        className={
          `absolute top-1/2 -translate-y-1/2 size-[6px] rounded-full ${knob} transition-all duration-200` +
          (open ? " left-[28px]" : " left-[22px]")
        }
      />
      {open ? (
        <div className={`absolute inset-[9px] rounded-md ${glow}`} />
      ) : null}
    </div>
  );
}
