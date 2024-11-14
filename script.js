// Create floating bubbles
function createBubbles() {
    const bubbleCount = 20;
    const hero = document.querySelector('.hero');

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const size = Math.random() * 100 + 20;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 5 + 5;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.animationDuration = `${animationDuration}s`;

        hero.appendChild(bubble);

        bubble.animate(
            [
                { transform: `translateY(${window.innerHeight}px)` },
                { transform: 'translateY(-100%)' }
            ],
            {
                duration: (Math.random() * 20000) + 15000,
                iterations: Infinity,
                delay: Math.random() * -20000
            }
        );
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize bubbles on page load
window.addEventListener('load', createBubbles);
