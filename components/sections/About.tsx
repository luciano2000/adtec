'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/components/ui/LanguageProvider';
import { t } from '@/lib/translations';

function StatItem({ value, label }: { value: string; label: string }) {
  const ref  = useRef<HTMLDivElement>(null);
  const isIn = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isIn ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-start gap-1"
    >
      <span className="text-4xl md:text-5xl font-black gradient-text-blue-green">{value}</span>
      <span className="text-sm" style={{ color: '#6b7590' }}>{label}</span>
    </motion.div>
  );
}

export function About() {
  const { lang } = useLanguage();

  return (
    <section
      id="sobre"
      className="relative py-32 overflow-hidden"
      style={{ background: '#0c1220' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(66,133,244,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
                style={{ color: '#1b9e4b', background: 'rgba(27,158,75,0.08)', border: '1px solid rgba(27,158,75,0.2)' }}
              >
                {t.about.badge[lang]}
              </span>
              <h2
                className="text-4xl md:text-5xl font-black leading-tight mb-6"
                style={{ color: '#e8eaf0' }}
              >
                {t.about.heading[lang]}
              </h2>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: '#6b7590' }}
              >
                {t.about.body[lang]}
              </p>
            </motion.div>

            {/* Differentials */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
              className="flex flex-col gap-5"
            >
              {t.about.differentials.map((d, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    show:   { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="flex gap-4 p-5 rounded-xl border"
                  style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center text-sm font-bold"
                    style={{ background: 'rgba(27,158,75,0.1)', color: '#1b9e4b' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#e8eaf0' }}>
                      {lang === 'pt' ? d.titlePt : d.titleEn}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#6b7590' }}>
                      {lang === 'pt' ? d.descPt : d.descEn}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: stats */}
          <div className="lg:pt-16">
            <div className="grid grid-cols-2 gap-8 p-8 rounded-2xl border" style={{ background: '#111827', borderColor: 'rgba(255,255,255,0.07)' }}>
              {t.about.stats.map((stat) => (
                <StatItem
                  key={stat.value}
                  value={stat.value}
                  label={lang === 'pt' ? stat.labelPt : stat.labelEn}
                />
              ))}
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 h-px origin-left"
              style={{ background: 'linear-gradient(90deg, #1b9e4b, #4285f4, transparent)' }}
            />
            <p className="mt-4 text-xs" style={{ color: '#3d4460' }}>
              {lang === 'pt'
                ? 'Atuando desde 2000 no ecossistema de publicidade digital brasileiro.'
                : 'Operating since 2000 in the Brazilian digital advertising ecosystem.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
