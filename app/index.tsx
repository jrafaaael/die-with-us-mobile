import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Keyboard } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { useUser } from "../src/providers/user-provider";
import { MessageList } from "../src/screens/chat/components/message-list";
import { MessageComposer } from "../src/screens/chat/components/message-composer";
import { socket } from "../src/screens/chat/libs/socket-io";
import { Message } from "../src/screens/chat/types/message";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const listRef = useRef<FlashList<Message> | null>(null);
  const isNearToBottom = useRef(null);
  const { storedUser } = useUser();

  useEffect(() => {
    function handleNewMessage(data: Message) {
      setMessages((oldMessages) => [...oldMessages, { ...data }]);

      if (data.username === storedUser.username || isNearToBottom?.current) {
        listRef.current?.scrollToEnd({ animated: true });
      }
    }

    socket.on("message.receive", handleNewMessage);

    return () => {
      socket.off("message.receive", handleNewMessage);
    };
  }, []);

  useLayoutEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        if (isNearToBottom?.current) {
          listRef.current?.scrollToEnd({ animated: false });
        }
      },
    );

    return () => {
      keyboardWillShowListener.remove();
    };
  }, []);

  return (
    <>
      <MessageList
        messages={messages}
        listRef={listRef}
        onNearToBottom={() => (isNearToBottom.current = true)}
        onNotNearToBottom={() => (isNearToBottom.current = false)}
      />
      <MessageComposer
        onSubmit={(message: string) =>
          socket.emit("message.send", {
            message,
            username: storedUser.username,
          })
        }
      />
    </>
  );
}
