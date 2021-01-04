import { HttpModule, Module } from '@nestjs/common';
import { Exercise2Controller } from './exercise2.controller';
import { Exercise2Service } from './exercise2.service';

@Module({
  controllers: [Exercise2Controller],
  providers: [Exercise2Service],
  imports: [
    HttpModule.register({
      timeout: 10000,
      maxRedirects: 5,
    }),
  ],
})
export class Exercise2Module {}
