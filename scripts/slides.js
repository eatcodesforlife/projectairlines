let businessClassSlide = document.querySelectorAll(".business-class-slide"),
  firstClassSlide = document.querySelectorAll(".first-class-slide"),
  arrowLeft = document.querySelectorAll(".prev"),
  arrowRight = document.querySelectorAll(".next"),
  current = 0;

//   reset: clear all images
function clearImages() {
  businessClassSlide.forEach(img => (img.style.display = "none"));
  firstClassSlide.forEach(img => (img.style.display = "none"));
}

// display first image or initialize
function startSlide() {
  clearImages();
  businessClassSlide[0].style.display = "block";
  firstClassSlide[0].style.display = "block";
}

// arrow left

arrowLeft.addEventListener("click", previous);
