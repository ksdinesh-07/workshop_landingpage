import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, User, MessageCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="relative py-24 bg-dark-900" ref={ref}>
      <div className="absolute inset-0 hex-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Contact Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            Get In Touch
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">

          {/* Workshop Email */}
          <div className="reveal glass rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 hover:scale-[1.02] transition-all" style={{ transitionDelay: '0.1s' }}>
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-medium mb-2">Official Workshop Email</div>
            <a href="mailto:aidsworkshop123@gmail.com" className="text-white font-semibold hover:text-cyan-400 transition-colors text-sm sm:text-base break-all">
              aiworkshop@gmail.com
            </a>
          </div>

          {/* Student Coordinator */}
          <div className="reveal glass rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 hover:scale-[1.02] transition-all" style={{ transitionDelay: '0.2s' }}>
            <div className="w-10 h-10 rounded-xl bg-cyan-600/20 flex items-center justify-center mb-4">
              <User className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-medium mb-2">Student Coordinator</div>
            <div className="text-white font-semibold">PRASANNA S</div>
            <a href="tel:+918807677959" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm mt-1 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 88076 77959
            </a>
          </div>

          {/* Venue */}
          <div className="reveal glass rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 hover:scale-[1.02] transition-all" style={{ transitionDelay: '0.3s' }}>
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-medium mb-2">Venue</div>
            <div className="text-white text-sm leading-relaxed">
              Department of Artificial Intelligence and Data Science<br />
              Erode Sengunthar Engineering College (Autonomous)<br />
              <span className="text-emerald-400">Perundurai, Erode, Tamil Nadu – 638057</span>
            </div>
          </div>
        </div>

        {/* Address for Correspondence */}
        <div className="reveal glass-strong rounded-3xl p-6 sm:p-8 mb-10 max-w-3xl mx-auto border border-white/10">
          <div className="flex items-center gap-3 mb-5">
            <MessageCircle className="w-5 h-5 text-cyan-400" />
            <h3 className="font-display font-bold text-white text-lg">Address for Correspondence</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="text-sm text-slate-300 leading-relaxed space-y-1">
              <div className="font-semibold text-white">Ms. P. Rajarajeswari</div>
              <div className="text-slate-400">Assistant Professor</div>
              <div className="text-slate-400">Department of Artificial Intelligence and Data Science</div>
              <div className="text-slate-400">Erode Sengunthar Engineering College (Autonomous)</div>
              <div className="text-slate-400">Perundurai, Erode – 638057</div>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:rajarajeswari.research@gmail.com"
                className="flex items-center gap-3 glass rounded-xl px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 border border-transparent transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="break-all">rajarajeswari.research@gmail.com</span>
              </a>
              <a
                href="http://www.erode-sengunthar.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 glass rounded-xl px-4 py-3 text-sm text-slate-300 hover:text-blue-400 border border-transparent hover:border-blue-500/30 transition-all"
              >
                <span className="text-blue-400">🌐</span>
                <span>www.erode-sengunthar.ac.in</span>
              </a>
              <div className="flex items-start gap-3 glass rounded-xl px-4 py-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>04294-232701, 232704</span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="reveal rounded-2xl overflow-hidden border border-white/10" style={{ transitionDelay: '0.4s' }}>
          <div className="bg-dark-800 px-5 py-3 border-b border-white/10 flex items-center gap-3">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-slate-300">Erode Sengunthar Engineering College, Perundurai</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.7803!2d77.5930!3d11.2820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96b6b8b8b8b8b%3A0x3a4b2e2e2e2e2e2e!2sErode%20Sengunthar%20Engineering%20College!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Erode Sengunthar Engineering College Map"
            className="grayscale invert opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
