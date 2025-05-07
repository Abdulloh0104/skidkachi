import { ApiProperty } from "@nestjs/swagger";

export class CreateDiscountDto {
  @ApiProperty({
    example: "Sarlavha",
    description: "chegirma nomi",
  })
  title: string;
  @ApiProperty({
    example: "Qisqacha ma'lumot",
    description: "extra info",
  })
  description: string;
  @ApiProperty({
    example: "Qisqacha ma'lumot",
    description: "extra info",
  })
  discountPercent: number;
  @ApiProperty({
    example: "Chegirma boshlanish vaqti",
    description: "start date of the discount",
  })
  startDate: Date;

  @ApiProperty({
    example: "Chegirma tugatish vaqti",
    description: "end date of the discount",
  })
  endDate: Date;
  @ApiProperty({
    example: "Chegirma miqdori",
    description: "number of the discount",
  })
  discountValue: number;
  @ApiProperty({
    example: "Chegirma havolasi",
    description: "link of the discount",
  })
  specialLink: string;
  @ApiProperty({
    example: "Store ning Id raqami",
    description: "Id number of store",
  })
  storeId: number;
  @ApiProperty({
    example: "Category ning Id raqami",
    description: "Id number of category",
  })
  categoryId: number;
  @ApiProperty({
    example: "Type ning Id raqami",
    description: "Id number of type",
  })
  typeId: number;

  @ApiProperty({
    example: "User ning Id raqami",
    description: "Id number of user",
  })
  userId: number;
}
