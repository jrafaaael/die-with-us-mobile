import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
  constructor(private usersService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const { username } = createUserDto;

    if (!this.usersService.isUsernameAvailable(username)) {
      throw new HttpException("BAD_REQUEST", HttpStatus.BAD_REQUEST);
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
