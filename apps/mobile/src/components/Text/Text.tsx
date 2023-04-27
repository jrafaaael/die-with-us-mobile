import { Text as RNText, TextProps } from "react-native";

import { FONT_SIZE } from "../../utils/styles";

import { styles } from "./styles";

interface BaseProps extends TextProps {
  size?: keyof typeof FONT_SIZE;
}

export function Text({ children, size = "base", ...props }: BaseProps) {
  return (
    <RNText
      {...props}
      style={[styles.base, { fontSize: FONT_SIZE[size] }, props.style]}
    >
      {children}
    </RNText>
  );
}
