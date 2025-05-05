import { Injectable } from '@nestjs/common';
import { CreateSocialMediaTypeDto } from './dto/create-social-media-type.dto';
import { UpdateSocialMediaTypeDto } from './dto/update-social-media-type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SocialMediaType } from './models/social-media-type.model';

@Injectable()
export class SocialMediaTypeService {

  constructor(@InjectModel(SocialMediaType) private readonly SMTModul:typeof SocialMediaType){}
  create(createSocialMediaTypeDto: CreateSocialMediaTypeDto) {
    return this.SMTModul.create(createSocialMediaTypeDto)
  }

  findAll() {
    return this.SMTModul.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.SMTModul.findByPk(id)
  }

  update(id: number, updateSocialMediaTypeDto: UpdateSocialMediaTypeDto) {
    return this.SMTModul.update(updateSocialMediaTypeDto,{where:{id},returning:true})
  }

 async remove(id: number) {
    const deleted = await this.SMTModul.destroy({where:{id}})
    if(deleted > 0){
      return {message :`${id}-social media type deleted`}
    }
      return {message :`Social media type not found`}
  }
}
