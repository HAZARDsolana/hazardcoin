document.addEventListener('mousemove', (e) => {
    const skull = document.querySelector('.skull');
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;
    skull.style.transform = `translate(${x}px, ${y}px)`;
});
