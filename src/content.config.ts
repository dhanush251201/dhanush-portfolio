import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in src/content/projects/. The file name is the URL slug.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // one or two sentences for cards
      date: z.coerce.date(), // used for sorting within a tier
      role: z.string().optional(), // e.g. "Solo project", "Author"
      status: z.string().optional(), // e.g. "In progress"
      tier: z.enum(['featured', 'research', 'more']),
      order: z.number().default(100), // lower comes first
      tags: z.array(z.enum(['Systems', 'Full-Stack', 'AI', 'Research', 'Exploration'])),
      tech: z.array(z.string()),
      github: z.url().optional(),
      demo: z.url().optional(),
      paper: z.string().optional(), // path under /public, e.g. /papers/x.pdf
      venue: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      metrics: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
