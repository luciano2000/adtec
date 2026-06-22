# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start Next.js dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint via Next.js
```

There are no automated tests in this project.

## Architecture

This is a **Next.js 14 (App Router)** institutional site for AD TEC — a Brazilian AdTech agency. The stack is TypeScript, Tailwind CSS v4, and Framer Motion.

### Routing

- `/` — single-page landing (all sections stacked vertically)
- `/blog` — blog listing
- `/blog/[slug]` — blog post (Markdown rendered via remark)
- `/servicos/[slug]` — individual service detail page

### Content sources

- **Blog posts**: Markdown files in `content/blog/`. Frontmatter fields: `title`, `description`, `date`, `image` (path under `/public/blog/`), `tags`, `lang` (`pt`|`en`), `draft`. The `lib/blog.ts` module reads and parses them at build/request time (no CMS).
- **Services content**: Defined in `lib/services-content.ts` as a typed array — slug, color, copy (PT only), meta tags, steps, platforms, differentials. Adding a new service means adding an entry here.

### i18n

The site is bilingual (PT-BR / EN). All UI copy lives in `lib/translations.ts` as a nested object (`t`) where every string is `{ pt: '...', en: '...' }`. Language state is held in `LanguageProvider` (React context, client-side only, default `pt`). Components consume it via `useLanguage()`. Blog posts and service pages are currently Portuguese-only.

### Theming

Dark/light toggle controlled by `ThemeProvider` (React context + `localStorage` key `adtec-theme`). The active theme is applied as `data-theme` on `<html>`. CSS custom properties for all colors are defined in `globals.css` under `:root` (dark) and `[data-theme="light"]`. Brand colors: `--color-brand-green: #1b9e4b`, `--color-brand-blue: #4285f4`, `--color-brand-gold: #f4b400`. An anti-FOUC inline script in `layout.tsx` applies the stored theme before first render.

### Contact form

`app/actions.ts` is a Next.js Server Action that POSTs to HubSpot Forms API (portal `51045220`, form `4b17afe1-c4b0-47ac-b163-f69086136280`).

### SEO

- `app/sitemap.ts` generates the sitemap dynamically from blog posts and service slugs.
- `layout.tsx` includes Organization JSON-LD schema and GTM (`GTM-5N9NCZPC`).
- Each route exports its own `metadata` object.
