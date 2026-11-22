/**
 * One viewer for every enlargeable picture. Markup on the trigger:
 *   <button data-zoom data-src="..." data-alt="..." data-caption="..." data-group="cirrh0">
 * The picture opens centred and fitted to the screen (contain), scrolling is locked while it is
 * open, arrow keys step through its group, Escape or the backdrop closes it.
 */
import gsap from 'gsap';

type Item = { src: string; alt: string; caption: string };
const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initLightbox() {
  const triggers = [...document.querySelectorAll<HTMLElement>('[data-zoom]')];
  if (!triggers.length) return () => {};

  const dlg = document.createElement('dialog');
  dlg.className = 'zoom';
  dlg.setAttribute('aria-label', 'Picture, enlarged');
  dlg.innerHTML = `
    <figure class="zoom-fig"><img alt="" /><figcaption class="meta"></figcaption></figure>
    <div class="zoom-bar">
      <button type="button" class="btn ghost" data-z-prev>Previous</button>
      <span class="meta" data-z-pos></span>
      <button type="button" class="btn ghost" data-z-next>Next</button>
      <button type="button" class="btn" data-z-close>Close</button>
    </div>`;
  document.body.append(dlg);
  const img = dlg.querySelector('img')!;
  const cap = dlg.querySelector('figcaption')!;
  const pos = dlg.querySelector<HTMLElement>('[data-z-pos]')!;
  const prev = dlg.querySelector<HTMLButtonElement>('[data-z-prev]')!;
  const next = dlg.querySelector<HTMLButtonElement>('[data-z-next]')!;

  let group: Item[] = [];
  let i = 0;
  let returnTo: HTMLElement | null = null;

  const lock = (on: boolean) => {
    const lenis = (window as unknown as { __lenis?: { stop(): void; start(): void } }).__lenis;
    if (on) { lenis?.stop(); document.documentElement.classList.add('zoom-open'); }
    else { lenis?.start(); document.documentElement.classList.remove('zoom-open'); }
  };
  const show = (n: number) => {
    i = (n + group.length) % group.length;
    const it = group[i];
    img.src = it.src; img.alt = it.alt;
    cap.textContent = it.caption; cap.hidden = !it.caption;
    pos.textContent = group.length > 1 ? `${i + 1} of ${group.length}` : '';
    prev.hidden = next.hidden = group.length < 2;
    if (!still) gsap.fromTo(img, { autoAlpha: 0, scale: 0.96 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'expo.out' });
  };
  const open = (t: HTMLElement) => {
    const name = t.dataset.group;
    const members = name ? triggers.filter((x) => x.dataset.group === name) : [t];
    group = members.map((x) => ({ src: x.dataset.src!, alt: x.dataset.alt ?? '', caption: x.dataset.caption ?? '' }));
    returnTo = t;
    lock(true);
    dlg.showModal();
    show(members.indexOf(t));
  };
  const close = () => {
    if (!dlg.open) return;
    if (still) { dlg.close(); return; }
    gsap.to(img, { autoAlpha: 0, scale: 0.97, duration: 0.25, ease: 'power2.in', onComplete: () => dlg.close() });
  };

  triggers.forEach((t) => t.addEventListener('click', () => open(t)));
  prev.addEventListener('click', () => show(i - 1));
  next.addEventListener('click', () => show(i + 1));
  dlg.querySelector('[data-z-close]')!.addEventListener('click', close);
  dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target === dlg.querySelector('.zoom-fig')) close(); });
  dlg.addEventListener('cancel', (e) => { e.preventDefault(); close(); });
  dlg.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') show(i - 1); if (e.key === 'ArrowRight') show(i + 1); });
  dlg.addEventListener('close', () => { lock(false); returnTo?.focus({ preventScroll: true }); });
  // stop the wheel and touch from reaching the page underneath
  dlg.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
  dlg.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
  return () => { if (dlg.open) dlg.close(); lock(false); };
}
