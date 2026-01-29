import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.primary};
  color: white;
  text-align: center;
  padding: 2rem 0;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <p>&copy; 2026 Florence Ndemi - Capstone Project Portfolio</p>
        <p>Dedan Kimathi University of Technology | Information Technology</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;