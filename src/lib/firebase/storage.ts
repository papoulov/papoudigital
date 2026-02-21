import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { isFirebaseConfigured, storage } from "@/lib/firebase/client";

const ensureStorage = () => {
  if (!isFirebaseConfigured || !storage) {
    throw new Error("Firebase Storage is not configured.");
  }
  return storage;
};

export const uploadFile = async (path: string, file: File): Promise<string> => {
  const firebaseStorage = ensureStorage();
  const storageRef = ref(firebaseStorage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};
