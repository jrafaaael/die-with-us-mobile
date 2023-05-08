import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../../../utils/styles";

export const styles = StyleSheet.create({
  sent: {
    alignItems: "flex-end",
  },
  received: {
    alignItems: "flex-start",
  },
  sender: {
    color: COLORS.neutral[400],
    marginBottom: 4,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  wrapperSent: {
    flexDirection: "row",
  },
  wrapperReceived: {
    flexDirection: "row-reverse",
  },
  sentAt: {
    color: COLORS.neutral[500],
    flexShrink: 0,
  },
  bubble: {
    paddingVertical: SPACING.xxs,
    paddingHorizontal: SPACING.sm,
    borderRadius: 16,
    flexShrink: 1,
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
