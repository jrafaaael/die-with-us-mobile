import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";
import { NewMessageDto } from "./dto/new-message.dto";

@WebSocketGateway(3001, {
  cors: "*",
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage("message.send")
  handleMessage(@MessageBody() data: NewMessageDto) {
    this.server.emit("message.receive", {
      ...data,
      id: String(new Date().getTime()),
    });
  }
}
