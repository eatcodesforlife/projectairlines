let businessClassSlide = document.querySelectorAll(".business-class-slide"),
  firstClassSlide = document.querySelectorAll(".first-class-slide"),
  arrowLeftBusinessClass = document.querySelector(
    "#prev-button-business-class"
  ),
  arrowRightBusinessClass = document.querySelector(
    "#next-button-bussiness-class"
  ),
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

// business class buttons left
arrowLeftBusinessClass.addEventListener("click", previousBusinessClass);
arrowRightBusinessClass.addEventListener("click", nextBusinessclass);

function previousBusinessClass(e) {
  clearImages();

  if (current === 0) {
    current = businessClassSlide.length;
  }
  businessClassSlide[current - 1].style.display = "block";
  current--;
}

function nextBusinessclass(e) {
  clearImages();

  if (current === businessClassSlide.length - 1) {
    current = 0;
  }
  businessClassSlide[current + 1].style.display = "block";
  current++;
}

startSlide();
