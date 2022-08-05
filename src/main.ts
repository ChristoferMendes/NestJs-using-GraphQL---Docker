import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.API_PORT || 9000);
  console.info('Listening on PORT: ' + process.env.API_PORT);
  console.log(
    'Type http://localhost:' +
      process.env.API_PORT +
      '/graphql to open the playground',
  );
}
bootstrap();
