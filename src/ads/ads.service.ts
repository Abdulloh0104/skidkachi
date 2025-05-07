import { Injectable } from '@nestjs/common';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Ad } from './models/ad.model';

@Injectable()
export class AdsService {
    constructor(@InjectModel(Ad) private readonly adModel: typeof Ad) {}
  
  create(createAdDto: CreateAdDto) {
    return this.adModel.create(createAdDto)
  }

  findAll() {
    return this.adModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.adModel.findByPk(id)
  }

  update(id: number, updateAdDto: UpdateAdDto) {
    return this.adModel.update(updateAdDto,{where:{id},returning:true})
  }

 async remove(id: number) {
    const deleted = await this.adModel.destroy({ where: { id } });
    if (deleted > 0) {
      return { message: `${id}-ads deleted` };
    }
    return { message: `Ads was not found` };
  }
}
