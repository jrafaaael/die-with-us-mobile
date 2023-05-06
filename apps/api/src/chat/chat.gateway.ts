import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway(3001, {
  cors: "*",
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage("message.send")
  handleMessage(@MessageBody() data: string) {
    this.server.emit("message.receive", {
      ...data,
      id: String(new Date().getTime()),
    });
  }
}
