import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import FounderIntro from '../components/faculty/FounderIntro';
import NewFacultyHero from '../components/faculty/NewFacultyHero';
import NewFacultyCard from '../components/faculty/NewFacultyCard';
import NewFacultyModal from '../components/faculty/NewFacultyModal';
import { facultyData } from '../data/facultyData';
import '../styles/new-faculty.css';

export default function FacultyPage({ onOpenEnquiry }) {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for Back-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="new-faculty-page">
      {/* Background Ambience & Dotted/Grid Pattern */}
      <div className="new-faculty-backdrop" aria-hidden="true">
        <div className="new-faculty-grid-pattern" />
        <div className="new-faculty-ambient-blob blob-top-left" />
        <div className="new-faculty-ambient-blob blob-top-right" />
        <div className="new-faculty-ambient-blob blob-mid-left" />
      </div>

      {/* Founder Introduction Section */}
      <FounderIntro id="founder" />

      {/* Hero Section */}
      <NewFacultyHero />

      {/* 5-Column Responsive Faculty Cards Grid */}
      <section className="new-faculty-grid-section" aria-label="Faculty Directory" style={{ marginTop: '2.5rem', marginBottom: '4rem' }}>
        <div className="new-faculty-cards-container">
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
      </section>


      {/* Faculty Profile Spotlight Modal */}
      <NewFacultyModal
        faculty={selectedFaculty}
        isOpen={!!selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            className="faculty-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} strokeWidth={2.4} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
