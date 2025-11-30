// subtle parallax on mouse move for skull and glow
document.addEventListener('mousemove', function(e){
  const w = window.innerWidth/2, h = window.innerHeight/2;
  const dx = (e.clientX - w)/w, dy = (e.clientY - h)/h;
  const skull = document.querySelector('.skull');
  const glow = document.querySelector('.skull-glow');
  if(skull){
    // small translate for more natural movement
    skull.style.transform = `translateY(${ -10 + dy*6 }px)`;
  }
  if(glow){
    glow.style.transform = `translate(-50%,-50%) translate(${dx*10}px, ${dy*10}px)`;
  }
});
