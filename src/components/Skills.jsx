import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Settings } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout size={20} color="var(--accent)" />,
      skills: [
        { name: 'React.js', color: '#61DAFB' },
        { name: 'HTML5', color: '#E34F26' },
        { name: 'CSS3', color: '#1572B6' },
        { name: 'JavaScript', color: '#F7DF1E' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={20} color="var(--accent)" />,
      skills: [
        { name: 'Python', color: '#3776AB' },
        { name: 'Django', color: '#092E20' },
        { name: 'Flask', color: '#008080' },
        { name: 'Spring Boot', color: '#6DB33F' },
        { name: 'REST API Development', color: '#7C3AED' }
      ]
    },
    {
      title: 'Database & Systems',
      icon: <Database size={20} color="var(--accent)" />,
      skills: [
        { name: 'MySQL', color: '#00758F' },
        { name: 'SQLite', color: '#003B57' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <Settings size={20} color="var(--accent)" />,
      skills: [
        { name: 'Git', color: '#F05032' },
        { name: 'GitHub', color: '#E5E5EA' },
        { name: 'WordPress', color: '#21759B' },
        { name: 'Canva', color: '#00C4CC' },
        { name: 'Excel', color: '#107C41' }
      ]
    }
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
          <p>Technologies, tools, and frameworks I use to build scalable applications.</p>
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
              backgroundColor: 'rgba(15, 23, 42, 0.35)', // Deep Navy glass
            }}
          >
            {/* Category Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.08)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                }}
              >
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>{category.title}</h3>
            </div>

            {/* Badges Container */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  whileHover={{ y: -3, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '100px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    color: '#E5E5EA',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    cursor: 'default',
                    transition: 'border-color var(--transition-fast), background-color var(--transition-fast)',
                  }}
                  className="skill-pill"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: skill.color,
                      boxShadow: `0 0 6px ${skill.color}`,
                    }}
                  />
                  <span>{skill.name}</span>
                </motion.div>
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
        }
      `}</style>
    </section>
  );
}
