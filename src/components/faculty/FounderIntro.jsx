import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote, Award, BookOpen } from 'lucide-react';
import founderImg from "../../assets/faculty/shyamSir.jpeg";

export default function FounderIntro({ id = 'founder' }) {
  return (
    <div id={id} className="founder-intro-wrapper" aria-label="Founder Introduction">
      <div className="founder-intro-container">
        <motion.div
          className="founder-card-modern"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Ambient Glow & Top Accent */}
          <div className="founder-card-ambient" aria-hidden="true" />
          <div className="founder-card-top-line" aria-hidden="true" />

          <div className="founder-card-grid">
            {/* Visual Column: Prominent Founder Photo */}
            <div className="founder-photo-column">
              <div className="founder-photo-wrapper">
                <div className="founder-photo-backplate" aria-hidden="true" />
                <div className="founder-photo-frame">
                  <img
                    src={founderImg}
                    alt="Govindula Shyam Sunder, MSc, BEd - Founder & Chairman"
                    className="founder-photo-img"
                    loading="eager"
                  />

                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="founder-info-column">


              <div className="founder-identity-block">
                <h2 className="founder-name">Govindula Shyam Sunder, MSc, BEd</h2>
                <p className="founder-designation">Founder & Chairman, UNIK School </p>
              </div>

              <div className="founder-experience-pill">
                <BookOpen size={15} />
                <span>26+ Years of Visionary Leadership in Educational Excellence</span>
              </div>

              <p className="founder-bio">
                Driven by an enduring commitment to academic distinction and character-building, Govindula Shyam Sunder established UNIK to transcend conventional rote learning. Under his visionary stewardship, the institution harmonizes rigorous CBSE inquiry with advanced STEM exploration and empathy, fostering an inspiring ecosystem where every young learner is empowered to lead with purpose.
              </p>


            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
