// 100vh Fix
const setVh = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
};
setVh();
window.addEventListener('resize', setVh);

// Universal Copy-Funktion (für CA + alle Text-Boxen)
document.addEventListener('DOMContentLoaded', () => {
  // Contract Address
  const caBtn = document.getElementById('copyBtn');
  const caText = document.getElementById('caText');
  const caMsg = document.querySelector('.ca-copied');

  // Alle normalen Text-Copy-Buttons
  document.querySelectorAll('.text-copy').forEach(btn => {
    const box = btn.closest('.text-box');
    const text = box.querySelector('.text-content').innerText;
    const msg = box.querySelector('.text-copied');

    btn.addEventListener('click', () => copyToClipboard(text, msg));
  });

  if (caBtn && caText) {
    caBtn.addEventListener('click', () => copyToClipboard(caText.textContent.trim(), caMsg));
  }

  async function copyToClipboard(text, feedbackElement) {
    try {
      await navigator.clipboard.writeText(text);
      showFeedback(feedbackElement);
    } catch (err) {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed'; textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showFeedback(feedbackElement);
    }
  }

  function showFeedback(el) {
    if (el) {
      el.classList.add('show');
      setTimeout(() => el.classList.remove('show'), 2200);
    }
  }
});
