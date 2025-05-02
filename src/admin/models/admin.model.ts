import { Table, Model, Column, DataType, ForeignKey, HasMany, BelongsTo } from "sequelize-typescript";
// import { Role } from "../../role/models/role.model";

interface IAdminCreationAttr {
  full_name: string;
  email: string;
  password: string;
  roleId: number;
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
  declare is_active: boolean;

  // // @ForeignKey(() => Role)
  // @Column({
  //   type: DataType.INTEGER,
  //   onDelete: "SET NULL",
  // })
  // declare roleId: number;

  // @BelongsTo(() => Role)
  // role: Role;
}
