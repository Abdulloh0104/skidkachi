import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Admin } from "./models/admin.model";
import { ActivateAdminDto } from "./dto/activate-admin.dto";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminModel: typeof Admin) {}

  create(createAdminDto: CreateAdminDto) {
    return this.adminModel.create(createAdminDto);
  }

  findAll() {
    return this.adminModel.findAll({ include: { all: true } });
  }

  async findByEmail(email: string) {
    const admin = await this.adminModel.findOne({
      where: { email },
      include: {
        all: true,
      },
    });
    return admin?.dataValues;
  }

  findOne(id: number) {
    return this.adminModel.findByPk(id);
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    const updated = this.adminModel.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
    return updated;
  }

  async remove(id: number) {
    const deleted = await this.adminModel.destroy({ where: { id } });
    if (deleted > 0) {
      return { message: `${id}-admin deleted successfully` };
    }
    return `Admin was not found`;
  }

  async activateAdmin(activateAdminDto: ActivateAdminDto) {
    const admin = await this.findOne(activateAdminDto.adminId);
    if (!admin) {
      throw new NotFoundException("Bunday ADMIN mavjud emas");
    }
    admin.is_active = true;
    await admin.save();

    return "Admin faollashtirildi";
  }
}
