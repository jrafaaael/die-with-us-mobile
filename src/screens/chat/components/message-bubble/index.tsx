import { View } from "react-native";

import { Text } from "../../../../components/text";

import { styles } from "./styles";

interface Props {
  children: string;
  previousMessageIsSameRemitent: boolean;
  nextMessageIsSameRemitent: boolean;
  isMine: boolean;
}

export function MessageBubble({
  children,
  isMine,
  nextMessageIsSameRemitent,
  previousMessageIsSameRemitent,
}: Props) {
  const isFirstInMessageGroupFromSameRemitent =
    !previousMessageIsSameRemitent && nextMessageIsSameRemitent;
  const isInMiddleInMessageGroupFromSameRemitent =
    previousMessageIsSameRemitent && nextMessageIsSameRemitent;
  const isLastInMessageGroupFromSameRemitent =
    previousMessageIsSameRemitent && !nextMessageIsSameRemitent;

  return (
    <View
      style={[
        styles.bubble,
        isMine ? styles.bubbleSent : styles.bubbleReceived,
        isFirstInMessageGroupFromSameRemitent
          ? styles.isFirstInMessageGroup
          : {},
        isInMiddleInMessageGroupFromSameRemitent
          ? styles.isInMiddleInMessageGroup
          : {},
        isLastInMessageGroupFromSameRemitent ? styles.isLastInMessageGroup : {},
      ]}
    >
      <Text style={children.length < 5 ? styles.shortMessage : {}}>
        {children}
      </Text>
    </View>
  );
}
