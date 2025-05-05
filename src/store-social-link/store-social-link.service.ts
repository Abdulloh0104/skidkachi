import { Injectable } from '@nestjs/common';
import { CreateStoreSocialLinkDto } from './dto/create-store-social-link.dto';
import { UpdateStoreSocialLinkDto } from './dto/update-store-social-link.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StoreSocialLink } from './models/store-social-link.model';

@Injectable()
export class StoreSocialLinkService {
  constructor(@InjectModel(StoreSocialLink) private readonly SLinkModel:typeof StoreSocialLink){}
  create(createStoreSocialLinkDto: CreateStoreSocialLinkDto) {
    return this.SLinkModel.create(createStoreSocialLinkDto)
  }

  findAll() {
    return this.SLinkModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.SLinkModel.findByPk(id)
  }

  update(id: number, updateStoreSocialLinkDto: UpdateStoreSocialLinkDto) {
    return this.SLinkModel.update(updateStoreSocialLinkDto,{where:{id},returning:true})
  }

 async remove(id: number) {
    const deleted = await this.SLinkModel.destroy({where:{id}})
    if(deleted > 0){
      return {message: `${id}-store social link successfully deleted`}
    }
    return {message:"Not found"}
  }
}
