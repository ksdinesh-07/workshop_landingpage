import { useEffect, useRef } from 'react';
import { Target, CheckCircle2, BookOpen, Lightbulb } from 'lucide-react';

const objectives = [
  'Gain key skills for rapid antenna development using software-supported automation techniques.',
  'Integrate machine learning and deep learning methods with electromagnetic principles for optimized antenna performance.',
  'Explore advanced modeling, projection techniques, and practical applications in 5G Networks, Satellite Communication, IoT, and Intelligent Systems.',
  'Develop hands-on experience using MATLAB and Python for antenna simulation and optimization.',
];

const highlights = [
  'MeitY Sponsored National Level Workshop',
  'Expert Sessions',
  'Hands-on Training',
  'MATLAB Demonstrations',
  'Python Demonstrations',
  'AI Powered Antenna Design',
  'Networking Opportunities',
  'Participation Certificate',
  'Research Guidance',
  'Publication Guidance',
];

const outcomes = [
  'Understand intelligent antenna design methodologies.',
  'Apply AI techniques to antenna optimization.',
  'Perform simulation and analysis using industry-standard tools.',
  'Explore research opportunities in wireless communication and AI-enabled systems.',
];

export default function About() {
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
    <section id="about" className="relative py-24 bg-dark-900" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">About the Workshop</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            Bridging AI & Antenna Engineering
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        {/* About text */}
        <div className="reveal glass-strong rounded-3xl p-8 sm:p-10 mb-12 max-w-4xl mx-auto text-center">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            This workshop focuses on the integration of{' '}
            <span className="text-cyan-400 font-semibold">Artificial Intelligence</span>,{' '}
            <span className="text-blue-400 font-semibold">Machine Learning</span>,{' '}
            <span className="text-emerald-400 font-semibold">Deep Learning</span>, and{' '}
            <span className="text-amber-400 font-semibold">Electromagnetic Intelligence</span>{' '}
            for rapid antenna design and optimization. Participants will gain insights into intelligent antenna
            development, simulation methodologies, wireless communication applications, and next-generation
            networking technologies.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {['5G Networks', 'Satellite Communication', 'IoT', 'Intelligent Systems', 'MATLAB', 'Python'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full glass text-cyan-300 text-xs font-medium border border-cyan-500/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Three columns: Objectives, Highlights, Outcomes */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Objectives */}
          <div className="reveal glass rounded-2xl p-6 sm:p-8" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Workshop Objectives</h3>
            </div>
            <ul className="space-y-4">
              {objectives.map((obj, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Highlights */}
          <div className="reveal glass rounded-2xl p-6 sm:p-8" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Key Highlights</h3>
            </div>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Outcomes */}
          <div className="reveal glass rounded-2xl p-6 sm:p-8" style={{ transitionDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Learning Outcomes</h3>
            </div>
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-5">Participants Will:</p>
            <ul className="space-y-4">
              {outcomes.map((o, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-emerald-400 font-bold text-lg">FREE</div>
                <div className="text-slate-400 text-xs mt-1">Registration Fee</div>
                <div className="text-amber-300 text-xs mt-1 font-medium">Deadline: 04 July 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
