import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, isFirebaseConfigured } from "@/lib/firebase/client";

const ensureAuth = () => {
  if (!isFirebaseConfigured || !auth) {
    throw new Error("Firebase Auth is not configured.");
  }
  return auth;
};

export const onFirebaseAuthChange = (callback: (user: User | null) => void) => {
  const firebaseAuth = ensureAuth();
  return onAuthStateChanged(firebaseAuth, callback);
};

export const signInWithEmail = async (email: string, password: string) => {
  const firebaseAuth = ensureAuth();
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const signInWithGoogle = async () => {
  const firebaseAuth = ensureAuth();
  const provider = new GoogleAuthProvider();
  return signInWithPopup(firebaseAuth, provider);
};

export const signOutFirebaseUser = async () => {
  const firebaseAuth = ensureAuth();
  return signOut(firebaseAuth);
};
