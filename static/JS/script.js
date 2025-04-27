document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen container dan tombol
    const gameCardsContainer = document.querySelector('.game-cards-container');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    
    // Hitung jumlah pergeseran (lebar kartu + gap)
    const cardWidth = 220; // Lebar setiap kartu
    const cardGap = 20;    // Jarak antar kartu
    const scrollAmount = cardWidth + cardGap;
    
    // Tambahkan event listener untuk tombol sebelumnya
    prevButton.addEventListener('click', function() {
        gameCardsContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Tambahkan event listener untuk tombol selanjutnya
    nextButton.addEventListener('click', function() {
        gameCardsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});