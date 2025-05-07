import { Injectable } from "@nestjs/common";
import { CreateMediaDto } from "./dto/create-media.dto";
import { UpdateMediaDto } from "./dto/update-media.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Media } from "./models/media.model";

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media) private readonly mediaModel: typeof Media) {}

  create(createMediaDto: CreateMediaDto) {
    return this.mediaModel.create(createMediaDto);
  }

  findAll() {
    return this.mediaModel.findAll({ include: { all: true } });
  }

  findAllByTableName(tableName: string) {
    return this.mediaModel.findAll({
      where: { tableName },
      include: { all: true },
    });
  }
  
  findOne(id: number) {
    return this.mediaModel.findByPk(id);
  }


  findOneByTableIdName(tableName: string, tableId: number) {
    return this.mediaModel.findAll({
      where: { tableName, tableId },
      include: { all: true },
    });
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return this.mediaModel.update(updateMediaDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    const deleted = await this.mediaModel.destroy({ where: { id } });
    if (deleted > 0) {
      return { message: `${id}-media deleted` };
    }
    return { message: `Media was not found` };
  }
}
