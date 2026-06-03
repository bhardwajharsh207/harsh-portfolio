import type { CollectionEntry } from "astro:content";

export function sortByPriority<T extends { data: { priority?: number; date?: string } }>(items: T[]) {
  return [...items].sort((a, b) => {
    if (a.data.priority !== undefined || b.data.priority !== undefined) {
      return (a.data.priority ?? 99) - (b.data.priority ?? 99);
    }

    return (b.data.date ?? "").localeCompare(a.data.date ?? "");
  });
}

export function getCaseStudyPath(caseStudy: CollectionEntry<"caseStudies">) {
  return `/case-studies/${caseStudy.data.slug}`;
}

export function getLabProjectPath(project: CollectionEntry<"labProjects">) {
  return `/lab/${project.data.slug}`;
}
