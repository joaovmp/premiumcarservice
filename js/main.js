/* Premium Car Vix — main.js */

/* ── Scroll reveal ── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .pt-item')
  .forEach(el => revealObs.observe(el));

/* ── Counter animation ── */
function runCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const dur = 1600;
  const t0 = performance.now();
  const ease = t => 1 - Math.pow(1 - t, 3);
  (function tick(now) {
    const p = Math.min((now - t0) / dur, 1);
    el.textContent = Math.round(ease(p) * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}
const cObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { runCounter(e.target); cObs.unobserve(e.target); } });
}, { threshold: 0.8 });
document.querySelectorAll('[data-target]').forEach(el => cObs.observe(el));

/* ── Ticker ── */
const ITEMS = [
  'Funilaria & Pintura','Insulfilm','Estética Automotiva','Martelinho de Ouro',
  'Capas para Banco','Adesivagem','Wrap & PPF','Pneus Novos',
  'Venda de Veículos','Polimento Técnico','Coating Cerâmico','Detalhamento Completo',
];
const ticker = document.getElementById('tickerInner');
if (ticker) ticker.innerHTML = [...ITEMS,...ITEMS].map(t => `<span class="ticker-item">${t}</span>`).join('');

/* ── Nav scroll ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 60 ? 'rgba(12,12,12,.99)' : 'rgba(12,12,12,.97)';
}, { passive: true });

/* ── WA float: colapsa no scroll, expande no topo ── */
const waFloat = document.querySelector('.wa-float');
if (waFloat) {
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 300 && y > lastY) {
      waFloat.classList.add('collapsed');
    } else {
      waFloat.classList.remove('collapsed');
    }
    lastY = y;
  }, { passive: true });
}

/* ── Reduced motion ── */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.pt-item')
    .forEach(el => { el.classList.add('visible'); el.style.transition = 'none'; });
}
