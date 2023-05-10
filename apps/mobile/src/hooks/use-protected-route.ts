import { useEffect } from "react";
import { useRouter, useSegments } from "expo-router";
import { useBattery } from "./use-battery";

export function useProtectedRoute(username: string | null) {
  const segments = useSegments();
  const router = useRouter();
  const { batteryLevel } = useBattery();

  useEffect(() => {
    const inAuthGroup = segments[0]?.includes("auth");

    if (!username && !inAuthGroup) {
      router.replace("/auth");
    } else if (batteryLevel && batteryLevel > 5) {
      router.replace("/auth/battery-status");
    } else if (username && inAuthGroup) {
      router.replace("/");
    }
  }, [username, segments, batteryLevel]);
}
