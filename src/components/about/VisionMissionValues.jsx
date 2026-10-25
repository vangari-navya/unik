import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Sparkles,
  BookOpen,
  GraduationCap,
  Lightbulb,
  MessageSquare,
  ShieldCheck,
  Activity,
  UserCheck,
  Rocket,
  Users,
  Handshake,
  CheckCircle2,
  Trophy,
  HeartHandshake,
  Palette,
  BadgeCheck,
  Flame,
  Award,
  Sparkle,
  Check
} from 'lucide-react';
import '../../styles/vision-mission-values.css';

// 8 Mission Pillars data - following UNIK school brand palette (Azure, Deep Blue, Golden, Azure Dark)
const missionPoints = [
  {
    order: '01',
    pillar: 'Pillar 01',
    title: 'Provide Quality Education',
    desc: 'Deliver strong academic foundations through innovative and activity-based teaching.',
    icon: GraduationCap,
    pillarColor: '#007FFF',
    bgColor: 'rgba(0, 127, 255, 0.12)',
    iconColor: '#007FFF'
  },
  {
    order: '02',
    pillar: 'Pillar 02',
    title: 'Encourage Critical Thinking',
    desc: 'Develop creativity, curiosity, problem-solving, and independent learning.',
    icon: Lightbulb,
    pillarColor: '#D49E00',
    bgColor: 'rgba(247, 186, 0, 0.15)',
    iconColor: '#D49E00'
  },
  {
    order: '03',
    pillar: 'Pillar 03',
    title: 'Promote Communication Skills',
    desc: 'Build confidence in spoken English and effective communication.',
    icon: MessageSquare,
    pillarColor: '#0047AB',
    bgColor: 'rgba(0, 71, 171, 0.12)',
    iconColor: '#0047AB'
  },
  {
    order: '04',
    pillar: 'Pillar 04',
    title: 'Instil Moral Values',
    desc: 'Encourage honesty, discipline, respect, kindness, and responsibility.',
    icon: ShieldCheck,
    pillarColor: '#0066CC',
    bgColor: 'rgba(0, 102, 204, 0.12)',
    iconColor: '#0066CC'
  },
  {
    order: '05',
    pillar: 'Pillar 05',
    title: 'Ensure Holistic Development',
    desc: 'Support intellectual, physical, emotional, social, and creative growth.',
    icon: Activity,
    pillarColor: '#007FFF',
    bgColor: 'rgba(0, 127, 255, 0.12)',
    iconColor: '#007FFF'
  },
  {
    order: '06',
    pillar: 'Pillar 06',
    title: 'Give Individual Attention',
    desc: "Recognise each child's abilities, interests, and learning needs.",
    icon: UserCheck,
    pillarColor: '#D49E00',
    bgColor: 'rgba(247, 186, 0, 0.15)',
    iconColor: '#D49E00'
  },
  {
    order: '07',
    pillar: 'Pillar 07',
    title: 'Prepare for the Future',
    desc: 'Develop digital literacy, leadership, teamwork, and practical life skills.',
    icon: Rocket,
    pillarColor: '#0047AB',
    bgColor: 'rgba(0, 71, 171, 0.12)',
    iconColor: '#0047AB'
  },
  {
    order: '08',
    pillar: 'Pillar 08',
    title: 'Partner with Parents',
    desc: "Work together with parents to support every child's progress and success.",
    icon: Users,
    pillarColor: '#0066CC',
    bgColor: 'rgba(0, 102, 204, 0.12)',
    iconColor: '#0066CC'
  }
];

