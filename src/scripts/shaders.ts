/**
 * Shader backdrops from Paper Shaders. Each project names a preset in its frontmatter; the colours
 * come from the project's own theme, so the shader always sits inside that project's palette.
 *
 * Markup: <div data-shader="godRays" data-colors='{"ground":"#050505",...}'></div>
 * The element should be position: absolute/fixed and sized; the canvas fills it.
 */
import {
  ShaderMount,
  ShaderFitOptions,
  getShaderColorFromString as c,
  getShaderNoiseTexture,
  grainGradientFragmentShader,
  meshGradientFragmentShader,
  warpFragmentShader,
  dotOrbitFragmentShader,
  godRaysFragmentShader,
  dotGridFragmentShader,
  neuroNoiseFragmentShader,
} from '@paper-design/shaders';

type Colors = { ground: string; ink: string; accent: string; surface: string; muted: string };
type Preset = { fragment: string; speed: number; uniforms: (k: Colors, noise?: HTMLImageElement) => Record<string, unknown> };

const sizing = (scale = 1, fit: keyof typeof ShaderFitOptions = 'cover', extra: Record<string, number> = {}) => ({
  u_fit: ShaderFitOptions[fit], u_scale: scale, u_rotation: 0, u_offsetX: 0, u_offsetY: 0,
  u_originX: 0.5, u_originY: 0.5, u_worldWidth: 0, u_worldHeight: 0, ...extra,
});

/** Mix two hex colours: t = 0 gives a, t = 1 gives b. */
function mix(a: string, b: string, t: number) {
  const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [x, y] = [p(a), p(b)];
  return '#' + x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, '0')).join('');
}

export const presets: Record<string, Preset> = {
  // Home and About: a slow grainy blob in paper greys, with a breath of cobalt.
  grain: {
    fragment: grainGradientFragmentShader, speed: 0.35,
    uniforms: (k, noise) => ({
      u_colorBack: c(k.ground),
      u_colors: [c(k.surface), c(mix(k.ground, k.accent, 0.08)), c(mix(k.ground, k.ink, 0.05))],
      u_colorsCount: 3, u_softness: 0.9, u_intensity: 0.35, u_noise: 0.18, u_shape: 6,
      u_noiseTexture: noise, ...sizing(1.1),
    }),
  },
  // Cirrh0: a calm clinical mesh, white with the faintest crimson blush.
  mesh: {
    fragment: meshGradientFragmentShader, speed: 0.25,
    uniforms: (k) => ({
      u_colors: [c(k.ground), c(k.surface), c(mix(k.ground, k.accent, 0.1)), c(k.ground)],
      u_colorsCount: 4, u_distortion: 0.8, u_swirl: 0.15, u_grainMixer: 0, u_grainOverlay: 0.04, ...sizing(1),
    }),
  },
  // Agentic Practices: soft fluted stripes, after the course's own fluted-glass home.
  warp: {
    fragment: warpFragmentShader, speed: 0.3,
    uniforms: (k, noise) => ({
      u_colors: [c(k.ground), c(k.surface), c(mix(k.ground, k.accent, 0.18)), c(k.ground)],
      u_colorsCount: 4, u_proportion: 0.45, u_softness: 1, u_shape: 1, u_shapeScale: 0.12,
      u_distortion: 0.15, u_swirl: 0.5, u_swirlIterations: 8, u_noiseTexture: noise, ...sizing(1, 'none', { u_rotation: 72 }),
    }),
  },
  // TMS: tasks as dots, each orbiting its own cell.
  orbit: {
    fragment: dotOrbitFragmentShader, speed: 0.6,
    uniforms: (k, noise) => ({
      u_colorBack: c(k.ground),
      u_colors: [c(k.surface), c(mix(k.ground, k.accent, 0.22)), c(mix(k.ground, '#1F7A8C', 0.45))],
      u_colorsCount: 3, u_stepsPerColor: 2, u_size: 0.55, u_sizeRange: 0.6, u_spreading: 0.35,
      u_noiseTexture: noise, ...sizing(0.35, 'none'),
    }),
  },
  // Gateways: gold light falling from Olympus.
  rays: {
    fragment: godRaysFragmentShader, speed: 0.4,
    uniforms: (k, noise) => ({
      u_colorBack: c(k.ground), u_colorBloom: c(k.accent),
      u_colors: [c(mix(k.ground, k.accent, 0.35)), c(mix(k.ground, k.accent, 0.18)), c(mix(k.ground, '#8a5a20', 0.3))],
      u_colorsCount: 3, u_bloom: 0.25, u_intensity: 0.55, u_density: 0.35, u_spotty: 0.25,
      u_midSize: 0.15, u_midIntensity: 0.25, u_noiseTexture: noise, ...sizing(1.3, 'cover', { u_offsetY: 0.85, u_offsetX: 0.25 }),
    }),
  },
  // Revelations: comic-book halftone.
  halftone: {
    fragment: dotGridFragmentShader, speed: 0,
    uniforms: (k) => ({
      u_colorBack: c(k.ground), u_colorFill: c(k.surface), u_colorStroke: c('#00000000'),
      u_dotSize: 7, u_gapX: 18, u_gapY: 18, u_strokeWidth: 0, u_sizeRange: 0.55, u_opacityRange: 0.2, u_shape: 0,
      ...sizing(1, 'none', { u_rotation: 15 }),
    }),
  },
  // Generative Designs: a monochrome web of fine lines, like a sketch left running.
  neuro: {
    fragment: neuroNoiseFragmentShader, speed: 0.35,
    uniforms: (k) => ({
      u_colorBack: c(k.ground), u_colorMid: c(mix(k.ground, k.ink, 0.07)), u_colorFront: c(mix(k.ground, k.ink, 0.35)),
      u_brightness: 0.05, u_contrast: 0.3, ...sizing(1.6),
    }),
  },
};

