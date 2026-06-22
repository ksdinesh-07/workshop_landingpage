import { useState, useEffect } from 'react';
import { UserPlus } from 'lucide-react';

export default function StickyRegister() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 sm:hidden transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <a
        href="#registration"
        className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-2xl shadow-blue-600/50 hover:scale-105 active:scale-95 transition-transform"
      >
        <UserPlus className="w-4 h-4" />
        Register Now — Free
      </a>
    </div>
  );
}
