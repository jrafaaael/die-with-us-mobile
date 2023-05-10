import { Text } from "../../src/components/text";
import { MINIMUM_BATTERY_LEVEL } from "../../src/utils/minimum-battery-level";

export default function WrongBatteryStatus() {
  return (
    <>
      <Text isTitle size="xl">
        Your battery is bigger than {MINIMUM_BATTERY_LEVEL}% or you're charging
        your phone -.-
      </Text>
    </>
  );
}
