import {
  BadRequestException,
  HttpService,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import _ from '../config/default';

@Injectable()
export class Exercise3Service {
  constructor(private httpService: HttpService) {}

  async getTrollyTotal(data: any): Promise<Number> {
    try {
      const response = await this.httpService
        .post(`${_.TROLLEY_CAL_API}?token=${_.TOKEN}`, data)
        .toPromise();
      return response.data;
    } catch (error) {
      if (error.response.status === 400) {
        throw new BadRequestException(error.response.data);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
