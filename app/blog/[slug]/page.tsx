import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, renderMarkdown } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: post.image ? [{ url: post.image }] : [{ url: '/og-image.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : ['/og-image.png'],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const contentHtml = await renderMarkdown(post.content);

  return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh' }}>
      <article className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
          style={{ color: 'var(--c-text-2)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Blog
        </Link>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ color: '#4285f4', background: 'rgba(66,133,244,0.1)' }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--c-text-1)' }}>
          {post.title}
        </h1>

        {post.description && (
          <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--c-text-2)' }}>{post.description}</p>
        )}

        <div className="flex items-center gap-4 pb-8 mb-8 border-b text-sm" style={{ borderColor: 'var(--c-border)', color: 'var(--c-text-3)' }}>
          <span>AD TEC</span>
          <span>·</span>
          <time dateTime={post.date}>{formatDate(post.date, 'pt')}</time>
        </div>

        {post.image && (
          <div className="img-bleed relative rounded-2xl overflow-hidden mb-10" style={{ height: 400 }}>
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
        )}

        <div className="prose-adtec" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--c-border)' }}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: '#4285f4' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Ver todos os artigos
          </Link>
        </div>
      </article>
    </div>
  );
}
