import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Exercise3Service } from './exercise3.service';

@Controller('exercise3')
export class Exercise3Controller {
  constructor(private exercise3Service: Exercise3Service) {}
  @Post('/trolleyTotal')
  @HttpCode(200)
  gettrollyTotal(@Body() body): Promise<Number> {
    return this.exercise3Service.getTrollyTotal(body);
  }
}
