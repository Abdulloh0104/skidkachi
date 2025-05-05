import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTypeDto {
  @ApiProperty({
    example: "user",
    description: "Foydalanuvchi roli",
  })
  @IsString()
  @IsNotEmpty({
    message: "No name is not allowed",
  })
  name: string;

  @ApiProperty({
    example: "user rolida",
    description: "user bo'lib faoliyat olib boradi",
  })
  @IsString()
  description: string;
}
