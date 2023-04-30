import { Text as RNText, TextProps } from "react-native";

import { FONT_SIZE } from "../../utils/styles";

import { styles } from "./styles";

interface BaseProps extends TextProps {
  size?: keyof typeof FONT_SIZE;
  isTitle?: boolean;
}

export function Text({
  children,
  size = "base",
  isTitle,
  ...props
}: BaseProps) {
  return (
    <RNText
      {...props}
      style={[
        styles.base,
        { fontSize: FONT_SIZE[size] },
        isTitle && styles.title,
        props.style,
      ]}
    >
      {children}
    </RNText>
  );
}
