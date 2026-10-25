import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Sparkles, Building2, BookOpen, Globe2, Trophy } from 'lucide-react';

export default function Hero3D() {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt physics using Framer Motion springs
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="hero-visual-wrapper"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Tilting Card Container */}
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          width: '100%',
          maxWidth: '620px',
          aspectRatio: '1 / 1',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        {/* Soft Azure & Golden Ambient Backlight */}
        <div
          style={{
            position: 'absolute',
            inset: '-10px',
            background: 'radial-gradient(circle at 60% 40%, rgba(0, 127, 255, 0.35) 0%, rgba(247, 186, 0, 0.25) 40%, transparent 70%)',
            filter: 'blur(45px)',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        {/* Outer Glowing Glass Frame */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '2px solid rgba(0, 127, 255, 0.35)',
            boxShadow: '0 24px 60px rgba(0, 71, 171, 0.2), 0 0 30px rgba(247, 186, 0, 0.15)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 247, 255, 0.8) 100%)',
            zIndex: 1,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Main 3D Campus Render */}
          <img
            src="/unik_hero_3d.jpg"
            alt="UNIK School of Excellence 3D Campus, Graduation Cap, Academic Book and Globe"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              transform: 'scale(1.02)',
              transition: 'transform 0.4s ease'
            }}
          />

          {/* Interactive Dynamic Glare Effect */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.4) 0%, transparent 60%)`,
              pointerEvents: 'none',
              zIndex: 2,
              opacity: isHovered ? 0.7 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />

        </div>

        {/* Floating Honor Badge 1 (Top Left) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="hero-floating-badge hero-badge-top-left"
          style={{
            position: 'absolute',
            top: '-15px',
            left: '-25px',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1.5px solid var(--border-azure)',
            borderRadius: '16px',
            padding: '0.75rem 1.1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 16px 36px rgba(0, 71, 171, 0.18)',
            backdropFilter: 'blur(12px)',
            zIndex: 10,
            transform: 'translateZ(40px)'
          }}
        >
          <div
            className="badge-icon-box"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, var(--color-azure) 100%)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Trophy size={20} color="#F7BA00" />
          </div>
          <div>
            <div className="badge-title" style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--color-deep-blue)', lineHeight: 1.2 }}>
              Ranked #1
            </div>
            <div className="badge-subtitle" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Academic & STEM Excellence
            </div>
          </div>
        </motion.div>

        {/* Floating Honor Badge 2 (Bottom Right) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="hero-floating-badge hero-badge-bottom-right"
          style={{
            position: 'absolute',
            bottom: '-15px',
            right: '-20px',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1.5px solid rgba(247, 186, 0, 0.5)',
            borderRadius: '16px',
            padding: '0.75rem 1.1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 16px 36px rgba(247, 186, 0, 0.22)',
            backdropFilter: 'blur(12px)',
            zIndex: 10,
            transform: 'translateZ(40px)'
          }}
        >
          <div
            className="badge-icon-box"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--color-golden) 0%, #D49E00 100%)',
              color: '#031432',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Award size={20} />
          </div>
          <div>
            <div className="badge-title" style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--color-deep-blue)', lineHeight: 1.2 }}>
              1+ Years Legacy
            </div>
            <div className="badge-subtitle" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              100% University Placement
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
