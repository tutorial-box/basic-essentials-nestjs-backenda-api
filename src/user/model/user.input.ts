import { OmitType } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class CreateUserInput {
  @IsString()
  fullName: string

  @IsEmail()
  email: string

  @IsEmail()
  bio: string

  @IsString()
  password: string
}

export class UpdateUserInput extends OmitType(CreateUserInput, [
  'password'
] as const) {}
