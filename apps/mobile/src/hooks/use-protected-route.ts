import { useEffect } from "react";
import { useRouter, useSegments } from "expo-router";

export function useProtectedRoute(username: string | null) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0]?.includes("auth");

    if (!username && !inAuthGroup) {
      router.replace("/auth");
    } else if (username && inAuthGroup) {
      router.replace("/");
    }
  }, [username, segments]);
}
