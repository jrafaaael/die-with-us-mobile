import { useEffect } from "react";
import { useRouter, useSegments } from "expo-router";
import { BatteryState } from "expo-battery";

import { useBattery } from "./use-battery";
import { MINIMUM_BATTERY_LEVEL } from "../utils/minimum-battery-level";

export function useProtectedRoute(username: string | null) {
  const segments = useSegments();
  const router = useRouter();
  const { batteryLevel, batteryState } = useBattery();

  useEffect(() => {
    const inAuthGroup = segments[0]?.includes("auth");

    if (!username && !inAuthGroup) {
      router.replace("/auth");
    } else if (
      batteryLevel >= MINIMUM_BATTERY_LEVEL ||
      batteryState === BatteryState.CHARGING
    ) {
      router.replace("/auth/wrong-battery-status");
    } else {
      router.replace("/");
    }
  }, [username, segments, batteryLevel, batteryState]);
}
