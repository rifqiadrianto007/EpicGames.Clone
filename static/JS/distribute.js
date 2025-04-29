document.addEventListener('DOMContentLoaded', function() {
    // Toggle FAQ items open/closed
    const faqItems = document.querySelectorAll('.faq-question');
    
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.parentElement;
            const isOpen = parent.classList.contains('faq-open');
            const toggle = this.querySelector('.faq-toggle');
            
            // Close all FAQ items first
            document.querySelectorAll('.faq-item').forEach(faq => {
                faq.classList.remove('faq-open');
                faq.querySelector('.faq-toggle').textContent = '+';
            });
            
            // If the clicked item wasn't open before, open it
            if (!isOpen) {
                parent.classList.add('faq-open');
                toggle.textContent = '—';
            }
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