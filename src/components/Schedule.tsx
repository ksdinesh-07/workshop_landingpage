import { useEffect, useRef } from 'react';
import { Calendar, Clock, Mic2, Code2, FlaskConical, Award, Brain, BookOpen } from 'lucide-react';

const day1 = [
  { time: 'Morning', icon: Mic2, title: 'Inauguration', desc: 'Welcome address, lamp lighting, and opening remarks by dignitaries', color: 'text-amber-400', bg: 'bg-amber-600/10 border-amber-500/20' },
  { time: 'Forenoon', icon: BookOpen, title: 'Technical Sessions', desc: 'Expert talks on AI-EM Integration, antenna fundamentals, and ML-based design methodologies', color: 'text-blue-400', bg: 'bg-blue-600/10 border-blue-500/20' },
  { time: 'Post Lunch', icon: Code2, title: 'MATLAB Workshop', desc: 'Hands-on MATLAB demonstrations for antenna simulation, parameter optimization, and visualization', color: 'text-cyan-400', bg: 'bg-cyan-600/10 border-cyan-500/20' },
  { time: 'Afternoon', icon: FlaskConical, title: 'Hands-on Activities', desc: 'Practical lab sessions — design, simulate, and analyze antenna prototypes using software tools', color: 'text-emerald-400', bg: 'bg-emerald-600/10 border-emerald-500/20' },
];

const day2 = [
  { time: 'Morning', icon: Brain, title: 'AI Applications in Antenna Design', desc: 'Deep learning models for antenna pattern recognition, optimization using neural networks', color: 'text-purple-400', bg: 'bg-purple-600/10 border-purple-500/20' },
  { time: 'Forenoon', icon: Code2, title: 'Python Demonstrations', desc: 'Python-based antenna simulation using scikit-learn, TensorFlow, and custom EM solvers', color: 'text-blue-400', bg: 'bg-blue-600/10 border-blue-500/20' },
  { time: 'Post Lunch', icon: BookOpen, title: 'Research Opportunities', desc: 'Emerging research areas: beamforming, metamaterials, reconfigurable antennas, and publication guidance', color: 'text-cyan-400', bg: 'bg-cyan-600/10 border-cyan-500/20' },
  { time: 'Afternoon', icon: Award, title: 'Valedictory Session', desc: 'Certificate distribution, feedback, closing remarks, and vote of thanks', color: 'text-amber-400', bg: 'bg-amber-600/10 border-amber-500/20' },
];

function DaySchedule({ day, sessions, date }: { day: string; sessions: typeof day1; date: string }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="glass-strong rounded-2xl overflow-hidden">
        {/* Day header */}
        <div className="bg-gradient-to-r from-blue-900/60 to-cyan-900/40 px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <div>
              <div className="font-display font-bold text-lg text-white">{day}</div>
              <div className="text-cyan-300/70 text-sm">{date}</div>
            </div>
          </div>
        </div>

        {/* Sessions */}
        <div className="p-4 sm:p-6 space-y-4">
          {sessions.map(({ time, icon: Icon, title, desc, color, bg }, i) => (
            <div key={i} className={`flex gap-4 p-4 rounded-xl border ${bg} transition-all hover:scale-[1.02] duration-200`}>
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div className={`w-9 h-9 rounded-lg bg-dark-800/60 flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                {i < sessions.length - 1 && (
                  <div className="w-px flex-1 bg-white/10 min-h-[20px]" />
                )}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${color} flex items-center gap-1`}>
                    <Clock className="w-3 h-3" />
                    {time}
                  </span>
                </div>
                <div className="font-semibold text-white text-sm sm:text-base">{title}</div>
                <div className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Schedule() {
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
    <section id="schedule" className="relative py-24 bg-dark-800" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Event Schedule</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            Two-Day Program
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 reveal">
          <DaySchedule day="Day 1" sessions={day1} date="Monday, 06 July 2026" />
          <DaySchedule day="Day 2" sessions={day2} date="Tuesday, 07 July 2026" />
        </div>

        {/* Mode of conduction note */}
        <div className="mt-8 reveal glass rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-3xl mx-auto">
          <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center flex-shrink-0">
            <span className="text-emerald-400 font-bold text-sm">🏫</span>
          </div>
          <div>
            <div className="font-semibold text-white">Mode of Conduction: <span className="text-emerald-400">Offline</span></div>
            <div className="text-slate-400 text-sm mt-1">
              Sessions will be conducted at AI&DS Smart Classroom, Erode Sengunthar Engineering College, Perundurai, Erode – 638057.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
