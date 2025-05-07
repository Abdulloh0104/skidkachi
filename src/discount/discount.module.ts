import { Module } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DiscountController } from './discount.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Discount } from './models/discount.model';
import { UsersModule } from '../users/users.module';
import { Favourite } from '../users/models/favourite.model';
import { User } from '../users/models/user.model';

@Module({
  imports:[SequelizeModule.forFeature([Discount,Favourite,User]),UsersModule],
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule {}
