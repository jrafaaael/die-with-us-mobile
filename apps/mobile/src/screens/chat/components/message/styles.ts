import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../../../utils/styles";

export const styles = StyleSheet.create({
  sent: {
    alignItems: "flex-end",
    gap: 4,
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
  bubble: {
    paddingVertical: SPACING.xxs,
    paddingHorizontal: SPACING.sm,
    borderRadius: 16,
  },
  bubbleSent: {
    backgroundColor: COLORS.neutral[800],
    borderTopRightRadius: 4,
  },
  bubbleReceived: {
    backgroundColor: COLORS.blue[600],
    borderTopLeftRadius: 4,
  },
});
