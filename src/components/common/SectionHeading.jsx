import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  badgeVariant = 'azure', // 'azure' | 'gold'
  lightMode = false,
  className = ''
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`section-header ${align === 'left' ? 'text-left' : ''} ${className}`}
    >
      {badge && (
        <div className={`section-badge ${badgeVariant === 'gold' ? 'gold' : ''}`}>
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`section-title ${lightMode ? 'text-white' : ''}`} style={lightMode ? { color: '#FFFFFF' } : {}}>
        {title}
      </h2>

      {subtitle && (
        <p className={`section-subtitle ${lightMode ? 'text-white-sub' : ''}`} style={lightMode ? { color: 'rgba(255, 255, 255, 0.8)' } : {}}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
