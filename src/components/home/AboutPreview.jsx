import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Shield, Cpu, Palette, Users, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { corePillars } from '../../data/featureData';

const iconMap = {
  BookOpen,
  Shield,
  Cpu,
  Palette,
  Users,
  Compass
};

export default function AboutPreview() {
  return (
    <section className="section-padding bg-subtle-pattern" aria-label="About Unik School">
      <div className="container">
        {/* Section Header */}
        <SectionHeading
          badge="Who We Are"
          title="Nurturing Brilliance Through Purposeful Education"
          subtitle="Unik – The School of Excellence is committed to nurturing confident, curious, and responsible learners. Our approach combines strong academic foundations with creativity, character development, collaboration, and real-world learning."
        />

        {/* Core Pillars Grid */}
        <div className="pillars-grid" style={{ marginBottom: '3.5rem' }}>
          {corePillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || BookOpen;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="pillar-card"
              >
                <div className="pillar-icon-box">
                  <Icon size={28} />
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Discover More Callout */}
        <div
          className="about-discover-callout"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 100%)',
            border: '1.5px solid var(--border-azure)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem 3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ maxWidth: '900px' }}>
            <h3 style={{ color: 'var(--color-deep-blue)', fontSize: '1.45rem', marginBottom: '0.5rem' }}>
              Want to learn more about our pedagogical framework?
            </h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Explore how our experiential methodologies, pastoral counseling, and world-class campus facilities shape holistic student potential.
            </p>
          </div>

          <Link to="/about" className="btn btn-primary">
            <span>Read Our Full Story</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
