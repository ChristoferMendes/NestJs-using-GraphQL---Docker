import { Module } from 'node_modules/@nestjs/common';
import { TypeOrmModule } from 'node_modules/@nestjs/typeorm';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService],
})
export class UserModule {}
