let slides = document.querySelectorAll(".slide");
let track = document.querySelector(".slides");
let dotsContainer = document.querySelector(".dots");
let index = 0;

// crear puntitos
for (let i = 0; i < slides.length; i++) {
  let span = document.createElement("span");
  if (i == 0) {
    span.classList.add("active");
  }
  dotsContainer.appendChild(span);
}

let dots = document.querySelectorAll(".dots span");

function cambiarSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  track.style.transform = "translateX(-" + (index * 100) + "%)";
  
  // actualizar dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[index].classList.add("active");
}

setInterval(cambiarSlide, 4500);
