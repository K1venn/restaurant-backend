import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { AuthService } from './services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('signup')
  async register(@Body() credentials: RegisterDto): Promise<any> {
    return await this.service.register(credentials);
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async login(@Body() credentials: LoginDto): Promise<any> {
    return await this.service.login(credentials);
  }
}
