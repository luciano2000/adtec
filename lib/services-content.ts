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
];

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getServiceContent(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
