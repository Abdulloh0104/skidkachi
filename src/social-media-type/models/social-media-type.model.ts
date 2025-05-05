import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Store } from "../../store/models/store.model";
import { StoreSocialLink } from "../../store-social-link/models/store-social-link.model";

interface ISocialMediaTypeCreationAttr {
  based_url: string;
}

@Table({ tableName: "socialmediatype" })
export class SocialMediaType extends Model<
  SocialMediaType,
  ISocialMediaTypeCreationAttr
> {
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
  declare based_url: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_active: boolean;

  @BelongsToMany(() => Store, () => StoreSocialLink)
  Stores: Store[];
}
