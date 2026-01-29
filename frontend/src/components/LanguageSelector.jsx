import React from 'react';
import styled from 'styled-components';

const LanguageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0 0 0;
  flex-wrap: wrap;
`;

const LanguageButton = styled.button`
  padding: 0.6rem 1.2rem;
  border: 2px solid ${props => props.theme.colors.secondary};
  background: ${props => props.isActive ? props.theme.colors.secondary : 'rgba(255,255,255,0.9)'};
  color: ${props => props.isActive ? 'white' : props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius};
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: white;
    transform: translateY(-1px);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

const LanguageSelector = ({ currentLanguage, onLanguageChange, languages }) => {
  const defaultLanguages = [
    { code: 'en', name: 'English' },
    { code: 'sw', name: 'Kiswahili' },
    { code: 'indigenous', name: 'Kikuyu' }
  ];

  const languageOptions = languages || defaultLanguages;

  return (
    <LanguageContainer>
      {languageOptions.map(lang => (
        <LanguageButton
          key={lang.code}
          isActive={currentLanguage === lang.code}
          onClick={() => onLanguageChange(lang.code)}
        >
          {lang.name}
        </LanguageButton>
      ))}
    </LanguageContainer>
  );
};

export default LanguageSelector;