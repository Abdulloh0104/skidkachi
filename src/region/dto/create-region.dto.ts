import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionDto {
  @ApiProperty({
      example: "Tashkent",
      description: "Name of Region",
    })
    // @IsString()
  name: string;
}
