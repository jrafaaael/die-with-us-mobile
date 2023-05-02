import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";

import { Text } from "../text";

import { styles } from "./styles";

interface ButtonProps extends PressableProps {
  pressedStyle?: StyleProp<ViewStyle>;
}

export function Button({ children, pressedStyle, ...props }: ButtonProps) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.button,
        props.disabled && styles.buttonDisabled,
        props.style as StyleProp<ViewStyle>,
        pressed && pressedStyle ? pressedStyle : {},
      ]}
    >
      {typeof children === "string" ? (
        <Text
          isTitle
          style={[styles.text, props.disabled ? styles.textDisabled : {}]}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
