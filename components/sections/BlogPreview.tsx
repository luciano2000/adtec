'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/ui/LanguageProvider';
import { t } from '@/lib/translations';
import type { BlogPost } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface Props {
  posts: BlogPost[];
}

export function BlogPreview({ posts }: Props) {
  const { lang } = useLanguage();

  if (posts.length === 0) return null;

  return (
    <section
      id="blog"
      className="relative py-32 overflow-hidden"
      style={{ background: 'var(--c-bg)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(66,133,244,0.3), rgba(27,158,75,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{ color: '#4285f4', background: 'rgba(66,133,244,0.08)', border: '1px solid rgba(66,133,244,0.2)' }}
            >
              {t.blog.badge[lang]}
            </span>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: 'var(--c-text-1)' }}>
              {t.blog.heading[lang]}
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: '#4285f4' }}
          >
            {t.blog.viewAll[lang]}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        {/* Posts */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.slice(0, 3).map((post) => (
            <motion.article
              key={post.slug}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300"
              style={{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(66,133,244,0.3)';
                (e.currentTarget as HTMLElement).style.transform    = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.transform    = 'translateY(0)';
              }}
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden" style={{ height: 200, background: 'var(--c-card)' }}>
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(66,133,244,0.1), rgba(27,158,75,0.1))' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ color: '#4285f4', background: 'rgba(66,133,244,0.1)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h3 className="text-base font-bold leading-snug" style={{ color: 'var(--c-text-1)' }}>
                  {post.title}
                </h3>

                {post.description && (
                  <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--c-text-2)' }}>
                    {post.description}
                  </p>
                )}

                <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: 'var(--c-border-s)' }}>
                  <span className="text-xs" style={{ color: 'var(--c-text-3)' }}>
                    {formatDate(post.date, lang)}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-xs font-semibold transition-colors"
                    style={{ color: '#4285f4' }}
                  >
                    {t.blog.readMore[lang]}
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
