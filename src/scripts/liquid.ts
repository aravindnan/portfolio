/**
 * Liquid backdrop for work: a custom fragment shader run on Paper Shaders' ShaderMount.
 * Colour flows on its own (domain-warped noise), and the pointer pushes it like a finger through
 * paint, with a ripple whose strength follows pointer speed. Each project adds its own pattern
 * (halftone dots, fluted stripes, rays or contour lines) on top of the warped surface, so the liquid
 * stays in that project's language. One pointer state, updated on GSAP's ticker, drives them all.
 *
 * Markup: <div class="shader" data-liquid="rays" data-colors='{...}'></div>
 */
import { ShaderMount, getShaderColorFromString as c } from '@paper-design/shaders';
import gsap from 'gsap';

const PATTERN: Record<string, number> = { grain: 0, mesh: 0, warp: 2, orbit: 1, halftone: 5, rays: 3, neuro: 4 };

const fragment = `#version 300 es
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec4 u_c0;
uniform vec4 u_c1;
uniform vec4 u_c2;
uniform vec4 u_c3;
uniform vec2 u_mouse;
uniform float u_vel;
uniform float u_pattern;
out vec4 fragColor;

float hash(highp vec2 p) { highp float h = dot(p, vec2(127.1, 311.7)); return fract(sin(h) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
  vec2 m = (u_mouse - 0.5) * vec2(aspect, 1.0);
  float t = u_time * 0.08;

  // the finger: push away from the pointer, with a ripple that grows with speed
  vec2 dp = p - m;
  float d = length(dp);
  float fall = exp(-d * d * 7.0);
  vec2 dir = dp / max(d, 1e-4);
  float ripple = sin(d * 22.0 - u_time * 3.2) * (0.25 + u_vel * 1.6);
  p += dir * fall * (0.10 + 0.08 * ripple);

  // the flow: two passes of domain warping
  vec2 q = vec2(fbm(p * 1.5 + t), fbm(p * 1.5 + vec2(5.2, 1.3) - t));
  vec2 r = vec2(fbm(p * 1.5 + 3.0 * q + vec2(1.7, 9.2) + t * 1.4), fbm(p * 1.5 + 3.0 * q + vec2(8.3, 2.8)));
  float f = fbm(p * 1.5 + 3.0 * r);

  vec3 col = mix(u_c0.rgb, u_c1.rgb, smoothstep(0.25, 0.85, f));
  col = mix(col, u_c2.rgb, smoothstep(0.45, 1.0, length(q) * f) * 0.9);
  col = mix(col, u_c3.rgb, fall * (0.10 + 0.35 * u_vel));

  // the project's own pattern, drawn on the warped surface
  vec2 w = p + (r - 0.5) * 0.08;
  float pat = 0.0;
  if (u_pattern > 0.5 && u_pattern < 1.5) {          // orbit: small dots, each swaying in its cell
    vec2 g = w * 34.0; vec2 id = floor(g);
    vec2 off = vec2(sin(u_time * 0.8 + hash(id) * 6.3), cos(u_time * 0.7 + hash(id + 3.1) * 6.3)) * 0.18;
    pat = 1.0 - smoothstep(0.10, 0.16, length(fract(g) - 0.5 - off));
  } else if (u_pattern > 1.5 && u_pattern < 2.5) {   // warp: fluted glass stripes
    pat = pow(abs(sin((w.x * 0.95 + w.y * 0.31) * 70.0)), 6.0) * 0.6;
  } else if (u_pattern > 2.5 && u_pattern < 3.5) {   // rays: light falling from above
    vec2 o = w - vec2(0.35 * aspect, 0.75);
    float a = atan(o.x, -o.y);
    pat = pow(abs(sin(a * 14.0 + f * 2.5 + u_time * 0.1)), 10.0) * smoothstep(1.6, 0.2, length(o));
  } else if (u_pattern > 3.5 && u_pattern < 4.5) {   // neuro: fine contour lines of the flow
    pat = 1.0 - smoothstep(0.0, 0.06, abs(fract(f * 9.0) - 0.5));
    pat *= 0.7;
  } else if (u_pattern > 4.5) {                      // halftone: dot size follows the flow
    vec2 g = mat2(0.966, -0.259, 0.259, 0.966) * w * 26.0;
    float rad = 0.12 + 0.3 * f;
    pat = 1.0 - smoothstep(rad - 0.04, rad, length(fract(g) - 0.5));
  }
  col = mix(col, u_c2.rgb, pat * 0.55);

  fragColor = vec4(col, 1.0);
}`;

