import { NextResponse } from "next/server";
import { readComments, writeComments } from "@/server/commentsStore";

export async function GET() {
  const comments = await readComments();
  return NextResponse.json({ comments });
}

export async function POST(req: Request) {
  const body = (await req.json()) as {
    message?: unknown;
    name?: unknown;
    anonymous?: unknown;
  };

  const message = typeof body.message === "string" ? body.message.trim() : "";
  const anonymous = Boolean(body.anonymous);
  const name = typeof body.name === "string" ? body.name.trim() : null;

  if (message.length < 2 || message.length > 1200) {
    return NextResponse.json({ error: "invalid_message" }, { status: 400 });
  }

  const now = new Date().toISOString();
  const id = crypto.randomUUID();

  const newItem = {
    id,
    message,
    anonymous,
    name: anonymous ? null : name,
    createdAt: now,
  };

  const comments = await readComments();
  comments.unshift(newItem);
  await writeComments(comments);

  return NextResponse.json({ ok: true });
}
