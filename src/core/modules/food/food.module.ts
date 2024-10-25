import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodEntity } from './entities/food.entity';

@Module({ imports: [TypeOrmModule.forFeature([FoodEntity])] })
export class FoodModule {}
