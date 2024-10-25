import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { CoreModule } from './core/core.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CoreModule, CommonModule],
})
export class AppModule {}
