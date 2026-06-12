import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  FileText,
  BookOpen,
  Monitor,
  Globe,
  UserCheck,
  Briefcase,
  TrendingUp,
  Clock,
  Shield,
  Award,
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

interface Service {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  whatWeDeliver: string[];
  rolesIncluded: string[];
  tools: string[];
  idealFor: string;
}

const services: Service[] = [
  {
    icon: Users,
    title: 'US Accounting Recruitment',
    tagline: 'End-to-End Hiring for All US Accounting Roles',
    description:
      'Our flagship service covers the full spectrum of US accounting recruitment — from entry-level staff accountants to senior accounting managers. Every candidate is pre-screened for US GAAP knowledge, software proficiency, and communication skills before you see their profile.',
    whatWeDeliver: [
      'Curated shortlist of 3–5 pre-screened candidates within 48 hours',
      'Detailed candidate profiles with technical assessment scores',
      'Communication and cultural fit evaluation included',
      'Reference checks completed before presentation',
      'Interview coordination and offer facilitation',
      '90-day post-placement support and replacement guarantee',
    ],
    rolesIncluded: [
      'Staff Accountant',
      'Senior Accountant',
      'Accounting Manager',
      'Controller',
      'Financial Analyst',
      'Accounting Supervisor',
    ],
    tools: ['QuickBooks', 'Xero', 'Sage', 'NetSuite', 'SAP', 'Microsoft Dynamics'],
    idealFor: 'CPA firms, Accounting firms, and Outsourcing companies of all sizes',
  },
  {
    icon: FileText,
    title: 'US Tax Talent Hiring',
    tagline: 'Experienced Tax Professionals for Every Return Type',
    description:
      'Tax season demands professionals who can hit the ground running. We recruit tax preparers and tax accountants with hands-on experience in US federal and state tax returns — individuals, corporations, partnerships, trusts, and more. No learning curve, no hand-holding.',
    whatWeDeliver: [
      'Tax software proficiency verified through practical assessments',
      'Return type experience confirmed (1040, 1120, 1065, 1041)',
      'Seasonal surge staffing available for busy season',
      'Year-round and contract-to-hire options',
      'IRS representation and tax resolution specialists available',
      'Sales tax and payroll tax specialists in our network',
    ],
    rolesIncluded: [
      'Tax Preparer',
      'Tax Accountant',
      'Tax Reviewer',
      'Tax Manager',
      'Payroll Tax Specialist',
      'Sales Tax Analyst',
    ],
    tools: ['Drake Tax', 'ProConnect', 'UltraTax CS', 'Lacerte', 'CCH ProSystem fx', 'TaxSlayer Pro'],
    idealFor: 'Tax firms, CPA firms, and accounting firms with high-volume tax practices',
  },
  {
    icon: BookOpen,
    title: 'Bookkeeping Professionals',
    tagline: 'Full-Cycle Bookkeepers Who Deliver Clean Books',
    description:
      'We recruit bookkeepers who are genuinely proficient in cloud accounting platforms — not just familiar with them. Our candidates can manage multiple client books, deliver timely reconciliations, and maintain the accuracy your clients expect.',
    whatWeDeliver: [
      'Platform proficiency tested on QBO, Xero, Wave, and others',
      'Bank reconciliation and month-end close capability confirmed',
      'AP/AR, payroll, and sales tax experience verified',
      'Multi-client management capability assessed',
      'Communication skills evaluated for client-facing roles',
      'QuickBooks ProAdvisor certified candidates available',
    ],
    rolesIncluded: [
      'Bookkeeper',
      'Senior Bookkeeper',
      'AP/AR Specialist',
      'Payroll Specialist',
      'Bookkeeping Manager',
      'Virtual Bookkeeper',
    ],
    tools: ['QuickBooks Online', 'QuickBooks Desktop', 'Xero', 'Wave', 'FreshBooks', 'Bill.com', 'Dext'],
    idealFor: 'Bookkeeping firms, CAS practices, and accounting firms with bookkeeping divisions',
  },
  {
    icon: Monitor,
    title: 'QuickBooks Online Experts',
    tagline: 'Certified QBO Specialists for Modern CAS Practices',
    description:
      'QuickBooks Online is the backbone of most modern CAS practices. We recruit QBO specialists who go beyond basic data entry — professionals who can set up clients, manage integrations, troubleshoot issues, and deliver real-time financial insights.',
    whatWeDeliver: [
      'QBO Advanced proficiency verified through practical tests',
      'QuickBooks ProAdvisor certification confirmed where applicable',
      'App integration experience (Dext, Bill.com, Gusto, etc.) assessed',
      'Client onboarding and setup capability evaluated',
      'Reporting and dashboard creation skills tested',
      'QBO Payroll experience verified',
    ],
    rolesIncluded: [
      'QBO Specialist',
      'QuickBooks ProAdvisor',
      'CAS Accountant',
      'Cloud Accounting Specialist',
      'QBO Bookkeeper',
      'QBO Trainer',
    ],
    tools: ['QuickBooks Online', 'QBO Advanced', 'QBO Payroll', 'Dext', 'Bill.com', 'Gusto', 'Hubdoc'],
    idealFor: 'CAS firms, bookkeeping firms, and CPA practices running QBO-based client services',
  },
  {
    icon: Globe,
    title: 'Remote Accounting Teams',
    tagline: 'Dedicated Offshore Teams Built for Your Firm',
    description:
      'Beyond individual placements, we help US accounting firms build dedicated offshore accounting teams — a group of professionals who work exclusively for your firm, aligned to your time zone, tools, and client service standards. Think of it as your India office, without the overhead.',
    whatWeDeliver: [
      'Team composition planning based on your workflow needs',
      'Coordinated multi-role hiring (accountant + bookkeeper + tax preparer)',
      'Team lead / supervisor placement for larger teams',
      'Onboarding support and workflow integration guidance',
      'Ongoing team performance monitoring',
      'Replacement and scaling support as your team grows',
    ],
    rolesIncluded: [
      'Accounting Team Lead',
      'Senior Accountant',
      'Staff Accountant',
      'Bookkeeper',
      'Tax Preparer',
      'Quality Reviewer',
    ],
    tools: ['QuickBooks', 'Xero', 'Karbon', 'Canopy', 'Slack', 'Microsoft Teams', 'Zoom'],
    idealFor: 'Growing CPA firms and accounting outsourcing companies looking to scale efficiently',
  },
  {
    icon: UserCheck,
    title: 'Senior Accountants & Managers',
    tagline: 'Experienced Leaders for Your Accounting Practice',
    description:
      'Senior accounting talent is the hardest to find and the most critical to get right. We recruit experienced senior accountants and accounting managers with 5–10+ years of US accounting experience — professionals who can manage client relationships, supervise junior staff, and drive quality.',
    whatWeDeliver: [
      'Minimum 5 years US accounting experience verified',
      'Client relationship management capability assessed',
      'Team leadership and supervision experience confirmed',
      'Advanced technical skills tested (financial statements, complex reconciliations)',
      'Communication and presentation skills evaluated',
      'References from US accounting firms checked',
    ],
    rolesIncluded: [
      'Senior Accountant',
      'Accounting Manager',
      'Controller',
      'Assistant Controller',
      'Accounting Supervisor',
      'Finance Manager',
    ],
    tools: ['QuickBooks', 'Xero', 'Sage Intacct', 'NetSuite', 'Excel Advanced', 'Power BI'],
    idealFor: 'Established CPA and accounting firms needing experienced leadership talent',
  },
  {
    icon: Briefcase,
    title: 'Direct Hire & Contract-to-Hire',
    tagline: 'Flexible Engagement Models for Every Hiring Need',
    description:
      'We offer flexible engagement models to match your hiring strategy. Whether you need a permanent direct hire, a contract professional for a specific project, or a contract-to-hire arrangement to evaluate fit before committing — we can structure the engagement accordingly.',
    whatWeDeliver: [
      'Direct hire placements with 90-day replacement guarantee',
      'Contract staffing for project-based or seasonal needs',
      'Contract-to-hire with structured evaluation period',
      'Clear fee structures with no hidden costs',
      'Replacement support at no additional cost within guarantee period',
      'Ongoing account management throughout the engagement',
    ],
    rolesIncluded: [
      'All accounting roles',
      'Tax professionals',
      'Bookkeepers',
      'Accounting managers',
      'Financial analysts',
      'Payroll specialists',
    ],
    tools: ['All major accounting platforms', 'Tax software', 'ERP systems', 'Cloud tools'],
    idealFor: 'Any US accounting firm — from solo practitioners to large multi-partner practices',
  },
  {
    icon: TrendingUp,
    title: 'Offshore Staffing Solutions',
    tagline: 'Scale Your Firm with Cost-Effective Offshore Talent',
    description:
      'Our offshore staffing solution gives US accounting firms access to high-quality accounting talent at 40–60% lower cost than equivalent US-based hires. We handle the entire recruitment process — sourcing, screening, assessment, and placement — so you can focus on serving your clients.',
    whatWeDeliver: [
      'Cost analysis and ROI projection for offshore hiring',
      'Role-specific talent sourcing from our India network',
      'Full screening and technical assessment process',
      'Time zone alignment and communication setup guidance',
      'Workflow integration and onboarding support',
      'Ongoing performance check-ins and replacement support',
    ],
    rolesIncluded: [
      'All accounting roles',
      'Tax preparers',
      'Bookkeepers',
      'QBO specialists',
      'Financial analysts',
      'Accounting managers',
    ],
    tools: ['All platforms', 'Remote collaboration tools', 'Time tracking tools', 'Communication tools'],
    idealFor: 'US accounting firms looking to reduce staffing costs without compromising quality',
  },
];

