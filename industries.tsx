import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  FileText,
  BookOpen,
  TrendingUp,
  Briefcase,
  Globe,
  Users,
  BarChart3,
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

interface Industry {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  roles: string[];
  tools: string[];
  highlight: string;
}

const industries: Industry[] = [
  {
    icon: Building2,
    title: 'CPA Firms',
    subtitle: 'Audit, Tax & Advisory Staffing',
    description:
      'CPA firms demand professionals who understand US GAAP, GAAS, and the full audit and tax lifecycle. We recruit accountants who have worked in or alongside CPA practices and understand the pace, precision, and client expectations that come with it.',
    roles: [
      'Staff Accountant',
      'Senior Accountant',
      'Tax Preparer',
      'Audit Associate',
      'Accounting Manager',
      'Tax Manager',
      'Controller',
    ],
    tools: ['QuickBooks', 'Xero', 'Drake Tax', 'ProConnect', 'UltraTax', 'CCH Axcess', 'Lacerte'],
    highlight: 'Most in-demand segment — 40% of our placements',
  },
  {
    icon: FileText,
    title: 'Tax Firms',
    subtitle: 'Individual, Corporate & Specialty Tax',
    description:
      'Tax season is relentless. We source experienced tax professionals who can handle 1040s, 1120s, 1065s, and trust returns without hand-holding — professionals who know US tax law, understand deadlines, and can manage high-volume return preparation.',
    roles: [
      'Tax Preparer',
      'Tax Accountant',
      'Tax Reviewer',
      'Tax Manager',
      'IRS Representation Specialist',
      'Payroll Tax Specialist',
      'Sales Tax Analyst',
    ],
    tools: ['Drake Tax', 'ProConnect Tax', 'UltraTax CS', 'Lacerte', 'TaxSlayer Pro', 'CCH ProSystem fx'],
    highlight: 'Seasonal surge staffing available',
  },
  {
    icon: BookOpen,
    title: 'Bookkeeping Firms',
    subtitle: 'Full-Cycle Bookkeeping Professionals',
    description:
      'Modern bookkeeping firms need professionals who are fluent in cloud accounting platforms, can manage multiple client books simultaneously, and deliver clean, reconciled financials on time. We recruit bookkeepers who are genuinely proficient — not just familiar.',
    roles: [
      'Bookkeeper',
      'Senior Bookkeeper',
      'Accounts Payable Specialist',
      'Accounts Receivable Specialist',
      'Payroll Specialist',
      'Bookkeeping Manager',
      'Virtual Bookkeeper',
    ],
    tools: ['QuickBooks Online', 'QuickBooks Desktop', 'Xero', 'Wave', 'FreshBooks', 'Sage', 'Bill.com'],
    highlight: 'QBO ProAdvisors available',
  },
  {
    icon: TrendingUp,
    title: 'Advisory Firms',
    subtitle: 'Financial Advisory & Consulting Talent',
    description:
      'Advisory and consulting firms need accountants who can go beyond the numbers — professionals who can analyze, interpret, and communicate financial insights to clients. We source candidates with strong analytical skills and client-facing experience.',
    roles: [
      'Financial Analyst',
      'Senior Financial Analyst',
      'FP&A Analyst',
      'Management Accountant',
      'Business Analyst',
      'CFO Support Analyst',
      'Financial Reporting Specialist',
    ],
    tools: ['Excel (Advanced)', 'Power BI', 'QuickBooks', 'Xero', 'Sage Intacct', 'NetSuite', 'Fathom'],
    highlight: 'Strong analytical & reporting talent',
  },
  {
    icon: Briefcase,
    title: 'CAS Firms',
    subtitle: 'Client Accounting Services Specialists',
    description:
      'Client Accounting Services is the fastest-growing segment in US accounting. CAS firms need professionals who are tech-savvy, proactive, and capable of delivering real-time financial insights. We recruit CAS-ready talent who understand the modern accounting firm model.',
    roles: [
      'CAS Accountant',
      'Virtual Controller',
      'Virtual CFO Support',
      'CAS Manager',
      'Cloud Accounting Specialist',
      'Financial Reporting Analyst',
      'Advisory Accountant',
    ],
    tools: ['QuickBooks Online Advanced', 'Xero', 'Sage Intacct', 'Fathom', 'Jirav', 'Spotlight Reporting', 'Dext'],
    highlight: 'Fastest-growing niche we serve',
  },
  {
    icon: Globe,
    title: 'Accounting Outsourcing Companies',
    subtitle: 'Scalable Offshore Accounting Teams',
    description:
      'Accounting BPO and outsourcing companies need to scale quickly, maintain quality across multiple client accounts, and manage high-volume work efficiently. We provide scalable talent solutions — from individual hires to full team builds — for outsourcing operations.',
    roles: [
      'Accounting Associate',
      'Senior Accountant',
      'Team Lead',
      'Quality Reviewer',
      'Process Trainer',
      'Accounting Manager',
      'Operations Supervisor',
    ],
    tools: ['QuickBooks', 'Xero', 'Sage', 'NetSuite', 'SAP', 'Oracle', 'Microsoft Dynamics'],
    highlight: 'Bulk hiring & team builds available',
  },
  {
    icon: BarChart3,
    title: 'Virtual CFO Firms',
    subtitle: 'Fractional & Virtual CFO Support',
    description:
      'Virtual CFO firms need accountants who can support high-level financial strategy — cash flow forecasting, budgeting, KPI reporting, and board-level presentations. We recruit professionals with the analytical depth and communication skills to support vCFO engagements.',
    roles: [
      'Financial Analyst',
      'FP&A Specialist',
      'Management Accountant',
      'Budget Analyst',
      'Cash Flow Analyst',
      'Financial Reporting Specialist',
      'vCFO Support Accountant',
    ],
    tools: ['Excel', 'Power BI', 'Tableau', 'Fathom', 'Jirav', 'Sage Intacct', 'QuickBooks Online'],
    highlight: 'Strong FP&A talent pool',
  },
  {
    icon: Users,
    title: 'General Accounting Firms',
    subtitle: 'Full-Service Accounting Firm Staffing',
    description:
      'Full-service accounting firms handling a mix of bookkeeping, tax, payroll, and advisory services need versatile professionals who can wear multiple hats. We recruit well-rounded accountants who can adapt to diverse client needs and firm workflows.',
    roles: [
      'General Accountant',
      'Staff Accountant',
      'Senior Accountant',
      'Payroll Accountant',
      'Tax & Bookkeeping Specialist',
      'Accounting Supervisor',
      'Accounting Manager',
    ],
    tools: ['QuickBooks', 'Xero', 'Sage', 'Drake', 'ProConnect', 'ADP', 'Gusto'],
    highlight: 'Versatile multi-role talent',
  },
];

