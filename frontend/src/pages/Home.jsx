import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  33% {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  }
  66% {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }
  100% {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Hero = styled.section`
  animation: ${gradientAnimation} 12s ease-in-out infinite;
  color: white;
  padding: 100px 0 80px;
  text-align: center;
  margin-top: 60px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 80px 0 60px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const CarouselSlide = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  animation: ${props => props.active ? fadeInUp : 'none'} 0.8s ease-out;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: white;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 1.1rem;
    }
  }
  
  .subtitle {
    font-size: 1.1rem;
    opacity: 0.9;
    font-weight: 300;
  }
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'white' : 'rgba(255,255,255,0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
  }
`;

const ComponentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 3rem 0;
  animation: slideUp 0.8s ease-out;
`;

const ComponentCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }

  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Digital Innovation Portfolio",
      content: "Transforming Ideas into Technology Solutions for Africa",
      subtitle: "Florence Ndemi | Blockchain & Cultural Technology Advocate"
    },
    {
      title: "Bridging Technology and Culture", 
      content: "Empowering African Communities Through Digital Innovation",
      subtitle: "Information Technology | Dedan Kimathi University of Technology"
    },
    {
      title: "Technology Meets Tradition",
      content: "Building Digital Solutions Rooted in African Values", 
      subtitle: "Innovation Through Cultural Understanding"
    }
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);
  const components = [
    {
      title: 'Multilingual Resume',
      description: 'Professional resume in English, Kiswahili, and Kikuyu',
      link: '/resume'
    },
    {
      title: 'Autobiographical Essay',
      description: '25-page personal narrative with presentation',
      link: '/autobiography'
    },
    {
      title: 'Innovation Showcase',
      description: 'Blockchain Technology for Information Technology',
      link: '/innovation'
    },
    {
      title: 'African Culture',
      description: 'Ubuntu Philosophy and its importance to Information Technology',
      link: '/culture'
    },
    {
      title: 'Video Presentations',
      description: 'Three comprehensive presentations',
      link: '/videos'
    },
    {
      title: 'Photographic Essay',
      description: 'Digital Transformation in African Communities - Visual narrative on technology adoption',
      link: '/photography'
    }
  ];

  return (
    <>
      <Hero>
        <div className="container">
          <CarouselContainer>
            {slides.map((slide, index) => (
              <CarouselSlide key={index} active={index === currentSlide}>
                <h1>{slide.title}</h1>
                <p>{slide.content}</p>
                <p className="subtitle">{slide.subtitle}</p>
              </CarouselSlide>
            ))}
            <CarouselDots>
              {slides.map((_, index) => (
                <Dot 
                  key={index} 
                  active={index === currentSlide}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </CarouselDots>
          </CarouselContainer>
        </div>
      </Hero>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="wide-container">
          <h2 className="text-center mb-4" style={{ fontSize: '2.5rem' }}>Project Components</h2>
          <ComponentsGrid>
            {components.map((component, index) => (
              <ComponentCard key={index}>
                <h3>{component.title}</h3>
                <p className="mb-3">{component.description}</p>
                <Link to={component.link} className="btn">
                  Explore
                </Link>
              </ComponentCard>
            ))}
          </ComponentsGrid>
        </div>
      </section>
    </>
  );
};

export default Home;