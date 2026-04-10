import Layout from "@/components/Layout";
import PixelObject from "@/components/PixelObject";

export default function Home() {
  return (
    <Layout>
      <div className="zuyn-bg -mx-5 -mt-6 px-5 pt-6 pb-10 rounded-3xl">
        <div className="mx-auto w-[92vw] max-w-[980px] aspect-[16/10] relative">
          <div className="absolute inset-0 zuyn-panel rounded-3xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[var(--panel-soft)] to-[var(--panel)]">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--panel-soft)] to-transparent opacity-90" />
                <div className="absolute left-0 right-0 bottom-0 h-[42%] bg-[var(--panel-tint)]/55" />
                <div className="absolute left-[10%] top-[18%] w-[22%] h-[18%] bg-white/40 border border-[var(--border)] rounded-2xl">
                  <div className="absolute inset-2 bg-gradient-to-br from-[var(--accent-soft)] to-transparent opacity-70" />
                </div>
              </div>

              <div className="absolute left-[4%] top-[4%] w-[48%]">
                <div className="zuyn-panel rounded-2xl">
                  <div className="rounded-2xl zuyn-surface zuyn-inner-highlight">
                    <div className="zuyn-panel-header flex items-center justify-between gap-3 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-block size-2 rounded-full bg-[var(--accent)]" />
                        <span className="inline-block size-2 rounded-full bg-[color-mix(in_srgb,var(--accent)_65%,white)]" />
                        <span className="inline-block size-2 rounded-full bg-[color-mix(in_srgb,var(--accent)_35%,white)]" />
                      </div>
                      <div className="text-xs">Status</div>
                    </div>
                    <div className="p-5">
                      <div className="text-xl font-semibold">Zuyn Portfolio</div>
                      <div className="mt-1 text-sm text-[var(--muted)]">UI/UX Designer</div>
                      <div className="mt-3 text-sm">
                        I’m not a pixel pusher, I’m a desire pusher.
                      </div>
                      <div className="mt-1 text-sm text-[var(--muted)]">
                        I design experience-driven & socially-oriented products.
                      </div>
                      <div className="mt-3 text-xs text-[var(--muted)]">
                        Click objects to explore.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <RoomSceneObjects />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function RoomSceneObjects() {
  return (
    <>
      <div className="absolute left-[22%] top-[58%]">
        <div className="w-[72px] h-[92px] border border-[var(--border-strong)] zuyn-surface shadow-[0_14px_28px_var(--shadow)] rounded-2xl animate-[idle_2.8s_ease-in-out_infinite] motion-reduce:animate-none">
          <div className="w-full h-[24px] bg-[var(--panel-tint)] rounded-t-2xl" />
          <div className="p-2">
            <div className="h-[14px] bg-[var(--accent-soft)]" />
            <div className="mt-2 h-[14px] bg-[var(--panel-tint)]" />
            <div className="mt-2 h-[14px] bg-[var(--accent-soft)]" />
          </div>
        </div>
        <div className="absolute left-1/2 top-[18px] -translate-x-1/2">
          <div className="w-[48px] h-[48px] border border-[var(--border-strong)] zuyn-surface rounded-2xl shadow-[0_12px_22px_var(--shadow)]" />
          <div className="absolute inset-x-0 top-0 h-[14px] bg-[var(--panel-tint)] rounded-t-2xl" />
          <div className="absolute left-[6px] top-[18px] w-[10px] h-[10px] bg-[var(--foreground)]/70 rounded avatar-eye motion-reduce:opacity-100" />
          <div className="absolute right-[6px] top-[20px] w-[10px] h-[10px] bg-[var(--foreground)]/70 rounded avatar-eye motion-reduce:opacity-100" />
          <div className="absolute left-1/2 bottom-[-10px] -translate-x-1/2 w-[56px] h-[16px] border border-[var(--border-strong)] bg-[var(--accent-soft)] rounded-xl" />
          <div className="absolute left-1/2 bottom-[-28px] -translate-x-1/2 w-[60px] h-[18px] border border-[var(--border-strong)] bg-[var(--panel-tint)] rounded-xl" />
        </div>
      </div>

      <PixelObject label="Play the projects" to="/projects" style={{ left: "60%", top: "56%" }}>
        <div className="w-[92px] h-[70px]">
          <div className="w-full h-[42px] border border-[var(--border-strong)] zuyn-surface shadow-[0_14px_28px_var(--shadow)] rounded-2xl">
            <div className="h-[10px] bg-[var(--panel-tint)] rounded-t-2xl" />
            <div className="p-2">
              <div className="h-[10px] bg-[var(--accent)] opacity-55 rounded" />
              <div className="mt-2 h-[8px] bg-[var(--foreground)] opacity-20 rounded" />
            </div>
          </div>
          <div className="mx-auto mt-2 w-[60px] h-[18px] border border-[var(--border-strong)] bg-[var(--panel-tint)] rounded-xl" />
        </div>
      </PixelObject>

      <PixelObject label="How I think" to="/thinking" style={{ left: "52%", top: "22%" }}>
        <div className="w-[56px] h-[56px] border border-[var(--border-strong)] bg-[var(--accent)]/35 shadow-[0_14px_28px_var(--shadow)] rounded-2xl animate-[floaty_3.6s_ease-in-out_infinite]" />
      </PixelObject>

      <PixelObject label="Past / fragments" to="/braindump" style={{ left: "12%", top: "68%" }}>
        <div className="w-[70px] h-[52px] border border-[var(--border-strong)] zuyn-surface shadow-[0_14px_28px_var(--shadow)] rounded-2xl">
          <div className="h-[12px] bg-[var(--panel-tint)] rounded-t-2xl" />
          <div className="p-2">
            <div className="h-[8px] bg-[var(--foreground)] opacity-18 rounded" />
            <div className="mt-2 h-[8px] bg-[var(--foreground)] opacity-12 rounded" />
          </div>
        </div>
      </PixelObject>

      <PixelObject label="Enter collaboration portal" to="/contact" style={{ left: "82%", top: "40%" }}>
        <div className="w-[62px] h-[92px] border border-[var(--border-strong)] zuyn-surface shadow-[0_14px_28px_var(--shadow)] rounded-2xl">
          <div className="mx-auto mt-6 w-[12px] h-[12px] bg-[var(--accent)]/60 border border-[var(--border-strong)] rounded-full" />
          <div className="absolute left-0 right-0 bottom-0 h-[16px] bg-[var(--panel-tint)] rounded-b-2xl" />
        </div>
      </PixelObject>

      <PixelObject label="Glitch Zone" to="/braindump" style={{ left: "76%", top: "74%" }}>
        <div className="w-[52px] h-[52px] border border-[var(--border-strong)] zuyn-surface shadow-[0_14px_28px_var(--shadow)] rounded-2xl">
          <div className="absolute inset-2 bg-[var(--accent)] opacity-15 rounded-xl" />
          <div className="absolute left-2 top-3 w-[10px] h-[10px] bg-[var(--accent)] opacity-25 rounded" />
          <div className="absolute right-3 bottom-2 w-[10px] h-[10px] bg-[var(--accent)] opacity-18 rounded" />
        </div>
      </PixelObject>

      <style>
        {`@keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
@keyframes idle { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
@keyframes blink { 0%, 93%, 100% { opacity: 1; } 94%, 96% { opacity: 0.1; } }`}
      </style>
      <style>
        {`.avatar-eye { animation: blink 4.6s ease-in-out infinite; } @media (prefers-reduced-motion: reduce) { .avatar-eye { animation: none; } }`}
      </style>
    </>
  );
}