export default function IndustriesPage() {
  const canonicalUrl = 'https://veristaffsolutions.com/industries';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Industries We Serve | VeriStaff Solutions',
    url: canonicalUrl,
    description:
      'VeriStaff Solutions serves CPA firms, Tax firms, Bookkeeping firms, Advisory firms, CAS firms, and Accounting Outsourcing companies with specialized US accounting recruitment.',
  };

  return (
    <>
      <Helmet>
        <title>Industries We Serve | VeriStaff Solutions — US Accounting Recruitment</title>
        <meta
          name="description"
          content="VeriStaff Solutions serves CPA firms, Tax firms, Bookkeeping firms, CAS firms, Advisory firms, and Accounting Outsourcing companies with specialized US accounting recruitment from India."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Industries We Serve | VeriStaff Solutions" />
        <meta
          property="og:description"
          content="Specialized US accounting recruitment for CPA, Tax, Bookkeeping, CAS, Advisory, and Outsourcing firms."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/airo-assets/images/pages/industries/hero"
            alt=""
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-[#0A1628]/70" />
        </div>
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
              Industries We Serve
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl">
              Built for Every Type of{' '}
              <span className="text-[#C8922A]">US Accounting Firm</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8">
              From solo CPA practices to large accounting outsourcing companies, we understand the unique staffing needs of each segment of the US accounting industry — and we recruit accordingly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/hire-talent"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8922A] hover:bg-[#b07d24] text-white font-semibold rounded text-sm transition-colors duration-200"
              >
                Submit Hiring Requirement <ArrowRight size={15} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold rounded text-sm transition-colors duration-200"
              >
                Talk to a Specialist
              </Link>
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
            <span className="text-[#0A1628] font-medium">Industries We Serve</span>
          </nav>
        </div>
      </div>

      {/* ── INTRO STRIP ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-[#DDE3EC]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '8+', label: 'Industry Segments Served' },
              { value: '50+', label: 'US Firms Placed With' },
              { value: '500+', label: 'Successful Placements' },
              { value: '100%', label: 'US Accounting Focus' },
            ].map(({ value, label }, i) => (
              <FadeIn key={label} delay={i * 0.08}>
                <div className="py-4">
                  <div className="font-heading text-3xl font-bold text-[#0A1628] mb-1">{value}</div>
                  <p className="text-[#5A6A7E] text-sm">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CARDS ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F1F4F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              Industry Expertise
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              Deep Expertise Across Every US Accounting Niche
            </h2>
            <p className="text-[#5A6A7E] max-w-2xl mx-auto leading-relaxed">
              Each industry segment has unique staffing needs. We've built specialized talent pipelines and screening processes for each one.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <FadeIn key={industry.title} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white border border-[#DDE3EC] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#1E4D8C]/20 transition-all duration-300"
                  >
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Left: Main Info */}
                      <div className="lg:col-span-2 p-8 border-b lg:border-b-0 lg:border-r border-[#DDE3EC]">
                        <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-xl bg-[#0A1628] flex items-center justify-center shrink-0">
                            <Icon size={22} className="text-[#C8922A]" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-1">
                              <h3 className="font-heading text-xl font-bold text-[#0A1628]">
                                {industry.title}
                              </h3>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#C8922A]/10 text-[#C8922A] text-xs font-semibold">
                                {industry.highlight}
                              </span>
                            </div>
                            <p className="text-[#1E4D8C] text-sm font-medium mb-3">{industry.subtitle}</p>
                            <p className="text-[#5A6A7E] text-sm leading-relaxed mb-5">
                              {industry.description}
                            </p>
                            <div>
                              <p className="text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-2">
                                Roles We Recruit
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {industry.roles.map((role) => (
                                  <span
                                    key={role}
                                    className="inline-flex items-center gap-1 px-3 py-1 bg-[#F1F4F8] text-[#0A1628] text-xs font-medium rounded-full"
                                  >
                                    <CheckCircle2 size={10} className="text-[#C8922A]" />
                                    {role}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Tools + CTA */}
                      <div className="p-8 flex flex-col justify-between bg-[#F8FAFC]">
                        <div>
                          <p className="text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-3">
                            Software & Tools
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {industry.tools.map((tool) => (
                              <span
                                key={tool}
                                className="px-2.5 py-1 bg-white border border-[#DDE3EC] text-[#5A6A7E] text-xs rounded font-medium"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Link
                          to="/hire-talent"
                          className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#0A1628] hover:bg-[#1E4D8C] text-white text-sm font-semibold rounded transition-colors duration-200"
                        >
                          Hire for {industry.title} <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY NICHE MATTERS ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1628]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
                <div className="w-8 h-px bg-[#C8922A]" />
                Why Niche Matters
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Industry-Specific Recruitment Delivers Better Results
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                A generalist recruiter who places accountants alongside warehouse workers and nurses doesn't understand the difference between a 1040 and a 1120, or why QuickBooks Online proficiency matters more than QuickBooks Desktop for a CAS firm. We do — and that knowledge translates directly into better hires for your firm.
              </p>
              <div className="space-y-4">
                {[
                  'Candidates pre-screened for your specific firm type',
                  'Recruiters who understand your software stack and workflows',
                  'Faster shortlisting because we know exactly what to look for',
                  'Lower mis-hire risk through industry-specific technical assessments',
                  'Better cultural fit — candidates who understand US firm culture',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-[#C8922A] shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '48hr', label: 'Average Shortlist Delivery', sub: 'From requirement to candidates' },
                  { value: '95%', label: 'Client Satisfaction Rate', sub: 'Based on post-placement surveys' },
                  { value: '90-day', label: 'Replacement Guarantee', sub: 'On every placement we make' },
                  { value: '1,000+', label: 'Active Candidates', sub: 'Pre-screened & ready to place' },
                ].map(({ value, label, sub }, i) => (
                  <FadeIn key={label} delay={i * 0.08}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-200">
                      <div className="font-heading text-2xl font-bold text-[#C8922A] mb-1">{value}</div>
                      <p className="text-white font-semibold text-sm mb-1">{label}</p>
                      <p className="text-white/40 text-xs">{sub}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#1E4D8C]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                  Don't See Your Firm Type Listed?
                </h2>
                <p className="text-white/70 text-sm">
                  We recruit for all US accounting and finance roles. Contact us and we'll tell you exactly how we can help.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  to="/hire-talent"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C8922A] hover:bg-[#b07d24] text-white font-semibold rounded text-sm transition-colors duration-200 whitespace-nowrap"
                >
                  Submit Hiring Requirement <ArrowRight size={15} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/40 hover:border-white/70 text-white hover:bg-white/10 font-semibold rounded text-sm transition-colors duration-200 whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
