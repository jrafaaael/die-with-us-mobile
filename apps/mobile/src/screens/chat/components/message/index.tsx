import { View } from "react-native";

import { Text } from "../../../../components/text";
import { useUser } from "../../../../providers/user-provider";

import { styles } from "./styles";

interface Props {
  children: string;
  from: string;
  date: string;
}

export function Message({ children, from, date }: Props) {
  const { storedUsername } = useUser();

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
          styles.bubble,
          isSent ? styles.bubbleSent : styles.bubbleReceived,
        ]}
      >
        <Text>{children}</Text>
      </View>
      <Text size="xs" style={styles.sentAt}>
        {sentAt}
      </Text>
    </View>
  );
}
