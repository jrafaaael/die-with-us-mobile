import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE, SPACING } from "../../utils/styles";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.neutral[800],
    borderWidth: 0.75,
    borderColor: COLORS.neutral[700],
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  leftWrapper: {
    width: 16,
    aspectRatio: 1,
    position: "absolute",
    left: SPACING.sm,
  },
  input: {
    paddingVertical: SPACING.xxs,
    paddingHorizontal: SPACING.sm,
    color: COLORS.neutral[50],
    fontSize: FONT_SIZE.sm,
    fontFamily: "Inter-Regular",
    flex: 1,
  },
  hasLeftElement: {
    paddingLeft: 40,
  },
});
