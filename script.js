// Blood Rain
for(let i=0;i<45;i++){
  let d=document.createElement('div');
  d.className='drop';
  d.style.left=Math.random()*100+'vw';
  d.style.animationDuration=(5+Math.random()*8)+'s';
  d.style.animationDelay=Math.random()*5+'s';
  document.body.appendChild(d);
}

// Ghost Skulls
setInterval(()=>{
  let g=document.createElement('img');
  g.src='images/skull.JPEG';
  g.className='ghost';
  g.style.left=(Math.random()*60-20)+'%';
  g.style.animationDuration=(14+Math.random()*16)+'s';
  document.body.appendChild(g);
  setTimeout(()=>g.remove(),45000);
},3000);

// Mouse Trail
const trail=document.createElement('div');trail.id='trail';document.body.appendChild(trail);
const smoke=document.createElement('div');smoke.id='smoketrail';document.body.appendChild(smoke);
document.addEventListener('mousemove',e=>{
  trail.style.left=e.clientX+'px';trail.style.top=e.clientY+'px';
  smoke.style.left=e.clientX+'px';smoke.style.top=e.clientY+'px';
});

// Copy CA
document.getElementById('copy-btn').onclick=()=>{
  navigator.clipboard.writeText(document.getElementById('ca-address').textContent);
  alert('CA kopiert!');
};

// Wheel
const wheel=document.getElementById('wheel');
const spinBtn=document.getElementById('spin-btn');
const result=document.getElementById('wheel-result');
const outcomes=[
  "10x incoming","Rugpull dodged","Lambo in der Hölle","Jeet = Verdammnis",
  "Dark Power HODL","Paperhands verbrennen","50/50 reich oder pleite",
  "Hazard grinst","Bag 100x't","Mehr kaufen","Skelettkönig nickt","WELCOME TO THE DARK SIDE"
];
let spinning=false;
spinBtn.addEventListener('click',()=>{
  if(spinning) return;
  spinning=true;
  const deg=(6+Math.floor(Math.random()*6))*360 + Math.random()*360;
  wheel.style.transform=`rotate(${deg}deg)`;
  setTimeout(()=>{
    const i=Math.floor((deg%360)/30)%12;
    result.textContent=outcomes[i];
    spinning=false;
  },5200);
});
