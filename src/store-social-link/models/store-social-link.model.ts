import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Store } from "../../store/models/store.model";
import { SocialMediaType } from "../../social-media-type/models/social-media-type.model";

interface IStoreSocialLinkAttr {
  url: string;
  description: string;
  storeId: number;
  socialmediatypeId: number;
}

@Table({ tableName: "storesociallink", timestamps: false })
export class StoreSocialLink extends Model<
  StoreSocialLink,
  IStoreSocialLinkAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: true;

  @Column({
    type: DataType.STRING,
  })
  url: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @ForeignKey(() => Store)
  @Column({ type: DataType.INTEGER })
  storeId: number;

  @ForeignKey(() => SocialMediaType)
  @Column({ type: DataType.INTEGER })
  socialmediatypeId: number;

  @BelongsTo(() => Store)
  store: Store;

  @BelongsTo(() => SocialMediaType)
  socialMediaType: SocialMediaType;
}
