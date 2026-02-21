import { promises as fs } from "node:fs";
import path from "node:path";
import type { AdminAppConfig, AdminAppConfigInput } from "@/types/adminAppConfig";

const STORE_PATH = path.join(process.cwd(), "src", "data", "admin-app-config.json");

const ensureStore = async (): Promise<void> => {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  try {
    await fs.access(STORE_PATH);
  } catch {
    await fs.writeFile(STORE_PATH, "[]\n", "utf8");
  }
};

export const readAdminAppConfig = async (): Promise<AdminAppConfig[]> => {
  await ensureStore();
  const raw = await fs.readFile(STORE_PATH, "utf8");

  try {
    const parsed = JSON.parse(raw) as AdminAppConfig[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
};

export const writeAdminAppConfig = async (items: AdminAppConfig[]): Promise<void> => {
  await ensureStore();
  await fs.writeFile(STORE_PATH, `${JSON.stringify(items, null, 2)}\n`, "utf8");
};

export const upsertAdminAppConfig = async (
  input: AdminAppConfigInput
): Promise<AdminAppConfig> => {
  const items = await readAdminAppConfig();
  const index = items.findIndex((item) => item.key === input.key);
  const updatedAt = new Date().toISOString();

  const next: AdminAppConfig = {
    key: input.key,
    value: input.value,
    description: input.description,
    updatedAt,
  };

  if (index === -1) {
    items.unshift(next);
  } else {
    items[index] = next;
  }

  await writeAdminAppConfig(items);
  return next;
};

export const deleteAdminAppConfig = async (key: string): Promise<boolean> => {
  const items = await readAdminAppConfig();
  const next = items.filter((item) => item.key !== key);
  if (next.length === items.length) return false;

  await writeAdminAppConfig(next);
  return true;
};
