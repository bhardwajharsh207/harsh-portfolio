# Engineering Plan

## 1. Current Stage

The portfolio is ready to move from product definition into implementation planning. The PRD defines what should be built, the system design defines how the site should work, the data model defines how content should be structured, and mock content provides enough sample data to begin homepage, card, and case-study template work.

## 2. SDLC Plan

### Stage 1: Product Definition

Status: In progress.

Inputs: PRD, target users, positioning options, case-study pipeline, SEO/hygiene requirements.

Exit criteria: Positioning selected, four case-study candidates named, homepage narrative approved, launch scope frozen.

### Stage 2: System Design

Status: Draft complete.

Inputs: System design, data model, mock content.

Exit criteria: Routes, content collections, component map, SEO system, and quality gates agreed.

### Stage 3: Foundation Build

Status: Ready to start.

Engineering tasks:

- Create Astro project.
- Add Tailwind CSS.
- Add TypeScript strictness where practical.
- Configure content collections and schemas.
- Add base layout, SEO component, navigation, footer, and responsive shell.
- Import mock content.
- Create routes for home, work, case studies, lab, writing, stack, about, and contact.

### Stage 4: Core Experience Build

Status: Blocked only by design/content choices, but can start with mock content.

Engineering tasks:

- Build homepage modules: hero, proof strip, featured case studies, lab preview, writing preview, about excerpt, CTA.
- Build case-study card.
- Build case-study detail template.
- Build work index with filtering or grouping.
- Build mobile navigation.
- Build empty states for lab/writing if content is not ready.

### Stage 5: Content Integration

Status: Depends on Harsh's real inputs.

Content tasks:

- Replace mock CommerceIQ and Leap placeholders.
- Decide which two case studies are homepage-leading.
- Add screenshots, artifacts, sanitized metrics, or diagrams.
- Add about narrative and stack page content.
- Add first writing/build-log entries.

### Stage 6: QA And Launch Readiness

Status: Future.

Quality tasks:

- Run build and type checks.
- Run Lighthouse.
- Check mobile layouts.
- Validate SEO metadata.
- Check internal links.
- Check external proof links.
- Verify no placeholder content remains on public pages.
- Deploy to Vercel preview.

## 3. Component Map

Core components:

```text
SiteHeader
SiteFooter
SEO
Hero
ProofStrip
CaseStudyCard
CaseStudyGrid
CaseStudyMetaRail
OutcomeList
DecisionList
TradeoffList
TechnicalNotes
ArtifactList
LabProjectCard
WritingCard
SectionHeader
CTASection
TagList
```

Layouts:

```text
BaseLayout
ContentLayout
CaseStudyLayout
IndexLayout
```

## 4. Immediate Engineering Tasks

The first implementation sprint should create a working static site using mock data. Engineers do not need final case-study details to start.

Recommended first tasks:

1. Scaffold Astro + Tailwind.
2. Add content collection schemas for case studies, lab projects, and writing.
3. Move mock content into `src/content/case-studies`.
4. Build homepage with mock featured case studies.
5. Build `/work` and `/case-studies/[slug]`.
6. Add global SEO layout and default metadata.
7. Run local build and preview.

## 5. Product Decisions Still Needed

Before visual polish:

- Final positioning line.
- Preferred visual direction: editorial, product-dashboard, or premium minimal.
- Whether GitHub should be a top-level CTA or secondary proof.
- Whether `/work` and `/case-studies` should be separate pages or one combined index.
- Which two case studies lead the homepage.

Before launch:

- Real CommerceIQ/Leap content.
- Public/sanitized visibility level for each case study.
- Approved metrics or impact language.
- GitHub, LinkedIn, email, domain, and resume links.
- OG image design.

## 6. Recommended Implementation Order

Build in this order:

1. Repo and framework foundation.
2. Content schema and mock data.
3. Base layout and SEO.
4. Homepage skeleton.
5. Case-study cards.
6. Case-study detail template.
7. Work index.
8. About, stack, contact.
9. Lab and writing placeholders.
10. Responsive polish.
11. SEO/hygiene pass.

## 7. How Codex Can Help

Codex can own the implementation loop: scaffold the Astro app, create content schemas, build components, run local previews, check responsive behavior, fix build errors, and update docs as product decisions change.

Codex can also act as the content operator: when Harsh provides raw case-study notes, Codex can map them into the schema, draft the narrative, create sanitized versions, identify gaps, and keep the case-study pages consistent.

