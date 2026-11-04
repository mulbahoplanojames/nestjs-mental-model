import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request } from "express";
import { UsersService } from "../users/users.service";
import { Role, User } from "../users/user.entity";
import { IS_PUBLIC_KEY, ROLES_KEY } from "./auth.decorators";

type AuthenticatedRequest = Request & { user?: User };

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly usersService: UsersService,
    private readonly reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const header = request.headers.authorization;
    const match =
      typeof header === "string" ? header.match(/^Bearer\s+(\S+)$/) : null;
    const user = match ? this.usersService.findByToken(match[1]) : undefined;

    if (!user) {
      throw new UnauthorizedException("Missing or invalid access token");
    }

    request.user = user;
    return true;
  }
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (roles === undefined || roles.length === 0) {
      return true;
    }

    const user = context.switchToHttp().getRequest<AuthenticatedRequest>().user;
    return user !== undefined && roles.includes(user.role);
  }
}
