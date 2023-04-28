import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../../../utils/styles";

export const styles = StyleSheet.create({
  message: {
    maxWidth: "90%",
    marginBottom: SPACING.xs,
    paddingVertical: 8,
    paddingHorizontal: SPACING.sm,
    backgroundColor: COLORS.blue[600],
    borderRadius: 15,
    alignSelf: "flex-start"
  },
});
