import { Module } from "@nestjs/common";

import { ChatModule } from "./chat/chat.module";

@Module({
  imports: [ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
