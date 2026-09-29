import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, ExternalLink, MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextResume = `
================================================================================
AJJAYYA N H
Computer Science & Engineering Student | Software Developer | Java & Python
Davangere, Karnataka | +91 9611367900 | ajjayyanh@gmail.com
LinkedIn: https://www.linkedin.com/in/ajjayyanh0421/
GitHub: https://github.com/Ajjayya0421
================================================================================

PROFESSIONAL SUMMARY
Motivated third-year Computer Science and Engineering student with a strong academic 
record of 8.80 CGPA and a solid foundation in C, Java, Python, HTML, MySQL, and MongoDB. 
Experienced in developing a College Management System using Advanced Java and database 
connectivity. Interested in software development and building practical technology solutions 
while continuously improving programming and problem-solving skills.

EDUCATION
- Bachelor of Engineering – Computer Science and Engineering
  Alva's Institute of Engineering and Technology, Mijar | VTU
  3rd Year | CGPA: 8.80 / 10.0
- Pre-University Course (PUC) – Science (PCMB)
  Raghavendra PU College, Davangere
  Percentage: 96% (Distinction)
- SSLC (10th Standard)
  Moraraji Desai Residential School, Davangere
  Percentage: 93.94% (Distinction)

TECHNICAL SKILLS
- Programming: C, Java (Core & Advanced, JDBC, OOP), Python
- Web Technology: HTML5, CSS3, Modern Responsive Web
- Databases: MySQL (Relational Schema, Indexing, Transactions), MongoDB
- Development & Concepts: Advanced Java, Database Connectivity (JDBC), MVC Architecture, Data Structures & Algorithms

PROJECTS
1. College Management System
   Technologies: Advanced Java, MySQL / Database Connectivity (JDBC), Java Swing
   - Developed a college management application for organizing and managing college-related information.
   - Implemented database connectivity for storing, retrieving, and managing application data.
   - Applied Advanced Java concepts and MVC architecture to develop the application's core functionality.
   - Integrated parameterized PreparedStatement queries for secure data handling and integrity.

2. Academic Performance & Attendance Analyzer
   Technologies: Python, MySQL, Data Processing
   - Automated script-driven tool to compute semester SGPA/CGPA matching university grading formulas.
   - Integrated attendance deficit detection and automated warnings for mentor alerts.

3. Hostel & Resource Allocation System
   Technologies: Java, MySQL, JDBC
   - Managed student hostel room allocations and complaints lifecycle tracking.

CERTIFICATIONS
- NPTEL – Theory of Computation (TOC)
- Coursera Certification – Algorithmic Problem Solving & Python Programming

ACHIEVEMENTS
- State-Level Badminton Player – Participated in state-level badminton competitions. Demonstrates strong mental endurance, rapid decision making, and team dedication.

CAREER INTERESTS
Software Development | Java Development | Python Development | Web Development | Database Applications
`.trim();

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      {/* Container */}
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="no-print p-4 sm:px-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white tracking-tight">
              Curriculum Vitae / Resume Preview
            </span>
            <span className="text-xs text-amber-400">· Ready for ATS & Print</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Copy plain text formatted for job portals"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText ? 'Copied' : 'Copy Plain Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
              title="Print directly or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 selection:bg-amber-100 print:p-0 print:m-0">
          <div className="max-w-3xl mx-auto space-y-6 text-sm">
            
            {/* Top Contact Header */}
            <div className="border-b-2 border-slate-900 pb-4 text-center sm:text-left space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                {portfolioData.personal.name}
              </h1>
              <p className="text-sm font-semibold text-slate-700">
                Computer Science & Engineering Student | Software Developer | Java & Python
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-600 pt-1">
                <span>Davangere, Karnataka</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-slate-900">+91 9611367900</span>
                <span aria-hidden="true">·</span>
                <a href="mailto:ajjayyanh@gmail.com" className="text-blue-700 underline">ajjayyanh@gmail.com</a>
                <span aria-hidden="true">·</span>
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 underline">
                  linkedin.com/in/ajjayyanh0421
                </a>
                <span aria-hidden="true">·</span>
                <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-blue-700 underline">
                  github.com/Ajjayya0421
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Professional Summary
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                Motivated third-year Computer Science and Engineering student with a strong academic record of <strong className="text-slate-900 font-semibold">8.80 CGPA</strong> and a solid foundation in <strong className="text-slate-900 font-semibold">C, Java, Python, HTML, MySQL, and MongoDB</strong>. Experienced in developing a <strong className="text-slate-900 font-semibold">College Management System using Advanced Java and database connectivity</strong>. Interested in software development and building practical technology solutions while continuously improving programming and problem-solving skills.
              </p>
            </section>

            {/* Education */}
            <section className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Education
              </h2>

              <div className="space-y-2">
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      Bachelor of Engineering – Computer Science and Engineering
                    </span>
                    <span className="text-xs font-semibold text-slate-900 tabular-nums">
                      3rd Year | CGPA: 8.80
                    </span>
                  </div>
                  <div className="text-xs text-slate-700">
                    Alva's Institute of Engineering and Technology, Mijar | VTU
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      Pre-University Course (PUC)
                    </span>
                    <span className="text-xs font-semibold text-slate-900 tabular-nums">
                      Percentage: 96%
                    </span>
                  </div>
                  <div className="text-xs text-slate-700">
                    Raghavendra PU College, Davangere
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      SSLC (10th Standard)
                    </span>
                    <span className="text-xs font-semibold text-slate-900 tabular-nums">
                      Percentage: 93.94%
                    </span>
                  </div>
                  <div className="text-xs text-slate-700">
                    Moraraji Desai Residential School, Davangere
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-700">
                <div>
                  <strong className="text-slate-900 font-semibold">Programming:</strong> C, Java, Python
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Web Technology:</strong> HTML, CSS
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Databases:</strong> MySQL, MongoDB
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Development:</strong> Advanced Java, Database Connectivity (JDBC)
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Projects
              </h2>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      College Management System
                    </span>
                    <span className="text-xs text-slate-600 font-medium">
                      Technologies: Advanced Java, MySQL / Database Connectivity
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5">
                    <li>Developed a college management application for organizing and managing college-related information.</li>
                    <li>Implemented database connectivity for storing, retrieving, and managing application data.</li>
                    <li>Applied Advanced Java concepts to develop the application's core functionality.</li>
                    <li>Integrated secure PreparedStatement queries to prevent SQL injections and maintain ACID transactional safety.</li>
                  </ul>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      Academic Performance & Attendance Analyzer
                    </span>
                    <span className="text-xs text-slate-600 font-medium">
                      Technologies: Python, MySQL
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5">
                    <li>Engineered automated Python routines computing SGPA/CGPA with risk flag thresholding for attendance below 75%.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Certifications
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                <li>
                  <strong className="text-slate-900 font-semibold">NPTEL – Theory of Computation (TOC):</strong> Rigorous evaluation of automata, grammars, and Turing machines.
                </li>
                <li>
                  <strong className="text-slate-900 font-semibold">Coursera:</strong> Algorithmic Problem Solving & Python Programming.
                </li>
              </ul>
            </section>

            {/* Achievements */}
            <section className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Achievements
              </h2>
              <p className="text-xs text-slate-700">
                <strong className="text-slate-900 font-semibold">State-Level Badminton Player</strong> – Participated in state-level badminton competitions. Demonstrates strong focus, agility, strategic gameplay, and team collaboration.
              </p>
            </section>

            {/* Career Interests */}
            <section className="space-y-1.5 pt-1">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Career Interests
              </h2>
              <p className="text-xs text-slate-700">
                Software Development | Java Development | Python Development | Web Development | Database Applications
              </p>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
};
