import { ConfigModule } from '@nestjs/config';
import { Module } from 'node_modules/@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from 'node_modules/@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'database',
      port: +process.env.DB_PORT || 5432,
      username: process.env.DB_USERNAME || 'mmtec',
      password: process.env.DB_PASSWORD || '36257',
      database: process.env.DB_NAME || 'nest_js',
      entities: ['dist//**/*.entity{.ts,.js}'],
      synchronize: process.env.DB_SYNC == 'true',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
