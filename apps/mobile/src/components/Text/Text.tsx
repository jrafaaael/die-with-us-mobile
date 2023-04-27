import { Text as RNText, TextProps } from "react-native";
import { styles } from "./styles";

interface Props extends TextProps {}

export function Text({ children, ...props }: Props) {
  return (
    <RNText {...props} style={[styles.base, props.style]}>
      {children}
    </RNText>
  );
}
