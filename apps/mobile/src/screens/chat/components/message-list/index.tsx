import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { Message } from "../message";
import { Message as IMessage } from "../../types/message";

import { styles } from "./styles";

interface Props {
  messages: IMessage[];
}

export function MessageList({ messages }: Props) {
  return (
    <FlashList
      data={messages}
      renderItem={({ item: { message, username, createdAt } }) => (
        <Message from={username} date={createdAt}>
          {message}
        </Message>
      )}
      estimatedItemSize={100}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
    />
  );
}
