// Scroll card
document.addEventListener('DOMContentLoaded', function() {
    const gameCardsContainer = document.querySelector('.game-cards-container');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const cardWidth = 220;
    const cardGap = 20; 
    const scrollAmount = cardWidth + cardGap;

    prevButton.addEventListener('click', function() {
        gameCardsContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    nextButton.addEventListener('click', function() {
        gameCardsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});

// Back to top
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.btn-back-to-top');
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});