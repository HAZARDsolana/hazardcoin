// ===== viewport fix for mobile (avoid 100vh problems) =====
(function setVh(){
  function updateVh(){
    document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
  }
  updateVh();
  window.addEventListener('resize', updateVh);
  window.addEventListener('orientationchange', function(){ setTimeout(updateVh, 250); });
})();

// ===== copy contract behavior with feedback =====
document.addEventListener('DOMContentLoaded', function(){
  const copyBtn = document.getElementById('copyBtn');
  const contractText = document.getElementById('contractText');

  if (!copyBtn || !contractText) return;

  copyBtn.addEventListener('click', async function(){
    const text = contractText.textContent.trim();
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      // badge feedback (create or update)
      let badge = document.querySelector('.copy-badge');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'copy-badge';
        copyBtn.parentNode.appendChild(badge);
      }
      badge.textContent = 'Copied ✓';
      badge.style.opacity = '1';
      copyBtn.textContent = 'COPIED';
      setTimeout(() => {
        badge.textContent = '';
        copyBtn.textContent = 'COPY';
      }, 1600);
    } catch (e) {
      alert('Copy failed — bitte manuell kopieren: ' + text);
    }
  });
});
