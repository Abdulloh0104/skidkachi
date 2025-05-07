import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";

import { User } from "./user.model";
import { Discount } from "../../discount/models/discount.model";

interface IFavouriteCreationAttr {
  userId: string;
  discountId: string;
}

@Table({ tableName: "favourite" })
export class Favourite extends Model<Favourite, IFavouriteCreationAttr> {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  declare userId: string;

  @ForeignKey(() => Discount)
  @Column({ type: DataType.INTEGER })
  declare discountId: string;
}
