import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  private usernames = new Set();

  create(username: string) {
    this.usernames.add(username);
  }

  isUsernameAvailable(username: string) {
    return !this.usernames.has(username);
  }
}
