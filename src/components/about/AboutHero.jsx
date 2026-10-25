import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Compass } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="section-padding-sm" style={{
      paddingTop: 'calc(var(--header-height) + 3rem)',
      background: 'radial-gradient(circle at 50% 0%, rgba(0, 127, 255, 0.1) 0%, transparent 70%), linear-gradient(180deg, #FFFFFF 0%, #F4F8FD 100%)',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container">
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-badge"
          >
            <Sparkles size={14} />
            <span>About Unik School of Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '1.25rem', color: 'var(--color-deep-blue)' }}
          >
            Cultivating Intellect, Character, and <span style={{ color: 'var(--color-azure)' }}>Lifelong Purpose</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.2rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}
          >
            Founded on the pillars of academic distinction and empathetic human leadership, UNIK – The School of Excellence prepares young students to be courageous thinkers, compassionate innovators, and responsible global citizens.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
