import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { BlogCard } from '@/components/ui/BlogCard';

export const metadata: Metadata = {
  title: 'Blog — Insights & Artigos',
  description:
    'Publicamos regularmente sobre AdTech, mídia programática, tráfego pago, SEO e tendências do mercado digital.',
  openGraph: {
    title: 'Blog | AD TEC',
    description: 'Insights sobre AdTech, mídia programática, tráfego pago e SEO.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24">
        <div className="mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: '#4285f4', background: 'rgba(66,133,244,0.08)', border: '1px solid rgba(66,133,244,0.2)' }}
          >
            Blog
          </span>
          <h1 className="text-5xl font-black mb-4" style={{ color: 'var(--c-text-1)' }}>
            Insights &amp; Artigos
          </h1>
          <p style={{ color: 'var(--c-text-2)' }}>
            Perspectivas do nosso time sobre o ecossistema de publicidade digital.
          </p>
        </div>

        {posts.length === 0 ? (
          <p style={{ color: 'var(--c-text-2)' }}>Nenhum artigo publicado ainda.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} lang="pt" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
