import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateFoodDto } from '../dtos/create-food.dto';
import { FoodEntity } from '../entities/food.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(FoodEntity)
    private readonly repository: Repository<FoodEntity>,
  ) {}

  async findAll(): Promise<FoodEntity[]> {
    return this.repository.find();
  }

  async create(data: CreateFoodDto): Promise<FoodEntity> {
    return await this.repository.save(data);
  }

  async delete(id: number): Promise<FoodEntity> {
    const food = await this.repository.findOne({ where: { id } });

    if (!food)
      throw new BadRequestException({ message: 'That food does not exist' });

    return await this.repository.remove(food);
  }

  async findByIds(ids: number[]): Promise<FoodEntity[]> {
    return await this.repository.findBy({ id: In(ids) });
  }
}
