import { useEffect, useState } from "react";
import { useMMKVString } from "react-native-mmkv";

import { MessageList } from "../src/screens/chat/components/message-list";
import { MessageComposer } from "../src/screens/chat/components/message-composer";
import socket from "../src/screens/chat/libs/socket-io";
import { Message } from "../src/screens/chat/types/message";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [storedUsername] = useMMKVString("username");

  useEffect(() => {
    function handleNewMessage(data: Message) {
      setMessages((oldMessages) => [...oldMessages, { ...data }]);
    }

    socket.on("message.receive", handleNewMessage);

    return () => {
      socket.off("message.receive", handleNewMessage);
    };
  }, []);

  return (
    <>
      <MessageList messages={messages} />
      <MessageComposer
        onSubmit={(message: string) =>
          socket.emit("message.send", { message, username: storedUsername })
        }
      />
    </>
  );
}
