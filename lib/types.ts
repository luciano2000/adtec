export type Language = 'pt' | 'en';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  tags?: string[];
  lang?: Language;
  draft?: boolean;
  content: string;
}

export interface Service {
  id: string;
  icon: string;
  titlePt: string;
  titleEn: string;
  descPt: string;
  descEn: string;
  color: 'green' | 'blue' | 'gold';
}
