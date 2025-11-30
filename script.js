// 100vh fix für Mobile
const setVh=()=>{document.documentElement.style.setProperty('--vh',window.innerHeight*.01+'px')};
setVh();window.addEventListener('resize',setVh);
