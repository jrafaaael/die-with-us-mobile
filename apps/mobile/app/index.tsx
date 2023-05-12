import { useEffect, useRef, useState } from "react";
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
  const { storedUsername } = useUser();

  useEffect(() => {
    function handleNewMessage(data: Message) {
      setMessages((oldMessages) => [...oldMessages, { ...data }]);

      if (data.username === storedUsername || isNearToBottom.current) {
        listRef?.current?.scrollToEnd({ animated: true });
      }
    }

    socket.on("message.receive", handleNewMessage);

    return () => {
      socket.off("message.receive", handleNewMessage);
    };
  }, []);

  return (
    <>
      <MessageList
        messages={messages}
        listRef={listRef}
        onNearToBottom={() => (isNearToBottom.current = true)}
        onNotAtEnd={() => (isNearToBottom.current = false)}
      />
      <MessageComposer
        onSubmit={(message: string) =>
          socket.emit("message.send", { message, username: storedUsername })
        }
      />
    </>
  );
}
