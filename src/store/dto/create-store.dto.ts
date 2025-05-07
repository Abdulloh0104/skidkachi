import { ApiProperty } from "@nestjs/swagger";

export class CreateStoreDto {
  @ApiProperty({
    example: "Malika",
    description: "Name of Store",
  })
  // @IsString()
  name: string;

  @ApiProperty({
    example: "Shayxontoxur tumani",
    description: "Name of location",
  })
  // @IsString()
  location: string;

  @ApiProperty({
    example: "+9989012345678",
    description: "Phone number of Store",
  })
  // @IsString()
  phone: string;

  @ApiProperty({
    example: "2",
    description: "Id number of Owner",
  })
  ownerId: number;

  @ApiProperty({
    example: "Info",
    description: "Extra info of store",
  })
  description: string;

  @ApiProperty({
    example: "1",
    description: "Id number of Region",
  })
  regionId: number;

  @ApiProperty({
    example: "3",
    description: "Id number of District",
  })
  districtId: number;

  @ApiProperty({
    example: "Bozor ro'parasi",
    description: "Name of address",
  })
  address: string;

  @ApiProperty({
    example: "6",
    description: "Id number of Status",
  })
  statusId: number;

  @ApiProperty({
    example: "4",
    description: "Id number of User",
  })
  userId: number;

  @ApiProperty({
    example: "08:00:00",
    description: "Start of working hour",
  })
  open_time: string;

  @ApiProperty({
    example: "20:00:00",
    description: "End of working hour",
  })
  close_time: string;

  @ApiProperty({
    example: "5",
    description: "Weekday number",
  })
  weekday: number;
}
