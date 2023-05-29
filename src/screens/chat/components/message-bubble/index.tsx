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

  const sentStyles = [
    styles.bubbleSent,
    isFirstInMessageGroupFromSameRemitent ? styles.firstInSentMessageGroup : {},
    isInMiddleInMessageGroupFromSameRemitent
      ? styles.middleInSentMessageGroup
      : {},
    isLastInMessageGroupFromSameRemitent ? styles.lastInSentMessageGroup : {},
  ];
  const receivedStyles = [
    styles.bubbleReceived,
    isFirstInMessageGroupFromSameRemitent
      ? styles.firstInReceivedMessageGroup
      : {},
    isInMiddleInMessageGroupFromSameRemitent
      ? styles.middleInReceivedMessageGroup
      : {},
    isLastInMessageGroupFromSameRemitent
      ? styles.lastInReceivedMessageGroup
      : {},
  ];

  return (
    <View style={[styles.bubble, isMine ? sentStyles : receivedStyles]}>
      <Text style={children.length < 5 ? styles.shortMessage : {}}>
        {children}
      </Text>
    </View>
  );
}
