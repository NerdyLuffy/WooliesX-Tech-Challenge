import { Injectable } from '@nestjs/common';
import { User } from './UserInterface';
import _ from '../config/default';

@Injectable()
export class Exercise1Service {
  getUser(): User {
    return {
      name: 'Yash Karmchandani',
      token: _.TOKEN,
    };
  }
}
