let businessClassSlide = document.querySelectorAll(".business-class-slide"),
  firstClassSlide = document.querySelectorAll(".first-class-slide"),
  businessClassLeftArrow = document.querySelector("#prev-business-class"),
  businessClassRightArrow = document.querySelector("#next-bussiness-class"),
  firstClassLeftArrow = document.querySelector("#first-class-prev"),
  firstClassRightArrow = document.querySelector("#first-class-next"),
  current = 0;

// reset: clear images
function clearImageBusinessClass() {
  businessClassSlide.forEach(img => (img.style.display = "none"));
}
function clearImageFirstClass() {
  firstClassSlide.forEach(img => (img.style.display = "none"));
}

// start slide
function startSlideBusinessClass() {
  clearImageBusinessClass();
  businessClassSlide[0].style.display = "block";
}
function startSlideFirstClass() {
  clearImageFirstClass();
  firstClassSlide[0].style.display = "block";
}

// business class arrows
businessClassLeftArrow.addEventListener("click", businessClassPrev);
businessClassRightArrow.addEventListener("click", businessClassNext);

function businessClassPrev(e) {
  clearImageBusinessClass();
  if (current === 0) {
    current = businessClassSlide.length;
  }
  businessClassSlide[current - 1].style.display = "block";
  current--;
}

function businessClassNext(e) {
  clearImageBusinessClass();
  if (current === businessClassSlide.length - 1) {
    current = -1;
  }
  businessClassSlide[current + 1].style.display = "block";
  current++;
}

// first class arrows
firstClassLeftArrow.addEventListener("click", firstClassPrev);
firstClassRightArrow.addEventListener("click", firstClassNext);

function firstClassPrev(e) {
  clearImageFirstClass();
  if (current === 0) {
    current = firstClassSlide.length;
  }
  firstClassSlide[current - 1].style.display = "block";
  current--;
}

function firstClassNext(e) {
  clearImageFirstClass();
  if (current === firstClassSlide.length - 1) {
    current = -1;
  }
  firstClassSlide[current + 1].style.display = "block";
  current++;
}

startSlideBusinessClass();
startSlideFirstClass();
