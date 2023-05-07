import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../../../utils/styles";

export const styles = StyleSheet.create({
  message: {
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
  bubble: {
    maxWidth: "90%",
    marginBottom: SPACING.xs,
    paddingVertical: 8,
    paddingHorizontal: SPACING.sm,
    borderRadius: 15,
  },
  bubbleSent: {
    backgroundColor: COLORS.neutral[800],
  },
  bubbleReceived: {
    backgroundColor: COLORS.blue[600],
  },
});
