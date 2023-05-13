import { TextInput, TextInputProps, View } from "react-native";

import { COLORS } from "../../utils/styles";

import { styles } from "./styles";

interface InputProps extends TextInputProps {
  leftElement?: JSX.Element;
}

export function Input({ leftElement, ...props }: InputProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.leftWrapper}>{leftElement ? leftElement : null}</View>
      <TextInput
        placeholderTextColor={COLORS.neutral[500]}
        cursorColor={COLORS.neutral[500]}
        {...props}
        style={[
          styles.input,
          props.style,
          leftElement ? styles.hasLeftElement : {},
        ]}
      />
    </View>
  );
}
