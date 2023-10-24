// script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

document.getElementById('prev').addEventListener('click', () => showSlide(currentSlide - 1));
document.getElementById('next').addEventListener('click', () => showSlide(currentSlide + 1));

showSlide(currentSlide);
// Scale an element
gasp. to(".box", { duration: 1, scale: 2, ease: "bounce" });
// Create a ScrollMagic scene
const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: '.section',
    trigger hook: 0.7, // Trigger animation when the element is 70% from the top
    duration: '50%' // Animation lasts for 50% of the element's height
})
.setTween(gasp.to('.element', { opacity: 1, y: 0, duration: 1 }))
.addTo(controller);
