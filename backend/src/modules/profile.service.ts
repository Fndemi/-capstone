import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile, ProfileDocument } from '../schemas/profile.schema';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name)
    private profileModel: Model<ProfileDocument>,
  ) {}

  async getProfile(language: string): Promise<ProfileDocument> {
    let profile: ProfileDocument | null = await this.profileModel.findOne({ language }).exec();
    
    if (!profile) {
      profile = await this.createDefaultProfile(language);
    }
    
    return profile;
  }

  async createProfile(profileData: Partial<Profile>): Promise<ProfileDocument> {
    const profile = new this.profileModel(profileData);
    return profile.save();
  }

  async updateProfile(id: string, profileData: Partial<Profile>): Promise<ProfileDocument> {
    return this.profileModel.findByIdAndUpdate(id, profileData, { new: true }).exec();
  }

  private async createDefaultProfile(language: string): Promise<ProfileDocument> {
    const defaultData = this.getDefaultProfileData(language);
    return this.createProfile(defaultData);
  }

  private getDefaultProfileData(language: string) {
    const profiles = {
      en: {
        fullName: "Florence Ndemi",
        email: "ndemiflorece@gmail.com",
        phone: "+254 799 465 754",
        location: "Kenya",
        linkedin: "linkedin.com/in/florence-ndemi",
        professionalSummary: "Creative and results-driven Full-Stack Developer with hands-on experience building scalable web applications using React.js, NestJS, Node.js, and MongoDB. Skilled in designing RESTful APIs, implementing authentication, and deploying cloud-ready solutions. Passionate about creating impactful digital products that merge technology with real-world sustainability and user needs.",
        university: "Dedan Kimathi University of Technology",
        degree: "BSc. Information Technology",
        fieldOfStudy: "Information Technology",
        graduationYear: "2026 (In Progress)",
        skills: [
          "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS",
          "Node.js", "Express.js", "NestJS", "Flask", "MongoDB", "MySQL",
          "RESTful APIs", "JWT", "Git", "GitHub", "Render", "Netlify"
        ],
        experience: {
          title: "Full-Stack Developer",
          company: "Directed Dev Bootcamp",
          duration: "May 2025 – Sept 2025",
          achievements: [
            "Built three production-ready full-stack web applications using React.js, NestJS, and MongoDB",
            "Implemented secure JWT authentication, CRUD APIs, and database management for scalable performance",
            "Participated in Agile sprints, using Trello and GitHub for version control and project tracking",
            "Collaborated in remote teams to deploy applications on Render and Netlify, ensuring smooth CI/CD pipelines"
          ]
        },
        projects: [
          {
            name: "WasteVortex – Smart Waste Management Platform",
            description: "React.js | Flask | MongoDB | AI Heuristic Model - Developed a full-stack platform enabling households and small businesses to upload waste data and request pickups with AI contamination classification."
          },
          {
            name: "The Luxe E-Commerce Platform",
            description: "Next.js | NestJS | MongoDB | Tailwind CSS | Cloudinary - Built a scalable online store with JWT-based authentication, product management, and image uploads."
          },
          {
            name: "Social Blogging Platform",
            description: "React.js | Express.js | MongoDB - Built a blogging app enabling users to create, edit, and share posts with authentication and content management."
          }
        ],
        language: language
      },
      sw: {
        fullName: "Florence Ndemi",
        email: "ndemiflorece@gmail.com",
        phone: "+254 799 465 754",
        location: "Kenya",
        linkedin: "linkedin.com/in/florence-ndemi",
        professionalSummary: "Msanidi programu mkuu mwenye ujuzi wa kujenga mifumo ya wavuti kwa kutumia React.js, NestJS, Node.js, na MongoDB. Nina ujuzi wa kuunda APIs, utekelezaji wa uthibitishaji, na uwekaji wa suluhisho za wingu. Nina shauku ya kuunda bidhaa za kidijitali zenye athari zinazounganisha teknolojia na mahitaji ya ulimwengu halisi.",
        university: "Chuo Kikuu cha Teknolojia cha Dedan Kimathi",
        degree: "Shahada ya Kwanza ya Sayansi",
        fieldOfStudy: "Teknolojia ya Habari",
        graduationYear: "2026 (Inaendelea)",
        skills: [
          "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js",
          "Node.js", "Express.js", "NestJS", "Flask", "MongoDB", "MySQL"
        ],
        experience: {
          title: "Msanidi Programu Mkuu",
          company: "Directed Dev Bootcamp",
          duration: "Mei 2025 – Septemba 2025",
          achievements: [
            "Alijenga mifumo mitatu ya wavuti kwa kutumia React.js, NestJS, na MongoDB",
            "Alitekeleza uthibitishaji salama wa JWT na APIs za CRUD",
            "Alishiriki katika timu za mbali kuweka mifumo kwenye Render na Netlify"
          ]
        },
        projects: [
          {
            name: "WasteVortex – Jukwaa la Usimamizi wa Taka",
            description: "Jukwaa la usimamizi wa taka lenye akili bandia kwa makazi na biashara ndogo."
          },
          {
            name: "Jukwaa la Biashara la The Luxe",
            description: "Duka la mtandaoni lenye uthibitishaji wa JWT na usimamizi wa bidhaa."
          }
        ],
        language: language
      },
      indigenous: {
        fullName: "Florence Ndemi",
        email: "ndemiflorece@gmail.com",
        phone: "+254 799 465 754",
        location: "Kenya",
        linkedin: "linkedin.com/in/florence-ndemi",
        professionalSummary: "Mũthondeki wa software ũrĩa ũũĩ gũthondeka mĩthemba ya websites na applications na React.js, NestJS, Node.js, na MongoDB. Nĩnjũĩ gũthondeka APIs na gũtũma mĩthemba ĩno ĩrute wega.",
        university: "Dedan Kimathi University wa Technology",
        degree: "BSc. Information Technology",
        fieldOfStudy: "Information Technology",
        graduationYear: "2026 (Nĩgũthiĩ na mbere)",
        skills: [
          "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js",
          "Node.js", "Express.js", "NestJS", "MongoDB", "MySQL"
        ],
        experience: {
          title: "Full-Stack Developer",
          company: "Directed Dev Bootcamp",
          duration: "Mwere 2025 – Mũgaa 2025",
          achievements: [
            "Nĩathondekire mĩthemba ĩtatũ ya websites na React.js, NestJS, na MongoDB",
            "Nĩarutire wĩra wa JWT authentication na APIs za CRUD"
          ]
        },
        projects: [
          {
            name: "WasteVortex – Mũthemba wa Gũtũnga Mahiũ",
            description: "Mũthemba wa gũteithia andũ gũtũnga mahiũ mao wega."
          },
          {
            name: "The Luxe E-Commerce Platform",
            description: "Duka rĩa mũtandao rĩrĩa rĩna JWT authentication."
          }
        ],
        language: language
      }
    };

    return profiles[language] || profiles.en;
  }
}