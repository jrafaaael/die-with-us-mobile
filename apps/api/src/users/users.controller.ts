import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

import { UserService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const { username } = createUserDto;

    if (!this.usersService.isUsernameAvailable(username)) {
      throw new HttpException("NOT_ACCEPTABLE", HttpStatus.NOT_ACCEPTABLE);
    }

    this.usersService.create(username);

    return {
      username,
    };
  }

  @Get("username-available")
  isUsernameAvailable(@Query("username") username: string) {
    return {
      available: this.usersService.isUsernameAvailable(username),
    };
  }
}
