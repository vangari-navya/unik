import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Sparkles, ArrowRight, Home, BookOpen, Users, Building2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/navbar.css';

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const location = useLocation();
  const navigate = useNavigate();
  const isFacultyPage = location.pathname === '/faculty';
  const isFranchisePage = location.pathname === '/franchise';

  // Scroll spy & scrolled header state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      if (!isFacultyPage && !isFranchisePage) {
        const sections = ['hero', 'about', 'faculty', 'franchise', 'contact'];
        const scrollPosition = window.scrollY + 180;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFacultyPage, isFranchisePage]);

  const navLinks = [
    { name: 'Home', target: 'hero', path: '/', icon: Home },
    { name: 'About Us', target: 'about', path: '/#about', icon: BookOpen },
    { name: 'Faculty', target: 'faculty', path: '/faculty', icon: Users },
    { name: 'Franchise', target: 'franchise', path: '/franchise', icon: Building2 },
    { name: 'Contact', target: 'contact', path: '/#contact', icon: Phone }
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);

    if (item.target === 'faculty') {
      if (isFacultyPage) {
        const el = document.getElementById('founder') || document.getElementById('faculty');
        if (el) {
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }
      if (location.pathname === '/') {
        const element = document.getElementById('founder') || document.getElementById('faculty');
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          return;
        }
      }
      navigate('/faculty');
      return;
    }

    if (item.target === 'franchise') {
      if (isFranchisePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (location.pathname === '/') {
        const element = document.getElementById('franchise');
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          return;
        }
      }
      navigate('/franchise');
      return;
    }

    if (isFacultyPage || isFranchisePage) {
      navigate(item.path);
      return;
    }

    // On home page, smooth scroll to section
    const element = document.getElementById(item.target);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick({ target: 'hero', path: '/' })}
            className="brand-logo"
            aria-label="UNIK – The School of Excellence Home"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick({ target: 'hero', path: '/' })}
          >
            <div className="brand-crest">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M32 12L54 23L32 34L10 23L32 12Z" fill="#FFFFFF" />
                <path d="M50 25.5V37C50 43 42 48 32 48C22 48 14 43 14 37V25.5L32 34.5L50 25.5Z" fill="#F7BA00" />
                <circle cx="32" cy="24" r="3.5" fill="#0047AB" />
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-name">
                UNIK
                <span className="gold-dot" aria-hidden="true" />
              </span>
              <span className="brand-tagline">The School of Excellence</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links-track">
              {navLinks.map((item) => {
                const isActive = isFacultyPage
                  ? item.target === 'faculty'
                  : isFranchisePage
                  ? item.target === 'franchise'
                  : activeSection === item.target;

                return (
                  <li key={item.target}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className={`nav-link-btn ${isActive ? 'active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="navActivePill"
                          className="nav-active-bar"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Nav Right Actions */}
          <div className="nav-actions">
            {/* Prominent Golden Amber Enquire Now Button */}
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="btn-enquire"
              aria-label="Open admission enquiry"
            >
              <Sparkles size={15} className="enquire-sparkle" />
              <span>Enquire Now</span>
              <ArrowRight size={15} className="enquire-arrow" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="hamburger-btn"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="drawer-backdrop"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="drawer-panel"
            >
              {/* Drawer Header */}
              <div className="drawer-header">
                <div className="brand-logo" style={{ cursor: 'default' }}>
                  <div className="brand-crest" style={{ width: 38, height: 38 }}>
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 12L54 23L32 34L10 23L32 12Z" fill="#FFFFFF" />
                      <path d="M50 25.5V37C50 43 42 48 32 48C22 48 14 43 14 37V25.5L32 34.5L50 25.5Z" fill="#F7BA00" />
                      <circle cx="32" cy="24" r="3.5" fill="#0047AB" />
                    </svg>
                  </div>
                  <div className="brand-text">
                    <span className="brand-name" style={{ fontSize: '1.25rem' }}>
                      UNIK <span className="gold-dot" />
                    </span>
                    <span className="brand-tagline">School of Excellence</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="drawer-close"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links with Icons */}
              <ul className="drawer-links">
                {navLinks.map((item) => {
                  const isActive = isFacultyPage
                    ? item.target === 'faculty'
                    : isFranchisePage
                    ? item.target === 'franchise'
                    : activeSection === item.target;
                  const IconComp = item.icon;

                  return (
                    <li key={item.target}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(item)}
                        className={`drawer-link ${isActive ? 'active' : ''}`}
                      >
                        <div className="drawer-link-left">
                          <span className="drawer-link-icon">
                            <IconComp size={18} />
                          </span>
                          <span>{item.name}</span>
                        </div>
                        <ChevronRight size={16} className="drawer-chevron" />
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Drawer Action Button */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="btn-enquire"
                style={{ width: '100%', justifyContent: 'center', marginBottom: '1.75rem' }}
              >
                <Sparkles size={16} />
                <span>Enquire Now</span>
                <ArrowRight size={16} />
              </button>

              {/* Drawer Footer Contact */}
              <div className="drawer-footer">
                <a href="tel:+918045678900" className="drawer-contact-item">
                  <div className="drawer-contact-icon">
                    <Phone size={15} />
                  </div>
                  <span>+91 80 4567 8900</span>
                </a>
                <a href="mailto:admissions@unikschool.edu" className="drawer-contact-item">
                  <div className="drawer-contact-icon">
                    <Mail size={15} />
                  </div>
                  <span>admissions@unikschool.edu</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
