import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { CertificationsAndSports } from './components/CertificationsAndSports';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { GitHubDeployModal } from './components/GitHubDeployModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
        setIsDeployGuideOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-200">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        />

        {/* Featured Projects with Live Simulator */}
        <Projects />

        {/* Technical Skills & Production Patterns */}
        <Skills />

        {/* Education & Academic Excellence */}
        <Education />

        {/* Certifications & Sports Distinctions */}
        <CertificationsAndSports />

        {/* Contact & Inquiries */}
        <Contact />
      </main>

      {/* Clean Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      {/* Resume & ATS Printable Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* GitHub Deployment Step-by-Step Guide Modal */}
      <GitHubDeployModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
