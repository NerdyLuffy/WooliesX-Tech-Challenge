import { Test, TestingModule } from '@nestjs/testing';
import { Exercise1Service } from '../../src/exercise1/exercise1.service';

describe('Exercise1Service', () => {
  let service: Exercise1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Exercise1Service],
    }).compile();

    service = module.get<Exercise1Service>(Exercise1Service);
  });

  it.only('should return name and token of the user', () => {
    expect(service.getUser()).toStrictEqual({
      name: 'Yash Karmchandani',
      token: '30dd3de6-e297-4f2c-bf4d-4a05a69fe0b1',
    });
  });
});
