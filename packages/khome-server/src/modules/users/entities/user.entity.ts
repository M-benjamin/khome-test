import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
