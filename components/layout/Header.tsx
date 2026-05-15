'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/components/ui/LanguageProvider';
import { useTheme } from '@/components/ui/ThemeProvider';
import { t } from '@/lib/translations';

const navLinks = ['services', 'about', 'clients', 'blog', 'contact'] as const;
const anchors: Record<string, string> = {
  services: '#servicos',
  about:    '#sobre',
  clients:  '#clientes',
  blog:     '/blog',
  contact:  '#contato',
};

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function Header() {
  const { lang, setLang }       = useLanguage();
  const { theme, toggleTheme }  = useTheme();
  const pathname                = usePathname();
  const isHome                  = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function href(key: string) {
    const anchor = anchors[key];
    if (key === 'blog') return '/blog';
    return isHome ? anchor : `/${anchor}`;
  }

  const isDark        = theme === 'dark';
  const controlColor  = isDark ? '#6b7590' : '#4b5563';
  const controlBorder = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--c-header)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--c-border)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: 72 }}>
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={isDark ? '/logo-white.svg' : '/logo-dark.svg'}
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
              href={href(key)}
              className="text-sm font-medium transition-colors"
              style={{ color: controlColor }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--c-text-1)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = controlColor)}
            >
              {t.nav[key][lang]}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="flex items-center justify-center w-9 h-9 rounded-full border transition-all"
            style={{ color: controlColor, borderColor: controlBorder }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--c-text-1)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = controlColor)}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
            style={{ color: controlColor, borderColor: controlBorder }}
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>

          {/* CTA */}
          <a
            href={isHome ? '#contato' : '/#contato'}
            className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
            style={{ background: '#1b9e4b', color: '#fff' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#178940')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#1b9e4b')}
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
          {[
            menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 },
            menuOpen ? { opacity: 0 } : { opacity: 1 },
            menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 },
          ].map((anim, i) => (
            <motion.span
              key={i}
              animate={anim}
              className="block w-6 h-0.5 rounded-full origin-center"
              style={{ background: 'var(--c-text-1)' }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 top-[72px]"
              style={{ background: 'rgba(0,0,0,0.5)', zIndex: -1 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
              style={{ background: 'var(--c-menu)', backdropFilter: 'blur(20px)' }}
            >
              <nav className="flex flex-col px-6 py-6 gap-5">
                {navLinks.map((key) => (
                  <a
                    key={key}
                    href={href(key)}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium"
                    style={{ color: 'var(--c-text-1)' }}
                  >
                    {t.nav[key][lang]}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'var(--c-border)' }}>
                  <button
                    onClick={toggleTheme}
                    aria-label="Alternar tema"
                    className="flex items-center justify-center w-9 h-9 rounded-full border transition-all"
                    style={{ color: controlColor, borderColor: controlBorder }}
                  >
                    {isDark ? <SunIcon /> : <MoonIcon />}
                  </button>
                  <button
                    onClick={() => { setLang(lang === 'pt' ? 'en' : 'pt'); setMenuOpen(false); }}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                    style={{ color: controlColor, borderColor: controlBorder }}
                  >
                    {lang === 'pt' ? 'EN' : 'PT'}
                  </button>
                  <a
                    href={isHome ? '#contato' : '/#contato'}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-semibold px-5 py-2.5 rounded-full"
                    style={{ background: '#1b9e4b', color: '#fff' }}
                  >
                    {t.nav.cta[lang]}
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
