document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');

    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });

    letter.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Add floating particles
    const container = document.querySelector('.container');
    for (let i = 0; i < 50; i++) {
        createParticle(container);
    }
});

function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    const duration = Math.random() * 20 + 10;
    particle.style.animation = `float ${duration}s linear infinite`;
    
    container.appendChild(particle);
}

// Add this CSS to your styles.css file
/*
.particle {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    pointer-events: none;
}

@keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(-100vh) rotate(360deg); }
}
*/
