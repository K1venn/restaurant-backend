import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { FoodModule } from '../food/food.module';
import { OrderEntity } from './entities/order.entity';
import { OrderController } from './order.controller';
import { OrderService } from './services/order.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity]), AuthModule, FoodModule],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
