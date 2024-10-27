import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { RolesEnum } from 'src/common/enums/Roles.enum';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { CreateFoodDto } from './dtos/create-food.dto';
import { FoodEntity } from './entities/food.entity';
import { FoodService } from './services/food.service';

@Controller('food')
@UseGuards(AuthGuard)
export class FoodController {
  constructor(private readonly service: FoodService) {}

  @Post()
  @Roles(RolesEnum.ADMIN)
  async create(@Body() data: CreateFoodDto): Promise<FoodEntity> {
    return await this.service.create(data);
  }

  @Delete('/:id')
  @Roles(RolesEnum.ADMIN)
  async delete(@Param('id') id: number): Promise<FoodEntity> {
    return this.service.delete(+id);
  }

  @Get()
  async findAll(): Promise<FoodEntity[]> {
    return this.service.findAll();
  }
}
