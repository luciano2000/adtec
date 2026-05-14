'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/components/ui/LanguageProvider';
import { t } from '@/lib/translations';

export function Hero() {
  const { lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const contentY   = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentOp  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const blob1Y     = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const blob2Y     = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const blob3Y     = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const gridY      = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const scrollOp   = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100svh', background: '#060a14' }}
    >
      {/* Dot grid — parallax slow */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 dot-grid opacity-100"
      />

      {/* Color blobs */}
      <motion.div
        style={{ y: blob1Y }}
        className="absolute pointer-events-none"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="rounded-full"
          style={{
            width: 700,
            height: 700,
            background: 'radial-gradient(circle, rgba(27,158,75,0.18) 0%, transparent 70%)',
            position: 'absolute',
            top: '-200px',
            left: '-250px',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: blob2Y }}
        className="absolute pointer-events-none"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <div
          className="rounded-full"
          style={{
            width: 600,
            height: 600,
            background: 'radial-gradient(circle, rgba(66,133,244,0.15) 0%, transparent 70%)',
            position: 'absolute',
            top: '-150px',
            right: '-200px',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: blob3Y }}
        className="absolute pointer-events-none"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      >
        <div
          className="rounded-full"
          style={{
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(244,180,0,0.1) 0%, transparent 70%)',
            position: 'absolute',
            bottom: '-100px',
            left: '35%',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-5 py-2 mb-10 text-sm font-medium rounded-full border"
          style={{
            color: '#1b9e4b',
            borderColor: 'rgba(27,158,75,0.3)',
            background: 'rgba(27,158,75,0.06)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#1b9e4b', boxShadow: '0 0 6px #1b9e4b' }}
          />
          {t.hero.badge[lang]}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-black leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 10vw, 7.5rem)', color: '#e8eaf0' }}
        >
          {t.hero.headline1[lang]}{' '}
          <span className="gradient-text">{t.hero.headline2[lang]}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          style={{ color: '#6b7590' }}
        >
          {t.hero.sub[lang]}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#servicos"
            className="group flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all"
            style={{ background: '#1b9e4b', color: '#fff' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#178940')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#1b9e4b')}
          >
            {t.hero.cta1[lang]}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contato"
            className="px-8 py-4 rounded-full text-sm font-semibold border transition-all"
            style={{ color: '#e8eaf0', borderColor: 'rgba(255,255,255,0.15)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            {t.hero.cta2[lang]}
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t w-full"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          {[
            { value: '+20', label: lang === 'pt' ? 'anos de experiência' : 'years of experience' },
            { value: '+13', label: lang === 'pt' ? 'clientes atendidos'  : 'clients served'       },
            { value:   '5', label: lang === 'pt' ? 'serviços especializados' : 'specialized services' },
            { value: '100%', label: lang === 'pt' ? 'brasileiro'          : 'Brazilian'             },
          ].map((stat) => (
            <div key={stat.value} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-black" style={{ color: '#e8eaf0' }}>{stat.value}</span>
              <span className="text-xs" style={{ color: '#6b7590' }}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: scrollOp, position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: '#3d4460' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, #3d4460, transparent)' }}
        />
      </motion.div>
    </section>
  );
}
