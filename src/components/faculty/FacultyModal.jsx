import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Award,
  GraduationCap,
  Clock,
  BookOpen,
  CheckCircle,
  Quote,
  Sparkles,
  Calendar,
  ArrowRight
} from 'lucide-react';

export default function FacultyModal({ faculty, isOpen, onClose, onOpenEnquiry }) {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !faculty) return null;

  const handleBookConsultation = () => {
    onClose();
    if (onOpenEnquiry) {
      onOpenEnquiry(faculty);
    }
  };

  return (
    <AnimatePresence>
      <div className="faculty-modal-portal" role="dialog" aria-modal="true" aria-labelledby="faculty-modal-title">
        {/* Backdrop */}
        <motion.div
          className="faculty-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Container */}
        <div className="faculty-modal-wrapper" onClick={onClose}>
          <motion.div
            className="faculty-modal-card"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              type="button"
              className="faculty-modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>

            {/* Modal Header Grid */}
            <div className="faculty-modal-header">
              <div className="faculty-modal-avatar-box">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="faculty-modal-avatar"
                />
                <div className="faculty-modal-avatar-glow" />
              </div>

              <div className="faculty-modal-title-info">
                <div className="faculty-modal-top-pills">
                  <span className="faculty-badge-dept">{faculty.department}</span>
                  <span className="faculty-badge-exp">
                    <Clock size={12} /> {faculty.experience}
                  </span>
                  {faculty.rating && (
                    <span className="faculty-badge-rating">
                      ★ {faculty.rating} Mentorship
                    </span>
                  )}
                </div>

                <div className="faculty-modal-name-row">
                  <h2 id="faculty-modal-title" className="faculty-modal-name">
                    {faculty.name}
                  </h2>
                  <CheckCircle size={20} className="text-azure" />
                </div>

                <p className="faculty-modal-role">{faculty.role}</p>

                <div className="faculty-modal-degree-pill">
                  <GraduationCap size={15} color="#D97706" />
                  <span>{faculty.degrees}</span>
                </div>
              </div>
            </div>

            {/* Award Accolade Banner if any */}
            {faculty.award && (
              <div className="faculty-modal-award-ribbon">
                <Award size={16} className="text-gold" />
                <span><strong>Distinction:</strong> {faculty.award}</span>
              </div>
            )}

            {/* Modal Body */}
            <div className="faculty-modal-body">
              {/* Teaching Philosophy Quote */}
              {faculty.philosophy && (
                <div className="faculty-modal-quote-box">
                  <Quote size={20} className="faculty-quote-icon" />
                  <p className="faculty-quote-text">"{faculty.philosophy}"</p>
                </div>
              )}

              {/* Biography */}
              <div className="faculty-modal-section">
                <h4 className="faculty-modal-section-title">
                  <BookOpen size={16} /> Academic Background & Pedagogy
                </h4>
                <p className="faculty-modal-bio-text">{faculty.bio}</p>
              </div>

              {/* Focus Areas & Domains */}
              {faculty.keyAreas && faculty.keyAreas.length > 0 && (
                <div className="faculty-modal-section">
                  <h4 className="faculty-modal-section-title">
                    <Sparkles size={16} /> Core Domains & Research Focus
                  </h4>
                  <div className="faculty-modal-tags">
                    {faculty.keyAreas.map((area) => (
                      <span key={area} className="faculty-modal-tag-chip">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Office Hours / Mentorship Consultation Schedule */}
              {faculty.officeHours && (
                <div className="faculty-modal-schedule-box">
                  <div className="faculty-schedule-info">
                    <Calendar size={18} color="var(--color-azure)" />
                    <div>
                      <div className="faculty-schedule-title">Office Hours & Mentorship Consultation</div>
                      <div className="faculty-schedule-time">{faculty.officeHours}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="faculty-modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onClose}
              >
                Close Profile
              </button>

              <motion.button
                type="button"
                className="btn btn-primary faculty-modal-cta-btn"
                onClick={handleBookConsultation}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Connect with {faculty.name.split(' ')[0]}</span>
                <ArrowRight size={17} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
