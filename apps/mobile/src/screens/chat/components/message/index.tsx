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
  const sentAt = new Date(date).toLocaleString(undefined, {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View style={isSent ? styles.sent : styles.received}>
      <Text style={styles.sender}>{from}</Text>
      <View
        style={[
          styles.wrapper,
          isSent ? styles.wrapperSent : styles.wrapperReceived,
        ]}
      >
        <Text size="xs" style={styles.sentAt}>
          {sentAt}
        </Text>
        <View
          style={[
            styles.bubble,
            isSent ? styles.bubbleSent : styles.bubbleReceived,
          ]}
        >
          <Text>{children}</Text>
        </View>
      </View>
    </View>
  );
}
