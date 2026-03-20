document.addEventListener("DOMContentLoaded", () => {
    // Select all elements to animate
    const elementsToAnimate = document.querySelectorAll('.fade-in');

    // Staggered entrance animation
    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, 80 * index); // 80ms delay between each element's animation
    });

    // Optional: Add a subtle haptic feedback or ripple effect on touch for mobile users
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach(card => {
        card.addEventListener('touchstart', function () {
            this.style.transform = 'scale(0.98)';
        }, { passive: true });

        card.addEventListener('touchend', function () {
            this.style.transform = 'translateY(-2px) scale(1)';
        }, { passive: true });

        card.addEventListener('touchcancel', function () {
            this.style.transform = 'translateY(0) scale(1)';
        }, { passive: true });
    });
});
