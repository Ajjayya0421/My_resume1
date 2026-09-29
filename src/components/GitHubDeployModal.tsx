import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  X, 
  Github, 
  Terminal, 
  Check, 
  Copy, 
  ExternalLink, 
  Rocket, 
  GitBranch, 
  CheckCircle2, 
  AlertCircle,
  FileCode
} from 'lucide-react';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeployModal: React.FC<GitHubDeployModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'actions' | 'cli'>('actions');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const gitPushScript = `# 1. Initialize local git repository
git init

# 2. Stage all portfolio files
git add .

# 3. Create your initial commit
git commit -m "feat: complete professional portfolio for Ajjayya N H"

# 4. Set main branch
git branch -M main

# 5. Link to your GitHub repository
git remote add origin https://github.com/Ajjayya0421/portfolio.git

# 6. Push code to GitHub
git push -u origin main`;

  const githubActionsWorkflow = `name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [main]
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
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci || npm install

      - name: Build Production Assets
        run: npm run build

      - name: Setup GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  const ghPagesCliScript = `# 1. Install the official gh-pages deployment package
npm install -D gh-pages

# 2. Build your production bundle
npm run build

# 3. Deploy the dist folder to the gh-pages branch
npx gh-pages -d dist`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 sm:px-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Github className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                How to Deploy to GitHub Pages
              </h3>
              <p className="text-xs text-slate-400">
                Step-by-step deployment guide for Ajjayya0421
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close deploy modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6 text-sm">
          
          {/* Quick Info Box */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="font-semibold text-white">Your GitHub Profile:</span>
              <a 
                href="https://github.com/Ajjayya0421" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>github.com/Ajjayya0421</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Once deployed, your portfolio will be live at{' '}
              <code className="text-amber-300 font-mono">https://ajjayya0421.github.io/portfolio/</code> (or your custom domain).
            </p>
          </div>

          {/* Step 1: Create GitHub Repo */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                1
              </span>
              <h4 className="text-sm font-bold text-white">
                Create a New Repository on GitHub
              </h4>
            </div>
            <div className="text-xs text-slate-300 pl-8 space-y-1">
              <p>
                1. Go to <a href="https://github.com/new" target="_blank" rel="noreferrer" className="text-amber-400 underline">github.com/new</a>.
              </p>
              <p>
                2. Set Repository Name to <code className="text-white font-mono bg-slate-800 px-1.5 py-0.5 rounded">portfolio</code> (or <code className="text-white font-mono bg-slate-800 px-1.5 py-0.5 rounded">Ajjayya0421.github.io</code>).
              </p>
              <p>
                3. Choose <strong className="text-white">Public</strong> and click <strong className="text-white">Create repository</strong>.
              </p>
            </div>
          </div>

          {/* Step 2: Push Code */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                  2
                </span>
                <h4 className="text-sm font-bold text-white">
                  Push Local Project to GitHub
                </h4>
              </div>
              <button
                onClick={() => copyCode(gitPushScript, 'gitPush')}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
              >
                {copiedKey === 'gitPush' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedKey === 'gitPush' ? 'Copied' : 'Copy Commands'}</span>
              </button>
            </div>

            <div className="pl-8">
              <div className="bg-slate-950 rounded-xl p-4 font-mono text-xs text-slate-200 border border-slate-800 overflow-x-auto">
                <pre>{gitPushScript}</pre>
              </div>
            </div>
          </div>

          {/* Step 3: Choose Deployment Method */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                  3
                </span>
                <h4 className="text-sm font-bold text-white">
                  Enable Free GitHub Pages Hosting
                </h4>
              </div>

              {/* Segmented Switch */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setActiveTab('actions')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'actions' ? 'bg-amber-400 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  GitHub Actions (Recommended)
                </button>
                <button
                  onClick={() => setActiveTab('cli')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'cli' ? 'bg-amber-400 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  gh-pages CLI
                </button>
              </div>
            </div>

            <div className="pl-8 space-y-3">
              {activeTab === 'actions' ? (
                <div className="space-y-3">
                  <p className="text-xs text-slate-300">
                    Create a file in your project at{' '}
                    <code className="text-amber-300 font-mono">.github/workflows/deploy.yml</code> and paste the workflow below. GitHub will build and host your portfolio automatically on every git push!
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <FileCode className="w-3.5 h-3.5 text-amber-400" />
                      <span>.github/workflows/deploy.yml</span>
                    </span>
                    <button
                      onClick={() => copyCode(githubActionsWorkflow, 'workflow')}
                      className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                    >
                      {copiedKey === 'workflow' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey === 'workflow' ? 'Copied Workflow' : 'Copy Workflow YAML'}</span>
                    </button>
                  </div>

                  <div className="bg-slate-950 rounded-xl p-4 font-mono text-xs text-slate-200 border border-slate-800 overflow-x-auto max-h-56">
                    <pre>{githubActionsWorkflow}</pre>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400 space-y-1">
                    <strong className="text-white block font-medium">Final One-Time Setting in GitHub:</strong>
                    <span>Go to your GitHub repo → <strong className="text-slate-200">Settings</strong> → <strong className="text-slate-200">Pages</strong> → under <strong className="text-slate-200">Build and deployment</strong>, set Source to <strong className="text-amber-400">"GitHub Actions"</strong>. Done!</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-slate-300">
                    Alternatively, deploy using the official <code className="text-amber-300 font-mono">gh-pages</code> npm script:
                  </p>

                  <div className="flex items-center justify-end">
                    <button
                      onClick={() => copyCode(ghPagesCliScript, 'ghCli')}
                      className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                    >
                      {copiedKey === 'ghCli' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey === 'ghCli' ? 'Copied' : 'Copy Commands'}</span>
                    </button>
                  </div>

                  <div className="bg-slate-950 rounded-xl p-4 font-mono text-xs text-slate-200 border border-slate-800 overflow-x-auto">
                    <pre>{ghPagesCliScript}</pre>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400 space-y-1">
                    <strong className="text-white block font-medium">Setting in GitHub:</strong>
                    <span>Go to Repo Settings → Pages → Source: Deploy from branch → choose <strong className="text-amber-400">gh-pages</strong> and folder <strong className="text-slate-200">/(root)</strong>.</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Vite Base URL Reminder */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">Important Vite Note:</strong> If your repository URL is <code className="text-amber-300 font-mono">github.com/Ajjayya0421/portfolio</code>, set <code className="text-amber-300 font-mono">base: '/portfolio/'</code> in your <code className="text-slate-200 font-mono">vite.config.ts</code>. If you name your repository <code className="text-amber-300 font-mono">Ajjayya0421.github.io</code>, you can keep <code className="text-amber-300 font-mono">base: '/'</code>.
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-400">
            Ajjayya N H · Computer Science & Engineering
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
          >
            Got it, Let's Deploy!
          </button>
        </div>

      </div>
    </div>
  );
};
