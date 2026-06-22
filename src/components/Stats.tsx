import { useEffect, useRef } from 'react';
import { Calendar, Globe, Cpu, Award } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '2 Days', label: 'Workshop', sub: 'July 6–7, 2026', color: 'from-blue-500 to-blue-700' },
  { icon: Globe, value: 'National', label: 'Level Event', sub: 'MeitY Sponsored', color: 'from-cyan-500 to-cyan-700' },
  { icon: Cpu, value: 'Hands-on', label: 'Training', sub: 'MATLAB & Python', color: 'from-emerald-500 to-emerald-700' },
  { icon: Award, value: 'Certificate', label: 'of Participation', sub: 'For all attendees', color: 'from-amber-500 to-amber-700' },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 bg-dark-800 border-y border-white/5" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-cyan-950/20" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map(({ icon: Icon, value, label, sub, color }, i) => (
            <div
              key={label}
              className="reveal glass-strong rounded-2xl p-5 sm:p-6 text-center hover:scale-105 transition-all duration-300 cursor-default group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${color} items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white">{value}</div>
              <div className="text-sm font-semibold text-slate-300 mt-0.5">{label}</div>
              <div className="text-xs text-slate-500 mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
