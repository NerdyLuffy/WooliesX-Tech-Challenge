import { Controller, Get } from '@nestjs/common';
import { Exercise1Service } from './exercise1.service';
import { User } from './UserInterface';

@Controller('exercise1')
export class Exercise1Controller {
  constructor(private exerciseService: Exercise1Service) {}

  @Get('/user')
  getUser(): User {
    return this.exerciseService.getUser();
  }
}
