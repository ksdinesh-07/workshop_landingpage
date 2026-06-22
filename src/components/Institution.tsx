import { useEffect, useRef } from 'react';
import { Building2, Award, FlaskConical, Users, BookOpen, Cpu, Briefcase, Rocket } from 'lucide-react';

const features = [
  { icon: Award, title: 'Autonomous Institution', desc: 'UGC Autonomous status granted for 10 years (2019–2029). NAAC accredited with "A" Grade.', color: 'text-amber-400' },
  { icon: BookOpen, title: 'Academic Excellence', desc: 'Established 1996. 11 UG and 7 PG programmes in Engineering, MCA, and MBA. Affiliated to Anna University.', color: 'text-blue-400' },
  { icon: FlaskConical, title: 'Research & Innovation', desc: 'NVIDIA 40GB HP AI Server. Well-equipped research laboratories advancing cutting-edge technology.', color: 'text-cyan-400' },
  { icon: Briefcase, title: 'Industry Orientation', desc: 'Strong industry partnerships providing students with real-world exposure and placement opportunities.', color: 'text-emerald-400' },
  { icon: Cpu, title: 'Advanced Laboratories', desc: 'State-of-the-art labs including AI, Data Science, and specialized engineering equipment.', color: 'text-rose-400' },
  { icon: Rocket, title: 'Student Development', desc: 'Comprehensive programs in sports, arts, NSS, NCC, and technical clubs for holistic growth.', color: 'text-violet-400' },
  { icon: Users, title: 'Placement Support', desc: 'Dedicated placement cell with consistent record of campus placements in leading companies.', color: 'text-blue-300' },
  { icon: Building2, title: 'Modern Infrastructure', desc: 'Sprawling campus on NH-47, 20km from Erode. Well-connected by road and rail. College buses available.', color: 'text-teal-400' },
];

export default function Institution() {
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
    <section id="institution" className="relative py-24 bg-dark-800" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">About the Institution</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            Erode Sengunthar Engineering College
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            (Autonomous) | Perundurai, Erode, Tamil Nadu – 638057
          </p>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        {/* College image placeholder + about text */}
        <div className="reveal glass-strong rounded-3xl overflow-hidden mb-12 max-w-4xl mx-auto">
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Erode Sengunthar Engineering College"
            className="w-full h-48 sm:h-64 object-cover object-center opacity-70"
          />
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {['AICTE Approved', 'NBA Accredited', 'NAAC A Grade', 'Anna University Affiliated', 'UGC Autonomous'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full glass text-cyan-300 text-xs font-medium border border-cyan-500/20">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Erode Sengunthar Engineering College, approved by AICTE and permanently affiliated to Anna University, Chennai,
              was established in 1996 for the upliftment of urban and rural youth by the philanthropic visionaries of
              Erode Sengunthar Educational Trust. The institution is known for strict academic discipline and is one of
              the best-run institutions in Tamil Nadu.
            </p>
          </div>
        </div>

        {/* Department highlight */}
        <div className="reveal glass-strong rounded-3xl p-6 sm:p-8 mb-12 max-w-4xl mx-auto border border-blue-500/20">
          <h3 className="font-display font-bold text-xl text-white mb-3 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-cyan-400" />
            Department of AI & Data Science
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            The Department started its B.Tech. AI & Data Science programme in 2020–21 with an intake of 60,
            growing to 180 students in 2024–25. The department is equipped with an{' '}
            <span className="text-cyan-400 font-semibold">NVIDIA 40GB HP AI Server</span> and
            well-equipped laboratories, working at the cutting edge of Machine Learning, Deep Learning,
            Data Analytics, and Visualization Technologies.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className="reveal glass rounded-2xl p-5 hover:scale-[1.03] transition-all duration-300 hover:border-white/20 border border-transparent"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Icon className={`w-6 h-6 ${color} mb-3`} />
              <div className="font-semibold text-white text-sm mb-2">{title}</div>
              <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
