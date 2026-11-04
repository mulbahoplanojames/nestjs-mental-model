import { PartialType } from "@nestjs/mapped-types";
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { TaskStatus } from "./task.entity";

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
