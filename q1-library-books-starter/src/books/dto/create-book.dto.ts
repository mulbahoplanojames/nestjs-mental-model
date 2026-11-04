import { Transform } from "class-transformer";
import {
  ArrayMaxSize,
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
} from "class-validator";

const trim = ({ value }: { value: unknown }) =>
  typeof value === "string" ? value.trim() : value;

export class CreateBookDto {
  @Transform(trim)
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @Transform(trim)
  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @Matches(/^(978|979)\d{10}$/)
  isbn: string;

  @IsInt()
  @Min(1450)
  @Max(new Date().getFullYear())
  publishedYear: number;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(5)
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  genres: string[] = [];

  @IsOptional()
  @IsBoolean()
  available: boolean = true;
}
