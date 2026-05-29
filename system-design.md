# Portfolio Website System Design

## 1. System Overview

The Phase 1 portfolio will be a static-first Astro website powered by structured content files. The system should separate content, presentation, routing, SEO, and reusable UI components so case studies, writing, lab projects, and homepage modules can be updated without layout rewrites.

The site will be hosted on Vercel free tier with GitHub as the source of truth. Astro will generate static pages at build time from MDX/content collection data. This keeps hosting cheap, performance high, SEO strong, and maintenance low.

## 2. Goals

The system must support a premium product portfolio experience, configurable case-study content, fast static rendering, strong SEO metadata, responsive design, and simple editing through content files. It should also leave a clean path for future interactive demos or separate Next.js products without adding backend complexity to Phase 1.

## 3. Non-Goals

Phase 1 will not include a CMS, database, authentication, server-rendered dashboards, AI chat, form backend, analytics pipeline, or dynamic personalization. Contact can use mailto/LinkedIn initially. Interactive demos should be linked as separate artifacts unless they are purely static embeds.

## 4. Architecture

```text
GitHub repo
  |
  |-- src/content/        Structured MDX/YAML/JSON content
  |-- src/components/     Reusable UI components
  |-- src/layouts/        Page shells and SEO wrappers
  |-- src/pages/          Astro routes
  |-- src/lib/            Content helpers, formatters, schema utilities
  |-- public/             Static assets and social images
  |
Vercel build
  |
Astro static generation
  |
Static HTML/CSS/JS delivered by CDN
```

## 5. Recommended Technology

Use Astro for static generation, Tailwind CSS for styling, MDX for long-form case studies and writing, Astro content collections with Zod schemas for validation, TypeScript for helper code, and Vercel for deployment. This stack gives strong defaults for performance, SEO, content modeling, and developer ergonomics without paid infrastructure.

## 6. Routing Model

Primary routes:

```text
/                         Home
/work                     Work index
/case-studies/[slug]      Individual case study
/lab                      Experiments and prototypes
/writing                  Writing/build-log index
/writing/[slug]           Individual post
/stack                    Tools, systems, and technical fluency
/about                    Product narrative and background
/contact                  Contact and links
```

Optional route aliases:

```text
/projects                 Redirect or alias to /work
/now                      Later optional current-focus page
```

## 7. Content Collections

The core collections should be `caseStudies`, `labProjects`, `writing`, `proofArtifacts`, and `siteConfig`.

`caseStudies` are the primary proof objects and should support both concise cards and deep long-form pages. `labProjects` represent experiments, side builds, demos, and prototypes. `writing` contains build logs, product essays, and technical notes. `proofArtifacts` stores reusable links such as demos, docs, PRDs, GitHub repos, launch posts, screenshots, or sanitized artifacts. `siteConfig` stores global positioning, navigation, links, SEO defaults, and homepage ordering.

## 8. Rendering Flow

At build time, Astro reads content collections, validates schemas, sorts featured items, generates index pages, generates detail pages for each slug, injects page-level SEO metadata, and outputs static HTML. On the client, minimal JavaScript should be used only for small interactions such as mobile navigation, filters, copy-link buttons, or progressive disclosure sections.

## 9. Homepage Composition

The homepage should be assembled from configurable data rather than hardcoded one-off markup. Recommended modules are hero, proof strip, featured case studies, lab preview, writing preview, stack signal, about excerpt, and final CTA.

The homepage should use `siteConfig` to control positioning copy, CTA labels, featured case-study slugs, visible proof metrics, and section ordering where practical.

## 10. Case Study Page Composition

Each case study page should render a consistent product-story structure: hero summary, metadata rail, problem/context, users, role, constraints, decisions, tradeoffs, outcome, proof artifacts, technical notes, and related work.

Long-form sections should live in MDX so the narrative stays flexible. Structured frontmatter should power cards, filters, SEO, and related content.

## 11. Data Validation

Astro content collections should validate all required fields at build time. Build failures are preferred over silently shipping broken cards, missing slugs, invalid dates, empty SEO descriptions, or dead-looking metadata. External URL validation can be added as a separate script later.

## 12. SEO System

Each page should use a shared SEO component/layout that receives title, description, canonical path, Open Graph image, type, and optional JSON-LD. Default metadata should come from `siteConfig`, while case studies and posts override with page-level metadata.

The build should generate sitemap and robots files. Social images can begin as one default image, then later move to per-case-study OG images.

## 13. Asset Strategy

Use local optimized images for core visuals where possible. Store assets under `public/assets/...` or `src/assets/...` depending on whether Astro optimization is used. Every meaningful image should have alt text in the content model. Screenshots should be compressed before launch and should have stable aspect ratios in UI components to avoid layout shift.

## 14. Mobile Strategy

The system should treat mobile as a first-class responsive layout, not a separate experience. Cards should stack cleanly, long metadata rails should collapse into summary blocks, diagrams should scroll or simplify, buttons should be tap-friendly, and case-study pages should expose summaries before long detail.

## 15. Quality Gates

Before launch, the site must pass: no broken internal links, no missing required content fields, no console errors, no horizontal scroll on mobile, no placeholder content, readable contrast, validated metadata, responsive screenshots, and Lighthouse targets of 90+ for Performance, Accessibility, Best Practices, and SEO.

## 16. Future Extension Points

Future phases can add interactive demos as separate Next.js apps linked from the Astro hub, an "Ask my portfolio" experience, role-fit tooling, analytics, newsletter/RSS, richer OG image generation, or a headless CMS. The Phase 1 architecture should not depend on these features.

