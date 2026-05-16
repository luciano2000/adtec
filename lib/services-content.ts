export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface ServicePlatform {
  name: string;
  description: string;
}

export interface ServiceContent {
  slug: string;
  color: 'green' | 'blue' | 'gold';
  badge: string;
  headline: string;
  intro: string[];
  steps: ServiceStep[];
  platforms?: ServicePlatform[];
  differentials: string[];
  ctaLabel: string;
  meta: {
    title: string;
    description: string;
  };
}

const services: ServiceContent[] = [
  {
    slug: 'paid-media',
    color: 'green',
    badge: 'Tráfego Pago',
    headline: 'Publicidade com Inteligência',
    intro: [
      'Implementamos inteligência na aquisição de tráfego B2B e B2C, integrando uma operação eficiente com profissionais altamente experientes no mercado digital — potencializados por inteligência artificial para análise de dados e otimização constante.',
      'Não gerenciamos campanhas pelo volume. Gerenciamos pelo resultado. Definimos juntos o objetivo do seu negócio — geração de leads qualificados, vendas diretas, reconhecimento de marca ou tráfego para monetização — e executamos com maestria, total transparência e foco em crescimento sustentável.',
    ],
    steps: [
      {
        number: '01',
        title: 'Diagnóstico',
        description: 'Auditamos seu histórico de campanhas, mapeamos o público-alvo, analisamos a concorrência e identificamos oportunidades de crescimento imediatas — com dados, não com suposições.',
      },
      {
        number: '02',
        title: 'Estratégia',
        description: 'Definimos juntos o objetivo e construímos um plano de mídia personalizado: canais, formatos, distribuição de budget, segmentações e KPIs claros antes de qualquer investimento.',
      },
      {
        number: '03',
        title: 'Execução',
        description: 'Implementação técnica impecável — estrutura de campanhas, criativos, pixels, eventos de conversão e integrações de dados configurados com precisão por quem faz isso há mais de 20 anos.',
      },
      {
        number: '04',
        title: 'Otimização Contínua',
        description: 'Monitoramento diário, testes A/B, ajustes de lances e segmentação guiados por dados reais. Nossa camada de inteligência artificial analisa padrões e antecipa oportunidades antes que o mercado as veja.',
      },
    ],
    platforms: [
      { name: 'Google Ads', description: 'Search, Display, YouTube, Performance Max, Shopping' },
      { name: 'Meta Ads', description: 'Facebook, Instagram, Reels, Advantage+ Campaigns' },
      { name: 'TikTok for Business', description: 'In-Feed Ads, TopView, Brand Takeover, Spark Ads' },
      { name: 'Spotify Ads Manager', description: 'Audio Ads, Video Takeover, Podcast Ads' },
      { name: 'X (Twitter) Ads', description: 'Promoted Posts, Trend Takeover, Follower Campaigns' },
    ],
    differentials: [
      'Parceiros oficiais Google e Meta — acesso antecipado a betas e suporte prioritário',
      'Dashboards em tempo real: você vê cada centavo do investimento, sempre',
      'Time sênior com mais de 20 anos de experiência em mídia digital',
      'Inteligência artificial aplicada à otimização — decisões baseadas em dados, não em feeling',
      'Relatórios semanais com análise estratégica, não apenas métricas sem contexto',
      'Atendimento direto com o estrategista responsável pela sua conta, sem intermediários',
    ],
    ctaLabel: 'Agendar Consultoria Estratégica',
    meta: {
      title: 'Tráfego Pago — Google Ads, Meta Ads e mais | AD TEC',
      description: 'Gestão de tráfego pago B2B e B2C com inteligência artificial. Parceiros Google e Meta. Dashboards em tempo real e mais de 20 anos de experiência em mídia digital.',
    },
  },
  {
    slug: 'seo',
    color: 'blue',
    badge: 'SEO & Crescimento Orgânico',
    headline: 'Seja encontrado. Sem depender de anúncios.',
    intro: [
      'Analisamos seu website ou loja virtual de ponta a ponta — aspectos técnicos, estruturais, de conteúdo e de autoridade — para que cada página atenda às mais recentes exigências dos buscadores e dos sistemas de IA generativa.',
      'O resultado é um crescimento orgânico consistente: mais visibilidade no Google, mais tráfego qualificado e menos dependência de tráfego pago. Clientes que chegam até você porque você é relevante — não porque você pagou para aparecer.',
    ],
    steps: [
      {
        number: '01',
        title: 'Auditoria Completa',
        description: 'Rastreamos todo o site: velocidade, Core Web Vitals, indexação, erros técnicos, estrutura de URLs, dados estruturados, canonicals e cobertura de palavras-chave. Entregamos um relatório com prioridades claras.',
      },
      {
        number: '02',
        title: 'Estratégia de Palavras-chave',
        description: 'Mapeamos as intenções de busca do seu público — informacional, navegacional e transacional — e definimos quais termos têm o melhor equilíbrio entre volume, concorrência e potencial de conversão.',
      },
      {
        number: '03',
        title: 'SEO Técnico & On-page',
        description: 'Otimizamos títulos, meta descriptions, headings, imagens, velocidade de carregamento e estrutura de links internos. Implementamos dados estruturados (schema.org) para featured snippets e resultados enriquecidos.',
      },
      {
        number: '04',
        title: 'Autoridade & Resultados',
        description: 'Construímos autoridade com estratégia de conteúdo e link building relevante. Monitoramos rankings, tráfego orgânico e conversões mês a mês — com relatórios que mostram evolução real, não apenas posições.',
      },
    ],
    differentials: [
      'Análise técnica profunda além do básico — rastreamos o que ferramentas automatizadas ignoram',
      'SEO preparado para IA generativa (SGE, Perplexity, Gemini) — o futuro das buscas',
      'Integração com Google Search Console, Analytics e dados de performance reais',
      'Conteúdo estratégico otimizado — escrevemos com intenção, não apenas com palavras-chave',
      'Relatórios mensais com evolução de rankings, tráfego orgânico e impacto em receita',
      'Mais de 20 anos de experiência com sites de alto tráfego e grandes publishers',
    ],
    ctaLabel: 'Agendar Consultoria Estratégica',
    meta: {
      title: 'SEO & Crescimento Orgânico — Auditoria e Estratégia | AD TEC',
      description: 'Auditoria técnica completa, estratégia de palavras-chave e SEO preparado para IA generativa. Cresça organicamente no Google sem depender de tráfego pago.',
    },
  },
  {
    slug: 'web-dev',
    color: 'gold',
    badge: 'Desenvolvimento Web',
    headline: 'Presença digital que trabalha por você.',
    intro: [
      'Sua empresa ainda não está na rede — ou seu site já ficou para trás? Desenvolvemos sites institucionais, landing pages e lojas virtuais com as mais novas tecnologias, garantindo que cada projeto seja leve, rápido e transmita ao seu cliente exatamente o que ele precisa ver para tomar uma decisão.',
      'Não entregamos apenas código bonito. Entregamos performance, conversão e uma experiência digital que representa a sua marca com a seriedade que ela merece — do design ao deploy, passando por SEO técnico e Core Web Vitals desde o primeiro commit.',
    ],
    steps: [
      {
        number: '01',
        title: 'Briefing & Estratégia',
        description: 'Entendemos seu negócio, seu público e seus objetivos antes de escrever uma linha de código. Definimos arquitetura, tecnologias, fluxos de navegação e KPIs de conversão.',
      },
      {
        number: '02',
        title: 'Design & UX',
        description: 'Criamos layouts modernos e funcionais, alinhados à identidade da marca. Cada detalhe é pensado para guiar o visitante em direção à ação — seja um contato, uma compra ou um cadastro.',
      },
      {
        number: '03',
        title: 'Desenvolvimento',
        description: 'Implementamos com tecnologias atuais — Next.js, React, performance-first. Código limpo, acessível, seguro e preparado para crescer junto com o seu negócio.',
      },
      {
        number: '04',
        title: 'Lançamento & Evolução',
        description: 'Deploy otimizado, integração com Analytics, Tag Manager e ferramentas de CRO. Após o lançamento, acompanhamos métricas e evoluímos o projeto com base em dados reais.',
      },
    ],
    differentials: [
      'Sites rápidos por padrão — Core Web Vitals otimizados desde o início',
      'SEO técnico integrado ao desenvolvimento, não adicionado depois como correção',
      'Mobile-first: experiência perfeita em qualquer dispositivo e tamanho de tela',
      'Integração nativa com Google Analytics, Tag Manager, CRM e ferramentas de automação',
      'Código limpo e bem estruturado — fácil de manter, expandir e transferir',
      'Mais de 20 anos entregando projetos web para publishers, e-commerces e empresas B2B',
    ],
    ctaLabel: 'Agendar Consultoria Estratégica',
    meta: {
      title: 'Desenvolvimento Web — Sites Rápidos e Focados em Conversão | AD TEC',
      description: 'Criamos sites institucionais, landing pages e lojas virtuais com as novas tecnologias. Leves, rápidos, com SEO técnico integrado e foco em conversão.',
    },
  },
];

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getServiceContent(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
