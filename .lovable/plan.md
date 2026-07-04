# Blog SEO — Pillar + 5 Priority Articles

## Scope
Replace the current placeholder `/blog` with a real blog index and add 6 fully-written French articles (pillar + 5 cluster posts) targeting the highest-impact keywords from the 15 prompts, wired for local SEO (Cotonou, Abomey-Calavi, Bénin) and AI-search intent (FAQ JSON-LD, structured headings, snippet-ready intros).

## Articles selected (highest business impact)

1. **PILLAR** — Guide complet du BTP au Bénin (kw: `entreprises BTP Bénin`) — `/blog/guide-btp-benin`
2. Combien coûte la construction d'une maison au Bénin ? (kw: `coût construction maison Bénin`) — `/blog/cout-construction-maison-benin` — commercial intent, feeds contact/devis
3. Comment ouvrir une société de BTP au Bénin ? (kw: `ouvrir société BTP Bénin`) — `/blog/ouvrir-societe-btp-benin` — high-value how-to
4. Quelles sont les entreprises du BTP au Bénin ? (kw: `entreprises BTP Bénin` — cluster) — `/blog/liste-entreprises-btp-benin` — directory-style, positions HENA in list
5. Quels sont les services offerts par une entreprise de BTP ? (kw: `services entreprise BTP`) — `/blog/services-entreprise-btp` — links to `/services`
6. Comment trouver des clients dans le BTP au Bénin ? (kw: `trouver clients BTP Bénin`) — `/blog/trouver-clients-btp-benin` — B2B thought leadership

## Technical implementation

- Install `react-helmet-async` and wrap the app in `<HelmetProvider>` (in `src/main.tsx`).
- Create a lightweight blog data layer: `src/data/blogPosts.ts` exporting typed post objects (`slug`, `title`, `metaTitle`, `metaDescription`, `primaryKeyword`, `excerpt`, `publishedAt`, `readingTime`, `heroAlt`, `sections[]`, `faq[]`, `internalLinks[]`).
- Article content stored as structured JSX-friendly data (headings + paragraphs + lists + tables) so all 6 articles share one renderer.
- New route `/blog/:slug` → `src/pages/BlogPostPage.tsx` renders content + Helmet head (title, meta description, canonical, og:*) + Article JSON-LD + FAQPage JSON-LD + Breadcrumb JSON-LD.
- Rewrite `src/pages/BlogPage.tsx` as a real index listing all posts (cards with title, excerpt, reading time, keyword tag, CTA "Lire l'article"), Helmet-managed head.
- Wire route in `src/App.tsx`.
- Update `public/sitemap.xml` and `public/llms.txt` with the 7 new URLs.
- Add cross-links: pillar links to all 5 cluster posts; each cluster links back to pillar + 2 siblings + relevant service/contact page.
- Every article ends with a localized CTA block (WhatsApp, devis, contact) reusing the site's design tokens.

## On-page SEO baked into every article

- H1 = primary keyword phrasing; primary keyword in first 100 words and meta description.
- H2 structure follows each prompt's heading list.
- FAQ section (3–4 Q&A) at the end, mirrored 1:1 in FAQPage JSON-LD.
- Article JSON-LD (`headline`, `author: HENA BTP`, `publisher`, `datePublished`, `inLanguage: fr-BJ`, `about: LocalBusiness`).
- Breadcrumb JSON-LD (Accueil → Blog → Article).
- Prices in **XOF** with EUR conversion where relevant.
- Internal links use keyword-rich anchor text (e.g. "demandez un devis construction à Cotonou").
- Semantic HTML: `<article>`, `<section>`, `<nav aria-label="Sommaire">`, `<table>` for price/salary grids.

## Files created / edited

**Created:**
- `src/data/blogPosts.ts` (data for all 6 posts, ~2000 lines of French content)
- `src/pages/BlogPostPage.tsx` (renderer + Helmet + JSON-LD)
- `src/components/blog/BlogArticleRenderer.tsx`
- `src/components/blog/BlogCta.tsx`

**Edited:**
- `src/main.tsx` (add HelmetProvider)
- `src/App.tsx` (add `/blog/:slug` route)
- `src/pages/BlogPage.tsx` (real index)
- `public/sitemap.xml`
- `public/llms.txt`
- `package.json` (via `bun add react-helmet-async`)

## Out of scope (this pass)
- The remaining 9 prompts (available for a follow-up batch).
- Publishing to a headless CMS.
- Custom OG images per article (leaving og:image off per head-metadata guidance until a domain is set).
