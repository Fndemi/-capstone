import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.7;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    font-size: 16px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, serif;
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    line-height: 1.3;
  }

  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.25rem; }

  p {
    margin-bottom: ${props => props.theme.spacing.sm};
    font-size: 1rem;
    line-height: 1.7;
  }

  a {
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
      transform: translateY(-1px);
    }
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.md};
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      max-width: 100%;
      padding: 0 ${props => props.theme.spacing.sm};
    }
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      padding: 0 ${props => props.theme.spacing.xs};
    }
  }

  .wide-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.md};
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      padding: 0 ${props => props.theme.spacing.sm};
    }
  }

  .btn {
    background: ${props => props.theme.colors.secondary};
    color: white;
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    border-radius: ${props => props.theme.borderRadius};
    display: inline-block;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 2px solid transparent;

    &:hover {
      background: ${props => props.theme.colors.primary};
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    &.btn-primary {
      background: ${props => props.theme.colors.primary};
      
      &:hover {
        background: ${props => props.theme.colors.secondary};
      }
    }

    &.btn-success {
      background: ${props => props.theme.colors.success};
    }
  }

  .section {
    padding: ${props => props.theme.spacing.xl} 0;
  }

  .text-center {
    text-align: center;
  }

  .mb-1 { margin-bottom: ${props => props.theme.spacing.xs}; }
  .mb-2 { margin-bottom: ${props => props.theme.spacing.sm}; }
  .mb-3 { margin-bottom: ${props => props.theme.spacing.md}; }
  .mb-4 { margin-bottom: ${props => props.theme.spacing.lg}; }

  .fade-in {
    animation: fadeIn 0.6s ease-in;
  }

  .slide-up {
    animation: slideUp 0.8s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(30px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.75rem; }
    h3 { font-size: 1.25rem; }
  }
`;

export default GlobalStyles;