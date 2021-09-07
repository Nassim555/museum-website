const prv = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  container = document.querySelector(".slider-container"),
  slides = document.querySelectorAll(".slide"),
  dot_container = document.querySelector(".dots"),
  toggle = document.querySelector(".nav-toggle"),
  navMenu = document.querySelector(".navbar"),
  links = document.querySelectorAll(".nav-item");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("open");
  navMenu.classList.toggle("open");
  console.log("clicked");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    toggle.classList.toggle("open");
    navMenu.classList.toggle("open");
  });
});
//counters and values
let currentSlide = 0;

// set the active nav dot by default and prevent the image draggin behavior
slides.forEach((slide, i) => {
  const dot = document.createElement("span");
  const img = slide.querySelector("img");
  img.addEventListener("dragstart", (e) => e.preventDefault());
  dot.className = "dot";
  dot_container.appendChild(dot);
  if (i == 0) return dot.classList.add("active");
});

//setslide by clicking nav dots
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, i) => {
  dot.addEventListener("click", setSlide(i));
});

//setSlides by dots function
function setSlide(i) {
  return function () {
    currentSlide = i;
    console.log(currentSlide);
    dots.forEach((dot, i) => {
      dots[i].classList.remove("active");
      dots[currentSlide].classList.add("active");
      slides[i].classList.remove("selected");
      slides[currentSlide].classList.add("selected");
    });
  };
}

//slider nav buttons events
prv.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

// previous and next slide functions
function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slides.length - 1;
  }
  slides.forEach((slide, i) => {
    slides[i].classList.remove("selected");
    slides[currentSlide].classList.add("selected");
    dots[i].classList.remove("active");
    dots[currentSlide].classList.add("active");
  });
}
function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  slides.forEach((slide, i) => {
    slides[i].classList.remove("selected");
    slides[currentSlide].classList.add("selected");
    dots[i].classList.remove("active");
    dots[currentSlide].classList.add("active");
  });
}
