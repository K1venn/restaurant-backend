import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { RolesEnum } from 'src/common/enums/Roles.enum';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrderEntity } from './entities/order.entity';
import { OrderService } from './services/order.service';

@Controller('order')
@UseGuards(AuthGuard)
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Post()
  @Roles(RolesEnum.ADMIN, RolesEnum.CHEF, RolesEnum.WAITER)
  async create(@Body() data: CreateOrderDto): Promise<OrderEntity> {
    return this.service.create(data);
  }
}
