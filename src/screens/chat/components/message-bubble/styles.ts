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
  firstInSentMessageGroup: {
    borderBottomRightRadius: 4,
  },
  middleInSentMessageGroup: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  lastInSentMessageGroup: {
    borderTopRightRadius: 4,
  },
  firstInReceivedMessageGroup: {
    borderBottomLeftRadius: 4,
  },
  middleInReceivedMessageGroup: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  lastInReceivedMessageGroup: {
    borderTopLeftRadius: 4,
  },
  shortMessage: {
    textAlign: "center",
  },
});
