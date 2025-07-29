document.addEventListener("DOMContentLoaded", function () {
    // --- Banner Slide Carousel ---
    const slides = document.querySelectorAll('.slides');
    const slidePrevBtn = document.querySelector('.slide-arrow.prev');
    const slideNextBtn = document.querySelector('.slide-arrow.next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    if (slidePrevBtn && slideNextBtn && slides.length > 0) {
        slidePrevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        slideNextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });

        showSlide(currentIndex); // Initialize banner
    }

    // --- Section22 Horizontal Scroll Carousel ---
    const section22Container = document.getElementById('section22-scroll');
    const section22PrevBtn = document.querySelector('.section22-prev');
    const section22NextBtn = document.querySelector('.section22-next');
    const scrollAmount = 300;

    if (section22Container && section22PrevBtn && section22NextBtn) {
        section22PrevBtn.addEventListener('click', () => {
            section22Container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        section22NextBtn.addEventListener('click', () => {
            section22Container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
});
