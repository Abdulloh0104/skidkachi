import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Store } from "../../store/models/store.model";

interface IStatusCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "status", timestamps: false })
export class Status extends Model<Status, IStatusCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  declare name: string;

  @Column({
    type: DataType.STRING(100),
  })
  declare description: string;

  @HasMany(() => Store)
  stores: Store[];
}
