# Case Study V1 Review And Approval

Status: Approved internal V1 for sanitized site publishing.

Principle: better safe than sorry. The public site should show product judgment, technical depth, and proof shape without exposing sensitive company metrics, customer names, revenue numbers, or proprietary implementation specifics.

## Source Set

- Detailed private/source draft: `case-study-intake-drafts.md`
- Public V1 source of truth: this document and the generated MDX files
- Live content target: `src/content/caseStudies`

## Review Loop

### Iteration 1: Second Person Review

Finding: The detailed intake is useful for us, but it is too rich for a public portfolio. It includes client counts, revenue values, adoption percentages, and operational details that may create unnecessary company confidentiality risk.

Decision: Keep the full draft as private context. Public pages should use directional outcomes, not sensitive metrics.

### Iteration 2: Reviewer Acting As Harsh

Finding: The case studies must not read like vague sanitized blurbs. They still need to show that Harsh understands systems, data, ML, workflow design, GTM, and adoption.

Decision: Keep technical depth in the shape of the problem, system context, decisions, and tradeoffs. Remove or soften exact metrics.

### Iteration 3: Maker Pass

Change: Reframed the public case studies around:

- problem and user pain
- product decision and why it mattered
- technical/system context
- tradeoffs
- directional outcomes
- proof artifacts still needed

Sensitive details removed or softened:

- ARR values
- customer counts
- exact adoption percentages
- exact CSAT and retention values
- company-specific model internals
- customer names

### Iteration 4: Review Again

Finding: The strongest public V1 stories are those with enough source support and a clean product narrative:

- CommerceIQ Omnichannel Dashboard and LLM Analytics
- CommerceIQ Marketplace Ad Optimizer
- CommerceIQ Media Planning
- Leap Instructor Co-Pilot
- Leap Self-Serve Application Flow
- Leap Course Finder and Recommender

Admission Chances Predictor remains out of public content because the source material only supports a title-level mention.

### Iteration 5: Approval Cut

Approved for V1 site:

- Use sanitized public language.
- Show directional impact, not sensitive exact metrics.
- Keep pages readable and recruiter-friendly.
- Include enough technical notes to show depth.
- Mark proof artifacts as sanitized placeholders until Harsh provides screenshots or documents.

## Public V1 Case Study Set

### CommerceIQ Omnichannel Dashboard and LLM Analytics

Public summary: Built a cross-retailer analytics workflow that helped enterprise customers move from fragmented reporting to a unified dashboard and AI-assisted insight layer.

Sensitive details removed: revenue impact, customer counts, precise adoption and time-saving percentages.

Technical depth to preserve: multi-retailer data model, report builder, phased delivery, LLM insights layer, GTM handoff.

### CommerceIQ Marketplace Ad Optimizer

Public summary: Diagnosed low adoption of a flagship ad optimization product by segmenting customer behavior and turning adoption blockers into a roadmap across onboarding, automation, UX, ML trust, and marketplace coverage.

Sensitive details removed: exact adoption movement and marketplace-specific details.

Technical depth to preserve: usage analytics, cohort segmentation, ML explainability, marketplace integrations, automation.

### CommerceIQ Media Planning

Public summary: Converted low customer confidence into a media planning workflow by validating high-touch recommendations with customers, then productizing the repeatable parts with analytics and data science partners.

Sensitive details removed: exact CSAT, retention, board-level details, customer acceptance numbers.

Technical depth to preserve: survey analysis, recommendation workflow, simulation/explainability, analytics-to-product transition.

### Leap Instructor Co-Pilot

Public summary: Recovered a low-adoption instructor co-pilot launch by using research and usage data to simplify the product from a feature-heavy experience into a focused single-screen workflow.

Sensitive details removed: exact adoption targets and improvement values.

Technical depth to preserve: adoption analytics, redesign, recommendation workflow, information architecture, backend data readiness.

### Leap Self-Serve Application Flow

Public summary: Shifted a counselor-dependent application journey into a student-led self-serve flow that reduced operational bottlenecks and helped students act when intent was highest.

Sensitive details removed: revenue, exact completion lift, exact workload reduction.

Technical depth to preserve: funnel analytics, self-serve workflow, application initiation, operational load reduction.

### Leap Course Finder and Recommender

Public summary: Built an instructor-facing course and college recommendation system that replaced manual spreadsheet/search work with a structured data and filtering workflow.

Sensitive details removed: exact course database size and exact productivity metrics.

Technical depth to preserve: search/filtering, data sourcing, verification workflow, recommendation logic, CMS question.

## Still Needs Harsh Review

- Confirm whether company names can stay public.
- Confirm which metrics, if any, can be restored.
- Confirm if customer screenshots, PRD snippets, diagrams, or dashboards can be sanitized.
- Add raw source for Admission Chances Predictor before it becomes a case study.
- Clarify whether Marketplace Ad Optimizer includes keyword harvesting/search-volume work.
