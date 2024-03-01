let slideIndex = 0; // Start with the first image

// Function to move to the next or previous slide
function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-images img');
  slideIndex += step;

  if (slideIndex >= slides.length) {
    slideIndex = 0; // Loop back to the first image
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1; // Loop back to the last image
  }

  // Remove 'active' class from all images and only add to the current
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
}

// Initialize the carousel by displaying the first image
document.addEventListener('DOMContentLoaded', () => {
  moveSlide(0);
});
