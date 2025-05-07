import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { Region } from "../../region/models/region.model";
import { District } from "../../district/models/district.model";
import { Status } from "../../status/models/status.model";
import { SocialMediaType } from "../../social-media-type/models/social-media-type.model";
import { StoreSocialLink } from "../../store-social-link/models/store-social-link.model";
import { Discount } from "../../discount/models/discount.model";
import { StoreSubscribers } from "./storeSubscribers.model";

interface IStoreCreationAttr {
  name: string;
  location: string;
  phone: string;
  ownerId: number;
  description: string;
  regionId: number;
  districtId: number;
  address: string;
  statusId: number;
  open_time: string;
  close_time: string;
  weekday: number;
  userId: number;
}

@Table({ tableName: "store", timestamps: false })
export class Store extends Model<Store, IStoreCreationAttr> {
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
    type: DataType.STRING(50),
  })
  declare location: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  declare phone: string;

  @Column({
    type: DataType.TIME,
    // defaultValue: "08:00:00",
  })
  declare open_time: string;
  @Column({
    type: DataType.TIME,
    // defaultValue:"20:00:00",
  })
  declare close_time: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare weekday: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare ownerId: number;

  @BelongsTo(() => User)
  user: User;

  @Column({
    type: DataType.STRING(50),
  })
  declare description: string;

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare regionId: number;

  @BelongsTo(() => Region)
  region: Region;

  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare districtId: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare userId: number;

  @BelongsTo(() => District)
  district: District;

  @Column({
    type: DataType.STRING(50),
  })
  declare address: string;

  @ForeignKey(() => Status)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare statusId: number;

  @BelongsTo(() => Status)
  status: Status;

  @BelongsToMany(() => SocialMediaType, () => StoreSocialLink)
  SocialMediaType: SocialMediaType[];

  @HasMany(() => Discount)
  discount: Discount[];

  @BelongsToMany(() => User, () => StoreSubscribers)
  storeSubscribers: User[];
}
