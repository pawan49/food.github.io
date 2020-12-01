var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("food-card");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// mobile navigation
let navTrigger = document.querySelector('.nav-trigger')
let siteContentWrapper = document.querySelector('.site-content-wrapper')
navTrigger.addEventListener('click', function() {
    siteContentWrapper.classList.toggle('scaled')
})