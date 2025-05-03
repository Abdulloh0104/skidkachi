import { Injectable } from "@nestjs/common";
import { CreateStoreDto } from "./dto/create-store.dto";
import { UpdateStoreDto } from "./dto/update-store.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Store } from "./models/store.model";

@Injectable()
export class StoreService {
  constructor(@InjectModel(Store) private readonly storeModel: typeof Store) {}

  create(createStoreDto: CreateStoreDto) {
    return this.storeModel.create(createStoreDto);
  }

  findAll() {
    return this.storeModel.findAll({include:{all:true}})
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
