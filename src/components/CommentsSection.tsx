"use client";

import { useEffect, useMemo, useState } from "react";

type Comment = {
  id: string;
  message: string;
  name: string | null;
  anonymous: boolean;
  createdAt: string;
};

export default function CommentsSection() {
  const [items, setItems] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [message, setMessage] = useState("");
  const [adminToken, setAdminToken] = useState("");
  const trimmed = message.trim();
  const canSubmit = useMemo(() => trimmed.length >= 2 && trimmed.length <= 1200, [trimmed]);

  useEffect(() => {
    try {
      const v = localStorage.getItem("zuynAdminToken");
      if (v) setAdminToken(v);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      if (adminToken) localStorage.setItem("zuynAdminToken", adminToken);
    } catch {
      // ignore
    }
  }, [adminToken]);

  async function refresh() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/comments", { cache: "no-store" });
      if (!res.ok) {
        setError("Couldn’t load messages.");
        return;
      }
      const data = (await res.json()) as { comments: Comment[] };
      setItems(data.comments);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void refresh();
  }, []);

  async function submit() {
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    setError(null);
    setNotice(null);
    try {
      const payload = {
        message: trimmed,
        name: name.trim() ? name.trim() : null,
        anonymous,
      };

      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const msg = res.status === 400 ? "Message is invalid." : "Couldn’t post message.";
        setError(msg);
        return;
      }

      setMessage("");
      if (anonymous) setName("");
      setNotice("Posted.");
      await refresh();
    } finally {
      setSubmitting(false);
    }
  }

  async function remove(id: string) {
    if (!adminToken) return;
    setError(null);
    setNotice(null);
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
      headers: adminToken ? { "x-admin-token": adminToken } : {},
    });

    if (!res.ok) {
      setError(res.status === 401 ? "Invalid admin token." : "Couldn’t delete message.");
      return;
    }

    setNotice("Deleted.");
    await refresh();
  }

  return (
    <div className="zuyn-panel rounded-2xl">
      <div className="zuyn-surface zuyn-inner-highlight rounded-2xl p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-lg font-semibold">Leave a message</div>
            <div className="mt-1 text-sm text-[var(--muted)]">
              A tiny guestbook. You can sign it or stay anonymous.
            </div>
          </div>
          <div className="min-w-[180px]">
            <label className="block text-xs text-[var(--muted)]">Admin token (for delete)</label>
            <input
              value={adminToken}
              onChange={(e) => setAdminToken(e.target.value)}
              className="mt-2 w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm bg-[var(--panel)]/60"
              placeholder="Optional"
            />
          </div>
        </div>

        {error ? (
          <div className="mt-4 rounded-xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--foreground)] bg-[var(--accent-soft)]">
            {error}
          </div>
        ) : null}
        {notice ? (
          <div className="mt-4 rounded-xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--muted)] bg-[var(--panel)]/50">
            {notice}
          </div>
        ) : null}

        <div className="mt-5 grid gap-3">
          <div className="grid gap-2 md:grid-cols-[1fr_200px]">
            <div>
              <label className="block text-xs text-[var(--muted)]">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full min-h-[92px] rounded-xl border border-[var(--border)] px-3 py-2 text-sm bg-[var(--panel)]/60"
                placeholder="Say hi, share thoughts, or leave a collaboration idea..."
              />
              <div className="mt-2 text-xs text-[var(--muted)]">
                {trimmed.length}/1200
              </div>
            </div>
            <div className="grid gap-3">
              <div>
                <label className="block text-xs text-[var(--muted)]">Name (optional)</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={anonymous}
                  className="mt-2 w-full rounded-xl border border-[var(--border)] px-3 py-2 text-sm bg-[var(--panel)]/60 disabled:opacity-60"
                  placeholder={anonymous ? "Anonymous" : "Your name"}
                />
              </div>
              <label className="flex items-center gap-2 text-sm text-[var(--muted)] select-none">
                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                  className="size-4"
                />
                Post anonymously
              </label>
              <button
                type="button"
                onClick={() => void submit()}
                disabled={!canSubmit || submitting}
                className={
                  "rounded-xl px-4 py-3 text-sm font-semibold border border-[var(--border-strong)] shadow-[0_10px_30px_var(--shadow)] transition " +
                  (canSubmit && !submitting
                    ? "bg-[var(--accent)] text-white hover:brightness-105"
                    : "bg-[var(--panel-tint)] text-[var(--muted)] opacity-70")
                }
              >
                {submitting ? "Posting..." : "Post message"}
              </button>
            </div>
          </div>

          <div className="mt-2">
            <div className="text-sm font-semibold">Messages</div>
            <div className="mt-3 grid gap-3">
              {loading ? (
                <div className="text-sm text-[var(--muted)]">Loading...</div>
              ) : items.length === 0 ? (
                <div className="text-sm text-[var(--muted)]">Be the first to leave a note.</div>
              ) : (
                items.map((c) => (
                  <div key={c.id} className="rounded-2xl border border-[var(--border)] zuyn-surface zuyn-inner-highlight p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold">
                          {c.anonymous ? "Anonymous" : c.name || "Anonymous"}
                        </div>
                        <div className="mt-2 text-sm text-[var(--foreground)] leading-6 whitespace-pre-wrap">
                          {c.message}
                        </div>
                        <div className="mt-2 text-xs text-[var(--muted)]">
                          {new Date(c.createdAt).toLocaleString()}
                        </div>
                      </div>
                      {adminToken ? (
                        <button
                          type="button"
                          onClick={() => void remove(c.id)}
                          className="shrink-0 rounded-xl border border-[var(--border)] px-3 py-2 text-xs text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--accent-soft)] transition"
                        >
                          Delete
                        </button>
                      ) : null}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
