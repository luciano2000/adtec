import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { LanguageProvider } from '@/components/ui/LanguageProvider';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://ad.tec.br'),
  title: {
    template: '%s | AD TEC',
    default: 'AD TEC — Agência AdTech | Publicidade com Inteligência',
  },
  description:
    'Agência AdTech brasileira especializada em mídia programática, tráfego pago, SEO e ad operations. Mais de 20 anos de experiência no ecossistema de ad tech.',
  keywords: [
    'adtech', 'ad tech', 'agência adtech', 'agência ad tech', 'ad tech brasil',
    'mídia programática', 'tráfego pago', 'google ads', 'meta ads',
    'SEO', 'adops', 'header bidding', 'google ad manager',
    'desenvolvimento web', 'consultoria adtech', 'performance digital',
  ],
  authors: [{ name: 'AD TEC' }],
  creator: 'AD TEC',
  publisher: 'AD TEC',
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: 'https://ad.tec.br',
    siteName: 'AD TEC',
    title: 'AD TEC — Agência AdTech | Publicidade com Inteligência',
    description:
      'Agência AdTech brasileira especializada em mídia programática, tráfego pago e SEO. Mais de 20 anos de experiência no ecossistema de ad tech.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AD TEC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AD TEC — Agência AdTech | Publicidade com Inteligência',
    description: 'Agência AdTech brasileira especializada em mídia programática, tráfego pago e SEO. Mais de 20 anos de experiência.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://ad.tec.br',
    languages: {
      'pt-BR': 'https://ad.tec.br',
      'en-US': 'https://ad.tec.br',
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#060a14',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>
        {/* Anti-FOUC: aplica o tema antes do primeiro render */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('adtec-theme')||'dark';document.documentElement.setAttribute('data-theme',t)}catch(e){}` }} />
        {/* JSON-LD: Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'AD TEC',
            alternateName: ['AD TECH', 'AdTech', 'ADTEC'],
            description: 'Agência AdTech brasileira especializada em mídia programática, tráfego pago, SEO e ad operations. Mais de 20 anos de experiência no ecossistema de ad tech.',
            url: 'https://ad.tec.br',
            logo: 'https://ad.tec.br/novo-logo-35A853.svg',
            email: 'atendimento@ad.tec.br',
            telephone: '+5511978385112',
            foundingDate: '2000',
            address: { '@type': 'PostalAddress', addressCountry: 'BR' },
            knowsAbout: [
              'AdTech', 'Ad Tech', 'Mídia Programática', 'Tráfego Pago',
              'Google Ads', 'Meta Ads', 'Header Bidding', 'Google Ad Manager',
              'SEO', 'Ad Operations', 'Programmatic Advertising', 'Identidade Visual',
            ],
          })}}
        />
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5N9NCZPC');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5N9NCZPC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
