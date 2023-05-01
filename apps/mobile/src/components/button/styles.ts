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
  text: {
    color: COLORS.blue[50],
    textAlign: "center",
  },
});
