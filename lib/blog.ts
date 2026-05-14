import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { BlogPost } from './types';
export { formatDate } from './utils';

const postsDir = path.join(process.cwd(), 'content', 'blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? '',
        date: data.date ?? '',
        image: data.image ?? null,
        tags: data.tags ?? [],
        lang: data.lang ?? 'pt',
        draft: data.draft ?? false,
        content,
      } as BlogPost;
    })
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    date: data.date ?? '',
    image: data.image ?? null,
    tags: data.tags ?? [],
    lang: data.lang ?? 'pt',
    draft: data.draft ?? false,
    content,
  };
}

export async function renderMarkdown(content: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(content);
  return result.toString();
}

