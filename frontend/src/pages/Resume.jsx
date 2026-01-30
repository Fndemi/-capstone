import React, { useState } from 'react';
import styled from 'styled-components';
import LanguageSelector from '../components/LanguageSelector.jsx';

const PageHeader = styled.section`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 80px 0 40px;
  text-align: center;
  margin-top: 60px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 70px 0 30px;
    margin-top: 60px;
  }

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }
`;

const ResumeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  animation: slideUp 0.8s ease-out;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 100%;
    margin: 0 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin: 0 0.5rem;
  }
`;

const ResumeHeader = styled.div`
  background: white;
  color: #1f2937;
  padding: 2rem;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #e5e7eb;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.3rem;
    color: #1f2937;
    font-weight: 700;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }

  .subtitle {
    font-size: 1.1rem;
    color: #6b7280;
    margin-bottom: 1.5rem;
    font-weight: 300;
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.8rem;
  margin-top: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    font-weight: 400;
    color: #4b5563;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 0.85rem;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0;
  min-height: 600px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  background: #f8fafc;
  padding: 3rem 2rem;
  border-right: 1px solid #e2e8f0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

const MainContent = styled.div`
  padding: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

const Section = styled.div`
  margin-bottom: 3rem;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    position: relative;
    padding-bottom: 0.5rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
      border-radius: 2px;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 1.2rem;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 2rem;
`;

const SkillCategory = styled.div`
  h4 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.8rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  p {
    line-height: 1.7;
    color: #4a5568;
    font-size: 0.95rem;
  }
`;

const ProjectCard = styled.div`
  background: #f8fafc;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 4px solid #2563eb;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(4px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }

  h4 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
  
  .tech-stack {
    font-style: italic;
    color: #2563eb;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 0.9rem;
  }

  ul {
    padding-left: 1.2rem;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
      color: #4a5568;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

const ExperienceCard = styled.div`
  margin-bottom: 2.5rem;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
  
  h4 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
  
  .company-info {
    font-style: italic;
    color: #2563eb;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  ul {
    padding-left: 1.2rem;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.7;
      color: #4a5568;
    }
  }
`;

const CertificationsList = styled.div`
  display: grid;
  gap: 1rem;
  
  .cert-item {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid #1d4ed8;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    
    .cert-name {
      font-weight: 600;
      color: ${props => props.theme.colors.primary};
      margin-bottom: 0.3rem;
    }
    
    .cert-org {
      color: #2563eb;
      font-size: 0.9rem;
    }
  }
`;

const LanguageToggle = styled.div`
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  backdrop-filter: blur(10px);
  
  p {
    margin-bottom: 0.5rem;
    color: rgba(255,255,255,0.9);
    font-size: 0.9rem;
  }
`;

const DownloadSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem;
  text-align: center;
  color: white;

  h3 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    
    &::after {
      background: rgba(255,255,255,0.3);
    }
  }

  p {
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .download-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      flex-direction: column;
      align-items: center;
      
      button {
        width: 200px;
      }
    }
    
    button {
      background: rgba(255,255,255,0.2);
      border: 2px solid rgba(255,255,255,0.3);
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 25px;
      font-weight: 600;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      
      &:hover {
        background: rgba(255,255,255,0.3);
        border-color: rgba(255,255,255,0.5);
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem;
  }
`;

const resumeData = {
  en: {
    fullName: "Florence Ndemi",
    email: "ndemiflorece@gmail.com",
    phone: "+254 799 465 754",
    linkedin: "LinkedIn: Florence Ndemi",
    github: "GitHub: Fndemi",
    professionalSummary: "Creative and results-driven Full-Stack Developer with hands-on experience building scalable web applications using React.js, NestJS, Node.js, and MongoDB. Skilled in designing RESTful APIs, implementing authentication, and deploying cloud-ready solutions. Passionate about creating impactful digital products that merge technology with real-world sustainability and user needs.",
    university: "Dedan Kimathi University of Technology",
    degree: "BSc. Information Technology",
    status: "In Progress",
    graduationYear: "2022 – 2026",
    secondarySchool: "St Anne's Lioki Secondary School",
    secondaryGrade: "Grade B+",
    secondaryYear: "2018 – 2022",
    experience: {
      title: "Full-Stack Developer",
      company: "Directed Dev",
      duration: "Sept 2025 – Present",
      achievements: [
        "Currently developing production-ready full-stack web applications using React.js, NestJS, and MongoDB.",
        "Implementing secure JWT authentication, CRUD APIs, and database management for scalable performance.",
        "Participating in Agile sprints, using Trello and GitHub for version control and project tracking.",
        "Collaborating in remote teams to deploy applications on Render and Netlify, ensuring smooth CI/CD pipelines.",
        "Contributing to code reviews and mentoring junior developers in best practices."
      ]
    },
    skills: {
      frontend: "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS",
      backend: "Node.js, Express.js, NestJS, Flask",
      databases: "MongoDB, MySQL",
      apis: "RESTful APIs, JWT, Axios, JSON, Fetch",
      tools: "Git, GitHub, Render, Netlify, Swagger, Notion, Figma, Postman"
    },
    projects: [
      {
        name: "WasteVortex – Smart Waste Management Platform",
        tech: "React.js | Flask | MongoDB | AI Heuristic Model",
        achievements: [
          "Developed a full-stack platform enabling households and small businesses to upload waste data and request pickups.",
          "Integrated a heuristic AI model to classify contamination levels (Low, Moderate, High) and recommend optimized collection.",
          "Built a responsive UI with React and visualized contamination data in real time.",
          "Deployed backend on Render and frontend on Netlify, ensuring modular architecture and API documentation."
        ]
      },
      {
        name: "The Luxe E-Commerce Platform",
        tech: "Next.js | NestJS | MongoDB | Tailwind CSS | Cloudinary",
        achievements: [
          "Built a scalable online store with JWT-based authentication, product management, and image uploads.",
          "Designed responsive UI using Tailwind CSS and dynamic routing in Next.js.",
          "Deployed full-stack app and documented APIs using Postman."
        ]
      },
      {
        name: "Social Blogging Platform",
        tech: "React.js | Express.js | MongoDB",
        achievements: [
          "Built a blogging app enabling users to create, edit, and share posts with authentication and content management.",
          "Implemented RESTful APIs for post handling and integrated frontend components using React hooks.",
          "Collaborated via GitHub Projects for issue tracking, branching, and code reviews."
        ]
      }
    ],
    certifications: [
      "Solidity Fundamentals & Advanced Foundry – Cyfrin Updraft (Dec 2024)",
      "Security Engineer Certification – Cyber Shujaa (Aug 2024)",
      "Microsoft Certified: Security, Compliance, and Identity Fundamentals – Microsoft (Feb 2025)"
    ],
    softSkills: [
      "Collaborative problem solver with strong communication skills",
      "Adaptable, self-driven, and eager to learn new technologies",
      "Focused on writing clean, maintainable, and scalable code"
    ]
  },
  sw: {
    fullName: "Florence Ndemi",
    email: "ndemiflorece@gmail.com",
    phone: "+254 799 465 754",
    linkedin: "LinkedIn: Florence Ndemi",
    github: "GitHub: Fndemi",
    professionalSummary: "Msanidi programu wa Full-Stack mwenye ubunifu na mafanikio, mwenye uzoefu wa vitendo katika kujenga programu za wavuti zinazoweza kukua kwa kutumia React.js, NestJS, Node.js, na MongoDB. Nina ujuzi wa kubuni RESTful APIs, kutekeleza uthibitishaji, na kusambaza suluhisho tayari kwa wingu. Nina shauku ya kuunda bidhaa za kidijitali zenye athari zinazounganisha teknolojia na mahitaji ya ulimwengu halisi na mazingira endelevu.",
    university: "Chuo Kikuu cha Teknolojia cha Dedan Kimathi",
    degree: "Shahada ya Kwanza katika Teknolojia ya Habari",
    status: "Inaendelea",
    graduationYear: "2022 – 2026",
    secondarySchool: "Shule ya Upili ya St Anne's Lioki",
    secondaryGrade: "Daraja B+",
    secondaryYear: "2018 – 2022",
    experience: {
      title: "Msanidi Programu wa Full-Stack",
      company: "Directed Dev",
      duration: "Sept 2025 – Sasa",
      achievements: [
        "Kwa sasa ninatengeneza programu za wavuti za full-stack tayari kwa uzalishaji kwa kutumia React.js, NestJS, na MongoDB.",
        "Ninatekeleza uthibitishaji salama wa JWT, CRUD APIs, na usimamizi wa hifadhidata kwa utendaji unaoweza kukua.",
        "Ninashiriki katika sprints za Agile, nikitumia Trello na GitHub kwa udhibiti wa toleo na ufuatiliaji wa mradi.",
        "Ninashirikiana katika timu za mbali kusambaza programu kwenye Render na Netlify, nikihakikisha mipango laini ya CI/CD.",
        "Ninachangia katika ukaguzi wa msimbo na kuongoza wasanidi programu wachanga katika mazoea bora."
      ]
    },
    skills: {
      frontend: "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS",
      backend: "Node.js, Express.js, NestJS, Flask",
      databases: "MongoDB, MySQL",
      apis: "RESTful APIs, JWT, Axios, JSON, Fetch",
      tools: "Git, GitHub, Render, Netlify, Swagger, Notion, Figma, Postman"
    },
    projects: [
      {
        name: "WasteVortex – Jukwaa la Usimamizi wa Taka Mahiri",
        tech: "React.js | Flask | MongoDB | Mfano wa AI Heuristic",
        achievements: [
          "Nilitengeneza jukwaa la full-stack linaloweza kaya na biashara ndogo kupakia data za taka na kuomba ukusanyaji.",
          "Niliunganisha mfano wa AI wa heuristic kuainisha viwango vya uchafuzi (Chini, Wastani, Juu) na kupendekeza ukusanyaji bora.",
          "Nilijenga UI inayojibu na React na kuonyesha data za uchafuzi kwa wakati halisi.",
          "Nilisambaza backend kwenye Render na frontend kwenye Netlify, nikihakikisha usanifu wa modular na nyaraka za API."
        ]
      },
      {
        name: "Jukwaa la Biashara ya The Luxe",
        tech: "Next.js | NestJS | MongoDB | Tailwind CSS | Cloudinary",
        achievements: [
          "Nilijenga duka la mtandaoni linaloongezeka na uthibitishaji wa JWT, usimamizi wa bidhaa, na upakiaji wa picha.",
          "Nilibuni UI inayojibu kwa kutumia Tailwind CSS na upangaji wa kielelezo katika Next.js.",
          "Nilisambaza programu ya full-stack na kuandika nyaraka za APIs kwa kutumia Postman."
        ]
      },
      {
        name: "Jukwaa la Blogu ya Kijamii",
        tech: "React.js | Express.js | MongoDB",
        achievements: [
          "Nilijenga programu ya blogu inayowezesha watumiaji kuunda, kuhariri, na kushiriki machapisho na uthibitishaji na usimamizi wa maudhui.",
          "Nilitekeleza RESTful APIs kwa kushughulikia machapisho na kuunganisha vipengele vya frontend kwa kutumia React hooks.",
          "Nilishirikiana kupitia GitHub Projects kwa ufuatiliaji wa masuala, utawi, na ukaguzi wa msimbo."
        ]
      }
    ],
    certifications: [
      "Misingi ya Solidity & Advanced Foundry – Cyfrin Updraft (Desemba 2024)",
      "Cheti cha Mhandisi wa Usalama – Cyber Shujaa (Agosti 2024)",
      "Microsoft Certified: Usalama, Utii, na Misingi ya Utambulisho – Microsoft (Februari 2025)"
    ],
    softSkills: [
      "Mtatuzi wa matatizo wa ushirikiano mwenye ujuzi mkuu wa mawasiliano",
      "Mwenye kubadilika, kujitegemea, na hamu ya kujifunza teknolojia mpya",
      "Nimelenga kuandika msimbo safi, unaoweza kudumishwa, na unaoweza kukua"
    ]
  },
  ki: {
    fullName: "Florence Ndemi",
    email: "ndemiflorece@gmail.com",
    phone: "+254 799 465 754",
    linkedin: "LinkedIn: Florence Ndemi",
    github: "GitHub: Fndemi",
    professionalSummary: "Mũthondeki wa Full-Stack ũrĩa ũrĩ na ũũgĩ na ũgaacĩire, ũrĩ na ũũĩ wa gũthondeka mĩbango ya wavuti ĩrĩa ĩngĩkũra na gũtũmĩra React.js, NestJS, Node.js, na MongoDB. Ndĩ na ũũgĩ wa gũthondeka RESTful APIs, gũcooka gũtũmĩra ũthibitishaji, na gũtũma mahiũ marĩa mehaarĩirie kũrĩ wingu. Ndĩ na kĩyo gĩa gũthondeka indo cia kidijitali iria irĩ na ũtũmi ũrĩa ũnyiitanagĩria ũhinga na mabataro ma thĩ na mazingira marĩa matũũraga.",
    university: "Chuo Kikuu kĩa Ũhinga wa Dedan Kimathi",
    degree: "Digrii ya Mbere ya Ũhinga wa Ũhoro",
    status: "Nĩgũthiĩ na mbere",
    graduationYear: "2022 – 2026",
    secondarySchool: "Shule ya Keerini ya St Anne's Lioki",
    secondaryGrade: "Gikeno B+",
    secondaryYear: "2018 – 2022",
    experience: {
      title: "Mũthondeki wa Full-Stack",
      company: "Directed Dev",
      duration: "Mũgaa 2025 – Rĩu",
      achievements: [
        "Rĩu ndathondekaga mĩbango ya wavuti ya full-stack ĩrĩa ĩhaarĩirie gũciarwo na gũtũmĩra React.js, NestJS, na MongoDB.",
        "Ndacookaga gũtũmĩra ũthibitishaji wa JWT ũrĩa ũgitĩre, CRUD APIs, na ũtongoria wa database nĩguo gũkorwo na wĩra ũrĩa ũngĩkũra.",
        "Ndagĩaga na gĩcunjĩ kĩa sprints cia Agile, ngĩtũmĩra Trello na GitHub nĩguo ndũmĩrĩre mabadiliko na gũkũmbũka wĩra.",
        "Ndagĩaga wĩra hamwe na ikundi cia haraaya gũtũma mĩbango kũrĩ Render na Netlify, ngĩmenyerera atĩ nĩ kũrĩ na mĩthiĩre mĩega ya CI/CD.",
        "Ndahotanagia gũcũũrania msimbo na gũtaarĩria athondeki a mĩbango anini mazoea mega."
      ]
    },
    skills: {
      frontend: "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS",
      backend: "Node.js, Express.js, NestJS, Flask",
      databases: "MongoDB, MySQL",
      apis: "RESTful APIs, JWT, Axios, JSON, Fetch",
      tools: "Git, GitHub, Render, Netlify, Swagger, Notion, Figma, Postman"
    },
    projects: [
      {
        name: "WasteVortex – Gĩtara kĩa Gũtongoria Mahiũ ma Gĩko",
        tech: "React.js | Flask | MongoDB | Mũhiano wa AI Heuristic",
        achievements: [
          "Ndathondekire gĩtara kĩa full-stack kĩrĩa kĩhotanagia nyũmba na biashara nini gũtwara data cia mahiũ na gũthaitha gũcookanĩrĩrio.",
          "Ndanyiitanĩrĩirie mũhiano wa AI wa heuristic gũgayania mĩthemba ya thaahu (Nini, Gatagatĩ, Nene) na gũtaarĩria gũcookanĩrĩrio kũrĩa kwega.",
          "Ndathondekire UI ĩrĩa ĩcookagĩria na React na ngĩoonia data cia thaahu ihinda-inĩ rĩrĩa rĩrĩ ho.",
          "Ndatũmire backend kũrĩ Render na frontend kũrĩ Netlify, ngĩmenyerera atĩ nĩ kũrĩ na mũthondeko wa modular na nyandĩko cia API."
        ]
      },
      {
        name: "Gĩtara kĩa Wonjoria wa The Luxe",
        tech: "Next.js | NestJS | MongoDB | Tailwind CSS | Cloudinary",
        achievements: [
          "Ndathondekire duka rĩa mũtandao rĩrĩa rĩngĩkũra na ũthibitishaji wa JWT, ũtongoria wa indo, na gũtwara mĩhiano.",
          "Ndathondekire UI ĩrĩa ĩcookagĩria na gũtũmĩra Tailwind CSS na mũgayano wa kĩhũthĩro kũrĩ Next.js.",
          "Ndatũmire mũbango wa full-stack na ngĩandĩka nyandĩko cia APIs na gũtũmĩra Postman."
        ]
      },
      {
        name: "Gĩtara kĩa Blog ya Kĩũngano",
        tech: "React.js | Express.js | MongoDB",
        achievements: [
          "Ndathondekire mũbango wa blog ũrĩa ũhotanagia atũmĩri gũthondeka, gũcookereria, na kũgayania maandĩko na ũthibitishaji na ũtongoria wa maudhui.",
          "Ndacookire gũtũmĩra RESTful APIs nĩguo ndũmĩrĩre maandĩko na ngĩnyiitanĩrĩria icunjĩ cia frontend na gũtũmĩra React hooks.",
          "Ndagĩire wĩra hamwe kupĩtĩa GitHub Projects nĩguo ndũmbũre mathina, mĩtĩ, na gũcũũrania msimbo."
        ]
      }
    ],
    certifications: [
      "Mĩsingi ya Solidity & Advanced Foundry – Cyfrin Updraft (Mũgaa 2024)",
      "Cheti kĩa Mũthondeki wa Ũgitĩri – Cyber Shujaa (Mũgathania 2024)",
      "Microsoft Certified: Ũgitĩri, Kũrũmĩrĩra Watho, na Mĩsingi ya Ũmenyo – Microsoft (Mũgaa 2025)"
    ],
    softSkills: [
      "Mũtatũri wa mathina wa ũiguano arĩ na ũũgĩ mũnene wa gũtũmanania",
      "Mũndũ wa kũgarũrũka, wa kwĩyendithia, na arĩ na kĩyo gĩa kũmenya ũhinga mwerũ",
      "Ndĩmenyereire gũandĩka msimbo mũtheru, ũrĩa ũngĩmenyagĩrĩra, na ũrĩa ũngĩkũra"
    ]
  }
};

const Resume = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const profile = resumeData[currentLanguage];

  const handleDownload = (format, language) => {
    const languageNames = {
      en: 'English',
      sw: 'Kiswahili', 
      ki: 'Kikuyu'
    };
    
    const fileName = `Florence_Ndemi_Resume_${languageNames[language]}.${format}`;
    
    if (format === 'pdf') {
      // For PDF, we'll use browser's print functionality
      const printWindow = window.open('', '_blank');
      const resumeContent = document.querySelector('.resume-content').innerHTML;
      
      printWindow.document.write(`
        <html>
          <head>
            <title>Florence Ndemi - Resume</title>
            <style>
              body { font-family: 'Inter', sans-serif; margin: 20px; }
              .resume-content { max-width: 800px; margin: 0 auto; }
              h1, h2, h3 { color: #667eea; }
              .no-print { display: none; }
            </style>
          </head>
          <body>
            <div class="resume-content">${resumeContent}</div>
          </body>
        </html>
      `);
      
      printWindow.document.close();
      printWindow.print();
    } else if (format === 'pptx') {
      // For PowerPoint, create a simple text file with resume content
      const resumeText = `
FLORENCE NDEMI - PROFESSIONAL RESUME

${profile.fullName}
${profile.email} | ${profile.phone}
${profile.linkedin} | ${profile.github}

PROFESSIONAL SUMMARY
${profile.professionalSummary}

EDUCATION
${profile.degree} (${profile.status})
${profile.university} | ${profile.graduationYear}

${profile.secondarySchool}
${profile.secondaryYear} | ${profile.secondaryGrade}

PROFESSIONAL EXPERIENCE
${profile.experience.title}
${profile.experience.company} | ${profile.experience.duration}
${profile.experience.achievements.map(achievement => `• ${achievement}`).join('\n')}

TECHNICAL SKILLS
Frontend: ${profile.skills.frontend}
Backend: ${profile.skills.backend}
Databases: ${profile.skills.databases}
APIs & Auth: ${profile.skills.apis}
Tools: ${profile.skills.tools}

FEATURED PROJECTS
${profile.projects.map(project => `
${project.name}
${project.tech}
${project.achievements.map(achievement => `• ${achievement}`).join('\n')}`).join('\n\n')}

CERTIFICATIONS
${profile.certifications.map(cert => `• ${cert}`).join('\n')}

CORE COMPETENCIES
${profile.softSkills.map(skill => `• ${skill}`).join('\n')}
      `;
      
      const blob = new Blob([resumeText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName.replace('.pptx', '.txt');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <>
      <section className="section" style={{ paddingTop: '4rem', marginTop: '60px' }}>
        <div className="wide-container">
          <ResumeContainer className="resume-content">
            <LanguageToggle>
              <p>Resume available in multiple languages</p>
              <LanguageSelector 
                currentLanguage={currentLanguage}
                onLanguageChange={setCurrentLanguage}
              />
            </LanguageToggle>
            
            <ResumeHeader>
              <h2>{profile.fullName}</h2>
              <div className="subtitle">Full-Stack Developer & Technology Innovator</div>
              <ContactInfo>
                <span>📧 {profile.email}</span>
                <span>📱 {profile.phone}</span>
                <span>💼 {profile.linkedin}</span>
                <span>🔗 {profile.github}</span>
              </ContactInfo>
            </ResumeHeader>

            <ContentGrid>
              <Sidebar>
                <Section>
                  <h3>Technical Skills</h3>
                  <SkillsGrid>
                    <SkillCategory>
                      <h4>Frontend</h4>
                      <p>{profile.skills.frontend}</p>
                    </SkillCategory>
                    <SkillCategory>
                      <h4>Backend</h4>
                      <p>{profile.skills.backend}</p>
                    </SkillCategory>
                    <SkillCategory>
                      <h4>Databases</h4>
                      <p>{profile.skills.databases}</p>
                    </SkillCategory>
                    <SkillCategory>
                      <h4>APIs & Auth</h4>
                      <p>{profile.skills.apis}</p>
                    </SkillCategory>
                    <SkillCategory>
                      <h4>Tools</h4>
                      <p>{profile.skills.tools}</p>
                    </SkillCategory>
                  </SkillsGrid>
                </Section>

                <Section>
                  <h3>Education</h3>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#2563eb', marginBottom: '0.5rem' }}>{profile.degree} ({profile.status})</h4>
                    <p style={{ color: '#4a5568', fontStyle: 'italic' }}>
                      {profile.university}<br/>{profile.graduationYear}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ color: '#2563eb', marginBottom: '0.5rem' }}>Kenya Certificate of Secondary Education</h4>
                    <p style={{ color: '#4a5568', fontStyle: 'italic' }}>
                      {profile.secondarySchool}<br/>{profile.secondaryYear} | {profile.secondaryGrade}
                    </p>
                  </div>
                </Section>

                <Section>
                  <h3>Certifications</h3>
                  <CertificationsList>
                    {profile.certifications.map((cert, index) => {
                      const [name, org] = cert.split(' – ');
                      return (
                        <div key={index} className="cert-item">
                          <div className="cert-name">{name}</div>
                          <div className="cert-org">{org}</div>
                        </div>
                      );
                    })}
                  </CertificationsList>
                </Section>
              </Sidebar>

              <MainContent>
                <Section>
                  <h3>Professional Summary</h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568' }}>{profile.professionalSummary}</p>
                </Section>

                <Section>
                  <h3>Professional Experience</h3>
                  <ExperienceCard>
                    <h4>{profile.experience.title}</h4>
                    <p className="company-info">
                      {profile.experience.company} | {profile.experience.duration}
                    </p>
                    <ul>
                      {profile.experience.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </ExperienceCard>
                </Section>

                <Section>
                  <h3>Featured Projects</h3>
                  {profile.projects.map((project, index) => (
                    <ProjectCard key={index}>
                      <h4>{project.name}</h4>
                      <p className="tech-stack">{project.tech}</p>
                      <ul>
                        {project.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </ProjectCard>
                  ))}
                </Section>

                <Section>
                  <h3>Core Competencies</h3>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {profile.softSkills.map((skill, index) => (
                      <div key={index} style={{ 
                        background: '#f8fafc', 
                        padding: '1rem', 
                        borderRadius: '6px',
                        borderLeft: '3px solid #3b82f6'
                      }}>
                        <strong style={{ color: '#2563eb' }}>•</strong> {skill}
                      </div>
                    ))}
                  </div>
                </Section>
              </MainContent>
            </ContentGrid>
          </ResumeContainer>
        </div>
      </section>
    </>
  );
};

export default Resume;