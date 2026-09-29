export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  technologies: string[];
  description: string;
  keyPoints: string[];
  image: string;
  highlights: string[];
  githubUrl: string;
  architectureDetails: {
    frontend?: string;
    backend: string;
    database: string;
    security: string;
  };
  sampleSql?: string;
  sampleCode?: {
    language: string;
    code: string;
    filename: string;
  };
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  affiliation?: string;
  score: string;
  scoreType: string;
  timeline: string;
  location: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    notes: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialUrl?: string;
  description: string;
  skillsAcquired: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    linkedinDisplay: string;
    github: string;
    githubDisplay: string;
    summary: string;
    cgpa: string;
    college: string;
    avatar: string;
    availability: string;
  };
  careerInterests: string[];
  skills: SkillCategory[];
  projects: Project[];
  education: EducationItem[];
  certifications: Certification[];
  achievements: {
    title: string;
    category: string;
    image: string;
    description: string;
    takeaway: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "AJJAYYA N H",
    role: "Computer Science & Engineering Student | Software Developer",
    location: "Davangere, Karnataka, India",
    phone: "+91 9611367900",
    email: "ajjayyanh@gmail.com",
    linkedin: "https://www.linkedin.com/in/ajjayyanh0421/",
    linkedinDisplay: "linkedin.com/in/ajjayyanh0421",
    github: "https://github.com/Ajjayya0421",
    githubDisplay: "github.com/Ajjayya0421",
    summary:
      "Motivated third-year Computer Science and Engineering student with a strong academic record of 8.80 CGPA and a solid foundation in C, Java, Python, HTML, MySQL, and MongoDB. Experienced in developing a College Management System using Advanced Java and database connectivity. Passionate about software development, system architecture, and building practical technology solutions while continuously improving programming and problem-solving skills.",
    cgpa: "8.80",
    college: "Alva's Institute of Engineering and Technology, Mijar | VTU",
    avatar: "/src/assets/images/avatar_ajjayya_user_1790665570333.jpg",
    availability: "Actively seeking Software Engineering Internships & Full-time Roles",
  },
  careerInterests: [
    "Software Development",
    "Java Development & Enterprise Systems",
    "Python Development & Automation",
    "Web Development",
    "Database Applications & System Design",
  ],
  skills: [
    {
      category: "Programming Languages",
      description: "Strong foundation in object-oriented, procedural, and scripting paradigms.",
      skills: [
        {
          name: "Java (Core & Advanced)",
          level: "Proficient",
          experience: "Enterprise apps, JDBC, Swing, Multithreading, OOP",
          notes: "Deep understanding of inheritance, polymorphism, exception handling, and JDBC drivers.",
        },
        {
          name: "Python",
          level: "Proficient",
          experience: "Scripting, Data Structures, Automation, File I/O",
          notes: "Applied in data processing, algorithms, and rapid prototyping.",
        },
        {
          name: "C Programming",
          level: "Intermediate",
          experience: "Pointers, Dynamic Memory Allocation, Core Algorithms",
          notes: "Solid low-level systems foundation and data structures implementation.",
        },
      ],
    },
    {
      category: "Databases & Storage",
      description: "Relational database design, normalization, complex querying, and document storage.",
      skills: [
        {
          name: "MySQL",
          level: "Proficient",
          experience: "Schema Design, Joins, Triggers, Transactions, Stored Procedures",
          notes: "Hands-on experience structuring relational schemas for multi-table enterprise applications.",
        },
        {
          name: "MongoDB",
          level: "Familiar",
          experience: "NoSQL, JSON/BSON Document Modeling, Aggregations",
          notes: "Designing flexible schema models for modern cloud applications.",
        },
        {
          name: "JDBC (Database Connectivity)",
          level: "Proficient",
          experience: "Connection Pools, PreparedStatements, ResultSets, Transaction Control",
          notes: "Implemented robust database layers preventing SQL injection and connection leaks.",
        },
      ],
    },
    {
      category: "Web & Development Technologies",
      description: "Building responsive frontends and connected software interfaces.",
      skills: [
        {
          name: "HTML5 & Modern Web",
          level: "Proficient",
          experience: "Semantic markup, modern layout models, accessibility",
          notes: "Structuring clean, SEO-friendly, and accessible web layouts.",
        },
        {
          name: "Advanced Java Concepts",
          level: "Proficient",
          experience: "MVC Architecture, Event-driven Programming, GUI Components",
          notes: "Architecting modular desktop and client-server systems with separation of concerns.",
        },
        {
          name: "Git & Version Control",
          level: "Intermediate",
          experience: "Branching, PRs, GitHub Collaboration, GitHub Pages Deployment",
          notes: "Managing source code repositories and project workflows.",
        },
      ],
    },
    {
      category: "Core Computer Science Fundamentals",
      description: "Theoretical foundations and algorithmic problem solving.",
      skills: [
        {
          name: "Theory of Computation (TOC)",
          level: "Certified (NPTEL)",
          experience: "DFA, NFA, Regular Grammars, PDA, Turing Machines",
          notes: "NPTEL Certified with distinction in computational limits and formal languages.",
        },
        {
          name: "Data Structures & Algorithms",
          level: "Intermediate",
          experience: "Arrays, Linked Lists, Trees, Graphs, Sorting, Searching",
          notes: "Analyzing time and space complexities (Big O notation) for efficient algorithms.",
        },
        {
          name: "Object-Oriented Design (OOD)",
          level: "Proficient",
          experience: "Encapsulation, Abstraction, Design Patterns, Modularity",
          notes: "Writing clean, maintainable, and scalable production code.",
        },
      ],
    },
  ],
  projects: [
    {
      id: "college-management-system",
      title: "College Management System",
      subtitle: "Enterprise Academic & Administrative Management Platform",
      period: "Academic Project",
      technologies: ["Advanced Java", "MySQL", "JDBC", "MVC Architecture", "Java Swing/GUI"],
      description:
        "Developed a comprehensive college management desktop application designed to streamline and automate day-to-day administrative operations, student enrollment, faculty allocations, course curricula, and fee records.",
      keyPoints: [
        "Implemented secure database connectivity using JDBC Driver with PreparedStatement handling for sanitization and SQL injection prevention.",
        "Built modular multi-tab UI handling student registration, course allocations, examination records, and fee payment tracking.",
        "Engineered relational database schema in MySQL featuring primary-foreign key integrity, cascade updates, and optimized indexed queries.",
        "Applied Advanced Java concepts including custom event listeners, layout managers, multithreaded database fetch routines, and modular MVC architecture.",
      ],
      image: "/src/assets/images/college_management_system_1790664611042.jpg",
      highlights: [
        "Comprehensive Student & Faculty Records Automation",
        "Zero-Data Loss with Transactional Commit/Rollback",
        "Parameterized JDBC Security Layer",
        "Instant Academic & Fee Due Reports Generation",
      ],
      githubUrl: "https://github.com/Ajjayya0421",
      architectureDetails: {
        frontend: "Java Swing Desktop Graphical Interface with Event Dispatch Thread (EDT)",
        backend: "Advanced Java Core Controllers & Business Logic (POJO Models, DAO Pattern)",
        database: "MySQL Relational Database Server with JDBC Type-4 Pure Java Driver",
        security: "Role-Based Authentication (Admin, Faculty, Accounts) & Parameterized Queries",
      },
      sampleSql: `-- Sample Schema: Student & Enrollment Records
CREATE TABLE students (
  student_id VARCHAR(12) PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(15),
  department VARCHAR(50) NOT NULL,
  semester INT NOT NULL,
  cgpa DECIMAL(3,2) DEFAULT 0.00,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE course_enrollments (
  enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
  student_id VARCHAR(12) NOT NULL,
  course_code VARCHAR(10) NOT NULL,
  course_name VARCHAR(100) NOT NULL,
  attendance_percentage DECIMAL(5,2) DEFAULT 100.0,
  fee_status ENUM('PAID', 'PENDING', 'PARTIAL') DEFAULT 'PENDING',
  FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE
);`,
      sampleCode: {
        language: "java",
        filename: "DBConnectionManager.java",
        code: `// JDBC Database Connectivity Implementation
package com.aiet.college.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DBConnectionManager {
    private static final String URL = "jdbc:mysql://localhost:3306/college_db?useSSL=false&allowPublicKeyRetrieval=true";
    private static final String USER = "root";
    private static final String PASSWORD = "password";

    public static Connection getConnection() throws SQLException, ClassNotFoundException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    public static boolean enrollStudent(String studentId, String courseCode, String courseName) {
        String sql = "INSERT INTO course_enrollments (student_id, course_code, course_name, attendance_percentage, fee_status) "
                   + "VALUES (?, ?, ?, 100.0, 'PENDING')";
        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, studentId);
            pstmt.setString(2, courseCode);
            pstmt.setString(3, courseName);
            int rowsAffected = pstmt.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
            return false;
        }
    }
}`,
      },
    },
    {
      id: "academic-analyzer",
      title: "Academic Performance & Attendance Analyzer",
      subtitle: "Automated Data Processing & GPA Trend Evaluation Tool",
      period: "Academic Project",
      technologies: ["Python", "MySQL", "Data Processing", "File I/O"],
      description:
        "Engineered an automated script-driven analytics utility to ingest raw semester marks, compute weighted SGPA/CGPA across credits, and flag students with attendance falling below mandatory university thresholds.",
      keyPoints: [
        "Processes structured student assessment data and computes grade point averages matching VTU grading guidelines.",
        "Generates attendance deficit reports and automated warning notification logs for faculty mentors.",
        "Integrates with MySQL backends to persist student semester histories and track improvement trajectories.",
      ],
      image: "/src/assets/images/college_management_system_1790664611042.jpg",
      highlights: [
        "VTU Grading Scheme Computation Engine",
        "Attendance Risk Thresholds Detection (<75% alerts)",
        "CSV & Database Sync Pipeline",
      ],
      githubUrl: "https://github.com/Ajjayya0421",
      architectureDetails: {
        backend: "Python 3 Core Scripting Engine with Structured Error Handling",
        database: "MySQL / CSV Record Storage",
        security: "Sanitized input validation and local file privilege controls",
      },
      sampleCode: {
        language: "python",
        filename: "gpa_calculator.py",
        code: `def calculate_sgpa(subjects):
    """
    Computes SGPA according to VTU Credit-Grade formula:
    SGPA = Sum(Credit * GradePoint) / Sum(TotalCredits)
    """
    total_credit_points = 0
    total_credits = 0
    for subj in subjects:
        credits = subj['credits']
        marks = subj['marks']
        # Grade Point conversion
        if marks >= 90: gp = 10
        elif marks >= 80: gp = 9
        elif marks >= 70: gp = 8
        elif marks >= 60: gp = 7
        elif marks >= 45: gp = 6
        elif marks >= 40: gp = 4
        else: gp = 0
        total_credit_points += credits * gp
        total_credits += credits
    return round(total_credit_points / total_credits, 2) if total_credits > 0 else 0.0`,
      },
    },
    {
      id: "campus-resource-portal",
      title: "Hostel & Resource Allocation System",
      subtitle: "Database-Driven Allocation & Grievance Workflow Application",
      period: "Engineering Project",
      technologies: ["Java", "MySQL", "JDBC", "Data Structures"],
      description:
        "Designed and implemented a database-backed allocation management portal to handle student hostel room assignments, mess subscriptions, and facility maintenance tickets.",
      keyPoints: [
        "Built room allocation matching algorithm prioritizing distance and academic seniority.",
        "Implemented real-time status management for campus grievances with escalation timestamps.",
        "Employed relational foreign key constraints ensuring zero over-allocation of room capacities.",
      ],
      image: "/src/assets/images/college_management_system_1790664611042.jpg",
      highlights: [
        "Capacity-Safe Room Allocation Logic",
        "Maintenance Ticket Tracking Workflow",
        "Direct JDBC Query Execution",
      ],
      githubUrl: "https://github.com/Ajjayya0421",
      architectureDetails: {
        backend: "Java Application Core",
        database: "MySQL Database",
        security: "Role-based user permissions",
      },
    },
  ],
  education: [
    {
      id: "be-cse",
      degree: "Bachelor of Engineering (B.E.) – Computer Science & Engineering",
      institution: "Alva's Institute of Engineering and Technology, Mijar",
      affiliation: "Visvesvaraya Technological University (VTU)",
      score: "8.80 CGPA",
      scoreType: "Cumulative Grade Point Average",
      timeline: "3rd Year (Ongoing)",
      location: "Moodbidri, Karnataka",
      details: [
        "Maintained top-tier academic standing with 8.80 CGPA across all semesters.",
        "Relevant Coursework: Advanced Java Programming, Database Management Systems, Data Structures & Algorithms, Theory of Computation, Operating Systems, Computer Networks.",
        "Active member of departmental coding forums and technical workshops.",
      ],
    },
    {
      id: "puc",
      degree: "Pre-University Course (PUC) – Science (PCMB)",
      institution: "Raghavendra PU College",
      score: "96.00%",
      scoreType: "Distinction",
      timeline: "Completed",
      location: "Davangere, Karnataka",
      details: [
        "Achieved outstanding academic distinction with 96% aggregate score.",
        "Demonstrated deep analytical and problem-solving abilities across Mathematics, Physics, Chemistry, and Biology.",
      ],
    },
    {
      id: "sslc",
      degree: "Secondary School Leaving Certificate (SSLC / 10th)",
      institution: "Moraraji Desai Residential School",
      score: "93.94%",
      scoreType: "Distinction",
      timeline: "Completed",
      location: "Davangere, Karnataka",
      details: [
        "Graduated in the top tier with 93.94% from prestigious residential school.",
        "Developed strong self-discipline, time management, and collaborative leadership in a residential academy setting.",
      ],
    },
  ],
  certifications: [
    {
      id: "nptel-toc",
      title: "Theory of Computation (TOC)",
      issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
      description:
        "Comprehensive rigorous computer science certification covering Deterministic & Non-Deterministic Finite Automata (DFA/NFA), Regular Expressions, Context-Free Grammars (CFG), Pushdown Automata (PDA), Turing Machines, and Computational Complexity (Decidability & Halting Problem).",
      skillsAcquired: [
        "Formal Languages & Automata",
        "State Transition Models",
        "Grammar Parsing Algorithms",
        "Turing Machine Computation",
      ],
    },
    {
      id: "coursera-python",
      title: "Algorithmic Problem Solving & Python Programming",
      issuer: "Coursera",
      description:
        "Rigorous coursework in computational thinking, core Python data structures (lists, tuples, dictionaries, sets), algorithmic complexity analysis, and modular software design.",
      skillsAcquired: [
        "Python Data Structures",
        "Algorithmic Thinking",
        "Modular Code Architecture",
        "Problem Solving",
      ],
    },
  ],
  achievements: [
    {
      title: "State-Level Badminton Player",
      category: "Athletics & Sports Excellence",
      image: "/src/assets/images/badminton_state_sports_1790664623880.jpg",
      description:
        "Represented at prestigious state-level badminton championship tournaments. Competing at this high tier cultivated intense mental focus, rapid split-second decision making, endurance, resilience in high-pressure matches, and deep sportsmanship.",
      takeaway:
        "Transfers athletic discipline directly into engineering: persistent debugging stamina, calm composure under tight deadlines, and consistent team collaboration.",
    },
  ],
};
