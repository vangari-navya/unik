import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenEnquiry }) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-brand-logo">
              <div className="brand-crest">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 12L54 23L32 34L10 23L32 12Z" fill="#FFFFFF" />
                  <path d="M50 25.5V37C50 43 42 48 32 48C22 48 14 43 14 37V25.5L32 34.5L50 25.5Z" fill="#F7BA00" />
                  <circle cx="32" cy="24" r="3.5" fill="#0047AB" />
                </svg>
              </div>
              <div className="footer-brand-text">
                <h3>UNIK</h3>
                <span>The School of Excellence</span>
              </div>
            </Link>

            <p className="footer-desc">
              Empowering young minds through academic rigor, ethical leadership, creative curiosity, and holistic development in a state-of-the-art educational environment.
            </p>

            <div className="footer-social-links" aria-label="Social media channels">
              <a href="#instagram" className="social-icon-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#linkedin" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#facebook" className="social-icon-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#youtube" className="social-icon-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <polygon points="10 15 15 12 10 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#hero">
                  <ArrowRight size={14} color="var(--color-golden)" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <ArrowRight size={14} color="var(--color-golden)" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#faculty">
                  <ArrowRight size={14} color="var(--color-golden)" />
                  <span>Meet Our Faculty</span>
                </a>
              </li>
              <li>
                <a href="#franchise">
                  <ArrowRight size={14} color="var(--color-golden)" />
                  <span>Franchise</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <ArrowRight size={14} color="var(--color-golden)" />
                  <span>Contact & Admissions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="footer-heading">Campus Contact</h4>
            <ul className="footer-links-list">
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <MapPin size={18} color="var(--color-golden)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <a
                  href="https://www.google.com/maps?q=17.6739349,78.468901&z=17&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit' }}
                >
                  Near Railway Gate, Dabilpur, Medchal-501401
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <Phone size={18} color="var(--color-golden)" style={{ flexShrink: 0 }} />
                <a href="tel:+918045678900" style={{ color: 'inherit' }}>+91 80 4567 8900</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <Mail size={18} color="var(--color-golden)" style={{ flexShrink: 0 }} />
                <a href="mailto:info@unikschool.edu" style={{ color: 'inherit' }}>info@unikschool.edu</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <Clock size={18} color="var(--color-golden)" style={{ flexShrink: 0 }} />
                <span>Mon – Sat: 8:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} UNIK – The School of Excellence. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/contact">Admissions Policy</Link>
            <Link to="/contact">Privacy Statement</Link>
            <Link to="/contact">Terms & Regulations</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
