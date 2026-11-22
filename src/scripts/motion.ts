/**
 * Motion for every page, on one clock (GSAP's ticker). Motion verb: wipe and re-set.
 * Everything here is an enhancement: with reduced motion or no script, all content is already visible.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(pointer: fine)').matches;
const EASE = 'expo.out';

let lenis: Lenis | null = null;

/** Smooth scroll for the whole visit: one Lenis on GSAP's ticker, created on first use. */
function getLenis() {
  if (lenis || still) return lenis;
  document.documentElement.classList.add('motion');
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 });
  (window as unknown as { __lenis: Lenis }).__lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  // Nav steps aside while scrolling down, returns on the way up.
  let last = 0;
  lenis.on('scroll', ({ scroll }: { scroll: number }) => {
    document.querySelector('[data-nav]')?.classList.toggle('away', scroll > last && scroll > 160);
    last = scroll;
  });
  return lenis;
}

/** Per-page motion. Runs on every arrival; the page lifecycle reverts it on the way out. */
export function initMotion(ctx: gsap.Context) {
  if (still) return;
  const l = getLenis()!;
  l.scrollTo(0, { immediate: true, force: true });
  l.resize();
  l.start();
  document.querySelector('[data-nav]')?.classList.remove('away');

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!;
      const target = id.length > 1 ? document.querySelector<HTMLElement>(id) : null;
      if (target) { e.preventDefault(); l.scrollTo(target, { offset: 0, duration: 1.4 }); }
    }));

  let alive = true;
  let off: (() => void) | undefined;
  // Lines must be measured in the real font, or they break in the wrong places.
  document.fonts.ready.then(() => {
    if (!alive) return;
    ctx.add(() => {
      // Big type re-sets letter by letter: each line rises out of its own mask.
      document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
        const split = SplitText.create(el, { type: 'lines,words,chars', mask: 'lines', linesClass: 'sl', wordsClass: 'sw', charsClass: 'sc' });
        el.removeAttribute('data-reveal');
        el.classList.add('in');
        const intro = el.hasAttribute('data-intro');
        gsap.from(split.chars, {
          yPercent: 110, rotate: 4, duration: 1.1, ease: EASE, stagger: intro ? 0.028 : 0.018, delay: intro ? 0.15 : 0,
          scrollTrigger: intro ? undefined : { trigger: el, start: 'top 88%', once: true },
        });
      });

      // Running text rises line by line.
      document.querySelectorAll<HTMLElement>('[data-lines]').forEach((el) => {
        const split = SplitText.create(el, { type: 'lines', mask: 'lines' });
        el.removeAttribute('data-reveal');
        el.classList.add('in');
        gsap.from(split.lines, {
          yPercent: 100, duration: 0.9, ease: EASE, stagger: 0.07,
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });

      // Pictures open like a curtain, from the bottom, and settle from a slight zoom.
      document.querySelectorAll<HTMLElement>('[data-curtain]').forEach((el) => {
        const img = el.querySelector('img, video');
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
        tl.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'expo.inOut' });
        if (img) tl.fromTo(img, { scale: 1.18 }, { scale: 1, duration: 1.6, ease: EASE }, 0);
      });

      // Single screens open like a window as they rise into view.
      document.querySelectorAll<HTMLElement>('[data-window]').forEach((el) => {
        const img = el.querySelector('img');
        const st = { trigger: el, start: 'top bottom', end: 'center 55%', scrub: 0.6 };
        gsap.fromTo(el, { clipPath: 'inset(14% 18% 14% 18%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: st });
        if (img) gsap.fromTo(img, { scale: 1.25 }, { scale: 1, ease: 'none', scrollTrigger: st });
      });

      // Gentle parallax on marked pictures.
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
        const amt = Number(el.dataset.parallax || 8);
        gsap.fromTo(el, { yPercent: amt }, {
          yPercent: -amt, ease: 'none',
          scrollTrigger: { trigger: el.closest('section') ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });

      // Stacked panels: as the next one slides over, the current one sinks back and dims.
      const stages = [...document.querySelectorAll<HTMLElement>('[data-stage]')];
      stages.forEach((s, i) => {
        const next = stages[i + 1];
        if (!next) return;
        const inner = s.querySelector<HTMLElement>('[data-sink]') ?? s;
        gsap.to(inner, {
          scale: 0.97, yPercent: -3, opacity: 0.5, ease: 'none',
          scrollTrigger: { trigger: next, start: 'top bottom', end: 'top top', scrub: true },
        });
      });

      // Counters for true numbers.
      document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        const end = Number(el.dataset.count);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end, duration: 1.6, ease: 'power3.out',
          onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString('en-IN'); },
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });
      if (fine) { magnets(); off = follower(); }
    });
    requestAnimationFrame(() => ScrollTrigger.refresh());
  });
  return () => { alive = false; off?.(); };
}

/** Buttons lean towards the pointer and spring back. */
function magnets() {
  document.querySelectorAll<HTMLElement>('.btn, [data-magnet]').forEach((el) => {
    const x = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    const y = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - r.left - r.width / 2) * 0.25);
      y((e.clientY - r.top - r.height / 2) * 0.35);
    });
    el.addEventListener('pointerleave', () => { x(0); y(0); });
  });
}

/** A label that follows the pointer over work. The native cursor always stays. */
function follower(): () => void {
  const dot = document.createElement('div');
  dot.className = 'follow';
  dot.setAttribute('aria-hidden', 'true');
  document.body.append(dot);
  gsap.set(dot, { xPercent: -50, yPercent: -50, scale: 0 });
  const x = gsap.quickTo(dot, 'x', { duration: 0.45, ease: 'power3.out' });
  const y = gsap.quickTo(dot, 'y', { duration: 0.45, ease: 'power3.out' });
  const move = (e: PointerEvent) => { x(e.clientX); y(e.clientY); };
  addEventListener('pointermove', move);
  document.querySelectorAll<HTMLElement>('[data-follow]').forEach((el) => {
    el.addEventListener('pointerenter', () => {
      dot.textContent = el.dataset.follow || 'View';
      const cs = getComputedStyle(el);
      dot.style.setProperty('--fb', cs.getPropertyValue('--accent') || '#111');
      dot.style.setProperty('--fc', cs.getPropertyValue('--on-accent') || '#fff');
      gsap.to(dot, { scale: 1, duration: 0.4, ease: 'back.out(2)' });
    });
    el.addEventListener('pointerleave', () => gsap.to(dot, { scale: 0, duration: 0.3, ease: 'power2.in' }));
  });
  return () => { removeEventListener('pointermove', move); dot.remove(); };
}
