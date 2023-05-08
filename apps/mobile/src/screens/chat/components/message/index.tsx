import { View } from "react-native";
import { useMMKVString } from "react-native-mmkv";

import { Text } from "../../../../components/text";

import { styles } from "./styles";

interface Props {
  children: string;
  from: string;
  date: string;
}

export function Message({ children, from, date }: Props) {
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
      <Text size="xs">
        {new Date(date).toLocaleString(undefined, {
          hour12: true,
          dateStyle: "short",
          timeStyle: "short",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
    </View>
  );
}
