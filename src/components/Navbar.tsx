import { useState, useEffect } from 'react';
import { Menu, X, Radio } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#committee', label: 'Committee' },
  { href: '#registration', label: 'Register' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-blue-950/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative">
              <Radio className="w-7 h-7 text-cyan-400 group-hover:text-blue-400 transition-colors" />
              <div className="absolute inset-0 animate-ping opacity-30">
                <Radio className="w-7 h-7 text-cyan-400" />
              </div>
            </div>
            <span className="font-display font-bold text-sm text-white hidden sm:block leading-tight">
              <span className="text-cyan-400">AI</span> Antenna Workshop
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#registration"
              className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all"
            >
              Register Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg glass text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-strong border-t border-white/10">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#registration"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold text-center"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
