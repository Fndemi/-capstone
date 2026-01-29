import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ContentService } from './content.service';
import { Content } from '../schemas/content.schema';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  async getContent(
    @Query('type') type: string,
    @Query('language') language: string,
  ): Promise<Content[]> {
    return this.contentService.getContent(type, language);
  }

  @Get(':id')
  async getContentById(@Param('id') id: string): Promise<Content> {
    return this.contentService.getContentById(id);
  }

  @Post()
  async createContent(@Body() contentData: Partial<Content>): Promise<Content> {
    return this.contentService.createContent(contentData);
  }
}