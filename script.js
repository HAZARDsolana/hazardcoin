// 100vh Fix für Mobile
const setVh = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
};
setVh();
window.addEventListener('resize', setVh);

// Copy-Funktion – extra robust mit Fallback
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn   = document.getElementById('copyBtn');
  const caText    = document.getElementById('caText');
  const copiedMsg = document.querySelector('.ca-copied');

  if (!copyBtn || !caText) return; // Sicherheit

  copyBtn.addEventListener('click', async () => {
    const textToCopy = caText.textContent.trim();

    try {
      // Moderne Variante (funktioniert überall mit HTTPS)
      await navigator.clipboard.writeText(textToCopy);
      showFeedback();
    } catch (err) {
      // Fallback für ältere Browser oder lokale Tests
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand('copy');
        showFeedback();
      } catch (e) {
        alert('Kopieren nicht möglich – bitte manuell markieren & Strg+C / Cmd+C');
      }
      document.body.removeChild(textarea);
    }
  });

  function showFeedback() {
    copiedMsg.classList.add('show');
    setTimeout(() => copiedMsg.classList.remove('show'), 2000);
  }
});
