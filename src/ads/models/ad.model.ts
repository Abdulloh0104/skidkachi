import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IAdCreationAttr {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  targetUrl: string;
  placement: string;
  status:string
  viewCount:number
}

@Table({ tableName: "ads", timestamps: false })
export class Ad extends Model<Ad, IAdCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare title: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @Column({
    type: DataType.DATEONLY(),
  })
  declare startDate: Date;

  @Column({
    type: DataType.DATEONLY(),
  })
  declare endDate: Date;

  @Column({
    type: DataType.STRING,
  })
  declare targetUrl: string;

  @Column({
    type: DataType.STRING(50),
  })
  declare placement: string;

  @Column({
    type: DataType.ENUM('draft','pending','active','paused','expired','rejected')
  })
  declare status: string;

  @Column({
    type: DataType.STRING(50),
  })
  declare viewCount: number;
}
