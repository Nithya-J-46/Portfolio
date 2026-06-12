import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Workflow, ShieldCheck, LayoutDashboard, Database, Monitor, Zap } from 'lucide-react';

export default function WhatIBuild() {
  const buildItems = [
    {
      title: 'Full Stack Web Applications',
      desc: 'Architecting robust web systems by pairing rich, interactive React frontends with scalable Python/Django backends, ensuring modular code structure and performance.',
      icon: <Globe size={24} color="#06B6D4" />,
      color: '#06B6D4',
      bgGlow: 'rgba(6, 182, 212, 0.05)',
      colSpanClass: 'bento-large'
    },
    {
      title: 'REST APIs',
      desc: 'Designing clean, decoupled, and secure API endpoints with detailed HTTP status codes, query optimizations, and robust integration middleware.',
      icon: <Workflow size={24} color="#4F46E5" />,
      color: '#4F46E5',
      bgGlow: 'rgba(79, 70, 229, 0.05)',
      colSpanClass: 'bento-small'
    },
    {
      title: 'Authentication Systems',
      desc: 'Implementing hardened security gates using JWT, secure HTTP-only cookies, session validation protocols, and role-based access control (RBAC).',
      icon: <ShieldCheck size={24} color="#7C3AED" />,
      color: '#7C3AED',
      bgGlow: 'rgba(124, 58, 237, 0.05)',
      colSpanClass: 'bento-small'
    },
    {
      title: 'Dashboard Applications',
      desc: 'Building high-performance administrative control panels featuring real-time telemetry, interactive charting, data summaries, and user operations logs.',
      icon: <LayoutDashboard size={24} color="#06B6D4" />,
      color: '#06B6D4',
      bgGlow: 'rgba(6, 182, 212, 0.05)',
      colSpanClass: 'bento-large'
    },
    {
      title: 'Database-Driven Systems',
      desc: 'Creating optimized schemas in MySQL, PostgreSQL, and MongoDB, using indexing, transactions, and migration scripts for data integrity.',
      icon: <Database size={24} color="#4F46E5" />,
      color: '#4F46E5',
      bgGlow: 'rgba(79, 70, 229, 0.05)',
      colSpanClass: 'bento-small'
    },
    {
      title: 'Responsive User Interfaces',
      desc: 'Crafting fluid, mobile-first designs with Tailwind CSS, Bootstrap, and custom CSS variables, prioritizing accessibility (a11y) and fast loading.',
      icon: <Monitor size={24} color="#06B6D4" />,
      color: '#06B6D4',
      bgGlow: 'rgba(6, 182, 212, 0.05)',
      colSpanClass: 'bento-small'
    },
    {
      title: 'Automation Solutions',
      desc: 'Writing custom utility scripts, automating cron job background tasks, integrating third-party APIs, and setting up automated workflows.',
      icon: <Zap size={24} color="#7C3AED" />,
      color: '#7C3AED',
      bgGlow: 'rgba(124, 58, 237, 0.05)',
      colSpanClass: 'bento-large'
    }
  ];

  return (
    <section id="what-i-build" style={{ position: 'relative', backgroundColor: '#090D16', padding: '100px 24px', borderTop: '1px solid rgba(255, 255, 255, 0.02)' }}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ color: '#F8FAFC', fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px', textAlign: 'center' }}>What I Build</h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center', lineHeight: '1.5' }}>
            Custom, end-to-end solutions designed for security, scalability, and seamless user experiences.
          </p>
        </motion.div>
      </div>

      <div className="bento-grid" style={{ marginTop: '48px' }}>
        {buildItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`glass-card ${item.colSpanClass}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '16px',
              padding: '32px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backgroundColor: 'rgba(15, 23, 42, 0.35)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '20px',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'default',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)'
            }}
            whileHover={{
              y: -5,
              borderColor: item.color,
              boxShadow: `0 10px 30px ${item.bgGlow}, inset 0 0 12px rgba(255, 255, 255, 0.02)`
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Icon Container */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: `0 0 10px ${item.bgGlow}`
                }}
              >
                {item.icon}
              </div>

              {/* Title & Description */}
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.6', fontWeight: 400 }}>
                  {item.desc}
                </p>
              </div>
            </div>
            
            {/* Visual bottom indicator bar */}
            <div 
              style={{ 
                height: '2px', 
                width: '40px', 
                borderRadius: '2px', 
                backgroundColor: item.color,
                opacity: 0.6
              }} 
            />
          </motion.div>
        ))}
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 640px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bento-grid .bento-large {
            grid-column: span 2;
          }
        }

        @media (min-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .bento-grid .bento-large {
            grid-column: span 2;
          }
          .bento-grid .bento-small {
            grid-column: span 1;
          }
          
          /* Special layouts for Row 3 of desktop: cols are [1, 1, 1] so everything fits perfectly */
        }
      `}</style>
    </section>
  );
}