export default function ServicesPage() {
  const canonicalUrl = 'https://veristaffsolutions.com/services';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Our Services | VeriStaff Solutions',
    url: canonicalUrl,
    description:
      'VeriStaff Solutions offers specialized US accounting recruitment services — from individual placements to full offshore team builds for CPA, Tax, and Bookkeeping firms.',
  };

  return (
    <>
      <Helmet>
        <title>Our Services | VeriStaff Solutions — US Accounting Recruitment</title>
        <meta
          name="description"
          content="Specialized US accounting recruitment services: US Accounting Recruitment, Tax Talent Hiring, Bookkeeping Professionals, QBO Experts, Remote Teams, and Offshore Staffing. 48hr shortlist guarantee."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Our Services | VeriStaff Solutions" />
        <meta
          property="og:description"
          content="End-to-end US accounting recruitment — individual placements to full offshore team builds. 48hr shortlist, 90-day guarantee."
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
            src="/airo-assets/images/pages/services/hero"
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
              Our Services
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl">
              Specialized Recruitment Across{' '}
              <span className="text-[#C8922A]">All US Accounting Roles</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8">
              From a single staff accountant to a full offshore accounting team — we source, screen, and deliver pre-qualified candidates who understand US accounting standards and your firm's workflow.
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
            <span className="text-[#0A1628] font-medium">Our Services</span>
          </nav>
        </div>
      </div>

      {/* ── PROMISE STRIP ─────────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-[#DDE3EC]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, value: '48hr', label: 'Shortlist Delivery' },
              { icon: Shield, value: '90-Day', label: 'Replacement Guarantee' },
              { icon: Award, value: '500+', label: 'Successful Placements' },
              { icon: CheckCircle2, value: '100%', label: 'US Accounting Focus' },
            ].map(({ icon: Icon, value, label }, i) => (
              <FadeIn key={label} delay={i * 0.07}>
                <div className="flex items-center gap-4 py-2">
                  <div className="w-10 h-10 rounded-lg bg-[#F1F4F8] flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#C8922A]" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[#0A1628] text-lg leading-none">{value}</div>
                    <p className="text-[#5A6A7E] text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F1F4F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              What We Offer
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              Every Service Designed Around Your Firm's Needs
            </h2>
            <p className="text-[#5A6A7E] max-w-2xl mx-auto leading-relaxed">
              We don't offer generic staffing. Every service is built around the specific demands of US accounting practice — the tools, the workflows, the standards, and the pace.
            </p>
          </FadeIn>

          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={i * 0.04}>
                  <div className="bg-white border border-[#DDE3EC] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#1E4D8C]/20 transition-all duration-300">
                    {/* Header */}
                    <div className="bg-[#0A1628] px-8 py-6 flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-[#C8922A]" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-white">{service.title}</h3>
                        <p className="text-[#C8922A] text-sm font-medium mt-0.5">{service.tagline}</p>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Description + What We Deliver */}
                      <div className="lg:col-span-2 p-8 border-b lg:border-b-0 lg:border-r border-[#DDE3EC]">
                        <p className="text-[#5A6A7E] text-sm leading-relaxed mb-7">{service.description}</p>

                        <h4 className="text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-3">
                          What We Deliver
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {service.whatWeDeliver.map((item) => (
                            <div key={item} className="flex items-start gap-2.5">
                              <CheckCircle2 size={13} className="text-[#C8922A] shrink-0 mt-0.5" />
                              <span className="text-[#5A6A7E] text-xs leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Roles + Tools + CTA */}
                      <div className="p-8 bg-[#F8FAFC] flex flex-col gap-6">
                        <div>
                          <h4 className="text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-3">
                            Roles Included
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {service.rolesIncluded.map((role) => (
                              <span
                                key={role}
                                className="px-2.5 py-1 bg-white border border-[#DDE3EC] text-[#0A1628] text-xs rounded font-medium"
                              >
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-3">
                            Software & Tools
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {service.tools.map((tool) => (
                              <span
                                key={tool}
                                className="px-2.5 py-1 bg-[#F1F4F8] text-[#5A6A7E] text-xs rounded font-medium"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto">
                          <p className="text-xs text-[#5A6A7E] mb-3">
                            <span className="font-semibold text-[#0A1628]">Ideal for:</span>{' '}
                            {service.idealFor}
                          </p>
                          <Link
                            to="/hire-talent"
                            className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#C8922A] hover:bg-[#b07d24] text-white text-sm font-semibold rounded transition-colors duration-200"
                          >
                            Hire for This Role <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SCREENING PROCESS ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1628]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              Our Screening Standard
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Every Candidate Passes Our 5-Stage Screening Process
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We don't just source candidates — we verify them. Here's exactly what every candidate goes through before you see their profile.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Initial Screening',
                desc: 'Resume review, experience verification, and US accounting background confirmation.',
              },
              {
                step: '02',
                title: 'Technical Assessment',
                desc: 'Role-specific tests covering US GAAP, software proficiency, and practical accounting scenarios.',
              },
              {
                step: '03',
                title: 'Communication Evaluation',
                desc: 'Written and verbal English assessment to ensure effective client and team communication.',
              },
              {
                step: '04',
                title: 'Reference Checks',
                desc: 'Direct references from previous US accounting employers or supervisors verified.',
              },
              {
                step: '05',
                title: 'Profile Presentation',
                desc: 'Detailed candidate profile with scores, notes, and our recommendation delivered to you.',
              },
            ].map(({ step, title, desc }, i) => (
              <FadeIn key={step} delay={i * 0.08}>
                <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-200 h-full">
                  <div className="font-heading text-3xl font-bold text-[#C8922A]/30 mb-4">{step}</div>
                  <h3 className="font-heading font-bold text-white text-sm mb-2">{title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                  {i < 4 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight size={16} className="text-[#C8922A]/40" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#1E4D8C]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to Hire Pre-Screened US Accounting Talent?
                </h2>
                <p className="text-white/70 text-sm">
                  Submit your requirement and receive a qualified shortlist within 48 hours — at no upfront cost.
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
