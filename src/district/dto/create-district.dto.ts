import { ApiProperty } from "@nestjs/swagger";

export class CreateDistrictDto {
  @ApiProperty({
    example: "Uchtepa",
    description: "Name of District",
  })
  name: string;
  @ApiProperty({
    example: "3",
    description: "ID name of Region",
  })
  regionId: number;
}
