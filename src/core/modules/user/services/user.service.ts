import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(data: CreateUserDto): Promise<Omit<UserEntity, 'password'>> {
    const { password, ...rest } = await this.repository.save(data);
    return rest;
  }

  async findOne(options: FindOneOptions<UserEntity>): Promise<UserEntity> {
    return await this.repository.findOne(options);
  }
}
