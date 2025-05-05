import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Store } from "../../store/models/store.model";
import { Category } from "../../category/models/category.model";
import { Types } from "../../types/models/type.model";

interface IDiscountCreationAttr {
  title: string;
  description: string;
  discountPercent: number;
  startDate: Date;
  endDate: Date;
  discountValue: number;
  specialLink: string;
  storeId: number;
  categoryId: number;
  typeId: number;
}

@Table({ tableName: "discount", timestamps: false })
export class Discount extends Model<Discount, IDiscountCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "Sarlavha",
    description: "chegirma nomi",
  })
  @Column({
    type: DataType.STRING,
  })
  declare title: string;

  @ApiProperty({
    example: "Qisqacha ma'lumot",
    description: "extra info",
  })
  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @ApiProperty({
    example: "Chegirma darajasi",
    description: "amount of value",
  })
  @Column({
    type: DataType.STRING,
  })
  declare discountPercent: number;
  @ApiProperty({
    example: "Chegirma boshlanish vaqti",
    description: "start date of the discount",
  })
  @Column({
    type: DataType.DATEONLY(),
  })
  declare startDate: Date;

  @ApiProperty({
    example: "Chegirma tugatish vaqti",
    description: "end date of the discount",
  })
  @Column({
    type: DataType.DATEONLY(),
  })
  declare endDate: Date;

  @ApiProperty({
    example: "Chegirma miqdori",
    description: "number of the discount",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare discountValue: number;

  @ApiProperty({
    example: "Chegirma havolasi",
    description: "link of the discount",
  })
  @Column({
    type: DataType.STRING,
  })
  declare specialLink: string;
  @ApiProperty({
    example: "Chegirma holati",
    description: "position of the discount",
  })
  @Column({
    type: DataType.BOOLEAN,
  })
  declare is_active: boolean;
  //--------------

  @ApiProperty({
    example: "Store ning Id raqami",
    description: "Id number of store",
  })
  @ForeignKey(() => Store)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare storeId: number;

  @BelongsTo(() => Store)
  stores: Store;
  //--------------
  @ApiProperty({
    example: "Category ning Id raqami",
    description: "Id number of category",
  })
  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare categoryId: number;

  @BelongsTo(() => Category)
  categories: Category;
  //--------------

  @ApiProperty({
    example: "Type ning Id raqami",
    description: "Id number of type",
  })
  @ForeignKey(() => Types)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare typeId: number;

  @BelongsTo(() => Category)
  types: Types;
  b;
}
