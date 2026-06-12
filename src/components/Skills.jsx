import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, Settings, ShieldCheck, Cpu, Link, Layers, Terminal } from 'lucide-react';

// Custom inline SVG logos to avoid external network calls
const HTML5Logo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#E34F26" style={{ flexShrink: 0 }}>
    <path d="M3 2h18L19.1 21.2 12 23.2 4.9 21.2 3 2zm13.6 5.8H7.4l.2 2.6h8.6l-.3 3.3-3.7 1-3.7-1-.1-1.6H6.7l.2 3.3 5.1 1.4 5.1-1.4.6-6.6H7.9L7.6 8.4h9.3z" />
  </svg>
);

const CSS3Logo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#1572B6" style={{ flexShrink: 0 }}>
    <path d="M3 2h18L19.1 21.2 12 23.2 4.9 21.2 3 2zm13.4 5.8H7.4l.2 2.6h8.4l-.3 3.3-3.7 1-3.7-1-.1-1.6H6.7l.2 3.3 5.1 1.4 5.1-1.4.6-6.6H7.9L7.6 8.4h9.1z" />
  </svg>
);

const JavaScriptLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#F7DF1E" style={{ flexShrink: 0 }}>
    <rect width="24" height="24" rx="3" />
    <path d="M12 17.8c-.8 0-1.5-.3-2-.8l1.4-1.4c.3.3.6.4.8.4.4 0 .6-.2.6-.7V11h2v4.4c0 1.6-1.1 2.4-2.8 2.4zm5.8 0c-1.6 0-2.6-.9-3.2-1.9l1.6-1c.3.5.7.9 1.4.9.5 0 .8-.3.8-.7 0-.5-.4-.6-1.1-1-1.1-.5-2-1-2-2.3 0-1.3 1-2.2 2.5-2.2 1.3 0 2.2.6 2.7 1.5l-1.5 1c-.3-.4-.6-.6-1.1-.6-.4 0-.6.2-.6.5 0 .4.3.5.9.8 1.2.5 2.2 1 2.2 2.4s-.9 2.6-2.7 2.6z" fill="#000000" />
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#61DAFB" strokeWidth="2" style={{ flexShrink: 0 }}>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
  </svg>
);

const BootstrapLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#7952B3" style={{ flexShrink: 0 }}>
    <rect width="24" height="24" rx="4" />
    <path d="M7 6h4.5c1.4 0 2.3.3 2.9.9.5.5.8 1.2.8 2.1 0 1.2-.7 2-1.8 2.3v.1c1.3.3 2.2 1.2 2.2 2.6 0 1-.3 1.8-.9 2.4s-1.5.9-2.9.9H7V6zm2.4 4.5h2c.7 0 1.2-.3 1.2-.9s-.5-.9-1.2-.9h-2v1.8zm0 5h2.2c.8 0 1.3-.3 1.3-1s-.5-1-1.3-1h-2.2v2z" fill="#FFFFFF" />
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#38BDF8" style={{ flexShrink: 0 }}>
    <path d="M12 6.002C12.002 3.1 14.526 2 17.5 2 21.096 2 22 5.097 22 7.5c0 4.1-3.696 6.5-6.5 6.5h-1c-.552 0-1 .448-1 1s.448 1 1 1c3.1 0 6 2.052 6 5.5 0 3.596-2.904 4.5-6 4.5-3.596 0-6.5-2.052-6.5-5.5 0-4.1 3.696-6.5 6.5-6.5h1c.552 0 1-.448 1-1s-.448-1-1-1c-3.1 0-6-2.052-6-5.5zM2.5 12C2.502 9.1 5.026 8 8 8c3.596 0 4.5 3.097 4.5 5.5 0 4.1-3.696 6.5-6.5 6.5h-1c-.552 0-1 .448-1 1s.448 1 1 1c3.1 0 6 2.052 6 5.5 0 3.596-2.904 4.5-6 4.5-3.596 0-6.5-2.052-6.5-5.5 0-4.1 3.696-6.5 6.5-6.5h1c.552 0 1-.448 1-1s-.448-1-1-1c-3.1 0-6-2.052-6-5.5z" />
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#3776AB" style={{ flexShrink: 0 }}>
    <path d="M11.9 2C6.9 2 7 4.1 7 4.1v2.1h5v.8H7.2S5 6.9 5 11.9c0 5 1.9 4.8 1.9 4.8h1.1V15c0-1.7 1.4-3.1 3.1-3.1h4.8s1.9.1 1.9-4.9c0-5-1.9-5-1.9-5H11.9zm3.2 2.1c.4 0 .8.3.8.8s-.3.8-.8.8-.8-.3-.8-.8.4-.8.8-.8zM12.1 22c5 0 4.9-2.1 4.9-2.1v-2.1h-5v-.8h4.8s2.2.1 2.2-4.9c0-5-1.9-4.8-1.9-4.8H21V9c0 1.7-1.4 3.1-3.1 3.1H13s-1.9-.1-1.9 4.9c0 5 1.9 5 1.9 5h3.1zM9 17.9c.4 0 .8.3.8.8s-.3.8-.8.8-.8-.3-.8-.8.4-.8.8-.8z" />
  </svg>
);

const DjangoLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#092E20" style={{ flexShrink: 0 }}>
    <rect width="24" height="24" rx="4" />
    <path d="M16 6v7.3c0 2-1 3.3-3.1 3.3-.9 0-1.7-.2-2.3-.6v-2.2c.5.3.9.4 1.3.4.8 0 1.2-.5 1.2-1.4V11.2h-.1c-.4.7-1.1 1-1.8 1-1.8 0-3-1.4-3-3.6s1.3-3.6 3-3.6c.8 0 1.4.3 1.8 1h.1V6h2.9zm-2.8 4.2c0-1.1-.5-1.8-1.3-1.8s-1.3.7-1.3 1.8.5 1.8 1.3 1.8 1.3-.7 1.3-1.8z" fill="#FFFFFF" />
  </svg>
);

const MySQLLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#00758F" style={{ flexShrink: 0 }}>
    <path d="M12.1 2C6.9 2 4.1 6.5 4.1 11.2c0 2.2.7 4.1 1.8 5.6L4.5 22h3.2l.9-2.8c1.1.5 2.3.8 3.5.8 5.2 0 8.1-4.5 8.1-9.2C20.2 6.1 17.4 2 12.1 2zm0 15.6c-.9 0-1.8-.2-2.6-.5l.8-2.6c.6.2 1.2.3 1.8.3 2.9 0 4.6-2.5 4.6-5.6 0-3.1-1.7-5.6-4.6-5.6S7.5 6.1 7.5 9.2c0 .9.2 1.8.5 2.6l-2.6.8c-.5-.9-.8-2-.8-3.4C4.6 5.1 7.4 3.1 12.1 3.1c4.6 0 7.5 2 7.5 6.1 0 4.1-2.9 6.1-7.5 6.1z" />
  </svg>
);

const PostgreSQLLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#336791" style={{ flexShrink: 0 }}>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.1 13c-.9 1.1-2.2 1.8-3.7 1.9-.3 0-.6.1-.8.2-.3.2-.5.5-.5.9 0 .4.3.8.7.8.2 0 .4-.1.6-.2 1.2-.1 2.3-.7 3-1.5.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0zM12 4c-3.9 0-7 3.1-7 7 0 2.1.9 4 2.4 5.3l-.2-.5c-.2-.5-.1-1.1.2-1.5.3-.4.8-.6 1.4-.6.3 0 .6.1.8.2.2.2.3.5.3.8v1.3c0 .3.1.6.3.8.2.2.5.3.8.3s.6-.1.8-.3c.2-.2.3-.5.3-.8V13.8c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1v2.3c0 .3.1.6.3.8.2.2.5.3.8.3s.6-.1.8-.3c.2-.2.3-.5.3-.8v-2.3c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1v2.3c0 .6-.5 1.1-1.1 1.1-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.3-.8v-.5c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1 1.1v.5c0 .3-.1.6-.3.8-.2.2-.5.3-.8.3s-.6-.1-.8-.3c-.2-.2-.3-.5-.3-.8v-.5c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1 1.1v.5c0 .3-.1.6-.3.8-.2.2-.5.3-.8.3z" />
  </svg>
);

const MongoDBLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#47A248" style={{ flexShrink: 0 }}>
    <path d="M12 .7C6 5.5 5 11.5 5 13.5c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5c0-2-1-8-7-12.8zm0 16.8c-2.2 0-4-1.8-4-4 0-.8.3-2.6 1.5-4.5.8-1.2 1.8-2.3 2.5-3v11.5zm0-11.5c.7.7 1.7 1.8 2.5 3 1.2 1.9 1.5 3.7 1.5 4.5 0 2.2-1.8 4-4 4V6z" />
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#F05032" style={{ flexShrink: 0 }}>
    <path d="M23.3 10.9L13.1.7C12.2-.2 10.8-.2 9.9.7L7.9 2.7l3.1 3.1c.8-.3 1.8-.1 2.5.6.7.7.8 1.7.5 2.5l3.1 3.1c.8-.3 1.8-.1 2.5.6.9.9.9 2.3 0 3.2s-2.3.9-3.2 0c-.7-.7-.8-1.7-.5-2.5L12.8 10c.3-.8.1-1.8-.6-2.5-.7-.7-1.7-.8-2.5-.5L6.6 3.9 1.1 9.4c-.9.9-.9 2.3 0 3.2l10.2 10.2c.9.9 2.3.9 3.2 0l10.2-10.2c.9-.8.9-2.2-.2-3.1zM18 16.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFFFFF" />
  </svg>
);

const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const AzureDevOpsLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#0078D7" style={{ flexShrink: 0 }}>
    <path d="M0 8.7L2.4 6l9.3 5.4v5.4zm11.7 6l8-10.3 4.3 4v6.6l-12.3 5.7zM0 8.7l11.7-6 12 4.7-12 11.3z" />
  </svg>
);

const LinuxLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#FCC624" style={{ flexShrink: 0 }}>
    <rect width="24" height="24" rx="4" fill="#000000" />
    <path d="M12 4c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4s4-1.8 4-4V8c0-2.2-1.8-4-4-4zm-2 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FCC624" />
  </svg>
);

const VSCodeLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#007ACC" style={{ flexShrink: 0 }}>
    <path d="M23.9 6.5l-4.1-3.2c-.3-.2-.7-.1-.9.2L12 11.2l-6.9-7.7c-.2-.3-.6-.4-.9-.2L.1 6.5c-.2.2-.2.5 0 .7L4 12 .1 16.8c-.2.2-.2.5 0 .7l4.1 3.2c.3.2.7.1.9-.2l6.9-7.7 6.9 7.7c.2.3.6.4.9.2l4.1-3.2c.2-.2.2-.5 0-.7L20 12l3.9-4.8c.2-.2.2-.5 0-.7zM12 12.8L6.4 17.5 12 12.8zm0-1.6L6.4 6.5 12 11.2z" />
  </svg>
);

const PostmanLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#FF6C37" style={{ flexShrink: 0 }}>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V14h1v2.5zm0-3.5h-1V9c0-1.1.9-2 2-2h1c.6 0 1 .4 1 1s-.4 1-1 1h-1c-.6 0-1 .4-1 1v3.5z" />
  </svg>
);

