import { LegacyRef } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { Message } from "../message";
import { Message as IMessage } from "../../types/message";

import { styles } from "./styles";

interface Props {
  messages: IMessage[];
  listRef: LegacyRef<FlashList<IMessage>>;
  treshold?: number;
  onNearToBottom?: () => void;
  onNotAtEnd?: () => void;
}

export function MessageList({
  messages,
  treshold = 100,
  listRef,
  onNearToBottom,
  onNotAtEnd,
}: Props) {
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentSize, contentOffset, layoutMeasurement } = e.nativeEvent;

    const isNearToBottom =
      contentOffset.y + layoutMeasurement.height >=
      contentSize.height - treshold;

    if (isNearToBottom) {
      onNearToBottom?.();
    } else {
      onNotAtEnd?.();
    }
  };

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
      onScroll={handleScroll}
    />
  );
}
