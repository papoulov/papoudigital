import { App, cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

type ServiceAccountConfig = {
  projectId: string;
  clientEmail: string;
  privateKey: string;
};

const parseServiceAccount = (): ServiceAccountConfig | null => {
  const json = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON;
  if (json) {
    try {
      const parsed = JSON.parse(json) as ServiceAccountConfig;
      if (parsed.projectId && parsed.clientEmail && parsed.privateKey) {
        return {
          ...parsed,
          privateKey: parsed.privateKey.replace(/\\n/g, "\n"),
        };
      }
    } catch {
      return null;
    }
  }

  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) return null;

  return { projectId, clientEmail, privateKey };
};

const account = parseServiceAccount();

let adminApp: App | null = null;
if (account) {
  adminApp = getApps().length > 0 ? getApp() : initializeApp({
    credential: cert(account),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  });
}

const adminAuth = adminApp ? getAuth(adminApp) : null;
const adminDb = adminApp ? getFirestore(adminApp) : null;
const adminStorage = adminApp ? getStorage(adminApp) : null;

export { adminApp, adminAuth, adminDb, adminStorage, account as firebaseAdminConfig };
