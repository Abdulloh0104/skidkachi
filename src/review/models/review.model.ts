import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Discount } from "../../discount/models/discount.model";
import { User } from "../../users/models/user.model";

interface IReviewCreationAttr {
  discountId: number;
  userId: number;
  comment:string
  rating: number;
}

@Table({ tableName: "review", timestamps: false })
export class Review extends Model<Review, IReviewCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare comment: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare rating: number;

  @ForeignKey(() => Discount)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare discountId: number;

  @BelongsTo(() => Discount)
  discount: Discount;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare userId: number;

  @BelongsTo(() => User)
  user: User;
}
