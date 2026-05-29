# Engineering Tasks

## Task 1: Scaffold Portfolio App

Status: Complete.

Goal: Create the Astro application foundation in this workspace.

Scope:
- Initialize Astro.
- Add Tailwind CSS.
- Add MDX support.
- Keep existing planning docs.
- Confirm local build runs.

Acceptance criteria:
- `package.json` exists.
- Astro dev/build scripts exist.
- App renders a basic homepage.
- Build completes successfully.

## Task 2: Add Content Collections

Status: Complete.

Goal: Implement the configurable data model for case studies, lab projects, and writing.

Scope:
- Create `src/content.config.ts`.
- Add `caseStudies`, `labProjects`, and `writing` schemas.
- Move mock case-study MDX files into the Astro content folder.
- Validate content at build time.

Acceptance criteria:
- Mock case studies are readable by Astro content collections.
- Invalid required fields fail the build.
- Content can power cards and detail pages.

## Task 2A: Define Case Study Intake Format

Status: Complete.

Goal: Give Harsh a simple format for providing raw case-study source material.

Scope:
- Create a plain-language intake document.
- Keep the format simpler than the implementation schema.
- Make source-strict content rules explicit.

Acceptance criteria:
- Harsh can provide CommerceIQ/Leap notes in a consistent format.
- Missing information can be tracked as gaps instead of guessed.
- The implementation schema can be populated from the intake format.

## Task 2B: Generate Structured Content From Raw Sources

Status: Later.

Goal: Convert Harsh's raw source material into structured case-study content.

Scope:
- Read only the sources Harsh provides.
- Extract facts, metrics, decisions, constraints, artifacts, and outcomes.
- Draft structured frontmatter and MDX narrative.
- Identify missing fields as questions or `TBD`.
- Produce a review-ready case study for Harsh before publishing.

Acceptance criteria:
- No unsupported claims are added.
- Every metric, artifact, and technical detail traces back to provided source material.
- Confidential details are either removed, sanitized, or labeled clearly.
- Harsh reviews and approves content before it becomes public.

## Task 3: Build Base Layout And SEO

Status: Complete for Phase 1 scaffold.

Goal: Create the page foundation used by all routes.

Scope:
- Add `BaseLayout`.
- Add shared SEO metadata component or layout props.
- Add header/footer.
- Add global styles and design tokens.

Acceptance criteria:
- Pages share consistent layout.
- Default title/description render.
- Header and footer are responsive.
- Canonical URL, OG metadata, Twitter metadata, and Person JSON-LD render from the base layout.

## Task 4: Build Homepage Skeleton

Status: Complete for initial data-driven scaffold.

Goal: Render the homepage from config and mock case-study data.

Scope:
- Hero section.
- Proof strip.
- Featured case-study cards.
- Lab/writing placeholders.
- Final CTA.

Acceptance criteria:
- Homepage communicates positioning in first screen.
- Featured mock case studies render from data.
- Lab and writing previews render from collection data.
- Mobile layout stacks cleanly.

## Task 5: Build Work And Case Study Routes

Status: Complete for initial data-driven scaffold.

Goal: Create browsable proof pages.

Scope:
- `/work` index.
- `/case-studies/[slug]` detail route.
- Case-study cards.
- Case-study detail layout.

Acceptance criteria:
- All mock case studies are reachable.
- Detail pages render metadata and MDX body.
- No broken internal links.

## Task 6: Add Non-Dependent Lab And Writing Placeholders

Status: Complete.

Goal: Make lab and writing collections render without waiting for final content.

Scope:
- Add one placeholder lab project.
- Add one placeholder writing/build-log entry.
- Render `/lab` and `/writing` from collection data.
- Remove empty collection build warnings.

Acceptance criteria:
- `labProjects` collection has at least one valid entry.
- `writing` collection has at least one valid entry.
- `/lab` and `/writing` render cards from content collections.

## Task 7: Configure Free Deployment Domain

Status: Complete.

Goal: Replace placeholder SEO domain with a free deployable domain.

Scope:
- Use a Vercel free subdomain for Phase 1.
- Update Astro `site` config.
- Ensure canonical and social metadata use the free domain.

Acceptance criteria:
- Build metadata no longer points to `example.com`.
- Sitemap and canonical URLs use `https://harsh-portfolio.vercel.app`.
