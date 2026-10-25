import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdmissionsCTA({ onOpenEnquiry }) {
  return (
    <section className="section-padding" aria-label="Admissions Call to Action">
      <div className="container">
        <div
          className="admissions-cta-card"
          style={{
            background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, var(--color-azure-dark) 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 4vw, 3.5rem)',
            color: '#FFFFFF',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
            border: '2px solid rgba(247, 186, 0, 0.4)'
          }}
        >
          <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div className="admissions-highlight-pill">
              <Sparkles size={16} />
              <span>Admissions Open for Academic Year 2026–27</span>
            </div>

            <h2 className="admissions-cta-title" style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 3.8vw, 2.75rem)', marginBottom: '1.25rem' }}>
              Ready to Give Your Child an Exceptional Educational Journey?
            </h2>

            <p className="admissions-cta-desc" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Join a community of enthusiastic learners, dedicated faculty mentors, and supportive families. Schedule your personalized campus walkthrough today.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="btn btn-golden admissions-cta-btn"
                aria-label="Enquire for student admission"
              >
                <span>Enquire Now</span>
                <ArrowRight size={18} />
              </button>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
