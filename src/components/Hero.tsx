import { useEffect, useRef } from 'react';
import { Download, UserPlus, Wifi, Satellite, Radio, Zap, ChevronDown } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 8,
  duration: Math.random() * 10 + 10,
  color: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#22d3ee' : '#34d399',
}));

const FLOATING_ICONS = [
  { Icon: Wifi, x: '8%', y: '25%', delay: '0s', size: 28 },
  { Icon: Satellite, x: '88%', y: '20%', delay: '1.5s', size: 32 },
  { Icon: Radio, x: '5%', y: '65%', delay: '3s', size: 24 },
  { Icon: Zap, x: '92%', y: '60%', delay: '0.8s', size: 22 },
  { Icon: Wifi, x: '15%', y: '80%', delay: '2.2s', size: 20 },
  { Icon: Satellite, x: '80%', y: '75%', delay: '1s', size: 26 },
];

function AntennaVisualization() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Central antenna SVG */}
      <div className="relative opacity-20">
        <svg width="300" height="300" viewBox="0 0 300 300" className="animate-pulse-slow">
          {/* Antenna mast */}
          <line x1="150" y1="280" x2="150" y2="150" stroke="#22d3ee" strokeWidth="3" />
          {/* Dipole elements */}
          <line x1="80" y1="150" x2="220" y2="150" stroke="#22d3ee" strokeWidth="3" />
          <line x1="95" y1="170" x2="205" y2="170" stroke="#3b82f6" strokeWidth="2" />
          <line x1="110" y1="190" x2="190" y2="190" stroke="#3b82f6" strokeWidth="2" />
          <line x1="125" y1="210" x2="175" y2="210" stroke="#60a5fa" strokeWidth="2" />
          {/* Ground plane */}
          <line x1="50" y1="280" x2="250" y2="280" stroke="#22d3ee" strokeWidth="2" />
          {/* Radiation rings */}
          {[40, 70, 100, 130].map((r, i) => (
            <ellipse
              key={r}
              cx="150"
              cy="150"
              rx={r}
              ry={r * 0.5}
              fill="none"
              stroke={i % 2 === 0 ? '#22d3ee' : '#3b82f6'}
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity={0.6 - i * 0.1}
            />
          ))}
        </svg>
        {/* Signal radiation rings */}
        {[60, 90, 120].map((size, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-cyan-400/30 rounded-full"
            style={{
              width: size,
              height: size,
              animation: `signal 2s ease-out ${i * 0.7}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Draw signal waves
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        ctx.strokeStyle = w === 0 ? 'rgba(59,130,246,0.15)' : w === 1 ? 'rgba(34,211,238,0.12)' : 'rgba(52,211,153,0.1)';
        ctx.lineWidth = 1.5;
        for (let x = 0; x <= canvas.width; x += 2) {
          const y =
            canvas.height * 0.5 +
            Math.sin((x / canvas.width) * Math.PI * 4 + frame * 0.03 + w * 1.5) * (30 + w * 15) +
            Math.sin((x / canvas.width) * Math.PI * 8 + frame * 0.02) * 10;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Draw connection lines between random points
      if (frame % 120 === 0) {
        // Occasional network flash
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 hex-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-dark-900/80 to-dark-900" />

      {/* Animated canvas waves */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="particle absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animation: `particle ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Floating signal icons */}
      {FLOATING_ICONS.map(({ Icon, x, y, delay, size }, i) => (
        <div
          key={i}
          className="absolute opacity-20"
          style={{
            left: x,
            top: y,
            animation: `float ${6 + i}s ease-in-out ${delay} infinite`,
          }}
        >
          <Icon size={size} className="text-cyan-400" />
        </div>
      ))}

      {/* Antenna visualization */}
      <AntennaVisualization />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-400/5 blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Institution name */}
        <div className="mb-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 glass rounded-2xl px-6 py-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-semibold text-xs sm:text-sm tracking-widest uppercase">
              MeitY Sponsored
            </span>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-blue-300 font-semibold text-xs sm:text-sm tracking-widest uppercase">
              National Level Workshop
            </span>
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          </div>
        </div>

        <div className="mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-slate-300 text-sm sm:text-base font-medium tracking-wide uppercase">
            Erode Sengunthar Engineering College (Autonomous), Erode
          </p>
          <p className="text-slate-400 text-xs sm:text-sm tracking-widest uppercase mt-1">
            PRESENTS
          </p>
        </div>

        {/* Event title */}
        <h1
          className="mt-6 font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          AI Driven Antenna Design and Optimization
          <br />
          <span className="text-gradient">
            by Integrating Machine Learning, Deep Learning
          </span>
          <br />
          <span className="text-cyan-300">and Electromagnetic Intelligence</span>
        </h1>

        {/* Date badge */}
        <div
          className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="glass rounded-xl px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center">
              <span className="text-blue-300 text-sm">📅</span>
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Event Dates</div>
              <div className="text-white font-semibold text-sm sm:text-base">06 July – 07 July 2026</div>
            </div>
          </div>
          <div className="glass rounded-xl px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-600/30 flex items-center justify-center">
              <Radio size={16} className="text-cyan-300" />
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Organized By</div>
              <div className="text-white font-semibold text-sm">Dept. of AI & Data Science</div>
            </div>
          </div>
          <div className="glass rounded-xl px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/30 flex items-center justify-center">
              <span className="text-emerald-300 text-sm">📍</span>
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Venue</div>
              <div className="text-white font-semibold text-sm">Perundurai, Erode, Tamil Nadu</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#registration"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          >
            <UserPlus className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Register Now
            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="/public/1.Brochure%20Design.pdf"
            download="AI_Antenna_Workshop_Brochure.pdf"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-white/20 text-white font-bold text-base sm:text-lg hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            Download Brochure
          </a>
        </div>

        {/* Countdown */}
        <div
          className="mt-14 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <p className="text-slate-400 text-xs uppercase tracking-widest mb-5">
            Workshop Begins In
          </p>
          <CountdownTimer />
        </div>

        {/* Registration deadline */}
        <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-300 text-xs sm:text-sm font-medium">
              Last date for Registration: 04 July 2026 
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-500 text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-slate-500" />
      </div>
    </section>
  );
}
