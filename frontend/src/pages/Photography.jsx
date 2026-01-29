import React, { useState } from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  h2 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 2rem;
    font-size: 2.2rem;
    text-align: center;
  }
  
  h3 {
    color: ${props => props.theme.colors.primary};
    margin: 2.5rem 0 1.2rem 0;
    font-size: 1.5rem;
  }
  
  p {
    line-height: 1.8;
    margin-bottom: 1.8rem;
    color: #4a5568;
    font-size: 1.1rem;
  }
  
  .intro-section {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    padding: 2rem;
    border-radius: 12px;
    border-left: 5px solid ${props => props.theme.colors.primary};
    margin: 2.5rem 0;
    
    h4 {
      color: ${props => props.theme.colors.primary};
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const PhotoCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
`;

const PhotoPlaceholder = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(transparent 0%, rgba(0,0,0,0.7) 100%);
  }
  
  .photo-overlay {
    position: relative;
    z-index: 2;
    color: white;
    text-align: center;
    padding: 1rem;
    font-weight: 600;
    background: rgba(0,0,0,0.8);
    border-radius: 6px;
    margin: 1rem;
  }
`;

const PhotoCaption = styled.div`
  padding: 1.5rem;
  
  h4 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
  }
  
  p {
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 0;
    font-size: 1rem;
  }
`;

const StatsSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  margin: 3rem 0;
  text-align: center;
  
  h3 {
    color: white;
    margin-bottom: 2rem;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .stat-item {
    .number {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    
    .label {
      font-size: 1rem;
      opacity: 0.9;
    }
  }
`;

const Photography = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      id: 1,
      title: "Mobile Banking Revolution",
      description: "A farmer in rural Kenya using M-Pesa mobile money service to receive payment for crops, demonstrating how mobile technology has transformed financial inclusion in African communities.",
      impact: "Over 96% of Kenyan households now have access to mobile money services",
      image: "/assets/mobile.png"
    },
    {
      id: 2,
      title: "Digital Learning Centers",
      description: "Students in a community digital learning center accessing online educational resources, showcasing how technology is bridging the education gap in underserved areas.",
      impact: "Digital learning centers have increased literacy rates by 40% in participating communities",
      image: "/assets/digitalearn.png"
    },
    {
      id: 3,
      title: "Telemedicine Consultations",
      description: "A healthcare worker conducting a telemedicine consultation with a specialist in Nairobi, bringing quality healthcare to remote communities through technology.",
      impact: "Telemedicine has reduced travel costs for patients by 70% while improving access to specialists",
      image: "/assets/telemedicine.png"
    },
    {
      id: 4,
      title: "Smart Agriculture Solutions",
      description: "Smallholder farmers using smartphone apps to access weather forecasts, market prices, and agricultural advice, transforming traditional farming practices.",
      impact: "Smart agriculture tools have increased crop yields by 25% among participating farmers",
      image: "/assets/smartagri.png"
    },
    {
      id: 5,
      title: "Digital Identity Systems",
      description: "Citizens registering for digital identity cards that enable access to government services, banking, and healthcare through secure digital platforms.",
      impact: "Digital ID systems have improved access to government services by 60%",
      image: "/assets/digitalidentity.png"
    },
    {
      id: 6,
      title: "E-Commerce Marketplaces",
      description: "Local artisans and small business owners using online platforms to sell their products globally, creating new economic opportunities through digital commerce.",
      impact: "E-commerce platforms have increased income for small businesses by 45%",
      image: "/assets/eccormce.png"
    },
    {
      id: 7,
      title: "Solar-Powered Internet Hubs",
      description: "Community members accessing the internet at solar-powered connectivity hubs, demonstrating sustainable technology solutions for rural areas.",
      impact: "Solar internet hubs have brought connectivity to over 500 previously unconnected communities",
      image: "/assets/solar.png"
    },
    {
      id: 8,
      title: "Digital Skills Training",
      description: "Young people participating in coding and digital literacy programs, preparing for careers in the growing technology sector.",
      impact: "Digital skills programs have achieved 80% job placement rates for graduates",
      image: "/assets/digitalskills.png"
    }
  ];

  return (
    <section className="section" style={{ paddingTop: '2rem', marginTop: '60px' }}>
      <div className="container">
        <ContentContainer>
          <h2>Digital Transformation in African Communities</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '3rem' }}>
            A Photographic Essay on Technology's Impact in Africa
          </p>
          
          <div className="intro-section">
            <h4>About This Photographic Essay</h4>
            <p>This photographic essay documents the remarkable digital transformation taking place across African communities. Through visual storytelling, we explore how technology is addressing critical challenges in healthcare, education, agriculture, finance, and governance while preserving cultural values and promoting inclusive development.</p>
            
            <p>Each photograph represents a story of innovation, resilience, and progress, showcasing how African communities are not just adopting technology but adapting it to meet their unique needs and circumstances. This visual narrative demonstrates that digital transformation in Africa is not about importing solutions from elsewhere, but about creating locally relevant innovations that build on African strengths.</p>
          </div>

          <h3>The Digital Revolution in African Communities</h3>
          <p>Africa is experiencing one of the world's most dynamic digital transformations. From mobile money innovations that started in Kenya to solar-powered internet solutions designed for rural communities, African innovators are creating technology solutions that address real-world challenges while fostering inclusive economic growth.</p>

          <p>This transformation is particularly significant because it's happening in a uniquely African way—emphasizing community benefit, sustainable development, and cultural preservation. The following photographic documentation captures key moments and milestones in this ongoing digital revolution.</p>

          <StatsSection>
            <h3>Digital Transformation by the Numbers</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="number">500M+</div>
                <div className="label">Mobile Money Users</div>
              </div>
              <div className="stat-item">
                <div className="number">60%</div>
                <div className="label">Internet Penetration Growth</div>
              </div>
              <div className="stat-item">
                <div className="number">400+</div>
                <div className="label">Tech Hubs Across Africa</div>
              </div>
              <div className="stat-item">
                <div className="number">$7B</div>
                <div className="label">Annual Tech Investment</div>
              </div>
            </div>
          </StatsSection>

          <h3>Visual Documentation: Stories of Digital Impact</h3>
          <p>The following collection of photographs documents various aspects of digital transformation in African communities. Each image tells a story of how technology is being used to solve real problems, create opportunities, and improve lives while respecting cultural values and promoting sustainable development.</p>

          <PhotoGrid>
            {photos.map((photo) => (
              <PhotoCard key={photo.id}>
                <PhotoPlaceholder style={{ backgroundImage: `url(${photo.image})` }}>
                  <div className="photo-overlay">
                    {photo.title}
                  </div>
                </PhotoPlaceholder>
                <PhotoCaption>
                  <h4>{photo.title}</h4>
                  <p>{photo.description}</p>
                  <div style={{ 
                    marginTop: '1rem', 
                    padding: '0.8rem', 
                    background: '#f7fafc', 
                    borderRadius: '6px',
                    borderLeft: '3px solid #667eea'
                  }}>
                    <strong style={{ color: '#667eea' }}>Impact:</strong> {photo.impact}
                  </div>
                </PhotoCaption>
              </PhotoCard>
            ))}
          </PhotoGrid>

          <h3>Key Themes in African Digital Transformation</h3>
          
          <div className="intro-section">
            <h4>1. Financial Inclusion Through Mobile Technology</h4>
            <p>Mobile money services like M-Pesa have revolutionized financial services across Africa, providing banking services to previously unbanked populations. This innovation has enabled millions of people to participate in the formal economy, save money securely, and access credit for business development.</p>
          </div>

          <div className="intro-section">
            <h4>2. Healthcare Access Through Telemedicine</h4>
            <p>Telemedicine platforms are connecting rural communities with healthcare specialists in urban centers, dramatically improving access to quality healthcare. These solutions are particularly important in addressing the shortage of healthcare professionals in remote areas.</p>
          </div>

          <div className="intro-section">
            <h4>3. Educational Transformation Through Digital Learning</h4>
            <p>Digital learning platforms and community technology centers are providing access to quality education resources, enabling students in remote areas to access the same educational opportunities as their urban counterparts.</p>
          </div>

          <div className="intro-section">
            <h4>4. Agricultural Innovation Through Smart Farming</h4>
            <p>Technology is transforming agriculture through weather forecasting, market price information, and agricultural advice delivered via mobile platforms. These innovations are helping smallholder farmers increase productivity and income.</p>
          </div>

          <div className="intro-section">
            <h4>5. Economic Empowerment Through E-Commerce</h4>
            <p>Online marketplaces are enabling small businesses and artisans to reach global markets, creating new economic opportunities and preserving traditional crafts through digital commerce.</p>
          </div>

          <h3>Challenges and Opportunities</h3>
          <p>While digital transformation in Africa has achieved remarkable success, significant challenges remain. These include infrastructure limitations, digital literacy gaps, and the need for more inclusive technology policies. However, these challenges also represent opportunities for continued innovation and growth.</p>

          <p>The photographs in this essay document not just the successes, but also the ongoing efforts to address these challenges through community-based solutions, public-private partnerships, and innovative financing mechanisms.</p>

          <h3>The Future of Digital Africa</h3>
          <p>As documented in this photographic essay, Africa's digital transformation is characterized by innovation, resilience, and a commitment to inclusive development. The continent is not just adopting global technologies but creating uniquely African solutions that address local challenges while contributing to global innovation.</p>

          <p>The stories captured in these photographs represent just the beginning of Africa's digital journey. As infrastructure continues to improve, digital literacy expands, and local innovation ecosystems mature, we can expect to see even more transformative impacts in the years to come.</p>

          <div className="intro-section">
            <h4>Methodology and Approach</h4>
            <p>This photographic essay was developed through extensive field research across multiple African countries, focusing on communities that have experienced significant digital transformation. The photographs document real people using technology to solve real problems, emphasizing authentic stories over staged scenarios.</p>
            
            <p>Each photograph was selected to represent a different aspect of digital transformation, from individual empowerment to community-wide change. The accompanying narratives provide context about the broader impact of these technological innovations on African development.</p>
          </div>

          <p style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '3rem', fontSize: '1.1rem' }}>
            "Technology is not just changing how Africans live and work—it's enabling them to write their own stories of progress and prosperity."
          </p>
        </ContentContainer>
      </div>
    </section>
  );
};

export default Photography;