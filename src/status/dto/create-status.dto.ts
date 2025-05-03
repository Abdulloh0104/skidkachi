import { ApiProperty } from "@nestjs/swagger";

export class CreateStatusDto {
  @ApiProperty({
    example: "A'lo",
    description: "Name of Status",
  })
  name: string;
  @ApiProperty({
    example: "Info",
    description: "Extra info of Status",
  })
  description: string;
}
