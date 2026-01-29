import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Resume from './pages/Resume.jsx';
import Autobiography from './pages/Autobiography.jsx';
import Innovation from './pages/Innovation.jsx';
import Culture from './pages/Culture.jsx';
import Challenges from './pages/Challenges.jsx';
import Photography from './pages/Photography.jsx';
import SocialMedia from './pages/SocialMedia.jsx';
import Videos from './pages/Videos.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/autobiography" element={<Autobiography />} />
              <Route path="/innovation" element={<Innovation />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/photography" element={<Photography />} />
              <Route path="/social-media" element={<SocialMedia />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;