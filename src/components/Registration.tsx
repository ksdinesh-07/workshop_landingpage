import { useState, useEffect, useRef } from 'react';
import { UserPlus, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const DESIGNATIONS = ['Student (UG)', 'Student (PG)', 'PhD Scholar', 'Faculty', 'Research Scholar', 'Industry Professional', 'Other'];

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
  'West Bengal', 'Delhi', 'Jammu & Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh',
];

type Field = 'full_name' | 'email' | 'phone' | 'institution' | 'department' | 'designation' | 'city' | 'state';

const FIELDS: { id: Field; label: string; type: string; placeholder: string }[] = [
  { id: 'full_name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
  { id: 'phone', label: 'Phone / WhatsApp Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
  { id: 'institution', label: 'Institution / College', type: 'text', placeholder: 'Name of your institution' },
  { id: 'department', label: 'Department', type: 'text', placeholder: 'e.g. Electronics & Communication' },
  { id: 'city', label: 'City', type: 'text', placeholder: 'Your city' },
];

export default function Registration() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<Record<Field, string>>({
    full_name: '', email: '', phone: '', institution: '', department: '',
    designation: '', city: '', state: '',
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

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

  const validate = () => {
    const errs: Partial<Record<Field, string>> = {};
    if (!form.full_name.trim()) errs.full_name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/[\s+\-()]/g, ''))) errs.phone = 'Enter a valid 10-digit mobile number';
    if (!form.institution.trim()) errs.institution = 'Institution is required';
    if (!form.department.trim()) errs.department = 'Department is required';
    if (!form.designation) errs.designation = 'Please select your designation';
    if (!form.city.trim()) errs.city = 'City is required';
    if (!form.state) errs.state = 'Please select your state';
    return errs;
  };

  const handleChange = (field: Field, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus('submitting');
    try {
      const { error } = await supabase.from('registrations').insert([{ ...form }]);
      if (error) throw error;
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Registration failed. Please try again.');
    }
  };

  const inputCls = (field: Field) =>
    `w-full bg-dark-800/80 border ${errors[field] ? 'border-red-500/60' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all`;

  const selectCls = (field: Field) =>
    `w-full bg-dark-800/80 border ${errors[field] ? 'border-red-500/60' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all appearance-none`;

  return (
    <section id="registration" className="relative py-24 bg-dark-900" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
            <UserPlus className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Registration</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            Register for the Workshop
          </h2>
          <p className="text-slate-400 mt-3 text-sm">

          </p>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        <div className="reveal glass-strong rounded-3xl p-6 sm:p-10 border border-white/10">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-emerald-600/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Registration Successful!</h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto">
                Thank you, <span className="text-cyan-400 font-semibold">{form.full_name}</span>! Your registration
                has been received. We'll send details to <span className="text-blue-400">{form.email}</span>.
              </p>
              <div className="mt-6 glass rounded-2xl p-4 max-w-sm mx-auto text-left">
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-3">Workshop Details</div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div><span className="text-slate-500">Date:</span> 06–07 July 2026</div>
                  <div><span className="text-slate-500">Mode:</span> Offline</div>
                  <div><span className="text-slate-500">Venue:</span> AI&DS Smart Classroom, ESEC</div>
                </div>
              </div>
              <button
                onClick={() => { setStatus('idle'); setForm({ full_name: '', email: '', phone: '', institution: '', department: '', designation: '', city: '', state: '' }); }}
                className="mt-8 px-6 py-2.5 rounded-full glass border border-white/20 text-slate-300 text-sm hover:bg-white/5 transition-all"
              >
                Register Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                {FIELDS.slice(0, 2).map(({ id, label, type, placeholder }) => (
                  <div key={id} className="sm:col-span-2 md:col-span-1">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{label}</label>
                    <input
                      type={type}
                      value={form[id]}
                      onChange={(e) => handleChange(id, e.target.value)}
                      placeholder={placeholder}
                      className={inputCls(id)}
                    />
                    {errors[id] && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors[id]}</p>}
                  </div>
                ))}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className={inputCls('phone')}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {FIELDS.slice(3, 5).map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{label}</label>
                    <input
                      type={type}
                      value={form[id]}
                      onChange={(e) => handleChange(id, e.target.value)}
                      placeholder={placeholder}
                      className={inputCls(id)}
                    />
                    {errors[id] && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors[id]}</p>}
                  </div>
                ))}
              </div>

              {/* Designation */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Designation</label>
                <select
                  value={form.designation}
                  onChange={(e) => handleChange('designation', e.target.value)}
                  className={selectCls('designation')}
                >
                  <option value="" className="bg-dark-800">Select Designation</option>
                  {DESIGNATIONS.map((d) => (
                    <option key={d} value={d} className="bg-dark-800">{d}</option>
                  ))}
                </select>
                {errors.designation && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.designation}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* City */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">City</label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    placeholder="Your city"
                    className={inputCls('city')}
                  />
                  {errors.city && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.city}</p>}
                </div>

                {/* State */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">State</label>
                  <select
                    value={form.state}
                    onChange={(e) => handleChange('state', e.target.value)}
                    className={selectCls('state')}
                  >
                    <option value="" className="bg-dark-800">Select State</option>
                    {INDIAN_STATES.map((s) => (
                      <option key={s} value={s} className="bg-dark-800">{s}</option>
                    ))}
                  </select>
                  {errors.state && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.state}</p>}
                </div>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-300 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-3"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting Registration...
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    Complete Registration
                  </>
                )}
              </button>

              <p className="text-center text-slate-500 text-xs">
                By registering, you agree to receive workshop-related communications.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
