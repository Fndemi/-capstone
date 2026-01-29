import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from '../schemas/profile.schema';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':language')
  async getProfile(@Param('language') language: string): Promise<Profile> {
    return this.profileService.getProfile(language);
  }

  @Post()
  async createProfile(@Body() profileData: Partial<Profile>): Promise<Profile> {
    return this.profileService.createProfile(profileData);
  }

  @Put(':id')
  async updateProfile(
    @Param('id') id: string,
    @Body() profileData: Partial<Profile>,
  ): Promise<Profile> {
    return this.profileService.updateProfile(id, profileData);
  }
}