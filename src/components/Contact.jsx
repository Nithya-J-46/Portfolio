import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) tempErrors.message = 'Message cannot be empty.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" style={{ position: 'relative' }}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>Have an internship project or full-time opportunity? Drop a message below!</p>
        </motion.div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'start',
        }}
        className="contact-grid"
      >
        {/* Left Side: Contact Information Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <div className="glass-card" style={{ borderLeft: '4px solid var(--accent)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
              Available for Opportunities
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '16px' }}>
              I am open to backend developer, full-stack engineer, and React developer internships or full-time roles starting in <strong>July 2026</strong>.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--accent-light)',
                padding: '4px 12px',
                backgroundColor: 'rgba(139, 92, 246, 0.08)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                borderRadius: '100px',
              }}
            >
              <CheckCircle size={12} color="#8B5CF6" />
              <span>Internship & Job Ready</span>
            </div>
          </div>

          {/* Social Links Panel */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '16px' }}>
              Connect Channels
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href="mailto:nithyasubhashini46@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <Mail size={18} color="var(--accent)" />
                <span>nithyasubhashini46@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <Linkedin size={18} color="var(--accent)" />
                <span>linkedin.com/in/nithya-subhashini</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <Github size={18} color="var(--accent)" />
                <span>github.com/nithya-subhashini</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="glass-panel"
            style={{
              padding: '32px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backgroundColor: 'rgba(12, 12, 12, 0.4)',
            }}
          >
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  {/* Name field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '8px',
                        backgroundColor: '#020202',
                        border: `1px solid ${errors.name ? '#EF4444' : 'var(--border-color)'}`,
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                    {errors.name && (
                      <span style={{ fontSize: '0.75rem', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                        <AlertCircle size={12} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '8px',
                        backgroundColor: '#020202',
                        border: `1px solid ${errors.email ? '#EF4444' : 'var(--border-color)'}`,
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                    {errors.email && (
                      <span style={{ fontSize: '0.75rem', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                        <AlertCircle size={12} />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Subject field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '8px',
                        backgroundColor: '#020202',
                        border: `1px solid ${errors.subject ? '#EF4444' : 'var(--border-color)'}`,
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                    {errors.subject && (
                      <span style={{ fontSize: '0.75rem', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                        <AlertCircle size={12} />
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '8px',
                        backgroundColor: '#020202',
                        border: `1px solid ${errors.message ? '#EF4444' : 'var(--border-color)'}`,
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                    {errors.message && (
                      <span style={{ fontSize: '0.75rem', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                        <AlertCircle size={12} />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      marginTop: '10px',
                    }}
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Success Feedback Pane */
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: 'center',
                    padding: '30px 10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(16, 185, 129, 0.08)',
                      border: '2px solid #10B981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10B981',
                      boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)',
                    }}
                  >
                    <CheckCircle size={32} />
                  </div>
                  
                  <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', fontWeight: 800 }}>Message Transmitted!</h3>
                  
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', maxWidth: '300px' }}>
                    Thank you! Your information has been compiled and dispatched. Nithya will review it and get back to you shortly.
                  </p>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="btn btn-secondary"
                    style={{ marginTop: '14px', fontSize: '0.85rem' }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
