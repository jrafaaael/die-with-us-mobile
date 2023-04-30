import { useEffect, useState } from "react";

import { MessageList } from "../src/screens/chat/components/message-list";
import { MessageComposer } from "../src/screens/chat/components/message-composer";
import socket from "../src/screens/chat/libs/socket-io";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleNewMessage(data: { message: string }) {
      setMessages((oldMessages) => [
        ...oldMessages,
        { ...data, id: String(new Date().getTime()) },
      ]);
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
        onSubmit={(message: string) => socket.emit("message.send", { message })}
      />
    </>
  );
}
