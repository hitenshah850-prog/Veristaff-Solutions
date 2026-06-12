import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Briefcase,
  Upload,
  Send,
  Star,
  TrendingUp,
  Globe,
  Users,
  Award,
  ChevronDown,
  BookOpen,
  Monitor,
  FileText,
  DollarSign,
  Quote,
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

interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  software: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  icon: React.ElementType;
  badge?: string;
}

const jobs: Job[] = [
  {
    id: 'us-tax-preparer',
    title: 'US Tax Preparer',
    type: 'Full-Time',
    location: 'Remote (India)',
    experience: '2–5 years',
    software: ['Drake Tax', 'ProConnect', 'UltraTax CS', 'Lacerte'],
    badge: 'High Demand',
    icon: FileText,
    description:
      'Prepare and review US federal and state tax returns for individuals, corporations, partnerships, and trusts for US-based CPA and tax firms.',
    responsibilities: [
      'Prepare 1040, 1120, 1120S, 1065, and 1041 returns',
      'Review prior year returns and identify planning opportunities',
      'Communicate with US clients and supervisors via email and video calls',
      'Maintain accurate workpapers and documentation',
      'Meet seasonal deadlines and manage multiple client files',
    ],
    requirements: [
      '2+ years of US tax preparation experience',
      'Proficiency in at least one major US tax software',
      'Strong understanding of US federal and state tax law',
      'Excellent written and verbal English communication',
      'B.Com, M.Com, CA Inter, or equivalent qualification',
    ],
  },
  {
    id: 'senior-accountant',
    title: 'Senior Accountant (US GAAP)',
    type: 'Full-Time',
    location: 'Remote (India)',
    experience: '4–8 years',
    software: ['QuickBooks', 'Xero', 'Sage Intacct', 'NetSuite'],
    badge: 'Urgent',
    icon: TrendingUp,
    description:
      'Manage full-cycle accounting for US-based clients, including month-end close, financial statement preparation, and client communication for US CPA and accounting firms.',
    responsibilities: [
      'Manage month-end and year-end close processes',
      'Prepare financial statements in accordance with US GAAP',
      'Perform complex bank and account reconciliations',
      'Review and supervise work of junior accountants',
      'Communicate directly with US clients and firm partners',
    ],
    requirements: [
      '4+ years of US accounting experience',
      'Strong US GAAP knowledge',
      'Proficiency in QuickBooks, Xero, or similar platforms',
      'Experience with financial statement preparation',
      'CA, CPA, ACCA, or equivalent qualification preferred',
    ],
  },
  {
    id: 'qbo-bookkeeper',
    title: 'QuickBooks Online Bookkeeper',
    type: 'Full-Time',
    location: 'Remote (India)',
    experience: '1–4 years',
    software: ['QuickBooks Online', 'Dext', 'Bill.com', 'Gusto', 'Hubdoc'],
    icon: Monitor,
    description:
      'Manage day-to-day bookkeeping for multiple US clients using QuickBooks Online, delivering clean books, timely reconciliations, and accurate financial records.',
    responsibilities: [
      'Manage bookkeeping for 10–20 US client accounts in QBO',
      'Perform monthly bank and credit card reconciliations',
      'Process AP/AR, payroll entries, and journal entries',
      'Prepare monthly financial reports for client review',
      'Coordinate with US clients and supervisors via email',
    ],
    requirements: [
      '1+ years of bookkeeping experience using QuickBooks Online',
      'QuickBooks ProAdvisor certification preferred',
      'Experience with Dext, Bill.com, or Gusto is a plus',
      'Strong attention to detail and organizational skills',
      'Good written English communication skills',
    ],
  },
  {
    id: 'accounting-manager',
    title: 'Accounting Manager',
    type: 'Full-Time',
    location: 'Remote (India)',
    experience: '7–12 years',
    software: ['QuickBooks', 'Xero', 'Sage', 'NetSuite', 'Excel Advanced'],
    icon: Users,
    description:
      'Lead a team of accountants and bookkeepers serving US clients, managing quality, client relationships, and workflow for a growing US accounting or outsourcing firm.',
    responsibilities: [
      'Manage and mentor a team of 5–10 accountants and bookkeepers',
      'Review financial statements, tax workpapers, and reconciliations',
      'Serve as primary point of contact for key US clients',
      'Develop and enforce quality control processes',
      'Coordinate with US firm partners on workflow and staffing',
    ],
    requirements: [
      '7+ years of US accounting experience, including 2+ in a supervisory role',
      'Strong US GAAP and tax knowledge',
      'Proven client relationship management experience',
      'CA, CPA, or equivalent qualification strongly preferred',
      'Excellent leadership and communication skills',
    ],
  },
  {
    id: 'tax-accountant',
    title: 'Tax Accountant',
    type: 'Full-Time',
    location: 'Remote (India)',
    experience: '3–6 years',
    software: ['CCH ProSystem fx', 'UltraTax CS', 'Drake Tax', 'ProConnect'],
    icon: BookOpen,
    description:
      'Handle complex US tax engagements including business returns, multi-state filings, and tax planning for US CPA firms and tax practices.',
    responsibilities: [
      'Prepare and review complex business tax returns (1120, 1120S, 1065)',
      'Handle multi-state tax filings and apportionment calculations',
      'Assist with tax planning and projections for US clients',
      'Research tax issues and document conclusions',
      'Coordinate with US tax managers and partners',
    ],
    requirements: [
      '3+ years of US business tax preparation experience',
      'Strong knowledge of federal and multi-state tax law',
      'Experience with complex entity structures (S-corps, partnerships)',
      'CA, CPA, or equivalent qualification preferred',
      'Strong analytical and research skills',
    ],
  },
  {
    id: 'payroll-specialist',
    title: 'Payroll Specialist (US)',
    type: 'Full-Time',
    location: 'Remote (India)',
    experience: '2–5 years',
    software: ['Gusto', 'ADP', 'QuickBooks Payroll', 'Paychex'],
    icon: DollarSign,
    description:
      'Process and manage US payroll for multiple clients, ensuring accuracy, compliance with federal and state payroll tax requirements, and timely filings.',
    responsibilities: [
      'Process weekly, bi-weekly, and semi-monthly US payroll runs',
      'Prepare and file 941, 940, W-2, and state payroll tax returns',
      'Manage payroll tax deposits and compliance calendars',
      'Handle new hire setup, terminations, and garnishments',
      'Reconcile payroll accounts and resolve discrepancies',
    ],
    requirements: [
      '2+ years of US payroll processing experience',
      'Proficiency in Gusto, ADP, or QuickBooks Payroll',
      'Strong knowledge of US federal and state payroll tax law',
      'Excellent attention to detail and deadline management',
      'Good written English communication skills',
    ],
  },
];

