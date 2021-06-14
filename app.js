'use strict';

function pluginSlide(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

    const clearActiveClasses = () => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    };

    slides.forEach((slide, index) => {
        slide.addEventListener('click', (e) => {
            clearActiveClasses();
            slide.classList.add('active');
            slide.classList.toggle('disabled');
        });
    });

    for (const slide of slides) {
        slide.addEventListener('click', (e) => {
            clearActiveClasses();
            slide.classList.add('active');
            slide.classList.add('disabled');
        });
    }
}

pluginSlide();

