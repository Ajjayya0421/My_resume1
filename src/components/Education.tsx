import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Academic Background</span>
            <span aria-hidden="true">·</span>
            <span>Distinction & Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Education & Academic Credentials
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Consistently maintained top-percentile academic standing from residential schooling through engineering university education.
          </p>
        </div>

        {/* 3-Column Grid for Education History */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.education.map((edu, idx) => (
            <div 
              key={edu.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div className="space-y-4">
                
                {/* Score badge / headline */}
                <div className="flex items-baseline justify-between border-b border-slate-800 pb-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 tabular-nums">
                    {edu.score}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {edu.scoreType}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="text-xs font-medium text-slate-400 flex items-center justify-between">
                    <span>{edu.timeline}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {edu.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                    {edu.degree}
                  </h3>

                  <p className="text-xs font-medium text-slate-300">
                    {edu.institution}
                  </p>
                  {edu.affiliation && (
                    <div className="text-xs text-slate-400">
                      Affiliation: {edu.affiliation}
                    </div>
                  )}
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>Rank / Milestone</span>
                <span className="font-semibold text-slate-200">
                  {idx === 0 ? "Top 5% Department Rank" : "Distinction Rank"}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
