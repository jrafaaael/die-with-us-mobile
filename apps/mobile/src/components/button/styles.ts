import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../utils/styles";

export const styles = StyleSheet.create({
  button: {
    padding: SPACING.sm,
    backgroundColor: COLORS.blue[600],
    borderWidth: 1.1,
    borderColor: COLORS.blue[500],
    borderBottomWidth: 0,
    borderRadius: 8,
  },
  buttonDisabled: {
    borderColor: COLORS.neutral[500],
    backgroundColor: COLORS.neutral[600],
    opacity: 0.75,
  },
  text: {
    color: COLORS.blue[50],
    textAlign: "center",
  },
  textDisabled: {
    color: COLORS.neutral[500],
  },
});
