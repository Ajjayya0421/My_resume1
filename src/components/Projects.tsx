import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { 
  Database, 
  Code, 
  Terminal, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Check, 
  Search, 
  PlusCircle, 
  Sparkles,
  Server,
  Layers,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface SimulatedStudent {
  id: string;
  name: string;
  dept: string;
  semester: number;
  courses: string[];
  attendance: number;
  feeStatus: 'PAID' | 'PENDING' | 'PARTIAL';
}

const INITIAL_SIMULATED_STUDENTS: SimulatedStudent[] = [
  {
    id: "4AL22CS001",
    name: "Ajjayya N H",
    dept: "Computer Science & Engineering",
    semester: 6,
    courses: ["Advanced Java", "Database Systems (DBMS)", "Theory of Computation", "Computer Networks"],
    attendance: 94.5,
    feeStatus: "PAID",
  },
  {
    id: "4AL22CS014",
    name: "Pooja Hegde",
    dept: "Computer Science & Engineering",
    semester: 6,
    courses: ["Advanced Java", "Operating Systems", "Software Engineering"],
    attendance: 88.0,
    feeStatus: "PAID",
  },
  {
    id: "4AL22CS029",
    name: "Kiran Kumar",
    dept: "Information Science & Engineering",
    semester: 5,
    courses: ["Python Programming", "Database Systems", "Data Structures"],
    attendance: 71.5,
    feeStatus: "PENDING",
  },
  {
    id: "4AL22CS042",
    name: "Sanjana Rao",
    dept: "Computer Science & Engineering",
    semester: 6,
    courses: ["Advanced Java", "Cloud Computing", "Web Technologies"],
    attendance: 82.0,
    feeStatus: "PARTIAL",
  },
];

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'schema' | 'jdbc' | 'simulator'>('overview');
  const [copiedCode, setCopiedCode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>(portfolioData.projects[0]);

  // Simulator state
  const [students, setStudents] = useState<SimulatedStudent[]>(INITIAL_SIMULATED_STUDENTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDept, setFilterDept] = useState("ALL");
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentDept, setNewStudentDept] = useState("Computer Science & Engineering");
  const [newStudentCourse, setNewStudentCourse] = useState("Advanced Java");
  const [showAddForm, setShowAddForm] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const flagshipProject = portfolioData.projects[0];

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;

    const nextId = `4AL22CS0${students.length + 10}`;
    const newRecord: SimulatedStudent = {
      id: nextId,
      name: newStudentName.trim(),
      dept: newStudentDept,
      semester: 6,
      courses: [newStudentCourse, "Database Systems"],
      attendance: 90.0,
      feeStatus: "PAID",
    };

    setStudents([newRecord, ...students]);
    setNewStudentName("");
    setShowAddForm(false);
    setStatusMessage(`Student record [${nextId}] added successfully via simulated JDBC transaction.`);
    setTimeout(() => setStatusMessage(null), 4000);
  };

  const filteredStudents = students.filter((s) => {
    const matchesSearch = 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = filterDept === "ALL" || s.dept.includes(filterDept);
    return matchesSearch && matchesDept;
  });

  return (
    <section id="projects" className="py-20 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Featured Software Engineering Projects</span>
            <span aria-hidden="true">·</span>
            <span>Real-World Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Enterprise Architecture & Database Solutions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Detailed case studies of software developed by Ajjayya N H, highlighting advanced Java patterns, relational MySQL modeling, and database connectivity.
          </p>
        </div>

        {/* Flagship Project Showcase: Dynamic Bento Presentation */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Top Banner / Metadata Bar */}
          <div className="p-6 sm:p-8 border-b border-slate-800 bg-slate-900/90 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="font-semibold text-amber-400 uppercase tracking-wider">Flagship Academic Project</span>
                <span aria-hidden="true">·</span>
                <span>Advanced Java</span>
                <span aria-hidden="true">·</span>
                <span>MySQL</span>
                <span aria-hidden="true">·</span>
                <span>JDBC Driver</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {flagshipProject.title}
              </h3>
              <p className="text-sm text-slate-300">
                {flagshipProject.subtitle}
              </p>
            </div>

            {/* Interactive Tab Bar (Functional Segmented Control) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-950 border border-slate-800 rounded-xl self-start md:self-center">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeTab === 'overview'
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Overview & Architecture
              </button>
              <button
                onClick={() => setActiveTab('schema')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeTab === 'schema'
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Database Schema (SQL)
              </button>
              <button
                onClick={() => setActiveTab('jdbc')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeTab === 'jdbc'
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                JDBC Code Implementation
              </button>
              <button
                onClick={() => setActiveTab('simulator')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === 'simulator'
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-amber-400/90 hover:text-amber-300'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Live Interactive Simulator</span>
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-8">
            
            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-base font-semibold text-white mb-2">Project Mission & Problem Solved</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {flagshipProject.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-base font-semibold text-white">Key Engineering Highlights</h4>
                    <div className="space-y-2.5">
                      {flagshipProject.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Specification Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Presentation Layer</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-normal">
                        {flagshipProject.architectureDetails.frontend}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                        <Server className="w-3.5 h-3.5" />
                        <span>Backend Logic & DAO</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-normal">
                        {flagshipProject.architectureDetails.backend}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                        <Database className="w-3.5 h-3.5" />
                        <span>Persistence & MySQL</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-normal">
                        {flagshipProject.architectureDetails.database}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Security & Sanitization</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-normal">
                        {flagshipProject.architectureDetails.security}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side: Project Image & System Specs */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[4/3] relative group">
                    <img 
                      src={flagshipProject.image} 
                      alt="College Management System Preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300 flex items-center justify-between">
                      <span className="font-semibold text-white">Desktop Enterprise Architecture</span>
                      <span className="text-amber-400">Java + MySQL JDBC</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
                      Core System Capabilities
                    </div>
                    <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                      {flagshipProject.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            )}

            {/* Tab 2: SQL Schema */}
            {activeTab === 'schema' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    Relational schema with primary keys, cascade rules, and normalized data tables.
                  </div>
                  {flagshipProject.sampleSql && (
                    <button
                      onClick={() => copyCode(flagshipProject.sampleSql!)}
                      className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? 'Copied' : 'Copy Schema'}</span>
                    </button>
                  )}
                </div>

                <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs text-amber-200/90 overflow-x-auto leading-relaxed">
                  <pre>{flagshipProject.sampleSql}</pre>
                </div>
              </div>
            )}

            {/* Tab 3: JDBC Code Implementation */}
            {activeTab === 'jdbc' && flagshipProject.sampleCode && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Code className="w-4 h-4 text-amber-400" />
                    <span className="font-mono text-slate-200">{flagshipProject.sampleCode.filename}</span>
                    <span aria-hidden="true">·</span>
                    <span>Advanced Java JDBC PreparedStatement Implementation</span>
                  </div>
                  <button
                    onClick={() => copyCode(flagshipProject.sampleCode!.code)}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied Code' : 'Copy Java Code'}</span>
                  </button>
                </div>

                <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                  <pre>{flagshipProject.sampleCode.code}</pre>
                </div>
              </div>
            )}

            {/* Tab 4: Live Interactive Simulator */}
            {activeTab === 'simulator' && (
              <div className="space-y-6">
                <div className="p-4 bg-amber-400/10 border border-amber-400/30 rounded-xl flex items-start gap-3">
                  <Terminal className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <strong className="text-white font-semibold">Live College Management System Simulator:</strong> Experience how the application filters, queries, and executes transactions on student records with instant JDBC-like state updates.
                  </div>
                </div>

                {statusMessage && (
                  <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-lg text-xs text-emerald-200 flex items-center gap-2 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Simulator Controls */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 flex-1 max-w-md">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search student by name or ID (e.g. 4AL22CS001)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={filterDept}
                      onChange={(e) => setFilterDept(e.target.value)}
                      className="px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-300 focus:outline-none focus:border-amber-400"
                    >
                      <option value="ALL">All Departments</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Information Science">Information Science</option>
                    </select>

                    <button
                      onClick={() => setShowAddForm(!showAddForm)}
                      className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>{showAddForm ? 'Cancel' : 'Enroll Student'}</span>
                    </button>
                  </div>
                </div>

                {/* Add Student Record Form */}
                {showAddForm && (
                  <form onSubmit={handleAddStudent} className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
                    <div className="text-xs font-semibold text-white uppercase tracking-wider">
                      Execute INSERT INTO students & course_enrollments
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Student Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rakesh Sharma"
                          value={newStudentName}
                          onChange={(e) => setNewStudentName(e.target.value)}
                          className="w-full px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-md text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Department</label>
                        <select
                          value={newStudentDept}
                          onChange={(e) => setNewStudentDept(e.target.value)}
                          className="w-full px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-md text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                          <option value="Information Science & Engineering">Information Science & Engineering</option>
                          <option value="Artificial Intelligence & ML">Artificial Intelligence & ML</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Primary Course</label>
                        <input
                          type="text"
                          value={newStudentCourse}
                          onChange={(e) => setNewStudentCourse(e.target.value)}
                          className="w-full px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-md text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setShowAddForm(false)}
                        className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-md hover:bg-amber-300"
                      >
                        Commit Transaction
                      </button>
                    </div>
                  </form>
                )}

                {/* Student Records Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400 bg-slate-900/80">
                        <th className="py-3 px-4 font-mono">STUDENT ID</th>
                        <th className="py-3 px-4">FULL NAME</th>
                        <th className="py-3 px-4">DEPARTMENT</th>
                        <th className="py-3 px-4">ENROLLED COURSES</th>
                        <th className="py-3 px-4 tabular-nums">ATTENDANCE</th>
                        <th className="py-3 px-4">FEE STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                      {filteredStudents.length > 0 ? (
                        filteredStudents.map((student) => (
                          <tr key={student.id} className="hover:bg-slate-900/50 transition-colors">
                            <td className="py-3 px-4 font-mono font-medium text-amber-400">
                              {student.id}
                            </td>
                            <td className="py-3 px-4 font-medium text-white">
                              {student.name}
                            </td>
                            <td className="py-3 px-4 text-slate-400">
                              {student.dept}
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex flex-wrap gap-1 text-slate-300">
                                {student.courses.join(" · ")}
                              </div>
                            </td>
                            <td className="py-3 px-4 tabular-nums">
                              <span className={student.attendance < 75 ? "text-rose-400 font-semibold" : "text-emerald-400"}>
                                {student.attendance}%
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`font-semibold ${
                                student.feeStatus === 'PAID' ? 'text-emerald-400' :
                                student.feeStatus === 'PARTIAL' ? 'text-amber-400' : 'text-rose-400'
                              }`}>
                                {student.feeStatus}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-slate-500">
                            No students match your query. Try searching another name or reset filters.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="tabular-nums">Displaying {filteredStudents.length} of {students.length} student records</span>
                  <span>Database State: In-Memory Simulated Transaction Engine</span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Complementary Secondary Projects: 2-Column Grid */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Additional Engineering Projects
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Practical software applications demonstrating Python scripting and Java resource allocation algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.projects.slice(1).map((proj) => (
              <div 
                key={proj.id}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div className="space-y-4">
                  {/* Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="font-semibold text-amber-400">{proj.technologies[0]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{proj.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{proj.technologies.slice(1).join(" · ")}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {proj.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {proj.keyPoints.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {proj.sampleCode && (
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-1.5 flex items-center justify-between">
                      <span>{proj.sampleCode.filename}</span>
                      <span className="text-amber-400">Algorithm Logic</span>
                    </div>
                    <div className="bg-slate-950 rounded-lg p-3 font-mono text-xs text-slate-300 overflow-x-auto max-h-36">
                      <pre>{proj.sampleCode.code}</pre>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
