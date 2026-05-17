import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { getAllServiceSlugs } from '@/lib/services-content';

const BASE = 'https://ad.tec.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const serviceSlugs = getAllServiceSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE}/servicos/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
