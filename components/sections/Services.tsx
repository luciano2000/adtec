'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/ui/LanguageProvider';
import { t } from '@/lib/translations';

const icons: Record<string, React.ReactNode> = {
  target: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
    </svg>
  ),
  seo: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
      <path d="M8 11h6M11 8v6" />
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
  chart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <path d="M2 20h20" />
      <path d="M6 14l3-4 3 3 6-9" />
    </svg>
  ),
  circuit: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="4" height="12" rx="1" /><rect x="18" y="6" width="4" height="12" rx="1" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M6 12h3M15 12h3M12 6V2M12 22v-3" />
    </svg>
  ),
};

const colorMap: Record<string, { accent: string; bg: string; border: string }> = {
  green: { accent: '#1b9e4b', bg: 'rgba(27,158,75,0.06)',   border: 'rgba(27,158,75,0.2)'   },
  blue:  { accent: '#4285f4', bg: 'rgba(66,133,244,0.06)',  border: 'rgba(66,133,244,0.2)'  },
  gold:  { accent: '#f4b400', bg: 'rgba(244,180,0,0.06)',   border: 'rgba(244,180,0,0.2)'   },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Services() {
  const { lang } = useLanguage();

  return (
    <section id="servicos" className="relative py-32 overflow-hidden" style={{ background: '#060a14' }}>
      {/* Subtle divider glow */}
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
          <h2
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{ color: '#e8eaf0' }}
          >
            {t.services.heading[lang]}
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.services.list.map((service, i) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative flex flex-col gap-5 p-7 rounded-2xl border transition-all duration-300 cursor-default"
                style={{
                  background: '#0c1220',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = colors.border;
                  (e.currentTarget as HTMLElement).style.background   = '#111827';
                  (e.currentTarget as HTMLElement).style.transform    = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow    = `0 20px 60px ${colors.bg}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLElement).style.background   = '#0c1220';
                  (e.currentTarget as HTMLElement).style.transform    = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow    = 'none';
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl"
                  style={{ background: colors.bg, color: colors.accent, border: `1px solid ${colors.border}` }}
                >
                  {icons[service.icon]}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-bold" style={{ color: '#e8eaf0' }}>
                    {lang === 'pt' ? service.titlePt : service.titleEn}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7590' }}>
                    {lang === 'pt' ? service.descPt : service.descEn}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-1 text-xs font-semibold transition-all" style={{ color: colors.accent }}>
                  {lang === 'pt' ? 'Saiba mais' : 'Learn more'}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
