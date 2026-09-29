# Ajjayya N H – Software Developer Portfolio

A modern, high-performance portfolio website built with **React 19**, **TypeScript**, and **Tailwind CSS**, designed specifically for **Ajjayya N H** (Computer Science & Engineering student at Alva's Institute of Engineering and Technology | VTU).

## 🚀 Live Demo & Repository
- **GitHub**: [github.com/Ajjayya0421](https://github.com/Ajjayya0421)
- **LinkedIn**: [linkedin.com/in/ajjayyanh0421](https://www.linkedin.com/in/ajjayyanh0421/)
- **Email**: [ajjayyanh@gmail.com](mailto:ajjayyanh@gmail.com)

---

## 🛠️ Features Included

1. **Top Bar Navigation**: Single-line wordmark, seamless section scrolling, quick-action buttons.
2. **Interactive Hero Section**:
   - 8.80 CGPA (3rd Year B.E. CSE), 96% PUC, 93.94% SSLC.
   - 1-click email/phone copy.
   - Professional headshot and status indicators.
3. **Flagship Project: College Management System**:
   - Built with **Advanced Java**, **MySQL**, and **JDBC**.
   - Interactive Live Simulator: Search student records, filter departments, enroll students, and test transactional queries.
   - Interactive SQL schema viewer and Java JDBC connection code preview.
4. **Zero-Pill Technical Skills Matrix**:
   - Clean unboxed presentation for Java, Python, C, MySQL, MongoDB, HTML5, and Theory of Computation.
   - Interactive code explorer displaying real OOP models, SQL queries, and DFA state machine simulators.
5. **Academic Milestones**:
   - Chronological breakdown with verified scores and distinctions.
6. **Certifications & Athletics**:
   - NPTEL Certification in Theory of Computation (TOC).
   - Coursera Algorithmic Thinking.
   - State-Level Badminton athlete feature showing focus and competitive grit.
7. **Interactive Resume & PDF Mode**:
   - ATS-friendly printable format.
   - 1-click Print / Save as PDF (`window.print()` with optimized `@media print` styling).
   - 1-click copy plain text resume for job portals.
8. **GitHub Deployment Guide & Workflow**:
   - Automated `.github/workflows/deploy.yml` included out of the box for GitHub Pages.

---

## 📦 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🌐 How to Deploy to GitHub Pages

### Method 1: Automated GitHub Actions (Recommended)

1. Create a repository on GitHub named `portfolio` (or `Ajjayya0421.github.io`).
2. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial developer portfolio commit"
   git branch -M main
   git remote add origin https://github.com/Ajjayya0421/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. GitHub will automatically trigger the included workflow (`.github/workflows/deploy.yml`) and deploy your site to `https://Ajjayya0421.github.io/portfolio/`.

### Note on Vite Base Path
If hosting at `https://Ajjayya0421.github.io/portfolio/`, ensure `base: '/portfolio/'` is set in `vite.config.ts`. If hosting at `https://Ajjayya0421.github.io/`, use `base: '/'`.
