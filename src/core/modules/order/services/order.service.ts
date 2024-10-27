import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodService } from '../../food/services/food.service';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly repository: Repository<OrderEntity>,
    private readonly foodService: FoodService,
  ) {}

  async create(data: CreateOrderDto): Promise<any> {
    const foods = await this.foodService.findByIds(data.foodIds);

    if (foods.length == 0)
      throw new BadRequestException({
        message: 'You need at least to have some food',
      });

    return await this.repository.save({
      name: data.name,
      foods,
    });
  }
}
