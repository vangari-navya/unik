import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Styles
import './styles/index.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/sections.css';

// Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import SEOHead from './components/common/SEOHead';

// Master Pages
import HomePage from './pages/HomePage';
import FacultyPage from './pages/FacultyPage';
import FranchisePage from './pages/FranchisePage';

export default function App() {
  const handleOpenEnquiry = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <BrowserRouter>
      <SEOHead />
      <ScrollToTop />
      
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      <main>
        <Routes>
          <Route path="/faculty" element={<FacultyPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/franchise" element={<FranchisePage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/*" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
        </Routes>
      </main>

      <Footer onOpenEnquiry={handleOpenEnquiry} />
    </BrowserRouter>
  );
}
