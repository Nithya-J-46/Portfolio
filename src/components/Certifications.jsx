import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, Calendar, BookOpen } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Full Stack Development (React + Django)',
      issuer: 'Infosys Springboard / Coursera',
      date: 'Aug 2025',
      credentialId: 'INF-FS-849204',
      link: '#',
      tags: ['React', 'Django', 'REST APIs']
    },
    {
      title: 'Advanced Python Coding Certification',
      issuer: 'HackerRank / GeeksforGeeks',
      date: 'May 2025',
      credentialId: 'PY-ADV-90342',
      link: '#',
      tags: ['Data Structures', 'Algorithms', 'OOP']
    },
    {
      title: 'Relational Database Design & SQL',
      issuer: 'MySQL Academy / Udemy',
      date: 'Feb 2025',
      credentialId: 'UD-SQL-55910',
      link: '#',
      tags: ['MySQL', 'Normalization', 'Indexing']
    },
    {
      title: 'Agile Developer Foundation',
      issuer: 'VDart Internships Academy',
      date: 'Jul 2025',
      credentialId: 'VD-AGL-0034',
      link: '#',
      tags: ['Scrum', 'Sprint Planning', 'Git']
    }
  ];

  return (
    <section id="certifications" style={{ position: 'relative' }}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Certifications & Credentials</h2>
          <p>Verified certifications confirming my technical expertise in frontend, backend, and databases.</p>
        </motion.div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
        }}
        className="certs-grid"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card"
            style={{
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backgroundColor: 'rgba(12, 12, 12, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '200px',
            }}
          >
            <div>
              {/* Header Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-light)', fontSize: '0.8rem', fontWeight: 600 }}>
                  <ShieldCheck size={16} />
                  <span>Verified Credential</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
                {cert.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                Issued by: <strong style={{ color: '#E5E5EA' }}>{cert.issuer}</strong>
              </p>
            </div>

            <div>
              {/* Skill Tag Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {cert.tags.map((tag, idx) => (
                  <span key={idx} className="badge badge-gray" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* ID & Link footer */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.75rem',
                  borderTop: '1px solid rgba(255,255,255,0.03)',
                  paddingTop: '12px',
                  color: 'var(--text-muted)',
                }}
              >
                <span>ID: {cert.credentialId}</span>
                <a
                  href={cert.link}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--accent-light)',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                >
                  <span>Verify</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .certs-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
