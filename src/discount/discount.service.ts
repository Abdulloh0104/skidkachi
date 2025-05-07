import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateDiscountDto } from "./dto/create-discount.dto";
import { UpdateDiscountDto } from "./dto/update-discount.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Discount } from "./models/discount.model";
import { UsersService } from "../users/users.service";

@Injectable()
export class DiscountService {
  constructor(
    @InjectModel(Discount) private readonly discountModel: typeof Discount,
    private readonly userService: UsersService
  ) {}

  async create(createDiscountDto: CreateDiscountDto) {
    const newDiscount = await this.discountModel.create(createDiscountDto);
    const user = await this.userService.findOne(createDiscountDto.userId);
    if (!user) {
      throw new NotFoundException("Bunday user topilmadi");
    }
    await newDiscount.$set("favourites", [user.id]); // user-role table
    newDiscount.favourites = [user];
    await newDiscount.save();
    return newDiscount;
  }

  findAll() {
    return this.discountModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.discountModel.findByPk(id);
  }

  update(id: number, updateDiscountDto: UpdateDiscountDto) {
    return this.discountModel.update(updateDiscountDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    const deleted = await this.discountModel.destroy({ where: { id } });
    if (deleted > 0) {
      return { message: `${id}-discount deleted` };
    }
    return { message: `Discount was not found` };
  }
}
