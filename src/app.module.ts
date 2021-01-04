import { Module } from '@nestjs/common';
import { Exercise1Module } from './exercise1/exercise1.module';
import { Exercise2Module } from './exercise2/exercise2.module';
import { Exercise3Module } from './exercise3/exercise3.module';

@Module({
  imports: [Exercise1Module, Exercise2Module, Exercise3Module],
})
export class AppModule {}
