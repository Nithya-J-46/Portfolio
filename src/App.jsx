import React, { useState } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import ChatAssistant from './components/ChatAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="app-container">
      {/* Background & Mouse FX */}
      <ParticleBackground />
      <CursorGlow />

      {/* Floating Header */}
      <Navbar />

      {/* Main content grid */}
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <GithubStats />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      {/* Recruiter Conversational Assistant */}
      <ChatAssistant />

      {/* Footer copyright and visitor statistics */}
      <Footer />
    </div>
  );
}