// 8 Core Values (R-I-D-E-C-C-R-P) - aligned with UNIK brand palette
const coreValuesData = [
  {
    id: 'respect',
    letter: 'R',
    name: 'Respect',
    desc: 'Respect teachers, parents, elders, classmates, and everyone in society.',
    icon: Handshake,
    accent: '#007FFF',
    accentRgb: '0, 127, 255',
    gradient: 'linear-gradient(135deg, #007FFF 0%, #0047AB 100%)',
    order: '01'
  },
  {
    id: 'integrity',
    letter: 'I',
    name: 'Integrity',
    desc: 'Always be honest, truthful, and trustworthy.',
    icon: ShieldCheck,
    accent: '#0047AB',
    accentRgb: '0, 71, 171',
    gradient: 'linear-gradient(135deg, #0047AB 0%, #052659 100%)',
    order: '02'
  },
  {
    id: 'discipline',
    letter: 'D',
    name: 'Discipline',
    desc: 'Follow school rules, practise self-control, and maintain good habits.',
    icon: CheckCircle2,
    accent: '#0066CC',
    accentRgb: '0, 102, 204',
    gradient: 'linear-gradient(135deg, #3399FF 0%, #0066CC 100%)',
    order: '03'
  },
  {
    id: 'excellence',
    letter: 'E',
    name: 'Excellence',
    desc: 'Strive to achieve the best in academics, sports, and personal development.',
    icon: Trophy,
    accent: '#D49E00',
    accentRgb: '212, 158, 0',
    gradient: 'linear-gradient(135deg, #F7BA00 0%, #D49E00 100%)',
    order: '04'
  },
  {
    id: 'compassion',
    letter: 'C',
    name: 'Compassion',
    desc: 'Show kindness, care, and empathy towards others.',
    icon: HeartHandshake,
    accent: '#007FFF',
    accentRgb: '0, 127, 255',
    gradient: 'linear-gradient(135deg, #007FFF 0%, #0047AB 100%)',
    order: '05'
  },
  {
    id: 'creativity',
    letter: 'C',
    name: 'Creativity',
    desc: 'Think differently, explore new ideas, and find innovative solutions.',
    icon: Palette,
    accent: '#D49E00',
    accentRgb: '212, 158, 0',
    gradient: 'linear-gradient(135deg, #F7BA00 0%, #D49E00 100%)',
    order: '06'
  },
  {
    id: 'responsibility',
    letter: 'R',
    name: 'Responsibility',
    desc: 'Take ownership of our actions, duties, and learning.',
    icon: BadgeCheck,
    accent: '#0047AB',
    accentRgb: '0, 71, 171',
    gradient: 'linear-gradient(135deg, #0047AB 0%, #052659 100%)',
    order: '07'
  },
  {
    id: 'perseverance',
    letter: 'P',
    name: 'Perseverance',
    desc: 'Never give up; learn from mistakes and keep moving towards success.',
    icon: Flame,
    accent: '#0066CC',
    accentRgb: '0, 102, 204',
    gradient: 'linear-gradient(135deg, #3399FF 0%, #0066CC 100%)',
    order: '08'
  }
];

