import { useEffect, useRef } from 'react';
import { Users, Star, Shield, Crown } from 'lucide-react';

const committee = [
  {
    role: 'Chief Patron',
    icon: Crown,
    color: 'from-amber-500 to-amber-700',
    border: 'border-amber-500/30',
    glow: 'shadow-amber-500/20',
    members: [
      { name: 'Thiru. G. Kamalamurugan', position: 'President & Correspondent', org: 'ESET' },
    ],
  },
  {
    role: 'Patrons',
    icon: Star,
    color: 'from-blue-500 to-blue-700',
    border: 'border-blue-500/30',
    glow: 'shadow-blue-500/20',
    members: [
      { name: 'Thiru. S. N. Thangaraj, B.E., M.B.A.', position: 'Secretary', org: 'ESET' },
    ],
  },
  {
    role: 'Chairman',
    icon: Shield,
    color: 'from-cyan-500 to-cyan-700',
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-500/20',
    members: [
      { name: 'Dr. V. Venkatachalam', position: 'Principal', org: 'ESEC' },
    ],
  },
  {
    role: 'Convener',
    icon: Users,
    color: 'from-emerald-500 to-emerald-700',
    border: 'border-emerald-500/30',
    glow: 'shadow-emerald-500/20',
    members: [
      { name: 'Dr. G. Saravanan', position: 'Associate Professor', org: 'Department of AI & DS' },
    ],
  },
  {
    role: 'Organizing Secretary',
    icon: Users,
    color: 'from-rose-500 to-rose-700',
    border: 'border-rose-500/30',
    glow: 'shadow-rose-500/20',
    members: [
      { name: 'Ms. P. Rajarajeswari', position: 'Assistant Professor', org: 'Department of AI & DS' },
    ],
  },
];

export default function Committee() {
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
    <section id="committee" className="relative py-24 bg-dark-900" ref={ref}>
      <div className="absolute inset-0 hex-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Organizing Committee</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            Leadership & Organizers
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committee.map(({ role, icon: Icon, color, border, glow, members }, i) => (
            <div
              key={role}
              className={`reveal glass rounded-2xl p-6 border ${border} hover:shadow-xl ${glow} hover:scale-[1.02] transition-all duration-300`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">{role}</div>
                </div>
              </div>
              <div className="space-y-4">
                {members.map((m) => (
                  <div key={m.name}>
                    <div className="font-display font-bold text-white text-base leading-snug">{m.name}</div>
                    <div className="text-sm text-slate-400 mt-1">{m.position}</div>
                    <div className="text-xs text-cyan-400/70 mt-0.5 font-medium">{m.org}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact coordinators */}
        <div className="mt-10 reveal">
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto text-center">
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-medium">Student Coordinator</div>
            <div className="font-display font-bold text-white text-xl">PRASANNA S</div>
            <a href="tel:+918807677959" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors mt-1 block">
              +91 88076 77959
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
