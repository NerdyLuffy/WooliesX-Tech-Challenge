import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import _ from '../test-suits/testData';

describe('Application (e2e) test', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/exercise1/user (GET)', () => {
    return request(app.getHttpServer())
      .get('/exercise1/user')
      .expect(200)
      .expect({
        name: 'Yash Karmchandani',
        token: '30dd3de6-e297-4f2c-bf4d-4a05a69fe0b1',
      });
  });

  const sortingScenarios = [
    {
      parameter: 'Low',
      statusCode: 200,
      expectedResult: _.productsWithLowPrice,
    },
    {
      parameter: 'High',
      statusCode: 200,
      expectedResult: _.productWithHighPrice,
    },
    {
      parameter: 'Ascending',
      statusCode: 200,
      expectedResult: _.productAtoZ,
    },
    {
      parameter: 'Descending',
      statusCode: 200,
      expectedResult: _.productZtoA,
    },
    {
      parameter: 'Recommended',
      statusCode: 200,
      expectedResult: _.recommendedProducts,
    },
    {
      parameter: 'Unknown',
      statusCode: 400,
      expectedResult: {
        statusCode: 400,
        message: [
          'sortOption must be one of the following values: Low,High,Ascending,Descending,Recommended',
        ],
        error: 'Bad Request',
      },
    },
  ];

  sortingScenarios.forEach((test) => {
    it(`/exercise2/sort?sortOption=${test.parameter} (GET)`, () => {
      return request(app.getHttpServer())
        .get(`/exercise2/sort?sortOption=${test.parameter}`)
        .expect(test.statusCode)
        .expect(test.expectedResult);
    });
  });

  it('/exercise3/trolleyTotal (POST)', () => {
    return request(app.getHttpServer())
      .post('/exercise3/trolleyTotal')
      .send(_.trolleyTotal)
      .expect(200)
      .expect('14');
  });
});
