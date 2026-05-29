# Portfolio Design Direction

## 1. Design Role

This document represents the designer's point of view for Harsh's Phase 1 portfolio. The goal is to define a visual and interaction direction before engineering builds too far, so the portfolio feels intentional, premium, readable, and product-led rather than assembled from generic portfolio components.

The design should support the product goal: prove Harsh is a product manager with technical depth, strong judgment, and the ability to turn ambiguous product problems into shipped outcomes.

## 2. Design Objective

Create a top 5% product-manager portfolio experience that feels polished enough for product/design leaders, structured enough for recruiters, and technically credible enough for engineering leaders. The site should feel like a serious product artifact: clear, memorable, fast, and easy to scan.

## 3. Inspiration Audit

### Parth Acharya

Best reference for proof architecture and productized portfolio thinking. Strong ideas to borrow: "Built independently" vs "Shipped at scale," clear AI/product positioning, project cards with stack and proof links, technical credibility without becoming unreadable, and interactive/product-like sections.

What to avoid: too much interactivity in Phase 1, because it can distract from getting the core proof system live.

### Fabian Dahlke

Best reference for a polished PM-builder personal site. Strong ideas to borrow: clean personal narrative, modern responsive structure, strong visual confidence, and a site that signals both product taste and technical curiosity.

What to avoid: overly personal sections before the user has seen enough professional proof.

### Ashay Kubal

Best reference for technical transparency and content maintainability. Strong ideas to borrow: explicit stack disclosure, blog/portfolio structure, technical keywords, and a credible product/AI leadership framing.

What to avoid: letting the UI become too system-like or heavy. The portfolio should still feel premium and human.

### Sathyan Nandagopal

Best reference for product-leader positioning, metrics, and structured credibility. Strong ideas to borrow: quantified proof, clear navigation, portfolio/blog split, and concise high-level positioning.

What to avoid: generic SaaS-template feel. Harsh's site should be more distinctive and craft-forward.

### Music / Immersive Personal Sites

The appeal is atmosphere, memorability, and presence. We can borrow the idea of a subtle ambient feel, but Phase 1 should not autoplay audio or depend on music. A small optional "focus mode" or tasteful motion can create personality later, but the core site must remain professional, accessible, and fast.

## 4. Recommended Creative Direction

The recommended direction is "Product Studio / Technical Editorial."

This means the site should feel like a carefully designed product strategy notebook meets a premium technical case-study library. It should use strong typography, editorial spacing, precise metadata, subtle motion, and structured proof modules. The visual personality should be confident, calm, and sharp.

The site should not look like a developer terminal theme, a generic SaaS landing page, a resume template, or a decorative designer portfolio.

## 5. Visual Principles

- Clear before clever.
- Dense enough to signal substance, spacious enough to remain readable.
- Editorial typography for narrative, product-system UI for metadata.
- Strong case-study cards, not generic project tiles.
- Subtle motion only where it improves orientation.
- Proof links should feel first-class, not hidden.
- Mobile must preserve the same hierarchy in a stacked layout.

## 6. Layout System

Use a constrained max-width content system with occasional full-width bands for contrast. Recommended structure:

- Header: simple, sticky or top-fixed only if it stays quiet.
- Hero: first-screen clarity with no card around the main message.
- Proof strip: 3-4 crisp proof points below hero.
- Featured work: two large case-study cards, followed by smaller supporting cards.
- Lab/writing: compact previews, not overbuilt before content exists.
- Case study pages: editorial article with a structured metadata rail on desktop and a summary block on mobile.

Avoid nested cards, decorative blobs, heavy gradients, and large marketing hero compositions.

## 7. Typography

Use a two-family system:

- Display/editorial font for headings: refined but readable.
- Sans font for body and UI: clean, modern, highly legible.

Potential font direction:

- Headings: Fraunces, Newsreader, or a similar editorial serif.
- Body/UI: Inter, IBM Plex Sans, or Geist.
- Technical metadata: JetBrains Mono or IBM Plex Mono used sparingly.

Typography should be crisp, not trendy. No tiny body text. No negative letter spacing. Case studies should be comfortable to read for several minutes.

## 8. Color Direction

Use a restrained neutral base with one confident accent. Recommended palette direction:

- Background: warm off-white or very light neutral.
- Text: near-black charcoal.
- Secondary text: muted stone/slate.
- Accent: deep teal, restrained blue, or terracotta.
- Dark section: charcoal for featured work or proof contrast.

Avoid one-note purple/blue gradients, beige-only palettes, and loud startup colors. The palette should feel professional, premium, and calm.

## 9. Interaction Direction

Interactions should be quiet and purposeful:

- Hover states on cards reveal proof links or metadata emphasis.
- Case-study cards can lift slightly or show a subtle border transition.
- Section entrances can fade/translate lightly.
- Filters should be simple if used.
- Mobile nav should be clear and fast.

No autoplay audio. No heavy cursor effects. No animation that delays reading.

## 10. Component Design Direction

### Hero

The hero should answer: who is Harsh, what kind of PM is he, and why should someone keep reading?

Suggested composition: eyebrow, headline, subheadline, two CTAs, proof strip. Keep it readable and direct.

### Case Study Card

Cards should include company, title, one-line outcome/problem, Harsh's role, domain tags, impact metric if available, and proof/artifact link. Cards should communicate value before stack.

### Case Study Page

The page should open with a concise executive summary, then show structured details. Technical notes should be visible but contained, so product leaders are not forced through engineering detail while engineering leaders can still find it.

### Stack Page

This should be a credibility page, not a tool dump. Group by product workflow: product strategy, research, analytics, prototyping, AI/building, engineering collaboration, shipping.

## 11. Mobile Design Requirements

Mobile should prioritize: positioning, featured work, case-study summaries, contact/GitHub, and readable long-form pages. Cards should stack, metadata rails should collapse, proof links should remain visible, and no text should overflow.

## 12. Design Decisions To Make Next

Open decisions:

- Final palette: teal, blue, or terracotta accent.
- Final typography pair.
- Hero narrative: Product Manager, Technical Product Manager, or Product Manager + Builder.
- Homepage featured layout: two large cards + two compact cards, or four equal cards.
- Whether dark featured-work band is part of v1.

Recommended defaults:

- Accent: deep teal.
- Body font: Inter or Geist.
- Heading font: Fraunces or Newsreader.
- Hero narrative: Product Manager with technical depth.
- Featured layout: two large cards + two compact cards.
- Include one dark featured-work band for contrast.

