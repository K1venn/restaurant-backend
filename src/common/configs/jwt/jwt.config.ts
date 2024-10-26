import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export class JwtConfig {
  public static setupConfig(configService: ConfigService): JwtModuleOptions {
    return {
      secret: configService.getOrThrow<string>('JWT_SECRET'),
      signOptions: {
        expiresIn: +configService.getOrThrow<number>('JWT_EXPIRATION_TIME'),
        algorithm: 'HS384',
      },
      verifyOptions: {
        algorithms: ['HS384'],
      },
    };
  }
}
