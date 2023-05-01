import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE, SPACING } from "../../utils/styles";

export const styles = StyleSheet.create({
  input: {
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    backgroundColor: COLORS.neutral[800],
    borderWidth: 1.2,
    borderColor: COLORS.neutral[700],
    borderRadius: 8,
    color: COLORS.neutral[50],
    fontSize: FONT_SIZE.sm,
    fontFamily: "Inter-Regular",
  },
});
