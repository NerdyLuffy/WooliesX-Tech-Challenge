import { Test, TestingModule } from '@nestjs/testing';
import { Exercise3Service } from '../../src/exercise3/exercise3.service';
import { HttpModule } from '@nestjs/common';
import _ from '../test-suits/testData';

const mockResponse = async () => 14;

describe('Exercise3Service', () => {
  let service: Exercise3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Exercise3Service],
      imports: [HttpModule],
    }).compile();

    service = module.get<Exercise3Service>(Exercise3Service);
  });

  it('should return the trolley total', async () => {
    const spyFun = jest
      .spyOn(service, 'getTrollyTotal')
      .mockImplementationOnce(() => mockResponse());
    expect(await service.getTrollyTotal(_.trolleyTotal)).toStrictEqual(14);
    expect(spyFun).toBeCalled();
    expect(spyFun).toBeCalledTimes(1);
  });
});
