import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, CheckCircle2, ChevronRight, Brain } from 'lucide-react';

export default function About() {
  const whyHireMe = [
    { title: 'Full Stack Development Experience', desc: 'Capable of designing applications from user interface to database layer.' },
    { title: 'React + Django Expertise', desc: 'Skilled in building dynamic single-page apps connected to clean REST APIs.' },
    { title: 'Backend API Development', desc: 'Experience creating fast, documented, and secure endpoints (FastAPI, Flask, Spring Boot).' },
    { title: 'Database Design', desc: 'Adept in writing queries, triggers, and optimization indexes for MySQL & SQLite.' },
    { title: 'Problem Solving Skills', desc: 'Solid foundation in algorithms and active practice on competitive coding portals.' },
    { title: 'Real Internship Experience', desc: 'Proven ability to adapt to agency workflows, deliver clean code, and meet deadlines.' },
    { title: 'Fast Learner', desc: 'Passionate about diving into new frameworks, cloud APIs, and deployment architectures.' },
    { title: 'Team Collaboration Experience', desc: 'Excellent communicator with experience working alongside other developers, designers, and managers.' },
  ];

  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p>Get to know the developer behind the code, her engineering goals, and core strengths.</p>
        </motion.div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'start',
        }}
        className="about-grid"
      >
        {/* Left Side: Summary / Biography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <div className="glass-card" style={{ borderLeft: '4px solid var(--accent)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.4rem', marginBottom: '14px' }}>
              <BookOpen size={20} color="var(--accent)" />
              Education & Profile
            </h3>
            <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '16px' }}>
              I am a <strong>Final-year B.E. Computer Science and Engineering student</strong> with hands-on experience in Full Stack Development using React, Django, Flask, Spring Boot, and MySQL.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Passionate about building scalable web applications, REST APIs, and solving real-world problems through technology. Seeking opportunities to contribute, learn, and grow as a Software Developer.
            </p>
          </div>

          <div className="glass-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.4rem', marginBottom: '14px' }}>
              <Brain size={20} color="var(--accent)" />
              Core Competencies
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }} className="skills-subgrid">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ChevronRight size={14} color="var(--accent)" />
                React Single Page Apps
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ChevronRight size={14} color="var(--accent)" />
                RESTful API Design
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ChevronRight size={14} color="var(--accent)" />
                Django & Flask Backends
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ChevronRight size={14} color="var(--accent)" />
                MySQL Database Design
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ChevronRight size={14} color="var(--accent)" />
                Spring Boot Applications
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ChevronRight size={14} color="var(--accent)" />
                Version Control (Git)
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Why Hire Me Checklist */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', marginBottom: '20px' }}>
              <Award size={22} color="var(--accent)" />
              Why Hire Me?
            </h3>
            
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '20px',
              }}
              className="why-hire-subgrid"
            >
              {whyHireMe.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    transition: 'background-color 0.2s',
                  }}
                  className="why-hire-item"
                >
                  <CheckCircle2 size={18} color="var(--accent)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '4px' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
          .skills-subgrid {
            grid-template-columns: 1fr 1fr !important;
          }
          .why-hire-subgrid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .why-hire-item:hover {
          background-color: rgba(99, 102, 241, 0.03);
        }
      `}</style>
    </section>
  );
}
