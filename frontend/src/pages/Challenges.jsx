import React, { useState } from 'react';
import styled from 'styled-components';
import VideoPlayer from '../components/VideoPlayer';
import LanguageSelector from '../components/LanguageSelector.jsx';

const PageHeader = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0 40px;
  text-align: center;
  margin-top: 60px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 70px 0 30px;
  }

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    color: white;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    opacity: 0.9;
    color: white;
  }
`;

const VideoSection = styled.div`
  margin: 3rem 0;
  padding: 2rem;
  background: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  
  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  .abstract {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 1rem;
    border-left: 4px solid ${props => props.theme.colors.primary};
    
    p {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
  }
`;

const Challenges = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const content = {
    en: {
      title: "Video Presentations Portfolio",
      subtitle: "Three comprehensive presentations on blockchain technology and modern challenges",
      videos: [
        {
          title: "Blockchain Technology Innovation",
          url: "/videos/WIN_20260129_13_34_06_Pro.mp4",
          abstract: "Blockchain technology is one of the most transformative digital innovations of the 21st century. Initially developed to support cryptocurrencies such as Bitcoin, blockchain has evolved into a powerful tool with applications across finance, healthcare, governance, education, supply chains, and many other sectors. This presentation explores the concept of blockchain, how it works, its key features, real-world applications, benefits, challenges, and its potential impact on developing economies, particularly in Africa. By examining blockchain as an innovation, this presentation highlights how decentralization, transparency, and security can help solve real-world problems and shape the future of digital systems."
        },
        {
          title: "African Culture and Gender Awareness",
          url: "/videos/WIN_20260129_14_29_56_Pro.mp4",
          abstract: "African culture is rich, diverse, and deeply rooted in traditions, values, and social systems that have guided communities for generations. Culture shapes identity, moral values, social roles, and community cohesion across the African continent. This presentation explores African culture with a focus on its importance in preserving identity, promoting unity, and guiding social development. It also examines the role of gender in African societies, highlighting both traditional gender roles and the growing need for gender awareness. By discussing gender awareness, this presentation emphasizes the importance of equality, mutual respect, and inclusion in building sustainable and progressive African communities."
        },
        {
          title: "Modern Society Challenges and Solutions",
          url: "/videos/WIN_20260129_15_02_14_Pro.mp4",
          abstract: "Modern society is experiencing rapid technological growth, urbanization, and globalization. While these changes have brought convenience and progress, they have also introduced serious challenges such as youth unemployment, digital inequality, mental health struggles, and weakened community values. This presentation focuses on the challenge of youth unemployment and digital inequality in modern society. It explores how limited access to skills, opportunities, and resources continues to lock many young people out of meaningful participation in the digital economy. The presentation proposes practical solutions including digital skills training, education reform, community-based innovation hubs, and public-private partnerships to empower youth and create sustainable livelihoods."
        }
      ]
    },
    sw: {
      title: "Mfululizo wa Mawasilisho ya Video",
      subtitle: "Mawasilisho matatu makuu kuhusu teknolojia ya blockchain na changamoto za kisasa",
      videos: [
        {
          title: "Ubunifu wa Teknolojia ya Blockchain",
          url: "/videos/WIN_20260129_13_34_06_Pro.mp4",
          abstract: "Teknolojia ya blockchain ni mojawapo ya ubunifu mkubwa zaidi wa kidijitali katika karne ya 21. Ilianza kutumika kusaidia sarafu za kidijitali kama Bitcoin, lakini kwa sasa imetanuka na kutumika katika sekta mbalimbali kama fedha, afya, utawala, elimu, na minyororo ya ugavi. Uwasilishaji huu unaelezea maana ya blockchain, jinsi inavyofanya kazi, sifa zake kuu, matumizi yake katika dunia halisi, faida, changamoto, na mchango wake katika maendeleo ya kiuchumi, hasa barani Afrika. Blockchain inaonyesha jinsi uwazi, usalama, na mfumo usio na udhibiti wa kati vinaweza kutatua changamoto za kijamii na kiuchumi."
        },
        {
          title: "Utamaduni wa Kiafrika na Uelewa wa Kijinsia",
          url: "/videos/WIN_20260129_14_29_56_Pro.mp4",
          abstract: "Utamaduni wa Kiafrika ni tajiri na wa aina nyingi, ukiwa umejengwa juu ya mila, desturi, na maadili yaliyorithiwa kutoka kizazi hadi kizazi. Utamaduni una mchango mkubwa katika kuunda utambulisho, mshikamano wa kijamii, na mwelekeo wa maendeleo ya jamii. Uwasilishaji huu unajadili umuhimu wa utamaduni wa Kiafrika katika kuhifadhi utambulisho na kuimarisha mshikamano wa kijamii. Aidha, unachambua nafasi ya jinsia katika jamii za Kiafrika na kusisitiza umuhimu wa uelewa wa kijinsia ili kukuza usawa, heshima, na maendeleo endelevu katika jamii za Kiafrika."
        },
        {
          title: "Changamoto za Jamii ya Kisasa na Suluhisho",
          url: "/videos/WIN_20260129_15_02_14_Pro.mp4",
          abstract: "Jamii ya kisasa inakabiliwa na mabadiliko makubwa yanayosababishwa na maendeleo ya teknolojia, ukuaji wa miji, na utandawazi. Ingawa maendeleo haya yameleta urahisi na maendeleo, yameibua changamoto kubwa kama ukosefu wa ajira kwa vijana, pengo la kidijitali, na kudhoofika kwa mshikamano wa kijamii. Uwasilishaji huu unazingatia changamoto ya ukosefu wa ajira kwa vijana na pengo la kidijitali. Unaeleza jinsi ukosefu wa ujuzi, fursa, na rasilimali unavyozuia vijana wengi kushiriki kikamilifu katika uchumi wa kidijitali. Suluhisho zilizopendekezwa ni pamoja na mafunzo ya ujuzi wa kidijitali, mageuzi ya elimu, vituo vya ubunifu katika jamii, na ushirikiano kati ya sekta ya umma na binafsi."
        }
      ]
    },
    ki: {
      title: "Mĩhũrũ ya Mawasilisho ma Video",
      subtitle: "Mawasilisho matatũ ma blockchain na mathĩna ma rĩu",
      videos: [
        {
          title: "Ubunifu wa Tekinolojia ya Blockchain",
          url: "/videos/WIN_20260129_13_34_06_Pro.mp4",
          abstract: "Tekinolojia ya blockchain nĩ ũhoti wa mũno wa gĩthomo kĩa dijitari kĩrĩa kĩaringĩte mũno gĩkeno kĩa thibitari-inĩ. Yambĩrĩria nĩ kũteithia thirikari cia dijitali ta Bitcoin, no rĩu nĩrĩa rĩtũmĩtwo kũrĩa gĩkũyũ kĩa wĩra ta thirikari, ũgima, ũthamaki, na mĩthĩnĩ ya gũcokereria indo. Uwasilishaji ũyũ ũrĩa ũhoro wa blockchain, ũtũũgĩ wakuo, maũndũ mayo mega, na ũhoti wake kũrĩa gũteithia gũthomithia na gũtũũra bũrũri mũno mũno Afrika. Blockchain nĩyonanagia atĩ ũhoro wa kũmenyerera, wĩra wa gũcokia, na wĩra wa gũthibaria ndũmĩrĩri ciakua ciamũrĩte kũhonokia mathĩna ma thirikari na ma bũrũri."
        },
        {
          title: "Ũtamaduni wa Afurika na Ũmenyani wa Jinsia",
          url: "/videos/WIN_20260129_14_29_56_Pro.mp4",
          abstract: "Ũtamaduni wa Afurika nĩ mũno mũingĩ na nĩ wa gĩkeno, ũgĩtũũgĩrĩtwo nĩ mĩtugo, mĩtugo ya athamaki, na maũndũ ma gũtũũra mathiĩnĩ ma andũ kũrĩa ciana cia kĩrĩra. Ũtamaduni nĩ ũtũũgĩ wakuo mũno kũrĩa gũtũũra ũmũthĩ, ũtũũgĩ wa andũ, na ũmwega wa gĩkeno. Uwasilishaji ũyũ ũhoro wa ũtamaduni wa Afurika na ũhoro wa gũmenyera ũhoro wa andũ a arũme na andũ a athoni, gũkĩmenyerera atĩ ũhoro wa ũmenyani wa jinsia nĩ wa mũno mũno nĩguo jamii cia Afurika cĩgũthii na mbere na gũtũũra na ũmwega."
        },
        {
          title: "Matũrũme ma Thĩ ya Rũciinĩ na Ũgwatanĩro",
          url: "/videos/WIN_20260129_15_02_14_Pro.mp4",
          abstract: "Thĩ ya rũciinĩ nĩrĩa gĩkũyũ kĩa ũhoro wa ũmenyo, ũthũkũme wa mĩgũnda, na ũhoro wa gũtũma andũ gũkũrũka. O na ũhoro ũcio wothe waretire ũhoro wa kũhoya na kũgĩa, ũretire o matũrũme maingĩ ta ũhoro wa ũtĩĩri wa arũme a thĩ, na gĩthomo kĩa ũhoro wa dijitari kũgĩa kũgũrũka. Wĩra ũyũ wĩtĩkagĩra mũno ũhoro wa ũtĩĩri wa arũme a thĩ na gĩthomo kĩa dijitari, na ũmenyereria ũrĩa kũrĩ na ũhoro wa gũtĩ ũtũmi, ũmenyo, na rũgendo rũkũrũ rũgĩa kũhingia arũme aingĩ thĩ ya wĩra wa dijitari. Mĩtũgo yĩathondekĩtwo nĩ ta gũthomithia arũme ũmenyo wa dijitari, gũcookereria thomo, gũtũma mĩgũnda ya ũmenyo thĩ ya ciana, na ũhoti wa wĩra hamwe na athamaki na mabũrũri."
        }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  return (
    <>
      <PageHeader>
        <div className="container">
          <h1>{currentContent.title}</h1>
          <p>{currentContent.subtitle}</p>
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
        </div>
      </PageHeader>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {currentContent.videos?.map((video, index) => (
            <VideoSection key={index}>
              <h3>{video.title}</h3>
              <VideoPlayer 
                url={video.url}
                title={video.title}
              />
              <div className="abstract">
                <h4>Abstract</h4>
                <p>{video.abstract}</p>
              </div>
            </VideoSection>
          ))}
        </div>
      </section>
    </>
  );
};

export default Challenges;