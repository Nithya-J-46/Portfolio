import React, { useState, useEffect } from 'react';
import { Mail, ArrowUp, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [visitorCount, setVisitorCount] = useState(1337); // Base count
  const emailAddress = 'nithyasubhashini46@gmail.com'; // Professional placeholder

  useEffect(() => {
    // Visitor counter simulation using localStorage
    const savedCount = localStorage.getItem('nithya_portfolio_visitors');
    if (savedCount) {
      const newCount = parseInt(savedCount) + 1;
      localStorage.setItem('nithya_portfolio_visitors', newCount);
      setVisitorCount(newCount);
    } else {
      const initialCount = Math.floor(Math.random() * 200) + 1000;
      localStorage.setItem('nithya_portfolio_visitors', initialCount);
      setVisitorCount(initialCount);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        backgroundColor: '#020202',
        padding: '60px 24px 30px',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          {/* Logo and Tagline */}
          <div>
            <div
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '8px',
                letterSpacing: '-0.03em',
              }}
            >
              Nithya<span style={{ color: 'var(--accent)', marginLeft: '6px', fontWeight: 600 }}>Subhashini J</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', maxWidth: '300px' }}>
              Building premium, scalable web applications that solve real-world problems.
            </p>
          </div>

          {/* Socials & Email copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://github.com/Nithya-J-46"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)',
                }}
                className="social-btn"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nithyasubhashini/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)',
                }}
                className="social-btn"
              >
                <Linkedin size={18} />
              </a>
              <button
                onClick={handleCopyEmail}
                style={{
                  height: '40px',
                  padding: '0 16px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  transition: 'all var(--transition-fast)',
                }}
                className="social-btn"
              >
                <Mail size={16} />
                <span>{emailAddress}</span>
                {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.03)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Nithya Subhashini J. All rights reserved.
          </div>
          
          {/* Visitor Counter */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              color: 'var(--text-secondary)',
              fontSize: '0.75rem',
            }}
          >
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#6366F1', animation: 'blink 2s infinite' }}></span>
            <span>Visitor Count:</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-light)', fontWeight: 600 }}>{visitorCount}</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              color: 'var(--accent-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
              e.currentTarget.style.color = 'var(--accent-light)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .social-btn:hover {
          color: #FFFFFF !important;
          border-color: var(--border-hover) !important;
          background-color: rgba(99, 102, 241, 0.05) !important;
          transform: translateY(-2px);
        }
        @keyframes blink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </footer>
  );
}
