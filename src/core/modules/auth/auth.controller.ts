import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { AuthService } from './services/auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async register(@Body() credentials: RegisterDto): Promise<any> {
    return await this.authService.register(credentials);
  }

  @Post('signin')
  async login(@Body() credentials: LoginDto): Promise<any> {
    return await this.authService.login(credentials);
  }
}
