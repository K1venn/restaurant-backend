import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../../user/entities/user.entity';
import { UserService } from '../../user/services/user.service';
import { LoginDto } from '../dtos/login.dto';
import { RegisterDto } from '../dtos/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(data: RegisterDto): Promise<UserEntity> {
    const user = await this.userService.findOneByEmail(data.email);

    if (user)
      throw new BadRequestException({ message: 'Email already in use' });

    const password = bcrypt.hashSync(data.password, 10);
    return await this.userService.create({
      ...data,
      password,
    });
  }

  async login(data: LoginDto): Promise<any> {
    const user = await this.userService.findOneByEmail(data.email);
    const isValidPassword = bcrypt.compareSync(data.password, user.password);

    if (!isValidPassword)
      throw new BadRequestException({ message: 'Email or password incorrect' });

    const payload = { name: user.name, email: user.email, role: user.role };
    const accessToken = this.jwtService.signAsync(payload);

    return { accessToken };
  }
}
