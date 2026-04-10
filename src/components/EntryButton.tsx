import StateButton from "@/components/StateButton";

type Props = {
  href: string;
  children: string;
  className?: string;
};

export default function EntryButton({ href, children, className }: Props) {
  return (
    <StateButton href={href} className={"px-5 py-3 " + (className ?? "")}
    >
      <span className="flex items-center gap-3">
        <span className="relative size-[18px]">
          <span className="absolute inset-0 rounded-md border border-white/70 bg-white/25" />
          <span className="absolute inset-[3px] rounded-[4px] bg-white/30" />
          <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 text-white/90 text-sm leading-none">
            →
          </span>
        </span>
        <span>{children}</span>
      </span>
    </StateButton>
  );
}
