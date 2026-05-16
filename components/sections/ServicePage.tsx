'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ServiceContent } from '@/lib/services-content';

const colorMap = {
  green: { accent: '#1b9e4b', bg: 'rgba(27,158,75,0.06)',  border: 'rgba(27,158,75,0.2)',  glow: 'rgba(27,158,75,0.12)'  },
  blue:  { accent: '#4285f4', bg: 'rgba(66,133,244,0.06)', border: 'rgba(66,133,244,0.2)', glow: 'rgba(66,133,244,0.12)' },
  gold:  { accent: '#f4b400', bg: 'rgba(244,180,0,0.06)',  border: 'rgba(244,180,0,0.2)',  glow: 'rgba(244,180,0,0.12)'  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
});

interface Props {
  service: ServiceContent;
}

export function ServicePage({ service }: Props) {
  const c = colorMap[service.color];

  return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh' }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-28 overflow-hidden" style={{ background: 'var(--c-surface)' }}>
        <div
          className="absolute pointer-events-none"
          style={{ width: 700, height: 700, background: `radial-gradient(circle, ${c.glow} 0%, transparent 70%)`, top: -250, right: -150, filter: 'blur(60px)' }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${c.border}, transparent)` }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link
            href="/#servicos"
            className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-70"
            style={{ color: 'var(--c-text-2)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Serviços
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-5 px-3 py-1 rounded-full"
              style={{ color: c.accent, background: c.bg, border: `1px solid ${c.border}` }}
            >
              {service.badge}
            </span>

            <h1 className="text-5xl md:text-6xl font-black leading-none mb-8" style={{ color: 'var(--c-text-1)' }}>
              {service.headline}
            </h1>

            {service.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed mb-4 max-w-2xl" style={{ color: 'var(--c-text-2)' }}>
                {p}
              </p>
            ))}

            <div className="mt-10">
              <Link
                href="/#contato"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: c.accent, color: '#fff' }}
              >
                {service.ctaLabel}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Como trabalhamos ─────────────────────────────────── */}
      <section className="py-24" style={{ background: 'var(--c-bg)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-2xl md:text-3xl font-black mb-12" style={{ color: 'var(--c-text-1)' }}>
            Como trabalhamos
          </motion.h2>

          <div className="flex flex-col gap-5">
            {service.steps.map((step, i) => (
              <motion.div
                key={step.number}
                {...fadeLeft(i * 0.08)}
                className="flex gap-6 p-7 rounded-2xl border"
                style={{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }}
              >
                <span
                  className="text-4xl font-black shrink-0 leading-none select-none"
                  style={{ color: c.accent, opacity: 0.4 }}
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="font-bold text-base mb-2" style={{ color: 'var(--c-text-1)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-2)' }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plataformas ──────────────────────────────────────── */}
      {service.platforms && service.platforms.length > 0 && (
        <section className="py-24" style={{ background: 'var(--c-surface)' }}>
          <div
            className="absolute left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${c.border}, transparent)` }}
          />
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2 {...fadeUp()} className="text-2xl md:text-3xl font-black mb-12" style={{ color: 'var(--c-text-1)' }}>
              Plataformas
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.platforms.map((platform, i) => (
                <motion.div
                  key={platform.name}
                  {...fadeUp(i * 0.07)}
                  className="p-5 rounded-xl border"
                  style={{ background: 'var(--c-card)', borderColor: 'var(--c-border)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: c.accent }} />
                    <p className="font-bold text-sm" style={{ color: 'var(--c-text-1)' }}>{platform.name}</p>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--c-text-2)' }}>{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Por que a AD TEC ─────────────────────────────────── */}
      <section className="py-24" style={{ background: 'var(--c-bg)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 {...fadeUp()} className="text-2xl md:text-3xl font-black mb-12" style={{ color: 'var(--c-text-1)' }}>
            Por que a AD TEC?
          </motion.h2>

          <div className="flex flex-col gap-4">
            {service.differentials.map((item, i) => (
              <motion.div key={i} {...fadeLeft(i * 0.06)} className="flex items-start gap-4">
                <span
                  className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: c.bg, border: `1px solid ${c.border}` }}
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke={c.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-2)' }}>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ────────────────────────────────────────── */}
      <section className="py-28 overflow-hidden" style={{ background: 'var(--c-surface)' }}>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div
            className="absolute pointer-events-none"
            style={{ width: 500, height: 500, background: `radial-gradient(circle, ${c.glow} 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', filter: 'blur(60px)' }}
          />
          <motion.div {...fadeUp()} className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: 'var(--c-text-1)' }}>
              Pronto para escalar seus resultados?
            </h2>
            <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: 'var(--c-text-2)' }}>
              Fale com nosso time e descubra como a AD TEC pode acelerar o crescimento do seu negócio.
            </p>
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: c.accent, color: '#fff' }}
            >
              {service.ctaLabel}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
