import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Award,
  Target,
  Users,
  Zap,
  TrendingUp,
  Star,
  Quote,
  BadgeCheck,
  Search,
  FileCheck,
  MessageSquare,
  Handshake,
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

const differentiators = [
  {
    icon: Target,
    title: '100% US Accounting Focus',
    summary: 'We do one thing and we do it exceptionally well.',
    detail:
      'Unlike generalist staffing firms that place everyone from nurses to warehouse workers, VeriStaff Solutions works exclusively in US accounting and finance. Every recruiter on our team understands US GAAP, the difference between a 1040 and a 1120, and why QuickBooks Online proficiency matters more than QuickBooks Desktop for a CAS firm. That specialization translates directly into faster, better hires for your firm.',
    proof: 'Every placement we make is in US accounting or finance — no exceptions.',
  },
  {
    icon: Zap,
    title: '48-Hour Shortlist Delivery',
    summary: 'Pre-screened candidates in two business days, guaranteed.',
    detail:
      'Most recruitment firms take 2–4 weeks to deliver a shortlist. We deliver in 48 hours. This is possible because we maintain an active, pre-screened talent pipeline — not a cold database we search when a requirement comes in. When you submit a requirement, we\'re matching against candidates we already know, have already tested, and have already verified.',
    proof: 'Average shortlist delivery time: 48 hours from requirement confirmation.',
  },
  {
    icon: BadgeCheck,
    title: '5-Stage Screening Process',
    summary: 'Every candidate is verified before you see their profile.',
    detail:
      'We don\'t forward resumes. Every candidate in our shortlist has passed a 5-stage screening process: initial background review, US accounting technical assessment, software proficiency test, written and verbal English evaluation, and reference verification from previous US accounting employers. You receive a detailed profile with scores and our recommendation — not a stack of unvetted CVs.',
    proof: 'Average 5-stage pass rate: 18% — only the top candidates reach your shortlist.',
  },
  {
    icon: Shield,
    title: '90-Day Replacement Guarantee',
    summary: 'If it doesn\'t work out, we replace at no cost.',
    detail:
      'We stand behind every placement we make. If a candidate doesn\'t work out within 90 days — for any reason — we replace them at no additional cost. No arguments, no conditions, no fees. This guarantee reflects our confidence in our screening process and our commitment to your firm\'s success. It also means we have strong incentive to get the placement right the first time.',
    proof: 'Replacement rate under 5% — our screening process works.',
  },
  {
    icon: Users,
    title: 'Deep India Talent Network',
    summary: 'Access to a pre-built pipeline of US-trained accounting professionals.',
    detail:
      'India produces hundreds of thousands of accounting graduates every year, many of whom specifically train for US accounting roles. We\'ve spent years building relationships with the best of them — professionals who have invested in US accounting certifications, software training, and English communication skills. Our network gives your firm access to talent that most US firms don\'t know how to reach.',
    proof: '1,000+ active candidates in our pre-screened talent pipeline.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership Approach',
    summary: 'We\'re invested in your firm\'s growth, not just the next placement.',
    detail:
      'We don\'t disappear after a placement is made. Our team stays in contact during the onboarding period, checks in at 30 and 60 days, and is available to address any concerns. Many of our clients have been with us for multiple hiring cycles — because we treat every placement as the start of a long-term relationship, not a transaction. Your firm\'s growth is our growth.',
    proof: '70%+ of our clients return for additional placements within 12 months.',
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Submit Your Requirement',
    desc: 'Tell us exactly who you need — role, experience level, software requirements, and timeline. The more detail you provide, the better our match.',
    duration: '5 minutes',
  },
  {
    icon: Search,
    step: '02',
    title: 'We Source & Screen',
    desc: 'We search our active talent pipeline and run our 5-stage screening process — technical assessment, software test, communication evaluation, and reference checks.',
    duration: '24–36 hours',
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'You Receive a Shortlist',
    desc: 'A curated shortlist of 3–5 pre-screened candidates with detailed profiles, assessment scores, and our recommendation — delivered within 48 hours.',
    duration: 'Within 48 hours',
  },
  {
    icon: Users,
    step: '04',
    title: 'You Interview & Select',
    desc: 'Interview your shortlisted candidates at your convenience. We coordinate scheduling, provide interview guidance, and facilitate the selection process.',
    duration: 'Your timeline',
  },
  {
    icon: Handshake,
    step: '05',
    title: 'Placement & Onboarding',
    desc: 'We facilitate the offer, handle placement logistics, and stay in contact during the onboarding period to ensure a smooth transition for both sides.',
    duration: '30–60 day support',
  },
];

