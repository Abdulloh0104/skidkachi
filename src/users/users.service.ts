import {
  BadRequestException,
  Injectable,
  ServiceUnavailableException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";

import * as bcrypt from "bcrypt";
import { MailService } from "../mail/mail.service";
import { PhoneUserDto } from "./dto/phone-user.dto";
import * as otpGenerator from "otp-generator";
import { BotService } from "../bot/bot.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    private readonly mailService: MailService,
    private readonly botService:BotService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { password, confirm_password } = createUserDto;
    if (password !== confirm_password) {
      throw new BadRequestException("Parollar mos emas");
    }
    const hashed_password = await bcrypt.hash(password, 7);

    const newUser = await this.userModel.create({
      ...createUserDto,
      hashed_password,
    });

    try {
      await this.mailService.sendMail(newUser);
    } catch (error) {
      console.log(error);
      throw new ServiceUnavailableException("Emailga xat yuborishda xatolik");
    }
    return newUser;
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }

  findUserByEmail(email: string) {
    return this.userModel.findOne({ where: { email } });
  }

  findByToken(hashed_refresh_token: string) {
    return this.userModel.findOne({ where: { hashed_refresh_token } });
  }

  findOne(id: number) {
    return this.userModel.findByPk(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.update(updateUserDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.userModel.destroy({ where: { id } });
  }

  async updateRefreshToken(id: number, hashed_refresh_token: string) {
    const updatedUser = await this.userModel.update(
      { hashed_refresh_token },
      {
        where: { id },
      }
    );
    return updatedUser;
  }

  async activateUser(link: string) {
    if (!link) {
      throw new BadRequestException("Activation link not found");
    }
    const updatedUser = await this.userModel.update(
      {
        is_active: true,
      },
      { where: { activation_link: link, is_active: false }, returning: true }
    );

    if (!updatedUser[1][0]) {
      throw new BadRequestException("User already activated");
    }

    return {
      message: "User activated successfully",
      is_active: updatedUser[1][0].is_active,
    };
  }

  async newOtp(phoneUserDto: PhoneUserDto) {
    const phone_number = phoneUserDto.phone;

    const otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    //--------------------BOT----------------------
    const isSend = await this.botService.sendOtp(phone_number,otp)
    if(!isSend){
      throw new BadRequestException("Avval botdan ro'yxatdan o't")
    }else{
      return {message:"OTP botga yuborildi"}
    }
    //--------------------SMS----------------------
    //--------------------EMAIL----------------------
  }
}
