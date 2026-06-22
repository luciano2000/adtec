'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/ui/LanguageProvider';

const STEPS = [
  {
    number: '01',
    labelPt: 'Marca',
    labelEn: 'Brand',
    titlePt: 'Identidade Visual',
    titleEn: 'Visual Identity',
    descPt: 'Criamos ou evoluímos sua marca para comunicar exatamente o que você quer transmitir ao mercado.',
    descEn: 'We create or evolve your brand to communicate exactly what you want to convey to the market.',
    color: '#f4b400',
    bg: 'rgba(244,180,0,0.08)',
    border: 'rgba(244,180,0,0.2)',
  },
  {
    number: '02',
    labelPt: 'Site',
    labelEn: 'Website',
    titlePt: 'Presença Digital',
    titleEn: 'Digital Presence',
    descPt: 'Construímos sites e landing pages com performance, SEO técnico e foco total em conversão.',
    descEn: 'We build websites and landing pages with performance, technical SEO and full conversion focus.',
    color: '#4285f4',
    bg: 'rgba(66,133,244,0.08)',
    border: 'rgba(66,133,244,0.2)',
  },
  {
    number: '03',
    labelPt: 'Tráfego',
    labelEn: 'Traffic',
    titlePt: 'Tráfego Pago + SEO',
    titleEn: 'Paid Traffic + SEO',
    descPt: 'Atraímos visitantes qualificados via anúncios pagos no Google e Meta e crescimento orgânico nos buscadores.',
    descEn: 'We attract qualified visitors via paid ads on Google and Meta and organic search engine growth.',
    color: '#4285f4',
    bg: 'rgba(66,133,244,0.08)',
    border: 'rgba(66,133,244,0.2)',
  },
  {
    number: '04',
    labelPt: 'Atendimento',
    labelEn: 'Service',
    titlePt: 'IA no WhatsApp',
    titleEn: 'AI on WhatsApp',
    descPt: 'Convertemos visitantes em clientes com IA atendendo 24h pelo WhatsApp, qualificando e agendando automaticamente.',
    descEn: 'We convert visitors into customers with AI answering 24h on WhatsApp, qualifying and scheduling automatically.',
    color: '#1b9e4b',
    bg: 'rgba(27,158,75,0.08)',
    border: 'rgba(27,158,75,0.2)',
  },
];

export function Ecosystem() {
  const { lang } = useLanguage();

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: 'var(--c-surface)' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(244,180,0,0.4), rgba(66,133,244,0.4), rgba(27,158,75,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: '#1b9e4b', background: 'rgba(27,158,75,0.08)', border: '1px solid rgba(27,158,75,0.2)' }}
          >
            {lang === 'pt' ? 'Ecossistema Completo' : 'Complete Ecosystem'}
          </span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5" style={{ color: 'var(--c-text-1)' }}>
            {lang === 'pt'
              ? 'Do zero ao cliente — tudo na AD TEC'
              : 'From scratch to customer — all at AD TEC'}
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--c-text-2)' }}>
            {lang === 'pt'
              ? 'A única agência AdTech brasileira com soluções para todo o ciclo de crescimento digital. Cada serviço foi pensado para trabalhar junto — integrado, coerente, eficiente.'
              : 'The only Brazilian AdTech agency with solutions for the entire digital growth cycle. Each service is designed to work together — integrated, consistent, efficient.'}
          </p>
        </motion.div>

        {/* Steps flow */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3">
          {STEPS.map((step, i) => (
            <Fragment key={step.number}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 p-7 rounded-2xl border"
                style={{ background: 'var(--c-card)', borderColor: 'var(--c-border)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-xs font-black tracking-widest px-2 py-0.5 rounded-full"
                    style={{ color: step.color, background: step.bg, border: `1px solid ${step.border}` }}
                  >
                    {step.number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--c-text-3)' }}>
                    {lang === 'pt' ? step.labelPt : step.labelEn}
                  </span>
                </div>

                <h3 className="font-black text-lg mb-3" style={{ color: 'var(--c-text-1)' }}>
                  {lang === 'pt' ? step.titlePt : step.titleEn}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-2)' }}>
                  {lang === 'pt' ? step.descPt : step.descEn}
                </p>

                <div className="mt-6 w-8 h-0.5 rounded-full" style={{ background: step.color, opacity: 0.45 }} />
              </motion.div>

              {/* Arrow connector between steps (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:flex items-center justify-center shrink-0 w-5" style={{ color: 'var(--c-text-3)' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-12 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ borderColor: 'var(--c-border-s)' }}
        >
          <p className="text-2xl md:text-3xl font-black" style={{ color: 'var(--c-text-1)' }}>
            {lang === 'pt'
              ? 'Tudo integrado. Tudo funcionando. Um único parceiro.'
              : 'All integrated. All working. One single partner.'}
          </p>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold shrink-0 transition-opacity hover:opacity-90"
            style={{ background: '#1b9e4b', color: '#fff' }}
          >
            {lang === 'pt' ? 'Ver todos os serviços' : 'See all services'}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
