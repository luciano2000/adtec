'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/ui/LanguageProvider';
import { t } from '@/lib/translations';

export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{ borderColor: 'rgba(255,255,255,0.07)', background: '#060a14' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image src="/logo-white.svg" alt="AD TEC" width={110} height={34} className="mb-4 h-8 w-auto" />
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#6b7590' }}>
              {t.footer.tagline[lang]}
            </p>
            <div className="flex gap-3">
              <a
                href={`mailto:atendimento@ad.tec.br`}
                className="text-xs px-3 py-1.5 rounded-full border transition-colors"
                style={{ color: '#6b7590', borderColor: 'rgba(255,255,255,0.1)' }}
              >
                atendimento@ad.tec.br
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#3d4460' }}>
              Links
            </p>
            <ul className="flex flex-col gap-3">
              {(['services', 'about', 'blog', 'contact'] as const).map((key) => (
                <li key={key}>
                  <a
                    href={key === 'blog' ? '/blog' : `#${key === 'services' ? 'servicos' : key === 'about' ? 'sobre' : 'contato'}`}
                    className="text-sm transition-colors"
                    style={{ color: '#6b7590' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#e8eaf0')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#6b7590')}
                  >
                    {t.footer.links[key][lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#3d4460' }}>
              {t.footer.links.services[lang]}
            </p>
            <ul className="flex flex-col gap-3">
              {t.services.list.map((s) => (
                <li key={s.id}>
                  <a
                    href="#servicos"
                    className="text-sm transition-colors"
                    style={{ color: '#6b7590' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#e8eaf0')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#6b7590')}
                  >
                    {lang === 'pt' ? s.titlePt : s.titleEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.07)', color: '#3d4460' }}
        >
          <span>© {year} AD TEC Soluções em Tecnologia e Publicidade LTDA. {t.footer.rights[lang]}</span>
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#1b9e4b' }}
            />
            <span>ad.tec.br</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
