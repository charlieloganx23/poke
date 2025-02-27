document.getElementById('center-button').addEventListener('click', function() {
    let pokeball = document.getElementById('pokeball');
    let fireworks = document.getElementById('fireworks');
    let innerStructure = document.getElementById('inner-structure');
    
    pokeball.classList.toggle('open');
    
    if (pokeball.classList.contains('open')) {
        fireworks.innerHTML = '';
        innerStructure.style.display = 'flex';
        for (let i = 0; i < 5; i++) {
            let firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.position = 'absolute';
            firework.style.width = '10px';
            firework.style.height = '10px';
            firework.style.background = 'yellow';
            firework.style.borderRadius = '50%';
            firework.style.left = `${Math.random() * 100}%`;
            firework.style.top = `${Math.random() * 100}%`;
            firework.style.animation = 'fireworks 1s ease-out';
            
            fireworks.appendChild(firework);
        }
        setTimeout(() => {
            fireworks.innerHTML = '';
        }, 1000);
    } else {
        innerStructure.style.display = 'none';
    }
});