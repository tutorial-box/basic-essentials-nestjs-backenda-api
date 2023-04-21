import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema({ collection: 'users', timestamps: true })
export class User {
  @Prop()
  fullName: string

  @Prop()
  email: string

  @Prop()
  bio: string

  @Prop()
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)
