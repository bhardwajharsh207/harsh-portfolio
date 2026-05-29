# Portfolio Website PRD

## 1. Overview

Harsh's portfolio is a professional proof system for his product management work, technical depth, and product-building trajectory. The site should help recruiters, hiring managers, product leaders, and technical partners quickly understand what Harsh is great at, what he has shipped, how he thinks, and why he is credible for technical product roles.

Phase 1 should launch as a complete, polished, low-cost website that is easy to update through content files, strong enough to share publicly, and designed to support future products and experiments without needing a rebuild.

## 2. Product Objective

Create a top-tier product manager portfolio that communicates, within the first 10 seconds, that Harsh is a product manager with technical depth: strong at user and business thinking, comfortable with technical systems, and capable of turning ambiguous product problems into shipped outcomes.

The portfolio should not behave like a decorative resume. It should behave like a product artifact: clear positioning, strong information hierarchy, proof-backed case studies, fast scanning for recruiters, deeper evidence for hiring managers, and enough technical signal for engineering leaders.

## 3. Primary Users

Recruiters need role fit, keywords, credibility, LinkedIn, GitHub, and contact details quickly. Hiring managers need evidence of ownership, product judgment, user empathy, prioritization, tradeoffs, and outcomes. Product leaders and founders need to see clarity, taste, strategic thinking, commercial judgment, and momentum. Engineering leaders need credible technical fluency through architecture notes, stack choices, GitHub links, system tradeoffs, and working artifacts. Design and UX partners need readable storytelling, user-centered thinking, and a polished product experience.

The site should optimize first for hiring managers and product leaders, second for recruiters, and third for engineering/design collaborators. This prevents the site from becoming either a resume-only page or an overly technical project dump.

## 4. Positioning

The initial positioning direction is: Product Manager with technical depth, focused on building user-centered, business-relevant products and increasingly AI-native/product-led systems.

Positioning options to evaluate:

1. Product Manager building technical products, AI-native workflows, and user-centered systems.
2. Product Manager who bridges product strategy, user insight, and technical execution.
3. Technical Product Manager focused on commerce, growth, marketplaces, and AI-enabled product experiences.
4. Product builder and PM turning ambiguous business problems into shipped, measurable product outcomes.

The homepage narrative should make Harsh's product identity obvious, then support it with proof: four strong case studies, selected build experiments, GitHub where relevant, writing/build logs, and a concise about section.

## 5. Phase 1 Scope

Phase 1 includes the homepage, work/case-study index, four initial case studies, lab/experiments page, writing/build-log page, stack page, about page, contact section, SEO foundation, mobile-friendly responsive layout, and launch hygiene checks.

Phase 1 excludes complex interactive tools, custom backend systems, gated content, a CMS, dashboards, AI chat, role-fit analyzers, and other Phase 2 productized features.

## 6. Initial Case Study Pipeline

The first portfolio release should prioritize four case studies, selected from CommerceIQ and Leap. These should become the core proof points of the site.

Case study candidates:

1. CommerceIQ case study 1
2. CommerceIQ case study 2
3. Leap case study 1
4. Leap case study 2

Each case study should be written as a product story, not a project report. The expected structure is: problem, context, user/customer, business goal, Harsh's role, constraints, options considered, product decision, technical/system understanding, tradeoffs, outcome or learning, and proof artifacts. Where exact metrics cannot be shared, the case study should use sanitized numbers, directional impact, qualitative evidence, or clearly stated learnings.

The top two case studies should appear on the homepage as featured work. The remaining two should appear in the work index and become supporting proof.

## 7. Information Architecture

The Phase 1 site map is: Home, Work, Case Studies, Lab/Experiments, Writing/Build Log, Stack, About, and Contact.

The homepage should include: hero positioning, primary CTA to view work, secondary CTA to GitHub/contact, three proof points, featured case studies, lab preview, writing preview, concise about narrative, and final contact CTA.

## 8. Content Model

Projects and case studies should be stored as structured content files so Harsh can add or update work without changing layout code. Required metadata includes title, summary, company/source, role, timeline, status, tags, stack, featured flag, demo link, GitHub link, artifact links, and SEO description.

Writing entries should include title, description, date, tags, reading time, related project, and SEO description.

## 9. Design Principles

The design should be premium, readable, product-led, and technically credible. It should avoid generic PM cliches, unreadable walls of text, template-looking project cards, decorative clutter, weak mobile layouts, stock visuals, and excessive animation. The strongest design signal should be clarity: sharp typography, confident spacing, strong hierarchy, polished project cards, crisp metadata, readable case studies, and fast access to proof.

Mobile is not the primary canvas, but it must be excellent. The mobile experience should preserve the core journey: understand Harsh, scan featured work, open a case study, find GitHub/LinkedIn/contact, and read without layout friction.

## 10. SEO And Hygiene Requirements

