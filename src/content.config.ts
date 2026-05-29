import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
  type: z.enum(["demo", "github", "article", "document", "press", "other"]),
});

const imageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/caseStudies" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    shortTitle: z.string().optional(),
    company: z.string(),
    summary: z.string(),
    seoDescription: z.string(),
    featured: z.boolean().default(false),
    priority: z.number().default(99),
    status: z.enum(["draft", "private", "published"]),
    visibility: z.enum(["public", "sanitized", "confidential-summary"]),
    timeframe: z.string(),
    role: z.string(),
    team: z.string().optional(),
    domain: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    skills: z.array(z.string()).default([]),
    audience: z.array(z.string()).default([]),
    heroMetric: z
      .object({
        label: z.string(),
        value: z.string(),
        caveat: z.string().optional(),
      })
      .optional(),
    problem: z.string(),
    users: z.array(z.string()).default([]),
    businessGoal: z.string(),
    constraints: z.array(z.string()).default([]),
    decisions: z
      .array(
        z.object({
          decision: z.string(),
          rationale: z.string(),
          alternatives: z.array(z.string()).optional(),
          impact: z.string().optional(),
        }),
      )
      .default([]),
    tradeoffs: z
      .array(
        z.object({
          choice: z.string(),
          upside: z.string(),
          downside: z.string(),
          mitigation: z.string().optional(),
        }),
      )
      .default([]),
    technicalNotes: z
      .array(
        z.object({
          title: z.string(),
          summary: z.string(),
          stack: z.array(z.string()).optional(),
          architecture: z.string().optional(),
        }),
      )
      .optional(),
    outcomes: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          type: z.enum(["metric", "learning", "qualitative", "directional"]),
          caveat: z.string().optional(),
        }),
      )
      .default([]),
    artifacts: z.array(z.string()).default([]),
    links: z.array(linkSchema).default([]),
    images: z.array(imageSchema).default([]),
    relatedWriting: z.array(z.string()).optional(),
    relatedLabProjects: z.array(z.string()).optional(),
  }),
});

const labProjects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/labProjects" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    summary: z.string(),
    seoDescription: z.string(),
    status: z.enum(["idea", "prototype", "live", "archived"]),
    featured: z.boolean().default(false),
    priority: z.number().default(99),
    timeframe: z.string(),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    problem: z.string(),
    whatItDoes: z.string(),
    technicalDepth: z.string(),
    links: z.array(linkSchema).default([]),
    images: z.array(imageSchema).default([]),
    relatedCaseStudies: z.array(z.string()).optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    seoDescription: z.string(),
    date: z.string(),
    status: z.enum(["draft", "published"]),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    relatedCaseStudies: z.array(z.string()).optional(),
    relatedLabProjects: z.array(z.string()).optional(),
  }),
});

export const collections = {
  caseStudies,
  labProjects,
  writing,
};

