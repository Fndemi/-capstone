import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProfileModule } from './modules/profile.module';
import { ContentModule } from './modules/content.module';
import { MediaModule } from './modules/media.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb+srv://mongoflo:testing123@cluster0.riveki9.mongodb.net/igs?retryWrites=true&w=majority&appName=Cluster0'
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    ProfileModule,
    ContentModule,
    MediaModule,
  ],
})
export class AppModule {}