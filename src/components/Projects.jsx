import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Filter, Code } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const allProjects = [
    {
      title: 'Resume Screener',
      subtitle: 'AI-powered ATS Resume Analyzer',
      description: 'An intelligent platform analyzing resumes against job descriptions, yielding matching scores and detailed keyword recommendations using Python NLP parsing.',
      tech: ['React', 'FastAPI', 'Python NLP', 'MySQL'],
      github: 'https://github.com',
      demo: '#',
      category: 'React'
    },
    {
      title: 'Travel Bharat',
      subtitle: 'Tourism & Travel Information Platform',
      description: 'A rich travel guide displaying details of monuments, states, and booking utilities with localized guides and secure admin panels.',
      tech: ['React', 'Django', 'MySQL'],
      github: 'https://github.com',
      demo: '#',
      category: 'Django'
    },
    {
      title: 'MedVault',
      subtitle: 'Medical Records & Booking System',
      description: 'A secure healthcare management dashboard containing electronic health records and real-time patient-doctor appointment scheduling calendars.',
      tech: ['Spring Boot', 'React', 'MySQL'],
      github: 'https://github.com',
      demo: '#',
      category: 'Spring Boot'
    },
    {
      title: 'Website Monitoring Platform',
      subtitle: 'Real-time Uptime Monitoring System',
      description: 'A platform querying target endpoints at intervals, charting responses, logging failures, and dispatching immediate mail updates.',
      tech: ['Flask', 'Python', 'MySQL'],
      github: 'https://github.com',
      demo: '#',
      category: 'Flask'
    },
    {
      title: 'Student Placement Portal',
      subtitle: 'Corporate Recruitment Interface',
      description: 'A streamlined repository managing college placement events, eligible resume matching, company workflows, and coordinator metrics.',
      tech: ['Django', 'React', 'SQLite'],
      github: 'https://github.com',
      demo: '#',
      category: 'Django'
    },
    {
      title: 'Task Management System',
      subtitle: 'Kanban Board & Productivity Tool',
      description: 'An interactive scrum workflow allowing drag-and-drop status tasks, deadlines, and direct collaboration with teams.',
      tech: ['Flask', 'MySQL'],
      github: 'https://github.com',
      demo: '#',
      category: 'Flask'
    }
  ];

  const categories = ['All', 'React', 'Django', 'Flask', 'Spring Boot'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.tech.includes(activeCategory);
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" style={{ position: 'relative' }}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured Projects</h2>
          <p>Explore a selection of full-stack systems and web applications designed to solve real-world problems.</p>
        </motion.div>
      </div>

      {/* Search and Filters Controller */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginBottom: '40px',
          zIndex: 5,
          position: 'relative',
        }}
      >
        {/* Search Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '10px 18px',
            gap: '12px',
            maxWidth: '500px',
            width: '100%',
            margin: '0 auto',
            transition: 'border-color var(--transition-fast)',
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
          onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
        >
          <Search size={18} color="var(--text-secondary)" />
          <input
            type="text"
            placeholder="Search by project name or tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              color: '#FFFFFF',
              fontSize: '0.92rem',
              width: '100%',
              fontFamily: 'var(--font-sans)',
            }}
          />
        </div>

        {/* Filter Badges */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '100px',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border-color)',
                backgroundColor: activeCategory === cat ? 'rgba(139, 92, 246, 0.08)' : 'rgba(255,255,255,0.02)',
                color: activeCategory === cat ? 'var(--accent-light)' : 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.color = '#FFFFFF';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '28px',
        }}
        className="projects-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                backgroundColor: 'rgba(12, 12, 12, 0.4)',
                minHeight: '320px',
              }}
            >
              <div>
                {/* Header Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      letterSpacing: '1px',
                    }}
                  >
                    {project.category} Core
                  </span>
                  <Code size={16} color="var(--text-muted)" />
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
                  {project.title}
                </h3>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-light)', fontWeight: 500, marginBottom: '14px' }}>
                  {project.subtitle}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '24px' }}>
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="badge badge-gray" style={{ fontSize: '0.72rem' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Links */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255,255,255,0.03)',
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <Github size={14} />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.demo}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--accent-light)',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                  >
                    <ExternalLink size={14} />
                    <span>Live Showcase</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* If search queries return nothing */}
      {filteredProjects.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
          <p>No projects found matching the criteria.</p>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
