import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Types } from './models/type.model';

@Module({
  imports:[SequelizeModule.forFeature([Types])],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
