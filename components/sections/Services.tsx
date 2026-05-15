'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/ui/LanguageProvider';
import { t } from '@/lib/translations';

const colorMap: Record<string, { accent: string; bg: string; border: string }> = {
  green: { accent: '#1b9e4b', bg: 'rgba(27,158,75,0.06)',   border: 'rgba(27,158,75,0.2)'   },
  blue:  { accent: '#4285f4', bg: 'rgba(66,133,244,0.06)',  border: 'rgba(66,133,244,0.2)'  },
  gold:  { accent: '#f4b400', bg: 'rgba(244,180,0,0.06)',   border: 'rgba(244,180,0,0.2)'   },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Services() {
  const { lang } = useLanguage();

  return (
    <section id="servicos" className="relative py-32 overflow-hidden" style={{ background: 'var(--c-bg)' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(27,158,75,0.4), rgba(66,133,244,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: '#4285f4', background: 'rgba(66,133,244,0.08)', border: '1px solid rgba(66,133,244,0.2)' }}
          >
            {t.services.badge[lang]}
          </span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight" style={{ color: 'var(--c-text-1)' }}>
            {t.services.heading[lang]}
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {t.services.list.map((service, i) => {
            const colors = colorMap[service.color];
            const num = String(i + 1).padStart(2, '0');
            return (
              <motion.a
                key={service.id}
                href="#contato"
                variants={cardVariants}
                whileHover={{ y: -6, borderColor: colors.border }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between p-8 rounded-2xl border overflow-hidden"
                style={{
                  background: 'var(--c-surface)',
                  borderColor: 'var(--c-border)',
                  minHeight: 260,
                  textDecoration: 'none',
                }}
              >
                {/* Number — background decoration */}
                <span
                  className="absolute top-4 right-6 font-black select-none pointer-events-none leading-none"
                  style={{
                    fontSize: '6rem',
                    color: colors.accent,
                    opacity: 0.06,
                    lineHeight: 1,
                  }}
                >
                  {num}
                </span>

                {/* Top: number badge + accent dot */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: colors.accent }}
                  >
                    {num}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: colors.accent, opacity: 0.6 }}
                  />
                </div>

                {/* Title — large and dominant */}
                <div className="flex-1">
                  <h3
                    className="font-black leading-tight mb-4"
                    style={{
                      color: 'var(--c-text-1)',
                      fontSize: 'clamp(1.35rem, 2.5vw, 1.65rem)',
                    }}
                  >
                    {lang === 'pt' ? service.titlePt : service.titleEn}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-2)' }}>
                    {lang === 'pt' ? service.descPt : service.descEn}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div
                  className="flex items-center gap-2 mt-8 pt-5 border-t text-xs font-semibold transition-all"
                  style={{
                    borderColor: 'var(--c-border-s)',
                    color: colors.accent,
                  }}
                >
                  {lang === 'pt' ? 'Saiba mais' : 'Learn more'}
                  <svg
                    width="14" height="14" viewBox="0 0 16 16" fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
