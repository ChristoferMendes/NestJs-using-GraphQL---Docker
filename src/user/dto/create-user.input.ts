import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'The field name cannot be empty' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'The field email cannot be empty' })
  email: string;
}
