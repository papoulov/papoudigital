import { promises as fs } from "node:fs";
import path from "node:path";
import type { AdminUser, AdminUserInput } from "@/types/adminUser";

const STORE_PATH = path.join(process.cwd(), "src", "data", "admin-users.json");

const ensureStore = async (): Promise<void> => {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  try {
    await fs.access(STORE_PATH);
  } catch {
    await fs.writeFile(STORE_PATH, "[]\n", "utf8");
  }
};

export const readAdminUsers = async (): Promise<AdminUser[]> => {
  await ensureStore();
  const raw = await fs.readFile(STORE_PATH, "utf8");

  try {
    const parsed = JSON.parse(raw) as Partial<AdminUser>[];
    if (!Array.isArray(parsed)) return [];
    return parsed.map((user) => ({
      id: user.id ?? crypto.randomUUID(),
      name: user.name ?? "",
      email: user.email ?? "",
      role: user.role === "super_admin" ? "super_admin" : "admin",
      active: user.active ?? true,
      revoked: user.revoked ?? false,
      createdAt: user.createdAt ?? new Date().toISOString(),
      updatedAt: user.updatedAt ?? new Date().toISOString(),
    }));
  } catch {
    return [];
  }
};

export const writeAdminUsers = async (users: AdminUser[]): Promise<void> => {
  await ensureStore();
  await fs.writeFile(STORE_PATH, `${JSON.stringify(users, null, 2)}\n`, "utf8");
};

export const createAdminUser = async (input: AdminUserInput): Promise<AdminUser> => {
  const users = await readAdminUsers();
  const now = new Date().toISOString();

  const created: AdminUser = {
    id: crypto.randomUUID(),
    name: input.name,
    email: input.email.toLowerCase(),
    role: input.role,
    active: input.active ?? true,
    revoked: input.revoked ?? false,
    createdAt: now,
    updatedAt: now,
  };

  users.unshift(created);
  await writeAdminUsers(users);
  return created;
};

export const updateAdminUser = async (
  id: string,
  input: AdminUserInput
): Promise<AdminUser | null> => {
  const users = await readAdminUsers();
  const index = users.findIndex((item) => item.id === id);
  if (index === -1) return null;

  const updated: AdminUser = {
    ...users[index],
    name: input.name,
    email: input.email.toLowerCase(),
    role: input.role,
    active: input.active ?? users[index].active,
    revoked: input.revoked ?? users[index].revoked,
    updatedAt: new Date().toISOString(),
  };

  users[index] = updated;
  await writeAdminUsers(users);
  return updated;
};

export const deleteAdminUser = async (id: string): Promise<boolean> => {
  const users = await readAdminUsers();
  const next = users.filter((item) => item.id !== id);
  if (next.length === users.length) return false;

  await writeAdminUsers(next);
  return true;
};

export const suspendAdminUser = async (id: string): Promise<AdminUser | null> => {
  const users = await readAdminUsers();
  const index = users.findIndex((item) => item.id === id);
  if (index === -1) return null;

  const updated: AdminUser = {
    ...users[index],
    active: false,
    updatedAt: new Date().toISOString(),
  };

  users[index] = updated;
  await writeAdminUsers(users);
  return updated;
};

export const revokeAdminUser = async (id: string): Promise<AdminUser | null> => {
  const users = await readAdminUsers();
  const index = users.findIndex((item) => item.id === id);
  if (index === -1) return null;

  const updated: AdminUser = {
    ...users[index],
    active: false,
    revoked: true,
    updatedAt: new Date().toISOString(),
  };

  users[index] = updated;
  await writeAdminUsers(users);
  return updated;
};