const whyJoin = [
  {
    icon: Globe,
    title: 'Work with US Clients',
    desc: 'Build genuine US accounting experience working directly with CPA firms, tax practices, and accounting companies across the United States.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    desc: 'Clear progression paths from staff to senior to manager levels. We actively promote from within and support professional development.',
  },
  {
    icon: Award,
    title: 'Competitive Compensation',
    desc: 'Market-leading salaries benchmarked against the best accounting firms in India, with performance-based increments.',
  },
  {
    icon: Monitor,
    title: 'Fully Remote',
    desc: 'Work from anywhere in India. All roles are 100% remote with flexible working arrangements aligned to US time zones.',
  },
  {
    icon: BookOpen,
    title: 'Training & Certification',
    desc: 'We support and fund professional certifications — QuickBooks ProAdvisor, US CPA exam prep, and other relevant qualifications.',
  },
  {
    icon: Users,
    title: 'Supportive Team',
    desc: 'Join a team of accounting professionals who understand your work. Regular check-ins, mentorship, and a collaborative culture.',
  },
];

const experienceLevels = ['1–2 years', '2–4 years', '4–7 years', '7–10 years', '10+ years'];
const qualifications = [
  'B.Com',
  'M.Com',
  'MBA (Finance)',
  'CA Inter',
  'CA Final / Qualified CA',
  'CPA (US)',
  'ACCA',
  'CMA',
  'Other',
];
const softwareList = [
  'QuickBooks Online',
  'QuickBooks Desktop',
  'Xero',
  'Sage',
  'NetSuite',
  'Drake Tax',
  'ProConnect',
  'UltraTax CS',
  'Lacerte',
  'CCH ProSystem fx',
  'Bill.com',
  'Dext',
  'Gusto',
  'ADP',
  'Excel (Advanced)',
];

