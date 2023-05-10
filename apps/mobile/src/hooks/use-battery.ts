import { useEffect, useState } from "react";
import { Platform } from "react-native";
import * as Battery from "expo-battery";

const isIos = Platform.OS === "ios";

export function useBattery() {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [batteryState, setBatteryState] = useState<Battery.BatteryState | null>(
    null,
  );

  useEffect(() => {
    let batteryLevelListener = null;
    let batteryLevelInterval = null;

    if (isIos) {
      batteryLevelListener = Battery.addBatteryLevelListener(
        ({ batteryLevel }) => {
          const batteryLevelInt = Math.round(batteryLevel * 100);
          setBatteryLevel(batteryLevelInt);
        },
      );
    } else {
      batteryLevelInterval = setInterval(async () => {
        const batteryLevel = await Battery.getBatteryLevelAsync();
        const batteryLevelInt = Math.round(batteryLevel * 100);

        setBatteryLevel(batteryLevelInt);
      }, 60000);
    }

    const batteryStateListener = Battery.addBatteryStateListener(
      ({ batteryState }) => {
        setBatteryState(batteryState);
      },
    );

    return () => {
      batteryLevelInterval;
      batteryLevelListener;
      batteryStateListener;
    };
  }, []);

  return { batteryLevel, batteryState };
}
