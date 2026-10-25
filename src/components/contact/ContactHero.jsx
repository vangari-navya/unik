import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="section-padding-sm" style={{
      paddingTop: 'calc(var(--header-height) + 3rem)',
      background: 'radial-gradient(circle at 50% 0%, rgba(0, 127, 255, 0.1) 0%, transparent 70%), linear-gradient(180deg, #FFFFFF 0%, #F4F8FD 100%)',
      borderBottom: '1px solid var(--border-light)',
      textAlign: 'center'
    }}>
      <div className="container">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-badge"
          >
            <Sparkles size={14} />
            <span>Connect with Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '1rem', color: 'var(--color-deep-blue)' }}
          >
            Contact & Admissions Enquiry
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}
          >
            We are here to answer your questions, schedule campus walkthroughs, and assist your child’s transition into our educational family.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
