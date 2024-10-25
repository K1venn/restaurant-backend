import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from '../configs/database/config';

const { getDatabaseConnection } = DatabaseConfig;

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        getDatabaseConnection(configService),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
