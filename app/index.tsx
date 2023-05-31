import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Keyboard } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { useUser } from "../src/providers/user-provider";
import { MessageList } from "../src/screens/chat/components/message-list";
import { MessageComposer } from "../src/screens/chat/components/message-composer";
import { socket } from "../src/screens/chat/libs/socket-io";
import { Message } from "../src/screens/chat/types/message";

function makeid(length = 24) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export default function Chat() {
  const [messages, setMessages] = useState({});
  const listRef = useRef<FlashList<Message> | null>(null);
  const isNearToBottom = useRef(null);
  const { storedUser } = useUser();

  useEffect(() => {
    function handleNewMessage(data: Message) {
      const { optimisticId } = data;
      const message = messages[optimisticId];
      const { id, ...rest } = message;

      const messageById =
        message.username === storedUser.username
          ? {
              [optimisticId]: { ...rest, ...data },
            }
          : { [id]: data };

      setMessages((oldMessages) => ({ ...oldMessages, ...messageById }));

      if (data.username === storedUser.username || isNearToBottom?.current) {
        listRef.current?.scrollToEnd({ animated: true });
      }
    }

    socket.on("message.receive", handleNewMessage);

    return () => {
      socket.off("message.receive", handleNewMessage);
    };
  }, [messages]);

  useLayoutEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        if (isNearToBottom?.current) {
          listRef.current?.scrollToEnd({ animated: false });
        }
      },
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleSubmit = (message: string) => {
    const optimisticId = makeid();
    const optimisticMessage: Message = {
      message,
      username: storedUser.username,
      optimisticId,
    };

    socket.emit("message.send", optimisticMessage);

    const optimisticMessageById: { [id: string]: Message } = {
      [optimisticId]: optimisticMessage,
    };

    setMessages((oldMessages) => ({
      ...oldMessages,
      ...optimisticMessageById,
    }));
  };

  return (
    <>
      <MessageList
        messages={Object.values(messages)}
        listRef={listRef}
        onNearToBottom={() => (isNearToBottom.current = true)}
        onNotNearToBottom={() => (isNearToBottom.current = false)}
      />
      <MessageComposer onSubmit={handleSubmit} />
    </>
  );
}
