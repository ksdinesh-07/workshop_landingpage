import { Radio, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const quickLinks = [
  { href: '#about', label: 'About Workshop' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#committee', label: 'Organizing Committee' },
  { href: '#institution', label: 'About Institution' },
  { href: '#registration', label: 'Register Now' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-800 border-t border-white/5">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Radio className="w-6 h-6 text-cyan-400" />
              <span className="font-display font-bold text-white text-sm">AI Antenna Workshop</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              MeitY Sponsored National Level Workshop on AI Driven Antenna Design and Optimization. A premier academic event at ESEC.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: 'Email', href: 'mailto:aidsworkshop123@gmail.com', icon: '📧' },
                { label: 'Phone', href: 'tel:+918807677959', icon: '📞' },
                { label: 'Website', href: 'http://www.erode-sengunthar.ac.in', icon: '🌐' },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-sm hover:bg-white/10 transition-all hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop Details */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">Workshop Details</h4>
            <div className="space-y-3 text-sm">
              <div className="text-slate-400">
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Date</div>
                06 – 07 July 2026
              </div>
              <div className="text-slate-400">
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Mode</div>
                Offline
              </div>
              <div className="text-slate-400">
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Sponsor</div>
                MeitY, Government of India
              </div>
              <div className="text-slate-400">
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Registration Fee</div>
                <span className="text-emerald-400 font-semibold"></span>
              </div>
              <div className="text-slate-400">
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Deadline</div>
                <span className="text-amber-400">04 July 2026</span>
              </div>
              <a
                href="/downloads/1.Brochure_Design.pdf"
                download="AI_Antenna_Workshop_Brochure.pdf"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm mt-1"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Download Brochure
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:aidsworkshop123@gmail.com" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors break-all">
                  aidsworkshop123@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:rajarajeswari.research@gmail.com" className="text-slate-400 text-sm hover:text-blue-400 transition-colors break-all">
                  rajarajeswari.research@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+918807677959" className="text-slate-400 text-sm hover:text-emerald-400 transition-colors">
                  +91 88076 77959
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Perundurai, Erode, Tamil Nadu – 638057
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            Copyright &copy; 2026 Erode Sengunthar Engineering College (Autonomous). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Organized by Dept. of AI & DS, ESEC</span>
            <span className="text-slate-600">|</span>
            <span>MeitY Sponsored</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
