import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema({ timestamps: true })
export class Profile {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  linkedin: string;

  @Prop({ required: true })
  professionalSummary: string;

  @Prop({ required: true })
  university: string;

  @Prop({ required: true })
  degree: string;

  @Prop({ required: true })
  fieldOfStudy: string;

  @Prop({ required: true })
  graduationYear: string;

  @Prop({ type: [String] })
  skills: string[];

  @Prop({ type: Object })
  experience: any;

  @Prop({ type: [Object] })
  projects: any[];

  @Prop({ required: true, enum: ['en', 'sw', 'indigenous'] })
  language: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);