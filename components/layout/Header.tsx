'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/ui/LanguageProvider';
import { t } from '@/lib/translations';

const navLinks = ['services', 'about', 'clients', 'blog', 'contact'] as const;
const anchors: Record<string, string> = {
  services: '#servicos',
  about:    '#sobre',
  clients:  '#clientes',
  blog:     '#blog',
  contact:  '#contato',
};

export function Header() {
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(6, 10, 20, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between" style={{ height: '72px' }}>
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-white.svg"
            alt="AD TEC"
            width={120}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((key) => (
            <a
              key={key}
              href={anchors[key]}
              className="text-sm font-medium transition-colors"
              style={{ color: '#6b7590' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#e8eaf0')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#6b7590')}
            >
              {t.nav[key][lang]}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
            style={{
              color: '#6b7590',
              borderColor: 'rgba(255,255,255,0.12)',
            }}
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>

          {/* CTA */}
          <a
            href="#contato"
            className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
            style={{
              background: '#1b9e4b',
              color: '#fff',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = '#178940')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = '#1b9e4b')}
          >
            {t.nav.cta[lang]}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded-full origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded-full origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(6, 10, 20, 0.98)', backdropFilter: 'blur(20px)' }}
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((key) => (
                <a
                  key={key}
                  href={anchors[key]}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium"
                  style={{ color: '#e8eaf0' }}
                >
                  {t.nav[key][lang]}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <button
                  onClick={() => { setLang(lang === 'pt' ? 'en' : 'pt'); setMenuOpen(false); }}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                  style={{ color: '#6b7590', borderColor: 'rgba(255,255,255,0.12)' }}
                >
                  {lang === 'pt' ? 'EN' : 'PT'}
                </button>
                <a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold px-5 py-2.5 rounded-full"
                  style={{ background: '#1b9e4b', color: '#fff' }}
                >
                  {t.nav.cta[lang]}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
