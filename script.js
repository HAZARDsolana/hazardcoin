// Blood Rain
for(let i = 0; i < 48; i++) {
    let drop = document.createElement('div');
    drop.className = 'drop';
    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.animationDuration = (6 + Math.random() * 8) + 's';
    drop.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(drop);
}

// Ghost Skulls
setInterval(() => {
    let ghost = document.createElement('img');
    ghost.src = 'images/skull.JPEG';
    ghost.className = 'ghost';
    ghost.style.left = (Math.random() * 60 - 20) + '%';
    ghost.style.animationDuration = (14 + Math.random() * 16) + 's';
    document.body.appendChild(ghost);
    setTimeout(() => ghost.remove(), 45000);
}, 3000);

// Mouse Trail
const trail = document.createElement('div');
trail.id = 'trail';
document.body.appendChild(trail);
const smoke = document.createElement('div');
smoke.id = 'smoketrail';
document.body.appendChild(smoke);

document.addEventListener('mousemove', e => {
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    smoke.style.left = e.clientX + 'px';
    smoke.style.top = e.clientY + 'px';
});

// Hazard Wheel
const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const result = document.getElementById('wheel-result');

const outcomes = [
    "10x incoming – das Schicksal liebt dich",
    "Rugpull dodged – du bist schneller als der Teufel",
    "Lambo in der Hölle gewonnen",
    "Jeet = ewige Verdammnis",
    "Dark Power fließt durch dich",
    "Paperhands werden verbrannt",
    "50/50 – reich oder pleite",
    "Hazard grinst dich an",
    "Frau weg, Bag 100x",
    "Weniger reden, mehr kaufen",
    "Skelettkönig nickt",
    "WELCOME TO THE DARK SIDE"
];

spinBtn.addEventListener('click', () => {
    if (wheel.style.transition === 'transform 0s') return;
    wheel.style.transition = 'transform 0s';
    wheel.style.transform = 'rotate(0deg)';
    
    setTimeout(() => {
        const spins = 6 + Math.floor(Math.random() * 6);
        const deg = spins * 360 + Math.floor(Math.random() * 360);
        wheel.style.transition = 'transform 5s cubic-bezier(0.17,0.67,0.33,1)';
        wheel.style.transform = `rotate(${deg}deg)`;
        
        setTimeout(() => {
            const index = Math.floor(((deg % 360) / 360) * 12);
            result.textContent = outcomes[index];
        }, 5200);
    }, 100);
});

// Copy CA
document.getElementById('copy-btn').onclick = () => {
    navigator.clipboard.writeText(document.getElementById('ca-address').textContent);
    alert('Contract Address kopiert!');
};
