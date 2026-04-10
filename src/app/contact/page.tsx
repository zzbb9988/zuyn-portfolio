"use client";

import Layout from "@/components/Layout";
import CommentsSection from "@/components/CommentsSection";
import DoorButton from "@/components/DoorButton";
import StateButton from "@/components/StateButton";
import { useState } from "react";

const EMAIL = "nkhk1005@gmail.com";

export default function ContactPage() {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <div className="zuyn-panel rounded-2xl">
        <div className="p-5 zuyn-surface zuyn-inner-highlight rounded-2xl">
          <h1 className="text-2xl font-semibold">Enter collaboration portal</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            If you’re building experience-driven or socially-oriented products, I’d love to talk.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="zuyn-panel rounded-2xl">
          <div className="p-5 zuyn-surface zuyn-inner-highlight rounded-2xl">
            <div className="text-sm text-[var(--muted)]">Knock to reveal</div>
            <div className="mt-4">
              <DoorButton open={open} onClick={() => setOpen((v) => !v)} />
            </div>

            {open ? (
              <div className="mt-5 grid gap-3">
                <div className="text-xs text-[var(--muted)]">{EMAIL}</div>
                <StateButton href={`mailto:${EMAIL}`} variant="ghost">
                  <span className="flex items-center gap-2">
                    <MailIcon />
                    {EMAIL}
                  </span>
                </StateButton>
                <StateButton href="https://www.linkedin.com/in/ziying-wang-767942268" external variant="ghost">
                  LinkedIn ↗
                </StateButton>
              </div>
            ) : null}
          </div>
        </div>

        <div className="zuyn-panel rounded-2xl">
          <div className="p-5 zuyn-surface zuyn-inner-highlight rounded-2xl">
            <div className="text-sm font-semibold">What I’m great at</div>
            <ul className="mt-3 list-disc pl-5 text-sm text-[var(--muted)]">
              <li>Experience-driven product systems</li>
              <li>Social mechanics and real-world behaviors</li>
              <li>Non-linear interaction design with clarity</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <CommentsSection />
      </div>
    </Layout>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M4.5 7.5h15v9h-15v-9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M5.5 8.5 12 13.25 18.5 8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}
