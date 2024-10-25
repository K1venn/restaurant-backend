import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  imports: [UserModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
