import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award,
  Sparkles
} from 'lucide-react';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const [copied, setCopied] = React.useState(false);

  const handlePrint = () => {
    window.print();
  };

  const copyText = () => {
    const text = `
${portfolioData.personal.name}
${portfolioData.personal.role}
Email: ${portfolioData.personal.email} | Phone: ${portfolioData.personal.phone} | Location: ${portfolioData.personal.location}
LinkedIn: ${portfolioData.personal.linkedin} | GitHub: ${portfolioData.personal.github}

ACADEMIC QUALIFICATIONS:
- B.E. Computer Science and Engineering: 8.80 CGPA (Alva's Institute of Engineering and Technology, VTU)
- PUC 12th (PCMB): 96.0% Distinction (Raghavendra PU College, Davangere)
- SSLC 10th: 93.94% Distinction (Moraraji Desai Residential School)

KEY TECHNICAL SKILLS:
- Languages: C, Java (Core & Advanced, JDBC), Python, SQL
- Web & Frontend: HTML5, CSS3, Modern Responsive UI, Tailwind CSS
- Databases: MySQL (Complex Queries, Joins, Triggers), MongoDB
- Core Concepts: Object-Oriented Programming (OOP), Data Structures & Algorithms, MVC Architecture

FLAGSHIP PROJECTS:
1. College Management System
Technologies: Advanced Java, MySQL, JDBC, Java Swing
- Comprehensive desktop management software handling student enrollment, faculty records, grade calculation, and fee invoicing.
- Engineered 3-tier MVC architecture with transactional integrity.

2. Academic Performance & Attendance Analyzer
Technologies: Python, SQLite, Data Analysis
- System for tracking student attendance trends and predicting academic risks.

DISTINCTIONS & SPORTS:
- State-Level Badminton Player representing district at prestigious tournaments.
- Multiple Hackathon & Tech Workshop Certifications.
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-20 border-b border-slate-900 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
              <span aria-hidden="true">·</span>
              <span>ATS-Formatted Resume</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
              Professional Resume & Credentials
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Standardized format designed for engineering recruiters, applicant tracking systems (ATS), and printable offline reviews.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={copyText}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Plain Text'}</span>
            </button>
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Full Screen Viewer</span>
            </button>
          </div>
        </div>

        {/* Embedded Paper Sheet (Always visible on page, zero click required!) */}
        <div className="bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-10 md:p-12 max-w-4xl mx-auto space-y-8 font-sans">
          
          {/* Header Block */}
          <div className="border-b-2 border-slate-900 pb-6 text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
              {portfolioData.personal.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wide">
              Computer Science & Engineering Student | Aspiring Software Engineer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 pt-2 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                {portfolioData.personal.location}
              </span>
              <span>·</span>
              <a href={`mailto:${portfolioData.personal.email}`} className="text-blue-700 hover:underline">
                {portfolioData.personal.email}
              </a>
              <span>·</span>
              <span className="tabular-nums font-semibold">{portfolioData.personal.phone}</span>
              <span>·</span>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                LinkedIn
              </a>
              <span>·</span>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {portfolioData.personal.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              Education
            </h4>
            <div className="space-y-3">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm gap-1">
                  <div>
                    <span className="font-bold text-slate-950">{edu.degree}</span>
                    <div className="text-slate-600 text-xs">{edu.institution}</div>
                  </div>
                  <div className="text-right sm:text-right shrink-0">
                    <span className="font-bold text-slate-950 bg-amber-100 text-amber-900 px-2 py-0.5 rounded text-xs">
                      {edu.score} {edu.scoreType}
                    </span>
                    <div className="text-slate-500 text-xs">{edu.timeline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              Technical Competencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
              <div>
                <strong className="text-slate-950">Languages:</strong> C, Java (Core & Advanced), Python, SQL
              </div>
              <div>
                <strong className="text-slate-950">Web Technologies:</strong> HTML5, CSS3, Modern UI
              </div>
              <div>
                <strong className="text-slate-950">Databases:</strong> MySQL, MongoDB, JDBC Connectivity
              </div>
              <div>
                <strong className="text-slate-950">Core Concepts:</strong> OOP, Data Structures, MVC Architecture
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              Technical Projects
            </h4>
            
            <div className="space-y-3">
              <div>
                <div className="flex items-baseline justify-between text-xs sm:text-sm font-bold text-slate-950">
                  <span>College Management System</span>
                  <span className="text-slate-500 font-normal text-xs">Advanced Java, MySQL, JDBC</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 mt-1 leading-relaxed">
                  <li>Engineered desktop database system for automating student records, fee status, and faculty administration.</li>
                  <li>Implemented relational database schemas in MySQL with parameterized PreparedStatement queries preventing SQL injection.</li>
                  <li>Applied MVC architecture separating data models, UI views, and transactional business logic.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between text-xs sm:text-sm font-bold text-slate-950">
                  <span>Academic Performance Analyzer</span>
                  <span className="text-slate-500 font-normal text-xs">Python, Data Analytics, SQLite</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 mt-1 leading-relaxed">
                  <li>Built analytical tools evaluating student semester attendance trends and predictive grading insights.</li>
                  <li>Generated visual analytics summaries for department heads and faculty mentors.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Distinctions & Athletics */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              Distinctions & Extra-Curriculars
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 space-y-1">
              <p>
                <strong className="text-slate-950">State-Level Badminton Player:</strong> Represented at state-level championship tournaments; demonstrated discipline, tactical problem-solving under pressure, and teamwork.
              </p>
              <p>
                <strong className="text-slate-950">Academic Honors:</strong> 96% Distinction in PUC (PCMB), 93.94% Distinction in SSLC, and top-tier 8.80 CGPA in Computer Science Engineering.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
