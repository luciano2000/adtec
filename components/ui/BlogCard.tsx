'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface Props {
  post: BlogPost;
  lang?: 'pt' | 'en';
}

export function BlogCard({ post, lang = 'pt' }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300"
      style={{ background: '#0c1220', borderColor: 'rgba(255,255,255,0.07)' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(66,133,244,0.3)';
        (e.currentTarget as HTMLElement).style.transform   = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
        (e.currentTarget as HTMLElement).style.transform   = 'translateY(0)';
      }}
    >
      <div className="relative w-full overflow-hidden" style={{ height: 200, background: '#111827' }}>
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
            </svg>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-6 flex-1">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ color: '#4285f4', background: 'rgba(66,133,244,0.1)' }}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <h2 className="text-base font-bold leading-snug" style={{ color: '#e8eaf0' }}>{post.title}</h2>
        {post.description && (
          <p className="text-sm leading-relaxed line-clamp-2" style={{ color: '#6b7590' }}>{post.description}</p>
        )}
        <span className="text-xs mt-auto" style={{ color: '#3d4460' }}>{formatDate(post.date, lang)}</span>
      </div>
    </Link>
  );
}
