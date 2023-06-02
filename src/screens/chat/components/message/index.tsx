import { View } from "react-native";

import { MessageBubble } from "../message-bubble";
import { Text } from "../../../../components/text";
import { Clock } from "../../../../components/icons/outlined/clock";
import { useUser } from "../../../../providers/user-provider";
import { Message as IMessage } from "../../types/message";
import { COLORS, SPACING } from "../../../../utils/styles";

import { styles } from "./styles";

interface Props {
  children: string;
  from: string;
  date: string;
  previousMessage: IMessage | null;
  nextMessage: IMessage | null;
  wasBroadcasted: boolean;
}

export function Message({
  children,
  from,
  date,
  previousMessage,
  nextMessage,
  wasBroadcasted,
}: Props) {
  const { storedUser } = useUser();

  const isMine = from === storedUser.username;
  const previousMessageIsSameRemitent = previousMessage?.username === from;
  const nextMessageIsSameRemitent = nextMessage?.username === from;
  const sentAt = new Date(date).toLocaleString(undefined, {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View style={[styles.wrapper, isMine ? styles.sent : styles.received]}>
      {!previousMessageIsSameRemitent ? (
        <Text style={styles.sender}>{from}</Text>
      ) : null}
      <MessageBubble
        isMine={isMine}
        previousMessageIsSameRemitent={previousMessageIsSameRemitent}
        nextMessageIsSameRemitent={nextMessageIsSameRemitent}
      >
        {children}
      </MessageBubble>
      {!wasBroadcasted ? (
        <Clock
          width={SPACING.sm}
          height={SPACING.sm}
          stroke={COLORS.neutral[400]}
        />
      ) : nextMessage === null || !nextMessageIsSameRemitent ? (
        <View style={{ height: SPACING.sm }}>
          <Text size="xs" style={styles.sentAt}>
            {sentAt}
          </Text>
        </View>
      ) : null}
    </View>
  );
}
