import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { CurrentUser, Roles } from "../auth/auth.decorators";
import { Role, User } from "../users/user.entity";
import { CreateTaskDto, UpdateTaskDto } from "./tasks.dto";
import { TasksService } from "./tasks.service";

// TODO (Task 3 & 4): apply the access rules from README.md to every route.
@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  @Post()
  @Roles(Role.Admin, Role.Member)
  create(@Body() dto: CreateTaskDto, @CurrentUser("id") ownerId: number) {
    return this.tasksService.create(dto, ownerId);
  }

  @Patch(":id")
  @Roles(Role.Admin, Role.Member)
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateTaskDto,
    @CurrentUser() user: User,
  ) {
    const task = this.tasksService.findOne(id);
    if (user.role === Role.Member && task.ownerId !== user.id) {
      throw new ForbiddenException("You can only modify your own tasks");
    }
    return this.tasksService.update(id, dto);
  }

  @Delete(":id")
  @Roles(Role.Admin)
  @HttpCode(204)
  remove(@Param("id", ParseIntPipe) id: number) {
    this.tasksService.remove(id);
  }
}
