import { Module } from "@nestjs/common";

import { ChatModule } from "./chat/chat.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [ChatModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
