import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, GitBranch, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenDeployGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-sm font-bold text-white tracking-tight">
              {portfolioData.personal.name}
            </div>
            <p className="text-slate-400">
              Computer Science & Engineering Student · Software Developer · Davangere, Karnataka
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenResume}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <button
              onClick={onOpenDeployGuide}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>GitHub Deploy</span>
            </button>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <div>
            © {new Date().getFullYear()} {portfolioData.personal.name}. Built with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span>VTU Student · 8.80 CGPA</span>
            <span aria-hidden="true">·</span>
            <span>State-Level Badminton Player</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
