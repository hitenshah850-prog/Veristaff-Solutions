import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'US Accounting Recruitment', href: '/services' },
    { label: 'US Tax Talent Hiring', href: '/services' },
    { label: 'Bookkeeping Professionals', href: '/services' },
    { label: 'QuickBooks Online Experts', href: '/services' },
    { label: 'Remote Accounting Teams', href: '/services' },
    { label: 'Offshore Staffing Solutions', href: '/services' },
  ];

  const industries = [
    { label: 'CPA Firms', href: '/industries' },
    { label: 'Accounting Firms', href: '/industries' },
    { label: 'Tax Firms', href: '/industries' },
    { label: 'Bookkeeping Firms', href: '/industries' },
    { label: 'Advisory Firms', href: '/industries' },
    { label: 'CAS Firms', href: '/industries' },
  ];

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Why VeriStaff', href: '/why-veristaff' },
    { label: 'Hire Talent', href: '/hire-talent' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-[#060E1A] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img
                src="/airo-assets/images/logo/horizontal"
                alt="VeriStaff Solutions"
                className="h-10 w-auto object-contain shrink-0 brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Connecting US Accounting Firms with India's Top Accounting Talent. Specialized recruitment for CPA, Tax, and Bookkeeping firms.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8922A] flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8922A] flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 pb-3 border-b border-white/10">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-white/60 hover:text-[#C8922A] text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 pb-3 border-b border-white/10">
              Industries We Serve
            </h4>
            <ul className="space-y-2.5 mb-8">
              {industries.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-white/60 hover:text-[#C8922A] text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 pb-3 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-white/60 hover:text-[#C8922A] text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 pb-3 border-b border-white/10">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#C8922A] shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">
                  B-301, Shrut Ratnakar,<br />
                  Ahmedabad – 380007,<br />
                  Gujarat, India
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-[#C8922A] shrink-0" />
                <a
                  href="tel:+917600841538"
                  className="text-white/60 hover:text-[#C8922A] text-sm transition-colors"
                >
                  +91 7600841538
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[#C8922A] shrink-0" />
                <a
                  href="mailto:info@veristaffsolutions.com"
                  className="text-white/60 hover:text-[#C8922A] text-sm transition-colors"
                >
                  info@veristaffsolutions.com
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                to="/hire-talent"
                className="inline-block w-full text-center px-5 py-3 bg-[#C8922A] hover:bg-[#b07d24] text-white text-sm font-semibold rounded transition-colors duration-200"
              >
                Submit Hiring Requirement
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            © {currentYear} VeriStaff Solutions. All rights reserved. | US Accounting Recruitment Specialists
          </p>
          <div className="flex gap-5">
            <Link to="/privacy" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
