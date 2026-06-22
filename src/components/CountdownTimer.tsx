import { useState, useEffect } from 'react';

const TARGET = new Date('2026-07-06T09:00:00+05:30');

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = TARGET.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-2 sm:gap-4 justify-center">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-2 sm:gap-4">
          <div className="glass rounded-xl p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] text-center glow-blue">
            <div className="font-display text-2xl sm:text-4xl font-bold text-gradient tabular-nums">
              {pad(value)}
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{label}</div>
          </div>
          {i < 3 && (
            <span className="text-2xl sm:text-3xl font-bold text-cyan-400 opacity-60 mb-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
