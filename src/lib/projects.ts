import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

const tierRank = { featured: 0, research: 1, more: 2 } as const;

/** All published projects: featured first, then research, then the rest; by `order`, then newest. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort(
    (a, b) =>
      tierRank[a.data.tier] - tierRank[b.data.tier] ||
      a.data.order - b.data.order ||
      b.data.date.valueOf() - a.data.date.valueOf(),
  );
}
