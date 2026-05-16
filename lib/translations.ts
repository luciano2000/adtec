export const t = {
  nav: {
    services:  { pt: 'Serviços',  en: 'Services'  },
    about:     { pt: 'Sobre',     en: 'About'      },
    clients:   { pt: 'Clientes',  en: 'Clients'    },
    blog:      { pt: 'Blog',      en: 'Blog'       },
    contact:   { pt: 'Contato',   en: 'Contact'    },
    cta:       { pt: 'Fale Conosco', en: 'Get in Touch' },
  },

  hero: {
    badge:     { pt: 'Agência Digital de Performance', en: 'Digital Performance Agency' },
    headline1: { pt: 'Publicidade com',       en: 'Advertising with'     },
    headline2: { pt: 'Inteligência',          en: 'Intelligence'         },
    sub:       {
      pt: 'Conectamos marcas ao futuro da publicidade digital — com tecnologia, dados e resultados que importam.',
      en: 'We connect brands to the future of digital advertising — with technology, data, and results that matter.',
    },
    cta1: { pt: 'Ver Serviços',  en: 'Our Services' },
    cta2: { pt: 'Fale Conosco', en: 'Get in Touch'  },
  },

  services: {
    badge:    { pt: 'O que fazemos',    en: 'What we do'           },
    heading:  { pt: 'Soluções completas para o ecossistema de publicidade digital',
                en: 'Complete solutions for the digital advertising ecosystem' },
    list: [
      {
        id: 'paid-media',
        icon: 'target',
        color: 'green' as const,
        hasPage: true,
        titlePt: 'Tráfego Pago',
        titleEn: 'Paid Media',
        descPt:  'Gerenciamos campanhas de performance no Google Ads e Meta Ads com foco em resultados mensuráveis e otimização contínua de ROI.',
        descEn:  'We manage performance campaigns on Google Ads and Meta Ads with a focus on measurable results and continuous ROI optimization.',
      },
      {
        id: 'seo',
        icon: 'seo',
        color: 'blue' as const,
        hasPage: true,
        titlePt: 'SEO & Crescimento Orgânico',
        titleEn: 'SEO & Organic Growth',
        descPt:  'Posicionamento estratégico nos buscadores com auditoria técnica completa, construção de autoridade e crescimento sustentável.',
        descEn:  'Strategic search engine positioning with full technical audit, authority building, and sustainable growth.',
      },
      {
        id: 'web-dev',
        icon: 'code',
        color: 'gold' as const,
        hasPage: true,
        titlePt: 'Desenvolvimento Web',
        titleEn: 'Web Development',
        descPt:  'Sites institucionais, landing pages e sistemas web com foco em performance, Core Web Vitals e maximização de conversão.',
        descEn:  'Institutional websites, landing pages and web systems focused on performance, Core Web Vitals and conversion maximization.',
      },
      {
        id: 'adops',
        icon: 'chart',
        color: 'green' as const,
        hasPage: true,
        titlePt: 'AdOps para Publishers',
        titleEn: 'AdOps for Publishers',
        descPt:  'Monetização inteligente do seu inventário. Setup completo do Google Ad Manager, ativação de programática, header bidding e gestão de yields.',
        descEn:  'Smart inventory monetization. Full Google Ad Manager setup, programmatic activation, header bidding and yield management.',
      },
      {
        id: 'adtech',
        icon: 'circuit',
        color: 'blue' as const,
        hasPage: true,
        titlePt: 'Consultoria AdTech',
        titleEn: 'AdTech Consulting',
        descPt:  'Auditamos e otimizamos toda a sua stack de publicidade. Implementação de tags, ganho de velocidade, melhoria de viewability e CPM.',
        descEn:  'We audit and optimize your entire advertising stack. Tag implementation, speed gains, viewability improvement, and higher CPM.',
      },
      {
        id: 'branding',
        icon: 'branding',
        color: 'gold' as const,
        hasPage: true,
        titlePt: 'Identidade Visual & Branding',
        titleEn: 'Visual Identity & Branding',
        descPt:  'Criamos logotipos e identidades visuais que comunicam a essência da sua marca — do naming ao brandbook completo, com consistência em todos os pontos de contato.',
        descEn:  'We create logos and visual identities that communicate the essence of your brand — from naming to a complete brandbook, with consistency across all touchpoints.',
      },
    ],
  },

  about: {
    badge:   { pt: 'Sobre nós',    en: 'About us'    },
    heading: {
      pt: 'Mais de 20 anos conectando tecnologia e publicidade',
      en: 'Over 20 years connecting technology and advertising',
    },
    body: {
      pt: 'Nossa equipe reúne especialistas com trajetória consolidada no ecossistema digital. Desde 2000 acompanhamos cada evolução da publicidade online — do banner estático à inteligência artificial —, acumulando expertise técnica que poucas agências no Brasil têm.',
      en: 'Our team brings together specialists with a solid track record in the digital ecosystem. Since 2000 we have followed every evolution of online advertising — from static banners to artificial intelligence —, accumulating technical expertise that few agencies in Brazil possess.',
    },
    stats: [
      { value: '+20', labelPt: 'anos de experiência',  labelEn: 'years of experience'   },
      { value: '+13', labelPt: 'clientes atendidos',   labelEn: 'clients served'        },
      { value:   '6', labelPt: 'serviços especializados', labelEn: 'specialized services' },
      { value: '100%', labelPt: 'brasileiro',          labelEn: 'Brazilian'             },
    ],
    differentials: [
      {
        titlePt: 'Experiência Comprovada',
        titleEn: 'Proven Experience',
        descPt: 'Vivemos cada ciclo de evolução da publicidade digital e entendemos o que realmente funciona.',
        descEn: 'We have lived through every evolution cycle of digital advertising and understand what truly works.',
      },
      {
        titlePt: 'Soluções Sob Medida',
        titleEn: 'Tailored Solutions',
        descPt: 'Cada projeto recebe uma análise única. Não vendemos pacotes, entregamos estratégia.',
        descEn: 'Each project receives a unique analysis. We don\'t sell packages, we deliver strategy.',
      },
      {
        titlePt: 'Tecnologia de Ponta',
        titleEn: 'Cutting-Edge Technology',
        descPt: 'Utilizamos as ferramentas mais atuais do mercado de AdTech e desenvolvimento web.',
        descEn: 'We use the most current tools in the AdTech and web development market.',
      },
    ],
  },

  clients: {
    badge:   { pt: 'Clientes',                    en: 'Clients'                       },
    heading: { pt: 'Empresas que confiam em nós', en: 'Companies that trust us'       },
    sub:     {
      pt: 'Trabalhamos com marcas de diferentes segmentos, entregando resultados consistentes.',
      en: 'We work with brands across different segments, delivering consistent results.',
    },
  },

  blog: {
    badge:   { pt: 'Insights & Artigos', en: 'Insights & Articles' },
    heading: { pt: 'Do nosso time para você', en: 'From our team to you' },
    sub:     {
      pt: 'Publicamos regularmente sobre AdTech, programática, performance e tendências do mercado digital.',
      en: 'We regularly publish on AdTech, programmatic, performance and digital market trends.',
    },
    readMore: { pt: 'Ler artigo', en: 'Read article' },
    viewAll:  { pt: 'Ver todos os artigos', en: 'View all articles' },
    noImage:  { pt: 'Sem imagem', en: 'No image' },
  },

  contact: {
    badge:   { pt: 'Contato',                              en: 'Contact'                          },
    heading: { pt: 'Vamos conversar sobre o seu projeto',  en: "Let's talk about your project"    },
    sub:     {
      pt: 'Preencha o formulário ou nos chame diretamente pelo WhatsApp. Nossa equipe responde em até 24h.',
      en: 'Fill out the form or contact us directly via WhatsApp. Our team responds within 24 hours.',
    },
    name:    { pt: 'Seu nome',      en: 'Your name'    },
    email:   { pt: 'Seu e-mail',    en: 'Your email'   },
    subject: { pt: 'Assunto',       en: 'Subject'      },
    message: { pt: 'Mensagem',      en: 'Message'      },
    send:    { pt: 'Enviar mensagem', en: 'Send message' },
    sending: { pt: 'Enviando...',   en: 'Sending...'   },
    success: {
      pt: 'Mensagem enviada! Nossa equipe entrará em contato em breve.',
      en: 'Message sent! Our team will get back to you shortly.',
    },
    error: {
      pt: 'Erro ao enviar. Tente novamente ou nos chame no WhatsApp.',
      en: 'Error sending. Please try again or contact us via WhatsApp.',
    },
    orWhatsapp: { pt: 'Ou fale direto pelo WhatsApp', en: 'Or contact us directly via WhatsApp' },
    whatsappBtn: { pt: 'Abrir WhatsApp', en: 'Open WhatsApp' },
    subjects: {
      pt: ['Tráfego Pago', 'SEO', 'Desenvolvimento Web', 'AdOps', 'Consultoria AdTech', 'Outro'],
      en: ['Paid Media', 'SEO', 'Web Development', 'AdOps', 'AdTech Consulting', 'Other'],
    },
  },

  footer: {
    tagline: { pt: 'Publicidade com Inteligência', en: 'Advertising with Intelligence' },
    rights:  { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
    links: {
      services: { pt: 'Serviços', en: 'Services' },
      about:    { pt: 'Sobre',    en: 'About'    },
      blog:     { pt: 'Blog',     en: 'Blog'     },
      contact:  { pt: 'Contato',  en: 'Contact'  },
      privacy:  { pt: 'Privacidade', en: 'Privacy' },
    },
  },
} as const;
