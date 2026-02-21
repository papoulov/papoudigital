import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, isFirebaseConfigured } from "@/lib/firebase/client";

const ensureDb = () => {
  if (!isFirebaseConfigured || !db) {
    throw new Error("Firebase Firestore is not configured.");
  }
  return db;
};

export const listDocs = async <T>(collectionName: string): Promise<(T & { id: string })[]> => {
  const firestore = ensureDb();
  const snapshot = await getDocs(collection(firestore, collectionName));
  return snapshot.docs.map((item) => ({ id: item.id, ...(item.data() as T) }));
};

export const getDocById = async <T>(collectionName: string, id: string): Promise<(T & { id: string }) | null> => {
  const firestore = ensureDb();
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...(snapshot.data() as T) };
};

export const addDocWithMeta = async <T extends Record<string, unknown>>(collectionName: string, data: T) => {
  const firestore = ensureDb();
  return addDoc(collection(firestore, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

export const setDocWithMerge = async <T extends Record<string, unknown>>(
  collectionName: string,
  id: string,
  data: T
) => {
  const firestore = ensureDb();
  return setDoc(
    doc(firestore, collectionName, id),
    { ...data, updatedAt: serverTimestamp() },
    { merge: true }
  );
};

export const updateDocWithMeta = async <T extends Record<string, unknown>>(
  collectionName: string,
  id: string,
  data: T
) => {
  const firestore = ensureDb();
  return updateDoc(doc(firestore, collectionName, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

export const removeDoc = async (collectionName: string, id: string) => {
  const firestore = ensureDb();
  return deleteDoc(doc(firestore, collectionName, id));
};
