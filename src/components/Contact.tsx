import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || `Inquiry from ${name || 'Recruiter/Peer'}`);
    const mailtoBody = encodeURIComponent(
      `Hi Ajjayya,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Direct Channels</span>
            <span aria-hidden="true">·</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Connect & Collaborate
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in discussing software engineering opportunities, internships, or technical collaborations? Feel free to reach out directly.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start justify-between p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Email Address</div>
                      <a 
                        href={`mailto:${portfolioData.personal.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                      >
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(portfolioData.personal.email, 'email')}
                    className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
                    title="Copy email"
                  >
                    {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-start justify-between p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Phone & WhatsApp</div>
                      <a 
                        href={`tel:${portfolioData.personal.phone}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-amber-400 transition-colors tabular-nums"
                      >
                        {portfolioData.personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(portfolioData.personal.phone, 'phone')}
                    className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
                    title="Copy phone"
                  >
                    {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {portfolioData.personal.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  Professional Profiles
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      <span>{portfolioData.personal.linkedinDisplay}</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-200" />
                      <span>{portfolioData.personal.githubDisplay}</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Interactive Message Composer Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Draft an email to Ajjayya N H. This will open your preferred email client with all fields prefilled.
                </p>
              </div>

              {submitted && (
                <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-lg text-xs text-emerald-200 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Launching email client with your message...</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Tech Recruiter"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Software Engineering Opportunity / Internship Discussion"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Ajjayya, I came across your portfolio and would like to connect regarding..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-y"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-slate-500">
                    Recipient: <span className="text-slate-300">ajjayyanh@gmail.com</span>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
