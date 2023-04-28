import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE, SPACING } from "../../../../utils/styles";

export const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: SPACING.base,
  },
  composer: {
    paddingLeft: SPACING.sm,
    paddingVertical: SPACING.xs,
    backgroundColor: COLORS.neutral[900],
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    maxHeight: 100,
    color: COLORS.neutral[50],
    fontSize: FONT_SIZE.sm,
    flex: 1,
  },
  button: {
    padding: SPACING.xs,
    paddingRight: SPACING.sm,
  },
});
