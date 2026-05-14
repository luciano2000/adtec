'use client';

import { useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/ui/LanguageProvider';
import { t } from '@/lib/translations';
import { submitContact } from '@/app/actions';

const WA_NUMBER  = '5511978385112';
const WA_MESSAGE = encodeURIComponent('Olá! Vim pelo site da AD TEC e gostaria de saber mais sobre os serviços.');

export function Contact() {
  const { lang }            = useLanguage();
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await submitContact(formData);
      setStatus(result.success ? 'success' : 'error');
      if (result.success) (e.target as HTMLFormElement).reset();
    });
  }

  const subjects = lang === 'pt' ? t.contact.subjects.pt : t.contact.subjects.en;

  return (
    <section
      id="contato"
      className="relative py-32 overflow-hidden"
      style={{ background: '#0c1220' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(27,158,75,0.4), rgba(66,133,244,0.4), transparent)' }}
      />

      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(27,158,75,0.07) 0%, transparent 70%)',
          bottom: -200,
          right: -100,
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{ color: '#1b9e4b', background: 'rgba(27,158,75,0.08)', border: '1px solid rgba(27,158,75,0.2)' }}
            >
              {t.contact.badge[lang]}
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6" style={{ color: '#e8eaf0' }}>
              {t.contact.heading[lang]}
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#6b7590' }}>
              {t.contact.sub[lang]}
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:atendimento@ad.tec.br"
                className="flex items-center gap-4 p-4 rounded-xl border transition-all"
                style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(27,158,75,0.3)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(27,158,75,0.1)', color: '#1b9e4b' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs" style={{ color: '#6b7590' }}>Email</p>
                  <p className="text-sm font-medium" style={{ color: '#e8eaf0' }}>atendimento@ad.tec.br</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border transition-all"
                style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(37,211,102,0.3)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(37,211,102,0.1)', color: '#25d366' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs" style={{ color: '#6b7590' }}>WhatsApp</p>
                  <p className="text-sm font-medium" style={{ color: '#e8eaf0' }}>(11) 97838-5112</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-8 rounded-2xl border"
              style={{ background: '#111827', borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: '#6b7590' }}>{t.contact.name[lang]}</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: '#0c1220',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#e8eaf0',
                    }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(27,158,75,0.5)'; }}
                    onBlur={(e)  => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: '#6b7590' }}>{t.contact.email[lang]}</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: '#0c1220',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#e8eaf0',
                    }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(27,158,75,0.5)'; }}
                    onBlur={(e)  => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: '#6b7590' }}>{t.contact.subject[lang]}</label>
                <select
                  name="subject"
                  required
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none"
                  style={{
                    background: '#0c1220',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#e8eaf0',
                  }}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(27,158,75,0.5)'; }}
                  onBlur={(e)  => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <option value="">—</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: '#6b7590' }}>{t.contact.message[lang]}</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                  style={{
                    background: '#0c1220',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#e8eaf0',
                  }}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(27,158,75,0.5)'; }}
                  onBlur={(e)  => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                />
              </div>

              {status === 'success' && (
                <p className="text-sm p-3 rounded-xl" style={{ color: '#1b9e4b', background: 'rgba(27,158,75,0.1)' }}>
                  {t.contact.success[lang]}
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm p-3 rounded-xl" style={{ color: '#f87171', background: 'rgba(248,113,113,0.1)' }}>
                  {t.contact.error[lang]}
                </p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold transition-all disabled:opacity-60"
                style={{ background: '#1b9e4b', color: '#fff' }}
                onMouseEnter={(e) => { if (!isPending) (e.currentTarget as HTMLElement).style.background = '#178940'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#1b9e4b'; }}
              >
                {isPending ? t.contact.sending[lang] : t.contact.send[lang]}
                {!isPending && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
