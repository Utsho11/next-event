// src/components/auth/AuthGuard.tsx

"use client";

import { protectedRoutes } from "@/constant/protected-routes";
import { auth } from "@/lib/firebase.config";
import { onAuthStateChanged, User } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const isProtectedRoute = protectedRoutes.some((route) => {
    if (route.endsWith("/**")) {
      const base = route.replace("/**", "");
      return pathname.startsWith(base + "/");
    }

    return pathname === route;
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (isProtectedRoute && !currentUser) {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [isProtectedRoute, router]);

  if (loading && isProtectedRoute) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isProtectedRoute && !user) {
    return null;
  }

  return <>{children}</>;
}
