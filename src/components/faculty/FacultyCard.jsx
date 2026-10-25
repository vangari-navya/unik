import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Award,
  BookOpen,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const departmentThemes = {
  Leadership: {
    badgeBg: 'rgba(0, 71, 171, 0.9)',
    accent: '#0047AB',
    dotColor: '#F7BA00'
  },
  STEM: {
    badgeBg: 'rgba(0, 127, 255, 0.9)',
    accent: '#007FFF',
    dotColor: '#38BDF8'
  },
  'Early Learning': {
    badgeBg: 'rgba(13, 148, 136, 0.9)',
    accent: '#0D9488',
    dotColor: '#34D399'
  },
  Languages: {
    badgeBg: 'rgba(109, 40, 217, 0.9)',
    accent: '#7C3AED',
    dotColor: '#C084FC'
  },
  Sports: {
    badgeBg: 'rgba(217, 119, 6, 0.9)',
    accent: '#D97706',
    dotColor: '#FBBF24'
  },
  Arts: {
    badgeBg: 'rgba(219, 39, 119, 0.9)',
    accent: '#DB2777',
    dotColor: '#F472B6'
  }
};

export default function FacultyCard({ faculty, index = 0, onSelectFaculty }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Subtle 3D Tilt Spring Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 26 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 26 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['10%', '90%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['10%', '90%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const theme = departmentThemes[faculty.department] || {
    badgeBg: 'rgba(0, 71, 171, 0.9)',
    accent: '#0047AB',
    dotColor: '#007FFF'
  };

  const handleCardClick = () => {
    if (onSelectFaculty) {
      onSelectFaculty(faculty);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      style={{ perspective: '1200px' }}
      onClick={handleCardClick}
      className="faculty-card-outer"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="faculty-card faculty-card-3d"
      >
        {/* Photo Container */}
        <div className="faculty-photo-wrapper">
          <img
            src={faculty.image}
            alt={`${faculty.name} - ${faculty.role}`}
            className="faculty-photo-img"
            loading="lazy"
          />

          {/* Dynamic Glare Spotlight */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.3) 0%, transparent 60%)`,
              pointerEvents: 'none',
              zIndex: 3,
              opacity: isHovered ? 0.9 : 0,
              transition: 'opacity 0.25s ease'
            }}
          />

          {/* Soft Bottom Shadow for Legibility */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(3, 20, 50, 0.05) 0%, rgba(3, 20, 50, 0.3) 55%, rgba(3, 20, 50, 0.82) 100%)',
              zIndex: 2,
              pointerEvents: 'none'
            }}
          />

          {/* Department Badge with Live Mentor Indicator */}
          <div
            className="faculty-dept-badge"
            style={{
              zIndex: 4,
              transform: 'translateZ(25px)',
              backgroundColor: theme.badgeBg
            }}
          >
            <span
              className="faculty-pulse-dot"
              style={{ backgroundColor: theme.dotColor }}
            />
            <span>{faculty.department}</span>
          </div>

          {/* Experience Badge */}
          <div
            className="faculty-exp-badge"
            style={{ zIndex: 4, transform: 'translateZ(25px)' }}
          >
            <span>{faculty.experience}</span>
          </div>

          {/* Degree Overlay Banner */}
          <div
            className="faculty-degree-overlay"
            style={{ zIndex: 4, transform: 'translateZ(30px)' }}
          >
            <GraduationCap size={14} color="#F7BA00" />
            <span className="faculty-degree-text">
              {faculty.degrees}
            </span>
          </div>
        </div>

        {/* Faculty Info Body */}
        <div className="faculty-info">
          {/* Award Ribbon */}
          {faculty.award && (
            <div className="faculty-award-pill">
              <Award size={13} color="#D97706" />
              <span>{faculty.award}</span>
            </div>
          )}

          {/* Name & Verification */}
          <div className="faculty-header-row">
            <h3 className="faculty-name">{faculty.name}</h3>
            <span title="Verified Master Faculty" className="faculty-verified-badge">
              <CheckCircle size={16} color="#007FFF" />
            </span>
          </div>

          <span className="faculty-role">{faculty.role}</span>
          <p className="faculty-bio">{faculty.bio}</p>

          {/* Specialization Domain */}
          <div className="faculty-spec">
            <BookOpen size={14} color="var(--color-azure)" />
            <span className="faculty-spec-text">{faculty.specialization}</span>
          </div>

          {/* Interactive Micro-Action Bar */}
          <div className="faculty-action-bar">
            <span className="faculty-action-text">
              <span>View Profile & Research</span>
              <ArrowRight size={14} className="faculty-action-arrow" />
            </span>
            <span className="faculty-quick-view-chip">
              <Sparkles size={12} />
              <span>Profile</span>
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
