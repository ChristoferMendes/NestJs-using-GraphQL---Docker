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
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'mmtec',
      password: '36257',
      database: 'nest_js',
      entities: ['dist//**/*.entity{.ts,.js}'],
      synchronize: true,
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
