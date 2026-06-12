import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Building2,
  Clock,
  TrendingUp,
  Shield,
  Target,
  Award,
  Zap,
  HeartHandshake,
  ChevronRight,
} from 'lucide-react';

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Fade-in wrapper ──────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
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

// ─── Service Card ─────────────────────────────────────────────────────────────
interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
}
function ServiceCard({ title, description, className = '' }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(10,22,40,0.15)' }}
      transition={{ duration: 0.2 }}
      className={`bg-white border border-[#DDE3EC] rounded-xl p-7 group cursor-pointer ${className}`}
    >
      <div className="w-1 h-10 bg-[#C8922A] rounded-full mb-5 group-hover:h-14 transition-all duration-300" />
      <h3 className="font-heading text-lg font-bold text-[#0A1628] mb-2 leading-snug">{title}</h3>
      <p className="text-[#5A6A7E] text-sm leading-relaxed">{description}</p>
      <div className="mt-5 flex items-center gap-1.5 text-[#C8922A] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Learn more <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VeriStaff Solutions',
    url: 'https://veristaffsolutions.com',
    description: 'Specialized US accounting recruitment firm connecting CPA firms with pre-screened accounting professionals from India.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'B-301, Shrut Ratnakar',
      addressLocality: 'Ahmedabad',
      postalCode: '380007',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    telephone: '+917600841538',
    sameAs: [],
  };

  return (
    <>
      <Helmet>
        <title>VeriStaff Solutions | Hire Pre-Screened US Accounting Professionals from India</title>
        <meta
          name="description"
          content="VeriStaff Solutions specializes in US accounting recruitment — connecting CPA firms, Tax firms, and Bookkeeping firms with top-tier accounting professionals from India. 500+ placements, 48hr shortlist."
        />
        <meta name="keywords" content="US Accounting Recruitment, CPA Firm Staffing, Offshore Accounting Talent, US Tax Recruitment, Bookkeeping Recruitment, QuickBooks Recruitment, Accounting Staffing India, Remote Accounting Team" />
        <meta property="og:title" content="VeriStaff Solutions | US Accounting Recruitment from India" />
        <meta property="og:description" content="Hire pre-screened US accounting professionals from India. Specialized recruitment for CPA, Tax, and Bookkeeping firms." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] overflow-hidden min-h-[90vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/airo-assets/images/pages/home/hero"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/60" />
        </div>

        {/* Subtle geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative container mx-auto px-4 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Headline */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' as const }}
              >
                <div className="inline-flex items-center gap-2 bg-[#C8922A]/20 border border-[#C8922A]/30 rounded-full px-4 py-1.5 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C8922A]" />
                  <span className="text-[#C8922A] text-xs font-semibold tracking-wide uppercase">
                    Specialized US Accounting Recruitment
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' as const }}
                className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6"
              >
                Hire Pre-Screened{' '}
                <span className="text-[#C8922A]">US Accounting</span>{' '}
                Professionals from India
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' as const }}
                className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl"
              >
                We connect US CPA firms, Tax firms, and Accounting firms with highly skilled, pre-screened accounting professionals from India — reducing hiring costs while maintaining the quality your clients expect.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' as const }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/hire-talent"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C8922A] hover:bg-[#b07d24] text-white font-semibold rounded transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
                >
                  Hire Top Accounting Talent
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold rounded transition-all duration-200 text-sm"
                >
                  Schedule a Consultation
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="mt-10 flex flex-wrap gap-5"
              >
                {['US GAAP Experts', 'QuickBooks Certified', 'Tax Season Ready', 'CPA Workflow Trained'].map((tag) => (
                  <div key={tag} className="flex items-center gap-1.5 text-white/50 text-xs">
                    <CheckCircle2 size={13} className="text-[#C8922A]" />
                    {tag}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Stats Credibility Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' as const }}
              className="hidden lg:block"
            >
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-8">
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-6">
                  Proven Track Record
                </p>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { value: 500, suffix: '+', label: 'Successful Placements', icon: Users },
                    { value: 50, suffix: '+', label: 'CPA Firms Served', icon: Building2 },
                    { value: 5, suffix: '+', label: 'Years of Expertise', icon: Award },
                    { value: 48, suffix: 'hr', label: 'Candidate Shortlist', icon: Clock },
                  ].map(({ value, suffix, label, icon: Icon }) => (
                    <div
                      key={label}
                      className="bg-white/8 border border-white/10 rounded-xl p-5 hover:bg-white/12 transition-colors duration-200"
                    >
                      <Icon size={18} className="text-[#C8922A] mb-3" />
                      <div className="font-heading text-3xl font-bold text-white mb-1">
                        <AnimatedCounter end={value} suffix={suffix} />
                      </div>
                      <p className="text-white/50 text-xs leading-snug">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/60 text-xs leading-relaxed">
                    Founded by professionals with <strong className="text-white/80">5+ years US Accounting</strong> and <strong className="text-white/80">3 years recruitment leadership</strong> experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile stats row */}
          <div className="lg:hidden mt-12 grid grid-cols-2 gap-3">
            {[
              { value: 500, suffix: '+', label: 'Placements' },
              { value: 50, suffix: '+', label: 'CPA Firms' },
              { value: 5, suffix: '+', label: 'Years Exp.' },
              { value: 48, suffix: 'hr', label: 'Shortlist' },
            ].map(({ value, suffix, label }) => (
              <div key={label} className="bg-white/8 border border-white/15 rounded-xl p-4 text-center">
                <div className="font-heading text-2xl font-bold text-white">
                  <AnimatedCounter end={value} suffix={suffix} />
                </div>
                <p className="text-white/50 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
                <div className="w-8 h-px bg-[#C8922A]" />
                About VeriStaff Solutions
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-6">
                We Speak Your Language —{' '}
                <span className="text-[#1E4D8C]">US GAAP, QuickBooks, Tax Season, CPA Workflows</span>
              </h2>
              <p className="text-[#5A6A7E] leading-relaxed mb-5">
                VeriStaff Solutions was founded by professionals who have worked in US accounting and led recruitment teams — which means we understand exactly what your firm needs before you even finish explaining it.
              </p>
              <p className="text-[#5A6A7E] leading-relaxed mb-8">
                We're not a generalist staffing agency. We are exclusively focused on US Accounting and Finance talent, serving CPA firms, Tax firms, Bookkeeping firms, and Accounting Outsourcing companies that need skilled professionals who can hit the ground running.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'US GAAP & GAAS Knowledge',
                  'QuickBooks & Xero Proficiency',
                  'Tax Season Experience',
                  'CPA Firm Workflows',
                  'Client Accounting Services',
                  'Payroll & Bookkeeping',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[#C8922A] shrink-0 mt-0.5" />
                    <span className="text-[#0A1628] text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#1E4D8C] font-semibold text-sm hover:text-[#C8922A] transition-colors duration-200"
              >
                Learn more about us <ArrowRight size={15} />
              </Link>
            </FadeIn>

            {/* Right: Image */}
            <FadeIn delay={0.15}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/airo-assets/images/pages/home/about"
                    alt="VeriStaff Solutions — professional partnership"
                    className="w-full h-[420px] object-cover"
                    loading="lazy"
                    width={800}
                    height={420}
                  />
                </div>
                {/* Floating credential badge */}
                <div className="absolute -bottom-6 -left-6 bg-[#0A1628] text-white rounded-xl p-5 shadow-xl max-w-[200px]">
                  <div className="font-heading text-2xl font-bold text-[#C8922A] mb-1">5+</div>
                  <p className="text-white/70 text-xs leading-snug">Years of US Accounting & Recruitment Expertise</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F1F4F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              What We Do
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              Specialized Recruitment Across All US Accounting Roles
            </h2>
            <p className="text-[#5A6A7E] max-w-2xl mx-auto leading-relaxed">
              From staff accountants to accounting managers, we source, screen, and deliver pre-qualified candidates who understand US accounting standards and your firm's workflow.
            </p>
          </FadeIn>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FadeIn delay={0.05} className="lg:col-span-2">
              <ServiceCard
                title="US Accounting Recruitment"
                description="End-to-end recruitment for all US accounting roles — from staff accountants to controllers. We source candidates with hands-on US GAAP experience, familiar with US client workflows, tax deadlines, and reporting standards."
                className="h-full"
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ServiceCard
                title="US Tax Talent Hiring"
                description="Recruit experienced tax professionals — individual, corporate, partnership, and trust returns. Candidates trained in Drake, ProConnect, UltraTax, and Lacerte."
                className="h-full"
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ServiceCard
                title="Bookkeeping Professionals"
                description="Hire skilled bookkeepers proficient in QuickBooks Online, Xero, and Wave. Experienced in bank reconciliations, AP/AR, payroll, and month-end close."
                className="h-full"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <ServiceCard
                title="QuickBooks Online Experts"
                description="Certified QuickBooks ProAdvisors and QBO specialists for your CAS practice. Experienced in QBO Advanced, payroll, and client onboarding workflows."
                className="h-full"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <ServiceCard
                title="Remote Accounting Teams"
                description="Build a dedicated offshore accounting team that works as an extension of your firm — aligned to your time zone, tools, and client service standards."
                className="h-full"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <ServiceCard
                title="Senior Accountants & Managers"
                description="Recruit experienced senior accountants and accounting managers with 5–10+ years of US accounting experience, capable of managing client relationships and junior staff."
                className="h-full"
              />
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-2">
              <ServiceCard
                title="Offshore Staffing & Direct Hire"
                description="Whether you need a single hire or a full offshore team, we offer flexible engagement models — direct hire, contract-to-hire, and dedicated offshore staffing. All candidates are pre-screened, technically assessed, and ready to contribute from day one."
                className="h-full"
              />
            </FadeIn>
            <FadeIn delay={0.25}>
              <ServiceCard
                title="Staff Accountants"
                description="Entry to mid-level accountants with strong fundamentals in US accounting, ready for bookkeeping, reconciliations, and financial statement preparation."
                className="h-full"
              />
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0A1628] hover:bg-[#1E4D8C] text-white font-semibold rounded text-sm transition-colors duration-200"
            >
              View All Services <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#1E4D8C 1px, transparent 1px), linear-gradient(90deg, #1E4D8C 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              Our Advantage
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              Why US Accounting Firms Choose VeriStaff
            </h2>
            <p className="text-[#5A6A7E] max-w-2xl mx-auto">
              We're not just a staffing agency — we're a specialized recruitment partner who understands the unique demands of US accounting practice.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Specialized in US Accounting Recruitment',
                description: 'We focus exclusively on US accounting and finance talent — no generalist approach. Every recruiter on our team understands US GAAP, tax workflows, and CPA firm operations.',
              },
              {
                icon: Shield,
                title: 'Access to Pre-Screened Candidates',
                description: 'Every candidate goes through a rigorous multi-stage screening process before you ever see their profile — technical assessment, communication evaluation, and reference checks included.',
              },
              {
                icon: Zap,
                title: 'Faster Hiring Process',
                description: 'Our deep talent pipeline means we can deliver a qualified shortlist within 48 hours of receiving your requirement — dramatically reducing your time-to-hire.',
              },
              {
                icon: TrendingUp,
                title: 'Cost-Effective Offshore Talent',
                description: 'Hire experienced US accounting professionals from India at 40–60% lower cost than equivalent US-based hires, without compromising on quality or technical competency.',
              },
              {
                icon: CheckCircle2,
                title: 'Strong Technical Assessment Process',
                description: 'Candidates are tested on US accounting principles, software proficiency (QuickBooks, Xero, tax software), and practical scenarios before being presented to you.',
              },
              {
                icon: Award,
                title: 'Industry-Specific Recruitment Expertise',
                description: 'Our founders have worked in US accounting and led recruitment teams — giving us an insider perspective that generic staffing firms simply cannot match.',
              },
              {
                icon: Users,
                title: 'High Quality Talent Pool',
                description: 'We maintain an active network of 1,000+ pre-qualified US accounting professionals in India, continuously updated and assessed for current market readiness.',
              },
              {
                icon: HeartHandshake,
                title: 'Dedicated Client Support',
                description: 'You get a dedicated account manager who understands your firm\'s culture, workflow, and hiring preferences — ensuring every placement is the right fit.',
              },
            ].map(({ icon: Icon, title, description }, i) => (
              <FadeIn key={title} delay={i * 0.07}>
                <div className="flex gap-5 p-6 rounded-xl border border-[#DDE3EC] hover:border-[#1E4D8C]/30 hover:shadow-md transition-all duration-300 bg-white group">
                  <div className="w-11 h-11 rounded-lg bg-[#F1F4F8] group-hover:bg-[#0A1628] flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon size={20} className="text-[#1E4D8C] group-hover:text-[#C8922A] transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#0A1628] mb-2 text-base">{title}</h3>
                    <p className="text-[#5A6A7E] text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECRUITMENT PROCESS ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1628]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              How It Works
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Our Recruitment Process
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A structured, transparent process designed to deliver the right candidate — fast.
            </p>
          </FadeIn>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-[#C8922A]/20 via-[#C8922A]/60 to-[#C8922A]/20" />

              <div className="grid grid-cols-5 gap-4">
                {[
                  { step: '01', title: 'Understand Requirements', desc: 'Deep-dive call to understand your firm, role, tech stack, and ideal candidate profile.' },
                  { step: '02', title: 'Source & Screen', desc: 'We search our talent network and conduct initial screening — skills, communication, and culture fit.' },
                  { step: '03', title: 'Technical Assessment', desc: 'Candidates complete role-specific technical tests covering US accounting, software, and practical scenarios.' },
                  { step: '04', title: 'Shortlist Delivery', desc: 'You receive a curated shortlist of 3–5 pre-screened candidates within 48 hours, with detailed profiles.' },
                  { step: '05', title: 'Placement Support', desc: 'We coordinate interviews, facilitate offers, and provide 90-day post-placement support.' },
                ].map(({ step, title, desc }, i) => (
                  <FadeIn key={step} delay={i * 0.1} className="text-center">
                    <div className="relative flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-[#1E4D8C] border-2 border-[#C8922A] flex items-center justify-center mb-5 relative z-10">
                        <span className="font-heading font-bold text-[#C8922A] text-sm">{step}</span>
                      </div>
                      <h3 className="font-heading font-bold text-white text-sm mb-2 leading-snug">{title}</h3>
                      <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical */}
          <div className="md:hidden space-y-6">
            {[
              { step: '01', title: 'Understand Requirements', desc: 'Deep-dive call to understand your firm, role, tech stack, and ideal candidate profile.' },
              { step: '02', title: 'Source & Screen', desc: 'We search our talent network and conduct initial screening — skills, communication, and culture fit.' },
              { step: '03', title: 'Technical Assessment', desc: 'Candidates complete role-specific technical tests covering US accounting, software, and practical scenarios.' },
              { step: '04', title: 'Shortlist Delivery', desc: 'You receive a curated shortlist of 3–5 pre-screened candidates within 48 hours, with detailed profiles.' },
              { step: '05', title: 'Placement Support', desc: 'We coordinate interviews, facilitate offers, and provide 90-day post-placement support.' },
            ].map(({ step, title, desc }) => (
              <FadeIn key={step}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#1E4D8C] border-2 border-[#C8922A] flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-[#C8922A] text-xs">{step}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading font-bold text-white text-sm mb-1">{title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F1F4F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              Industries We Serve
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              Built for US Accounting Firms of Every Type
            </h2>
            <p className="text-[#5A6A7E] max-w-2xl mx-auto">
              We understand the unique staffing needs of each segment of the US accounting industry.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: 'CPA Firms', desc: 'Audit, tax, and advisory staffing for CPA practices of all sizes.' },
              { title: 'Accounting Firms', desc: 'Full-service accounting firm staffing — bookkeeping to CFO-level.' },
              { title: 'Tax Firms', desc: 'Individual, corporate, and specialty tax return preparers.' },
              { title: 'Bookkeeping Firms', desc: 'QBO, Xero, and Wave-proficient bookkeeping professionals.' },
              { title: 'Advisory Firms', desc: 'Financial advisory and consulting firm talent acquisition.' },
              { title: 'CAS Firms', desc: 'Client Accounting Services specialists for modern CAS practices.' },
              { title: 'Outsourcing Companies', desc: 'Accounting BPO and outsourcing company staffing at scale.' },
              { title: 'Virtual CFO Firms', desc: 'Experienced accountants for fractional and virtual CFO services.' },
            ].map(({ title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-[#DDE3EC] rounded-xl p-6 hover:border-[#1E4D8C]/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-8 h-1 bg-[#C8922A] rounded-full mb-4 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-heading font-bold text-[#0A1628] text-sm mb-2">{title}</h3>
                  <p className="text-[#5A6A7E] text-xs leading-relaxed">{desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1} className="text-center mt-10">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-[#1E4D8C] font-semibold text-sm hover:text-[#C8922A] transition-colors duration-200"
            >
              Explore all industries <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1628]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              Client Testimonials
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by US Accounting Firms
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Hear from the firm partners and principals who've built their offshore teams with VeriStaff.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "VeriStaff delivered exactly what they promised — a pre-screened, US GAAP-trained senior accountant within 48 hours. The candidate has been with us for over a year and is one of our best performers. The process was seamless.",
                name: 'Michael R. Thompson',
                title: 'Managing Partner',
                firm: 'CPA Firm, Austin, TX',
                slot: 'pages/home/testimonial-1',
              },
              {
                quote: "We were skeptical about offshore hiring, but VeriStaff changed our perspective completely. Their technical assessment process is rigorous — the bookkeeper they placed knows QuickBooks Online better than most of our US staff.",
                name: 'Sarah J. Collins',
                title: 'Principal',
                firm: 'Accounting Firm, Chicago, IL',
                slot: 'pages/home/testimonial-2',
              },
              {
                quote: "Tax season used to be a staffing nightmare. Since partnering with VeriStaff, we've built a reliable team of 4 offshore tax professionals who handle 1040s and 1120s with zero supervision issues. Highly recommend.",
                name: 'David K. Patel',
                title: 'Founder',
                firm: 'Tax Firm, New Jersey',
                slot: 'pages/home/testimonial-3',
              },
            ].map(({ quote, name, title, firm, slot }, i) => (
              <FadeIn key={name} delay={i * 0.1}>
                <div className="bg-[#1E4D8C]/20 border border-white/10 rounded-2xl p-8 h-full flex flex-col">
                  {/* Gold quote mark */}
                  <div className="font-heading text-5xl text-[#C8922A] leading-none mb-4 font-bold">"</div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-[#C8922A] fill-[#C8922A]" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed flex-1 mb-8 italic">
                    {quote}
                  </p>
                  <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                    <img
                      src={`/airo-assets/images/${slot}`}
                      alt={name}
                      className="w-11 h-11 rounded-full object-cover shrink-0"
                      loading="lazy"
                      width={44}
                      height={44}
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">{name}</p>
                      <p className="text-white/50 text-xs">{title}, {firm}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1628] border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: CTA Text */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-5">
                <div className="w-8 h-px bg-[#C8922A]" />
                Get Started Today
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Ready to Build Your Offshore Accounting Team?
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 text-lg">
                Tell us your hiring requirement and we'll deliver a shortlist of pre-screened, technically assessed candidates within 48 hours — at no upfront cost.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'No upfront fees — pay only on successful placement',
                  'Dedicated account manager from day one',
                  '90-day replacement guarantee on all placements',
                  'Candidates pre-screened for US accounting workflows',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#C8922A] shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/hire-talent"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C8922A] hover:bg-[#b07d24] text-white font-semibold rounded transition-all duration-200 text-sm"
                >
                  Submit Hiring Requirement
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold rounded transition-all duration-200 text-sm"
                >
                  Contact Us Today
                </Link>
              </div>
            </FadeIn>

            {/* Right: Contact Form */}
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="font-heading text-xl font-bold text-[#0A1628] mb-6">
                  Submit Your Hiring Requirement
                </h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] mb-1.5 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder:text-[#5A6A7E]/50 focus:outline-none focus:border-[#1E4D8C] focus:ring-2 focus:ring-[#1E4D8C]/10 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] mb-1.5 uppercase tracking-wide">
                        Company *
                      </label>
                      <input
                        type="text"
                        placeholder="Smith CPA Firm"
                        className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder:text-[#5A6A7E]/50 focus:outline-none focus:border-[#1E4D8C] focus:ring-2 focus:ring-[#1E4D8C]/10 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0A1628] mb-1.5 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@smithcpa.com"
                      className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder:text-[#5A6A7E]/50 focus:outline-none focus:border-[#1E4D8C] focus:ring-2 focus:ring-[#1E4D8C]/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0A1628] mb-1.5 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder:text-[#5A6A7E]/50 focus:outline-none focus:border-[#1E4D8C] focus:ring-2 focus:ring-[#1E4D8C]/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0A1628] mb-1.5 uppercase tracking-wide">
                      Hiring Need *
                    </label>
                    <select className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] focus:outline-none focus:border-[#1E4D8C] focus:ring-2 focus:ring-[#1E4D8C]/10 transition-colors bg-white">
                      <option value="">Select a role...</option>
                      <option>US Accountant (General)</option>
                      <option>Tax Preparer / Tax Accountant</option>
                      <option>Bookkeeper</option>
                      <option>QuickBooks Online Expert</option>
                      <option>Senior Accountant</option>
                      <option>Accounting Manager</option>
                      <option>Remote Accounting Team</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0A1628] mb-1.5 uppercase tracking-wide">
                      Additional Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your firm, the role, and any specific requirements..."
                      className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder:text-[#5A6A7E]/50 focus:outline-none focus:border-[#1E4D8C] focus:ring-2 focus:ring-[#1E4D8C]/10 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#C8922A] hover:bg-[#b07d24] text-white font-semibold rounded transition-all duration-200 text-sm flex items-center justify-center gap-2"
                  >
                    Submit Requirement
                    <ArrowRight size={15} />
                  </button>
                  <p className="text-[#5A6A7E] text-xs text-center">
                    We'll respond within 24 hours with a tailored candidate shortlist.
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
