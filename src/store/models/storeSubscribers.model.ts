import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { Store } from "./store.model";


interface IStoreSubscribersCreationAttr {
  userId: string;
  storeId: string;
}

@Table({ tableName: "storesubscribers" })
export class StoreSubscribers extends Model<
  StoreSubscribers,
  IStoreSubscribersCreationAttr
> {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  declare userId: string;

  @ForeignKey(() => Store)
  @Column({ type: DataType.INTEGER })
  declare storeId: string;
}
