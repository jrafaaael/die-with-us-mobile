import { useEffect, useMemo } from "react";
import { useRouter } from "expo-router";
import { BatteryState } from "expo-battery";

import { useBattery } from "./use-battery";
import { MINIMUM_BATTERY_LEVEL } from "../utils/minimum-battery-level";
import { User } from "../screens/auth/types/user";

export function useProtectedRoute(user: User | null) {
  const router = useRouter();
  const { batteryLevel, batteryState } = useBattery();

  const route = useMemo(() => {
    if (!user) {
      return "/auth";
    } else if (
      batteryLevel >= MINIMUM_BATTERY_LEVEL ||
      batteryState === BatteryState.CHARGING
    ) {
      return "/auth/wrong-battery-status";
    } else if (user) {
      return "/";
    }
  }, [user, batteryLevel, batteryState]);

  useEffect(() => {
    router.replace(route);
  }, [route]);
}
