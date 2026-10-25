import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const pastelAuras = [
  'radial-gradient(circle at 85% 70%, rgba(56, 189, 248, 0.35) 0%, transparent 65%), #EAF4FD',
  'radial-gradient(circle at 88% 70%, rgba(52, 211, 153, 0.35) 0%, transparent 65%), #EAF7F3',
  'radial-gradient(circle at 88% 70%, rgba(251, 146, 60, 0.35) 0%, transparent 65%), #FEF5ED',
  'radial-gradient(circle at 88% 70%, rgba(96, 165, 250, 0.35) 0%, transparent 65%), #EEF4FD',
  'radial-gradient(circle at 88% 70%, rgba(192, 132, 252, 0.35) 0%, transparent 65%), #F7F0FD',
  'radial-gradient(circle at 88% 70%, rgba(45, 212, 191, 0.3) 0%, transparent 65%), #EBF6FA',
  'radial-gradient(circle at 15% 70%, rgba(251, 113, 133, 0.3) 0%, transparent 65%), #FDF0F2',
  'radial-gradient(circle at 88% 70%, rgba(251, 191, 36, 0.35) 0%, transparent 65%), #FEF8E9',
  'radial-gradient(circle at 15% 70%, rgba(167, 139, 250, 0.35) 0%, transparent 65%), #F5F0FD',
  'radial-gradient(circle at 88% 70%, rgba(56, 189, 248, 0.3) 0%, transparent 65%), #EDF5F9'
];

export default function NewFacultyCard({ faculty, index = 0, viewMode = 'grid', onSelect }) {
  const isList = viewMode === 'list';
  const aura = pastelAuras[index % pastelAuras.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
      className={`new-faculty-card ${isList ? 'list-card' : ''}`}
      onClick={() => onSelect && onSelect(faculty)}
      role="button"
      tabIndex={0}
      aria-label={`View profile of ${faculty.name}`}
      onKeyDown={(e) => e.key === 'Enter' && onSelect && onSelect(faculty)}
    >
      {/* Faculty Image with Organic Pastel Backdrop */}
      <div
        className="new-card-image-box"
        style={{ background: aura }}
      >
        <img
          src={faculty.image}
          alt={faculty.name}
          className="new-card-img"
          loading="lazy"
        />
      </div>

      {/* Card Body */}
      <div className="new-card-body">
        <h3 className="new-card-name">{faculty.name}</h3>
        <div className="new-card-designation">{faculty.designation}</div>

        {/* Bottom Row */}
        <div className="new-card-bottom-row">
          <span className="new-card-dept-tag">{faculty.department}</span>
          <div className="new-card-arrow-btn" aria-hidden="true">
            <ArrowRight size={15} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