interface AppForm {
  name: string;
  email: string;
  phone: string;
  location: string;
  qualification: string;
  experience: string;
  currentRole: string;
  appliedRole: string;
  software: string[];
  coverNote: string;
  resumeFileName: string;
}

const initialApp: AppForm = {
  name: '',
  email: '',
  phone: '',
  location: '',
  qualification: '',
  experience: '',
  currentRole: '',
  appliedRole: '',
  software: [],
  coverNote: '',
  resumeFileName: '',
};

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [applyingFor, setApplyingFor] = useState<string>('');
  const [form, setForm] = useState<AppForm>(initialApp);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const canonicalUrl = 'https://veristaffsolutions.com/careers';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Careers at VeriStaff Solutions',
    url: canonicalUrl,
    description:
      'Join VeriStaff Solutions as a US accounting professional. Remote roles in tax preparation, bookkeeping, accounting, and payroll for US clients.',
  };

  function toggleSoftware(tool: string) {
    setForm((prev) => ({
      ...prev,
      software: prev.software.includes(tool)
        ? prev.software.filter((t) => t !== tool)
        : [...prev.software, tool],
    }));
  }

  function handleApply(jobTitle: string) {
    setApplyingFor(jobTitle);
    setForm({ ...initialApp, appliedRole: jobTitle });
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <>
      <Helmet>
        <title>Careers at VeriStaff Solutions | US Accounting Jobs for Indian Professionals</title>
        <meta
          name="description"
          content="Join VeriStaff Solutions — remote US accounting jobs for Indian professionals. Roles in tax preparation, bookkeeping, senior accounting, and payroll for US CPA firms."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Careers at VeriStaff Solutions" />
        <meta
          property="og:description"
          content="Remote US accounting roles for Indian professionals. Tax preparers, bookkeepers, senior accountants, and more."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/airo-assets/images/pages/careers/hero"
            alt=""
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-[#0A1628]/60" />
        </div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
                <div className="w-8 h-px bg-[#C8922A]" />
                Careers
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Build Your US Accounting Career —{' '}
                <span className="text-[#C8922A]">From India</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Join a team of accounting professionals working with leading US CPA firms, tax practices, and accounting companies. 100% remote. Competitive pay. Real US accounting experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#open-roles"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8922A] hover:bg-[#b07d24] text-white font-semibold rounded text-sm transition-colors duration-200"
                >
                  View Open Roles <ArrowRight size={15} />
                </a>
                <a
                  href="#application-form"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold rounded text-sm transition-colors duration-200"
                >
                  Apply Now
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '6+', label: 'Open Positions', sub: 'Hiring now' },
                  { value: '100%', label: 'Remote Roles', sub: 'Work from India' },
                  { value: 'US', label: 'Client Exposure', sub: 'CPA & tax firms' },
                  { value: 'Top', label: 'Compensation', sub: 'Market-leading pay' },
                ].map(({ value, label, sub }, i) => (
                  <FadeIn key={label} delay={0.1 + i * 0.07}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors duration-200">
                      <div className="font-heading text-2xl font-bold text-[#C8922A] mb-1">{value}</div>
                      <p className="text-white font-semibold text-sm">{label}</p>
                      <p className="text-white/40 text-xs mt-0.5">{sub}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ────────────────────────────────────────────────────── */}
      <div className="bg-[#F1F4F8] border-b border-[#DDE3EC]">
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-[#5A6A7E]">
            <Link to="/" className="hover:text-[#1E4D8C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">Careers</span>
          </nav>
        </div>
      </div>

      {/* ── WHY JOIN US ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              Why VeriStaff
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              Why Accounting Professionals Choose Us
            </h2>
            <p className="text-[#5A6A7E] max-w-xl mx-auto leading-relaxed">
              We place you with US firms that value your expertise, pay competitively, and offer real career growth — not just a job.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyJoin.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.06}>
                <div className="bg-[#F8FAFC] border border-[#DDE3EC] rounded-xl p-6 hover:border-[#1E4D8C]/30 hover:shadow-sm transition-all duration-200 h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#0A1628] flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#C8922A]" />
                  </div>
                  <h3 className="font-heading font-bold text-[#0A1628] text-base mb-2">{title}</h3>
                  <p className="text-[#5A6A7E] text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMPLOYEE QUOTE ────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0A1628]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: 'Working with US clients through VeriStaff has been the best career decision I\'ve made. I\'ve learned more in two years here than in my previous five years combined. The exposure to complex US tax returns is unmatched.',
                name: 'Priya S.',
                role: 'Senior Tax Accountant',
                years: '3 years with VeriStaff',
              },
              {
                quote: 'The fully remote setup and the quality of US clients we work with is exceptional. My communication skills, technical knowledge, and confidence have all grown significantly. I\'m now managing a team of four.',
                name: 'Rahul M.',
                role: 'Accounting Manager',
                years: '4 years with VeriStaff',
              },
            ].map(({ quote, name, role, years }, i) => (
              <FadeIn key={name} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                  <Quote size={24} className="text-[#C8922A]/40 mb-4" />
                  <p className="text-white/70 text-sm leading-relaxed italic mb-6">"{quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#C8922A]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#C8922A] font-bold text-sm font-heading">{name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{name}</p>
                      <p className="text-white/50 text-xs">{role} · {years}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={11} className="text-[#C8922A] fill-[#C8922A]" />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ────────────────────────────────────────────────────── */}
      <section id="open-roles" className="py-24 bg-[#F1F4F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              Open Positions
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              Current Openings
            </h2>
            <p className="text-[#5A6A7E] max-w-xl mx-auto">
              All roles are fully remote, based in India, and serve US accounting clients. Click any role to see full details.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {jobs.map((job, i) => {
              const Icon = job.icon;
              const isOpen = expandedJob === job.id;
              return (
                <FadeIn key={job.id} delay={i * 0.05}>
                  <div className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#1E4D8C]/40 shadow-lg' : 'border-[#DDE3EC] hover:border-[#1E4D8C]/20 hover:shadow-md'}`}>
                    {/* Job header — always visible */}
                    <button
                      onClick={() => setExpandedJob(isOpen ? null : job.id)}
                      className="w-full text-left"
                    >
                      <div className="flex items-center gap-5 p-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${isOpen ? 'bg-[#0A1628]' : 'bg-[#F1F4F8]'}`}>
                          <Icon size={20} className={isOpen ? 'text-[#C8922A]' : 'text-[#1E4D8C]'} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="font-heading font-bold text-[#0A1628] text-base">{job.title}</h3>
                            {job.badge && (
                              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${job.badge === 'Urgent' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-700'}`}>
                                {job.badge}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-3 text-xs text-[#5A6A7E]">
                            <span className="flex items-center gap-1"><Briefcase size={11} />{job.type}</span>
                            <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
                            <span className="flex items-center gap-1"><Clock size={11} />{job.experience}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="hidden sm:flex flex-wrap gap-1.5">
                            {job.software.slice(0, 2).map((s) => (
                              <span key={s} className="px-2 py-0.5 bg-[#F1F4F8] text-[#5A6A7E] text-xs rounded font-medium">{s}</span>
                            ))}
                            {job.software.length > 2 && (
                              <span className="px-2 py-0.5 bg-[#F1F4F8] text-[#5A6A7E] text-xs rounded font-medium">+{job.software.length - 2}</span>
                            )}
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={18} className="text-[#5A6A7E]" />
                          </motion.div>
                        </div>
                      </div>
                    </button>

                    {/* Expanded details */}
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' as const }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="border-t border-[#DDE3EC]">
                        <div className="grid lg:grid-cols-3 gap-0">
                          {/* Description + responsibilities */}
                          <div className="lg:col-span-2 p-7 border-b lg:border-b-0 lg:border-r border-[#DDE3EC]">
                            <p className="text-[#5A6A7E] text-sm leading-relaxed mb-6">{job.description}</p>

                            <div className="grid sm:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-3">Key Responsibilities</h4>
                                <ul className="space-y-2">
                                  {job.responsibilities.map((r) => (
                                    <li key={r} className="flex items-start gap-2">
                                      <CheckCircle2 size={12} className="text-[#C8922A] shrink-0 mt-0.5" />
                                      <span className="text-[#5A6A7E] text-xs leading-relaxed">{r}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-3">Requirements</h4>
                                <ul className="space-y-2">
                                  {job.requirements.map((r) => (
                                    <li key={r} className="flex items-start gap-2">
                                      <CheckCircle2 size={12} className="text-[#1E4D8C] shrink-0 mt-0.5" />
                                      <span className="text-[#5A6A7E] text-xs leading-relaxed">{r}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Software + CTA */}
                          <div className="p-7 bg-[#F8FAFC] flex flex-col gap-5">
                            <div>
                              <h4 className="text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-3">Software Required</h4>
                              <div className="flex flex-wrap gap-1.5">
                                {job.software.map((s) => (
                                  <span key={s} className="px-2.5 py-1 bg-white border border-[#DDE3EC] text-[#0A1628] text-xs rounded font-medium">{s}</span>
                                ))}
                              </div>
                            </div>
                            <div className="mt-auto">
                              <button
                                onClick={() => handleApply(job.title)}
                                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#C8922A] hover:bg-[#b07d24] text-white text-sm font-semibold rounded transition-colors duration-200"
                              >
                                Apply for This Role <ArrowRight size={14} />
                              </button>
                              <p className="text-[#5A6A7E] text-xs text-center mt-2">
                                We respond to all applications within 48 hours
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* General application nudge */}
          <FadeIn delay={0.1}>
            <div className="mt-6 bg-[#0A1628] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white font-semibold text-sm mb-1">Don't see the right role?</p>
                <p className="text-white/50 text-xs">Submit a general application and we'll reach out when a matching position opens.</p>
              </div>
              <button
                onClick={() => handleApply('General Application')}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 text-sm font-semibold rounded transition-colors duration-200 whitespace-nowrap shrink-0"
              >
                Submit General Application <ArrowRight size={14} />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── APPLICATION FORM ──────────────────────────────────────────────── */}
      <section id="application-form" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              Apply Now
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {applyingFor ? `Applying for: ${applyingFor}` : 'Submit Your Application'}
            </h2>
            <p className="text-[#5A6A7E] max-w-xl mx-auto">
              Fill in your details below. We review every application and respond within 48 hours.
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-[#F8FAFC] border border-[#DDE3EC] rounded-2xl p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={30} className="text-green-500" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#0A1628] mb-3">
                  Application Submitted!
                </h3>
                <p className="text-[#5A6A7E] text-sm leading-relaxed mb-2 max-w-md mx-auto">
                  Thank you, <strong>{form.name || 'there'}</strong>. We've received your application
                  {form.appliedRole ? <> for <strong>{form.appliedRole}</strong></> : ''}.
                </p>
                <p className="text-[#5A6A7E] text-sm leading-relaxed mb-8 max-w-md mx-auto">
                  Our team will review your profile and reach out within <strong>48 hours</strong> if your experience matches our current openings.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => { setForm(initialApp); setSubmitted(false); setApplyingFor(''); }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A1628] hover:bg-[#1E4D8C] text-white font-semibold rounded text-sm transition-colors duration-200"
                  >
                    Submit Another Application
                  </button>
                  <a
                    href="#open-roles"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#DDE3EC] hover:border-[#1E4D8C] text-[#0A1628] font-semibold rounded text-sm transition-colors duration-200"
                  >
                    View All Open Roles
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Details */}
                <div className="bg-[#F8FAFC] border border-[#DDE3EC] rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 rounded-full bg-[#0A1628] text-white text-xs font-bold flex items-center justify-center font-heading">1</div>
                    <h3 className="font-heading text-base font-bold text-[#0A1628]">Personal Details</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] bg-white focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
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
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] bg-white focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
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
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] bg-white focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        City / Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        placeholder="e.g. Ahmedabad, Mumbai, Pune"
                        className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] bg-white focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Details */}
                <div className="bg-[#F8FAFC] border border-[#DDE3EC] rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 rounded-full bg-[#0A1628] text-white text-xs font-bold flex items-center justify-center font-heading">2</div>
                    <h3 className="font-heading text-base font-bold text-[#0A1628]">Professional Background</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        Highest Qualification <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={form.qualification}
                          onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                          className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] bg-white appearance-none focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                        >
                          <option value="">Select qualification</option>
                          {qualifications.map((q) => <option key={q} value={q}>{q}</option>)}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A6A7E] pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        Years of US Accounting Experience <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={form.experience}
                          onChange={(e) => setForm({ ...form, experience: e.target.value })}
                          className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] bg-white appearance-none focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                        >
                          <option value="">Select experience</option>
                          {experienceLevels.map((l) => <option key={l} value={l}>{l}</option>)}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A6A7E] pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        Current / Most Recent Role
                      </label>
                      <input
                        type="text"
                        value={form.currentRole}
                        onChange={(e) => setForm({ ...form, currentRole: e.target.value })}
                        placeholder="e.g. Senior Accountant at XYZ Firm"
                        className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] bg-white focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        Role Applying For <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={form.appliedRole}
                          onChange={(e) => setForm({ ...form, appliedRole: e.target.value })}
                          className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] bg-white appearance-none focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                        >
                          <option value="">Select a role</option>
                          {jobs.map((j) => <option key={j.id} value={j.title}>{j.title}</option>)}
                          <option value="General Application">General Application</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A6A7E] pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Software Skills */}
                <div className="bg-[#F8FAFC] border border-[#DDE3EC] rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#0A1628] text-white text-xs font-bold flex items-center justify-center font-heading">3</div>
                    <h3 className="font-heading text-base font-bold text-[#0A1628]">Software Proficiency</h3>
                  </div>
                  <p className="text-[#5A6A7E] text-sm mb-5 ml-10">Select all software you are proficient in.</p>
                  <div className="flex flex-wrap gap-2">
                    {softwareList.map((tool) => {
                      const selected = form.software.includes(tool);
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

                {/* Cover Note + Resume */}
                <div className="bg-[#F8FAFC] border border-[#DDE3EC] rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 rounded-full bg-[#0A1628] text-white text-xs font-bold flex items-center justify-center font-heading">4</div>
                    <h3 className="font-heading text-base font-bold text-[#0A1628]">Cover Note & Resume</h3>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        Cover Note <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={form.coverNote}
                        onChange={(e) => setForm({ ...form, coverNote: e.target.value })}
                        placeholder="Tell us about your US accounting experience, the types of clients you've worked with, and why you want to join VeriStaff Solutions..."
                        className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] bg-white focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        Resume / CV
                      </label>
                      <label className="flex items-center gap-4 px-5 py-4 border-2 border-dashed border-[#DDE3EC] rounded-xl cursor-pointer hover:border-[#1E4D8C]/40 hover:bg-white transition-all duration-200 group">
                        <div className="w-10 h-10 rounded-lg bg-[#F1F4F8] group-hover:bg-[#E8EEF6] flex items-center justify-center shrink-0 transition-colors">
                          <Upload size={18} className="text-[#1E4D8C]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          {form.resumeFileName ? (
                            <p className="text-[#0A1628] text-sm font-medium truncate">{form.resumeFileName}</p>
                          ) : (
                            <>
                              <p className="text-[#0A1628] text-sm font-medium">Upload your resume</p>
                              <p className="text-[#5A6A7E] text-xs mt-0.5">PDF, DOC, or DOCX — max 5MB</p>
                            </>
                          )}
                        </div>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) setForm({ ...form, resumeFileName: file.name });
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-[#C8922A] hover:bg-[#b07d24] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl text-sm transition-colors duration-200"
                >
                  {submitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' as const }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Submit Application
                    </>
                  )}
                </button>
                <p className="text-[#5A6A7E] text-xs text-center -mt-2">
                  We review every application and respond within 48 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#1E4D8C]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-white mb-1">
                  Are You a US Accounting Firm Looking to Hire?
                </h2>
                <p className="text-white/60 text-sm">
                  We recruit from this same talent pool for US firms. Submit your hiring requirement today.
                </p>
              </div>
              <Link
                to="/hire-talent"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8922A] hover:bg-[#b07d24] text-white font-semibold rounded text-sm transition-colors duration-200 whitespace-nowrap shrink-0"
              >
                Submit Hiring Requirement <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
