import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Users,
  ChevronDown,
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

const inquiryTypes = [
  'I want to hire accounting talent',
  'I want to submit a hiring requirement',
  'I have a question about your services',
  'I want to learn about pricing',
  'I am a candidate looking for opportunities',
  'Partnership / collaboration inquiry',
  'Other',
];

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  firmName: string;
  inquiryType: string;
  message: string;
}

const initialForm: ContactForm = {
  name: '',
  email: '',
  phone: '',
  firmName: '',
  inquiryType: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const canonicalUrl = 'https://veristaffsolutions.com/contact';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact VeriStaff Solutions',
    url: canonicalUrl,
    description:
      'Get in touch with VeriStaff Solutions for US accounting recruitment inquiries, hiring requirements, and consultations.',
    mainEntity: {
      '@type': 'Organization',
      name: 'VeriStaff Solutions',
      telephone: '+91-7600841538',
      email: 'info@veristaffsolutions.com',
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
        <title>Contact Us | VeriStaff Solutions — US Accounting Recruitment</title>
        <meta
          name="description"
          content="Contact VeriStaff Solutions for US accounting recruitment inquiries. Reach us at +91 7600841538 or info@veristaffsolutions.com. Based in Ahmedabad, India."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Contact VeriStaff Solutions" />
        <meta
          property="og:description"
          content="Get in touch with our US accounting recruitment specialists. We respond within 24 hours."
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
            src="/airo-assets/images/pages/contact/hero"
            alt=""
            className="w-full h-full object-cover opacity-15"
            loading="eager"
            fetchPriority="high"
            width={1200}
            height={500}
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
              Contact Us
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl">
              Let's Talk About Your{' '}
              <span className="text-[#C8922A]">Hiring Needs</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Whether you're ready to submit a hiring requirement or just want to learn more about how we work — we're here. Our team responds within 24 hours, every time.
            </p>
          </FadeIn>

          {/* Quick contact badges */}
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="tel:+917600841538"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-white text-sm font-medium transition-colors duration-200"
              >
                <Phone size={14} className="text-[#C8922A]" />
                +91 7600841538
              </a>
              <a
                href="mailto:info@veristaffsolutions.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-white text-sm font-medium transition-colors duration-200"
              >
                <Mail size={14} className="text-[#C8922A]" />
                info@veristaffsolutions.com
              </a>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm">
                <Clock size={14} className="text-[#C8922A]" />
                Mon–Sat, 9:00 AM – 7:00 PM IST
              </div>
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
            <span className="text-[#0A1628] font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F1F4F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* ── CONTACT FORM ────────────────────────────────────────────── */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-white border border-[#DDE3EC] rounded-2xl overflow-hidden">
                  <div className="bg-[#0A1628] px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <MessageSquare size={18} className="text-[#C8922A]" />
                      </div>
                      <div>
                        <h2 className="font-heading text-lg font-bold text-white">Send Us a Message</h2>
                        <p className="text-white/50 text-xs mt-0.5">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-center py-10"
                      >
                        <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-5">
                          <CheckCircle2 size={30} className="text-green-500" />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-[#0A1628] mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-[#5A6A7E] text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                          Thank you, <strong>{form.name || 'there'}</strong>. We've received your message and will get back to you within <strong>24 hours</strong>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <button
                            onClick={() => { setForm(initialForm); setSubmitted(false); }}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0A1628] hover:bg-[#1E4D8C] text-white font-semibold rounded text-sm transition-colors duration-200"
                          >
                            Send Another Message
                          </button>
                          <Link
                            to="/hire-talent"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#DDE3EC] hover:border-[#1E4D8C] text-[#0A1628] font-semibold rounded text-sm transition-colors duration-200"
                          >
                            Submit Hiring Requirement <ArrowRight size={13} />
                          </Link>
                        </div>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                              Your Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="Full name"
                              className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                              Firm / Company Name
                            </label>
                            <input
                              type="text"
                              value={form.firmName}
                              onChange={(e) => setForm({ ...form, firmName: e.target.value })}
                              placeholder="Your firm or company"
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
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder="+1 (555) 000-0000"
                              className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            What Can We Help You With? <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={form.inquiryType}
                              onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                              className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] bg-white appearance-none focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors"
                            >
                              <option value="">Select inquiry type</option>
                              {inquiryTypes.map((t) => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A6A7E] pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                            Your Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            rows={5}
                            required
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Tell us about your hiring needs, questions, or anything else you'd like to discuss..."
                            className="w-full px-4 py-3 border border-[#DDE3EC] rounded-lg text-sm text-[#0A1628] placeholder-[#B0BCC8] focus:outline-none focus:border-[#1E4D8C] focus:ring-1 focus:ring-[#1E4D8C] transition-colors resize-none"
                          />
                        </div>

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
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send size={15} />
                              Send Message
                            </>
                          )}
                        </button>
                        <p className="text-[#5A6A7E] text-xs text-center">
                          We respond to all inquiries within 24 hours on business days.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ── SIDEBAR ─────────────────────────────────────────────────── */}
            <div className="space-y-5">

              {/* Contact Details */}
              <FadeIn delay={0.1}>
                <div className="bg-white border border-[#DDE3EC] rounded-2xl p-7">
                  <h3 className="font-heading font-bold text-[#0A1628] text-base mb-5">Contact Details</h3>
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#F1F4F8] flex items-center justify-center shrink-0">
                        <Phone size={16} className="text-[#C8922A]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#5A6A7E] uppercase tracking-wide mb-1">Phone</p>
                        <a
                          href="tel:+917600841538"
                          className="text-[#0A1628] font-semibold text-sm hover:text-[#1E4D8C] transition-colors"
                        >
                          +91 7600841538
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#F1F4F8] flex items-center justify-center shrink-0">
                        <Mail size={16} className="text-[#C8922A]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#5A6A7E] uppercase tracking-wide mb-1">Email</p>
                        <a
                          href="mailto:info@veristaffsolutions.com"
                          className="text-[#0A1628] font-semibold text-sm hover:text-[#1E4D8C] transition-colors break-all"
                        >
                          info@veristaffsolutions.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#F1F4F8] flex items-center justify-center shrink-0">
                        <MapPin size={16} className="text-[#C8922A]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#5A6A7E] uppercase tracking-wide mb-1">Office Address</p>
                        <address className="not-italic text-[#0A1628] text-sm font-medium leading-relaxed">
                          B-301, Shrut Ratnakar<br />
                          Ahmedabad – 380007<br />
                          Gujarat, India
                        </address>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#F1F4F8] flex items-center justify-center shrink-0">
                        <Clock size={16} className="text-[#C8922A]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#5A6A7E] uppercase tracking-wide mb-1">Business Hours</p>
                        <p className="text-[#0A1628] text-sm font-medium">Mon – Sat</p>
                        <p className="text-[#5A6A7E] text-xs">9:00 AM – 7:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Map Embed */}
              <FadeIn delay={0.15}>
                <div className="bg-white border border-[#DDE3EC] rounded-2xl overflow-hidden">
                  <div className="bg-[#F1F4F8] px-5 py-3 border-b border-[#DDE3EC]">
                    <p className="text-xs font-semibold text-[#0A1628] uppercase tracking-wide flex items-center gap-2">
                      <MapPin size={12} className="text-[#C8922A]" />
                      Our Location — Ahmedabad, India
                    </p>
                  </div>
                  <div className="relative w-full h-52">
                    <iframe
                      title="VeriStaff Solutions Office Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9!2d72.5714!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sShrut%20Ratnakar%2C%20Ahmedabad%2C%20Gujarat%20380007!5e0!3m2!1sen!2sin!4v1700000000000"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="px-5 py-3 border-t border-[#DDE3EC]">
                    <a
                      href="https://maps.google.com/?q=Shrut+Ratnakar+Ahmedabad+380007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#1E4D8C] hover:text-[#0A1628] text-xs font-semibold transition-colors"
                    >
                      Open in Google Maps <ArrowRight size={11} />
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* Hire Talent CTA */}
              <FadeIn delay={0.2}>
                <div className="bg-[#0A1628] rounded-2xl p-7">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <Users size={18} className="text-[#C8922A]" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-2">
                    Ready to Hire?
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">
                    Skip the message and submit your hiring requirement directly. Get a pre-screened shortlist within 48 hours.
                  </p>
                  <Link
                    to="/hire-talent"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#C8922A] hover:bg-[#b07d24] text-white text-sm font-semibold rounded transition-colors duration-200"
                  >
                    Submit Hiring Requirement <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ STRIP ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-[#DDE3EC]">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#C8922A] text-xs font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              Common Questions
              <div className="w-8 h-px bg-[#C8922A]" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0A1628]">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                q: 'How quickly will I receive a shortlist after submitting a requirement?',
                a: 'We deliver a pre-screened shortlist of 3–5 candidates within 48 hours of confirming your requirement details with you.',
              },
              {
                q: 'Is there a cost to submit a hiring requirement?',
                a: 'There is no upfront cost to submit a requirement or receive a shortlist. Our fee is only charged upon a successful placement.',
              },
              {
                q: 'What if the placed candidate doesn\'t work out?',
                a: 'We offer a 90-day replacement guarantee. If a placement doesn\'t work out within 90 days, we replace them at no additional cost.',
              },
              {
                q: 'Do you only recruit for US accounting roles?',
                a: 'Yes — US accounting and finance is our exclusive focus. This specialization is what allows us to deliver higher quality candidates faster than generalist firms.',
              },
              {
                q: 'Can you help with seasonal or temporary staffing needs?',
                a: 'Absolutely. We offer contract and contract-to-hire engagements in addition to direct hire, including seasonal surge staffing for tax season.',
              },
              {
                q: 'How do I get started?',
                a: 'Simply submit your hiring requirement using the form on our Hire Talent page, or send us a message here and we\'ll guide you through the process.',
              },
            ].map(({ q, a }, i) => (
              <FadeIn key={q} delay={i * 0.05}>
                <div className="bg-[#F8FAFC] border border-[#DDE3EC] rounded-xl p-6 hover:border-[#1E4D8C]/30 hover:shadow-sm transition-all duration-200">
                  <h3 className="font-heading font-bold text-[#0A1628] text-sm mb-2 leading-snug">{q}</h3>
                  <p className="text-[#5A6A7E] text-sm leading-relaxed">{a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
