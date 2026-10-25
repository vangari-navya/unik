import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Trophy, Star } from 'lucide-react';

const stats = [
  {
    icon: GraduationCap,
    value: '100%',
    label: 'Postgraduate & Doctoral Faculty',
    caption: 'Pedagogical & Research Mastery',
    color: '#007FFF',
    bgLight: 'rgba(0, 127, 255, 0.08)'
  },
  {
    icon: Users,
    value: '1:8',
    label: 'Faculty-to-Student Ratio',
    caption: 'Individualized Daily Mentorship',
    color: '#0047AB',
    bgLight: 'rgba(0, 71, 171, 0.08)'
  },
  {
    icon: Trophy,
    value: '25+',
    label: 'National & Global Laurels',
    caption: 'Teaching & Research Excellence',
    color: '#F7BA00',
    bgLight: 'rgba(247, 186, 0, 0.12)'
  },
  {
    icon: Star,
    value: '98%',
    label: 'Mentorship Satisfaction',
    caption: 'Parent & Learner Consensus',
    color: '#10B981',
    bgLight: 'rgba(16, 185, 129, 0.08)'
  }
];

export default function FacultyTrustStrip() {
  return (
    <div className="faculty-trust-strip-container">
      <div className="faculty-trust-strip">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              className="faculty-trust-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{
                y: -4,
                boxShadow: '0 12px 28px -6px rgba(0, 71, 171, 0.12), 0 0 15px rgba(0, 127, 255, 0.08)'
              }}
            >
              <div
                className="faculty-trust-icon-box"
                style={{
                  backgroundColor: item.bgLight,
                  color: item.color
                }}
              >
                <Icon size={22} strokeWidth={2.2} />
              </div>
              <div className="faculty-trust-text">
                <div className="faculty-trust-value" style={{ color: item.color === '#F7BA00' ? '#D97706' : item.color }}>
                  {item.value}
                </div>
                <div className="faculty-trust-label">{item.label}</div>
                <div className="faculty-trust-caption">{item.caption}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
