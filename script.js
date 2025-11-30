// ===== viewport fix for mobile =====
(function setVh() {
  function updateVh() {
    document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
  }
  updateVh();
  window.addEventListener('resize', updateVh);
  window.addEventListener('orientationchange', function() { setTimeout(updateVh, 250); });
})();

// ===== Optional: Trigger für Fade-In (falls JS benötigt) =====
document.addEventListener('DOMContentLoaded', function() {
  // Alles lädt mit CSS-Animationen – kein Copy mehr, da keine Box
  console.log('HAZZARD loaded – danger awaits...');
});
