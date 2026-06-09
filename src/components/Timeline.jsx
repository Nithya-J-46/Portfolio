import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building, ChevronRight } from 'lucide-react';

export default function Timeline() {
  const experiences = [
    {
      role: 'Backend Developer',
      company: 'He5 Solutions',
      duration: 'Jan 2026 – May 2026',
      description: [
        'Designed and optimized database APIs using Django and Flask.',
        'Improved response query speeds and designed relational schemas in MySQL.',
        'Collaborated on backend service deployment and API endpoint security.'
      ],
      tags: ['Django', 'Flask', 'MySQL', 'APIs']
    },
    {
      role: 'Full Stack Developer',
      company: 'VDart',
      duration: 'Jun 2025 – Jul 2025',
      description: [
        'Developed interactive user interface components using React.',
        'Wrote backend data models and database triggers.',
        'Participated in daily standups and agile team workflows.'
      ],
      tags: ['React', 'MySQL', 'Full Stack', 'Agile']
    },
    {
      role: 'Web Development Intern',
      company: 'Octanet Services',
      duration: 'Summer 2024 / Project Period',
      description: [
        'Completed tasks in HTML/CSS, basic JavaScript, and server communication.',
        'Created clean landing pages and responsive site prototypes.',
        'Acquired foundational skills in version control and project packaging.'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Git']
    }
  ];

  return (
    <section id="experience" style={{ position: 'relative' }}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Experience Timeline</h2>
          <p>A chronological overview of my professional development and internships.</p>
        </motion.div>
      </div>

      <div
        style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px 0',
        }}
      >
        {/* Main Vertical Timeline Line */}
        <div
          style={{
            position: 'absolute',
            left: '31px', // matches center of icon on mobile, adjustments below for desktop
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.4) 15%, rgba(139, 92, 246, 0.4) 85%, transparent)',
          }}
          className="timeline-line"
        />

        {/* Timeline Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                paddingLeft: '70px',
              }}
              className="timeline-item"
            >
              {/* Timeline Indicator Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '0',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#050505',
                  border: '2px solid var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(139, 92, 246, 0.25)',
                  zIndex: 2,
                }}
                className="timeline-icon-container"
              >
                <Briefcase size={16} color="var(--accent)" />
              </motion.div>

              {/* Timeline content Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="glass-card"
                style={{
                  padding: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backgroundColor: 'rgba(12, 12, 12, 0.4)',
                }}
              >
                {/* Header Information */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '16px',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                      {exp.role}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 500 }}>
                      <Building size={14} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullets List */}
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '20px',
                  }}
                >
                  {exp.description.map((desc, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      <ChevronRight size={14} color="var(--accent)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.tags.map((tag, idx) => (
                    <span key={idx} className="badge badge-gray">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .timeline-line {
            left: 50% !important;
            transform: translateX(-50%);
          }
          .timeline-item {
            flex-direction: row !important;
            padding-left: 0 !important;
            width: 100%;
          }
          .timeline-item:nth-child(odd) {
            justify-content: flex-start;
          }
          .timeline-item:nth-child(even) {
            justify-content: flex-end;
          }
          .timeline-icon-container {
            left: 50% !important;
            transform: translateX(-50%) !important;
            top: 24px !important;
          }
          .timeline-item:nth-child(odd) .glass-card {
            width: calc(50% - 40px) !important;
            text-align: left;
          }
          .timeline-item:nth-child(even) .glass-card {
            width: calc(50% - 40px) !important;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
