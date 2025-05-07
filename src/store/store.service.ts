import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateStoreDto } from "./dto/create-store.dto";
import { UpdateStoreDto } from "./dto/update-store.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Store } from "./models/store.model";
import { UsersService } from "../users/users.service";

@Injectable()
export class StoreService {
  constructor(@InjectModel(Store) private readonly storeModel: typeof Store,
  private readonly userService: UsersService
) {}
  
  async create(createStoreDto: CreateStoreDto) {
    const newStore = await this.storeModel.create(createStoreDto);
    const user = await this.userService.findOne(createStoreDto.userId);
    if (!user) {
      throw new NotFoundException("Bunday user topilmadi");
    }
    await newStore.$set("storeSubscribers", [user.id]);
    newStore.storeSubscribers = [user];
    await newStore.save();
    return newStore;
  }

  findAll() {
    return this.storeModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
