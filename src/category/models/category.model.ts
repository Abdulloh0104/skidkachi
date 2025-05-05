import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Discount } from "../../discount/models/discount.model";

interface ICategoryAttr {
  name: string;
  description: string;
  parentId: number;
}

@Table({ tableName: "category", timestamps: false })
export class Category extends Model<Category, ICategoryAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: true;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  parentId: number;

  @BelongsTo(() => Category)
  parent_category: Category;

  @HasMany(() => Discount)
  discount: Discount[];
}