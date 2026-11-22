/**
 * Page lifecycle for the client router. The body is swapped on every navigation, so each feature
 * sets itself up on `astro:page-load` (which also fires on the first load) and tears down on
 * `astro:before-swap`. Anything GSAP creates inside `ctx.add()` (tweens, ScrollTriggers,
 * SplitText) is reverted automatically.
 */
import gsap from 'gsap';

type Cleanup = void | (() => void);
const pending: Array<() => void> = [];

document.addEventListener('astro:before-swap', () => {
  while (pending.length) { try { pending.pop()!(); } catch { /* keep going */ } }
});

export function onPage(setup: (ctx: gsap.Context) => Cleanup) {
  document.addEventListener('astro:page-load', () => {
    const ctx = gsap.context(() => {});
    const done = setup(ctx);
    pending.push(() => { if (typeof done === 'function') done(); ctx.revert(); });
  });
}
