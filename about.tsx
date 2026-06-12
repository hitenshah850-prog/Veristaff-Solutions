import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Shield,
  Clock,
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

export default function AboutPage() {
  const canonicalUrl = 'https://veristaffsolutions.com/about';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About VeriStaff Solutions',
    url: canonicalUrl,
    description:
      'VeriStaff Solutions is a specialized US accounting recruitment firm founded by professionals with 5+ years of US accounting experience and 3 years of recruitment leadership.',
    mainEntity: {
      '@type': 'Organization',
      name: 'VeriStaff Solutions',
      foundingDate: '2021',
      description:
        'Specialized recruitment partner for US CPA firms, Tax firms, and Accounting firms seeking pre-screened accounting professionals from India.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'B-301, Shrut Ratnakar',
        addressLocality: 'Ahmedabad',
        postalCode: '380007',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>About VeriStaff Solutions | US Accounting Recruitment Specialists</title>
        <meta
          name="description"
          content="Learn about VeriStaff Solutions — founded by US accounting and recruitment professionals with 5+ years of expertise. We connect US CPA firms with India's top accounting talent."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="About VeriStaff Solutions | US Accounting Recruitment" />
        <meta
          property="og:description"
          content="Founded by US accounting professionals. Specialized recruitment for CPA, Tax, and Bookkeeping firms seeking talent from India."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-24 overflow-hidden">
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
              About Us
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl">
              The Recruitment Partner Built for{' '}
              <span className="text-[#C8922A]">US Accounting Firms</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8">
              We're not a generalist staffing agency. VeriStaff Solutions was built from the ground up to serve one niche — US accounting and finance recruitment — and we do it better than anyone else.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/hire-talent"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8922A] hover:bg-[#b07d24] text-white font-semibold rounded text-sm transition-colors duration-200"
              >
                Hire Top Talent <ArrowRight size={15} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold rounded text-sm transition-colors duration-200"
              >
                Schedule a Consultation
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
            <span className="text-[#0A1628] font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* ── OUR STORY ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
                <div className="w-8 h-px bg-[#C8922A]" />
                Our Story
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-6">
                Founded by People Who've Lived the{' '}
                <span className="text-[#1E4D8C]">US Accounting World</span>
              </h2>
              <p className="text-[#5A6A7E] leading-relaxed mb-5">
                VeriStaff Solutions was founded by professionals who spent years working in US accounting — preparing tax returns, managing client books, navigating busy seasons — before transitioning into recruitment leadership. That firsthand experience is what makes us different.
              </p>
              <p className="text-[#5A6A7E] leading-relaxed mb-5">
                We've sat in the accountant's chair. We know what a CPA firm partner means when they say "I need someone who can handle a 1040 with Schedule C without hand-holding." We know what QuickBooks Online proficiency actually looks like in practice. And we know how to find the professionals who genuinely have it.
              </p>
              <p className="text-[#5A6A7E] leading-relaxed mb-8">
                Our mission is simple: eliminate the guesswork from offshore accounting recruitment. Every candidate we present has been rigorously screened, technically assessed, and verified to meet the standards of US accounting practice.
              </p>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: '5+', label: 'Years US Accounting Experience' },
                  { value: '3+', label: 'Years Recruitment Leadership' },
                  { value: '500+', label: 'Successful Placements' },
                  { value: '50+', label: 'US Firms Served' },
                ].map(({ value, label }) => (
                  <div key={label} className="border-l-2 border-[#C8922A] pl-4">
                    <div className="font-heading text-2xl font-bold text-[#0A1628]">{value}</div>
                    <p className="text-[#5A6A7E] text-xs mt-0.5 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/airo-assets/images/pages/about/team"
                    alt="VeriStaff Solutions team"
                    className="w-full h-[460px] object-cover"
                    loading="lazy"
                    width={800}
                    height={460}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#C8922A] text-white rounded-xl p-5 shadow-xl max-w-[180px]">
                  <div className="font-heading text-2xl font-bold mb-1">48hr</div>
                  <p className="text-white/80 text-xs leading-snug">Candidate Shortlist Delivery</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ─────────────────────────────────────── */}
      <section className="py-24 bg-[#F1F4F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              What Drives Us
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              Our Mission, Vision & Values
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                label: 'Our Mission',
                title: 'Eliminate the Guesswork from Offshore Accounting Recruitment',
                description:
                  'To be the most trusted recruitment partner for US accounting firms seeking offshore talent — delivering pre-screened, technically verified professionals who contribute from day one, every time.',
              },
              {
                icon: Eye,
                label: 'Our Vision',
                title: 'The Go-To Recruitment Partner for Every US Accounting Firm',
                description:
                  'To become the definitive recruitment partner for US CPA, Tax, and Bookkeeping firms looking to build high-performing offshore accounting teams — known for quality, speed, and integrity.',
              },
              {
                icon: Heart,
                label: 'Our Values',
                title: 'Quality, Transparency, and Long-Term Partnership',
                description:
                  'We believe in honest communication, rigorous standards, and building relationships that last beyond a single placement. Your firm\'s success is our success — and we act accordingly.',
              },
            ].map(({ icon: Icon, label, title, description }, i) => (
              <FadeIn key={label} delay={i * 0.1}>
                <div className="bg-white border border-[#DDE3EC] rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1628] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#C8922A]" />
                  </div>
                  <div className="text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-2">{label}</div>
                  <h3 className="font-heading font-bold text-[#0A1628] text-lg leading-snug mb-3">{title}</h3>
                  <p className="text-[#5A6A7E] text-sm leading-relaxed">{description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/airo-assets/images/pages/about/office"
                  alt="VeriStaff Solutions office"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                  width={800}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-heading font-bold text-xl leading-snug">
                    "We don't just fill roles — we find the right fit for your firm's culture and workflow."
                  </p>
                  <p className="text-white/60 text-sm mt-2">— VeriStaff Solutions Founding Team</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
                <div className="w-8 h-px bg-[#C8922A]" />
                What Makes Us Different
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-6">
                Niche Expertise That Generalist Firms Simply Can't Match
              </h2>
              <p className="text-[#5A6A7E] leading-relaxed mb-8">
                Most staffing agencies treat accounting as just another category. For us, it's the only category. That focus means deeper talent networks, sharper screening, and faster placements — every time.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: Award,
                    title: 'Founded by US Accounting Professionals',
                    desc: 'Our founders have hands-on experience in US accounting workflows — not just recruitment theory.',
                  },
                  {
                    icon: Shield,
                    title: 'Rigorous Multi-Stage Screening',
                    desc: 'Technical tests, communication assessments, and reference checks before any candidate reaches you.',
                  },
                  {
                    icon: Clock,
                    title: '48-Hour Shortlist Guarantee',
                    desc: 'Our deep talent pipeline means you get qualified candidates fast — not weeks from now.',
                  },
                  {
                    icon: TrendingUp,
                    title: '40–60% Cost Savings vs. US Hires',
                    desc: 'Access the same caliber of accounting talent at a fraction of the cost of equivalent US-based professionals.',
                  },
                  {
                    icon: Users,
                    title: '1,000+ Pre-Qualified Candidates',
                    desc: 'An active, continuously updated network of US accounting professionals ready to be placed.',
                  },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <FadeIn key={title} delay={i * 0.07}>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#F1F4F8] flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-[#1E4D8C]" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-[#0A1628] text-sm mb-1">{title}</h4>
                        <p className="text-[#5A6A7E] text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE AREAS ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1628]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              Our Expertise
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Deep Knowledge Across US Accounting Disciplines
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We recruit across the full spectrum of US accounting roles — from entry-level bookkeepers to senior accounting managers.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'US GAAP & GAAS',
              'Federal & State Tax Returns',
              'QuickBooks Online & Desktop',
              'Xero & Wave Accounting',
              'Payroll Processing',
              'Bank Reconciliations',
              'Financial Statement Prep',
              'Accounts Payable & Receivable',
              'Month-End & Year-End Close',
              'Tax Software (Drake, ProConnect)',
              'Client Accounting Services',
              'Audit Support',
              'Bookkeeping & Write-Up',
              'Sales Tax Compliance',
              'Payroll Tax Filings',
              '1040, 1120, 1065 Returns',
            ].map((skill, i) => (
              <FadeIn key={skill} delay={i * 0.03}>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:bg-white/10 hover:border-[#C8922A]/30 transition-all duration-200">
                  <CheckCircle2 size={13} className="text-[#C8922A] shrink-0" />
                  <span className="text-white/80 text-xs font-medium">{skill}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR COMMITMENT ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F1F4F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              Our Commitment
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              What You Can Always Expect from VeriStaff
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                number: '01',
                title: 'Honest Communication',
                desc: "We tell you what we can deliver — and we deliver what we promise. No overpromising, no surprises.",
              },
              {
                number: '02',
                title: 'Quality Over Quantity',
                desc: "We'd rather send you 3 exceptional candidates than 10 mediocre ones. Your time is valuable.",
              },
              {
                number: '03',
                title: '90-Day Replacement Guarantee',
                desc: "If a placement doesn't work out within 90 days, we replace them at no additional cost.",
              },
              {
                number: '04',
                title: 'Long-Term Partnership',
                desc: "We're not transactional. We invest in understanding your firm so every future hire gets better.",
              },
            ].map(({ number, title, desc }, i) => (
              <FadeIn key={number} delay={i * 0.08}>
                <div className="bg-white border border-[#DDE3EC] rounded-xl p-7 hover:shadow-md transition-shadow duration-300">
                  <div className="font-heading text-4xl font-bold text-[#DDE3EC] mb-4">{number}</div>
                  <h3 className="font-heading font-bold text-[#0A1628] text-base mb-2">{title}</h3>
                  <p className="text-[#5A6A7E] text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
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
                  Ready to Work with a Recruitment Partner Who Gets It?
                </h2>
                <p className="text-white/70 text-sm">
                  Submit your hiring requirement and receive a pre-screened shortlist within 48 hours.
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
                  Contact Us Today
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
