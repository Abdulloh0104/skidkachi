import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Discount } from "../../discount/models/discount.model";

interface ITypeCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "type", timestamps: false })
export class Types extends Model<Types, ITypeCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "user",
    description: "role nomi",
  })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @ApiProperty({
    example: "foydalanuvchi",
    description: "Foydalanuvchi maqomi",
  })
  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @HasMany(() => Discount)
    discount: Discount[];
}
