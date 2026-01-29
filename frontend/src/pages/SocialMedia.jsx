import React from 'react';
import styled from 'styled-components';

const PageHeader = styled.section`
  background: ${props => props.theme.colors.primary};
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
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const SocialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PlatformIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${props => getPlatformColor(props.platform)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 2rem;
  color: white;
`;

const getPlatformColor = (platform) => {
  const colors = {
    linkedin: '#0077b5',
    github: '#333333',
    twitter: '#1da1f2',
    medium: '#00ab6c',
    stackoverflow: '#f48024'
  };
  return colors[platform] || '#666';
};

const getPlatformIcon = (platform) => {
  const icons = {
    linkedin: '💼',
    github: '💻',
    twitter: '🐦',
    medium: '📝',
    stackoverflow: '💡'
  };
  return icons[platform] || '🌐';
};

const SocialMedia = () => {
  const socialLinks = [
    {
      id: 1,
      platform: 'linkedin',
      title: 'LinkedIn Profile',
      description: 'Professional networking and career development. Connect with industry professionals and showcase work experience.',
      url: 'https://www.linkedin.com/in/florence-ndemi-6a2234280/',
      status: 'Active'
    },
    {
      id: 2,
      platform: 'github',
      title: 'GitHub Repository',
      description: 'Code repositories, open source contributions, and project portfolios. Showcasing technical skills and development work.',
      url: 'https://github.com/Fndemi',
      status: 'Active'
    },
    {
      id: 3,
      platform: 'twitter',
      title: 'Twitter/X Profile',
      description: 'Tech industry discussions, thought leadership, and community engagement. Sharing insights on technology trends.',
      url: 'https://x.com/FlorenceNd87254',
      status: 'Active'
    }
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: '2rem', marginTop: '60px' }}>
        <div className="container">

          <SocialGrid>
            {socialLinks.map((social) => (
              <SocialCard key={social.id}>
                <PlatformIcon platform={social.platform}>
                  {getPlatformIcon(social.platform)}
                </PlatformIcon>
                <h3>{social.title}</h3>
                <p>{social.description}</p>
                <div style={{ 
                  background: '#f8f9fa', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px', 
                  display: 'inline-block',
                  fontSize: '0.9rem',
                  color: '#28a745',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {social.status}
                </div>
                <br />
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ marginTop: '1rem' }}
                >
                  Visit Platform
                </a>
              </SocialCard>
            ))}
          </SocialGrid>

          <div style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            color: 'white',
            padding: '3rem', 
            borderRadius: '12px', 
            margin: '3rem 0',
            textAlign: 'center'
          }}>
            <h2 style={{ color: 'white', marginBottom: '2rem' }}>Platform Strategy</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ color: 'white' }}>💼 Professional Networking</h3>
                <p>LinkedIn for career development and industry connections</p>
              </div>
              <div>
                <h3 style={{ color: 'white' }}>💻 Technical Showcase</h3>
                <p>GitHub for code repositories and project demonstrations</p>
              </div>
              <div>
                <h3 style={{ color: 'white' }}>🐦 Industry Engagement</h3>
                <p>Twitter/X for tech discussions and thought leadership</p>
              </div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '3rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2>Content Focus Areas</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h4 style={{ color: '#667eea' }}>🔗 Blockchain Technology</h4>
                <p>Sharing insights on blockchain development, smart contracts, and decentralized applications.</p>
              </div>
              <div>
                <h4 style={{ color: '#667eea' }}>🌍 African Tech Innovation</h4>
                <p>Highlighting technological solutions and innovations emerging from the African continent.</p>
              </div>
              <div>
                <h4 style={{ color: '#667eea' }}>👩💻 Women in Technology</h4>
                <p>Advocating for diversity in tech and sharing experiences as a female developer in Kenya.</p>
              </div>
              <div>
                <h4 style={{ color: '#667eea' }}>🎓 Educational Content</h4>
                <p>Creating tutorials, guides, and educational resources for aspiring developers.</p>
              </div>
            </div>
          </div>

          <div style={{ 
            background: '#f8f9fa', 
            padding: '2rem', 
            borderRadius: '8px', 
            margin: '2rem 0',
            textAlign: 'center'
          }}>
            <h3>Professional Engagement Metrics</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0077b5' }}>1000+</div>
                <div>LinkedIn Connections</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>25+</div>
                <div>GitHub Repositories</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1da1f2' }}>500+</div>
                <div>Twitter Engagements</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;