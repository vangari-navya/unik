import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  GraduationCap,
  Users,
  Megaphone,
  Monitor,
  FileCheck,
  Building,
  ShieldCheck,
  Coins,
  Briefcase,
  Scale
} from 'lucide-react';

const iconMap = {
  'brand-name': Award,
  'academic-support': GraduationCap,
  'teacher-training': Users,
  'marketing-admissions': Megaphone,
  'school-management-system': Monitor,
  'sop': FileCheck,
  'infrastructure-guidance': Building,
  'brand-standards': ShieldCheck,
  'investment-fees': Coins,
  'responsibilities': Briefcase,
  'legal-affiliation': Scale
};

export default function FranchiseCard({ pillar, index }) {
  const IconComponent = iconMap[pillar.id] || Award;

  return (
    <motion.div
      className="franchise-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
    >
      <div className="franchise-card-header">
        <div className="franchise-icon-box">
          <IconComponent size={22} />
        </div>
        <div className="franchise-card-title-group">
          <div className="franchise-category-tag">{pillar.category}</div>
          <h3 className="franchise-card-title">{pillar.title}</h3>
        </div>
      </div>

      <ul className="franchise-points-list">
        {pillar.points.map((point, ptIdx) => (
          <li key={ptIdx} className="franchise-point-item">
            <span className="franchise-point-bullet" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
