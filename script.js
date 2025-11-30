// Mobile 100vh fix
(function(){
  function setVh(){document.documentElement.style.setProperty('--vh',window.innerHeight*0.01+'px')}
  setVh();
  window.addEventListener('resize',setVh);
  window.addEventListener('orientationchange',()=>setTimeout(setVh,200));
})();
