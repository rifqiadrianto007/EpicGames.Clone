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