import { Module } from "@nestjs/common";
import { StoreService } from "./store.service";
import { StoreController } from "./store.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Store } from "./models/store.model";
import { StoreSubscribers } from "./models/storeSubscribers.model";
import { User } from "../users/models/user.model";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [
    SequelizeModule.forFeature([Store, StoreSubscribers, User]),
    UsersModule,
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