const comparisons = [
  { feature: 'Specialization', veristaff: 'US Accounting only', others: 'Generalist — all industries' },
  { feature: 'Shortlist delivery', veristaff: '48 hours guaranteed', others: '2–4 weeks typical' },
  { feature: 'Candidate screening', veristaff: '5-stage technical process', others: 'Resume review only' },
  { feature: 'Replacement guarantee', veristaff: '90 days, no conditions', others: 'Rarely offered' },
  { feature: 'Software assessment', veristaff: 'Practical proficiency tests', others: 'Self-reported only' },
  { feature: 'Communication check', veristaff: 'Written + verbal evaluation', others: 'Not standard' },
  { feature: 'Reference verification', veristaff: 'US employer references checked', others: 'Optional / skipped' },
  { feature: 'Post-placement support', veristaff: '30 & 60 day check-ins', others: 'None after placement' },
];

const testimonials = [
  {
    quote:
      'We\'ve tried three other recruitment firms before VeriStaff. The difference is night and day. They actually understand what a CPA firm needs — the technical skills, the software, the work ethic. Our last two hires through them have been exceptional.',
    name: 'Managing Partner',
    firm: 'Mid-size CPA Firm, Texas',
    slot: 'pages/home/testimonial-1',
  },
  {
    quote:
      'The 48-hour shortlist is real. I submitted a requirement on Monday morning and had five pre-screened candidates in my inbox by Wednesday. All five were genuinely qualified. We hired one within two weeks.',
    name: 'Operations Director',
    firm: 'Accounting Outsourcing Company, Florida',
    slot: 'pages/home/testimonial-2',
  },
  {
    quote:
      'What sets VeriStaff apart is the screening. I don\'t have to waste time interviewing candidates who can\'t actually use QuickBooks or don\'t understand US tax returns. Everyone they send me is already verified.',
    name: 'Founder',
    firm: 'Bookkeeping & CAS Firm, California',
    slot: 'pages/home/testimonial-3',
  },
];

