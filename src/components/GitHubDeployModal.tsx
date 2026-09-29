import React, { useState } from 'react';
import { 
  X, 
  Github, 
  Terminal, 
  Check, 
  Copy, 
  ExternalLink, 
  Download, 
  UploadCloud, 
  FolderDown, 
  AlertCircle,
  FileCode,
  Sparkles,
  Layers
} from 'lucide-react';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeployModal: React.FC<GitHubDeployModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'direct-upload' | 'terminal' | 'github-actions'>('direct-upload');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const gitPushScript = `# 1. Navigate to the extracted portfolio folder in your terminal:
cd path/to/portfolio-extracted

# 2. Initialize local git repository
git init

# 3. Stage all portfolio files
git add .

# 4. Create your initial commit
git commit -m "feat: complete professional portfolio for Ajjayya N H"

# 5. Set main branch
git branch -M main

# 6. Link to your GitHub repository
git remote add origin https://github.com/Ajjayya0421/portfolio.git

# 7. Push code to GitHub
git push -u origin main`;

  const githubActionsWorkflow = `name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [main, master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install Dependencies
        run: |
          npm install --legacy-peer-deps

      - name: Build Production Bundle
        run: |
          npm run build

      - name: Setup GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Upload & Deploy to GitHub (Ajjayya0421)
              </h3>
              <p className="text-xs text-slate-400">
                Guaranteed zero-error instructions to get your portfolio live
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 text-sm">
          
          {/* Step 0: Download Zip Cards Banner */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-500/10 via-slate-900 to-blue-500/10 border border-amber-400/30 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FolderDown className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Step 1: Download Your Project Files First
                </span>
              </div>
              <span className="text-xs text-amber-400 font-semibold">1-Click Direct Download</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Because this website is currently running in your preview environment, you need to download the project files to your device before uploading them to your GitHub account:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <a
                href="./standalone-index.html"
                download="index.html"
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-lg transition-all shadow-md text-center"
              >
                <Download className="w-4 h-4" />
                <span>Instant 1-File index.html (Zero Error)</span>
              </a>

              <a
                href="./portfolio-production-build.zip"
                download="portfolio-dist.zip"
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg transition-all shadow-md text-center"
              >
                <Layers className="w-4 h-4" />
                <span>Pre-built Dist (ZIP)</span>
              </a>

              <a
                href="./portfolio-complete.zip"
                download="portfolio-complete.zip"
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-lg border border-slate-700 transition-all text-center"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Complete Project (ZIP)</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-400">
              * Includes all source code, your photo, College Management System simulator, and GitHub Actions workflow.
            </div>
          </div>

          {/* Method Selection Tabs */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Step 2: Choose How You Want to Upload
              </span>

              {/* Segmented Switch */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setActiveTab('direct-upload')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'direct-upload'
                      ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Drag & Drop (Easiest)
                </button>
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'terminal'
                      ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Git Terminal
                </button>
                <button
                  onClick={() => setActiveTab('github-actions')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'github-actions'
                      ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  GitHub Actions YAML
                </button>
              </div>
            </div>

            {/* Tab 1: Drag & Drop (Easiest & Zero Terminal Errors) */}
            {activeTab === 'direct-upload' && (
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <UploadCloud className="w-4 h-4" />
                  <span>The 30-Second Zero-Error Method (Works directly with My_resume1)</span>
                </div>

                <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-xs text-emerald-200 space-y-1">
                  <div className="font-bold text-white">⭐ For your existing repository: <code className="bg-slate-900 px-1.5 py-0.5 rounded text-amber-300">My_resume1</code></div>
                  <p>You do not need to install Node.js, run terminal commands, or set up GitHub Actions if you use the 1-File HTML below.</p>
                </div>

                <ol className="text-xs text-slate-300 space-y-3 list-decimal list-inside leading-relaxed">
                  <li className="pl-1">
                    <strong className="text-white">Download the Standalone File:</strong> Click the green button above: <strong className="text-emerald-400">"Instant 1-File index.html (Zero Error)"</strong>.
                  </li>
                  <li className="pl-1">
                    <strong className="text-white">Open Your GitHub Repository:</strong> Go to{' '}
                    <a 
                      href="https://github.com/Ajjayya0421/My_resume1" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-amber-400 underline font-medium"
                    >
                      https://github.com/Ajjayya0421/My_resume1
                    </a>
                  </li>
                  <li className="pl-1">
                    <strong className="text-white">Upload and Replace:</strong> Click <strong className="text-white">Add file</strong> ➔ <strong className="text-white">Upload files</strong>. Drag and drop the downloaded <code className="text-white bg-slate-800 px-1 rounded">index.html</code> file.
                  </li>
                  <li className="pl-1">
                    <strong className="text-white">Commit Changes:</strong> Click the green button <strong className="text-white">"Commit changes"</strong>.
                  </li>
                  <li className="pl-1">
                    <strong className="text-white">Ensure GitHub Pages is active:</strong> Go to <strong className="text-white">Settings</strong> ➔ <strong className="text-white">Pages</strong>. Make sure <em>Source</em> is set to <strong className="text-amber-400">Deploy from a branch</strong>, branch is <strong className="text-white">main</strong> (or master) and folder is <strong className="text-white">/ (root)</strong>.
                  </li>
                </ol>

                <div className="p-3 bg-amber-950/40 border border-amber-500/30 rounded-lg text-xs text-amber-200">
                  ⚡ <strong>Result:</strong> Refresh <a href="https://ajjayya0421.github.io/My_resume1/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-white">https://ajjayya0421.github.io/My_resume1/</a> after 30 seconds. Your complete resume, CGPA, projects, and contact info will load flawlessly with zero errors!
                </div>
              </div>
            )}

            {/* Tab 2: Terminal Git Commands */}
            {activeTab === 'terminal' && (
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <Terminal className="w-4 h-4" />
                    <span>Run these commands in your computer's terminal:</span>
                  </div>
                  <button
                    onClick={() => copyCode(gitPushScript, 'gitPush')}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                  >
                    {copiedKey === 'gitPush' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                    <span>{copiedKey === 'gitPush' ? 'Copied!' : 'Copy All Commands'}</span>
                  </button>
                </div>

                <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 border border-slate-800 overflow-x-auto">
                  <pre>{gitPushScript}</pre>
                </div>

                {/* Common GitHub Authentication Error Fix */}
                <div className="p-3.5 bg-slate-900 border border-amber-400/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Did Git ask for your password and reject it?</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    GitHub no longer accepts account passwords in the terminal. When prompted for password:
                  </p>
                  <ul className="text-xs text-slate-400 list-disc list-inside space-y-1">
                    <li>
                      Go to <a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer" className="text-amber-400 underline">github.com/settings/tokens</a> → Generate new token (classic).
                    </li>
                    <li>Check the <strong>repo</strong> box and generate the token.</li>
                    <li>Paste that token as your password in the terminal.</li>
                    <li>Or simply use <strong className="text-white">GitHub Desktop</strong> which handles authentication automatically!</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 3: GitHub Actions YAML */}
            {activeTab === 'github-actions' && (
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <FileCode className="w-4 h-4 text-amber-400" />
                    <span>.github/workflows/deploy.yml</span>
                  </div>
                  <button
                    onClick={() => copyCode(githubActionsWorkflow, 'workflow')}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                  >
                    {copiedKey === 'workflow' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                    <span>{copiedKey === 'workflow' ? 'Copied' : 'Copy Workflow'}</span>
                  </button>
                </div>

                <p className="text-xs text-slate-400">
                  This workflow is already included inside the downloaded ZIP file. Whenever you commit changes to the <code className="text-amber-300 font-mono">main</code> branch, GitHub Pages will automatically build and host the new version.
                </p>

                <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 border border-slate-800 overflow-x-auto max-h-52">
                  <pre>{githubActionsWorkflow}</pre>
                </div>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <span>Repository Target: <strong className="text-white">https://github.com/Ajjayya0421/portfolio</strong></span>
            <a 
              href="https://github.com/Ajjayya0421" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>Visit your GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400">
            Ajjayya N H · Computer Science & Engineering
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
          >
            Close & Start Upload
          </button>
        </div>

      </div>
    </div>
  );
};
