// 100vh Fix für Mobile
const setVh = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
};
setVh();
window.addEventListener('resize', setVh);

// Copy für Contract Address
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copyBtn');
  const caText = document.getElementById('caText');
  const copiedMsg = document.querySelector('.ca-copied');

  if (copyBtn && caText) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(caText.textContent.trim());
        copiedMsg.classList.add('show');
        setTimeout(() => copiedMsg.classList.remove('show'), 2000);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = caText.textContent.trim();
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copiedMsg.classList.add('show');
        setTimeout(() => copiedMsg.classList.remove('show'), 2000);
      }
    });
  }

  // HAZARD SOUND – Growl beim Klick auf den Skull + einmal beim ersten Betreten
  const sound = document.getElementById('hazardSound');
  const skull = document.querySelector('.hero-skull');
  let hasPlayed = false;

  function playSound() {
    if (!sound) return;
    sound.currentTime = 0;
    sound.volume = 0.6;
    sound.play().catch(() => {}); // Mobile-Browser blocken manchmal Autoplay → egal
  }

  // 1. Beim ersten Klick/Tap überall auf der Seite (Mobile-Fix)
  document.body.addEventListener('click', function unlock() {
    playSound();
    document.body.removeEventListener('click', unlock);
  }, { once: true });

  // 2. Bei jedem Klick auf den Skull
  if (skull) {
    skull.style.cursor = 'pointer';
    skull.addEventListener('click', playSound);
  }

  // 3. Optional: einmal beim ersten Betreten (nach User-Interaktion)
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (!hasPlayed) playSound();
      hasPlayed = true;
    }, 800);
  });
});
