"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import { User } from "firebase/auth";
import { isFirebaseConfigured } from "@/lib/firebase/client";
import { onFirebaseAuthChange } from "@/lib/firebase/auth";

type FirebaseAuthContextValue = {
  user: User | null;
  loading: boolean;
  enabled: boolean;
};

export const FirebaseAuthContext = createContext<FirebaseAuthContextValue>({
  user: null,
  loading: false,
  enabled: false,
});

export default function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(isFirebaseConfigured);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setLoading(false);
      return;
    }

    const unsubscribe = onFirebaseAuthChange((authUser) => {
      setUser(authUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = useMemo(
    () => ({ user, loading, enabled: isFirebaseConfigured }),
    [user, loading]
  );

  return <FirebaseAuthContext.Provider value={value}>{children}</FirebaseAuthContext.Provider>;
}
