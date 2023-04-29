import { FlatList } from "react-native";

import { Message } from "../Message/Message";

import { styles } from "./styles";

interface Props {
  messages: { message: string; id: string }[];
}

export function MessageList({ messages }: Props) {
  return (
    <FlatList
      removeClippedSubviews
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { message } }) => <Message>{message}</Message>}
      style={styles.list}
    />
  );
}
