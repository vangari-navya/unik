import React, { useState } from 'react';

// Hero & Stats
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';

// About Components
import SectionHeading from '../components/common/SectionHeading';

import VisionMissionValues from '../components/about/VisionMissionValues';
import FounderIntro from '../components/faculty/FounderIntro';
import NewFacultyHero from '../components/faculty/NewFacultyHero';
import NewFacultyCard from '../components/faculty/NewFacultyCard';
import NewFacultyModal from '../components/faculty/NewFacultyModal';
import { facultyData } from '../data/facultyData';
import { Mail, Sparkles, ArrowRight } from 'lucide-react';
import '../styles/new-faculty.css';

// Franchise Components
import FranchiseSection from '../components/franchise/FranchiseSection';

// Contact & Admissions Components
import ContactInfoCard from '../components/contact/ContactInfoCard';
import ContactForm from '../components/contact/ContactForm';
import CampusMap from '../components/contact/CampusMap';
import FAQAccordion from '../components/contact/FAQAccordion';
import AdmissionsCTA from '../components/home/AdmissionsCTA';

export default function HomePage({ onOpenEnquiry }) {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const headerOffset = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="single-screen-app">
      {/* 1. HERO SECTION */}
      <HeroSection onOpenEnquiry={onOpenEnquiry} />

      {/* 2. SCHOOL STATISTICS WITH ANIMATED COUNTERS */}
      <StatsSection />

      {/* 3. EXCELLENCE IN EDUCATION SCREEN (VISION, MISSION & CORE VALUES) */}
      <VisionMissionValues id="about" />

      {/* 4. FACULTY SECTION */}
      <section id="faculty" className="new-faculty-page" style={{ paddingTop: '1rem', paddingBottom: '3rem' }} aria-label="Meet Our Faculty">
        {/* Background Atmosphere & Pattern */}
        <div className="new-faculty-backdrop" aria-hidden="true">
          <div className="new-faculty-grid-pattern" />
          <div className="new-faculty-ambient-blob blob-top-left" />
          <div className="new-faculty-ambient-blob blob-top-right" />
        </div>

        {/* Founder Introduction Section */}
        <FounderIntro />

        {/* Hero Section */}
        <NewFacultyHero />

        {/* 5-Column Responsive Faculty Cards Grid */}
        <div className="new-faculty-cards-container" style={{ marginTop: '2.5rem', marginBottom: '4rem' }}>
          <div className="faculty-grid-mode">
            {facultyData.map((faculty, idx) => (
              <NewFacultyCard
                key={faculty.id}
                faculty={faculty}
                index={idx}
                viewMode="grid"
                onSelect={setSelectedFaculty}
              />
            ))}
          </div>
        </div>

          {/* Careers Callout */}
        <div className="container" style={{ marginBottom: '2rem' }}>
          <div
            className="card-premium faculty-careers-card"
            style={{
              padding: '2.75rem 2.5rem',
              background: 'linear-gradient(135deg, #02173B 0%, #0047AB 60%, #007FFF 100%)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.75rem',
              border: '1.5px solid rgba(247, 186, 0, 0.45)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Ambient Shimmer Beam */}
            <div className="careers-shimmer-beam" />

            <div style={{ maxWidth: '650px', position: 'relative', zIndex: 2 }}>
              <div className="section-badge gold" style={{ marginBottom: '0.65rem' }}>
                <Sparkles size={14} />
                <span>Careers at UNIK</span>
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.65rem', marginBottom: '0.5rem', fontWeight: 800 }}>
                Are You a Visionary Educator?
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.92)', margin: 0, fontSize: '0.98rem', lineHeight: 1.6 }}>
                Join our world-class academic community of researchers, master educators, and innovators dedicated to redefining global pedagogy.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="btn btn-golden careers-apply-btn"
              style={{ position: 'relative', zIndex: 2 }}
            >
              <Mail size={18} />
              <span>Apply for Faculty Roles</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Faculty Profile Spotlight Modal */}
      <NewFacultyModal
        faculty={selectedFaculty}
        isOpen={!!selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 5. FRANCHISE SECTION (With 3D and Animation Model) */}
      <FranchiseSection />

      {/* 8. CONTACT & ADMISSIONS */}
      <section id="contact" className="section-padding" aria-label="Contact & Admissions">
        <div className="container">
          <SectionHeading
            badge="Connect with Us"
            title="Admissions & Campus Enquiry"
            subtitle="Reach out to our campus admissions team, book an interactive tour, or send your enrollment questions."
          />

          <div className="contact-grid">
            <ContactInfoCard />
            <ContactForm />
          </div>

          <CampusMap />
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <FAQAccordion />

      {/* 10. FINAL ADMISSIONS CALL TO ACTION */}
      <AdmissionsCTA onOpenEnquiry={onOpenEnquiry} />


    </div>
  );
}
