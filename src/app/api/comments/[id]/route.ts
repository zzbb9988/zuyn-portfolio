import { NextResponse } from "next/server";
import { readComments, writeComments } from "@/server/commentsStore";

type Params = {
  params: Promise<{ id: string }>;
};

export async function DELETE(req: Request, { params }: Params) {
  const { id } = await params;
  const token = req.headers.get("x-admin-token") ?? "";

  const expected = process.env.COMMENTS_ADMIN_TOKEN;
  if (!expected || token !== expected) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const comments = await readComments();
  const next = comments.filter((c) => c.id !== id);
  await writeComments(next);

  return NextResponse.json({ ok: true });
}
