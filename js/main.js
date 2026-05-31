/* ===========================
   RAYDUSK STUDIO — MAIN.JS
   =========================== */

// Nav scroll state
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => revealObserver.observe(el));

// Progress bar animation on scroll into view
const progressFill = document.querySelector('.progress-fill');
if (progressFill) {
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressFill.classList.add('animated');
        progressObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });
  progressObserver.observe(progressFill.closest('.progress-bar-wrap'));
}

// Animated section counter (visual glitch effect on counter value)
const counterEl = document.getElementById('counter');
let frame = 0;
const digits = ['001', '010', '011', '100', '101', '001'];
const glitchCounter = () => {
  if (!counterEl) return;
  frame = (frame + 1) % digits.length;
  counterEl.textContent = digits[frame];
  setTimeout(glitchCounter, 1800 + Math.random() * 2400);
};
setTimeout(glitchCounter, 3000);

// Add reveal class to sections automatically
document.querySelectorAll(
  '.section-label, .about-left, .about-right, .progress-bar-wrap, .watch-card, .contact-title, .contact-right'
).forEach((el, i) => {
  el.classList.add('reveal');
  if (i % 3 === 1) el.classList.add('reveal-delay-1');
  if (i % 3 === 2) el.classList.add('reveal-delay-2');
});