const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
let noise: Promise<HTMLImageElement | undefined> | null = null;
const getNoise = () => (noise ??= (async () => {
  const img = getShaderNoiseTexture();
  if (img) await img.decode().catch(() => {});
  return img;
})());

type El = HTMLElement & { _mount?: ShaderMount; _pending?: boolean };

async function mount(el: El) {
  if (el._mount || el._pending) return;
  const preset = presets[el.dataset.shader ?? ''];
  if (!preset) return;
  el._pending = true;
  const colors = JSON.parse(el.dataset.colors ?? '{}') as Colors;
  const tex = await getNoise();
  try {
    el._mount = new ShaderMount(el, preset.fragment, preset.uniforms(colors, tex) as never, undefined, still ? 0 : preset.speed, 0, 1, 1920 * 1080);
    el.classList.add('shader-on');
  } catch {
    // No WebGL: the element keeps its flat ground colour.
  }
  el._pending = false;
}

function unmount(el: El) {
  el._mount?.dispose();
  el._mount = undefined;
  el.classList.remove('shader-on');
}

/** Mount shaders as they come near the screen and dispose them when they're far away, so only a few contexts live at once. */
export function initShaders(root: ParentNode = document) {
  const els = [...root.querySelectorAll<El>('[data-shader]:not([data-shader-hover])')];
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) (e.isIntersecting ? mount : unmount)(e.target as El);
  }, { rootMargin: '50% 0px' });
  els.forEach((el) => io.observe(el));
  const hover: El[] = [];

  // Hover-only shaders (gallery tiles): live while pointed at, gone shortly after.
  root.querySelectorAll<El>('[data-shader-hover]').forEach((el) => {
    hover.push(el);
    const host = el.closest('a') ?? el;
    let t: number | undefined;
    const on = () => { clearTimeout(t); mount(el); };
    const off = () => { t = window.setTimeout(() => unmount(el), 600); };
    host.addEventListener('pointerenter', on);
    host.addEventListener('focusin', on);
    host.addEventListener('pointerleave', off);
    host.addEventListener('focusout', off);
  });
  return () => { io.disconnect(); [...els, ...hover].forEach(unmount); };
}
