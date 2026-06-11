import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Play, CheckCircle, FileText } from 'lucide-react';

export default function Hero() {
  const words = ['Full Stack Developer', 'Python Developer', 'React Developer', 'Problem Solver'];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Terminal actions state
  const [terminalCodeRun, setTerminalCodeRun] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);

  // Typewriter effect logic
  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullWord = words[wordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        
        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  const handleRunTerminal = () => {
    if (terminalCodeRun) return;
    setTerminalOutput(['Compiling script...', 'Initializing NithyaSubhashini.py...']);
    
    setTimeout(() => {
      setTerminalOutput(prev => [...prev, '✔ Loaded React + Django environments.']);
    }, 600);

    setTimeout(() => {
      setTerminalOutput(prev => [...prev, '✔ Connected to MySQL database.']);
    }, 1200);

    setTimeout(() => {
      setTerminalOutput(prev => [
        ...prev,
        '▶ Output:',
        '  "Hi, I\'m Nithya! I build scalable web applications that solve real-world problems."',
        '  "Available for Internship & Full-Time Roles from July 2026."'
      ]);
      setTerminalCodeRun(true);
    }, 1800);
  };

  const handleScrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = () => {
    // Dynamically generate a stylized resume layout and open printable view
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Resume - Nithya Subhashini J</title>
          <style>
            body { font-family: 'Inter', sans-serif; color: #111; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.5; }
            h1 { font-size: 28px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px; }
            .subtitle { color: #6366F1; font-weight: bold; margin-bottom: 25px; }
            h2 { border-bottom: 2px solid #6366F1; padding-bottom: 5px; margin-top: 30px; font-size: 18px; text-transform: uppercase; }
            .exp-item, .proj-item { margin-bottom: 15px; }
            .exp-header, .proj-header { display: flex; justify-content: space-between; font-weight: bold; }
            .tech-tags { font-style: italic; color: #555; font-size: 0.9em; }
            ul { margin-top: 5px; padding-left: 20px; }
            @media print {
              body { padding: 20px; }
              button { display: none; }
            }
          </style>
        </head>
        <body>
          <div style="text-align: center; margin-bottom: 20px;">
            <button onclick="window.print()" style="padding: 10px 20px; background: #6366F1; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Print / Save as PDF</button>
          </div>
          <h1>Nithya Subhashini J</h1>
          <div class="subtitle">Full Stack Developer | Python Developer | React Developer</div>
          <p>Email: nithyasubhashini46@gmail.com | LinkedIn: www.linkedin.com/in/nithyasubhashini/ | GitHub: github.com/Nithya-J-46</p>
          
          <h2>Education</h2>
          <div><strong>Final Year B.E. Computer Science Engineering Student</strong></div>
          
          <h2>Work Experience</h2>
          <div class="exp-item">
            <div class="exp-header">
              <span>Backend Developer - He5 Solutions</span>
              <span>Jan 2026 – Jun 2026</span>
            </div>
          </div>
          <div class="exp-item">
            <div class="exp-header">
              <span>Infosys Springboard Internship 6.0</span>
              <span>Feb 2026 – Apr 2026</span>
            </div>
          </div>
          <div class="exp-item">
            <div class="exp-header">
              <span>Full Stack Developer - VDart</span>
              <span>Jun 2025 – Jul 2025</span>
            </div>
          </div>
          <div class="exp-item">
            <div class="exp-header">
              <span>Web Development Intern - Octanet Services Pvt. Ltd.</span>
              <span>Sep 2024 – Oct 2024</span>
            </div>
          </div>

          <h2>Key Technical Skills</h2>
          <p><strong>Frontend:</strong> React, HTML, CSS, JavaScript</p>
          <p><strong>Backend:</strong> Python, Django, Flask, Spring Boot, REST APIs</p>
          <p><strong>Database:</strong> MySQL, SQLite</p>
          <p><strong>Tools:</strong> Git, GitHub, WordPress, Canva, Excel</p>

          <h2>Key Projects</h2>
          <div class="proj-item">
            <div class="proj-header"><span>Resume Screener</span><span>AI ATS Analyzer</span></div>
            <div class="tech-tags">Tech: React.js, FastAPI, Python NLP, MySQL, JavaScript</div>
          </div>
          <div class="proj-item">
            <div class="proj-header"><span>Travel Bharat</span><span>Tourism Information</span></div>
            <div class="tech-tags">Tech: React.js, Django, MySQL, HTML, CSS, JavaScript</div>
          </div>
          <div class="proj-item">
            <div class="proj-header"><span>MedVault</span><span>Appointment Booking & Medical Records System</span></div>
            <div class="tech-tags">Tech: Spring Boot, React, MySQL</div>
          </div>
          <div class="proj-item">
            <div class="proj-header"><span>Website Monitoring Platform</span><span>Real-time Monitor</span></div>
            <div class="tech-tags">Tech: Flask, Python, MySQL, HTML, CSS, JavaScript</div>
          </div>
          <div class="proj-item">
            <div class="proj-header"><span>Student Placement Portal</span><span>Corporate Recruitment Interface</span></div>
            <div class="tech-tags">Tech: Django, React, SQLite, HTML, CSS, JavaScript</div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      <div className="grid-bg" />

      {/* Glow Orbs */}
      <div className="glow-orb" style={{ top: '15%', left: '10%', width: '300px', height: '300px', background: 'var(--accent-glow)' }} />
      <div className="glow-orb" style={{ bottom: '15%', right: '10%', width: '400px', height: '400px', background: 'rgba(99,102,241,0.03)' }} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
          width: '100%',
        }}
        className="hero-grid"
      >
        {/* Hero Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          {/* Availability Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(99, 102, 241, 0.05)',
              border: '1px solid rgba(99, 102, 241, 0.15)',
              borderRadius: '100px',
              padding: '6px 14px',
              width: 'fit-content',
              fontSize: '0.8rem',
              color: 'var(--accent-light)',
              fontWeight: 500,
            }}
          >
            <CheckCircle size={14} color="#6366F1" />
            <span>Available for Internships & Full-Time Opportunities from July 2026</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.1,
              fontWeight: 900,
              letterSpacing: '-0.03em',
            }}
          >
            Hi, I'm <span className="text-gradient-hybrid">Nithya Subhashini J</span>
            <br />
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '1.2em',
                color: 'var(--text-primary)',
              }}
            >
              I am a&nbsp;
              <span style={{ color: 'var(--accent)' }}>
                {currentText}
                <span
                  style={{
                    display: 'inline-block',
                    marginLeft: '2px',
                    width: '3px',
                    backgroundColor: 'var(--accent)',
                    animation: 'blink 0.8s step-end infinite',
                  }}
                >
                  |
                </span>
              </span>
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              color: 'var(--text-secondary)',
              fontWeight: 400,
              maxWidth: '650px',
              lineHeight: 1.5,
            }}
          >
            "Building scalable web applications that solve real-world problems."
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginTop: '12px',
            }}
          >
            <button
              onClick={() => handleScrollToSection('projects')}
              className="btn btn-primary"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => handleScrollToSection('contact')}
              className="btn btn-outline-accent"
            >
              <span>Contact Me</span>
            </button>
          </div>
        </motion.div>

        {/* Coding Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="glass-panel"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
            }}
          >
            {/* Window bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 18px',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                backgroundColor: 'rgba(2, 2, 2, 0.4)',
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981' }}></span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Terminal size={14} color="var(--accent)" />
                <span>NithyaSubhashini.py</span>
              </div>
              <div>
                {!terminalCodeRun ? (
                  <button
                    onClick={handleRunTerminal}
                    style={{
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      borderRadius: '4px',
                      color: 'var(--accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '4px 8px',
                      fontSize: '0.7rem',
                      cursor: 'pointer',
                      fontWeight: 600,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                      e.currentTarget.style.color = 'var(--accent-light)';
                    }}
                  >
                    <Play size={10} fill="currentColor" />
                    <span>Run</span>
                  </button>
                ) : (
                  <span style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: 600 }}>RUNNING</span>
                )}
              </div>
            </div>

            {/* Code Body */}
            <div
              style={{
                padding: '24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                lineHeight: '1.7',
                color: '#A9B2C3',
                backgroundColor: '#020202',
                minHeight: '260px',
              }}
            >
              <div style={{ color: '#E5C07B' }}>
                <span style={{ color: '#C678DD' }}>class</span>{' '}
                <span style={{ color: '#61AFEF' }}>NithyaSubhashini</span>:
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <div>
                  <span style={{ color: '#E06C75' }}>role</span> ={' '}
                  <span style={{ color: '#98C379' }}>"Full Stack Developer"</span>
                </div>
                <div>
                  <span style={{ color: '#E06C75' }}>education</span> ={' '}
                  <span style={{ color: '#98C379' }}>"Computer Science Engineering"</span>
                </div>
                <div>
                  <span style={{ color: '#E06C75' }}>skills</span> = [
                  <span style={{ color: '#98C379' }}>"React"</span>,{' '}
                  <span style={{ color: '#98C379' }}>"Django"</span>,{' '}
                  <span style={{ color: '#98C379' }}>"MySQL"</span>]
                </div>
                <div>
                  <span style={{ color: '#E06C75' }}>availability</span> ={' '}
                  <span style={{ color: '#98C379' }}>"July 2026"</span>
                </div>
                <br />
                <div style={{ color: '#C678DD' }}>
                  def <span style={{ color: '#61AFEF' }}>get_objective</span>(self):
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#C678DD' }}>return</span>{' '}
                  <span style={{ color: '#98C379' }}>
                    "Building premium, scalable web applications that solve real-world problems."
                  </span>
                </div>
              </div>

              {/* Action Outputs */}
              {terminalOutput.length > 0 && (
                <div
                  style={{
                    marginTop: '20px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    color: '#8E8E93',
                    fontSize: '0.8rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  {terminalOutput.map((out, idx) => (
                    <div key={idx} style={{ color: out.startsWith('▶') ? '#FFFFFF' : out.startsWith('  ') ? '#6366F1' : '#8E8E93' }}>
                      {out}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
