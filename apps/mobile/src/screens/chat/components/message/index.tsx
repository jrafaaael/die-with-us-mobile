import { View } from "react-native";
import { useMMKVString } from "react-native-mmkv";

import { Text } from "../../../../components/text";

import { styles } from "./styles";

interface Props {
  children: string;
  from: string;
}

export function Message({ children, from }: Props) {
  const [storedUsername] = useMMKVString("username");
  const isSent = from === storedUsername;

  return (
    <View style={[styles.message, isSent ? styles.sent : styles.received]}>
      <Text style={styles.sender}>{from}</Text>
      <View
        style={[
          styles.bubble,
          isSent ? styles.bubbleSent : styles.bubbleReceived,
        ]}
      >
        <Text>{children}</Text>
      </View>
    </View>
  );
}
