import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodEntity } from 'src/core/modules/food/entities/food.entity';
import { UserEntity } from 'src/core/modules/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.getOrThrow('DB_HOST'),
        port: configService.getOrThrow('DB_PORT'),
        username: configService.getOrThrow('DB_USERNAME'),
        password: configService.getOrThrow('DB_PASSWORD'),
        database: configService.getOrThrow('DB_DATABASE'),
        entities: [UserEntity, FoodEntity],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
