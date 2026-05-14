'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/ui/LanguageProvider';
import { t } from '@/lib/translations';

const logos = [
  { name: '360 Pay',           file: '360-pay-vid.svg',        ext: 'svg'  },
  { name: 'Acquira',           file: 'acquira.svg',             ext: 'svg'  },
  { name: 'Club Med',          file: 'clubmed.svg',             ext: 'svg'  },
  { name: 'Correio Braziliense', file: 'correio-braziliense.svg', ext: 'svg' },
  { name: 'Cultura Pop',       file: 'culturapop.svg',          ext: 'svg'  },
  { name: 'Dailymotion',       file: 'dailymotion.svg',         ext: 'svg'  },
  { name: 'Diggy',             file: 'diggy.svg',               ext: 'svg'  },
  { name: 'EM',                file: 'em.svg',                  ext: 'svg'  },
  { name: 'Jadlog',            file: 'jadlog.svg',              ext: 'svg'  },
  { name: 'Lance!',            file: 'lance.svg',               ext: 'svg'  },
  { name: 'RetroGamer',        file: 'retrogamer.svg',          ext: 'svg'  },
  { name: 'UAI',               file: 'uai.svg',                 ext: 'svg'  },
  { name: 'Vrum',              file: 'vrum.svg',                ext: 'svg'  },
  { name: 'InfoMoney',         file: 'infomoney.svg',           ext: 'svg'  },
];

const half = Math.ceil(logos.length / 2);
const row1 = logos.slice(0, half);
const row2 = logos.slice(half);

function LogoTrack({ items, direction }: { items: typeof logos; direction: 'left' | 'right' }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden relative">
      <div className={direction === 'left' ? 'marquee-left' : 'marquee-right'} style={{ display: 'flex', gap: '3rem', width: 'max-content' }}>
        {doubled.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-shrink-0 flex items-center justify-center group"
            style={{ height: 56, minWidth: 120 }}
          >
            <Image
              src={`/clients/${logo.file}`}
              alt={logo.name}
              width={140}
              height={48}
              className="object-contain"
              style={{
                maxHeight: 48,
                filter: 'brightness(0) invert(0.55)',
                transition: 'filter 0.3s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = 'brightness(0) invert(0.9)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = 'brightness(0) invert(0.55)'; }}
              unoptimized={logo.ext === 'svg'}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  const { lang } = useLanguage();

  return (
    <section
      id="clientes"
      className="relative py-32 overflow-hidden"
      style={{ background: '#060a14' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(244,180,0,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: '#f4b400', background: 'rgba(244,180,0,0.08)', border: '1px solid rgba(244,180,0,0.2)' }}
          >
            {t.clients.badge[lang]}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#e8eaf0' }}>
            {t.clients.heading[lang]}
          </h2>
          <p className="text-base" style={{ color: '#6b7590' }}>
            {t.clients.sub[lang]}
          </p>
        </motion.div>
      </div>

      {/* Fade masks */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #060a14, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #060a14, transparent)' }}
        />

        <div className="flex flex-col gap-8">
          <LogoTrack items={row1} direction="left"  />
          <LogoTrack items={row2} direction="right" />
        </div>
      </div>
    </section>
  );
}
