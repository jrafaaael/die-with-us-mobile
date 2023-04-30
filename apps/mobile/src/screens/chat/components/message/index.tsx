import { View } from "react-native";

import { Text } from "../../../../components/text";

import { styles } from "./styles";

interface Props {
  children: string;
}

export function Message({ children }: Props) {
  return (
    <View style={styles.message}>
      <Text>{children}</Text>
    </View>
  );
}
