import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = navItems.map(item => item.href.slice(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset to trigger change slightly early
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: scrolled ? '16px' : '0px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: scrolled ? 'calc(100% - 32px)' : '100%',
        maxWidth: scrolled ? '1100px' : '100%',
        height: '70px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        borderRadius: scrolled ? '16px' : '0',
        backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Brand Logo */}
      <a
        href="#home"
        onClick={(e) => handleLinkClick(e, '#home')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          textDecoration: 'none',
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: '-0.02em',
        }}
      >
        Nithya
        <span style={{ color: 'var(--accent)', fontWeight: 900 }}>.</span>
      </a>

      {/* Desktop Navigation Items */}
      <div
        style={{
          display: 'none',
          alignItems: 'center',
          gap: '28px',
        }}
        className="desktop-menu"
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleLinkClick(e, item.href)}
            style={{
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: activeSection === item.href.slice(1) ? '#FFFFFF' : 'var(--text-secondary)',
              transition: 'color var(--transition-fast)',
              position: 'relative',
              padding: '6px 0',
            }}
            onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
            onMouseLeave={(e) => {
              if (activeSection !== item.href.slice(1)) {
                e.target.style.color = 'var(--text-secondary)';
              }
            }}
          >
            {item.label}
            {activeSection === item.href.slice(1) && (
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'var(--accent)',
                  borderRadius: '10px',
                }}
              />
            )}
          </a>
        ))}
      </div>

      {/* Recruiter CTA Badge */}
      <div
        style={{
          display: 'none',
          alignItems: 'center',
          gap: '12px',
        }}
        className="desktop-menu"
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '8px 14px',
            backgroundColor: 'rgba(139, 92, 246, 0.08)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            borderRadius: '100px',
            color: 'var(--accent-light)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#8B5CF6',
              boxShadow: '0 0 8px #8B5CF6',
              animation: 'pulse-glow 1.5s infinite',
            }}
          />
          Available July 2026
        </div>
      </div>

      {/* Hamburger Menu Trigger for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'block',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#FFFFFF',
          padding: '4px',
          zIndex: 1001,
        }}
        className="mobile-menu-trigger"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(5, 5, 5, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              style={{
                textDecoration: 'none',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: activeSection === item.href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)',
                transition: 'color var(--transition-fast)',
              }}
            >
              {item.label}
            </a>
          ))}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8rem',
              fontWeight: 600,
              padding: '10px 18px',
              backgroundColor: 'rgba(139, 92, 246, 0.08)',
              border: '1px solid rgba(139, 92, 246, 0.25)',
              borderRadius: '100px',
              color: 'var(--accent-light)',
              marginTop: '16px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#8B5CF6',
                boxShadow: '0 0 8px #8B5CF6',
              }}
            />
            Available from July 2026
          </div>
        </div>
      )}

      {/* Inject styling rules for responsiveness */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-trigger {
            display: none !important;
          }
        }
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </nav>
  );
}
