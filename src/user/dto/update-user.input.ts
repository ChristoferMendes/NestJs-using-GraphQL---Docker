import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(() => String, { description: 'User ID', nullable: false })
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'The field name cannot be empty' })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'The field email cannot be empty' })
  @IsOptional()
  email?: string;
}
