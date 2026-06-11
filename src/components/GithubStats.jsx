import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, BookOpen, GitPullRequest, Award, Activity } from 'lucide-react';

export default function GithubStats() {
  const [hoveredDay, setHoveredDay] = useState(null);

  // Mock repositories matching Nithya's projects
  const repos = [
    { name: 'resume-screener', desc: 'AI-powered ATS Resume Analyzer using FastAPI, React & NLP parsing.', lang: 'Python', stars: 8, forks: 3 },
    { name: 'travel-bharat', desc: 'Tourism guide and platform managing monuments details built on Django.', lang: 'Python', stars: 5, forks: 2 },
    { name: 'medvault', desc: 'Secure medical records management & appointment scheduling application.', lang: 'Java', stars: 6, forks: 1 }
  ];

  // Helper to generate contributions grid
  const generateGridData = () => {
    const data = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // Let's generate a compact grid: 24 weeks x 7 days for responsive sizing
    const weekCount = 24;
    for (let w = 0; w < weekCount; w++) {
      const week = [];
      for (let d = 0; d < 7; d++) {
        // Random level: 0 (none), 1 (light indigo), 2 (medium indigo), 3 (dark indigo)
        const val = Math.random();
        const level = val > 0.85 ? 3 : val > 0.65 ? 2 : val > 0.45 ? 1 : 0;
        
        // Random simulated commit messages
        let commitMsg = 'No contributions';
        if (level > 0) {
          const commits = level === 1 ? '1 commit' : `${level + 1} commits`;
          const tasks = [
            'Fixed MySQL pool queries',
            'Implemented React router links',
            'Added FastAPI endpoints',
            'Designed database models in Django',
            'Updated CSS layout components',
            'Refactored Spring Boot controllers'
          ];
          const task = tasks[Math.floor(Math.random() * tasks.length)];
          commitMsg = `${commits} on June ${d + 1 + w}, 2026: ${task}`;
        }
        
        week.push({ level, commitMsg });
      }
      data.push(week);
    }
    return data;
  };

  const gridData = generateGridData();

  return (
    <section id="github-dashboard" style={{ position: 'relative' }}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>GitHub Activity Dashboard</h2>
          <p>Mock visualization of open-source repository contributions and package deliveries.</p>
        </motion.div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px',
        }}
        className="github-grid"
      >
        {/* Left Side: Stats and Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel"
          style={{ padding: '28px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={18} color="var(--accent)" />
              Commit Contribution History
            </h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>1,482 commits in past year</span>
          </div>

          {/* Grid visual container */}
          <div style={{ overflowX: 'auto', paddingBottom: '10px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', gap: '4px', minWidth: '420px', justifyContent: 'center' }}>
              {gridData.map((week, wIdx) => (
                <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      onMouseEnter={() => setHoveredDay(day.commitMsg)}
                      onMouseLeave={() => setHoveredDay(null)}
                      style={{
                        width: '11px',
                        height: '11px',
                        borderRadius: '2px',
                        backgroundColor: 
                          day.level === 3 ? 'var(--accent)' :
                          day.level === 2 ? 'rgba(99, 102, 241, 0.6)' :
                          day.level === 1 ? 'rgba(99, 102, 241, 0.25)' :
                          'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.02)',
                        cursor: 'pointer',
                        transition: 'transform 0.1s',
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Tooltip detail bar */}
          <div
            style={{
              minHeight: '28px',
              backgroundColor: 'rgba(255,255,255,0.01)',
              border: '1px dashed var(--border-color)',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '0.8rem',
              color: hoveredDay ? '#FFFFFF' : 'var(--text-muted)',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {hoveredDay ? hoveredDay : 'Hover over the grid squares to inspect commit activities'}
          </div>

          {/* Key metrics cards subgrid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              marginTop: '24px',
            }}
            className="stats-subgrid"
          >
            <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(255,255,255,0.01)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-light)' }}>12</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginTop: '4px' }}>Public Repos</div>
            </div>
            <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(255,255,255,0.01)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-light)' }}>48</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginTop: '4px' }}>PRs Merged</div>
            </div>
            <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(255,255,255,0.01)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-light)' }}>19</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginTop: '4px' }}>Stars Earned</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Top Repositories */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <BookOpen size={20} color="var(--accent)" />
            Top Repositories
          </h3>

          {repos.map((repo, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                backgroundColor: 'rgba(12, 12, 12, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h4
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--accent-light)',
                    }}
                  >
                    {repo.name}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      padding: '2px 8px',
                      borderRadius: '100px',
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    Public
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '14px' }}>
                  {repo.desc}
                </p>
              </div>

              {/* Repo metrics */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: repo.lang === 'Python' ? '#3572A5' : '#b07219',
                    }}
                  />
                  <span>{repo.lang}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={12} />
                  <span>{repo.stars}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <GitBranch size={12} />
                  <span>{repo.forks}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .github-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
