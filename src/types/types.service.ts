import { Injectable } from "@nestjs/common";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { Types } from "./models/type.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class TypesService {
  constructor(@InjectModel(Types) private typeModel: typeof Types) {}
  create(createTypeDto: CreateTypeDto) {
    return this.typeModel.create(createTypeDto);
  }

  findAll() {
    return this.typeModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.typeModel.findByPk(id);
  }

  async update(id: number, updateTypeDto: UpdateTypeDto) {
    const updatedType = await this.typeModel.update(updateTypeDto, {
      where: { id },
      returning: true,
    });
    return updatedType[1][0]
  }

  async remove(id: number) {
    const type = await this.typeModel.destroy({ where: { id } });
    if (type > 0) {
      return { message: `${id}-type deleted` };
    }
    return { message: `Types was not found` };
  }
}
