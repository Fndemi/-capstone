import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Media extends Document {
  @Prop({ required: true, enum: ['photo', 'social_media'] })
  type: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  filePath: string;

  @Prop()
  url: string;

  @Prop()
  platform: string;

  @Prop({ default: 0 })
  order: number;
}

export const MediaSchema = SchemaFactory.createForClass(Media);