import { promises as fs } from "node:fs";
import path from "node:path";
import type { AdminContentBlock, AdminContentBlockInput } from "@/types/adminContent";

const STORE_PATH = path.join(process.cwd(), "src", "data", "admin-content-blocks.json");

const ensureStore = async (): Promise<void> => {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  try {
    await fs.access(STORE_PATH);
  } catch {
    await fs.writeFile(STORE_PATH, "[]\n", "utf8");
  }
};

export const readAdminContentBlocks = async (): Promise<AdminContentBlock[]> => {
  await ensureStore();
  const raw = await fs.readFile(STORE_PATH, "utf8");

  try {
    const parsed = JSON.parse(raw) as AdminContentBlock[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
};

export const writeAdminContentBlocks = async (blocks: AdminContentBlock[]): Promise<void> => {
  await ensureStore();
  await fs.writeFile(STORE_PATH, `${JSON.stringify(blocks, null, 2)}\n`, "utf8");
};

export const createAdminContentBlock = async (
  input: AdminContentBlockInput
): Promise<AdminContentBlock> => {
  const blocks = await readAdminContentBlocks();
  const now = new Date().toISOString();

  const created: AdminContentBlock = {
    id: crypto.randomUUID(),
    key: input.key,
    title: input.title,
    body: input.body,
    section: input.section,
    createdAt: now,
    updatedAt: now,
  };

  blocks.unshift(created);
  await writeAdminContentBlocks(blocks);
  return created;
};

export const updateAdminContentBlock = async (
  id: string,
  input: AdminContentBlockInput
): Promise<AdminContentBlock | null> => {
  const blocks = await readAdminContentBlocks();
  const index = blocks.findIndex((item) => item.id === id);
  if (index === -1) return null;

  const updated: AdminContentBlock = {
    ...blocks[index],
    key: input.key,
    title: input.title,
    body: input.body,
    section: input.section,
    updatedAt: new Date().toISOString(),
  };

  blocks[index] = updated;
  await writeAdminContentBlocks(blocks);
  return updated;
};

export const deleteAdminContentBlock = async (id: string): Promise<boolean> => {
  const blocks = await readAdminContentBlocks();
  const next = blocks.filter((item) => item.id !== id);

  if (next.length === blocks.length) return false;

  await writeAdminContentBlocks(next);
  return true;
};
