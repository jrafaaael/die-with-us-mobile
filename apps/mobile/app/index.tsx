import { useState } from "react";

import { MessageList } from "../src/screens/Chat/components/MessageList/MessageList";
import { MessageComposer } from "../src/screens/Chat/components/MessageComposer/MessageComposer";

export default function Chat() {
  const [messages, setMessages] = useState([
    { message: "idk", id: String(new Date().getTime()) },
  ]);

  return (
    <>
      <MessageList messages={messages} />
      <MessageComposer
        onSubmit={(message) =>
          setMessages((oldMessages) => [
            ...oldMessages,
            { message, id: String(new Date().getTime()) },
          ])
        }
      />
    </>
  );
}