export default function VisionMissionValues({ id = 'about' }) {
  // Mission Journey Timeline State
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  // Core Values Constellation State
  const [activeValueIndex, setActiveValueIndex] = useState(3); // Default to 'Excellence' (E)
  const [activeLetterFilter, setActiveLetterFilter] = useState('ALL');

  const activePillar = missionPoints[activePillarIndex];
  const activeValue = coreValuesData[activeValueIndex];
  const ActivePillarIcon = activePillar.icon;
  const ActiveValueIcon = activeValue.icon;

  // Handle acronym tab click
  const handleAcronymClick = (item) => {
    setActiveLetterFilter(item.key);
    if (item.index !== undefined) {
      setActiveValueIndex(item.index);
    }
  };

  // Handle direct value selection from the constellation or list
  const handleSelectValue = (index) => {
    setActiveValueIndex(index);
    const keyMap = ['R1', 'I', 'D', 'E', 'C1', 'C2', 'R2', 'P'];
    setActiveLetterFilter(keyMap[index]);
  };

  const handlePrevValue = () => {
    const nextIdx = activeValueIndex > 0 ? activeValueIndex - 1 : coreValuesData.length - 1;
    handleSelectValue(nextIdx);
  };

  const handleNextValue = () => {
    const nextIdx = activeValueIndex < coreValuesData.length - 1 ? activeValueIndex + 1 : 0;
    handleSelectValue(nextIdx);
  };

  return (
    <section id={id} className="excellence-section-wrapper" aria-label="Excellence in Education - Vision, Mission & Values">
      {/* Background Atmosphere & Ambient Lighting */}
      <div className="excellence-ambient-backdrop" aria-hidden="true">
        <div className="excellence-bg-grid" />
        <div className="excellence-glow-orb top-left" />
        <div className="excellence-glow-orb mid-right" />
        <div className="excellence-glow-orb bottom-center" />
      </div>

      <div className="excellence-master-container">
        {/* ==================================================
            1. OUR VISION: PROMINENT HEADER & EDITORIAL LAYOUT
        ================================================== */}
        <motion.div
          className="values-title-header vision-header-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="values-block-heading">1. OUR VISION</h3>
          <p className="values-block-subtext">
            “To Inspire, Educate, and Empower Every Child to Achieve Excellence in Life.”
          </p>
        </motion.div>

        <div className="vision-editorial-composition">
          {/* Centered Progression Column: Supporting Vision Information as a Vertical Timeline Progression */}
          <motion.div
            className="vision-progression-column"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >

            {/* Vertical Timeline Progression (No Cards!) */}
            <div className="vision-vertical-timeline">
              <div className="timeline-spine-track" aria-hidden="true" />

              <div className="timeline-progression-item">
                <div className="timeline-node-marker">
                  <span className="timeline-node-num">01</span>
                </div>
                <div className="timeline-node-body">
                  <h5 className="timeline-node-title">Strong Moral Values</h5>
                  <p className="timeline-node-desc">
                    Instilling integrity, reverence, empathy, and principled leadership that endures through life.
                  </p>
                </div>
              </div>

              <div className="timeline-progression-item">
                <div className="timeline-node-marker">
                  <span className="timeline-node-num">02</span>
                </div>
                <div className="timeline-node-body">
                  <h5 className="timeline-node-title">Spoken English Mastery</h5>
                  <p className="timeline-node-desc">
                    Cultivating effortless spoken fluency, articulate expression, and global communication poise.
                  </p>
                </div>
              </div>

              <div className="timeline-progression-item">
                <div className="timeline-node-marker">
                  <span className="timeline-node-num">03</span>
                </div>
                <div className="timeline-node-body">
                  <h5 className="timeline-node-title">Creative & Critical Thinking</h5>
                  <p className="timeline-node-desc">
                    Igniting analytical inquiry, original problem-solving, and boundless intellectual curiosity.
                  </p>
                </div>
              </div>

              <div className="timeline-progression-item">
                <div className="timeline-node-marker">
                  <span className="timeline-node-num">04</span>
                </div>
                <div className="timeline-node-body">
                  <h5 className="timeline-node-title">Prepared for Future Success</h5>
                  <p className="timeline-node-desc">
                    Equipping learners with digital literacy, adaptable resilience, and real-world practical mastery.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ==================================================
            2. OUR MISSION: PROMINENT HEADER & INTERACTIVE JOURNEY
        ================================================== */}
        <motion.div
          className="values-title-header mission-header-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >

          <h3 className="values-block-heading">2. OUR MISSION 📚</h3>
          <p className="values-block-subtext">
            “Every Child Matters, Every Talent Counts, Every Dream Deserves a Chance.”
          </p>
        </motion.div>

        <div className="mission-journey-section">
          {/* Mission Creed Banner */}


          {/* Interactive Milestone Navigation Track (Horizontal on desktop, responsive vertical on mobile) */}
          <div className="mission-timeline-stepper-track">
            {/* Connecting gradient progress line behind nodes */}
            <div className="mission-track-line" aria-hidden="true">
              <div
                className="mission-track-progress"
                style={{
                  width: `${(activePillarIndex / (missionPoints.length - 1)) * 100}%`
                }}
              />
            </div>

            <div className="mission-nodes-scroller" role="tablist" aria-label="Mission Pillars Progression">
              {missionPoints.map((item, idx) => {
                const isActive = idx === activePillarIndex;
                const isPast = idx < activePillarIndex;

                return (
                  <button
                    key={item.order}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`${item.pillar}: ${item.title}`}
                    className={`mission-milestone-node ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                    onClick={() => setActivePillarIndex(idx)}
                    style={{ '--node-accent': item.pillarColor }}
                  >
                    <div className="milestone-indicator-circle">
                      <span className="milestone-number">{item.order}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activePillarRing"
                          className="milestone-active-glow-ring"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </div>

                    <div className="milestone-label-block">

                      <span className="milestone-short-title">{item.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Large Editorial Pillar Showcase Stage (Framer Motion transitions) */}
          <div className="mission-editorial-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.order}
                className="mission-spotlight-canvas"
                style={{ '--active-accent': activePillar.pillarColor }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div className="mission-spotlight-content">
                  <h4 className="mission-wing-title">{activePillar.title}</h4>
                  <p className="mission-wing-desc">{activePillar.desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ==================================================
            3. OUR CORE VALUES: INTERACTIVE "VALUES CONSTELLATION"
            (Replaces 4-column cards with central acronym orbit + editorial showcase)
        ================================================== */}
        <div className="values-constellation-section">
          {/* Section Heading & Acronym Toolbar */}
          <motion.div
            className="values-title-header values-header-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="values-block-heading">3. OUR CORE VALUES</h3>
            <p className="values-block-subtext">
              Eight foundational principles that anchor our school culture and inspire lifelong character.
            </p>
          </motion.div>

          {/* Central Values Constellation Composition */}
          <div className="values-constellation-stage">
            {/* Left / Center Element: Circular Orbital Values Constellation */}
            <div className="constellation-orbit-container">
              {/* Concentric Decorative Astrolabe Rings & Lines */}
              <div className="constellation-celestial-canvas" aria-hidden="true">
                <svg viewBox="0 0 500 500" className="constellation-svg">
                  {/* Outer Orbit Guide Ring */}
                  <circle cx="250" cy="250" r="200" stroke="rgba(0, 113, 227, 0.12)" strokeWidth="1.5" strokeDasharray="4 6" />
                  {/* Mid Orbit Ring */}
                  <circle cx="250" cy="250" r="165" stroke="rgba(0, 71, 171, 0.14)" strokeWidth="1" />
                  {/* Inner Halo Ring */}
                  <circle cx="250" cy="250" r="135" stroke="rgba(247, 186, 0, 0.25)" strokeWidth="1.2" strokeDasharray="3 3" />

                  {/* Radiating Coordinates */}
                  {coreValuesData.map((val, idx) => {
                    const angleRad = ((idx * 45 - 90) * Math.PI) / 180;
                    const x2 = 250 + 200 * Math.cos(angleRad);
                    const y2 = 250 + 200 * Math.sin(angleRad);
                    const isActive = idx === activeValueIndex;

                    return (
                      <line
                        key={val.id}
                        x1="250"
                        y1="250"
                        x2={x2}
                        y2={y2}
                        stroke={isActive ? val.accent : 'rgba(0, 71, 171, 0.08)'}
                        strokeWidth={isActive ? 2 : 1}
                        strokeDasharray={isActive ? 'none' : '2 4'}
                        className="constellation-spoke-line"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Central Nucleus: "OUR CORE VALUES" */}
              <div className="constellation-center-nucleus">
                <div className="nucleus-inner-content">

                  <p className="nucleus-statement">
                    Character · Integrity · Excellence
                  </p>

                </div>
              </div>

              {/* 8 Constellation Planetary Letter Nodes (R-I-D-E-C-C-R-P) */}
              <div className="constellation-nodes-ring" role="navigation" aria-label="Values Constellation Letter Nodes">
                {coreValuesData.map((val, idx) => {
                  const angleDeg = idx * 45 - 90; // Start at top (-90deg)
                  const radiusPercent = 40; // Percentage from center to keep nodes inside container bounds
                  const angleRad = (angleDeg * Math.PI) / 180;
                  const leftPos = 50 + radiusPercent * Math.cos(angleRad);
                  const topPos = 50 + radiusPercent * Math.sin(angleRad);
                  const isActive = idx === activeValueIndex;

                  return (
                    <button
                      key={val.id}
                      type="button"
                      className={`constellation-letter-node ${isActive ? 'active' : ''}`}
                      style={{
                        left: `${leftPos}%`,
                        top: `${topPos}%`,
                        '--node-accent': val.accent,
                        '--node-gradient': val.gradient
                      }}
                      onClick={() => handleSelectValue(idx)}
                      title={`${val.letter} – ${val.name}`}
                      aria-label={`Select Value ${val.letter}: ${val.name}`}
                    >
                      <span className="constellation-letter-glyph">{val.letter}</span>
                      <span className="constellation-node-tooltip">{val.name}</span>

                      {isActive && (
                        <motion.div
                          layoutId="constellationActiveRing"
                          className="constellation-node-aura"
                          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Selected Value Editorial Spotlight Showcase */}
            <div className="constellation-spotlight-display">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeValue.id}
                  className="value-editorial-canvas"
                  style={{
                    '--val-accent': activeValue.accent,
                    '--val-rgb': activeValue.accentRgb,
                    '--val-gradient': activeValue.gradient
                  }}
                  initial={{ opacity: 0, scale: 0.96, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -14 }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                >
                  {/* Value Identity Showcase */}
                  <div className="value-identity-headline-row">
                    <div className="value-letter-crest" style={{ background: activeValue.gradient }}>
                      {activeValue.letter}
                    </div>

                    <div className="value-headings-group">
                      <h4 className="value-primary-title">{activeValue.name}</h4>
                    </div>

                    <div
                      className="value-icon-orb-stage"
                      style={{
                        background: `rgba(${activeValue.accentRgb}, 0.1)`,
                        color: activeValue.accent
                      }}
                    >
                      <ActiveValueIcon size={28} />
                    </div>
                  </div>

                  {/* Description Narrative */}
                  <div className="value-narrative-box">
                    <p className="value-full-explanation">{activeValue.desc}</p>
                  </div>

                  {/* Footer Navigation & Stepper */}
                  <div className="value-editorial-footer">
                    <div className="value-quick-selector-chips">
                      {coreValuesData.map((v, vIdx) => (
                        <button
                          key={v.id}
                          type="button"
                          className={`value-chip-dot ${vIdx === activeValueIndex ? 'active' : ''}`}
                          onClick={() => handleSelectValue(vIdx)}
                          title={`${v.letter} – ${v.name}`}
                          aria-label={`Jump to ${v.name}`}
                          style={{ '--dot-color': v.accent }}
                        >
                          {v.letter}
                        </button>
                      ))}
                    </div>


                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
