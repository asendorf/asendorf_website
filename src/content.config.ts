import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseEntry = {
  order: z.number(),
  image: z.string(),
  imageAlt: z.string()
};

const experience = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/experience' }),
  schema: z.object({
    ...baseEntry,
    organization: z.string()
  })
});

const research = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/research' }),
  schema: z.object({
    ...baseEntry,
    institution: z.string()
  })
});

const interests = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/interests' }),
  schema: z.object({
    ...baseEntry,
    title: z.string()
  })
});

export const collections = {
  experience,
  research,
  interests
};
