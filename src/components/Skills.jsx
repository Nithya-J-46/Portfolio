import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Settings } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout size={20} color="var(--accent)" />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3 / Modern Layouts', level: 90 },
      ],
    },
    {
      title: 'Backend Engineering',
      icon: <Server size={20} color="var(--accent)" />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Django', level: 85 },
        { name: 'Flask', level: 80 },
        { name: 'Spring Boot', level: 70 },
      ],
    },
    {
      title: 'Database & Systems',
      icon: <Database size={20} color="var(--accent)" />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQLite', level: 90 },
        { name: 'Database Design', level: 80 },
      ],
    },
    {
      title: 'Tools & Workflows',
      icon: <Settings size={20} color="var(--accent)" />,
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'WordPress', level: 75 },
        { name: 'Canva', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" style={{ position: 'relative' }}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skills & Technologies</h2>
          <p>A breakdown of my technical toolkit and competency levels across layers.</p>
        </motion.div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
        }}
        className="skills-grid"
      >
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="glass-card"
            style={{
              padding: '28px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backgroundColor: 'rgba(12, 12, 12, 0.4)',
            }}
          >
            {/* Category Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              {category.icon}
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>{category.title}</h3>
            </div>

            {/* Skills Bars Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '16px',
              }}
              className="skills-bars-grid"
            >
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {/* Skill labels */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                    <span style={{ fontWeight: 500, color: '#E5E5EA' }}>{skill.name}</span>
                    <span style={{ color: 'var(--accent-light)', fontWeight: 600 }}>{skill.level}%</span>
                  </div>

                  {/* Slider Progress Bar */}
                  <div
                    style={{
                      width: '100%',
                      height: '6px',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      borderRadius: '100px',
                      border: '1px solid rgba(255,255,255,0.04)',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: skillIdx * 0.05 + catIdx * 0.1 }}
                      style={{
                        height: '100%',
                        background: 'linear-gradient(to right, #FF6B00, #FF8F3D)',
                        borderRadius: 'inherit',
                        boxShadow: '0 0 8px rgba(255, 107, 0, 0.3)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .skills-bars-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 20px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
