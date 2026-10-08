import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from "@nestjs/common";
import { User } from "../users/user.entity";

export const IS_PUBLIC_KEY = "isPublic";
export const ROLES_KEY = "roles";

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

export const CurrentUser = createParamDecorator(
  (property: keyof User | undefined, ctx: ExecutionContext) => {
    const user = ctx.switchToHttp().getRequest<{ user: User }>().user;
    return property ? user[property] : user;
  },
);