Every public page should have a unique title, meta description, canonical URL, Open Graph metadata, social image support, semantic headings, meaningful alt text, clean slugs, sitemap, robots.txt, and JSON-LD Person schema where appropriate.

Target keyword themes include Product Manager, Technical Product Manager, AI Product Manager, Product Strategy, Product Case Studies, 0-to-1 Product Development, Product Leadership, Commerce Product Management, Growth Product Management, and Builder PM.

Launch hygiene requires no broken links, no placeholder content, no console errors, no horizontal scroll, no unreadable contrast, no missing metadata, no oversized unoptimized images, no dead proof links, and Lighthouse targets of 90+ across Performance, Accessibility, Best Practices, and SEO.

## 11. Recommended Build Approach

Use Astro, Tailwind CSS, MDX/content collections, GitHub, and Vercel free tier. This provides a strong balance of design quality, technical signal, SEO, speed, low cost, and easy long-term maintainability.

Next.js should be reserved for future interactive demos or productized portfolio tools, not for the Phase 1 portfolio hub.

## 12. Engineering References

Implementation planning lives in separate engineering documents so this PRD can remain the product source of truth. The current supporting documents are: `system-design.md` for architecture and rendering flow, `data-model.md` for configurable content schemas, `mock-content/` for sample case-study and homepage data, and `engineering-plan.md` for SDLC stages and build order.

## Appendix A: Detailed User Needs

Recruiters need to understand fit quickly. They look for role keywords, skills, domain match, credibility, LinkedIn, GitHub, and contact path. Their likely behavior is to skim the first screen, scan project names, and maybe click one case study.

Hiring managers need proof of product thinking, ownership, judgment, and outcomes. They look for problem framing, user understanding, decisions, tradeoffs, metrics, and artifacts. Their likely behavior is to read one or two case studies if the homepage earns trust.

Product leaders and founders need to understand taste, seniority, clarity, and momentum. They look for strategic thinking, business impact, prioritization, commercial sense, and product instincts.

Engineering leaders need to evaluate technical credibility. They look for architecture notes, GitHub repos, stack choices, system tradeoffs, and working demos.

Design and UX partners need to see user empathy and product taste. They look for clarity, readable storytelling, thoughtful UX, and polished presentation.

## Appendix B: Detailed Product Requirements

- A visitor can understand Harsh's positioning in under 10 seconds.
- A hiring manager can reach strong case studies in one click.
- A technical evaluator can find GitHub, stack, architecture, and proof links without digging.
- The site works well on mobile, even though desktop is the primary canvas.
- Every project has a clear problem, role, outcome or learning, and proof link.
- Every public page has intentional SEO metadata.
- Harsh can add projects, posts, and case studies easily through content files.

## Appendix C: Homepage Detail

Above the fold should include name, clear positioning, one-line product identity, primary CTA to view work, secondary CTA to GitHub or contact, and three quick proof points.

The homepage body should include featured work, case studies, lab or experiments preview, writing preview, short about narrative, and contact CTA.

## Appendix D: Case Study Template

Each case study should include:

- Problem
- Context
- User/customer
- Business goal
- Your role
- Constraints
- Options considered
- Product decision
- Technical/system approach
- Tradeoffs
- Outcome, metric, or learning
- Screenshots, video, or artifacts
- GitHub, demo, or proof links

## Appendix E: Content Model Details

Project metadata:

- title
- summary
- status
- role
- timeline
- team
- stack
- tags
- demo link
- GitHub link
- artifact links
- featured flag

Writing metadata:

- title
- description
- date
- tags
- reading time
- related project

## Appendix F: Design Detail

- Clear before clever.
- Premium but readable.
- Product-led, not resume-like.
- Technical without becoming dense.
- Strong mobile readability.
- No generic stock visuals.
- No PM cliches.
- No unreadable walls of text.
- No template-looking project cards.

## Appendix G: SEO Detail

Every public page should include:

- Unique title and meta description
- Open Graph image
- Twitter/social card metadata
- Canonical URL
- Sitemap.xml
- Robots.txt
- JSON-LD Person schema
- Semantic headings
- Alt text for meaningful images
- Clean URL slugs
- Natural use of relevant keywords

Target keyword themes:

- Product Manager
- Technical Product Manager
- AI Product Manager
- Product Strategy
- AI Products
- Product Case Studies
- Prototyping
- 0-to-1 Product Development
- Product Leadership
- Builder PM

## Appendix H: Launch Hygiene Checklist

- Mobile layout checked.
- No horizontal scroll.
- No broken links.
- No placeholder content.
- No missing alt text.
- No missing metadata.
- No unreadable contrast.
- No oversized unoptimized images.
- No generic stock visuals.
- No dead GitHub links.
- No case study without proof.
- No SEO page missing metadata.
- No console errors.
- Lighthouse targets: 90+ Performance, Accessibility, Best Practices, and SEO.
