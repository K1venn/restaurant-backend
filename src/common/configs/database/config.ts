import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class DatabaseConfig {
  public static getDatabaseConnection(
    configService: ConfigService,
  ): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: configService.get<string>('DB_HOST'),
      port: +configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_DATABASE'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    };
  }
}
