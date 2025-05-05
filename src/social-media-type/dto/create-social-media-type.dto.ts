import { ApiProperty } from "@nestjs/swagger";

export class CreateSocialMediaTypeDto {
  @ApiProperty({
    example: "sport",
    description: "Name of type",
  })
  based_url: string;
}
