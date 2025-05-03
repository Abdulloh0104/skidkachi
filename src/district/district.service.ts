import { Injectable } from "@nestjs/common";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { InjectModel } from "@nestjs/sequelize";
import { District } from "./models/district.model";

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District) private readonly districtModel: typeof District
  ) {}
  create(createDistrictDto: CreateDistrictDto) {
    return this.districtModel.create(createDistrictDto);
  }

  findAll() {
    return this.districtModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.districtModel.findByPk(id);
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return this.districtModel.update(updateDistrictDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    const deleted = await this.districtModel.destroy({ where: { id } });
    if (deleted > 0) {
      return { message: `${id}-district successfully deleted` };
    }
    return { message: `District not found` };
  }
}
