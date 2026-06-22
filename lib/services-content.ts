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
  {
    slug: 'adops',
    color: 'green',
    badge: 'AdOps para Publishers',
    headline: 'Seu Hub de AdOps. Nossa expertise de 26 anos.',
    intro: [
      'Com mais de 26 anos de expertise em Operações de Publicidade para Publishers, somos o parceiro que o seu time de vendas precisava: assumimos toda a operação de AdOps do dia a dia para que você foque no que importa — crescer receita e entregar resultado para os seus anunciantes.',
      'Operamos principalmente no Google Ad Manager 360 e atuamos como uma extensão do seu time — executando campanhas, realizando otimizações contínuas e apresentando resultados com clareza para seu time interno ou diretamente para os seus clientes.',
    ],
    steps: [
      {
        number: '01',
        title: 'Onboarding & Diagnóstico',
        description: 'Mapeamos toda a sua operação atual: estrutura de inventário, campanhas ativas, configurações do Ad Manager, acordos comerciais e gargalos operacionais. Entregamos um plano de ação em até 5 dias úteis.',
      },
      {
        number: '02',
        title: 'Operação de Campanhas',
        description: 'Executamos trafficking completo — criação de line items, upload de criativos, targeting, caps de frequência, pacing e monitoramento de entrega. Zero atraso para o seu time de vendas.',
      },
      {
        number: '03',
        title: 'Otimização Contínua',
        description: 'Análise diária de performance, ajustes de prioridade, resolução de conflitos de inventário e maximização do fill rate. Cada impressão entregue com eficiência máxima.',
      },
      {
        number: '04',
        title: 'Relatórios & Apresentações',
        description: 'Dashboards customizados e relatórios periódicos com linguagem acessível para o seu time comercial ou para os anunciantes finais — evidenciando entrega, viewability, CTR e valor gerado.',
      },
    ],
    differentials: [
      '26 anos de experiência exclusiva em operações de publicidade para publishers',
      'Profundo domínio do Google Ad Manager 360 — da configuração ao troubleshooting avançado',
      'Atuamos como extensão do seu time: seu time de vendas tem suporte direto e ágil',
      'Operação de campanhas diretas e programáticas no mesmo fluxo integrado',
      'Relatórios claros para anunciantes — menos reuniões de alinhamento, mais renovações de contratos',
      'Experiência com publishers de grande porte, portais de notícias e veículos especializados',
    ],
    ctaLabel: 'Agendar Consultoria Estratégica',
    meta: {
      title: 'AdOps para Publishers — Google Ad Manager 360 | AD TEC',
      description: 'Hub de AdOps com 26 anos de expertise. Operação completa no Google Ad Manager 360, execução de campanhas, otimizações e relatórios para publishers e seu time de vendas.',
    },
  },
  {
    slug: 'adtech',
    color: 'blue',
    badge: 'Consultoria AdTech',
    headline: 'Seus dados de publicidade merecem render mais.',
    intro: [
      'Você é publisher — de qualquer tamanho, qualquer nicho — e sente que os seus números de publicidade ficam aquém do potencial? Fazemos uma consultoria completa em AdTech, analisando seus scripts, parceiros, integrações e configurações para garantir que suas métricas atendam às exigências do mercado atual.',
      'O resultado é concreto: mais viewability, anúncios que carregam mais rápido, CPMs mais altos e receita crescente — sem trocar de parceiros de mídia, apenas extraindo o máximo do que você já tem.',
    ],
    steps: [
      {
        number: '01',
        title: 'Auditoria de Stack',
        description: 'Analisamos todos os scripts de publicidade rodando no seu site — SSPs, DSPs, ferramentas de header bidding, lazy loading, wrappers — identificando conflitos, scripts desnecessários e oportunidades de ganho imediato.',
      },
      {
        number: '02',
        title: 'Diagnóstico de Viewability',
        description: 'Medimos viewability por posição, dispositivo e formato. Identificamos por que certas unidades ficam abaixo de 50% e desenhamos a correção — seja de layout, lazy load, scroll depth ou configuração de parceiro.',
      },
      {
        number: '03',
        title: 'Otimização de Velocidade',
        description: 'Scripts de publicidade são um dos principais vilões de page speed. Auditamos o impacto de cada tag no CLS, LCP e INP, e implementamos as correções — sem abrir mão da receita.',
      },
      {
        number: '04',
        title: 'Plano de Crescimento de CPM',
        description: 'Com dados reais em mãos, entregamos um roadmap de ações priorizadas pelo impacto em receita: novos parceiros a testar, configurações a ajustar, formatos a explorar e integrações a aprimorar.',
      },
    ],
    differentials: [
      'Visão de fora — enxergamos problemas que quem está dentro do dia a dia deixa de ver',
      'Experiência com publishers de todos os portes: do blog especializado ao grande portal',
      'Análise real de viewability com ferramentas de mercado, não apenas estimativas',
      'Foco em velocidade de carregamento de anúncios sem abrir mão de receita',
      'Conhecimento profundo de SSPs, header bidding, Google Ad Manager e Amazon TAM/UAM',
      'Entregamos um roadmap acionável — não um relatório que fica na gaveta',
    ],
    ctaLabel: 'Agendar Consultoria Estratégica',
    meta: {
      title: 'Consultoria AdTech — Viewability, CPM e Velocidade para Publishers | AD TEC',
      description: 'Auditoria completa de scripts, parceiros e integrações de publicidade. Aumentamos viewability, melhoramos velocidade de carregamento e elevamos CPM e receita do seu site.',
    },
  },
  {
    slug: 'branding',
    color: 'gold',
    badge: 'Identidade Visual & Branding',
    headline: 'Uma marca que fica na cabeça — para sempre.',
    intro: [
      'Sabemos que uma boa identidade visual pode marcar a memória do seu cliente para sempre. Por isso, não trabalhamos com templates. Usamos uma metodologia em que sua marca conversa diretamente com seus produtos, seus valores e as pessoas que você quer alcançar.',
      'Você senta com a gente, conta a sua história e nos mostra seus produtos. A partir daí, desenvolvemos soluções de branding completas — aplicáveis em tudo: website, embalagens, comunicação interna, redes sociais e muito mais.',
    ],
    steps: [
      {
        number: '01',
        title: 'Imersão',
        description: 'Ouvimos antes de criar. Entendemos sua história, seu mercado, seus concorrentes e, principalmente, as pessoas que você quer que se apaixonem pela sua marca. Quanto mais você nos conta, mais forte fica a identidade.',
      },
      {
        number: '02',
        title: 'Estratégia de Marca',
        description: 'Definimos posicionamento, proposta de valor, tom de voz e atributos visuais que vão orientar cada decisão criativa — do ícone do favicon ao layout da embalagem.',
      },
      {
        number: '03',
        title: 'Criação Visual',
        description: 'Desenvolvemos logotipo, paleta de cores, tipografia, padrões gráficos e todos os elementos visuais que formam a identidade. Apresentamos com contexto e justificativa estratégica, não apenas estética.',
      },
      {
        number: '04',
        title: 'Brandbook & Aplicações',
        description: 'Entregamos um brandbook completo com diretrizes de uso — e aplicamos a identidade nos pontos de contato definidos juntos: website, redes sociais, embalagens, sinalização ou comunicação interna.',
      },
    ],
    differentials: [
      'Metodologia própria: a marca é construída a partir da sua história e dos seus produtos',
      'Identidade pensada para todos os pontos de contato, não apenas para o logo',
      'Brandbook completo com diretrizes claras para a equipe e fornecedores',
      'Visão integrada entre branding e marketing digital — a marca funciona no mundo real e no digital',
      'Experiência com empresas B2B, B2C, startups e rebranding de marcas consolidadas',
      'Do naming ao brandbook — atendemos desde a criação do zero até a renovação de marcas existentes',
    ],
    ctaLabel: 'Agendar Consultoria de Marca',
    meta: {
      title: 'Identidade Visual & Branding — Do Logo ao Brandbook | AD TEC',
      description: 'Criamos identidades visuais que ficam na memória. Metodologia própria, brandbook completo e aplicação em todos os pontos de contato — do website às embalagens.',
    },
  },
  {
    slug: 'whatsapp-automation',
    color: 'green',
    badge: 'Automação WhatsApp',
    headline: 'Atendimento Inteligente 24h.',
    intro: [
      'Seu WhatsApp respondendo clientes 24 horas por dia, qualificando leads automaticamente e agendando consultas — sem precisar de mais funcionários.',
      'Implementamos e configuramos um assistente virtual com GPT-4o diretamente no WhatsApp da sua empresa. Da conexão ao treinamento da IA, cuidamos de tudo para você começar a atender melhor desde o primeiro dia.',
    ],
    steps: [
      {
        number: '01',
        title: 'Diagnóstico do negócio',
        description: 'Entendemos seu fluxo de atendimento atual, mapeamos as perguntas mais frequentes dos seus clientes e definimos o perfil ideal do seu assistente virtual.',
      },
      {
        number: '02',
        title: 'Configuração e treinamento da IA',
        description: 'Conectamos o WhatsApp, configuramos o tom de voz, os horários de atendimento e treinamos a IA com o conhecimento específico do seu negócio.',
      },
      {
        number: '03',
        title: 'Ativação e monitoramento',
        description: 'Colocamos o assistente em produção e monitoramos as primeiras conversas para garantir qualidade e ajustar o comportamento da IA conforme necessário.',
      },
      {
        number: '04',
        title: 'Otimização contínua',
        description: 'Analisamos periodicamente as conversas, melhoramos as respostas e ampliamos as capacidades do assistente conforme seu negócio cresce.',
      },
    ],
    platforms: [
      { name: 'WhatsApp Business', description: 'Conexão direta via API oficial Meta ou QR code, conforme sua necessidade.' },
      { name: 'GPT-4o', description: 'Modelo de IA da OpenAI para respostas naturais, inteligentes e contextuais.' },
      { name: 'HubSpot / Pipedrive / Zoho', description: 'Integração com os principais CRMs para sincronizar leads automaticamente.' },
      { name: 'Modo Takeover', description: 'Assuma qualquer conversa manualmente com um clique quando precisar do toque humano.' },
    ],
    differentials: [
      'Experiência real com a plataforma — desenvolvemos e operamos um SaaS de automação WhatsApp que trouxemos para dentro da AD TEC como consultoria.',
      'Configuração completa e treinamento da IA inclusos — não entregamos apenas a ferramenta, implementamos a solução do início ao fim.',
      'Integração com CRM e ferramentas de marketing para que nenhum lead se perca no caminho.',
      'Monitoramento e otimização contínua das conversas para melhorar continuamente a taxa de conversão.',
      'Conformidade com LGPD: toda a arquitetura de dados segue as melhores práticas de privacidade.',
      'Atendimento que funciona 24h por dia, 7 dias por semana — sem custo adicional de equipe.',
    ],
    ctaLabel: 'Quero automatizar meu atendimento',
    meta: {
      title: 'Automação de Atendimento via WhatsApp com IA | AD TEC',
      description: 'Implementamos assistentes virtuais com IA no seu WhatsApp: atendimento 24h, qualificação automática de leads e agendamento. Consultoria completa da AD TEC.',
    },
  },
];

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getServiceContent(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