// Modular individual skill component with tooltip & spring transitions
function SkillPill({ name, logo, tooltip, color }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -3, scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          borderRadius: '100px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#F8FAFC',
          fontSize: '0.86rem',
          fontWeight: 500,
          cursor: 'default',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: isHovered ? `0 0 12px ${color || 'rgba(99, 102, 241, 0.25)'}` : 'none',
          borderColor: isHovered ? (color || '#4F46E5') : 'rgba(255, 255, 255, 0.1)',
        }}
      >
        {logo}
        <span>{name}</span>
      </motion.div>

      <AnimatePresence>
        {isHovered && tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              bottom: '130%',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '6px 12px',
              borderRadius: '6px',
              backgroundColor: '#0F172A',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
              color: '#F8FAFC',
              fontSize: '0.75rem',
              zIndex: 100,
              pointerEvents: 'none',
              textAlign: 'center',
              width: 'max-content',
              maxWidth: '220px',
              lineHeight: '1.3',
            }}
          >
            {tooltip}
            {/* Tooltip Arrow */}
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '0',
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: '5px solid #0F172A',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout size={20} color="#06B6D4" />,
      skills: [
        { name: 'HTML5', logo: <HTML5Logo />, tooltip: 'Structuring pages with semantic elements', color: '#E34F26' },
        { name: 'CSS3', logo: <CSS3Logo />, tooltip: 'Styling responsive and modern layouts', color: '#1572B6' },
        { name: 'JavaScript (ES6+)', logo: <JavaScriptLogo />, tooltip: 'Programming dynamic client-side logic', color: '#F7DF1E' },
        { name: 'React.js', logo: <ReactLogo />, tooltip: 'Building modern interactive user interfaces', color: '#61DAFB' },
        { name: 'Bootstrap', logo: <BootstrapLogo />, tooltip: 'Responsive grid layouts and components', color: '#7952B3' },
        { name: 'Tailwind CSS', logo: <TailwindLogo />, tooltip: 'Utility-first CSS styling framework', color: '#38BDF8' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={20} color="#4F46E5" />,
      skills: [
        { name: 'Python', logo: <PythonLogo />, tooltip: 'Clean and readable scripting language', color: '#3776AB' },
        { name: 'Django', logo: <DjangoLogo />, tooltip: 'Powerful Python web framework', color: '#092E20' },
        { name: 'REST APIs', logo: <Link size={16} color="#06B6D4" />, tooltip: 'Designing HTTP endpoints for data exchange', color: '#06B6D4' },
        { name: 'Authentication & Authorization', logo: <ShieldCheck size={16} color="#7C3AED" />, tooltip: 'Securing routes with roles and session validation', color: '#7C3AED' },
        { name: 'CRUD Operations', logo: <Cpu size={16} color="#4F46E5" />, tooltip: 'Implementing Create, Read, Update, Delete workflows', color: '#4F46E5' },
        { name: 'API Integration', logo: <Layers size={16} color="#10B981" />, tooltip: 'Connecting frontend views with backend services', color: '#10B981' }
      ]
    },
    {
      title: 'Database Technologies',
      icon: <Database size={20} color="#7C3AED" />,
      skills: [
        { name: 'MySQL', logo: <MySQLLogo />, tooltip: 'Relational database management', color: '#00758F' },
        { name: 'PostgreSQL', logo: <PostgreSQLLogo />, tooltip: 'Advanced open-source relational database', color: '#336791' },
        { name: 'MongoDB', logo: <MongoDBLogo />, tooltip: 'NoSQL document store for flexible data shapes', color: '#47A248' },
        { name: 'SQL Queries', logo: <Terminal size={16} color="#A855F7" />, tooltip: 'Optimizing queries, indexing, and data retrieval', color: '#A855F7' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <Settings size={20} color="#06B6D4" />,
      skills: [
        { name: 'Git', logo: <GitLogo />, tooltip: 'Distributed version control system', color: '#F05032' },
        { name: 'GitHub', logo: <GitHubLogo />, tooltip: 'Version control and collaboration', color: '#FFFFFF' },
        { name: 'Azure DevOps', logo: <AzureDevOpsLogo />, tooltip: 'CI/CD pipelines and board orchestration', color: '#0078D7' },
        { name: 'Linux', logo: <LinuxLogo />, tooltip: 'Open-source Unix-like operating system', color: '#FCC624' },
        { name: 'VS Code', logo: <VSCodeLogo />, tooltip: 'Modern, extensible code editor', color: '#007ACC' },
        { name: 'Postman', logo: <PostmanLogo />, tooltip: 'API development and testing platform', color: '#FF6C37' }
      ]
    }
  ];

  return (
    <section id="skills" style={{ position: 'relative', backgroundColor: '#020617', padding: '100px 24px', transition: 'background-color 0.5s' }}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ color: '#F8FAFC', fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px', textAlign: 'center' }}>Tech Stack & Expertise</h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center', lineHeight: '1.5' }}>
            Technologies and tools I use to build scalable, modern web applications.
          </p>
        </motion.div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          marginTop: '48px',
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
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)', // Card Background
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '16px',
            }}
          >
            {/* Category Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F8FAFC' }}>{category.title}</h3>
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
                <SkillPill
                  key={skillIdx}
                  name={skill.name}
                  logo={skill.logo}
                  tooltip={skill.tooltip}
                  color={skill.color}
                />
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
