import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ArrowRight,
  Headphones,
  Sparkles,
  Phone
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { faqData } from '../../data/faqData';

export default function FAQAccordion() {
  const [openIds, setOpenIds] = useState([1]);

  const toggleItem = (id) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="faq-section-wrapper" aria-label="Frequently Asked Questions">
      {/* Ambient background glows */}
      <div className="faq-ambient-orb orb-1" aria-hidden="true" />
      <div className="faq-ambient-orb orb-2" aria-hidden="true" />

      <div className="faq-container">
        <SectionHeading
          badge="Admissions Helpdesk"
          title="Frequently Asked Questions"
          subtitle="Clear, verified answers regarding our curriculum affiliations, student mentoring, safety standards, and admissions protocol."
        />

        {/* 2-Column Responsive Bento FAQ Grid */}
        <div className="faq-grid">
          {faqData.map((item, idx) => {
            const isOpen = openIds.includes(item.id);

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`faq-card-modern ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="faq-card-header-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <motion.div
                    className="faq-toggle-circle"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ChevronDown size={17} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq-answer-body">
                        <div className="faq-answer-container">
                          <p className="faq-answer-text">{item.answer}</p>
                          <button
                            type="button"
                            onClick={scrollToContact}
                            className="faq-counselor-link"
                          >
                            <span>Have more questions? Ask our admissions team</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}


