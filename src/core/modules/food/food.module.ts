import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { FoodEntity } from './entities/food.entity';
import { FoodController } from './food.controller';
import { FoodService } from './services/food.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoodEntity]), AuthModule],
  providers: [FoodService],
  controllers: [FoodController],
  exports: [FoodService],
})
export class FoodModule {}
