import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Content extends Document {
  @Prop({ required: true, enum: ['autobiography', 'innovation', 'culture', 'challenges'] })
  type: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  abstract: string;

  @Prop({ required: true, enum: ['en', 'sw', 'indigenous'] })
  language: string;

  @Prop()
  presentationPath: string;

  @Prop()
  videoPath: string;

  @Prop({ default: 0 })
  pageCount: number;

  @Prop({ default: 0 })
  videoDuration: number;
}

export const ContentSchema = SchemaFactory.createForClass(Content);