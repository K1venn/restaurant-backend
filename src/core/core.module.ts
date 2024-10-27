import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { FoodModule } from './modules/food/food.module';
import { OrderModule } from './modules/order/order.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [DatabaseModule, AuthModule, UserModule, FoodModule, OrderModule],
})
export class CoreModule {}
