export const site = {
  name: 'Aravind Nandakumar',
  role: 'Product designer and developer',
  intro: 'I design products, then I build them.',
  now: 'Front-end engineer, CodeWalnut, Bangalore',
  from: 'Kochi, Kerala',
  email: 'aravindnandakumar16@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aravind-nandakumar-995a1b244',
  github: 'https://github.com/aravindnan',
  resume: 'Aravind_Nandakumar_Resume.pdf',
  design: ['Figma', 'Prototyping', 'Design systems', 'Art direction'],
  build: ['React', 'TypeScript', 'Next.js', 'System design', 'Canvas'],
};

/** Prefix a path with the site's base so it works on GitHub Pages. */
export const u = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export type Theme = {
  ground: string; ink: string; accent: string; onAccent: string; muted: string; surface: string;
  wdth: number; wght: number; italic?: boolean; upper?: boolean; track?: string;
};

/** About: plain black on white. */
export const monoTheme: Theme = {
  ground: '#FFFFFF', ink: '#000000', accent: '#000000', onAccent: '#FFFFFF', muted: '#595959', surface: '#F0F0F0',
  wdth: 112, wght: 850, track: '-0.045em',
};

export const homeTheme: Theme = {
  ground: '#E9E9E4', ink: '#111111', accent: '#1E3BEF', onAccent: '#FFFFFF', muted: '#5C5C57', surface: '#DEDED8',
  wdth: 112, wght: 850, track: '-0.045em',
};

/** The theme as CSS custom properties, set on <html> or on a section. */
export const themeVars = (t: Theme) =>
  [
    `--ground:${t.ground}`, `--ink:${t.ink}`, `--accent:${t.accent}`, `--on-accent:${t.onAccent}`,
    `--muted:${t.muted}`, `--surface:${t.surface}`, `--wdth:${t.wdth}`, `--wght:${t.wght}`,
    `--slnt:${t.italic ? 'italic' : 'normal'}`, `--case:${t.upper ? 'uppercase' : 'none'}`, `--track:${t.track ?? '-0.04em'}`,
  ].join(';');

/** The colours a shader needs, as the JSON its element carries. */
export const shaderColors = (t: Theme) => JSON.stringify({ ground: t.ground, ink: t.ink, accent: t.accent, surface: t.surface, muted: t.muted });
