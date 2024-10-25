import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../../user/entities/user.entity';
import { UserService } from '../../user/services/user.service';
import { RegisterDto } from '../dtos/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(data: RegisterDto): Promise<UserEntity> {
    const password = bcrypt.hashSync(data.password, 10);
    return await this.userService.create({
      ...data,
      password,
    });
  }
}
