import { LegacyRef } from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { Message } from "../message";
import { Message as IMessage } from "../../types/message";

import { styles } from "./styles";

interface Props {
  messages: IMessage[];
  listRef: LegacyRef<FlashList<IMessage>>;
}

export function MessageList({ messages, listRef }: Props) {
  return (
    <FlashList
      data={messages}
      renderItem={({ item: { message, username, createdAt } }) => (
        <Message from={username} date={createdAt}>
          {message}
        </Message>
      )}
      estimatedItemSize={100}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsVerticalScrollIndicator={false}
      ref={listRef}
    />
  );
}
