function toggleMenu() {
  var sideNav = document.querySelector(".side-nav");
  sideNav.classList.toggle("nav-open");
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document
    .getElementsByClassName("gallery-slide")[0]
    .getElementsByTagName("img");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";

  // Add active class to current dot
  dots[slideIndex - 1].classList.add("active");
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}
