import { Module } from '@nestjs/common';
import { Exercise1Controller } from './exercise1.controller';
import { Exercise1Service } from './exercise1.service';

@Module({
  controllers: [Exercise1Controller],
  providers: [Exercise1Service],
})
export class Exercise1Module {}
