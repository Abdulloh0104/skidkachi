import { ApiProperty } from "@nestjs/swagger";

export class CreateStoreSocialLinkDto {
  @ApiProperty({
    example: "hhtp:/localhost",
    description: "url",
  })
  url: string;

  @ApiProperty({
    example: "Tijorat",
    description: "Business",
  })
  description: string;

  @ApiProperty({
    example: "4",
    description: "Id namber of Store",
  })
  storeId: number;

  @ApiProperty({
    example: "4",
    description: "Id namber of  Social Media Type",
  })
  socialmediatypeId: number;
}
