import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../../../utils/styles";

export const styles = StyleSheet.create({
  bubble: {
    minWidth: 40,
    paddingVertical: SPACING.xxs,
    paddingHorizontal: SPACING.sm,
    borderRadius: 16,
  },
  bubbleSent: {
    backgroundColor: COLORS.neutral[800],
  },
  bubbleReceived: {
    backgroundColor: COLORS.blue[600],
  },
  isFirstInMessageGroup: {
    borderBottomRightRadius: 4,
  },
  isInMiddleInMessageGroup: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  isLastInMessageGroup: {
    borderTopRightRadius: 4,
  },
  shortMessage: {
    textAlign: "center",
  },
});
