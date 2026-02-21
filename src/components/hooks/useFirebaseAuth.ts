"use client";

import { useContext } from "react";
import { FirebaseAuthContext } from "@/components/providers/FirebaseAuthProvider";

export const useFirebaseAuth = () => {
  return useContext(FirebaseAuthContext);
};
