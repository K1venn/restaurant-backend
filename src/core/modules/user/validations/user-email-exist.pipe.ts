import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserEmailExistPipe implements PipeTransform<any> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async transform(email: string) {
    const user = await this.repository.findOne({ where: { email } });
    if (user) throw new NotFoundException('E-mail em uso.');

    return email;
  }
}
