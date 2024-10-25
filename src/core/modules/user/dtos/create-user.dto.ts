import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  Validate,
} from 'class-validator';
import { UserEmailExistPipe } from '../validations/user-email-exist.pipe';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Validate(UserEmailExistPipe)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  password: string;
}
