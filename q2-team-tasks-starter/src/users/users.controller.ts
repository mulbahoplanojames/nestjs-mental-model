import { Controller, Get } from "@nestjs/common";
import { CurrentUser, Roles } from "../auth/auth.decorators";
import { Role, PublicUser, User } from "./user.entity";
import { UsersService } from "./users.service";

// TODO (Task 3): the whole controller is admin-only...
@Controller("users")
@Roles(Role.Admin)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("me")
  @Roles()
  me(@CurrentUser() user: User): PublicUser {
    const { token, ...profile } = user;
    return profile;
  }

  @Get()
  findAll(): PublicUser[] {
    return this.usersService.findAll().map(({ token, ...profile }) => profile);
  }
}
