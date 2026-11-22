import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    line: z.string(),
    summary: z.string(),
    order: z.number(),
    year: z.string(),
    category: z.enum(['Product', 'Brand & events', 'Creative code']),
    does: z.array(z.string()),
    role: z.string(),
    team: z.string(),
    timeline: z.string(),
    stack: z.array(z.string()),
    live: z.string().url().optional(),
    source: z.string().url().optional(),
    cover: z.string(),
    coverAlt: z.string(),
    mobile: z.string().optional(),
    theme: z.object({
      ground: z.string(),
      ink: z.string(),
      accent: z.string(),
      onAccent: z.string(),
      muted: z.string(),
      surface: z.string(),
      wdth: z.number(),
      wght: z.number(),
      italic: z.boolean().default(false),
      upper: z.boolean().default(false),
      track: z.string().default('-0.04em'),
    }),
    shader: z.enum(['grain', 'mesh', 'warp', 'orbit', 'rays', 'halftone', 'neuro']).default('grain'),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { work };
