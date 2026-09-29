import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Database, Cpu, Globe, CheckCircle2, ChevronRight, Copy, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const selectedCategory = portfolioData.skills[selectedCategoryIndex];

  const codeSnippets: Record<string, { title: string; lang: string; code: string }> = {
    "Programming Languages": {
      title: "Java OOP & Multithreading Architecture",
      lang: "java",
      code: `// Enterprise Java Model & Concurrency Pattern
public class StudentRecord {
    private final String studentId;
    private String fullName;
    private double cgpa;

    public StudentRecord(String id, String name, double cgpa) {
        this.studentId = Objects.requireNonNull(id, "ID cannot be null");
        this.fullName = name;
        this.cgpa = cgpa;
    }

    // Thread-safe update method
    public synchronized void updateCGPA(double newCGPA) {
        if (newCGPA >= 0.0 && newCGPA <= 10.0) {
            this.cgpa = newCGPA;
        } else {
            throw new IllegalArgumentException("Invalid CGPA bounds: " + newCGPA);
        }
    }
}`,
    },
    "Databases & Storage": {
      title: "Optimized MySQL Relational Query with Joins & Indexing",
      lang: "sql",
      code: `-- High-performance query for Academic Performance & Fee Audits
SELECT 
    s.student_id,
    s.full_name,
    s.department,
    s.cgpa,
    COUNT(ce.course_code) AS enrolled_courses_count,
    ROUND(AVG(ce.attendance_percentage), 1) AS overall_attendance,
    ce.fee_status
FROM students s
LEFT JOIN course_enrollments ce ON s.student_id = ce.student_id
WHERE s.semester = 6
GROUP BY s.student_id, ce.fee_status
HAVING overall_attendance >= 75.0
ORDER BY s.cgpa DESC;`,
    },
    "Web & Development Technologies": {
      title: "Clean Semantic Web & Component Integration",
      lang: "html",
      code: `<!-- Accessible, Modern Semantic Structure -->
<main class="student-portal-layout" role="main">
  <article class="academic-record-card" aria-labelledby="student-heading">
    <header class="card-header">
      <h2 id="student-heading">Enrollment Ledger</h2>
      <span class="status-indicator" data-status="verified">Active Semester</span>
    </header>
    <section class="metrics-grid" aria-label="Academic Summary">
      <dl class="metric-pair">
        <dt>Cumulative GPA</dt>
        <dd class="tabular-nums">8.80</dd>
      </dl>
    </section>
  </article>
</main>`,
    },
    "Core Computer Science Fundamentals": {
      title: "Theory of Computation: Deterministic Finite Automaton (DFA) in Python",
      lang: "python",
      code: `class BinaryEvenZeroDFA:
    """
    Simulates a DFA that accepts binary strings containing an EVEN number of '0's.
    States: Q0 (Even 0s, Start & Accept), Q1 (Odd 0s)
    """
    def __init__(self):
        self.state = 'Q0'

    def process(self, binary_string: str) -> bool:
        for bit in binary_string:
            if bit == '0':
                self.state = 'Q1' if self.state == 'Q0' else 'Q0'
            elif bit != '1':
                raise ValueError(f"Invalid character for binary alphabet: {bit}")
        return self.state == 'Q0'  # Accept state`,
    },
  };

  const copySnippet = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const currentSnippet = codeSnippets[selectedCategory.category] || codeSnippets["Programming Languages"];

  return (
    <section id="skills" className="py-20 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Technical Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Zero-Pill Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Technical Stack & Engineering Disciplines
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Curated skills across systems programming, database management, and theoretical computation acquired through intensive coursework and engineering projects.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl">
          {portfolioData.skills.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategoryIndex(idx)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                selectedCategoryIndex === idx
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* 2-Column Deep Dive: Left Skill Breakdown, Right Live Code Snippet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Skill Items with unboxed metadata discipline */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl">
              <div className="text-xs text-slate-400">
                {selectedCategory.description}
              </div>
            </div>

            <div className="space-y-3">
              {selectedCategory.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-white tracking-tight">
                      {skill.name}
                    </span>
                    {/* Unboxed level text with clean separator */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span className="font-semibold text-amber-400">{skill.level}</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 font-medium">
                    {skill.experience}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800/60">
                    {skill.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code Demonstration Box */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold text-white">
                    {currentSnippet.title}
                  </span>
                </div>
                <button
                  onClick={() => copySnippet(currentSnippet.code)}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                >
                  {copiedSnippet ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs text-slate-200 border border-slate-800/80 overflow-x-auto leading-relaxed max-h-[420px]">
                <pre>{currentSnippet.code}</pre>
              </div>

              <div className="text-xs text-slate-400 flex items-center justify-between pt-1">
                <span>Domain: {selectedCategory.category}</span>
                <span className="text-amber-400">Verified Syntax & Production Pattern</span>
              </div>
            </div>

            {/* Quick Career Focus Callout */}
            <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl space-y-2">
              <span className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
                Target Engineering Roles
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-300">
                {portfolioData.careerInterests.map((interest, i) => (
                  <React.Fragment key={interest}>
                    <span>{interest}</span>
                    {i < portfolioData.careerInterests.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
