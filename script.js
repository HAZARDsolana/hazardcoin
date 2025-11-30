// 100vh Fix für Mobile (wichtig bei ein-/ausblendender Adressleiste)
const setVh = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
};
setVh();
window.addEventListener('resize', setVh);

// Copy-Funktion für die Contract Address
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn   =<|eos|>
