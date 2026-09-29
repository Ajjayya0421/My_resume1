import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Trophy, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

export const CertificationsAndSports: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const badmintonAchievement = portfolioData.achievements[0];

  return (
    <section id="certifications" className="py-20 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Verified Credentials & Athletic Distinctions</span>
            <span aria-hidden="true">·</span>
            <span>Beyond the Classroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Certifications & Sports Accomplishments
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rigorous computational verification coupled with competitive state-level athletic discipline.
          </p>
        </div>

        {/* 2-Column Split: Left Certifications, Right State-Level Badminton Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Technical Certifications</span>
              </h3>

              <div className="space-y-4">
                {portfolioData.certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl space-y-3 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-lg font-bold text-white">
                        {cert.title}
                      </h4>
                      <span className="text-xs font-semibold text-amber-400">
                        {cert.issuer}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="pt-2 border-t border-slate-800/80">
                      <div className="text-xs font-medium text-slate-400 mb-1.5">
                        Competencies Evaluated:
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-300">
                        {cert.skillsAcquired.map((skill, idx) => (
                          <React.Fragment key={skill}>
                            <span className="text-slate-200">{skill}</span>
                            {idx < cert.skillsAcquired.length - 1 && (
                              <span aria-hidden="true" className="text-slate-600">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Core takeaway card */}
            <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl text-xs text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">Theoretical Rigor:</strong> The NPTEL Theory of Computation certificate affirms Ajjayya's mastery in the mathematical foundations of computer science, state machines, and algorithmic limits—a crucial differentiator when building robust backend systems.
            </div>
          </div>

          {/* Right Column: State-Level Badminton Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-5">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-400" />
                    <span className="text-lg font-bold text-white tracking-tight">
                      {badmintonAchievement.title}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-amber-400">
                    State Level
                  </span>
                </div>

                {/* Sports Photo Container */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group">
                  {!imgError ? (
                    <img 
                      src={badmintonAchievement.image} 
                      alt="State-level Badminton Tournament Excellence"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 to-slate-950">
                      <Trophy className="w-12 h-12 text-amber-400 mb-2" />
                      <span className="text-sm font-bold text-white">Competitive Badminton Player</span>
                      <span className="text-xs text-slate-400">Karnataka State Tournaments</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium">
                    High-Performance Competitive Athletics
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {badmintonAchievement.description}
                </p>
              </div>

              {/* Engineering Trait Transfer Box */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                  Engineering Carryover
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {badmintonAchievement.takeaway}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
