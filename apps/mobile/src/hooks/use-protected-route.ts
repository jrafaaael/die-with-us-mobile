import { useEffect } from "react";
import { useRouter } from "expo-router";
import { BatteryState } from "expo-battery";

import { useBattery } from "./use-battery";
import { MINIMUM_BATTERY_LEVEL } from "../utils/minimum-battery-level";

export function useProtectedRoute(username: string | null) {
  const router = useRouter();
  const { batteryLevel, batteryState } = useBattery();

  useEffect(() => {
    if (!username) {
      router.replace("/auth");
    } else if (
      batteryLevel >= MINIMUM_BATTERY_LEVEL ||
      batteryState === BatteryState.CHARGING
    ) {
      router.replace("/auth/wrong-battery-status");
    } else if (username) {
      router.replace("/");
    }
  }, [username, batteryLevel, batteryState]);
}
