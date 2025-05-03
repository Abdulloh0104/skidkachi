import { Injectable } from "@nestjs/common";
import { CreateStatusDto } from "./dto/create-status.dto";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Status } from "./models/status.model";

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(Status) private readonly statusModel: typeof Status
  ) {}
  create(createStatusDto: CreateStatusDto) {
    return this.statusModel.create(createStatusDto);
  }

  findAll() {
    return this.statusModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.statusModel.findByPk(id);
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return this.statusModel.update(updateStatusDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    const deleted = await this.statusModel.destroy({ where: { id } });
    if (deleted > 0) {
      return { message: `${id}-status successfully deleted` };
    }
    return { message: `Status not found` };
  }
}
