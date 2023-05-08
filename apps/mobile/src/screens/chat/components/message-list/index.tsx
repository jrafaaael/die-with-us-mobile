import { FlatList, View } from "react-native";

import { Message } from "../message";
import { Message as IMessage } from "../../types/message";

import { styles } from "./styles";

interface Props {
  messages: IMessage[];
}

export function MessageList({ messages }: Props) {
  return (
    <FlatList
      removeClippedSubviews
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { message, username, createdAt } }) => (
        <Message from={username} date={createdAt}>
          {message}
        </Message>
      )}
      style={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}
