import React from 'react';
import { motion } from 'framer-motion';

export default function NewFacultyHero() {
  return (
    <section className="new-faculty-hero" aria-label="Faculty Introduction">
      {/* Background Campus Building with smooth horizontal fade */}
      <div className="hero-campus-faded-bg" aria-hidden="true" />

      {/* Constellation Network Line Accent */}
      <svg className="hero-constellation-svg" viewBox="0 0 700 220" fill="none" aria-hidden="true">
        <path
          d="M40 140 L160 90 L290 130 L420 70 L540 110 L660 60"
          stroke="rgba(0, 127, 255, 0.2)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle cx="40" cy="140" r="3.5" fill="#007FFF" opacity="0.4" />
        <circle cx="160" cy="90" r="4.5" fill="#007FFF" opacity="0.6" />
        <circle cx="290" cy="130" r="3.5" fill="#007FFF" opacity="0.4" />
        <circle cx="420" cy="70" r="4.5" fill="#007FFF" opacity="0.6" />
        <circle cx="540" cy="110" r="3.5" fill="#007FFF" opacity="0.4" />
        <circle cx="660" cy="60" r="4" fill="#007FFF" opacity="0.5" />
      </svg>

      <div className="new-faculty-hero-container">
        {/* Left Typography */}
        <div className="new-faculty-hero-left">
          {/* Badge with Line: OUR FACULTY ————— */}
          <div className="faculty-badge-row">
            <span className="faculty-badge-text">OUR FACULTY</span>
            <div className="faculty-badge-line" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="faculty-main-heading"
          >
            Meet Our <span className="faculty-heading-accent">Inspiring Educators</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="faculty-supporting-text"
          >
            A team of passionate mentors dedicated to nurturing curiosity, creativity and excellence in every learner.
          </motion.p>
        </div>

        {/* Center-Right Handwritten Script */}
        <div className="faculty-hero-center-script">
          <span className="script-text">Learning Beyond Classrooms</span>
          <svg className="script-underline-svg" viewBox="0 0 220 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 14 C50 6, 120 18, 215 5"
              stroke="#7EB6FF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Right Quote Panel (Clean text, no box border) */}
        <div className="faculty-hero-quote-area">
          <div className="faculty-quote-mark" aria-hidden="true">“</div>
          <p className="faculty-quote-statement">
            Great teachers<br />inspire greater<br />futures.
          </p>
        </div>
      </div>
    </section>
  );
}
