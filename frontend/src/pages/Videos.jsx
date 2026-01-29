import React, { useState } from 'react';
import styled from 'styled-components';
import LanguageSelector from '../components/LanguageSelector.jsx';

const VideosContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  margin-top: 80px;
  
  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    margin-top: 70px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  color: #2d3748;
  font-size: 2.5rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const VideoCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    border-color: #cbd5e0;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const VideoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const VideoTitle = styled.h3`
  margin: 0;
  color: #2d3748;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.3;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const WatchButton = styled.a`
  display: inline-block;
  background: #4299e1;
  color: white;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid #4299e1;
  white-space: nowrap;
  
  &:hover {
    background: #3182ce;
    border-color: #3182ce;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
    align-self: flex-start;
  }
  
  @media (max-width: 480px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
  }
`;

const VideoDescription = styled.p`
  color: #4a5568;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  font-size: 1.1rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const AbstractSection = styled.div`
  background: #f7fafc;
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid #4299e1;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const AbstractTitle = styled.h4`
  color: #2d3748;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const AbstractText = styled.p`
  color: #4a5568;
  margin: 0;
  line-height: 1.7;
  font-size: 1rem;
  text-align: justify;
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Videos = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const content = {
    en: {
      title: "Video Presentations",
      videos: [
        {
          id: 1,
          title: 'Innovation Presentation',
          description: 'Blockchain Technology for Secure Digital Transactions',
          url: 'https://drive.google.com/file/d/1XFwYf9EQXjxo8YvDNqOAKv94EskIOVb4/view?usp=sharing',
          abstract: "Blockchain technology is one of the most transformative digital innovations of the 21st century. Initially developed to support cryptocurrencies such as Bitcoin, blockchain has evolved into a powerful tool with applications across finance, healthcare, governance, education, supply chains, and many other sectors. This presentation explores the concept of blockchain, how it works, its key features, real-world applications, benefits, challenges, and its potential impact on developing economies, particularly in Africa. By examining blockchain as an innovation, this presentation highlights how decentralization, transparency, and security can help solve real-world problems and shape the future of digital systems."
        },
        {
          id: 2,
          title: 'Cultural Presentation',
          description: 'Ubuntu Philosophy & Gender Equality in African Context',
          url: 'https://drive.google.com/file/d/18OTv0dulLuI6-uX6H88ecHnw3J1PLLL-/view?usp=sharing',
          abstract: "African culture is rich, diverse, and deeply rooted in traditions, values, and social systems that have guided communities for generations. Culture shapes identity, moral values, social roles, and community cohesion across the African continent. This presentation explores African culture with a focus on its importance in preserving identity, promoting unity, and guiding social development. It also examines the role of gender in African societies, highlighting both traditional gender roles and the growing need for gender awareness. By discussing gender awareness, this presentation emphasizes the importance of equality, mutual respect, and inclusion in building sustainable and progressive African communities."
        },
        {
          id: 3,
          title: 'Modern Challenges',
          description: 'Digital Divide Solutions for Rural Kenya',
          url: 'https://drive.google.com/file/d/1GBTkiohrMP_7eYLQK8nBf0WgixIvkxp3/view?usp=drive_link',
          abstract: "Modern society is experiencing rapid technological growth, urbanization, and globalization. While these changes have brought convenience and progress, they have also introduced serious challenges such as youth unemployment, digital inequality, mental health struggles, and weakened community values. This presentation focuses on the challenge of youth unemployment and digital inequality in modern society. It explores how limited access to skills, opportunities, and resources continues to lock many young people out of meaningful participation in the digital economy. The presentation proposes practical solutions including digital skills training, education reform, community-based innovation hubs, and public-private partnerships to empower youth and create sustainable livelihoods."
        }
      ]
    },
    sw: {
      title: "Mawasilisho ya Video",
      videos: [
        {
          id: 1,
          title: 'Uwasilishaji wa Ubunifu',
          description: 'Teknolojia ya Blockchain kwa Miamala Salama ya Kidijitali',
          url: 'https://drive.google.com/file/d/1XFwYf9EQXjxo8YvDNqOAKv94EskIOVb4/view?usp=sharing',
          abstract: "Teknolojia ya blockchain ni mojawapo ya ubunifu mkubwa zaidi wa kidijitali katika karne ya 21. Ilianza kutumika kusaidia sarafu za kidijitali kama Bitcoin, lakini kwa sasa imetanuka na kutumika katika sekta mbalimbali kama fedha, afya, utawala, elimu, na minyororo ya ugavi. Uwasilishaji huu unaelezea maana ya blockchain, jinsi inavyofanya kazi, sifa zake kuu, matumizi yake katika dunia halisi, faida, changamoto, na mchango wake katika maendeleo ya kiuchumi, hasa barani Afrika. Blockchain inaonyesha jinsi uwazi, usalama, na mfumo usio na udhibiti wa kati vinaweza kutatua changamoto za kijamii na kiuchumi."
        },
        {
          id: 2,
          title: 'Uwasilishaji wa Kitamaduni',
          description: 'Falsafa ya Ubuntu na Usawa wa Kijinsia katika Muktadha wa Kiafrika',
          url: 'https://drive.google.com/file/d/18OTv0dulLuI6-uX6H88ecHnw3J1PLLL-/view?usp=sharing',
          abstract: "Utamaduni wa Kiafrika ni tajiri na wa aina nyingi, ukiwa umejengwa juu ya mila, desturi, na maadili yaliyorithiwa kutoka kizazi hadi kizazi. Utamaduni una mchango mkubwa katika kuunda utambulisho, mshikamano wa kijamii, na mwelekeo wa maendeleo ya jamii. Uwasilishaji huu unajadili umuhimu wa utamaduni wa Kiafrika katika kuhifadhi utambulisho na kuimarisha mshikamano wa kijamii. Aidha, unachambua nafasi ya jinsia katika jamii za Kiafrika na kusisitiza umuhimu wa uelewa wa kijinsia ili kukuza usawa, heshima, na maendeleo endelevu katika jamii za Kiafrika."
        },
        {
          id: 3,
          title: 'Changamoto za Kisasa',
          description: 'Suluhisho la Pengo la Kidijitali kwa Vijijini Kenya',
          url: 'https://drive.google.com/file/d/1GBTkiohrMP_7eYLQK8nBf0WgixIvkxp3/view?usp=drive_link',
          abstract: "Jamii ya kisasa inakabiliwa na mabadiliko makubwa yanayosababishwa na maendeleo ya teknolojia, ukuaji wa miji, na utandawazi. Ingawa maendeleo haya yameleta urahisi na maendeleo, yameibua changamoto kubwa kama ukosefu wa ajira kwa vijana, pengo la kidijitali, na kudhoofika kwa mshikamano wa kijamii. Uwasilishaji huu unazingatia changamoto ya ukosefu wa ajira kwa vijana na pengo la kidijitali. Unaeleza jinsi ukosefu wa ujuzi, fursa, na rasilimali unavyozuia vijana wengi kushiriki kikamilifu katika uchumi wa kidijitali. Suluhisho zilizopendekezwa ni pamoja na mafunzo ya ujuzi wa kidijitali, mageuzi ya elimu, vituo vya ubunifu katika jamii, na ushirikiano kati ya sekta ya umma na binafsi."
        }
      ]
    },
    ki: {
      title: "Mawasilisho ma Video",
      videos: [
        {
          id: 1,
          title: 'Mũwasilishaji wa Ũbunifu',
          description: 'Tekinolojia ya Blockchain kwa Wonjoria wa Kidijitali',
          url: 'https://drive.google.com/file/d/1XFwYf9EQXjxo8YvDNqOAKv94EskIOVb4/view?usp=sharing',
          abstract: "Tekinolojia ya blockchain nĩ ũhoti wa mũno wa gĩthomo kĩa dijitari kĩrĩa kĩaringĩte mũno gĩkeno kĩa thibitari-inĩ. Yambĩrĩria nĩ kũteithia thirikari cia dijitali ta Bitcoin, no rĩu nĩrĩa rĩtũmĩtwo kũrĩa gĩkũyũ kĩa wĩra ta thirikari, ũgima, ũthamaki, na mĩthĩnĩ ya gũcokereria indo. Uwasilishaji ũyũ ũrĩa ũhoro wa blockchain, ũtũũgĩ wakuo, maũndũ mayo mega, na ũhoti wake kũrĩa gũteithia gũthomithia na gũtũũra bũrũri mũno mũno Afrika. Blockchain nĩyonanagia atĩ ũhoro wa kũmenyerera, wĩra wa gũcokia, na wĩra wa gũthibaria ndũmĩrĩri ciakua ciamũrĩte kũhonokia mathĩna ma thirikari na ma bũrũri."
        },
        {
          id: 2,
          title: 'Mũwasilishaji wa Ũtamaduni',
          description: 'Falsafa ya Ubuntu na Ũmenyani wa Jinsia',
          url: 'https://drive.google.com/file/d/18OTv0dulLuI6-uX6H88ecHnw3J1PLLL-/view?usp=sharing',
          abstract: "Ũtamaduni wa Afurika nĩ mũno mũingĩ na nĩ wa gĩkeno, ũgĩtũũgĩrĩtwo nĩ mĩtugo, mĩtugo ya athamaki, na maũndũ ma gũtũũra mathiĩnĩ ma andũ kũrĩa ciana cia kĩrĩra. Ũtamaduni nĩ ũtũũgĩ wakuo mũno kũrĩa gũtũũra ũmũthĩ, ũtũũgĩ wa andũ, na ũmwega wa gĩkeno. Uwasilishaji ũyũ ũhoro wa ũtamaduni wa Afurika na ũhoro wa gũmenyera ũhoro wa andũ a arũme na andũ a athoni, gũkĩmenyerera atĩ ũhoro wa ũmenyani wa jinsia nĩ wa mũno mũno nĩguo jamii cia Afurika cĩgũthii na mbere na gũtũũra na ũmwega."
        },
        {
          id: 3,
          title: 'Mathĩna ma Rĩu',
          description: 'Ũgwatanĩro wa Pengo rĩa Kidijitali Vijijini Kenya',
          url: 'https://drive.google.com/file/d/1GBTkiohrMP_7eYLQK8nBf0WgixIvkxp3/view?usp=drive_link',
          abstract: "Thĩ ya rũciinĩ nĩrĩa gĩkũyũ kĩa ũhoro wa ũmenyo, ũthũkũme wa mĩgũnda, na ũhoro wa gũtũma andũ gũkũrũka. O na ũhoro ũcio wothe waretire ũhoro wa kũhoya na kũgĩa, ũretire o matũrũme maingĩ ta ũhoro wa ũtĩĩri wa arũme a thĩ, na gĩthomo kĩa ũhoro wa dijitari kũgĩa kũgũrũka. Wĩra ũyũ wĩtĩkagĩra mũno ũhoro wa ũtĩĩri wa arũme a thĩ na gĩthomo kĩa dijitari, na ũmenyereria ũrĩa kũrĩ na ũhoro wa gũtĩ ũtũmi, ũmenyo, na rũgendo rũkũrũ rũgĩa kũhingia arũme aingĩ thĩ ya wĩra wa dijitari. Mĩtũgo yĩathondekĩtwo nĩ ta gũthomithia arũme ũmenyo wa dijitari, gũcookereria thomo, gũtũma mĩgũnda ya ũmenyo thĩ ya ciana, na ũhoti wa wĩra hamwe na athamaki na mabũrũri."
        }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  return (
    <VideosContainer>
      <Title>{currentContent.title}</Title>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <LanguageSelector 
          currentLanguage={currentLanguage}
          onLanguageChange={setCurrentLanguage}
        />
      </div>
      <VideoGrid>
        {currentContent.videos.map((video) => (
          <VideoCard key={video.id}>
            <VideoHeader>
              <VideoTitle>{video.title}</VideoTitle>
              <WatchButton 
                href={video.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Watch Video
              </WatchButton>
            </VideoHeader>
            <VideoDescription>{video.description}</VideoDescription>
            <AbstractSection>
              <AbstractTitle>Abstract</AbstractTitle>
              <AbstractText>{video.abstract}</AbstractText>
            </AbstractSection>
          </VideoCard>
        ))}
      </VideoGrid>
    </VideosContainer>
  );
};

export default Videos;