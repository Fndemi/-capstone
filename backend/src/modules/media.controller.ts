import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MediaService } from './media.service';
import { Media } from '../schemas/media.schema';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get()
  async getMedia(@Query('type') type?: string): Promise<Media[]> {
    return this.mediaService.getMedia(type);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() mediaData: { title: string; description?: string; type: string },
  ): Promise<Media> {
    return this.mediaService.createMedia({
      ...mediaData,
      filePath: file.filename,
    });
  }

  @Post('social')
  async addSocialMedia(@Body() socialData: Partial<Media>): Promise<Media> {
    return this.mediaService.createMedia(socialData);
  }

  @Get(':id')
  async getMediaById(@Param('id') id: string): Promise<Media> {
    return this.mediaService.getMediaById(id);
  }
}