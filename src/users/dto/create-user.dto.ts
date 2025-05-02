import { IsEmail } from "class-validator";

export class CreateUserDto {
  name: string;
  phone: string;
//   @IsEmail()
  email: string;

  password: string;
  confirm_password: string;
  location: string;
}
