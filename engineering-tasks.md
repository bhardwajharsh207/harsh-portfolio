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

## Task 8: Source Case Study Inputs

Status: Complete for first extraction pass.

Goal: Extract source-strict case-study raw material from the linked Google Sheet and Google Doc.

Scope:
- Read mapped CommerceIQ stories from `Experience Story Canvas`.
- Read mapped Leap stories from the behavioral interview Google Doc.
- Keep raw extraction separate from final generated case-study copy.
- Record source gaps and open questions instead of inventing missing details.

Acceptance criteria:
- Each mapped case study has a source-backed intake draft.
- Each intake draft has source references by document type and story anchor.
- Missing metrics, dates, technical details, or artifacts are listed as open questions.

## Task 9: Review Case Study Intake Drafts

Status: Later.

Goal: Let Harsh verify source-backed case-study intake before publishing content.

Scope:
- Provide review-ready intake drafts in `content-intake-format.md` structure.
- Ask Harsh to approve, correct, or add details.
- Only after approval, generate final MDX case studies.

Acceptance criteria:
- Harsh approves or edits each intake draft.
- No source-unsupported claims move into final content.

## Task 10: Generate Approved Case Study MDX

Status: Later.

Goal: Convert approved intake drafts into polished, public portfolio case studies.

Scope:
- Generate final MDX only after Harsh approves the intake draft.
- Preserve source-to-claim traceability.
- Add SEO title, SEO description, proof metrics, technical depth sections, and artifact placeholders.
- Keep confidential or unsupported details out of public pages.

Acceptance criteria:
- Each generated case study passes Astro content schema validation.
- Each metric in public copy has a source or is removed.
- Each public page has a clear PM narrative, technical depth, proof artifact plan, and readable mobile layout.

## Task 11: Case Study Content QA

Status: Later.

Goal: Run a hygiene and quality pass before publishing real case-study content.

Scope:
- Check readability and narrative hierarchy.
- Check mobile scanning and card/detail page fit.
- Check SEO metadata and internal links.
- Check confidentiality and redaction.
- Check that technical depth is visible without making pages unreadable.

Acceptance criteria:
- No unsupported claims, confidential leaks, broken links, or placeholder artifacts remain on published pages.
- Case studies can be understood by recruiters, hiring managers, PM leaders, and technical interviewers.
- Pages preserve top-tier design polish while carrying credible proof of work.

## Task 12: Run Case Study Review Loop

Status: Complete.

Goal: Refine the case-study intake through maker/reviewer iterations before public publishing.

Scope:
- Preserve the detailed intake draft.
- Create a safer public V1 cut.
- Review as second person, reviewer acting as Harsh, maker, reviewer again, and approval pass.
- Remove sensitive company metrics from the public layer.

Acceptance criteria:
- Detailed source draft remains available.
- Condensed public cut exists separately.
- V1 approval rules are documented.
- Public content uses directional outcomes instead of sensitive metrics.

## Task 13: Publish Sanitized Case Study V1

Status: Complete.

Goal: Replace placeholder case-study pages with source-supported, sanitized V1 content.

Scope:
- Publish six source-supported case studies.
- Hold back Admission Chances Predictor until raw source exists.
- Update canonical site URL to the active Vercel domain.
- Keep exact metrics, customer names, and revenue details out of public pages.

Acceptance criteria:
- Case-study placeholders are replaced.
- Astro content schema validates.
- Public pages show product judgment and technical depth without exposing sensitive details.

## Task 14: Add Experiment Lab Projects

Status: Complete.

Goal: Add the two experiment/time-lapse projects to the portfolio lab.

Scope:
- Add Small Business Lead Engine as a lab project.
- Add WSJ Audio Digest as a lab project.
- Add a build-log placeholder tying both experiments together.
- Show more lab cards on the homepage.

Acceptance criteria:
- `/lab` includes the portfolio system, lead engine, and WSJ audio digest.
- Homepage previews multiple lab projects.
- Writing system has a build-log placeholder for the experiment track.
