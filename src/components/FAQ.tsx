import { useState, useEffect, useRef } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Who can participate in this workshop?',
    a: 'Students, faculty members, and PhD scholars from AICTE-approved technical institutions across India are eligible to participate. This is a National Level event open to all.',
  },
  {
    q: 'Is there any registration fee?',
    a: 'No, there is absolutely no registration fee for any participant. The workshop is completely free for all eligible participants and is sponsored by MeitY (Ministry of Electronics and Information Technology).',
  },
  {
    q: 'Will certificates be provided?',
    a: 'Yes. On successful completion of the two-day workshop, all participants will be awarded an official Certificate of Participation from Erode Sengunthar Engineering College.',
  },
  {
    q: 'What is the mode of the workshop?',
    a: 'The workshop will be conducted in Offline Mode at the AI&DS Smart Classroom, Erode Sengunthar Engineering College, Perundurai, Erode – 638057. Outstation participants must make their own accommodation arrangements.',
  },
  {
    q: 'How do I register?',
    a: 'Fill out the registration form on this page with your details — name, email, phone, institution, department, designation, city, and state — and click "Complete Registration". Seats are limited so register early.',
  },
  {
    q: 'What is the last date for registration?',
    a: 'The last date for registration is 04 July 2026. Please register before seats are filled up.',
  },
  {
    q: 'Will transportation be provided?',
    a: 'College buses will be available at Perundurai Bus Stand to reach the college on the workshop dates. Transportation timings will be communicated via email to all registered participants.',
  },
  {
    q: 'Whom should I contact for assistance?',
    a: 'For any queries, contact Ms. P. Rajarajeswari at rajarajeswari.research@gmail.com or the official workshop email aiworkshop@gmail.com. Student Coordinator Prasanna S can be reached at +91 88076 77959.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
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
    <section id="faq" className="relative py-24 bg-dark-800" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            Frequently Asked Questions
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal glass rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left group"
              >
                <span className="font-medium text-white text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-cyan-400' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-48' : 'max-h-0'}`}
              >
                <div className="px-5 sm:px-6 pb-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
