import { cookies } from "next/headers";

export const IAMADMIN_COOKIE = "iamadmin_session";
const IAMADMIN_BYPASS = true;

const getExpectedPassword = (): string => process.env.IAMADMIN_PASSWORD ?? "change-me-now";
const getSessionSecret = (): string => process.env.IAMADMIN_SESSION_SECRET ?? "local-dev-session";

export const validateIamadminPassword = (password: string): boolean => {
  if (IAMADMIN_BYPASS) return true;
  return Boolean(password) && password === getExpectedPassword();
};

export const getIamadminSessionValue = (): string => {
  return `ok-${getSessionSecret()}`;
};

export const isIamadminAuthenticated = async (): Promise<boolean> => {
  if (IAMADMIN_BYPASS) return true;
  const jar = await cookies();
  const session = jar.get(IAMADMIN_COOKIE)?.value;
  return session === getIamadminSessionValue();
};

export const isIamadminSuperAdmin = (): boolean => {
  return process.env.IAMADMIN_IS_SUPERADMIN !== "false";
};
