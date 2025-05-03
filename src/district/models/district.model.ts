import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Region } from "../../region/models/region.model";
import { Store } from "../../store/models/store.model";

interface IDistrictCreationAttr {
  name: string;
  regionId:number
}



@Table({ tableName: "district", timestamps: false })
export class District extends Model<District, IDistrictCreationAttr> {
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

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare regionId: number;
  
  @BelongsTo(() => Region)
  region: Region;

  @HasMany(() => Store)
    stores: Store[];
}





