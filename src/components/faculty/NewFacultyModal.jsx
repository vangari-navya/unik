import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function NewFacultyModal({ faculty, isOpen, onClose }) {
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

  return (
    <AnimatePresence>
      <div
        className="new-faculty-modal-portal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="new-modal-name"
      >
        <motion.div
          className="new-faculty-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
        />

        <div className="new-faculty-modal-container" onClick={onClose}>
          <motion.div
            className="new-faculty-modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="new-faculty-modal-close"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {/* Modal Content Grid */}
            <div className="new-modal-layout">
              {/* Photo Showcase */}
              <div className="new-modal-image-wrapper">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="new-modal-photo"
                />
              </div>

              {/* Details Column */}
              <div className="new-modal-details">
                {/* Header Information */}
                <div className="new-modal-header-info">
                  <span className="new-modal-department">{faculty.department}</span>
                  <h2 id="new-modal-name" className="new-modal-name">{faculty.name}</h2>
                  <div className="new-modal-designation">{faculty.designation}</div>
                </div>

                <div className="new-modal-divider" />

                {/* About the Educator Body */}
                <div className="new-modal-body">
                  <div className="new-modal-body-title">About the Educator</div>
                  <p className="new-modal-desc">{faculty.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
