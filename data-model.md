# Portfolio Content Data Model

## 1. Model Philosophy

The portfolio should be content-configurable. Case studies, lab projects, writing, proof artifacts, homepage modules, and SEO metadata should live in structured files so Harsh can add, remove, reorder, and edit work without rewriting templates.

The model separates three layers: structured metadata for cards, filters, and SEO; narrative MDX for flexible storytelling; and reusable proof artifacts for links, screenshots, documents, demos, or sanitized work samples.

## 2. Collections

Recommended collections:

```text
caseStudies     Core product stories from CommerceIQ, Leap, and future work
labProjects     Experiments, prototypes, demos, side builds, GitHub projects
writing         Build logs, essays, product notes, technical notes
proofArtifacts  Reusable evidence objects linked from case studies/projects
siteConfig      Global positioning, homepage content, nav, links, SEO defaults
```

## 3. Case Study Schema

```ts
type CaseStudy = {
  slug: string;
  title: string;
  shortTitle?: string;
  company: "CommerceIQ" | "Leap" | string;
  summary: string;
  seoDescription: string;
  featured: boolean;
  priority: number;
  status: "draft" | "private" | "published";
  visibility: "public" | "sanitized" | "confidential-summary";
  timeframe: string;
  role: string;
  team?: string;
  domain: string[];
  tags: string[];
  skills: string[];
  audience: string[];
  heroMetric?: {
    label: string;
    value: string;
    caveat?: string;
  };
  problem: string;
  users: string[];
  businessGoal: string;
  constraints: string[];
  decisions: ProductDecision[];
  tradeoffs: Tradeoff[];
  technicalNotes?: TechnicalNote[];
  outcomes: Outcome[];
  artifacts: string[];
  links?: Link[];
  images?: ImageAsset[];
  relatedWriting?: string[];
  relatedLabProjects?: string[];
};
```

Supporting types:

```ts
type ProductDecision = {
  decision: string;
  rationale: string;
  alternatives?: string[];
  impact?: string;
};

type Tradeoff = {
  choice: string;
  upside: string;
  downside: string;
  mitigation?: string;
};

type TechnicalNote = {
  title: string;
  summary: string;
  stack?: string[];
  architecture?: string;
};

type Outcome = {
  label: string;
  value: string;
  type: "metric" | "learning" | "qualitative" | "directional";
  caveat?: string;
};

type Link = {
  label: string;
  url: string;
  type: "demo" | "github" | "article" | "document" | "press" | "other";
};

type ImageAsset = {
  src: string;
  alt: string;
  caption?: string;
};
```

## 4. Case Study Narrative MDX

Each case study should have structured frontmatter plus MDX body content. The frontmatter powers cards, filters, metadata, and homepage modules. The MDX body powers the detailed story.

Recommended MDX sections:

```text
## Problem
## Context
## Users
## My Role
## Constraints
## Product Decisions
## Tradeoffs
## Technical/System View
## Outcome
## What I Learned
## Proof
```

## 5. Lab Project Schema

```ts
type LabProject = {
  slug: string;
  title: string;
  summary: string;
  seoDescription: string;
  status: "idea" | "prototype" | "live" | "archived";
  featured: boolean;
  priority: number;
  timeframe: string;
  tags: string[];
  stack: string[];
  problem: string;
  whatItDoes: string;
  technicalDepth: string;
  links?: Link[];
  images?: ImageAsset[];
  relatedCaseStudies?: string[];
};
```

## 6. Writing Schema

```ts
type Writing = {
  slug: string;
  title: string;
  description: string;
  seoDescription: string;
  date: string;
  status: "draft" | "published";
  tags: string[];
  readingTime?: string;
  relatedCaseStudies?: string[];
  relatedLabProjects?: string[];
};
```

## 7. Proof Artifact Schema

```ts
type ProofArtifact = {
  id: string;
  title: string;
  description: string;
  type: "github" | "demo" | "screenshot" | "doc" | "press" | "metric" | "diagram" | "resume" | "other";
  url?: string;
  file?: string;
  visibility: "public" | "sanitized" | "private";
  relatedTo: string[];
};
```

## 8. Site Config Schema

```ts
type SiteConfig = {
  name: string;
  title: string;
  positioning: string;
  shortBio: string;
  location?: string;
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
    resume?: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    siteUrl: string;
    ogImage: string;
  };
  homepage: {
    heroEyebrow: string;
    heroHeadline: string;
    heroSubheadline: string;
    primaryCta: Link;
    secondaryCta: Link;
    proofPoints: Array<{ label: string; value: string; caveat?: string }>;
    featuredCaseStudies: string[];
    featuredLabProjects: string[];
    featuredWriting: string[];
  };
};
```

## 9. Configurability Rules

Case studies can be reordered by changing `priority` or homepage featured slug arrays. Cards should render gracefully even when metrics, images, links, or technical notes are missing. Confidential work should use `visibility` to label content as sanitized or summary-only. Proof artifacts should be reusable across multiple pages so a GitHub repo, public launch link, or screenshot does not need to be duplicated.

## 10. Initial Data Objects To Create

Initial case-study slugs:

```text
commerceiq-case-study-1
commerceiq-case-study-2
leap-case-study-1
leap-case-study-2
```

Initial homepage featured ordering:

```text
1. commerceiq-case-study-1
2. leap-case-study-1
3. commerceiq-case-study-2
4. leap-case-study-2
```

## 11. Raw Content Intake

Use `content-intake-format.md` for source collection. The intake format is intentionally simpler than the implementation schema. Raw notes should be treated as source material, then transformed into structured case-study frontmatter and MDX narrative.

Content-generation rule: do not invent facts, metrics, screenshots, tools, technical details, or outcomes. If the source material does not include something, mark it as `TBD`, `not provided`, or an open question.
