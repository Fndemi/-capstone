import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: ${props => props.theme.boxShadow};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid white;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${props => props.theme.colors.primary};
    padding: 1rem;
    gap: 1rem;
    flex-wrap: nowrap;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  border-radius: ${props => props.theme.borderRadius};
  transition: background 0.3s ease;
  background: ${props => props.isActive ? props.theme.colors.secondary : 'transparent'};
  font-size: 0.9rem;
  white-space: nowrap;

  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: white;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0.4rem 0.6rem;
    font-size: 0.85rem;
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/resume', label: 'Resume' },
    { path: '/autobiography', label: 'Autobiography' },
    { path: '/innovation', label: 'Innovation' },
    { path: '/culture', label: 'Culture' },
    { path: '/videos', label: 'Videos' },
    { path: '/photography', label: 'Photography' },
    { path: '/social-media', label: 'Social' },
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <img src="/assets/profile.jpeg" alt="Florence Ndemi" />
          Florence Ndemi
        </Logo>
        <MobileToggle onClick={() => setIsOpen(!isOpen)}>
          ☰
        </MobileToggle>
        <NavLinks isOpen={isOpen}>
          {navItems.map(item => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                isActive={location.pathname === item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;