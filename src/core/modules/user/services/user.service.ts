import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from '../../auth/dtos/login.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(data: CreateUserDto): Promise<UserEntity> {
    return await this.repository.save(data);
  }

  async findOne(credentials: LoginDto): Promise<UserEntity> {
    const { email } = credentials;

    return await this.repository.findOne({
      where: { email },
      select: ['id', 'name', 'email', 'password', 'role'],
    });
  }
}
