import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../../../utils/styles";

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
    flex: 1,
  },
  button: {
    padding: SPACING.sm,
  }
});
