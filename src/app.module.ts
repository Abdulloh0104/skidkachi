import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { User } from "./users/models/user.model";
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/models/admin.model";
import { BotModule } from './bot/bot.module';
import { TelegrafModule } from "nestjs-telegraf";
import { BOT_NAME } from "./app.constance";
import { RegionModule } from './region/region.module';
import { Region } from "./region/models/region.model";
import { DistrictModule } from './district/district.module';
import { District } from "./district/models/district.model";
import { StatusModule } from './status/status.module';
import { StoreModule } from './store/store.module';
import { Status } from "./status/models/status.model";
import { Store } from "./store/models/store.model";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory:()=>({
        token: process.env.BOT_TOKEN!,
        middleweres: [],
        include: [BotModule],
      })
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [User, Admin,Region,District,Status,Store],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    UsersModule,
    AuthModule,
    MailModule,
    BotModule,
    AdminModule,
    RegionModule,
    DistrictModule,
    StatusModule,
    StoreModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
