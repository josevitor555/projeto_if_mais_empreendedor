document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('[role="group"][aria-roledescription="slide"]');
  const nextButton = document.querySelector('button[aria-label="Next slide"]');
  const prevButton = document.querySelector('button[aria-label="Previous slide"]');
  let currentSlideIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }

  function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  }

  setInterval(nextSlide, 5000);

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  showSlide(currentSlideIndex);
});
// Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')