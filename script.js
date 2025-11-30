// Mobile 100vh fix
(function() {
  const setVh = () => document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
  setVh();
  window.addEventListener('resize', setVh);
  window.addEventListener('orientationchange', () => setTimeout(setVh, 200));
})();

// Copy Button
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('copyBtn');
  const textEl = document.getElementById('contractText');
  if (!btn || !textEl) return;

  btn.addEventListener('click', async () => {
    const text = textEl.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'COPIED ✓';
      setTimeout(() => btn.textContent = 'COPY', 2000);
    } catch (e) {
      alert('Copy failed – bitte manuell kopieren:\n' + text);
    }
  });
});