export default function WhyVeriStaffPage() {
  const canonicalUrl = 'https://veristaffsolutions.com/why-veristaff';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Why VeriStaff Solutions | US Accounting Recruitment',
    url: canonicalUrl,
    description:
      'Discover why US accounting firms choose VeriStaff Solutions — 100% accounting focus, 48-hour shortlists, 5-stage screening, and a 90-day replacement guarantee.',
  };

  return (
    <>
      <Helmet>
        <title>Why VeriStaff Solutions | Specialized US Accounting Recruitment</title>
        <meta
          name="description"
          content="Why US accounting firms choose VeriStaff Solutions: 100% accounting focus, 48-hour shortlist delivery, 5-stage candidate screening, and a 90-day replacement guarantee."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Why VeriStaff Solutions | US Accounting Recruitment" />
        <meta
          property="og:description"
          content="48-hour shortlists. 5-stage screening. 90-day guarantee. See why US accounting firms trust VeriStaff Solutions."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Decorative gradient orb */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1E4D8C]/20 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
                <div className="w-8 h-px bg-[#C8922A]" />
                Why VeriStaff Solutions
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                The Recruitment Firm Built{' '}
                <span className="text-[#C8922A]">Exclusively for US Accounting Firms</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                There are hundreds of staffing firms. There's only one that does nothing but US accounting recruitment — with a 48-hour shortlist guarantee, a 5-stage screening process, and a 90-day replacement commitment on every placement.
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

            {/* Stats grid */}
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '48hr', label: 'Shortlist Delivery', sub: 'Guaranteed' },
                  { value: '90-Day', label: 'Replacement Guarantee', sub: 'No conditions' },
                  { value: '5-Stage', label: 'Screening Process', sub: 'Every candidate' },
                  { value: '500+', label: 'Placements Made', sub: 'US accounting roles' },
                  { value: '1,000+', label: 'Active Candidates', sub: 'Pre-screened pipeline' },
                  { value: '95%', label: 'Client Satisfaction', sub: 'Post-placement surveys' },
                ].map(({ value, label, sub }, i) => (
                  <FadeIn key={label} delay={0.1 + i * 0.06}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors duration-200">
                      <div className="font-heading text-2xl font-bold text-[#C8922A] mb-1">{value}</div>
                      <p className="text-white font-semibold text-sm leading-tight">{label}</p>
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
            <span className="text-[#0A1628] font-medium">Why VeriStaff Solutions</span>
          </nav>
        </div>
      </div>

      {/* ── THE PROBLEM WE SOLVE ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
                <div className="w-8 h-px bg-[#C8922A]" />
                The Problem
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-5">
                Why Most Accounting Firms Struggle to Hire Good Talent
              </h2>
              <p className="text-[#5A6A7E] leading-relaxed mb-6">
                US accounting firms face a genuine talent shortage. Qualified accountants are expensive, hard to find, and even harder to retain. The traditional options — job boards, generalist recruiters, and referrals — are slow, unreliable, and expensive.
              </p>
              <p className="text-[#5A6A7E] leading-relaxed">
                Offshore hiring from India solves the cost and availability problem — but only if you can find professionals who actually understand US accounting standards, can use your software, and can communicate effectively with your team and clients. That's exactly what VeriStaff Solutions delivers.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-4">
                {[
                  { problem: 'Job boards flood you with unqualified applicants', solution: 'We deliver 3–5 pre-screened, verified candidates only' },
                  { problem: 'Generalist recruiters don\'t understand accounting', solution: 'Our team knows US GAAP, tax returns, and your software stack' },
                  { problem: 'Hiring takes weeks or months', solution: '48-hour shortlist from the moment you submit a requirement' },
                  { problem: 'Bad hires are expensive and disruptive', solution: '90-day replacement guarantee on every placement' },
                  { problem: 'Offshore candidates often lack US accounting knowledge', solution: 'Every candidate is tested specifically on US accounting standards' },
                ].map(({ problem, solution }, i) => (
                  <FadeIn key={problem} delay={i * 0.06}>
                    <div className="bg-[#F8FAFC] border border-[#DDE3EC] rounded-xl p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-red-500 text-xs font-bold">✕</span>
                        </div>
                        <p className="text-[#5A6A7E] text-sm">{problem}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 size={11} className="text-green-600" />
                        </div>
                        <p className="text-[#0A1628] text-sm font-medium">{solution}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 6 DIFFERENTIATORS ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F1F4F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              What Sets Us Apart
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              6 Reasons US Accounting Firms Choose VeriStaff
            </h2>
            <p className="text-[#5A6A7E] max-w-2xl mx-auto leading-relaxed">
              These aren't marketing claims — they're the specific, verifiable ways we operate differently from every other recruitment firm.
            </p>
          </FadeIn>

          <div className="space-y-5">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <FadeIn key={d.title} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white border border-[#DDE3EC] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#1E4D8C]/20 transition-all duration-300"
                  >
                    <div className="grid lg:grid-cols-4 gap-0">
                      {/* Icon + Title */}
                      <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#DDE3EC] flex flex-col justify-center">
                        <div className="w-12 h-12 rounded-xl bg-[#0A1628] flex items-center justify-center mb-4">
                          <Icon size={22} className="text-[#C8922A]" />
                        </div>
                        <h3 className="font-heading text-lg font-bold text-[#0A1628] leading-snug mb-1">
                          {d.title}
                        </h3>
                        <p className="text-[#C8922A] text-xs font-semibold">{d.summary}</p>
                      </div>

                      {/* Detail */}
                      <div className="lg:col-span-2 p-8 border-b lg:border-b-0 lg:border-r border-[#DDE3EC]">
                        <p className="text-[#5A6A7E] text-sm leading-relaxed">{d.detail}</p>
                      </div>

                      {/* Proof point */}
                      <div className="p-8 bg-[#F8FAFC] flex items-center">
                        <div className="flex items-start gap-3">
                          <Award size={18} className="text-[#C8922A] shrink-0 mt-0.5" />
                          <p className="text-[#0A1628] text-sm font-semibold leading-relaxed">{d.proof}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1628]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              VeriStaff vs. The Alternatives
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              How We Compare to Other Recruitment Options
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              See exactly how VeriStaff Solutions stacks up against generalist staffing firms and job boards.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden max-w-4xl mx-auto">
              {/* Header */}
              <div className="grid grid-cols-3 bg-white/10">
                <div className="px-6 py-4 text-white/50 text-xs font-semibold uppercase tracking-wide">Feature</div>
                <div className="px-6 py-4 border-l border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C8922A]" />
                    <span className="text-white font-bold text-sm">VeriStaff Solutions</span>
                  </div>
                </div>
                <div className="px-6 py-4 border-l border-white/10">
                  <span className="text-white/50 text-sm font-medium">Other Firms / Job Boards</span>
                </div>
              </div>

              {comparisons.map(({ feature, veristaff, others }, i) => (
                <div
                  key={feature}
                  className={`grid grid-cols-3 border-t border-white/10 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}
                >
                  <div className="px-6 py-4 text-white/60 text-sm font-medium">{feature}</div>
                  <div className="px-6 py-4 border-l border-white/10 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#C8922A] shrink-0" />
                    <span className="text-white text-sm">{veristaff}</span>
                  </div>
                  <div className="px-6 py-4 border-l border-white/10 flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0 inline-block" />
                    <span className="text-white/40 text-sm">{others}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── OUR PROCESS ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              How It Works
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              From Requirement to Placement in 5 Steps
            </h2>
            <p className="text-[#5A6A7E] max-w-xl mx-auto">
              A transparent, efficient process designed to get the right candidate in front of you as fast as possible.
            </p>
          </FadeIn>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#DDE3EC] to-transparent" />

            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map(({ icon: Icon, step, title, desc, duration }, i) => (
                <FadeIn key={step} delay={i * 0.08}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative w-14 h-14 rounded-2xl bg-[#0A1628] flex items-center justify-center mb-5 z-10">
                      <Icon size={22} className="text-[#C8922A]" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#C8922A] text-white text-xs font-bold flex items-center justify-center font-heading">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-[#0A1628] text-sm mb-2 leading-snug">{title}</h3>
                    <p className="text-[#5A6A7E] text-xs leading-relaxed mb-3">{desc}</p>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#F1F4F8] text-[#C8922A] text-xs font-semibold rounded-full">
                      <Clock size={10} />
                      {duration}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F1F4F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              Client Feedback
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              What Our Clients Say
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, firm }, i) => (
              <FadeIn key={name} delay={i * 0.08}>
                <div className="bg-white border border-[#DDE3EC] rounded-2xl p-7 flex flex-col h-full hover:shadow-md hover:border-[#1E4D8C]/20 transition-all duration-300">
                  <Quote size={28} className="text-[#C8922A]/30 mb-4 shrink-0" />
                  <p className="text-[#5A6A7E] text-sm leading-relaxed flex-1 mb-6 italic">"{quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#DDE3EC]">
                    <div className="w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center shrink-0">
                      <span className="text-[#C8922A] font-bold text-sm font-heading">
                        {name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-[#0A1628] font-semibold text-sm">{name}</p>
                      <p className="text-[#5A6A7E] text-xs">{firm}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={12} className="text-[#C8922A] fill-[#C8922A]" />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE PROPOSITION SUMMARY ─────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
                <div className="w-8 h-px bg-[#C8922A]" />
                The Bottom Line
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                The Right Hire Pays for Itself. The Wrong One Costs You Twice.
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                A mis-hire in accounting doesn't just cost you the recruitment fee — it costs you the time spent onboarding, the errors made, the clients affected, and the process of starting over. Our screening process and replacement guarantee exist to protect you from that outcome.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                When you work with VeriStaff Solutions, you're not just getting a candidate — you're getting a verified professional who has been tested on your specific requirements, confirmed to have the software skills you need, and backed by a guarantee that protects your investment.
              </p>
              <Link
                to="/hire-talent"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8922A] hover:bg-[#b07d24] text-white font-bold rounded text-sm transition-colors duration-200"
              >
                Submit Your Hiring Requirement <ArrowRight size={15} />
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-4">
                {[
                  { icon: TrendingUp, title: '40–60% Cost Savings', desc: 'Compared to equivalent US-based accounting hires, without compromising on quality or US accounting knowledge.' },
                  { icon: Clock, title: 'Faster Time-to-Hire', desc: '48-hour shortlist vs. 2–4 weeks with traditional recruitment. Less time hiring means more time serving clients.' },
                  { icon: Shield, title: 'Risk-Free Placement', desc: '90-day replacement guarantee means you\'re protected if a placement doesn\'t work out — at no additional cost.' },
                  { icon: Target, title: 'Better Quality Matches', desc: 'Industry-specific screening means candidates are pre-qualified for your exact requirements before you see them.' },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <FadeIn key={title} delay={i * 0.07}>
                    <div className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors duration-200">
                      <div className="w-10 h-10 rounded-lg bg-[#C8922A]/20 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-[#C8922A]" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm mb-1">{title}</p>
                        <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
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
                  Ready to Experience the VeriStaff Difference?
                </h2>
                <p className="text-white/70 text-sm">
                  Submit your requirement today and receive a pre-screened shortlist within 48 hours.
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
