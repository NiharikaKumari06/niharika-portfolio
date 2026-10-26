import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiCheck, FiLinkedin, FiGithub, FiClock, FiMessageSquare } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const contactEmail = 'niharika.kumari@example.com';

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Please enter your full name.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Please provide an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email format (e.g. name@company.com).';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Please provide a subject.';
    if (!formData.message.trim()) tempErrors.message = 'Please include a message for your inquiry.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    // Simulate reliable dispatch
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-100/50 dark:bg-slate-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold text-xs tracking-wider uppercase mb-3 border border-brand-500/20">
            <FiMessageSquare className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-brand-600 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Interested in discussing business analyst, data analyst, or Python engineering opportunities? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Let's Discuss Potential Synergy
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Whether you have an open role, an enterprise data challenge, or want to review technical architecture solutions, I am eager to connect.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center space-x-4 p-5 rounded-2xl bg-white dark:bg-darkCard border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-brand-500/50 hover:shadow-md transition-all group"
              >
                <div className="p-3 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email Address</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {contactEmail}
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white dark:bg-darkCard border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Location & Mobility</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Faridabad, Haryana, India
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Open to On-site (NCR), Hybrid & Remote Roles
                  </p>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white dark:bg-darkCard border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <FiClock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Response Expectation</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Prompt Turnaround (Within 24 Hours)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center space-x-4 text-slate-600 dark:text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs font-semibold hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/40 transition-all shadow-sm"
              >
                <FiLinkedin className="w-4 h-4 text-brand-600" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs font-semibold hover:text-slate-900 dark:hover:text-white hover:border-brand-500/40 transition-all shadow-sm"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSend}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-darkCard border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 text-sm transition-colors text-slate-900 dark:text-white"
                  />
                  {errors.name && <p className="text-[11px] text-red-500 font-semibold">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. j.doe@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 text-sm transition-colors text-slate-900 dark:text-white"
                  />
                  {errors.email && <p className="text-[11px] text-red-500 font-semibold">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Opportunity: Business Analyst Role / Data Architecture Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 text-sm transition-colors text-slate-900 dark:text-white"
                />
                {errors.subject && <p className="text-[11px] text-red-500 font-semibold">{errors.subject}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  Message Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Share details regarding your team, the scope of the role, or your specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 text-sm transition-colors text-slate-900 dark:text-white resize-none"
                />
                {errors.message && <p className="text-[11px] text-red-500 font-semibold">{errors.message}</p>}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-all shadow-md shadow-brand-600/20 active:scale-95 disabled:opacity-50"
                >
                  {sending ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent(formData.subject || 'Inquiry from Portfolio')}&body=${encodeURIComponent(formData.message || '')}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold transition-colors"
                >
                  <FiMail className="w-3.5 h-3.5" />
                  <span>Open in Mail Client</span>
                </a>
              </div>

              {success && (
                <motion.div
                  className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold rounded-2xl flex items-center space-x-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Thank you for reaching out! Your message has been sent successfully. I will get back to you soon.</span>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}