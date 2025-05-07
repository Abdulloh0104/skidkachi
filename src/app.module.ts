import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { User } from "./users/models/user.model";
import { AuthModule } from "./auth/auth.module";
import { MailModule } from "./mail/mail.module";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/models/admin.model";
import { BotModule } from "./bot/bot.module";
import { TelegrafModule } from "nestjs-telegraf";
import { BOT_NAME } from "./app.constance";
import { RegionModule } from "./region/region.module";
import { Region } from "./region/models/region.model";
import { DistrictModule } from "./district/district.module";
import { District } from "./district/models/district.model";
import { StatusModule } from "./status/status.module";
import { StoreModule } from "./store/store.module";
import { Status } from "./status/models/status.model";
import { Store } from "./store/models/store.model";
import { SocialMediaTypeModule } from "./social-media-type/social-media-type.module";
import { SocialMediaType } from "./social-media-type/models/social-media-type.model";
import { StoreSocialLinkModule } from "./store-social-link/store-social-link.module";
import { StoreSocialLink } from "./store-social-link/models/store-social-link.model";
import { TypesModule } from "./types/types.module";
import { Types } from "./types/models/type.model";
import { CategoryModule } from "./category/category.module";
import { Category } from "./category/models/category.model";
import { DiscountModule } from "./discount/discount.module";
import { Bot } from "./bot/model/bot.model";
import { Discount } from "./discount/models/discount.model";
import { MediaModule } from "./media/media.module";
import { Media } from "./media/models/media.model";
import { Otp } from "./users/models/otp.model";
import { Address } from "./bot/model/address.model";
import { AdsModule } from "./ads/ads.module";
import { Ad } from "./ads/models/ad.model";
import { Favourite } from "./users/models/favourite.model";
import { ReviewModule } from './review/review.module';
import { Review } from "./review/models/review.model";
import { StoreSubscribers } from "./store/models/storeSubscribers.model";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN!,
        middleweres: [],
        include: [BotModule],
      }),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        User,
        Admin,
        Region,
        District,
        Status,
        Store,
        SocialMediaType,
        StoreSocialLink,
        Types,
        Category,
        Bot,
        Discount,
        Media,
        Otp,
        Address,
        Ad,
        Favourite,
        Review,
        StoreSubscribers,
      ],
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
    StoreModule,
    SocialMediaTypeModule,
    StoreSocialLinkModule,
    TypesModule,
    CategoryModule,
    DiscountModule,
    MediaModule,
    AdsModule,
    ReviewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
