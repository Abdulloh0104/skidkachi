import { Table, Model, Column, DataType, ForeignKey, HasMany, BelongsTo } from "sequelize-typescript";
// import { Role } from "../../role/models/role.model";

interface IAdminCreationAttr {
  full_name: string;
  username: string;
  email: string;
  password: string;
}

@Table({ tableName: "admin", timestamps: false })
export class Admin extends Model<Admin, IAdminCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
  })
  declare full_name: string;

  @Column({
    type: DataType.STRING(100),
  })
  declare username: string;

  @Column({
    type: DataType.STRING(100),
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @Column({
    type: DataType.STRING(100),
  })
  declare refresh_token: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_creator: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_active: boolean;
}
