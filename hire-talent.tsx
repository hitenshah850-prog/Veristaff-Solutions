import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Award,
  ChevronDown,
  Send,
  Phone,
  Mail,
} from 'lucide-react';

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const roleOptions = [
  'Staff Accountant',
  'Senior Accountant',
  'Accounting Manager',
  'Controller',
  'Tax Preparer',
  'Tax Accountant',
  'Tax Manager',
  'Bookkeeper',
  'Senior Bookkeeper',
  'Payroll Specialist',
  'Accounts Payable Specialist',
  'Accounts Receivable Specialist',
  'Financial Analyst',
  'FP&A Analyst',
  'QuickBooks Specialist',
  'CAS Accountant',
  'Virtual CFO Support',
  'Other (specify in notes)',
];

const softwareOptions = [
  'QuickBooks Online',
  'QuickBooks Desktop',
  'Xero',
  'Sage',
  'NetSuite',
  'Wave',
  'FreshBooks',
  'Drake Tax',
  'ProConnect',
  'UltraTax CS',
  'Lacerte',
  'CCH ProSystem fx',
  'Bill.com',
  'Dext / Receipt Bank',
  'Gusto',
  'ADP',
  'Excel (Advanced)',
  'Power BI',
];

const firmTypes = [
  'CPA Firm',
  'Tax Firm',
  'Bookkeeping Firm',
  'Advisory Firm',
  'CAS Firm',
  'Accounting Outsourcing Company',
  'Virtual CFO Firm',
  'General Accounting Firm',
  'Other',
];

const experienceLevels = [
  '1–2 years (Entry Level)',
  '3–5 years (Mid Level)',
  '5–8 years (Senior Level)',
  '8+ years (Management Level)',
];

const hiringTimelines = [
  'ASAP (within 2 weeks)',
  'Within 1 month',
  'Within 2–3 months',
  'Flexible / No rush',
];

const engagementTypes = [
  'Direct Hire (Permanent)',
  'Contract (Fixed Term)',
  'Contract-to-Hire',
  'Part-Time / Fractional',
];

interface FormData {
  // Firm Details
  firmName: string;
  firmType: string;
  contactName: string;
  contactTitle: string;
  email: string;
  phone: string;
  website: string;
  // Role Details
  roleTitle: string;
  numberOfPositions: string;
  experienceLevel: string;
  engagementType: string;
  hiringTimeline: string;
  // Requirements
  softwareRequired: string[];
  jobDescription: string;
  additionalNotes: string;
  // Consent
  consent: boolean;
}

const initialForm: FormData = {
  firmName: '',
  firmType: '',
  contactName: '',
  contactTitle: '',
  email: '',
  phone: '',
  website: '',
  roleTitle: '',
  numberOfPositions: '1',
  experienceLevel: '',
  engagementType: '',
  hiringTimeline: '',
  softwareRequired: [],
  jobDescription: '',
  additionalNotes: '',
  consent: false,
};

