import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, GraduationCap, Users, HeartHandshake } from 'lucide-react';
import { statsData } from '../../data/statsData';

const iconMap = {
  Award,
  GraduationCap,
  Users,
  HeartHandshake
};

function AnimatedNumber({ target, suffix, inView }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, inView]);

  return (
    <span className="stat-number">
      {current}
      <span className="stat-suffix">{suffix}</span>
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="stats-section" aria-label="School Statistics">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || Award;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="stat-card"
              >
                <div className="stat-icon-wrapper">
                  <IconComponent size={26} />
                </div>
                <AnimatedNumber
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
                <span className="stat-label">{stat.label}</span>
                <span className="stat-sublabel">
                  {stat.sublabel}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
