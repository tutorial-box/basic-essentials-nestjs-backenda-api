import { OmitType } from '@nestjs/swagger'

export class CreateUserInput {
  fullName: string
  email: string
  bio: string
  password: string
}

export class UpdateUserInput extends OmitType(CreateUserInput, [
  'password',
] as const) {}
