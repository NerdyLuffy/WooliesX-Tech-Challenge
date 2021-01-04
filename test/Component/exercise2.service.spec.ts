import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Exercise2Service } from '../../src/exercise2/exercise2.service';
import { Product } from '../../src/exercise2/ProductInterface';
import _ from '../test-suits/testData';

const mockResponse = async (): Promise<Product[]> => [
  {
    name: 'Test Product A',
    price: 99.99,
    quantity: 0,
  },
  {
    name: 'Test Product B',
    price: 101.99,
    quantity: 0,
  },
  {
    name: 'Test Product C',
    price: 10.99,
    quantity: 0,
  },
  {
    name: 'Test Product D',
    price: 5,
    quantity: 0,
  },
  {
    name: 'Test Product F',
    price: 999999999999,
    quantity: 0,
  },
];

describe('Exercise2Service', () => {
  let service: Exercise2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Exercise2Service],
      imports: [HttpModule],
    }).compile();

    service = module.get<Exercise2Service>(Exercise2Service);
  });

  it('Should return list of products', () => {
    const spyFun = jest
      .spyOn(service, 'getProducts')
      .mockImplementationOnce(() => mockResponse());
    expect(service.getProducts()).toStrictEqual(mockResponse());
    expect(spyFun).toBeCalled();
    expect(spyFun).toBeCalledTimes(1);
  });

  const sortingScenarios = [
    {
      description: 'Low Price',
      parameter: 'Low',
      expectedResult: _.productsWithLowPrice,
    },
    {
      description: 'High Price',
      parameter: 'High',
      expectedResult: _.productWithHighPrice,
    },
    {
      description: 'names and type Ascending',
      parameter: 'Ascending',
      expectedResult: _.productAtoZ,
    },
    {
      description: 'names and type Descending',
      parameter: 'Descending',
      expectedResult: _.productZtoA,
    },
    {
      description: 'names and type Recommended',
      parameter: 'Recommended',
      expectedResult: _.recommendedProducts,
    },
  ];

  sortingScenarios.forEach((test) => {
    it(`Should be able to sort products by ${test.description}`, async () => {
      const spyFun = jest
        .spyOn(service, 'getProducts')
        .mockImplementationOnce(() => mockResponse());
      expect(await service.sortProducts(test.parameter)).toStrictEqual(
        test.expectedResult,
      );
      expect(spyFun).toBeCalled();
      expect(spyFun).toBeCalledTimes(1);
    });
  });
});
