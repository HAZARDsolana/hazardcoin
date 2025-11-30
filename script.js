// Blood Rain
for(let i=0;i<40;i++){let d=document.createElement('div');d.className='drop';d.style.left=Math.random()*100+'vw';d.style.animationDuration=(6+Math.random()*10)+'s';d.style.animationDelay=Math.random()*5+'s';document.body.appendChild(d);}

// Ghost Skulls
setInterval(()=>{let g=document.createElement('img');g.src='images/skull.JPEG';g.onload=()=>console.log('Skull geladen');g.onerror=()=>console.log('Skull nicht gefunden');g.className='ghost';g.style.left=(Math.random()*40-10)+'%';g.style.animationDuration=(15+Math.random()*20)+'s';g.style.animationDelay=Math.random()*3+'s';document.body.appendChild(g);setTimeout(()=>g.remove(),40000);},3500);

// Mouse Trail
let trail=document.createElement('div');trail.id='trail';document.body.appendChild(trail);let smoke=document.createElement('div');smoke.id='smoketrail';document.body.appendChild(smoke);document.addEventListener('mousemove',e=>{trail.style.left=e.clientX+'px';trail.style.top=e.clientY+'px';smoke.style.left=e.clientX+'px';smoke.style.top=e.clientY+'px';});

// Copy CA
document.getElementById('copy-btn').onclick=()=>{navigator.clipboard.writeText(document.getElementById('ca-address').textContent);alert('CA kopiert!');};

// Hazard Wheel
const wheel=document.getElementById('wheel'),spinBtn=document.getElementById('spin-btn'),result=document.getElementById('wheel-result'),outcomes=["10x incoming","Rugpull dodged","Lambo in Hölle","Jeet verflucht","Dark Power HODL","Paperhands lachen","50/50 reich/pleite","Hazard grinst","Bag 100x't","Mehr kaufen","Skelettkönig nickt","DARK SIDE"];let spinning=false;spinBtn.addEventListener('click',()=>{if(spinning)return;spinning=true;const deg=(5+Math.random()*5)*360+Math.random()*360;wheel.style.transform=`rotate(${deg}deg)`;setTimeout(()=>{const index=Math.floor(deg/30)%12;result.textContent=outcomes[index];spinning=false;},5000);});
