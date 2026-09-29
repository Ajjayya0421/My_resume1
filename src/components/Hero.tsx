import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ArrowRight,
  ExternalLink,
  Code2,
  Camera,
  RotateCcw
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenDeployGuide }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [customAvatar, setCustomAvatar] = useState<string | null>(() => {
    try {
      return localStorage.getItem('ajjayya_profile_photo');
    } catch {
      return null;
    }
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomAvatar(result);
          try {
            localStorage.setItem('ajjayya_profile_photo', result);
          } catch (err) {
            console.warn('Could not save to localStorage', err);
          }
          setImgError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetAvatar = () => {
    setCustomAvatar(null);
    try {
      localStorage.removeItem('ajjayya_profile_photo');
    } catch {}
    setImgError(false);
  };

  const activeAvatar = customAvatar || portfolioData.personal.avatar;

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="about" className="relative pt-12 pb-20 overflow-hidden border-b border-slate-900 bg-slate-950">
      {/* Subtle ambient lighting mesh */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[500px] bg-amber-500/5 blur-[140px] rounded-full" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-40 -left-20 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Info & Call to Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-amber-400 uppercase">
              <span>Computer Science & Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Alva's IET (VTU)</span>
              <span aria-hidden="true">·</span>
              <span>Davangere, Karnataka</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-none">
                {portfolioData.personal.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300">
                Software Developer specializing in Java, Python & Database Systems
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              {portfolioData.personal.summary}
            </p>

            {/* Quantitative Proof Section: Clean unboxed stats with tabular numerals */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {portfolioData.personal.cgpa}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  B.E. CSE CGPA · 3rd Year
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  96.0%
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  PUC Distinction
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  93.94%
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  SSLC Academic Record
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-400">
                  State-Level
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Badminton Athlete
                </div>
              </div>
            </div>

            {/* Contact details with instant copy triggers */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{portfolioData.personal.location}</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              
              <button 
                onClick={() => copyToClipboard(portfolioData.personal.email, 'email')}
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span className="underline decoration-slate-700 underline-offset-2">{portfolioData.personal.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 hover:text-slate-300" />
                )}
              </button>
              <span aria-hidden="true" className="text-slate-700">·</span>

              <button 
                onClick={() => copyToClipboard(portfolioData.personal.phone, 'phone')}
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span className="tabular-nums">{portfolioData.personal.phone}</span>
                {copiedPhone ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 hover:text-slate-300" />
                )}
              </button>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all whitespace-nowrap"
              >
                <span>View Flagship Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white rounded-lg transition-all whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={onOpenDeployGuide}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-950 border border-dashed border-slate-800 hover:border-slate-600 rounded-lg transition-all whitespace-nowrap"
              >
                <Github className="w-4 h-4" />
                <span>Deploy to GitHub</span>
              </button>
            </div>

            {/* Social Direct Links */}
            <div className="flex items-center gap-6 pt-2 text-xs text-slate-400">
              <a 
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>{portfolioData.personal.linkedinDisplay}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-200" />
                <span>{portfolioData.personal.githubDisplay}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Technical Profile Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 backdrop-blur-sm shadow-xl">
              
              {/* Image Frame with fallback container */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-800 mb-4 border border-slate-700/50 group">
                {!imgError ? (
                  <img
                    src={activeAvatar}
                    alt="Ajjayya N H - Computer Science & Engineering Student"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 to-slate-800">
                    <Code2 className="w-16 h-16 text-amber-400 mb-3" />
                    <span className="text-lg font-bold text-white">AJJAYYA N H</span>
                    <span className="text-xs text-slate-400 mt-1">Computer Science & Engineering</span>
                  </div>
                )}

                {/* Subtle gradient contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Upload or change photo control */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                  <label 
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-200 bg-slate-950/80 backdrop-blur-md rounded-lg border border-slate-700/80 hover:border-amber-400 hover:text-white cursor-pointer shadow-md transition-all"
                    title="Upload or change with your photo file"
                  >
                    <Camera className="w-3.5 h-3.5 text-amber-400" />
                    <span>Upload Photo</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      className="hidden" 
                    />
                  </label>
                  {customAvatar && (
                    <button
                      onClick={handleResetAvatar}
                      className="p-1.5 text-slate-300 hover:text-white bg-slate-950/80 backdrop-blur-md rounded-lg border border-slate-700/80 hover:border-slate-500"
                      title="Reset to default image"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Overlay status tag */}
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                  <span className="truncate">Open for Software Engineering Internships</span>
                </div>
              </div>

              {/* Technical summary under image */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-200">Engineering Focus</span>
                  <span>Semester 6 (3rd Year)</span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed">
                  Building enterprise-grade applications with <strong className="text-white font-medium">Advanced Java</strong> and robust <strong className="text-white font-medium">MySQL database connectivity</strong>. Grounded in theoretical foundations with NPTEL Certification in <strong className="text-white font-medium">Theory of Computation</strong>.
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>VTU University</span>
                  <span className="font-semibold text-amber-400 tabular-nums">CGPA: 8.80 / 10.0</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
