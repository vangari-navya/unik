import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Shield, Cpu, Palette, Users, Compass, Check } from 'lucide-react';
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

const pillarHighlights = {
  academic: ['Concept-based learning models', 'Olympiad & competitive test preparation', 'Diagnostic assessment matrices', 'Personalized academic counseling'],
  character: ['Daily mindfulness & reflection assemblies', 'Social emotional learning (SEL) modules', 'Community service outreach credits', 'Peer mediation programs'],
  innovation: ['Robotics & IoT hardware tinkering', 'Coding, Python & AI fundamentals', 'Design thinking & patent labs', 'National science exhibition podiums'],
  creativity: ['State-of-the-art visual arts atelier', 'Classical & western musical academies', 'Annual Shakespearean theatrical productions', 'Creative journalism & editorial guild'],
  leadership: ['Elected Student Council leadership', 'Model United Nations (MUN) delegations', 'Young Entrepreneurs incubator', 'Global debate & rhetoric forums'],
  holistic: ['Multi-sport synthetic athletic tracks', 'Nutritional guidance & wellness clinics', 'Eco-sustainability permaculture farms', 'Yoga, martial arts & mindfulness spaces']
};

export default function EducationalPillars() {
  return (
    <section id="pillars" className="section-padding bg-subtle-pattern" aria-label="Educational Pillars">
      <div className="container">
        <SectionHeading
          badge="Educational Framework"
          title="The Six Pillars of Academic & Life Mastery"
          subtitle="A harmonious blend of intellectual rigor and character evolution that sets UNIK apart from conventional schooling."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {corePillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || BookOpen;
            const highlights = pillarHighlights[pillar.id] || [];
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="card-premium"
                style={{
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center',
                  direction: isReversed ? 'rtl' : 'ltr'
                }}
              >
                {/* Visual / Icon Box Side */}
                <div
                  style={{
                    direction: 'ltr',
                    background: idx % 2 === 0
                      ? 'linear-gradient(135deg, rgba(0, 127, 255, 0.1) 0%, rgba(0, 71, 171, 0.18) 100%)'
                      : 'linear-gradient(135deg, rgba(247, 186, 0, 0.12) 0%, rgba(212, 158, 0, 0.18) 100%)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    border: '1.5px solid var(--border-azure)',
                    minHeight: '240px'
                  }}
                >
                  <div
                    style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '50%',
                      background: idx % 2 === 0 ? 'var(--color-azure)' : 'var(--color-golden)',
                      color: idx % 2 === 0 ? '#FFFFFF' : '#0A1931',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-md)',
                      marginBottom: '1rem'
                    }}
                  >
                    <Icon size={36} />
                  </div>
                  <h4 style={{ color: 'var(--color-deep-blue)', fontSize: '1.3rem', marginBottom: '0.25rem' }}>
                    {pillar.title}
                  </h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Core Educational Pillar {idx + 1}
                  </span>
                </div>

                {/* Content Side */}
                <div style={{ direction: 'ltr' }}>
                  <div className="section-badge" style={{ marginBottom: '0.75rem' }}>
                    <span>Pillar {idx + 1} of 6</span>
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--color-deep-blue)', marginBottom: '1rem' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {pillar.description}
                  </p>

                  {/* Highlights list */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                    {highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--bg-light-blue)', color: 'var(--color-azure)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Check size={13} strokeWidth={3} />
                        </div>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
