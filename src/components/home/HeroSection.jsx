import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Hero3D from './Hero3D';

export default function HeroSection({ onOpenEnquiry }) {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const headerOffset = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hero-content"
          >
            {/* Tag Badge */}
            <div className="hero-badge-wrapper">
              <div className="hero-pill-badge">
                <span className="sparkle">
                  <Sparkles size={16} />
                </span>
                <span>Excellence in Education</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              Empowering <span className="highlight-azure">Young Minds.</span> <br />
              Building a <span className="highlight-gold">Brighter Future.</span>
            </h1>

            {/* Supporting Text */}
            <p className="hero-description">
              At <strong>Unik – The School of Excellence</strong>, we create an inspiring learning environment where curiosity, character, creativity, and academic excellence come together.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="btn btn-golden"
                aria-label="Enquire for student admission"
              >
                <span>Enquire Now</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={scrollToAbout}
                className="btn btn-outline"
                aria-label="Explore our school philosophy"
              >
                <span>Explore Our School</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="hero-stats-quick">
              <div className="quick-stat-item">
                <span className="quick-stat-num">
                  1<span className="plus">+</span>
                </span>
                <span className="quick-stat-label">Years of Excellence</span>
              </div>

              <div className="quick-stat-item">
                <span className="quick-stat-num">
                  15<span className="plus">:1</span>
                </span>
                <span className="quick-stat-label">Student-Teacher Ratio</span>
              </div>

              <div className="quick-stat-item">
                <span className="quick-stat-num">
                  100<span className="plus">%</span>
                </span>
                <span className="quick-stat-label">Board Distinction</span>
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Educational Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ width: '100%' }}
          >
            <Hero3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
