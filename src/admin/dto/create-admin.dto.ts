import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({
    example: "user1",
    description: "Foydalanuvchi ismi familiyasi",
  })
  @IsString()
  full_name: string;

  @ApiProperty({
    example: "user1@amail.uz",
    description: "Foydalanuvchi emaili",
  })
  @IsEmail()
  @IsNotEmpty({
    message: "No name is not allowed",
  })
  email: string;

  @ApiProperty({
    example: "qwerty",
    description: "Foydalanuvchi paroli",
  })
  @IsString()
  @IsNotEmpty({
    message: "No name is not allowed",
  })
  password: string;

  @ApiProperty({
    example: "qwerty",
    description: "Foydalanuvchi paroli",
  })
  @IsNumber()
  roleId: number;
}
