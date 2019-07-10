
let imageSlides = document.querySelectorAll('.slides'),
    arrowLeft = document.querySelectorAll('.prev'),
    arrowRight = document.querySelectorAll('.next'),
    current = 0;


// reset images
function reset() {
    imageSlides.forEach(img => img.style.display = 'none')
}

// initialize slider
function initialize() {
    reset();
    imageSlides[0].style.display = 'block'
}

