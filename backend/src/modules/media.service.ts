import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Media } from '../schemas/media.schema';

@Injectable()
export class MediaService {
  constructor(
    @InjectModel(Media.name)
    private mediaModel: Model<Media>,
  ) {}

  async getMedia(type?: string): Promise<Media[]> {
    const filter = type ? { type } : {};
    let media = await this.mediaModel.find(filter).sort({ order: 1 }).exec();
    
    if (media.length === 0) {
      await this.seedDefaultMedia();
      media = await this.mediaModel.find(filter).sort({ order: 1 }).exec();
    }
    
    return media;
  }

  async getMediaById(id: string): Promise<Media> {
    return this.mediaModel.findById(id).exec();
  }

  async createMedia(mediaData: Partial<Media>): Promise<Media> {
    const media = new this.mediaModel(mediaData);
    return media.save();
  }

  private async seedDefaultMedia() {
    const defaultMedia = [
      // Photo Essay
      {
        type: 'photo',
        title: 'Urban Development in Nairobi',
        description: 'Modern skyscrapers rising in Nairobi CBD, showcasing Kenya\'s economic growth and urban transformation.',
        filePath: 'sample-nairobi-skyline.jpg',
        order: 1
      },
      {
        type: 'photo',
        title: 'Rural Education Access',
        description: 'Students walking long distances to school in rural Kenya, highlighting education accessibility challenges.',
        filePath: 'sample-rural-school.jpg',
        order: 2
      },
      {
        type: 'photo',
        title: 'Technology in Agriculture',
        description: 'Farmers using mobile phones to access weather information and market prices, bridging the digital divide.',
        filePath: 'sample-farmer-tech.jpg',
        order: 3
      },
      {
        type: 'photo',
        title: 'Women in Technology',
        description: 'Female students learning programming at a coding bootcamp, promoting gender equality in STEM fields.',
        filePath: 'sample-women-coding.jpg',
        order: 4
      },
      {
        type: 'photo',
        title: 'Renewable Energy Solutions',
        description: 'Solar panels installed in rural homes, providing clean energy access to off-grid communities.',
        filePath: 'sample-solar-panels.jpg',
        order: 5
      },
      {
        type: 'photo',
        title: 'Youth Innovation Hub',
        description: 'Young entrepreneurs working on tech solutions at iHub Nairobi, fostering innovation ecosystem.',
        filePath: 'sample-innovation-hub.jpg',
        order: 6
      },
      {
        type: 'photo',
        title: 'Digital Financial Inclusion',
        description: 'M-Pesa agent serving customers in a rural market, demonstrating mobile money\'s impact on financial inclusion.',
        filePath: 'sample-mpesa-agent.jpg',
        order: 7
      },
      {
        type: 'photo',
        title: 'Environmental Conservation',
        description: 'Community tree planting initiative in Aberdare Forest, showing grassroots environmental conservation efforts.',
        filePath: 'sample-tree-planting.jpg',
        order: 8
      },

      // Social Media Links
      {
        type: 'social_media',
        title: 'Professional Blog',
        description: 'Tech insights and African innovation stories',
        url: 'https://aminamwangi.blog.com',
        platform: 'blog',
        order: 1
      },
      {
        type: 'social_media',
        title: 'YouTube Channel',
        description: 'Coding tutorials and tech talks in Kiswahili',
        url: 'https://youtube.com/c/AminaTechKE',
        platform: 'youtube',
        order: 2
      },
      {
        type: 'social_media',
        title: 'LinkedIn Profile',
        description: 'Professional networking and career updates',
        url: 'https://linkedin.com/in/amina-mwangi',
        platform: 'linkedin',
        order: 3
      },
      {
        type: 'social_media',
        title: 'Twitter Account',
        description: 'Tech discussions and industry insights',
        url: 'https://twitter.com/AminaTechKE',
        platform: 'twitter',
        order: 4
      },
      {
        type: 'social_media',
        title: 'Instagram',
        description: 'Behind-the-scenes of tech life in Kenya',
        url: 'https://instagram.com/aminatech_ke',
        platform: 'instagram',
        order: 5
      },
      {
        type: 'social_media',
        title: 'Facebook Page',
        description: 'Community engagement and tech education',
        url: 'https://facebook.com/AminaTechKenya',
        platform: 'facebook',
        order: 6
      },
      {
        type: 'social_media',
        title: 'WhatsApp Business',
        description: 'Direct communication for tech consultations',
        url: 'https://wa.me/254712345678',
        platform: 'whatsapp',
        order: 7
      },

      // Videos
      {
        type: 'video',
        title: 'Innovation Presentation',
        description: 'Blockchain Technology for Secure Digital Transactions',
        url: 'https://drive.google.com/file/d/YOUR_VIDEO_ID_1/view',
        order: 1
      },
      {
        type: 'video',
        title: 'Cultural Presentation',
        description: 'Ubuntu Philosophy & Gender Equality in African Context',
        url: 'https://drive.google.com/file/d/YOUR_VIDEO_ID_2/view',
        order: 2
      },
      {
        type: 'video',
        title: 'Modern Challenges',
        description: 'Digital Divide Solutions for Rural Kenya',
        url: 'https://drive.google.com/file/d/YOUR_VIDEO_ID_3/view',
        order: 3
      }
    ];

    for (const media of defaultMedia) {
      await this.createMedia(media);
    }
  }
}