import { Injectable } from "@nestjs/common";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Region } from "./models/region.model";

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region) private readonly regionModel: typeof Region
  ) {}

  create(createRegionDto: CreateRegionDto) {
    return this.regionModel.create(createRegionDto);
  }

  findAll() {
    return this.regionModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.regionModel.findByPk(id);
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return this.regionModel.update(updateRegionDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    const deleted = await this.regionModel.destroy({ where: { id } });
    if (deleted > 0) {
      return { message: `${id}-region seccessfully deleted` };
    }
    return { message: `Region not found` };
  }
}
