import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const logSequence = [
    { text: '$ init nithya-portfolio-os', delay: 100 },
    { text: 'Loading core dependencies...', delay: 400 },
    { text: 'Modules detected: Frontend [React, JS, CSS], Backend [Django, Flask, Spring Boot], Database [MySQL]', delay: 800 },
    { text: 'Retrieving timeline files (VDart, He5 Solutions, Octanet)... OK', delay: 1200 },
    { text: 'Indexing projects: Resume Screener, Travel Bharat, MedVault... OK', delay: 1600 },
    { text: 'Connecting AI chat agent database...', delay: 2000 },
    { text: 'System diagnostics: 100% stable. Ready.', delay: 2300 },
  ];

  useEffect(() => {
    // Add logs dynamically based on their delays
    logSequence.forEach((log) => {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, log.text]);
      }, log.delay);
      return () => clearTimeout(timer);
    });

    // Progress bar animation
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 120);

    // Complete loading after the last log and 100% progress
    const completeTimer = setTimeout(() => {
      setIsFading(true);
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 500); // fade duration matches css
      return () => clearTimeout(finishTimer);
    }, 2800);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#020202',
        color: '#FFFFFF',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        fontFamily: "var(--font-mono, 'Fira Code', monospace)",
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          background: '#0d0d0d',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(99, 102, 241, 0.05)',
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            paddingBottom: '12px',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }}></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#8E8E93' }}>
            <Terminal size={14} color="#6366F1" />
            <span>nithya_shell.sh</span>
          </div>
        </div>

        {/* Terminal logs */}
        <div
          style={{
            minHeight: '180px',
            maxHeight: '180px',
            overflowY: 'auto',
            fontSize: '0.85rem',
            lineHeight: '1.6',
            color: '#D1D1D6',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            marginBottom: '20px',
          }}
        >
          {logs.map((log, index) => (
            <div key={index} style={{ color: log.startsWith('$') ? '#6366F1' : '#D1D1D6' }}>
              {log}
            </div>
          ))}
          {logs.length < logSequence.length && (
            <div style={{ display: 'inline-block', width: '8px', height: '15px', background: '#6366F1', animation: 'blink 1s step-end infinite' }} />
          )}
        </div>

        {/* Progress Bar Container */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#8E8E93', marginBottom: '6px' }}>
            <span>BOOTING PORTFOLIO OS</span>
            <span>{Math.min(progress, 100)}%</span>
          </div>
          <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${Math.min(progress, 100)}%`,
                height: '100%',
                background: 'linear-gradient(to right, #6366F1, #06B6D4)',
                borderRadius: 'inherit',
                transition: 'width 0.1s ease',
                boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
