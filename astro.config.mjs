// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://aravindnan.github.io',
  base: '/portfolio',
  integrations: [mdx()],
  markdown: { shikiConfig: { theme: 'css-variables' } },
});
