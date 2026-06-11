import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Briefcase, ExternalLink, Calendar, CheckSquare } from 'lucide-react';

// Counter component for key achievements metrics
function Counter({ endValue, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [endValue, duration]);

  return (
    <span style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--accent)' }}>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const achievements = [
    {
      value: 160,
      suffix: '+ Days',
      title: 'GeeksforGeeks coding',
      desc: 'Active daily coding practice solving data structures & algorithmic puzzles.',
      icon: <Code size={24} color="var(--accent)" />
    },
    {
      value: 10,
      suffix: '+ Systems',
      title: 'Full Stack Projects',
      desc: 'Created web platforms integrating React frontends and Python/Java backends.',
      icon: <Award size={24} color="var(--accent)" />
    },
    {
      value: 3,
      suffix: ' Internships',
      title: 'Work Experiences',
      desc: 'Delivered production APIs, designed MySQL schemas, and collaborated in team environments.',
      icon: <Briefcase size={24} color="var(--accent)" />
    }
  ];

  return (
    <section id="achievements" style={{ position: 'relative' }}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Milestones & Achievements</h2>
          <p>Key highlights summarizing my engineering progress, coding routines, and practical training.</p>
        </motion.div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          marginBottom: '50px',
        }}
        className="achievements-grid"
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card"
            style={{
              padding: '30px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backgroundColor: 'rgba(12, 12, 12, 0.4)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(99, 102, 241, 0.08)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </div>

            <Counter endValue={item.value} suffix={item.suffix} />

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>{item.title}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4', maxWidth: '280px' }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .achievements-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
