export type AdminUserRole = "admin" | "super_admin";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminUserRole;
  active: boolean;
  revoked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AdminUserInput {
  name: string;
  email: string;
  role: AdminUserRole;
  active?: boolean;
  revoked?: boolean;
}
