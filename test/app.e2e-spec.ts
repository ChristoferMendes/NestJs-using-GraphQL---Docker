import * as request from 'node_modules/@types/supertest';
import { Test } from 'node_modules/@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from 'node_modules/@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