function mix(a: string, b: string, t: number) {
  const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [x, y] = [p(a), p(b)];
  return '#' + x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, '0')).join('');
}

type El = HTMLElement & { _liquid?: ShaderMount; _m?: { x: number; y: number }; _v?: number };
const live = new Set<El>();
const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
const pointer = { x: -1, y: -1, vx: 0, vy: 0, moved: 0 };

function mount(el: El) {
  if (el._liquid) return;
  const k = JSON.parse(el.dataset.colors ?? '{}');
  const dark = parseInt(k.ground.slice(1, 3), 16) < 60;
  const uniforms = {
    u_c0: c(k.ground), u_c1: c(k.surface),
    u_c2: c(mix(k.ground, k.accent, dark ? 0.32 : 0.22)), u_c3: c(k.accent),
    u_mouse: [0.7, 0.4], u_vel: 0, u_pattern: PATTERN[el.dataset.liquid ?? ''] ?? 0,
  };
  try {
    el._liquid = new ShaderMount(el, fragment, uniforms as never, undefined, still ? 0 : 1, 0, 1, 1600 * 1000);
    el._m = { x: 0.7, y: 0.4 }; el._v = 0;
    el.classList.add('shader-on');
    live.add(el);
  } catch { /* no WebGL: the flat ground stays */ }
}
function unmount(el: El) {
  el._liquid?.dispose(); el._liquid = undefined;
  el.classList.remove('shader-on'); live.delete(el);
}

export function initLiquid(root: ParentNode = document) {
  const els = [...root.querySelectorAll<El>('[data-liquid]')];
  if (!els.length) return;
  listenPointer();
  // Sticky panels stay "on screen" when covered, so visibility is decided by hand:
  // near the viewport, and not yet fully covered by the next stacked panel.
  const stages = [...root.querySelectorAll<HTMLElement>('[data-stage]')];
  const coverOf = new Map<El, HTMLElement | undefined>();
  els.forEach((el) => {
    const st = el.closest<HTMLElement>('[data-stage]');
    coverOf.set(el, st ? stages[stages.indexOf(st) + 1] : undefined);
  });
  const check = () => {
    const h = innerHeight;
    for (const el of els) {
      const r = el.getBoundingClientRect();
      const cover = coverOf.get(el);
      const covered = cover ? cover.getBoundingClientRect().top <= 1 : false;
      const near = r.top < h * 1.25 && r.bottom > -h * 0.25;
      (near && !covered ? mount : unmount)(el);
    }
  };
  check();
  let n = 0;
  const watch = () => { if (++n % 8 === 0) check(); };
  gsap.ticker.add(watch);
  let follow: ((time: number) => void) | undefined;
  const stop = () => { gsap.ticker.remove(watch); if (follow) gsap.ticker.remove(follow); els.forEach(unmount); };
  if (still) return stop;

  // one clock: ease each live surface's finger towards the pointer (or an idle drift)
  follow = (time: number) => {
    const idle = pointer.x < 0 || performance.now() - pointer.moved > 2500;
    const speed = Math.min(1, Math.hypot(pointer.vx, pointer.vy) / 60);
    pointer.vx *= 0.85; pointer.vy *= 0.85;
    for (const el of live) {
      const r = el.getBoundingClientRect();
      let tx: number, ty: number;
      if (idle) { tx = 0.5 + Math.sin(time * 0.23) * 0.3; ty = 0.5 + Math.cos(time * 0.17) * 0.25; }
      else { tx = (pointer.x - r.left) / r.width; ty = 1 - (pointer.y - r.top) / r.height; }
      el._m!.x += (tx - el._m!.x) * 0.08; el._m!.y += (ty - el._m!.y) * 0.08;
      el._v! += ((idle ? 0.05 : speed) - el._v!) * 0.08;
      el._liquid?.setUniforms({ u_mouse: [el._m!.x, el._m!.y], u_vel: el._v! });
    }
  };
  gsap.ticker.add(follow);
  return stop;
}

let listening = false;
function listenPointer() {
  if (listening || still) return;
  listening = true;
  addEventListener('pointermove', (e) => {
    if (pointer.x >= 0) { pointer.vx = e.clientX - pointer.x; pointer.vy = e.clientY - pointer.y; }
    pointer.x = e.clientX; pointer.y = e.clientY; pointer.moved = performance.now();
  }, { passive: true });
}
