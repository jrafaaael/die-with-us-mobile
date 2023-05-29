import { StyleSheet } from "react-native";
import { COLORS } from "../../../../utils/styles";

export const styles = StyleSheet.create({
  wrapper: {
    gap: 4,
  },
  sent: {
    alignItems: "flex-end",
  },
  received: {
    alignItems: "flex-start",
  },
  sender: {
    color: COLORS.neutral[400],
  },
  sentAt: {
    color: COLORS.neutral[500],
  },
});
