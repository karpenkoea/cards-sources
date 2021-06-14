'use strict';

function pluginSlide(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
            slide.classList.remove('white');
        });

    }

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('active');
        });

        
    }

    for (const slide of slides) {
        slide.addEventListener('mouseover', () => {
            slide.classList.add('white');
        });
        slide.addEventListener('mouseleave', () => {
            slide.classList.remove('white');
        });
    }
}

pluginSlide();

