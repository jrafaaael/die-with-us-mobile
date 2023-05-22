import { useEffect } from "react";
import { useRouter } from "expo-router";
import { BatteryState } from "expo-battery";

import { useBattery } from "./use-battery";
import { MINIMUM_BATTERY_LEVEL } from "../utils/minimum-battery-level";
import { User } from "../screens/auth/types/user";

export function useProtectedRoute(user: User | null) {
  const router = useRouter();
  const { batteryLevel, batteryState } = useBattery();

  useEffect(() => {
    if (!user) {
      router.replace("/auth");
    } else if (
      batteryLevel >= MINIMUM_BATTERY_LEVEL ||
      batteryState === BatteryState.CHARGING
    ) {
      router.replace("/auth/wrong-battery-status");
    } else if (user) {
      router.replace("/");
    }
  }, [user, batteryLevel, batteryState]);
}
