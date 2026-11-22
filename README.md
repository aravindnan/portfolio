# Aravind Nandakumar · Portfolio

Live at https://aravindnan.github.io/portfolio/

Built with [Astro](https://astro.build), GSAP, Lenis and Paper Shaders.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

This builds the site and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves.

## Content

- Projects: `src/content/work/*.mdx` (screens in `public/work/<project>/`)
- Gallery photos: add files to `public/gallery/` and list them in `src/data/gallery.ts`
- Résumé: replace `public/Aravind_Nandakumar_Resume.pdf`
- Name, links and skills: `src/data/site.ts`
