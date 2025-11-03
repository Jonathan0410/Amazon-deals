// JavaScript for animations and interactivity

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add slide-in animation to deal cards on scroll
function handleScroll() {
    const cards = document.querySelectorAll('.deal-card');
    cards.forEach(card => {
        if (isInViewport(card)) {
            card.style.animationDelay = '0s'; // Trigger animation
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Initial check on page load
document.addEventListener('DOMContentLoaded', () => {
    handleScroll(); // Trigger for any cards already in view
});