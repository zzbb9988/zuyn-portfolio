"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  compact?: boolean;
};

function safeGetPref() {
  try {
    const v = localStorage.getItem("zuynSoundOn");
    return v === "1";
  } catch {
    return false;
  }
}

export default function SoundToggle({ className, compact }: Props) {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  useEffect(() => {
    setOn(safeGetPref());
  }, []);

  useEffect(() => {
    if (!on) {
      try {
        localStorage.setItem("zuynSoundOn", "0");
      } catch {
        // ignore
      }

      if (oscRef.current) {
        try {
          oscRef.current.stop();
        } catch {
          // ignore
        }
        oscRef.current.disconnect();
        oscRef.current = null;
      }

      if (gainRef.current) {
        gainRef.current.disconnect();
        gainRef.current = null;
      }

      if (ctxRef.current) {
        ctxRef.current.close().catch(() => {});
        ctxRef.current = null;
      }

      return;
    }

    try {
      localStorage.setItem("zuynSoundOn", "1");
    } catch {
      // ignore
    }

    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();

    const gain = ctx.createGain();
    gain.gain.value = 0.018;

    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = 196;

    const lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.07;

    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 10;

    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    lfo.start();

    ctxRef.current = ctx;
    gainRef.current = gain;
    oscRef.current = osc;

    return () => {
      try {
        osc.stop();
      } catch {
        // ignore
      }
      try {
        lfo.stop();
      } catch {
        // ignore
      }
      osc.disconnect();
      lfo.disconnect();
      gain.disconnect();
      ctx.close().catch(() => {});
      ctxRef.current = null;
      gainRef.current = null;
      oscRef.current = null;
    };
  }, [on]);

  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      className={
        "border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition " +
        (className ?? "")
      }
      aria-pressed={on}
      title={on ? "Sound on" : "Sound off"}
    >
      {compact ? (on ? "Sound: On" : "Sound: Off") : on ? "Ambient: On" : "Ambient: Off"}
    </button>
  );
}
