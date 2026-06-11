import React, { useState, useEffect, useRef } from 'react';
import { Bot, MessageSquare, Send, X, ChevronRight, Minimize2 } from 'lucide-react';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm Nithya's portfolio assistant. Ask me anything about her skills, internships, projects, or recruitment status!"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const quickQuestions = [
    'What is her tech stack?',
    'Is she looking for internships?',
    'Tell me about the Resume Screener.',
    'What did she do at He5 Solutions?'
  ];

  const responses = {
    stack: "Nithya's core tech stack covers: \n\n• Frontend: React, JavaScript, CSS3, HTML5\n• Backend: Python (Django, Flask), Java (Spring Boot)\n• Database: MySQL, SQLite\n• Tools: Git, GitHub, REST APIs, WordPress",
    internship: "Yes! Nithya is actively available for Internships and Full-Time Opportunities starting from July 2026. You can reach out directly via the Contact Form or download her CV!",
    resume: "The 'Resume Screener' is an AI-powered ATS (Applicant Tracking System) Analyzer. It compares resumes to job descriptions using Python NLP (Natural Language Processing) to check compatibility, display matching percentages, and suggest keyword improvements. Built with React, FastAPI, and MySQL.",
    he5: "At He5 Solutions (Backend Developer, Jan - May 2026), Nithya designed and optimized database APIs using Django & Flask, wrote structured MySQL schemas, and improved endpoint query response speeds.",
    vdart: "At VDart (Full Stack Developer, Jun - Jul 2025), Nithya built interactive UI dashboards in React, designed MySQL trigger systems, and participated in active team sprints.",
    default: "Nithya is a Final Year Computer Science Engineer specializing in Python, React, and database systems. She has internship experience at VDart and He5 Solutions. Ask about 'skills', 'experience', 'projects', or 'availability' for more details!"
  };

  useEffect(() => {
    // Scroll chat to bottom when message log updates
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const getAIResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes('stack') || q.includes('skill') || q.includes('code') || q.includes('language') || q.includes('frontend') || q.includes('backend')) {
      return responses.stack;
    } else if (q.includes('intern') || q.includes('job') || q.includes('hire') || q.includes('available') || q.includes('recruit') || q.includes('opportunity')) {
      return responses.internship;
    } else if (q.includes('resume') || q.includes('screener') || q.includes('ats') || q.includes('ai')) {
      return responses.resume;
    } else if (q.includes('he5') || q.includes('solutions')) {
      return responses.he5;
    } else if (q.includes('vdart') || q.includes('v-dart')) {
      return responses.vdart;
    } else {
      return responses.default;
    }
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Append user message
    setMessages((prev) => [...prev, { sender: 'user', text }]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);
      const botText = getAIResponse(text);
      setMessages((prev) => [...prev, { sender: 'bot', text: botText }]);
    }, 1000);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999 }}>
      {/* Expanded Chat Dialog */}
      {isOpen ? (
        <div
          className="glass-panel"
          style={{
            width: '350px',
            height: '480px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(99, 102, 241, 0.05)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '14px 18px',
              backgroundColor: 'rgba(5, 5, 5, 0.4)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ position: 'relative' }}>
                <Bot size={20} color="var(--accent)" />
                <span
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    right: -2,
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                    border: '1.5px solid #000',
                  }}
                />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>Nithya's AI Assistant</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Online & Ready</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                padding: '4px',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <Minimize2 size={16} />
            </button>
          </div>

          {/* Messages Grid area */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              fontSize: '0.85rem',
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.sender === 'user' ? 'var(--accent)' : 'rgba(255, 255, 255, 0.03)',
                  color: msg.sender === 'user' ? '#FFFFFF' : '#E5E5EA',
                  padding: '10px 14px',
                  borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                  maxWidth: '85%',
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)',
                  whiteSpace: 'pre-line',
                  lineHeight: '1.4',
                }}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  padding: '10px 14px',
                  borderRadius: '14px 14px 14px 2px',
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'center',
                }}
              >
                <span className="dot" style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', animation: 'bounce 1.4s infinite' }}></span>
                <span className="dot" style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', animation: 'bounce 1.4s infinite 0.2s' }}></span>
                <span className="dot" style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', animation: 'bounce 1.4s infinite 0.4s' }}></span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick options and Input Area */}
          <div
            style={{
              padding: '12px 16px',
              backgroundColor: 'rgba(5, 5, 5, 0.4)',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Quick Actions Carousel */}
            {messages.length === 1 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  marginBottom: '12px',
                }}
              >
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      padding: '6px 12px',
                      fontSize: '0.75rem',
                      color: 'var(--accent-light)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.background = 'rgba(99, 102, 241, 0.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    }}
                  >
                    <span>{q}</span>
                    <ChevronRight size={12} />
                  </button>
                ))}
              </div>
            )}

            {/* Form Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputText);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#020202',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '6px 12px',
                gap: '8px',
              }}
            >
              <input
                type="text"
                placeholder="Ask about skills, projects..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: '#FFFFFF',
                  fontSize: '0.82rem',
                  flex: 1,
                  fontFamily: 'var(--font-sans)',
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: inputText.trim() ? 'var(--accent)' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '2px',
                  transition: 'color 0.2s',
                }}
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* Floating Chat Bubble trigger */
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#6366F1',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            boxShadow: '0 8px 30px rgba(99, 102, 241, 0.4), 0 0 10px rgba(99, 102, 241, 0.2)',
            transition: 'transform 0.2s, background-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Bounce animations for typing bubble */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}