export default function HireTalentPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const canonicalUrl = 'https://veristaffsolutions.com/hire-talent';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Hire Talent | VeriStaff Solutions',
    url: canonicalUrl,
    description:
      'Submit your US accounting hiring requirement to VeriStaff Solutions. Receive a pre-screened shortlist of qualified candidates within 48 hours.',
  };

  function toggleSoftware(tool: string) {
    setForm((prev) => ({
      ...prev,
      softwareRequired: prev.softwareRequired.includes(tool)
        ? prev.softwareRequired.filter((t) => t !== tool)
        : [...prev.softwareRequired, tool],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <>
      <Helmet>
        <title>Hire Talent | Submit Hiring Requirement — VeriStaff Solutions</title>
        <meta
          name="description"
          content="Submit your US accounting hiring requirement to VeriStaff Solutions. Get a pre-screened shortlist of qualified accounting professionals from India within 48 hours."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Hire Talent | VeriStaff Solutions" />
        <meta
          property="og:description"
          content="Submit your hiring requirement and receive a pre-screened shortlist within 48 hours. Specialized US accounting recruitment from India."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              Hire Talent
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl">
              Submit Your Hiring Requirement —{' '}
              <span className="text-[#C8922A]">Get Candidates in 48 Hours</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Tell us exactly who you need. We'll source, screen, and deliver a shortlist of pre-qualified US accounting professionals — ready to contribute from day one.
            </p>
          </FadeIn>

          {/* Promise badges */}
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: Clock, text: '48-Hour Shortlist Delivery' },
                { icon: Shield, text: '90-Day Replacement Guarantee' },
                { icon: Award, text: 'Pre-Screened Candidates Only' },
                { icon: CheckCircle2, text: 'No Upfront Cost to Submit' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs font-medium"
                >
                  <Icon size={13} className="text-[#C8922A]" />
                  {text}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── BREADCRUMB ────────────────────────────────────────────────────── */}
      <div className="bg-[#F1F4F8] border-b border-[#DDE3EC]">
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-[#5A6A7E]">
            <Link to="/" className="hover:text-[#1E4D8C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">Hire Talent</span>
          </nav>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F1F4F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* ── FORM ────────────────────────────────────────────────────── */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-[#DDE3EC] rounded-2xl p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-[#0A1628] mb-3">
                    Requirement Submitted Successfully!
                  </h2>
                  <p className="text-[#5A6A7E] leading-relaxed mb-2 max-w-md mx-auto">
                    Thank you, <strong>{form.contactName || 'there'}</strong>. We've received your hiring requirement for a <strong>{form.roleTitle || 'accounting professional'}</strong>.
                  </p>
                  <p className="text-[#5A6A7E] text-sm leading-relaxed mb-8 max-w-md mx-auto">
                    Our team will review your requirement and reach out within <strong>24 hours</strong> to confirm details. You can expect a pre-screened shortlist within <strong>48 hours</strong> of confirmation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => { setForm(initialForm); setSubmitted(false); }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A1628] hover:bg-[#1E4D8C] text-white font-semibold rounded text-sm transition-colors duration-200"
                    >
                      Submit Another Requirement
                    </button>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#DDE3EC] hover:border-[#1E4D8C] text-[#0A1628] font-semibold rounded text-sm transition-colors duration-200"
                    >
                      Contact Us Directly
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Section 1: Firm Details */}
                  <FadeIn>
                    <div className="bg-white border border-[#DDE3EC] rounded-2xl p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-7 h-7 rounded-full bg-[#0A1628] text-white text-xs font-bold flex items-center justify-center font-heading">1</div>
                        <h2 className="font-heading text-lg font-bold text-[#0A1628]">Your Firm Details</h2>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Firm / Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={form.firmName}
                            onChange={(e) => setForm({ ...form, firmName: e.target.value })}
                            placeholder="e.g. Johnson & Associates CPA"
                            className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Firm Type <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={form.firmType}
                              onChange={(e) => setForm({ ...form, firmType: e.target.value })}
                              className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] bg-white appearance-none focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                            >
                              <option value="">Select firm type</option>
                              {firmTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A6A7E] pointer-events-none" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={form.contactName}
                            onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                            placeholder="Full name"
                            className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Your Title / Role
                          </label>
                          <input
                            type="text"
                            value={form.contactTitle}
                            onChange={(e) => setForm({ ...form, contactTitle: e.target.value })}
                            placeholder="e.g. Managing Partner, HR Manager"
                            className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="you@yourfirm.com"
                            className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Firm Website
                          </label>
                          <input
                            type="url"
                            value={form.website}
                            onChange={(e) => setForm({ ...form, website: e.target.value })}
                            placeholder="https://yourfirm.com"
                            className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Section 2: Role Details */}
                  <FadeIn delay={0.05}>
                    <div className="bg-white border border-[#DDE3EC] rounded-2xl p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-7 h-7 rounded-full bg-[#0A1628] text-white text-xs font-bold flex items-center justify-center font-heading">2</div>
                        <h2 className="font-heading text-lg font-bold text-[#0A1628]">Role Requirements</h2>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Role / Position Title <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={form.roleTitle}
                              onChange={(e) => setForm({ ...form, roleTitle: e.target.value })}
                              className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] bg-white appearance-none focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                            >
                              <option value="">Select a role</option>
                              {roleOptions.map((r) => <option key={r} value={r}>{r}</option>)}
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A6A7E] pointer-events-none" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Number of Positions <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            required
                            min="1"
                            max="50"
                            value={form.numberOfPositions}
                            onChange={(e) => setForm({ ...form, numberOfPositions: e.target.value })}
                            className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Experience Level <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={form.experienceLevel}
                              onChange={(e) => setForm({ ...form, experienceLevel: e.target.value })}
                              className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] bg-white appearance-none focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                            >
                              <option value="">Select level</option>
                              {experienceLevels.map((l) => <option key={l} value={l}>{l}</option>)}
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A6A7E] pointer-events-none" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Engagement Type <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={form.engagementType}
                              onChange={(e) => setForm({ ...form, engagementType: e.target.value })}
                              className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] bg-white appearance-none focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                            >
                              <option value="">Select type</option>
                              {engagementTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A6A7E] pointer-events-none" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Hiring Timeline <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={form.hiringTimeline}
                              onChange={(e) => setForm({ ...form, hiringTimeline: e.target.value })}
                              className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] bg-white appearance-none focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                            >
                              <option value="">Select timeline</option>
                              {hiringTimelines.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A6A7E] pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Section 3: Software Requirements */}
                  <FadeIn delay={0.08}>
                    <div className="bg-white border border-[#DDE3EC] rounded-2xl p-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-7 h-7 rounded-full bg-[#0A1628] text-white text-xs font-bold flex items-center justify-center font-heading">3</div>
                        <h2 className="font-heading text-lg font-bold text-[#0A1628]">Software & Tools Required</h2>
                      </div>
                      <p className="text-[#5A6A7E] text-sm mb-5 ml-10">Select all software the candidate must be proficient in.</p>
                      <div className="flex flex-wrap gap-2">
                        {softwareOptions.map((tool) => {
                          const selected = form.softwareRequired.includes(tool);
                          return (
                            <button
                              key={tool}
                              type="button"
                              onClick={() => toggleSoftware(tool)}
                              className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-all duration-150 ${
                                selected
                                  ? 'bg-[#0A1628] border-[#0A1628] text-white'
                                  : 'bg-white border-[#DDE3EC] text-[#5A6A7E] hover:border-[#1E4D8C] hover:text-[#1E4D8C]'
                              }`}
                            >
                              {selected && <span className="mr-1">✓</span>}
                              {tool}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </FadeIn>

                  {/* Section 4: Job Description & Notes */}
                  <FadeIn delay={0.1}>
                    <div className="bg-white border border-[#DDE3EC] rounded-2xl p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-7 h-7 rounded-full bg-[#0A1628] text-white text-xs font-bold flex items-center justify-center font-heading">4</div>
                        <h2 className="font-heading text-lg font-bold text-[#0A1628]">Role Description & Notes</h2>
                      </div>
                      <div className="space-y-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Job Description / Key Responsibilities
                          </label>
                          <textarea
                            rows={5}
                            value={form.jobDescription}
                            onChange={(e) => setForm({ ...form, jobDescription: e.target.value })}
                            placeholder="Describe the key responsibilities, day-to-day tasks, and any specific requirements for this role..."
                            className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors resize-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Additional Notes or Special Requirements
                          </label>
                          <textarea
                            rows={3}
                            value={form.additionalNotes}
                            onChange={(e) => setForm({ ...form, additionalNotes: e.target.value })}
                            placeholder="Any other details — time zone preferences, communication style, industry niche, budget range, etc."
                            className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Consent + Submit */}
                  <FadeIn delay={0.12}>
                    <div className="bg-white border border-[#DDE3EC] rounded-2xl p-8">
                      <label className="flex items-start gap-3 cursor-pointer mb-6">
                        <input
                          type="checkbox"
                          required
                          checked={form.consent}
                          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                          className="mt-0.5 w-4 h-4 accent-[#0A1628] shrink-0"
                        />
                        <span className="text-[#5A6A7E] text-sm leading-relaxed">
                          I agree that VeriStaff Solutions may contact me regarding this hiring requirement and related recruitment services. I understand my information will be handled in accordance with applicable privacy standards.
                        </span>
                      </label>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-[#C8922A] hover:bg-[#b07d24] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-lg text-sm transition-colors duration-200"
                      >
                        {submitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' as const }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Submitting Requirement...
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            Submit Hiring Requirement
                          </>
                        )}
                      </button>
                      <p className="text-[#5A6A7E] text-xs text-center mt-3">
                        No upfront cost. Our team will contact you within 24 hours to confirm details.
                      </p>
                    </div>
                  </FadeIn>
                </form>
              )}
            </div>

            {/* ── SIDEBAR ─────────────────────────────────────────────────── */}
            <div className="space-y-6">
              {/* What Happens Next */}
              <FadeIn delay={0.1}>
                <div className="bg-[#0A1628] rounded-2xl p-7">
                  <h3 className="font-heading font-bold text-white text-base mb-5">What Happens Next</h3>
                  <div className="space-y-5">
                    {[
                      { step: '1', title: 'We Review Your Requirement', desc: 'Our team reviews your submission and may reach out to clarify details.' },
                      { step: '2', title: 'We Source & Screen', desc: 'We search our talent network and run our 5-stage screening process.' },
                      { step: '3', title: 'You Receive a Shortlist', desc: 'A curated shortlist of 3–5 pre-screened candidates delivered within 48 hours.' },
                      { step: '4', title: 'You Interview & Hire', desc: 'Interview your shortlisted candidates and select the best fit for your firm.' },
                    ].map(({ step, title, desc }) => (
                      <div key={step} className="flex gap-4">
                        <div className="w-7 h-7 rounded-full bg-[#C8922A] text-white text-xs font-bold flex items-center justify-center shrink-0 font-heading">
                          {step}
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm mb-0.5">{title}</p>
                          <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Guarantees */}
              <FadeIn delay={0.15}>
                <div className="bg-white border border-[#DDE3EC] rounded-2xl p-7">
                  <h3 className="font-heading font-bold text-[#0A1628] text-base mb-5">Our Guarantees</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Clock, title: '48-Hour Shortlist', desc: 'Pre-screened candidates delivered within 48 hours of requirement confirmation.' },
                      { icon: Shield, title: '90-Day Replacement', desc: 'If a placement doesn\'t work out within 90 days, we replace at no cost.' },
                      { icon: Award, title: 'Quality Assurance', desc: 'Every candidate passes our 5-stage technical and communication screening.' },
                    ].map(({ icon: Icon, title, desc }) => (
                      <div key={title} className="flex gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#F1F4F8] flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-[#C8922A]" />
                        </div>
                        <div>
                          <p className="text-[#0A1628] font-semibold text-sm mb-0.5">{title}</p>
                          <p className="text-[#5A6A7E] text-xs leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Direct Contact */}
              <FadeIn delay={0.2}>
                <div className="bg-[#F1F4F8] border border-[#DDE3EC] rounded-2xl p-7">
                  <h3 className="font-heading font-bold text-[#0A1628] text-base mb-2">Prefer to Talk First?</h3>
                  <p className="text-[#5A6A7E] text-sm mb-5 leading-relaxed">
                    Reach out directly and we'll walk you through the process.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+917600841538"
                      className="flex items-center gap-3 text-[#0A1628] hover:text-[#1E4D8C] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#DDE3EC] flex items-center justify-center shrink-0 group-hover:border-[#1E4D8C] transition-colors">
                        <Phone size={14} className="text-[#C8922A]" />
                      </div>
                      <span className="text-sm font-medium">+91 7600841538</span>
                    </a>
                    <a
                      href="mailto:info@veristaffsolutions.com"
                      className="flex items-center gap-3 text-[#0A1628] hover:text-[#1E4D8C] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#DDE3EC] flex items-center justify-center shrink-0 group-hover:border-[#1E4D8C] transition-colors">
                        <Mail size={14} className="text-[#C8922A]" />
                      </div>
                      <span className="text-sm font-medium">info@veristaffsolutions.com</span>
                    </a>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 mt-5 text-[#1E4D8C] hover:text-[#0A1628] text-sm font-semibold transition-colors"
                  >
                    Visit Contact Page <ArrowRight size={13} />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
