import { TextInput, TextInputProps } from "react-native";
import { COLORS } from "../../utils/styles";

import { styles } from "./styles";

export function Input({ ...props }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={COLORS.neutral[500]}
      cursorColor={COLORS.neutral[500]}
      {...props}
      style={[styles.input, props.style]}
    />
  );
}
