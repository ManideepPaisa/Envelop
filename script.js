document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');

    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });

    letter.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Add stars to the background
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        createStar(starsContainer);
    }
});

function createStar(container) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    const duration = Math.random() * 3 + 1;
    star.style.animation = `twinkle ${duration}s infinite`;
    
    container.appendChild(star);
}

// Add this CSS to your styles.css file
/*
.star {
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    pointer-events: none;
}
*/
