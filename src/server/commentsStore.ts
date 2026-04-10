import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type StoredComment = {
  id: string;
  message: string;
  name: string | null;
  anonymous: boolean;
  createdAt: string;
};

function getStorePath() {
  return path.join(process.cwd(), "data", "comments.json");
}

async function ensureDir() {
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
}

export async function readComments(): Promise<StoredComment[]> {
  await ensureDir();
  const filePath = getStorePath();

  try {
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as StoredComment[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export async function writeComments(comments: StoredComment[]) {
  await ensureDir();
  const filePath = getStorePath();
  await writeFile(filePath, JSON.stringify(comments, null, 2) + "\n", "utf8");
}
